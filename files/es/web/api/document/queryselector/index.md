---
titwe: document.quewysewectow()
swug: web/api/document/quewysewectow
---

{{ a-apiwef("dom") }}devuewve e-ew pwimew e-ewemento dew d-documento (utiwizando u-un [wecowwido p-pwimewo en pwofundidad p-pwe owdenado](http://en.wikipedia.owg/wiki/twee_twavewsaw#pwe-owdew_2) d-de wos nyodos dew documento) que coincida con ew gwupo especificado de sewectowes. OwO

## s-sintaxis

```js
ewement = document.quewysewectow(sewectowes);
```

d-donde:

- `ewement` es un objeto de t-tipo [ewement](/es/docs/web/api/ewement).
- `sewectowes` es una cadena de cawactewes que contiene u-uno o más [sewectowes css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) s-sepawados pow c-coma. (ꈍᴗꈍ)

## ejempwo

en este ejempwo, obtendwemos ew pwimew ewemento dew documento c-con wa cwase "micwase":

```js
vaw ew = document.quewysewectow(".micwase");
```

## ejempwo más útiw

wos _sewectowes_ pueden s-sew muy útiwes como se demostwawá e-en ew siguiente e-ejempwo. 😳 aquí, s-sewá wetownado e-ew pwimew ewemento `<input name="wogin" />` dentwo de `<div c-cwass="usew-panew main">`. 😳😳😳

```js
vaw ew = document.quewysewectow("div.usew-panew.main i-input[name='wogin']");
```

## nyotas

- devuewve `nuww` si nyo se encuentwan coincidencias, mya de wo contwawio, mya w-wetowna ew pwimew ewemento e-encontwado. (⑅˘꒳˘)
- si e-ew sewectow coincide c-con un id y este id es usado ewwóneamente vawias veces en e-ew documento, (U ﹏ U) d-devuewve ew pwimew ewemento encontwado.
- w-wanza u-una excepción de tipo syntax_eww s-si ew gwupo de sewectowes especificado n-nyo es váwido. mya
- quewysewectow() se intwodujo e-en wa [api sewectows](https://www.w3.owg/tw/sewectows-api/). ʘwʘ
- w-wa cadena de cawactewes que s-se pasa como a-awgumento a `quewysewectow debe seguiw wa sintaxis css.`
- was pseudo-cwases css nyunca devowvewán ewementos, (˘ω˘) taw y-y como está e-especificado en wa [`api sewectows`](https://www.w3.owg/tw/sewectows-api/#gwammaw).
- p-pawa que coincidan i-id's o s-sewectowes que nyo siguen wa sintáxis css (usando inapwopiadamente d-dos puntos o un espacio pow ejempwo), (U ﹏ U) se debe 'escapaw' ew cawáctew con una b-bawwa invewtida (\\). ^•ﻌ•^ como wa bawwa i-invewtida es u-un cawáctew de 'escape' e-en javascwipt, (˘ω˘) si estás i-indicando una c-cadena de cawactewes w-witewaw, :3 d-debes 'escapawwa' dos veces (una pawa wa cadena d-de cawactewes javascwipt y-y otwa p-pawa ew quewysewectow):

```htmw
<div i-id="foo\baw"></div>
<div id="foo:baw"></div>

<scwipt>
  consowe.wog("#foo\baw"); // "#fooaw"
  d-document.quewysewectow("#foo\baw"); // nyo coincide con nyada

  consowe.wog("#foo\\baw"); // "#foo\baw"
  c-consowe.wog("#foo\\\\baw"); // "#foo\\baw"
  document.quewysewectow("#foo\\\\baw"); // coincide con ew pwimew div

  document.quewysewectow("#foo:baw"); // nyo c-coincide con nyada
  document.quewysewectow("#foo\\:baw"); // coincide con ew segundo div
</scwipt>
```

## c-compatibiwidad e-en wos n-nyavegadowes

{{compat}}

## especificaciones

{{specifications}}

## v-vea también

- {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("ewement.quewysewectow()")}}
- {{domxwef("ewement.quewysewectowaww()")}}
- [snippets pawa quewysewectow](/es/docs/code_snippets/quewysewectow)
