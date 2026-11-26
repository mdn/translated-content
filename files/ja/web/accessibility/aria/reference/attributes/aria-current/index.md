---
title: "ARIA: aria-current 属性"
short-title: aria-current
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-current
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

要素の `aria-current` 状態が null 以外のとき、この要素がコンテナーまたは関連要素のセット内の現在の項目を表すことを示します。

## 解説

パンくずリスト内の複数のリンクや複数ステップのフロー内の各ステップなど、関連要素のグループで、1 つの要素を他と異なるスタイルで表示し、視覚を使って情報を得るユーザーにグループ内の現在の項目を示す場合は、そのスタイルが示す情報を支援技術の利用者にも伝えるために `aria-current` を使用してください。

パンくずリスト内のリンクが、ユーザーが現在そのページにいることを示すために他のリンクと異なるスタイルで表示されている場合は、そのリンクに `aria-current="page"` を設定してください。複数ページのアンケートや複数ステップのチェックアウトまたは登録手続きなど、ステップインジケーターを使う複数ステップのプロセスで、現在のステップを示すアイコンの見た目が他と異なる場合は、視覚的な違いを認識できない可能性のある支援技術の利用者に現在のステップを示すため、そのアイコンのコンテナーに `aria-current="step"` を設定してください。

`aria-current` 属性は、`false` 以外の値が設定されている場合、コンテナーまたは関連要素のセット内の現在の項目を表します。要素セット内の 1 つの要素のみを現在のものとして `aria-current` でマークします。

`aria-current` 属性は、`page`、`step`、`location`、`date`、`time`、`true` および `false` を含む、限られた [値](#values) のリストを受け入れます。この列挙値のリストに含まれていない null 以外の文字列値は、デフォルトの `false` ではなく、`aria-current="true"` が設定されているものとして扱われます。属性が存在しない場合や空の文字列の場合、値なしで存在する場合、または `aria-current="false"` に設定されている場合、属性はユーザーに公開されません。

[`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) 内の [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) など、現在のものではなく何かが選択されている場合は、現在表示されているタブパネルを示すために [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) を使用してください。

> [!NOTE]
> [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)、[`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) および [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) の代わりとして `aria-current` を使用しないでください。

## 値

- `page`
  - : パンくずリスト内の現在のドキュメントへのリンクなど、ページセット内の現在のページを表します。
- `step`
  - : 列挙された複数ステップのチェックアウトフローの現在のステップなど、プロセス内の現在のステップを表します。
- `location`
  - : フローチャートの現在のコンポーネントとして視覚的に強調表示される画像など、環境またはコンテキスト内の現在の場所を表します。
- `date`
  - : カレンダー内の現在の日付など、日付のコレクション内の現在の日付を表します。
- `time`
  - : 時刻表内の現在の時刻など、一連の時間内の現在の時刻を表します。
- `true`
  - : セット内の現在の項目を表します。
- `false` (デフォルト)
  - : セット内の現在の項目を表すものではありません。

## 関連インターフェイス

- {{domxref("Element.ariaCurrent")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaCurrent`](/ja/docs/Web/API/Element/ariaCurrent) プロパティは、`aria-current` 属性の値を反映します。
- {{domxref("ElementInternals.ariaCurrent")}}
  - : {{domxref("ElementInternals")}} インターフェイスの [`ariaCurrent`](/ja/docs/Web/API/ElementInternals/ariaCurrent) プロパティは、`aria-current` 属性の値を反映します。

## 関連付けられたロール

[`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)、[`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)、[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) ロールでは [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) を使用し、それ以外のすべてのロールで `aria-current` を使用できます。

## 例

「現在のページ」のパンくずリストには `aria-current="page"` が設定されているべきです。

```html
<nav aria-label="パンくずリスト" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../../../">開発者向けウェブ技術</a>
    </li>
    <li>
      <a href="../../../../">アクセシビリティ</a>
    </li>
    <li>
      <a href="../../../">ARIA</a>
    </li>
    <li>
      <a href="../../">ARIA の状態とプロパティ</a>
    </li>
    <li>
      <a href="./" aria-current="page">ARIA: aria-current 属性</a>
    </li>
  </ol>
</nav>
```

パンくずリスト内の現在のページを表す要素がリンクでない場合、`aria-current` は任意です。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [`aria-current` とパンくずナビゲーション](/ja/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation)
