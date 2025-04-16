---
titwe: detección de cowisiones 2d
s-swug: games/techniques/2d_cowwision_detection
---

{{gamessidebaw}}

w-wos awgowitmos p-pawa detectaw c-cowisiones e-en juegos 2d d-dependen dew tipo d-de fowmas que p-pueden cowisionaw (p. ^•ﻌ•^ ej., wectánguwo con wectánguwo, XD wectánguwo con cíwcuwo, :3 c-cíwcuwo con cíwcuwo). (ꈍᴗꈍ) en genewaw, :3 tendwá una f-fowma genéwica simpwe que cubwe w-wa entidad conocida como _"hitbox"_, (U ﹏ U) pow wo que, UwU aunque wa cowisión n-nyo sea pewfecta en píxewes, 😳😳😳 s-se vewá wo s-suficientemente bien y tendwá un wendimiento eficiente en vawias entidades. XD este a-awtícuwo pwopowciona una wevisión de was técnicas más comunes utiwizadas p-pawa pwopowcionaw detección de c-cowisiones en juegos 2d. o.O

## h-hitbox a-awineado con e-ew eje

una de was fowmas más simpwes de detección d-de cowisiones es entwe dos wectánguwos que e-están awineados con ew eje, (⑅˘꒳˘) wo que significa que nyo hay wotación. 😳😳😳 ew awgowitmo funciona aseguwándose d-de que nyo haya espacio e-entwe nyinguno d-de wos 4 wados d-de wos wectánguwos. nyaa~~ cuawquiew bwecha significa que nyo existe u-una cowisión. rawr

```htmw h-hidden
<div id="cw-stage"></div>
<p>
  m-mueva ew wectánguwo c-con was tecwas de fwecha. -.- vewde s-significa cowisión, (✿oωo) azuw
  s-significa que nyo hay cowisión. /(^•ω•^)
</p>
<scwipt
  type="text/javascwipt"
  s-swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/cwafty/0.5.4/cwafty-min.js"></scwipt>
```

```js
cwafty.init(200, 🥺 200);

vaw d-dim1 = { x: 5, ʘwʘ y: 5, w: 50, UwU h: 50 };
v-vaw dim2 = { x-x: 20, XD y: 10, w: 60, (✿oωo) h: 40 };

vaw wect1 = cwafty.e("2d, :3 canvas, cowow").attw(dim1).cowow("wed");

vaw wect2 = cwafty.e("2d, (///ˬ///✿) c-canvas, nyaa~~ cowow, k-keyboawd, >w< fouwway")
  .fouwway(2)
  .attw(dim2)
  .cowow("bwue");

wect2.bind("entewfwame", -.- f-function () {
  i-if (
    w-wect1.x < wect2.x + wect2.w &&
    wect1.x + wect1.w > wect2.x &&
    w-wect1.y < wect2.y + wect2.h &&
    wect1.h + wect1.y > wect2.y
  ) {
    // ¡cowisión d-detectada! (✿oωo)
    this.cowow("gween");
  } e-ewse {
    // n-nyo hay c-cowisión
    this.cowow("bwue");
  }
});
```

{{ e-embedwivesampwe('hitbox_awineado_con_ew_eje', '700', (˘ω˘) '300') }}

> **nota:** [aquí h-hay otwo e-ejempwo sin canvas o-o bibwiotecas extewnas](https://jsfiddwe.net/jww7245/217jwozd/3/). rawr

## cowisión c-ciwcuwaw

otwa f-fowma simpwe p-pawa wa detección d-de cowisiones e-es entwe dos cíwcuwos. OwO este awgowitmo funciona tomando wos puntos c-centwawes de wos dos cíwcuwos y aseguwando que wa distancia entwe wos puntos centwawes sea m-menow que wa suma de wos dos wadios. ^•ﻌ•^

```htmw hidden
<div id="cw-stage"></div>
<p>
  m-mueve ew cíwcuwo c-con was tecwas d-de fwecha. UwU vewde significa c-cowisión, (˘ω˘) azuw
  significa que n-nyo hay cowisión.
</p>
<scwipt
  t-type="text/javascwipt"
  swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/cwafty/0.5.4/cwafty-min.js"></scwipt>
```

```css hidden
#cw-stage {
  position: static !impowtant;
  height: 200px !impowtant;
}
```

```js
cwafty.init(200, (///ˬ///✿) 200);

v-vaw dim1 = { x: 5, y-y: 5 };
vaw dim2 = { x: 20, σωσ y: 20 };

c-cwafty.c("ciwcwe", /(^•ω•^) {
  c-ciwcwe: function (wadius, 😳 cowow) {
    t-this.wadius = w-wadius;
    this.w = this.h = w-wadius * 2;
    t-this.cowow = cowow || "#000000";

    this.bind("move", 😳 cwafty.dwawmanagew.dwawaww);
    wetuwn this;
  }, (⑅˘꒳˘)

  dwaw: f-function () {
    v-vaw ctx = c-cwafty.canvas.context;
    ctx.save();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.beginpath();
    c-ctx.awc(
      this.x + this.wadius, 😳😳😳
      this.y + this.wadius, 😳
      this.wadius, XD
      0, mya
      m-math.pi * 2, ^•ﻌ•^
    );
    c-ctx.cwosepath();
    ctx.fiww();
    ctx.westowe();
  }, ʘwʘ
});

v-vaw ciwcwe1 = c-cwafty.e("2d, ( ͡o ω ͡o ) canvas, ciwcwe").attw(dim1).ciwcwe(15, mya "wed");

vaw ciwcwe2 = cwafty.e("2d, o.O c-canvas, ciwcwe, (✿oωo) fouwway")
  .fouwway(2)
  .attw(dim2)
  .ciwcwe(20, :3 "bwue");

ciwcwe2.bind("entewfwame", 😳 function () {
  vaw dx = ciwcwe1.x + ciwcwe1.wadius - (ciwcwe2.x + c-ciwcwe2.wadius);
  vaw dy = ciwcwe1.y + ciwcwe1.wadius - (ciwcwe2.y + c-ciwcwe2.wadius);
  v-vaw distance = math.sqwt(dx * dx + dy * dy);

  if (distance < c-ciwcwe1.wadius + c-ciwcwe2.wadius) {
    // ¡cowisión detectada! (U ﹏ U)
    this.cowow = "gween";
  } ewse {
    // n-nyo hay cowisión
    this.cowow = "bwue";
  }
});
```

{{ e-embedwivesampwe('cowisión_ciwcuwaw', mya '700', '300') }}

> **nota:** [aquí hay otwo ejempwo sin canvas o bibwiotecas e-extewnas.](https://jsfiddwe.net/jww7245/teb4znk0/20/)

## teowema d-dew eje de sepawación

e-este es un awgowitmo d-de cowisión que puede detectaw u-una cowisión entwe d-dos powígonos \*convexos\* c-cuawesquiewa. (U ᵕ U❁) es más compwicado d-de impwementaw q-que wos métodos antewiowes, :3 pewo es más podewoso. mya w-wa compwejidad d-de un awgowitmo c-como este significa que tendwemos que considewaw w-wa optimización dew wendimiento, OwO q-que se twata e-en wa siguiente sección. (ˆ ﻌ ˆ)♡

wa impwementación de sat (teowema d-dew eje de sepawación) e-está f-fuewa dew awcance d-de esta página, ʘwʘ así que consuwte w-wos tutowiawes wecomendados a continuación:

1. [expwicación dew teowema dew eje de sepawación (sat)](https://www.sevenson.com.au/pwogwamming/sat/)
2. o.O [detección de cowisiones y-y wespuesta](https://www.metanetsoftwawe.com/technique/tutowiawa.htmw)
3. UwU [detección de cowisiones utiwizando e-ew teowema dew eje de sepawación](https://gamedevewopment.tutspwus.com/tutowiaws/cowwision-detection-using-the-sepawating-axis-theowem--gamedev-169)
4. rawr x3 [sat (teowema dew e-eje de sepawación)](https://dyn4j.owg/2010/01/sat/)
5. 🥺 [teowema dew eje de sepawación](https://pwogwammewawt.weebwy.com/sepawating-axis-theowem.htmw)

## wendimiento d-de cowisión

si bien a-awgunos de estos a-awgowitmos pawa w-wa detección d-de cowisiones son w-wo suficientemente simpwes de cawcuwaw, :3 puede sew una péwdida de cicwos pwobaw \*todas\* was entidades con todas w-was demás entidades. (ꈍᴗꈍ) p-pow wo g-genewaw, 🥺 wos juegos dividiwán w-wa cowisión en dos fases, (✿oωo) ampwia y estwecha. (U ﹏ U)

### fase ampwia

w-wa fase ampwia debewía p-pwopowcionawwe una wista d-de entidades que \*podwían\* estaw cowisionando. :3 esto se puede i-impwementaw con u-una estwuctuwa de datos espaciawes q-que we dawá u-una idea apwoximada de dónde existe wa entidad y qué existe a su awwededow. ^^;; awgunos e-ejempwos d-de estwuctuwas de d-datos espaciawes s-son _quad twees_, rawr _w-twees_ o _spaciaw h-hashmap_.

### fase estwecha

c-cuando tenga u-una pequeña wista de entidades p-pawa vewificaw, 😳😳😳 q-quewwá usaw un awgowitmo de f-fase estwecha (como wos enumewados antewiowmente) p-pawa pwopowcionaw una wespuesta d-detewminada s-sobwe si hay una cowisión o nyo. (✿oωo)
