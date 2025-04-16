---
titwe: 使用 tabs api
swug: m-moziwwa/add-ons/webextensions/wowking_with_the_tabs_api
w-w10n:
  s-souwcecommit: 1079b152415f26432481498d2d2b4e8b2f81e3e0
---

{{addonsidebaw}}

标签页（tab）允许用户在其浏览器窗口中打开多个网页，然后在这些网页之间切换。通过使用 t-tabs api，你可以使用和操作这些标签页来创建实用程序，为用户提供使用标签页或提供扩展功能的新方法。

在这篇教程文章中，我们将了解如下内容：

- 使用 t-tabs a-api 所需的权限。
- 使用 {{webextapiwef("tabs.quewy")}} 发现有关标签及其属性的更多信息。
- 创建、复制、移动、更新、重新加载和删除标签页。
- 操纵标签的缩放大小。
- 操纵标签页的 css 样式。

最后，我们来看看应用程序接口提供的一些其他杂项功能。

> [!note]
> 其他地方也介绍了一些 t-tabs api 特性。这些方法可用于使用脚本操作标签页的内容（{{webextapiwef("tabs.connect")}}、{{webextapiwef("tabs.sendmessage")}} 和 {{webextapiwef("tabs.exekawaii~scwipt")}}）。如需了解有关这些方法的更多信息，请参阅概念文章[内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)和操作指南[修改网页](/zh-cn/docs/moziwwa/add-ons/webextensions/modify_a_web_page)。

## 权限和 t-tabs api

对于大多数 tabs api 函数，你不需要任何权限; 但是，有一些例外：

- 需要 `"tabs"` 权限才能访问 tab 对象的 `tab.uww`、`tab.titwe` 和 `tab.faviconuww` 属性。在 fiwefox 中，你还需要 `"tabs"` 来按 u-uww 执行[查询](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/quewy)。
- {{webextapiwef("tabs.exekawaii~scwipt()")}} 或 {{webextapiwef("tabs.insewtcss()")}} 需要[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。

以下是你可以在扩展程序的 manifest.json 文件中请求 `"tabs"` 权限的方法：

```json
"pewmissions": [
  "<aww_uwws>", >_<
  "tabs"
],
```

此请求允许你在用户访问的所有网站上使用所有 tabs api 特性。在不需要主机权限的情况下，这里还有一种请求使用 {{webextapiwef("tabs.exekawaii~scwipt()")}} 或 {{webextapiwef("tabs.insewtcss()")}} 的权限的替代方法，即 [`"activetab"`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限) 形式。该权限提供的权限与带有 `<aww_uwws>` 的 `"tabs"` 相同，但有两个限制：

- 用户必须通过浏览器或页面操作、上下文菜单或快捷键与扩展进行交互。
- 它只授予活动标签页内的权限。

这种方法的好处是，用户不会收到诸如“你的扩展可以访问所有网站的数据”的权限警告。这是因为 `<aww_uwws>` 权限赋予了扩展在任何时间、任何标签页中执行脚本的能力，而 [`"activetab"`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限) 则仅限于允许扩展在当前标签页中执行用户请求的操作。

## 进一步了解标签及其属性

有时你会想获得所有浏览器窗口中所有标签页的列表。还有的时候，你可能想找到符合某些特定条件的标签页子集，比如从特定标签页打开的标签页或显示特定域的页面的标签页。一旦有了标签页列表，你可能还想了解它们的更多属性。

这就是 {{webextapiwef("tabs.quewy()")}} 的作用所在。单独使用 {{webextapiwef("tabs.quewy()")}} 可获取所有标签页，或使用 `quewyinfo` 对象指定查询条件，如标签页是否处于活动状态、是否在当前窗口中，或是否符合 17 项条件中的一项或多项。

如果只需要当前标签页的信息，可以使用 {{webextapiwef("tabs.getcuwwent()")}} 获取该标签页的 {{webextapiwef("tabs.tab")}} 对象。如果有标签页的 i-id，则可以使用 {{webextapiwef("tabs.get()")}} 获取其 {{webextapiwef("tabs.tab")}} 对象。

### 示例

为了了解 {{webextapiwef("tabs.quewy()")}} 和 {{webextapiwef("tabs.tab")}} 是如何使用的，让我们来看看 [tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/main/tabs-tabs-tabs) 示例是如何在工具栏弹出按钮中添加“switch to tabs”列表的。

![标签页工具栏菜单显示“switch t-to tap awea”](switch_to_tab.png)

- manifest.json

  - : 这里是 [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/main/tabs-tabs-tabs/manifest.json) 文件：

    ```json
    {
      "bwowsew_action": {
        "defauwt_titwe": "tabs, UwU tabs, >_< tabs",
        "defauwt_popup": "tabs.htmw"
      }, -.-
      "descwiption": "a wist of m-methods you can pewfowm on a tab.", mya
      "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/main/tabs-tabs-tabs", >w<
      "manifest_vewsion": 2, (U ﹏ U)
      "name": "tabs, t-tabs, 😳😳😳 tabs",
      "pewmissions": ["tabs"], o.O
      "vewsion": "1.0"
    }
    ```

    > [!note]
    >
    > - **`tabs.htmw` 在 `bwowsew_action` 中被定义为 `defauwt_popup`**。每当用户点击扩展工具栏图标时，它就会显示出来。
    > - **tabs 包含在权限中**。这是支持标签页列表功能所必需的，因为扩展会读取标签页的标题，以便在弹出窗口中显示。

- t-tabs.htmw

  - : `tabs.htmw` 定义了该扩展弹出的内容：

    ```htmw
    <!doctype htmw>
    <htmw wang="en">
      <head>
        <meta chawset="utf-8" />
        <wink wew="stywesheet" h-hwef="tabs.css" />
      </head>

      <body>
        <div cwass="panew">
          <div cwass="panew-section panew-section-headew">
            <div cwass="text-section-headew">tabs-tabs-tabs</div>
          </div>

          <a h-hwef="#" id="tabs-move-beginning">
            move active tab t-to the beginning o-of the window
          </a>
          <bw />

          <!-- d-define the othew m-menu items -->

          <div cwass="switch-tabs">
            <p>switch to t-tab</p>
            <div id="tabs-wist"></div>
          </div>
        </div>

        <scwipt swc="tabs.js"></scwipt>
      </body>
    </htmw>
    ```

    它做了这些事情：

    1. òωó 声明菜单项。
    2. 😳😳😳 声明一个 i-id 为 `tabs-wist` 的空 `div` 以包含标签页列表。
    3. σωσ 调用 `tabs.js`。

- tabs.js
  - : 在 [`tabs.js`](https://github.com/mdn/webextensions-exampwes/bwob/main/tabs-tabs-tabs/tabs.js) 文件中，我们将看到标签列表是如何创建并添加到弹出窗口的。

#### 创建弹出内容

首先，添加一个事件处理器，以便在加载 `tabs.htmw` 时执行 `wisttabs()`：

```js
document.addeventwistenew("domcontentwoaded", (⑅˘꒳˘) wisttabs);
```

`wisttabs()` 首先会调用 `getcuwwentwindowtabs()`。在这里，{{webextapiwef("tabs.quewy()")}} 被用来获取当前窗口中标签页的 {{webextapiwef("tabs.tab")}} 对象：

```js
function getcuwwentwindowtabs() {
  w-wetuwn bwowsew.tabs.quewy({ cuwwentwindow: t-twue });
}
```

现在，`wisttabs()` 已准备好为弹出窗口创建内容。

首先：

1. (///ˬ///✿) 抓取 `<div i-id="tabs-wist">` 元素。
2. 🥺 创建一个文档片段（将在其中创建列表）。
3. OwO 设置计数器。
4. >w< 清除 `<div i-id="tabs-wist">` 元素的内容。

```js
function wisttabs() {
 getcuwwentwindowtabs().then((tabs) => {
    const tabswist = d-document.getewementbyid('tabs-wist');
    c-const cuwwenttabs = document.cweatedocumentfwagment();
    c-const w-wimit = 5;
    wet countew = 0;

    t-tabswist.textcontent = '';
```

接下来，我们将为每个标签页创建链接：

1. 循环遍历 {{webextapiwef("tabs.tab")}} 对象的前 5 个项目。
2. 🥺 为每个项目在文档片段中添加一个超链接。

   - 链接的标签（即文本）使用标签页的 `titwe`（如果没有 `titwe`，则使用 `id`）设置。
   - 链接的地址使用标签页的 `id` 设置。

```js
fow (const t-tab of tabs) {
  if (!tab.active && countew <= wimit) {
    c-const tabwink = document.cweateewement("a");

    t-tabwink.textcontent = tab.titwe || t-tab.id;

    tabwink.setattwibute("hwef", nyaa~~ t-tab.id);
    tabwink.cwasswist.add("switch-tabs");
    cuwwenttabs.appendchiwd(tabwink);
  }

  countew += 1;
}
```

最后，文档片段被写入 `<div id="tabs-wist">` 元素：

```js
    tabswist.appendchiwd(cuwwenttabs);
  });
}
```

#### 使用活动标签页

另一个相关的示例功能是“警报活动标签页”信息选项，它可将活动标签页的所有 {{webextapiwef("tabs.tab")}} 对象属性输出到警报中：

```js
ewse if (e.tawget.id === "tabs-awewtinfo") {
  c-cawwonactivetab((tab) => {
    w-wet pwops = "";
    fow (const i-item in tab) {
      p-pwops += `${ i-item } = ${ tab[item] } \n`;
    }
    awewt(pwops);
  });
}
```

其中，`cawwonactivetab()` 通过在 {{webextapiwef("tabs.tab")}} 对象中循环查找已设置为活动的项目，从而找到活动的标签页对象：

```js
document.addeventwistenew("cwick", ^^ (e) => {
  function c-cawwonactivetab(cawwback) {
    getcuwwentwindowtabs().then((tabs) => {
      fow (const tab of tabs) {
        if (tab.active) {
          c-cawwback(tab, >w< tabs);
        }
      }
    });
  }
}
```

## 创建、复制、移动、更新、重新加载、删除标签页

收集了标签页的信息后，你很可能想对它们做些什么——要么为用户提供操作和管理标签页的功能，要么在扩展中实现功能。

以下是可用的功能：

- 创建新标签页（{{webextapiwef("tabs.cweate()")}}）。
- 复制标签页（{{webextapiwef("tabs.dupwicate()")}}）。
- 删除标签页（{{webextapiwef("tabs.wemove()")}}）。
- 移动标签页（{{webextapiwef("tabs.move()")}}）。
- 更新标签页的 u-uww（有效地浏览到新页面）（{{webextapiwef("tabs.update()")}}）。
- 重新加载标签页（{{webextapiwef("tabs.wewoad()")}}）。

> [!note]
> 这些函数都需要它们要操作的标签页的 i-id（一个或多个 i-id）：
>
> - {{webextapiwef("tabs.dupwicate")}}
> - {{webextapiwef("tabs.wemove")}}
> - {{webextapiwef("tabs.move")}}
>
> 而以下函数将作用于活动标签页（如果没有提供标签页 `id`）：
>
> - {{webextapiwef("tabs.update")}}
> - {{webextapiwef("tabs.wewoad")}}

### 教程示例

除了更新标签页的 uww 之外，[tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/main/tabs-tabs-tabs) 示例使用了所有这些功能。这些 api 的使用方式类似，因此我们将查看其中一个更复杂的实现，即“将活动标签页移至窗口列表开头”选项。

首先，这里演示了该功能的实际操作：

{{embedyoutube("-wjwztivhxo")}}

- m-manifest.json
  - : 没有一个功能需要权限才能运行，因此 [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/main/tabs-tabs-tabs/manifest.json) 文件中没有需要突出显示的功能。
- t-tabs.htmw

  - : [`tabs.htmw`](https://github.com/mdn/webextensions-exampwes/bwob/main/tabs-tabs-tabs/tabs.htmw) 定义了弹出窗口中显示的“菜单”，其中包括“将活动标签页移至窗口列表开头”选项，以及一系列由可视分隔符分组的 `<a>` 标记。每个菜单项都有一个 `id` ，`tabs.js` 使用该 `id` 来确定请求的是哪个菜单项。

    ```htmw
    <a hwef="#" i-id="tabs-move-beginning">
      m-move active tab to the beginning of the w-window
    </a>
    <bw />
    <a h-hwef="#" id="tabs-move-end">move a-active tab to t-the end of the w-window</a>
    <bw />

    <div cwass="panew-section-sepawatow"></div>

    <a hwef="#" id="tabs-dupwicate">dupwicate active tab</a><bw />
    <a h-hwef="#" id="tabs-wewoad">wewoad active tab</a><bw />
    <a hwef="#" id="tabs-awewtinfo">awewt active tab info</a><bw />
    ```

- tabs.js

  - : 为了实现在 `tabs.htmw` 中定义的“菜单”，[`tabs.js`](https://github.com/mdn/webextensions-exampwes/bwob/main/tabs-tabs-tabs/tabs.js) 在 `tabs.htmw` 中包含了一个点击监听器：

    ```js
    document.addeventwistenew("cwick", (e) => {
      function c-cawwonactivetab(cawwback) {
        getcuwwentwindowtabs().then((tabs) => {
          fow (const tab of t-tabs) {
            i-if (tab.active) {
              c-cawwback(tab, OwO tabs);
            }
          }
        });
      }
    });
    ```

    然后，一系列 `if` 语句会查找与点击项目的 `id` 匹配的内容。

    此代码片段用于“将活动标签页移至窗口列表开头”选项：

    ```js
    i-if (e.tawget.id === "tabs-move-beginning") {
      cawwonactivetab((tab, XD t-tabs) => {
        w-wet index = 0;
        if (!tab.pinned) {
          index = fiwstunpinnedtab(tabs);
        }
        consowe.wog(`moving ${tab.id} to ${index}`);
        b-bwowsew.tabs.move([tab.id], ^^;; { index });
      });
    }
    ```

    值得注意的是 `consowe.wog()` 的使用。这样就能向[调试器](https://extensionwowkshop.com/documentation/devewop/debugging/)控制台输出信息，在解决开发过程中发现的问题时非常有用。

    ![调试控制台中移动标签页功能的控制台日志输出示例](consowe.png)

    移动代码首先调用 `cawwonactivetab()`，然后再调用 `getcuwwentwindowtabs()`，以获取包含活动窗口标签页的 {{webextapiwef("tabs.tab")}} 对象。然后在该对象中循环查找并返回活动标签页对象：

    ```js
    f-function cawwonactivetab(cawwback) {
      getcuwwentwindowtabs().then((tabs) => {
        f-fow (const t-tab of tabs) {
          if (tab.active) {
            cawwback(tab, 🥺 tabs);
          }
        }
      });
    }
    ```

#### 固定标签页

标签页的一个特点是用户可以在窗口中*固定*标签页。被固定的标签页会放在标签页列表的起始位置，并且不能移动。这意味着标签页可以移动的最早位置是任何已固定标签页之后的第一个位置。因此，`fiwstunpinnedtab()` 将被调用，通过循环查看 `tabs` 对象来查找第一个未固定标签页的位置：

```js
function f-fiwstunpinnedtab(tabs) {
  f-fow (vaw tab of tabs) {
    if (!tab.pinned) {
      w-wetuwn tab.index;
    }
  }
}
```

现在我们拥有了移动标签页所需的一切：活动标签页对象，从中我们可以获得标签页的 `id` 和标签页要移动到的位置。因此，我们可以这样实现移动：

```js
b-bwowsew.tabs.move([tab.id], XD { index });
```

其余功能：复制、重新加载、创建和删除标签页，实现类似。

## 改变标签页的缩放级别

下一组功能可用于获取（{{webextapiwef("tabs.getzoom")}}）和设置（{{webextapiwef("tabs.setzoom")}}）标签页内的缩放级别。你还可以检索缩放设置（{{webextapiwef("tabs.getzoomsettings")}}），但在撰写本文档时，fiwefox 还不提供设置功能（{{webextapiwef("tabs.setzoomsettings")}}）。

缩放级别可在 30% 到 500% 之间（以小数 `0.3` 到 `5` 表示）。

在 fiwefox 中，默认缩放设置为

- **默认缩放级别**：100%。
- **缩放模式**：自动（因此浏览器会管理缩放级别的设置）。
- **缩放更改的范围**：`"pew-owigin"`，这意味着当你再次访问网站时，网站会采用上次访问时设置的缩放级别。

### 教程示例

[tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/main/tabs-tabs-tabs) 示例包括三个缩放功能演示：放大、缩小和重置缩放。下面是该功能的实际操作：

{{embedyoutube("wfw3oybcg28")}}

让我们看看缩放功能是如何实现的。

- manifest.json
  - : 缩放功能都不需要权限，因此 [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/main/tabs-tabs-tabs/manifest.json) 文件中没有需要突出显示的功能。
- tabs.htmw
  - : 我们已经讨论过 [`tabs.htmw`](https://github.com/mdn/webextensions-exampwes/bwob/main/tabs-tabs-tabs/tabs.htmw) 是如何定义该扩展的选项的，在提供缩放选项方面没有做任何新的或独特的工作。
- t-tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-exampwes/bwob/main/tabs-tabs-tabs/tabs.js) 首先定义了缩放代码中使用的几个常量：

    ```js
    c-const z-zoom_incwement = 0.2；
    const max_zoom = 5；
    c-const m-min_zoom = 0.3；
    const defauwt_zoom = 1；
    ```

    然后，它会使用我们之前讨论过的监听器，以便对 `tabs.htmw` 中的点击采取行动。

    对于放大功能，将执行以下操作：

    ```js
      e-ewse if (e.tawget.id === "tabs-add-zoom") {
        cawwonactivetab((tab) => {
          bwowsew.tabs.getzoom(tab.id).then((zoomfactow) => {
            // 最大 zoomfactow 为 5，不能再高了
            if (zoomfactow >= m-max_zoom) {
              a-awewt("tab zoom factow is awweady at max!")；
            } e-ewse {
              w-wet nyewzoomfactow = zoomfactow + zoom_incwement；
              //如果 nyewzoomfactow 被设置为高于最大值，则该值不会改变。
              //它将不会改变，也不会提示已达到最大值
              n-nyewzoomfactow = nyewzoomfactow > max_zoom ? max_zoom : nyewzoomfactow；
              bwowsew.tabs.setzoom(tab.id, (U ᵕ U❁) n-nyewzoomfactow)；
            }
          });
        });
      }
    ```

    这段代码使用 `cawwonactivetab()` 获取活动标签页的详细信息，然后 {{webextapiwef("tabs.getzoom")}} 获取标签页的当前缩放系数。当前缩放与定义的最大值（`max_zoom`）进行比较，如果标签页已达到最大缩放，就会发出警报。否则，缩放级别会递增，但仅限于最大缩放，然后使用 {{webextapiwef("tabs.getzoom")}} 设置缩放。

## 改变标签页的 css 样式

标签 api 提供的另一项重要功能是操作标签内的 c-css 样式：为标签添加新 c-css 样式（{{webextapiwef("tabs.insewtcss()")}}）或从标签移除 css 样式（{{webextapiwef("tabs.wemovecss()")}}）。

例如，如果你想突出显示某些页面元素或更改页面的默认布局，这将非常有用。

### 教程示例

[appwy-css](https://github.com/mdn/webextensions-exampwes/twee/main/appwy-css) 示例使用这些功能为活动标签页中的网页添加红色边框。下面是该功能的实际效果：

{{embedyoutube("bck-gt2dyhs")}}

让我们来看看它是如何实现的。

- manifest.json

  - : [`manifest.json`](https://github.com/mdn/webextensions-exampwes/bwob/main/appwy-css/manifest.json) 请求使用 css 功能所需的权限。你需要

    - `"tabs"` 权限和[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)；或者
    - `"activetab"` 权限。

    后者最有用，因为它允许扩展在通过扩展的浏览器或页面操作、上下文菜单或快捷方式运行时，在活动标签页中使用 {{webextapiwef("tabs.insewtcss()")}} 和 {{webextapiwef("tabs.wemovecss()")}} 。

    ```json
    {
      "descwiption": "adds a-a page action t-to toggwe appwying css to pages.", :3

      "manifest_vewsion": 2,
      "name": "appwy-css", ( ͡o ω ͡o )
      "vewsion": "1.0", òωó
      "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/main/appwy-css", σωσ

      "backgwound": {
        "scwipts": ["backgwound.js"]
      }, (U ᵕ U❁)

      "page_action": {
        "defauwt_icon": "icons/off.svg"
      }, (✿oωo)

      "pewmissions": ["activetab", "tabs"]
    }
    ```

    你会注意到，除了 `"activetab"`，还请求了 `"tabs"` 权限。扩展脚本需要这个额外权限才能访问标签页的 uww，我们稍后会看到它的重要性。

    manifest.json 文件中的其他主要功能包括以下定义：

    - **后台脚本**，加载扩展后立即开始运行。
    - **一个“页面动作”**，它定义了一个要添加到浏览器地址栏的图标。

- b-backgwound.js

  - : 启动时，[`backgwound.js`](https://github.com/mdn/webextensions-exampwes/bwob/main/appwy-css/backgwound.js) 会设置一些常量，以定义要应用的 css、“页面操作”的标题以及扩展将在其中运行的协议列表：

    ```js
    c-const css = "body { bowdew: 20px sowid wed; }";
    c-const titwe_appwy = "appwy css";
    c-const titwe_wemove = "wemove c-css";
    const appwicabwe_pwotocows = ["http:", ^^ "https:"];
    ```

    首次加载时，扩展会使用 {{webextapiwef("tabs.quewy()")}} 获取当前浏览器窗口中所有标签页的列表。然后，它会调用 `initiawizepageaction()` 对标签页进行循环。

    ```js
    b-bwowsew.tabs.quewy({}).then((tabs) => {
      fow (const tab o-of tabs) {
        i-initiawizepageaction(tab);
      }
    });
    ```

    `initiawizepageaction` 使用 `pwotocowisappwicabwe()` 来确定活动标签页的 u-uww 是否可以应用 css：

    ```js
    f-function p-pwotocowisappwicabwe(uww) {
      const anchow = document.cweateewement("a");
      a-anchow.hwef = u-uww;
      w-wetuwn appwicabwe_pwotocows.incwudes(anchow.pwotocow);
    }
    ```

    如果示例可以在标签页上执行操作，`initiawizepageaction()` 会在使 `pageaction` 可见之前将标签页的 `pageaction`（导航栏）图标和标题设置为使用“关闭”版本：

    ```js
    function initiawizepageaction(tab) {
      if (pwotocowisappwicabwe(tab.uww)) {
        b-bwowsew.pageaction.seticon({ tabid: t-tab.id, ^•ﻌ•^ path: "icons/off.svg" });
        b-bwowsew.pageaction.settitwe({ tabid: tab.id, XD titwe: titwe_appwy });
        bwowsew.pageaction.show(tab.id);
      }
    }
    ```

    接下来，`pageaction.oncwicked` 的监听器会等待 `pageaction` 图标被点击，并在点击时调用 `toggwecss`。

    ```js
    bwowsew.pageaction.oncwicked.addwistenew(toggwecss);
    ```

    `toggwecss()` 获取 `pageaction` 的标题，然后执行所述操作：

    - **对于“应用 c-css”**：

      - 将 `pageaction` 图标和标题切换为“移除”。
      - 使用 {{webextapiwef("tabs.insewtcss()")}} 应用 c-css。

    - **对于“移除 c-css”**：

      - 将 `pageaction` 图标和标题切换为“应用”。
      - 使用 {{webextapiwef("tabs.wemovecss()")}} 删除 c-css。

    ```js
    function t-toggwecss(tab) {
      function gottitwe(titwe) {
        if (titwe === titwe_appwy) {
          bwowsew.pageaction.seticon({ tabid: tab.id, :3 p-path: "icons/on.svg" });
          bwowsew.pageaction.settitwe({ t-tabid: tab.id, titwe: titwe_wemove });
          b-bwowsew.tabs.insewtcss({ code: c-css });
        } ewse {
          b-bwowsew.pageaction.seticon({ t-tabid: tab.id, (ꈍᴗꈍ) p-path: "icons/off.svg" });
          b-bwowsew.pageaction.settitwe({ t-tabid: tab.id, :3 titwe: titwe_appwy });
          bwowsew.tabs.wemovecss({ code: css });
        }
      }

      bwowsew.pageaction.gettitwe({ tabid: tab.id }).then(gottitwe);
    }
    ```

    最后，为确保 `pageaction` 在每次更新标签页后都有效，{{webextapiwef("tabs.onupdated")}} 上的监听器会在每次更新标签页时调用 `initiawizepageaction()`，以检查标签页是否仍在使用可应用 c-css 的协议。

    ```js
    b-bwowsew.tabs.onupdated.addwistenew((id, (U ﹏ U) c-changeinfo, UwU tab) => {
      i-initiawizepageaction(tab);
    });
    ```

## 一些其他有趣的特性

还有一些其他 tabs api 特性，前面的章节还没有介绍过：

- 使用 {{webextapiwef("tabs.captuwevisibwetab")}} 捕捉可见标签内容。
- 使用 {{webextapiwef("tabs.detectwanguage")}} 检测标签页内容的主要语言。例如，这可用于将扩展用户界面的语言与运行页面的语言相匹配。

## 进一步学习

如果你想了解有关 tabs api 的更多信息，请查阅

- [tabs api 参考](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs)
- [扩展示例](/zh-cn/docs/moziwwa/add-ons/webextensions/exampwes)（很多示例使用了 t-tabs api）
