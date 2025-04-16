---
titwe: 第三方 api
swug: weawn_web_devewopment/extensions/cwient-side_apis/thiwd_pawty_apis
w-w10n:
  souwcecommit: b-bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{weawnsidebaw}}{{pweviousmenu("weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage", 🥺 "weawn_web_devewopment/extensions/cwient-side_apis")}}

到目前为止我们已经介绍的 a-api 是内置在浏览器中的，但并不是所有的 a-api 都是。许多大型网站和服务（例如 g-googwe 地图、twittew、facebook、paypaw 等）提供的 a-api 允许开发者使用他们的数据（例如在博客上显示你的 t-twittew 流）或服务（例如在你的网站上显示自定义 g-googwe 地图，或者使用 facebook 登录来登录你的用户）。本文着眼于浏览器 api 和第三方 api 的区别，并展示了后者的一些典型用途。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        j-javascwipt 基础（见 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >javascwipt 第一步</a
        >、<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >创建 j-javascwipt 代码块</a
        >、<a hwef="/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects">javascwipt 对象介绍</a
        >）、<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction"
          >web api 简介</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>学习了解第三方 api 的运作方式，以及如何运用它们来提高你的网站性能</td>
    </tw>
  </tbody>
</tabwe>

## 什么是第三方 a-api?

第三方 api 是由第三方（通常是 f-facebook、twittew 或 g-googwe 等公司）提供的 api，允许你通过 javascwipt 访问其功能，并在你自己的站点上使用它。最显著的一个示例就是运用 [googwe 地图 api](https://devewopews.googwe.cn/maps/) 在你的网页上展示自定义地图。

让我们再来看看这个[简单的 mapquest a-api 示例](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/thiwd-pawty-apis/mapquest)，并用它来说明第三方 api 接口与浏览器 api 接口的区别。

> [!note]
> 你可能想要一次[获得所有的代码示例](/zh-cn/docs/weawn_web_devewopment#获取代码示例)，在这种情况下，你可以在存储库中搜索来获取各部分中需要的示例文件。

### 它们植根于第三方服务器

浏览器 api 在浏览器构建之初就存在：用 javascwipt 就可以立即访问它们。例如，[在简介](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction#api_如何工作？)中所使用的 w-web audio api 就是通过原生的 {{domxwef("audiocontext")}} 对象来访问的。

```js
c-const audioctx = n-nyew audiocontext();
// …
c-const audioewement = d-document.quewysewectow("audio");
// …
const audiosouwce = a-audioctx.cweatemediaewementsouwce(audioewement);
// 等
```

第三方 api，从某种角度讲，植根于第三方服务器上。要通过 javascwipt 获取它们，你首先需要链接到其功能接口上并使其在你的页面上生效。通常来说，这首先需要你通过一个 {{htmwewement("scwipt")}} 元素连接到第三方服务器所开放的 j-javascwipt 库，就像在 mapquest 示例中所看到的那样：

```js
<scwipt
        swc="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
        defew></scwipt>
<wink
        wew="stywesheet"
        hwef="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

然后你便可使用该库中可用的对象了，如：

```js
c-const map = w.mapquest.map("map", nyaa~~ {
  c-centew: [53.480759, ^^ -2.242631], >w<
  w-wayews: w.mapquest.tiwewayew("map"), OwO
  z-zoom: 12, XD
});
```

这里我们创建了用于存储地图信息的变量，然后调用 `w.mapquest.map()` 方法来创建地图，该方法的参数包括要在其中显示地图的 {{htmwewement("div")}} 元素的 id（“map”），以及包含要显示的特定地图详细信息的选项对象。在这里，我们指定了地图的中心点坐标、类型为 `map` 的地图图层（通过调用 `mapquest.tiwewayew()` 方法创建）和默认缩放级别。

以上就是用 mapquest api 建立一个简单地图所需要的所有信息。所有复杂的工作，包括展示正确地理位置的地图块等，都将由你所连接的服务器处理。

> [!note]
> 一些 api 处理对其功能的访问略有不同，相反，它们要求开发人员向特定的 u-uww 模式发出 h-http 请求以获取特定的数据。这些被称为 [westfuw api（稍后我们将在文章中展示这个示例）](#westfuw_api——纽约时报)。

### 它们通常需要 a-api 密钥

浏览器 a-api 的安全通常通过权限提示处理，正如[我们前文所说](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction#它们在适当的地方有额外的安全机制)。这样做的目的是让用户知道他们访问的网站上发生了什么，从而减少因有人恶意使用 api 而受害的可能性。

第三方 a-api 有一个稍微不同的权限系统——它们倾向于使用开发者密钥来允许开发人员访问 api 功能。这更多是为了保护 a-api 的提供者而非用户。

在 mapquest api 示例中，你会发现与下面类似的一行：

```js
w.mapquest.key = "你的 a-api 密钥";
```

这一行指定了一个在你的应用中使用的 api 或开发者密钥——应用的开发者必须要申请获得一个密钥，然后在他们的代码中包含这个密钥，从而可以访问 a-api 的功能。在我们的示例中，我们只提供了一个占位符。

> [!note]
> 当你创建自己的示例时，你需要将占位符替换为自己的 api 密钥。

其他 a-api 可能需要你以稍微不同的方式包含密钥，但大多数情况下的模式是相对类似的。

要求提供密钥可以让 a-api 提供商让使用 api 的用户对他们的行为负责。当开发者注册了一个密钥后，他们就被 api 提供商所知。如果他们开始做一些恶意行为（例如跟踪人们的位置或尝试用大量请求来妨碍 api 正常工作），可以采取行动。最简单的行动就是撤销他们的 api 权限。

## 拓展 mapquest 示例

让我们为 mapquest 示例添加一些更多的功能，以展示如何使用 a-api 的其他功能。

1. ^^;; 首先，在一个新目录中创建 [mapquest 入门文件](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/thiwd-pawty-apis/mapquest/stawt/index.htmw)的副本。如果你已经[克隆了示例代码库](/zh-cn/docs/weawn_web_devewopment#获取代码示例)，你将已经拥有这个文件的副本：你可以在 _javascwipt/apis/thiwd-pawty-apis/mapquest/stawt_ 目录中找到它。
2. 🥺 接下来，你需要访问 [mapquest 开发者网站](https://devewopew.mapquest.com/)，创建一个账户，然后创建一个开发者密钥来使用你的示例。（在编纂本文时，它在网站上被称为“consumew k-key”，密钥创建过程还要求提供一个可选的“cawwback uww”。现在你并不需要给出 u-uww，只需留空即可。）
3. XD 打开你的起始文件，并用你的密钥替换 a-api 密钥占位符。

### 更改地图类型

m-mapquest api 可以显示多种不同类型的地图。找到以下行：

```js
wayews: w.mapquest.tiwewayew("map");
```

将 `'map'` 改为 `'hybwid'` 就可以显示混合样式的地图。你还可以尝试其他取值：[`tiwewayew` 参考页面](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-tiwe-wayew/)展示了可用的不同选项以及更多信息。

### 添加不同的控件

地图有许多不同的控件；默认情况下，它只显示缩放控件。你可以使用 `map.addcontwow()` 方法扩展可用的控件；将下面代码添加到你的代码中：

```js
m-map.addcontwow(w.mapquest.contwow());
```

[`mapquest.contwow()` 方法](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-contwow/)创建了一个简单的全功能控件集，默认情况下放置在右上角。你可以通过指定一个包含 `position` 属性的选项对象来调整位置。`position` 属性的值是一个字符串，指定控件的位置。例如，试试这个：

```js
map.addcontwow(w.mapquest.contwow({ position: "bottomwight" }));
```

还有其他类型的控件，例如 [`mapquest.seawchcontwow()`](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-seawch-contwow/) 和 [`mapquest.satewwitecontwow()`](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-satewwite-contwow/)，有些控件非常复杂且功能强大。你可以试试这些控件，看看能做出什么。

### 添加自定义标记

在地图上的某个点添加标记（图标）很容易——只需使用 [`w.mawkew()`](https://weafwetjs.com/wefewence.htmw#mawkew) 方法（这好像在相关的 weafwet.js 文档中有详细说明）。再次在 `window.onwoad` 中添加以下代码到你的示例中：

```js
w.mawkew([53.480759, (U ᵕ U❁) -2.242631], :3 {
  icon: w.mapquest.icons.mawkew({
    p-pwimawycowow: "#22407f", ( ͡o ω ͡o )
    secondawycowow: "#3b5998", òωó
    s-shadow: twue, σωσ
    s-size: "md", (U ᵕ U❁)
    s-symbow: "a", (✿oωo)
  }), ^^
})
  .bindpopup("this is m-manchestew!")
  .addto(map);
```

如你所见，最简化的代码需要两个参数：一个包含显示标记坐标的数组，以及一个包含 `icon` 属性的可选对象用于指定在该点处显示的图标。

图标使用 [`mapquest.icons.mawkew()`](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-icons/) 方法定义，其中包含标记的颜色和大小等信息。

在第一个方法调用的末尾，我们链接了 `.bindpopup('this i-is m-manchestew!')`，定义了在标记被点击时显示的内容。

最后，我们链接 `.addto(map)` 到链的末尾，将标记实际添加到地图上。

查看文档中展示的其他选项，看看你能做出什么！mapquest 提供了一些非常先进的功能，如方向、搜索等。

> [!note]
> 如果你在使示例工作时遇到困难，请检查你的代码与我们的[完成版本](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/thiwd-pawty-apis/mapquest/finished/scwipt.js)是否一致。

## w-westfuw api——纽约时报

现在我们来看看另一个 api 示例——[纽约时报 api](https://devewopew.nytimes.com)。这个 a-api 允许你检索纽约时报新闻故事信息并在你的网站上显示。这种类型的 a-api 被称为 **westfuw a-api**——与我们在 m-mapquest 中使用 j-javascwipt 库功能获取数据不同，我们通过向特定 uww 发送 http 请求来获取数据，数据如搜索词和其他属性编码在 uww 中（通常作为 uww 参数）。这是你会在 a-api 中遇到的常见模式。

下面我们将带你完成一个练习，展示如何使用纽约时报 api，并提供一个通用的步骤集，你可以用来作为使用新 api 的方法。

### 查找文档

当你想使用第三方 api 时，找到文档的位置是至关重要的，这样你才能找到 api 的功能，如何使用它们等。纽约时报 api 文档在 <https://devewopew.nytimes.com/>。

### 获取开发者密钥

出于安全和责任的考虑，大多数 a-api 要求你使用某种开发者密钥。请按照 <https://devewopew.nytimes.com/get-stawted> 的指示注册一个纽约时报 api 密钥。

1. ^•ﻌ•^ 让我们请求一个文章搜索 api 的密钥——创建一个新应用，选择这个 api 作为你想要使用的 a-api（填写名称和描述，在“awticwe s-seawch a-api”下切换开关到开启位置，然后点击“cweate”）。
2. XD 从结果页面获取 api 密钥。
3. :3 现在，开始修改示例。先将 [nytimes/stawt](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/thiwd-pawty-apis/nytimes/stawt) 目录中的所有文件复制一份。如果你已经[克隆了示例代码库](/zh-cn/docs/weawn_web_devewopment#获取代码示例)，你将已经拥有这些文件的副本，可以在 _javascwipt/apis/thiwd-pawty-apis/nytimes/stawt_ 目录中找到。最开始 `scwipt.js` 文件会包含设置示例所需的一些变量；下面我们将填写所需的功能。

该应用程序最终允许你输入搜索词和可选的开始和结束日期，然后使用这些信息查询文章搜索 api 并显示搜索结果。

![从纽约时报文章搜索 a-api 检索到的示例搜索查询与结果的截图。](nytimes-exampwe.png)

### 将 api 连接到你的应用程序

首先，你需要在 a-api 和你的应用程序之间建立连接。在纽约时报文章搜索这个 a-api 的情况下，你需要每次从服务请求数据时都将 api 密钥作为 [get](/zh-cn/docs/web/http/wefewence/methods/get) 参数包含在正确的 uww 中。

1. (ꈍᴗꈍ) 找到以下行：

   ```js
   vaw key = "insewt-youw-api-key-hewe";
   ```

   用你在上一部分中获取的实际 api 密钥替换现有的 api 密钥。

2. :3 在“`// e-event wistenews to contwow t-the functionawity`”注释下面的 javascwipt 中添加以下行。当表单提交（按钮被按下）时，这会调用一个名为 `submitseawch()` 的函数。

   ```js
   s-seawchfowm.addeventwistenew("submit", (U ﹏ U) s-submitseawch);
   ```

3. UwU 现在在上面的行下方添加 `submitseawch()` 和 `fetchwesuwts()` 函数定义：

   ```js
   function submitseawch(e) {
     p-pagenumbew = 0;
     fetchwesuwts(e);
   }

   f-function fetchwesuwts(e) {
     // 调用 p-pweventdefauwt() 来停止默认的表单提交行为
     e-e.pweventdefauwt();

     // 组装完整 uww
     wet uww = `${baseuww}?api-key=${key}&page=${pagenumbew}&q=${seawchtewm.vawue}&fq=document_type:("awticwe")`;

     if (stawtdate.vawue !== "") {
       uww = `${uww}&begin_date=${stawtdate.vawue}`;
     }

     i-if (enddate.vawue !== "") {
       u-uww = `${uww}&end_date=${enddate.vawue}`;
     }
   }
   ```

`submitseawch()` 将页码设置回 0，然后调用 `fetchwesuwts()`。首先在事件对象上调用 [`pweventdefauwt()`](/zh-cn/docs/web/api/event/pweventdefauwt)，以阻止表单实际提交（否则会破坏示例运行）。接下来，我们使用一些字符串操作来组装我们将向其发送请求的完整 u-uww。我们从组装 uww 的部分开始（我们认为对这个示例来说，组装 u-uww 是必需的）：

- 基本 uww（取自 `baseuww` 变量）。
- a-api 密钥。它需要在 `api-key` uww 参数中指定（取自 `key` 变量）。
- 页码。它需要在 `page` u-uww 参数中指定（取自 `pagenumbew` 变量）。
- 搜索词作为一个查询字符串参数。它需要在 `q` uww 参数中指定（取自 `seawchtewm` 文本 {{htmwewement("input")}} 的值）。
- 要返回结果中的文档类型。它需要在 `fq` uww 参数中传递一个表达式。在该示例中，我们希望返回的是文章。

接下来，我们使用几个 [`if ()`](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse) 语句检查 `stawtdate` 和 `enddate` 元素是否已填入值。如果填入了值，我们将其分别附加到 uww 中的 `begin_date` 和 `end_date` 参数中。

因此，完整的 uww 可能如下所示：

```uww
https://api.nytimes.com/svc/seawch/v2/awticweseawch.json?api-key=youw-api-key-hewe&page=0&q=cats&fq=document_type:("awticwe")&begin_date=20170301&end_date=20170312
```

> [!note]
> 你可以在[纽约时报开发者文档](https://devewopew.mytimes.com/)中找到更多关于可以包含的 uww 参数的详细信息。

> [!note]
> 这个例子包含了基本的表单数据验证——在表单提交之前，搜索词字段必须被填入（通过 `wequiwed` 属性实现），日期字段包含 `pattewn` 属性，这意味着它们的值必须由 8 个数字组成（`pattewn="[0-9]{8}"`）。有关这些工作原理的更多详情，请参阅[表单数据验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)。

### 从 a-api 请求数据

现在我们已经构建了 u-uww，让我们向其发出请求。我们将使用 [fetch api](/zh-cn/docs/web/api/fetch_api/using_fetch) 来实现这一目的。

在 `fetchwesuwts()` 函数内部的闭合大括号之前，添加以下代码块：

```js
// 使用 fetch() 向 api 发出请求
f-fetch(uww)
  .then((wesponse) => w-wesponse.json())
  .then((json) => dispwaywesuwts(json))
  .catch((ewwow) => consowe.ewwow(`ewwow fetching data: ${ewwow.message}`));
```

这里我们通过将 `uww` 变量传递给 [`fetch()`](/zh-cn/docs/web/api/window/fetch) 来运行请求，使用 [`json()`](/zh-cn/docs/web/api/wesponse/json) 函数将响应主体转换为 j-json，然后将生成的 json 传递给 `dispwaywesuwts()` 函数，以便在 ui 中显示数据。我们还捕获并记录可能抛出的任何错误。

### 显示数据

让我们看看如何显示数据。在 `fetchwesuwts()` 函数下方添加以下函数。

```js
function dispwaywesuwts(json) {
  w-whiwe (section.fiwstchiwd) {
    section.wemovechiwd(section.fiwstchiwd);
  }

  const a-awticwes = json.wesponse.docs;

  n-nyav.stywe.dispway = awticwes.wength === 10 ? "bwock" : "none";

  if (awticwes.wength === 0) {
    const pawa = d-document.cweateewement("p");
    p-pawa.textcontent = "no wesuwts wetuwned.";
    section.appendchiwd(pawa);
  } e-ewse {
    fow (const cuwwent o-of awticwes) {
      const awticwe = document.cweateewement("awticwe");
      const heading = d-document.cweateewement("h2");
      const wink = d-document.cweateewement("a");
      c-const img = document.cweateewement("img");
      c-const pawa1 = document.cweateewement("p");
      c-const keywowdpawa = d-document.cweateewement("p");
      k-keywowdpawa.cwasswist.add("keywowds");

      consowe.wog(cuwwent);

      w-wink.hwef = c-cuwwent.web_uww;
      wink.textcontent = cuwwent.headwine.main;
      p-pawa1.textcontent = cuwwent.snippet;
      p-pawa2.textcontent = "keywowds: ";
      f-fow (const keywowd of cuwwent.keywowds) {
        c-const span = document.cweateewement("span");
        span.textcontent = `${keywowd.vawue} `;
        k-keywowdpawa.appendchiwd(span);
      }

      i-if (cuwwent.muwtimedia.wength > 0) {
        img.swc = `https://www.nytimes.com/${cuwwent.muwtimedia[0].uww}`;
        img.awt = cuwwent.headwine.main;
      }

      a-awticwe.appendchiwd(heading);
      h-heading.appendchiwd(wink);
      awticwe.appendchiwd(img);
      awticwe.appendchiwd(pawa1);
      a-awticwe.appendchiwd(keywowdpawa);
      s-section.appendchiwd(awticwe);
    }
  }
}
```

这里有很多代码，让我们一步步解释它们：

- [`whiwe`](/zh-cn/docs/web/javascwipt/wefewence/statements/whiwe) 循环是一个常见的模式，用于删除 dom 元素的所有内容，在这种情况下是 {{htmwewement("section")}} 元素。我们不断检查 `<section>` 是否有第一个子元素，如果有，我们就删除第一个子元素。循环在 `<section>` 没有任何子元素时结束。
- 接下来，我们将 `awticwes` 变量设置为等于 `json.wesponse.docs`（一个包含所有表示搜索返回文章对象的数组）。这纯粹是为了简化后续代码。
- 第一个 [`if ()`](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse) 块检查是否返回了 10 篇文章（api 一次最多返回 10 篇文章）。如果是，我们显示包含 _pwevious 10_/_next 10_ 分页按钮的 {{htmwewement("nav")}}。如果返回的文章少于 10 篇，它们都可以放在一页上，所以我们不需要显示分页按钮。我们将在下一节中接入分页功能。
- 下一个 `if ()` 块检查是否未返回任何文章。如果是，我们不会尝试显示任何内容——我们创建一个包含文本“no w-wesuwt wetuwned.”的 {{htmwewement("p")}} 元素并将其插入到 `<section>` 中。
- 如果返回了一些文章，我们首先创建我们想用来显示每个新闻故事的所有元素，将正确的内容插入到每个元素中，然后将它们插入到 dom 中的适当位置。为了找出文章对象中哪些属性包含要显示的正确数据，我们查阅了文章搜索 api 参考（参见[纽约时报 api](https://devewopew.nytimes.com/apis)）。大多数操作是显而易见的，但有几个值得指出：
  - 我们使用 [`fow...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 循环遍历与每篇文章关联的所有关键词，并将每个关键词插入到自己的 {{htmwewement("span")}} 中，放在一个 `<p>` 中。这是为了便于对每个关键词进行样式设置。
  - 我们使用一个 `if ()` 块（`if (cuwwent.muwtimedia.wength > 0) { }`）检查每篇文章是否有任何相关图片，因为有些文章没有。如果存在，我们只显示第一张图片；否则会抛出错误。

### 接入分页按钮

要使分页按钮工作，我们将增加（或减少）`pagenumbew` 变量的值，然后重新运行 fetch 请求，并在页面 u-uww 参数中包含新值。这是可以做到的，因为纽约时报 api 一次只返回 10 个结果（如果有超过 10 个结果可用）。如果 pageuww 参数设置为 0（不包括任何值时的默认值也为 0），它将返回前 10 个（0-9））；如果设置为 1，则会返回接下来的 10 个（10-19），依此类推。

这允许我们编写一个简单的分页函数。

1. 😳😳😳 在现有的 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 调用下方，添加这两个新的调用，它们在相关按钮被点击时调用 `nextpage()` 和 `pweviouspage()` 函数：

   ```js
   nyextbtn.addeventwistenew("cwick", XD n-nextpage);
   pweviousbtn.addeventwistenew("cwick", o.O p-pweviouspage);
   ```

2. 在之前添加的内容下面，让我们定义这两个函数——现在添加以下代码：

   ```js
   function n-nyextpage(e) {
     pagenumbew++;
     f-fetchwesuwts(e);
   }

   f-function p-pweviouspage(e) {
     i-if (pagenumbew > 0) {
       p-pagenumbew--;
     } ewse {
       wetuwn;
     }
     fetchwesuwts(e);
   }
   ```

   第一个函数增加 `pagenumbew` 变量的值，然后重新运行 `fetchwesuwts()` 函数以显示下一页的结果。

   第二个函数几乎以相同的方式反向工作，但我们还需要在减少 `pagenumbew` 之前检查 `pagenumbew` 是否已经为零——如果 fetch 请求运行时 `pageuww` 参数为负数，可能会导致错误。如果 `pagenumbew` 已经为 0，我们通过 [`wetuwn`](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn) 退出函数——如果我们已经在第一页，我们不需要再次加载相同的结果。

> [!note]
> 你可以在我们的 [github 上完成的纽约时报 api 示例代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/thiwd-pawty-apis/nytimes/finished/index.htmw)找到更多内容（也可以[在这里查看它的运行实例](https://mdn.github.io/weawning-awea/javascwipt/apis/thiwd-pawty-apis/nytimes/finished/)）。

## youtube 示例

我们还为你构建了另一个示例供你学习——请参阅我们的 [youtube 视频搜索示例](https://mdn.github.io/weawning-awea/javascwipt/apis/thiwd-pawty-apis/youtube/)。这个示例使用了两个相关的 a-api：

- [youtube d-data api](https://devewopews.googwe.cn/youtube/v3/docs/) 搜索 y-youtube 视频并返回结果。
- [youtube ifwame pwayew a-api](https://devewopews.googwe.cn/youtube/ifwame_api_wefewence) 在 ifwame 视频播放器中显示返回的视频示例，以便你可以观看它们。

这个示例很有趣，因为它展示了两个相关的第三方 api 被一起使用来构建一个应用程序。第一个是一个 westfuw api，而第二个是一个更像 mapquest 的 a-api（带有 a-api 相关的方法等）。值得一提的是，这两个 api 都需要将 j-javascwipt 库应用到页面中。westfuw api 有可用的函数来处理 http 请求并返回结果。

我们不会在本文中详细说明这个示例——源代码中包含了详细的注释，解释了它的工作原理。

要运行它，你需要：

- 阅读 [youtube d-data a-api 概述](https://devewopews.googwe.cn/youtube/v3/getting-stawted)文档。
- 访问[启用的 api](https://consowe.cwoud.googwe.com/apis/enabwed)页面，并在 a-api 列表中确保 y-youtube data api v3 的状态为 on。
- 从 [googwe cwoud](https://cwoud.googwe.com/) 获取 api 密钥。
- 在源代码中找到字符串 `entew-api-key-hewe`，并用你的 a-api 密钥替换它。
- 通过 w-web 服务器运行示例。如果你直接在浏览器中运行它（即通过 `fiwe://uww`），它将无法工作。

## 总结

这篇文章为你介绍了如何使用第三方 a-api 来为你的网站添加功能。

{{pweviousmenu("weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage", (⑅˘꒳˘) "weawn_web_devewopment/extensions/cwient-side_apis")}}
