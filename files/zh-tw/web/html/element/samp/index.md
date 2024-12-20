---
title: <samp>：樣本輸出元素
slug: Web/HTML/Element/samp
---

{{HTMLSidebar}}

**`<samp>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於封裝代表電腦程式的樣本（或引用）輸出的內嵌文本。其內容通常使用瀏覽器的預設等寬字體呈現（如 [Courier](https://zh.wikipedia.org/wiki/Courier) 或 Lucida Console）。

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用注意事項

你可以使用 CSS 規則來覆蓋 `<samp>` 元素的瀏覽器默認字體；但是，瀏覽器的偏好可能優先於你指定的任何 CSS。

覆蓋默認字體的 CSS 如下所示：

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> 如果你需要一個元素來作為你的網站或應用程式 JavaScript 代碼生成的輸出的容器，則應該使用 {{HTMLElement("output")}} 元素。

## 範例

### 基本範例

在這個簡單的例子中，段落包含了一個程式輸出的例子。

```html
<p>
  When the process is complete, the utility will output the text
  <samp>Scan complete. Found <em>N</em> results.</samp> You can then proceed to
  the next step.
</p>
```

#### 結果

{{EmbedLiveSample("基本範例", 650, 100)}}

### 包含使用者輸入的樣本輸出

你可以在 `<samp>` 區塊中嵌套 {{HTMLElement("kbd")}} 元素，以呈現包含使用者輸入文字的例子。例如，考慮以下文本，展示了 Linux（或 macOS）控制台會話的副本：

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

請注意，使用 {{HTMLElement("span")}} 元素允許自定義樣本文本的特定部分的外觀，例如外殼提示符和光標。還要注意，在樣本文本中使用 `<kbd>` 來表示使用者在提示符處輸入的命令。

#### CSS

實現我們想要的外觀的 CSS 是：

```css
.prompt {
  color: #b00;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #00b;
}
```

這使提示符和光標具有相對較細微的顏色，並在樣本文本中加粗鍵盤輸入。

#### 結果

得到的輸出是這樣的：

{{EmbedLiveSample("包含使用者輸入的樣本輸出", 650, 120)}}

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
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、捫及內容。
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
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
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

- 相關元素：{{HTMLElement("kbd")}}、{{HTMLElement("code")}}、{{HTMLElement("pre")}}
- {{HTMLElement("output")}} 元素：用於腳本生成的輸出的容器
