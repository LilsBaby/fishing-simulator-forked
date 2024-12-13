export default class PlayerEntity {
    private player: Player | undefined

    constructor() {
        
    }

    public getEntity(): Player | undefined {
        return this.player
    }
}