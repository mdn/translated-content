---
title: "ARIA: listitem ロール"
slug: Web/Accessibility/ARIA/Roles/listitem_role
---

ARIA のリスト項目 (`listitem`) ロールは、項目のリスト内の項目を識別するために使用できます。 これは、通常、リストコンテナーを識別するために使用するリスト (`list`) ロールと組み合わせて使用します。

```html
<section role="list">
  <div role="listitem">リスト項目 1</div>
  <div role="listitem">リスト項目 2</div>
  <div role="listitem">リスト項目 3</div>
</section>
```

## 説明

外側のコンテナーとその内側の要素のリストで構成されるコンテンツは、それぞれリスト (`list`) とリスト項目 (`listitem`) のコンテナーを使用して支援技術で識別できます。

リストとリスト項目をマークアップするためにどの要素を使用するべきかについて、鉄則はありませんが、リスト項目がリストのコンテキストで意味をなすようにするべきです (例えば、買い物リスト、料理の手順、運転の指示) 。

> **警告:** 可能な限り、適切な意味論の HTML 要素を使用して、リストとそのリスト項目 ({{htmlelement("ul")}} や {{htmlelement("ol")}} と {{htmlelement("li")}}) をマークアップするべきです。 詳しい例は、[ベストプラクティス](#best_practices)を参照してください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [list](/ja/docs/Web/Accessibility/ARIA/Roles/List_role)
  - : 項目のリスト。 リスト (`list`) ロールを持つ要素には、子として 1 つ以上のリスト項目 (`listitem`) ロールを持つ要素か、子として 1 つ以上のリスト項目 (`listitem`) ロールを持つ要素を含む 1 つ以上のグループ (`group`) ロールを持つ要素が必要です。
- [group](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role)
  - : ページの目次に掲載されるほど重要ではなく、リスト内にネストされている場合はリスト項目に限定される、関連するオブジェクトのコレクションです。 (訳注: リスト内にグループをネストできるという仕様は、ARIA 1.2 で、無くなる予定です。)

### キーボードインタラクション

無し

### 必要な JavaScript 機能

無し

## 例

[ARIA Lists](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — Scott O'Hara によるいくつかの有用な例と考え (英語)

## ベストプラクティス

`role="list"` と `role="listitem"` は必要な場合のみ使用してください。 例えば、HTML を制御できなくても、JavaScript で事後に動的にアクセシビリティを向上させることができる場合です。

可能な限り、適切な意味論の HTML 要素を使用して、リストとリスト項目 ({{htmlelement("ol")}} や {{htmlelement("ul")}} と {{htmlelement("li")}}) をマークアップするべきです。 例えば、上記の例は次のように書き直すべきです。

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

> **メモ:** タブ付きインターフェイスとして機能する項目のリストをマークアップする場合は、代わりにタブ (`tab`)、タブパネル (`tabpanel`)、タブリスト (`tablist`) のロールを使用するべきです。

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [HTML `<li>` 要素](/ja/docs/Web/HTML/Element/li)
- [HTML `<ul>` 要素](/ja/docs/Web/HTML/Element/ul)
- [HTML `<ol>` 要素](/ja/docs/Web/HTML/Element/ol)
- [ARIA: list ロール](/ja/docs/Web/Accessibility/ARIA/Roles/List_role)
- [ARIA: group ロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
