---
title: "ARIA: list ロール"
short-title: list
slug: Web/Accessibility/ARIA/Reference/Roles/list_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

ARIA の `list` ロールは、アイテムのリストを識別するために使用できます。 これは通常、リスト内に含まれるリストアイテムを識別するために使用する `listitem` ロールと組み合わせて使用します。

```html
<div role="list">
  <div role="listitem">リストアイテム 1</div>
  <div role="listitem">リストアイテム 2</div>
  <div role="listitem">リストアイテム 3</div>
</div>
```

## 解説

外側のコンテナーと、その中に含まれる要素のリストで構成されるコンテンツは、それぞれ `list` および `listitem` コンテナーを使用することで、支援技術に識別させることができます。`list` には、0 個以上の `listitem` 子要素のみを含めることができます。

リストやリストアイテムをマークアップする際にどの要素を使うべきかについて、鉄則はありませんが、リストアイテムがリストというコンテキストにおいて意味をなすものであることを確認する必要があります。例えば、買い物リスト、レシピの手順、道順などが挙げられます。

> [!NOTE]
> 可能な限り、適切な意味論の HTML 要素を使用して、リストとそのリストアイテム ({{HTMLElement("ul")}} や {{HTMLElement("ol")}} と {{HTMLElement("li")}}) をマークアップするべきです。 詳しい例は、[ベストプラクティス](#ベストプラクティス)を参照してください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`listitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
  - : リスト内の単一のアイテムです。`listitem` ロールを持つ要素は、`list` ロールを持つ要素内にのみ存在します。

## ベストプラクティス

`role="list"` と `role="listitem"` は必要な場合のみ使用してください。 例えば、HTML を制御できなくても、JavaScript で事後に動的にアクセシビリティを向上させることができる場合です。

HTML の {{HTMLElement("ol")}} と {{HTMLElement("ul")}} とは異なり、ARIA のリスト (`list`) ロールは順序付きリストと順序無しリストを区別しません。 可能な場合は、リスト ({{HTMLElement("ol")}} と {{HTMLElement("ul")}}) とリストアイテム ({{HTMLElement("li")}}) をマークアップするのに適切な意味論の HTML 要素を使用するべきです。 例えば、上記の例は次のように書き直すべきです。

```html
<ul>
  <li>リストアイテム 1</li>
  <li>リストアイテム 2</li>
  <li>リストアイテム 3</li>
</ul>
```

また、リストアイテムの順序が重要な場合は、順序付きリストを使用します。

```html
<ol>
  <li>リストアイテム 1</li>
  <li>リストアイテム 2</li>
  <li>リストアイテム 3</li>
</ol>
```

> [!NOTE]
> ARIA の `list` ロールと `listitem` ロールでは、順序付きリストと順序無しリストを区別しません。

余談ですが、意味論的な HTML 要素である `ol` または `ul` を使用してプレゼンテーション ([`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)) ロールを適用する場合、ARIA では `listitem` 要素に親の `list` 要素が必須であるため、各子 `<li>` 要素は `presentation` ロールを継承することに注意してください。 そのため、`<li>` 要素は支援技術には公開されませんが、ネストされたリストを含め、これらの `<li>` 要素の内部に含まれる要素は、支援技術からは見えることになります。

> [!NOTE]
> タブ付きインターフェイスとして機能するアイテムのリストをマークアップする場合は、代わりに [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) の各ロールを使用するべきです。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement("ul")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("li")}}
- [ARIA: listitem ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Lists examples](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — by Scott O'Hara
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
