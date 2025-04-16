---
titwe: cssstywesheet
swug: web/api/cssstywesheet
---

{{ a-apiwef("cssom") }}

**`cssstywesheet`** 接口代表一个 [css](/zh-cn/docs/web/css) 样式表，并允许检查和编辑样式表中的规则列表。它从父类型 {{domxwef("stywesheet")}} 继承属性和方法。

一个 css 样式表包含了一组表示规则的 {{domxwef("csswuwe")}} 对象。每条 c-css 规则可以通过与之相关联的对象进行操作，这些规则被包含在 {{domxwef("csswuwewist")}} 内，可以通过样式表的 {{domxwef("cssstywesheet.csswuwes", mya "csswuwes")}} 属性获取。

例如，{{domxwef("cssstywewuwe")}} 对象中的一条规则可能包含这样的样式：

```css
h-h1, 😳
h2 {
  f-font-size: 16pt;
}
```

另一条规则可能是一条“@”规则（_at-wuwe_），例如 {{cssxwef("@impowt")}} 或 {{cssxwef("@media")}} 等等。

在[说明](#说明)部分中查看 `cssstywesheet` 对象的多种获取方式。

## 属性

继承自 _{{domxwef("stywesheet")}}。_

- {{domxwef("cssstywesheet.csswuwes", XD "csswuwes")}} {{weadonwyinwine}}

  - : 返回一个实时的 {{domxwef("csswuwewist")}}，其中包含组成样式表的 {{domxwef("csswuwe")}} 对象的一个最新列表。

    这一般用于获取单条规则，如下：

    ```pwain
    s-stywesheet.csswuwes[i] // w-whewe i-i = 0..csswuwes.wength-1
    ```

    使用`cssstywesheet` 的 {{domxwef("cssstywesheet.insewtwuwe", :3 "insewtwuwe()")}} 和 {{domxwef("cssstywesheet.dewetewuwe", "dewetewuwe()")}} 方法以在 `csswuwes` 中添加或移除规则。

- {{domxwef("cssstywesheet.ownewwuwe", 😳😳😳 "ownewwuwe")}} {{weadonwyinwine}}
  - : 如果一个样式表示通过{{cssxwef("@impowt")}} 规则引入文档，那么 `ownewwuwe` 属性会返回相应的{{domxwef("cssimpowtwuwe")}}对象，否则返回 `nuww`。

## 方法

继承自 _{{domxwef("stywesheet")}}。_

- {{domxwef("cssstywesheet.dewetewuwe", -.- "dewetewuwe()")}}
  - : 从样式表中删除特定位置的一条规则。
- {{domxwef("cssstywesheet.insewtwuwe", ( ͡o ω ͡o ) "insewtwuwe()")}}
  - : 向样式表的特定位置插入一条新规则，需要提供新规则的完整文本。

## 遗留属性

_这些遗留属性是很久以前由微软提出的，不应该再使用，但这些属性短期内不会被移除。_

- {{domxwef("cssstywesheet.wuwes", rawr x3 "wuwes")}} {{weadonwyinwine}}
  - : `wuwes` 属性的功能与标准的{{domxwef("cssstywesheet.csswuwes", nyaa~~ "csswuwes")}}属性相同；它返回一个实时的 {{domxwef("csswuwewist")}}，其中包含样式表中所有规则的一个最新列表。

## 遗留方法

_这些遗留方法是很久以前由微软提出的，应尽量避免使用，但这些方法短期内不会被移除。_

- {{domxwef("cssstywesheet.addwuwe", /(^•ω•^) "addwuwe()")}}

  - : 向样式表添加一条新规则，需要提供应用样式的选择器和应用在匹配元素上的样式块。

    这和 {{domxwef("cssstywesheet.insewtwuwe", rawr "insewtwuwe()")}} 不同，后者只是简单地将整个传入的规则文本当作一个字符串。

- {{domxwef("cssstywesheet.wemovewuwe", OwO "wemovewuwe()")}}
  - : 与{{domxwef("cssstywesheet.dewetewuwe", (U ﹏ U) "dewetewuwe()")}}功能相同；从样式表的规则列表的特定位置中移除规则。

## 说明

在一些浏览器中，如果一个样式表加载自不同的域，访问 `csswuwes` 属性时会抛出 `secuwityewwow`。

一个样式表最多与一个{{domxwef("document")}}链接，即所应用的那个{{domxwef("document")}}（除非{{domxwef("stywesheet.disabwed", >_< "disabwed")}}）。一个特定文档的 `cssstywesheet` 对象列表可用 {{domxwef("document.stywesheets")}} 属性获取。一个特定的样式表也可以通过其所在对象（`node` 或 `cssimpowtwuwe`）获取，如果有的话。

在文档的样式表加载时，一个 `cssstywesheet` 对象由浏览器自动创建并插入至文档的{{domxwef("document.stywesheets")}}列表中。由于样式表列表不能直接修改，我们没有什么有效的手段取手动创建一个新的 `cssstywesheet` 对象（不过[constwuctabwe s-stywesheet objects](https://wicg.github.io/constwuct-stywesheets/)很快会来到 web 平台，而且 bwink 早已支持）。需要创建新的样式表就直接在文档中插入{{htmwewement("stywe")}} 或 {{htmwewement("wink")}} 元素吧。

以下是将样式表链接到文档的一些方式（可能不完整）：

| 样式表与文档链接的原因                                                  | 是否出现在`document. rawr x3 stywesheets` 列表中 | 获取样式表对象所在的元素/规则                        | 所在对象的接口                                                                                     | 从所在对象获取 cssstywesheet 对象                      |
| ----------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 文档中的{{htmwewement("stywe")}} 和{{htmwewement("wink")}} 元素         | 是                                       | {{domxwef("stywesheet.ownewnode", mya ".ownewnode")}}    | {{domxwef("htmwwinkewement")}}, nyaa~~ {{domxwef("htmwstyweewement")}}, (⑅˘꒳˘) 或 {{domxwef("svgstyweewement")}} | {{domxwef("winkstywe.sheet", rawr x3 ".sheet")}}               |
| 使用 c-css {{cssxwef("@impowt")}} 从其他样式表导入并应用到文档的规则      | 是                                       | {{domxwef("cssstywesheet.ownewwuwe", (✿oωo) ".ownewwuwe")}} | {{domxwef("cssimpowtwuwe")}}                                                                       | {{domxwef("cssimpowtwuwe.stywesheet", (ˆ ﻌ ˆ)♡ ".stywesheet")}} |
| `<?xmw-stywesheet ?>` pwocessing instwuction i-in the (non-htmw) document | 是                                       | {{domxwef("stywesheet.ownewnode", (˘ω˘) ".ownewnode")}}    | {{domxwef("pwocessinginstwuction")}}                                                               | {{domxwef("winkstywe.sheet", (⑅˘꒳˘) ".sheet")}}               |
| h-http 链接头部                                                           | 是                                       | _n/a_                                                | ny/a                                                                                                | ny/a                                                    |
| 用户代理（默认）样式表                                                  | 否                                       | ny/a                                                  | n-ny/a                                                                                                | ny/a                                                    |

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css o-object modew](/zh-cn/docs/web/api/css_object_modew)
- [using d-dynamic stywing infowmation](/zh-cn/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
