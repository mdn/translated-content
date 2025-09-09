---
title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{htmlelement("input")}} 要素の **`datetime-local`** 型は、ユーザーが簡単に日付と時刻、つまり年、月、日と時、分を入力することができる入力コントロールを生成します。ユーザーのローカルタイムゾーンが使用されます。

{{InteractiveExample("HTML デモ: &lt;input type=&quot;datetime-local&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="meeting-time">Choose a time for your appointment:</label>

<input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value="2018-06-12T19:30"
  min="2018-06-07T00:00"
  max="2018-06-14T00:00" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

このコントロールの UI は一般的にブラウザーによって異なります。このコントロールは、ローカルの日付と時刻を意図通りに表示しますが、必ずしもユーザーの地域の日付と時刻を表示するわけではありません。言い換えれば、この入力フィールドは、ユーザーの地域のタイムゾーンでは不正な組み合わせ（夏時間の切り替え移行期間の 1 時間など）であっても、年、月、日、時、分を任意に組み合わせることができます。

## 値

入力欄に入力された日付の値を表す文字列です。この入力型で使われる日付と時刻の値の形式は、[ローカル日時文字列](/ja/docs/Web/HTML/Guides/Date_and_time_formats#ローカル日時文字列)で説明されています。

次のように、 [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性に日付と時刻を入れることで、入力欄の既定値を設定することができます。

```html
<label for="party">パーティーを予約する日時を入力してください。</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

一点気を付けなければならないことは、表示される日付と時刻の書式は実際の `value` とは異なることです。表示される日付と時刻は、オペレーティングシステムからの報告に従ってユーザーのロケールによって書式化されますが、日付や時刻の `value` は常に `YYYY-MM-DDTHH:mm` の書式です。例えば、上記の値をサーバーに送信すると、 `party-date=2024-06-01T08:30` のようになります。

> [!NOTE]
> このようなデータが HTTP の [`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) を通じて送信されると、コロン文字を URL 引数に含めるために、 `party-date=2024-06-01T08%3A30` のようにエスケープする必要があることもお忘れなく。これを行う方法の一つとして {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} を参照してください。

次のように、 JavaScript で {{domxref("HTMLInputElement")}} の `value` プロパティを使用して日付の値を取得したり設定したりすることもできます。

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## 追加の属性

すべての {{HTMLElement("input")}} 要素で共通する属性に加え、 `datetime-local` 型の入力欄は次の属性にも対応しています。

### max

受け付ける最新の日時です。要素に入力された [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) がこのタイムスタンプよりも後の場合、要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に失敗します。 `max` 属性の値が `YYYY-MM-DDTHH:mm` の書式に従う妥当な文字列でない場合、要素は最大値を持ちません。

この値は `min` 属性で指定されたものより後か、同じ日付を指定する必要があります。

### min

受け付ける最古の日時です。これより前のタイムスタンプの場合、要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に失敗します。 `min` 属性の値が `YYYY-MM-DDTHH:mm` の書式に従う妥当な文字列でない場合、要素は最小値を持ちません。

この値は `max` 属性で指定されたものより前か、同じ日付を指定する必要があります。

### step

`step` 属性は値が吸着する粒度を指定する数値、または後述する特殊な値 `any` です。刻みの基準値に等しい値（指定されていれば [`min`](#min)、そうでなければ [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value)、どちらも設定されていなければ適切な既定値）のみが妥当となります。

文字列値の `any` は、刻みがなく、どの値でも許可されることを意味します（[`min`](#min) や [`max`](#max) など、他の制約には制限されます）。

> [!NOTE]
> ユーザーがデータを入力したときには刻みの設定には吸着せず、{{Glossary("User agent", "ユーザーエージェント")}}は直近の妥当な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸められます。

`datetime-local` 入力欄では、 `step` の値は秒数で指定され、 1000 が乗じられます (ミリ秒単位の数値であるため)。 `step` の既定値は 60 であり、60秒 (1分、60000ミリ秒) を表します。

_現時点で、 `datetime-local` 入力欄で `step` に `any` の値が何を意味するかが不明確です。これは情報が決定次第、更新されるでしょう。_

## datetime-local 入力の使用

日時入力欄は開発者にとって便利なもので、日時を簡単に選べますし、ユーザーのロケールに関係なくサーバーに送信されるデータ形式を標準化できます。しかし、ユーザーのことを考慮することも重要です。アプリの機能として必要のないデータをユーザーに入力させることは避けましょう。

### 入力欄の大きさの制御

`<input type="datetime-local">` は、 [`size`](/ja/docs/Web/HTML/Reference/Elements/input#size) のようなコントロールの大きさに関する属性には対応していません。大きさを変更する必要がある場合は、 [CSS](/ja/docs/Web/CSS) を使用する必要があります。

### タイムゾーンの設定

`datetime-local` 入力型はコントロールのタイムゾーンやロケールを設定する方法がありません。これは `datetime` 入力型では利用できましたが、この入力型は廃止され、仕様書から削除されました。削除された主な理由はブラウザーの互換性がなく、ユーザーインターフェイスや使い勝手が決まっていなかったからです。単に日付と時刻を設定するコントロールを用意して、別なコントロールで地域を設定したほうが簡単です。

例えば、ユーザーがログインしている場所によって地域を設定するようなシステムを開発する場合、タイムゾーンを [`hidden`](/ja/docs/Web/HTML/Reference/Elements/input/hidden) 入力型で次のように提供することができます。

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

一方、ユーザーに日時入力と共にタイムゾーンを入力できるようにする必要がある場合、 {{htmlelement("select")}} 要素などでタイムゾーンを入力する手段を提供することができます。

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

どちらの場合も、日時の値とタイムゾーンの値はサーバーに別々のデータポイントとして送信されるため、サーバー側のデータベースに適切に格納する必要があります。

## 検証

既定では、 `<input type="datetime-local">` は入力された値の検証を行いません。ユーザーインターフェイスの実装は一般的に、日付でないものの入力をさせないからです。これは便利です。しかし、それでも入力欄を空のままにしたり、 (`text` 型にフォールバックするブラウザーにおいて) 無効な日付 (例えば 4 月 32 日など) を入力したりすることが可能です。

[`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) および [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) を使用して有効な日付を制限したり ([日付の最大値と最小値の設定](#日時の最大値と最小値の設定)を参照)、 [`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性を使用して日時の入力を必須にしたりすることができます。その結果、ブラウザーでは、範囲を外れた日付や空の日付欄を送信しようとするとエラーが表示されるでしょう。

例を見てみましょう。ここで日付の最小値と最大値を設定し、入力欄を必須にしました。

```html
<form>
  <div>
    <label for="party">
      希望するパーティーの日時を選択して下さい (必須、 6 月 1 日午前 8:30 ～ 6
      月 30 日午後 4:30)
    </label>
    <input
      id="party"
      type="datetime-local"
      name="party-date"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="予約する！" />
  </div>
</form>
```

不完全な日付 (または設定した範囲を外れた日付) を送信しようとすると、ブラウザーはエラーを表示します。例を実行してみましょう。

{{ EmbedLiveSample('Validation', 600, 120) }}

上の例で使用している CSS を示します。ここでは {{cssxref(":valid")}} と {{cssxref(":invalid")}} を使用しています。 CSS のプロパティを使用して、現在の値が有効かどうかに基づいて入力をスタイル設定しています。アイコンは、入力欄の隣の {{htmlelement("span")}} に配置します。

```css
div {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

label {
  display: inline-block;
  width: 300px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}
```

> [!WARNING]
> HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用にはなりません。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、誤った種類のデータなど）が送信された場合に問題が発生するおそれがあります。

> [!NOTE]
> `datetime-local` の入力欄では、日時の値は常に `YYYY-MM-DDTHH:mm` の書式に正規化されます。

## 例

### datetime-local の基本的な使用

最も単純な `<input type="datetime-local">` の使用方法は、下記のように基本的な `<input>` と {{htmlelement("label")}} 要素の組み合わせることです。

```html
<form>
  <label for="party">パーティーを予約する日時を入力してください:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### 日時の最大値および最小値の設定

[`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) および [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性を使用することで、ユーザーが選べる日時を制限することができます。次の例では、日時の最小値を `2025-06-01T08:30`、最大値を `2025-06-30T16:30` に設定しています。

```html
<form>
  <label for="party">パーティーを予約する日時を入力してください:</label>
  <input
    id="party"
    type="datetime-local"
    name="party-date"
    min="2025-06-01T08:30"
    max="2025-06-30T16:30" />
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates_and_times', 600, 40) }}

2025 年 6 月中の日のみ選択可能です。ブラウザーによって、指定した値以外の時刻は選択できないようになっているもの、有効な日時は選択可能ですが、 {{CSSXref(":invalid")}} と {{CSSXref(":out-of-range")}} に一致し、[検証](#検証)に失敗するものがあります。

一部のブラウザー（Chrome や Edge）では、日付値の「日」の部分のみが編集可能で、 6 月以外の日付はスクロールできません。他のブラウザー（Safari）では、日付ピッカーはどの日付でも選択できるように現れますが、日付が選択されると値は有効な範囲に固定されます。

有効な範囲には `min` と `max` の値の間のすべての時刻が含まれます。時刻は範囲内の最初の日と最後の日でのみ制約されます。

> [!NOTE]
> [`step`](/ja/docs/Web/HTML/Reference/Elements/input#step) 属性を使用して、時刻が増加するたびにジャンプする日数を変えることができるはずです（例えば、土曜日だけを選択可能にしたい場合など）。しかし、これは執筆時の実装では効果的に動作していないようです。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#値">値</a></strong></td>
      <td>
        （ローカルタイムゾーンでの）日付と時刻を表す文字列、または空欄。
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 全般的な {{HTMLElement("input")}} およびその操作に使用する {{domxref("HTMLInputElement")}} インターフェイス
- [`<input type="date">`](/ja/docs/Web/HTML/Reference/Elements/input/date) および [`<input type="time">`](/ja/docs/Web/HTML/Reference/Elements/input/time)
- [HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Guides/Date_and_time_formats)
- [日付と時刻の選択のチュートリアル](/ja/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#日付と時刻ピッカー)
