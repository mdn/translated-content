---
title: 如何用 Markdown 撰寫
short-title: 用 Markdown 撰寫
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
---

這一頁描述了我們如何在 MDN Web Docs 上使用 Markdown 撰寫文件。我們以 GitHub 風格 Markdown (GitHub-Flavored Markdown, GFM) 為基礎，並增加了一些擴展，以支援 MDN 上需要但 GFM 本身未能直接支援的功能。

## 基礎：GitHub 風格 Markdown

MDN Markdown 的基礎是 GitHub 風格 Markdown (GFM)：<https://github.github.com/gfm/>。這意味著，對於本頁中未特別說明的部分，你可以參考 GFM 的規範。而 GFM 又是 CommonMark (<https://spec.commonmark.org/>) 的超集。

## 連結

GFM 規範定義了兩種基本類型的連結：

- [內聯連結](https://github.github.com/gfm/#inline-link)：連結目的地會緊跟在連結文字之後。
- [參考連結](https://github.github.com/gfm/#reference-link)：連結目的地在文件其他地方定義。

在 MDN 中，我們只允許使用內聯連結。

以下是在 MDN 上正確撰寫 GFM 連結的方法：

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

以下則是錯誤的連結寫法：

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## 範例程式碼區塊

在 GFM 和 CommonMark 中，作者可以使用「程式碼圍欄」來標記 `<pre>` 區塊。開頭的程式碼圍欄後面可以跟隨一些文字，稱為「資訊字串」（info string）。規範中提到：

> 資訊字串的第一個單字通常用來指定程式碼範例的語言，並會被渲染在 `<code>` 標籤的 class 屬性中。

資訊字串允許包含多個單字，例如：

````md
```fee fi fo fum
// some example code
```
````

在 MDN 中，撰寫範例程式碼區塊時必須使用程式碼圍欄。作者必須使用資訊字串中的第一個單字來指定程式碼範例的語言，這將用來為程式碼區塊提供語法高亮。支援的語言如下：

- 程式語言
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C 語言族
    - `c` - C
    - `cpp` - C++
    - `cs` - C#
    - `java` - Java
  - 其他
    - `python` - Python
    - `php` - PHP
    - `rust` - Rust
    - `glsl` - GLSL (OpenGL Shaders)
    - `sql` - SeQueL commands
    - `wasm` - WebAssembly
    - `webidl` - Web Interface Definition Language
- 樣式
  - `css` - CSS
  - `scss` - Sass (SCSS)
  - `less` - Less
- 標記語言
  - `html` - HTML
  - `svg` - SVG
  - `xml` - XML
  - `mathml` - MathML
  - `md` - Markdown
  - `latex` - LaTeX
- 指令提示字元
  - `bash` - Bash/Shell
  - `batch` - Batch (Windows Shell)
  - `powershell` - PowerShell
- 配置/資料檔
  - `json` - JSON
  - `ini` - INI
  - `yaml` - YAML
  - `toml` - TOML
  - `sql` - SQL Database
  - `ignore` - Gitignore 檔案
  - `apacheconf` - Apache 配置
  - `nginx` - NGINX 配置
- 範本
  - `django` - Django 範本
  - `svelte` - Svelte 範本
  - `handlebars` - Handlebars 範本
  - `pug` - [Pug 範本](https://pugjs.org/api/getting-started.html)（可用於 [Express](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)）
- 其他
  - `plain` - 純文字
  - `diff` - Diff 檔案
  - `http` - HTTP 標頭
  - `regex` - 正則表達式
  - `uri` - URI 與 URL

例如：

````md
```js
const greeting = "I will get JavaScript syntax highlighting";
```
````

如果你希望使用的語法高亮不在上述列表中，應將程式碼區塊標記為 `plain`。
在這個過程中，也可以根據 [GitHub 上的討論](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) 請求新增其他語言。

### 抑制 lint 檢查

作者可以在任何語言標識後加上 `-nolint` 後綴。

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

這類程式碼區塊會獲得適當的語法高亮，並且能被 live sample 系統識別，但會被 lint 工具或自動格式化工具（如 Prettier）忽略。當你想展示不合法的程式碼或不希望被自動格式化工具更動的替代格式時，應該使用此後綴。

### 額外的類別（資訊字串）

GFM 支援 [資訊字串](https://github.github.com/gfm/#info-string)，允許作者提供關於程式碼區塊的額外資訊。在 MDN 中，資訊字串會被轉換為 class 名稱。

作者可以提供下列任一資訊字串：

- `example-good`：將此範例標示為正確範例（值得遵循）
- `example-bad`：將此範例標示為錯誤範例（應避免）
- `hidden`：不在頁面上渲染這個程式碼區塊。這通常用於 live sample 中。

例如：

````md
```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

```js hidden
const greeting = "I'm a secret greeting";
```
````

這些程式碼區塊會被渲染為：

```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

## 註解參考

此議題在以下討論中已獲解決：

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## 提示、警告與標記

作者可以使用 [GFM 警示語法](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) 來特別標示內容。GFM 警示有三種類型：提示（notes）、警告（warnings）與標記（callouts）。

> [!NOTE]
> MDN Web Docs 在支援 GFM 警示之前曾支援一種自己的語法，並稱之為「noteblocks」。
> MDN 不支援以下 GFM 警示：[!TIP]、[!CAUTION]、[!IMPORTANT]。
> GFM 也不支援 `[!CALLOUT]`。

- 要新增提示（note），建立一個引用區塊，其第一行為 `[!NOTE]`。
- 要新增警告（warning），建立一個引用區塊，其第一行為 `[!WARNING]`。
- 要新增標記（callout），建立一個引用區塊，其第一行為 `[!CALLOUT]`。

提示與警告在輸出時會在最前面加入本地化的 **Note:** 或 **Warning:**，而標記則不會。因此，當作者想自訂標題時，標記是個不錯的選擇。

> [!WARNING]
> 在較舊的 MDN 語法中，類型會本地化並加在第一個段落的粗體文字中，例如：`**Note:** Foo bar`，而非 `[!NOTE] ⏎ Foo bar`。
>
> 為了遷移考量，較舊的語法仍受支援，但請避免在新文件中使用。

> [!WARNING]
> 目前，由於 [Prettier 的一個 bug](https://github.com/prettier/prettier/issues/15479)，若提示或警告的第一個字元為格式化符號（例如反引號、星號、方括號或大括號），則無法使用 GFM 警示語法。此時，請改用舊語法 `> **Note:**`。作者不需要為了避開格式化器而重新改寫內容。

多行內容會依照正常段落方式處理，即引用區塊中若有空行，則會分成多個段落。同時，若多行內容中間沒有空行，也會被視為連續的 Markdown 行並合併處理。

引用區塊內可以包含程式碼區塊或其他區塊元素。

### 範例

#### 提示（Note）

```md
> [!NOTE]
> This is how you write a note.
>
> It can have multiple lines.
```

這將產生下列 HTML：

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can have multiple lines.</p>
</div>
```

以上 HTML 將被渲染為一個高亮顯示的區塊：

> [!NOTE]
> This is how you write a note.
>
> It can have multiple lines.

#### 警告（Warnings）

```md
> [!WARNING]
> This is how you write a warning.
>
> It can have multiple paragraphs.
```

這將產生下列 HTML：

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> This is how you write a warning.</p>
  <p>It can have multiple paragraphs.</p>
</div>
```

以上 HTML 將被渲染為一個高亮顯示的區塊：

> [!WARNING]
> This is how you write a warning.
>
> It can have multiple paragraphs.

#### 標記（Callouts）

```md
> [!CALLOUT]
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.
```

這將產生下列 HTML：

```html
<div class="callout">
  <p><strong>This is how you write a callout.</strong></p>
  <p>It can have multiple paragraphs.</p>
</div>
```

以上 HTML 將被渲染為一個高亮顯示的區塊：

> [!CALLOUT]
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.

#### 包含程式碼區塊的提示

以下範例包含了一個程式碼區塊：

````md
> [!NOTE]
> This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Like that.
````

這將產生下列 HTML：

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can contain code blocks.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>Like that.</p>
</div>
```

以上 HTML 會與包含程式碼區塊一起被渲染為：

> [!NOTE]
> This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Like that.

### 討論參考

此議題在下列討論中已獲解決：<https://github.com/mdn/content/issues/3483>.

## 定義列表

定義列表在 MDN 中被廣泛使用，但 GFM 本身並不支援。MDN 引入了一種自定義的定義列表格式，這是一種修改過的 GFM 無序列表（{{HTMLElement("ul")}}）。在這個格式中：

- 該 GFM `<ul>` 可包含任意數量的頂層 GFM `<li>` 元素。
- 每個頂層的 GFM `<li>` 元素其最後必須包含一個 GFM `<ul>` 子元素。
- 這個最後的巢狀 `<ul>` 必須包含一個單一的 GFM `<li>` 元素，其文字內容必須以「: 」開始（冒號後跟一個空格）。此元素可以包含區塊元素，包括段落、程式碼區塊、內嵌列表以及提示等。

這些頂層的 GFM `<li>` 元素將會被轉換成 `<dt>`/`<dd>` 配對，具體方式如下：

- 頂層 GFM `<li>` 元素會被解析為 GFM `<li>`，其內部內容（除了最後的巢狀 `<ul>` 部分）會成為 `<dt>` 的內容。
- 最後那個巢狀 `<ul>` 中的 `<li>` 元素會被解析，其內部內容（去除最前面的「: 」）會成為 `<dd>` 的內容。

例如，下面這段 Markdown 是一個 `<dl>`：

````md
- term1

  - : My description of term1

- `term2`

  - : My description of term2

    It can have multiple paragraphs, and code blocks too:

    ```js
    const thing = 1;
    ```
````

在 GFM/CommonMark 中，上述 Markdown 會產生以下 HTML：

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: My description of term1</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: My description of term2</p>
        <p>It can have multiple paragraphs, and code blocks too:</p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

而在 MDN 中，則會產生如下 HTML：

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>My description of term1</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>My description of term2</p>
    <p>It can have multiple paragraphs, and code blocks too:</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

使用這種語法撰寫的定義列表必須由 `<dt>` 與 `<dd>` 配對組成。依此語法，無法撰寫多個連續 `<dt>` 元素或多個連續 `<dd>` 元素：解析器會將此視為錯誤。我們預期 MDN 上幾乎所有的定義列表都能在此限制下正常運作；若有個別例外，作者可退而使用原生 HTML。

以下這種寫法是不被允許的：

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

若需要將多個 `<dt>` 項目對應到單一個 `<dd>`，建議將多個術語合併到一個 `<dt>` 中，用逗號分隔，例如：

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

採用這種語法的理由在於它能與預期使用 CommonMark 工具（例如 Prettier 或 GitHub 預覽）較好地相容，同時又能保持撰寫與解析上的相對簡易。

### 討論參考

此議題在 <https://github.com/mdn/content/issues/4367> 中已獲解決。

## 表格

GFM 提供了創建 [表格](https://github.github.com/gfm/#tables-extension-) 的語法，我們在 MDN 中有使用到。不過，也有一些情況下 GFM 表格無法滿足我們的需求：

- GFM 語法僅支援 HTML 中可用功能的一部分。如果你需要使用 GFM 不支援的表格功能，請改用 HTML。
- 如果 GFM 所表示的表格寬度超過 150 個字元，則請改用 HTML 來撰寫表格。
- 我們還支援一種特殊的表格，稱為「屬性表」（properties table），這類表格具有自己專屬的 CSS class，因此必須使用 HTML。

因此，基本原則是：作者在能夠使用 GFM Markdown 語法時就使用它，只有在必須或 HTML 更易讀時再退而使用原生 HTML。更多資訊請參考[何時使用 HTML 表格](#when_to_use_html_tables)。

### GFM 表格語法風格

在 GFM 表格語法中，作者可以省略行首和行尾的豎線（|）。不過，為了可讀性，MDN 的作者必須包含這些豎線。此外，作者必須在每一行的儲存格後加入空格，以便使同一欄位內的所有儲存格在純文字狀態下長度一致。

也就是說，MDN 作者必須使用如下風格：

```md example-good
| Heading 1 | Heading 2 | Heading 3 |
| --------- | --------- | --------- |
| cell 1    | cell 2    | cell 3    |
| cell 4    | cell 5    | cell 6    |
```

而不是這種風格：

```md-nolint example-bad
| Heading 1 | Heading 2 | Heading 3 |
| --------- | --- |----------------------|
| cell 1 | cell 2 | cell 3 |
cell 4 | cell 5 | cell 6
```

幸好，表格格式可以透過 Prettier 自動修正，所以作者可以依賴 Prettier 來正確格式化表格。

### 何時使用 HTML 表格

有三種主要情況下，作者應該使用 HTML 表格而非 GFM 語法：

1. 表格使用了 GFM 不支援的功能（見下文）。
2. GFM 表示的表格寬度太大，導致可讀性變差。
3. 作者想使用一種特殊的表格，稱為「屬性表」（properties table）。

#### GFM 表格不支援的功能

GFM 表格語法的主要限制如下：

- GFM 表格必須有表頭行。
- GFM 表格不允許有表頭欄。
- GFM 不會解析表格儲存格中的區塊元素。例如，你無法在儲存格中放置列表。
- GFM 表格不能為表格分配 class。
- GFM 不支援除 `<table>`、`<tr>`、`<th>` 和 `<td>` 之外的任何表格元素。
- GFM 不支援任何表格元素屬性，如 `colspan`、`rowspan` 或 `scope`。

如果作者需要使用上述任何不支援的功能，應該使用 HTML 撰寫表格。

注意，我們不推薦在表格上普遍使用 `<caption>` 標籤，因為這樣也會排除使用 GFM 語

#### GFM 表格的最大寬度

即使表格可以用 GFM 編寫，有時候使用 HTML 會更好，因為 GFM 採用類似「{{Glossary("ASCII")}} 繪圖」的方式來呈現表格，當表格的行變長時，這種格式會變得不易閱讀。請考慮以下表格：

```html
<table>
  <tr>
    <th>A heading 1</th>
    <th>A heading 2</th>
    <th>A heading 3</th>
    <th>A heading 4</th>
    <th>A heading 5</th>
    <th>A heading 6</th>
  </tr>
  <tr>
    <td>Something shortish</td>
    <td>
      Something much longer that really goes into a lot of detail about
      something, so much so that the table formatting starts to look bad in GFM
      format.
    </td>
    <td>Something shortish</td>
    <td>
      Another cell with lots of text in it, that also really goes into a lot of
      detail about something, so much so that the table formatting starts to
      look bad in GFM format.
    </td>
    <td>Something shortish</td>
    <td>Something shortish</td>
  </tr>
</table>
```

在 GFM 中會變成：

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

在這種情況下，最好使用 HTML 表格。

因此，我們的指導原則是：**如果 Markdown 表示的表格寬度超過 150 個字元，請改用 HTML 表格。**

#### 屬性表（Properties tables）

屬性表是用於在某一類型的多個頁面中顯示結構化的屬性－值內容的一種特殊表格。這種表格具有兩欄：第一欄是表頭欄，列出屬性名稱；第二欄則顯示該屬性在該項目中的值。例如，下面是 {{domxref("PannerNode")}} 介面的屬性表：

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

這些頁面無法使用 GFM 表格語法來呈現，因為它們需要表頭欄，因此作者在此情況下應使用 HTML 表格。為了獲得特殊樣式，請將 `"properties"` class 應用在 `<table>` 上：

```html
<table class="properties"></table>
```

### 討論參考

此議題已在 <https://github.com/mdn/content/issues/4325>、<https://github.com/mdn/content/issues/7342> 以及 <https://github.com/mdn/content/issues/7898#issuecomment-913265900> 中解決。

## 上標與下標

作者可以在必要時使用 HTML 的 {{HTMLElement("sup")}} 與 {{HTMLElement("sub")}} 元素，但應盡可能採用其他替代方式。特別是：

- 表示指數時，請使用插入符號（caret）：例如 `2^53`。
- 表示序數（如 1<sup>st</sup>）時，建議改用「first」等詞彙。
- 對於腳注，不要標記腳注參考，例如 `<sup>[1]</sup>`。

### 討論參考

此議題已在 <https://github.com/mdn/content/issues/4578> 中解決。

## 頁面摘要

**頁面摘要**是頁面中第一個「內容」段落，也就是頁面前置資料（front matter）以及任何 [sidebar](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#sidebar_generation) 或 [page banner](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) 巨集後出現的第一段文字。

此摘要用於搜尋引擎最佳化（SEO），同時也會自動與頁面列表一起被某些巨集包含。因此，第一段應既簡潔又具資訊性。

### 討論參考

此議題已在 <https://github.com/mdn/content/issues/3923> 中解決。

## KumaScript

作者可以在正文內容中包含 KumaScript 巨集呼叫：

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property
sets the margin area on all four sides of an element. It is a shorthand for
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
and \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

The top and bottom margins have no effect on replaced inline elements, such as
\{{HTMLElement("span")}} or \{{HTMLElement("code")}}.
```

更多有關巨集的資訊請參見 [使用巨集](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Macros)。
