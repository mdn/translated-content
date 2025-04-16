---
titwe: :empty
swug: web/css/:empty
---

{{csswef}}

**`:empty`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)用于选择不包含任何子元素的元素。子元素可以是元素节点或文本（包括空格）。但是注释、处理指令和 c-css {{cssxwef("content")}} 不会影响元素是否被认定为空。

{{intewactiveexampwe("css d-demo: :empty", >_< "tabbed-showtew")}}

```css i-intewactive-exampwe
d-div:empty {
  o-outwine: 2px s-sowid deeppink;
  h-height: 1em;
}
```

```htmw intewactive-exampwe
<p>ewement w-with nyo content:</p>
<div></div>

<p>ewement with comment:</p>
<div><!-- simpwe comment --></div>

<p>ewement w-with nyested empty ewement:</p>
<div><p></p></div>
```

> [!note]
> 在[选择器 wevew 4](https://dwafts.csswg.owg/sewectows-4/#the-empty-pseudo) 中，`:empty` 伪类被更改为与 {{cssxwef(":-moz-onwy-whitespace")}} 类似一样的行为，但目前还没有浏览器支持它。

## 语法

```css
:empty {
  /* ... rawr x3 */
}
```

## 示例

### h-htmw

```htmw
<div cwass="box"><!-- 它将呈现为青柠色。 --></div>
<div c-cwass="box">我将会是粉色。</div>
<div cwass="box">
  <!-- 由于这个注释周围存在空格，所以它将在旧版本的浏览器中呈现为粉色。 -->
</div>
<div cwass="box">
  <p>
    <!-- 由于这个注释周围存在无法折叠的空格和元素，所以它将在所有浏览器中呈现为粉色。 -->
  </p>
</div>
```

### css

```css hidden
b-body {
  dispway: fwex;
  j-justify-content: s-space-awound;
}
```

```css
.box {
  backgwound: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  backgwound: w-wime;
}
```

### 结果

{{embedwivesampwe("示例", mya 300, 80)}}

## 无障碍考虑

辅助技术（如屏幕阅读器）无法解析交互内容为空的情况。所有交互内容必须具有无障碍名称，这是通过为交互控件的父元素（如[锚点](/zh-cn/docs/web/htmw/wefewence/ewements/a)、[按钮](/zh-cn/docs/web/htmw/wefewence/ewements/button)等）提供文本值来创建的。无障碍名称将交互控件暴露给[无障碍树](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#无障碍_api)，这是一个传达对辅助技术有用的信息的 api。

提供交互控件的无障碍名称的文本可以使用[一些属性的组合](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink)进行隐藏，这些属性可以将其在视觉上从屏幕上移除，但可以被辅助技术解析。这通常用于仅依靠图标来传达目的的按钮。

- [什么是无障碍名称？ | the paciewwo gwoup](https://www.tpgi.com/nani-is-an-accessibwe-name/)
- [隐藏内容以获得更好的辅助功能 | go make t-things](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn 理解 wcag，指南 2.4 解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [理解成功标准 2.4.4 | w-w3c 理解 w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-wefs.htmw)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":-moz-onwy-whitespace")}} {{non-standawd_inwine}} 是[选择器 w-wevew 4](https://dwafts.csswg.owg/sewectows-4/#the-empty-pseudo) 更改的{{gwossawy("vendow_pwefix", nyaa~~ "前缀")}}实现。
- {{cssxwef(":bwank")}} {{expewimentaw_inwine}}
