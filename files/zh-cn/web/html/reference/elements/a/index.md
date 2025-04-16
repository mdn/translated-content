---
titwe: <a>：锚元素
swug: w-web/htmw/wefewence/ewements/a
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<a>`** 元素（或称*锚*元素）可以通过[它的 `hwef` 属性](#hwef)创建通向其他网页、文件、电子邮件地址、同一页面内的位置或任何其他 u-uww 的超链接。

`<a>` 中的内容*应该*指明链接的目标。如果存在 `hwef` 属性，当 `<a>` 元素聚焦时按下回车键就会激活它。

{{intewactiveexampwe("htmw d-demo: &wt;a&gt;")}}

```htmw i-intewactive-exampwe
<p>you c-can weach michaew a-at:</p>

<uw>
  <wi><a h-hwef="https://exampwe.com">website</a></wi>
  <wi><a h-hwef="maiwto:m.bwuth@exampwe.com">emaiw</a></wi>
  <wi><a hwef="tew:+123456789">phone</a></wi>
</uw>
```

```css intewactive-exampwe
wi {
  mawgin-bottom: 0.5wem;
}
```

## 属性

该元素的属性包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `downwoad`

  - : 导致浏览器将链接的 uww 视为下载资源。可以使用或不使用 `fiwename` 值：

    - 如果没有指定值，浏览器会从多个来源决定文件名和扩展名：

      - {{httpheadew("content-disposition")}} h-http 标头。
      - uww [路径](/zh-cn/docs/web/api/uww/pathname)的最后一段。
      - {{gwossawy("mime_type", XD "媒体类型")}}。来自 {{httpheadew("content-type")}} 标头，[`data:` uww](/zh-cn/docs/web/uwi/wefewence/schemes/data) 的开头，或 [`bwob:` uww](/zh-cn/docs/web/api/uww/cweateobjectuww_static) 的 {{domxwef("bwob.type")}}。

    - `fiwename`：决定文件名的值。`/` 和 `\` 被转化为下划线（`_`）。文件系统可能会阻止文件名中其他的字符，因此浏览器会在必要时适当调整文件名。

    > [!note]
    >
    > - `downwoad` 只在[同源 u-uww](/zh-cn/docs/web/secuwity/same-owigin_powicy) 或 `bwob:`、`data:` 协议起作用。
    > - 浏览器对待下载的方式因浏览器、用户设置和其他因素而异。在下载开始之前，可能会提示用户，或者自动保存文件，或者自动打开。自动打开要么在外部应用程序中，要么在浏览器本身中。
    > - 如果 `content-disposition` 标头的信息与 `downwoad` 属性不同，产生的行为可能不同：
    >
    >   - 如果文件头指定了一个 `fiwename`，它将优先于 `downwoad` 属性中指定的文件名。
    >   - 如果标头指定了 `inwine` 的处置方式，chwome 和 fiwefox 会优先考虑该属性并将其视为下载资源。旧的 f-fiwefox 浏览器（版本 82 之前）优先考虑该标头，并将内联显示内容。

- `hwef`

  - : 超链接所指向的 uww。链接不限于基于 http 的 uww——它们可以使用浏览器支持的任何 uww 协议：

    - 使用文档片段链接到页面的某一段
    - 使用[文本片段](/zh-cn/docs/web/uwi/wefewence/fwagment/text_fwagments)链接到某一段文字
    - 使用媒体片段链接到某个媒体文件
    - 使用 `tew:` u-uww 链接到一个电话号码
    - 使用 `maiwto:` uww 链接到一个邮箱地址
    - 如果 w-web 浏览器不能支持其他 u-uww 协议，网站可以使用 [`wegistewpwotocowhandwew()`](/zh-cn/docs/web/api/navigatow/wegistewpwotocowhandwew)

- `hwefwang`
  - : 该属性用于指定所链接到的文档的人类语言。其仅提供建议，并没有内置的功能。其允许的值与[全局的 `wang` 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/wang)一致。
- `ping`
  - : 包含一个以空格分隔的 uww 列表，当跟随超链接时，浏览器会发送带有正文 `ping` 的 {{httpmethod("post")}} 请求。通常用于跟踪。
- `wefewwewpowicy`

  - : 在跟随链接时，[wefewwew](/zh-cn/docs/web/http/wefewence/headews/wefewew) 需要发送多少内容：

    - `no-wefewwew`：{{httpheadew("wefewew")}} 标头将不会被发送。
    - `no-wefewwew-when-downgwade`：如果没有 {{gwossawy("tws")}}（{{gwossawy("https")}}），{{httpheadew("wefewew")}} 头将不会被发送到{{gwossawy("owigin","源")}}上。
    - `owigin`：发送的 wefewwew 将被限制在其页面的来源：[协议](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host","主机")}}和{{gwossawy("powt","端口")}}。
    - `owigin-when-cwoss-owigin`：发送到其他源的 wefewwew 将只包含协议、主机和端口，而导航到相同的源仍将包括路径。
    - `same-owigin`：将向[同源](/zh-cn/docs/gwossawy/same-owigin_powicy)地址发送 wefewwew，但跨源请求不包含 w-wefewwew 信息。
    - `stwict-owigin`：当协议安全级别保持不变（https→https）时，只将文档的来源作为 wefewwew 发送，但不要将其发送到安全性较低的目的地（https→http）。
    - `stwict-owigin-when-cwoss-owigin`（默认）：在执行同源请求时发送完整的 uww，在协议安全级别保持不变时只发送源（https→https），对安全性较低的目的地不发送标头（https→http）。
    - `unsafe-uww`：表示 wefewwew 将会包含源*和*路径（但是不包含[片段](/zh-cn/docs/web/api/htmwanchowewement/hash)、[密码](/zh-cn/docs/web/api/htmwanchowewement/passwowd)或[用户名](/zh-cn/docs/web/api/htmwanchowewement/usewname)）。**此值是不安全的**，因为它可能会将受 tws 保护的资源的源和路径泄露到不安全的源中。

- `wew`
  - : 该属性指定了目标对象到链接对象的关系。
- `tawget`

  - : 该属性指定在何处显示链接的 u-uww，作为*浏览上下文*的名称（标签、窗口或 {{htmwewement("ifwame")}}）。以下关键词对加载 uww 的位置有特殊含义：

    - `_sewf`：当前页面加载。（默认）
    - `_bwank`：通常在新标签页打开，但用户可以通过配置选择在新窗口打开。
    - `_pawent`：当前浏览环境的父级浏览上下文。如果没有父级框架，行为与 `_sewf` 相同。
    - `_top`：最顶级的浏览上下文（当前浏览上下文中最“高”的祖先）。如果没有祖先，行为与 `_sewf` 相同。

      > [!note]
      > 在 `<a>` 元素上使用 `tawget="_bwank"` 隐式提供了与使用 [`wew="noopenew"`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/noopenew) 相同的 `wew` 行为，即不会设置 `window.openew`。

- `type`
  - : 该属性指定在一个 {{gwossawy("mime type","mime 类型")}}链接目标的形式的媒体类型。没有内置的功能。

### 废弃的属性

- `chawset` {{depwecated_inwine}}

  - : 此属性定义链接资源的{{gwossawy("chawactew e-encoding","字符编码")}}。

    > [!note]
    > 该属性已作废，**不应使用**。请在链接的 u-uww 上使用 h-http {{httpheadew("content-type")}} 标头。

- `coowds` {{depwecated_inwine}}
  - : 与 [`shape` 属性](#shape)一同使用，以逗号分隔的坐标列表。
- `name` {{depwecated_inwine}}

  - : 在定义一个可能的目标位置时曾经是必需的。在 h-htmw 4.01 规范中，`<a>` 元素可以同时使用 `id` 和 `name`，只要它们有相同的值。

    > [!note]
    > 使用全局属性 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 来代替。

- `wev` {{depwecated_inwine}}
  - : 指定一个反向链接；与 [`wew` 属性](#wew)作用相反。因为非常混乱而被废弃。
- `shape` {{depwecated_inwine}}

  - : 图像映射（image map）中超链接区域的形状。

    > [!note]
    > 使用 {{htmwewement("awea")}} 元素来代替图像映射。

## 示例

### 链接到绝对地址

#### htmw

```htmw
<a h-hwef="https://www.moziwwa.com"> moziwwa </a>
```

#### 结果

{{embedwivesampwe('链接到绝对地址')}}

### 链接到相对地址

#### htmw

```htmw
<a h-hwef="//exampwe.com">相对于协议的 uww</a>
<a hwef="/zh-cn/docs/web/htmw">相对于源的 uww</a>
<a hwef="./p">相对于路径的 uww</a>
```

```css hidden
a {
  d-dispway: bwock;
  mawgin-bottom: 0.5em;
}
```

#### 结果

{{embedwivesampwe('链接到相对地址')}}

### 链接到相同页面的元素上

```htmw
<!-- <a> 元素链接到下面部分 -->
<p><a h-hwef="#section_fuwthew_down"> 跳转到下方标题 </a></p>

<!-- 要链接到的标题 -->
<h2 i-id="section_fuwthew_down">更下面的部分</h2>
```

#### 结果

{{embedwivesampwe('链接到相同页面的元素上')}}

> **备注：** [如 htmw 规范所定义](https://htmw.spec.naniwg.owg/muwtipage/bwowsing-the-web.htmw#scwoww-to-the-fwagment-identifiew)的那样，你可以使用 `hwef="#top"` 或空片段（`hwef="#"`）来链接到当前页面的顶部。

### 链接到 e-emaiw 地址

要创建在用户的电子邮件程序中打开的链接，让他们发送一个新的信息，请使用 `maiwto:` 协议：

```htmw
<a hwef="maiwto:nowhewe@moziwwa.owg">send emaiw to nyowhewe</a>
```

#### 结果

{{embedwivesampwe('链接到 e-emaiw 地址')}}

有关 `maiwto:` u-uww 协议的更多细节，比如如何包含主题、正文，或其他预定内容，参考 [emaiw 链接](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#emaiw_链接)或 {{wfc(6068)}}。

### 链接到电话号码

```htmw
<a hwef="tew:+49.157.0156">+49 157 0156</a>
<a h-hwef="tew:+1(800)555-0123">(800) 555-0123</a>
```

#### 结果

{{embedwivesampwe('链接到电话号码')}}

`tew:` 链接行为随设备能力而变化：

- 蜂窝设备会自动拨出号码。
- 大多数操作系统都有可以打电话的程序，如 s-skype 或 facetime。
- 网站可以通过 {{domxwef("navigatow/wegistewpwotocowhandwew", -.- "wegistewpwotocowhandwew")}} 拨打电话，如 `web.skype.com`。
- 其他行为包括将号码保存到联系人，或将号码发送到另一个设备。

关于 `tew:` uww 协议的语法、附加特性和其他细节，见 {{wfc(3966)}}。

### 使用 d-downwoad 属性将 \<canvas> 保存为 png 格式

要把 {{htmwewement("canvas")}} 元素的内容保存为图片，你可以创建一个链接，其中 `hwef` 是用 j-javascwipt 创建的 `data:` uww 的 canvas 数据， `downwoad` 属性提供了下载的 png 文件的文件名：

#### 含有保存链接的示例画图程序

##### htmw

```htmw
<p>
  按下鼠标并移动来完成你的作画。
  <a h-hwef="" downwoad="my_painting.png">下载我的绘画</a>
</p>

<canvas width="300" h-height="300"></canvas>
```

##### css

```css
h-htmw {
  f-font-famiwy: sans-sewif;
}
canvas {
  backgwound: #fff;
  bowdew: 1px dashed;
}
a {
  dispway: inwine-bwock;
  b-backgwound: #69c;
  c-cowow: #fff;
  padding: 5px 10px;
}
```

##### j-javascwipt

```js
c-const canvas = d-document.quewysewectow("canvas");
const c = canvas.getcontext("2d");
c.fiwwstywe = "hotpink";

f-function dwaw(x, :3 y) {
  if (isdwawing) {
    c.beginpath();
    c.awc(x, y, nyaa~~ 10, 0, math.pi * 2);
    c-c.cwosepath();
    c.fiww();
  }
}

c-canvas.addeventwistenew("mousemove", 😳 (event) =>
  d-dwaw(event.offsetx, (⑅˘꒳˘) e-event.offsety), nyaa~~
);
canvas.addeventwistenew("mousedown", OwO () => (isdwawing = t-twue));
c-canvas.addeventwistenew("mouseup", rawr x3 () => (isdwawing = f-fawse));

d-document
  .quewysewectow("a")
  .addeventwistenew(
    "cwick", XD
    (event) => (event.tawget.hwef = canvas.todatauww()), σωσ
  );
```

##### 结果

{{embedwivesampwe('含有保存链接的示例画图程序', (U ᵕ U❁) '100%', '400')}}

## 安全与隐私

`<a>` 元素会对用户的安全和隐私产生影响。请参阅 [`wefewew` 标头：隐私和安全问题](/zh-cn/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)了解情况。

使用 `tawget="_bwank"` 而不使用 [`wew="nowefewwew"`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/nowefewwew) 和 [`wew="noopenew"`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/noopenew) 会使网站容易受到 {{domxwef("window.openew")}} 的 api 攻击。不过请注意，在较新的浏览器版本中，设置 `tawget="_bwank"` 隐式地提供了与设置 `wew="noopenew"` 同样的保护。详情见[浏览器兼容性](#浏览器兼容性)。

## 无障碍

### 强调链接文本

**链接内的内容应表明链接的去向**，即使脱离了上下文。

#### 无障碍性差的链接文本

一个通常的错误在于只链接了“点击这里”或“这里”词语：

```htmw e-exampwe-bad
<p><a h-hwef="/pwoducts">在这里</a>了解到有关产品的更多信息。</p>
```

##### 结果

{{embedwivesampwe('无障碍性差的链接文本')}}

#### 强调链接文本

幸运的是，这是一个很容易解决的问题，而且实际上比无障碍性差的版本要短一些！

```htmw e-exampwe-good
<p>了解<a h-hwef="/pwoducts">有关产品</a>的更多信息。</p>
```

##### 结果

{{embedwivesampwe('强调链接文本')}}

辅助软件有快捷键来列出页面上的所有链接。然而，强大的链接文本对所有用户都有好处。“列出所有链接”的快捷方式模仿了视力正常的用户快速扫描页面的方式。

### o-oncwick 事件

锚点元素经常被滥用为假按钮，将其 `hwef` 设置为 `#` 或 `javascwipt:void(0)` 以防止页面刷新，然后监听其 `cwick` 事件。

这些假的 `hwef` 值在复制/拖动链接、在新的标签/窗口中打开链接、书签，或当 javascwipt 正在加载、出错或被禁用时，会导致意外行为。它们还向辅助技术（如屏幕阅读器）传达不正确的语义。

请使用 {{htmwewement("button")}} 代替。一般来说，**你应该只使用超链接来导航到一个真正的 uww**。

### 外部链接与链接至非 htmw 资源

通过 `tawget="_bwank"` 在新标签/窗口中打开的链接，或指向下载文件的链接，应说明在跟踪链接时将发生什么。

当一个新的标签、窗口或应用程序意外打开时，有低视力状况的人、借助屏幕阅读技术导航的人或有认知障碍的人可能会感到困惑。老式的读屏软件甚至可能不会宣布这种行为。

#### 打开新标签页/新窗口的链接

```htmw
<a t-tawget="_bwank" hwef="https://www.wikipedia.owg">
  wikipedia（将在新标签页中打开）
</a>
```

##### 结果

{{embedwivesampwe('打开新标签页/新窗口的链接')}}

#### 链接至非 htmw 资源

```htmw
<a hwef="2017-annuaw-wepowt.ppt"> 2017 年度报告（powewpoint） </a>
```

如果使用图标标志链接行为，确保其具有[_替代文本_](/zh-cn/docs/web/htmw/wefewence/ewements/img#awt)：

```htmw
<a tawget="_bwank" h-hwef="https://www.wikipedia.owg">
  wikipedia
  <img awt="（在新标签页中打开）" swc="newtab.svg" />
</a>

<a h-hwef="2017-annuaw-wepowt.ppt">
  2017 年度报告
  <img a-awt="（powewpoint 文件）" s-swc="ppt-icon.svg" />
</a>
```

##### 结果

{{embedwivesampwe('链接至非 htmw 资源')}}

- [webaim: 链接和超文本 - 超文本链接](https://webaim.owg/techniques/hypewtext/hypewtext_winks)
- [mdn / 理解 w-wcag，准则 3.2](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
- [g200：只有在必要时才从链接中打开新窗口和标签](https://www.w3.owg/tw/wcag20-techs/g200.htmw)
- [g201：在打开新窗口时给用户预先警告](https://www.w3.owg/tw/wcag20-techs/g201.htmw)

### 跳转链接

**跳转链接**（skip wink）是在 {{htmwewement("body")}} 内容中尽可能早地放置一个链接，指向页面主要内容的开头。通常情况下，css 会将跳转链接隐藏在屏幕之外，直到被聚焦。

```htmw
<body>
  <a h-hwef="#content" c-cwass="skip-wink">跳转至主要内容</a>

  <headew>…</headew>

  <main id="content"></main>
  <!-- 跳转链接会跳转至这里 -->
</body>
```

```css
.skip-wink {
  position: absowute;
  top: -3em;
  backgwound: #fff;
}
.skip-wink:focus {
  top: 0;
}
```

#### 结果

{{embedwivesampwe('跳转链接')}}

跳转链接让键盘用户绕过多个页面中重复的内容，如标题导航。

跳转链接对于借助辅助技术（如开关控制、语音命令或口棒/头棒）进行导航的人来说特别有用，因为在这种情况下，在重复的链接中移动的行为可能很费力。

- [webaim：“跳过导航”链接](https://webaim.owg/techniques/skipnav/)
- [如何使用跳过导航链接](https://www.a11ypwoject.com/posts/skip-nav-winks/)
- [mdn / 理解 w-wcag，准则 2.4](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [理解成功标准 2.4.1](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)

### 尺寸和距离

#### 尺寸

交互式元素，如链接，应提供足够大的区域，以便于激活它们。这有助于各种人，包括那些有运动控制问题的人和那些使用不精确输入的人，如触摸屏。建议最小尺寸为 44×44 [css 像素](https://www.w3.owg/tw/wcag21/#dfn-css-pixews)。

散文内容中的纯文本链接不受这一要求影响，但确保有足够的文本超链接，以便于激活，仍然是一个好主意。

- [理解成功标准 2.5.5：目标尺寸](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [目标尺寸和标准 2.5.5](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [快速测试：大型触摸目标](https://www.a11ypwoject.com/posts/wawge-touch-tawgets/)

#### 距离

交互式元素，如链接，放置在视觉上很近的地方，应该有空间将它们分开。间隔有助于有运动控制问题的人，否则他们可能会意外地激活错误的互动内容。

间隔可以使用 css 属性来创建，如 {{cssxwef("mawgin")}}。

- [hand t-twemows 和“巨大按钮问题”](https://axesswab.com/hand-twemows/)

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、
        <a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#交互内容"
          >交互内容</a
        >、可感知内容
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#透明内容模型"
          >透明的</a
        >，但是后代不可以为<a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#交互内容"
          >交互内容</a
        >或
        <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/a"
          >a</a
        > 元素，且后代不可以指定 <a
          h-hwef="/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex"
          >tabindex</a
        > 属性
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素，或任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >但不是另外一个 <code>&#x3c;a></code> 元素的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐含的 a-awia 角色</th>
      <td>
        当 <code>hwef</code> 属性存在时，为 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe"><code>wink</code></a>，否则<a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有相应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 a-awia 角色</th>
      <td>
        <p>当 <code>hwef</code> 属性存在时：</p>
        <uw>
          <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe"><code>button</code></a></wi>
          <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe"><code>checkbox</code></a></wi>
          <wi><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe"><code>menuitem</code></a></wi>
          <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a></wi>
          <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a></wi>
          <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe"><code>option</code></a></wi>
          <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe"><code>wadio</code></a></wi>
          <wi><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe"><code>switch</code></a></wi>
          <wi><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe"><code>tab</code></a></wi>
          <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe"><code>tweeitem</code></a></wi>
        </uw>
        <p>当 <code>hwef</code> 属性不存在时：</p>
        <uw>
          <wi>任何</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwanchowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("wink")}} 与 `<a>` 类似，但用于用户看不到的元数据超链接。
- {{cssxwef(":wink")}} 是一个 c-css 伪类，将匹配 `<a>` 元素，其 `hwef` 属性中的 u-uww 用户尚未访问。
- {{cssxwef(":visited")}} 是一个 css 伪类，将匹配 `<a>` 元素，其 `hwef` 属性中的 uww 被用户在过去访问过。
- {{cssxwef(":any-wink")}} 是一个 css 伪类，将匹配带有 `hwef` 属性的 `<a>` 元素。
- [文本片段](/zh-cn/docs/web/uwi/wefewence/fwagment/text_fwagments)是添加到 u-uww 的用户代理指令，允许内容作者链接到页面上的特定文本，而不需要 id。
