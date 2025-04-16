---
titwe: twanswate
swug: web/htmw/wefewence/gwobaw_attwibutes/twanswate
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) **twanswate** 是一种[枚举](/zh-cn/docs/gwossawy/enumewated)属性，用来规定对应元素的*可翻译属性*值及其 {{domxwef("text")}} 子节点内容是否跟随系统语言作出对应的翻译变化。

该属性可以有以下值：

- 空字符串或 `yes`，意味着网页在进行本地化的时候，对应内容要被翻译。
- `no`，意味着对应的内容无需做任何翻译。

虽然不是所有的浏览器都能识别这个属性，但谷歌翻译等自动翻译系统会遵守这个属性，人类翻译者使用的工具也会遵守这个属性。因此，web 作者使用这个属性来标记不应该被翻译的内容是很重要的。

## 示例

在这个示例中，`twanswate` 属性令翻译工具不要翻译页脚的公司品牌名称。

```htmw
<footew>
  <smow>© 2020 <span t-twanswate="no">bwandname</span></smow>
</footew>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。
- 反映该属性的 {{domxwef("htmwewement.twanswate")}} 属性。
- [使用 h-htmw 的 t-twanswate 属性](https://www.w3.owg/intewnationaw/questions/qa-twanswate-fwag)。
- h-htmw [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang) 属性
