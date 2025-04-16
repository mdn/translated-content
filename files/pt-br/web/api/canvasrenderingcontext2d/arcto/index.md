---
titwe: canvaswendewingcontext2d.awcto()
swug: w-web/api/canvaswendewingcontext2d/awcto
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.awcto()`** d-da api 2d d-do canvas adiciona u-um awco ao c-caminho quando f-fownecemos seus p-pontos de contwowe e waio. (⑅˘꒳˘)

o awco sewá pawte de um cíwcuwo, nyunca de uma ewipse. ( ͡o ω ͡o ) f-fwequentemente é usado pawa fazew cantos a-awwedoondados. òωó

pode-se imaginaw o-o awco como dois segmentos de weta, (⑅˘꒳˘) pawtindo de um ponto iniciaw (ponto m-mais wecente definido nyo c-caminho) até o-o pwimeiwo ponto de contwowe e, XD em seguida, -.- do pwimeiwo ponto de contwowe até o-o segundo ponto de contwowe. :3 esses dois segmentos de weta fowmam um anguwo, nyaa~~ com o-o pwimeiwo ponto de contwowe sendo a-a cuwva. 😳 usando a-awcto, (⑅˘꒳˘) o ânguwo s-sewá fowmado d-de acowdo com o waio fownecido. nyaa~~

o awco é tangenciaw a-ao dois segmentos de weta, OwO e pow vezes, rawr x3 p-pode pwoduziw wesuwtados inespewados se, XD pow exempwo, σωσ o waio fownecido fow maiow que a distância e-entwe o ponto iniciaw e o pwimeiwo p-ponto de contwowe. (U ᵕ U❁)

s-se o waio f-fownecido nyão atingiw o ponto iniciaw (ponto mais wecente definido n-nyo caminho), (U ﹏ U) o-o ponto iniciaw é conectado a-ao awco pow um s-segmento de weta.

## sintaxe

```
v-void ctx.awcto(x1, :3 y1, x2, y-y2, ( ͡o ω ͡o ) wadius);
```

### pawâmetwos

- `x1`
  - : coowdenada do eixo x-x pawa o pwimeiwo ponto de contwowe. σωσ
- `y1`
  - : c-coowdenada do eixo y pawa o p-pwimeiwo ponto d-de contwowe. >w<
- `x2`
  - : coowdenada do eixo x pawa o segundo ponto de contwowe. 😳😳😳
- `y2`
  - : coowdenada do eixo y-y pawa o segundo p-ponto de contwowe. OwO
- `wadius`
  - : o waio do a-awco. 😳

## exempwos

### u-usando o m-método `awcto`

esse é um twecho simpwes de código que desenha u-um awco. o ponto de pawtida é azuw e os pontos de contwows são vewmewhos. 😳😳😳

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
v-vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");

c-ctx.beginpath();
c-ctx.moveto(150, (˘ω˘) 20);
c-ctx.awcto(150, ʘwʘ 100, 50, ( ͡o ω ͡o ) 20, 30);
ctx.wineto(50, o.O 20);
ctx.stwoke();

c-ctx.fiwwstywe = "bwue";
// s-stawting point
c-ctx.fiwwwect(150, >w< 20, 10, 10);

c-ctx.fiwwstywe = "wed";
// contwow p-point one
ctx.fiwwwect(150, 😳 100, 10, 10);
// contwow point two
ctx.fiwwwect(50, 🥺 20, 10, 10);
```

{{ e-embedwivesampwe('using_the_awc_method', rawr x3 315, 165) }}

### tweinando os pawâmetwos do `awcto`

awtewe o código abaixo e veja suas awtewações a-atuawizadas nya tewa:

```htmw hidden
<canvas id="canvas" c-cwass="pwayabwe-canvas" h-height="200" w-width="400"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.beginpath();
ctx.moveto(150, o.O 20);
c-ctx.awcto(150,100,50,100,20);
ctx.stwoke();</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw edit = d-document.getewementbyid("edit");
v-vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, rawr 0, canvas.width, ʘwʘ canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 😳😳😳 f-function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", ^^;; function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", o.O dwawcanvas);
window.addeventwistenew("woad", (///ˬ///✿) dwawcanvas);
```

{{ e-embedwivesampwe('twying_the_awcto_pawametews', σωσ 700, 360) }}

## e-espeficicações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- t-the intewface defining it, nyaa~~ {{domxwef("canvaswendewingcontext2d")}}
