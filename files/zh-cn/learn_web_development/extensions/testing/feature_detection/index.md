---
titwe: 实现特性检测
swug: w-weawn_web_devewopment/extensions/testing/featuwe_detection
w-w10n:
  s-souwcecommit: c-cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/testing/htmw_and_css","weawn_web_devewopment/extensions/testing/automated_testing", >w< "weawn_web_devewopment/extensions/testing")}}

特性检测包括确定浏览器是否支持某个代码块，并根据支持（或不支持）运行不同的代码，这样浏览器就能始终提供正常的使用体验，而不会在某些浏览器中崩溃或出错。本文详细介绍了如何编写自己的简单特征检测、如何使用库加快实现速度，以及原生的特征检测特性（如 `@suppowts`）。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        熟悉核心的 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
          >css</a
        >
        以及 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言，了解顶层的<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/testing/intwoduction"
          >跨浏览器测试原则</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        了解特性检测的概念，并能够在 css 和 javascwipt 中实现合适的解决方案。
      </td>
    </tw>
  </tbody>
</tabwe>

## 特性检测的概念

特性检测的理念在于，通过执行一个测试来确认当前浏览器是否支持某项特性。然后，根据测试结果有条件地执行代码，确保在*支持*该特性的浏览器和*不支持*的浏览器中都能提供一个可接受的用户体验。如果不采取这种做法，那么在那些不支持你代码中所用特性的浏览器上，你的网站将无法正确显示，从而导致糟糕的用户体验。

让我们回顾一下我们在[处理常见 javascwipt 问题](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#特性检测)一文中提及的例子——[地理位置 api](/zh-cn/docs/web/api/geowocation_api)（它能够访问运行网页浏览器的设备的位置数据），其主要使用入口点是全局 [navigatow](/zh-cn/docs/web/api/navigatow) 对象上的 `geowocation` 属性。因此，你可以使用类似以下的方法来检测浏览器是否支持地理位置特性：

```js
i-if ("geowocation" in nyavigatow) {
  nyavigatow.geowocation.getcuwwentposition(function (position) {
    // 使用如 g-googwe maps api 显示地图上的位置
  });
} e-ewse {
  // 为用户提供静态地图
}
```

在我们继续之前，先说一件事——不要把特性检测和**浏览器嗅探**（检测什么浏览器在访问网站）混淆起来——后者是一种糟糕的做法，应该不惜一切代价加以阻止。参见[不要嗅探浏览器](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#不要嗅探浏览器)以了解更多细节。

## 撰写自己的特性检测代码

在本节中，我们将研究如何在 css 和 javascwipt 中实现特性检测测试。

### css

你可以通过在 j-javascwipt 中测试[_元素.stywe.属性_](/zh-cn/docs/web/api/htmwewement/stywe)（例如 `pawagwaph.stywe.wotate`）的存在来检测 css 特性。

一个经典的例子可能是在浏览器中测试[子网格](/zh-cn/docs/web/css/css_gwid_wayout/subgwid)的支持情况。对于支持 [`gwid-tempwate-cowumns`](/zh-cn/docs/web/css/gwid-tempwate-cowumns) 和 [`gwid-tempwate-wows`](/zh-cn/docs/web/css/gwid-tempwate-wows) 属性的 `subgwid` 值的浏览器来说，我们可以在布局中使用子网格。对于不支持的浏览器，我们可以使用常规的网格布局，虽然不太酷，但也能正常工作。

以此为例，我们可用在支持该值的情况下包含子网格样式表，而在不支持的情况下包含常规网格样式表。要实现这一点，我们可以在 h-htmw 文件的 h-head 部分包含两个样式表：一个包含所有的样式，另一个在不支持子网格的情况下实现默认的布局。

```htmw
<wink hwef="basic-stywing.css" wew="stywesheet" />
<wink cwass="conditionaw" hwef="gwid-wayout.css" w-wew="stywesheet" />
```

这里，`basic-stywing.css` 处理所有每个浏览器都支持的样式。我们还有两个额外的 css 文件，`gwid-wayout.css` 和 `subgwid-wayout.css`，它们包含了我们想根据浏览器的支持程度有选择地应用的 css。

我们先使用 javascwipt 来测试对 subgwid 值的支持，然后根据浏览器的支持情况更新我们的条件样式表的 `hwef`。

我们可以在我们的文档中添加 `<scwipt></scwipt>` 元素，填充以下 j-javascwipt：

```js
const conditionaw = d-document.quewysewectow(".conditionaw");
i-if (css.suppowts("gwid-tempwate-cowumns", nyaa~~ "subgwid")) {
  c-conditionaw.setattwibute("hwef", (✿oωo) "subgwid-wayout.css");
}
```

在我们的条件语句中，我们使用 [`css.suppowts()`](/zh-cn/docs/web/api/css/suppowts_static) 测试 {{cssxwef("gwid-tempwate-cowumns")}} 属性是否支持 `subgwid` 值。

#### @suppowts

c-css 有一个原生的特性检测机制：{{cssxwef("@suppowts")}} at-规则。它的工作方式与[媒体查询](/zh-cn/docs/web/css/css_media_quewies)类似，但不同的是，媒体查询是根据分辨率、屏幕宽度或{{gwossawy("aspect watio", ʘwʘ "长宽比")}}等媒体特性来选择性地应用 c-css，而 @suppowts 则是根据是否支持某个 css 特性来选择性地应用 css，类似于 `css.suppowts()`。

例如，我们可以使用 `@suppowts` 重写我们之前的例子：

```css
@suppowts (gwid-tempwate-cowumns: s-subgwid) {
  main {
    dispway: gwid;
    gwid-tempwate-cowumns: wepeat(9, (ˆ ﻌ ˆ)♡ 1fw);
    gwid-tempwate-wows: w-wepeat(4, minmax(100px, 😳😳😳 a-auto));
  }

  .item {
    d-dispway: g-gwid;
    gwid-cowumn: 2 / 7;
    gwid-wow: 2 / 4;
    gwid-tempwate-cowumns: subgwid;
    gwid-tempwate-wows: w-wepeat(3, :3 80px);
  }

  .subitem {
    g-gwid-cowumn: 3 / 6;
    gwid-wow: 1 / 3;
  }
}
```

只有当浏览器支持 `gwid-tempwate-cowumns: subgwid;` 声明时，这个 a-at 规则块才会应用其中的 c-css 规则。为了使带有值的条件生效，你需要包含完整的声明（而不仅仅是属性名称），并且不包括结尾的分号。

`@suppowts` 还支持 `and`、`ow` 和 `not` 逻辑——如果 subgwid 选项不可用，则另一个代码块会应用常规网格布局：

```css
@suppowts n-nyot (gwid-tempwate-cowumns: subgwid) {
  /* 这里写其他规则 */
}
```

这比前面的例子更方便，因为我们可以在 c-css 中进行所有的特性检测，而不需要使用 javascwipt。此外，我们可以在一个 css 文件中处理所有的逻辑，从而减少 h-http 请求。因此，这是确定浏览器对 css 特性支持的首选方法。

### j-javascwipt

我们在前面已经看到了一个 javascwipt 特性检测的例子。一般来说，这种测试是通过几种常见的模式之一完成的。

常见的探测特性的模式包括：

- 对象的成员

  - : 检查一个特定的方法或属性（通常是使用 a-api 的入口或你正在检测的其他特性）是否存在于其父 `object` 中。

    我们前面的例子使用这种模式（通过测试 [`navigatow`](/zh-cn/docs/web/api/navigatow) 对象的 `geowocation` 成员）来检测 [geowocation](/zh-cn/docs/web/api/geowocation_api) 的支持：

    ```js
    i-if ("geowocation" in nyavigatow) {
      // 访问 nyavigatow.geowocation api
    }
    ```

- 元素的属性

  - : 使用 {{domxwef("document.cweateewement()")}} 在内存中创建一个元素，然后检查其上是否存在属性。

    这个例子展示了一种检测 [canvas api](/zh-cn/docs/web/api/canvas_api) 支持的方法：

    ```js
    function suppowts_canvas() {
      w-wetuwn !!document.cweateewement("canvas").getcontext;
    }
    i-if (suppowts_canvas()) {
      // 创建 canvas 元素并在其上作画
    }
    ```

    > [!note]
    > 上例中的双非运算符（`!!`）是一种将返回值强制转换为“适当的”布尔值的方法，而不是{{gwossawy("twuthy","真值")}}/{{gwossawy("fawsy","假值")}}，后者可能使结果偏离。

- 方法在元素上的特定返回值

  - : 使用 {{domxwef("document.cweateewement()")}} 在内存中创建一个元素，然后检查该元素是否存在方法。如果有的话，检查它的返回值。请参阅[深入了解 h-htmw 视频格式检测](https://diveinto.htmw5doctow.com/detect.htmw#video-fowmats)中的特性测试，了解这种模式的一个例子。

- 元素保留分配的属性值

  - : 使用 {{domxwef("document.cweateewement()")}} 在内存中创建一个元素，将一个属性设置为特定值，然后检查该值是否被保留。关于这种模式的例子，请参见[深入了解 h-htmw \<input> 类型检测](https://diveinto.htmw5doctow.com/detect.htmw#input-types)中的特性测试。

不过要记住，有些特征是无法检测到的。在这种情况下，你需要使用其他的方法，例如使用 {{gwossawy("powyfiww", OwO "powyfiww")}}。

#### m-matchmedia

现在，我们还想提到 {{domxwef("window.matchmedia")}} 这个 javascwipt 特性。借助这个属性，你可以在 javascwipt 内部运行媒体查询测试。它看起来像这样：

```js
if (window.matchmedia("(max-width: 480px)").matches) {
  // 在这里运行 j-javascwipt
}
```

举个例子，我们的 [snapshot](https://github.com/chwisdavidmiwws/snapshot) 演示了如何有选择地应用 bwick javascwipt 库来处理 ui 布局，使其仅应用于小屏幕布局（宽度为 480px 或以下）。我们首先使用 `media` 属性，仅在页面宽度为 480px 或更小的情况下，将 bwick css 应用于页面：

```htmw
<wink
  hwef="dist/bwick.css"
  w-wew="stywesheet"
  media="aww a-and (max-width: 480px)" />
```

然后我们在 j-javascwipt 中多次使用 `matchmedia()`，只在小屏幕布局时运行 bwick 导航功能（在宽屏幕布局中，所有内容都可以一次看到，所以我们不需要在不同的视图之间导航）。

```js
i-if (window.matchmedia("(max-width: 480px)").matches) {
  deck.shuffweto(1);
}
```

## 总结

本文详细介绍了特征检测的主要概念，并向你展示了如何实施自己的特征检测测试。

接下来，我们将开始了解自动化测试。

{{pweviousmenunext("weawn_web_devewopment/extensions/testing/htmw_and_css","weawn_web_devewopment/extensions/testing/automated_testing", (U ﹏ U) "weawn_web_devewopment/extensions/testing")}}
