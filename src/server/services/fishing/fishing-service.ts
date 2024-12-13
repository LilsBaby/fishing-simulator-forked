import { Service, OnStart, OnInit } from "@flamework/core";
import { Players } from "@rbxts/services";

@Service({})
export class FishingService implements OnStart, OnInit {
	onStart() {}

	onInit(): void | Promise<void> {}

	public giveRod(playerEntity: PlayerEntity) {}
}
