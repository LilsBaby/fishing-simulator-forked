import { Children, New } from "@rbxts/fusion";

export = () => {
	return New("Frame")({
		Name: "FishingProgressBar",
		AnchorPoint: new Vector2(0.5, 0.5),
		/** white */
        BackgroundTransparency: 0,
		BackgroundColor3: Color3.fromRGB(255, 255, 244),
		Size: UDim2.fromScale(0.5, 0.5),

		[Children]: [
            

			New("UICorner")({
				CornerRadius: new UDim(0, 0.5),
			}),

			New("UIListLayout")({
				HorizontalAlignment: Enum.HorizontalAlignment.Center,
				VerticalAlignment: Enum.VerticalAlignment.Center,
			}),

			New("UIPadding")({
				PaddingTop: new UDim(0.5, 0),
			}),
		],
	});
};
