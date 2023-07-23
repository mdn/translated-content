---
title: "ARIA: region ロール"
slug: Web/Accessibility/ARIA/Roles/region_role
---

リージョン (`region`) [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書内で、著者が重要であると識別した領域を識別するために使用されます。 これは、他のランドマークロールのどれも適切でないときでも、汎用のランドマークを提供することで、人々が容易にナビゲートできるようにするために使用されます。

```html
<div role="region" aria-label="例">
  <!-- リージョンのコンテンツ -->
</div>
```

## 説明

リージョン (`region`) ロールは、ARIA の[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)です。 ランドマークロールは、ウェブページの構成と構造を識別する方法を提供します。 ページのセクションを分類およびラベル付けすることにより、レイアウトを通じて視覚的に伝達される構造情報がプログラム的に表されます。 スクリーンリーダーは、ランドマークロールを使用して、ページの重要なセクションにキーボードナビゲーションを提供します。

リージョン (`region`) ロールは、ユーザーがそのセクションに簡単にナビゲートし、ページの要約にリストされることを望むほど重要なコンテンツのセクションのために予約するべきです。 リージョン (`region`) ロールはより汎用の用語であり、識別が必要なセクションが、[`banner`](/ja/docs/Web/Accessibility/ARIA/Roles/Banner_role)、[`main`](/ja/docs/Web/Accessibility/ARIA/Roles/Main_role)、[`contentinfo`](/ja/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role)、[`complementary`](/ja/docs/Web/Accessibility/ARIA/Roles/Complementary_role)、[`navigation`](/ja/docs/Web/Accessibility/ARIA/Roles/Navigation_Role) などの他のランドマークロールのいずれかによって正確に説明できない場合にのみ使用するべきです。

リージョン (`region`) ロールを持つすべての要素には、リージョン内のコンテンツの目的を説明するラベルを含めるべきで、目に見えるヘッダーを参照する `aria-labelledby` を伴うのが好ましいです。 目に見える適切なヘッダーがない場合は、`aria-label` を使用するべきです。

リージョン (`region`) ランドマークロールのコンテンツは、文書のメインコンテンツから分離されている場合にも意味をなすべきです。

{{htmlelement("section")}} 要素を使用すると、アクセス可能な名前が与えられている場合、自動的にセクションがリージョン (`region`) ロールを持つことを伝えます。 開発者は、ARIA を使用するよりも正しい意味論の HTML 要素（この場合は `<section>`）を常に使用するべきです。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- aria-labelledby
  - : リージョンにラベルを付けるには、この属性を使用します。 多くの場合、`aria-labelledby` 属性の値は、セクションのタイトルに使用される要素の ID になります。

### キーボードインタラクション

無し

### 必要な JavaScript 機能

無し

## 例

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    この見出しの
    <code>id</code>
    属性は、このリージョンがアクセス可能な名前を持つのに役立ちます
  </h2>
  <!-- リージョンのコンテンツ -->
</div>
```

## アクセシビリティに関する懸念

控えめに使用してください！ [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

他の関連[コンテンツセクショニング要素](/ja/docs/Web/HTML/Element#content_sectioning)または[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)が当てはまらない場合にのみ、リージョン (`region`) ロールを使用してください。 ページ上に複数のリージョンが存在する場合は、そのページの全体構造を再検討する価値があります。

## ベストプラクティス

### 好ましい HTML

{{htmlelement("section")}} 要素を使用すると、アクセス可能な名前が与えられている場合、自動的にセクションがリージョン (`region`) ロールを持つことを伝えます。 可能であれば、`<section>` を代わりに使用することをお勧めします。

### ランドマークのラベル付け

文書に複数のリージョン (`region`) ランドマークロールがある場合は、それぞれにラベルを付けます。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすばやく理解することができます。

```html
<div role="region" aria-labelledby="use-discretion">
  <h3 id="use-discretion">
    慎重に <code>region</code> ロールを使用してください
  </h3>
  <!-- コンテンツ -->
</div>

...

<div role="region" aria-labelledby="please-reconsider">
  <h3 id="please-reconsider">文書構造を再検討してください</h3>
  <!-- コンテンツ -->
</div>
```

この例では、リージョンのラベルは [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) 属性によって作成されています。

### オーバーフローテキストを含むコンテンツ領域のスクロール

`tabindex="0"` のコンテンツ領域がある場合は、`role="region"` を追加して、汎用のリージョンであるとスクリーンリーダーのユーザーに伝えます。 これは、キーボードのみのユーザーがオーバーフローテキストを含むリージョンをスクロールできるようにするためです。

### SVG

[SVG](/ja/docs/Web/SVG/Element/svg) の個々のセクションを説明できるようにするために、SVG の領域上に `role="region"` を `aria-label` とともに宣言することができます。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、非スクリーンリーダーユーザーは文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agrip.org.uk/landmarks/)（英語）

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- {{htmlelement("section")}}: 汎用セクション要素
- [region (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#region)
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The section element | HTML5 Doctor](http://html5doctor.com/the-section-element/)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
