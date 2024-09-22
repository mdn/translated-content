---
title: <bdi>：雙向獨立文本元素
slug: Web/HTML/Element/bdi
---

{{HTMLSidebar}}

**`<bdi>`** [HTML](/zh-TW/docs/Web/HTML) 元素告訴瀏覽器的雙向算法，要將其包含的文本與周圍的文本隔離處理。當網站動態插入某些文本但不知道插入文本的方向性時，這尤其有用。

{{EmbedInteractiveExample("pages/tabbed/bdi.html", "tabbed-standard")}}

雙向文本是可能包含從左到右（LTR）排列的字符序列和從右到左（RTL）排列的字符序列的文本，例如嵌入在英文字符串中的阿拉伯引用。瀏覽器實現了 [Unicode 雙向算法](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)來處理這一問題。在這個算法中，字符被賦予隱式方向性：例如，拉丁字符被視為 LTR，而阿拉伯字符被視為 RTL。一些其他字符（例如空格和一些標點符號）被視為中性，其方向性基於周圍字符的方向性而分配。

通常，雙向算法會在不需要作者提供任何特殊標記的情況下正確執行，但偶爾，該算法需要幫助。這就是 `<bdi>` 的用途所在。

`<bdi>` 元素用於包裹一段文本，並指示雙向算法將此文本與其周圍的文本隔離處理。這有兩種方式：

- 嵌入在 `<bdi>` 中的文本的方向性*不會影響*周圍文本的方向性。
- 嵌入在 `<bdi>` 中的文本的方向性*不受*周圍文本的方向性的影響。

例如，考慮一些文本，如：

```plain
EMBEDDED-TEXT - 1st place
```

如果 `EMBEDDED-TEXT`（嵌入文本）是 LTR，這個例子可以正常工作。但是如果 `EMBEDDED-TEXT`（嵌入文本）是 RTL，那麼 `- 1` 將被視為 RTL 文本（因為它由中性和弱字符組成）。結果將是亂碼：

```plain
1 - EMBEDDED-TEXTst place
```

如果你事先知道 `EMBEDDED-TEXT`（嵌入文本）的方向性，則可以通過將 `EMBEDDED-TEXT`（嵌入文本）包裹在具有已知方向性的 [`dir`](/zh-TW/docs/Web/HTML/Global_attributes#dir) 屬性設置的 {{HTMLElement("span")}} 中來解決此問題。但是如果你不知道方向性——例如，因為 `EMBEDDED-TEXT`（嵌入文本）是從數據庫讀取的或由用戶輸入的——你應該使用 `<bdi>` 來防止 `EMBEDDED-TEXT`（嵌入文本）的方向性影響其周圍。

儘管可以通過在 {{HTMLElement("span")}} 或其他文本格式化元素上使用 CSS 規則{{cssxref("unicode-bidi")}}`: isolate` 來實現相同的視覺效果，但 HTML 作者不應該使用這種方法，因為它不是語義化的，並且瀏覽器允許忽略 CSS 樣式。

在 `<span dir="auto">` 中嵌入字符具有與使用 `<bdi>` 相同的效果，但其語義不太清晰。

## 屬性

與所有其他 HTML 元素一樣，此元素支持[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)，只是 [`dir`](/zh-TW/docs/Web/HTML/Global_attributes#dir) 屬性的行為與正常情況不同：它的默認值為 `auto`，這意味著其值永遠不會從父元素繼承。這意味著除非你為 `dir` 指定了 `rtl` 或 `ltr` 的值，否則{{Glossary("user agent", "使用者代理")}}將根據 `<bdi>` 的內容確定要使用的正確方向性。

## 範例

### 沒有 bdi 的 LTR 文本

此範例僅使用 {{HTMLElement("span")}} 元素列出了比賽的獲獎者。當名字僅包含 LTR 文本時，結果看起來不錯：

```html
<ul>
  <li><span class="name">Henrietta Boffin</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('沒有 bdi 的 LTR 文本','','120','','','bdi 範例') }}

### 沒有 bdi 的 RTL 文本

此範例僅使用 {{HTMLElement("span")}} 元素列出了比賽的獲獎者，其中一名獲獎者的名字包含 RTL 文本。在這種情況下，由中性或弱方向性字符組成的「`- 1`」將採用 RTL 文本的方向性，結果將是亂碼：

```html
<ul>
  <li><span class="name">اَلأَعْشَى</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('沒有 bdi 的 RTL 文本','','120','','','bdi 範例') }}

### 使用 bdi 的 LTR 和 RTL 文本

此範例使用 `<bdi>` 元素列出了比賽的獲獎者。這些元素指示瀏覽器將名稱與其嵌入上下文隔離，因此範例輸出是正確排序的：

```html
<ul>
  <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
  <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('使用 bdi 的 LTR 和 RTL 文本','','120','','','bdi 範例') }}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、可感知內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，起始和結束標籤均為必需的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        > 的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
        <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTML 中的內聯標記和雙向文本](https://www.w3.org/International/articles/inline-bidi-markup/)
- [Unicode 雙向算法基礎知識](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- {{Glossary("Localization", "在地化")}}
- 相關 HTML 元素：{{HTMLElement("bdo")}}
- 相關 CSS 屬性：{{cssxref("direction")}}、{{cssxref("unicode-bidi")}}
