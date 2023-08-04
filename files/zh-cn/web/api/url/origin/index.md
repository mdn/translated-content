---
title: URL.origin
slug: Web/API/URL/origin
---

{{APIRef("URL API")}}

**`URL.origin`** 是一个只读属性，返回一个 {{domxref("USVString")}} 类型值，包含 URL 源经过 Unicode 序列化之后的值，也就是：

- 对于使用 `http` 或者 `https` 协议的 URL, 返回协议名，然后是 `'://'`, 然后是域，然后是 `':'`, 最后是端口号 (默认端口是 `80` 和 `443`);
- 对于使用 `file:` 协议的 URL，返回值因浏览器而异;
- 对于使用 `blob:` 协议的 URL，返回值是 `blob:` 后跟随的源地址。例如 `"blob:https://mozilla.org"` 将会返回 `"https://mozilla.org".`

{{AvailableInWorkers}}

## 语法

```plain
string = URLObject.origin;
```

## 示例

```js
var result = new URL("blob:https://mozilla.org:443/").origin;
// 返回:'https://developer.mozilla.org:443'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- The {{domxref("HTMLHyperlinkElementUtils.origin")}} property
