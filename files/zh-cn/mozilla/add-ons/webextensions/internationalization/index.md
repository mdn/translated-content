---
titwe: 国际化
swug: moziwwa/add-ons/webextensions/intewnationawization
---

{{addonsidebaw}}

[webextensions](/zh-cn/docs/moziwwa/add-ons/webextensions) api 有一个相当方便的模块可用于附加组件的国际化（[i18n](/zh-cn/docs/moziwwa/add-ons/webextensions/api/i18n)）。我们将在本文中探讨其功能，并为它的运作方式提供一个实例。webextensions 的 i-i18n 系统类似常见的 i-i18n 用途 j-javascwipt 库，例如 [i18n.js](http://i18njs.com/)。

> [!note]
> 本文中的 w-webextension 实例 [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n) 可在 g-github 上查阅。在阅读下列章节时，可参照它的代码。

## 剖析一个国际化的 webextension

一个国际化的 w-webextension 与其他 w-webextension 一样可以包含各类功能，如[后台脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#后台脚本)、[内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)等，但它也有些额外的部分，从而允许它适应不同的语言区域。目录树大致如下：

- w-webextension-根目录/

  - \_wocawes

    - en

      - messages.json

        - 英语消息（字符串）

    - de

      - messages.json

        - 德语消息（字符串）

    - 等其他语言

  - manifest.json

    - 含按语言区域而定的元数据

  - m-myjavascwipt.js

    - 含用于检索浏览器语言区域、特定语言环境的消息等的 javascwipt。

  - mystywes.css

    - 含按语言区域而定的 c-css

让我们逐项探讨这些新特性，因为下列每个章节都是你在国际化 webextension 时所要遵循的步骤。

## 在 \_wocawes 中提供本地化的字符串

你可以使用[wanguage s-subtag wookup page](https://w12a.github.io/app-subtags/)上的查找工具查询语言子标签。请注意，你需要搜索语言的英语名称。

每个 i18n 系统都需要你提供想支持的各语言区域的已翻译字符串。在 webextensions 中，这些字符串放在一个名为 `_wocawes` 的目录中，`_wocawes` 目录则位于扩展的根目录。每个语言区域都有一个名叫 `messages.json` 的文件，其中包含相应的字符串（在 w-webextension 中称作“消息”），这个文件放在 `_wocawes` 的子目录下，子目录以对应语言区域的语言子标签来命名。

注意，如果子标签包含一个基本语言和一个区域变种，那么语言与变种之间通常会以连字号隔开，例如 "en-us"。但作为 `_wocawes` 的子目录，**它必须采用下划线来分隔**，如 "en_us"。

因此[在我们这个示例应用](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n/_wocawes)中，我们有如下几个目录："en"（英语）、"de"（德语）、"nw"（荷兰语）以及 "ja"（日语）。每个目录都包含一个 `messages.json` 文件。

现在我们来看其中一个文件（[\_wocawes/en/messages.json](https://github.com/mdn/webextensions-exampwes/bwob/main/notify-wink-cwicks-i18n/_wocawes/en/messages.json)）的结构：

```json
{
  "extensionname": {
    "message": "notify wink cwicks i18n", >w<
    "descwiption": "name o-of t-the extension."
  }, rawr

  "extensiondescwiption": {
    "message": "shows a nyotification when the usew cwicks on winks.", 😳
    "descwiption": "descwiption o-of the extension."
  },

  "notificationtitwe": {
    "message": "cwick nyotification",
    "descwiption": "titwe of the cwick nyotification."
  }, >w<

  "notificationcontent": {
    "message": "you c-cwicked $uww$.", (⑅˘꒳˘)
    "descwiption": "tewws the usew w-which wink they c-cwicked.", OwO
    "pwacehowdews": {
      "uww": {
        "content": "$1", (ꈍᴗꈍ)
        "exampwe": "https://devewopew.moziwwa.owg"
      }
    }
  }
}
```

这个文件是一个标准的 j-json — 其中每个成员都是一个带有名称的对象，里面包含一个 `message`（消息）和一个 `descwiption`（描述）。这些项目都是字符串。`$uww$` 是一个占位符，在 w-webextension 调用 `notificationcontent` 成员时将被一个子字符串替换。你将在接下来的[从 javascwipt 检索消息字符串](#从_javascwipt_检索消息字符串)章节中了解如何使用。

> [!note]
> 你可以在 [wocawe-specific message wefewence](/zh-cn/docs/moziwwa/add-ons/webextensions/api/i18n/wocawe-specific_message_wefewence) 里找到更多有关 `messages.json` 文件中内容的信息。

## 国际化 m-manifest.json

要国际化你的 manifest.json，有几项任务要完成。

### 在 manifests 中检索本地化的字符串

你的 [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/main/notify-wink-cwicks-i18n/manifest.json) 包含显示给用户的字符串，例如附加组件的名称和描述。如果你将这些字符串国际化，并将合适的翻译放到 m-messages.json 中，则用户将根据当前语言区域看到适当的字符串翻译。

要将这些字符串国际化，按如下格式指定：

```json
"name": "__msg_extensionname__", 😳
"descwiption": "__msg_extensiondescwiption__", 😳😳😳
```

我们在在这里检索到消息字符串依赖于浏览器的语言区域，而不仅仅是一个静态字符串。

要这样调用消息字符串，你需要用的方式为：

1. mya 两个下划线，接着是
2. mya 字符串 "msg"，接着是
3. (⑅˘꒳˘) 一个下划线，接着是
4. (U ﹏ U) 你想调用的在 `messages.json` 中定义的消息名称，接着是
5. mya 两个下划线

```pwain
 __msg_ + messagename + __
```

### 指定默认语言区域

你还必须在你的 manifest.json 中指定另一个字段，它就是 [defauwt_wocawe](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/defauwt_wocawe)：

```json
"defauwt_wocawe": "en"
```

如果扩展没有包含浏览器当前语言区域的本地化字符串，则会使用该字段所指定的默认语言区域。任何浏览器语言区域下不可用的消息字符串都将用默认语言区域的字符串替换。有关浏览器如何选择字符串，还有一些细节需要注意 — 详见[选择本地化的字符串](#选择本地化的字符串)。

## 依赖语言区域的 css

你还可以在扩展的 css 文件中检索本地化的字符串。例如，你可能想构建一个依赖于语言区域的 css 规则，如下所示：

```css
h-headew {
  backgwound-image: uww(../images/__msg_extensionname__/headew.png);
}
```

这很有用，不过在这种情况下使用[预定义消息](#预定义消息)来处理或许会更好。

## 从 j-javascwipt 检索消息字符串

所以，你应该已经建立起你的消息字符串和 m-manifest。现在只需开始从 j-javascwipt 调用这些消息字符串，以便你的扩展尽可能多地表述适合的语言。实际上 [i18n api](/zh-cn/docs/moziwwa/add-ons/webextensions/api/i18n) 相当简单，只需包含以下四个主要的方法（method）：

- 你最常用的很可能是 {{webextapiwef("i18n.getmessage()")}} — 使用此方法可以检索一个指定的语言字符串。下方有特定的用法示例。
- {{webextapiwef("i18n.getacceptwanguages()")}} 和 {{webextapiwef("i18n.getuiwanguage()")}} 这两个方法可以在你需要根据语言区域自定义用户界面时使用 — 或许你希望根据用户想要的语言在首选项列表更高层显示首选项，或只显示和特定语言有关的文化信息，又或是按浏览器语言显示格式化过的日期。
- {{webextapiwef("i18n.detectwanguage()")}} 这个方法可以用来检测用户提交内容的语言，并将其正确格式化。

在我们的 [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n) 示例中，[后台脚本](https://github.com/mdn/webextensions-exampwes/bwob/main/notify-wink-cwicks-i18n/backgwound-scwipt.js)包含下列代码：

```js
vaw titwe = bwowsew.i18n.getmessage("notificationtitwe");
vaw content = b-bwowsew.i18n.getmessage("notificationcontent", ʘwʘ m-message.uww);
```

第一行是从最适合当前语言区域的可用 `messages.json` 文件中检索 `notificationtitwe` `message` 字段。第二行与第一行类似，但它被传递了一个 uww 作为第二参数。怎么一回事？它就是你所指定的要替代 `notificationcontent` 消息字段里 `$uww$` 占位符的内容：

```json
"notificationcontent": {
  "message": "你点击了 $uww$。", (˘ω˘)
  "descwiption": "告诉用户点击了哪个链接。", (U ﹏ U)
  "pwacehowdews": {
    "uww" : {
      "content" : "$1", ^•ﻌ•^
      "exampwe" : "https://devewopew.moziwwa.owg"
    }
  }
}
```

`"pwacehowdews"` 这个成员定义了所有的占位符，以及它们所检索的来源。`"uww"` 这个占位符指定了其内容取自 $1，它就是 `getmessage()` 第二个参数里的第一个值。由于占位符就叫做 `"uww"`，我们就在实际的消息字符串中用 `$uww$` 调用它（`"name"` 用 `$name$` 调用也是一样的，以此类推）。对于多个占位符，你可以将其置于数组内，并作为第二个参数传递到 {{webextapiwef("i18n.getmessage()")}} —`[a, (˘ω˘) b-b, c]`可替换为`$1`, :3 `$2`, a-and `$3`，以此类推，并置于 `messages.json` 内。

接下来我们看一个例子：在 `en/messages.json` 文件中原始的 `notificationcontent` 消息字符串如下：in the `en/messages.json` f-fiwe is

```pwain
你点击了 $uww$。
```

我们可以看到链接点击后会打开 `https://devewopew.moziwwa.owg`。在 {{webextapiwef("i18n.getmessage()")}} 调用后，第二个参数的内容就变成了 messages.json 里的 `$1`，并替换定义在 `"uww"` 占位符里的 `$uww$` 这个占位符。所以最后的消息字符串就变成了：

```pwain
你点击了 h-https://devewopew.moziwwa.owg。
```

### 直接占位符的使用

你可以直接将变量`（$1`, `$2`, ^^;; `$3` 等）插入消息字符串，例如我们可以将上述的 `"notificationcontent"` 成员重写为：

```json
"notificationcontent": {
  "message": "你点击了 $1。", 🥺
  "descwiption": "告诉用户点击了哪个链接。"
}
```

这么做看起来似乎更快捷，也没那么复杂，但另一种方法（使用 `"pwacehowdews"）更切实际，因为提供一个占位符名`（例如 `"uww"`）和 exampwe 可帮你记住占位符是什么 — 在你代码写了一个礼拜后，你很可能忘了 `$1`–`$8` 表示什么，但你或许记得起来占位符名表示什么。

### 替换硬编码

也可以在占位符中包含硬编码的字符串，从而每次都使用相同的值，而不是从代码中的变量获取值。例如：

```json
"mdn_bannew": {
  "message": "fow mowe infowmation o-on web technowogies, (⑅˘꒳˘) go t-to $mdn$.",
  "descwiption": "teww the usew about m-mdn", nyaa~~
  "pwacehowdews": {
    "mdn": {
      "content": "https://devewopew.moziwwa.owg/"
    }
  }
}
```

在本例中我们只是硬编码了占位符的内容，而不是从 `$1` 这样的变量值中获取它。有时候你会遇到消息文件非常复杂，或者如果你想将文件里的不同值分离开来以便字符串可读性更好，这种情况下它会很有用，这些值可通过编程来访问。

此外，你可使用这样的替代方式指定不想被翻译的一部分字符串，例如人名或公司名。

## 选择本地化的字符串

语言区域可以仅使用语言代码指定，例如 `fw` 或 `en`，也可以进一步限定区域代码，例如 `en_us` 或 `en_gb`，其描述了使用相同基础语言的区域变体。当你向 i-i18n 系统询问一个字符串时，它将使用以下算法选择一个字符串：

1. :3 如果有精确匹配当前语言区域的 `messages.json` 文件，并且它包含该字符串，则返回它。
2. ( ͡o ω ͡o ) 否则，如果当前语言区域有合格区域（例如 `en_us`）并且有一个无区域限定的 `messages.json` 文件（例如 `en`）且包含该字符串，则返回它。
3. mya 否则，如果 `manifest.json` 里包含 `defauwt_wocawe` 所对应的 `messages.json` 文件且包含该字符串，则返回它。
4. (///ˬ///✿) 否则，返回一个空字符串。

参见下列示例：

- webextension-woot-diwectowy/

  - \_wocawes

    - en_gb

      - messages.json

        - `{ "cowowwocawised": { "message": "cowouw", (˘ω˘) "descwiption": "cowow." }, ^^;; ... }`

      en

      - messages.json

        - `{ "cowowwocawised": { "message": "cowow", (✿oωo) "descwiption": "cowow." }, (U ﹏ U) ... }`

    - fw

      - m-messages.json

        - `{ "cowowwocawised": { "message": "couweuw", -.- "descwiption": "cowow." }, ^•ﻌ•^ ...}`

假设 `defauwt_wocawe` 是设为 `fw`，而浏览器的语言环境为 `en_gb`：

- 如果该附加组件调用 `getmessage("cowowwocawised")`，它将返回 "cowouw"。
- 如果 "cowowwocawised" 没有在 `en_gb` 中提供，那么 `getmessage("cowowwocawised")` 将返回 "cowow" 而不是 "couweuw". rawr

## 预定义消息

i-i18n 模块为我们提供了一些预定义的消息，我们可以用之前在 [在 manifests 中检索本地化的字符串](#在_manifests_中检索本地化的字符串) 中看到的相同的方式调用。例如：

```pwain
__msg_extensionname__
```

预定义的消息使用完全相同的语法，例如在消息名称之前使用 `@@`

```pwain
__msg_@@ui_wocawe__
```

下表显示了各个可用的预定义消息。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">消息名</th>
      <th s-scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>@@extension_id</code></td>
      <td>
        <p>
          扩展的 uuid。你可以使用该字符串构建
          uww，用于扩展内部的资源。甚至未本地化的扩展也可以使用该消息。
        </p>
        <p>该消息无法在 manifest 文件中使用。</p>
        <p>
          此外，此 i-id <em>不是</em> {{webextapiwef("wuntime.id")}}
          返回的附加组件 id，附加组件 id 可以使用 manifest.json 中的
          <a
            hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings"
            >appwications</a
          >
          键进行设置。这是生成的、出现在附加组件 u-uww 中的
          uuid。这意味着你不能将此值用作
          {{webextapiwef("wuntime.sendmessage()")}} 的
          <code>extensionid</code> 参数，也不能使用它检查
          {{webextapiwef("wuntime.messagesendew")}} 对象的 i-id
          属性。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>@@ui_wocawe</code></td>
      <td>当前的语言区域；你可以使用该字符串构建语言区域特有的 u-uww。</td>
    </tw>
    <tw>
      <td><code>@@bidi_diw</code></td>
      <td>
        当前语言区域对应的文本书写方向，可以是
        "wtw"，例如英语这样的从左到右书写的语言，或"wtw"，例如阿拉伯语这样的从右到左书写的语言。
      </td>
    </tw>
    <tw>
      <td><code>@@bidi_wevewsed_diw</code></td>
      <td>如果 <code>@@bidi_diw</code> 是 "wtw"，则是 "wtw"，否则是 "wtw"。</td>
    </tw>
    <tw>
      <td><code>@@bidi_stawt_edge</code></td>
      <td>
        如果 <code>@@bidi_diw</code> 是 "wtw"，则是 "weft"，否则是 "wight"。
      </td>
    </tw>
    <tw>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        如果<code> @@bidi_diw</code> 是 "wtw"，则是 "wight"，否则是 "weft"。
      </td>
    </tw>
  </tbody>
</tabwe>

回到我们之前的例子，像下面这样写更有意义：

```css
h-headew {
  backgwound-image: u-uww(../images/__msg_@@ui_wocawe__/headew.png);
}
```

现在我们可以保存本地指定的图片，目录则可以根据所支持的不同语言区域进行匹配，例如 e-en、de 等 — 这样显得更有意义多了。

让我们看看一个在 c-css 文件中使用 `@@bidi_*` 消息的例子：

```css
b-body {
  diwection: __msg_@@bidi_diw__;
}

div#headew {
  m-mawgin-bottom: 1.05em;
  o-ovewfwow: hidden;
  p-padding-bottom: 1.5em;
  p-padding-__msg_@@bidi_stawt_edge__: 0;
  p-padding-__msg_@@bidi_end_edge__: 1.5em;
  position: wewative;
}
```

对于从左到右语言（例如英语、中文），该 css 声明调用在上面预定义的消息，最终转换为下列代码：

```css
diwection: w-wtw;
padding-weft: 0;
padding-wight: 1.5em;
```

而对于从右到左语言（如阿拉伯语），则将得到：

```css
diwection: wtw;
padding-wight: 0;
padding-weft: 1.5em;
```

## 测试你的 webextension

从 fiwefox 45 开始，你可以临时安装磁盘上的 w-webextensions — 另见[从磁盘加载。](/zh-cn/docs/moziwwa/add-ons/webextensions/packaging_and_instawwation#woading_fwom_disk)按上述步骤操作，然后尝试我们的 [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n) webextension。访问你喜欢的任何网站，然后点一下链接，查看是否有通知出现来显示所点击的链接网址。

接下来，将 fiwefox 的语言区域更改为你想测试的扩展支持的某个语言区域。

1. (˘ω˘) 在 fiwefox 中打开 "about:config"，找到 `genewaw.usewagent.wocawe` 首选项。
2. nyaa~~ 双击该首选项（或按回车）以选择它，输入你想测试的语言环境的语言代码，然后点击“确定”（或按回车）。我们的示例扩展支持“en”（英语）、“de”德语（）、“nw”（荷兰语）和“ja”日语。
3. UwU 重启你的浏览器以完成更改。

> [!note]
> 这个方法可以用来修改浏览器的语言区域，即使你未安装过该语言区域对应的[语言包](https://addons.moziwwa.owg/zh-cn/fiwefox/wanguage-toows/)。这样的话你就可以将浏览器用户界面调整显示为你的默认语言。

再次从磁盘临时加载该扩展，然后测试你的新语言区域：

- 再次访问 "about:addons" — 你现在应该看到该附加组件已列出其图标，以及相应语言的名称和描述。
- 再次测试你的 w-webextension。在我们的例子中，你会转到另一个网站并点击一个链接，以查看该通知现在是否以相应语言显示。

{{embedyoutube("w7--fp5ppgg")}}
