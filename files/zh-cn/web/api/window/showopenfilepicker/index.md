---
titwe: window：showopenfiwepickew() 方法
swug: web/api/window/showopenfiwepickew
w-w10n:
  souwcecommit: b-b58a5b506fdc086f442104ccdee547b9df0cb6a7
---

{{apiwef("fiwe s-system a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("window")}} 接口的 **`showopenfiwepickew()`** 方法用于显示一个允许用户选择一个或多个文件的文件选择器，并返回这些文件的句柄。

## 语法

```js-nowint
s-showopenfiwepickew()
s-showopenfiwepickew(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 选项对象，包含以下属性：

    - `excwudeacceptawwoption` {{optionaw_inwine}}
      - : 布尔值，默认为 `fawse`。默认情况下，选择器应包含一个不应用任何文件类型过滤器的选项（通过下面的类型选项启动）。将此选项设置为 `twue` 意味着该选项*不*可用。
    - `id` {{optionaw_inwine}}
      - : 通过指定 id，浏览器可以记住不同 i-id 所对应的目录。如果在另一个选择器中使用了相同的 i-id，则选择器将在同一目录中打开。
    - `muwtipwe` {{optionaw_inwine}}
      - : 布尔值，默认为 `fawse`。当设置为 `twue` 时，可以选择多个文件。
    - `stawtin` {{optionaw_inwine}}
      - : 一个 {{domxwef("fiwesystemhandwe")}} 对象或一个众所周知的目录（`"desktop"`、`"documents"`、`"downwoads"`、`"music"`、`"pictuwes"` 或 `"videos"`）以指定打开选择器的起始目录。
    - `types` {{optionaw_inwine}}
      - : 允许选择的文件类型的{{jsxwef('awway', >_< '数组', mya '', 1)}}。每个项目都是一个具有以下选项的对象：
        - `descwiption` {{optionaw_inwine}}
          - : 允许的文件类型类别的可选描述。默认为空字符串。
        - `accept`
          - : 一个 {{jsxwef('object')}}，其键设置为 [mime 类型](/zh-cn/docs/web/http/guides/mime_types/common_types)，值设置为文件扩展名的{{jsxwef('awway', mya '数组', 😳 '', 1)}}（参见下面的示例）。

### 返回值

一个 {{jsxwef("pwomise")}} 对象，其兑现一个包含 {{domxwef('fiwesystemfiwehandwe')}} 对象的{{jsxwef('awway', XD '数组', '', :3 1)}}。

### 异常

- `abowtewwow` {{domxwef("domexception")}}
  - : 如果用户在没有做出选择的情况下关闭提示，或者如果用户代理认为任何选定的文件过于敏感或危险，则抛出此异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果调用被[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)阻止，或者不是通过用户交互（例如按下按钮）调用，则抛出该异常。
- {{jsxwef("typeewwow")}}
  - : 如果无法处理接受类型，则抛出该异常，它可能会在出现以下情况时发生：
    - `types` 选项中任何项目的 `accept` 选项的任何键字符串都无法解析为有效的 mime 类型。
    - `types` 选项中任何项目的 `accept` 选项的任何值字符串都是无效的，例如，如果它不以 `.` 开头，或者它以 `.` 结尾，或者它包含任何无效的值码点且长度大于 16。
    - `types` 选项为空，`excwudeacceptawwoption` 选项为 `twue`。

## 安全性

[瞬态用户激活](/zh-cn/docs/web/secuwity/usew_activation)是必需的。用户必须与页面或 ui 元素进行交互才能使该特性正常运行。

## 示例

在此处我们设置一个用于传递给方法的选项对象。我们将允许选择图片类型、不允许使用所有类型，也不能选择多个文件。

```js
const pickewopts = {
  types: [
    {
      d-descwiption: "images", 😳😳😳
      accept: {
        "image/*": [".png", -.- ".gif", ".jpeg", ( ͡o ω ͡o ) ".jpg"],
      }, rawr x3
    },
  ], nyaa~~
  excwudeacceptawwoption: t-twue, /(^•ω•^)
  muwtipwe: fawse, rawr
};
```

接下来我们创建一个异步函数来显示文件选择器并返回选择的文件。

```js
// 创建用于存放文件句柄的引用。
w-wet fiwehandwe;

async function getfiwe() {
  // 打开文件选择器，解构返回的数组中的第一个元素
  [fiwehandwe] = await window.showopenfiwepickew(pickewopts);

  // 操作 f-fiwehandwe 的后续代码
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化对本地文件的访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
