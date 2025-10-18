---
title: <meta> name 属性
short-title: <meta> name
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`name`** 属性は {{htmlelement("meta")}} 要素で、メタデータを名前と値の組み合わせで提供します。
`<meta>` 要素に `name` 属性がある場合、 [`content`](/ja/docs/Web/HTML/Reference/Attributes/content) 属性で対応する値を定義します。
メタデータは、ページ全体に適用される「文書レベルメタデータ」です。

例えば、次の `<meta>` タグは、文書内のメタデータとして `description` を提供します。

```html
<meta
  name="description"
  content="HTML リファレンスには、すべての要素と属性、およびすべての要素に適用されるグローバル属性が含まれています。" />
```

## 値

### HTML 仕様書で定義されている meta name

HTML 仕様書では、次の一連の標準メタデータ名を定義しています。

- `application-name`
  - : ブラウザーは、ウェブページで実行されているアプリケーションを識別するためにこれを使用する場合があります。
    これは、アプリケーション（またはウェブサイト）の名前を含む場合のある {{HTMLElement("title")}} 要素とは異なります。 `<title>` は、文書名や状態などのコンテキスト情報を追加することがあります。
    個々のページは、自分自身で固有の `application-name` を定義してはいけません。
    翻訳を提供するには、複数の `<meta>` タグにそれぞれの言語に対応する `lang` 属性を設定して使用してください。

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : 文書の著者の名前です。
- [`color-scheme`](/ja/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : 文書と互換性のある 1 つ以上の複数の配色を指定します。
    ブラウザーは、この情報をユーザーのブラウザーや端末の設定と合わせて使用し、背景や前景、フォームコントロールやスクロールバーなど、あらゆるものに使用する色を決定します。
    `<meta name="color-scheme">` の主な用途は、ライトモードとダークモードの互換性と優先順位を示すことです。
- `description`
  - : ページのコンテンツの簡潔で正確な概要で、ふつう「メタディスクリプション」と呼ばれます。
    Google などの検索エンジンは、このメタデータを使用して、[検索結果に表示されるウェブページの見え方](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions)（英語）を調整しています。
- `generator`
  - : ページを生成したソフトウェアの識別子です。
- `keywords`
  - : ページのコンテンツに関連する単語をカンマで区切ったものです。
- [`referrer`](/ja/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : この文書から送信されるリクエストの HTTP {{httpheader("Referer")}} ヘッダーを制御します。
- [`theme-color`](/ja/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : ユーザーエージェントが、ページまたはその周辺のユーザーインターフェイスの表示をカスタマイズするために使用すべき提案としての色を示します。
    [`content`](/ja/docs/Web/HTML/Reference/Attributes/content) 属性は、有効な CSS の {{cssxref("&lt;color&gt;")}} を含んでいます。
    [`media`](/ja/docs/Web/HTML/Reference/Elements/meta#media) 属性で有効なメディアクエリーのリストを記載することで、テーマカラーメタデータが適用されるメディアを設定することができます。

### 他の仕様書で定義されている meta name

CSS 端末適応仕様書では、以下のメタデータ名を定義しています。

- [`viewport`](/ja/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : {{glossary("viewport", "ビューポート")}}の初期サイズに関するヒントを与えます。

### WHATWG MetaExtensions wiki で定義されているメタデータ名

[WHATWG Wiki MetaExtensions ページ](https://wiki.whatwg.org/wiki/MetaExtensions) には、標準外のメタデータ名の大規模なセットが含まれています。
記載されている名前のいくつかは、実際にはごく一般に使用されています。特に、次のものが挙げられます。

- `creator`
  - : この文書の作成者（組織や機関など）の名前です。
    複数ある場合は、複数の {{HTMLElement("meta")}} 要素を使用する必要があります。
- `googlebot`
  - : `robots` と同様ですが、 Googlebot （Google のインデックス作成用クローラー）のみが従います。
- `publisher`
  - : この文書の発行者の名前です。
- [`robots`](/ja/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : 協力的なクローラー、つまり「ロボット」がページに対して使用すべき動作です。以下の値をカンマで区切ったリストです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビューポートの `<meta>` タグ](/ja/docs/conflicting/Web/HTML/Reference/Elements/meta/name/viewport)
- [メタデータ: `<meta>` 要素](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#メタデータ_meta_要素)
