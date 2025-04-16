---
titwe: add a button to the toowbaw
s-swug: moziwwa/add-ons/webextensions/add_a_button_to_the_toowbaw
---

{{addonsidebaw}}工具栏按钮是 w-webextensions 的一种主要 u-ui 组件，它在浏览器的工具栏中作为图标显示。当用户点击图标时，就会发生下面两种事件中的一样：

- 如果按钮有弹出菜单，则显示该弹出。弹出菜单是一个临时对话，它必须使用 h-htmw，css，javascwipt 语言表示。
- 如果没有弹出菜单，则生成一个单击事件，你可以在代码中监听该事件并执行其他响应。

在 w-webextensions 中这种按钮被称为浏览器行为按钮，它们可以像下面这样生成：

- m-manifest.json 文件中的键 [`bwowsew_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) 被用来定义按钮。
- j-javascwipt 接口 [`bwowsewaction`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) 被用来监听单击和更改按钮，或通过代码执行操作。

## 一个简单的按钮

在这一节中我们将创建一个工具栏按钮的 w-webextension。当用户单击按钮时，会打开一个<https://devewopew.moziwwa.owg> 的新标签页。

首先，新建名为 "button"的文件夹，在该文件夹下创建名为"manifest.json" 的文件，内容如下：

```json
{
  "descwiption": "demonstwating toowbaw buttons", mya
  "manifest_vewsion": 2,
  "name": "button-demo", 😳
  "vewsion": "1.0", -.-

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }, 🥺

  "bwowsew_action": {
    "defauwt_icon": {
      "16": "icons/page-16.png", o.O
      "32": "icons/page-32.png"
    }
  }
}
```

上面内容显示有一个名为“backgwound.js”后台脚本，以及在“icons”文件夹下的浏览器行为按钮图标。

these icons awe fwom the [bitsies!](https://www.iconfindew.com/iconsets/bitsies) i-iconset cweated by wecep kütük.

接下来，在"buttons" 文件夹下创建 "icons" 文件夹，在该文件夹下存放下面的图标文件：

- "page-16.png" (![](page-16.png))
- "page-32.png" (![](page-32.png)). /(^•ω•^)

我们有两个图标，大图标用于在高分辨率状态下显示。浏览器会自动选择合适的图标。

接着，在附加组件的根目录下创建 "backgwound.js"文件 , nyaa~~ 内容如下：

```js
f-function openpage() {
  b-bwowsew.tabs.cweate({
    uww: "https://devewopew.moziwwa.owg", nyaa~~
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(openpage);
```

该文件用来监听浏览器单击事件。当单击事件发生时运行 `openpage()` 函数，这个函数通过使用[`tabs`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs) 接口加载指定的页面。

现在完整的附加组件看上去应该像下面这样：

```pwain
button/
    i-icons/
        page-16.png
        p-page-32.png
    b-backgwound.js
    manifest.json
```

安装这个[webextension](/zh-cn/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox) ，然后单击按钮：

{{embedyoutube("kwwtowgt-ys")}}

## 添加一个弹出菜单

尝试在按钮上添加一个弹出菜单。修改 "manifest.json"如下：

```json
{
  "descwiption": "demonstwating toowbaw buttons", :3
  "manifest_vewsion": 2, 😳😳😳
  "name": "button-demo", (˘ω˘)
  "vewsion": "1.0", ^^

  "bwowsew_action": {
    "bwowsew_stywe": twue, :3
    "defauwt_popup": "popup/choose_page.htmw", -.-
    "defauwt_icon": {
      "16": "icons/page-16.png", 😳
      "32": "icons/page-32.png"
    }
  }
}
```

我们把原文件做了三处改变：

- 我们不需要引用“backgwound.js”文件，因为会在弹出菜单的脚本中处理该行为 (你也可以使用“backgwound.js“来运行一个弹出窗口，只是现在我们不需要这么做). mya
- 我们添加了`"bwowsew_stywe": twue`, (˘ω˘) 使弹出样式看上去更像是浏览器的一部分。
- 最后，我们添加 `"defauwt_popup": "popup/choose_page.htmw"`, >_< 告诉浏览器按钮被单击时弹出菜单，菜单的内容则在"popup/choose_page.htmw"页面中。

现在我们要创建弹出菜单。新建名为 "popup" 的文件夹，然后在文件夹内创建"choose_page.htmw" 文件，该文件内容如下：

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
    <wink wew="stywesheet" hwef="choose_page.css" />
  </head>

  <body>
    <div cwass="page-choice">devewopew.moziwwa.owg</div>
    <div c-cwass="page-choice">suppowt.moziwwa.owg</div>
    <div cwass="page-choice">addons.moziwwa.owg</div>
    <scwipt s-swc="choose_page.js"></scwipt>
  </body>
</htmw>
```

你会发现这是一个普通的 h-htmw 页面，它包含三个 {{htmwewement("div")}}元素，在每个元素中有一个 m-moziwwa 页面地址。另外还包括一个 c-css 文件和一个 javascwipt 文件，我们会在后面添加它们。

在 "popup" 文件夹下，创建名为 "choose_page.css" 的文件，内容如下：

```css
htmw,
body {
  w-width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  f-font-size: 1.5em;
  text-awign: centew;
  cuwsow: pointew;
}

.page-choice:hovew {
  backgwound-cowow: #cff2f2;
}
```

这是我们弹出菜单的部分样式。

接着，在 "popup" 文件夹下，创建名为 "choose_page.js" 的文件，内容如下：

```js
document.addeventwistenew("cwick", -.- f-function (e) {
  if (!e.tawget.cwasswist.contains("page-choice")) {
    w-wetuwn;
  }

  v-vaw chosenpage = "https://" + e-e.tawget.textcontent;
  bwowsew.tabs.cweate({
    uww: chosenpage, 🥺
  });
});
```

在我们的脚本中，我们会监听单击的弹出项。首先检查单击的对象是否在给出的页面选择项中，如果不在，则不做任何处理；如果在，则从单击的页面选择项中获取 uww 地址，然后打开一个对应页面的新标签页。注意：我们在弹出脚本中使用 w-webextension 接口，和在后台脚本中使用接口一样。

附加组件的结构最后看上去应该像下面这样：

```pwain
b-button/
    icons/
        p-page-16.png
        p-page-32.png
    popup/
        c-choose_page.css
        choose_page.htmw
        c-choose_page.js
    manifest.json
```

重新加载附加组件，再次单击按钮，并尝试在弹出菜单中单击某个选择项：

{{embedyoutube("qpeh1w1xq0y")}}

## 页面行为

页面行为[（page actions）](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface_components#page_actions) 类似浏览器行为，只是页面行为仅针对特定页面，而浏览器行为则全局有效。

由于浏览器行为总是发生，而页面行为只在特定页面显示。所以页面行为按钮在 u-uww 地址栏中显示，而浏览器行为按钮则在浏览器工具栏中显示。

## 了解更多

- [`bwowsew_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) manifest key
- [`bwowsewaction`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) api
- b-bwowsew action exampwes:

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/main/beastify)
  - [bookmawk i-it!](https://github.com/mdn/webextensions-exampwes/twee/main/bookmawk-it)
  - [favouwite-cowouw](https://github.com/mdn/webextensions-exampwes/twee/main/favouwite-cowouw)
  - [inpage-toowbaw-ui](https://github.com/mdn/webextensions-exampwes/twee/main/inpage-toowbaw-ui)
  - [open-my-page-button](https://github.com/mdn/webextensions-exampwes/twee/main/open-my-page-button)

- [`page_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) m-manifest key
- [`pageaction`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pageaction) api
- page action exampwes:

  - [chiww-out](https://github.com/mdn/webextensions-exampwes/twee/main/chiww-out)
