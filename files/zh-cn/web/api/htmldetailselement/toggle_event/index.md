---
title: "HTMLDetailsElement: toggle event"
slug: Web/API/HTMLDetailsElement/toggle_event
---

{{APIRef}}

当{{HtmlElement("details")}}元素`打开`/`关闭`状态被切换时，切换事件会触发。

| Bubbles                | No                                                                  |
| ---------------------- | ------------------------------------------------------------------- |
| Cancelable             | No                                                                  |
| Interface              | {{DOMxRef("Event")}}                                                |
| Event handler property | None                                                                |
| Default Action         | Toggles the `open` state of the {{HtmlElement("details")}} element. |

## 示例

此示例记录打开的章节。当章节关闭时，它们将从日志中删除。

### HTML

```html
<aside id="log">
  <b>Open chapters:</b>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
<section id="summaries">
  <b>Chapter summaries:</b>
  <details id="ch1">
    <summary>Chapter I</summary>
    Philosophy reproves Boethius for the foolishness of his complaints against
    Fortune. Her very nature is caprice.
  </details>
  <details id="ch2">
    <summary>Chapter II</summary>
    Philosophy in Fortune's name replies to Boethius' reproaches, and proves
    that the gifts of Fortune are hers to give and to take away.
  </details>
  <details id="ch3">
    <summary>Chapter III</summary>
    Boethius falls back upon his present sense of misery. Philosophy reminds him
    of the brilliancy of his former fortunes.
  </details>
</section>
```

### CSS

```css
body {
  display: flex;
  flex-direction: row-reverse;
}

#log {
  flex-shrink: 0;
  padding-left: 3em;
}

#summaries {
  flex-grow: 1;
}
```

### JavaScript

```js
function logItem(e) {
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute("hidden");
}

const chapters = document.querySelectorAll("details");
chapters.forEach((chapter) => {
  chapter.addEventListener("toggle", logItem);
});
```

### 结果

{{EmbedLiveSample("示例", 700, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
