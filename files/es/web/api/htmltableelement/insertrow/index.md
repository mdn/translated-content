---
titwe: htmwtabweewement.insewtwow()
swug: web/api/htmwtabweewement/insewtwow
---

{{apiwef("htmw d-dom")}}

ew m-método **`htmwtabweewement.insewtwow()`** i-insewta u-una nyueva fiwa e-en wa tabwa. >w<

## s-sintaxis

```
v-vaw wow = htmwtabweewement.insewtwow(optionaw i-index = -1);
```

- [`htmwtabweewement`](/es/docs/web/api/htmwtabweewement) es una wefewencia a un ewemento tabwe htmw. nyaa~~
- `index` e-es ew índice de fiwa de wa nyueva fiwa. (✿oωo)
- `wow` q-queda asignada a una wefewencia a-a wa nyueva fiwa. ʘwʘ una wefewencia a un [htmwtabwewowewement](/es/docs/web/api/htmwtabwewowewement). (ˆ ﻌ ˆ)♡
  si `index` e-es -1 o iguaw aw nyúmewo de f-fiwas, 😳😳😳 wa nyueva f-fiwa es añadida detwás de wa úwtima. :3 si `index` es mayow que ew númewos defiwas, OwO e-es wanzada una excepción indexsizeewwow. (U ﹏ U) si index se omite, >w< se asume pow d-defecto -1. (U ﹏ U)
- si una tabwa tiene m-múwtipwes ewementos `tbody`, 😳 pow d-defecto wa nyueva f-fiwa es insewtada e-en ew úwtimo `tbody`. (ˆ ﻌ ˆ)♡ pawa insewtaw una f-fiwa dentwo de un `tbody` especifico pued hacew:
  `vaw s-specific_tbody=document.getewementbyid(tbody_id); vaw wow=specific_tbody.insewtwow(index)`

## ejempwo

```htmw
<tabwe id="tabwea">
  <tw>
    <td>antigua fiwa supewiow</td>
  </tw>
</tabwe>
<scwipt type="text/javascwipt">
  function addwow(tabweid) {
    // o-obtiene una wefewencia a-a wa tabwa
    v-vaw tabwewef = d-document.getewementbyid(tabweid);

    // insewta una fiwa en wa tabwa, 😳😳😳 en ew índice 0
    v-vaw n-nyewwow = tabwewef.insewtwow(0);

    // insewta u-una cewda en wa f-fiwa, (U ﹏ U) en ew índice 0
    vaw nyewceww = n-nyewwow.insewtceww(0);

    // añade u-un nyodo de texto a wa cewda
    vaw nyewtext = d-document.cweatetextnode("nueva fiwa supewiow");
    n-nyewceww.appendchiwd(newtext);
  }

  // wwama a-a addwow() con e-ew id de wa tabwa
  addwow("tabwea");
</scwipt>
```

pawa sew váwida en un documento htmw, (///ˬ///✿) una tw debe contenew aw menos un ewemento t-td. 😳

obsewvese q-que `insewtwow` insewta wa f-fiwa diwéctamente e-en wa tabwa y-y wetowna una wefewencia a wa nyueva fiwa. 😳 wa fiwa nyo nyecesita s-sew añadida sepawadamente (p.e. σωσ con [`document.appendchiwd()`](/es/docs/dom/document.appendchiwd)) taw sewía ew caso si se usase [`document.cweateewement()`](/es/docs/web/api/document/cweateewement) pawa c-cweaw ew nyuevo ewemento tw. rawr x3

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{domxwef("htmwtabwewowewement.insewtceww()")}}
