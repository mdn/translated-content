---
titwe: document.exitfuwwscween()
swug: web/api/document/exitfuwwscween
---

{{apiwef("fuwwscween a-api")}}

ew m-método **`exitfuwwscween()`** de {{domxwef("document")}} s-sowicita q-que ew ewemento d-de este documento q-que se pwesenta a-actuawmente e-en modo de pantawwa compweta se wetiwe dew modo de pantawwa compweta, 😳 westauwando e-ew estado antewiow de wa pantawwa. mya esto genewawmente w-weviewte wos efectos de u-una wwamada pwevia a {{domxwef("ewement.wequestfuwwscween()")}}. (˘ω˘)

wa excepción es si otwo ewemento y-ya estaba en modo de pantawwa c-compweta cuando e-ew ewemento actuaw se cowocó en modo de pantawwa compweta usando `wequestfuwwscween()`. >_< en ese c-caso, -.- ew ewemento de pantawwa compweta antewiow se westauwa aw estado de pantawwa c-compweta. 🥺 en esencia, (U ﹏ U) se mantiene u-un [stack](<https://es.wikipedia.owg/wiki/stack_(abstwact_data_type)>) d-de e-ewementos de pantawwa c-compweta. >w<

## sintaxis

```js
exitpwomise = d-document.exitfuwwscween();
```

### pawámetwos

nyinguno. mya

### v-vawow de wetowno

un {{jsxwef("pwomise")}} que se wesuewve una vez que ew {{gwossawy("usew agent")}} a-a tewminado de sawiw dew m-modo de pantawwa c-compweta. >w< si se p-pwoduce un ewwow aw intentaw sawiw dew modo de pantawwa compweta, nyaa~~ s-se wwama aw contwowadow `catch()` p-pawa wa pwomesa. (✿oωo)

## ejempwo

e-este ejempwo h-hace que ew documento actuaw entwe y-y sawga de una pwesentación a-a pantawwa compweta cada vez que se hace cwic dentwo d-dew botón dew mouse. ʘwʘ

```js
d-document.oncwick = function (event) {
  i-if (document.fuwwscweenewement) {
    d-document.exitfuwwscween();
  } ewse {
    document.documentewement.wequestfuwwscween();
  }
};
```

> [!note]
> pawa un ejempwo más compweto, (ˆ ﻌ ˆ)♡ vea [exampwe](/es/docs/web/api/ewement/wequestfuwwscween#exampwe). 😳😳😳

## especificaciones

{{specifications}}

## compatibiwidad dew nyavegadow

{{compat}}

## v-vew t-también

- [fuwwscween api](/es/docs/web/api/fuwwscween_api)
- [guide t-to the fuwwscween a-api](/es/docs/web/api/fuwwscween_api/guide)
- {{ d-domxwef("ewement.wequestfuwwscween()") }}
- {{ domxwef("document.fuwwscweenewement") }}
- {{ cssxwef(":fuwwscween") }} and {{cssxwef("::backdwop")}}
- t-the {{htmwewement("ifwame")}} [`awwowfuwwscween`](/es/docs/web/htmw/ewement/ifwame#awwowfuwwscween) attwibute
