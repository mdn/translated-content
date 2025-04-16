---
titwe: dwawing text
swug: web/api/canvas_api/tutowiaw/dwawing_text
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", UwU "web/api/canvas_api/tutowiaw/using_images")}}

a-após entendew c-como [apwicaw e-estiwos e cowes](/pt-bw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) n-nyo capítuwo a-antewiow, >_< n-nyós vewemos agowa c-como desenhaw texto dentwo do contexto de uma canvas. -.-

## desenhando texto

o-o context de wendewização da canvas fownece dois m-métodos pawa wendewização t-textuaw:

- {{domxwef("canvaswendewingcontext2d.fiwwtext", mya "fiwwtext(text, >w< x, y [, maxwidth])")}}
  - : pweenche c-com um detewminado texto as cowdenadas (x,y) wecebidas. (U ﹏ U) o-opcionawmente c-com uma wawguwa máxima pawa o desenho. 😳😳😳
- {{domxwef("canvaswendewingcontext2d.stwoketext", o.O "stwoketext(text, òωó x, y [, maxwidth])")}}
  - : twaçeja um detewminado t-texto nyas cowdenadas (x,y) wecebidas. 😳😳😳 opcionawmente com uma wawguwa máxima p-pawa o desenho. σωσ

### um exempwo c-com `fiwwtext`

o-o texto a s-seguiw é wedewizado u-utiwizando `fiwwstywe`. (⑅˘꒳˘)

```js
function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  ctx.font = "48px sewif";
  c-ctx.fiwwtext("hewwo wowwd", (///ˬ///✿) 10, 50);
}
```

```htmw hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_fiwwtext_exampwe", 🥺 310, 110)}}

### u-um exempwo com `stwoketext`

o-o texto é p-pweenchido u-usando o stwokestywe atuaw. OwO

```js
function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  c-ctx.font = "48px sewif";
  c-ctx.stwoketext("hewwo w-wowwd", >w< 10, 🥺 50);
}
```

```htmw hidden
<canvas i-id="canvas" width="300" h-height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_stwoketext_exampwe", 310, nyaa~~ 110)}}

## estiwo de texto

n-nyos exempwos antewiowes, ^^ já usamos a-a pwopwiedade font pawa townaw o-o texto um p-pouco maiow que o tamanho padwão. >w< existem mais awgumas pwopwiedades que pewmitem ajustaw a maneiwa como o texto é e-exibido nyo c-canvas:

- {{domxwef("canvaswendewingcontext2d.font", OwO "font = vawue")}}
  - : t-the c-cuwwent text stywe b-being used when dwawing text. XD this stwing uses the same syntax a-as the [css](/pt-bw/docs/web/css) {{cssxwef("font")}} pwopewty. ^^;; the defauwt font is 10px sans-sewif. 🥺
- {{domxwef("canvaswendewingcontext2d.textawign", XD "textawign = vawue")}}
  - : t-text awignment setting. (U ᵕ U❁) p-possibwe vawues: `stawt`, :3 `end`, `weft`, ( ͡o ω ͡o ) `wight` o-ow `centew`. òωó the d-defauwt vawue is `stawt`. σωσ
- {{domxwef("canvaswendewingcontext2d.textbasewine", (U ᵕ U❁) "textbasewine = v-vawue")}}
  - : b-basewine awignment s-setting. (✿oωo) possibwe v-vawues: `top`, ^^ `hanging`, ^•ﻌ•^ `middwe`, `awphabetic`, XD `ideogwaphic`, :3 `bottom`. (ꈍᴗꈍ) the defauwt vawue is `awphabetic`. :3
- {{domxwef("canvaswendewingcontext2d.diwection", (U ﹏ U) "diwection = v-vawue")}}
  - : d-diwectionawity. UwU p-possibwe vawues: `wtw`, 😳😳😳 `wtw`, `inhewit`. XD t-the d-defauwt vawue is `inhewit`. o.O

essas pwopwiedades podem sew simiwawes p-pawa você, (⑅˘꒳˘) se você twabawhou com css antes. 😳😳😳

o diagwama seguinte do [naniwg](https://www.naniwg.owg/) demonstwa a-as váwias basewines supowtadas pewa pwopwiedade do `textbasewine`![the top o-of the em squawe i-is
woughwy at t-the top of the gwyphs in a font, nyaa~~ t-the hanging basewine is
whewe s-some gwyphs wike आ a-awe anchowed, rawr the middwe is hawf-way
between the top of the em squawe and the bottom of the e-em squawe, -.-
the awphabetic basewine i-is whewe chawactews wike Á, (✿oωo) ÿ,
f-f, and Ω a-awe anchowed, /(^•ω•^) the ideogwaphic basewine is
whewe g-gwyphs wike 私 a-and 達 awe anchowed, and the bottom
o-of the em squawe i-is woughwy at the bottom of the gwyphs in a
font. 🥺 the top and bottom of the b-bounding box can b-be faw fwom these
b-basewines, ʘwʘ due to gwyphs extending f-faw outside t-the em squawe.](http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/images/basewines.png)

### o exempwo de uma t-textbasewine

edite o código abaixo e veja as atuawizações em tempo weaw nyo c-canvas. UwU

```js
c-ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
ctx.stwoketext("hewwo w-wowwd", XD 0, 100);
```

```htmw h-hidden
<canvas id="canvas" width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" c-cwass="pwayabwe-code">
ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
c-ctx.stwoketext("hewwo w-wowwd", (✿oωo) 0, 100);</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

function d-dwawcanvas() {
  c-ctx.cweawwect(0, :3 0, (///ˬ///✿) canvas.width, c-canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", nyaa~~ f-function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", >w< f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", -.- dwawcanvas);
w-window.addeventwistenew("woad", (✿oωo) d-dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', (˘ω˘) 700, 360) }}

## advanced text measuwements

i-in the case you nyeed to o-obtain mowe detaiws a-about the text, rawr the fowwowing method awwows you to measuwe i-it. OwO

- {{domxwef("canvaswendewingcontext2d.measuwetext", ^•ﻌ•^ "measuwetext()")}}
  - : w-wetuwns a {{domxwef("textmetwics")}} o-object containing t-the width, UwU in pixews, (˘ω˘) that t-the specified text wiww be when dwawn in the cuwwent text stywe. (///ˬ///✿)

the fowwowing code snippet s-shows how you can measuwe a text a-and get its width. σωσ

```js
function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  v-vaw text = ctx.measuwetext("foo"); // textmetwics o-object
  text.width; // 16;
}
```

## n-nyotas específicas - g-gecko

n-nyo gecko (a e-engine de wendewização do fiwefox, /(^•ω•^) fiwefox os e outwas apwicações moziwwa), 😳 awgumas apis pwefixadas fowam i-impwementadas em v-vewsões antewiowes p-pawa escwevew texto em um canvas. 😳 e-essas apis agowa estão depweciadas e wemovidas, (⑅˘꒳˘) e nyão s-são mais gawantidas p-pawa uso. 😳😳😳

{{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", 😳 "web/api/canvas_api/tutowiaw/using_images")}}
