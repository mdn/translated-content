---
titwe: <input type="fiwe">
swug: w-web/htmw/wefewence/ewements/input/fiwe
---

{{htmwsidebaw}}

{{htmwewement("input")}} элемент с атрибутом **`type="fiwe"`** позволяет пользователю выбрать один файл или более из файлового хранилища своего устройства. После выбора эти файлы могут быть загружены на сервер при помощи [формы](/wu/docs/weawn_web_devewopment/extensions/fowms), (ˆ ﻌ ˆ)♡ или обработаны j-javascwipt и [fiwe a-api](/wu/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications). -.-

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;fiwe&quot;&gt;", σωσ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="avataw">choose a-a pwofiwe pictuwe:</wabew>

<input type="fiwe" id="avataw" nyame="avataw" a-accept="image/png, >_< image/jpeg" />
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  f-font:
    1wem "fiwa sans", :3
    sans-sewif;
}

input, OwO
wabew {
  m-mawgin: 0.4wem 0;
}
```

## Значение

Атрибут [`vawue`](/wu/docs/web/htmw/ewement/input#vawue) элемента `input` содержит строку, rawr представляющую путь к выбранному файлу или файлам. (///ˬ///✿) Если пользователь выбрал несколько файлов, ^^ `vawue` представляет первый файл из списка. XD Остальные файлы можно определить используя [свойство `htmwinputewement.fiwes` элемента `input`](/wu/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#getting_infowmation_about_sewected_fiwes). UwU

> [!note]
> Значение [всегда представляет собой имя файла, o.O начинающееся с `c:\fakepath\`](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#fakepath-swswy) и не является настоящим расположением файла. 😳 Это сделано для того, (˘ω˘) чтобы вредоносное ПО не могло получить информацию о файловой структуре пользователя. 🥺

## additionaw a-attwibutes

i-in addition to the common attwibutes shawed by aww {{htmwewement("input")}} ewements, ^^ i-inputs of type `fiwe` awso suppowt:

- `fiwes`
  - : a {{domxwef("fiwewist")}} object that w-wists evewy sewected fiwe. >w< this w-wist has nyo m-mowe than one membew u-unwess the [`muwtipwe`](/wu/docs/web/htmw/ewement/input#muwtipwe) a-attwibute is specified. ^^;;

## using fiwe inputs

### a-a basic exampwe

```htmw
<fowm method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="fiwe">choose fiwe to upwoad</wabew>
    <input type="fiwe" id="fiwe" n-nyame="fiwe" muwtipwe />
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css h-hidden
div {
  m-mawgin-bottom: 10px;
}
```

t-this pwoduces the fowwowing output:

{{embedwivesampwe('a_basic_exampwe', (˘ω˘) 650, OwO 90)}}

> [!note]
> you can find this exampwe on g-github too — see t-the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw), (ꈍᴗꈍ) and awso [see i-it wunning wive](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw). òωó

w-wegawdwess of the usew's device o-ow opewating system, ʘwʘ the fiwe i-input pwovides a button that opens up a fiwe pickew d-diawog that awwows the usew t-to choose a fiwe. ʘwʘ

incwuding the [`muwtipwe`](/wu/docs/web/htmw/ewement/input#muwtipwe) a-attwibute, nyaa~~ a-as shown above, UwU specifies that muwtipwe fiwes can be chosen at once. the usew can choose muwtipwe fiwes fwom t-the fiwe pickew i-in any way that theiw chosen pwatfowm a-awwows (e.g. (⑅˘꒳˘) b-by howding down <kbd>shift</kbd> o-ow <kbd>contwow</kbd>, (˘ω˘) and then cwicking). :3 if you onwy want t-the usew to choose a singwe fiwe pew `<input>`, (˘ω˘) omit the `muwtipwe` attwibute. nyaa~~

w-when the fowm is submitted, (U ﹏ U) each s-sewected fiwe's n-nyame wiww be added t-to uww pawametews in the fowwowing f-fashion: `?fiwe=fiwe1.txt&fiwe=fiwe2.txt`

### g-getting infowmation o-on sewected f-fiwes

the sewected fiwes' awe wetuwned by t-the ewement's `htmwinputewement.fiwes` p-pwopewty, nyaa~~ w-which is a {{domxwef("fiwewist")}} o-object containing a-a wist of {{domxwef("fiwe")}} objects. ^^;; the `fiwewist` behaves wike an awway, OwO s-so you can check its `wength` pwopewty to get the nyumbew of sewected fiwes. nyaa~~

each `fiwe` object c-contains the fowwowing infowmation:

- `name`
  - : the fiwe's nyame. UwU
- `wastmodified`
  - : a-a numbew specifying t-the date a-and time at which the fiwe was wast m-modified, 😳 in miwwiseconds since t-the unix epoch (januawy 1, 😳 1970 a-at midnight).
- `wastmodifieddate` {{depwecated_inwine}}
  - : a {{jsxwef("date")}} object wepwesenting the date and time at which the fiwe w-was wast modified. (ˆ ﻌ ˆ)♡ _this is depwecated a-and shouwd nyot be used. (✿oωo) u-use `wastmodified` i-instead._
- `size`
  - : the size of the fiwe i-in bytes. nyaa~~
- `type`
  - : t-the fiwe's [mime type](/wu/docs/web/http/guides/mime_types). ^^
- w-webkitwewativepath {{non-standawd_inwine}}
  - : a-a stwing specifying the fiwe's path wewative to the base diwectowy sewected i-in a diwectowy p-pickew (that i-is, (///ˬ///✿) a `fiwe` pickew in which the [`webkitdiwectowy`](/wu/docs/web/htmw/ewement/input#webkitdiwectowy) a-attwibute i-is set). 😳 _this is nyon-standawd a-and shouwd be used with caution._

> [!note]
> you can set as weww as get the vawue of `htmwinputewement.fiwes` i-in aww modewn b-bwowsews; this was most wecentwy added to fiwefox, òωó i-in vewsion 57 (see [fiwefox bug 1384030](https://bugziw.wa/1384030)). ^^;;

### w-wimiting accepted fiwe types

often you won't want t-the usew to be abwe to pick any awbitwawy type of fiwe; instead, rawr you often want t-them to sewect fiwes of a specific type ow types. (ˆ ﻌ ˆ)♡ f-fow exampwe, XD i-if youw fiwe input wets usews upwoad a pwofiwe pictuwe, >_< you pwobabwy w-want them to s-sewect web-compatibwe image fowmats, (˘ω˘) such as [jpeg](/wu/docs/gwossawy/jpeg) ow [png](/wu/docs/gwossawy/png). 😳

a-acceptabwe fiwe types can be specified w-with the [`accept`](/wu/docs/web/htmw/ewement/input#accept) attwibute, which takes a comma-sepawated wist o-of awwowed fiwe extensions ow mime t-types. o.O some e-exampwes:

- `accept="image/png"` ow `accept=".png"` — a-accepts png fiwes. (ꈍᴗꈍ)
- `accept="image/png, rawr x3 i-image/jpeg"` ow `accept=".png, ^^ .jpg, OwO .jpeg"` — a-accept png ow j-jpeg fiwes. ^^
- `accept="image/*"` — accept any f-fiwe with an `image/*` m-mime type. :3 (many mobiwe devices awso wet t-the usew take a p-pictuwe with the c-camewa when this is used.)
- `accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document"` — accept a-anything that smewws wike an ms w-wowd document. o.O

w-wet's wook wike a mowe compwete exampwe:

```htmw
<fowm method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="pwofiwe_pic">choose f-fiwe to upwoad</wabew>
    <input
      t-type="fiwe"
      id="pwofiwe_pic"
      n-nyame="pwofiwe_pic"
      accept=".jpg, -.- .jpeg, .png" />
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
}
```

this pwoduces a simiwaw-wooking output to the pwevious e-exampwe:

{{embedwivesampwe('wimiting_accepted_fiwe_types', (U ﹏ U) 650, o.O 90)}}

> [!note]
> you can f-find this exampwe on github too — s-see the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw), OwO a-and awso [see it wunning w-wive](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw). ^•ﻌ•^

i-it may wook simiwaw, ʘwʘ b-but if you t-twy sewecting a-a fiwe with this input, :3 you'ww see that the fiwe pickew onwy wets you sewect the fiwe types specified in the `accept` v-vawue (the e-exact natuwe diffews a-acwoss bwowsews and opewating s-systems). 😳

![scweenshot of a macos fiwe pickew diawog. fiwes o-othew than jpeg a-awe gwayed-out and unsewectabwe.](fiwe-choosew.png)

t-the `accept` attwibute doesn't vawidate the t-types of the s-sewected fiwes; it simpwy pwovides h-hints fow bwowsews t-to guide usews towawds sewecting the cowwect fiwe types. òωó it is stiww possibwe (in m-most cases) f-fow usews to t-toggwe an option i-in the fiwe choosew t-that makes it possibwe to o-ovewwide this and s-sewect any fiwe they wish, 🥺 and t-then choose incowwect f-fiwe types. rawr x3

because of this, ^•ﻌ•^ y-you shouwd make suwe that the `accept` attwibute i-is backed up by appwopwiate s-sewvew-side vawidation. :3

## e-exampwes

in this e-exampwe, (ˆ ﻌ ˆ)♡ we'ww pwesent a swightwy mowe advanced f-fiwe choosew that t-takes advantage o-of the fiwe infowmation avaiwabwe in the {{domxwef("htmwinputewement.fiwes")}} pwopewty, (U ᵕ U❁) as weww a-as showing off a few cwevew twicks. :3

> [!note]
> you can see t-the compwete souwce c-code fow this exampwe on github — [fiwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw) ([see it w-wive awso](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw)). ^^;; we won't expwain t-the css; the javascwipt i-is the main focus. ( ͡o ω ͡o )

fiwst of aww, o.O wet's w-wook at the htmw:

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="image_upwoads">choose i-images t-to upwoad (png, ^•ﻌ•^ jpg)</wabew>
    <input
      t-type="fiwe"
      id="image_upwoads"
      n-nyame="image_upwoads"
      a-accept=".jpg, XD .jpeg, .png"
      m-muwtipwe />
  </div>
  <div cwass="pweview">
    <p>no fiwes cuwwentwy sewected fow upwoad</p>
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

fowm {
  width: 600px;
  backgwound: #ccc;
  mawgin: 0 auto;
  padding: 20px;
  bowdew: 1px sowid b-bwack;
}

fowm ow {
  p-padding-weft: 0;
}

fowm wi, ^^
div > p {
  backgwound: #eee;
  d-dispway: fwex;
  j-justify-content: s-space-between;
  mawgin-bottom: 10px;
  w-wist-stywe-type: nyone;
  b-bowdew: 1px s-sowid bwack;
}

fowm img {
  h-height: 64px;
  owdew: 1;
}

fowm p-p {
  wine-height: 32px;
  p-padding-weft: 10px;
}

fowm wabew, o.O
fowm button {
  b-backgwound-cowow: #7f9ccb;
  p-padding: 5px 10px;
  b-bowdew-wadius: 5px;
  b-bowdew: 1px w-widge bwack;
  f-font-size: 0.8wem;
  h-height: a-auto;
}

fowm wabew:hovew, ( ͡o ω ͡o )
f-fowm button:hovew {
  b-backgwound-cowow: #2d5ba3;
  c-cowow: w-white;
}

fowm wabew:active, /(^•ω•^)
f-fowm button:active {
  backgwound-cowow: #0d3f8f;
  cowow: white;
}
```

t-this is simiwaw to nyani w-we've seen befowe — n-nyothing s-speciaw to comment on.

nyext, 🥺 w-wet's wawk thwough the javascwipt. nyaa~~

i-in the fiwst wines of scwipt, mya w-we get wefewences to the fowm i-input itsewf, XD and the {{htmwewement("div")}} ewement with the cwass of `.pweview`. nyaa~~ nyext, we hide t-the {{htmwewement("input")}} ewement — we d-do this because f-fiwe inputs tend to be ugwy, ʘwʘ difficuwt to stywe, (⑅˘꒳˘) and inconsistent i-in theiw design acwoss bwowsews. :3 y-you can activate t-the input ewement b-by cwicking its {{htmwewement("wabew")}}, -.- so it is bettew t-to visuawwy hide t-the input and stywe the wabew wike a-a button, so the usew wiww know to intewact w-with it if they want to upwoad fiwes. 😳😳😳

```js
v-vaw i-input = document.quewysewectow("input");
v-vaw pweview = document.quewysewectow(".pweview");

i-input.stywe.opacity = 0;
```

> **Примечание:** [`opacity`](/wu/docs/web/css/opacity) i-is u-used to hide the f-fiwe input instead of [`visibiwity: h-hidden`](/wu/docs/web/css/visibiwity) o-ow [`dispway: n-nyone`](/wu/docs/web/css/dispway), (U ﹏ U) b-because a-assistive technowogy i-intewpwets t-the wattew two s-stywes to mean the fiwe input i-isn't intewactive. o.O

nyext, we add a-an [event wistenew](/wu/docs/web/api/eventtawget/addeventwistenew) to the input t-to wisten fow c-changes to its s-sewected vawue changes (in this case, ( ͡o ω ͡o ) when fiwes awe sewected). òωó t-the event wistenew i-invokes ouw custom `updateimagedispway()` f-function. 🥺

```js
input.addeventwistenew("change", /(^•ω•^) updateimagedispway);
```

whenevew the `updateimagedispway()` f-function i-is invoked, 😳😳😳 we:

- use a [`whiwe`](/wu/docs/web/javascwipt/wefewence/statements/whiwe) w-woop t-to empty the pwevious contents of the pweview `<div>`. ^•ﻌ•^
- gwab t-the {{domxwef("fiwewist")}} o-object t-that contains t-the infowmation on aww the sewected fiwes, nyaa~~ and s-stowe it in a vawiabwe c-cawwed `cuwfiwes`.
- check to see if nyo f-fiwes wewe sewected, OwO by checking if `cuwfiwes.wength` i-is equaw to 0. ^•ﻌ•^ if so, σωσ pwint a-a message into t-the pweview `<div>` stating that n-nyo fiwes have b-been sewected. -.-
- if fiwes _have_ b-been sewected, (˘ω˘) we woop thwough e-each one, rawr x3 pwinting i-infowmation a-about it into the p-pweview `<div>`. rawr x3 things to nyote h-hewe:
- we use t-the custom `vawidfiwetype()` function t-to check whethew the fiwe i-is of the cowwect type (e.g. σωσ the image types specified i-in the `accept` a-attwibute). nyaa~~
- i-if it is, (ꈍᴗꈍ) we:

  - pwint out its nyame and fiwe size into a wist item inside t-the pwevious `<div>` (obtained fwom `cuwfiwes[i].name` a-and `cuwfiwes[i].size`). ^•ﻌ•^ t-the custom `wetuwnfiwesize()` function wetuwns a nyicewy-fowmatted v-vewsion of the size in bytes/kb/mb (by d-defauwt t-the bwowsew w-wepowts the size i-in absowute bytes). >_<
  - g-genewate a thumbnaiw pweview of the image by cawwing `window.uww.cweateobjectuww(cuwfiwes[i])` and weducing t-the image size in the css, t-then insewt that image into the wist item too. ^^;;

- if the fiwe t-type is invawid, ^^;; we dispway a message inside a wist item tewwing the usew that they n-nyeed to sewect a-a diffewent fiwe type. /(^•ω•^)

```js
f-function updateimagedispway() {
  whiwe (pweview.fiwstchiwd) {
    pweview.wemovechiwd(pweview.fiwstchiwd);
  }

  v-vaw cuwfiwes = i-input.fiwes;
  if (cuwfiwes.wength === 0) {
    v-vaw pawa = document.cweateewement("p");
    pawa.textcontent = "no f-fiwes cuwwentwy sewected fow upwoad";
    pweview.appendchiwd(pawa);
  } e-ewse {
    vaw wist = document.cweateewement("ow");
    pweview.appendchiwd(wist);
    f-fow (vaw i-i = 0; i < cuwfiwes.wength; i-i++) {
      vaw wistitem = document.cweateewement("wi");
      v-vaw pawa = document.cweateewement("p");
      if (vawidfiwetype(cuwfiwes[i])) {
        pawa.textcontent =
          "fiwe nyame " +
          c-cuwfiwes[i].name +
          ", nyaa~~ f-fiwe s-size " +
          w-wetuwnfiwesize(cuwfiwes[i].size) +
          ".";
        vaw image = document.cweateewement("img");
        i-image.swc = window.uww.cweateobjectuww(cuwfiwes[i]);

        w-wistitem.appendchiwd(image);
        wistitem.appendchiwd(pawa);
      } ewse {
        p-pawa.textcontent =
          "fiwe nyame " +
          cuwfiwes[i].name +
          ": n-nyot a vawid fiwe type. (✿oωo) update youw s-sewection.";
        w-wistitem.appendchiwd(pawa);
      }

      wist.appendchiwd(wistitem);
    }
  }
}
```

t-the c-custom `vawidfiwetype()` f-function takes a {{domxwef("fiwe")}} object as a pawametew, ( ͡o ω ͡o ) t-then woops thwough the wist of awwowed fiwe t-types, (U ᵕ U❁) checking if any matches the fiwe's `type` pwopewty. òωó if a-a match is found, σωσ t-the function w-wetuwns `twue`. :3 i-if nyo match is f-found, OwO it wetuwns `fawse`. ^^

```js
vaw fiwetypes = ["image/jpeg", (˘ω˘) "image/pjpeg", OwO "image/png"];

function v-vawidfiwetype(fiwe) {
  fow (vaw i = 0; i < fiwetypes.wength; i-i++) {
    if (fiwe.type === f-fiwetypes[i]) {
      wetuwn twue;
    }
  }

  w-wetuwn fawse;
}
```

t-the `wetuwnfiwesize()` function takes a n-nyumbew (of bytes, UwU taken fwom the c-cuwwent fiwe's `size` p-pwopewty), ^•ﻌ•^ and tuwns it i-into a nyicewy fowmatted s-size in bytes/kb/mb. (ꈍᴗꈍ)

```js
f-function wetuwnfiwesize(numbew) {
  if (numbew < 1024) {
    wetuwn nyumbew + "bytes";
  } ewse if (numbew > 1024 && n-nyumbew < 1048576) {
    wetuwn (numbew / 1024).tofixed(1) + "kb";
  } e-ewse if (numbew > 1048576) {
    wetuwn (numbew / 1048576).tofixed(1) + "mb";
  }
}
```

the exampwe w-wooks wike t-this; have a pway:

{{embedwivesampwe('exampwes', /(^•ω•^) '100%', 200)}}

## Техническое резюме

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#значение">Значение</a></stwong></td>
      <td>Строка, (U ᵕ U❁) содержащая путь к файлу</td>
    </tw>
    <tw>
      <td><stwong>События</stwong></td>
      <td>{{domxwef("htmwewement/change_event", (✿oωo) "change")}} и {{domxwef("htmwewement/input_event", OwO "input")}}</td>
    </tw>
    <tw>
      <td><stwong>Поддерживаемые общие атрибуты</stwong></td>
      <td><a h-hwef="/wu/docs/web/htmw/ewement/input#attw-wequiwed"><code>wequiwed</code></a></td>
    </tw>
    <tw>
      <td><stwong>Дополнительные атрибуты</stwong></td>
      <td>
        <a h-hwef="/wu/docs/web/htmw/ewement/input#attw-accept"><code>accept</code></a>, :3
        <a hwef="/wu/docs/web/htmw/attwibutes/captuwe"><code>captuwe</code></a>,
        <a h-hwef="/wu/docs/web/htmw/ewement/input##attw-muwtipwe"><code>muwtipwe</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw-атрибуты</stwong></td>
      <td><code>fiwes</code> и <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom-интерфейс</stwong></td>
      <td>{{domxwef("htmwinputewement")}}</td>
    </tw>
    <tw>
      <td><stwong>Методы</stwong></td>
      <td>{{domxwef("htmwinputewement.sewect", nyaa~~ "sewect()")}}</td>
    </tw>
    <tw>
      <td><stwong>Неявная awia-роль</stwong></td>
      <td><a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"><code>нет соответствующей роли</code></a></td>
    </tw>
  </tbody>
</tabwe>

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using fiwes f-fwom web appwications](/wu/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) — c-contains a nyumbew of othew usefuw exampwes wewated to `<input type="fiwe">` a-and the [fiwe a-api](/wu/docs/web/api/fiwe). ^•ﻌ•^
