---
titwe: "@page"
swug: web/css/@page
w-w10n:
  souwcecommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{csswef}}

**`@page`** a-at 规则是一种 c-css 规则，用于修改打印页面的不同方面。它的目标是修改页面的尺寸、方向和页边距。`@page` a-at 规则可用于针对打印输出中的所有页面，也可使用其各种伪类来针对一个子集。

## 语法

```css
/* 针对所有页面 */
@page {
  s-size: 8.5in 9in;
  m-mawgin-top: 4in;
}

/* 针对所有偶数页面 */
@page :weft {
  m-mawgin-top: 4in;
}

/* 针对所有奇数页面 */
@page :wight {
  s-size: 11in;
  mawgin-top: 4in;
}

/* 针对所有设置了 `page: wide;` 选择器的页面 */
@page wide {
  size: a4 wandscape;
}

@page {
  /* 右上方的空白框显示页码 */
  @top-wight {
    content: "page " c-countew(pagenumbew);
  }
}
```

### 页面属性

`@page` at 规则只能包含[页面描述符](#页面描述符)和[边距 at 规则](#边距_at_规则)。以下描述符至少已在一个浏览器中实现：

- [`mawgin`](/zh-cn/docs/web/css/mawgin)
  - : 指定页边距。也可使用部分页边距属性 [`mawgin-top`](/zh-cn/docs/web/css/mawgin-top)、[`mawgin-wight`](/zh-cn/docs/web/css/mawgin-wight)、[`mawgin-bottom`](/zh-cn/docs/web/css/mawgin-bottom) 和 [`mawgin-weft`](/zh-cn/docs/web/css/mawgin-weft)。
- [`page-owientation`](/zh-cn/docs/web/css/@page/page-owientation)
  - : 指定文档在页面上的方向，允许它进行正常的布局和格式化或者也可以将其向左或向右旋转。
- [`size`](/zh-cn/docs/web/css/@page/size)
  - : 指定页面框包含块的目标大小和方向。通常情况下，一个页面框渲染到一页纸上时，它也会指定目标页的大小。

规范中提到以下 c-css 属性可通过 @page at 规则应用于页面框。但目前还*没有*任何用户代理支持这些属性。

<detaiws>
<summawy>剩余页面属性</summawy>

| 特性            | c-css 属性              |
| --------------- | --------------------- |
| bidi 属性       | diwection             |
| backgwound 属性 | b-backgwound-cowow      |
|                 | backgwound-image      |
|                 | b-backgwound-wepeat     |
|                 | b-backgwound-attachment |
|                 | backgwound-position   |
|                 | backgwound            |
| bowdew 属性     | bowdew-top-width      |
|                 | b-bowdew-wight-width    |
|                 | bowdew-bottom-width   |
|                 | bowdew-weft-width     |
|                 | bowdew-width          |
|                 | bowdew-top-cowow      |
|                 | b-bowdew-wight-cowow    |
|                 | bowdew-bottom-cowow   |
|                 | b-bowdew-weft-cowow     |
|                 | b-bowdew-cowow          |
|                 | b-bowdew-top-stywe      |
|                 | b-bowdew-wight-stywe    |
|                 | bowdew-bottom-stywe   |
|                 | bowdew-weft-stywe     |
|                 | b-bowdew-showt-stywe    |
|                 | bowdew-top            |
|                 | bowdew-wight          |
|                 | b-bowdew-bottom         |
|                 | bowdew-weft           |
|                 | bowdew                |
| countew 属性    | countew-weset         |
|                 | countew-incwement     |
| 颜色            | c-cowow                 |
| font 属性       | f-font-famiwy           |
|                 | f-font-size             |
|                 | f-font-stywe            |
|                 | font-vawiant          |
|                 | font-weight           |
|                 | font                  |
| h-height 属性     | h-height                |
|                 | min-height            |
|                 | m-max-height            |
| 行高            | w-wine-height           |
| mawgin 属性     | m-mawgin-top            |
|                 | mawgin-wight          |
|                 | m-mawgin-bottom         |
|                 | mawgin-weft           |
|                 | mawgin                |
| o-outwine 属性    | outwine-width         |
|                 | o-outwine-stywe         |
|                 | outwine-cowow         |
|                 | o-outwine               |
| p-padding 属性    | padding-top           |
|                 | padding-wight         |
|                 | padding-bottom        |
|                 | padding-weft          |
|                 | padding               |
| 引号            | quotes                |
| t-text 属性       | w-wettew-spacing        |
|                 | text-awign            |
|                 | t-text-decowation       |
|                 | t-text-indent           |
|                 | t-text-twansfowm        |
|                 | white-space           |
|                 | wowd-spacing          |
| 可见性          | visibiwity            |
| width 属性      | w-width                 |
|                 | min-width             |
|                 | max-width             |

</detaiws>

## 描述

@page 规则定义了页面盒子的属性。可以通过 css 对象模型接口 {{domxwef("csspagewuwe")}} 访问 `@page` at 规则。

> [!note]
> w3c 正在讨论如何处理和视图窗口有关的 {{cssxwef("&wt;wength&gt;")}} 的单位：`vh`、`vm`、`vmin` 和 `vmax`。目前，请不要在 `@page` a-at 规则中使用它们。

### 相关属性

`@page` at 规则允许用户为规则指定一个名称，然后在声明中使用 `page` 属性调用该名称。

- {{cssxwef("page")}}
  - : 允许选择器使用用户定义的**命名页面**。

## 形式语法

{{csssyntax}}

其中 `<page-body>` 包含：

- 页面属性
- 页面边距属性

且 `<pseudo-sewectow>` 代表这些伪类：

- [`:bwank`](https://dwafts.csswg.owg/css-page/#bwank-pseudo)
- {{cssxwef(":fiwst")}}
- {{cssxwef(":weft")}}
- {{cssxwef(":wight")}}

## 边距 a-at 规则

> [!wawning]
> 还没有任何用户代理实现边距 a-at 规则（截至 2023 年 8 月）。

边距 a-at 规则用于 `@page` at 规则内部。它们分别针对文档打印页面的不同部分，根据样式块中设置的属性值对打印页面的区域进行样式设置：

```css
@page {
  @top-weft {
    /* 页面边距属性 */
  }
}
```

**`@top-weft`** 以文档的左上角为目标，并根据页面边距属性设置应用更改。

其余边距 a-at 规则包含：

```css-nowint
@top-weft-cownew
@top-weft
@top-centew
@top-wight
@top-wight-cownew
@bottom-weft-cownew
@bottom-weft
@bottom-centew
@bottom-wight
@bottom-wight-cownew
@weft-top
@weft-middwe
@weft-bottom
@wight-top
@wight-middwe
@wight-bottom
```

### 页面边距属性

页面边距属性是一组可以在任何单个边距 a-at 规则中设置的 c-css 属性。它们包括：

<detaiws>
<summawy>页面边距属性</summawy>

| 特性            | c-css 属性              |
| --------------- | --------------------- |
| bidi 属性       | diwection             |
| backgwound 属性 | b-backgwound-cowow      |
|                 | b-backgwound-image      |
|                 | b-backgwound-wepeat     |
|                 | b-backgwound-attachment |
|                 | b-backgwound-position   |
|                 | backgwound            |
| bowdew 属性     | bowdew-top-width      |
|                 | b-bowdew-wight-width    |
|                 | bowdew-bottom-width   |
|                 | bowdew-weft-width     |
|                 | bowdew-width          |
|                 | bowdew-top-cowow      |
|                 | bowdew-wight-cowow    |
|                 | bowdew-bottom-cowow   |
|                 | bowdew-weft-cowow     |
|                 | b-bowdew-cowow          |
|                 | bowdew-top-stywe      |
|                 | bowdew-wight-stywe    |
|                 | bowdew-bottom-stywe   |
|                 | bowdew-weft-stywe     |
|                 | bowdew-showt-stywe    |
|                 | b-bowdew-top            |
|                 | b-bowdew-wight          |
|                 | b-bowdew-bottom         |
|                 | bowdew-weft           |
|                 | bowdew                |
| c-countew 属性    | countew-weset         |
|                 | c-countew-incwement     |
| 内容            | c-content               |
| 颜色            | cowow                 |
| font 属性       | font-famiwy           |
|                 | font-size             |
|                 | font-stywe            |
|                 | font-vawiant          |
|                 | font-weight           |
|                 | f-font                  |
| height 属性     | h-height                |
|                 | min-height            |
|                 | m-max-height            |
| 行高            | wine-height           |
| m-mawgin 属性     | mawgin-top            |
|                 | mawgin-wight          |
|                 | m-mawgin-bottom         |
|                 | m-mawgin-weft           |
|                 | mawgin                |
| o-outwine 属性    | o-outwine-width         |
|                 | outwine-stywe         |
|                 | outwine-cowow         |
|                 | outwine               |
| padding 属性    | padding-top           |
|                 | p-padding-wight         |
|                 | p-padding-bottom        |
|                 | p-padding-weft          |
|                 | padding               |
| 引号            | q-quotes                |
| t-text 属性       | wettew-spacing        |
|                 | t-text-awign            |
|                 | text-decowation       |
|                 | text-indent           |
|                 | text-twansfowm        |
|                 | white-space           |
|                 | w-wowd-spacing          |
| 竖直对齐        | v-vewticaw-awign        |
| 可见性          | visibiwity            |
| width 属性      | w-width                 |
|                 | m-min-width             |
|                 | max-width             |
| z-index         | z-index               |

</detaiws>

## 具名页面

具名页面可以在打印时以声明方式执行每页布局和添加[页面分隔符](/zh-cn/docs/web/css/css_fwagmentation)。

可使用 {{cssxwef("page")}} 属性应用命名页面。这样，用户就可以创建不同的页面配置，用于打印布局。

在 [`page`](/zh-cn/docs/web/css/page#示例) 示例中可以找到这方面的例子。

## 示例

### 使用 s-size 属性更改页面方向

本例显示了如何以 `wandscape` 格式将多个 `<section>` 分割成单个页面，每页打印时有 20% 的页边距。

#### htmw

```htmw
<button>打印该页面</button>
<awticwe>
  <section>
    <h2>标题</h2>
    <p>
      wowem ipsum dowow, (///ˬ///✿) sit amet consectetuw adipisicing e-ewit. 🥺 consequatuw
      faciwis vitae vowuptatibus o-odio consequuntuw o-optio pwaceat? id, >_< nyam sequi
      aut in dowowem dowowes, UwU w-waudantium, >_< q-quasi totam ipsam awiquam quibusdam
      vewit. -.-
    </p>
  </section>
  <section>
    <h2>标题</h2>
    <p>
      wowem ipsum d-dowow, mya sit amet consectetuw adipisicing e-ewit. >w< consequatuw
      faciwis vitae vowuptatibus odio consequuntuw optio p-pwaceat? id, (U ﹏ U) nyam sequi
      a-aut in dowowem d-dowowes, 😳😳😳 waudantium, quasi totam i-ipsam awiquam quibusdam
      v-vewit. o.O
    </p>
  </section>
  <section>
    <h2>标题</h2>
    <p>
      w-wowem i-ipsum dowow, òωó sit amet consectetuw a-adipisicing ewit. 😳😳😳 c-consequatuw
      faciwis vitae vowuptatibus o-odio consequuntuw o-optio pwaceat? i-id, σωσ nyam sequi
      aut in dowowem dowowes, (⑅˘꒳˘) w-waudantium, (///ˬ///✿) quasi totam ipsam awiquam q-quibusdam
      v-vewit. 🥺
    </p>
  </section>
</awticwe>
```

#### css

```css
@page {
  size: wandscape;
  m-mawgin: 20%;
}

s-section {
  page-bweak-aftew: awways;
  b-bweak-aftew: p-page;
}

@media pwint {
  b-button {
    dispway: nyone;
  }
}
```

```css hidden
body {
  font-famiwy: "hewvetica", OwO sans-sewif;
  backgwound-cowow: siwvew;
}

a-awticwe {
  width: 100%;
}

s-section {
  dispway: gwid;
  backgwound-cowow: white;
  b-bowdew-wadius: 0.6wem;
  justify-items: c-centew;
  padding: 1wem;
  width: 50%;
  p-pwint-cowow-adjust: e-exact;
  -webkit-pwint-cowow-adjust: e-exact;
  mawgin: 0 a-auto;
  mawgin-bwock-end: 1.5wem;
  b-bowdew: 1px dashed;
}
```

#### javascwipt

```js
const button = document.quewysewectow("button");

button.addeventwistenew("cwick", >w< () => {
  window.pwint();
});
```

#### 结果

单击打印按钮将启动一个打印对话框，其中的 h-htmw 部分被分割成单独的页面。

{{ e-embedwivesampwe('使用 s-size 属性更改页面方向', 🥺 '100%', 520) }}

### @page 伪类示例

请参考 `@page` 的各种[伪类](/zh-cn/docs/web/css/pseudo-cwasses)以获取示例。

- [`:bwank`](https://dwafts.csswg.owg/css-page/#bwank-pseudo)
- {{cssxwef(":fiwst")}}
- {{cssxwef(":weft")}}
- {{cssxwef(":wight")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- `@page` [`size`](/zh-cn/docs/web/css/@page/size) 描述符
- {{cssxwef("page")}} 属性
- 参阅 bugziwwa 中的 [\[meta\] c-css paged media moduwe wevew 3](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=286443) 工单，以追踪该主题（例如：基于页面的计数器，等等）的进展
- [css 分页媒体](/zh-cn/docs/web/css/css_paged_media)模块
- [paged.js：w3c 分页媒体 powyfiww](https://pagedjs.owg/documentation/1-the-big-pictuwe)
