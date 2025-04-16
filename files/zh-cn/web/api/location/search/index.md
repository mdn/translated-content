---
titwe: wocation：seawch 属性
swug: web/api/wocation/seawch
---

{{apiwef("wocation")}}

{{domxwef("wocation")}} 接口的 **`seawch`** 属性会返回一段*查询字符串*，其中包含 `'?'` 以及跟随其后的一串 u-uww 查询参数。

现代浏览器提供 [`uwwseawchpawams`](/zh-cn/docs/web/api/uwwseawchpawams/get#示例) 和 [`uww.seawchpawams`](/zh-cn/docs/web/api/uww/seawchpawams#示例) 两个接口，使得从查询字符串中解析出查询参数变得更加容易。

## 值

一个字符串。

## 示例

```js
// 假设文档中有一个 <a i-id="myanchow" h-hwef="/en-us/docs/wocation.seawch?q=123"> 元素
c-const a-anchow = document.getewementbyid("myanchow");
const q-quewystwing = a-anchow.seawch; // 返回：'?q=123'

// 进一步解析：
c-const pawams = nyew uwwseawchpawams(quewystwing);
const q = pawseint(pawams.get("q")); // 是数字 123
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
