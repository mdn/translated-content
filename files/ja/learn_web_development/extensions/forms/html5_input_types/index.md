---
title: HTML5 の入力型
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

[前の記事では](/ja/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) {{htmlelement("input")}} 要素を見てきて、 HTML の初期から利用できる `type` 属性の値をカバーしてきました。これで、後から追加した入力型の機能について詳しく見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的な
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML の理解</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        ネイティブフォームコントロールで利用できる新しい入力型の理解と、 HTML を用いた実装方法。
      </td>
    </tr>
  </tbody>
</table>

HTML フォームコントロールの見た目はデザイナーの仕様により全く異なるため、ウェブ開発者はときどき独自のフォームコントロールを作成します。これは上級のチュートリアル、[カスタムフォームウィジェットの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)で扱います。

## メールアドレスフィールド

このフィールド型は、 `email` の値を [`type`](/ja/docs/Web/HTML/Element/input#type) 属性に使用することで設定します。

```html hidden live-sample___email
<label for="email">メールアドレスを入力してください:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

この [`type`](/ja/docs/Web/HTML/Element/input#type) が使われたとき、ユーザーは有効なメールアドレスをフィールドに入力することが必須です。その他のコンテンツでは、ブラウザーによってフォーム送信時にエラーが表示されます。この動作は下記のスクリーンショットで見ることができます。

!["Please enter an email address." というメッセージを表示している無効なメール入力欄](email_address_invalid.png)

[`multiple`](/ja/docs/Web/HTML/Attributes/multiple) 属性を `email` 入力型に組み合わせると、複数のメールアドレスが同じ入力に（カンマ区切りで）入力させることもできます。

```html
<input type="email" id="email" name="email" multiple />
```

一部の端末、特にスマートフォンのような動的キーボードつきのタッチ端末では、 `@` キーを含むメールアドレス入力に適した別の仮想キーパッドが現れることもあります。Android 版 Firefox のキーボードの例として下記のスクリーンショットを見てください。

![既定でアットマークが付いている、 Android 版 Firefox のメールアドレス入力キーボード](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> 基本的なテキスト入力型の例は [basic input の例](https://mdn.github.io/learning-area/html/forms/basic-input-examples/)にあります（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html) も見てください）。

これは新しい入力型を使う良い理由であり、こうした端末のユーザーの使い勝手を向上させます。

### クライアント側の検証

前述の通り、 `email` （およびその他の新しい `input` 型）は、サーバーにデータが送信される前にブラウザーによって実行される、クライアント側のエラー検証を組み込みで提供します。これは、ユーザーが正確なフォーム入力を行うための手助けとなり、時間を節約することができます。サーバーへの往復を待つよりも、データが正確ではないことを即座に把握できるのは便利です。

しかしこれは完全なセキュリティ対策と*考えるべきではありません*! アプリは送信データのセキュリティ確認をクライアント側と同様に*サーバー側*でも行うべきで、なぜならクライアント側の検証は簡単にオフにできるため悪意のあるユーザーは簡単にサーバーに不正なデータを送信できるためです。起こりうることについては[ウェブサイトセキュリティ](/ja/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)を読んで下さい。サーバー側の検証を実装するのはこのモジュールの範囲を超えていますが、記憶しておくべきです。

既定の制約では `a@b` は有効なメールアドレスです。これは既定では `email` 入力型はイントラネットのメールアドレスを許可しているためです。異なる検証動作を実装するには、[`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性を用いたり、エラーメッセージをカスタムできます。この機能の使い方は後の [クライアント側の検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)の記事で話します。

> [!NOTE]
> 入力データがメールアドレスでない場合、{{cssxref(':invalid')}} 擬似クラスがマッチして、{{domxref('validityState.typeMismatch')}} プロパティは `true` を返します。

## 検索フィールド

検索フィールドは、ページやアプリの検索ボックス作成に使われるものです。このフィールド型は `search` の値を [`type`](/ja/docs/Web/HTML/Element/input#type) 属性のに使用することで設定されます。

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

`text` フィールドと `search` フィールドの主な違いは、ブラウザーがその外観をどのようにスタイル設定するかです。ブラウザーによっては、検索フィールドは角が丸く表示されます。ブラウザーによっては、 "Ⓧ" のクリアアイコンが表示され、クリックするとフィールド内の値がすべて消去されます。このクリアアイコンは、フィールドに値が示されている場合にのみ現れ、 Safari を除いて、フィールドがフォーカスされている場合にのみ表示されます。さらに、動的なキーボードを持つ端末では、キーボードの Enter キーが "**検索**"、あるいは虫眼鏡アイコンで表示されることもあります。

もう一つ特筆すべき機能として、 `search` フィールドの値を自動的に保存し、同じウェブサイトの複数のページで自動補完機能を提供するために再利用できるという点があります。これは、ほとんどの現行ブラウザーでは自動的に現れる傾向があります。

## 電話番号フィールド

電話番号を入力するための特殊なフィールドは、 `tel` の値を [`type`](/ja/docs/Web/HTML/Element/input#type) 属性に使うと作成することができます。

```html hidden
<label for="tel">電話番号を入力してください:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

動的キーボードつきのタッチ端末でアクセスしたとき、たいていの端末では `type="tel"` が出てくると数字のキーパッドを表示します。つまりこの型は、テンキーが役立つときはいつでも有用であり、電話番号だけに使用する必要はありません。

![Android 用 Firefox の電話番号キーボードの例で、既定でアスタリスクが表示されています。](fx-android-tel-type-keyboard.jpg)

世界中にはいろいろな電話番号の書式があるため、このフィールドはユーザーが入力した値に制約を一切つけません（つまり、文字が入っていることもありえます）。

前に触れた通り、 [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性が制約を強化するのに使われます。これは[クライアント側検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)で学びます。

## URL フィールド

URL を入力するための特殊な型のフィールドは、 `url` の値を[`type`](/ja/docs/Web/HTML/Element/input#type) 属性に使うと作成することができます。

```html hidden
<label for="url">URL を入力してください:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

これはフィールドに特別な検証制約を追加します。ブラウザーは（`http:`のような）プロトコルがない場合や、URL の形式が正しくない場合にエラーを報告します。動的キーボードのある端末ではよく、コロン、ピリオド、スラッシュの一部やすべて既定でキーとして表示します。

> [!NOTE]
> URL が正しい形式であっても、それが必ずしも実在する場所を参照しているとは限りません。

## 数値フィールド

数値入力用のコントロールは、 {{HTMLElement("input")}} [`type`](/ja/docs/Web/HTML/Element/input#type) に `number` を指定して作成することができます。このコントロールはテキストフィールドのような見た目ですが、浮動小数値のみを許可し、通常は数値を増減するためのスピナー形式のボタンがあります。動的キーボードつきの端末では、一般的に数値キーボードが表示されます。

```html hidden live-sample___number
<label for="number">数値を入力してください:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

`number` 入力型では、[`min`](/ja/docs/Web/HTML/Element/input#min) と [`max`](/ja/docs/Web/HTML/Element/input#max) 属性を設定することで最小値と最大値の制約をつけることができます。

また、 `step` 属性を使用して、スピンボタンを押すことによって増減する数値を設定することもできます。既定では、 [`step`](/ja/docs/Web/HTML/Attributes/step) 属性の既定値が `1` であるため、数値入力型は数値が整数であるかどうかだけの検証を行います。浮動小数点数を許可するには、 `step="any"` または特定の値（`step="0.01"` など）を指定して浮動小数点数を制限します。省略すると、 `step` の値は既定で `1` となるため、有効なのは整数のみとなります。

いくつか例を見てみましょう。

この例では、有効な値を `1` から `10` の間の奇数に制限する数値コントロールを作成します。 増加ボタンと減少ボタンは、最小値から始めて、値を `2` ずつ変更します。

```html hidden live-sample___number2
<label for="number">1 から 10 までの奇数を入力してください:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

この例では、値が `0` から `1` までの間の値に制限され、増減ボタンで値が `0.01` ずつ変化する数値コントロールを作成します。

```html hidden live-sample___number3
<label for="number">0 以上 1 以下の数値を入力してください:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

`number` 入力型は有効な値の範囲に制限されているときに意味を持ちます。例えば、ある人の年齢や身長です。範囲が大きすぎて増分が意味をなさない場合 （例えばアメリカの郵便番号は、`00001` から `99999` の範囲です）、`tel` 型がより良い選択となることもあります。これは数値のスピナー UI 機能に対して、テンキーを提供します。

## スライダーコントロール

数字を選ぶもう 1 つの方法は**スライダー**です。家造りのようなサイトで資産の価格をフィルターするのによく見ることでしょう。これを示す例をライブで見てみましょう。

{{EmbedLiveSample('Slider controls','100%','50')}}

使用からすると、スライダーはテキストフィールドより不正確です。このため、*正確な*値が必ずしも重要でない数値の選択に使われます。

スライダーは {{HTMLElement("input")}} の [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を `range` にセットして作成します。スライダーはマウスやタッチや、キーパッドの矢印で移動できます。

スライダーを適切に設定するのは重要です。そのためには、それぞれ最小、最大、増分値を設定する [`min`](/ja/docs/Web/HTML/Attributes/min), [`max`](/ja/docs/Web/HTML/Attributes/max), [`step`](/ja/docs/Web/HTML/Attributes/step) 属性を設定するのを強くお奨めします。

上の例の背後にあるコードを見て、どのように実現されるかを見てみましょう。まずは基本となる HTML です。

```html live-sample___slider_controls
<label for="price">住宅価格の上限を選択してください: </label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="1000"
  value="250000" />
<output class="price-output" for="price"></output>
```

この例では、値が `50000` と `500000` までの範囲で、1000 ずつ増減するスライダーを作成しています。既定値は `value` 属性を使って `250000` としています。

スライダーについての問題は、現在の値がいくつなのかのフィードバックが一切ないことです。これは、現在の値を入れている {{htmlelement("output")}} 要素を導入する理由です（この要素は次の記事でも見ていきます）。入力値や、あらゆる要素内の計算結果を表示できますが、`<output>` は特別です。 `<label>`のように `for` 属性を取って要素や出力値の元となる要素と関連付けることができます。

実際に現在の値を表示して、変更時に更新するには、 JavaScript を使う必要がありますが、比較的に簡単です。

```js live-sample___slider_controls
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});
```

```css hidden live-sample___slider_controls
body {
  text-align: center;
}
label,
output {
  display: block;
}
```

ここでは `range` 入力と `output` を 2 つの変数に保存しています。次に `output` の [`textContent`](/ja/docs/Web/API/Node/textContent) を入力の `value` ですぐにセットします。最後に、イベントリスナーをセットして、range スライダーが移動するといつも、`output` の `textContent` を新しい値に更新します。

## 日付と時刻ピッカー

日付と時刻の値を収集することは、ウェブ開発者にとってずっと悪夢でした。良い使い勝手を実現するには、カレンダーを選択する UI を提供することが重要です。これにより、ユーザーはネイティブのカレンダーアプリケーションに切り替えることなく日付を選択でき、解釈しにくいさまざまな形式で日付を入力できる可能性があります。前千世紀の最後の 1 分は、例えば `1999/12/31`、`23:59`、`12/31/99T11:59PM` のように、様々な方法で入力される可能性があります。

HTML の日付コントロールは、カレンダーウィジェットを提供して統一されたデータを作成し、この種類のデータを扱うことができます。

日付と時刻のコントロールは、 {{HTMLElement("input")}} 要素に適切な値を指定した [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を設定したものを使用して作成します。この値は、日付、時刻、またはその両方を収集したいかどうかによって変わります。ライブサンプルを以下に示します。

```html hidden live-sample___date1
<label for="party">パーティーの日時を選択してください:</label>
<input type="datetime-local" id="party" name="bday" />
<span class="validity"></span>
```

```css hidden live-sample___date1
input:invalid + span:after {
  content: " ✖";
}

input:valid + span:after {
  content: " ✓";
}
```

{{EmbedLiveSample('date1','100%','50')}}

利用できるいろいろな型を簡単に見ていきましょう。注意としては、この型の使用法はとても複雑で、特にブラウザーの対応考えたに場合そうです（下記を見てください）。完全な詳細情報は、それぞれの型のリファレンスページと、そこにある詳細な例を見てください。

### `datetime-local`

[`<input type="datetime-local">`](/ja/docs/Web/HTML/Element/input/datetime-local) は特定のタイムゾーン情報のない日付と時刻を表示して選択するウィジェットを作成します。

```html hidden
<label for="month">日付と時刻を入力してください:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/ja/docs/Web/HTML/Element/input/month) は年と月を表示して選択するウィジェットを作成します。

```html hidden
<label for="month">月を入力してください:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/ja/docs/Web/HTML/Element/input/time) は時刻の値を表示して選択するウィジェットを作成します。時刻は 12 時制で表示されることがありますが、返値は 24 時制です。

```html hidden
<label for="time">時刻を入力してください:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/ja/docs/Web/HTML/Element/input/week) は本年の週の番号を表示して選択するウィジェットを作成します。

週は月曜始まりで日曜日で終わります。それに加えて、その年の最初の週はその年の最初の木曜日を含みます—これはその年の最初の日を含まないことも、前年の最後の数日を含むこともあります。

```html hidden
<label for="week">週を入力してください:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### date/time 値の制限

日付をと時刻のコントロールはすべて、[`min`](/ja/docs/Web/HTML/Attributes/min) と [`max`](/ja/docs/Web/HTML/Attributes/max) 属性で制約をつけることができて、さらに [`step`](/ja/docs/Web/HTML/Attributes/step) 属性 (この値は入力型によって変わります)で追加の制約も可能です。

```html
<label for="myDate">この夏はいつ空いていますか？</label><br />
<input
  type="date"
  name="myDate"
  min="2025-06-01"
  max="2025-08-31"
  step="7"
  id="myDate" />
```

{{EmbedLiveSample('constraining date/time values','100%','50')}}

## 色選択コントロール

色も扱いが難しいです。色の表現がたくさんあります。 RGB 値（10 進数や 16 進数）、HSL 値、キーワードなどです。

`color` コントロールは {{HTMLElement("input")}} 要素を、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性に `color`をつけて作成できます。

```html hidden
<label for="color">色を選択してください:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

通常、色コントロールをクリックすると、選択するためにオペレーティングシステムで既定の色選択機能が表示されます。返値は常に小文字で 6 桁の 16 進数の色です。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: HTML5 のコントロール](/ja/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_HTML5_controls)を見てください。

## まとめ

これで、HTML5 フォーム入力型のツアーは終わりです。他にもいくつかコントロール型があり、その動作がとても特殊なため簡単にまとめることはできませんが、知っておく必要があります。次の記事でそれらに応じて説明します。

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

### 高度なトピック

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [JavaScript によるフォームの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
