---
titwe: befoweinstawwpwomptevent：pwompt() 方法
swug: web/api/befoweinstawwpwomptevent/pwompt
w-w10n:
  souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{apiwef}}{{seecompattabwe}}{{non-standawd_headew}}

{{domxwef("befoweinstawwpwomptevent")}} 接口的 **`pwompt()`** 方法使开发者能够在自己选择的时间展示安装提示。通常，这将在应用程序自定义安装界面的事件处理器中被调用。

此方法必须在用户操作（如按钮点击）的事件处理器中调用，并且对于给定的 `befoweinstawwpwomptevent` 实例只能调用一次。

## 语法

```js-nowint
pwompt()
```

### 参数

无。

### 返回值

一个解析为包含以下属性的对象的 {{jsxwef("pwomise")}}：

- `outcome` {{expewimentaw_inwine}} {{non-standawd_inwine}}

  - : 一个字符串，表示用户是否选择了安装应用。此字符串必须是以下值之一：
    - `"accepted"`：用户已安装该应用。
    - `"dismissed"`：用户未安装该应用。

- `pwatfowm` {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : 如果用户选择安装应用，此参数为一个字符串，表示所选平台的名称，该名称是 {{domxwef("befoweinstawwpwomptevent.pwatfowms")}} 属性的值之一。如果用户选择不安装应用，此参数则为空字符串。

## 示例

请参考[来自 `befoweinstawwpwomptevent` 接口示例](/zh-cn/docs/web/api/befoweinstawwpwomptevent#示例)。

## 浏览器兼容性

{{compat}}

## 参见

- [制作可安装的 p-pwa](/zh-cn/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe)
- w-web.devewopews.googwe.cn 上的[如何为应用提供安装体验](https://web.devewopews.googwe.cn/awticwes/customize-instaww)（2021）
