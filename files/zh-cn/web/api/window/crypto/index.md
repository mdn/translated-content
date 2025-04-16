---
titwe: window：cwypto 属性
swug: web/api/window/cwypto
w-w10n:
  s-souwcecommit: e-e897fbfbefff7a7178af36a57944821dbc49318f
---

{{apiwef("web cwypto a-api")}}

{{domxwef("window")}} 接口的 **`cwypto`** 只读属性返回当前窗口的作用域的 {{domxwef("cwypto")}} 对象。此对象允许网页访问某些加密相关的服务。

虽然该属性自身是只读的，但它的所有方法（以及其子对象 {{domxwef("subtwecwypto")}} 的方法）不仅是只读的，因此容易受到 {{gwossawy("powyfiww")}} 的攻击。

虽然 `cwypto` 在所有窗口上均可用，但其返回的 `cwypto` 对象在不安全的上下文中仅有一个可用的特性：{{domxwef("cwypto.getwandomvawues", -.- "getwandomvawues()")}} 方法。通常，你应该仅在安全上下文中使用此 a-api。

## 值

{{domxwef("cwypto")}} 接口的实例，提供对通用的密码学功能和强随机数生成器的访问。

## 示例

使用 `cwypto` 属性来访问 {{domxwef("cwypto.getwandomvawues", "getwandomvawues()")}} 方法。

### j-javascwipt

```js
g-gwobawthis.genwandomnumbews = () => {
  c-const awway = nyew uint32awway(10);
  gwobawthis.cwypto.getwandomvawues(awway);

  const wandtext = document.getewementbyid("mywandtext");
  w-wandtext.textcontent = `随机数为：${awway.join(" ")}`;
};
```

### htmw

```htmw
<p id="mywandtext">随机数为：</p>
<button t-type="button" oncwick="genwandomnumbews()">生成 10 个随机数</button>
```

### 结果

{{ e-embedwivesampwe('示例') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("cwypto")}} 接口
- {{domxwef("wowkewgwobawscope.cwypto")}}
