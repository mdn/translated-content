---
title: "ARIA: listitem ロール"
short-title: listitem
slug: Web/Accessibility/ARIA/Reference/Roles/listitem_role
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

ARIA の `listitem` ロールは、項目のリスト内の項目を識別するために使用できます。 これは、通常、リストコンテナーを識別するために使用する [`list`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) ロールと組み合わせて使用します。

```html
<section role="list">
  <div role="listitem">リスト項目 1</div>
  <div role="listitem">リスト項目 2</div>
  <div role="listitem">リスト項目 3</div>
</section>
```

## 解説

外側のコンテナーとその内側の要素のリストで構成されるコンテンツは、それぞれ `list` と `listitem` のコンテナーを使用して支援技術で識別できます。

リストとリスト項目をマークアップするためにどの要素を使用するべきかについて、鉄則はありませんが、リスト項目がリストのコンテキストで意味をなすようにするべきです（例えば、買い物リスト、料理の手順、ドライブ時の道案内）。

> [!NOTE]
> 可能な限り、適切な意味論の HTML 要素を使用して、リストとそのリスト項目（{{HTMLElement("ul")}}/{{HTMLElement("ol")}} と {{htmlelement("li")}}）でマークアップするべきです。 詳しい例は、[ベストプラクティス](#ベストプラクティス)を参照してください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`list`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : 項目のリスト。 `list` ロールを持つ要素には、子として 1 つ以上の `listitem` ロールを持つ要素か、子として 1 つ以上の `listitem` ロールを持つ要素を含む 1 つ以上の `group` ロールを持つ要素が必要です。
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : ページの目次に掲載されるほど重要ではなく、リスト内にネストされている場合はリスト項目に限定される、関連するオブジェクトのコレクションです。

## ベストプラクティス

`role="list"` と `role="listitem"` は必要な場合のみ使用してください。 例えば、HTML を制御できなくても、JavaScript で事後に動的にアクセシビリティを向上させることができる場合です。

可能な限り、適切な意味論の HTML 要素を使用して、リストとリスト項目 ({{HTMLElement("ol")}} や {{HTMLElement("ul")}} と {{HTMLElement("li")}}) をマークアップするべきです。 例えば、上記の例は次のように書き直すべきです。

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

> [!NOTE]
> ARIA のリストロールとリスト項目ロールでは、順序付きリストと順序無しリストを区別しません。

> [!NOTE]
> CSS で `list-style: none;` を指定してリストのスタイル設定を行うと、リストの意味づけが除去されます。`role="listitem"` を追加すると、意味づけが復元されます。


> [!NOTE]
> タブ付きインターフェイスとして機能する項目のリストをマークアップする場合は、代わりに [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)、[`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)、[`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) の各ロールを使用するべきです。

## 仕様書

{{Specifications}}

## 関連情報

- [HTML `<li>` 要素](/ja/docs/Web/HTML/Reference/Elements/li)
- [HTML `<ul>` 要素](/ja/docs/Web/HTML/Reference/Elements/ul)
- [HTML `<ol>` 要素](/ja/docs/Web/HTML/Reference/Elements/ol)
- [ARIA: `list` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `group` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA Lists examples](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — Scott O'Hara
