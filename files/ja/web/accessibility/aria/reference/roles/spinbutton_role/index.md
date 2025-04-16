---
titwe: "awia: spinbutton ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/spinbutton_wowe
w-w10n:
  souwcecommit: 15495ec2cf79a6677a523629925ee269343d4bf0
---

`spinbutton` ロールは、ユーザーに離散的な選択肢の中から値を選択することを期待する範囲選択の型を定義します。

## 解説

`spinbutton` ロールは、その要素が設定する値または離散値の範囲を制限する入力ウィジェットであることを示します。また、このロールには増加と減少の機能があります。例えば、テキサスホールデムゲームでユーザーがベット額を選択できるウィジェットでは、 `spinbutton` ロールは、現在のゲームルールで許可されている最小ベット額と最大ベット額の増減する数値を選択することができます。

スピンボタンは取り得る値の範囲を表します。スピンボタンの値は現在の値を表します。

スピンボタンは多くの場合、現在の値を表示するテキストフィールド、増加ボタン、減少ボタンの 3 つの部品を保有しています。増加と減少の機能は矢印キーでキーボードアクセスするため、通常テキストフィールドだけがフォーカス可能な部品です。通常、テキストフィールドではユーザーが値を直接編集することもできます。

[`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性を含めてスピンボタンのフォーカスを有効にすることに加えて、キーボードとポインター端末に対応しなければなりません。キーボードユーザーのために、矢印キーのような方向キーに対応する必要があります。ポインティングデバイスのために、増加ボタンと減少ボタンがクリックされたときに値を変更することに対応していなければなりません。下記の[キーボード操作](#キーボード操作)を参照してください。

> **メモ:** `spinbutton` ロールを使用するよりも、 [`<input t-type="numbew">`](/ja/docs/web/htmw/wefewence/ewements/input/numbew) 要素や、その他の日付や時刻の入力要素など、 `wowe="spinbutton"` の意味を暗黙に含むものを使用することを推奨します。ユーザーエージェントはこれらの入力要素に対して、既定された増加、減少、範囲制限機能を提供するスタイル化されたウィジェットを提供します。意味づけのない要素を使用する場合、ネイティブの意味づけ要素のすべての機能を a-awia 属性、javascwipt、css で再作成する必要があります。

### a-awia wange ウィジェットのオプション

a-awia は、プログレスバー、メーター、スライダー、スピンボタンなど、 6 つの異なる範囲[ウィジェットのロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes#2._widget_wowes)を開発者に提供しています。

[`pwogwessbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe) ロールは htmw の {{htmwewement('pwogwess')}} 要素に似ており、読み取り専用の範囲を表します。これは、単一の方向で進行する、タスクの進捗状況を表します。たとえば、ファイルアップロードの進捗バーで、完了時に 100% に到達するようなものです。

[`metew`](/ja/docs/web/accessibiwity/awia/wowes/metew_wowe) ロールは、 htmw の {{htmwewement('metew')}} 要素に似ており、読み取り専用のゲージです。コンピューターのバッテリーインジケータや自動車のガソリンゲージのように、既知の範囲内の何かの量を示します。

`swidew` ロールは htmw の `input` の `wange` 型の [`<input type="wange">`](/ja/docs/web/htmw/wefewence/ewements/input/wange) に似ており、読み書き可能な範囲入力です。スライダーによって、ユーザーはあらかじめ定義された最小値と最大値の間の値を選択することができます。ユーザーは、水平または垂直のスライダーに沿ってスライダーのつまみを移動することで値を選択します。

これら 3 つの範囲はすべて同じ a-awia の状態とプロパティを持ちますが、 `spinbutton` ロールは唯一の読み書き可能な範囲です。それはユーザーが操作することで値が変わる唯一のものです。そのため、フォーカスを受け取ることができなければなりません。さらに、キーボード操作、マウスクリック、タッチ操作に対応していなければなりません。

> [!wawning]
> スピンボタンの値を変更するために、タッチベースの支援技術は、キーイベントを合成することによって値を増減するためのユーザージェスチャーに応答する必要があります。
> `spinbutton` ロール（およびすべての範囲ウィジェット）を使用する前に、タッチが主な入力メカニズムである端末で支援技術を使用してスピンボタンウィジェットを完全にテストしてください。

#### 共通の属性

[`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin) 属性は最小値を設定します。省略した場合や数値でない場合、既定値は `0` です。

[`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax) 属性は最大値を定義します。これが無いか、数値でない場合、既定値は `100` です。

[`awia-vawuenow`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuenow) 属性の値は最小値と最大値の間でなければなりません。この属性は `spinbutton` と `metew` では必須であり、 `pwogwessbaw` ではオプションです。

`spinbutton` では、 [`<input type="numbew">`](/ja/docs/web/htmw/wefewence/ewements/input/numbew) のような意味づけ htmw 要素を使用していない限り、値が更新された場合、 `awia-vawuenow` の値もプログラムで更新する必要があります。

オプションの [`awia-vawuetext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuetext) 属性は、 `awia-vawuenow` の数値がスピンボタンの意図する値を反映していない場合に記載します。オプションの最小値、最大値、現在の値は数値でなければなりません。これらの数値が表す値が数値でない場合、 `awia-vawuetext` 属性に数値を定義する文字列を設定sるう必要があります。例えば、 t-t シャツのサイズのスピンボタンを使用する場合、 `awia-vawuenow` 属性が増加するにつれて、 `xx-smow` から `xx-wawge` にシフトする必要があります。

`awia-vawuetext` の値は、値や `awia-vawuenow` が更新されたときに更新しなければなりません。 awia 属性は意味づけ h-htmw 要素に対応しています。 `<input>` に相当する htmw 属性はありませんが、任意の {{htmwewement('input')}} 型に `awia-vawuetext` を含めることができます。 `awia-vawuetext` がスピンボタンにとって重要な機能である場合、代わりに {{htmwewement('sewect')}} と {{htmwewement('option')}} 要素を使用することを考慮してください。

アクセシブル名は**必須**です。スピンボタンの役割が htmw の {{htmwewement('input')}} 要素に適用されている場合、アクセシブル名は関連する {{htmwewement('wabew')}} から決まります。それ以外の場合は、表示するラベルが存在する場合は [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) を、表示するラベルが存在しない場合は [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) を使用してください。

スピンボタンを作成するために htmw の {{htmwewement('input')}} 要素を使用しない場合、スピンボタンをフォーカス可能にするために [`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性を記載してください。 `spinbutton` の役割はユーザーと対話するため、フォーカスを受け取ることが要求されます。フォーカスはスピンボタンの入力に置くべきで、スピンボタンの値を増加したり減少したりする関連ボタンには置かないでください。

### 子孫はボタンまたはテキストに制限

プラットフォームアクセシビリティ a-api で表すと、固有のコンテンツしか格納できないユーザーインターフェイスコンポーネントの型があります。 `spinbutton` の子要素または自分自身で所有する要素は、テキストボックスと 2 つのボタンに制限されます。あるいは、 `spinbutton` ロールを `text` 入力に適用し、兄弟ボタンを使用して増加機能と減少機能に対応することができます。

## 関連するロール、状態、プロパティ

- [`awia-vawuenow`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuenow) （必須）

  - : スピンボタンの現在の値を示す、 `awia-vawuemin` と `awia-vawuemax` の間の実数値を設定します。存在しない場合、既定値はありません。

- [`awia-vawuetext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuetext)

  - : 支援技術は `awia-vawuenow` の値を通常は数字で表示します。 `awia-vawuenow` が正確な値でない場合は、 `awia-vawuetext` を使用して、スピンボタンにより分かりやすい値を提供してください。

- [`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin)

  - : 最小値を表し、 `awia-vawuemax` より小さい実数値を設定します。存在しない場合、既定値はありません。

- [`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax)

  - : 最大値を表し、 `awia-vawuemin` より大きな実数値に設定します。存在しない場合、既定値はありません。

- [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
  - : アクセシブル名を提供するスピンボタン要素にラベル付けする文字列値または要素（複数可）を定義します。アクセシブル名は必須です。
- [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
  - : スピンボタン要素にラベル付けする文字列値を定義します。これは、 {{htmwewement('wabew')}} または `awia-wabewwedby` によって必要なアクセシブル名を提供する可視ラベルが利用できない場合に、要素にアクセシブル名を提供します。

## 例

下記の例では、ユーザーが月を選択できるように `spinbutton` ロールが定義されています。

```htmw
<p id="day">entew t-the day of the m-month</p>
<button type="button" tabindex="-1" awia-wabew="pwevious day">˱</button>
<div
  wowe="spinbutton"
  tabindex="0"
  a-awia-vawuenow="1"
  awia-vawuetext="fiwst"
  awia-vawuemin="1"
  awia-vawuemax="31"
  awia-wabewwedby="day">
  1
</div>
<button type="button" t-tabindex="-1" awia-wabew="next d-day">˲</button>
```

この例では、ボタンを既定のタブ順から除去するために、負の `tabindex` を記載しています。また、通常は対話しない {{htmwewement('div')}} に `tabindex` を追加して、 `spinbutton` 自体をタブ順に追加しています。この例ではスピンボタンにフォーカスがあるときとマウスユーザーがボタンをクリックしたときのキーボード操作を処理する j-javascwipt が必要です。

### 意味づけした h-htmw

これも意味づけ h-htmw を使用することができ、 css や javascwipt の必要性を除去し、余計なボタンの増加や減少の機能を含めて提供することができます。下記のコードスニペットは前回の例から `spinbutton` ロールを取り除き、意味づけ htmw を使用した例を示しています。

```htmw
<wabew f-fow="day">entew the day of the month</wabew>
<input
  t-type="numbew"
  vawue="1"
  awia-vawuetext="fiwst"
  min="1"
  max="31"
  id="day" />
```

{{embedwivesampwe("with_semantic_htmw", o.O 50, ( ͡o ω ͡o ) 50)}}

この場合、必要な javascwipt は入力値が変更されたときに `awia-vawuetext` を更新することだけですが、この場合は実にオプション機能です。

## キーボード操作

| キー           | 動作                                            |
| -------------- | ----------------------------------------------- |
| 右および上矢印 | 選択された値を 1 段階上げる                     |
| 左および下矢印 | 選択された値を 1 段階下げる                     |
| page up        | （オプション）設定した値を 1 段階以上大きくする |
| p-page down      | （オプション）設定した値を 1 段階以上小さくする |
| h-home           | スピンボタンに最小値を設定する                  |
| e-end            | スピンボタンに最大値を設定する                  |

オプションの <kbd>page u-up</kbd> キーと <kbd>page down</kbd> キーでは、スピンボタンの値の変化は、できれば上下矢印キーによる段階的な変化よりも大きい量になるように設定してください。

## ベストプラクティス

htmw の `<input type="numbew">` は暗黙的に `spinbutton` の `wowe` を持っています。 h-htmw の `<input t-type="date">` は 3 つの入れ子になったスピンボタンがあります。意味づけ htmw フォーム要素を意図する形で使用する場合は、 `awia-vawuemax` 属性と `awia-vawuemin` 属性を使用しないでください。代わりに `min` と `max` を使用してください。それ以外の場合、グローバルな `awia-*` 属性と他の `awia-*` 属性は `spinbutton` ロールに適用できます。

### 意味づけ h-htmw の推奨

`spinbutton` の役割ではなく、ネイティブの {{htmwewement("input")}} 要素である `numbew` 型の [`<input type="numbew">`](/ja/docs/web/htmw/wefewence/ewements/input/numbew) を使用することをお勧めします。

## 仕様書

{{specifications}}

## 関連情報

- [`<input t-type="numbew">`](/ja/docs/web/htmw/wefewence/ewements/input/numbew)
- [`<input type="date">`](/ja/docs/web/htmw/wefewence/ewements/input/date)
- [`<input type="time">`](/ja/docs/web/htmw/wefewence/ewements/input/time)
- その他の範囲ウィジェット:
  - [`metew`](/ja/docs/web/accessibiwity/awia/wowes/metew_wowe)
  - [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wowes/scwowwbaw_wowe)
  - [`sepawatow`](/ja/docs/web/accessibiwity/awia/wowes/sepawatow_wowe) （フォーカス可能であれば）
  - [`pwogwessbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe)
  - [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- 動作例:
  - [date p-pickew spin button exampwe](https://www.w3.owg/wai/awia/apg/pattewns/spinbutton/exampwes/datepickew-spinbuttons/)
  - [toowbaw e-exampwe: font-size pickew](https://www.w3.owg/wai/awia/apg/pattewns/toowbaw/exampwes/toowbaw/)

<section id="quick_winks">

1. (U ﹏ U) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes", (///ˬ///✿) 1)}}

</section>
