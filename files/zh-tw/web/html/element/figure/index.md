---
title: <figure>：具有非必填說明元素的圖片
slug: Web/HTML/Element/figure
---

{{HTMLSidebar}}

**`<figure>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表自成一體的內容，可能具有非必填的圖片說明（使用 {{HTMLElement("figcaption")}} 元素指定）。圖片、其圖片說明和其內容被作為一個單一單位被引用。

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

## 屬性

該元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用注意事項

- 通常 `<figure>` 是文件主要架構中引用的圖片、插圖、圖表、程式碼片段等，但可以移動到文件的其他部分或附錄，而不影響主要架構。
- 可以通過在其中插入 {{HTMLElement("figcaption")}}（作為第一個或最後一個子元素）來將標題與 `<figure>` 元素產生關聯。在圖片中找到的第一個 `<figcaption>` 元素被呈現為圖片的標題。
- `<figcaption>` 為父層 `<figure>` 提供了{{glossary("accessible name", "無障礙名稱")}}。

## 範例

### 圖片

```html
<!-- Just an image -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
</figure>

<!-- Image with a caption -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
  <figcaption>MDN Logo</figcaption>
</figure>
```

#### 結果

{{EmbedLiveSample("圖片", "100%", 375)}}

### 程式碼片段

```html
<figure>
  <figcaption>Get browser details using <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName + "; ";
  txt+= "Browser Name: " + navigator.appName + "; ";
  txt+= "Browser Version: " + navigator.appVersion  + "; ";
  txt+= "Cookies Enabled: " + navigator.cookieEnabled  + "; ";
  txt+= "Platform: " + navigator.platform  + "; ";
  txt+= "User-agent header: " + navigator.userAgent  + "; ";
  console.log("NavigatorExample", txt);
}
  </pre>
</figure>
```

#### 結果

{{EmbedLiveSample("程式碼片段", "100%", 250)}}

### 引用

```html
<figure>
  <figcaption><b>Edsger Dijkstra:</b></figcaption>
  <blockquote>
    If debugging is the process of removing software bugs, then programming must
    be the process of putting them in.
  </blockquote>
</figure>
```

#### 結果

{{EmbedLiveSample('引用')}}

### 詩歌

```html
<figure>
  <p style="white-space:pre">
    Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
    green, Or, like a nymph, with long dishevelled hair, Dance on the sands, and
    yet no footing seen: Love is a spirit all compact of fire, Not gross to
    sink, but light, and will aspire.
  </p>
  <figcaption><cite>Venus and Adonis</cite>, by William Shakespeare</figcaption>
</figure>
```

#### 結果

{{EmbedLiveSample("詩歌", "100%", 250)}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        一個 {{HTMLElement("figcaption")}} 元素，後跟<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >；或者流內容後跟一個
        {{HTMLElement("figcaption")}} 元素；或者流內容。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/figure_role"
          >figure</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        除了 <a href="/zh-TW/docs/Web/HTML/Element/figcaption">figcaption </a
        > 後代：<a href="https://www.w3.org/TR/html-aria/#dfn-any-role">任何</a>，否則不允許角色
      </td>
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

- {{HTMLElement("figcaption")}} 元素。
