---
title: "ARIA: progressbar ロール"
short-title: progressbar
slug: Web/Accessibility/ARIA/Reference/Roles/progressbar_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

`progressbar` ロールは、処理に時間がかかる課題の進行状況を表示させる要素を定義します。

## 解説

`progressbar` 範囲ウィジェットは、リクエストが受信され、アプリケーションがリクエストされた措置の完了に向けて処理を進めていることを示します。

作成者は、進行状況インジケーターの最小値と最大値を示すために、aria-valuemin および aria-valuemax を設定**することもあります**。設定しない場合、それらの暗黙の値は HTML の [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) と同じ規則に従います。

- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) が指定されていないか、数値でない場合、デフォルト値は `0`（ゼロ）になります。
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) が指定されていないか、数値でない場合、デフォルト値は `100` になります。
- `aria-valuemin` および `aria-valuemax` プロパティは、進捗バーの最小値が `0` でない場合、または最大値が `100` でない場合にのみ、`progressbar` ロールに対して設定する必要があります。
- 読み取り専用の [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) は、値が `indeterminate` でない限り、指定され、更新する必要があります。値が `indeterminate` の場合は、この属性を含めないでください。設定する場合は、`aria-valuenow` の値が最小値と最大値の範囲内にあることを確認してください。

HTML の {{HTMLElement('progress')}} 要素に `progressbar` ロールが適用されている場合、アクセシブル名は関連付けられた {{HTMLElement('label')}} から決まります。それ以外の場合は、表示されているラベルが存在する場合は [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を、表示されているラベルが存在しない場合は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。

### すべての子要素は表示用である

プラットフォームのアクセシビリティ API で表される際、テキストのみを含むことができるユーザーインターフェイス要素がいくつかあります。アクセシビリティ API は、`progressbar` に含まれる意味的要素を表す方法を持っていません。
この制限に対処するため、ブラウザーは、`progressbar` 要素のすべての子孫要素に対して自動的にロール [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) を適用します。これは、意味的なな子要素に対応しないロールであるためです。

例えば、見出しを含む以下の `progressbar` 要素を考えてみましょう。

```html
<div role="progressbar"><h3>進捗バーのタイトル</h3></div>
```

`progressbar` の子要素はプレゼンテーション要素であるため、次のコードは以下と同等です。

```html
<div role="progressbar">
  <h3 role="presentation">進捗バーのタイトル</h3>
</div>
```

支援技術のユーザーの視点から見ると、この見出しは存在しません。なぜなら、前回のコードスニペットは、[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree)において以下と同等だからです。

```html
<div role="progressbar">進捗バーのタイトル</div>
```

### 関連する WAI-ARIA ロール、ステート、プロパティ

- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : 値が不定でない場合にのみ指定され、要求されます。進捗バーの現在の値を示す値として、`0`、または存在する場合は `aria-valuemin` から `aria-valuemax` までの範囲内の十進数を設定してください。
- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : 支援技術では、`aria-valuenow` の値がパーセント値で表示されることがよくあります。これが正確でない場合は、このプロパティを使用して、進捗バーの値が理解しやすいようにしてください。
- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : 最小値を表す十進数に設定し、`aria-valuemax` より小さい値とします。指定がない場合、デフォルト値は `0` です。
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : 最大値を十進数で表し、`aria-valuemin` より大きい値に設定します。指定がない場合、デフォルト値は `100` です。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : 進捗バー要素にラベルを付ける文字列値を定義するか、またはその要素（または複数の要素）を特定し、アクセシブル名を指定します。アクセシブル名は必須です。

ネイティブの {{HTMLElement("progress")}} または [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素を使用し、`progressbar` ロールを使わないことを推奨します。ユーザーエージェントは、現在の `value` が `0`、最小値、および `max` 値に対してどの位置にあるかに基づいて、{{HTMLElement("progress")}} 要素用のスタイル設定されたウィジェットを指定します。意味を伴わない要素を使用する場合、ネイティブの意味を持つ要素のすべての機能を、ARIA 属性、JavaScript、CSS を使用して再現する必要があります。

## 例

下記例では、進捗バーの `aria-valuemin` および `aria-valuemax` に、デフォルト値の 0 と 100 が設定されています。

```html
<div>
  <span id="loadinglabel">読み込み中:</span>
  <span role="progressbar" aria-labelledby="loadinglabel" aria-valuenow="23">
    <svg width="100" height="10">
      <rect height="10" width="100" stroke="black" fill="black" />
      <rect height="10" width="23" fill="white" />
    </svg>
  </span>
</div>
```

意味論的な HTML を使用すれば、次のように記述できます。

```html
<label for="loadinglabel">読み込み中:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## ベストプラクティス

進捗バーがページの具体的な領域の読み込み進行状況を表している場合は、進捗バーの状態を参照するために [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性を指定し、読み込みが完了するまで、その領域の [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) 属性を `true` に設定してください。

### 推奨される HTML

ネイティブの {{HTMLElement("progress")}} または [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素を使用し、`progressbar` ロールを使用しないことを推奨します。

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('progress')}} 要素
- その他の範囲ウィジェット:
  - [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (if focusable)
  - [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
