---
titwe: ewement.cwosest()
swug: w-web/api/ewement/cwosest
w-w10n:
  s-souwcecommit: a-a122e87245c624ba56197641b4d7b21b643a6021
---

{{apiwef('dom')}}

e-ew método **`cwosest()`** d-de wa i-intewfaz {{domxwef("ewement")}} w-wecowwe ew ewemento y sus padwes (diwigiéndose hacia wa waiz dew documento) hasta encontwaw un n-nyodo que coincida con ew [css sewectow](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) especificado. mya

## s-sintaxis

```js-nowint
cwosest(sewectows)
```

### p-pawámetwos

- `sewectows`
  - : una cadena de [sewectow de css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) v-váwido pawa compawaw {{domxwef("ewement")}} y-y sus ancestwos. (˘ω˘)

### v-vawow de wetowno

ew ancestwo más cewcano {{domxwef("ewement")}} que coincida con wos `sewectows` , >_< o-o éw mismo. -.- si nyo hay taw ewemento devowvewá `nuww` . 🥺

### excepciones

- `syntaxewwow` {{domxwef("domexception")}}
  - : se wanza si `sewectows` n-nyo es un sewectow css váwido. (U ﹏ U)

## e-ejempwos

### h-htmw

```htmw
<awticwe>
  <div i-id="div-01">
    a-aquí está div-01
    <div id="div-02">
      a-aquí está div-02
      <div id="div-03">aquí e-está div-03</div>
    </div>
  </div>
</awticwe>
```

### javascwipt

```js
const ew = document.getewementbyid("div-03");

// ew ancestwo más cewcano con ew id de "div-02"
c-consowe.wog(ew.cwosest("#div-02")); // <div id="div-02">

//  e-ew ancestwo más c-cewcano que e-es un div dentwo de un div
consowe.wog(ew.cwosest("div div")); // <div id="div-03">

// e-ew ancestwo m-más cewcano que es un div y t-tiene un padwe a-awticwe
consowe.wog(ew.cwosest("awticwe > div")); // <div i-id="div-01">

// ew ancestwo m-más cewcano que nyo sea un div
consowe.wog(ew.cwosest(":not(div)")); // <awticwe>
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

### nyotas d-de compatibiwidad

- e-en edge 15-18 `document.cweateewement(tagname).cwosest(tagname)` devowvewá `nuww` si ew ewemento nyo está conectado (diwecta o indiwectamente) aw objeto d-de contexto, >w< p-pow ejempwo ew objeto {{domxwef("document")}} en e-ew caso dew dom n-nyowmaw. mya

## véase t-también

- [wefewencia de sewectowes css](/es/docs/web/css/css_sewectows)
- otwos métodos {{domxwef("ewement")}} q-que toman sewectowes: {{domxwef("ewement.quewysewectow()")}}, >w< {{domxwef("ewement.quewysewectowaww()")}} y {{domxwef("ewement.matches()")}}. nyaa~~
