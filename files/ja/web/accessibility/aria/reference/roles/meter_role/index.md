---
title: "ARIA: meter ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/meter_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`meter` ロールは、メーターとして使用されている要素を識別するために使用されます。

> [!NOTE]
> 可能な場合は、`meter` ロールよりもネイティブの {{HTMLElement("meter")}} 要素を使用することが推奨されます。ネイティブ要素の方がユーザーエージェントや支援技術により幅広くサポートされているためです。

## 説明

メーターは、定義された範囲内の数値をグラフィカルに表示するものです。例えば、バッテリー残量の表示などです。メーターは、意味のある最大値を持たない値には適していません。メーターは進行状況（例：読み込み状況）を示すために使用すべきではなく、これは {{HTMLElement('progress')}} 要素で伝えるべきです。

`role="meter"` を持つ各要素は、以下のいずれかが必要です：

- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性。
- メーターを説明するテキストを持つ要素を指す [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性。

### すべての子孫はプレゼンテーショナル

プラットフォームアクセシビリティ API で表現される際に、テキストのみを含むことができるユーザーインターフェイスコンポーネントの種類があります。アクセシビリティ API には、`meter` に含まれるセマンティック要素を表現する方法がありません。この制限に対処するため、ブラウザーは `meter` 要素のすべての子孫要素に自動的に [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) ロールを適用します。これは、セマンティックな子要素をサポートしないロールだからです。

例えば、見出しを含む以下の `meter` 要素を考えてみます。

```html
<div role="meter"><h3>Title of my meter</h3></div>
```

`meter` の子孫はプレゼンテーショナルであるため、以下のコードは等価です：

```html
<div role="meter"><h3 role="presentation">Title of my meter</h3></div>
```

支援技術ユーザーから見ると、見出しは存在しません。前のコードスニペットは、[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree) では以下と等価だからです：

```html
<div role="meter">Title of my meter</div>
```

### 関連する ARIA のロール、ステート、プロパティ

- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : メーターの現在の値を示す、`aria-valuemin` と `aria-valuemax` の間の十進数値に設定します。
- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : 支援技術は多くの場合、`aria-valuenow` の値をパーセンテージとして表示します。これが正確でない場合は、このプロパティを使用してメーター値を理解しやすくします。
- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : 最小値を表す小数値に設定し、`aria-valuemax` より小さくします。
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : 最大値を表す小数値に設定し、`aria-valuemin` より大きくします。

`meter` ロールよりもネイティブの {{HTMLElement("meter")}} 要素を使用することが推奨されます。ユーザーエージェントは、現在の `value` が `min` と `max` 値に関連する方法に基づいて、{{HTMLElement("meter")}} 要素用のスタイル付きウィジェットを提供します。非セマンティック要素を使用する場合、ネイティブセマンティック要素のすべての機能を ARIA 属性、JavaScript、CSS で再作成する必要があります。

## 例

`role="meter"` を使用したメーターの例：

```html
<div
  role="meter"
  aria-valuenow="90"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-labelledby="cpu_usage_label">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width: 90%">
    <rect x="0" y="0" width="100%" height="100%" fill="currentcolor"></rect>
  </svg>
</div>
```

上記のシナリオでは、`aria-valuenow` 値が更新されると、SVG の幅も更新される必要があります。[the ARIA Authoring Practices Guide (APG) working meter example](https://www.w3.org/WAI/ARIA/apg/patterns/meter/examples/meter/) で確認できます。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
