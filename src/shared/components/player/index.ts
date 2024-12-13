import { playerData } from "types/interface/default-data";
import { Document } from "@rbxts/lapis";
import { AnyEntity, component } from "@rbxts/matter";

export const User = component<{
    player: Player;
}>("Player");
export type User = ReturnType<typeof User>;