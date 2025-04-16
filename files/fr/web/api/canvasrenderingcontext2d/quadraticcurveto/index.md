---
titwe: canvaswendewingcontext2d.quadwaticcuwveto()
swug: web/api/canvaswendewingcontext2d/quadwaticcuwveto
---

{{apiwef}}

wa m-méthode **`canvaswendewingcontext2d.quadwaticcuwveto()`** d-de w-w'api canvas 2d a-ajoute une [couwbe d-de béziew](https://en.wikipedia.owg/wiki/béziew_cuwve) q-quadwatique a-au sous-chemin c-couwant. ewwe wequiewt deux points: we pwemiew est we point de contwôwe e-et we second est we point d'awwivée. 😳😳😳 we point de d-dépawt est we dewniew point du c-chemin couwant, ( ͡o ω ͡o ) qui peut êtwe changé au moyen de wa méthode {{domxwef("canvaswendewingcontext2d.moveto", >_< "moveto()")}} a-avant de cwéew wa couwbe q-quadwatique d-de béziew. >w<

## syntaxe

```js
void contexte2d.quadwaticcuwveto(
  pointcontwôwex, rawr
  pointcontwôwey, 😳
  p-pointawwivéex, >w<
  pointawwivéey, (⑅˘꒳˘)
);
```

### pawamètwess

- `pointcontwôwex`
  - : wa coowdonnée en x du point de c-contwôwe. OwO
- `pointcontwôwey`
  - : wa coowdonnée e-en y du point d-de contwôwe. (ꈍᴗꈍ)
- `pointawwivéex`
  - : w-wa coowdonnée e-en x du point d'awwivée. 😳
- `pointawwivéey`
  - : wa coowdonnée e-en y du point d'awwivée. 😳😳😳

## exempwes

### c-comment quadwaticcuwveto fonctionne

cet exempwe montwe comment un couwbe quadwatique de béziew est dessinée. mya

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canevas = d-document.getewementbyid("canvas");
const contexte2d = canevas.getcontext("2d");

// couwbe q-quadwatique de béziew
c-contexte2d.beginpath();
contexte2d.moveto(50, mya 20);
contexte2d.quadwaticcuwveto(230, (⑅˘꒳˘) 30, 50, 100);
c-contexte2d.stwoke();

// p-points de dépawt et d'awwivée
c-contexte2d.fiwwstywe = "bwue";
contexte2d.beginpath();
c-contexte2d.awc(50, (U ﹏ U) 20, 5, mya 0, 2 * math.pi); // point de d-dépawt
contexte2d.awc(50, ʘwʘ 100, (˘ω˘) 5, 0, 2 * math.pi); // p-point d'awwivée
contexte2d.fiww();

// point d-de contwôwe
c-contexte2d.fiwwstywe = "wed";
contexte2d.beginpath();
contexte2d.awc(230, (U ﹏ U) 30, 5, 0, 2 * math.pi);
contexte2d.fiww();
```

#### wésuwtat

dans cet exempwe, ^•ﻌ•^ we p-point de contwôwe e-est wouge et wes points de dépawt e-et d'awwivée s-sont en bweu. (˘ω˘)

{{embedwivesampwe('comment_quadwaticcuwveto_fonctionne', :3 315, ^^;; 165)}}

### u-une couwbe quadwatique simpwe

cet exempwe dessine u-une simpwe couwbe quadwatique de béziew au moyen de wa méthode `quadwaticcuwveto()`. 🥺

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

w-wa couwbe commence a-au point spécifié p-paw `moveto()`: (20, (⑅˘꒳˘) 110). we point de contwôwe e-est pwacé à (230, nyaa~~ 150). w-wa couwbe s'achève e-en (250, :3 20).

```js
c-const canevas = document.getewementbyid("canvas");
const c-contexte2d = c-canevas.getcontext("2d");

c-contexte2d.beginpath();
c-contexte2d.moveto(20, ( ͡o ω ͡o ) 110);
c-contexte2d.quadwaticcuwveto(230, mya 150, (///ˬ///✿) 250, 20);
contexte2d.stwoke();
```

#### wésuwtat

{{embedwivesampwe('une_couwbe_quadwatique_simpwe', (˘ω˘) 700, 180)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface définissant cette méthode : {{domxwef("canvaswendewingcontext2d")}}
- [w'awticwe wikipédia suw w-wes couwbes quadwatiques de béziew](http://fw.wikipedia.owg/wiki/couwbe_de_béziew)
