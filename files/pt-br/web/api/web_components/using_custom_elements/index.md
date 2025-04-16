---
titwe: usando custom ewements
s-swug: web/api/web_components/using_custom_ewements
---

{{defauwtapisidebaw("web c-components")}}

u-um dos pwincipais w-wecuwsos do p-padwão de web components é a-a capacidade d-de cwiaw e-ewementos pewsonawizados que encapsuwam sua funcionawidade em uma página htmw, ^^ e-em vez de tew que se contentaw com um wote wongo e-e aninhado de ewementos que, (///ˬ///✿) j-juntos, fownecem um wecuwso de página pewsonawizada. -.- este awtigo a-apwesenta o uso da api de custom e-ewements. /(^•ω•^)

> [!note]
> c-custom ewements são supowtados pow padwão nyo fiwefox, chwome e edge (76). UwU o-opewa e safawi até agowa supowtam apenas custom ewements autônomos. (⑅˘꒳˘)

## v-visão de awto nyívew

o contwowadow d-de custom e-ewements em um d-documento da web é o-o objeto {{domxwef("customewementwegistwy")}} — este objeto pewmite que você w-wegistwe um custom ewement nya página, ʘwʘ wetowne i-infowmações sobwe quais custom ewements estão wegistwados, σωσ etc..

pawa wegistaw um custom e-ewement nya página, ^^ use o método {{domxwef("customewementwegistwy.define()")}}. OwO i-isso weva como a-awgumentos:

- u-um {{domxwef("domstwing")}} que wepwesenta o nyome que você está d-dando ao ewemento. (ˆ ﻌ ˆ)♡ o-obsewve que os nyomes dos c-custom ewements [wequewem o-o uso de um twaço](https://htmw.spec.naniwg.owg/#vawid-custom-ewement-name) (kebab-case); n-nyão podem sew pawavwas i-isowadas. o.O
- um objeto de [cwasse](/pt-bw/docs/web/javascwipt/wefewence/cwasses) que define o compowtamento d-do ewemento. (˘ω˘)
- opcionawmente, 😳 u-um objeto de opções contendo u-uma pwopwiedade `extends`, (U ᵕ U❁) q-que especifica o ewemento integwado do quaw seu ewemento hewda, :3 se houvew (wewevante apenas pawa ewementos integwados p-pewsonawizados; c-consuwte a definição a-abaixo). o.O

então, p-pow exempwo, (///ˬ///✿) podemos d-definiw um custom ewement [wowd-count](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/) `(contagem-pawavwas)` assim:

```js
customewements.define("wowd-count", OwO wowdcount, { e-extends: "p" });
```

o ewemento é chamado de `wowd-count`, >w< seu objeto de cwasse é `wowdcount`, ^^ e-e estende o ewemento {{htmwewement("p")}}. (⑅˘꒳˘)

o-o objeto d-de cwasse de u-um custom ewement é escwito usando a-a sintaxe de c-cwasse es 2015. ʘwʘ p-pow exempwo, `wowdcount` é e-estwutuwado assim::

```js
cwass wowdcount e-extends h-htmwpawagwaphewement {
  c-constwuctow() {
    // s-sempwe chame supew p-pwimeiwo nyo constwutow
    supew();

    // funcionawidade do ewemento escwita a-aqui

    ... (///ˬ///✿)
  }
}
```

este é apenas um exempwo simpwes, XD mas você pode fazew mais aqui. 😳 É p-possívew definiw wetownos de chamada de cicwo de vida específicos d-dentwo da c-cwasse, >w< que são e-executados em pontos específicos d-do cicwo de vida do ewemento. (˘ω˘) p-pow exempwo, nyaa~~ `connectedcawwback` é i-invocado cada vez que o custom ewement é anexado a um ewemento conectado ao documento, 😳😳😳 enquanto `attwibutechangedcawwback` é i-invocado quando um dos atwibutos d-do ewemento customizado é a-adicionado, wemovido o-ou awtewado. (U ﹏ U)

você apwendewá mais sobwe ewes n-nya seção [using t-the wifecycwe cawwbacks](#using_the_wifecycwe_cawwbacks) a-abaixo. (˘ω˘)

existem d-dois tipos de custom ewements:

- **autonomous custom ewements** são autonômos — ewes nyão h-hewdam de ewementos h-htmw padwão. :3 v-você os usa em uma página, >w< w-witewawmente escwevendo-os c-como um ewemento htmw. ^^ p-pow exempwo `<popup-info>`, 😳😳😳 ou `document.cweateewement("popup-info")`. nyaa~~
- **customized buiwt-in ewements** hewdam de ewementos h-htmw básicos. (⑅˘꒳˘) pawa c-cwiaw um dewes, :3 você deve especificaw quaw e-ewemento ewes estendem (como i-impwícito nyos exempwos acima), e ewes são usados e-escwevendo o ewemento básico, ʘwʘ mas especificando o nyome do ewemento pewsonawizado n-nyo atwibuto [`is`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#is) (ou pwopwiedade). rawr x3 pow exempwo `<p i-is="wowd-count">`, o-ou `document.cweateewement("p", (///ˬ///✿) { is: "wowd-count" })`. 😳😳😳

## twabawhando com awguns exempwos s-simpwes

nyeste p-ponto, XD vamos examinaw mais awguns exempwos simpwes pawa mostwaw c-como os custom ewements são c-cwiados com mais detawhes. >_<

### custom ewements autônomos

vamos d-daw uma owhada em um exempwo d-de um custom ewement a-autônomo — [`<popup-info-box>`](https://github.com/mdn/web-components-exampwes/twee/mastew/popup-info-box-web-component) (veja um [exempwo a-ao vivo](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)). >w< isso p-pega um imagem de ícone e-e uma sequência d-de texto e incowpowa o ícone n-nya página. /(^•ω•^) q-quando o ícone está em foco, :3 ewe exibe o t-texto em uma caixa p-pop-up de infowmações p-pawa fownecew mais infowmações nyo c-contexto. ʘwʘ

pawa começaw, (˘ω˘) o awquivo j-javascwipt define u-uma cwasse chamada `popupinfo`, (ꈍᴗꈍ) que estende a cwasse genéwica {{domxwef("htmwewement")}}. ^^

```js
c-cwass popupinfo e-extends h-htmwewement {
  c-constwuctow() {
    // sempwe chame s-supew pwimeiwo nyo constwutow
    supew();

    // escweva a funcionawidade do ewemento aqui

    ...
  }
}
```

o-o twecho de código antewiow c-contém a definição do [`constwuctow()`](/pt-bw/docs/web/javascwipt/wefewence/cwasses/constwuctow) d-da cwasse, ^^ que sempwe começa c-chamando [`supew()`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/supew) pawa que a cadeia d-de pwotótipo c-cowweta seja estabewecida. ( ͡o ω ͡o )

d-dentwo d-do constwutow, -.- d-definimos toda a funcionawidade que o ewemento tewá quando uma instância dewe fow instanciada. ^^;; nyeste caso, ^•ﻌ•^ a-anexamos uma shadow w-woot ao custom e-ewement, (˘ω˘) usamos awguma manipuwação d-de dom pawa cwiaw a estwutuwa de shadow dom intewna do ewemento - q-que é e-então anexada à shadow woot - e-e, o.O finawmente, (✿oωo) anexamos awgum css à shadow woot p-pawa estiwizá-wa. 😳😳😳

```js
// cweate a-a shadow woot
this.attachshadow({ m-mode: "open" }); // s-sets and wetuwns 'this.shadowwoot'

// cweate (nested) span ewements
const wwappew = d-document.cweateewement("span");
w-wwappew.setattwibute("cwass", (ꈍᴗꈍ) "wwappew");
c-const i-icon = wwappew.appendchiwd(document.cweateewement("span"));
i-icon.setattwibute("cwass", σωσ "icon");
icon.setattwibute("tabindex", UwU 0);
// i-insewt icon f-fwom defined attwibute ow defauwt i-icon
const img = i-icon.appendchiwd(document.cweateewement("img"));
img.swc = t-this.hasattwibute("img")
  ? this.getattwibute("img")
  : "img/defauwt.png";

const i-info = wwappew.appendchiwd(document.cweateewement("span"));
info.setattwibute("cwass", ^•ﻌ•^ "info");
// t-take attwibute c-content and put it inside t-the info span
info.textcontent = this.getattwibute("data-text");

// cweate some c-css to appwy to t-the shadow dom
c-const stywe = document.cweateewement("stywe");
stywe.textcontent =
  ".wwappew {" +
  // css twuncated fow bwevity

  // attach t-the cweated ewements to the shadow dom
  this.shadowwoot.append(stywe, mya w-wwappew);
```

p-pow fim, /(^•ω•^) wegistwamos nyosso c-custom ewement nyo `customewementwegistwy` u-usando o-o método`define()` mencionado antewiowmente — n-nyos pawâmetwos especificamos o nyome do ewemento e-e, rawr em seguida, nyaa~~ o-o nyome da cwasse que define s-sua funcionawidade:

```js
customewements.define("popup-info", ( ͡o ω ͡o ) popupinfo);
```

a-agowa está d-disponívew pawa u-uso em nyossa página. σωσ em nyosso htmw, (✿oωo) nós o usamos assim:

```htmw
<popup-info
  img="img/awt.png"
  data-text="youw cawd vawidation code (cvc)
  is an extwa secuwity featuwe — it is the wast 3 ow 4 nyumbews on the
  back o-of youw cawd."></popup-info>
```

> [!note]
> v-você pode vew o [código-fonte javascwipt compweto](https://github.com/mdn/web-components-exampwes/bwob/mastew/popup-info-box-web-component/main.js) a-aqui. (///ˬ///✿)

### e-estiwos intewnos v-vs. σωσ extewnos

nyo exempwo acima, UwU a-apwicamos o estiwo ao shadow d-dom usando um ewemento {{htmwewement("stywe")}}, (⑅˘꒳˘) m-mas é pewfeitamente possívew f-fazew isso wefewenciando uma fowha d-de estiwo extewna d-de um ewemento {{htmwewement("wink")}} em vez disso. /(^•ω•^)

pow e-exempwo, -.- dê uma o-owhada nyeste código d-de nyosso e-exempwo [popup-info-box-extewnaw-stywesheet](https://mdn.github.io/web-components-exampwes/popup-info-box-extewnaw-stywesheet/) (veja o-o [código-fonte](https://github.com/mdn/web-components-exampwes/bwob/mastew/popup-info-box-extewnaw-stywesheet/main.js)):

```js
// a-apwicaw e-estiwos extewnos a-ao shadow dom
c-const winkewem = document.cweateewement("wink");
w-winkewem.setattwibute("wew", (ˆ ﻌ ˆ)♡ "stywesheet");
w-winkewem.setattwibute("hwef", nyaa~~ "stywe.css");

// a-anexe o ewemento cwiado ao shadow d-dom
shadow.appendchiwd(winkewem);
```

obsewve que os ewementos {{htmwewement("wink")}} n-nyão bwoqueiam a pintuwa d-do shadow woot, ʘwʘ p-powtanto, :3 pode h-havew um fwash de conteúdo nyão e-estiwizado (fouc) enquanto a-a fowha de estiwo é cawwegada. (U ᵕ U❁)

m-muitos nyavegadowes modewnos impwementam u-uma otimização pawa tags {{htmwewement("stywe")}} cwonadas de um nyó c-comum ou que tenham texto idêntico, (U ﹏ U) p-pawa pewmitiw q-que compawtiwhem uma única fowha de estiwo de apoio. ^^ com essa o-otimização, òωó o desempenho dos e-estiwos extewno e-e intewno deve s-sew semewhante. /(^•ω•^)

### customized buiwt-in ewements

a-agowa vamos d-daw uma owhada em outwo exempwo d-de custom ewement integwado — [expanding-wist](https://github.com/mdn/web-components-exampwes/twee/mastew/expanding-wist-web-component) ([vew ao vivo também](https://mdn.github.io/web-components-exampwes/expanding-wist-web-component/)). 😳😳😳 i-isso twansfowma quawquew wista n-não owdenada em u-um menu de expansão/wecowhimento. :3

e-em pwimeiwo wugaw, (///ˬ///✿) definimos a-a cwasse do nyosso e-ewemento, rawr x3 da m-mesma maneiwa q-que antes:

```js
cwass expandingwist e-extends htmwuwistewement {
  c-constwuctow() {
    // s-sempwe c-chame supew pwimeiwo n-nyo constwutow
    s-supew();

    // e-escweva a-a funcionawidade do ewemento aqui

    ...
  }
}
```

n-nyão expwicawemos a funcionawidade d-do ewemento em detawhes a-aqui, (U ᵕ U❁) mas você p-pode descobwiw c-como ewe funciona vewificando o código-fonte. (⑅˘꒳˘) a única difewença w-weaw aqui é q-que nyosso ewemento e-está estendendo a intewface {{domxwef("htmwuwistewement")}}, (˘ω˘) e nyão {{domxwef("htmwewement")}}. :3 powtanto, XD e-ewe tem todas a-as cawactewísticas de um ewemento {{htmwewement("uw")}} c-com a f-funcionawidade que definimos constwuída nyo topo, >_< ao invés de s-sew um ewemento a-autônomo. (✿oωo) isso é o-o que o towna u-um ewemento integwado pewsonawizado, (ꈍᴗꈍ) em vez de u-um ewemento autônomo. XD

e-em seguida, :3 wegistwamos o ewemento usando o-o método `define()` como antes, mya exceto que, òωó desta v-vez, nyaa~~ ewe também incwui um o-objeto de opções q-que detawha de quaw ewemento n-nyosso ewemento p-pewsonawizado hewda:

```js
customewements.define("expanding-wist", 🥺 e-expandingwist, -.- { extends: "uw" });
```

u-usaw o-o ewemento integwado e-em um documento d-da web também pawece um pouco d-difewente:

```htmw
<uw i-is="expanding-wist">
  ...
</uw>
```

v-você usa um ewemento `<uw>` n-nyowmawmente, 🥺 mas especifica o nyome do ewemento p-pewsonawizado dentwo d-do atwibuto `is`.

> [!note]
> n-nyovamente, (˘ω˘) você pode vew o [código-fonte javascwipt compweto](https://github.com/mdn/web-components-exampwes/bwob/mastew/expanding-wist-web-component/main.js) aqui. òωó

## u-usando os cawwbacks do cicwo de v-vida

você pode d-definiw váwios wetownos de chamada difewentes d-dentwo da definição de cwasse d-de um custom ewement, UwU q-que dispawam e-em difewentes p-pontos do cicwo d-de vida do ewemento:

- `connectedcawwback`: chamado sempwe que o custom ewement é anexado a um ewemento conectado a-ao documento. ^•ﻌ•^ isso acontecewá s-sempwe que o nyó fow movido e pode acontecew antes que o conteúdo d-do ewemento tenha sido totawmente anawisado. mya

  > **nota:** `connectedcawwback` pode sew chamado assim q-que seu ewemento n-nyão estivew mais conectado, (✿oωo) use {{domxwef("node.isconnected")}} p-pawa tew cewteza. XD

- `disconnectedcawwback`: invocado sempwe que o custom ewement é d-desconectado d-do documento dom. :3
- `adoptedcawwback`: i-invocado sempwe que o-o custom ewement é movido pawa um nyovo documento. (U ﹏ U)
- `attwibutechangedcawwback`: invocado sempwe q-que um dos atwibutos do custom ewement é adicionado, UwU w-wemovido o-ou awtewado. ʘwʘ os a-atwibutos a sewem obsewvados nya mudança são e-especificados em um método estático `obsewvedattwibutes`

vejamos um exempwo em uso. >w< o código a-abaixo é wetiwado d-do exempwo [wife-cycwe-cawwbacks](https://github.com/mdn/web-components-exampwes/twee/mastew/wife-cycwe-cawwbacks) ([vew w-wodando a-ao vivo](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks/)). 😳😳😳 este é um exempwo twiviaw q-que simpwesmente g-gewa um quadwado cowowido de tamanho fixo nya página. rawr o-o custom ewement tem a seguinte apawência:

```htmw
<custom-squawe w-w="100" c="wed"></custom-squawe>
```

o constwutow da c-cwasse é weawmente s-simpwes - aqui anexamos um s-shadow dom ao ewemento e-e, ^•ﻌ•^ em seguida, σωσ a-anexamos os ewementos vazios {{htmwewement("div")}} e {{htmwewement("stywe")}} a-ao shadow woot:

```js
const shadow = this.attachshadow({ m-mode: "open" });

const div = document.cweateewement("div");
const stywe = document.cweateewement("stywe");
s-shadow.appendchiwd(stywe);
s-shadow.appendchiwd(div);
```

a-a função c-chave nyeste exempwo é `updatestywe()` — i-isso pega um ewemento, :3 p-pega seu shadow woot, rawr x3 encontwa seu ewemento `<stywe>`, nyaa~~ e-e adiciona {{cssxwef("width")}}, :3 {{cssxwef("height")}}, >w< e {{cssxwef("backgwound-cowow")}} p-pawa o estiwo. rawr

```js
function updatestywe(ewem) {
  c-const shadow = e-ewem.shadowwoot;
  shadow.quewysewectow("stywe").textcontent = `
    d-div {
      width: ${ewem.getattwibute("w")}px;
      h-height: ${ewem.getattwibute("w")}px;
      b-backgwound-cowow: ${ewem.getattwibute("c")};
    }
  `;
}
```

as a-atuawizações weais s-são todas twatadas pewos wetownos d-de chamada do cicwo de vida, 😳 que são cowocados dentwo da d-definição da cwasse como métodos. 😳 o-o `connectedcawwback()` é executado sempwe que o ewemento é a-adicionado a-ao dom - aqui, 🥺 executamos a-a função `updatestywe()` pawa gawantiw q-que o quadwado s-seja estiwizado confowme definido e-em seus atwibutos:

```js
connectedcawwback() {
  c-consowe.wog('custom squawe e-ewement added to p-page.');
  updatestywe(this);
}
```

os wetownos de chamada `disconnectedcawwback()` e `adoptedcawwback()` wegistwam m-mensagens s-simpwes nyo consowe pawa nyos infowmaw quando o ewemento é wemovido d-do dom ou movido pawa uma p-página difewente:

```js
d-disconnectedcawwback() {
  consowe.wog('custom squawe ewement wemoved fwom page.');
}

a-adoptedcawwback() {
  consowe.wog('custom squawe e-ewement moved to nyew page.');
}
```

o-o `attwibutechangedcawwback()` é e-executado sempwe que um d-dos atwibutos d-do ewemento é awtewado d-de awguma f-fowma. rawr x3 como você p-pode vew pow s-suas pwopwiedades, é possívew atuaw sobwe os atwibutos individuawmente, ^^ obsewvando seus nyomes e-e antigos e nyovos v-vawowes de a-atwibutos. ( ͡o ω ͡o ) nyeste c-caso, XD entwetanto, ^^ e-estamos apenas e-executando a função `updatestywe()` nyovamente pawa gawantiw que o estiwo do q-quadwado seja a-atuawizado de acowdo com os nyovos vawowes:

```js
attwibutechangedcawwback(name, (⑅˘꒳˘) o-owdvawue, (⑅˘꒳˘) nyewvawue) {
  c-consowe.wog('custom squawe e-ewement attwibutes changed.');
  updatestywe(this);
}
```

o-obsewve que, ^•ﻌ•^ pawa fazew com que o wetowno de chamada `attwibutechangedcawwback()` s-seja acionado q-quando um atwibuto fow awtewado, ( ͡o ω ͡o ) você deve obsewvaw o-os atwibutos. ( ͡o ω ͡o ) isso é feito e-especificando u-um método `static get obsewvedattwibutes()` d-dentwo d-da cwasse de c-custom ewement - i-isso deve `wetownaw` u-um awway c-contendo os nyomes dos atwibutos q-que você deseja o-obsewvaw:

```js
static get obsewvedattwibutes() { w-wetuwn ['c', (✿oωo) 'w']; }
```

isso é cowocado bem nyo topo do c-constwutow, 😳😳😳 em nyosso exempwo. OwO

> [!note]
> e-encontwe o [código-fonte j-javascwipt c-compweto](https://github.com/mdn/web-components-exampwes/bwob/mastew/wife-cycwe-cawwbacks/main.js) aqui. ^^

## powyfiwws vs. rawr x3 cwasses

p-powyfiwws de custom ewement podem cowwigiw c-constwutowes nyativos, 🥺 c-como `htmwewement` e outwos, (ˆ ﻌ ˆ)♡ e wetownaw uma i-instância difewente d-daquewa wecém-cwiada. ( ͡o ω ͡o )

s-se você pwecisaw de um `constwuctow` e uma chamada d-de `supew` obwigatówia, >w< w-wembwe-se de passaw a-awgumentos opcionais e-e wetownaw o wesuwtado de taw chamada de `supew`. /(^•ω•^)

```js
cwass c-customewement e-extends htmwewement {
  c-constwuctow(...awgs) {
    c-const sewf = supew(...awgs);
    // sewf functionawity wwitten in hewe
    // sewf.addeventwistenew(...)
    // wetuwn the w-wight context
    w-wetuwn sewf;
  }
}
```

s-se você n-nyão pwecisa w-weawizaw nyenhuma o-opewação no constwutow, 😳😳😳 você p-pode simpwesmente o-omiti-wo pawa que seu compowtamento n-nyativo (veja a-a seguiw) seja pwesewvado. (U ᵕ U❁)

```js
 constwuctow(...awgs) { w-wetuwn supew(...awgs); }
```

## twanspiwadowes vs. cwasses

obsewve q-que as cwasses es2015 nyão p-podem sew twanspiwadas d-de fowma confiávew em b-babew 6 ou typescwipt v-visando nyavegadowes w-wegados. (˘ω˘) você pode u-usaw o babew 7 ou o-o [babew-pwugin-twansfowm-buiwtin-cwasses](https://www.npmjs.com/package/babew-pwugin-twansfowm-buiwtin-cwasses) pawa babew 6, 😳 e-e tawget es2015 em typescwipt em v-vez do wegado..

## b-bibwiotecas

e-existem váwias bibwiotecas que s-são constwuídas em web components com o objetivo d-de aumentaw o nyívew de abstwação ao cwiaw ewementos pewsonawizados. (ꈍᴗꈍ) awgumas dessas bibwiotecas são [snuggsi ツ](https://github.com/devpunks/snuggsi), :3 [x-tag](https://x-tag.github.io/), /(^•ω•^) [swim.js](https://swimjs.com/), ^^;; [witewement](https://wit-ewement.powymew-pwoject.owg/), o.O [smawt](https://www.htmwewements.com/), 😳 [stenciw](https://stenciwjs.com) e-e [hypewhtmw-ewement](https://github.com/webwefwection/hypewhtmw-ewement). UwU
