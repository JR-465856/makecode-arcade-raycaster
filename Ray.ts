class Ray {
    private ang: Angle;
    public x: number;
    public y: number;
    private intx: number;
    private inty: number;
    constructor(newang: Angle, newx: number, newy: number) {
        this.ang = newang;
        this.x = newx;
        this.y = newy;
    }

    getAng() {
        return this.ang;
    }
    setAng(newang: Angle, newx: number, newy: number) {
        this.ang = newang;
        this.x = newx;
        this.y = newy;
    }

    // Cast a ray and return an object
    // with a position, in format
    // {x: number, y: number}
    cast() {
        // Find rx and ry
        const rx = Math.sin(this.ang.getRad());
        const ry = Math.cos(this.ang.getRad());
        // Normalize vectors
        const magnitude = Math.sqrt(rx^2 + ry^2);
        const nx = rx / magnitude;
        const ny = ry / magnitude;
        const vx = nx * 9999999;
        const vy = ny * 9999999;
        // Ray sprite
        let rayKind = SpriteKind.create();
        let spr = sprites.create(assets.image`ray`, rayKind);
        spr.setPosition(this.x, this.y);
        spr.setFlag(SpriteFlag.Invisible, true);
        spr.setFlag(SpriteFlag.DestroyOnWall, true);
        spr.setVelocity(vx, vy);
        // Wait for result
        let hit = false;
        let fx: number;
        let fy: number;
        let tl: tiles.Location;
        // Handler
        scene.onHitWall(rayKind, function(sprite: Sprite, location: tiles.Location) {
            fx = spr.x;
            fy = spr.y;
            hit = true;
            sprite.destroy();
        });
        while (!hit) {
            pause(5);
        }
        // Return result
        return {
            x: fx,
            y: fy,
            tileLocation: tl
        };
    }
}