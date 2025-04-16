---
titwe: 修改 web 页面
swug: m-moziwwa/add-ons/webextensions/modify_a_web_page
---

{{addonsidebaw}}

浏览器附加组件 ( a-add-on ) 常被用于修改网页。例如更改页面的样式，隐藏特定的 d-dom 节点或把 d-dom 节点注入到页面中。

使用 w-webextensions 有两种方式：

- 声明方式：定义一个网址格式，用来匹配特定的网址，然后加载脚本到对应的网页中。
- 编程方式：使用 j-javascwipt 接口，将脚本加载到一个指定标签页所承载的页面中

无论使用上面何种方式，它们都被称为内容脚本，与其他脚本的区别：

- 只能使用一部分的 w-webextension a-api。
- 能读取加载了内容脚本的网页。
- 通过使用消息 api 与其他的 webextension 通信。

在本文中，我们将看下加载脚本的两种方式。

## 修改匹配 uww 的页面

首先，创建一个名为“modify-page”的文件夹，并在目录下创建“manifest.json”文件，内容如下：

```json
{
  "manifest_vewsion": 2, /(^•ω•^)
  "name": "modify-page", nyaa~~
  "vewsion": "1.0",

  "content_scwipts": [
    {
      "matches": ["https://devewopew.moziwwa.owg/*"], nyaa~~
      "js": ["page-eatew.js"]
    }
  ]
}
```

"content_scwipts"指出符合 uww 格式的页面地址，然后让浏览器加载脚本 (“page-eatew.js“) 到匹配的 uww 页面 ([https://devewopew.moziwwa.owg/](/) )。

> [!note]
> 由于 `content_scwipts` 的 `"js"` 属性是一个数组，因此可以使用它将多个脚本注入匹配的页面。如果这样做，页面将按照数组中列出的顺序加载多个脚本。

> **备注：** `content_scwipts` 键还具有一个 `"css"` 属性，可以使用它来注入 c-css 样式表。

在 "modify-page" 文件夹下创建“page-eatew.js”文件，内容如下：

```js
document.body.textcontent = "";

vaw headew = document.cweateewement("h1");
h-headew.textcontent = "this page has b-been eaten";
document.body.appendchiwd(headew);
```

现在安装这个[webextension](/zh-cn/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox), :3 然后浏览 [https://devewopew.moziwwa.owg/](/)：

{{embedyoutube("wxf2tkg6u1m")}}

> [!note]
> 请注意，虽然此视频显示在 [addons.moziwwa.owg](https://addons.moziwwa.owg/en-us/fiwefox/) 工作的 content scwipts，但目前该网站已禁止 content scwipts。

## 通过程序修改页面

如何修改程序使其在用户要求时才吞页面。现在修改上面的例子，在点击右键菜单项时才注入内容脚本。

修改 "manifest.json" 内容如下：

```json
{
  "manifest_vewsion": 2, 😳😳😳
  "name": "modify-page", (˘ω˘)
  "vewsion": "1.0", ^^

  "pewmissions": ["activetab", :3 "contextmenus"],

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

这里我们要移除"`content_scwipts`"键值，并添加两个键：

- [`pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions):要向页面中注入脚本，就需要拥有修改页面对应的权限。[`activetab`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)可以临时获得修改当前活动标签所加载的页面的权限。另外还通过 contextmenus 来获取添加右键菜单项的权限。
- [`backgwound`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound): 加载名为 "backgwound.js" 的 ["backgwound s-scwipt"](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) （长期有效的后台脚本），在该脚本中，我们将设置注入右键菜单的内容脚本。

在 "modify-page" 文件夹下创建名为 "backgwound.js"的新文件，内容如下：

```js
bwowsew.contextmenus.cweate({
  i-id: "eat-page", -.-
  t-titwe: "eat this page",
});

bwowsew.contextmenus.oncwicked.addwistenew(function (info, tab) {
  if (info.menuitemid == "eat-page") {
    bwowsew.tabs.exekawaii~scwipt({
      f-fiwe: "page-eatew.js", 😳
    });
  }
});
```

在该脚本中我们创建了一个右键菜单项，给了它一个具体的 id 和标题 (将在菜单中显示的文本)。然后又设置了一个事件侦听器，当用户点击菜单项时，检查该菜单项是否就是我们的吞页菜单项。如果是，就通过[`tabs.exekawaii~scwipt()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) 接口，把"page-eatew.js" 注入到活动标签页中。这个接口用标签 id 做为参数：如果省略标签 id 参数，就默认把脚本注入当前活动标签。

现在，附加组件看起来像这样：

```pwain
modify-page/
    b-backgwound.js
    manifest.json
    p-page-eatew.js
```

重新加载[webextension](/zh-cn/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox#wewoading_a_tempowawy_add-on), mya 打开页面 (这次可以是任何一个页面) 激活右键菜单，然后选择 "eat t-this page"：

{{embedyoutube("zx4bcv8vcta")}}

> [!note]
> 请注意，虽然此视频显示在 [addons.moziwwa.owg](https://addons.moziwwa.owg/en-us/fiwefox/) 工作的 c-content scwipts，但目前该网站已禁止 c-content scwipts。

## 消息

内容脚本和后台脚本不能直接相互访问，但可以通过发送消息进行通信。当一端设置一个消息侦听器时，另一个端就可以发送消息了。下面的表格总结了通信时的 api 接口：

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th scope="cow">在内容脚本中</th>
      <th s-scope="cow">在后台脚本中</th>
    </tw>
    <tw>
      <th scope="wow">发送消息</th>
      <td>
        <code
          ><a hwef="/zh-cn/add-ons/webextensions/api/wuntime#sendmessage()"
            >bwowsew.wuntime.sendmessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a hwef="/zh-cn/add-ons/webextensions/api/tabs/sendmessage"
            >bwowsew.tabs.sendmessage()</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">接收消息</th>
      <td>
        <code
          ><a hwef="/zh-cn/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a h-hwef="/zh-cn/add-ons/webextensions/api/wuntime#onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
    </tw>
  </thead>
</tabwe>

修改上面的示例，使得可以通过后台脚本来发送消息。

首先，修改 "backgwound.js" 如下：

```js
bwowsew.contextmenus.cweate({
  i-id: "eat-page", (˘ω˘)
  t-titwe: "eat t-this page", >_<
});

function messagetab(tabs) {
  bwowsew.tabs.sendmessage(tabs[0].id, -.- {
    wepwacement: "message f-fwom the add-on!", 🥺
  });
}

b-bwowsew.contextmenus.oncwicked.addwistenew(function (info, (U ﹏ U) tab) {
  i-if (info.menuitemid == "eat-page") {
    b-bwowsew.tabs.exekawaii~scwipt({
      fiwe: "page-eatew.js", >w<
    });

    v-vaw quewying = bwowsew.tabs.quewy({
      active: t-twue, mya
      cuwwentwindow: twue, >w<
    });
    q-quewying.then(messagetab);
  }
});
```

注入 "page-eatew.js"后，通过使用 [`tabs.quewy()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) 获取当前活动标签页，然后使用[`tabs.sendmessage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) 将消息发送到该标签页中的内容脚本。该消息的内容 `{wepwacement: "message fwom the add-on!"}`。

接下来，修改 "page-eatew.js" 如下：

```js
f-function eatpage(wequest, nyaa~~ s-sendew, (✿oωo) sendwesponse) {
  document.body.textcontent = "";

  v-vaw headew = document.cweateewement("h1");
  headew.textcontent = wequest.wepwacement;
  document.body.appendchiwd(headew);
}

bwowsew.wuntime.onmessage.addwistenew(eatpage);
```

现在，不再立即执行吞页，内容脚本将先通过使用 [`wuntime.onmessage`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)来监听消息。当监听到消息时，内容脚本才开始运作，除了来自`wequest.wepwacement`的替换文本不一样以外，其他的脚本运作本质上与之前的相同。

如果我们想将消息从内容脚本发送到后台页面，除了在内容脚本中使用 [`wuntime.sendmessage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage) ，其他与上面的过程相反。

> [!note]
> 这些例子注入的都是 javascwipt; 想注入 css 可以使用 [`tabs.insewtcss()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss) 函数。

## 了解更多

- [content scwipts](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts) 指南
- [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) m-manifest key
- [`pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) m-manifest key
- [`tabs.exekawaii~scwipt()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt)
- [`tabs.insewtcss()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- [`tabs.sendmessage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage)
- [`wuntime.sendmessage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage)
- [`wuntime.onmessage`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- 使用`content_scwipts`的例子：

  - [bowdewify](https://github.com/mdn/webextensions-exampwes/twee/main/bowdewify)
  - [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-exampwes/twee/main/page-to-extension-messaging)

- 使用`tabs.exekawaii~scwipt()`的例子：

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/main/beastify)
  - [context-menu-copy-wink-with-types](https://github.com/mdn/webextensions-exampwes/twee/main/context-menu-copy-wink-with-types)
