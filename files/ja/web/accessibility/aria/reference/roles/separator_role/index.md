---
title: "ARIA: separator ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/separator_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`separator` ロールは、要素がコンテンツのセクションやメニューアイテムのグループを分離し区別する区切りであることを示します。ネイティブな主題区切り {{HTMLElement('hr')}} 要素の暗黙の ARIA ロールは `separator` です。

## 説明

separator は、コンテンツのセクションやメニューアイテムのグループを分離し区別する区切りです。separator には 2 つのタイプがあります：HTML の {{HTMLElement('hr')}} 要素と同様に可視境界を提供する静的構造と、フォーカス可能で移動可能なウィジェットです。

`separator` ロールを持つ要素は、[`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) の暗黙の値として `horizontal` を持ちます。

### フォーカス不可能な separator

フォーカス不可能な separator は、メニュー内の 2 つのメニューアイテムグループを視覚的に分割するのに役立つ、またはページの 2 つのセクション間に水平線を提供する静的構造要素です。フォーカス可能でない主題区切りでも、フォーカスに依存しない読み取りカーソルを使用している場合、スクリーンリーダーユーザーが知覚することができます。

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

この例では、画像が 2 つのブログ投稿の間の視覚的な separator を作成しています。作成者は、セマンティックな主題区切り {{HTMLElement('hr')}} 要素を使用して CSS でスタイルを設定し青色にすることもできます（ブログの主題を変更する際に画像を変更する必要がなくなります）。または、作成者が各投稿をセマンティックな {{HTMLElement('article')}} 要素で囲むこともできます。または、その両方を行うこともできます。

```html
<section role="feed">
  <article>
    <h2>My first blog post</h2>
    …
  </article>
  <hr />
  <article>
    <h2>Two years later, my second post</h2>
    …
  </article>
</section>
```

```css
[role="feed"] > hr {
  height: 3px;
  background-color: blue;
}
```

アクセシブル名は必要ありません。

### フォーカス可能な separator

separator ロールは、メニュー内のアイテムのグループ間、例えば `menuitemradio` や `menuitemcheckbox` 要素のグループ間の視覚的な separator として要素を識別するために使用できます。

separator がフォーカス可能で、コンテンツの 2 つのセクション間の可視境界を提供し、ユーザーが位置を変更することで分離するセクションの相対的なサイズを変更できる場合、[`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) の値は separator の現在位置を反映する数値に設定する必要があり、変更時にその値を更新する必要があります。[`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) と [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) も、それぞれデフォルト値の 0 と 100 に設定されていない場合は含める必要があります。

フォーカス可能な separator が複数ある場合は、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してアクセシブル名を含める必要があります。

### すべての子孫はプレゼンテーショナル

プラットフォームアクセシビリティ API で表現される場合に、テキストのみを含むことができるユーザーインターフェイスコンポーネントのタイプがいくつかあります。アクセシビリティ API には、`separator` に含まれるセマンティック要素を表現する方法がありません。この制限に対処するために、ブラウザーは、セマンティックな子をサポートしないロールである `separator` 要素のすべての子孫要素に自動的にロール [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) を適用します。

例えば、見出しを含む次の `separator` 要素を考えてみましょう。

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

`separator` の子孫はプレゼンテーショナルであるため、次のコードは等価です：

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

支援技術ユーザーの視点からは、見出しは存在しません。前のコードスニペットは、[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree) において次のコードと等価であるためです：

```html
<div role="separator">Title of my separator</div>
```

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) (separator のデフォルトは horizontal)
  - : デフォルトでは、`separator` ロールの区切りは水平であると想定されます。値を設定することができ、horizontal、undefined（他に指定がない限り他のロールのデフォルト）、または vertical に設定できます。

- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : separator がフォーカス可能で既知の値を持つ場合、`aria-valuenow` は現在の値を定義します。フォーカス可能でないか値が不明な場合は、この属性を含めないでください。

- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) (デフォルトは 0)
  - : separator がフォーカス可能で、最小値が 0 でない場合は、`aria-valuemin` を使用して最小値を含めます。

- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) (デフォルトは 100)
  - : separator がフォーカス可能で、最大値が 100 でない場合は、`aria-valuemin` 以上の値を持つ `aria-valuemax` を含めます。

- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : separator がフォーカス可能で、`aria-valuenow` がユーザーに有用な情報を提供するのに最適でない場合、含まれる `aria-valuetext` コンテンツが `aria-valuenow` 値の代わりに読み上げられます。

## 仕様書

{{Specifications}}

## 関連情報

- 主題区切り HTML {{HTMLElement('hr')}} 要素
- [メニューバーでの separator の例](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
