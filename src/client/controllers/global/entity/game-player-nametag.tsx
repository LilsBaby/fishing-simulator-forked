import { Controller, OnInit, OnStart } from "@flamework/core";
import { Logger } from "@rbxts/log";
import React, { StrictMode } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import Remotes from "shared/events";
import { playerData } from "types/interface/default-data";
import { Nametag } from "client/controllers/interface/world/player-nametag";

const remotes = Remotes.Client.GetNamespace("Player");
const player = Players.LocalPlayer;
const character = player.Character || player.CharacterAdded.Wait()[0];

@Controller({ loadOrder: -1 })
export class PlayerNametagController implements OnStart {
	constructor(private readonly logger: Logger) {}

	onStart(): void {
		//get player data

		task.wait(5);
		remotes
			.Get("GetPlayerData")
			.CallServerAsync()
			.then(async (data) => {
				if (data !== undefined) {
					this.setUpNameTagForPlayer(data);
				}
			})
			.catch((err) => this.logger.Error(`Failed to fetch player's data: ${err}`));
	}
	OnInit(): void | Promise<void> {}

	private setUpNameTagForPlayer({ level }: playerData): void {
		try {
			const root = createRoot(new Instance("Folder"));
			const target = player.WaitForChild("PlayerGui");

			root.render(<StrictMode>{createPortal(<Nametag player={player} />, target)}</StrictMode>);
			this.logger.Info(`Setting up nametag for: ${player.GetFullName()}`);
		} catch (err) {
			this.logger.Error(``);
		}
	}
	private removeNameTag(): void {}
}
