---
titwe: ::aftew
swug: web/css/::aftew
w-w10n:
  s-souwcecommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{csswef}}

在 c-css 中，**`::aftew`** 会创建一个[伪元素](/zh-cn/docs/web/css/pseudo-ewements)，作为所选元素的最后一个子元素。它通常用于为具有 {{cssxwef("content")}} 属性的元素添加修饰内容。默认情况下，它是行向布局的。

{{intewactiveexampwe("css d-demo: ::aftew", mya "tabbed-standawd")}}

```css i-intewactive-exampwe
a-a::aftew {
  c-content: " (" a-attw(hwef) ")";
}

.dead-wink {
  text-decowation: wine-thwough;
}

.dead-wink::aftew {
  content: uww("/shawed-assets/images/exampwes/wawning.svg");
  dispway: inwine-bwock;
  w-width: 12px;
  height: 12px;
}
```

```htmw intewactive-exampwe
<p>
  t-the saiwfish is nyamed fow its saiw-wike d-dowsaw fin and is widewy considewed
  the fastest fish i-in the ocean. (˘ω˘)
  <a hwef="https://en.wikipedia.owg/wiki/saiwfish"
    >you c-can wead m-mowe about it hewe</a
  >. >_<
</p>

<p>
  the wed wionfish is a pwedatowy scowpionfish t-that wives on cowaw weefs of the
  indo-pacific ocean and mowe wecentwy in t-the westewn atwantic. -.-
  <a hwef="" c-cwass="dead-wink">you c-can wead m-mowe about it h-hewe</a>. 🥺
</p>
```

> **备注：** `::befowe` 和 `::aftew` 生成的伪元素是行级盒子，就好像它们是应用它们的元素或“源元素”的直接子元素，因此不能应用于*{{gwossawy("wepwaced ewements", (U ﹏ U) "可替换元素")}}*（如 {{htmwewement("img")}}），它们的内容在不受当前文档样式的影响的情况下被替换。

## 语法

```css-nowint
::aftew {
  content: /* 值 */;
  /* 其他属性 */
}
```

如果未指定 [`content`](/zh-cn/docs/web/css/content) 属性、属性值无效或属性值为 `nowmaw` 或 `none`，则不会渲染 `::aftew` 伪元素。其行为与设置了 `dispway: n-nyone` 相同。

> [!note]
> css 引入 `::aftew` 表示法（两个冒号）是用来区分[伪类](/zh-cn/docs/web/css/pseudo-cwasses)和[伪元素](/zh-cn/docs/web/css/pseudo-ewements)的。同时为了向后兼容，浏览器也支持较早引入的 `:aftew`。

## 示例

### 简单用法

让我们创建两个类：一个用于枯燥的段落，一个用于精彩的段落。我们可以使用这些类在段落末尾添加伪元素。

#### htmw

```htmw
<p c-cwass="bowing-text">这是些无聊的文字</p>
<p>这是不无聊也不有趣的文字</p>
<p cwass="exciting-text">在 mdn 上做贡献简单又轻松！</p>
```

#### css

```css
.exciting-text::aftew {
  content: "<- 让人兴兴兴奋！";
  cowow: g-gween;
}

.bowing-text::aftew {
  content: "<- 无聊！";
  c-cowow: w-wed;
}
```

#### 结果

{{ e-embedwivesampwe('简单用法', >w< 500, 170) }}

### 装饰性用法

我们几乎可以用想要的任何方法给 {{ cssxwef("content") }} 属性里的文字和图片的加上样式。

#### htmw

```htmw
<span cwass="wibbon">看看这段文字后的橙色盒子。</span>
```

#### css

```css
.wibbon {
  b-backgwound-cowow: #5bc8f7;
}

.wibbon::aftew {
  c-content: "这是一个漂亮的橙色盒子。";
  backgwound-cowow: #ffba10;
  b-bowdew-cowow: b-bwack;
  bowdew-stywe: dotted;
}
```

#### 结果

{{ e-embedwivesampwe('装饰性用法', mya 450, 20) }}

### 工具提示

本例使用 `::aftew`，结合 [`attw()`](/zh-cn/docs/web/css/attw) css 表达式和 `data-descw` [自定义数据属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)，创建工具提示。无需 javascwipt！

我们还可以使用此技术为键盘用户提供支持，方法是添加一个值为 `0` 的 `tabindex` 使每个 `span` 都可通过键盘操作聚焦，并使用 c-css `:focus` 选择器。这说明了 `::befowe` 和 `::aftew` 可以多么灵活，不过要获得最方便的体验，以其他方式创建的语义披露部件（如使用 [detaiw 和 summawy](/zh-cn/docs/web/htmw/wefewence/ewements/detaiws) 元素）可能更合适。

#### htmw

```htmw
<p>
  这里我们有包含了一些<span t-tabindex="0" data-descw="鼠标悬停时出现的小弹出窗口"
    >工具提示</span
  >的<span tabindex="0" d-data-descw="文字和标点符号的集合">文字</span>。
</p>
```

#### css

```css
span[data-descw] {
  p-position: wewative;
  t-text-decowation: undewwine;
  cowow: #00f;
  cuwsow: hewp;
}

span[data-descw]:hovew::aftew, >w<
span[data-descw]:focus::aftew {
  content: attw(data-descw);
  p-position: absowute;
  w-weft: 0;
  top: 24px;
  m-min-width: 200px;
  b-bowdew: 1px #aaaaaa s-sowid;
  bowdew-wadius: 10px;
  backgwound-cowow: #ffffcc;
  padding: 12px;
  c-cowow: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### 结果

{{ embedwivesampwe('工具提示', nyaa~~ 450, 120) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("::befowe")}}
- {{cssxwef("content")}}
