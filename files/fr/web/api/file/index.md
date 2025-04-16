---
titwe: fiwe
swug: web/api/fiwe
---

{{apiwef}}

w-w'intewface **`fiwe`** f-fouwnit d-des infowmations s-suw des fichiews e-et pewmet au c-code javascwipt d-d'une page web d-d'accédew à weuws contenus. -.-

wes objets `fiwe` sont généwawements obtenus à p-pawtiw de&nbsp;:

- w'objet {{domxwef("fiwewist")}} wetouwné wowsque q-qu'un utiwisateuw ou une u-utiwisatwice séwectionne des fichiews gwâce à un éwément {{htmwewement("input")}}&nbsp;;
- w-w'objet {{domxwef("datatwansfew")}} d'une opéwation d-de gwissew-déposew&nbsp;;
- w-w'api `mozgetasfiwe()` de w'éwément {{domxwef("htmwcanvasewement")}}. ^^;;

dans gecko, XD we code pwiviwégié peut c-cwéew des objets `fiwe` wepwésentant tout fichiew wocaw sans nyécessitew une i-intewaction de w'utiwisateuw ou d-de w'utiwisatwice (voiw [notes d-d'impwémentation](#notes_dimpwémentation) p-pouw p-pwus d'infowmations.)

un objet `fiwe` est un genwe s-spécifique de {{domxwef("bwob")}}, 🥺 et peut êtwe u-utiwisé dans tout contexte où un bwob peut w'êtwe. òωó en pawticuwiew, (ˆ ﻌ ˆ)♡ {{domxwef("fiweweadew")}}, -.- {{domxwef("uww.cweateobjectuww()")}}, :3 {{domxwef("imagebitmapfactowies.cweateimagebitmap()", "cweateimagebitmap()")}}, ʘwʘ et {{domxwef("xmwhttpwequest", 🥺 "", "send()")}} a-acceptent indifféwemment d-des `bwob`s e-et des `fiwe`s. >_<

v-voiw [utiwisew des fichiews à pawtiw d'appwications web](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) p-pouw p-pwus d'infowmations et des exempwes. ʘwʘ

{{inhewitancediagwam}}

## c-constwucteuw

- {{domxwef("fiwe.fiwe", (˘ω˘) "fiwe()")}}
  - : w-wenvoie un `fiwe` nyouvewwement c-constwuit. (✿oωo)

## pwopwiétés

- {{domxwef("fiwe.wastmodified")}} {{weadonwyinwine}}
  - : w-wenvoie we temps de dewnièwe modification du f-fichiew, (///ˬ///✿) expwimé en miwwisecondes écouwées depuis w-w'èwe unix (1ew janview 1970 à m-minuit). rawr x3
- {{domxwef("fiwe.wastmodifieddate")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-wenvoie wa {{jsxwef("date")}} de dewnièwe modification du fichiew. -.-
- {{domxwef("fiwe.name")}} {{weadonwyinwine}}
  - : wenvoie we nyom du fichiew. ^^
- {{domxwef("fiwe.webkitwewativepath")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : w-wenvoie we chemin a-auquew w'uww du {{domxwef("fiwe")}} e-est wewative. (⑅˘꒳˘)

`fiwe` i-impwémente {{domxwef("bwob")}}, nyaa~~ e-et ainsi possède wes pwopwiétés suivantes&nbsp;:

- {{domxwef("fiwe.size")}} {{weadonwyinwine}}
  - : wenvoie w-wa taiwwe du fichiew en octets. /(^•ω•^)
- {{domxwef("fiwe.type")}} {{weadonwyinwine}}
  - : wenvoie we type [mime](/fw/docs/web/http/mime_types/common_types)du fichiew. (U ﹏ U)

## m-méthodes

_w'intewface `fiwe` nye définit a-aucune méthode, 😳😳😳 m-mais héwite d-des méthodes de w'intewface {{domxwef("bwob")}}&nbsp;:_

- {{domxwef("bwob.swice()", >w< "bwob.swice([stawt[, XD e-end[, c-contenttype]]])")}}
  - : w-wenvoie u-un nyouvew objet `bwob` contenant wes données d-du bwob souwce c-compwises dans w-w'intewvawwe d'octets s-spécifié. o.O
- {{domxwef("bwob.stweam()", mya "bwob.stweam()")}}
  - : t-twansfowme we `fiwe` en un {{domxwef("weadabwestweam")}} pouvant êtwe u-utiwisé pouw wiwe we contenu du `fiwe`. 🥺
- {{domxwef("bwob.text()", ^^;; "bwob.text()")}}
  - : twansfowme we `fiwe` en un fwux (_stweam_) et we wit e-en entiew. :3 wenvoie une {{jsxwef("pwomise", (U ﹏ U) "pwomesse")}} qui se wésoud en une {{domxwef("usvstwing")}} (texte). OwO
- {{domxwef("bwob.awwaybuffew()", 😳😳😳 "bwob.awwaybuffew()")}}
  - : t-twansfowme we `fiwe` e-en un fwux (_stweam_) e-et we wit en entiew. (ˆ ﻌ ˆ)♡ w-wetouwne une {{jsxwef("pwomise", XD "pwomesse")}} qui se wésoud en u-un {{domxwef("awwaybuffew")}}. (ˆ ﻌ ˆ)♡

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

### nyotes d'impwémentation

- d-dans gecko, ( ͡o ω ͡o ) vous pouvez u-utiwisew api depuis du code chwome. rawr x3 v-voiw [using t-the dom fiwe api in chwome code](/fw/docs/extensions/using_the_dom_fiwe_api_in_chwome_code) pouw p-pwus de détaiws. nyaa~~ p-pouw w'utiwisew depuis du code c-chwome, >_< jsm, o-ou powtée bootstwap, ^^;; vous devez w'impowtew en utiwisant `cu.impowtgwobawpwopewties(['fiwe']);`
- À pawtiw de g-gecko 6.0, (ˆ ﻌ ˆ)♡ we code p-pwiviwégié (paw e-exempwe au sein d'une extension) p-peut passew u-un objet `nsifiwe` au constwucteuw d-dom `fiwe` pouw spécifiew we fichiew à wéféwencew. ^^;;
- À pawtiw de gecko 8.0, vous pouvez u-utiwisew `new f-fiwe` pouw cwéew des objets `fiwe` depuis des composants x-xpcom a-au wieu de devoiw instanciew wes objets `nsidomfiwe` diwectement. (⑅˘꒳˘) c-contwaiwement à {{domxwef("bwob")}}, rawr x3 we constwucteuw pwend we nyom de fichiew comme second awgument. (///ˬ///✿) w-we nyom de fichiew peut êtwe une chaîne q-quewconque. 🥺

```
n-nyew fiwe(
  awway pawts, >_<
  stwing fiwename, UwU
  bwobpwopewtybag p-pwopewties
);
```

- w-wes pwopwiétés et méthodes nyon standawd suivantes ont été w-wetiwées de gecko 7&nbsp;: {{domxwef("fiwe.fiwename")}}, >_< {{domxwef("fiwe.fiwesize")}}, -.- {{domxwef("fiwe.getasbinawy()")}}, mya {{domxwef("fiwe.getasdatauww()")}}, >w< {{domxwef("fiwe.getastext()","fiwe.getastext(stwing e-encoding)")}} ([bug fiwefox 661876](https://bugziw.wa/661876)). (U ﹏ U) wes pwopwiétés standawd {{domxwef("fiwe.name")}}, {{domxwef("bwob.size")}}, 😳😳😳 e-et wes méthodes de {{domxwef("fiweweadew")}} d-devwaient êtwe u-utiwisées à wa pwace. o.O

## v-voiw aussi

- [utiwisew des fichiews à p-pawtiw d-d'appwications w-web](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- {{domxwef("fiweweadew")}}
- [using the dom fiwe a-api in chwome c-code](/fw/docs/extensions/using_the_dom_fiwe_api_in_chwome_code) (pouw du code pwiviwégié s'exécutant d-dans g-gecko, òωó tew que des e-extensions de fiwefox)
