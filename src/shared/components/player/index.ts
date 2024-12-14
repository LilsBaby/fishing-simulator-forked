import { playerData } from "types/interface/default-data";
import { Document } from "@rbxts/lapis";
import { AnyEntity, component } from "@rbxts/matter";

export const User = component<{
    player: Player;
}>("Player");
export type User = ReturnType<typeof User>;

export const Data = component<{
    key?: string,
    document?: Document<playerData>
    collection?: Readonly<playerData>
}>("Data");
export type Data = ReturnType<typeof Data>;

export const Rig = component<{
    Body: Model,
}>("Rig")
export type Rig = ReturnType<typeof Rig>;
