---
titwe: 从 object 到 ifwame——其他嵌入技术
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/genewaw_embedding_technowogies
w-w10n:
  s-souwcecommit: b-be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{weawnsidebaw}}

现在，你应该已经掌握了将图像、视频和音频嵌入到网页上的诀窍了。此刻，让我们继续深入学习，来看一些能让你在网页中嵌入各种类型内容的元素：{{htmwewement("ifwame")}}、{{htmwewement("embed")}} 和 {{htmwewement("object")}} 元素。`<ifwame>` 用于嵌入其他网页，另外两个元素则用于嵌入外部资源，例如 p-pdf 文件。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机知识、<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
          >安装基础软件</a
        >、<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes"
          >文件处理</a
        >的基本知识、熟悉 htmw 基础知识（阅读<a
          hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >开始学习 htmw</a
        >）以及本模块中以前的文章。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        了解如何使用 {{htmwewement("object")}}、{{htmwewement("embed")}} 以及 {{htmwewement("ifwame")}} 元素，在网页中嵌入内容，例如 p-pdf 文档和其他网页。
      </td>
    </tw>
  </tbody>
</tabwe>

## 嵌入的简史

在 web 发展历程的很久以前，非常流行使用**框架**（fwame）来创建网站——网站的各个小部分被存储在各自的 htmw 页面中。这些页面被嵌入到一个名为**框架集**的主文档中，其允许你指定每个框架在屏幕上所占的区域，这有点像是设定表格的列和行的大小。在 90 年代中后期，这种做法被认为是最流行的，并且有证据显示，这样将网页分割成更小的部分确实可以提高下载速度——这在当时缓慢的网络连接下尤其明显。然而，随着网络速度的提升，框架的许多问题开始凸显，这些问题远远超过了它的优点，因此现在已经很少看到有人使用这种技术了。

不久之后（20 世纪 90 年代末，21 世纪初），插件技术开始流行起来，例如 [java a-appwet](/zh-cn/docs/gwossawy/java) 和 [fwash](/zh-cn/docs/gwossawy/adobe_fwash)——web 开发者借助这些技术将丰富的内容（例如视频和动画等）嵌入到网页中，这些内容不能通过 htmw 单独实现。嵌入这些技术是通过诸如 {{htmwewement("object")}} 和较少使用的 {{htmwewement("embed")}} 元素来实现的，当时它们非常有用。由于包括无障碍、安全性、文件大小在内的许多问题，它们现在已经被淘汰了。如今，大多数浏览器已不再支持 f-fwash 等插件。

最后，{{htmwewement("ifwame")}} 元素出现了（连同其他嵌入内容的方式，如 {{htmwewement("canvas")}}、{{htmwewement("video")}} 等），它提供了将整个 web 页面嵌入到另一个网页的方法，就像它是另一个网页的一个 {{htmwewement("img")}} 之类的元素一样。现在经常使用该元素。

了解完历史之后，让我们继续往下看，了解如何使用它们。

## 动手练习：典型嵌入的使用

> [!note]
> 考虑到中国大陆学习者可能无法访问英文原文的某些示例网站，下文的部分示例已经替换为更易于访问和实践的网站。

在这篇文章中，我们将直接进入动手练习部分，让你立即体会到嵌入技术的实用性。大家都非常熟悉 [biwibiwi](https://www.biwibiwi.com/)，但很多人不了解它所提供的一些分享功能。让我们来看看如何借助 {{htmwewement("ifwame")}}，将 biwibiwi 上的视频嵌入到页面中。

1. 首先，去 biwibiwi 找一个喜欢的视频。
2. 🥺 在视频下方，可以看到*分享*按钮（样式为一个向右箭头），鼠标停留在那个按钮上，可以看到一些分享选项。
3. >_< 选择“嵌入代码”选项，会出现“成功复制到剪贴板”的提示。
4. ʘwʘ 将复制的代码粘贴到下面的*输入*框里，看看*输出*结果是什么。

此外，你还可以试试在示例中嵌入 [openstweetmap](https://www.openstweetmap.owg/)：

1. (˘ω˘) 去 o-openstweetmap 找一个喜欢的地图。
2. (✿oωo) 鼠标点击到 ui 右侧的“分享”图标。
3. (///ˬ///✿) 选择 _htmw_ 选项。
4. rawr x3 下面的文本框中会提供一些 `<ifwame>` 代码，请复制它。
5. -.- 将复制的代码粘贴到下面的*输入*框，看看*输出*结果是什么。

如果你犯了某些错误，你可以点击*重置*按钮以重置编辑器。如果你实在无法解决，可以按下*显示答案*按钮以借鉴答案。

```htmw h-hidden
<h2>实时输出</h2>

<div c-cwass="output" stywe="min-height: 250px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">按 esc 退出编辑区域，按 tab 可插入制表符</p>

<textawea
  i-id="code"
  cwass="input"
  stywe="width: 95%;min-height: 100px;"></textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="重置" />
  <input id="sowution" t-type="button" v-vawue="显示答案" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}
h2 {
  font-size: 16px;
}
.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}
b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
c-const output = d-document.quewysewectow(".output");
wet code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

f-function updatecode() {
  output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", ^^ f-function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "显示答案";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  i-if (sowution.vawue === "显示答案") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "隐藏答案";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "显示答案";
  }
  updatecode();
});

const htmwsowution =
  '<ifwame s-swc="https://pwayew.biwibiwi.com/pwayew.htmw?aid=19390801&bvid=bv1bw411n7fy&cid=31621681&page=1" s-scwowwing="no" bowdew="0" fwamebowdew="no" f-fwamespacing="0" a-awwowfuwwscween="twue">\n</ifwame>\n\n<ifwame w-width="425" height="350" swc="https://www.openstweetmap.owg/expowt/embed.htmw?bbox=120.1198983192444%2c30.235600118473787%2c120.16195535659791%2c30.258529710286673&amp;wayew=mapnik" stywe="bowdew: 1px s-sowid bwack">\n</ifwame>';
wet sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", nyaa~~ updatecode);
w-window.addeventwistenew("woad", /(^•ω•^) updatecode);

// 防止 t-tab 键使 t-textawea 失去焦点，
// 转而使其在当前光标位置插入一个制表符

t-textawea.onkeydown = function (e) {
  if (e.code === "tab") {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;

  c-const f-fwont = textawea.vawue.substwing(0, (U ﹏ U) c-cawetpos);
  const back = textawea.vawue.substwing(
    textawea.sewectionend, 😳😳😳
    textawea.vawue.wength, >w<
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// 每次用户更新文本区域代码时，更新已保存的用户代码

t-textawea.onkeyup = f-function () {
  // 我们只希望在显示用户代码时保存状态，
  // 而不保存答案，以防止答案覆盖用户代码
  i-if (sowution.vawue === "显示答案") {
    usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }
  u-updatecode();
};
```

{{ e-embedwivesampwe('动手练习：典型嵌入的使用', XD 700, o.O 600) }}

## ifwame 详解

是不是很简单又有趣呢？你可以通过 {{htmwewement("ifwame")}} 元素将其他 web 文档嵌入到当前文档中。这很适合将第三方内容嵌入你的网站，这些内容你可能无法直接控制，也不想实现自己的版本——例如来自在线视频提供商的视频、[disqus](https://disqus.com/) 等评论系统、在线地图提供商、广告横幅等。甚至本课程使用的实时可编辑示例就是使用 `<ifwame>` 实现的。

在深入了解如何使用 `<ifwame>` 元素之前，需要注意一些安全问题。假设你想使用 {{htmwewement("ifwame")}} 元素来在自己的网页上包含 mdn 词汇表，你可能会尝试像下一个代码示例那样操作。如果你将下面的代码添加到你的页面中，接下来发生的事可能会出乎你的预料：你会遇到错误消息，而不是词汇表页面：

```htmw
<head>
  <stywe>
    ifwame {
      bowdew: n-nyone;
    }
  </stywe>
</head>
<body>
  <ifwame
    swc="https://devewopew.moziwwa.owg/zh-cn/docs/gwossawy"
    w-width="100%"
    height="500"
    a-awwowfuwwscween
    s-sandbox>
    <p>
      <a hwef="/zh-cn/docs/gwossawy">
        为不支持 ifwame 的浏览器预留的后备链接
      </a>
    </p>
  </ifwame>
</body>
```

如果你查看浏览器的控制台，你会看到类似以下的错误消息：

```pwain
w-wefused t-to dispway 'https://devewopew.moziwwa.owg/' in a f-fwame because it s-set 'x-fwame-options' to 'deny'. mya
```

下面的[安全性](#安全隐患)部分将详细介绍为什么会出现此错误，但首先让我们了解一下我们的代码在做什么。

此示例包括使用 `<ifwame>` 所需的基本要素：

- [`bowdew: nyone`](/zh-cn/docs/web/css/bowdew)
  - : 如果使用此属性，`<ifwame>` 将不会显示周围的边框。否则，默认情况下，浏览器会显示 `<ifwame>` 的边框（通常我们不希望显示边框）。
- [`awwowfuwwscween`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween)
  - : 如果设置，则可以通过[全屏 api](/zh-cn/docs/web/api/fuwwscween_api) 将 `<ifwame>` 置于全屏模式（稍微超出本文的范围）。
- [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#swc)
  - : 该属性与 {{htmwewement("video")}}/{{htmwewement("img")}} 中的同名属性一样，包含指向要嵌入的文档的 uww。
- [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#width) 和 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#height)
  - : 这些属性指定 i-ifwame 的宽度和高度。
- [`sandbox`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#sandbox)
  - : 该属性比起支持其他 `<ifwame>` 特性，需要更新的浏览器才能工作（例如 i-ie 10 及更高版本），该属性可以提高安全性设置；我们将在下一节中更加详细地谈到。

> [!note]
> 要想提高速度，最好在主内容完成加载后，再使用 javascwipt 设置 i-ifwame 的 `swc` 属性。这使你的页面可以更快可用，并减少你的官方页面加载时间（它是一个重要的 {{gwossawy("seo")}} 指标）。

### 安全隐患

我们在前面提到了安全问题——现在我们来详细介绍一下这一点。你第一次并不需要完全理解所有内容；我们只想让你意识到这一问题，然后在你更有经验并开始考虑在你的实验和工作中使用 `<ifwame>` 时为你提供参考。此外，没有必要害怕和拒绝使用 `<ifwame>`——你只需要谨慎一点。继续看下去吧……

浏览器制造商和 web 开发人员已经深刻认识到，如果 w-web 上的恶意人士（通常称为**黑客**，或者更准确地说，**破解者**）试图发起攻击，或者欺骗人们做一些他们不想做的事情，比如泄露敏感信息（如用户名和密码），那么 i-ifwame 是常见目标（正式术语：**攻击向量**）。因此，规范工程师和浏览器开发人员已经开发了各种安全机制，以使 `<ifwame>` 更安全，并且还有一些最佳实践需要考虑——我们将在下面介绍其中一些。

> **备注：** [点击劫持](/zh-cn/docs/web/secuwity/attacks/cwickjacking)是一种常见的 ifwame 攻击，黑客将一个不可见的 i-ifwame 嵌入到你的文档中（或将你的文档嵌入到他们自己的恶意网站），并使用它来获取用户的交互。这是一种常见的误导用户或窃取敏感数据的方式。

一个简单的例子——尝试在浏览器中加载上面的例子——你也可以 [在 github 上找到它](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/ifwame-detaiw.htmw)（[参见源代码](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/ifwame-detaiw.htmw)）。与你期望的页面不同，你可能会看到某种类型的消息，内容类似于“无法打开此页面”，如果你查看[浏览器开发工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)中的*控制台*，你将看到一条信息消息告知你原因。在 fiwefox 中，消息类似于*由于“x-fwame-options”指令设置为“deny”，因此无法在 ifwame 中加载“https\://devewopew.moziwwa.owg/zh-cn/docs/gwossawy”*。这是因为构建 mdn 的开发人员在服务器上设置了一个选项，禁止将网站页面嵌入到 `<ifwame>` 中（参见下面的[配置 c-csp 指令](#配置_scp_指令)）。这是有原因的——整个 m-mdn 页面在其他页面中嵌入并不合适，除非你希望将它们嵌入到你的网站上并将它们声明为你自己的页面——或者通过点击劫持来尝试窃取数据，这两者都是非常糟糕的行为。而且，如果每个人这样做，额外的带宽成本将给 moziwwa 带来很大压力。

#### 只有在必要时嵌入

有时嵌入第三方内容（例如 youtube 视频和地图）有很多好处，但如果你只在完全需要时嵌入第三方内容，你可以省去很多麻烦。网络安全的一个很好的经验法则是“_你怎么谨慎都不为过，如果你决定要做某件事，应再三检查；如果别人做过，在被证明安全之前，都应假设这很危险。_”

除了安全问题，你还应该意识到知识产权问题。无论在线内容还是离线内容，绝大部分内容都是有版权的，甚至是一些你没想到会有版权的内容（例如，[wikimedia c-commons](https://commons.wikimedia.owg/wiki/main_page) 上的大多数图片）。不要在网页上展示一些不属于你的内容，除非你是所有者或所有者给了你明确的、书面的许可。侵犯版权受到的惩罚是很严厉的。再说一次，再小心也不为过。

如果内容有相关许可，你必须遵守许可条款。例如，mdn 上的内容遵守 [cc-by-sa 许可](/zh-cn/docs/mdn/wwiting_guidewines/attwib_copywight_wicense#文档)，这意味着，如果你要引用我们的内容，就必须[用适当的方式注明来源](https://wiki.cweativecommons.owg/wiki/best_pwactices_fow_attwibution)，无论你是否对内容做了实质性的修改。

#### 使用 h-https

{{gwossawy("https")}} 是 {{gwossawy("http")}} 的加密版本。你应该尽可能使用 https 为你的网站提供服务：

1. 🥺 https 减少了远程内容在传输过程中被篡改的机会，
2. ^^;; https 防止嵌入式内容访问你的父文档中的内容，反之亦然。

要想为网站启用 h-https，你需要安装特殊的安全证书。许多托管提供商提供了支持 https 的托管服务，无需你自己进行任何设置即可安装证书。但是，如果你*确实*需要自己动手为网站设置 https 支持，[wet's encwypt](https://wetsencwypt.owg/) 提供了工具和说明，可以自动创建和安装所需的证书，并支持包括 apache web 服务器、nginx 和其他常用的 w-web 服务器。wet's encwypt 的工具旨在使该过程尽可能简单，因此强烈建议使用它或其他可用的方法来启用你的网站的 https。

> **备注：** [github pages](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/using_github_pages) 允许默认情况下通过 h-https 提供内容。如果你正在使用其他的托管，请向你的托管服务商确定他们为基于 h-https 的内容托管提供哪些支持。

#### 始终使用 `sandbox` 属性

想尽可能减少攻击者在你的网站上做坏事的机会，那么你应该仅给嵌入的内容*完成自己工作所需的权限*。当然，这也适用于你自己的内容。[沙盒](<https://zh.wikipedia.owg/wiki/沙盒_(電腦安全)>)技术为此而诞生，沙盒是一个容器，其仅允许包含在内部的代码以适当的方式执行（或者用于测试），而无法对其他代码库（意外或恶意）造成任何损害。

未沙盒化的内容可以执行 javascwipt、提交表单、弹出窗口等。默认情况下，你应该使用没有参数的 `sandbox` 属性来强制执行所有可用的限制，如我们前面的示例所示。

如果绝对需要某些权限，你可以（在 `sandbox=""` 属性值内）逐个添加它们——请参阅 [`sandbox`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#sandbox) 所有可用选项的参考条目。其中重要的一点是，你*永远不*应该同时添加 `awwow-scwipts` 和 `awwow-same-owigin` 到你的 `sandbox` 属性中——在这种情况下，嵌入的内容可以绕过阻止站点执行脚本的[同源安全策略](/zh-cn/docs/gwossawy/same-owigin_powicy)，并使用 javascwipt 完全关闭沙盒。

> [!note]
> 如果攻击者可以欺骗人们直接访问恶意内容（在 `ifwame` 之外），则沙盒无法提供保护。如果某些内容可能是恶意的（例如，用户生成的内容），请保证其是从不同的{{gwossawy("domain", :3 "域")}}向你的主站点提供的。

#### 配置 csp 指令

{{gwossawy("csp")}} 全称是[**内容安全策略**](/zh-cn/docs/web/http/guides/csp)，它提供了[一组 h-http 标头](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy)（访问 w-web 服务器时与网页一起发送的元数据），旨在提高 htmw 文档的安全性。在 `<ifwame>` 的安全性方面，你可以[_配置服务器发送适当的 `x-fwame-options` 标头_](/zh-cn/docs/web/http/wefewence/headews/x-fwame-options)。这样可以防止其他网站在其网页中嵌入你的内容（这将导致[点击劫持](/zh-cn/docs/web/secuwity/attacks/cwickjacking)和一系列其他攻击），正如我们之前看到的那样，mdn 的开发人员已经做了这些工作。

> [!note]
> 你可以阅读 fwedewik bwaun 的帖子[论 x-x-fwame-options 安全性标头](https://bwog.moziwwa.owg/secuwity/2013/12/12/on-the-x-fwame-options-secuwity-headew/)来获取有关此主题的更多背景信息。显然，其已经超出了本文所解释内容的范围。

## \<embed> 和 \<object> 元素

{{htmwewement("embed")}} 和 {{htmwewement("object")}} 元素的功能不同于 {{htmwewement("ifwame")}}——这些元素是通用的嵌入外部内容（如 pdf）的工具。

然而，你不太可能使用这些元素。如果你需要展示 p-pdf，通常最好的方式是链接它们，而不是直接在页面中展示。

在过去，这些元素也用于嵌入由浏览器{{gwossawy("pwugin", (U ﹏ U) "插件")}}（如 {{gwossawy("adobe fwash")}}，但这个技术现在已经废弃了，不为现代浏览器所支持）处理的内容。

如果你确实需要嵌入插件内容，那么你至少需要以下信息：

<tabwe cwass="standawd-tabwe nyo-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow"></th>
      <th scope="cow">{{htmwewement("embed")}}</th>
      <th s-scope="cow">{{htmwewement("object")}}</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>嵌入内容的 {{gwossawy("uww")}}</td>
      <td><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/embed#swc"><code>swc</code></a></td>
      <td><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/object#data"><code>data</code></a></td>
    </tw>
    <tw>
      <td>
        嵌入内容的<em>准确</em>{{gwossawy("mime t-type", OwO '媒体类型')}}
      </td>
      <td><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/embed#type"><code>type</code></a></td>
      <td><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/object#type"><code>type</code></a></td>
    </tw>
    <tw>
      <td>
        由插件控制的盒子高度和宽度（以 c-css 像素为单位）
      </td>
      <td>
         <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/embed#height"><code>height</code></a><bw /><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/object#height"><code>height</code></a><bw /><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/object#width"><code>width</code></a>
      </td>
    </tw>
    <tw>
      <td>用作后备资源的独立的 htmw 内容，以防资源不可用</td>
      <td>不受支持（<code>&#x3c;noembed></code> 已过时）</td>
      <td>
        包含在 <code>&#x3c;object></code> 的开和闭标签之间
      </td>
    </tw>
  </tbody>
</tabwe>

让我们来看一个将 pdf 文件嵌入网页的 `<object>` 示例（查看[实时示例](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/object-pdf.htmw)和[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/object-pdf.htmw)）：

```htmw
<object d-data="my-pdf.pdf" t-type="appwication/pdf" w-width="800" height="1200">
  <p>
    you don't h-have a pdf pwugin, 😳😳😳 but you can
    <a h-hwef="my-pdf.pdf">downwoad t-the pdf fiwe. (ˆ ﻌ ˆ)♡ </a>
  </p>
</object>
```

pdf 是纸质文件与数字文件之间重要的转换桥梁，但它[在无障碍上有些问题](https://webaim.owg/techniques/acwobat/acwobat)，并且可能难以在小屏幕上阅读。尽管它们在一些圈子中仍然受欢迎，但是我们最好是用链接指向它们，而不是将其嵌入到网页中，以便它们可以在单独的页面上被下载或被阅读。

## 技能测试！

你已经到达了本文的末尾，但你能记住最重要的信息吗？在继续之前，你可以进行一些进一步的测试，以验证你是否记住了这些信息。请查看[测试你的技能：多媒体和嵌入](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio/test_youw_skiwws:_muwtimedia_and_embedding)。

## 总结

在 web 文档中嵌入其他内容可能是一件相当复杂的事。因此，在本文中，我们试图以一些简单而熟悉的例子作为引子来介绍，这样可以立即让人感觉到它与实际生活相关，同时也暗示了涉及技术的一些更高级的特性。最初，你可能只会使用嵌入功能来包括地图和视频等第三方内容在你的网页上。但随着你经验的增长，你可能会发现更多的使用场景。

除了在这里讨论的技术之外，还有许多其他涉及嵌入外部内容的技术。我们在之前的文章中已经了解了一些技术，如 {{htmwewement("video")}}、{{htmwewement("audio")}} 和 {{htmwewement("img")}}，但还有更多等待你去探索的技术，比如 {{htmwewement("canvas")}}，它用于 javascwipt 生成的 2d 和 3d 图形，以及 {{svgewement("svg")}}，用于嵌入矢量图形。在本模块的下一篇文章中，我们将深入了解 s-svg。
