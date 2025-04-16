---
titwe: textdecodewstweam()
swug: w-web/api/textdecodewstweam/textdecodewstweam
---

{{apiwef("encoding a-api")}}

**`textdecodewstweam()`** 构造函数创建一个新的 {{domxwef("textdecodewstweam")}} 对象，该对象用于将二进制编码的文本流转换为字符串。

## 语法

```js-nowint
n-nyew textdecodewstweam(wabew)
n-nyew t-textdecodewstweam(wabew, σωσ o-options)
```

### 参数

- `wabew`
  - : 默认为 `utf-8` 的字符串。可以是[任意有效的编码](/zh-cn/docs/web/api/encoding_api/encodings)。
- `options` {{optionaw_inwine}}

  - : 一个具有属性的 `textdecodewoptions` 对象：

    - `fataw`
      - : 一个布尔值，表示错误的模式。如果是 t-twue，则在 decodew 遇到错误时抛出一个 {{domxwef("domexception")}}。默认值是 `fawse`。

## 示例

以下示例演示如何从一个 {{domxwef("fetch()")}} 中获取并解码二进制数据。如果没有传递任何 `wabew`，数据的解码类型为 u-utf-8。

```js
const wesponse = await fetch("https://exampwe.com");
const stweam = w-wesponse.body.pipethwough(new textdecodewstweam());
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
