---
title: aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
l10n:
  sourceCommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`aria-label` 属性は対話型要素にラベル付けする文字列値を定義します。

## 解説

要素の既定の [アクセシブル名](https://w3c.github.io/accname/#dfn-accessible-name) がなかったり、その内容を正確に記述していなかったりして、オブジェクトに意味を与えるために関連付けることができるコンテンツが DOM に表示されていないことがあります。よくある例は、 SVG や[アイコンフォント（使用すべきではない）](https://www.youtube.com/watch?v=9xXBYcWgCHA)を含む、テキストのないボタンです。

対話型要素にアクセシブル名がないか、または正確でないアクセシブル名があり、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性で参照できるコンテンツが DOM にない場合、`aria-label` 属性を使用して、設定する対話型要素にラベル付けする文字列を定義することができます。これは要素にアクセシビリティ名を提供します。

```html
<button aria-label="Close" onclick="myDialog.close()">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="#000" />
  </svg>
</button>
```

> **メモ:** `aria-label`は、DOMにラベルとして参照する適切なテキストがない場合に、対話型要素、または他の ARIA 宣言によって対話するように作られた要素に使用することができます。

ほとんどのコンテンツは、それを直接囲む要素のテキストコンテンツから生成されるアクセシブル名を持っています。アクセシブル名は、特定の属性や関連要素によって作成することもできます。

既定では、ボタンのアクセシブル名は {{HTMLElement('button')}} の開始タグと終了タグの間のコンテンツであり、画像のアクセシブル名はその [`alt`](/ja/docs/Web/HTML/Element/img#alt) 属性のコンテンツであり、フォーム入力のアクセシブル名は関連付けられた {{HTMLElement('label')}} 要素のコンテンツです。

これらのオプションが利用できない場合、または既定のアクセシブル名が適切でない場合は、 `aria-label` 属性を使用して要素のアクセシブル名を定義します。

`aria-label` は、要素にラベル付けできるテキストが見えない場合に使用することができます。要素をラベル付けする可視テキストがある場合、代わりに [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) を使用してください。

`aria-label` の目的は `aria-labelledby` と同じです。どちらも要素にアクセシビリティ名を指定します。参照する要素に目に見える名前がない場合、 `aria-label` を使用してユーザーに認識可能なアクセシビリティ名を提供することができます。ラベルテキストが DOM で利用でき、 DOM のコンテンツを参照し、使い勝手も受け入れられる場合は、 `aria-labelledby` を使用することを推奨します。両方を記載しないでください。同じ要素に両方が存在する場合、 `aria-labelledby` が `aria-label` よりも優先されます。

> **メモ:** `aria-label` はアクセシビリティ名を持つことができる任意の要素で使用することができますが、実際には、 `aria-label` は対話型要素、ウィジェット、ランドマーク、画像、 iframe でのみ対応しています。

`aria-label` 属性は通常の意味づけされた HTML 要素で使用することができます。 [ARIA `role`](/ja/docs/Web/Accessibility/ARIA/Roles) が割り当てられている要素に限定されません。

`aria-label` を「使いすぎない」ようにしてください。例えば、 `aria-label` ではなく、 `aria-describedby` や `aria-description` で可視テキストを使用し、追加の指示を提供したり、 U Iを明確にしたりしてください。常に覚えておいてほしいのは、スクリーンリーダーだけを対象にして指示を出す必要はないということです。もし指示が必要であれば、すべての人に提供しましょう（できれば、 UI をより直感的なものにしましょう）。

すべての要素にアクセシブル名を指定できるわけではありません。 `aria-label` や `aria-labelledby` は、非対話型要素や、`code`、`term`、`emphasis` などのインライン構造ロールや、 `presentation`、`none`、`hidden` などのアクセシビリティ API に意味づけが割り当てられないロールでは使用しないでください。 `aria-label` 属性は対話型要素のみを意図しています。リンク、動画、フォームコントロール、[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles)、[ウィジェットロール](/ja/docs/Web/Accessibility/ARIA/Roles#2._widget_roles)のようなすべての対話型要素の DOM で何も表示されていないときに、アクセシブル名が指定されるようにするには `aria-label` を使用してください。

もし {{HTMLElement('iframe')}} に `title`、画像に `alt` 属性、入力に関連する {{HTMLElement('label')}} を与えた場合、 `aria-label` は必要ありません。しかし、 `aria-label` が存在する場合、`iframe`、画像、入力のアクセシブル名として、それぞれ `title`、`alt`、`<label>`よりも優先されます。

> **メモ:** `aria-label` は支援技術にしか「見えません」。もしその情報が AT ユーザーに追加するほど重要なものであれば、すべてのユーザーに見えるようにすることを検討してください。

## 値

- `<string>`
  - : オブジェクトのアクセシブル名となる文字列。

## 関連インターフェイス

- {{domxref("Element.ariaLabel")}}
  - : [`ariaLabel`](/ja/docs/Web/API/Element/ariaLabel) プロパティは {{domxref("Element")}} インターフェイスの一部で、 `aria-label` 属性の値を反映します。
- {{domxref("ElementInternals.ariaLabel")}}
  - : [`ariaLabel`](/ja/docs/Web/API/ElementInternals/ariaLabel) プロパティは {{domxref("ElementInternals")}} インターフェイスの一部で、 `aria-label` 属性の値を反映します。

## 関連するロール

作者がアクセシブル名を提供できないロールを**除く**ほとんどすべてのロールで使用します。

`aria-label` に対応して**いない**ものは次の通りです。

- [`code`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/ja/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/ja/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/ja/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/ja/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/ja/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)

> **メモ:** `aria-label`属性は対話型要素のみを意図しています。掲載されているような非対話型要素に配置すると、読まれなかったり、対話型要素のように振る舞う非対話型要素としてユーザーを混乱させるかもしれません。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('label')}} 要素
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Using HTML landmark roles to improve accessibility](/en-US/blog/aria-accessibility-html-landmark-roles/) (MDN blog, 2023)

<section id="Quick_links">
<strong><a href="/ja/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA 状態とプロパティ</a></strong>
{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/aria/Attributes")}}
</section>
