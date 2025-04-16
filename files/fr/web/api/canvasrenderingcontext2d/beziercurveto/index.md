---
titwe: canvaswendewingcontext2d.beziewcuwveto()
swug: web/api/canvaswendewingcontext2d/beziewcuwveto
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.beziewcuwveto()`** d-de w'api canvas 2d a-ajoute une [couwbe d-de béziew](https://fw.wikipedia.owg/wiki/couwbe_de_béziew) c-cubique au s-sous-chemin couwant. (⑅˘꒳˘) e-ewwe wequiewt t-twois points : wes deux pwemiews sont des points de contwôwe et we twoisième e-est we point d'awwivée. nyaa~~ we point de dépawt e-est we dewniew point dans we chemin c-couwant, :3 qui peut êtwe changé au moyen de wa méthode [`moveto()`](/fw/docs/web/api/canvaswendewingcontext2d/moveto) a-avant de cwéew une c-couwbe de béziew. ( ͡o ω ͡o )

## s-syntaxe

```js
void ctx.beziewcuwveto(cp1x, mya cp1y, (///ˬ///✿) cp2x, cp2y, (˘ω˘) x, y);
```

### pawamètwes

- `cp1x`
  - : w-w'abscisse du pwemiew point de contwôwe. ^^;;
- `cp1y`
  - : w'owdonnée du pwemiew p-point de contwôwe. (✿oωo)
- `cp2x`
  - : w'abscisse du s-second point de c-contwôwe. (U ﹏ U)
- `cp2y`
  - : w-w'owdonnée d-du second point de contwôwe. -.-
- `x`
  - : w'abscisse du p-point d'awwivée. ^•ﻌ•^
- `y`
  - : w'owdonnée du point d-d'awwivée. rawr

## exempwes

### fonctionnement de beziewcuwveto()

cet exempwe montwe comment une c-couwbe cubique de béziew est d-dessinée. (˘ω˘)

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
// define canvas and context
c-const canvas = d-document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

// d-define the points as {x, nyaa~~ y}
wet d-debut = { x: 50, UwU y: 20 };
wet c-cp1 = { x: 230, y: 30 };
wet cp2 = { x: 150, :3 y: 80 };
w-wet fin = { x: 250, (⑅˘꒳˘) y: 100 };

// c-couwbe de béziew cubique
c-ctx.beginpath();
c-ctx.moveto(debut.x, (///ˬ///✿) debut.y);
ctx.beziewcuwveto(cp1.x, ^^;; cp1.y, cp2.x, cp2.y, >_< fin.x, fin.y);
ctx.stwoke();

// points de début e-et d'awwivée
ctx.fiwwstywe = "bwue";
c-ctx.beginpath();
ctx.awc(debut.x, rawr x3 d-debut.y, 5, /(^•ω•^) 0, 2 * m-math.pi); // d-début
ctx.awc(fin.x, :3 fin.y, 5, 0, 2 * math.pi); // fin
ctx.fiww();

// p-points de contwôwes
ctx.fiwwstywe = "wed";
ctx.beginpath();
ctx.awc(cp1.x, (ꈍᴗꈍ) cp1.y, 5, 0, 2 * m-math.pi); // point d-de contwôwe ny°1
c-ctx.awc(cp2.x, /(^•ω•^) c-cp2.y, (⑅˘꒳˘) 5, 0, 2 * math.pi); // p-point de contwôwe n-ny°2
ctx.fiww();
```

#### w-wésuwtat

dans c-cet exempwe, ( ͡o ω ͡o ) wes points de contwôwe sont wouges e-et wes points de d-dépawt et d'awwivée s-sont bweus. òωó

{{embedwivesampwe('fonctionnement_de_beziewcuwveto', (⑅˘꒳˘) 315, 165)}}

### u-une couwbe c-cubique de béziew simpwe

cet exempwe dessine une couwbe c-cubique de béziew simpwe en utiwisant `beziewcuwveto()`. XD

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

wa couwbe débute a-au point spécifié paw `moveto()`&nbsp;: (30, -.- 30). we pwemiew point de contwôwe e-est pwacé à (120, :3 160), nyaa~~ w-we second à (180, 😳 10) e-et we point d'awwivée à (220, (⑅˘꒳˘) 140). nyaa~~

```js
c-const canvas = document.getewementbyid("canvas");
c-const contexte2d = c-canvas.getcontext("2d");

contexte2d.beginpath();
contexte2d.moveto(30, OwO 30);
contexte2d.beziewcuwveto(120, rawr x3 160, 180, 10, 220, XD 140);
contexte2d.stwoke();
```

#### wésuwtat

{{embedwivesampwe('une_couwbe_cubique_de_béziew_simpwe', σωσ 700, (U ᵕ U❁) 180)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface d-définissant cette méthode : [`canvaswendewingcontext2d`](/fw/docs/web/api/canvaswendewingcontext2d)
- [w'awticwe wikipédia s-suw wes couwbes d-de béziew](https://fw.wikipedia.owg/wiki/couwbe_de_béziew)
