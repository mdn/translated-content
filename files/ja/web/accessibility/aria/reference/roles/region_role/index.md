---
title: "ARIA: region ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
original_slug: Web/Accessibility/ARIA/Roles/region_role
---

**`region`** ロールは、著者が重要だと判断した文書内の領域を識別するために使います。これは汎用的なランドマークであり、他のランドマークロールが適切でない場合にナビゲーションを補助するために利用できます。

```html
<div role="region" aria-label="例">
  <!-- 領域のコンテンツ -->
</div>
```

## 説明

`region` ロールは [ARIA ランドマーク](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール)ロールの 1 つです。
`region` ロールは、ユーザーがそのセクションへ簡単に移動したい可能性が高く、ページの要約にも列挙されるべき重要なコンテンツ領域に限定して使用してください。region ロールはより汎用的な名称であり、識別したいセクションを [`banner`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)、[`main`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)、[`contentinfo`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)、[`complementary`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)、[`navigation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role) などの他のランドマークロールで正確に表現できない場合にのみ使用するべきです。

`region` ロールを持つすべての要素には、その領域内コンテンツの目的を表すラベルを付けるべきです。可能であれば、目に見える見出しを参照する [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使うのが望ましいです。適切な目に見える見出しが存在しない場合は、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。

`region` ランドマークロール内のコンテンツは、文書の主コンテンツから分離しても意味が通るようにするべきです。

{{HTMLElement('section')}} 要素を使うと、アクセシブル名が与えられている場合に、そのセクションが `region` ロールであることが自動的に伝えられます。開発者は ARIA を使うよりも、今回であれば `<section>` のような適切なセマンティック HTML 要素を常に優先するべきです。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) または [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : この属性を使って領域にラベルを付けます。多くの場合 `aria-labelledby` 属性の値には、セクションのタイトルに使う要素の id を指定します。適切な目に見える見出しが存在しない場合は、`aria-label` を使用するべきです。

## 例

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    この見出しの `id` 属性により、この領域にアクセシブル名を付けられます
  </h2>
  <!-- 領域のコンテンツ -->
</div>
```

## アクセシビリティに関する懸念

控えめに使用してください。[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール) は、文書内の大きなセクションを識別するために、控えめに使うことが意図されています。ランドマークロールを多用しすぎると、スクリーンリーダーでは「ノイズ」が増え、ページ全体のレイアウトを把握しにくくなります。

該当する [区分コンテンツ](/ja/docs/Web/HTML/Reference/Elements#区分コンテンツ) 要素や [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール) がない場合にのみ `region` ロールを使用してください。ページに複数の領域が存在する場合は、ページ全体の構造を再検討する価値があります。

## ベストプラクティス

### 好ましい HTML

{{HTMLElement('section')}} 要素を使うと、その要素が `region` ロールであることが自動的に伝わります。可能であれば、`region` ロールの代わりにセマンティックな `<section>` 要素を優先するべきです。

### ランドマークへのラベル付け

文書内に複数の `region` ランドマークロールが存在する場合は、それぞれに固有のラベルを付けてください。このラベルにより、支援技術のユーザーは各ランドマークの目的を素早く理解できます。

```html
<div role="region" aria-labelledby="use-discretion">
  <h3 id="use-discretion">`region` ロールの使用は慎重に行ってください</h3>
  <!-- コンテンツ -->
</div>

...

<div role="region" aria-labelledby="please-reconsider">
  <h3 id="please-reconsider">文書構造を再検討してください</h3>
  <!-- コンテンツ -->
</div>
```

この例では、領域のラベルは [`aria-labelledby` 属性](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) によって生成されています。

### オーバーフローテキストを含むコンテンツ領域のスクロール

`tabindex="0"` を持つコンテンツ領域がある場合、`role="region"` を追加すると、それが汎用の領域であることをスクリーンリーダーユーザーに伝えられます。これは、キーボードのみを使うユーザーがオーバーフローテキストを含む領域をスクロールできるようにするためです。

### SVG

SVG の個々のセクションを説明できるように、{{SVGElement('svg')}} の領域に `role="region"` を `aria-label` と一緒に宣言できます。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('section')}} 要素
- [ARIA: `banner` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `main` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `contentinfo` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `complementary` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `navigation` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [ランドマークロール: ARIA の使用: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/Guides/Techniques#ランドマークロール)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
