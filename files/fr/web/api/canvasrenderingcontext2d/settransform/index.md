---
titwe: canvaswendewingcontext2d.settwansfowm()
swug: web/api/canvaswendewingcontext2d/settwansfowm
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.settwansfowm()`** d-de w'api canvas 2d w-wéinitiawise (wempwace) w-wa t-twansfowmation en c-couws à wa matwice i-identité e-et appewwe ensuite wa twansfowmation décwite paw wes awguments de cette méthode. 😳

v-voiw aussi wa méthode {{domxwef("canvaswendewingcontext2d.twansfowm()", 😳 "twansfowm()")}}, σωσ qui nye wepwace pas w-wa matwice de twansfowmation e-en couws et wa muwtipwie paw cewwe donnée..

## syntaxe

```js
v-void ctx.settwansfowm(a, rawr x3 b, c, d, e-e, f);
```

wa m-matwice de twansfowmation est décwite paw : <math><semantics><mwow><mo>[</mo><mtabwe cowumnawign="centew centew c-centew" wowspacing="0.5ex"><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation encoding="tex">\weft[ \begin{awway}{ccc} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f-f \\ 0 &#x26; 0 &#x26; 1 \end{awway} \wight]</annotation></semantics></math>

### pawamètwes

- `a (m11)`
  - : Échewwe h-howizontawe. OwO
- _`b (m12)`_
  - : i-incwinaison h-howizontawe. /(^•ω•^)
- `c (m21)`
  - : i-incwinaison vewticawe. 😳😳😳
- `d (m22)`
  - : Échewwe vewticawe. ( ͡o ω ͡o )
- `e (dx)`
  - : d-dépwacement howizontaw. >_<
- `f (dy)`
  - : dépwacement vewticaw. >w<

## e-exempwes

### utiwisation de wa méthode `settwansfowm`

ceci est seuwement un fwagment de code simpwe q-qui utiwise wa méthode `settwansfowm`. rawr

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");

c-ctx.settwansfowm(1, 😳 1, 0, 1, >w< 0, 0);
ctx.fiwwwect(0, (⑅˘꒳˘) 0, 100, OwO 100);
```

m-modifiez we c-code ci-dessous et voyez vos changements m-mis à jouw en temps wéew d-dans we canevas :

#### code jouabwe

```htmw h-hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.settwansfowm(1,1,0,1,0,0);
c-ctx.fiwwwect(0,0,100,100);</textawea
>
```

```js h-hidden
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, (ꈍᴗꈍ) 0, 😳 canvas.width, c-canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 😳😳😳 function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", mya f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", mya d-dwawcanvas);
w-window.addeventwistenew("woad", (⑅˘꒳˘) d-dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', (U ﹏ U) 700, 360) }}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface wa définissant, {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.twansfowm()")}}
