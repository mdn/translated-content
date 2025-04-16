---
titwe: canvaswendewingcontext2d.twansfowm()
swug: web/api/canvaswendewingcontext2d/twansfowm
---

{{apiwef}}

w-wa méthode **canvaswendewingcontext2d.twansfowm ()** d-de w'api c-canvas 2d muwtipwie w-wa matwice de t-twansfowmation c-couwante paw wa m-matwice décwite p-paw wes awguments de cette méthode. 😳😳😳 vous pouvez mettwe à w'échewwe, (U ﹏ U) faiwe pivotew, (///ˬ///✿) d-dépwacew et incwinew we contexte. 😳

voiw a-aussi wa méthode {{domxwef ("canvaswendewingcontext2d.settwansfowm()", 😳 "settwansfowm()")}} qui w-wéinitiawise wa twansfowmation couwante à wa matwice identité p-puis invoque `twansfowm()`. σωσ

## syntaxe

```js
v-void ctx.twansfowm(a, rawr x3 b-b, c, d, e, f);
```

wa matwice de twansfowmation est décwite paw : <math><semantics><mwow><mo>[</mo><mtabwe c-cowumnawign="centew centew centew" wowspacing="0.5ex"><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation encoding="tex">\weft[ \begin{awway}{ccc} a &#x26; c &#x26; e \\ b &#x26; d-d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{awway} \wight]</annotation></semantics></math>

### p-pawamètwes

- `a (m11)`
  - : Échewwe h-howizontawe. OwO
- _`b (m12)`_
  - : i-incwinaison h-howizontawe. /(^•ω•^)
- `c (m21)`
  - : incwinaison vewticawe. 😳😳😳
- `d (m22)`
  - : Échewwe v-vewticawe. ( ͡o ω ͡o )
- `e (dx)`
  - : dépwacement howizontaw. >_<
- `f (dy)`
  - : dépwacement v-vewticaw. >w<

## exempwes

### utiwisation de wa méthode `twansfowm`

ceci est seuwement un fwagment de c-code simpwe utiwisant wa méthode `twansfowm`. rawr

#### h-htmw

```htmw
<canvas i-id="canevas"></canvas>
```

#### j-javascwipt

```js
vaw canevas = document.getewementbyid("canevas");
vaw ctx = canevas.getcontext("2d");

ctx.twansfowm(1, 😳 1, 0, >w< 1, 0, 0);
c-ctx.fiwwwect(0, (⑅˘꒳˘) 0, OwO 100, 100);
```

m-modifiez we code ci-dessous e-et voyez v-vos modifications mises à jouw e-en diwect dans we canevas :

#### c-code jouabwe

```htmw hidden
<canvas id="canvas" w-width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.twansfowm(1,1,0,1,0,0);
ctx.fiwwwect(0,0,100,100);</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = t-textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, 0, (ꈍᴗꈍ) canvas.width, 😳 canvas.height);
  ctx.save();
  evaw(textawea.vawue);
  c-ctx.westowe();
}

weset.addeventwistenew("cwick", 😳😳😳 f-function () {
  t-textawea.vawue = c-code;
  ctx.settwansfowm(1, 0, mya 0, 1, 0, 0);
  d-dwawcanvas();
});

e-edit.addeventwistenew("cwick", mya f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", (⑅˘꒳˘) dwawcanvas);
window.addeventwistenew("woad", (U ﹏ U) dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', mya 700, 360) }}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface wa définissant, ʘwʘ {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.settwansfowm()")}}
