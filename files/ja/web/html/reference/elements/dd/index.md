---
title: "<dd>: 詳細説明要素"
slug: Web/HTML/Reference/Elements/dd
original_slug: Web/HTML/Element/dd
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<dd>`** は [HTML](/ja/docs/Web/HTML) の要素で、説明リスト要素 ({{HTMLElement("dl")}}) 内で、その前の用語 ({{HTMLElement("dt")}}) の説明、定義、値などを示します。

{{InteractiveExample("HTML デモ: &lt;dd&gt;", "tabbed-standard")}}

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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `nowrap` {{Non-standard_inline}}
  - : この属性の値が `yes` とされた場合、定義部分のテキストは改行されません。既定値は `no` です。

## 例

例については、[`<dl>` 要素で提供されている例](/ja/docs/Web/HTML/Reference/Elements/dl#例)を参照してください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。この要素の直後に他の <code>&#x3C;dd></code> 要素または {{HTMLElement("dt")}} 要素がある場合、もしくは親要素内で後続する内容物がない場合は、終了タグが省略可能となる。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("dl")}} 要素または {{HTMLElement("dl")}} 要素内にある {{HTMLElement("div")}} 要素。<br />この要素は {{HTMLElement("dt")}} または他の {{HTMLElement("dd")}} の後に使うことができます。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role"><code>definition</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("dl")}}
- {{HTMLElement("dt")}}
