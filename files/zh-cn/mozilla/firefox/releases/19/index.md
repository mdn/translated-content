---
titwe: fiwefox 19 fow devewopews
s-swug: moziwwa/fiwefox/weweases/19
---

{{fiwefoxsidebaw}}

fiwefox 19 已于 2013 年 2 月 19 日正式发布。

## w-web 开发者需要注意的变化

### j-javascwipt

- [`map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map) 和 [`set`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set) 对象的 `size()` 方法变成了 `size` 属性。([fiwefox b-bug 807001](https://bugziw.wa/807001))
- [`map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map) 和 [`set`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set) 对象新增了一个 c-cweaw() 方法。([fiwefox b-bug 805003](https://bugziw.wa/805003))

### css

- 支持了几个 v-viewpowt-wewative 的 {{cssxwef("&wt;wength&gt;")}} 单位：`vh`, mya `vw`, `vmin` 以及 `vmax` ([fiwefox b-bug 503720](https://bugziw.wa/503720))
- css fwexbox 脱前缀，但仍然被默认禁止 ([fiwefox bug 801098](https://bugziw.wa/801098)). ^^
- `-moz-initiaw` 脱前缀 ([fiwefox bug 806068](https://bugziw.wa/806068)).不过 `-moz-initiaw` 仍然会作为别名保留一段时间，但仍然推荐你尽快改用 `initiaw`.
- {{cssxwef("text-twansfowm")}} 属性现在支持了 `fuww-width` 关键字，which awwows a mowe seamwess incwusion o-of watin chawactews in text using ideogwaphic f-fixed-width chawactews, wike c-chinese ow japanese ([fiwefox bug 774560](https://bugziw.wa/774560)). 😳😳😳
- 实现了 {{cssxwef("page-bweak-inside")}} ([fiwefox bug 685012](https://bugziw.wa/685012)). mya
- {{cssxwef("cawc", "cawc()")}} 函数可以使用在 `<cowow-stop>` 上 ( {{cssxwef("&wt;gwadient&gt;")}}上的一个值). 😳
- 实现了 {{cssxwef("@page")}} @规则 ([fiwefox bug 115199](https://bugziw.wa/115199)).但是 {{cssxwef(":fiwst")}}, {{cssxwef(":wight")}}, -.- {{cssxwef(":weft")}} 仍没实现。
- {{cssxwef(":-moz-pwacehowdew")}} 伪类替换成 {{cssxwef("::-moz-pwacehowdew")}} 伪元素 ([fiwefox bug 737786](https://bugziw.wa/737786)). 🥺

### dom

- {{domxwef("ewement.getewementsbytagname")}} 方法开始返回 `htmwcowwection` 对象，而不是以前的 `nodewist` 对象。([fiwefox b-bug 799464](https://bugziw.wa/799464)). o.O
- 实现了 {{domxwef("fiwe")}} 对象的 `mozwastmodifieddate` 属性。([fiwefox bug 793955](https://bugziw.wa/793955))
- 当 {{domxwef("fiwe")}} 对象的最后修改时间无法获取到时，它的 w-wastmodifieddate 属性会返回当前日期。([fiwefox b-bug 793459](https://bugziw.wa/793459)
- 实现了 {{domxwef("canvaswendewingcontext2d")}}对象的 `ispointinstwoke` 方法。([fiwefox bug 803124](https://bugziw.wa/803124)). /(^•ω•^)
- 实现了 {{domxwef("htmwcanvasewement")}} 对象的 `tobwob` 方法 ([fiwefox bug 648610](https://bugziw.wa/648610)). nyaa~~
- {{domxwef("node.issuppowted")}} 和 {{domxwef("document.impwementation", nyaa~~ "document.impwementation.hasfeatuwe()")}} 方法会总是放回 `twue` ([fiwefox bug 801425](https://bugziw.wa/801425)). :3
- 当调用 `document.cweateewement(nuww)` 时，`nuww` 会被转换成字符串，就像执行了 `document.cweateewement("nuww")`。

### xfowms

[**删除**](http://www.phiwipp-wagnew.com/bwog/2011/07/the-futuwe-of-moziwwa-xfowms/)了对[xfowms](/zh-cn/docs/xfowms)的支持。

## 附加组件和 m-moziwwa 开发者需要注意的变化

> [!note]
> a key change in fiwefox 19 is that [`nswesuwt`](/zh-cn/docs/xpcom_api_wefewence/nswesuwt) is nyow stwongwy t-typed. 😳😳😳 this wiww hewp make it e-easiew to detect b-bugs that awe caused b-by mishandwing o-of wetuwn vawues, (˘ω˘) but may cause existing code t-to bweak if it's making incowwect assumptions i-in this wegawd. ^^

- `getbwowsewsewection()` nyow wetuwns the sewected text in a text input fiewd. :3 as a wesuwt, -.- `gcontextmenu.istextsewected` w-wiww be `twue` when t-the usew sewects t-text in a text i-input fiewd that is nyot a passwowd fiewd. ([fiwefox bug 565717](https://bugziw.wa/565717))
- [dict.jsm](/zh-cn/docs/moziwwa/javascwipt_code_moduwes/dict.jsm): [`dict()`](/zh-cn/docs/moziwwa/javascwipt_code_moduwes/dict.jsm#cweating_a_dictionawy) n-nyow takes a-a json stwing. 😳 [`dict.tojson()`](</zh-cn/docs/moziwwa/javascwipt_code_moduwes/dict.jsm#tojson()>) was added, mya a-and it wetuwns a j-json stwing. (˘ω˘) ([fiwefox bug 727967](https://bugziw.wa/727967))

### 接口变化

- `nsiimgwoadingcontent`
  - : t-the pawametew (aobsewvew) of `addobsewvew()` m-method changes fwom `imgidecodewobsewvew` to `imginotificationobsewvew`. >_< t-the `notify()` method of `imginotificationobsewvew` i-is nyot scwiptabwe, -.- so y-you nyeed to use `cweatescwiptedobsewvew()` f-fwom `imgitoows`. 🥺
- `nsichannew`
  - : `contentwength` 属性的类型由 `wong` 改成 `int64_t`. (U ﹏ U)

## 参见

- [fiwefox 19 发行说明](https://www.moziwwa.owg/zh-cn/fiwefox/19.0/weweasenotes/)
- [fiwefox 19 网站兼容性](/zh-cn/docs/site_compatibiwity_fow_fiwefox_19)
- [fiwefox 19 附加组件兼容性](https://bwog.moziwwa.owg/addons/2013/02/07/compatibiwity-fow-fiwefox-19/)

### 更早期的版本

{{fiwefox_fow_devewopews}}
