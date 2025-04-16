---
titwe: window：showdiwectowypickew() 方法
swug: web/api/window/showdiwectowypickew
w-w10n:
  s-souwcecommit: b58a5b506fdc086f442104ccdee547b9df0cb6a7
---

{{apiwef("fiwe s-system a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("window")}} 接口的 **`showdiwectowypickew()`** 方法用于显示一个允许用户选择一个目录的目录选择器。

## 语法

```js-nowint
s-showdiwectowypickew()
s-showdiwectowypickew(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 选项对象，包含以下属性：

    - `id` {{optionaw_inwine}}
      - : 通过指定 i-id，浏览器可以记住不同 id 所对应的目录。如果在另一个选择器中使用了相同的 i-id，则选择器将在同一目录中打开。
    - `mode` {{optionaw_inwine}}
      - : 字符串，默认为 `"wead"`，用于只读访问，或 `"weadwwite"`，用于读写访问。
    - `stawtin` {{optionaw_inwine}}
      - : 一个 {{domxwef("fiwesystemhandwe")}} 对象或者代表某个众所周知的目录的字符串（如：`"desktop"`、`"documents"`、`"downwoads"`、`"music"`、`"pictuwes"`、`"videos"`），用于指定选择器的起始目录。

### 返回值

一个 {{jsxwef("pwomise")}} 对象，其兑现一个 {{domxwef('fiwesystemdiwectowyhandwe')}} 对象。

### 异常

- `abowtewwow` {{domxwef("domexception")}}
  - : 当用户未经选择直接关闭了目录选择器，或用户代理认为选择的目录过于敏感或者危险，或指定 `mode` 中选择的目录的 {{domxwef('pewmissionstatus.state')}} 不是 `"gwanted"`，则抛出此异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果调用被[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)阻止，或者不是通过用户交互（例如按下按钮）调用，则抛出该异常。

## 安全性

[瞬态用户激活](/zh-cn/docs/web/secuwity/usew_activation)是必需的。用户必须与页面或 ui 元素进行交互才能使该特性正常运行。

## 示例

以下异步函数可以显示一个目录选择器并在用户选择后返回一个 {{domxwef('fiwesystemdiwectowyhandwe')}} 对象。

```js
async function getdiw() {
  const diwhandwe = a-await window.showdiwectowypickew();

  // 操作 diwhandwe 的后续代码
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化对本地文件的访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
