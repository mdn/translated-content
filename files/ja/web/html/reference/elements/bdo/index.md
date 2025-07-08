---
title: "<bdo>: 双方向文字列上書き要素"
slug: Web/HTML/Reference/Elements/bdo
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<bdo>`** は [HTML](/ja/docs/Web/HTML) の要素で、現在のテキストの書字方向を上書きし、中のテキストが異なる書字方向で描画されるようにします。

{{InteractiveExample("HTML デモ: &lt;bdo&gt;", "tabbed-standard")}}

```html interactive-example
<h1>有名な海辺の歌</h1>

<p>英語の歌 "Oh I do like to be beside the seaside"</p>

<p>
  ヘブライ語では次のように見えます。
  <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  コンピューターのメモリーには、これは次のように格納されます。
  <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css interactive-example
html {
  font-family: sans-serif;
}

bdo {
  /* ここにスタイルを追加 */
}
```

テキストの文字は指定された方向の開始位置から描画されます。それぞれの文字の向きには影響を与えません（ですから、例えば、文字は裏返しにはなりません）。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `dir`
  - : この要素の内容において、テキストが描画される方向です。以下の値が指定可能です。
    - `ltr`: テキストを左から右へ (left-to-right) 向かわせることを意味する指定。
    - `rtl`: テキストを右から左へ (right-to-left) 向かわせることを意味する指定。

## 例

```html
<!-- 書字方向を切り替える -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### 結果

{{EmbedLiveSample('Examples')}}

## メモ

HTML 4 の仕様では、この要素にイベントが指定されていません。イベントは XHTML で追加されました。これは、恐らく見落としでしょう。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>
        {{domxref("HTMLElement")}}。Gecko 1.9.2 (Firefox 4)
        以前では、Firefox はこの要素に対し
        <code
          ><a href="/ja/docs/Web/API/HTMLSpanElement"
            >HTMLSpanElement</a
          ></code
        >
        インターフェイスを実装しています。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する HTML 要素: {{HTMLElement("bdi")}}
