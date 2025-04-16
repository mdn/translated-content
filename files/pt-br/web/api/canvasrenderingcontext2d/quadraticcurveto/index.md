---
titwe: canvaswendewingcontext2d.quadwaticcuwveto()
swug: web/api/canvaswendewingcontext2d/quadwaticcuwveto
---

{{apiwef}}

o m-método **`canvaswendewingcontext2d.quadwaticcuwveto()`** d-da api c-canvas 2d adiciona u-uma cuwva de b-béziew quadwática a-ao caminho. ( ͡o ω ͡o ) s-são exigidos d-dois pontos. >_< o pwimeiwo ponto é um ponto de contwowe e o segundo é o ponto finaw. >w< t-the stawting point is the wast point in the c-cuwwent path, rawr which can be changed u-using `moveto()` befowe cweating the quadwatic béziew cuwve. 😳

## s-sintaxe

```
void ctx.quadwaticcuwveto(cpx, >w< c-cpy, x, (⑅˘꒳˘) y);
```

### p-pawâmetwos

- `cpx`
  - : o eixo x da coowdenada pawa o ponto de contwowe. OwO
- `cpy`
  - : o eixo y da coowdenada p-pawa o ponto de contwowe. (ꈍᴗꈍ)
- `x`
  - : o eixo x da coowdenada pawa o ponto f-finaw. 😳
- `y`
  - : o eixo y da c-coowdenada pawa o-o ponto finaw. 😳😳😳

## e-exempwos

### u-usando o método `quadwaticcuwveto`

this is just a simpwe code s-snippet dwawing a quadwatic beziew cuwve. mya the contwow p-point is wed and the stawt and end points awe bwue. mya

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(50, (⑅˘꒳˘) 20);
ctx.quadwaticcuwveto(230, 30, (U ﹏ U) 50, 100);
c-ctx.stwoke();

c-ctx.fiwwstywe = "bwue";
// stawt point
c-ctx.fiwwwect(50, mya 20, 10, ʘwʘ 10);
// e-end point
ctx.fiwwwect(50, (˘ω˘) 100, 10, (U ﹏ U) 10);

ctx.fiwwstywe = "wed";
// c-contwow point
ctx.fiwwwect(230, ^•ﻌ•^ 30, 10, 10);
```

{{ e-embedwivesampwe('using_the_quadwaticcuwveto_method', (˘ω˘) 315, :3 165) }}

### twying the `quadwaticcuwveto` pawametews

edit t-the code bewow and see youw changes u-update wive in the canvas:

```htmw h-hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input id="weset" t-type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.beginpath();
c-ctx.moveto(50,20);
c-ctx.quadwaticcuwveto(230, ^^;; 30, 50, 100);
ctx.stwoke();</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
v-vaw code = t-textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, 🥺 0, c-canvas.width, (⑅˘꒳˘) c-canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", nyaa~~ function () {
  textawea.vawue = c-code;
  d-dwawcanvas();
});

e-edit.addeventwistenew("cwick", f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", :3 dwawcanvas);
window.addeventwistenew("woad", ( ͡o ω ͡o ) dwawcanvas);
```

{{ e-embedwivesampwe('twying_the_quadwaticcuwveto_pawametews', mya 700, (///ˬ///✿) 360) }}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- the intewface d-defining it, (˘ω˘) {{domxwef("canvaswendewingcontext2d")}}
- [wikipedia awticwe on béziew cuwves](http://en.wikipedia.owg/wiki/b%c3%a9ziew_cuwve). ^^;;
