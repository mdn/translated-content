---
title: HTML5 入力タイプ
slug: Learn/Forms/HTML5_input_types
tags:
  - Beginner
  - Controls
  - Example
  - Forms
  - Guide
  - HTML
  - Web
  - Widgets
translation_of: Learn/Forms/HTML5_input_types
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

[前の記事では](/ja/docs/Learn/Forms/Basic_native_form_controls) {{htmlelement("input")}} 要素を見てきて、HTML の初期から利用できる `type` 属性の値をカバーしてきました。ここでは最近のフォームコントロールの機能、特定のデータを集めるのに HTML5 で追加された、新しい入力タイプを詳しく見ていきましょう。

| 前提条件: | コンピューターリテラシーの基本と、[HTML の理解](/ja/docs/Learn/HTML/Introduction_to_HTML)。 |
| --------- | ------------------------------------------------------------------------------------------- |
| 目的:     | ネイティブフォームコントロールで利用できる新しい入力タイプの理解と、HTML を用いた実装方法。 |

> **Note:** この記事のたいていの機能はブラウザーを超えて広くサポートされています。例外は注記しておきます。ブラウザーサポートについての詳細は、[HTML フォーム要素のリファレンス](/ja/docs/Web/HTML/Element#Forms)、特に [\<input> タイプ](/ja/docs/Web/HTML/Element/input)リファレンスを見てください。

HTML フォームコントロールの見た目はデザイナーの仕様により全く異なるため、ウェブ開発者はときどき独自のフォームコントロールを作成します。これは上級のチュートリアル — [カスタムフォームウィジェットの作成方法](/ja/docs/Learn/Forms/How_to_build_custom_form_widgets) — で扱います。

## メールアドレスフィールド

このフィールドタイプは {{htmlattrxref("type","input")}}属性の `email` の値でセットされます:

```html
<input type="email" id="email" name="email">
```

この {{htmlattrxref("type","input")}} が使われたとき、ユーザーは有効なメールアドレスをフィールドに入力することが必須です。その他のコンテンツでは、ブラウザーによってフォーム送信時にエラーが表示されます。この動作は下記のスクリーンショットで見ることができます。

![﻿An invalid email input showing the message "Please enter an email address."](email_address_invalid.png)

`email` 入力タイプと [`multiple`](/ja/docs/Web/HTML/Attributes/multiple) 属性を組み合わせて、複数のメールアドレスが同じ入力に (カンマ区切りで)入力させることもできます:

```html
<input type="email" id="email" name="email" multiple>
```

いくつかの端末 — 特にスマートフォンのような動的キーボードつきのタッチデバイス — では、`@` キーを含むメールアドレス入力に適した別の仮想キーパッドが現れることもあります。Android 版 Firefox のキーボードの例として下記のスクリーンショットを見てください:

![firefox for android email keyboard, with ampersand displayed 既定では.](fx-android-email-type-keyboard.jpg)

> **Note:** 基本的なテキスト入力タイプの例は [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) にあります([ソースコード](https://github.com/mdn/learning-area/blob/master/html/forms/basic-input-examples/index.html) も見てください)。

これは新しい入力タイプを使う良い理由であり、こうした端末のユーザーのユーザー体験を向上させます。

### クライアント側の検証

上で見てきたように、他の新しい `input` タイプと同様に、`email` は組み込みの*クライアント側の*エラー検証 — データがサーバーに送られる前にブラウザーで実行されるもの — があります。これはユーザーが正確に入力するのに役立ち、時間を短縮できます — データが正しくないことをサーバーとのラウンドトリップを待つことなくすぐに知ることは便利です。

しかしこれは完全なセキュリティ対策と*考えるべきではありません*! アプリは送信データのセキュリティ確認をクライアント側と同様に*サーバー側*でも行うべきで、なぜならクライアント側の検証は簡単にオフにできるため悪意のあるユーザーは簡単にサーバーに不正なデータを送信できるためです。起こりうることについては [Website security](/ja/docs/Learn/Server-side/First_steps/Website_security) を読んで下さい。サーバー側の検証を実装するのはこのモジュールの範囲を超えていますが、記憶しておくべきです。

既定の制約では `a@b` は有効なメールアドレスです。これは既定では `email` 入力タイプはイントラネットのメールアドレスを許可しているためです。異なる検証動作を実装するには、[`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性を用いたり、エラーメッセージをカスタムできます。この機能の使い方は後の [クライアント側検証](/ja/docs/Learn/Forms/Form_validation)の記事で話します。

> **Note:** 入力データがメールアドレスでない場合、{{cssxref(':invalid')}} 疑似クラスがマッチして、{{domxref('validityState.typeMismatch')}} プロパティは `true` を返します。

## 検索フィールド

検索フィールドは、ページやアプリの検索ボックス作成に使われるものです。このフィールドタイプは {{htmlattrxref("type","input")}}属性の `search` の値でセットされます:

```html
<input type="search" id="search" name="search">
```

`text` フィールドと `search` フィールドの主な違いは、ブラウザーの見た目のスタイル設定方法です。よく、`search` フィールドは角丸で描画されます。また時折、値がクリックされたときに値をクリアする "Ⓧ"も表示されます。その他、ダイナミックキーボードのある端末では、キーボードの enter キーが "**検索**"、あるいは虫眼鏡アイコンで表示されることもあります。

下記のスクリーンショットでは macOS での Firefox 71, Safari 13, Chrome 79 と Windoes10 での Edge 18 と Chrome 79 での文字が入った検索フィールドを表示しています。注意として、クリアのアイコンはフィールドに値が入った場合のみ表示され、Safari を除いてフィールドにフォーカスが当たった場合のみ表示されます。

![Screenshots of search fields on several platforms.](search_focus.png)

もう 1 つの注目すべき機能として、`search` フィールドの値は同一サイトの複数ページにまたがって、自動保存してオートコンプリートすることができます。これはたいていのモダンブラウザーでは自動的に起こる傾向があります

## 電話番号フィールド

{{htmlattrxref("type","input")}} 属性に `tel` の値を使って作られる電話番号の入力専用フィールド:

```html
<input type="tel" id="tel" name="tel">
```

ダイナミックキーボードつきのタッチデバイスにアクセルしたとき、たいていの端末では `type="tel"` が出てくると数字のキーパッドを表示します、つまりこのタイプは数字キーパッドが使えるときに使えて、電話番号に使う必要があるだけではありません。

下記は Android 用 Firefox キーボードの例です:

![firefox for android email keyboard, with ampersand displayed 既定では.](fx-android-tel-type-keyboard.jpg)

世界中にはいろいろな電話番号のフォーマットがあるため、このフィールドはユーザーが入力した値に制約を一切つけません (つまり、文字が入っていることなどがありえます)。

前に触れた通り、[`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性が制約を強化するのに使われて、これは[クライアント側検証](/ja/docs/Learn/Forms/Form_validation)で学びます。

## URL フィールド

{{htmlattrxref("type","input")}} 属性に `url` の値を使うことで作成できる URL 入力の専用フィールド:

```html
<input type="url" id="url" name="url">
```

これはフィールドに特別な検証制約を追加します。ブラウザーは (`http:`のような) プロトコルがない場合や、URL の形式が良くない場合にエラーを報告します。ダイナミックキーボードのある端末ではよく、コロン、ピリオド、スラッシュの複数やすべてをデフォルトキーとして表示します。

例は下記のものを見てください (Android 用 Firefox の例):

![firefox for android email keyboard, with ampersand displayed 既定では.](fx-android-url-type-keyboard.jpg)

> **Note:** URL が正しい形式であっても、それが必ずしも実際存在する場所を参照しているとは限りません!

## 数値フィールド

{{HTMLElement("input")}} {{htmlattrxref("type","input")}} に `number` を指定して作成される数値入力用のコントロール。このコントロールはテキストフィールドのような見た目であるが、浮動小数値のみを許可し、通常は数値を増減するためのスピナー形式のボタンがあります。ダイナミックキーボードつきの端末では、一般的に数値キーボードが表示されます。

下記のスクリーンショット (Android 用 Firefox より) に例があります:

![firefox for android email keyboard, with ampersand displayed 既定では.](fx-android-number-type-keyboard.jpg)

`number` の入力タイプでは、{{htmlattrxref("min","input")}} と {{htmlattrxref("max","input")}} 属性をセットすることで最小値と最大値の制約をつけることができます。

スピナーボタンを押すことで増減させる増分を接とするのに `step` 属性を使うこともできます。既定では、number 入力タイプは数値が整数値の場合のみ検証します。浮動小数を許可するには、[`step="any"`](/ja/docs/Web/HTML/Attributes/step)を指定します。省略された場合、`step` 値は既定で `1` となり、つまりすべての数値が有効です。

いくつか例を見てみましょう。次の最初の例では値が `1` と `10` の間に制限され、増減ボタンで値が `2` ずつ変更される数値コントロールを作成しています。

```html
<input type="number" name="age" id="age" min="1" max="10" step="2">
```

2 つ目の例では値が `0` と `1` の間に制限され、増減ボタンで値が `0.01` ずつ変更される数値コントロールを作成しています。

```html
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01">
```

`number` 入力タイプは有効な値の範囲に制限されているときに意味を持ちます。例えば、ある人の年齢や身長です。範囲が大きすぎて増分が意味をなさない場合 (例えば USA の郵便番号は、`00001` から `99999` の範囲です)、`tel` タイプがより良い選択となることもあります。これは数値のスピナー UI 機能に対して、数値キーパッドを提供します。

> **Note:** `number` 入力は Internet Explorer の 10 より前のバージョンではサポートされません。

## スライダーコントロール

数字を選ぶもう１つの方法は**スライダー**です。家造りのようなサイトで資産の価格をフィルターするのによく見ることでしょう。これを示す例をライブで見てみましょう:

{{EmbedGHLiveSample("learning-area/html/forms/range-example/index.html", '100%', 200)}}

使用からすると、スライダーはテキストフィールドより不正確です。このため、*正確な*値が必ずしも重要でない数値の選択に使われます。

スライダーは {{HTMLElement("input")}} に {{htmlattrxref("type","input")}} 属性を `range` にセットして作成します。スライダーはマウスやタッチや、キーパッドの矢印で移動できます。

スライダーを適切に設定するのは重要です。そのためには、それぞれ最小、最大、増分値を設定する [`min`](/ja/docs/Web/HTML/Attributes/min), [`max`](/ja/docs/Web/HTML/Attributes/max), [`step`](/ja/docs/Web/HTML/Attributes/step) 属性を設定するのを強くお奨めします。

上の例の背後にあるコードを見て、どのように実現されるかを見てみましょう。まずは基本となる HTML:

```html
<label for="price">Choose a maximum house price: </label>
<input type="range" name="price" id="price" min="50000" max="500000" step="100" value="250000">
<output class="price-output" for="price"></output>
```

この例では、値が `50000` と `500000` までの範囲で、100 ずつ増減するスライダーを作成しています。デフォルトの値は `value` 属性を使って `250000` としています。

スライダーについての問題は、現在の値がいくつなのかのフィードバックが一切ないことです。これは、現在の値を入れている {{htmlelement("output")}} 要素を導入する理由です (この要素は次の記事でも見ていきます)。入力値や、あらゆる要素内の計算結果を表示できますが、`<output>` は特別です — `<label>`のように — `for` 属性を取って要素や出力値の元となる要素と関連付けることができます。

実際に現在の値を表示して、変更時に更新するには、JavaScript を使う必要がありますが、比較的に簡単です:

```js
const price = document.querySelector('#price');
const output = document.querySelector('.price-output');

output.textContent = price.value;

price.addEventListener('input', function() {
  output.textContent = price.value;
});
```

ここでは `range` 入力と `output` を 2 つの変数に保存しています。次に `output` の [`textContent`](/ja/docs/Web/API/Node/textContent) を入力の `value` ですぐにセットします。最後に、イベントリスナーをセットして、range スライダーが移動するといつも、`output` の `textContent` を新しい値に更新します。

> **Note:** `range` 入力は Internet Explorer 10 以前のバージョンではサポートされません。

## 日付と時刻ピッカー

日付と時刻の値を集めるのはウェブ開発者にとってずっと悪夢でした。すばらしいユーザー体験のためには、カレンダー選択 UI を与えるのが重要であり、それによってユーザーはネイティブのカレンダーアプリへのコンテキストスイッチや、パースするのが難しい違うフォーマットで入力する可能性を避けて日付選択ができます。前の千年紀の最後の分は、次のようにいろいろな表現ができます。例えば: 1999/12/31, 23:59 or 12/31/99T11:59PM.

HTML 日付コントロールは、カレンダーウィジェットを提供して統一されたデータを作成し、この種類のデータを扱うことができます。

日付と時刻コントロールは{{HTMLElement("input")}} 要素と、日付か時間かその両方かを集めたいのかにあわせて適当な {{htmlattrxref("type","input")}} 属性を使って作成できます。非サポートブラウザーで{{htmlelement("select")}} 要素にフォールバックするライブの例は次の通り:

{{EmbedGHLiveSample("learning-area/html/forms/datetime-local-picker-fallback/index.html", '100%', 200)}}

利用できるいろいろなタイプを簡単に見ていきましょう。注意としては、このタイプの使用法はとても複雑で、特にブラウザーサポートを使う考えた場合そうです (下記を見てください); 完全な詳細情報は、各タイプのリファレンスページと、そこにある詳細な例を見てください。

### `datetime-local`

[`<input type="datetime-local">`](/ja/docs/Web/HTML/Element/input/datetime-local) は特別なタイムゾーン情報のない日付と時刻を表示して選択するウィジェットを作成します。

```html
<input type="datetime-local" name="datetime" id="datetime">
```

### `month`

[`<input type="month">`](/ja/docs/Web/HTML/Element/input/month) は年と月を表示して選択するウィジェットを作成します。

```html
<input type="month" name="month" id="month">
```

### `time`

[`<input type="time">`](/ja/docs/Web/HTML/Element/input/time) は時刻の値を表示して選択するウィジェットを作成します。時刻は 12 時間のフォーマットで表示されますが、*戻り値*は 24 時間フォーマットです。

```html
<input type="time" name="time" id="time">
```

### `week`

[`<input type="week">`](/ja/docs/Web/HTML/Element/input/week) は本年の週の番号を表示して選択するウィジェットを作成します。

週は月曜始まりで日曜日で終わります。それに加えて、その年の最初の週はその年の最初の木曜日を含みます—これはその年の最初の日を含まないことも、前年の最後の数日を含むこともあります。

```html
<input type="week" name="week" id="week">
```

### date/time 値の制限

日付をと時刻のコントロールはすべて、[`min`](/ja/docs/Web/HTML/Attributes/min) と [`max`](/ja/docs/Web/HTML/Attributes/max) 属性で制約をつけることができて、さらに [`step`](/ja/docs/Web/HTML/Attributes/step) 属性 (この値は入力タイプによって変わります)で追加の制約も可能です。

```html
<label for="myDate">When are you available this summer?</label>
<input type="date" name="myDate" min="2013-06-01" max="2013-08-31" step="7" id="myDate">
```

### date/time 入力のブラウザーサポート

日付と時刻のウィジェットに最良のブラウザーサポートがないことに注意するべきです。現状では、Chrome, Edge, Opera ではよくサポートしていますが、Internet Explorer ではサポートがなく、Safari にはモバイルのサポートがあり(しかしデスクトップサポートはなし)、Firefox では `time` と `date` のみサポートします。

上でリンクしているリファレンスページでは非サポートブラウザーでフォールバックするようプログラミングするヒントを提供しています; もう 1 つのオプションは日付選択を提供する JavaScript ライブラリの利用です。たいていのモダンなフレームワークには機能を利用できるコンポーネントがあり、またスタンドアローンのライブラリもあります (ヒントとなる [Top date picker JavaScript plugins and libraries](https://flatlogic.com/blog/best-javascript-date-picker-libraries/) を見てください)。

## 色選択コントロール

色も扱いが難しいです。色の表現がたくさんあります: RGB 値 (10 進数や 16 進数), HSL 値、キーワードなど。

`color` コントロールは {{HTMLElement("input")}} 要素を、 {{htmlattrxref("type","input")}} 属性に `color`をつけて作成できます:

```html
<input type="color" name="color" id="color">
```

サポートされている場合、色コントロールは OS のデフォルトの色選択機能を呼び出して選択できるようにする傾向があります。下記のスクリーンショットは macOS の Firefox の例です:

![firefox for android email keyboard, with ampersand displayed 既定では.](fx-macos-color.jpg)

次のライブサンプルも試してみてください:

{{EmbedGHLiveSample("learning-area/html/forms/color-example/index.html", '100%', 200)}}

戻り値は常に小文字で 6 桁の 16 進数の色です。

> **Note:** `color` 入力は Internet Explorer ではサポートされていません。

## スキルをテストしましょう!

この記事の最後に到着しましたが、最も大事な情報を覚えていますか？次に進む前に、この情報を保持しているか検証するテストがあります — [Test your skills: HTML5 controls](/ja/docs/Learn/Forms/Test_your_skills:_HTML5_controls) を見てください。

## まとめ

ここで HTML5 フォーム入力タイプの旅が終了です。動作が特殊なため簡単に分類できないその他のコントロールタイプも少しあって、それを知るのも大事です。次の記事で扱います。

{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

## このモジュール

- [初めてのフォーム](/ja/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [フォームの構築方法](/ja/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [ネイティブフォームウィジェット](/ja/docs/Learn/HTML/Forms/The_native_form_widgets)
- [The HTML5 input types](/ja/docs/Learn/Forms/HTML5_input_types)
- [Other form controls](/ja/docs/Learn/Forms/Other_form_controls)
- [フォームへのスタイル設定](/ja/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [フォームへの高度なスタイル設定](/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [UI pseudo-classes](/ja/docs/Learn/Forms/UI_pseudo-classes)
- [フォームデータの検証](/ja/docs/Learn/HTML/Forms/Data_form_validation)
- [フォームデータの送信](/ja/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)

### 上級トピック

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn/Forms/How_to_build_custom_form_controls)
- [JavaScript によるフォームの送信](/ja/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [フォームウィジェット向けプロパティ実装状況一覧](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_widgets)[](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_widgets)
