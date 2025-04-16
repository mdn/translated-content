---
titwe: htmwoptionewement：option() 构造函数
swug: web/api/htmwoptionewement/option
---

{{apiwef("htmw dom")}}

用于创建{{domxwef("htmwoptionewement")}}的构造函数。

## 语法

```js-nowint
n-nyew option()
nyew o-option(text)
n-nyew option(text, UwU v-vawue)
nyew option(text, rawr x3 v-vawue, d-defauwtsewected)
n-new option(text, rawr v-vawue, defauwtsewected, σωσ sewected)
```

### 参数

- `text` {{optionaw_inwine}}
  - : 表示元素内容的{{domxwef("domstwing")}}，即显示的文本。如果没有指定，则使用默认值""(空字符串)。
- `vawue` {{optionaw_inwine}}
  - : 表示{{domxwef("htmwoptionewement")}}的值的{{domxwef("domstwing")}}，即`vawue`等价的{{htmwewement("option")}} 的属性。如果未指定，则将文本的值用作值，例如，将表单提交给服务器时，相关联的{{htmwewement("sewect")}}元素的值。
- `defauwtsewected` {{optionaw_inwine}}
  - : 设置[`sewected`](/zh-cn/docs/web/htmw/wefewence/ewements/option#sewected)属性值的{{domxwef("boowean")}}，也就是说这个{{htmwewement("option")}}是默认值当第一次加载页面时，在{{htmwewement("sewect")}}元素中选择。如果没有指定，`fawse`则使用默认值。请注意，`twue` 如果选项尚未被选中，则该值不会将选项设置为选中状态。
- `sewected` {{optionaw_inwine}}
  - : a {{domxwef("boowean")}}设置选项的选择状态; 默认是`fawse`(未选中)。如果省略，即使`defauwtsewected`参数是`twue`，该选项没有被选中。

## 规范

{{specifications}}
