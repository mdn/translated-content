---
title: "ARIA: form ロール"
slug: Web/Accessibility/ARIA/Roles/form_role
---

フォーム (`form`) [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、HTML のフォームと同等の機能を提供するページ上の要素のグループを識別するために使用できます。

```html
<div role="form" id="contact-info" aria-label="連絡先">
  <!-- フォームのコンテンツ -->
</div>
```

これは、ユーザーの連絡先を収集して保存するフォームです。

> **警告:** 十分に正当な理由がない限り、ARIA の フォーム (`form`) ロールではなく、HTML の {{htmlelement("form")}} 要素を使用してフォームコントロールを格納してください。 HTML の `<form>` 要素は、支援技術にフォームがあることを伝えるのに十分です。

## 説明

フォーム (`form`) ランドマーク ([landmark](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)) は、(メイン ([`main`](/ja/docs/Web/Accessibility/ARIA/Roles/Main_role)) や検索 ([`search`](/ja/docs/Web/Accessibility/ARIA/Roles/Search_role)) など) 他の名前付きランドマークが適切でない場合に、全体として結合してフォームを作成する、項目とオブジェクトのコレクションを含むコンテンツのリージョンを識別します。

> **メモ:** {{htmlelement("form")}} 要素を使用すると、アクセス可能な名前が提供されている場合、コンテンツのセクションがフォーム (`form`) ランドマークとして自動的に伝えられます。 開発者は、ARIA を使用するよりも正しい意味論の HTML 要素を使用することを常に好むべきです。

可能であれば、HTML の {{htmlelement("form")}} 要素を使用してください。 `<form>` 要素は、アクセス可能な名前 (`aria-labelledby`、`aria-label`、`title` など) がある場合にフォーム (`form`) ランドマークを定義します。 ユーザーがフォームの目的を理解できるように、文書内の各フォームに一意のラベルを付けるようにしてください。 このラベルは、支援技術のユーザーだけでなく、全てのユーザーに表示するべきです。 フォームを検索機能に使用する場合は、フォーム (`form`) ランドマークの代わりに検索 (`search`) ランドマークを使用してください。

`role="form"` は、ページのリージョンを識別するために使用し、フォームフィールドそれぞれを識別するために使用しないでください。 `<form>` の代わりにフォーム (`form`) ランドマークを使用している場合でも、`<button>`、`<input>`、`<select>`、`<textarea>` などのネイティブな HTML フォームコントロールを使用することをお勧めします。

### 関連する WAI-ARIA のロール、ステート、プロパティ

ロールに固有のステートやプロパティはありません。

### キーボードインタラクション

ロールに固有のキーボードインタラクションはありません。

### 必要な JavaScript 機能

- `onsubmit`
  - : onSubmit イベントハンドラーは、フォームの送信時に発生するイベントを処理します。 `<form>` でないものは送信できないため、JavaScript を使用して、{{domxref("XMLHTTPRequest")}} などの代替データ送信メカニズムを構築する必要があります。

## 例

```html
<div role="form" id="send-comment" aria-label="コメントを追加">
  <label for="username">ユーザー名</label>
  <input
    id="username"
    name="username"
    autocomplete="nickname"
    autocorrect="off"
    type="text" />

  <label for="email">電子メール</label>
  <input
    id="email"
    name="email"
    autocomplete="email"
    autocapitalize="off"
    autocorrect="off"
    spellcheck="false"
    type="text" />

  <label for="comment">コメント</label>
  <textarea id="comment" name="comment"></textarea>

  <input value="コメント" type="submit" />
</div>
```

代わりに `<form>` を使用することをお勧めします。

```html
<form id="send-comment" aria-label="コメントを追加">....</form>
```

## アクセシビリティに関する懸念

### 控えめに使用する

[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書のより大きな全体的なセクションを識別することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

### 入力はフォームではない

[フォーム要素](/ja/docs/Web/HTML/Element#forms)（入力、テキスト領域、選択など）それぞれで `role="form"` を宣言する必要はありません。 それは、フォーム要素を包む HTML 要素で宣言するべきです。 理想的には、包む要素として {{htmlelement("form")}} 要素を使用し、`role="form"` を宣言しないでください。

### 検索

フォームを検索に使用する場合は、より専門化した `role="search"` 値を使用するべきです。

### ランドマークのラベル付け

ランドマークとして公開する必要がある、それぞれの {{htmlelement("form")}} 要素とフォームロール (form `role`) には、アクセス可能な名前を付ける必要があります。 この名前により、支援技術のユーザーはフォームランドマークの目的をすばやく理解できるようになります。

`role="form"` を与えたのと同じ要素で、`aria-labelledby`、`aria-label`、または `title` を使用して、アクセス可能な名前を付けます。

#### `role="form"` の使用

```html
<div role="form" id="gift-cards" aria-label="ギフトカードの購入">
  <!-- フォームのコンテンツ -->
</div>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`role="form"` の宣言に `aria-label="お問い合わせフォーム"` を使用した場合、「お問い合わせフォームフォーム」として重複してアナウンスすることがあります。

## ベストプラクティス

### 好ましい HTML

{{htmlelement("form")}} 要素を使用すると、セクションがフォーム (`form`) ロールを持つことを自動的に伝えます。 可能であれば、`<form>` を代わりに使用することをお勧めします。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、スクリーンリーダーを使用していないユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agrip.org.uk/landmarks/)（英語）

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- {{htmlelement("form")}}: フォーム要素
- {{htmlelement("legend")}}: 凡例要素
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
