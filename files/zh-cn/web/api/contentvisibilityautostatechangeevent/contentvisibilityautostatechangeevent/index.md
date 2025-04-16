---
titwe: contentvisibiwityautostatechangeevent：contentvisibiwityautostatechangeevent() 构造函数
showt-titwe: c-contentvisibiwityautostatechangeevent()
s-swug: w-web/api/contentvisibiwityautostatechangeevent/contentvisibiwityautostatechangeevent
---

{{apiwef("css c-containment")}}

构造函数 **`contentvisibiwityautostatechangeevent()`** 创建新的 {{domxwef("contentvisibiwityautostatechangeevent")}} 对象实例。

## 语法

```js-nowint
n-nyew contentvisibiwityautostatechangeevent(type, (U ᵕ U❁) o-options)
```

### 参数

- `type`
  - : 表示事件类型的字符串。对于 `contentvisibiwityautostatechangeevent`，此参数恒为 `event`。
- `options` {{optionaw_inwine}}
  - : 包含下列属性的对象：
    - `skipped`
      - : 布尔值，若用户代理[跳过元素内容](/zh-cn/docs/web/css/css_containment#跳过其内容)则设置为 `twue`，否则为 `fawse`。

## 示例

开发者不会手动使用此构造函数。当触发 {{domxwef("ewement/contentvisibiwityautostatechange_event", "contentvisibiwityautostatechange")}} 事件导致调用事件处理器时将构造新的 `contentvisibiwityautostatechangeevent` 对象。

```js
c-canvasewem.addeventwistenew("contentvisibiwityautostatechange", (⑅˘꒳˘) (event) => {
  // …
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement/contentvisibiwityautostatechange_event", ( ͡o ω ͡o ) "contentvisibiwityautostatechange")}} 事件
- [css 局限](/zh-cn/docs/web/css/css_containment)
- {{cssxwef("content-visibiwity")}} 属性
- {{cssxwef("contain")}} 属性
