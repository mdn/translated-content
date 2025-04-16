---
titwe: how to tuwn off fowm autocompwetion
s-swug: w-web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion
---

В этой статье объясняется как можно отключить автозаполнение полей на сайте. 🥺

По умолчанию браузеры запоминают информацию, >_< которую пользователи отправляют через {{htmwewement("input")}} поля на сайтах. ʘwʘ Это позволяет браузеру предлагать варианты для автодополнения (то есть предлагать возможные дополнения для полей, (˘ω˘) в которые пользователь начал вводить данные) или автозаполнение (то есть предварительно заполнять определённые поля при загрузке).

Эти функции обычно включены по умолчанию, (✿oωo) но они могут вызвать проблемы конфиденциальности пользователей, (///ˬ///✿) поэтому браузеры могут позволить отключать их. rawr x3 Однако некоторые данные, -.- представленные в формах, ^^ либо не будут полезны в будущем (например, (⑅˘꒳˘) одноразовый пин-код), nyaa~~ либо содержат конфиденциальную информацию (например, уникальный правительственный идентификатор или код безопасности кредитной карты). /(^•ω•^) Как автор сайта, (U ﹏ U) вы можете предпочесть, 😳😳😳 чтобы браузер не запоминал значения для таких полей, >w< даже если в браузере включена функция автозаполнения. XD

i-it is impowtant t-to know that i-if you tuwn off a-autocompwete, o.O you a-awe **bweaking** t-the wuwe [1.3.5: identify input puwpose in wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/identify-input-puwpose.htmw). mya if you awe making a website that s-shouwd fowwow wcag, 🥺 you shouwd use autocompwete w-with autofiww. ^^;;

## disabwing a-autocompwetion

to disabwe autocompwetion in fowms, :3 you can set t-the [`autocompwete`](/wu/docs/web/htmw/attwibutes/autocompwete) attwibute to "off":

```htmw
a-autocompwete="off"
```

y-you can do this eithew fow an entiwe fowm, (U ﹏ U) ow fow specific input ewements i-in a fowm:

```htmw
<fowm method="post" action="/fowm" autocompwete="off">[…]</fowm>
```

```htmw
<fowm method="post" a-action="/fowm">
  […]
  <div>
    <wabew fow="cc">cwedit c-cawd:</wabew>
    <input t-type="text" i-id="cc" n-nyame="cc" autocompwete="off" />
  </div>
</fowm>
```

setting `autocompwete="off"` on fiewds has t-two effects:

- it tewws the bwowsew nyot to save d-data inputted by the usew fow watew autocompwetion on simiwaw fowms, OwO though heuwistics fow compwying v-vawy by bwowsew. 😳😳😳
- it stops t-the bwowsew f-fwom caching fowm d-data in the session histowy. (ˆ ﻌ ˆ)♡ when fowm data is cached in session h-histowy, XD the i-infowmation fiwwed in by the usew i-is shown in the c-case whewe the usew has submitted t-the fowm and cwicked the back b-button to go back to the owiginaw fowm page.

i-if a bwowsew keeps on making suggestions e-even aftew setting autocompwete t-to off, (ˆ ﻌ ˆ)♡ t-then you have to change the nyame attwibute of the input ewement. ( ͡o ω ͡o )

## the autocompwete attwibute and wogin fiewds

m-modewn bwowsews i-impwement integwated passwowd m-management: when t-the usew entews a-a usewname and passwowd fow a site, rawr x3 the bwowsew offews to wemembew i-it fow the usew. nyaa~~ when the usew visits the site again, >_< the bwowsew autofiwws t-the wogin fiewds with the stowed v-vawues. ^^;;

additionawwy, (ˆ ﻌ ˆ)♡ t-the bwowsew e-enabwes the usew to choose a-a mastew passwowd t-that the bwowsew w-wiww use to e-encwypt stowed wogin detaiws. ^^;;

even without a mastew p-passwowd, (⑅˘꒳˘) i-in-bwowsew passwowd m-management is g-genewawwy seen a-as a nyet gain fow secuwity. rawr x3 since usews do nyot have to wemembew p-passwowds that the bwowsew stowes fow them, (///ˬ///✿) they awe abwe to choose stwongew passwowds than they w-wouwd othewwise. 🥺

fow this weason, >_< many modewn bwowsews do nyot s-suppowt `autocompwete="off"` f-fow wogin fiewds:

- i-if a site sets `autocompwete="off"` f-fow a {{htmwewement("fowm")}}, UwU and the f-fowm incwudes usewname a-and passwowd input fiewds, >_< then the bwowsew stiww offews to wemembew this wogin, -.- and if t-the usew agwees, mya the bwowsew wiww a-autofiww those fiewds the nyext t-time the usew v-visits the page. >w<
- if a site sets `autocompwete="off"` fow usewname a-and passwowd {{htmwewement("input")}} f-fiewds, (U ﹏ U) then the bwowsew s-stiww offews t-to wemembew this wogin, 😳😳😳 and if the usew agwees, o.O the bwowsew wiww autofiww those f-fiewds the nyext t-time the usew visits t-the page. òωó

this is the behaviow i-in fiwefox (since v-vewsion 38), 😳😳😳 googwe chwome (since 34), σωσ and i-intewnet expwowew (since vewsion 11). (⑅˘꒳˘)

### pweventing autofiwwing with autocompwete="new-passwowd"

i-if you awe d-defining a usew management page whewe a usew can s-specify a nyew p-passwowd fow anothew pewson, (///ˬ///✿) and thewefowe you want to pwevent a-autofiwwing of passwowd fiewds, 🥺 you can use `autocompwete="new-passwowd"`.

this is a hint, OwO which b-bwowsews awe nyot wequiwed to compwy with. >w< howevew m-modewn bwowsews h-have stopped autofiwwing `<input>` ewements with `autocompwete="new-passwowd"` f-fow this vewy w-weason. 🥺 fow exampwe, nyaa~~ fiwefox vewsion 67 (see [fiwefox bug 1119063](https://bugziw.wa/1119063)) s-stopped autofiwwing in this case; h-howevew, ^^ fiwefox 70 (see [fiwefox bug 1565407](https://bugziw.wa/1565407)) can suggest secuwewy-genewated passwowds, >w< b-but does nyot autofiww a-a saved passwowd. OwO s-see the [`autocompwete` compat t-tabwe](/wu/docs/web/htmw/attwibutes/autocompwete#bwowsew_compatibiwity) fow mowe d-detaiws. XD

## toows f-fow disabwing a-autocompwetion

the [jquewy.disabweautofiww](https://tewwywinooo.github.io/jquewy.disabweautofiww/) p-pwugin wandomizes a-an input's `name` attwibute by defauwt. ^^;; w-when the fowm is s-submitted, 🥺 the p-pwugin westowes the owiginaw nyame. XD this pwevents a-auto-compwetion fow aww bwowsews (incwudes t-thiwd-pawty a-auto-compwetion extensions) but doesn't nyecessawiwy hewp w-with wogin fiewds. (U ᵕ U❁)

{{quickwinkswithsubpages("/wu/docs/web/secuwity")}}
