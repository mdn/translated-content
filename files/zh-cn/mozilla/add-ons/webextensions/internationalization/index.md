---
title: 国际化
slug: Mozilla/Add-ons/WebExtensions/Internationalization
---

{{AddonSidebar}}

[WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) API 有一个相当方便的模块可用于附加组件的国际化（[i18n](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n)）。我们将在本文中探讨其功能，并为它的运作方式提供一个实例。WebExtensions 的 i18n 系统类似常见的 i18n 用途 JavaScript 库，例如 [i18n.js](http://i18njs.com/)。

> **备注：** 本文中的 WebExtension 实例 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) 可在 GitHub 上查阅。在阅读下列章节时，可参照它的代码。

## 剖析一个国际化的 WebExtension

一个国际化的 WebExtension 与其他 WebExtension 一样可以包含各类功能，如[后台脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#后台脚本)、[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)等，但它也有些额外的部分，从而允许它适应不同的语言区域。目录树大致如下：

- webextension-根目录/

  - \_locales

    - en

      - messages.json

        - 英语消息（字符串）

    - de

      - messages.json

        - 德语消息（字符串）

    - 等其他语言

  - manifest.json

    - 含按语言区域而定的元数据

  - myJavascript.js

    - 含用于检索浏览器语言区域、特定语言环境的消息等的 JavaScript。

  - myStyles.css

    - 含按语言区域而定的 CSS

让我们逐项探讨这些新特性，因为下列每个章节都是你在国际化 WebExtension 时所要遵循的步骤。

## 在 \_locales 中提供本地化的字符串

你可以使用[Language subtag lookup page](https://r12a.github.io/app-subtags/)上的查找工具查询语言子标签。请注意，你需要搜索语言的英语名称。

每个 i18n 系统都需要你提供想支持的各语言区域的已翻译字符串。在 WebExtensions 中，这些字符串放在一个名为 `_locales` 的目录中，`_locales` 目录则位于扩展的根目录。每个语言区域都有一个名叫 `messages.json` 的文件，其中包含相应的字符串（在 WebExtension 中称作“消息”），这个文件放在 `_locales` 的子目录下，子目录以对应语言区域的语言子标签来命名。

注意，如果子标签包含一个基本语言和一个区域变种，那么语言与变种之间通常会以连字号隔开，例如 "en-US"。但作为 `_locales` 的子目录，**它必须采用下划线来分隔**，如 "en_US"。

因此[在我们这个示例应用](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales)中，我们有如下几个目录："en"（英语）、"de"（德语）、"nl"（荷兰语）以及 "ja"（日语）。每个目录都包含一个 `messages.json` 文件。

现在我们来看其中一个文件（[\_locales/en/messages.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/_locales/en/messages.json)）的结构：

```json
{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "Shows a notification when the user clicks on links.",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "Click notification",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

这个文件是一个标准的 JSON — 其中每个成员都是一个带有名称的对象，里面包含一个 `message`（消息）和一个 `description`（描述）。这些项目都是字符串。`$URL$` 是一个占位符，在 WebExtension 调用 `notificationContent` 成员时将被一个子字符串替换。你将在接下来的[从 JavaScript 检索消息字符串](#从_javascript_检索消息字符串)章节中了解如何使用。

> **备注：** 你可以在 [Locale-Specific Message reference](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference) 里找到更多有关 `messages.json` 文件中内容的信息。

## 国际化 manifest.json

要国际化你的 manifest.json，有几项任务要完成。

### 在 manifests 中检索本地化的字符串

你的 [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) 包含显示给用户的字符串，例如附加组件的名称和描述。如果你将这些字符串国际化，并将合适的翻译放到 messages.json 中，则用户将根据当前语言区域看到适当的字符串翻译。

要将这些字符串国际化，按如下格式指定：

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

我们在在这里检索到消息字符串依赖于浏览器的语言区域，而不仅仅是一个静态字符串。

要这样调用消息字符串，你需要用的方式为：

1. 两个下划线，接着是
2. 字符串 "MSG"，接着是
3. 一个下划线，接着是
4. 你想调用的在 `messages.json` 中定义的消息名称，接着是
5. 两个下划线

```
 __MSG_ + messageName + __
```

### 指定默认语言区域

你还必须在你的 manifest.json 中指定另一个字段，它就是 [default_locale](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale)：

```json
"default_locale": "en"
```

如果扩展没有包含浏览器当前语言区域的本地化字符串，则会使用该字段所指定的默认语言区域。任何浏览器语言区域下不可用的消息字符串都将用默认语言区域的字符串替换。有关浏览器如何选择字符串，还有一些细节需要注意 — 详见[选择本地化的字符串](#选择本地化的字符串)。

## 依赖语言区域的 CSS

您还可以在扩展的 CSS 文件中检索本地化的字符串。例如，您可能想构建一个依赖于语言区域的 CSS 规则，如下所示：

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

这很有用，不过在这种情况下使用[预定义消息](#预定义消息)来处理或许会更好。

## 从 JavaScript 检索消息字符串

所以，您应该已经建立起您的消息字符串和 manifest。现在只需开始从 JavaScript 调用这些消息字符串，以便你的扩展尽可能多地表述适合的语言。实际上 [i18n API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n) 相当简单，只需包含以下四个主要的方法（method）：

- 你最常用的很可能是 {{WebExtAPIRef("i18n.getMessage()")}} — 使用此方法可以检索一个指定的语言字符串。下方有特定的用法示例。
- {{WebExtAPIRef("i18n.getAcceptLanguages()")}} 和 {{WebExtAPIRef("i18n.getUILanguage()")}} 这两个方法可以在你需要根据语言区域自定义用户界面时使用 — 或许你希望根据用户想要的语言在首选项列表更高层显示首选项，或只显示和特定语言有关的文化信息，又或是按浏览器语言显示格式化过的日期。
- {{WebExtAPIRef("i18n.detectLanguage()")}} 这个方法可以用来检测用户提交内容的语言，并将其正确格式化。

在我们的 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) 示例中，[后台脚本](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js)包含下列代码：

```js
var title = browser.i18n.getMessage("notificationTitle");
var content = browser.i18n.getMessage("notificationContent", message.url);
```

第一行是从最适合当前语言区域的可用 `messages.json` 文件中检索 `notificationTitle` `message` 字段。第二行与第一行类似，但它被传递了一个 URL 作为第二参数。怎么一回事？它就是你所指定的要替代 `notificationContent` 消息字段里 `$URL$` 占位符的内容：

```json
"notificationContent": {
  "message": "您点击了 $URL$。",
  "description": "告诉用户点击了哪个链接。",
  "placeholders": {
    "url" : {
      "content" : "$1",
      "example" : "https://developer.mozilla.org"
    }
  }
}
```

`"placeholders"` 这个成员定义了所有的占位符，以及它们所检索的来源。`"url"` 这个占位符指定了其内容取自 $1，它就是 `getMessage()` 第二个参数里的第一个值。由于占位符就叫做 `"url"`，我们就在实际的消息字符串中用 `$URL$` 调用它（`"name"` 用 `$NAME$` 调用也是一样的，以此类推）。对于多个占位符，你可以将其置于数组内，并作为第二个参数传递到 {{WebExtAPIRef("i18n.getMessage()")}} —`[a, b, c]`可替换为`$1`, `$2`, and `$3，以此类推，并置于` `messages.json` 内。

接下来我们看一个例子：在 `en/messages.json` 文件中原始的 `notificationContent` 消息字符串如下：in the `en/messages.json` file is

```
您点击了 $URL$。
```

我们可以看到链接点击后会打开 `https://developer.mozilla.org`。在 {{WebExtAPIRef("i18n.getMessage()")}} 调用后，第二个参数的内容就变成了 messages.json 里的 `$1`，并替换定义在 `"url"` 占位符里的 `$URL$` 这个占位符。所以最后的消息字符串就变成了：

```
您点击了 https://developer.mozilla.org。
```

### 直接占位符的使用

你可以直接将变量`（$1`, `$2`, `$3` 等）插入消息字符串，例如我们可以将上述的 `"notificationContent"` 成员重写为：

```json
"notificationContent": {
  "message": "你点击了 $1。",
  "description": "告诉用户点击了哪个链接。"
}
```

这么做看起来似乎更快捷，也没那么复杂，但另一种方法（使用 `"placeholders"）更切实际，因为提供一个占位符名`（例如 `"url"`）和 example 可帮你记住占位符是什么 — 在你代码写了一个礼拜后，你很可能忘了 `$1`–`$8` 表示什么，但你或许记得起来占位符名表示什么。

### 替换硬编码

也可以在占位符中包含硬编码的字符串，从而每次都使用相同的值，而不是从代码中的变量获取值。例如：

```json
"mdn_banner": {
  "message": "For more information on web technologies, go to $MDN$.",
  "description": "Tell the user about MDN",
  "placeholders": {
    "mdn": {
      "content": "https://developer.mozilla.org/"
    }
  }
}
```

在本例中我们只是硬编码了占位符的内容，而不是从 `$1` 这样的变量值中获取它。有时候你会遇到消息文件非常复杂，或者如果你想将文件里的不同值分离开来以便字符串可读性更好，这种情况下它会很有用，这些值可通过编程来访问。

此外，你可使用这样的替代方式指定不想被翻译的一部分字符串，例如人名或公司名。

## 选择本地化的字符串

语言区域可以仅使用语言代码指定，例如 `fr` 或 `en`，也可以进一步限定区域代码，例如 `en_US` 或 `en_GB`，其描述了使用相同基础语言的区域变体。当您向 i18n 系统询问一个字符串时，它将使用以下算法选择一个字符串：

1. 如果有精确匹配当前语言区域的 `messages.json` 文件，并且它包含该字符串，则返回它。
2. 否则，如果当前语言区域有合格区域（例如 `en_US`）并且有一个无区域限定的 `messages.json` 文件（例如 `en`）且包含该字符串，则返回它。
3. 否则，如果 `manifest.json` 里包含 `default_locale` 所对应的 `messages.json` 文件且包含该字符串，则返回它。
4. 否则，返回一个空字符串。

参见下列示例：

- webextension-root-directory/

  - \_locales

    - en_GB

      - messages.json

        - `{ "colorLocalised": { "message": "colour", "description": "Color." }, ... }`

      en

      - messages.json

        - `{ "colorLocalised": { "message": "color", "description": "Color." }, ... }`

    - fr

      - messages.json

        - `{ "colorLocalised": { "message": "couleur", "description": "Color." }, ...}`

假设 `default_locale` 是设为 `fr`，而浏览器的语言环境为 `en_GB`：

- 如果该附加组件调用 `getMessage("colorLocalised")`，它将返回 "colour"。
- 如果 "colorLocalised" 没有在 `en_GB` 中提供，那么 `getMessage("colorLocalised")` 将返回 "color" 而不是 "couleur".

## 预定义消息

i18n 模块为我们提供了一些预定义的消息，我们可以用之前在 [在 manifests 中检索本地化的字符串](#在_manifests_中检索本地化的字符串) 中看到的相同的方式调用。例如：

```
__MSG_extensionName__
```

预定义的消息使用完全相同的语法，例如在消息名称之前使用 `@@`

```
__MSG_@@ui_locale__
```

下表显示了各个可用的预定义消息。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">消息名</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@@extension_id</code></td>
      <td>
        <p>
          扩展的 UUID。你可以使用该字符串构建
          URL，用于扩展内部的资源。甚至未本地化的扩展也可以使用该消息。
        </p>
        <p>该消息无法在 manifest 文件中使用。</p>
        <p>
          此外，此 ID <em>不是</em> {{WebExtAPIRef("runtime.id")}}
          返回的附加组件 ID，附加组件 ID 可以使用 manifest.json 中的
          <a
            href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >applications</a
          >
          键进行设置。这是生成的、出现在附加组件 URL 中的
          UUID。这意味着你不能将此值用作
          {{WebExtAPIRef("runtime.sendMessage()")}} 的
          <code>extensionId</code> 参数，也不能使用它检查
          {{WebExtAPIRef("runtime.MessageSender")}} 对象的 id
          属性。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>当前的语言区域；你可以使用该字符串构建语言区域特有的 URL。</td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        当前语言区域对应的文本书写方向，可以是
        "ltr"，例如英语这样的从左到右书写的语言，或"rtl"，例如阿拉伯语这样的从右到左书写的语言。
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>如果 <code>@@bidi_dir</code> 是 "ltr"，则是 "rtl"，否则是 "ltr"。</td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        如果 <code>@@bidi_dir</code> 是 "ltr"，则是 "left"，否则是 "right"。
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        如果<code> @@bidi_dir</code> 是 "ltr"，则是 "right"，否则是 "left"。
      </td>
    </tr>
  </tbody>
</table>

回到我们之前的例子，像下面这样写更有意义：

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

现在我们可以保存本地指定的图片，目录则可以根据所支持的不同语言区域进行匹配，例如 en、de 等 — 这样显得更有意义多了。

让我们看看一个在 CSS 文件中使用 `@@bidi_*` 消息的例子：

```css
body {
  direction: __MSG_@@bidi_dir__;
}

div#header {
  margin-bottom: 1.05em;
  overflow: hidden;
  padding-bottom: 1.5em;
  padding-__MSG_@@bidi_start_edge__: 0;
  padding-__MSG_@@bidi_end_edge__: 1.5em;
  position: relative;
}
```

对于从左到右语言（例如英语、中文），该 CSS 声明调用在上面预定义的消息，最终转换为下列代码：

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

而对于从右到左语言（如阿拉伯语），则将得到：

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## 测试你的 WebExtension

从 Firefox 45 开始，你可以临时安装磁盘上的 WebExtensions — 另见[从磁盘加载。](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Packaging_and_installation#loading_from_disk)按上述步骤操作，然后尝试我们的 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) WebExtension。访问你喜欢的任何网站，然后点一下链接，查看是否有通知出现来显示所点击的链接网址。

接下来，将 Firefox 的语言区域更改为你想测试的扩展支持的某个语言区域。

1. 在 Firefox 中打开 "about:config"，找到 `general.useragent.locale` 首选项。
2. 双击该首选项（或按回车）以选择它，输入你想测试的语言环境的语言代码，然后点击“确定”（或按回车）。我们的示例扩展支持“en”（英语）、“de”德语（）、“nl”（荷兰语）和“ja”日语。
3. 重启你的浏览器以完成更改。

> **备注：** 这个方法可以用来修改浏览器的语言区域，即使你未安装过该语言区域对应的[语言包](https://addons.mozilla.org/en-US/firefox/language-tools/)。这样的话你就可以将浏览器用户界面调整显示为你的默认语言。

再次从磁盘临时加载该扩展，然后测试你的新语言区域：

- 再次访问 "about:addons" — 你现在应该看到该附加组件已列出其图标，以及相应语言的名称和描述。
- 再次测试你的 WebExtension。在我们的例子中，你会转到另一个网站并点击一个链接，以查看该通知现在是否以相应语言显示。

{{EmbedYouTube("R7--fp5pPGg")}}
