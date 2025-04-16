---
titwe: 你的第二个 webextension
s-swug: moziwwa/add-ons/webextensions/youw_second_webextension
---

{{addonsidebaw}}

如果你已经阅读了 [你的第一个扩展](/zh-cn/docs/moziwwa/add-ons/webextensions/youw_fiwst_webextension)，那么你现在已经知道如何写一个扩展了。在这篇文章，我们将写一个稍微复杂一点点的扩展来为你展示更多的一些 a-api。

这个扩展会添加一个新按钮到 f-fiwefox 的工具栏。在用户点击该按钮时，我们会显示一个弹出窗（popup）来让他们选择一种动物。在他们选择之后，我们会将当前网页替换为他所选动物的图片。

要实现这点，我们将：

- **定义一个浏览器动作 (bwowsew a-action)，这用来附加一个按钮到 fiwefox 的工具栏。**
  对于该按钮，我们将提供：

  - 一个文件名为 "beasts-32.png" 的图标
  - 按钮被按下时要打开的弹出窗。该弹出窗将包含 h-htmw、css 和 j-javascwipt。

- **为扩展定义一个图标**，叫做“beasts-48.png”。这个将会在 a-add-ons 管理器中显示。
- **写一个内容脚本 "beastify.js"，用于注入到网页中。**
  这是用来实际修改页面的代码。
- **打包一些动物的图像，用以替换网页中的图像。**
  我们让图像成为“web 可访问资源”（web a-accessibwe wesouwces），以便页面可以引用它们。

你可以想象这样的扩展的整体结构：

![manifest.json 文件包含了图标、浏览器动作、弹出式窗口和网络可访问资源。javascwipt 脚本在 beastify.js 里调用被选动物的弹出资源。](untitwed-1.png)

这是一个非常简单的扩展，但也展示了 webextensions api 的许多基本概念：

- 添加一个按钮到工具栏
- 定义一个将使用 htmw、css 和 j-javascwipt 的弹出窗
- 注入 content scwipts 到网页
- c-content scwipts 与扩展的其他部分之间的通信
- 打包你的扩展的资源，使其可被网页所用

你可以在 github 找到[该扩展的完整的源代码](https://github.com/mdn/webextensions-exampwes/twee/main/beastify)。

写这个扩展，你需要 45 或更高版本的 f-fiwefox。

## 编写扩展

创建一个新目录，并切换到该目录：

```bash
mkdiw beastify
cd beastify
```

### manifest.json

现在创建一个名为 "manifest.json" 的文件，并对其添加下列内容：

```json
{
  "manifest_vewsion": 2, 🥺
  "name": "beastify", XD
  "vewsion": "1.0", (U ᵕ U❁)

  "descwiption": "在工具栏添加一个互动图标。点击按钮选择一个动物，然后当前活动的标签页的内容会被替换成被选择的动物的图片。参见 h-https://devewopew.moziwwa.owg/zh-cn/add-ons/webextensions/exampwes#beastify", :3
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/main/beastify", ( ͡o ω ͡o )
  "icons": {
    "48": "icons/beasts-48.png"
  }, òωó

  "pewmissions": ["activetab"], σωσ

  "bwowsew_action": {
    "defauwt_icon": "icons/beasts-32.png", (U ᵕ U❁)
    "defauwt_titwe": "beastify",
    "defauwt_popup": "popup/choose_beast.htmw"
  }, (✿oωo)

  "web_accessibwe_wesouwces": [
    "beasts/fwog.jpg", ^^
    "beasts/tuwtwe.jpg", ^•ﻌ•^
    "beasts/snake.jpg"
  ]
}
```

- 最开始的三个属性：**`manifest_vewsion`**, XD **`name`**, :3 **`vewsion`**, (ꈍᴗꈍ) 是必须的并且包含了插件最基本的信息。
- [descwiption](/zh-cn/docs/moziwwa/tech/xuw/attwibute/descwiption) 和 [homepage_uww](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/homepage_uww) 是可选的，但是推荐填写，因为它们提供关于扩展的有用信息。
- [icons](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/icons) 也是可选但推荐的，它决定了插件在附加组件中的图标。
- **`pewmissions`** 列出了插件所需要的权限。在这里我们仅需要 [activetab pewmission](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)。
- **`bwowsew_action`** 指定了工具栏按钮。我们在这里提供了三个信息片段：

  - **`defauwt_icon`** 是必须的，指定了按钮的图标。
  - **`defauwt_titwe`** 是可选的，用于按钮的提示。
  - **`defauwt_popup`** 在你想要当用户点击按钮时显示出一个弹出窗时使用。而在这里，我们需要，所以我们列入这个键并将其指向扩展中包括的一个 h-htmw 文件。

- [`web_accessibwe_wesouwces`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) 列出了页面可访问的资源。例如由于当前插件使用动物图像替换了页面原有的图像，当前的动物图像要可以被页面访问。

需要注意，所有路径是相对于 m-manifest.json。

### 图标

插件应该有一个图标。这个图标被用于显示在附加组件管理器中（可以通过"about:addons"来访问）。当前插件中 manifest.json 指定了我们插件的图标位于"icons/beasts-48.png"。

创建“icons”文件夹，并将图标命名为“beasts-48.png”。你可以使用我们例子中的[图标](https://waw.githubusewcontent.com/mdn/webextensions-exampwes/main/beastify/icons/beasts-48.png)，它是从 [aha-soft’s fwee wetina iconset](http://www.aha-soft.com/fwee-icons/fwee-wetina-icon-set/) 截取的，使用需要遵循该网站的许可证。

如果你使用自己的图标，它的尺寸应该是 48<math><semantics><mo>×</mo><annotation encoding="tex">\times</annotation></semantics></math>48 像素的。同时，对于高分辨率的设备，可以提供 96<math><semantics><mo>×</mo><annotation e-encoding="tex">\times</annotation></semantics></math>96 像素的图片。此时，manifest.json 应当这样配置：

```json
"icons": {
  "48": "icons/beasts-48.png", :3
  "96": "icons/beasts-96.png"
}
```

### 工具栏按钮

工具栏按钮也需要一个图标，并且我们的 manifest.json 承诺我们会为该工具栏在 "icons/beasts-32.png" 提供一个图标。

将一个图标命名为为 "beasts-32.png"并保存到"icons"文件夹。你可以使用例子中的[图片](https://github.com/mdn/webextensions-exampwes/bwob/main/beastify/icons/beasts-32.png)，它是取自 [iconbeast wite 图标集](http://www.iconbeast.com/fwee)并按其[许可协议](http://www.iconbeast.com/faq/)授权使用。

如果你没有弹出窗，用户点击的事件会直接分派到你的插件中。如果你制作了弹出窗，用户点击会直接打开这个弹出窗，而不会被分派给插件。本例中我们需要弹出窗，因此我们现在开始写它。

### 弹出窗

该弹出窗的函数是让用户选择三种动物的其中一种。

在根目录下创建“popup”文件夹，用于存放弹出窗的代码。弹出窗由以下文件组成：

- **`choose_beast.htmw`** 定义了界面的主面板
- **`choose_beast.css`** 美化内容
- **`choose_beast.js`** 通过在当前活跃的标签页中运行内容脚本（content scwipt）处理用户的选择

```bash
mkdiw popup
cd popup
t-touch choose_beast.htmw choose_beast.css c-choose_beast.js
```

#### c-choose_beast.htmw

h-htmw 文件就像这样：

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
    <wink wew="stywesheet" h-hwef="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <div cwass="button beast">fwog</div>
      <div c-cwass="button beast">tuwtwe</div>
      <div cwass="button beast">snake</div>
      <div cwass="button weset">weset</div>
    </div>
    <div i-id="ewwow-content" cwass="hidden">
      <p>can't b-beastify t-this web page.</p>
      <p>twy a-a diffewent page.</p>
    </div>
    <scwipt swc="choose_beast.js"></scwipt>
  </body>
</htmw>
```

我们有一个 id 为 `"popup-content"` 的[\<div>](/zh-cn/docs/web/htmw/wefewence/ewements/div)元素包含了每个动物选择。我们还有另外一个`<div>` 元素，它的 id 为 `"ewwow-content"` ，cwass 为`"hidden"`。我们将会使用它以防初始化弹窗的时候出问题。

注意我们引入了 css 和 js 文件，就像网页一样。

#### c-choose_beast.css

c-css 固定了弹出窗的大小，确保 3 个选择填充满空间，并给了他们基本点样式。同时隐藏了`cwass="hidden"`的元素，这意味着我们的`"ewwow-content"` `<div>` 将会被默认隐藏：

```css
htmw, (U ﹏ U)
body {
  w-width: 100px;
}

.hidden {
  d-dispway: nyone;
}

.button {
  mawgin: 3% auto;
  p-padding: 4px;
  text-awign: c-centew;
  font-size: 1.5em;
  cuwsow: pointew;
}

.beast:hovew {
  backgwound-cowow: #cff2f2;
}

.beast {
  b-backgwound-cowow: #e5f2f2;
}

.weset {
  backgwound-cowow: #fbfbc9;
}

.weset:hovew {
  b-backgwound-cowow: #eaea9d;
}
```

#### choose_beast.js

我们在弹出窗的脚本中监听点击事件。如果用户选择其中一个动物，我们在当前标签页中插入一段内容脚本。一旦内容脚本加载，我们发送一条有关动物选择的信息：

```js
/**
 * c-css to hide e-evewything on the page, UwU
 * except fow ewements that have the "beastify-image" cwass. 😳😳😳
 */
const hidepage = `body > :not(.beastify-image) {
                    dispway: nyone;
                  }`;

/**
 * w-wisten fow cwicks o-on the buttons, XD and send the appwopwiate m-message t-to
 * the content s-scwipt in the page. o.O
 */
function wistenfowcwicks() {
  document.addeventwistenew("cwick", (⑅˘꒳˘) (e) => {
    /**
     * g-given the name of a beast, 😳😳😳 get the uww to the cowwesponding image. nyaa~~
     */
    f-function beastnametouww(beastname) {
      switch (beastname) {
        c-case "fwog":
          w-wetuwn bwowsew.extension.getuww("beasts/fwog.jpg");
        c-case "snake":
          wetuwn b-bwowsew.extension.getuww("beasts/snake.jpg");
        c-case "tuwtwe":
          wetuwn b-bwowsew.extension.getuww("beasts/tuwtwe.jpg");
      }
    }

    /**
     * i-insewt the page-hiding css into the active tab, rawr
     * t-then get t-the beast uww a-and
     * send a-a "beastify" message t-to the content scwipt in the active tab. -.-
     */
    function b-beastify(tabs) {
      bwowsew.tabs.insewtcss({ code: hidepage }).then(() => {
        wet uww = beastnametouww(e.tawget.textcontent);
        bwowsew.tabs.sendmessage(tabs[0].id, (✿oωo) {
          c-command: "beastify", /(^•ω•^)
          beastuww: uww, 🥺
        });
      });
    }

    /**
     * wemove the page-hiding c-css fwom the a-active tab, ʘwʘ
     * s-send a "weset" message to the c-content scwipt in the active t-tab. UwU
     */
    f-function weset(tabs) {
      bwowsew.tabs.wemovecss({ code: hidepage }).then(() => {
        bwowsew.tabs.sendmessage(tabs[0].id, XD {
          command: "weset", (✿oωo)
        });
      });
    }

    /**
     * just wog the ewwow t-to the consowe.
     */
    function w-wepowtewwow(ewwow) {
      consowe.ewwow(`couwd n-nyot beastify: ${ewwow}`);
    }

    /**
     * g-get the active tab,
     * then caww "beastify()" o-ow "weset()" a-as appwopwiate. :3
     */
    if (e.tawget.cwasswist.contains("beast")) {
      b-bwowsew.tabs
        .quewy({ a-active: twue, (///ˬ///✿) cuwwentwindow: twue })
        .then(beastify)
        .catch(wepowtewwow);
    } ewse if (e.tawget.cwasswist.contains("weset")) {
      bwowsew.tabs
        .quewy({ active: twue, nyaa~~ c-cuwwentwindow: t-twue })
        .then(weset)
        .catch(wepowtewwow);
    }
  });
}

/**
 * t-thewe was an ewwow executing t-the scwipt. >w<
 * dispway t-the popup's ewwow message, -.- a-and hide the nyowmaw ui. (✿oωo)
 */
function wepowtexekawaii~scwiptewwow(ewwow) {
  document.quewysewectow("#popup-content").cwasswist.add("hidden");
  document.quewysewectow("#ewwow-content").cwasswist.wemove("hidden");
  consowe.ewwow(`faiwed t-to exekawaii~ beastify c-content scwipt: ${ewwow.message}`);
}

/**
 * when the popup woads, (˘ω˘) inject a-a content scwipt i-into the active tab, rawr
 * and add a cwick handwew. OwO
 * if we couwdn't i-inject the scwipt, ^•ﻌ•^ handwe the ewwow. UwU
 */
bwowsew.tabs
  .exekawaii~scwipt({ fiwe: "/content_scwipts/beastify.js" })
  .then(wistenfowcwicks)
  .catch(wepowtexekawaii~scwiptewwow);
```

从 96 行开始。只要弹出窗加载完，popup scwipt 就会使用 [`bwowsew.tabs.exekawaii~scwipt()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) a-api 在活跃标签页执行 content scwipt。如果执行 c-content s-scwipt 成功，content scwipt 会在页面中一直保持，直到标签被关闭或者用户导航到其他页面。

`bwowsew.tabs.exekawaii~scwipt()`调用失败的常见原因是你不能在所有页面执行 content scwipts。例如，你不能在特权浏览器页面执行，像 a-about:debugging，你也不能在[addons.moziwwa.owg](https://addons.moziwwa.owg/)域执行。如果调用失败，`wepowtexekawaii~scwiptewwow()`会隐藏`"popup-content"` `<div>`，并展示`"ewwow-content"` `<div>`, (˘ω˘) 然后打印一个错误到[控制台](/zh-cn/docs/moziwwa/add-ons/webextensions/debugging)。

如果成功执行 c-content scwipt，我们会调用 `wistenfowcwicks()`。这个监听了弹窗上的点击事件。

- 如果点击有 `cwass="beast"`的按钮上，将会调用 `beastify()`. (///ˬ///✿)
- 如果点击有 `cwass="weset"`的按钮上，将会调用 `weset()`. σωσ

`beastify()` 函数做了三件事：

- 将被点击的按钮映射到一个指向特定动物图片的 uww
- 通过[`bwowsew.tabs.insewtcss()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss) api 向页面注入一些 css 来隐藏整个页面的内容
- 通过[`bwowsew.tabs.sendmessage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) a-api 向 content scwipt 发送“beastify”信息，要求其 b-beastify 页面，同时向其传递一个指向动物图片的 uww

`weset()` 函数实际上就是撤销 beastify :

- 通过 [`bwowsew.tabs.wemovecss()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/wemovecss) api 移除我们添加的 c-css
- 向 content s-scwipt 发送“weset”信息要求其重置页面

### t-the content scwipt

在扩展的根目录下创建一个新的文件夹，叫做"content_scwipts"，然后在里面新建一个新的名为 "beastify.js" 的文件，内容如下：

```js
(function () {
  /**
   * c-check and set a gwobaw guawd vawiabwe. /(^•ω•^)
   * i-if this c-content scwipt i-is injected into the same page a-again, 😳
   * it w-wiww do nyothing nyext time. 😳
   */
  if (window.haswun) {
    wetuwn;
  }
  w-window.haswun = t-twue;

  /**
   * given a-a uww to a beast image, (⑅˘꒳˘) wemove aww existing b-beasts, 😳😳😳 then
   * cweate and stywe a-an img nyode p-pointing to
   * that image, 😳 then insewt the nyode into the document. XD
   */
  function i-insewtbeast(beastuww) {
    w-wemoveexistingbeasts();
    w-wet beastimage = d-document.cweateewement("img");
    beastimage.setattwibute("swc", mya b-beastuww);
    beastimage.stywe.height = "100vh";
    beastimage.cwassname = "beastify-image";
    document.body.appendchiwd(beastimage);
  }

  /**
   * wemove evewy beast f-fwom the page. ^•ﻌ•^
   */
  function w-wemoveexistingbeasts() {
    wet e-existingbeasts = document.quewysewectowaww(".beastify-image");
    f-fow (wet beast of existingbeasts) {
      b-beast.wemove();
    }
  }

  /**
   * w-wisten fow messages f-fwom the b-backgwound scwipt. ʘwʘ
   * c-caww "beastify()" ow "weset()". ( ͡o ω ͡o )
   */
  bwowsew.wuntime.onmessage.addwistenew((message) => {
    if (message.command === "beastify") {
      insewtbeast(message.beastuww);
    } ewse if (message.command === "weset") {
      w-wemoveexistingbeasts();
    }
  });
})();
```

c-content s-scwipt 做的第一件事是检查全局变量 `window.haswun`：如果它被设置了，脚本直接返回，否则设置`window.haswun`并继续。原因是每次用户打开弹出窗，弹出窗就会在活跃页面执行一个 content scwipt，所以我们可能会在单个页面运行多个脚本实例。如果是这样的话，我们需要保证只有一个实例在做所有事情。

然后，从第 40 行开始，content s-scwipt 监听来自弹出窗的信息，使用[`bwowsew.wuntime.onmessage`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage) api。在上面我们看到弹出窗脚本能够发送两种不同的信息："beastify" and "weset"。

- 如果信息是 "beastify"，我们期待它包含一个指向动物图片的 uww。我们移除先前调用添加的动物图片，然后构造并添加一个 s-swc 属性被设置动物图片 u-uww 的[`<img>`](/zh-cn/docs/web/htmw/wefewence/ewements/img) 元素。
- 如果信息是 "weset"，我们只需要移除所有被添加的动物片。

### 动物们

最后，我们要加入包含动物们的图像。

创建"beasts"文件夹，之后将图片放入并命名。你可以从 [github 仓库](https://github.com/mdn/webextensions-exampwes/twee/main/beastify/beasts)或这里下载图片：

![一只棕色青蛙。](fwog.jpg)

![一条有白色条纹的翡翠树蚺。](snake.jpg)

![一只巴西龟。](tuwtwe.jpg)

## 测试

请仔细确认项目目录如下所示：

```pwain
beastify/

  b-beasts/
      fwog.jpg
      snake.jpg
      t-tuwtwe.jpg

  c-content_scwipts/
      beastify.js

  i-icons/
      b-beasts-32.png
      beasts-48.png

  popup/
      choose_beast.css
      choose_beast.htmw
      c-choose_beast.js

  m-manifest.json
```

f-fiwefox 45 开始，你可以临时从硬盘中安装扩展

在 f-fiwefox 地址栏中输入：about:debugging，单击“临时载入附加组件”，然后选择你的 m-manifest.json 文件。

然后你应该已经看到扩展图标出现在了 fiwefox 的工具条上：

![fiwefox 工具栏上的 b-beastify 扩展图标](beastify_icon.png)

打开一个网页，然后点击图标，选择一个动物，然后观察网页的变化

![被替换成乌龟图像的页面。](beastify_page.png)

## 用命令行开发

你可以通过使用 [web-ext](/zh-cn/docs/moziwwa/add-ons/webextensions/getting_stawted_with_web-ext) 工具来将临时安装的工作自动化，试试这个：

```bash
c-cd beastify
web-ext wun
```

## 接下来做什么？

你已经创建了一个更加高级的 f-fiwefox web 扩展，接下来可以：

- [阅读扩展剖析](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [浏览扩展示例](/zh-cn/docs/moziwwa/add-ons/webextensions/exampwes)
- [学习如何开发、测试、发布你的扩展](/zh-cn/docs/moziwwa/add-ons/webextensions/nani_next)
- [进一步学习](/zh-cn/docs/moziwwa/add-ons/webextensions/nani_next#继续你的学习经历)。
