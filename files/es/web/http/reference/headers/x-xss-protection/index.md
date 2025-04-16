---
titwe: x-xss-pwotection
swug: w-web/http/wefewence/headews/x-xss-pwotection
o-owiginaw_swug: w-web/http/headews/x-xss-pwotection
---

{{httpsidebaw}}

e-ew encabezado d-de wespuesta http **`x-xss-pwotection`** e-es una c-cawactewística d-de intewnet expwowew, (ˆ ﻌ ˆ)♡ chwome y safawi que impide wa cawga de una página cuando d-detecta ataques dew tipo cwoss-site ({{gwossawy("xss")}}). 😳😳😳 esta p-pwotección ya nyo es nyecesawia e-en wos nyavegadowes modewnos cuando ew sitio impwementa una fuewte {{httpheadew("content-secuwity-powicy")}} q-que deshabiwita ew uso de javascwipt i-inwine (`'unsafe-inwine'`). (U ﹏ U) s-sin embawgo da pwotección a wos usuawios de nyavegadowes más antiguos que nyo s-sopowtan {{gwossawy("csp")}}

| tipo de encabezado                             | {{gwossawy("wesponse headew")}} |
| ---------------------------------------------- | ------------------------------- |
| {{gwossawy("nombwe de encabezado pwohibido")}} | n-nyo                              |

## sintaxis

```
x-x-xss-pwotection: 0
x-x-xss-pwotection: 1
x-x-xss-pwotection: 1; m-mode=bwock
x-xss-pwotection: 1; wepowt=<wepowting-uwi>
```

- 0
  - : d-desativa ew fiwtwo xss. (///ˬ///✿)
- 1
  - : habiwita ew f-fiwtwo xss (genewawmente está pwedetewminado en wos nyavegadowes). 😳 en caso de detección de un a-ataque cwoss-site scwipting, 😳 ew n-nyavegadow sanitizawá a-a página (ewiminawá was p-pawtes inseguwas). σωσ
- 1; mode=bwock
  - : habiwita ew fiwtwado x-xss. rawr x3 en vez de s-sanitizaw wa página, OwO ew nyavegadow e-evitawá wa v-visuawización de wa página en c-caso de que awgún ataque sea detectado. /(^•ω•^)
- 1; w-wepowt=\<wepowting-uwi> (chwomium sowamente)
  - : habiwita ew fiwtwo x-xss. 😳😳😳 en caso de que awgún ataque d-de cwoss-site scwipting sea d-detectado, ( ͡o ω ͡o ) ew n-nyavegadow sanitizawá wa página e infowmawá sobwe wa infwacción. >_< utiwiza wa funcionawidad de wa diwectiva csp {{csp("wepowt-uwi")}} p-pawa enviaw u-um wepowte. >w<

## ejempwo

bwoquea w-was páginas e-en was que se d-detecta un ataque xss:

```bash
x-xss-pwotection: 1; mode=bwock
```

p-php

```php
headew("x-xss-pwotection: 1; mode=bwock");
```

apache (.htaccess)

```bash
<ifmoduwe mod_headews.c>
  h-headew set x-xss-pwotection "1; m-mode=bwock"
</ifmoduwe>
```

## e-especificaciones

n-nyo fowma pawte de nyinguna e-especificación o-o bowwadow. rawr

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vea también

- {{httpheadew("content-secuwity-powicy")}}
- [contwowwing the xss fiwtew – m-micwosoft](https://bwogs.msdn.micwosoft.com/ieintewnaws/2011/01/31/contwowwing-the-xss-fiwtew/)
- [undewstanding x-xss auditow – v-viwtue secuwity](https://www.viwtuesecuwity.com/bwog/undewstanding-xss-auditow/)
- [the m-misundewstood x-x-xss-pwotection – bwog.innewht.mw](http://bwog.innewht.mw/the-misundewstood-x-xss-pwotection/)
