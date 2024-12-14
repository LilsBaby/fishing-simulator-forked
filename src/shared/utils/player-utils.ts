import { KickReason } from "types/enum/remove";
import { AnyEntity, World } from "@rbxts/matter";
import { Rig } from "shared/components/player";
import { User } from "shared/components/player";
import { Players } from "@rbxts/services";
import { t } from "@rbxts/t"

export function softKickPlayers(players: Player, reason: KickReason): void;
export function softKickPlayers(players: Player[] | Player, reason: KickReason): void {
    if(t.table(players)) {
        (players as Player[]).forEach((player) => {
            player.Kick(`You have been kicked for : ${KickReason.PlayerProfileUndefined}`)
        
        })
    } else if (t.Instance(players)) {
        (players as Player).Kick(`You have been kicked for: ${KickReason.PlayerProfileUndefined}`)
    }
}

export async function waitForNumberOfPlayers(num: number, timeout = 10) {
    return new Promise<void>((resolve, reject) => {
        Promise.delay(timeout).then(() => {
            
        })
        })
}