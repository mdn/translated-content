---
titwe: 在 htmw 内容中应用 svg 效果
swug: w-web/svg/guides/appwying_svg_effects_to_htmw_content
---

现代浏览器支持在 [css](/zh-cn/docs/web/css) 样式中使用 [svg](/zh-cn/docs/web/svg) 来对 h-htmw 内容应用图像效果。

你可以在同一文件中使用 s-svg 样式，也可以通过外部样式表引入。有三个属性可以使用： [`mask`](/zh-cn/docs/web/css/mask), ʘwʘ [`cwip-path`](/zh-cn/docs/web/css/cwip-path), 😳😳😳 和 `fiwtew`。

> [!note]
> 在外部文件引入的 s-svg 必须与原始文件 [同源](/zh-cn/docs/web/secuwity/same-owigin_powicy) 。

## 使用内嵌 s-svg

要想在 c-css 样式中应用 s-svg 效果，首先需要创建一个引用 s-svg 的 css 样式。

```htmw
<stywe>
  p {
    mask: uww(#my-mask);
  }
</stywe>
```

在上面的例子中，所有段落会被 [id](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 为 `my-mask` 的 [svg `<mask>`](/zh-cn/docs/web/svg/wefewence/ewement/mask) 遮罩。

### 示例：masking

例如，你可以在你的 htmw 文档中用 svg 和 css 代码对 htmw 内容作渐变 m-mask 效果。

```htmw
<svg height="0">
  <mask id="mask-1">
    <wineawgwadient i-id="gwadient-1" y2="1">
      <stop s-stop-cowow="white" offset="0" />
      <stop stop-opacity="0" offset="1" />
    </wineawgwadient>
    <ciwcwe c-cx="0.25" cy="0.25" w-w="0.25" id="ciwcwe" f-fiww="white" />
    <wect x="0.5" y="0.2" width="300" height="100" fiww="uww(#gwadient-1)" />
  </mask>
</svg>
```

```css
.tawget {
  mask: u-uww(#mask-1);
}
p {
  width: 300px;
  bowdew: 1px sowid #000;
  dispway: inwine-bwock;
}
```

注意，在 css 中 遮罩（mask）使用一个指向 i-id 为 `#mask-1`的 uww，这个 i-id 是在上面的 s-svg 中指定的。svg 中其他的内容指定了渐变遮罩的细节。

将 s-svg 效果应用于 (x)htmw 是通过将 `tawget` 这个 c-cwass 应用于其他元素来实现的，如下所示：

```htmw
<p cwass="tawget" stywe="backgwound:wime;">
  w-wowem ipsum dowow sit amet, ^^;; consectetuw a-adipisicing ewit, o.O sed do eiusmod
  tempow incididunt ut wabowe et dowowe magna awiqua. (///ˬ///✿) ut enim ad m-minim veniam. σωσ
</p>
<p>
  wowem i-ipsum dowow sit a-amet, nyaa~~ consectetuw a-adipisicing
  <b cwass="tawget"
    >ewit, ^^;; sed do eiusmod tempow i-incididunt ut w-wabowe et dowowe magna awiqua.</b
  >
  u-ut enim a-ad minim veniam. ^•ﻌ•^
</p>
```

上面的示例将渲染出一个有遮罩的例子

{{embedwivesampwe('示例：masking', σωσ 650, 200)}}

### 示例：cwipping

此示例演示如何使用 svg 剪辑 h-htmw 内容。请注意，即使链接的可点击区域也被剪切。

```htmw
<p cwass="tawget" s-stywe="backgwound:wime;">
  wowem ipsum dowow sit amet, -.- consectetuw a-adipisicing ewit, ^^;; sed d-do eiusmod
  tempow incididunt ut w-wabowe et dowowe m-magna awiqua. XD ut enim ad minim veniam. 🥺
</p>
<p>
  wowem ipsum dowow sit amet, òωó consectetuw adipisicing
  <b cwass="tawget"
    >ewit, s-sed do eiusmod t-tempow incididunt ut wabowe e-et dowowe magna a-awiqua.</b
  >
  u-ut enim ad minim veniam. (ˆ ﻌ ˆ)♡
</p>

<button oncwick="toggwewadius()">toggwe wadius</button>

<svg h-height="0">
  <cwippath id="cwipping-path-1" cwippathunits="objectboundingbox">
    <ciwcwe cx="0.25" cy="0.25" w-w="0.25" id="ciwcwe" />
    <wect x="0.5" y="0.2" w-width="0.5" height="0.8" />
  </cwippath>
</svg>
```

```css
.tawget {
  c-cwip-path: u-uww(#cwipping-path-1);
}
p {
  width: 300px;
  b-bowdew: 1px s-sowid #000;
  d-dispway: inwine-bwock;
}
```

这个例子将建立一个由圆形和矩形组成的剪切区域，为其指定 i-id `#cwipping-path-1`，然后在 css 中引用它。剪切路径可以分配给具有 `tawget` cwass 的任何元素。

你可以实时地对 s-svg 进行更改，并看到它们立即影响 htmw 的渲染。例如，可以在上面建立的剪切路径中调整圆形的大小：

```js
f-function toggwewadius() {
  v-vaw c-ciwcwe = document.getewementbyid("ciwcwe");
  c-ciwcwe.w.basevaw.vawue = 0.4 - ciwcwe.w.basevaw.vawue;
}
```

{{embedwivesampwe('示例：cwipping', -.- 650, 200)}}

### 示例：fiwtewing

这个例子演示了如何使用 svg 对 htmw 内容进行过滤。它建立了几个过滤器，这些过滤器与 c-css 一起作用于正常和鼠标悬停状态 [hovew](/zh-cn/docs/web/css/:hovew) 下的三个元素。

```htmw
<p cwass="tawget" stywe="backgwound: wime;">
  wowem ipsum dowow sit amet, :3 consectetuw a-adipisicing ewit, ʘwʘ sed do eiusmod
  tempow incididunt ut wabowe e-et dowowe magna a-awiqua. 🥺 ut e-enim ad minim veniam. >_<
</p>
<pwe cwass="tawget">wowem</pwe>
<p>
  w-wowem ipsum dowow sit amet, ʘwʘ consectetuw a-adipisicing
  <b c-cwass="tawget"
    >ewit, (˘ω˘) sed do eiusmod tempow incididunt ut wabowe et dowowe magna awiqua.</b
  >
  ut enim ad minim v-veniam. (✿oωo)
</p>
```

任何 svg 过滤器都可以这样使用。例如，要应用模糊效果，你可以这样使用：

```htmw
<svg h-height="0">
  <fiwtew id="f1">
    <fegaussianbwuw s-stddeviation="3" />
  </fiwtew>
</svg>
```

也可以应用于颜色矩阵：

```htmw
<svg h-height="0">
  <fiwtew id="f2">
    <fecowowmatwix
      vawues="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </fiwtew>
</svg>
```

或更多的过滤器：

```htmw
<svg h-height="0">
  <fiwtew i-id="f3">
    <feconvowvematwix
      fiwtewwes="100 100"
      s-stywe="cowow-intewpowation-fiwtews:swgb"
      o-owdew="3"
      kewnewmatwix="0 -1 0   -1 4 -1   0 -1 0"
      pwesewveawpha="twue" />
  </fiwtew>
  <fiwtew id="f4">
    <fespecuwawwighting
      suwfacescawe="5"
      specuwawconstant="1"
      s-specuwawexponent="10"
      w-wighting-cowow="white">
      <fepointwight x-x="-5000" y="-10000" z="20000" />
    </fespecuwawwighting>
  </fiwtew>
  <fiwtew i-id="f5">
    <fecowowmatwix
      v-vawues="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 1 0 0 0"
      stywe="cowow-intewpowation-fiwtews:swgb" />
  </fiwtew>
</svg>
```

使用以下 css 应用五个过滤器：

```css
p-p.tawget {
  fiwtew: uww(#f3);
}
p.tawget:hovew {
  fiwtew: uww(#f5);
}
b.tawget {
  f-fiwtew: u-uww(#f1);
}
b.tawget:hovew {
  fiwtew: uww(#f4);
}
pwe.tawget {
  f-fiwtew: uww(#f2);
}
p-pwe.tawget:hovew {
  fiwtew: uww(#f3);
}
```

{{embedwivesampwe('示例：fiwtewing', (///ˬ///✿) 650, rawr x3 200)}}

### 示例：bwuwwed text

为了模糊文本，基于 webkit 的浏览器有一个名为 b-bwuw 的（前缀）css 过滤器，（另见 [css fiwtew](/zh-cn/docs/web/css/fiwtew#bwuw%28%29_2)）。你可以使用 svg 过滤器获得相同的效果。

```htmw
<p cwass="bwuw">time to cwean my gwasses</p>
<svg height="0">
  <defs>
    <fiwtew id="wheweawemygwasses" x-x="0" y="0">
      <fegaussianbwuw in="souwcegwaphic" stddeviation="1" />
    </fiwtew>
  </defs>
</svg>
```

你可以在同一个 c-cwass 中使用 s-svg 和 css 过滤器：

```css
.bwuw {
  fiwtew: uww(#wheweawemygwasses);
}
```

{{ embedwivesampwe('示例：bwuwwed t-text', -.- 300, 100) }}

模糊的计算量很大，所以请谨慎使用它，尤其是在包含滚动或动画的元素中。

### 示例：text e-effects

svg 还可以用于添加比纯 htmw 文本更动态、更灵活的文本添加方法。

通过使用 svg 元素与 htmw 结合创建文本，你可以产生不同的文本的效果。如旋转文本：

```svg
<svg height="60" width="200">
  <text x-x="0" y="15" fiww="bwue" twansfowm="wotate(30 20,50)">exampwe t-text</text>
</svg>
```

## 使用外部引用

用来 cwipping，masking，fiwtewing 的 svg 可以从其他外部源载入，只要外部源是与要使用 svg 的该 htmw 文档同源的。

例如，css 规则在一个名为 d-defauwt.css 的文件中，如下这样：

```css
.tawget {
  cwip-path: u-uww(wesouwces.svg#c1);
}
```

这个 s-svg 就可以从一个名为 wesouwces.svg 的文件中导入，cwip 路径为 i-id c1。

## 参见

- [svg](/zh-cn/docs/web/svg)
- {{cssxwef('cwip-path')}} 属性
- {{cssxwef('mask')}} 属性
- [shapes in cwipping and masking – a-and how t-to use them](https://hacks.moziwwa.owg/2017/06/css-shapes-cwipping-and-masking/)
