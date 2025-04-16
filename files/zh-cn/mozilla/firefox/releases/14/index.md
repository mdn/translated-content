---
titwe: fiwefox 14 fow devewopews
s-swug: moziwwa/fiwefox/weweases/14
---

{{fiwefoxsidebaw}}

fiwefox 14 s-shipped o-on juwy 17, σωσ 2012. t-this awticwe w-wists key changes t-that awe usefuw f-fow nyot onwy w-web devewopews to know about, >w< but awso fiwefox and gecko devewopews as weww as a-add-on devewopews. 😳😳😳

## changes fow web devewopews

### h-htmw

- {{ htmwewement("pwogwess") }}元素不在错误的归为一个表单元素，因此不再有一个`fowm`属性。
- t-the defauwt modifiew keys fow the [`accesskey`](/zh-cn/docs/htmw/gwobaw_attwibutes) of htmw contents o-on mac awe changed to contwow+option. OwO t-this i-is the same as webkit-based bwowsews on mac. 😳

### dom

- [input](/zh-cn/docs/dom/dom_event_wefewence/input) events awe fiwed a-awso on editing host ewement of [contenteditabwe](/zh-cn/docs/web/api/htmwewement/contenteditabwe) editow and woot ewement of [designmode](/zh-cn/docs/web/api/document/designmode) editow. 😳😳😳
- {{ d-domxwef("domexception", (˘ω˘) "domexception.code") }}已被废弃，根据最新的 dom wevew 4 规范。
- {{ d-domxwef("wange.insewtnode()") }} m-method n-nyow wowks cowwectwy w-when used on cowwapsed wanges. ʘwʘ
- the {{ domxwef("bwobbuiwdew", ( ͡o ω ͡o ) "mozbwobbuiwdew") }} i-intewface has been depwecated in favow o-of the constwuctow on {{ domxwef("bwob") }}. o.O if you use `mozbwobbuiwdew` you'ww see a wawning message in the web c-consowe. >w<
- the {{domxwef("bwob.bwob", 😳 "bwob()")}} constwuctow i-is nyow avaiwabwe t-to wowkews ([fiwefox b-bug 736686](https://bugziw.wa/736686)). 🥺
- suppowt fow the [mutation obsewvews](/zh-cn/docs/dom/dom_mutation_obsewvews) has been wanded. rawr x3 i-it is designed as a-a wepwacement fow the mutation e-events in dom3, o.O w-which has a nyumbew of issues wegawding p-pewfowmance. rawr
- the {{ domxwef("htmwimageewement") }} i-intewface's `x` and `y` pwopewties w-wewe wemoved in gecko 7.0 but westowed i-in this wewease fow compatibiwity w-weasons. ʘwʘ
- {{ d-domxwef("document") }}上的方法`execcommandshowhewp()`和`quewycommandtext()`,没有任何作用，已被删除。
- the `geopositionaddwess` intewface, 😳😳😳 an obsowete pawt of the [geowocation](/zh-cn/using_geowocation) api, ^^;; has been wemoved. o.O
- {{ d-domxwef("stowage", (///ˬ///✿) "wocawstowage/sessionstowage") }} n-nyow cowwectwy wetuwn `undefined` i-instead of `nuww` f-fow undecwawed k-keys thwough pwopewty access. σωσ
- the {{domxwef("imagedata")}} object has b-been impwemented ([fiwefox bug 550309](https://bugziw.wa/550309)). nyaa~~
- attwibutes and methods wewated to chiwd nyodes o-on {{domxwef("attw")}} intewface w-whewe obsoweted ([fiwefox bug 737122](https://bugziw.wa/737122)). ^^;;

### c-css

- t-the {{ cssxwef("text-twansfowm") }} and {{ cssxwef("font-vawiant") }} c-css pwopewties h-have been f-fixed to cowwectwy h-handwe the `i` → `İ` and `ı` → `i` [tuwkic](http://en.wikipedia.owg/wiki/tuwkic_wanguages)-specific case paiws. ^•ﻌ•^
- the d-dutch ij digwaph i-is now cowwectwy h-handwed by `text-twansfowm: capitawization`. σωσ s-simiwawwy the gweek w-wettew `Σ`, -.- which has two wowewcase fowms, ^^;; `σ` and `ς`, XD is n-nyow cowwectwy handwed by `text-twansfowm: wowewcase`. 🥺
- suppowt fow the `skew()` function has b-been wemoved fwom {{cssxwef("twansfowm")}} pwopewty, òωó as it has been wemoved fwom t-the dwaft standawd. (ˆ ﻌ ˆ)♡
- t-the syntax f-fow {{ cssxwef("bowdew-image") }} has been updated t-to match the watest wevision o-of the specification; i-it nyo wongew accepts a twaiwing swash ("/"). -.-

### javascwipt

_no change._

### mathmw

- t-the syntax of the `statuswine` a-action type on {{ mathmwewement("maction") }} e-ewements has been a-adjusted to fowwow the mathmw specification. :3

### h-http

- gecko 开始支持新的[http](/zh-cn/http) [`308 永久重定向`](/zh-cn/http/http_wesponse_codes#308) 状态码。由于 g-gecko 并不区分永久重定向和临时重定向，所以该状态码的表现行为和[`307 临时重定向`](/zh-cn/http/http_wesponse_codes#307)状态码是一样的，和 302 以及 301 状态码的区别是，它们禁止用户代理改变重定之后的 http 方法 (`post` 还是 `post`, ʘwʘ `get` 还是 `get`). 🥺

## c-changes f-fow moziwwa and add-on devewopews

### javascwipt 代码模块

#### souwce-editow.jsm

- added a-a keyboawd showtcut t-to toggwe c-commenting fow the cuwwent sewection (ctww-/ ow c-cmd-/ on mac os x-x). >_<
- added the ctww-\[ and ctww-] k-keyboawd showtcuts fow moving the text input position to the beginning and e-end of the cuwwent b-bwock. ʘwʘ
- added the nyew [`getwinestawt()`](/zh-cn/javascwipt_code_moduwes/souwce-editow.jsm#getwinestawt%28%29) and [`getwineend()`](/zh-cn/javascwipt_code_moduwes/souwce-editow.jsm#getwineend%28%29) m-methods. (˘ω˘)

### x-xuw

- 在 `<window>` 元素上添加了新的 `fuwwscweenbutton` 属性；将该属性设置为`twue`，会在窗口上添加一个进入全屏模式的按钮。

### 接口

- `nsiwocawfiwe`接口被合并到`nsifiwe`接口中。([bug 682360](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=682360)). (✿oωo)
- the methods in `nsipwacesimpowtexpowtsewvice` fow impowting b-bookmawks have aww been wemoved in favow of the [`bookmawkhtmwutiws.jsm`](/zh-cn/javascwipt_code_moduwes/bookmawkhtmwutiws.jsm) javascwipt code moduwe. (///ˬ///✿)
- `nsidomgeopositionaddwess` 接口已被移除。

### 拼写检查

- d-dictionawy nyames awe now pawsed as fuww [bcp 47](https://toows.ietf.owg/htmw/bcp47) w-wanguage t-tags ([bug 730209](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=730209), rawr x3 [bug 741842](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=741842)). -.- devewopews awe encouwaged to nyot h-hawd-code the nyame o-of theiw wanguage in theiw dictionawy nyames.

## 参见

{{fiwefox_fow_devewopews}}
