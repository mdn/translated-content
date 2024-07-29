---
title: <dfn>：定義元素
slug: Web/HTML/Element/dfn
---

{{HTMLSidebar}}

**`<dfn>`** [HTML](/zh-TW/docs/Web/HTML) 元素表示要定義的術語。`<dfn>` 元素應該在完整的定義語句中使用，其中 `<dfn>` 元素的祖先 {{HTMLElement("p")}} 元素、{{HTMLElement("dt")}}/{{HTMLElement("dd")}} 配對或 `<dfn>` 元素的最近 {{HTMLElement("section")}} 祖先被認為是該術語的完整定義。

{{EmbedInteractiveExample("pages/tabbed/dfn.html", "tabbed-shorter")}}

## 屬性

該元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

[`title`](/zh-TW/docs/Web/HTML/Global_attributes#title) 屬性具有特殊意義，如下所述。

## 使用注意事項

使用 `<dfn>` 元素有一些不那麼顯而易見的方面。我們在這裡進行探討。

### 指定要定義的術語

遵循以下規則識別要定義的術語：

1. 如果 `<dfn>` 元素有 [`title`](/zh-TW/docs/Web/HTML/Global_attributes#title) 屬性，則 `title` 屬性的值被視為要定義的術語。元素仍然必須包含文本，但該文本可以是縮寫（可能使用 {{HTMLElement("abbr")}}）或術語的其他形式。
2. 如果 `<dfn>` 包含單個子元素並且自身沒有任何文本內容，且子元素是具有自己的 `title` 屬性的 {{HTMLElement("abbr")}} 元素，那麼 `<abbr>` 元素的 `title` 的確切值就是要定義的術語。
3. 否則， `<dfn>` 元素的文本內容就是要定義的術語。這在下面的[第一個範例](#基本識別術語)中顯示。

> [!NOTE]
> 如果 `<dfn>` 元素有 `title` 屬性，則它*必須*包含要定義的術語，並且不能包含其他文本。

### 連結到 `<dfn>` 元素

如果在 `<dfn>` 元素上包含 [`id`](/zh-TW/docs/Web/HTML/Global_attributes#id) 屬性，則可以使用 {{HTMLElement("a")}} 元素連結到它。這些鏈接應該是術語的使用，意在讓讀者如果尚不了解術語，就可以通過點擊術語的連結快速導航到術語的定義。

這在下面的[連結到定義](#連結到定義)範例中顯示。

## 範例

讓我們看一些不同使用情境的範例。

### 基本識別術語

此範例使用普通的 `<dfn>` 元素來識別定義中術語的位置。

#### HTML

```html
<p>
  The <strong>HTML Definition element (<dfn>&lt;dfn&gt;</dfn>)</strong> is used
  to indicate the term being defined within the context of a definition phrase
  or sentence.
</p>
```

由於 `<dfn>` 元素沒有 `title`，因此 `<dfn>` 元素本身的文本內容被用作要定義的術語。

#### 結果

{{EmbedLiveSample("基本識別術語", 650, 120)}}

### 連結到定義

要添加到定義的連結，你可以像通常一樣使用 {{HTMLElement("a")}} 元素創建連結。

#### HTML

```html-nolint
<p>
  The
  <strong>HTML Definition element (<dfn id="definition-dfn">&lt;dfn&gt;</dfn>)</strong>
  is used to indicate the term being defined within the context of a definition
  phrase or sentence.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece donan, Latine
  voluptatem vocant. Confecta res esset. Duo Reges: constructio interrete.
  Scrupulum, inquam, abeunti;
</p>

<p>
  Because of all of that, we decided to use the
  <code><a href="#definition-dfn">&lt;dfn&gt;</a></code> element for this
  project.
</p>
```

這裡我們看到了定義，現在具有一個 [`id`](/zh-TW/docs/Web/HTML/Global_attributes#id) 屬性，`"definition-dfn"`，可以用作連結的目標。稍後，使用 `<a>` 元素創建了一個連結，將 [`href`](/zh-TW/docs/Web/HTML/Element/a#href) 屬性設置為 `"#definition-dfn"` 以設置回到定義的連結。

#### 結果

{{EmbedLiveSample("連結到定義", 650, 300)}}

### 同時使用縮寫和定義

在某些情況下，你可能希望在定義術語時使用縮寫。這可以通過將 `<dfn>` 和 {{HTMLElement("abbr")}} 元素配對使用來完成，如下所示：

#### HTML

```html
<p>
  The <dfn><abbr title="Hubble Space Telescope">HST</abbr></dfn> is among the
  most productive scientific instruments ever constructed. It has been in orbit
  for over 20 years, scanning the sky and returning data and photographs of
  unprecedented quality and detail.
</p>

<p>
  Indeed, the <abbr title="Hubble Space Telescope">HST</abbr> has arguably done
  more to advance science than any device ever built.
</p>
```

請注意 `<abbr>` 元素嵌套在 `<dfn>` 元素內。前者確定該術語是一個縮寫（「HST」），並在其 `title` 屬性中指定完整術語（「哈勃太空望遠鏡」）。 後者表示縮寫術語代表一個被定義的術語。

#### 結果

{{EmbedLiveSample("同時使用縮寫和定義", 650, 200)}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories">內容類型</a>
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容">段落型內容</a>、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容">段落型內容</a>，但不能有任何 {{HTMLElement("dfn")}} 元素作為後代。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容">段落型內容</a>的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/term_role"><code>term</code></a></td>
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

- 與定義列表相關的元素：{{HTMLElement("dl")}}、{{HTMLElement("dt")}}、{{HTMLElement("dd")}}
- {{HTMLElement("abbr")}}
