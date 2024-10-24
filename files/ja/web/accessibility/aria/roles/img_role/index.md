---
title: "ARIA: img ロール"
slug: Web/Accessibility/ARIA/Roles/img_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

ARIA の `img` ロールは、ページコンテンツ内の複数の要素を単一の画像として扱うべきであると識別するために使用できます。これらの要素は、画像、コードスニペット、テキスト、絵文字、または視覚的に情報を提供するために組み合わせることができるその他のコンテンツである可能性があります。

```html
<div role="img" aria-label="全体の画像の説明">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" />
</div>
```

## 解説

単一の画像として扱われるべきコンテンツ（画像、動画、音声、コードスニペット、絵文字、その他のコンテンツを含む）は、`role="img"` を使用して識別することができます。

支援技術にコンテキストを伝えるために個々の画像の代替テキストを当てにしてはいけません。ほとんどの画面リーダーは、`role="img"` が設定された要素をブラックボックスのように扱い、その内部の個々の要素にアクセスしません。したがって、画像には包括的な全体的な説明的な代替テキストを提供する必要があります。代替テキストは、画像の周囲のテキストに記述するか、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性を使用して記述します。画像が使用できない場合に、検索エンジンや視覚障害のあるユーザーがページにアクセスできるように、代替テキストを記述します。

```html
<div role="img" aria-label="全体の画像の説明">
  <img src="graphic1.png" alt="代替テキスト" />
  <img src="graphic2.png" alt="この場合、画像は読み込まれない" />
</div>
```

ページ上で表示される画像にキャプションやラベルを追加したい場合は、次のものを使用して追加することができます。

- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby): テキストが簡潔なラベルである場合。
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby): テキストが詳しい説明文の場合。

例を示します。

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">一連の画像を説明するテキスト。</p>
</div>
```

画像が純粋に表現だけの目的で使用されている場合は、 [`presentation`](/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role) ロールを使用することを検討してください。

### SVG と role="img"

ページに埋め込んだ SVG 画像を使用している場合は、`role="img"` を外側の {{SVGElement('svg')}} 要素に設定し、ラベルを付けるのがよい考えです。これにより、スクリーンリーダーは子ノードをすべて読み上げようとするのではなく、それを単一の要素として扱い、ラベルを使用して記述します。

```html
<svg role="img" aria-label="SVG 画像の説明">
  <!-- SVG 画像の中身 -->
</svg>
```

### role="img" を使用して隠された意味や暗示されている意味を付与

特定のケースでは、支援技術のユーザーは、特定の方法で表現されたコンテンツの意味、特定のメディアを通じて表現されたコンテンツの意味、または特定の方法で暗示されたコンテンツの意味を理解できない場合があります。これは画像の場合には明らかに修正するべきですが（`alt` 属性を使用することができます）、混合コンテンツやその他の特定の種類のコンテンツのケースでは修正すべきかどうかは明らかではなく、`role="img"` が有効になる場合があります。

例えば、テキストに絵文字を使用した場合、視覚のあるユーザーにとっては意味が明白かもしれませんが、スクリーンリーダーを操作しているユーザーは混乱するかもしれません。なぜなら、絵文字はテキスト表現をまったく持たないか、代替テキストが混乱を招く可能性があり、それが使用されているコンテキストと一致しない可能性があるからです。例えば、次のようなコードを考えてみましょう。

```html
<div role="img" aria-label="この猫はとてもかわいい">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`、🐈、😂 は、それぞれ「猫」、「うれし涙の顔」と読み上げられる絵文字のエンティティ参照ですが、必ずしも意味が通じるとは限りません。暗示されている意味は、おそらく「その猫はとてもかわいい」というようなものなので、`aria-label` に `role="img"` と共に設定します。

これは、一部のブラウザーとスクリーンリーダーの組み合わせではうまくいくようですが、中にはラベルを 2 回読み上げてしまうものもあります。使用する際は注意し、十分にテストしてください。

この例が適していると思われる別の例としては、{{Glossary("ASCII")}} の絵文字の組み合わせ、例えば伝説の「ちゃぶ台返し」を使用する場合が挙げられます。

```html
<div role="img" aria-label="ちゃぶ台返し">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

`aria-labelledby` が使用されていた場合、スクリーンリーダーがそれを読み上げます。 この場合、`aria-label` の内容のみがスクリーンリーダーのユーザーに読み上げられ、ARIA の子孫要素が何かを隠す必要がなくても、意味不明な文字列が隠されますが、画像の一部である可能性のあるコンテンツも隠されます。

### すべての子孫は表現用

ユーザーインターフェイス部分には、プラットフォームのアクセシビリティ API で表現するとテキストのみを含むことができるものもあります。アクセシビリティ API には、`img` に含まれるセマンティック要素を表現する方法がありません。この制限に対処するために、ブラウザーは、セマンティックな子要素に対応しない役割として、`img` 要素のすべての子孫要素に自動的に [`presentation`](/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role) ロールを適用します。

例えば、見出しのあるする次の `img` 要素を考えてみましょう。

```html
<div role="img"><h3>画像のタイトル</h3></div>
```

`img` の子孫は表現用なので、次のコードは同等です。

```html
<div role="img"><h3 role="presentation">画像のタイトル</h3></div>
```

支援技術ユーザーの立場から見ると、見出しは存在しません。なぜなら、上記のコードスニペットは、[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree)では次のコードと同等だからです。

```html
<div role="img">画像のタイトル</div>
```

### 関連する WAI-ARIA ロール、状態、プロパティ

- `aria-label` または `aria-labelledby`
  - : アクセシブル名が必要です。HTML の {{HTMLElement('img')}} 要素では、`alt` 属性を使用します。`img` ロールを持つ他のすべての要素では、目に見えるラベルがある場合は `aria-labelledby` を、それ以外は `aria-label` を使用します。

## 例

```html
<span role="img" aria-label="評価: 5 つ星中 4 つ星">
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>☆</span>
</span>
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('img')}} 要素
- {{SVGElement('svg')}} 要素
- {{HTMLElement('picture')}} 要素
- {{HTMLElement('audio')}} 要素
- {{HTMLElement('video')}} 要素
- [ARIA: `presentation` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)（英語）
- [HTML での ARIA](https://w3c.github.io/html-aria/)（英語）
