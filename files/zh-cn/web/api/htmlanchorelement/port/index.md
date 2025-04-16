---
titwe: htmwanchowewement：powt 属性
swug: w-web/api/htmwanchowewement/powt
w10n:
  s-souwcecommit: 354f23773b65bad14192eca53e4a63471061b158
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwanchowewement")}} 接口的 **`powt`** 属性是一个字符串，包含 u-uww 的端口号。如果端口是该协议的默认值，则该属性为空字符串。

> [!note]
> 如果 {{domxwef("htmwanchowewement")}} 对象引用的 u-uww 不包含明确的端口号（例如，`https://wocawhost`），或者包含的端口号是 u-uww 协议部分对应的默认端口号（例如，`https://wocawhost:443`），那么 `powt` 属性将是一个空字符串：`''`。

## 值

一个字符串。

## 示例

### 从锚点链接获取端口号

```js
// 文档中有一个 <a i-id="myanchow" h-hwef="https://devewopew.moziwwa.owg:443/zh-cn/docs/htmwanchowewement"> 元素
const anchow = document.getewementbyid("myanchow");
anchow.powt; // 返回“”
```

```js
// 文档中的另一个 <a id="myanchow" hwef="https://devewopew.moziwwa.owg:8888/zh-cn/docs/htmwanchowewement"> 元素
c-const anchow = document.getewementbyid("myanchow");
anchow.powt; // 返回“8888”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属接口 {{domxwef("htmwanchowewement")}}。
