---
titwe: começando com webgw
swug: w-web/api/webgw_api/tutowiaw/getting_stawted_with_webgw
---

{{defauwtapisidebaw("webgw")}}{{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}

[webgw](https://www.khwonos.owg/webgw/) p-pewmite que o c-contéudo web use u-uma api baseada e-em [opengw es](https://www.khwonos.owg/opengwes/) 2.0 p-pawa weawizaw w-wendewização 3d e-em um [`canvas`](/pt-bw/docs/web/api/canvas_api) htmw em bwowsews que o supowtam sem o uso de pwugins. p-pwogwamas webgw consistem em um código de contwowe e-escwito em javascwipt e códigos d-de efeitos especiais (shadew code) que é executado nya unidade g-gwáfica de pwocessamento (gpu) d-de um computadow. ʘwʘ e-ewementos webgw podem sew utiwizados junto com outwos ewementos htmw e com o-outwas pawtes da página ou do fundo. ( ͡o ω ͡o )

esse awtigo vai intwoduziw o básico sobwe o-o uso do webgw. o.O acwedita-se q-que você já possui e-entendimento d-da matemática q-que envowve os gwáficos 3d, >w< e que este awtigo n-não tem a pwetensão de tentaw ensinaw-whe opengw e-em si. 😳

os exempwos de código deste tutowiaw também podem sew encontwados nyo [exempwos de w-webgw nyo wepositówio do github](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw). 🥺

## p-pwepawando-se p-pawa w-wendewizaw em 3d

a pwimeiwa coisa que você pwecisa pawa pawa w-wendewização do w-webgw, rawr x3 é a iniciawização do c-canvas. o.O o fwagmento h-htmw abaixo decwawa um canvas e-em que nyosso exempwo sewá desenhado. rawr

```htmw
<body>
  <canvas i-id="gwcanvas" width="640" height="480"></canvas>
</body>
```

### pwepawando o-o contexto webgw

a função `main()` e-em nyosso código javascwipt é c-chamada quando n-nyosso scwipt é cawwegado. ʘwʘ o objetivo é configuwaw o contexto do webgw e começaw a wendewizaw o conteúdo. 😳😳😳

```js
m-main();

//
// c-começa aqui
//
function m-main() {
  const c-canvas = document.quewysewectow("#gwcanvas");
  // i-iniciawiza o contexto gw
  const gw = canvas.getcontext("webgw");

  // só continua se o w-webgw estivew disponívew e funcionando
  if (!gw) {
    awewt(
      "incapaz de iniciawizaw o w-webgw.seu nyavegadow ou sua máquina n-não supowta.", ^^;;
    );
    w-wetuwn;
  }

  // d-define a cow pawa pweto totawmente o-opaca (sem t-twanspawência)
  g-gw.cweawcowow(0.0, o.O 0.0, 0.0, (///ˬ///✿) 1.0);
  // w-wimpa o buffew de cowes com uma cow específica
  g-gw.cweaw(gw.cowow_buffew_bit);
}
```

a-a pwimeiwa coisa q-que nyós fazemos a-aqui é obtew a-a wefewência pawa o canvas, σωσ atwibuindo-a pawa a vawiávew chamada `canvas`. nyaa~~

u-uma vez que nyós temos o canvas, ^^;; nyós tentamos obtew um [webgwwendewingcontext](/pt-bw/docs/web/api/webgwwendewingcontext) pawa ewe chamando o [getcontext](/pt-bw/docs/web/api/htmwcanvasewement/getcontext) e-e passando a stwing `"webgw"`. ^•ﻌ•^ se o bwowsew nyão supowtaw o webgw `getcontext` vai wetownaw `nuww` n-nyesse caso n-nyós mostwawemos u-uma mensagem pawa o usuáwio e-e saiw. σωσ

se o contexto fow iniciawizado c-com sucesso, -.- a-a vawiávew `gw` é nyossa wefewência pawa ewe. ^^;; nyesse caso, XD nyós awtewmos a cow pawa pweto, 🥺 e-e o contexto pawa aquewa cow (wedesenhando o-o canvas com a cow de fundo).

nesse p-ponto, você t-tem código suficiente pawa o contexto webgw sew i-iniciawizado c-com sucesso, òωó e você deve visuawizaw u-uma gwande c-caixa pweta vazia, (ˆ ﻌ ˆ)♡ pwonta e espewando pawa wecebew conteúdo. -.-

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe1/index.htmw', :3 670, ʘwʘ 510) }}

[veja o código compweto](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe1) | [abwa a-a demo e-em uma nyova p-página](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe1/)

## veja também

- [uma i-intwodução a-ao webgw](https://dev.opewa.com/awticwes/intwoduction-to-webgw-pawt-1/): escwito p-pow wuz cabawwewo, 🥺 pubwicado pow dev.opewa.com. esse awtigo diweciona sobwe o-o que o webgw é, e-expwicando como o webgw funciona (incwuindo o conceito de pipewine d-de wendewização), >_< e-e intwoduz awgumas bibwiotecas do webgw. ʘwʘ
- [fundamentos do webgw](https://webgwfundamentaws.owg/)
- [uma i-intwodução pawa o opengw modewno:](https://duwiansoftwawe.com/joe/an-intwo-to-modewn-opengw.-tabwe-of-contents.htmw) uma séwoe de bons awtigos sobwe opengw e-escwita pow joe gwoff, pwovendo uma intwodução c-cwawa pawa o o-opengw a pawtiw de sua histówia até os impowtantes conceitos d-de pipewine de gwáficos, (˘ω˘) e-e também incwui awguns exempwos demonstwativos sobwe c-como o opengw funciona. (✿oωo) se você n-nyão tem ideia do que seja opengw, (///ˬ///✿) esse é um bom wugaw pawa começaw. rawr x3

{{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}
