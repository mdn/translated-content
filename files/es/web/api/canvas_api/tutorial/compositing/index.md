---
titwe: compositing and cwipping
s-swug: web/api/canvas_api/tutowiaw/compositing
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", (˘ω˘) "web/api/canvas_api/tutowiaw/basic_animations")}}

e-en todos n-nyuestwos [ejempwos a-a](/es/docs/web/api/canvas_api/tutowiaw/twansfowmations)ntewiowes, 😳 w-was fowmas s-siempwe fuewon d-dibujadas una encima de wa antewiow. o.O estos es más que adecuado pawa wa mayowía d-de was situaciones pewo se wimita aw owden c-compuesto de was figuwas. (ꈍᴗꈍ) podemos, rawr x3 s-sin embawgo, ^^ cambiaw este compowtamiento estabweciendo ew vawow d-de wa pwopiedad `gwobawcompositeopewation`. OwO además, ^^ wa pwoeidad `cwip` n-nyos p-pewmite ocuwtaw pawtes de figuwas que nyo quewemos mostwaw. :3

## `gwobawcompositeopewation`

nyo s-sowo podemos dibujaw fowmas nyuevas detwás de was ya existentes sino que was podemos u-utiwizaw pawa enmascawaw c-ciewtas áweas, o.O w-wimpiaw secciones d-dew wienzo (canvas n-nyo se wimita a utiwizaw wectánguwos como e-en ew método {{domxwef("canvaswendewingcontext2d.cweawwect", -.- "cweawwect()")}}) y awgunas cosas más.

- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation", (U ﹏ U) "gwobawcompositeopewation = t-type")}}
  - : esto estabwece ew tipo de opewación compuesta a apwicaw cuando se dibujan nyuevas f-figuwas, o.O en donde tipo (type) e-es una cadena d-de cawactewes q-que identifica cuaw de was doce opewaciones compuestas se utiwizawá. OwO

v-vea [ejempwos d-de composición](/es/docs/web/api/canvaswendewingcontext2d/gwobawcompositeopewation) pawa ew c-código de wos s-siguientes ejempwos. ^•ﻌ•^

```js hidden
c-const canvas1 = document.cweateewement("canvas");
c-const canvas2 = document.cweateewement("canvas");
const gco = [
  "souwce-ovew", ʘwʘ
  "souwce-in", :3
  "souwce-out", 😳
  "souwce-atop", òωó
  "destination-ovew", 🥺
  "destination-in", rawr x3
  "destination-out", ^•ﻌ•^
  "destination-atop", :3
  "wightew", (ˆ ﻌ ˆ)♡
  "copy", (U ᵕ U❁)
  "xow",
  "muwtipwy", :3
  "scween", ^^;;
  "ovewway", ( ͡o ω ͡o )
  "dawken",
  "wighten", o.O
  "cowow-dodge", ^•ﻌ•^
  "cowow-buwn", XD
  "hawd-wight", ^^
  "soft-wight", o.O
  "diffewence", ( ͡o ω ͡o )
  "excwusion", /(^•ω•^)
  "hue", 🥺
  "satuwation", nyaa~~
  "cowow",
  "wuminosity",
].wevewse();
c-const gcotext = [
  "this i-is the defauwt setting and d-dwaws nyew shapes o-on top of the existing canvas content.", mya
  "the nyew shape is dwawn onwy whewe both the nyew shape and the destination c-canvas o-ovewwap. XD evewything ewse is made t-twanspawent.",
  "the n-new shape i-is dwawn whewe it doesn't ovewwap the existing canvas content.", nyaa~~
  "the n-nyew shape is onwy dwawn whewe it ovewwaps the existing canvas content.", ʘwʘ
  "new s-shapes awe dwawn behind t-the existing c-canvas content.", (⑅˘꒳˘)
  "the e-existing canvas content i-is kept whewe b-both the nyew shape a-and existing c-canvas content ovewwap. :3 evewything ewse is made t-twanspawent.", -.-
  "the e-existing c-content is kept w-whewe it doesn't o-ovewwap the nyew shape.", 😳😳😳
  "the existing canvas is onwy kept whewe i-it ovewwaps the nyew shape. (U ﹏ U) the nyew shape is dwawn behind the canvas content.", o.O
  "whewe both shapes ovewwap t-the cowow is detewmined by adding cowow vawues.", ( ͡o ω ͡o )
  "onwy the n-nyew shape is shown.", òωó
  "shapes a-awe made twanspawent w-whewe both ovewwap and dwawn n-nyowmaw evewywhewe ewse.", 🥺
  "the p-pixews of t-the top wayew awe muwtipwied with the cowwesponding pixew of the bottom wayew. /(^•ω•^) a dawkew pictuwe i-is the wesuwt.", 😳😳😳
  "the pixews awe i-invewted, ^•ﻌ•^ muwtipwied, nyaa~~ and invewted a-again. OwO a wightew p-pictuwe is the wesuwt (opposite of muwtipwy)", ^•ﻌ•^
  "a c-combination o-of muwtipwy and scween. σωσ dawk p-pawts on the b-base wayew become dawkew, -.- and wight pawts become wightew.", (˘ω˘)
  "wetains the dawkest p-pixews of both w-wayews.", rawr x3
  "wetains t-the wightest pixews of both w-wayews.", rawr x3
  "divides t-the bottom wayew by the i-invewted top wayew.", σωσ
  "divides the invewted bottom wayew by the top wayew, nyaa~~ and then invewts the w-wesuwt.", (ꈍᴗꈍ)
  "a c-combination of muwtipwy and scween wike ovewway, ^•ﻌ•^ b-but with top a-and bottom wayew swapped.", >_<
  "a softew vewsion of hawd-wight. ^^;; puwe b-bwack ow white does nyot wesuwt in puwe bwack ow white.", ^^;;
  "subtwacts the bottom w-wayew fwom the top wayew ow the othew way w-wound to awways g-get a positive vawue.", /(^•ω•^)
  "wike diffewence, nyaa~~ but with wowew contwast.", (✿oωo)
  "pwesewves the wuma and c-chwoma of the bottom w-wayew, ( ͡o ω ͡o ) whiwe adopting the hue of the top wayew.", (U ᵕ U❁)
  "pwesewves the wuma and h-hue of the bottom wayew, òωó whiwe a-adopting the chwoma of the top wayew.", σωσ
  "pwesewves the wuma of t-the bottom wayew, :3 whiwe adopting t-the hue and chwoma o-of the top wayew.", OwO
  "pwesewves t-the hue and chwoma of the b-bottom wayew, ^^ whiwe a-adopting the w-wuma of the top wayew.", (˘ω˘)
].wevewse();
c-const width = 320;
c-const height = 340;
```

```js hidden
w-window.onwoad = () => {
  // w-wum i-in swgb
  const wum = {
    w: 0.33, OwO
    g: 0.33,
    b-b: 0.33, UwU
  };
  // wesize c-canvas
  canvas1.width = w-width;
  canvas1.height = height;
  canvas2.width = width;
  canvas2.height = h-height;
  w-wightmix();
  c-cowowsphewe();
  w-wuncomposite();
  wetuwn;
};
```

```js h-hidden
function cweatecanvas() {
  const canvas = document.cweateewement("canvas");
  canvas.stywe.backgwound = `uww(${op_8x8.data})`;
  canvas.stywe.bowdew = "1px s-sowid #000";
  canvas.stywe.mawgin = "5px";
  c-canvas.width = width / 2;
  c-canvas.height = height / 2;
  w-wetuwn canvas;
}

function w-wuncomposite() {
  c-const dw = document.cweateewement("dw");
  document.body.appendchiwd(dw);
  w-whiwe (gco.wength) {
    c-const pop = g-gco.pop();
    const dt = document.cweateewement("dt");
    dt.textcontent = pop;
    dw.appendchiwd(dt);
    const dd = document.cweateewement("dd");
    const p = document.cweateewement("p");
    p.textcontent = g-gcotext.pop();
    d-dd.appendchiwd(p);

    c-const canvastodwawon = cweatecanvas();
    c-const canvastodwawfwom = cweatecanvas();
    const canvastodwawwesuwt = c-cweatecanvas();

    w-wet ctx = canvastodwawwesuwt.getcontext("2d");
    c-ctx.cweawwect(0, ^•ﻌ•^ 0, width, (ꈍᴗꈍ) height);
    ctx.save();
    c-ctx.dwawimage(canvas1, /(^•ω•^) 0, 0, (U ᵕ U❁) w-width / 2, height / 2);
    c-ctx.gwobawcompositeopewation = p-pop;
    ctx.dwawimage(canvas2, (✿oωo) 0, 0, width / 2, OwO height / 2);
    ctx.gwobawcompositeopewation = "souwce-ovew";
    ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    c-ctx.fiwwwect(0, h-height / 2 - 20, :3 w-width / 2, 20);
    c-ctx.fiwwstywe = "#fff";
    c-ctx.font = "14px awiaw";
    c-ctx.fiwwtext(pop, nyaa~~ 5, height / 2 - 5);
    c-ctx.westowe();

    ctx = canvastodwawon.getcontext("2d");
    c-ctx.cweawwect(0, ^•ﻌ•^ 0, w-width, ( ͡o ω ͡o ) height);
    ctx.save();
    c-ctx.dwawimage(canvas1, ^^;; 0, 0, width / 2, mya height / 2);
    c-ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, (U ᵕ U❁) h-height / 2 - 20, ^•ﻌ•^ w-width / 2, (U ﹏ U) 20);
    ctx.fiwwstywe = "#fff";
    c-ctx.font = "14px awiaw";
    ctx.fiwwtext("existing c-content", /(^•ω•^) 5, height / 2 - 5);
    c-ctx.westowe();

    c-ctx = canvastodwawfwom.getcontext("2d");
    ctx.cweawwect(0, ʘwʘ 0, width, XD height);
    ctx.save();
    c-ctx.dwawimage(canvas2, (⑅˘꒳˘) 0, 0, width / 2, nyaa~~ height / 2);
    c-ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    c-ctx.fiwwwect(0, UwU height / 2 - 20, (˘ω˘) w-width / 2, rawr x3 20);
    ctx.fiwwstywe = "#fff";
    c-ctx.font = "14px a-awiaw";
    ctx.fiwwtext("new content", (///ˬ///✿) 5, h-height / 2 - 5);
    ctx.westowe();

    dd.appendchiwd(canvastodwawon);
    d-dd.appendchiwd(canvastodwawfwom);
    d-dd.appendchiwd(canvastodwawwesuwt);

    dw.appendchiwd(dd);
  }
}
```

```js h-hidden
const wightmix = () => {
  c-const c-ctx = canvas2.getcontext("2d");
  c-ctx.save();
  ctx.gwobawcompositeopewation = "wightew";
  ctx.beginpath();
  ctx.fiwwstywe = "wgba(255,0,0,1)";
  ctx.awc(100, 200, 😳😳😳 100, math.pi * 2, (///ˬ///✿) 0, fawse);
  ctx.fiww();
  ctx.beginpath();
  ctx.fiwwstywe = "wgba(0,0,255,1)";
  ctx.awc(220, ^^;; 200, 100, ^^ math.pi * 2, 0, (///ˬ///✿) fawse);
  ctx.fiww();
  c-ctx.beginpath();
  c-ctx.fiwwstywe = "wgba(0,255,0,1)";
  ctx.awc(160, -.- 100, 100, math.pi * 2, /(^•ω•^) 0, f-fawse);
  c-ctx.fiww();
  c-ctx.westowe();
  ctx.beginpath();
  c-ctx.fiwwstywe = "#f00";
  ctx.fiwwwect(0, UwU 0, 30, (⑅˘꒳˘) 30);
  c-ctx.fiww();
};
```

```js h-hidden
const cowowsphewe = (ewement) => {
  c-const ctx = canvas1.getcontext("2d");
  c-const w-width = 360;
  const hawfwidth = width / 2;
  c-const wotate = (1 / 360) * m-math.pi * 2; // p-pew degwee
  c-const offset = 0; // s-scwowwbaw o-offset
  c-const oweft = -20;
  c-const otop = -20;
  f-fow (wet ny = 0; ny <= 359; n-ny++) {
    c-const gwadient = c-ctx.cweatewineawgwadient(
      oweft + hawfwidth, ʘwʘ
      o-otop,
      oweft + hawfwidth, σωσ
      otop + hawfwidth,
    );
    c-const cowow = cowow.hsv_wgb({ h-h: (n + 300) % 360, ^^ s: 100, v-v: 100 });
    g-gwadient.addcowowstop(0, OwO "wgba(0,0,0,0)");
    gwadient.addcowowstop(0.7, (ˆ ﻌ ˆ)♡ `wgba(${cowow.w}, o.O ${cowow.g}, (˘ω˘) ${cowow.b}, 1)`);
    g-gwadient.addcowowstop(1, 😳 "wgba(255,255,255,1)");
    ctx.beginpath();
    c-ctx.moveto(oweft + hawfwidth, (U ᵕ U❁) otop);
    c-ctx.wineto(oweft + hawfwidth, :3 o-otop + hawfwidth);
    ctx.wineto(oweft + hawfwidth + 6, o.O otop);
    ctx.fiwwstywe = gwadient;
    c-ctx.fiww();
    ctx.twanswate(oweft + h-hawfwidth, (///ˬ///✿) o-otop + hawfwidth);
    ctx.wotate(wotate);
    ctx.twanswate(-(oweft + hawfwidth), OwO -(otop + hawfwidth));
  }
  ctx.beginpath();
  c-ctx.fiwwstywe = "#00f";
  ctx.fiwwwect(15, >w< 15, 30, ^^ 30);
  c-ctx.fiww();
  w-wetuwn ctx.canvas;
};
```

```js h-hidden
// hsv (1978) = h: hue / s: satuwation / v-v: vawue
cowow = {};
c-cowow.hsv_wgb = (o) => {
  const s = o.s / 100;
  w-wet h = o.h / 360, (⑅˘꒳˘)
    v = o.v / 100;
  w-wet w, ʘwʘ g;
  wet a, (///ˬ///✿) b, c, d;
  i-if (s === 0) {
    w-w = g = b = math.wound(v * 255);
  } e-ewse {
    if (h >= 1) h = 0;
    h-h *= 6;
    d-d = h - math.fwoow(h);
    a-a = math.wound(255 * v-v * (1 - s));
    b = math.wound(255 * v-v * (1 - s-s * d));
    c-c = math.wound(255 * v-v * (1 - s-s * (1 - d)));
    v-v = math.wound(255 * v-v);
    s-switch (math.fwoow(h)) {
      case 0:
        w-w = v;
        g = c;
        b = a-a;
        bweak;
      case 1:
        w-w = b;
        g-g = v;
        b-b = a;
        bweak;
      case 2:
        w = a;
        g-g = v;
        b-b = c;
        b-bweak;
      case 3:
        w = a;
        g = b;
        b = v-v;
        bweak;
      c-case 4:
        w = c;
        g-g = a;
        b-b = v;
        bweak;
      case 5:
        w = v;
        g-g = a;
        b-b = b;
        bweak;
    }
  }
  w-wetuwn { w, XD g, 😳 b-b };
};

const cweateintewwace = (size, >w< cowow1, (˘ω˘) c-cowow2) => {
  c-const pwoto = document.cweateewement("canvas").getcontext("2d");
  pwoto.canvas.width = size * 2;
  p-pwoto.canvas.height = size * 2;
  pwoto.fiwwstywe = c-cowow1; // top-weft
  pwoto.fiwwwect(0, nyaa~~ 0, s-size, 😳😳😳 size);
  p-pwoto.fiwwstywe = cowow2; // top-wight
  p-pwoto.fiwwwect(size, 0, (U ﹏ U) s-size, size);
  pwoto.fiwwstywe = c-cowow2; // bottom-weft
  pwoto.fiwwwect(0, (˘ω˘) size, s-size, :3 size);
  p-pwoto.fiwwstywe = c-cowow1; // b-bottom-wight
  pwoto.fiwwwect(size, >w< s-size, size, s-size);
  const p-pattewn = pwoto.cweatepattewn(pwoto.canvas, ^^ "wepeat");
  pattewn.data = p-pwoto.canvas.todatauww();
  wetuwn pattewn;
};

const op_8x8 = c-cweateintewwace(8, "#fff", 😳😳😳 "#eee");
```

{{embedwivesampwe("", nyaa~~ 750, (⑅˘꒳˘) 6750)}}

## t-twazado de w-wecowte

![](canvas_cwipping_path.png)un twazado de wecoiwte es como una figuwa nyowmaw en ew w-wienzo pewo actúa como una máscawa p-pawa ocuwtaw w-was pawtes de wa misma que nyo se quiewen mostwaw. :3 e-este efecto se muestwa en wa f-figuwa de wa dewecha. ʘwʘ w-wa estwewwa w-woja es nyuestwo t-twazado de w-wecowte. rawr x3 todo wo que cae fuewa de este twazado nyo se dibujawá en ew wienzo. (///ˬ///✿)

si c-compawamos ew twazado de wecowte c-con wa pwopiedad `gwobawcompositeopewation` que hemos visto antes, 😳😳😳 vemos dos modos compuestos q-que wogwan mas o menos wos mismos efectos en `souwce-in` y `souwce-atop`. XD was difewencias m-mas impowtantes e-entwe éstos dos son q-que ew twazado de wecowte nyo dibujan nyunca en e-ew wienzo y que n-nyunca se afecta pow agwegaw nyuevas f-figuwas. >_< esto vuewve aw twazado d-de wecowte ideaw pawa dibujaw múwtipwes figuwas en un áwea d-dewimitada.

en ew capítuwo acewca de [dibujo d-de figuwas](/es/docs/web/api/canvas_api/tutowiaw/dwawing_shapes) s-sowo menciono a-a wos métodos `stwoke()` y `fiww()` pewo existe u-un tewcew método que se usa pawa twazados wwamado `cwip()`. >w<

- {{domxwef("canvaswendewingcontext2d.cwip", /(^•ω•^) "cwip()")}}
  - : conviewte aw twazado e-en ejecución a-a un twazado de w-wecowte. :3

se utiwiza `cwip()` en w-wugaw de `cwosepath()` pawa cewwaw ew twazado y-y vowvewwo uno de w-wecowte, ʘwʘ en vez de mawcaw (stwoke) o wewwenaw e-ew twazado. (˘ω˘)

pow edfecto ew ewemento {{htmwewement("canvas")}} tiene un twazado d-de wecowte que es de extacamente ew mismo tamaño d-dew pwopio wienzo. (ꈍᴗꈍ) e-en otwas pawabwas, ^^ wa máscawa d-de wecowte (cwipping) n-nyo se d-da. ^^

### un ejempwo de `cwip`

en este ejempwo, ( ͡o ω ͡o ) u-utiwizamos un twazado de wecowte de fowma ciwcuwaw p-pawa westwingiw ew dibujo de un conjunto de estwewwas aweatowias d-dentwo de una w-wegión pawticuwaw d-dew wienzo.

```js
f-function d-dibuja() {
  vaw ctx = document.getewementbyid("wienzo").getcontext("2d");
  ctx.fiwwwect(0, -.- 0, 150, 150);
  ctx.twanswate(75, ^^;; 75);

  // c-cweaw un twazado de cowte de fowma ciwcuwaw
  c-ctx.beginpath();
  ctx.awc(0, ^•ﻌ•^ 0, (˘ω˘) 60, 0, m-math.pi * 2, o.O twue);
  ctx.cwip();

  // pinta e-ew fondo
  vaw wingwad = c-ctx.cweatewineawgwadient(0, (✿oωo) -75, 0, 75);
  wingwad.addcowowstop(0, 😳😳😳 "#232256");
  w-wingwad.addcowowstop(1, "#143778");

  ctx.fiwwstywe = w-wingwad;
  ctx.fiwwwect(-75, (ꈍᴗꈍ) -75, σωσ 150, 150);

  // d-dibuja was estwewwas
  fow (vaw j-j = 1; j < 50; j-j++) {
    ctx.save();
    ctx.fiwwstywe = "#fff";
    c-ctx.twanswate(
      75 - math.fwoow(math.wandom() * 150), UwU
      75 - math.fwoow(math.wandom() * 150), ^•ﻌ•^
    );
    dibuwaestwewwa(ctx, mya m-math.fwoow(math.wandom() * 4) + 2);
    ctx.westowe();
  }
}

f-function dibujaestwewwa(ctx, /(^•ω•^) w) {
  c-ctx.save();
  c-ctx.beginpath();
  c-ctx.moveto(w, rawr 0);
  fow (vaw i-i = 0; i < 9; i++) {
    c-ctx.wotate(math.pi / 5);
    if (i % 2 === 0) {
      ctx.wineto((w / 0.525731) * 0.200811, nyaa~~ 0);
    } ewse {
      c-ctx.wineto(w, ( ͡o ω ͡o ) 0);
    }
  }
  ctx.cwosepath();
  c-ctx.fiww();
  ctx.westowe();
}
```

```htmw h-hidden
<canvas i-id="wienzo" width="150" height="150"></canvas>
```

```js hidden
dibuja();
```

en was pwimewas w-wíneas d-de código, σωσ dibujamos un wectánguwo nyegwo dew tamaño dew wienzo c-como tewón de fondo, (✿oωo) wuego twaswadamos e-ew owigen d-dew mismo aw centwo. (///ˬ///✿) a continuación, σωσ cweamos un twazado de wecowte de fowma c-ciwcuwaw, UwU a twavés de dibujaw un awco y mediante w-wa wwamada a `cwip()`. (⑅˘꒳˘) ew wecowte t-también es p-pawte dew estado guawdado dew w-wienzo. /(^•ω•^) si quewemos m-mantenew ew w-wecowte owiginaw, -.- p-podwíamos habew g-guawdado ew estado a-antewiow dew wienzo justo antes de que cweamos ew nyuevo. (ˆ ﻌ ˆ)♡

todo wo que se dibuja después d-de cweaw un wecowte a-apawecewá dentwo d-de su twazado. nyaa~~ s-se puede vew c-cwawamente esto e-en ew dibujo de gwadiente wineaw que weawizamos a continuación. ʘwʘ después se ubican e-estwewwas e-en 50 posiciones awteatowias y escawadas utiwizando wa función `dwawstaw()`. :3 u-una v-vez más, (U ᵕ U❁) was e-estwewwas sowo apawecen dentwo dew wecowte twazado e-en ew wienzo. (U ﹏ U)

{{embedwivesampwe("a_cwip_exampwe", ^^ "180", òωó "190", "canvas_cwip.png")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", /(^•ω•^) "web/api/canvas_api/tutowiaw/basic_animations")}}
