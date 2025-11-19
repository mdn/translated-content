---
title: "<meta>: メタデータ要素"
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<meta>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{Glossary("Metadata","メタデータ")}}を表します。これは、他のメタ関連要素 ({{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}) で表すことができないものを表します。

`<meta>` 要素で提供されるメタデータの型は、以下のいずれかになります。

- [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性が設定されている場合、`<meta>` 要素は文書レベルメタデータを提供し、ページ全体に適用されます。
- [`http-equiv`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv) 属性が設定されている場合、 `<meta>` 要素はプラグマディレクティブであり、同様の名前の HTTP ヘッダーによって与えられるものと同等の情報を提供します。
- [`charset`](#charset) 属性が設定されている場合、 `<meta>` 要素は文字セット宣言であり、文書がどの文字エンコーディングでエンコードされているかを指定します。
- [`itemprop`](/ja/docs/Web/HTML/Reference/Global_attributes/itemprop) 属性が設定されている場合、 `<meta>` 要素はユーザー定義のメタデータを提供します。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

> [!NOTE]
> [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性は `<meta>` 要素において特別な意味を持ちます。
> [`itemprop`](/ja/docs/Web/HTML/Reference/Global_attributes/itemprop) 属性は、 `<meta>` 要素にすでに [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name), [`http-equiv`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv), [`charset`](#charset) のいずれかがある場合は設定してはいけません。

- `charset`
  - : この属性は、文書の文字エンコーディングを宣言します。この属性が存在する場合、その値は ASCII 文字列で大文字小文字の区別なく `"utf-8"` と一致する必要があります。 UTF-8 が HTML5 文書で唯一の有効なエンコーディングだからです。文字エンコーディングを宣言する `<meta>` 要素は、文書の最初の 1024 バイトの中に完全に収まっている必要があります。
- [`content`](/ja/docs/Web/HTML/Reference/Attributes/content)
  - : この属性は状況に応じて、[`http-equiv`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv) 属性または [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性に関連付けられた値を持ちます。
- [`http-equiv`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv)
  - : 文書を処理するためのブラウザーへの指示であるプラグマディレクティブを定義します。
    属性名が `http-equivalent` の短縮形なのは、利用できる値が同等の HTTP ヘッダーの名前だからです。
- `media`
  - : `media` 属性は、 `content` 属性で定義されたテーマ色を適用するメディアを定義します。
    値は[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)で、属性が指定されていない場合は既定で `all` になります。
    この属性は、要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性が [`theme-color`](/ja/docs/Web/HTML/Reference/Elements/meta/name/theme-color) に設定されている場合にのみ関連します。
    それ以外の場合、効果はありませんので、含めないでください。
- [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name)
  - : `name` 属性と `content` 属性を一緒に使用すると、文書のメタデータを名前と値のペアで提供することができます。 `name` 属性はメタデータの名前、 `content` 属性がその値を指定します。

## 例

### meta 記述の設定

次の `<meta>` タグは、ウェブページのメタデータとして `description` を提供します。

```html
<meta
  name="description"
  content="HTML リファレンスでは、すべての要素および属性について、すべての要素に適用されるグローバル属性も含めて説明しています。" />
```

### ページリダイレクトの設定

次の例では、`http-equiv="refresh"` を使用して、ブラウザーにリダイレクトを実行するように指示しています。

`content="3;url=https://www.mozilla.org"` 属性は、3 秒後にページを `https://www.mozilla.org` にリダイレクトします。

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >。 <a href="/ja/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a> 属性がある場合は<a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >。
      </td>
    </tr>
    <tr>
      <th>許可されている内容</th>
      <td>なし。これは{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th>タグの省略</th>
      <td>
        空要素であるため開始タグは必須であり、終了タグは置いてはいけません。
      </td>
    </tr>
    <tr>
      <th>許可されている親要素</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>, <code>&#x3C;meta http-equiv></code>: {{HTMLElement("head")}} 要素。 <a href="/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv"><code>http-equiv</code></a> がエンコーディング宣言ではない場合は、 <code>&#x3C;head></code> 要素内にある {{HTMLElement("noscript")}} 要素の内部にも配置できます。
          </li>
          <li>
            <code>&#x3C;meta name></code>: <a
              href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ"
              >メタデータコンテンツ</a
            >を受け入れるすべての要素。
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: <a
              href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ"
              >メタデータコンテンツ</a
            >または<a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
              >フローコンテンツ</a
            >を受け入れるすべての要素。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th>DOM インターフェイス</th>
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [標準メタデータ名](/ja/docs/Web/HTML/Reference/Elements/meta/name)
- [学習: `<meta>`](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#メタデータ_meta_要素)
- [viewport メタタグ](/ja/docs/conflicting/Web/HTML/Reference/Elements/meta/name/viewport)
