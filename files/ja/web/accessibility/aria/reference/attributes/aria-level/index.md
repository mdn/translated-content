---
title: aria-level
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-level
original_slug: Web/Accessibility/ARIA/Attributes/aria-level
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`aria-level` 属性は、構造内の要素の階層レベルを定義します。

## 解説

階層レベルは見出し、ツリー、入れ子グリッド、入れ子タブリストなどに現れます。 DOM の祖先が正確なレベルを表していない場合、 `aria-level` 属性を使用して、階層構造内の階層レベル要素を定義してください。レベルは深さと共に増加します。 `aria-level` の値は `1` 以上の整数です。

文書構造内の見出しに関しては、最初のレベルの見出し、 2 つ目のレベルの見出し、 3 つ目のレベルの見出しなどがあります。ツリーでは、ルート要素、その子要素、子要素の子要素（または孫要素）などがあります。

`aria-level` 属性は支援技術に階層を公開するので、ユーザーに伝えることができます。すべての ARIA 属性と同様に、ユーザーエージェントに影響を与えず、従ってユーザーエージェントによる文書構造の決定にも影響を与えません。

DOM の祖先がレベルを正確に表している場合、ユーザーエージェントは文書構造からアイテムのレベルを計算することができますので、 `aria-level` は冗長であるだけでなく、誤った情報を作成する危険性があります。 `aria-level` は、本当に文書構造から計算することが可能でない場合に、レベルの明示的な表示を提供するためにのみ使用しましょう。この属性が必要かどうかをテストしてください。ユーザーエージェントがレベルを計算できる場合は、 `aria-level` 属性を省略することが最善です。

### `heading` ロール内の場合

`aria-level` 属性は [`heading`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) ロールの要求される属性で、要素が見出しとして扱われるべきことを支援技術に示します。 `<div role="heading" aria-level="1">` は `<div>` をページの主見出しとして定義します。 `aria-level="2"` を定義するレベル 2 の見出しは最初のサブセクション、レベル 3 はそのサブセクション、といった具合になります。

```html
<div role="heading" aria-level="3">このサブセクションの見出し</div>
```

代わりに {{htmlelement("Heading_Elements", "h1")}} から {{htmlelement("Heading_Elements", "h6")}} 要素を使用してください。

### `treegrid` ロール内の場合

[`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) の場合、 `aria-level` はロール [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) を持つ要素に対応しており、ロール [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) を持つ要素には対応していません。行はグリッドの垂直方向の葉ノードとして動作します。グリッドセルは各行の水平方向の葉ノードです。 `aria-level` は行内のセルには対応していません。したがって、ツリーグリッドでは、 `aria-level` 属性は `row` ロールを持つ要素に適用されます。

利用できるノードの完全なセットが、ユーザーがツリー内でフォーカスを移動したり、ツリーをスクロールしたりする動的な読み込みのために DOM に存在しない場合、各ノードには `aria-level`, [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) が含まれています。

## 値

- `<integer>`
  - : 1 以上の値です。

## 関連するインターフェイス

- {{domxref("Element.ariaLevel")}}
  - : [`ariaLevel`](/ja/docs/Web/API/Element/ariaLevel) プロパティは {{domxref("Element")}} インターフェイスの一部で、 `aria-level` 属性の値を反映します。
- {{domxref("ElementInternals.ariaLevel")}}
  - : [`ariaLevel`](/ja/docs/Web/API/ElementInternals/ariaLevel) プロパティは {{domxref("ElementInternals")}} インターフェイスの一部で、 `aria-level` 属性の値を反映します。

## 関連するロール

以下のロール内で使用されます。

- [`associationlistitemkey`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`comment`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`heading`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`<h1>` から `<h6>`: HTML 見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) ({{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, {{htmlelement("Heading_Elements", "h6")}})
