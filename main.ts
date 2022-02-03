let plr = new Sprite(assets.image`player`);
let ang = new Angle();
tiles.setTilemap(tilemap`level1`);
scene.cameraFollowSprite(plr);
tiles.placeOnRandomTile(plr, assets.tile`spawn`);

// Image initialization
let render = image.create(160, 120);
render.fill(15);
let renderS = new Sprite(render);
renderS.setFlag(SpriteFlag.Ghost, true);
renderS.setFlag(SpriteFlag.RelativeToCamera, true);
renderS.setPosition(160/2, 120/2);

// Raycast
game.splash("casting...");
let ray = new Ray(ang, plr.x, plr.y);
let castResults = ray.cast();
console.log(
    plr.x
    + ", "
    + plr.y
);
console.log(
    castResults.x
    + ", "
    + castResults.y
);