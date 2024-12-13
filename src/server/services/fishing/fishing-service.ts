

import PlayerEntity from "../player/player-entity";
import { useEvent, useHookState } from "@rbxts/matter";
import { Service, OnStart, OnInit } from "@flamework/core";
import { Conditioner } from "shared/utils/conditioner";
import { Timer } from "@rbxts/timer";
import { Events } from "server/network";
import { Players, ReplicatedStorage } from "@rbxts/services";
import Tree from "shared/packages/tree";

const Player = Players.LocalPlayer
const character = Player.Character || Player.CharacterAdded.Wait()[0];

const fishingPool = Tree.Find(ReplicatedStorage, "Fishing-Pool") as Part;
const poolRadius = 15;
const fishingRange = 30;
const fishingEvent = ReplicatedStorage.WaitForChild("FishingEvent") as RemoteEvent;

const b = new Map<Player, PlayerEntity>();

@Service({})
export class FishingService implements OnStart, OnInit {
	/**
	 * A private validator to manages given parameteres in cases when they are null.
     * @private
	 */
	private readonly validator: Conditioner.ConditionValidator;

	/**
	 * Maximum fishiog time per interval
     * @private
	 */
	private readonly fishingInterval: number;

	/**
	 * Timer for managing fishing interval
     * @private
	 */
	private readonly fishingIntervalTimer: Timer;

	/** @ignore */
	constructor() {
		this.fishingInterval = 10;
		this.fishingIntervalTimer = new Timer(this.fishingInterval);

		this.validator = new Conditioner.ConditionValidator();
	}

	onStart() {
        function addEventListener<T extends Callback>(event: RBXScriptSignal<T>, listener: T): RBXScriptConnection {
            return event.Connect(listener);
        }

        addEventListener(Players.PlayerAdded, (player) => {
            player.CharacterAdded.Connect((character) => {
                const humanoidRootPart = character.WaitForChild("HumanoidRootPart") as Part;
                const entity = b.get(player) as PlayerEntity
                this.grantFishingRodToPlayer(entity);
            })
        })
    }
	onInit(): void | Promise<void> {
        function isInPool(position: Vector3): boolean {
            const fishingPosition: Vector3 = fishingPool.Position;
            const center = (position.sub(fishingPosition)).Magnitude;
            return center <= poolRadius;
        }
        fishingEvent.OnServerEvent.Connect(() => {
            Player.SetAttribute("Fishing", 0)
        });
        
        
    }

	private getFishByChance() {
        const fishRarity = new Random().NextInteger(2, 4);
        let rarityType: string;
        switch(fishRarity) {
            case 2:
                return "Uncommon";
                break;
            case 3:
                return "Rare";
                break;
            case 4:
                return "Epic";
                break;
            default:
                return "Common";
                break;
        }
        return rarityType;
    }

    private setFishCooldown() {
        return;
    }

	public grantFishingRodToPlayer(playerEntity: PlayerEntity): void {
		const player = this.validator.checkForNullable("Failed to get player", playerEntity.getEntity());
        
	}

	public getFishingIntervalPercentage(timer: Timer): number {
		return (this.getCurrentFishingIntervalTime(timer) / this.fishingInterval) * 100;
	}

	public getCurrentFishingIntervalTime(timer: Timer): number {
		return timer.getTimeLeft();
	}

	public getFishingIntervalTime(): number {
		return this.fishingInterval;
	}
}
