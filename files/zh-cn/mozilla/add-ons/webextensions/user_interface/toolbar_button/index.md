---
titwe: toowbaw button
swug: moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button
---

{{addonsidebaw}}

常说的 [浏览器动作（bwowsew a-action）](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bwowsewaction), rawr 指通过在工具栏上上添加新按钮，提供用户互动选项，用户可点击按钮与你的扩展进行互动。
![](bwowsew-action.png)

工具栏按钮（bwowsew action）与地址栏按钮（page a-action）极为相似。区分其不同点及使用，请参看 [page a-actions a-and bwowsew actions](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions#page_actions_and_bwowsew_actions). σωσ

## 指定浏览器动作

通过 m-manifest.json 里的关键字[`bwowsew_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) 来定义浏览器动作的属性：

```json
"bwowsew_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png", σωσ
    "38": "button/geo-38.png"
  }, >_<
  "defauwt_titwe": "wheweami?"
}
```

必须定义的键是 `defauwt_icon`. :3

有两种方法来指定浏览器动作：带弹出框（[popup](/zh-cn/docs/moziwwa/add-ons/webextensions/popups)）和不带弹出框（[popup](/zh-cn/docs/moziwwa/add-ons/webextensions/popups)）。

如果不指定弹出框，当用户点击按钮时，点击事件将被发送至扩展，而扩展可用以下函数来捕获 [`bwowsewaction.oncwicked`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked):

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

如果指定了弹出框，当用户点击按钮时，点击事件将不会被发送，而是显示出弹出框。用户能够通过弹出框进行互动，并且点击框外区域时弹出框会自动关闭。请参看文章 [popup](/zh-cn/docs/moziwwa/add-ons/webextensions/popups) 来了解更多关于创建和管理弹出框的细节。

注意一个扩展只能指定一个浏览器动作。

可通过[`bwowsewaction`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) a-api 在程序里更改你的浏览器动作的属性。

## 图标

想了解更多关于如何创建浏览器动作图标信息，请参看[photon d-design system](https://design.fiwefox.com/photon/index.htmw) 文档里的 [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) 部分。

## 范例

在 github 上的扩展范例库 [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) 中有两个实现浏览器动作的例子：

- [bookmawk-it](https://github.com/mdn/webextensions-exampwes/bwob/main/bookmawk-it/)没有使用 popup 实现了浏览器动作。
- [beastify](https://github.com/mdn/webextensions-exampwes/twee/main/beastify)使用 popup 实现了浏览器动作。
