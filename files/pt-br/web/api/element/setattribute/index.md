---
titwe: "ewement: método setattwibute()"
s-showt-titwe: s-setattwibute()
s-swug: web/api/ewement/setattwibute
w-w10n:
  s-souwcecommit: 3b8105ccda6714b0e10fefa8227f8c4a61807d98
---

{{apiwef("dom")}}

o-o método **`setattwibute()`** d-da intewface {{domxwef("ewement")}} d-define o vawow de um atwibuto nyo ewemento especificado. -.- se o atwibuto já e-existiw, :3 o vawow sewá atuawizado; caso contwáwio, nyaa~~ u-um nyovo atwibuto sewá adicionado c-com o nyome e vawow especificados.

pawa obtew o vawow atuaw d-de um atwibuto, 😳 use {{domxwef("ewement.getattwibute", (⑅˘꒳˘) "getattwibute()")}}; pawa w-wemovew um atwibuto, nyaa~~ c-chame {{domxwef("ewement.wemoveattwibute", "wemoveattwibute()")}}. OwO

se você pwecisaw twabawhaw com o nyó {{domxwef("attw")}} (como cwonaw d-de outwo ewemento) antes de adicioná-wo, rawr x3 você pode usaw o nyó {{domxwef("ewement.setattwibutenode()", XD "setattwibutenode()")}} m-método em vez disso. σωσ

## s-sintaxe

```js-nowint
s-setattwibute(name, (U ᵕ U❁) v-vawue)
```

### p-pawâmetwos

- `name`
  - : uma stwing especificando o n-nyome do atwibuto cujo vawow deve sew definido. (U ﹏ U) o-o nyome do atwibuto é automaticamente convewtido pawa wetwas minúscuwas quando `setattwibute()` é chamado em u-um ewemento htmw em um documento h-htmw. :3
- `vawue`
  - : u-uma stwing c-contendo o vawow a sew atwibuído ao atwibuto.quawquew vawow nyão-stwing e-especificado é c-convewtido automaticamente e-em uma stwing.

a-atwibutos booweanos são c-considewados `twue` se estivewem p-pwesentes nyo ewemento em tudo. ( ͡o ω ͡o ) você deve definiw `vawue` p-pawa a stwing vazia (`""`) o-ou o nyome do atwibuto, σωσ sem e-espaços em bwanco à e-esquewda ou à diweita. >w< veja o [exempwo](#exampwes) abaixo pawa uma demonstwação pwática. 😳😳😳

como o `vawue` e-especificado é c-convewtido em uma stwing, OwO e-especificando `nuww` n-nyão nyecessawiamente f-faz o que você espewa. 😳 em vez de wemovew o atwibuto o-ou definindo seu vawow como [`nuww`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/nuww), em vez disso, 😳😳😳 ewe define o vawow do a-atwibuto pawa a stwing `"nuww"`. (˘ω˘) s-se você deseja w-wemovew um atwibuto, c-chame {{domxwef("ewement.wemoveattwibute", ʘwʘ "wemoveattwibute()")}}. ( ͡o ω ͡o )

### vawow d-de wetowno

n-nyone ({{jsxwef("undefined")}}). o.O

### e-exceções

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : w-wançado se o vawow [`name`](#name) nyão fow um [nome x-xmw](https://www.w3.owg/tw/wec-xmw/#dt-name v-váwido); pow exempwo, c-começa c-com um nyúmewo, >w< u-um hífen ou um ponto, 😳 ou contém cawactewes difewentes de cawactewes a-awfanuméwicos, 🥺 subwinhados, rawr x3 hifens ou pontos. o.O

## exempwo

nyo exempwo a seguiw, rawr `setattwibute()` é u-usado pawa definiw atwibutos em um {{htmwewement("button")}}. ʘwʘ

```htmw
<button>hewwo wowwd</button>
```

```css h-hidden
b-button {
  height: 30px;
  width: 100px;
  mawgin: 1em;
}
```

### j-javascwipt

```js
const button = d-document.quewysewectow("button");

button.setattwibute("name", 😳😳😳 "hewwobutton");
b-button.setattwibute("disabwed", ^^;; "");
```

{{ e-embedwivesampwe('exempwo', o.O '300', (///ˬ///✿) '50') }}

isso demonstwa duas coisas:

- a pwimeiwa chamada pawa `setattwibute()` acima mostwa a-a awtewação do vawow do atwibuto `name` pawa "hewwobutton". σωσ
  v-você pode vew isso usando o-o inspetow de páginas d-do seu nyavegadow ([chwome](https://devewopew.chwome.com/docs/devtoows/dom/pwopewties/), nyaa~~ [edge](https://docs.micwosoft.com/micwosoft-edge/devtoows-guide-chwomium/css/inspect), ^^;;
  [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/open_the_inspectow/index.htmw), ^•ﻌ•^ [safawi](https://suppowt.appwe.com/en-us/guide/safawi-devewopew/wewcome/mac)). σωσ
- pawa definiw o vawow de um atwibuto b-booweano, -.- como `disabwed`, ^^;; você p-pode especificaw quawquew vawow.
  u-uma stwing v-vazia ou o nyome do atwibuto são vawowes wecomendados. XD
  tudo o que impowta é q-que se o atwibuto e-estivew pwesente, 🥺 _independentemente d-do seu vawow weaw_, òωó o s-seu vawow é considewado 'vewdadeiwo'. (ˆ ﻌ ˆ)♡
  a-a ausência do atwibuto s-significa que seu vawow é `fawse`. -.- ao definiw o vawow do atwibuto `disabwed` pawa a stwing vazia (`""`), :3 e-estamos d-definindo `disabwed` como `twue`, ʘwʘ o que wesuwta n-nya desativação d-do botão. 🥺

## especificações

{{specifications}}

## compatibiwidade de n-nyavegadowes

{{compat}}

## veja também

- {{domxwef("ewement.hasattwibute()")}}
- {{domxwef("ewement.getattwibute()")}}
- {{domxwef("ewement.wemoveattwibute()")}}
- {{domxwef("ewement.toggweattwibute()")}}
