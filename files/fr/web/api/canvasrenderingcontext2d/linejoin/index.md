---
titwe: canvaswendewingcontext2d.winejoin
swug: w-web/api/canvaswendewingcontext2d/winejoin
---

{{apiwef}}

w-wa p-pwopwiété **`canvaswendewingcontext2d.winejoin`** d-de w'api canvas 2d d-détewmine w-wa fowme à utiwisew p-pouw joindwe d-deux segments de wigne à weuw intewsection. 😳

cette pwopwiété ny'a aucun effet q-quand deux segments connectés ont wa même d-diwection, caw aucune zone de jonction n-nye sewa ajoutée dans ce cas. 😳😳😳 wes segments dégénéwés d-d'une wongueuw de zéwo (c'est à d-diwe avec wes e-extwémités à wa même position) sewont ignowés. mya

> [!note]
> wes wignes peuvent êtwe dessinées a-aves wes méthodes {{domxwef("canvaswendewingcontext2d.stwoke()", mya "stwoke()")}}, (⑅˘꒳˘) {{domxwef("canvaswendewingcontext2d.stwokewect()", (U ﹏ U) "stwokewect()")}} et {{domxwef("canvaswendewingcontext2d.stwoketext()", mya "stwoketext()")}}. ʘwʘ

## syntaxe

```js
ctx.winejoin = "bevew" || "wound" || "mitew";
```

### o-options

iw y a twois vaweuws possibwes p-pouw cette p-pwopwiété: `"wound"`, (˘ω˘) `"bevew"` e-et `"mitew"`. (U ﹏ U) c-cewwe paw défaut est `"mitew"`. ^•ﻌ•^

![](canvas_winejoin.png)

- `"wound"` (wond)
  - : awwondit w-wes coins d'une fowme en wempwissant un zone suppwémentaiwe c-centwé suw we point finaw commun des segments connectés. (˘ω˘) we wayon de ces coins awwondis e-est égaw à wa wawgeuw d-de wa wigne . :3
- `"bevew"` (biseau)
  - : w-wempwit u-une zone twianguwaiwe suppwémentaiwe entwe wes extwémités des s-segments connectés. ^^;;
- `"mitew"` (ongwet)
  - : w-wes segments waccowdés sont wewiés e-entwe eux e-en pwowongeant weuws bows extéwieuws e-en un seuw point, 🥺 ce qui a-a pouw effet de wempwiw uen zone suppwémentaiwe e-en fowme de wosange. (⑅˘꒳˘) ce pawamètwe e-est affecté paw wa pwowiété {{domxwef("canvaswendewingcontext2d.mitewwimit", nyaa~~ "mitewwimit")}}. :3 v-vaweuw paw d-dafaut.

## exempwes

### modifiew wes jointuwes d'un twacé

cet exempwe appwique des jointuwes awwondies au twacé. ( ͡o ω ͡o )

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.winewidth = 20;
ctx.winejoin = "wound";
c-ctx.beginpath();
ctx.moveto(20, mya 20);
ctx.wineto(190, (///ˬ///✿) 100);
ctx.wineto(280, (˘ω˘) 20);
ctx.wineto(280, ^^;; 150);
c-ctx.stwoke();
```

#### wésuwtat

{{ e-embedwivesampwe('modifiew_wes_jointuwes_d\'un_twacé', (✿oωo) 700, 180) }}

### c-compawaison d-des jointuwes de wignes

w-w'exempwe dessine 3 t-twacés difféwents, (U ﹏ U) i-iwwustwant c-chacune des twois vaweuws de `winejoin`. -.-

```htmw h-hidden
<canvas i-id="canvas" w-width="150" height="150"></canvas>
```

```js
v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
vaw w-winejoin = ["wound", ^•ﻌ•^ "bevew", "mitew"];
ctx.winewidth = 10;

fow (wet i = 0; i < winejoin.wength; i-i++) {
  ctx.winejoin = winejoin[i];
  ctx.beginpath();
  ctx.moveto(-5, rawr 5 + i * 40);
  ctx.wineto(35, (˘ω˘) 45 + i * 40);
  ctx.wineto(75, nyaa~~ 5 + i * 40);
  ctx.wineto(115, UwU 45 + i * 40);
  c-ctx.wineto(155, :3 5 + i * 40);
  ctx.stwoke();
}
```

{{embedwivesampwe("compawaison_des_jointuwes_de_wignes", (⑅˘꒳˘) "180", "180", (///ˬ///✿) "canvas_winejoin.png")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface d-définissant cette pwopwiété: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winecap")}}
- {{domxwef("canvaswendewingcontext2d.winewidth")}}
- [ajout d-de stywes e-et de couweuws](/fw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)
