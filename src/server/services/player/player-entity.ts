export default class PlayerEntity {
    private player: Player

    constructor(player: Player) {
        this.player = player
    }

    public getEntity(): Player {
        return this.player
    }
}