---
title: <s>
slug: Web/HTML/Element/s
---

{{HTMLSidebar}}

**HTML `<s>` 元素** 使用删除线来渲染文本。使用 `<s>` 元素来表示不再相关，或者不再准确的事情。但是当表示文档编辑时，不提倡使用 `<s>` ；为此，提倡使用 {{ HTMLElement("del") }} 和 {{ HTMLElement("ins") }} 元素。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语内容</a> or <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流式内容</a></td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何接受<a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语内容</a>的元素</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任意</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素仅仅包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)

> [!NOTE]
> 直到 Gecko1.9.2（包含），Firefox 为这个元素实现了 `HTMLSpanElement` 接口。

## 示例

```xml
<s>Today's Special: Salmon</s> SOLD OUT<br>
<span style="text-decoration:line-through;">Today's Special:
  Salmon</span> SOLD OUT
```

### 结果

~~Today's Special: Salmon~~ SOLD OUT
~~Today's Special: Salmon~~ SOLD OUT

## Accessibility concerns

The presence of the `s` element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using the CSS {{cssxref("content")}} property, along with the {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements.

```plain
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [start of stricken text] ";
}

s::after {
  content: " [end of stricken text] ";
}
```

Some people who use screen readers deliberately disable announcing content that creates extra verbosity. Because of this, it is important to not abuse this technique and only apply it in situations where not knowing content has been struck out would adversely affect understanding.

- [Short note on making your mark (more accessible) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ HTMLElement("strike") }} 元素，另一个 {{ HTMLElement("s") }} 元素，已经废除并且不应再用于 Web 站点。
- {{ HTMLElement("del") }} 元素用于代替，如果数据已经删除了。
- CSS {{ cssxref("text-decoration") }}-line-through 属性也用于为 {{ HTMLElement("s") }} 元素实现前者的视觉效果。
