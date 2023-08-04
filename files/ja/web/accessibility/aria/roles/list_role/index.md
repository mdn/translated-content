---
title: "ARIA: list ロール"
slug: Web/Accessibility/ARIA/Roles/list_role
---

ARIA のリスト (`list`) ロールは、項目のリストを識別するために使用できます。 これは通常、リスト内に含まれるリスト項目を識別するために使用するリスト項目 (`listitem`) ロールと組み合わせて使用します。

```html
<section role="list">
  <div role="listitem">リスト項目 1</div>
  <div role="listitem">リスト項目 2</div>
  <div role="listitem">リスト項目 3</div>
</section>
```

## 説明

外側のコンテナーとその内側の要素のリストで構成されるコンテンツは、それぞれリスト (`list`) とリスト項目 (`listitem`) のコンテナーを使用して支援技術で識別できます。 リスト (`list`) は、1 つ以上のリスト項目 (`listitem`) の子を持つか、代わりに 1 つ以上のグループ (`group`) が子として存在し、各グループ (`group`) が 1 つ以上のリスト項目 (`listitem`) を子として持つ必要があります。

リストとリスト項目をマークアップするためにどの要素を使用するべきかについて、鉄則はありませんが、リスト項目がリストのコンテキストで意味をなすようにするべきです (例えば、買い物リスト、料理の手順、運転の指示) 。

> **警告:** 可能な限り、適切な意味論の HTML 要素を使用して、リストとそのリスト項目 ({{htmlelement("ul")}} や {{htmlelement("ol")}} と {{htmlelement("li")}}) をマークアップするべきです。 詳しい例は、[ベストプラクティス](#best_practices)を参照してください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [listitem](/ja/docs/Web/Accessibility/ARIA/Roles/Listitem_role)
  - : リストやディレクトリー内の単一項目。 リスト項目ロールを持つ要素は、リスト (`list`) ロールやグループ (`group`) ロールを持つ要素内にのみ存在します。
- [group](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role)
  - : ページの目次に掲載されるほど重要ではなく、リスト内にネストされている場合はリスト項目に限定される、関連するオブジェクトのコレクションです。

### キーボードインタラクション

無し

### 必要な JavaScript 機能

無し

## 例

[ARIA Lists](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — Scott O'Hara によるいくつかの有用な例と考え (英語)

## ベストプラクティス

`role="list"` と `role="listitem"` は必要な場合のみ使用してください。 例えば、HTML を制御できなくても、JavaScript で事後に動的にアクセシビリティを向上させることができる場合です。

HTML の {{htmlelement("ol")}} と {{htmlelement("ul")}} とは異なり、ARIA のリスト (`list`) ロールは順序付きリストと順序無しリストを区別しません。 可能な場合は、リスト ({{htmlelement("ol")}} と {{htmlelement("ul")}}) とリスト項目 ({{htmlelement("li")}}) をマークアップするのに適切な意味論の HTML 要素を使用するべきです。 例えば、上記の例は次のように書き直すべきです。

```html
<ul>
  <li>リスト項目 1</li>
  <li>リスト項目 2</li>
  <li>リスト項目 3</li>
</ul>
```

また、リスト項目の順序が重要な場合は、順序付きリストを使用します。

```html
<ol>
  <li>リスト項目 1</li>
  <li>リスト項目 2</li>
  <li>リスト項目 3</li>
</ol>
```

> **メモ:** ARIA のリストロールとリスト項目ロールでは、順序付きリストと順序無しリストを区別しません。

余談ですが、意味論的な HTML 要素である `ol` または `ul` を使用してプレゼンテーション ([`presentation`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role)) ロールを適用する場合、ARIA ではリスト項目 (`listitem`) 要素に親のリスト (`list`) 要素が必須であるため、各子 `li` 要素はプレゼンテーション (`presentation`) ロールを継承することに注意してください。 そのため、`li` 要素は支援技術には公開されませんが、ネストされたリストを含め、これらの `li` 要素の内部に含まれる要素は、支援技術からは見えることになります。

> **メモ:** タブ付きインターフェイスとして機能する項目のリストをマークアップする場合は、代わりにタブ (`tab`)、タブパネル (`tabpanel`)、タブリスト (`tablist`) のロールを使用するべきです。

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- {{htmlelement("ul")}}
- {{htmlelement("ol")}}
- {{htmlelement("li")}}
- [ARIA: listitem ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Listitem_role)
- [ARIA: group ロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
