---
title: aria-current
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-current
original_slug: Web/Accessibility/ARIA/Attributes/aria-current
l10n:
  sourceCommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{AccessibilitySidebar}}

要素の `aria-current` 状態が null 以外のとき、この要素がコンテナーまたは関連要素のセット内の現在の項目を表すことを示します。

## 解説

パンくずリスト内の複数のリンクや複数ステップのフロー内のステップなど、関連する要素のグループがあり、そのグループ内の 1 つの要素が他の要素とは異なるスタイルに設定され、視覚のあるユーザーに対してこれがグループ内の現在の要素であることを示す場合、スタイル設定によって示されている内容を支援技術ユーザーに通知するために `aria-current` を使用する必要があります。

パンくずリストでは、ページ区切りリンクのセット内のリンクが、ユーザーが現在そのページにいることを示すようにスタイル設定されている場合、そのリンクに `aria-current="page"` を設定する必要があります。複数ページのアンケートや複数ステップのチェックアウトまたは登録プロセスなど、ステップインジケーターを備えた複数ステップベースのプロセスでは、現在のステップアイコンが視覚的に異なることで現在のステップであることが示される場合、視覚的な違いを「見る」ことができない可能性のある支援技術ユーザーのために、そのアイコンのコンテナーに `aria-current="step"` が必要です。

`aria-current` 属性は、`false` 以外の値が設定されている場合、コンテナーまたは関連要素のセット内の現在の項目を表します。要素セット内の 1 つの要素のみを現在のものとして `aria-current` でマークします。

`aria-current` 属性は、`page`、`step`、`location`、`date`、`time`、`true` および `false` を含む、限られた [値](#values) のリストを受け入れます。この列挙値のリストに含まれていない null 以外の文字列値は、既定値である `false` ではなく、 `aria-current="true"` が設定されているものとして扱われます。属性が存在しない場合や空の文字列の場合、値なしで存在する場合、または `aria-current="false"` に設定されている場合、属性はユーザーに公開されません。

[`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) 内の [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) など、現在のものではなく何かが選択されている場合は、現在表示されているタブパネルを示すために [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) を使用してください。

> [!NOTE]
> [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)、[`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) および [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) の代わりとして `aria-current` を使用しないでください。

## 例

「現在のページ」のパンくずリストには `aria-current="page"` が設定されているべきです。

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../../../">Web technology for developers</a>
    </li>
    <li>
      <a href="../../../../">Accessibility</a>
    </li>
    <li>
      <a href="../../../">ARIA</a>
    </li>
    <li>
      <a href="../../">ARIA States and Properties</a>
    </li>
    <li>
      <a href="./" aria-current="page">ARIA: `aria-current` attribute</a>
    </li>
  </ol>
</nav>
```

パンくずリスト内の現在のページを表す要素がリンクでない場合、`aria-current` は任意です。

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
- `false` (規定値)
  - : セット内の現在の項目を表すものではありません。

## 関連インターフェイス

- {{domxref("Element.ariaCurrent")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaCurrent`](/ja/docs/Web/API/Element/ariaCurrent) プロパティは、`aria-current` 属性の値を反映します。
- {{domxref("ElementInternals.ariaCurrent")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaCurrent`](/ja/docs/Web/API/ElementInternals/ariaCurrent) プロパティは、`aria-current` 属性の値を反映します。

## 関連付けられたロール

[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) が使われるべきである [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)、[`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) および [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) ロール以外の全ての要素に対して使用可能です

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [`aria-current` とパンくずナビゲーション](/ja/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation)
