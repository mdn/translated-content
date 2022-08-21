---
title: その他のフォームコントロール
slug: Learn/Forms/Other_form_controls
tags:
  - Beginner
  - Controls
  - Example
  - Forms
  - Guide
  - HTML
  - Web
  - Widgets
translation_of: Learn/Forms/Other_form_controls
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_HTML_forms", "Learn/Forms")}}

ドロップダウンリストや複数行のテキストフィールドから、{{htmlelement('output')}}要素(前の記事で見ました)やプログレスバーといったその他の役立つ機能まで、非-`<input>` 型のフォーム要素の機能を詳しく見ていきます。

| 前提条件: | 基本的なコンピューターリテラシーと、[HTML の基本的な理解。](/ja/docs/Learn/HTML/Introduction_to_HTML) |
| --------- | ----------------------------------------------------------------------------------------------------- |
| 目的:     | 非-`<input>` 型のフォーム機能と、HTML を用いた実装方法の理解。                                        |

## 複数行のテキストフィールド

複数行のテキストフィールドは、{{HTMLElement("input")}}要素ではなく{{HTMLElement("textarea")}} 要素で指定されます。

```html
<textarea cols="30" rows="8"></textarea>
```

これは次のように描画されます:

{{EmbedLiveSample("Multi-line_text_fields", 120, 120)}}

`<textarea>` と通常の単一行テキストフィールドとの主な違いは、ユーザーが送信データの中に改行を (リターンを押すことで) 入れることができます。

`<textarea>` は閉じタグを取ることができて、既定のテキストは開始タグと終了タグの間にあるべきです。これに対し、{{HTMLElement("input")}} は閉じタグのない空要素です — [`value`](/ja/docs/Web/HTML/Attributes/value) 属性の中に既定の値が入ります。

注意として、`<textarea>` 要素 (その他の HTML 要素、CSS、JavaScript を含む)には何でも入れられるものの、この性質により、プレーンテキストコンテンツのように描画されます(非フォームコントロールでの [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) を使うと、プレーンテキストの代わりに HTML/リッチコンテンツの API を使用できます)。

視覚的には、入力テキストは改行されて、既定ではフォームコントロールはリサイズ可能です。モダンブラウザーにはテキストエリアのサイズを増減できるドラッグハンドルがあります。

下記のスクリーンショットは macOS での Firefox 71 と Safari 13 、Windows10 での Edge 18, Yandex 14, Firefox 71, Chrome 79 における既定の、フォーカスされた、無効な`<textarea>` 要素を表示しています。

![The default, focused, and disabled <textarea> element in Firefox 71 and Safari 13 on Mac OSX and Edge 18, Yandex 14, Firefox and Chrome on Windows 10.](textarea_basic.png)

> **Note:** 多少は面白いテキストエリアの使用例は、このシリーズの最初の記事の[例](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html) が見つかります ([ソースコードも見てください](https://github.com/mdn/learning-area/blob/master/html/forms/your-first-HTML-form/first-form-styled.html))。

### 複数行レンダリングの制御

{{htmlelement("textarea")}} では、複数行にまたがってレンダリングするのを制御する 3 つの属性を受け付けます:

- {{htmlattrxref("cols","textarea")}}
  - : テキストコントロールの (カラム) 幅を、平均的なキャラクター幅で指定します。これは `<textarea>`をリサイズすることで変更でき、また CSS で上書きもできるため、有効な開始時の幅です。何も指定されていない場合、デフォルト値は 20 です。
- {{htmlattrxref("rows","textarea")}}
  - : コントロールの行数を指定します。これは `<textarea>`をリサイズすることで変更でき、また CSS で上書きもできるため、有効な開始時の高さです。何も指定されていない場合、デフォルト値は 2 です。
- {{htmlattrxref("wrap","textarea")}}
  - : コントロールがどのようにテキストを改行するかを制御します。値は `soft` (デフォルト値)、この値では送信されるテキストは改行されないが、ブラウザーでレンダリングされるテキストは改行される、`hard` (この値を使うには `cols` 属性を指定する必要がある)、この値では送信テキストとレンダリングされるテキストの両方が改行される、`off`、この値では改行が停止、を取ります。

### テキストエリアのリサイズの制御

`<textarea>` をリサイズできるかは CSS の `resize` プロパティで制御されます。とりうる値は次の通り:

- `both`: デフォルト値 — 水平、垂直ともリサイズ許可
- `horizontal`: 水平のみリサイズ許可
- `vertical`: 垂直のみリサイズ許可
- `none`: リサイズ許可しない
- `block` と `inline`: `block` や `inline` 方向のみにリサイズできる実験的な値 (これはテキストの方向性によって変わります。詳しくは [Handling different text directions](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) を見てください)

これがどのように動作するのかのデモは、{{cssxref("resize")}} リファレンスページの最初にあるインタラクティブな例で遊んでみてください。

## ドロップダウンコントロール

ドロップダウン コントロールは、ユーザー インターフェイスのスペースをあまり取らずに、ユーザーがさまざまなオプションから選択できるようにするためのシンプルな方法です。HTML には、**選択ボックス**と**オートコンプリート ボックス**という 2 つの形式のドロップダウン コンテンツがあります。どちらの場合も相互作用は同じです。コントロールを有効にすると、ブラウザーにはユーザーが選択できる値のリストが表示されます。

> **Note:** すべてのドロップダウンボックスの例は、GitHub の [drop-down-content.html ](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/drop-down-content.html)にあります ([ライブでもご覧ください](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html))。

### 選択ボックス

単純なセレクトボックスは、1 つ以上の {{HTMLElement("option")}} 要素を子要素として持つ {{HTMLElement("select")}}要素で作成され、それぞれが可能な値のうちの 1 つを指定します。

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Simple", 120, 120)}}

必要に応じて、希望する {{HTMLElement("option")}}要素の{{htmlattrxref("selected", "option")}}属性を用いて、セレクトボックスのデフォルト値を設定することができます。
\- このオプションは、ページが読み込まれたときにあらかじめ選択されています。

{{HTMLElement("option")}}要素は、{{HTMLElement("optgroup")}}要素の中に入れ子にすることができ、視覚的に関連付けられた値のグループを作成することができます。

```html
<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("groups", 120, 120)}}

{{HTMLElement("optgroup")}}要素では、label 属性の値が入れ子になったオプションの値の前に表示されます。ブラウザーは通常、それらをオプションから視覚的に離して（すなわち太字にしたり、入れ子レベルを変えたりして）表示しますので、実際のオプションと混同される可能性は低くなります。

{{HTMLElement("option")}}要素に明示的な value 属性が設定されている場合、そのオプションが選択された状態でフォームが送信された時にその値が送信されます。上の例のように value 属性を省略した場合は、{{HTMLElement("option")}}要素の内容が値として使われます。そのため、value 属性は必要ありませんが、セレクトボックスに視覚的に表示されている値とは異なる値を短くしたり、サーバーに送信したい理由があるかもしれません。

例えば、:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

デフォルトでは、選択ボックスの高さは、単一の値を表示するのに十分です。オプションの size 属性は、セレクトにフォーカスがない場合に表示されるオプションの数を制御します。

### 複数選択の選択ボックス

デフォルトでは、セレクトボックスは、ユーザーに単一の値を選択 さ せ る だけです。{{HTMLElement("select")}}要素に{{htmlattrxref("multiple", "select")}}属性を追加することで、オペレーティングシステムが提供するデフォルトのメカニズム（例えば、<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> を押しながらデスクトップ上で複数の値をクリックするなど）を使用して、ユーザーが複数の値を選択できるようにすることができます。

```html
<select id="multi" name="multi" multiple size="2">
  <optgroup label="fruits">
     <option>Banana</option>
     <option selected>Cherry</option>
     <option>Lemon</option>
   </optgroup>
   <optgroup label="vegetables">
     <option>Carrot</option>
     <option>Eggplant</option>
     <option>Potato</option>
   </optgroup>
</select>
```

{{EmbedLiveSample("Multiple_choice_select_box", 120, 120)}}

> **Note:** 複数選択可能なセレクトボックスの場合、セレクトボックスはドロップダウンコンテンツとして値を表示しないことに気づくでしょう - 代わりに、すべての値がリストに一度に表示され、オプションの [`size`](/ja/docs/Web/HTML/Attributes/size)属性はウィジェットの高さを決定します。

> **Note:** {{HTMLElement("select")}}要素をサポートするすべてのブラウザーは、{{htmlattrxref("multiple", "select")}}属性もサポートしています。

### オートコンプリートのボックス

You can provide suggested, automatically-completed values for form widgets using 表示する値を指定する {{HTMLElement("option")}} 子要素つきの {{HTMLElement("datalist")}} 要素を使って、フォームウィジェット用のオートコンプリートの提案値を提供できます。 `<datalist>` には `id`が必要です。

データリストは、 `id` の値が拘束するデータリストの値となる {{htmlattrxref("list","input")}} 属性を用いて、 {{htmlelement("input")}} 要素 (つまり`text` や `email` の入力タイプ) に拘束されます。

データリストがフォームウィジェットに関連づけられると、オプションはユーザーが入力するオートコンプリートテキストに使われます。典型的には、これはユーザーが入力に打ち込んだものにマッチするドロップダウンボックスで表示されます。

例を見てみましょう。

```html
<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion">
<datalist id="mySuggestion">
  <option>Apple</option>
  <option>Banana</option>
  <option>Blackberry</option>
  <option>Blueberry</option>
  <option>Lemon</option>
  <option>Lychee</option>
  <option>Peach</option>
  <option>Pear</option>
</datalist>
```

{{EmbedLiveSample("first_autocomplete", 120, 120)}}

#### Datalist support and fallbacks

Almost all browsers support datalist, but if you are still supporting older browsers such as IE versions below 10, there is a trick to provide a fallback:

```html
<label for="myFruit">What is your favorite fruit? (With fallback)</label>
<input type="text" id="myFruit" name="fruit" list="fruitList">

<datalist id="fruitList">
  <label for="suggestion">or pick a fruit</label>
  <select id="suggestion" name="altFruit">
    <option>Apple</option>
    <option>Banana</option>
    <option>Blackberry</option>
    <option>Blueberry</option>
    <option>Lemon</option>
    <option>Lychee</option>
    <option>Peach</option>
    <option>Pear</option>
  </select>
</datalist>
```

{{EmbedLiveSample("Datalist_support_and_fallbacks", 120, 120)}}

Browsers that support the {{HTMLElement("datalist")}} element will ignore all the elements that are not {{HTMLElement("option")}} elements, with the datalist working as expected. Old browsers that don't support the {{HTMLElement("datalist")}} element will display the label and the select box.

The following screenshot shows the datalist fallback as rendered in Safari 6:

![Screenshot of the datalist element fallback with Safari on Mac OS](/files/4583/datalist-safari.png)

If you use this fallback, ensure the data for both the `<input>` and the `<select>` are collected server-side.

#### Less obvious datalist uses

According to [the HTML specification](http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-list), the {{htmlattrxref("list","input")}} attribute and the {{HTMLElement("datalist")}} element can be used with any kind of widget requiring a user input. This leads to some uses of it that might seem a little non-obvious.

例えば、in browsers that support `{{htmlelement("datalist")}}` on `range` input types, a small tick mark will be displayed above the range for each datalist `{{htmlelement("option")}}` value. You can see an implementation [example of this on the `<input type="range">` reference page](/ja/docs/Web/HTML/Element/input/range#A_range_control_with_hash_marks).

And browsers that support {{htmlelement('datalist')}}s and [`<input type="color">`](/ja/docs/Web/HTML/Element/input/color) should display a customized palette of colors as the default, while still making the full color palette available.

In this case, different browsers behave differently from case to case, so consider such uses as progressive enhancement, and ensure they degrade gracefully.

## その他のフォーム機能

There are a few other form features that are not as obvious as the ones we have already mentioned, but still useful in some situations, so we thought it would be worth giving them a brief mention.

> **Note:** You can find the examples from this section on GitHub as [other-examples.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/other-examples.html) ([see it live also](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### メーターとプログレスバー

Meters and progress bars are visual representations of numeric values.

#### Progress

A progress bar represents a value that changes over time up to a maximum value specified by the {{htmlattrxref("max","progress")}} attribute. Such a bar is created using a {{ HTMLElement("progress")}} element.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

This is for implementing anything requiring progress reporting, such as the percentage of total files downloaded, or the number of questions filled in on a questionnaire.

The content inside the {{HTMLElement("progress")}} element is a fallback for browsers that don't support the element and for screen readers to vocalize it.

#### Meter

A meter bar represents a fixed value in a range delimited by {{htmlattrxref("max","meter")}} and {{htmlattrxref("min","meter")}} values. This value is visually rendered as a bar, and to know how this bar looks, we compare the value to some other set values:

- The {{htmlattrxref("low","meter")}} and {{htmlattrxref("high","meter")}} values divide the range in three parts:

  - The lower part of the range is between the {{htmlattrxref("min","meter")}} and {{htmlattrxref("low","meter")}} values, inclusive.
  - The medium part of the range is between the {{htmlattrxref("low","meter")}} and {{htmlattrxref("high","meter")}} values, exclusive.
  - The higher part of the range is between the {{htmlattrxref("high","meter")}} and {{htmlattrxref("max","meter")}} values, inclusive.

- The {{htmlattrxref("optimum","meter")}} value defines the optimum value for the {{HTMLElement("meter")}} element. In conjuction with the {{htmlattrxref("low","meter")}} and {{htmlattrxref("high","meter")}} value, it defines which part of the range is prefered:

  - If the {{htmlattrxref("optimum","meter")}} value is in the lower part of the range, the lower range is considered to be the prefered part, the medium range is considered to be the average part, and the higher range is considered to be the worst part.
  - If the {{htmlattrxref("optimum","meter")}} value is in the medium part of the range, the lower range is considered to be an average part, the medium range is considered to be the prefered part, and the higher range is considered to be average as well.
  - If the {{htmlattrxref("optimum","meter")}} value is in the higher part of the range, the lower range is considered to be the worst part, the medium range is considered to be the average part and the higher range is considered to be the prefered part.

All browsers that implement the {{HTMLElement("meter")}} element use those values to change the color of the meter bar:

- If the current value is in the prefered part of the range, the bar is green.
- If the current value is in the average part of the range, the bar is yellow.
- If the current value is in the worst part of the range, the bar is red.

Such a bar is created using a {{HTMLElement("meter")}} element. This is for implementing any kind of meter, 例えば、a bar showing total space used on a disk, which turns red when it starts to get full.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

The content inside the {{HTMLElement("meter")}} element is a fallback for browsers that don't support the element and for assistive technologies to vocalize it.

Support for {{HTMLElement("progress")}} and {{HTMLElement("meter")}} is fairly good — there is no support in Internet Explorer, but other browsers support it well.

## スキルをテストしよう!

この記事の終わりまで到達しましたが、最も重要な情報を覚えていますか？次に移る前に、この情報を保持しているか検証するテストがあります — [Test your skills: Other controls](/ja/docs/Learn/Forms/Test_your_skills:_Other_controls) を見てください。

## まとめ

最も後のいくつかの記事で見てきたように、利用できるフォーム要素にはいろいろな種類がたくさんあります。一見してすべてを詳しく覚えておく必要はなく、詳細について調べたいだけ、記事に戻ることができます。

いろいろなフォームコントロールの背後にある HTML をざっと理解したので、[それらのスタイル設定](/ja/docs/Learn/Forms/Styling_HTML_forms)について見ていきましょう。

{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_HTML_forms", "Learn/Forms")}}

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
