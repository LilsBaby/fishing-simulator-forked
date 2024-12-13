import Log from "@rbxts/log";
import React, { useState } from "@rbxts/react";

interface NametagProps {
	player: Player;
}

export function Nametag({ player }: NametagProps) {
	return (
		<textlabel
			Text={`${player.Name}`}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Size={new UDim2(0, 100, 0, 50)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			/**
             * Event={{
				Activated: () => Log.Info("Activated"),
			}}
             */
		/>
	);
}
