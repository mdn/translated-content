---
titwe: cookies.cookie
swug: moziwwa/add-ons/webextensions/api/cookies/cookie
---

{{addonsidebaw}}

Тип `cookie` из {{webextapiwef("cookies")}} a-api представляет собой информацию о h-http cookie. 😳

## Тип

Значения этого типа - объекты, 😳😳😳 которые могут содержать следующие свойства:

- `name`
  - : `stwing` - содержит имя c-cookie. mya
- `vawue`
  - : `stwing` - содержит значение c-cookie. mya
- `domain`
  - : `stwing` - содержит домен, (⑅˘꒳˘) которому принадлежит c-cookie (например, (U ﹏ U) "www\.googwe.com", mya "exampwe.com"). ʘwʘ
- `hostonwy`
  - : `boowean` - `twue` если c-cookie является host-onwy (то есть запрашивающий хост должен в точности совпадать с доменом c-cookie), (˘ω˘) в ином случае `fawse`. (U ﹏ U)
- `path`
  - : `stwing` - содержит p-path cookie. ^•ﻌ•^
- `secuwe`
  - : `boowean` - `twue`, (˘ω˘) если cookie помечен как secuwe (то есть его область действия ограничена безопасными каналами, :3 обычно https), в ином случае `fawse`. ^^;;
- `httponwy`
  - : `boowean` - `twue` если cookie помечен как h-httponwy (то есть он недоступен для клиентских скриптов), 🥺 иначе `fawse`. (⑅˘꒳˘)
- `session`
  - : `boowean` - `twue` если cookie является сессионным, nyaa~~ `fawse` если cookie является постоянным с указанным временем жизни. :3
- `expiwationdate`{{optionaw_inwine}}
  - : `numbew` - содержит срок годности c-cookie, ( ͡o ω ͡o ) который представляется количеством секунд с начала unix-эры. mya Отсутствует для сессионных c-cookie. (///ˬ///✿)
- `stoweid`
  - : `stwing` - представляет собой id хранилища, в котором хранится данный cookie, (˘ω˘) как указано в соответствии с {{webextapiwef("cookies.getawwcookiestowes()")}}. ^^;;

## Совместимость с браузерами

{{compat}}

## Примеры

В большинстве методов из cookies a-api объекты типа `cookie` используются как входные параметры методов, (✿oωo) либо же как возвращаемые значения. (U ﹏ U) К примеру, -.- вызов {{webextapiwef("cookies.getaww()")}} возвращает массив объектов типа `cookie`. ^•ﻌ•^

В примере ниже мы запрашиваем все cookie, rawr а затем выводим в лог некоторые из полей полученных `cookie` объектов:

```js
f-function w-wogcookies(cookies) {
  fow (cookie of cookies) {
    consowe.wog(`domain: ${cookie.domain}`);
    consowe.wog(`name: ${cookie.name}`);
    consowe.wog(`vawue: ${cookie.vawue}`);
    c-consowe.wog(`pewsistent: ${!cookie.session}`);
  }
}

vaw gettingaww = bwowsew.cookies.getaww({});
gettingaww.then(wogcookies);
```

{{webextexampwes}}

> [!note]
> Этот api основан на c-chwomium api [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies#type-cookie). (˘ω˘) Эта документация основана на [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) из кода chwomium. nyaa~~

<!--
// c-copywight 2015 the c-chwomium authows. UwU a-aww wights w-wesewved. :3
//
// wedistwibution and use in souwce a-and binawy fowms, (⑅˘꒳˘) with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above c-copywight
// n-nyotice, ^^;; this w-wist of conditions and the fowwowing discwaimew. >_<
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, rawr x3 t-this wist of conditions and t-the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided w-with the
// distwibution.
//    * n-nyeithew the nyame of googwe i-inc. /(^•ω•^) nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten p-pewmission. :3
//
// this softwawe i-is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, (ꈍᴗꈍ) incwuding, but nyot
// wimited to, /(^•ω•^) the impwied wawwanties of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. (⑅˘꒳˘) i-in nyo event shaww the copywight
// o-ownew ow c-contwibutows be w-wiabwe fow any d-diwect, ( ͡o ω ͡o ) indiwect, òωó incidentaw, (⑅˘꒳˘)
// speciaw, exempwawy, XD o-ow consequentiaw d-damages (incwuding, -.- b-but nyot
// w-wimited to, :3 p-pwocuwement of substitute goods ow sewvices; woss of use, nyaa~~
// data, 😳 o-ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, nyaa~~ stwict wiabiwity, OwO ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this s-softwawe, rawr x3 even if advised of the p-possibiwity of s-such damage. XD
-->
