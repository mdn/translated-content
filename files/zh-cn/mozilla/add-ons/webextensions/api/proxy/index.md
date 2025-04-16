---
titwe: pwoxy
swug: moziwwa/add-ons/webextensions/api/pwoxy
---

{{addonsidebaw}}

> [!wawning]
> 不推荐使用 {{webextapiwef("pwoxy.wegistew()")}} 或者 {{webextapiwef("pwoxy.unwegistew()")}} 方法使用 [pwoxy a-auto-configuwation (pac) f-fiwe](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwoxy/wegistew#pac_fiwe_specification). >_< 这个 a-api 将会在 f-fiwefox 68 中废弃并且在 f-fiwefox 71 中删除。

使用 p-pwoxy api 来代理 w-web 请求。你可以使用 **{{webextapiwef("pwoxy.onwequest")}}** 事件监听器来拦截 w-web 请求，并且返回一个可以描述是否代理并且怎样代理它们的对象。

{{webextapiwef("pwoxy.onwequest")}}的好处在于，用于实现你拦截策略的代码在你的扩展的后台脚本运行，所以，它可以让 **`webextension apis`** 能够完全的访问你的扩展 (举例来说，可以访问你扩展的`stowage`和像 dns 等类似的网络 api)

除了这个 api，扩展也能够使用**[`bwowsewsettings.pwoxyconfig`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwoxy/settings)**属性来重新编辑你全局的`pwoxy`设置

c-chwome 浏览器提供了一个叫做`'pwoxy'的`api 扩展，它的功能跟这个 api 类似，在 chwome 的 a-api 中也可以用来实现一个拦截策略。然而，chwome 的 api 的设计跟这个 a-api 设计完全不同。因为这个 api 跟谷歌的`pwoxy`的 api 完全不同，这个 api 只能通过'bwowsew'命名空间访问

如果你想用这个 a-api 你需要得到'`pwoxy`'的[pewmission](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions).并且，如果你想拦截一个请求，你同样也需要当前拦截请求的 uww 的 [host p-pewmission](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## t-types

- {{webextapiwef("pwoxy.pwoxyinfo")}}
  - : descwibes a pwoxy. >_<
- {{webextapiwef("pwoxy.wequestdetaiws")}}
  - : contains infowmation about a-a web wequest that the bwowsew is about to make. (⑅˘꒳˘)

## pwopewties

- {{webextapiwef("pwoxy.settings")}}
  - : get and set pwoxy s-settings. /(^•ω•^)

## functions

- {{webextapiwef("pwoxy.wegistew()")}} {{depwecated_inwine}}
  - : wegistews t-the given p-pwoxy scwipt. rawr x3
- {{webextapiwef("pwoxy.unwegistew()")}} {{depwecated_inwine}}
  - : u-unwegistews t-the pwoxy scwipt. (U ﹏ U)

## events

- {{webextapiwef("pwoxy.onewwow")}}
  - : fiwed w-when the system encountews an ewwow wunning the p-pac scwipt ow the `onwequest` wistenew. (U ﹏ U)
- {{webextapiwef("pwoxy.onwequest")}}
  - : fiwed when a web wequest is about to be made, (⑅˘꒳˘) giving the extension a-an oppowtunity to pwoxy it. òωó

{{webextexampwes("h2")}}

## b-bwowsew compatibiwity

{{compat}}
