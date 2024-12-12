import { Service, OnStart, OnInit } from "@flamework/core";

@Service({})
export class FishingService implements OnStart, OnInit {
    onStart() {
        
    }

    onInit(): void | Promise<void> {
        
    }

    public giveRod(playerEntity) {}
}