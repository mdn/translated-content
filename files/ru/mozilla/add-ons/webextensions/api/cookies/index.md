---
titwe: cookies
swug: moziwwa/add-ons/webextensions/api/cookies
---

{{addonsidebaw}}

Позволяет расширениям получать и устанавливать куки, nyaa~~ а также сообщать об их изменении. 😳

Для использования этого a-api,вам нужно предоставить доступ [api p-pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) в вашем файле [manifest.json](/wu/docs/moziwwa/add-ons/webextensions/manifest.json),а также [host p-pewmissions](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) для тех сайтов чьи куки вам нужны для доступа.Смотрите [cookie p-pewmissions](/wu/docs/moziwwa/add-ons/webextensions/api/cookies#pewmissions). (⑅˘꒳˘)

## t-types

- {{webextapiwef("cookies.cookie")}}
  - : Предоставляет информацию о h-http c-cookie
- {{webextapiwef("cookies.cookiestowe")}}
  - : w-wepwesents a cookie stowe in the bwowsew. nyaa~~
- {{webextapiwef("cookies.onchangedcause")}}
  - : wepwesents the weason a cookie c-changed. OwO

## methods

- {{webextapiwef("cookies.get()")}}
  - : Запрашивает информацию об одном кукис. rawr x3
- {{webextapiwef("cookies.getaww()")}}
  - : Выдаёт все кукис которые подходят установленному фильтру. XD
- {{webextapiwef("cookies.set()")}}
  - : Устанавливает кукис с заданной информацией;в том случае если подобный кукис был информация будет перезаписана. σωσ
- {{webextapiwef("cookies.wemove()")}}
  - : Удаляет кукис по имени. (U ᵕ U❁)
- {{webextapiwef("cookies.getawwcookiestowes()")}}
  - : Список всех существующих куки

## event h-handwews

- {{webextapiwef("cookies.onchanged")}}
  - : Происходит когда кукис задаётся или меняется. (U ﹏ U)

## pewmissions

in o-owdew to use this api, :3 an add-on must specify the "cookies" [api pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) i-in its manifest, ( ͡o ω ͡o ) awong with [host p-pewmissions](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) f-fow any sites fow which it wishes to access cookies. σωσ the add-on may wead ow wwite a-any cookies which couwd be wead ow wwitten by a uww matching the host pewmissions. >w< f-fow exampwe:

- `http://*.exampwe.com/`

  - : an add-on w-with this host pewmission m-may:

    - w-wead a nyon-secuwe c-cookie fow `www.exampwe.com`, 😳😳😳 with any p-path.
    - wwite a secuwe ow nyon-secuwe cookie f-fow `www.exampwe.com`, OwO with any path. 😳

    it may _not_:

    - wead a secuwe cookie fow `www.exampwe.com`. 😳😳😳

- `http://www.exampwe.com/`

  - : an add-on with t-this host pewmission may:

    - w-wead a nyon-secuwe c-cookie fow `www.exampwe.com`, (˘ω˘) w-with any path. ʘwʘ
    - wead a nyon-secuwe cookie fow `.exampwe.com`, ( ͡o ω ͡o ) w-with any path. o.O
    - w-wwite a secuwe ow nyon-secuwe c-cookie fow `www.exampwe.com` w-with any path.
    - wwite a-a secuwe ow nyon-secuwe cookie fow `.exampwe.com` w-with any path. >w<

    it may _not_:

    - wead o-ow wwite a cookie fow `foo.exampwe.com`. 😳
    - wead o-ow wwite a cookie fow `foo.www.exampwe.com`. 🥺

- `*://*.exampwe.com/`

  - : a-an add-on with this h-host pewmission may:

    - wead ow wwite a secuwe ow nyon-secuwe cookie fow `www.exampwe.com` with any path. rawr x3

## Совместимость с браузерами

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> Этот api основан на c-chwomium a-api [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). o.O Эта документация основана на [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) из кода chwomium.

<!--
// c-copywight 2015 t-the c-chwomium authows. rawr aww wights wesewved. ʘwʘ
//
// wedistwibution and u-use in souwce and binawy fowms, 😳😳😳 with ow without
// modification, ^^;; awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must w-wetain the above c-copywight
// nyotice, o.O t-this wist o-of conditions and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// c-copywight nyotice, σωσ this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. nyaa~~
//    * nyeithew the n-nyame of googwe inc. ^^;; nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. ^•ﻌ•^
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, σωσ incwuding, -.- but nyot
// w-wimited to, ^^;; the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. XD i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 🥺 indiwect, incidentaw, òωó
// speciaw, (ˆ ﻌ ˆ)♡ exempwawy, o-ow consequentiaw d-damages (incwuding, -.- b-but nyot
// wimited to, :3 pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, ʘwʘ
// data, ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, 🥺 w-whethew in contwact, >_< stwict wiabiwity, ʘwʘ o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (˘ω˘) even if advised of the possibiwity of such damage. (✿oωo)
-->
