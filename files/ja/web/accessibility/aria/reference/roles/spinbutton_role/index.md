---
title: "ARIA: spinbutton ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
original_slug: Web/Accessibility/ARIA/Roles/spinbutton_role
l10n:
  sourceCommit: 15495ec2cf79a6677a523629925ee269343d4bf0
---

`spinbutton` ロールは、ユーザーに離散的な選択肢の中から値を選択することを期待する範囲選択の型を定義します。

## 解説

`spinbutton` ロールは、その要素が設定する値または離散値の範囲を制限する入力ウィジェットであることを示します。また、このロールには増加と減少の機能があります。例えば、テキサスホールデムゲームでユーザーがベット額を選択できるウィジェットでは、 `spinbutton` ロールは、現在のゲームルールで許可されている最小ベット額と最大ベット額の増減する数値を選択することができます。

スピンボタンは取り得る値の範囲を表します。スピンボタンの値は現在の値を表します。

スピンボタンは多くの場合、現在の値を表示するテキストフィールド、増加ボタン、減少ボタンの 3 つの部品を保有しています。増加と減少の機能は矢印キーでキーボードアクセスするため、通常テキストフィールドだけがフォーカス可能な部品です。通常、テキストフィールドではユーザーが値を直接編集することもできます。

[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を含めてスピンボタンのフォーカスを有効にすることに加えて、キーボードとポインター端末に対応しなければなりません。キーボードユーザーのために、矢印キーのような方向キーに対応する必要があります。ポインティングデバイスのために、増加ボタンと減少ボタンがクリックされたときに値を変更することに対応していなければなりません。下記の[キーボード操作](#キーボード操作)を参照してください。

> [!NOTE]
> `spinbutton` ロールを使用するよりも、 [`<input type="number">`](/ja/docs/Web/HTML/Reference/Elements/input/number) 要素や、その他の日付や時刻の入力要素など、 `role="spinbutton"` の意味を暗黙に含むものを使用することを推奨します。ユーザーエージェントはこれらの入力要素に対して、既定された増加、減少、範囲制限機能を提供するスタイル化されたウィジェットを提供します。意味づけのない要素を使用する場合、ネイティブの意味づけ要素のすべての機能を ARIA 属性、JavaScript、CSS で再作成する必要があります。

### ARIA range ウィジェットのオプション

ARIA は、プログレスバー、メーター、スライダー、スピンボタンなど、 6 つの異なる範囲[ウィジェットのロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles)を開発者に提供しています。

[`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) ロールは HTML の {{HTMLElement('progress')}} 要素に似ており、読み取り専用の範囲を表します。これは、単一の方向で進行する、タスクの進捗状況を表します。たとえば、ファイルアップロードの進捗バーで、完了時に 100% に到達するようなものです。

[`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) ロールは、 HTML の {{HTMLElement('meter')}} 要素に似ており、読み取り専用のゲージです。コンピューターのバッテリーインジケータや自動車のガソリンゲージのように、既知の範囲内の何かの量を示します。

`slider` ロールは HTML の `input` の `range` 型の [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) に似ており、読み書き可能な範囲入力です。スライダーによって、ユーザーはあらかじめ定義された最小値と最大値の間の値を選択することができます。ユーザーは、水平または垂直のスライダーに沿ってスライダーのつまみを移動することで値を選択します。

これら 3 つの範囲はすべて同じ ARIA の状態とプロパティを持ちますが、 `spinbutton` ロールは唯一の読み書き可能な範囲です。それはユーザーが操作することで値が変わる唯一のものです。そのため、フォーカスを受け取ることができなければなりません。さらに、キーボード操作、マウスクリック、タッチ操作に対応していなければなりません。

> [!WARNING]
> スピンボタンの値を変更するために、タッチベースの支援技術は、キーイベントを合成することによって値を増減するためのユーザージェスチャーに応答する必要があります。
> `spinbutton` ロール（およびすべての範囲ウィジェット）を使用する前に、タッチが主な入力メカニズムである端末で支援技術を使用してスピンボタンウィジェットを完全にテストしてください。

#### 共通の属性

[`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) 属性は最小値を設定します。省略した場合や数値でない場合、既定値は `0` です。

[`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) 属性は最大値を定義します。これが無いか、数値でない場合、既定値は `100` です。

[`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) 属性の値は最小値と最大値の間でなければなりません。この属性は `spinbutton` と `meter` では必須であり、 `progressbar` ではオプションです。

`spinbutton` では、 [`<input type="number">`](/ja/docs/Web/HTML/Reference/Elements/input/number) のような意味づけ HTML 要素を使用していない限り、値が更新された場合、 `aria-valuenow` の値もプログラムで更新する必要があります。

オプションの [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) 属性は、 `aria-valuenow` の数値がスピンボタンの意図する値を反映していない場合に記載します。オプションの最小値、最大値、現在の値は数値でなければなりません。これらの数値が表す値が数値でない場合、 `aria-valuetext` 属性に数値を定義する文字列を設定sるう必要があります。例えば、 T シャツのサイズのスピンボタンを使用する場合、 `aria-valuenow` 属性が増加するにつれて、 `XX-Small` から `XX-Large` にシフトする必要があります。

`aria-valuetext` の値は、値や `aria-valuenow` が更新されたときに更新しなければなりません。 ARIA 属性は意味づけ HTML 要素に対応しています。 `<input>` に相当する HTML 属性はありませんが、任意の {{htmlelement('input')}} 型に `aria-valuetext` を含めることができます。 `aria-valuetext` がスピンボタンにとって重要な機能である場合、代わりに {{HTMLElement('select')}} と {{HTMLElement('option')}} 要素を使用することを考慮してください。

アクセシブル名は**必須**です。スピンボタンの役割が HTML の {{HTMLElement('input')}} 要素に適用されている場合、アクセシブル名は関連する {{HTMLElement('label')}} から決まります。それ以外の場合は、表示するラベルが存在する場合は [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を、表示するラベルが存在しない場合は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。

スピンボタンを作成するために HTML の {{HTMLElement('input')}} 要素を使用しない場合、スピンボタンをフォーカス可能にするために [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を記載してください。 `spinbutton` の役割はユーザーと対話するため、フォーカスを受け取ることが要求されます。フォーカスはスピンボタンの入力に置くべきで、スピンボタンの値を増加したり減少したりする関連ボタンには置かないでください。

### 子孫はボタンまたはテキストに制限

プラットフォームアクセシビリティ API で表すと、固有のコンテンツしか格納できないユーザーインターフェイスコンポーネントの型があります。 `spinbutton` の子要素または自分自身で所有する要素は、テキストボックスと 2 つのボタンに制限されます。あるいは、 `spinbutton` ロールを `text` 入力に適用し、兄弟ボタンを使用して増加機能と減少機能に対応することができます。

## 関連するロール、状態、プロパティ

- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) （必須）
  - : スピンボタンの現在の値を示す、 `aria-valuemin` と `aria-valuemax` の間の実数値を設定します。存在しない場合、既定値はありません。

- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : 支援技術は `aria-valuenow` の値を通常は数字で表示します。 `aria-valuenow` が正確な値でない場合は、 `aria-valuetext` を使用して、スピンボタンにより分かりやすい値を提供してください。

- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : 最小値を表し、 `aria-valuemax` より小さい実数値を設定します。存在しない場合、既定値はありません。

- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : 最大値を表し、 `aria-valuemin` より大きな実数値に設定します。存在しない場合、既定値はありません。

- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : アクセシブル名を提供するスピンボタン要素にラベル付けする文字列値または要素（複数可）を定義します。アクセシブル名は必須です。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : スピンボタン要素にラベル付けする文字列値を定義します。これは、 {{HTMLElement('label')}} または `aria-labelledby` によって必要なアクセシブル名を提供する可視ラベルが利用できない場合に、要素にアクセシブル名を提供します。

## 例

下記の例では、ユーザーが月を選択できるように `spinbutton` ロールが定義されています。

```html
<p id="day">Enter the day of the month</p>
<button type="button" tabindex="-1" aria-label="previous day">˱</button>
<div
  role="spinbutton"
  tabindex="0"
  aria-valuenow="1"
  aria-valuetext="first"
  aria-valuemin="1"
  aria-valuemax="31"
  aria-labelledby="day">
  1
</div>
<button type="button" tabindex="-1" aria-label="next day">˲</button>
```

この例では、ボタンを既定のタブ順から除去するために、負の `tabindex` を記載しています。また、通常は対話しない {{HTMLElement('div')}} に `tabindex` を追加して、 `spinbutton` 自体をタブ順に追加しています。この例ではスピンボタンにフォーカスがあるときとマウスユーザーがボタンをクリックしたときのキーボード操作を処理する JavaScript が必要です。

### 意味づけした HTML

これも意味づけ HTML を使用することができ、 CSS や JavaScript の必要性を除去し、余計なボタンの増加や減少の機能を含めて提供することができます。下記のコードスニペットは前回の例から `spinbutton` ロールを取り除き、意味づけ HTML を使用した例を示しています。

```html
<label for="day">Enter the day of the month</label>
<input
  type="number"
  value="1"
  aria-valuetext="first"
  min="1"
  max="31"
  id="day" />
```

{{EmbedLiveSample("With_semantic_HTML", 50, 50)}}

この場合、必要な JavaScript は入力値が変更されたときに `aria-valuetext` を更新することだけですが、この場合は実にオプション機能です。

## キーボード操作

| キー           | 動作                                            |
| -------------- | ----------------------------------------------- |
| 右および上矢印 | 選択された値を 1 段階上げる                     |
| 左および下矢印 | 選択された値を 1 段階下げる                     |
| Page Up        | （オプション）設定した値を 1 段階以上大きくする |
| Page Down      | （オプション）設定した値を 1 段階以上小さくする |
| Home           | スピンボタンに最小値を設定する                  |
| End            | スピンボタンに最大値を設定する                  |

オプションの <kbd>Page Up</kbd> キーと <kbd>Page Down</kbd> キーでは、スピンボタンの値の変化は、できれば上下矢印キーによる段階的な変化よりも大きい量になるように設定してください。

## ベストプラクティス

HTML の `<input type="number">` は暗黙的に `spinbutton` の `role` を持っています。 HTML の `<input type="date">` は 3 つの入れ子になったスピンボタンがあります。意味づけ HTML フォーム要素を意図する形で使用する場合は、 `aria-valuemax` 属性と `aria-valuemin` 属性を使用しないでください。代わりに `min` と `max` を使用してください。それ以外の場合、グローバルな `aria-*` 属性と他の `aria-*` 属性は `spinbutton` ロールに適用できます。

### 意味づけ HTML の推奨

`spinbutton` の役割ではなく、ネイティブの {{HTMLElement("input")}} 要素である `number` 型の [`<input type="number">`](/ja/docs/Web/HTML/Reference/Elements/input/number) を使用することをお勧めします。

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="number">`](/ja/docs/Web/HTML/Reference/Elements/input/number)
- [`<input type="date">`](/ja/docs/Web/HTML/Reference/Elements/input/date)
- [`<input type="time">`](/ja/docs/Web/HTML/Reference/Elements/input/time)
- その他の範囲ウィジェット:
  - [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) （フォーカス可能であれば）
  - [`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- 動作例:
  - [Date picker spin button example](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Toolbar example: font-size picker](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

<section id="Quick_links">

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles", 1)}}

</section>
