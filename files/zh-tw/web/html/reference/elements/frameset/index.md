---
title: <frameset>
slug: Web/HTML/Reference/Elements/frameset
---

{{Deprecated_header}}

**`<frameset>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於包含 {{HTMLElement("frame")}} 元素。

> [!NOTE]
> 由於現在不鼓勵使用頁框，而更推薦使用 {{HTMLElement("iframe")}}，因此現代網站通常不會使用此元素。

## 屬性

與所有其他 HTML 元素一樣，此元素支援[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `cols` {{Deprecated_Inline}}
  - : 此屬性指定頁框集中水平空間的數量和大小。
- `rows` {{Deprecated_Inline}}
  - : 此屬性指定頁框集中垂直空間的數量和大小。

## 範例

### 頁框集文件

頁框集文件使用 `<frameset>` 元素而不是 {{HTMLElement("body")}} 元素。 {{HTMLElement("frame")}} 元素放置在 `<frameset>` 內。

```html
<!doctype html>
<html lang="zh-TW">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="50%, 50%">
    <frame
      src="https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/iframe" />
    <frame
      src="https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/frame" />
  </frameset>
</html>
```

如果你想要將另一個 HTML 頁面嵌入到文檔的 {{HTMLElement("body")}} 中，請使用 {{HTMLElement("iframe")}} 元素。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
