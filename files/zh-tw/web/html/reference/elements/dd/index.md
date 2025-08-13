---
title: <dd>：描述詳細資料元素
slug: Web/HTML/Reference/Elements/dd
---

**`<dd>`** [HTML](/zh-TW/docs/Web/HTML) 元素提供描述、定義或前一個術語（{{HTMLElement("dt")}}）在描述清單（{{HTMLElement("dl")}}）中的值。

{{InteractiveExample("HTML Demo: &lt;dd&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 範例

有關範例，請參見[提供給 `<dl>` 元素的範例](/zh-TW/docs/Web/HTML/Reference/Elements/dl#examples)。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>無。</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        開始標籤是必需的。如果此元素緊接著另一個 <code>&#x3C;dd></code> 元素或 {{HTMLElement("dt")}} 元素，或者在父元素中沒有更多內容時，則結束標籤可以省略。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        一個 {{HTMLElement("dl")}} 或是 {{HTMLElement("dl")}} 的子元素的 {{HTMLElement("div")}}。<br />此元素可以在 {{HTMLElement("dt")}} 或另一個 {{HTMLElement("dd")}} 元素之後使用。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有相對應的角色</a
        >
        </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>不允許使用 <code>role</code></td>
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

- {{HTMLElement("dl")}}
- {{HTMLElement("dt")}}
