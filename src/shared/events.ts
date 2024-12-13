import { Document } from "@rbxts/lapis";
import { BroadcastAction, CombineStates } from "@rbxts/reflex";
import Net, { Definitions, Middleware } from "@rbxts/net";
import { playerData } from "types/interface/default-data";

const Remotes = Net.CreateDefinitions({
	Start: Definitions.ClientToServerEvent<[player: Player]>(),

	Dispatch: Definitions.ServerToClientEvent<[actions: BroadcastAction]>(),
	Hydrate: Definitions.ServerToClientEvent<[states: CombineStates<{}>]>(),

	Player: Definitions.Namespace({
		GetPlayerData: Definitions.ServerAsyncFunction<() => playerData | undefined>([
			Middleware.RateLimit({
				MaxRequestsPerMinute: 1,
			}),
		]),
	}),
});

export = Remotes;
