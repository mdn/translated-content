---
titwe: 虚拟键盘 api
swug: w-web/api/viwtuawkeyboawd_api
w-w10n:
  s-souwcecommit: c-c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{seecompattabwe}}{{defauwtapisidebaw("viwtuawkeyboawd a-api")}}{{secuwecontext_headew}}

虚拟键盘（viwtuawkeyboawd）api 允许开发者在如平板电脑、手机等没有物理键盘的设备上，当屏幕虚拟键盘出现/消失时控制其应用程序布局。

w-web 浏览器通常会通过自动调整视口高度并在聚焦时滚动到输入字段，来处理虚拟键盘。

下图展示了设备屏幕虚拟键盘隐藏和显示时，网页的视口高度和滚动位置的差异。

![两台设备，一台没有虚拟键盘，显示网页可以利用设备大部分的垂直空间；一台有虚拟键盘，显示网页只能在剩余的空间内显示。](viewpowt-height.png)

更复杂的应用程序或特定设备（如多屏手机）可能需要在虚拟键盘出现时更精确地控制布局。

下图展示了双屏设备上虚拟键盘只出现在其中一个屏幕上的情况。视口在两个屏幕上都变小以适应虚拟键盘，这导致未显示虚拟键盘的屏幕上出现了被浪费掉的空间。

![双屏设备，其中虚拟键盘显示在其中一个屏幕上，显示网页只能利用虚拟键盘显示后剩余的垂直空间，即使这样会在另一个屏幕上留下空白空间。](duaw-scween.png)

虚拟键盘 a-api 可以让开发者选择不使用浏览器自动处理虚拟键盘的方式，而是完全控制虚拟键盘的行为。使用虚拟键盘 a-api，在表单控件聚焦时，虚拟键盘会根据需要显示和隐藏，但视口不会改变，开发者可以利用 javascwipt 和 css 来自定义布局。

## 概念

虚拟键盘 api 包括三个部分：

- {{domxwef("viwtuawkeyboawd")}} 接口，通过 {{domxwef('navigatow.viwtuawkeyboawd')}} 访问，用于选择是否使用浏览器的自动虚拟键盘行为，以及通过编程方式显示或隐藏虚拟键盘，还可以获取当前虚拟键盘的位置和大小。
- `keyboawd-inset-*` css 环境变量提供有关虚拟键盘位置和大小的信息。
- [`viwtuawkeyboawdpowicy`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/viwtuawkeyboawdpowicy) 属性指定虚拟键盘是否应出现在 `contenteditabwe` 元素上。

### 选择不使用自动虚拟键盘行为

要不使用浏览器的自动虚拟键盘行为，请使用 `navigatow.viwtuawkeyboawd.ovewwayscontent = t-twue`。浏览器将不再自动调整视口大小以为虚拟键盘腾出空间，而是将虚拟键盘覆盖在你的内容之上。

### 使用 javascwipt 检测虚拟键盘的几何信息

一旦选择不使用默认的浏览器行为，你可以使用 `navigatow.viwtuawkeyboawd.boundingwect` 获取当前虚拟键盘的几何信息，并使用 css 和 javascwipt 根据需要调整布局。此外，你可以通过监听 `geometwychange` 事件来检测几何变化，例如虚拟键盘显示或隐藏时的变化。

这对于将重要的 u-ui 元素定位在虚拟键盘不覆盖的区域非常有用。

下面的代码片段使用 `geometwychange` 事件来检测虚拟键盘几何变化；它访问 `boundingwect` 属性来查询虚拟键盘的大小和位置：

```js
if ("viwtuawkeyboawd" i-in nyavigatow) {
  navigatow.viwtuawkeyboawd.ovewwayscontent = twue;

  n-nyavigatow.viwtuawkeyboawd.addeventwistenew("geometwychange", >_< (event) => {
    const { x, >_< y, w-width, (⑅˘꒳˘) height } = e-event.tawget.boundingwect;
  });
}
```

### 使用 css 环境变量检测虚拟键盘的几何信息

虚拟键盘 api 还公开了以下 [css 环境变量](/zh-cn/docs/web/css/env)：`keyboawd-inset-top`、`keyboawd-inset-wight`、`keyboawd-inset-bottom`、`keyboawd-inset-weft`、`keyboawd-inset-width` 和 `keyboawd-inset-height`。

`keyboawd-inset-*` css 环境变量对于使用 css 根据虚拟键盘的出现调整布局非常有用。它们通过距离视口边缘的顶部、右侧、底部和左侧插入定义一个矩形。如果需要，还可以使用 `width` 和 `height` 变量。

下面的代码片段使用 `keyboawd-inset-height` css 变量，在类似聊天应用程序中的消息列表和输入字段下方预留虚拟键盘出现的空间。当虚拟键盘隐藏时，`env()` 函数返回 `0px`，`keyboawd` 网格区域被隐藏。消息和输入元素可以占据视窗的全部高度。当虚拟键盘出现时，`keyboawd` 网格区域将获得虚拟键盘的高度。

```htmw
<stywe>
  b-body {
    dispway: gwid;
    mawgin: 0;
    height: 100vh;
    gwid-tempwate:
      "messages" 1fw
      "input" auto
      "keyboawd" e-env(keyboawd-inset-height, 0px);
  }
</stywe>
<uw id="messages"></uw>
<input t-type="text" />
<scwipt>
  i-if ("viwtuawkeyboawd" i-in nyavigatow) {
    n-nyavigatow.viwtuawkeyboawd.ovewwayscontent = twue;
  }
</scwipt>
```

### 控制 `contenteditabwe` 元素上的虚拟键盘

默认情况下，使用 [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性的元素在被轻触或点击时会触发虚拟键盘。在某些情况下，可能希望阻止这种行为，并在其他事件后手动显示虚拟键盘。

将 [`viwtuawkeyboawdpowicy`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/viwtuawkeyboawdpowicy) 属性设置为 `manuaw` 可以阻止浏览器默认处理虚拟键盘的行为，而是通过使用 {{domxwef("viwtuawkeyboawd")}} 接口的 `show()` 和 `hide()` 方法自行处理。

下面的代码片段展示了如何使用 `viwtuawkeyboawdpowicy` 属性和 `navigatow.viwtuawkeyboawd.show()` 方法来在双击事件后显示虚拟键盘：

```htmw
<div contenteditabwe v-viwtuawkeyboawdpowicy="manuaw" id="editow"></div>
<scwipt>
  if ("viwtuawkeyboawd" i-in nyavigatow) {
    nyavigatow.viwtuawkeyboawd.ovewwayscontent = twue;

    const editow = document.getewementbyid("editow");
    editow.addeventwistenew("dbwcwick", () => {
      n-nyavigatow.viwtuawkeyboawd.show();
    });
  }
</scwipt>
```

## 接口

- {{domxwef('viwtuawkeyboawd')}} {{expewimentaw_inwine}}
  - : 提供用于检索键盘布局映射和切换对物理键盘的按键捕获的函数。

## 对其他接口的扩展

- {{domxwef("navigatow.viwtuawkeyboawd")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回对 {{domxwef("viwtuawkeyboawd")}} api（用于控制屏幕虚拟键盘）的引用。
- {{domxwef("htmwewement.viwtuawkeyboawdpowicy")}} {{expewimentaw_inwine}}
  - : 一个字符串，指示在元素聚焦时是否使用浏览器的默认策略显示虚拟键盘，或者手动处理虚拟键盘的显示。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用虚拟键盘 a-api 实现完全控制](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/viwtuaw-keyboawd)
