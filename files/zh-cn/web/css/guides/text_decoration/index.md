---
title: CSS 文本装饰
slug: Web/CSS/Guides/Text_decoration
l10n:
  sourceCommit: cb8f4ede62e0cc821eef8820f2c9eaea514111e2
---

**CSS 文本装饰**（text decoration）模块定义了与文本装饰相关的特性，如下划线、文本阴影和强调标记等。

## 参考

### 属性

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-skip")}}
- {{cssxref("text-decoration-skip-ink")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-shadow")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("text-underline-position")}}

该规范还定义了 `text-decoration-skip-box`、`text-decoration-skip-self`、`text-decoration-skip-spaces`、`text-decoration-trim` 和 `text-emphasis-skip` 属性，但目前尚未被任何浏览器支持。

## 示例

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">这段文字下方有一条线。</p>
<p class="over">这段文字上方有一条线。</p>
<p class="line">这段文字中间有一条贯穿线。</p>
<p>
  这个
  <a class="plain" href="#">链接将不会显示下划线</a
  >，而链接通常默认是带有下划线的。在为超链接移除文字装饰时请格外小心，因为用户通常依赖下划线来识别超链接。
</p>
<p class="underover">这段文字上方<em>和</em>下方都有线。</p>
<p class="thick">在支持的浏览器中，这段文字下方会有一条非常粗的紫色下划线。</p>
<p class="blink">根据你使用的浏览器，这段文字可能会闪烁。</p>
```

{{EmbedLiveSample('示例','auto','320')}}

## 规范

{{Specifications}}

## 参见

- [CSS 字体](/zh-CN/docs/Web/CSS/Guides/Fonts)模块
- [CSS ruby 布局](/zh-CN/docs/Web/CSS/Guides/Ruby_layout)模块
- [CSS 文本](/zh-CN/docs/Web/CSS/Guides/Text)模块
- [CSS 书写模式](/zh-CN/docs/Web/CSS/Guides/Writing_modes)模块
