---
title: <search>：通用搜尋元素
slug: Web/HTML/Reference/Elements/search
---

**`<search>`** [HTML](/zh-TW/docs/Web/HTML) 元素是一個容器，代表文件或應用程式中具有與執行搜尋或過濾操作相關的表單控制項或其他內容的部分。`<search>` 元素在語義上標識元素內容的目的，即具有搜尋或過濾功能。搜尋或過濾功能可以用於網站或應用程式、當前網頁或文件，或整個互聯網或其子部分。

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用注意事項

`<search>` 元素不用於呈現搜尋結果。相反的，用於搜尋或過濾結果應該呈現為該網頁主內容的一部分。儘管如此，作為搜尋功能內的「快速搜尋」功能的建議和鏈接應嵌套在 `<search>` 元素的內容中，因為它們是搜尋功能的一部分。

## 可訪問性注意事項

`<search>` 元素定義了一個[搜索](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)標誌。這消除了向 {{HTMLElement('form')}} 元素添加 `role=search` 的需要。

## 範例

### 頁首搜尋表單

此示例演示了在網站頁首中使用 `<search>` 作為容器，以執行簡單的全站搜尋。`<search>` 是包含將用戶輸入的搜尋查詢提交到服務器的 {{HTMLElement("form")}} 的語義容器。

#### HTML

```html
<header>
  <h1>電影網站</h1>
  <search>
    <form action="./search/">
      <label for="movie">尋找電影</label>
      <input type="search" id="movie" name="q" />
      <button type="submit">搜尋</button>
    </form>
  </search>
</header>
```

#### 結果

{{EmbedLiveSample('Header search form')}}

### Web 應用程式搜尋

此示例演示了在 Web 應用程式中動態包含 JavaScript 搜尋功能時的潛在 DOM 內容。當搜尋功能完全使用 JavaScript 實現時，如果沒有提交表單，則不需要 {{HTMLElement("form")}} 元素或提交 {{HTMLElement("button")}}。出於語義原因，包含 `<search>` 元素以容納搜尋和過濾功能。

#### HTML

```html
<search>
  <label>
    Find and filter your query
    <input type="search" id="query" />
  </label>
  <label>
    <input type="checkbox" id="exact-only" />
    Exact matches only
  </label>

  <section>
    <h3>Results:</h3>
    <ul id="results">
      <!-- search result content -->
    </ul>
    <output id="no-results">
      <!-- no results content -->
    </output>
  </section>
</search>
```

#### 結果

{{EmbedLiveSample('Web 應用程式搜尋')}}

> [!NOTE]
> 請記住，一些用戶沒有 JavaScript，且在 JavaScript 成功下載、解析和執行之前，沒有任何用戶運行 JavaScript，請確保你的用戶可以在禁用 JavaScript 的情況下訪問你站點的內容。

### 多個搜尋

此示例演示了一個帶有兩個搜尋功能的頁面。第一個是位於頁首的全站搜尋。第二個是基於頁面上下文的搜尋和過濾，例如我們的例子中的汽車搜尋。

#### HTML

```html
<body>
  <header>
    <h1>Car rental agency</h1>
    <search title="Website">...</search>
  </header>
  <main>
    <h2>Cars available for rent</h2>
    <search title="Cars">
      <h3>Filter results</h3>
      ...
    </search>
    <article>
      <!-- search result content -->
    </article>
  </main>
</body>
```

#### 結果

{{EmbedLiveSample('多個搜尋')}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories">內容類型</a>
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容">流內容</a>、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#捫及內容">捫及內容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容">流內容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">隱含 ARIA 角色</th>
      <td>
        <code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/form_role"><code>form</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- 其他與搜尋相關的元素：{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("aside")}}、{{HTMLElement("nav")}}、{{HTMLElement("form")}}
- [ARIA：Search 角色](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
