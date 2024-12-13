import { Service, OnStart, OnInit } from "@flamework/core";
<<<<<<< HEAD
import { Players } from "@rbxts/services";

@Service({})
export class FishingService implements OnStart, OnInit {
	onStart() {}

	onInit(): void | Promise<void> {}

	public giveRod(playerEntity: PlayerEntity) {}
=======
import PlayerEntity from "../player/player-entity";
import { Conditioner } from "shared/utils/conditioner";
import { Timer } from "@rbxts/timer";
import { Events } from "server/network";

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
		this.fishingInterval = 5;
		this.fishingIntervalTimer = new Timer(this.fishingInterval);

		this.validator = new Conditioner.ConditionValidator();
	}

	onStart() {}
	onInit(): void | Promise<void> {}

	private getFishByChance() {}

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
>>>>>>> 023cc70605f19123ff5b5935ff0efbb0a300254c
}
