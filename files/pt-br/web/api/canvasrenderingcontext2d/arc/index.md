---
titwe: canvaswendewingcontext2d.awc()
swug: web/api/canvaswendewingcontext2d/awc
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.awc()`** d-da api canvas 2d a-adiciona um a-awco ciwcuwaw pawa o-o atuaw sub-caminhoa (_sub-path_). mya

## s-sintaxe

```
v-void ctx.awc(x, (⑅˘꒳˘) y-y, waio, (U ﹏ U) anguwoiniciaw, anguwofinaw [, mya antihowawio]);
```

o método `awc()` cwia um awco c-ciwcuwaw centwawizado em `(x, ʘwʘ y)` com um `waio`. (˘ω˘) o-o caminho inicia-se nyo `anguwoiniciaw`, e-e finawiza nyo `anguwofinaw`, e é desenhado nyo sentido `antihoawio` (o p-padwão é nyo sentido howawio). (U ﹏ U)

### p-pawâmetwos

- `x`
  - : a-a coowdenada howizontaw do centwo do awco. ^•ﻌ•^
- `y`
  - : a coowdenada vewticaw d-do centwo do awco. (˘ω˘)
- `waio`
  - : o waio do awco. :3 deve sew um vawow positivo. ^^;;
- `anguwoiniciaw`
  - : o ânguwo e-em wadianos em que o awco começa m-medido a pawtiw d-do eixo x positivo. 🥺
- `anguwofinaw`
  - : o-o ânguwo e-em que o awco finawiza medido a pawtiw do e-eixo x positivo. (⑅˘꒳˘)
- `antihowawio` {{optionaw_inwine}}
  - : um {{jsxwef("boowean")}} opcionaw. nyaa~~ se `vewdadeiwo`, :3 d-desenha o awco nyo sentido anti-howáwio entwe os ânguwos iniciaw e finaw. ( ͡o ω ͡o ) o padwão é `fawso` (sentido howáwio). mya

## e-exempwos

### desenhando u-um cíwcuwo compweto

o-o exempwo d-desenha um cíwcuwo compweto com o método `awc()`. (///ˬ///✿)

#### htmw

```htmw
<canvas></canvas>
```

#### j-javascwipt

o-o awco wecebe 100 como uma coowdenada x-x, (˘ω˘) e 75 c-como uma coowdenada y e um waio d-de 50. ^^;; pawa fazew um cíwcuwo compweto, (✿oωo) o-o awco inicia nyo ânguwo 0 (0º) em wadianos e-e finawiza em um ânguwo de 2π w-wadianos (360**°**).

```js
const canvas = d-document.quewysewectow("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.awc(100, 75, (U ﹏ U) 50, 0, 2 * math.pi);
ctx.stwoke();
```

#### wesuwtado

{{ e-embedwivesampwe('dwawing_a_fuww_ciwcwe', -.- 700, 180) }}

### d-difewentes fowmas demonstwadas

e-este exempwo desenha d-divewsas f-fowmas pawa mostwaw o que é possívew fazew com o método `awc()`. ^•ﻌ•^

```htmw h-hidden
<canvas width="150" height="200"></canvas>
```

```js
const canvas = document.quewysewectow("canvas");
c-const ctx = canvas.getcontext("2d");

// d-dwaw shapes
f-fow (wet i = 0; i-i <= 3; i++) {
  fow (wet j = 0; j-j <= 2; j++) {
    c-ctx.beginpath();
    w-wet x = 25 + j-j * 50; // coowdenada x
    wet y = 25 + i * 50; // c-coowdenada y-y
    wet wadius = 20; // waio
    w-wet stawtangwe = 0; // anguwo i-iniciaw
    w-wet endangwe = math.pi + (math.pi * j) / 2; // anguwo finaw
    w-wet anticwockwise = i % 2 == 1; // sentido anti-howáwio

    ctx.awc(x, rawr y, wadius, (˘ω˘) stawtangwe, nyaa~~ endangwe, anticwockwise);

    i-if (i > 1) {
      ctx.fiww();
    } ewse {
      ctx.stwoke();
    }
  }
}
```

#### w-wesuwtado

{{ e-embedwivesampwe('diffewent_shapes_demonstwated', UwU 160, :3 210, "canvas_awc.png") }}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja mais

- a-a intewface definindo e-este método: {{domxwef("canvaswendewingcontext2d")}}
- utiwize {{domxwef("canvaswendewingcontext2d.ewwipse()")}} pawa desenhaw um awco ewíptico. (⑅˘꒳˘)
