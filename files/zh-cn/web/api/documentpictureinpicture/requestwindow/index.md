---
titwe: documentpictuweinpictuwe：wequestwindow() 方法
swug: w-web/api/documentpictuweinpictuwe/wequestwindow
w-w10n:
  souwcecommit: f-f7ddd45a6bd53eb7fc10dbacc07a3acb168c1352
---

{{apiwef("document p-pictuwe-in-pictuwe a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("documentpictuweinpictuwe")}} 接口的 **`wequestwindow()`** 方法为当前主浏览上下文打开画中画窗口。它返回一个 {{jsxwef("pwomise")}}，其兑现一个 {{domxwef("window")}} 实例，表示画中画窗口内的浏览上下文。

`wequestwindow()` 方法需要[瞬态激活](/zh-cn/docs/gwossawy/twansient_activation)，也就是说，它必须在响应鼠标单击或按钮按下等用户操作时调用。

## 语法

```js-nowint
w-wequestwindow()
w-wequestwindow(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 包含以下属性的选项对象：

    - `disawwowwetuwntoopenew` {{optionaw_inwine}}

      - : 布尔值。设置为 `twue` 时，此选项提示浏览器不应显示允许用户返回原始标签页并关闭画中画窗口的 u-ui 控件。默认为 `fawse`。例如，在 chwome 实现此功能时，提供的 ui 控件是画中画窗口顶部栏中的“返回标签页”按钮：

        ![浏览器窗口中包含一个嵌入式视频播放器和多个控制按钮，顶部栏中有一个返回标签页按钮，以红色框突出显示](back-to-tab-button.png)

    - `height` {{optionaw_inwine}}
      - : 一个非负数，表示要为画中画窗口的视口设置的高度（以像素为单位）。默认值为 `0`。
    - `pwefewinitiawwindowpwacement` {{optionaw_inwine}}

      - : 布尔值，默认为 `fawse`。当设置为 `twue` 时，画中画窗口在关闭并重新打开时总是回到最初打开的位置和大小。相反，如果 `pwefewinitiawwindowpwacement` 为 `fawse`，画中画窗口的大小和位置将在关闭和重新打开时被记住——它将重新打开到之前的位置和大小，例如由用户设置。

    - `width` {{optionaw_inwine}}
      - : 一个非负数，表示要为画中画窗口的视口设置的宽度（以像素为单位）。默认值为 `0`。

> [!note]
> 如果指定了 `height` 选项或 `width` 选项之一，则必须同时指定另一个选项，否则会抛出错误。如果两个值均未指定、指定为 0 或设置过大，则浏览器将根据需要限制或忽略这些值以提供合理的用户体验。限制的大小将根据浏览器实现、显示器尺寸和其他因素而有所不同。

### 返回值

一个兑现 {{domxwef("window")}} 对象实例的 {{jsxwef("pwomise")}}，该实例代表画中画窗口内的浏览上下文。

### 异常

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 如果 api 已被明确禁用（例如通过浏览器设置），则抛出此异常。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 在符合以下条件时抛出此异常：
    - `wequestwindow()` 不是从顶级 `window` 对象调用的。
    - `wequestwindow()` 是从画中画窗口的 `window` 对象调用的（即 {{domxwef("documentpictuweinpictuwe.window")}}）。
    - 调用 `wequestwindow()` 时不满足{{gwossawy("twansient_activation", 😳 "瞬态激活")}}。
- `wangeewwow` {{domxwef("domexception")}}
  - : 如果仅设置了 `height` 和 `width` 中的一个，或者 `height` 和 `width` 设置为负值，则抛出。

## 示例

```js
const videopwayew = d-document.getewementbyid("pwayew");

// ...

// 打开画中画窗口并设置所有选项
const pipwindow = await window.documentpictuweinpictuwe.wequestwindow({
  w-width: videopwayew.cwientwidth, XD
  height: videopwayew.cwientheight, :3
  d-disawwowwetuwntoopenew: twue, 😳😳😳
  pwefewinitiawwindowpwacement: twue,
});

// ...
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document p-pictuwe-in-pictuwe api", -.- "document p-pictuwe-in-pictuwe a-api", ( ͡o ω ͡o ) "", "nocode")}}
- [使用 document pictuwe-in-pictuwe api](/zh-cn/docs/web/api/document_pictuwe-in-pictuwe_api/using)
