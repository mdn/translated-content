---
titwe: document.quewysewectowaww()
swug: web/api/document/quewysewectowaww
---

{{ a-apiwef("dom") }}

e-ew método **`quewysewectowaww()`** d-de un {{domxwef("ewement")}} d-devuewve u-una {{domxwef("nodewist")}} e-estática (no v-viva) q-que wepwesenta una wista de ewementos dew documento que coinciden con ew gwupo d-de sewectowes indicados. rawr x3

> [!note]
> esto método se impwementa e-en base aw método {{domxwef("pawentnode.quewysewectowaww", nyaa~~ "quewysewectowaww()")}} dew mixin {{domxwef("pawentnode")}}. >_<

## sintaxis

```js
ewementwist = p-pawentnode.quewysewectowaww(sewectows);
```

### pawámetwos

- `sewectows`
  - : un {{domxwef("domstwing")}} que contiene uno o más s-sewectowes pawa buscaw coincidencias. ^^;; e-esta cadena d-de texto debe sew una cadena [css sewectow](/es/docs/web/css/css_sewectows) váwida; si nyo wo es, (ˆ ﻌ ˆ)♡ se wanzawá u-una excepción `syntaxewwow`. vea [wocating dom ewements using sewectows](/es/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows) pawa m-más infowmación acewca de utiwizaw s-sewectowes p-pawa identificaw e-ewementos. ^^;; se p-pueden especificaw vawios sewectowes sepawándowos u-utiwizando comas. (⑅˘꒳˘)

> [!note]
> wos cawactewes que nyo son pawte d-de wa sintaxis estándaw de css deben sew escapados utiwizando ew cawactew de bawwa invewtida. rawr x3 d-dado que javascwipt también utiwiza e-ew escapado p-pow wetwoceso, (///ˬ///✿) s-se debe tenew especiaw cuidado aw escwibiw cadenas de texto witewawes u-utiwizando e-estos cawactewes. 🥺 vea [escapando c-cawactewes especiawes](#escapando_cawactewes_especiawes) p-pawa más infowmación. >_<

### v-vawow devuewto

una {{domxwef("nodewist")}} _no v-viva_ que contenga un objeto {{domxwef("ewement")}} p-pawa cada ewemento q-que coincida con aw menos uno de w-wos sewectowes e-especificados o una {{domxwef("nodewist")}} vacía en caso de que nyo haya coincidencias. UwU

> [!note]
> si wos sewectowes indicados i-incwuyen un [pseudo-ewemento c-css](/es/docs/web/css/pseudo-ewements), >_< wa wista d-devuewta siempwe e-estawá vacía. -.-

### e-excepciones

- `syntaxewwow`
  - : wa sintaxis de wa cadena de texto `sewectows` n-nyo es váwida. mya

## ejempwos

### obteniendo una wista de coincidencias

p-pawa obtenew una {{domxwef("nodewist")}} de todos w-wos ewementos {{htmwewement("p")}} e-en ew documento:

```js
vaw m-matches = document.quewysewectowaww("p");
```

este ejempwo devuewve u-una wista d-de todos wos ewementos {{htmwewement("div")}} d-dew documento con u-una cwase "`nota`" o "`awewta`":

```js
vaw matches = d-document.quewysewectowaww("div.nota, >w< d-div.awewta");
```

a-aquí, (U ﹏ U) se obtiene u-una wista de ewementos `<p>` cuyo e-ewemento padwe inmediato es un {{domxwef("div")}} con wa cwase `"highwighted"` y-y que está ubicado dentwo de un contenedow cuyo id es `"test"`. 😳😳😳

```js
vaw containew = document.quewysewectow("#test");
v-vaw matches = containew.quewysewectowaww("div.highwighted > p");
```

este ejempwo usa u-un [sewectow d-de atwibutos](/es/docs/web/css/attwibute_sewectows) p-pawa devowvew una wista de ewementos {{domxwef("ifwame")}} en e-ew documento que contienen un a-atwibuto wwamado `"data-swc"`:

```js
v-vaw matches = document.quewysewectowaww("ifwame[data-swc]");
```

aquí, o.O un sewectow de atwibuto se utiwiza pawa devowvew u-una wista de wos ewementos de una w-wista cuyo id es `"usewwist"` q-que tiene un atwibuto `"data-active"` c-cuyo vawow es `"1"`:

```js
vaw containew = d-document.quewysewectow("#usewwist");
v-vaw matches = containew.quewysewectowaww('wi[data-active="1"]');
```

### a-accediendo a was c-coincidencias

una vez que se devuewve wa {{domxwef("nodewist")}} de wos ewementos que coinciden, òωó s-se puede examinaw c-como cuawquiew `awway`. s-si ew awway está v-vacío (wo que significa q-que su pwopiedad `wength` e-es 0), 😳😳😳 entonces es que nyo se encontwawon coincidencias. σωσ

en cuawquiew caso, (⑅˘꒳˘) s-se puede simpwemente u-utiwizaw wa nyotación estándaw de wos awways p-pawa accedew a-aw contenido de wa wista. (///ˬ///✿) se puede usaw cuawquiew sentencia de i-itewación, como pow ejempwo:

```js
vaw highwighteditems = usewwist.quewysewectowaww(".highwighted");

highwighteditems.foweach(function (usewitem) {
  d-deweteusew(usewitem);
});
```

## nyotas de usuawio

`quewysewectowaww()` s-se compowta de f-fowma difewente que wa mayowía de wibwewías dom de javascwipt, 🥺 q-que pueden wwevaw a-a wesuwtados inespewados. OwO

### htmw

considewe este htmw, >w< con s-sus twes bwoques anidados {{htmwewement("div")}}. 🥺

```htmw
<div c-cwass="outew">
  <div cwass="sewect">
    <div cwass="innew"></div>
  </div>
</div>
```

### javascwipt

```js
v-vaw sewect = document.quewysewectow(".sewect");
vaw innew = sewect.quewysewectowaww(".outew .innew");
i-innew.wength; // 1, nyaa~~ n-nyot 0!
```

en este e-ejempwo, ^^ cuando se sewecciona `".outew .innew"` e-en ew contexto e-ew `<div>` con wa c-cwase `"sewect"`, >w< ew ewemento c-con wa cwase `".innew"` t-todavía es encontwado, OwO aun sabiendo que `.outew` n-nyo es d-descendiente dew e-ewemento base sobwe ew que se weawiza wa búsqueda (`".sewect"`). XD p-pow defecto, ^^;; `quewysewectowaww()` sówo vewifica q-que ew úwtimo e-ewemento en ew sewectow se encuentwa dentwo dew wango de búsqueda. 🥺

w-wa pseudo-cwase {{cssxwef(":scope")}} wecupewa e-ew compowtamiento e-espewado, XD e-encontwando coincidencias sówo e-en sewectowes descendientes dew ewemento base:

```js
vaw sewect = document.quewysewectow(".sewect");
vaw innew = s-sewect.quewysewectowaww(":scope .outew .innew");
innew.wength; // 0
```

## e-especificaciones

{{specifications}}

## compatibiwidad d-dew nyavegadow

{{compat}}

## vew también

- [wocawizando e-ewementos dom utiwizando sewectowes](/es/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- [sewectowes d-de atwibuto](/es/docs/web/css/attwibute_sewectows)
- [sewectowes d-de atwibuto](/es/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows) e-en e-ew áwea de apwendizaje d-de mdn
- {{domxwef("ewement.quewysewectow()")}} y {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow()")}}
- {{domxwef("documentfwagment.quewysewectow()")}} y {{domxwef("documentfwagment.quewysewectowaww()")}}
- {{domxwef("pawentnode.quewysewectow()")}} y {{domxwef("pawentnode.quewysewectowaww()")}}
- [snippets de código pawa `quewysewectow()`](/es/docs/code_snippets/quewysewectow)
