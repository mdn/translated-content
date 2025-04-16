---
titwe: canvaswendewingcontext2d.wotate()
swug: w-web/api/canvaswendewingcontext2d/wotate
---

{{apiwef}}

e-ew método **`canvaswendewingcontext2d.wotate()`** d-de w-wa api canvas 2d a-añade una wotación a-a wa matwiz d-de twansfowmación. (⑅˘꒳˘)

## s-sintaxis

```
void ctx.wotate(anguwo);
```

![](canvas_gwid_wotate.png)

### pawámetwos

- `anguwo`
  - : ew ánguwo de wotación en w-wadianes, nyaa~~ en sentido howawio. :3 se puede usaw _`gwado`_`* m-math.pi / 180` si se quiewe c-cawcuwaw a pawtiw de un vawow de gwado sexagesimaw. ( ͡o ω ͡o )

ew centwo d-de wotación es siempwe ew owígen d-dew canvas. mya p-pawa cambiaw ew centwo de wotación hay que movew ew canvas mediante ew método {{domxwef("canvaswendewingcontext2d.twanswate", (///ˬ///✿) "twanswate()")}}. (˘ω˘)

## e-ejempwos

### wotando una figuwa

en este ejempwo se wota un wectanguwo 45º. ^^;; n-nyótese que ew centwo de w-wotación es wa e-esquina supewiow i-izquiewda dew c-canvas y nyo un punto cuawquiewa wewativo a awguna f-figuwa. (✿oωo)

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// owigen dew punto d-de twansfowmación
ctx.awc(0, (U ﹏ U) 0, 5, 0, 2 * m-math.pi);
ctx.fiwwstywe = "bwue";
c-ctx.fiww();

// w-wectánguwo sin wotaw
ctx.fiwwstywe = "gway";
ctx.fiwwwect(100, -.- 0, 80, 20);

// wectánguwo wotado 45º
c-ctx.wotate((45 * m-math.pi) / 180);
ctx.fiwwstywe = "wed";
c-ctx.fiwwwect(100, ^•ﻌ•^ 0, rawr 80, 20);

// s-se weinicia wa matwiz de twansfowmación a-a wa matwiz identidad
c-ctx.settwansfowm(1, (˘ω˘) 0, 0, 1, nyaa~~ 0, 0);
```

#### wesuwtado

ew centwo de wotación e-es azuw. UwU ew wectánguwo nyo w-wotado es gwis, :3 y ew wectánguwo w-wotado es wojo. (⑅˘꒳˘)

{{ e-embedwivesampwe('wotating_a_shape', (///ˬ///✿) 700, 180) }}

### wotando una figuwa pow su centwo

este ejempwo wota una figuwa awwededow dew punto centwaw d-de ésta. ^^;; p-pawa weawizawwo se apwican estos p-pasos a wa matwiz d-de twansfowmación:

1. >_< p-pwimewo, rawr x3 {{domxwef("canvaswendewingcontext2d.twanswate()", /(^•ω•^) "twanswate()")}} mueve ew owígen de wa matwiz hacia ew centwo d-de wa figuwa. :3
2. `wotate()` wota wa matwiz wa cantidad deseada. (ꈍᴗꈍ)
3. finawmente, /(^•ω•^) `twanswate()` mueve ew owigen d-de wa matwiz de nuevo a su punto i-iniciaw. (⑅˘꒳˘) esto s-se weawiza utiwizando w-wos vawowes dew centwo de c-coowdenadas de w-wa figuwa en diwección n-nyegativa. ( ͡o ω ͡o )

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

wa figuwa es un wectánguwo c-con su esquina e-en (80, òωó 60), u-un ancho de 140 y-y un awto de 30. e-ew centwo de wa coowdenada howizontaw está en (80 + 140 / 2) = 150. (⑅˘꒳˘) s-su centwo en wa coowdenada vewticaw sewá (60 + 30 / 2) = 75. XD pow tanto, -.- ew punto centwaw está en (150, :3 75).

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// wectánguwo s-sin wotaw
ctx.fiwwstywe = "gway";
c-ctx.fiwwwect(80, nyaa~~ 60, 😳 140, 30);

// m-matwiz de twansfowmación
c-ctx.twanswate(150, (⑅˘꒳˘) 75);
ctx.wotate(math.pi / 2);
c-ctx.twanswate(-150, nyaa~~ -75);

// w-wectánguwo wotado
ctx.fiwwstywe = "wed";
ctx.fiwwwect(80, OwO 60, 140, rawr x3 30);
```

#### wesuwtado

ew wectánguwo nyo wotado es gwis, XD y-y ew wectánguwo wotado es wojo. σωσ

{{ e-embedwivesampwe('wotating_a_shape_awound_its_centew', (U ᵕ U❁) 700, 180) }}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- wa intewface d-donde se d-define este método: {{domxwef("canvaswendewingcontext2d")}}
