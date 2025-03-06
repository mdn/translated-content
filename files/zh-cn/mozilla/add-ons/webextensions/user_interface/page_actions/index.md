---
title: 地址栏按钮
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
---

{{AddonSideBar}}通常来说的 page action，是添加到浏览器地址栏中的按钮。用户通过点击这个按钮与你的扩展进行交互。

![](address_bar_button.png)

## 地址栏按钮（Page actions）和工具栏按钮（browser actions）

地址栏按钮 (或 page action) 与工具栏按钮 (或 browser action) 非常相似。

其不同之处为：

- 位置：

  - 地址栏按钮是显示在浏览器的地址栏内；
  - 工具栏按钮不是显示在地址栏内，而是在浏览器的工具栏上。

- 可见性：

  - 地址栏按钮默认是隐藏的（尽管可以通过 manifest 中“show_matches 和 hide_matches 来改变），而你可以在特定 tabs 中调用 pageAction.show() 和 pageAction.hide() 来显示或隐藏它。
  - 工具栏按钮总是可见的。

当动作（行为）与当前页面关联时，使用地址栏按钮，而当动作（行为）与浏览器相关或与多个页面相关时使用工具栏按钮。例如：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">类型</th>
      <th scope="col">书签动作</th>
      <th scope="col">内容动作</th>
      <th scope="col">标签操作</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">page action</th>
      <td>将本页面保存到书签</td>
      <td>Reddit enhancement</td>
      <td>Send tab</td>
    </tr>
    <tr>
      <th scope="row">browser action</th>
      <td>显示所有书签</td>
      <td>使能 ad-blocking</td>
      <td>同步所有打开的标签</td>
    </tr>
  </tbody>
</table>

## 定义地址栏按钮

你可以在 manifest.json 中使用 page_action 键定义地址栏按钮的属性：

```json
"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

仅 default_icon 是强制（必需）的。

有两种方式定义地址栏按钮：带 popup 窗口和无 popup 窗口。如果你没有指定一个 popup，则当用户点击此按钮时，事件被派送到使用[pageAction.onClicked](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked)侦听器的扩展：

```js
browser.pageAction.onClicked.addListener(handleClick);
```

如果你指定了一个 popup，则点击事件不被派送，在用户点击按钮时显示 popup。用户可以与 popup 进行交互，并且当用户点击 popup 以外区域时，popup 自动关闭。参见[Popup](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Popups)可获得创建和管理 popups 更详细内容。

注意你的扩展只能有一个地址栏按钮。

通过使用[pageAction](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API，你可以以编程方式修改地址栏按钮的任何属性。

## Icons

如何创建用于地址栏按钮的 ICONS 的详细内容，请参见[Photon Design System](https://design.firefox.com/photon/index.html)文档中的[Iconography](https://design.firefox.com/photon/visuals/iconography.html)节。

## 示例

GitHub 上的 [webextensions-examples](https://github.com/mdn/webextensions-examples) 库中包括了实现无 popup 地址栏按钮的例子 [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) 。
