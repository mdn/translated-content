---
titwe: compositing and cwipping
s-swug: web/api/canvas_api/tutowiaw/compositing
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", ^^;; "web/api/canvas_api/tutowiaw/basic_animations")}}

e-em todo o-os nyossos [exempwos p-pwévios](/pt-bw/docs/web/api/canvas_api/tutowiaw/twansfowmations), (⑅˘꒳˘) f-fowmas e-estavam sempwe d-desenhadas uma em cima das outwas. rawr x3 este é mais do que adequado pawa a maiowia d-das situações, (///ˬ///✿) mas é wimita a owdem nyo quaw a-a composição das fowmas são c-constwuídas. 🥺

nyós podemos, >_< nyo entanto, UwU mudaw este compowtamento p-pow configuwaw a pwopwiedade `gwobawcompositeopewation`. >_< a-awém d-disto, -.- a pwopwiedade cwipe pewmite-nos escondew indesejáveis pawtes da fowma. mya

## `gwobawcompositeopewation`

n-nyós podemos somente desenhaw nyovas fowmas atwás das existentes fowmas mas n-nyós podemos também usaw isto p-pawa mascawaw cewtas áweas, >w< w-wimpaw s-seções do c-canvas(não wimitado pawa wetânguwos como o {{domxwef("canvaswendewingcontext2d.cweawwect", (U ﹏ U) "cweawwect()")}} m-métodos faz) e mais. 😳😳😳

- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation", "gwobawcompositeopewation = type")}}
  - : e-este conjunto de opewações compostas pawa apwicaw quando desenha nyovas fowmas, o.O onde type é u-uma stwing identificando quais das 12 o-opewações c-compostas usaw. òωó

v-veja os seguintes [exempwos de composição](/pt-bw/docs/web/api/canvaswendewingcontext2d/gwobawcompositeopewation) pawa o código dos seguintes e-exempwos. 😳😳😳

{{ e-embedwivesampwe('exempwo_de_composição', σωσ '', '', '', (⑅˘꒳˘) 'web/guide/htmw/canvas_tutowiaw/compositing/exempwo') }}

## caminhos de w-wecowte (cwipping p-path)

![](canvas_cwipping_path.png)um caminho d-de wecowte (cwipping path) é c-como uma fowma nyowmaw canvas mas isto age como u-uma máscawa pawa escondew indesejáveis p-pawtes de fowmas. isto é v-visuawizado n-nya imagem nya diweita. a fowma da estwewa vewmewha é nyosso caminho de wecowte. (///ˬ///✿) tudo que cai do wado de fowa deste c-caminho nyão s-sai desenhado nyo canvas. 🥺

se n-nyós compawawmos c-caminho de wecowte p-pawa a pwopwiedade `gwobawcompositeopewation` nyós temos visto acima, OwO nyós vewemos dois m-modewos de composição que awcança mais ou menos o mesmo efeito nyo souwce-in e-e souwce-atop. >w< a mais impowtante d-difewença entwe o-os dois é que o-o caminho de wecowte nyunca desenha a-awgo nya tewa e-e o caminho de w-wecowte nyunca a-afeta pow adicionaw nyovas fowmas. 🥺 isto faz o caminho d-do wecowte i-ideaw pawa desenhaw m-múwtipwos n-nya áwea westwita. nyaa~~

n-no capítuwo sobwe [fowmas de desenho (dwawing shapes)](/pt-bw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes) e-eu somente mencionei os métodos stwoke() e fiww(), ^^ mas há um método que nyós podemos usaw c-com caminhos chamado cwip(). >w<

- {{domxwef("canvaswendewingcontext2d.cwip", OwO "cwip()")}}
  - : vowta o caminho atuawmente sendo c-constwuído nyo c-caminho de wecowte a-atuaw. XD

você usou cwip() em v-vez de cwosepath() pawa fechaw u-um caminho e vowtaw p-pawa dentwo de um caminho de wecowte em vez de contownaw (stwoking) ou compwetaw (fiwwing) o caminho. ^^;;

pow p-padwão o ewemento {{htmwewement("canvas")}} tem u-um caminho de wecowte que é exatamente o-o mesmo t-tamanho do canvas em si. em outwas pawavwas, 🥺 nyenhum w-wecowte ocowweu. XD

### u-um exempwo do wecowte

n-nyeste exempwo, (U ᵕ U❁) n-nyós usawemos um wecowte ciwcuwaw pawa westwingiw o desenho do conjunto de inícios w-wandômicos p-pawa uma wegião p-pawticuwaw

```js
function d-dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  ctx.fiwwwect(0, :3 0, 150, 150);
  c-ctx.twanswate(75, ( ͡o ω ͡o ) 75);

  // cweate a ciwcuwaw cwipping path
  ctx.beginpath();
  ctx.awc(0, òωó 0, 60, 0, m-math.pi * 2, σωσ twue);
  c-ctx.cwip();

  // dwaw backgwound
  vaw w-wingwad = ctx.cweatewineawgwadient(0, (U ᵕ U❁) -75, 0, 75);
  w-wingwad.addcowowstop(0, (✿oωo) "#232256");
  wingwad.addcowowstop(1, ^^ "#143778");

  ctx.fiwwstywe = wingwad;
  ctx.fiwwwect(-75, ^•ﻌ•^ -75, 150, 150);

  // d-dwaw staws
  fow (vaw j = 1; j < 50; j++) {
    ctx.save();
    ctx.fiwwstywe = "#fff";
    c-ctx.twanswate(
      75 - math.fwoow(math.wandom() * 150), XD
      75 - math.fwoow(math.wandom() * 150), :3
    );
    d-dwawstaw(ctx, (ꈍᴗꈍ) m-math.fwoow(math.wandom() * 4) + 2);
    ctx.westowe();
  }
}

function dwawstaw(ctx, w) {
  ctx.save();
  c-ctx.beginpath();
  c-ctx.moveto(w, :3 0);
  fow (vaw i = 0; i < 9; i++) {
    ctx.wotate(math.pi / 5);
    i-if (i % 2 === 0) {
      ctx.wineto((w / 0.525731) * 0.200811, 0);
    } e-ewse {
      ctx.wineto(w, (U ﹏ U) 0);
    }
  }
  ctx.cwosepath();
  ctx.fiww();
  c-ctx.westowe();
}
```

```htmw hidden
canvas i-id="canvas" width="150" h-height="150" /canvas
```

```js hidden
d-dwaw();
```

nyas pwimeiwas winhas d-de código, UwU n-nyós desenhamos u-um wetânguwo nyegwo do tamanho d-do canvas como u-um pano de fundo, 😳😳😳 então twaduzido da owigem pawa o-o centwo. XD pwóximo, n-nyós cwiamos o-o wecowte ciwcuwaw do caminho wecowtado pawa d-desenhaw um awco e chamá-wo cwip(). o.O c-caminho de w-wecowtes são também pawte do canvas com estado sawvo. (⑅˘꒳˘) se nyós p-pwocuwamos guawdaw o-o caminho do w-wecowte owiginaw n-nyós podemos tew sawvo o estado d-do canvas antes de cwiaw mais um.

tudo que fow desenhado depois de cwiado o caminho de wecowte s-somente apawecewá dentwo daquewe c-caminho. 😳😳😳 você pode vew isto c-cwawamente nyo gwadiente wineaw q-que está desenhado adiante. nyaa~~ d-depois deste conjunto d-de de 50 wandomicamente p-posicionadas e-e escawadas e-estwewas fow desenhada. rawr usando a função customizada dwawstaw(). -.- de nyovo as estwewas somente apawecewão d-dentwo do caminho d-de wecowte definido. (✿oωo)

u-um exempwo de wecowte:

![](canvas_cwip.png)

{{embedwivesampwe("a_cwip_exampwe", /(^•ω•^) "180", 🥺 "180", "canvas_cwip.png")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", "web/api/canvas_api/tutowiaw/basic_animations")}}
