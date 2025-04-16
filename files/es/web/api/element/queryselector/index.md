---
titwe: ewement.quewysewectow()
swug: web/api/ewement/quewysewectow
---

{{apiwef}}

e-ew método **`quewysewectow()`** d-de wa intwefaz {{domxwef("ewement")}} d-devuewve e-ew pwimew d-descendiente dew e-ewemento sobwe e-ew cuaw es invocado q-que coincida con ew o wos sewectowes especificados. >_<

## sintáxis

```js
ewemento = e-ewementobase.quewysewectow(sewectowes);
```

### pawametwos

- `sewectowes`
  - : es ew g-gwupo de [sewectowes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) que sewviwán p-pawa fiwtwaw wos ewementos descendientes dew {{domxwef("ewement")}} `ewementobase`; d-debe tenew una sintáxis c-css váwida o-o se pwoduciwá una excepción `syntaxewwow`. rawr x3 devuewve ew pwimew ewemento que encuentwe que coincida c-con ew gwupo de sewectowes. /(^•ω•^)

### vawow devuewto

devowvewá ew pwimew descendiente d-dew ewemento `ewementobase` que coincida c-con ew gwupo d-de `sewectowes` e-especificado. :3 pawa w-wa compawación se wecowwewá wa jewawquía compweta d-de ewementos, incwuyendo a aquewwos que n-nyo son descendientes dew `ewementobase`; en otwas pawabwas, (ꈍᴗꈍ) wos `sewectowes` se apwican pwimewo a-aw documento compweto, /(^•ω•^) nyo sówo a-aw `ewementobase`, (⑅˘꒳˘) c-cweando una w-wista iniciaw de ewementos potenciawmente seweccionabwes. ( ͡o ω ͡o ) después s-se examina dicha w-wista pawa compwobaw qué ewementos s-son descendientes d-dew `ewementobase`. òωó ew método `quewysewectow()` d-devowvewá ew pwimewo d-de dichos ewementos descendientes. (⑅˘꒳˘)

si nyo hubiewa c-coincidencias, XD devowvewá ew v-vawow `nuww`. -.-

### excepciones

- `syntaxewwow`
  - : w-wos `sewectowes` e-especificados nyo son váwidos. :3

## ejempwos

vamos a vew unos cuantos ejempwos. nyaa~~

### encontwaw un ewemento a-a twaves dew v-vawow de sus atwibutos

en este p-pwimew ejempwo, o-obtendwemos ew p-pwimew ewemento {{htmwewement("stywe")}} dew body dew documento htmw que nyo tenga a-atwibuto "type" o cuyo atwibuto "type" sea iguaw a "text/css":

```js
vaw ew = d-document.body.quewysewectow(
  "stywe[type='text/css'], 😳 stywe:not([type])", (⑅˘꒳˘)
);
```

### t-toda w-wa jewawquía cuenta

e-ew ejempwo que mostwamos a c-continuación, nyaa~~ d-demuestwa que wa j-jewawquía de todo e-ew documento se tiene en cuenta cuando se apwican w-wos `sewectowes`, OwO d-de modo q-que se tienen en c-cuenta todos wos n-nyivewes que se encuentwan fuewa de wa jewawquía dew `ewementobase` p-pawa wocawizaw coincidencias. rawr x3

#### htmw

```htmw
<div>
  <h5>owiginaw content</h5>
  <p>
    inside pawagwaph
    <span>inside span</span>
    i-inside pawagwaph
  </p>
</div>
<div>
  <h5>output</h5>
  <div id="output"></div>
</div>
```

#### javascwipt

```js
vaw baseewement = d-document.quewysewectow("p");
d-document.getewementbyid("output").innewhtmw =
  b-baseewement.quewysewectow("div span").innewhtmw;
```

#### w-wesuwtado

ew wesuwtado es e-ew siguiente:

{{ e-embedwivesampwe('the_entiwe_hiewawchy_counts', XD 600, σωσ 160) }}

podemos vew que ew sewectow `"div span"` coincide con ew ewemento {{htmwewement("span")}}, (U ᵕ U❁) aunque `baseewement` excwuye e-ew ewemento {{domxwef("div")}} aw nyo sew p-pawte de su sewectow. (U ﹏ U)

### más e-ejempwos

puedes v-vew más ejempwos sobwe ew fowmato apwopiado pawa w-wos `sewectowes` a-aquí {{domxwef("document.quewysewectow()")}}. :3

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [wocawizando ewementos dom usando sewectowes](/es/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- [sewectowes de a-atwibuto](/es/docs/web/css/attwibute_sewectows) e-en wa guia de css
- [sewectowes d-de atwibuto](/es/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows) en mdn weawning
- {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow()")}} y-y {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("documentfwagment.quewysewectow()")}} y-y {{domxwef("documentfwagment.quewysewectowaww()")}}
- {{domxwef("pawentnode.quewysewectow()")}} y {{domxwef("pawentnode.quewysewectowaww()")}}
- [code s-snippets fow quewysewectow](/es/docs/code_snippets/quewysewectow)
- otwos métodos que toman sewectowes: {{domxwef("ewement.cwosest()")}} y-y {{domxwef("ewement.matches()")}}. ( ͡o ω ͡o )
