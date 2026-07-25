---
title: HTML `<dt>` 説明用語要素
short-title: <dt>
slug: Web/HTML/Reference/Elements/dt
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<dt>`** は [HTML](/ja/docs/Web/HTML) の要素で、説明または定義リストの中で用語を表す部分であり、{{HTMLElement("dl")}} の子要素としてのみ用いることができます。普通は {{HTMLElement("dd")}} 要素が続きます。しかし、複数の `<dt>` 要素が続くと、複数の用語がすぐ後に続く {{HTMLElement("dd")}} 要素で定義されていることを表します。

後に続く {{HTMLElement("dd")}}（**詳細説明**）要素は、 `<dt>` を用いて指定した用語について、定義やその他の関連する文字列を表します。

{{InteractiveExample("HTML デモ: &lt;dt&gt;", "tabbed-standard")}}

```html interactive-example
<p>新しい家には次の塗装を使用してください。</p>

<dl>
  <dt>デニム（半光沢仕上げ）</dt>
  <dd>屋根</dd>

  <dt>デニム（卵殻仕上げ）</dt>
  <dt>夕焼け空（卵殻仕上げ）</dt>
  <dd>壁に重ね塗り</dd>
</dl>
```

```css interactive-example
p,
dl {
  font:
    1rem "Fira Sans",
    sans-serif;
}

dl > dt {
  font-weight: normal;
  font-style: oblique;
}

dd {
  margin-bottom: 1rem;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみを持っています。

## 例

例については、[`<dl>` 要素で提供されている例](/ja/docs/Web/HTML/Reference/Elements/dl#例)を参照してください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >。ただし配下に {{HTMLElement("header")}}、{{HTMLElement("footer")}}、区分コンテンツ、見出しコンテンツがないもの。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。終了タグについては、他の <code>&#x3C;dt></code> または {{HTMLElement("dd")}} 要素が後続する場合、もしくは親要素の中にそれ以上のコンテンツがない場合は省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("dl")}} または（{{Glossary("WHATWG")}} HTML および {{Glossary("W3C")}} HTML 5.2 以降においては）{{HTMLElement("dl")}} の子である {{HTMLElement("div")}}。<br />この要素は {{HTMLElement("dd")}} または他の <code>&lt;dt&gt;</code> の前で使用することができる。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role"
            >listitem</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>
        {{domxref("HTMLElement")}}。 Gecko 1.9.2 (Firefox 4) 以前では、Firefox はこの要素に対し {{domxref("HTMLSpanElement")}} インターフェイスを実装していました。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("dl")}}
- {{HTMLElement("dd")}}
