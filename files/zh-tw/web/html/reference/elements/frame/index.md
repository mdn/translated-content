---
title: <frame>：框架元素
slug: Web/HTML/Reference/Elements/frame
---

{{Deprecated_Header}}

**`<frame>`** [HTML](/zh-TW/docs/Web/HTML) 元素定義了另一個 HTML 文件可以顯示的特定區域。框架應該在 {{HTMLElement("frameset")}} 元素內使用。

由於某些缺點，例如性能問題和對螢幕閱讀器用戶的可訪問性不足，不建議使用 `<frame>` 元素。取而代之的是使用 {{HTMLElement("iframe")}}。

## 屬性

與所有其他 HTML 元素一樣，此元素支持[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `src` {{Deprecated_Inline}}
  - : 此屬性指定將由框架顯示的文件。
- `name` {{Deprecated_Inline}}
  - : 此屬性用於標記框架。如果不標記，則每個連結都將在其所在的框架中打開——最接近的父框架。有關更多信息，請參見 [`target`](/zh-TW/docs/Web/HTML/Reference/Elements/a#target) 屬性。
- `noresize` {{Deprecated_Inline}}
  - : 此屬性防止用戶調整框架的大小。
- `scrolling` {{Deprecated_Inline}}
  - : 此屬性定義滾動條的存在。如果未使用此屬性，則瀏覽器在需要時添加滾動條。有兩種選擇：「yes」表示即使不需要也強制顯示滾動條，「no」表示即使需要也強制不顯示滾動條。
- `marginheight` {{Deprecated_Inline}}
  - : 此屬性定義框架之間邊緣的高度。
- `marginwidth` {{Deprecated_Inline}}
  - : 此屬性定義框架之間邊緣的寬度。
- `frameborder` {{Deprecated_Inline}}
  - : 此屬性允許你指定框架的邊框。

## 範例

### 框架集文件

框架集文件具有 {{HTMLElement("frameset")}} 元素，而不是 {{HTMLElement("body")}} 元素。`<frame>` 元素放置在 `<frameset>` 內。

```html
<!doctype html>
<html lang="zh-TW">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="400, 500">
    <frame src="https://developer.mozilla.org/en/HTML/Element/iframe" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
  </frameset>
</html>
```

如果你想將另一個 HTML 頁面嵌入到文件的 {{HTMLElement("body")}} 中，請使用 {{HTMLElement("iframe")}} 元素。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("frameset")}}
- {{HTMLElement("iframe")}}
