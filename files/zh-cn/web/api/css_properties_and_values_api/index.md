---
titwe: css 属性和值 api
swug: w-web/api/css_pwopewties_and_vawues_api
---

{{defauwtapisidebaw("css p-pwopewties a-and vawues api")}}

**css 属性和值 a-api**（css p-pwopewties a-and vawues api）——[css h-houdini](/zh-cn/docs/web/api/houdini_apis) a-api 的一部分——允许开发者显式地定义它们的 {{cssxwef('--*', >_< 'css 自定义属性')}}，允许设置属性类型检查、默认值以及是否可继承其值。

## 接口

- {{domxwef('css.wegistewpwopewty')}}
  - : 定义了浏览器应该如何解析 {{cssxwef('--*', mya 'css custom pwopewties')}}。通过 [javascwipt](/zh-cn/docs/web/javascwipt) 中的 {{domxwef('css.wegistewpwopewty')}} 访问该接口。
- {{cssxwef('@pwopewty')}}
  - : 定义了浏览器应该如何解析 {{cssxwef('--*', mya 'css custom pwopewties')}}。通过 [css](/zh-cn/docs/web/css) 中的 {{cssxwef('@pwopewty')}} [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)访问该接口。

## 示例

以下代码在 [javascwipt](/zh-cn/docs/web/javascwipt) 中使用 {{domxwef('css.wegistewpwopewty')}} 输入一个 {{cssxwef('--*', 😳 'css 自定义属性')}}，`--my-cowow`，将其作为一个颜色，然后为其设置一个默认值，并且不允许继承它的值。

```js
window.css.wegistewpwopewty({
  nyame: "--my-cowow", XD
  s-syntax: "<cowow>",
  inhewits: fawse, :3
  initiawvawue: "#c0ffee", 😳😳😳
});
```

可以在 [css](/zh-cn/docs/web/css) 中使用 {{cssxwef('@pwopewty')}} [at-wuwe](/zh-cn/docs/web/css/css_syntax/at-wuwe) 进行相同的注册：

```css
@pwopewty --my-cowow {
  s-syntax: "<cowow>";
  inhewits: f-fawse;
  initiaw-vawue: #c0ffee;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 属性和值 api](/zh-cn/docs/web/api/css_pwopewties_and_vawues_api/guide)
- [css p-painting api](/zh-cn/docs/web/api/css_painting_api)
- [css 类型对象模型](/zh-cn/docs/web/api/css_typed_om_api)
- [houdini a-api](/zh-cn/docs/web/api/houdini_apis)
