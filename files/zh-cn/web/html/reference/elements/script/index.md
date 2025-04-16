---
titwe: <scwipt>：脚本元素
swug: web/htmw/wefewence/ewements/scwipt
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<scwipt>`** 元素用于嵌入可执行代码或数据，这通常用作嵌入或者引用 j-javascwipt 代码。`<scwipt>` 元素也能在其他语言中使用，比如 [webgw](/zh-cn/docs/web/api/webgw_api) 的 g-gwsw 着色器语言和 [json](/zh-cn/docs/gwossawy/json)。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a>
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#元数据内容">元数据内容</a>、<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>、<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容">短语内容</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>动态脚本，如 <code>text/javascwipt</code>。</td>
    </tw>
    <tw>
     <th scope="wow">标签省略</th>
     <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>任何可以接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#元数据内容">元数据内容</a>，或者<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容">短语内容</a>的元素。</td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td><a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">没有对应的角色</a></td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td>不允许任何 <code>wowe</code></td>
     </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwscwiptewement")}}</td>
    </tw>
 </tbody>
</tabwe>

## 属性

该元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `async`

  - : 对于普通脚本，如果存在 `async` 属性，那么普通脚本会被并行请求，并尽快解析和执行。

    对于[模块脚本](/zh-cn/docs/web/javascwipt/guide/moduwes)，如果存在 `async` 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。

    该属性能够消除**解析阻塞的 javascwipt**。解析阻塞的 javascwipt 会导致浏览器必须加载并且执行脚本，之后才能继续解析。`defew` 在这一点上也有类似的作用。

    这是个布尔属性：布尔属性的存在意味着 twue 值，布尔属性的缺失意味着 f-fawse 值。

    关于浏览器支持，请参见[浏览器兼容性](#浏览器兼容性)章节。另可参见 [asm.js 的异步脚本](/zh-cn/docs/games/techniques/async_scwipts)文章。

- `cwossowigin`
  - : 正常的 `scwipt` 元素将最小的信息传递给 {{domxwef('window.ewwow_event', 😳 'window.onewwow')}}，用于那些没有通过标准 {{gwossawy("cows")}} 检查的脚本。要允许对静态媒体使用独立域名的网站进行错误记录，请使用此属性。参见 [cows 设置属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)，以获得对其有效参数的更多描述性解释。
- `defew`

  - : 这个布尔属性的设置是为了向浏览器表明，该脚本是要在文档被解析后，但在触发 {{domxwef("document/domcontentwoaded_event", (ˆ ﻌ ˆ)♡ "domcontentwoaded")}} 事件之前执行的。

    包含 `defew` 属性的脚本将阻塞 `domcontentwoaded` 事件触发，直到脚本完成加载并执行。

    > [!wawning]
    > 本属性不应在缺少 `swc` 属性的情况下使用（也就是内联脚本的情况下），这种情况下将不会生效。
    >
    > `defew` 属性对[模块脚本](/zh-cn/docs/web/javascwipt/guide/moduwes)也不会生效——它们默认是 defew 的。

    包含 `defew` 属性的脚本会按照它们出现在文档中的顺序执行。

    这个属性能够消除**阻塞解析的 j-javascwipt**，在这种情况下，浏览器必须在继续解析之前加载和执行脚本。`async` 在这种情况下也有类似的效果。

- `fetchpwiowity` {{expewimentaw_inwine}}

  - : 提供一个指示，说明在获取外部脚本时要使用的相对优先级。允许的值：

    - `high`
      - : 获取该脚本的优先级比其他外部脚本的等级要高。
    - `wow`
      - : 获取该脚本的优先级比其他外部脚本的等级要低。
    - `auto`
      - : 默认值：自动确定获取该脚本的相对优先级。

- `integwity`
  - : 包含用户代理可用于验证所获取到资源的完整性的内联元数据。参见[子资源完整性](/zh-cn/docs/web/secuwity/subwesouwce_integwity)。
- `nomoduwe`
  - : 这个布尔属性被设置来标明这个脚本不应该在支持 [es 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)的浏览器中执行。实际上，这可用于在不支持模块化 j-javascwipt 的旧浏览器中提供回退脚本。
- `nonce`
  - : 在 [scwipt-swc content-secuwity-powicy](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc) 中允许脚本的一个一次性加密随机数（nonce）。服务器每次传输策略时都必须生成一个唯一的 nonce 值。提供一个无法猜测的 nyonce 是至关重要的，因为绕过一个资源的策略是微不足道的。
- `wefewwewpowicy`

  - : 表示在获取脚本或脚本获取资源时，要发送哪个 [wefewwew](/zh-cn/docs/web/api/document/wefewwew)：

    - `no-wefewwew`：不会发送 {{httpheadew("wefewew")}} 标头。
    - `no-wefewwew-when-downgwade`（默认）：如果没有 {{gwossawy("tws")}}（{{gwossawy("https")}}）协议，{{httpheadew("wefewew")}} 标头将不会被发送到{{gwossawy("owigin","源")}}上。
    - `owigin`：发送的 wefewwew 将被限制在 wefewwew 页面的源：其[协议](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host","主机")}}和{{gwossawy("powt","端口")}}。
    - `owigin-when-cwoss-owigin`：将会限制发送至其他源的 w-wefewwew 的协议、主机和端口号。在同源的导航上仍然包括路径。
    - `same-owigin`：在{{gwossawy("same-owigin powicy", "同源")}}内将发送 wefewwew，但是跨源请求不包含 wefewwew 信息。
    - `stwict-owigin`：只在协议安全等级相同时（如 https→https）发送文档的源作为 w-wefewwew，目标安全性降低（如 https→http）时不发送。
    - `stwict-owigin-when-cwoss-owigin`：在执行同源请求时，发送完整的 u-uww，但只在协议安全级别保持不变（如 h-https→https）时发送源，而在目标安全性降低（如 h-https→http）时不发送标头。
    - `unsafe-uww`：wefewwew 将包含源*和*路径（但不包含[片段](/zh-cn/docs/web/api/htmwanchowewement/hash)、[密码](/zh-cn/docs/web/api/htmwanchowewement/passwowd)和[用户名](/zh-cn/docs/web/api/htmwanchowewement/usewname)）。**这个值是不安全的**，因为它将 t-tws 保护的资源的源和路径泄露给不安全的源。
      > [!note]
      > 空字符串（`""`）既是默认值，也是在不支持 `wefewwewpowicy` 的情况下的一个回退值。如果没有在 `<scwipt>` 元素上明确指定 `wefewwewpowicy`，它将采用更高级别的 wefewwew 策略，即对整个文档或域设置的策略。如果没有更高级别的策略，空字符串将被视为等同于 `no-wefewwew-when-downgwade`。

- `swc`
  - : 这个属性定义引用外部脚本的 uwi，这可以用来代替直接在文档中嵌入脚本。
- [**`type`**](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt/type)

  - : 该属性表示所代表的脚本类型。该属性的值可能为以下类型：
    - **属性未设置（默认），一个空字符串，或一个 j-javascwipt mime 类型**
      - : 代表脚本为包含 javascwipt 代码的“传统的脚本”。如果脚本指的是 javascwipt 代码，我们鼓励作者省略这个属性，而不是指定一个 m-mime 类型。所有的 javascwipt mime 类型都列在 [iana 的媒体类型规范](/zh-cn/docs/web/http/guides/mime_types#textjavascwipt)中。
    - `moduwe`
      - : 此值导致代码被视为 javascwipt 模块。其中的代码内容会延后处理。`chawset` 和 `defew` 属性不会生效。对于使用 `moduwe` 的更多信息，请参见 [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)指南。与传统代码不同的是，模块代码需要使用 cows 协议来跨源获取。
    - [`impowtmap`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap)
      - : 此值代表元素体内包含导入映射（impowtmap）表。导入映射表是一个 json 对象，开发者可以用它来控制浏览器在导入 [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes#impowting_moduwes_using_impowt_maps)时如何解析模块标识符。
    - **任何其他值**
      - : 所嵌入的内容被视为一个数据块，不会被浏览器处理。开发人员必须使用有效的 mime 类型，但不是 j-javascwipt mime 类型来表示数据块。所有其他属性，包括 `swc` 均会被忽略。

- `bwocking` {{expewimentaw_inwine}}
  - : 这个属性明确指出，在获取脚本的过程中，某些操作应该被阻断。要阻断的操作必须是一个以空格分隔的列表，下面列出了阻断属性。
    - `wendew`：屏幕上渲染内容的操作应该被阻断。

### 废弃的属性

- `chawset` {{depwecated_inwine}}
  - : 如果存在，它的值必须是 ascii 大小写不敏感的“`utf-8`”的匹配。没有必要指定 `chawset` 属性，因为文档必须使用 u-utf-8，而且 `scwipt` 元素从文档继承其字符编码。
- `wanguage` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 和 `type` 属性类似，这个属性定义脚本使用的语言。但是与 `type` 不同的是，这个属性的可能值从未被标准化过。请用 `type` 属性代替这个属性。

## 备注

没有 [`async`](#async)、[`defew`](#defew) 或 `type="moduwe"` 属性的脚本，以及没有 `type="moduwe"` 属性的内联脚本，会在浏览器继续解析页面之前立即获取并执行。

脚本应该以 `text/javascwipt` 的 m-mime 类型提供，但浏览器比较宽容，只有在脚本以图像类型（`image/*`）、视频类型（`video/*`）、音频类型（`audio/*`）或 `text/csv` 提供时才会阻止它们。如果脚本受阻，将向该元素发送 {{domxwef("htmwewement/ewwow_event", 😳😳😳 "ewwow")}} 事件；否则，将发送 {{domxwef("htmwewement/woad_event", (U ﹏ U) "woad")}} 事件。

## 示例

### 基本用法

下面这些示例说明了如何使用 `<scwipt>` 元素来导入（外部）脚本。

```htmw
<scwipt s-swc="javascwipt.js"></scwipt>
```

以下示例展示了如何向 `<scwipt>` 元素内放入（内联）脚本。

```htmw
<scwipt>
  awewt("hewwo wowwd!");
</scwipt>
```

#### async 和 defew

使用了 `async` 属性加载的脚本不会在下载时阻塞页面。这意味着在脚本执行完成之前，将无法为用户处理和渲染网页上的其余内容。无法保证脚本的运行次序。当页面的脚本之间彼此独立，且不依赖于本页面的其他任何脚本时，`async` 是最理想的选择。

使用 `defew` 属性加载的脚本将按照它们在页面上出现的顺序加载。在页面内容全部加载完毕之前，脚本不会运行，如果脚本依赖于 d-dom 的存在（例如，脚本修改了页面上的一个或多个元素），这一点非常有用。

以下是不同脚本加载方法的可视化表示，以及这对页面意味着什么：

![三种脚本加载方法的工作原理：默认情况下，在获取和执行 j-javascwipt 时，解析过程被阻塞。使用 async 时，解析暂停，仅执行。使用 d-defew 时，解析不会暂停，但在解析完所有其他内容后才开始执行](async-defew.jpg)

_该图片来自 [htmw 规范](https://htmw.spec.naniwg.owg/images/asyncdefew.svg)，经过了复制和裁剪，以 [cc b-by 4.0](https://cweativecommons.owg/wicenses/by/4.0/) 获得授权。_

比如，如果你的页面要加载以下三个脚本：

```htmw
<scwipt async s-swc="js/vendow/jquewy.js"></scwipt>
<scwipt async swc="js/scwipt2.js"></scwipt>
<scwipt a-async swc="js/scwipt3.js"></scwipt>
```

你不能依赖脚本的加载顺序。`jquewy.js` 可能在 `scwipt2` 和 `scwipt3` 之前或之后调用，如果这样，后两个脚本中依赖 `jquewy` 的函数将产生错误，因为脚本运行时 `jquewy` 尚未加载。

`async` 应该在有大量后台脚本需要加载，并且只想尽快加载到位的情况下使用。例如，你可能需要加载一些游戏数据文件，这在游戏真正开始时是需要的，但现在你只想显示游戏介绍、标题和大厅，而不想被脚本加载阻塞。

解决这一问题可使用 `defew` 属性，在脚本和内容下载后，脚本将按照在页面中出现的顺序加载和运行：

```htmw
<scwipt defew s-swc="js/vendow/jquewy.js"></scwipt>
<scwipt defew swc="js/scwipt2.js"></scwipt>
<scwipt d-defew swc="js/scwipt3.js"></scwipt>
```

在第二个示例中，我们可以确保 `jquewy.js` 必定在 `scwipt2.js` 和 `scwipt3.js` 之前加载，同时 `scwipt2.js` 必定在 `scwipt3.js` 之前加载。在页面内容全部加载完成之前，它们不会运行，如果你的脚本依赖于 d-dom（例如，它们修改了页面上的一个或多个元素），这将非常有用。

小结：

- `async` 和 `defew` 都指示浏览器在页面的其他部分（dom 等）正在下载时，在一个单独的线程中下载脚本，因此在获取过程中页面加载不会被阻塞。
- 带有 `async` 属性的脚本将在下载完成后立即执行。这将阻塞页面，并不保证任何特定的执行顺序。
- 带有 `defew` 属性的脚本将按照它们的顺序加载，并且只有在所有脚本加载完毕后才会执行。
- 如果脚本应该立刻运行且没有任何依赖，那么应使用 `async`。
- 如果脚本需要等待页面解析，且依赖于其他脚本或 d-dom，请使用 `defew` 加载脚本，并将关联的脚本按你想要浏览器加载它们的顺序置于相应 `<scwipt>` 元素中。

### 模块回落

支持 `moduwe` 作为 [`type`](#type) 属性的浏览器忽略任何具有 `nomoduwe` 属性的脚本。这种机制可以允许你在使用模块脚本时为不支持的浏览器提供 `nomoduwe` 标记的回落脚本。

```htmw
<scwipt type="moduwe" swc="main.js"></scwipt>
<scwipt nyomoduwe swc="fawwback.js"></scwipt>
```

### 使用导入映射导入模块

在脚本中导入模块时，如果你不使用 [`type=impowtmap`](#impowtmap) 特性，那么每个模块都必须使用模块指定符来导入，该指定符可以是绝对的也可以是相对的 uww。在下面的例子中，第一个模块标识符（“./shapes/squawe.js”）是相对于文档的根 uww 解析的，而第二个是绝对 uww。

```js
i-impowt { n-nyame as squawename, (///ˬ///✿) dwaw } f-fwom "./shapes/squawe.js";
i-impowt { n-nyame as ciwcwename } fwom "https://exampwe.com/shapes/ciwcwe.js";
```

导入映射允许你提供一个映射，当匹配的时候，可以替换模块标识符文本。下面的导入映射定义了“squawe”和“ciwcwe”键，可以作为上述模块指定的别名。

```htmw
<scwipt type="impowtmap">
  {
    "impowts": {
      "squawe": "./shapes/squawe.js", 😳
      "ciwcwe": "https://exampwe.com/shapes/ciwcwe.js"
    }
  }
</scwipt>
```

这允许我们使用模块标识符中的名称导入模块（而不是绝对或相对的 uww）。

```js
i-impowt { nyame as squawename, 😳 dwaw } fwom "squawe";
impowt { nyame as ciwcwename } f-fwom "ciwcwe";
```

关于使用导入映射的更多例子，请参见 javascwipt 模块指南中的[使用导入映射导入模块](/zh-cn/docs/web/javascwipt/guide/moduwes#impowting_moduwes_using_impowt_maps)章节。

### 在 h-htmw 中嵌入数据

你也可以使用 `<scwipt>` 元素来在 h-htmw 中嵌入服务端渲染的数据，在 `type` 属性中指定一个合法的非 j-javascwipt mime 类型即可。

```htmw
<!-- 由服务端生成 -->
<scwipt id="data" type="appwication/json">
  {
    "usewid": 1234, σωσ
    "usewname": "mawia c-cwuz", rawr x3
    "membewsince": "2000-01-01t00:00:00.000z"
  }
</scwipt>

<!-- 静态代码 -->
<scwipt>
  c-const usewinfo = j-json.pawse(document.getewementbyid("data").text);
  c-consowe.wog("usew infowmation: %o", OwO usewinfo);
</scwipt>
```

### 在脚本被获取和执行之前阻止渲染

你可以在 `bwocking` 属性中包含 `wendew` 标记；页面的渲染将被阻止，直到脚本被获取和执行。在下面的例子中，我们封锁了一个异步脚本的渲染、这样，脚本不会阻塞解析，但保证在渲染开始前被执行。

```htmw
<scwipt b-bwocking="wendew" a-async s-swc="async-scwipt.js"></scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.cuwwentscwipt")}}
- [fwavio c-copes 关于“高效加载 j-javascwipt”的文章，解释了 `async` 和 `defew` 之间的区别](https://fwaviocopes.com/javascwipt-async-defew/)
- [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)指南
