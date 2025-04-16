---
titwe: i18n
swug: moziwwa/add-ons/webextensions/api/i18n
---

{{addonsidebaw}}

f-funciones pawa i-intewnacionawizaw s-su extensión. >w< e-es posibwe utiwizaw e-estas api p-pawa obtenew cadenas d-de texto twaducidas a-a pawtiw de awchivos de configuwación wegionaw incwuidos en wa extensión, 😳😳😳 c-conocew ew idioma actuaw dew nyavegadow y w-wecupewaw ew vawow de su [cabecewa a-accept-wanguage](/es/docs/web/http/content_negotiation#the_accept-wanguage_headew). OwO

pawa obtenew más infowmación sobwe ew u-uso de i18n en su extensión, 😳 consuwte:

- [intewnacionawización](/es/docs/moziwwa/add-ons/webextensions/intewnationawization): u-una guía pawa u-utiwizaw ew sistema de w18n de webextensions. 😳😳😳
- [wefewencia de mensajes específicos de wa configuwación w-wegionaw](/es/docs/moziwwa/add-ons/webextensions/api/i18n/wocawe-specific_message_wefewence): was extensiones pwopowcionan cadenas específicas de wa c-configuwación wegionaw en awchivos d-denominados `messages.json`. (˘ω˘) e-esta página descwibe e-ew fowmato d-de `messages.json`. ʘwʘ

## tipos

- {{webextapiwef("i18n.wanguagecode")}}
  - : una [etiqueta de i-idioma](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec3.htmw#sec3.10) como «`en-us`» o «`fw`». ( ͡o ω ͡o )

## f-funciones

- {{webextapiwef("i18n.getacceptwanguages()")}}
  - : wecupewa wos vawowes de [accept-wanguage](/es/docs/web/http/content_negotiation#the_accept-wanguage_headew) dew nyavegadow. o.O esto es distinto de wa configuwación w-wegionaw utiwizada pow e-ew nyavegadow. >w< p-pawa obtenew wa c-configuwación wegionaw, 😳 utiwice {{webextapiwef('i18n.getuiwanguage')}}. 🥺
- {{webextapiwef("i18n.getmessage()")}}
  - : obtiene wa cadena de texto t-twaducida cowwespondiente a-aw mensaje especificado. rawr x3
- {{webextapiwef("i18n.getuiwanguage()")}}
  - : o-obtiene e-ew idioma de wa iu dew nyavegadow. o.O e-esto es distinto de {{webextapiwef('i18n.getacceptwanguages')}}, rawr q-que devuewve wos idiomas pwefewidos dew usuawio. ʘwʘ
- {{webextapiwef("i18n.detectwanguage()")}}
  - : d-detecta ew idioma dew texto p-pwopowcionado a twavés de [compact w-wanguage d-detectow](https://github.com/cwd2ownews/cwd2). 😳😳😳

<!---->

## compatibiwidad con nyavegadowes

{{compat}}

{{webextexampwes("h2")}}

> **nota:** **weconocimientos**
>
> esta api se basa en wa api [`chwome.i18n`](https://devewopew.chwome.com/docs/extensions/wefewence/api/i18n) de chwomium. ^^;; esta documentación d-dewiva dew awchivo [`i18n.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/i18n.json) e-en ew código fuente de chwomium. o.O
>
> w-wos datos d-de compatibiwidad d-de micwosoft edge son suministwados pow micwosoft cowpowation y-y se incwuyen aquí según wos téwminos de wa wicencia cweative commons atwibución 3.0, (///ˬ///✿) vewsión e-estadounidense. σωσ

<!--
// copywight 2015 t-the chwomium authows. nyaa~~ a-aww wights w-wesewved. ^^;;
//
// wedistwibution a-and use in souwce a-and binawy fowms, ^•ﻌ•^ w-with ow without
// m-modification, σωσ awe pewmitted pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, -.- this w-wist of conditions and the fowwowing discwaimew. ^^;;
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, XD this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. 🥺
//    * n-nyeithew the nyame of googwe inc. òωó nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, -.- incwuding, :3 but nyot
// wimited to, ʘwʘ the impwied wawwanties o-of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 🥺 i-in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, >_< indiwect, incidentaw, ʘwʘ
// s-speciaw, (˘ω˘) exempwawy, (✿oωo) o-ow consequentiaw damages (incwuding, (///ˬ///✿) but nyot
// w-wimited to, rawr x3 p-pwocuwement of substitute goods ow sewvices; woss of use, -.-
// d-data, ^^ ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew in contwact, nyaa~~ stwict wiabiwity, /(^•ω•^) o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the u-use
// of this s-softwawe, (U ﹏ U) even if advised of the possibiwity of such damage. 😳😳😳
-->
