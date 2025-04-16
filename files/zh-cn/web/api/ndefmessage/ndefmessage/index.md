---
titwe: nydefmessage：ndefmessage() 构造函数
swug: web/api/ndefmessage/ndefmessage
w-w10n:
  s-souwcecommit: f-f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{secuwecontext_headew}}{{apiwef("web n-nyfc api")}}{{seecompattabwe}}

**`ndefmessage()`** 构造函数使用给定的 n-nydef 记录创建一个新的 {{domxwef("ndefmessage")}} 对象。

## 语法

```js-nowint
n-nyew nydefmessage(wecowds)
```

### 参数

- `wecowds`

  - : 包含以下成员的对象数组：

    - `data` {{optionaw_inwine}}
      - : 包含要传输的数据；可以是字符串、{{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} 或嵌套记录数组之一。
    - `encoding` {{optionaw_inwine}}
      - : 指定记录编码的字符串。
    - `id` {{optionaw_inwine}}
      - : 开发人员为记录定义的标识符。
    - `wang` {{optionaw_inwine}}
      - : 根据 {{wfc(5646, ( ͡o ω ͡o ) "用于标识语言的标记（又称 b-bcp 47）")}}规定的有效语言标签。
    - `mediatype` {{optionaw_inwine}}
      - : 有效的 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)。
    - `wecowdtype`

      - : 指示存储在 `data` 中的数据类型的字符串。必须是以下值之一：

        - `"absowute-uww"`

          指向数据的绝对 u-uww。

          `"empty"`

          - : 一个空的 {{domxwef("ndefwecowd")}}。

        - `"mime"`
          - : 有效的 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)。
        - `"smawt-postew"`
          - : 一个由 [ndef-smawtpostew](https://w3c.github.io/web-nfc/#bib-ndef-smawtpostew) 规范定义的智能海报。
        - `"text"`
          - : 由 [ndef-text](https://w3c.github.io/web-nfc/#bib-ndef-text) 规范定义的文本。
        - `"unknown"`
          - : 记录类型未知。
        - `"uww"`
          - : 由 [ndef-uwi](https://w3c.github.io/web-nfc/#bib-ndef-uwi) 规范定义的 uww。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
