const p = "images/image prompts/"; //image path
const i = {
    //iamges
    baby: p + "baby.jpg",
    balloon: p + "balloon.jpg",
    banana: p + "banana.jpg",
    basket: p + "basket.jpg",
    bicycle: p + "bicycle.jpg",
    bird: p + "bird.jpg",
    boat: p + "boat.jpg",
    bowl: p + "bowl.jpg",
    bread: p + "bread.jpg",
    burger: p + "burger.jpg",
    cake: p + "cake.jpg",
    camel: p + "camel.jpg",
    candle: p + "candle.jpg",
    car: p + "car.jpg",
    carrot: p + "carrot.jpg",
    cat: p + "cat.jpg",
    cloud: p + "cloud.jpg",
    coffee: p + "coffee.jpg",
    cookie: p + "cookie.jpg",
    crayon: p + "crayon.jpg",
    dice: p + "dice.jpg",
    dinosaur: p + "dinosaur.jpg",
    doctor: p + "doctor.jpg",
    dog: p + "dog.jpg",
    dolphin: p + "dolphin.jpg",
    donkey: p + "donkey.jpg",
    donut: p + "donut.jpg",
    door: p + "door.jpg",
    drums: p + "drums.jpg",
    duck: p + "duck.jpg",
    feather: p + "feather.jpg",
    feet: p + "feet.jpg",
    fire: p + "fire.jpg",
    fish: p + "fish.jpg",
    flag: p + "flag.jpg",
    flamingo: p + "flamingo.jpg",
    flower: p + "flower.jpg",
    fork: p + "fork.jpg",
    fox: p + "fox.jpg",
    frog: p + "frog.jpg",
    giraffe: p + "giraffe.jpg",
    girl: p + "girl.jpg",
    glasses: p + "glasses.jpg",
    goat: p + "goat.jpg",
    goldfish: p + "goldfish.jpg",
    gong: p + "gong.jpg",
    gorilla: p + "gorilla.jpg",
    grapes: p + "grapes.jpg",
    grass: p + "grass.jpg",
    guitar: p + "guitar.jpg",
    hair: p + "hair.jpg",
    hammer: p + "hammer.jpg",
    hand: p + "hand.jpg",
    harp: p + "harp.jpg",
    hat: p + "hat.jpg",
    hedgehog: p + "hedgehog.jpg",
    helicopter: p + "helicopter.jpg",
    hippo: p + "hippo.jpg",
    horse: p + "horse.jpg",
    house: p + "house.jpg",
    ladder: p + "ladder.jpg",
    ladybug: p + "ladybug.jpg",
    lantern: p + "lantern.jpg",
    lavender: p + "lavender.jpg",
    leaf: p + "leaf.jpg",
    lemon: p + "lemon.jpg",
    leopard: p + "leopard.jpg",
    lime: p + "lime.jpg",
    lizard: p + "lizard.jpg",
    lychee: p + "lychee.jpg",
    marshmallow: p + "marshmallow.jpg",
    massage: p + "massage.jpg",
    match: p + "match.jpg",
    meerkat: p + "meerkat.jpg",
    microwave: p + "microwave.jpg",
    milk: p + "milk.jpg",
    money: p + "money.jpg",
    monkey: p + "monkey.jpg",
    mouse: p + "mouse.jpg",
    mushroom: p + "mushroom.jpg",
    paint: p + "paint.jpg",
    pelican: p + "pelican.jpg",
    pen: p + "pen.jpg",
    pencil: p + "pencil.jpg",
    penguin: p + "penguin.jpg",
    pigeon: p + "pigeon.jpg",
    pineapple: p + "pineapple.jpg",
    pizza: p + "pizza.jpg",
    plant: p + "plant.jpg",
    popcorn: p + "popcorn.jpg",
    shadow: p + "shadow.jpg",
    shark: p + "shark.jpg",
    sheep: p + "sheep.jpg",
    sheep2: p + "sheep2.jpg",
    shells: p + "shells.jpg",
    ship: p + "ship.jpg",
    shoe: p + "shoe.jpg",
    shoes: p + "shoes.jpg",
    shovel: p + "shovel.jpg",
    shower: p + "shower.jpg",
    tea: p + "tea.jpg",
    television: p + "television.jpg",
    tent: p + "tent.jpg",
    tiger: p + "tiger.jpg",
    toaster: p + "toaster.jpg",
    tomato: p + "tomato.jpg",
    train: p + "train.jpg",
    tree: p + "tree.jpg",
    turtle: p + "turtle.jpg",
    typewriter: p + "typewriter.jpg",
    vacuum: p + "vacuum.jpg",
    van: p + "van.jpg",
    vase: p + "vase.jpg",
    vegebles: p + "vegebles.jpg",
    vet: p + "vet.jpg",
    vine: p + "vine.jpg",
    violin: p + "violin.jpg",
    volcano: p + "volcano.jpg",
    volleyball: p + "volleyball.jpg",
    vulture: p + "vulture.jpg",
    waffle: p + "waffle.jpg",
    wallet: p + "wallet.jpg",
    walrus: p + "walrus.jpg",
    watch: p + "watch.jpg",
    water: p + "water.jpg",
    watermelon: p + "watermelon.jpg",
    whale: p + "whale.jpg",
    wheat: p + "wheat.jpg",
    window: p + "window.jpg",
    wolf: p + "wolf.jpg",
};

class Question {
    constructor(text, soundfile, correctimage, redherrings) {
        this.text = text;
        this.soundfile = soundfile;
        this.correctimage = correctimage;
        this.prompts = redherrings;
        this.prompts.push(correctimage);
    }
}

class SWQ extends Question {
    //Starts with question
    constructor(soundfile, correctimage, redherrings) {
        super(
            "Please click the image that starts with this sound:",
            soundfile,
            correctimage,
            redherrings
        );
    }
}

const q = {
    //questions
    b_0: new SWQ("", i.baby, [i.cookie, i.pelican, i.van]),
    b_1: new SWQ("", i.balloon, [i.tent, i.goat, i.car]),
    b_2: new SWQ("", i.banana, [i.sheep, i.gong, i.pizza]),
    b_3: new SWQ("", i.basket, [i.shoe, i.horse, i.toaster]),
    b_4: new SWQ("", i.bicycle, [i.leopard, i.hippo, i.typewriter]),
    b_5: new SWQ("", i.bird, [i.guitar, i.monkey, i.television]),
    b_6: new SWQ("", i.boat, [i.shells, i.gorilla, i.giraffe]),
    b_7: new SWQ("", i.bowl, [i.hair, i.donut, i.crayon]),
    b_8: new SWQ("", i.bread, [i.whale, i.frog, i.volcano]),
    b_9: new SWQ("", i.burger, [i.watermelon, i.popcorn, i.shoe]),
    c_0: new SWQ("", i.cake, [i.gorilla, i.hippo, i.goldfish]),
    c_1: new SWQ("", i.camel, [i.bicycle, i.fox, i.hammer]),
    c_2: new SWQ("", i.candle, [i.lantern, i.pen, i.hammer]),
    c_3: new SWQ("", i.car, [i.basket, i.leopard, i.baby]),
    c_4: new SWQ("", i.carrot, [i.lavender, i.shells, i.flower]),
    c_5: new SWQ("", i.cat, [i.fox, i.water, i.walrus]),
    c_6: new SWQ("", i.cloud, [i.feet, i.pizza, i.massage]),
    c_7: new SWQ("", i.coffee, [i.guitar, i.horse, i.hippo]),
    c_8: new SWQ("", i.cookie, [i.whale, i.whale, i.door]),
    c_9: new SWQ("", i.crayon, [i.ship, i.shoes, i.banana]),
    d_0: new SWQ("", i.dice, [i.baby, i.toaster, i.watermelon]),
    d_1: new SWQ("", i.dinosaur, [i.flag, i.violin, i.hedgehog]),
    d_2: new SWQ("", i.doctor, [i.helicopter, i.cookie, i.shoe]),
    d_3: new SWQ("", i.dog, [i.shark, i.basket, i.mushroom]),
    d_4: new SWQ("", i.dolphin, [i.shadow, i.hedgehog, i.hippo]),
    d_5: new SWQ("", i.donkey, [i.fish, i.cat, i.baby]),
    d_6: new SWQ("", i.donut, [i.hat, i.water, i.balloon]),
    d_7: new SWQ("", i.door, [i.mushroom, i.house, i.camel]),
    d_8: new SWQ("", i.drums, [i.grapes, i.hippo, i.hippo]),
    d_9: new SWQ("", i.duck, [i.lychee, i.glasses, i.shoes]),
    f_0: new SWQ("", i.feather, [i.monkey, i.watermelon, i.pelican]),
    f_1: new SWQ("", i.feet, [i.shells, i.mushroom, i.ladder]),
    f_2: new SWQ("", i.fire, [i.penguin, i.pigeon, i.pigeon]),
    f_3: new SWQ("", i.fish, [i.door, i.mouse, i.vulture]),
    f_4: new SWQ("", i.flag, [i.bicycle, i.donkey, i.banana]),
    f_5: new SWQ("", i.flamingo, [i.vine, i.shoes, i.vase]),
    f_6: new SWQ("", i.flower, [i.dinosaur, i.mushroom, i.coffee]),
    f_7: new SWQ("", i.fork, [i.wallet, i.sheep, i.baby]),
    f_8: new SWQ("", i.fox, [i.dice, i.duck, i.bowl]),
    f_9: new SWQ("", i.frog, [i.hippo, i.monkey, i.plant]),
    g_0: new SWQ("", i.giraffe, [i.volcano, i.bird, i.water]),
    g_1: new SWQ("", i.girl, [i.lychee, i.lantern, i.mushroom]),
    g_2: new SWQ("", i.glasses, [i.sheep, i.window, i.shadow]),
    g_3: new SWQ("", i.goat, [i.sheep, i.bowl, i.vine]),
    g_4: new SWQ("", i.goldfish, [i.toaster, i.ladybug, i.lemon]),
    g_5: new SWQ("", i.gong, [i.basket, i.harp, i.fork]),
    g_6: new SWQ("", i.gorilla, [i.bicycle, i.marshmallow, i.meerkat]),
    g_7: new SWQ("", i.grapes, [i.lime, i.vegebles, i.flamingo]),
    g_8: new SWQ("", i.grass, [i.ladybug, i.shells, i.cookie]),
    g_9: new SWQ("", i.guitar, [i.plant, i.monkey, i.paint]),
    h_0: new SWQ("", i.hair, [i.doctor, i.flower, i.glasses]),
    h_1: new SWQ("", i.hammer, [i.volleyball, i.shoe, i.turtle]),
    h_2: new SWQ("", i.hand, [i.dog, i.flamingo, i.violin]),
    h_3: new SWQ("", i.harp, [i.shoe, i.leopard, i.volcano]),
    h_4: new SWQ("", i.hat, [i.lime, i.goldfish, i.leaf]),
    h_5: new SWQ("", i.hedgehog, [i.banana, i.vase, i.vase]),
    h_6: new SWQ("", i.helicopter, [i.paint, i.goldfish, i.grass]),
    h_7: new SWQ("", i.hippo, [i.pineapple, i.flamingo, i.watch]),
    h_8: new SWQ("", i.horse, [i.train, i.banana, i.sheep]),
    h_9: new SWQ("", i.house, [i.television, i.pencil, i.ship]),
    l_0: new SWQ("", i.ladder, [i.feet, i.train, i.drums]),
    l_1: new SWQ("", i.ladybug, [i.water, i.toaster, i.whale]),
    l_2: new SWQ("", i.lantern, [i.turtle, i.grapes, i.wolf]),
    l_3: new SWQ("", i.lavender, [i.typewriter, i.bicycle, i.van]),
    l_4: new SWQ("", i.leaf, [i.shoe, i.shells, i.donkey]),
    l_5: new SWQ("", i.lemon, [i.goldfish, i.candle, i.sheep]),
    l_6: new SWQ("", i.leopard, [i.bowl, i.pelican, i.goldfish]),
    l_7: new SWQ("", i.lime, [i.microwave, i.shovel, i.cat]),
    l_8: new SWQ("", i.lizard, [i.money, i.gorilla, i.hat]),
    l_9: new SWQ("", i.lychee, [i.hippo, i.vegebles, i.basket]),
    m_0: new SWQ("", i.marshmallow, [i.car, i.violin, i.horse]),
    m_1: new SWQ("", i.massage, [i.lavender, i.carrot, i.flamingo]),
    m_2: new SWQ("", i.match, [i.duck, i.fox, i.lime]),
    m_3: new SWQ("", i.meerkat, [i.pen, i.giraffe, i.lizard]),
    m_4: new SWQ("", i.microwave, [i.dinosaur, i.pencil, i.dog]),
    m_5: new SWQ("", i.milk, [i.tiger, i.glasses, i.ladybug]),
    m_6: new SWQ("", i.money, [i.cookie, i.glasses, i.pizza]),
    m_7: new SWQ("", i.monkey, [i.tea, i.popcorn, i.pelican]),
    m_8: new SWQ("", i.mouse, [i.cake, i.tree, i.waffle]),
    m_9: new SWQ("", i.mushroom, [i.door, i.camel, i.ship]),
    p_0: new SWQ("", i.paint, [i.burger, i.walrus, i.shark]),
    p_1: new SWQ("", i.pelican, [i.harp, i.cookie, i.guitar]),
    p_2: new SWQ("", i.pen, [i.typewriter, i.dog, i.fork]),
    p_3: new SWQ("", i.pencil, [i.balloon, i.flower, i.bicycle]),
    p_4: new SWQ("", i.penguin, [i.door, i.hippo, i.massage]),
    p_5: new SWQ("", i.pigeon, [i.typewriter, i.hair, i.tea]),
    p_6: new SWQ("", i.pineapple, [i.duck, i.leopard, i.ladybug]),
    p_7: new SWQ("", i.pizza, [i.van, i.dog, i.helicopter]),
    p_8: new SWQ("", i.plant, [i.van, i.turtle, i.lizard]),
    p_9: new SWQ("", i.popcorn, [i.walrus, i.mushroom, i.typewriter]),
    sh_0: new SWQ("", i.shadow, [i.goat, i.giraffe, i.waffle]),
    sh_1: new SWQ("", i.shark, [i.money, i.boat, i.lychee]),
    sh_2: new SWQ("", i.sheep, [i.feather, i.duck, i.popcorn]),
    sh_3: new SWQ("", i.sheep2, [i.feet, i.wolf, i.monkey]),
    sh_4: new SWQ("", i.shells, [i.cloud, i.cookie, i.crayon]),
    sh_5: new SWQ("", i.ship, [i.dog, i.crayon, i.horse]),
    sh_6: new SWQ("", i.shoe, [i.lantern, i.vegebles, i.penguin]),
    sh_7: new SWQ("", i.shoes, [i.grapes, i.leopard, i.pineapple]),
    sh_8: new SWQ("", i.shovel, [i.fork, i.turtle, i.massage]),
    sh_9: new SWQ("", i.shower, [i.drums, i.vase, i.paint]),
    t_0: new SWQ("", i.tea, [i.house, i.plant, i.shadow]),
    t_1: new SWQ("", i.television, [i.watch, i.pizza, i.van]),
    t_2: new SWQ("", i.tent, [i.basket, i.waffle, i.house]),
    t_3: new SWQ("", i.tiger, [i.pigeon, i.pelican, i.violin]),
    t_4: new SWQ("", i.toaster, [i.duck, i.lychee, i.monkey]),
    t_5: new SWQ("", i.tomato, [i.hat, i.gong, i.drums]),
    t_6: new SWQ("", i.train, [i.lime, i.lime, i.donut]),
    t_7: new SWQ("", i.tree, [i.pigeon, i.microwave, i.water]),
    t_8: new SWQ("", i.turtle, [i.pen, i.vulture, i.van]),
    t_9: new SWQ("", i.typewriter, [i.bird, i.door, i.microwave]),
    v_0: new SWQ("", i.vacuum, [i.boat, i.bicycle, i.train]),
    v_1: new SWQ("", i.van, [i.hair, i.pelican, i.shower]),
    v_2: new SWQ("", i.vase, [i.water, i.fork, i.tomato]),
    v_3: new SWQ("", i.vegebles, [i.train, i.television, i.match]),
    v_4: new SWQ("", i.vet, [i.feet, i.donkey, i.harp]),
    v_5: new SWQ("", i.vine, [i.monkey, i.sheep, i.feather]),
    v_6: new SWQ("", i.violin, [i.shark, i.hand, i.walrus]),
    v_7: new SWQ("", i.volcano, [i.dice, i.match, i.boat]),
    v_8: new SWQ("", i.volleyball, [i.coffee, i.paint, i.match]),
    v_9: new SWQ("", i.vulture, [i.lizard, i.hat, i.balloon]),
    w_0: new SWQ("", i.waffle, [i.shoe, i.marshmallow, i.fox]),
    w_1: new SWQ("", i.wallet, [i.pen, i.plant, i.cloud]),
    w_2: new SWQ("", i.walrus, [i.lemon, i.ship, i.donkey]),
    w_3: new SWQ("", i.watch, [i.doctor, i.dog, i.cat]),
    w_4: new SWQ("", i.water, [i.gorilla, i.donut, i.microwave]),
    w_5: new SWQ("", i.watermelon, [i.mouse, i.grapes, i.gong]),
    w_6: new SWQ("", i.whale, [i.volcano, i.grapes, i.shovel]),
    w_7: new SWQ("", i.wheat, [i.doctor, i.bowl, i.hand]),
    w_8: new SWQ("", i.window, [i.mushroom, i.pelican, i.camel]),
    w_9: new SWQ("", i.wolf, [i.shovel, i.giraffe, i.frog]),
};

class QS {
    //questionset
    constructor(name, questions) {
        this.name = name;
        this.activities = questions;
    }
}

const s = {
    //question sets
    b: new QS("Set 1", [
        q.b_0,
        q.b_1,
        q.b_2,
        q.b_3,
        q.b_4,
        q.b_5,
        q.b_6,
        q.b_7,
        q.b_8,
        q.b_9,
    ]),
    c: new QS("Set 2", [
        q.c_0,
        q.c_1,
        q.c_2,
        q.c_3,
        q.c_4,
        q.c_5,
        q.c_6,
        q.c_7,
        q.c_8,
        q.c_9,
    ]),
    d: new QS("Set 3", [
        q.d_0,
        q.d_1,
        q.d_2,
        q.d_3,
        q.d_4,
        q.d_5,
        q.d_6,
        q.d_7,
        q.d_8,
        q.d_9,
    ]),
    f: new QS("Set 4", [
        q.f_0,
        q.f_1,
        q.f_2,
        q.f_3,
        q.f_4,
        q.f_5,
        q.f_6,
        q.f_7,
        q.f_8,
        q.f_9,
    ]),
    g: new QS("Set 5", [
        q.g_0,
        q.g_1,
        q.g_2,
        q.g_3,
        q.g_4,
        q.g_5,
        q.g_6,
        q.g_7,
        q.g_8,
        q.g_9,
    ]),
    h: new QS("Set 6", [
        q.h_0,
        q.h_1,
        q.h_2,
        q.h_3,
        q.h_4,
        q.h_5,
        q.h_6,
        q.h_7,
        q.h_8,
        q.h_9,
    ]),
    l: new QS("Set 7", [
        q.l_0,
        q.l_1,
        q.l_2,
        q.l_3,
        q.l_4,
        q.l_5,
        q.l_6,
        q.l_7,
        q.l_8,
        q.l_9,
    ]),
    m: new QS("Set 8", [
        q.m_0,
        q.m_1,
        q.m_2,
        q.m_3,
        q.m_4,
        q.m_5,
        q.m_6,
        q.m_7,
        q.m_8,
        q.m_9,
    ]),
    p: new QS("Set 9", [
        q.p_0,
        q.p_1,
        q.p_2,
        q.p_3,
        q.p_4,
        q.p_5,
        q.p_6,
        q.p_7,
        q.p_8,
        q.p_9,
    ]),
    sh: new QS("Set 10", [
        q.sh_0,
        q.sh_1,
        q.sh_2,
        q.sh_3,
        q.sh_4,
        q.sh_5,
        q.sh_6,
        q.sh_7,
        q.sh_8,
        q.sh_9,
    ]),
    t: new QS("Set 11", [
        q.t_0,
        q.t_1,
        q.t_2,
        q.t_3,
        q.t_4,
        q.t_5,
        q.t_6,
        q.t_7,
        q.t_8,
        q.t_9,
    ]),
    v: new QS("Set 12", [
        q.v_0,
        q.v_1,
        q.v_2,
        q.v_3,
        q.v_4,
        q.v_5,
        q.v_6,
        q.v_7,
        q.v_8,
        q.v_9,
    ]),
    w: new QS("Set 13", [
        q.w_0,
        q.w_1,
        q.w_2,
        q.w_3,
        q.w_4,
        q.w_5,
        q.w_6,
        q.w_7,
        q.w_8,
        q.w_9,
    ]),
};

class Activity {
    constructor(name, abbreviation, sets) {
        this.name = name;
        this.abbr = abbreviation;
        this.sets = sets;
    }
}

export const activities = {
    ipa: new Activity("Implicit Phoneme Manipulation", "IPM", [
        s.b,
        s.c,
        s.d,
        s.f,
        s.g,
        s.h,
        s.l,
        s.m,
        s.p,
        s.sh,
        s.t,
        s.v,
        s.w,
    ]),
    pca: new Activity("Phonological Component Analysis", "PCA", [s.b]),
};
