---
title: <input type="number">
slug: Web/HTML/Element/input/number
tags:
  - 要素
  - フォーム
  - HTML
  - HTML フォーム
  - Input
  - 入力要素
  - 入力型
  - Number
  - リファレンス
browser-compat: html.elements.input.input-number
translation_of: Web/HTML/Element/input/number
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`number`** 型は、ユーザーに数値を入力させるために使用されます。数値以外の入力を除外するための値検証機能を内蔵しています。

ブラウザーによっては、マウスや指先のタップを使用して、値をユーザーが値を増減させるための矢印を提供していることもあります。

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

`number` 型に対応していないブラウザーでは、 `number` 入力欄は `text` 入力欄で代替されます。

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#値">値</a></strong></td>
      <td>数字を表す {{jsxref("Number")}}、または空欄</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("placeholder", "input")}},
        {{htmlattrxref("readonly", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>list</code>, <code>value</code>, <code>valueAsNumber</code></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
      </td>
    </tr>
  </tbody>
</table>

## 値

入力欄に入力された数字の値を表す数値です。 {{htmlattrxref("value", "input")}} 属性に数値を設定することで、次のように入力欄の既定値を設定することができます。

```html
<input id="number" type="number" value="42">
```

{{EmbedLiveSample('Value', 600, 40)}}

## 追加の属性

すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `number` 型の入力欄は次の属性にも対応しています。

### list

list 属性の値は、同じ文書内にある {{HTMLElement("datalist")}} 要素の {{domxref("Element.id", "id")}} です。 {{HTMLElement("datalist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち、この {{htmlattrxref("type", "input")}} と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

### max

この入力欄が受け付ける最大値です。要素に入力された {{htmlattrxref("value", "input")}} がこれを超えた場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。 `max` 属性の値が数値でない場合、要素は最大値を持ちません。

この値は `min` 属性の値より大きいか、等しくしなければなりません。

### min

この入力欄が受け付ける最小値です。要素の {{htmlattrxref("value", "input")}} がこれより小さい場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。 `min` 属性の値が数値でない場合、要素は最小値を持ちません。

この値は `max` 属性の値より小さいか、等しくしなければなりません。

### placeholder

`placeholder` 属性は文字列で、その欄にどのような種類の情報が期待されているかについてのユーザーに対する短いヒントを提供します。これは期待されているデータの種類を紹介する一語または短い句であり、説明的なメッセージではありません。テキストには改行を含めることはできません。

コントロールの内容がある書字方向 ({{Glossary("LTR")}} または {{Glossary("RTL")}}) であるものの、プレイスホルダーを逆の方向に表示する必要がある場合、 Unicode 双方向アルゴリズム書式文字を使用してプレイスホルダーの中で書字方向を上書きすることができます。詳しくは、[双方向テキストでの Unicode コードの使い方（英語）](https://www.w3.org/International/questions/qa-bidi-unicode-controls)を参照してください。

> **Note:** 可能であれば `placeholder` を使用することは避けてください。フォームを説明する他の方法ほど意味論的に有益ではなく、コンテンツに予期しない技術的な問題を引き起こす可能性があります。詳しくは、[\<input>: 入力欄 (フォーム入力) 要素](/ja/docs/Web/HTML/Element/input)の[プレイスホルダーはアクセシブルではない](/ja/docs/Web/HTML/Element/input#プレイスホルダーはアクセシブルではない)を参照してください。

### readonly

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `value` は、 JavaScript コードから直接 {{domxref("HTMLInputElement")}} の `value` プロパティを設定することで変更することができます。

> **Note:** 読み取り専用フィールドは値を持てないため、 `required` は `readonly` 属性も指定されている入力欄には効果がありません。

### step

`step` 属性は値が吸着する粒度を指定する数値、または後述する特殊な値 `any` です。刻みの基準値に等しい値（指定されていれば [`min`](#min)、そうでなければ {{htmlattrxref("value", "input")}}、どちらも設定されていなければ適切な既定値）のみが妥当となります。

文字列値の `any` は、刻みがなく、どの値でも許可されることを意味します（[`min`](#min) や [`max`](#max) など、他の制約には制限されます）。

> **Note:** ユーザーがデータを入力したときには刻みの設定には吸着せず、{{Glossary("user agent", "ユーザーエージェント")}}は直近の妥当な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸められます。

`number` 入力欄の既定の刻み値は `1` であり、刻みの基準値が整数ではない場合を*除いて*、整数の入力のみを許可します。

## number 入力欄の使用

`<input type="number">` 要素は、フォームに数値を入力するユーザーインターフェイスとロジックを構築する際に、作業を簡略化するのに役立ちます。 `type` の値に正しく `number` を設定して数値入力を作成すると、入力された文字列が数値かどうかが自動的に検証されるようになり、通常は値を 1 つずつ上下するための上下ボタンの組み合わせが表示されます。

> **Warning:** 論理的には、数値入力欄の中に数字以外を入力することはできないはずです。これらは、ブラウザー間でこれに関するいくつかの意見の相違があるようです。 {{bug(1398528)}} を参照してください。

> **Note:** ユーザーが HTML をその場面の裏でいじることができることを意識しておくことは極めて重要です。ですから、安全を目的として、サイトでクライアント側の値検証機能のみを使用しては<em>いけません</em>。何らかのセキュリティ上の問題を含む可能性がある値が提供されるトランザクションの場合は、いずれもサーバー側で値検証を行う<em>必要があります</em>。

モバイルブラウザーでは、ユーザーが値を入力しようとした時に、数値入力に適した特別なキーボードを表示することで、使い勝手をさらに向上させます。

### 単純な数値入力

最も基本的なフォームでは、次のように数値入力を実装することができます。

```html
<label for="ticketNum">購入したいチケット数を入力してください。</label>
<input id="ticketNum" type="number" name="ticketNum" value="0">
```

{{EmbedLiveSample('A_simple_number_input', 600, 40)}}

数値入力は空の場合と単一の数値が入力された場合に妥当とみなされますが、それ以下は無効とみなされます。 {{htmlattrxref("required", "input")}} 属性が使用された場合は、入力欄が空の場合に妥当とみなされなくなります。

> **Note:** [有効な浮動小数点数](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number)を受け入れることができます（つまり、 [NaN](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) でも [Infinity](/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity) でもないもの）。

### プレイスホルダー

フォームがどのような入力データを取るのかについての行内のヒントを提供すると、有益なことがあります。これはページのデザインでそれぞれの {{HTMLElement("input")}} に説明のラベルを付けることができない場合に特に重要になります。ここで**プレイスホルダー**ガ登場します。プレイスホルダーはほとんどの場合、入力される `value` が取るべき値の形式のヒントを説明するために使用される値です。これは `value` が `""` の時に入力欄の中に表示されます。入力欄にデータが入力されると、プレイスホルダーは非表示になり、入力欄が空欄になると、プレイスホルダーは再度表示されます。

ここで、 `number` 入力欄に "`10 の倍数`" というプレイスホルダーを設定します。なお、プレイスホルダーが非表示になったり再表示されたりするのは、入力欄の中身を変更したときです。

```html
<input type="number" placeholder="10 の倍数">
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### 刻み幅の制御

既定で、数値を増減させるための増減ボタンは、 1 刻みで値を増減させます。 {{htmlattrxref("step", "input")}} 属性を設定することで、刻みの量を指定する数値の値を変更できます。上記の例は10の倍数を指定すると言っていますので、 `step` の値を `10` にすることが妥当でしょう。

```html
<input type="number" placeholder="10 の倍数" step="10">
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

この例で、増減ボタンが値を 1 ずつではなく 10 ずつ増減させることが分かるでしょう。手動で 10 の倍数ではない数値を入力することができますが、無効な値とみなされるでしょう。

### 最小値と最大値の指定

{{htmlattrxref("min", "input")}} オヨビ {{htmlattrxref("max", "input")}} 属性を使用して、入力欄が保持できる最小値と最大値を指定することができます。例えば、最小値を `0` に、最大値を `100` に設定する例をご紹介しましょう。

```html
<input type="number" placeholder="10 の倍数" step="10" min="0" max="100">
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

更新したこの版では、増減ボタンで 0 未満や 100 より大きい数値を設定することができないことにお気づきでしょう。手動でこの範囲の外の値を入力することもできますが、無効な値とみなされるでしょう。

### 小数が使用できるようにする

数値入力の問題の一つが、既定で刻みが 1 になっていることです。小数を含む数値（たとえば "1.0"）を入力しようとすると、無効な値とみなされるでしょう。小数が必要な値を入力させたい場合は、これを `step` の値に反映させる必要があります（例えば `step="0.01"` で小数第 2 位まで許可します）。単純な例を示します。

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10">
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

この例では `0.0` から `10.0` までで、小数第 2 位までの値が許容されます。この例では "9.52" は妥当になりますが、 "9.521" は妥当ではありません。

### 入力欄の寸法の制御

{{HTMLElement("input")}} 要素で type が `number` の場合、 {{htmlattrxref("size", "input")}} のような寸法を決める属性には対応していません。入力欄の寸法を変更するには [CSS](/ja/docs/Web/CSS) に頼る必要があります。

例えば、入力欄の幅を数字 3 桁の入力に必要なだけの幅に調整するには、 HTML に {{htmlattrxref("id")}} を設定し、これから入力欄を短くしたときに文字列が表示できなくならないように、プレイスホルダーを短縮します。

```html
<input type="number" placeholder="x10" step="10" min="0" max="100" id="number">
```

それから、要素の `id` が `#number` である要素の幅を短くします。

```css
#number {
  width: 3em;
}
```

結果は以下のように表示されます。

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### サジェスト値の提供

{{htmlattrxref("list", "input")}} 属性に、サジェスト値あたり一つの {{HTMLElement("option")}} 要素を含んだ {{HTMLElement("datalist")}} の {{htmlattrxref("id")}} を値として入れることにより、ユーザーの選択することができる既定の選択肢のリストを提供することができます。それぞれの `option` の `value` は、数値入力ボックスのサジェスト値に関係します。

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers">
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678">
  <option value="103421">
  <option value="11111111">
  <option value="12345678">
  <option value="12999922">
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

## 検証

すでに `number` 入力欄における幾つかの検証機能については言及しましたが、ここで確認してみましょう。

- `<input type="number">` 要素は、数値（または `required` が指定されていない場合は空欄）ではない入力を自動的に違反とします。
- {{htmlattrxref("required", "input")}} 属性を使用すると、空欄の入力を違反とします。 (つまり、入力欄は埋める*必要があります*。)
- {{htmlattrxref("step", "input")}} 属性を使用すると、妥当な値を特定の刻みの値 (例えば、10の倍数) に制約することができます。
- {{htmlattrxref("min", "input")}} および {{htmlattrxref("max", "input")}} 属性を使用すると、妥当な値の下限と上限を設けることができます。

次の例は上記の機能のすべてを例示しており、また幾らか CSS を用いて、 `input` の値によって、妥当または違反のアイコンを表示するようにします。

```html
<form>
  <div>
    <label for="balloons">風船の注文数 (10の倍数):</label>
    <input id="balloons" type="number" name="balloons" step="10" min="0" max="100" required>
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit">
  </div>
</form>
```

{{EmbedLiveSample("Validation", 600, 110)}}

様々な違反する値を入力して、フォームを送信しようとしてみてください。例えば、値なし、 0 未満または 100 を超えた値、 10 の倍数ではない値、数値でない値などです。そして、それぞれにおいてブラウザーがどのようなエラーメッセージを表示するかを確認してください。

この例で適用される CSS は以下の通りです。

```css
div {
  margin-bottom: 10px;
}

input:invalid+span:after {
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  content: '✓';
  padding-left: 5px;
}
```

ここで、 {{cssxref(":invalid")}} および {{cssxref(":valid")}} 擬似クラスを用いて、隣の {{htmlelement("span")}} 要素の生成コンテンツとして無効または妥当の適切なアイコンを表示し、妥当性の視覚的なインジケーターにすることができます。

別な `<span>` 要素に入れたのは自由度を高めるためです。ブラウザーによっては一部の種類のフォーム入力欄において、あまり効果的に生成コンテンツを表示できないことがあります（[`<input type="date">` の検証](/ja/docs/Web/HTML/Element/input/date#validation)の節の例を読んでください）。

> **Warning:** HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するサーバースクリプトの代用には*なりません*。
>
> 誰かが HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML をバイパスし、サーバーに直接データを送信することも可能です。
>
> サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、間違った種類のデータなど）がデータベースに入力された場合に災害が発生するおそれがあります。

### パターンによる値検証

`<input type="number">` 要素は {{htmlattrxref("pattern", "input")}} 属性を使用して、入力された値が特定の正規表現パタ ー ンを満たすようにすることに対応していません。

これは、 number 入力欄は数値以外の何が入力されても妥当にはならないからであり、上記で説明したとおり、 {{htmlattrxref("min", "input")}} および {{htmlattrxref("max", "input")}} 属性を用いて妥当な数値の最大値および最小値を制約することができます。

## 例

すでに既定では増分が `1` であるという事実を扱いましたので、 {{htmlattrxref("step", "input")}} 属性を使用して実数を入力できるようにすることができます。もう少し詳しく見てみましょう。

以下の例は、ユーザーの身長を入力するフォームです。既定では慎重をメートル単位で受け付けますが、関連するボタンをクリックすることでフォームがフィートとインチを受け付けるように変更することができます。メートル単位の身長の入力欄は小数第2位まで受け付けます。

{{EmbedLiveSample("Examples", 600, 150)}}

HTML は次のようになります。

```html
<form>
    <div class="metersInputGroup">
        <label for="meters">あなたの身長を入力してください (メートル):</label>
        <input id="meters" type="number" name="meters" step="0.01" min="0" placeholder="e.g. 1.78" required>
        <span class="validity"></span>
    </div>
    <div class="feetInputGroup" style="display: none;">
        <span>あなたの身長を入力してください — </span>
        <label for="feet">フィート:</label>
        <input id="feet" type="number" name="feet" min="0" step="1">
        <span class="validity"></span>
        <label for="inches">インチ:</label>
        <input id="inches" type="number" name="inches" min="0" max="11" step="1">
        <span class="validity"></span>
    </div>
    <div>
      <input type="button" class="meters" value="身長をフィートとインチで入力">
    </div>
    <div>
        <input type="submit" value="フォームを送信">
    </div>
</form>
```

これまでの記事ですでに見てきた属性の多くを使用していることがわかります。センチメートル単位のメートル値を受け入れるため、 `step` の値を `0.01` に設定して、 _1.78_ のような値が無効とされないようにしました。また、その入力欄のプレイスホルダーも提供しました。

最初はフィートとインチの入力欄を `style="display: none;"` を使用して非表示にしているため、既定はメートルでの入力です。

次に、 CSS に進みます。これは、以前に見た検証のスタイル付けととても良く似ています。ここで注目するところはありません。

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

そして最後に、 JavaScript です。

```js
let metersInputGroup = document.querySelector('.metersInputGroup');
let feetInputGroup = document.querySelector('.feetInputGroup');
let metersInput = document.querySelector('#meters');
let feetInput = document.querySelector('#feet');
let inchesInput = document.querySelector('#inches');
let switchBtn = document.querySelector('input[type="button"]');

switchBtn.addEventListener('click', function() {
  if(switchBtn.getAttribute('class') === 'meters') {
    switchBtn.setAttribute('class', 'feet');
    switchBtn.value = '身長をメートルで入力';

    metersInputGroup.style.display = 'none';
    feetInputGroup.style.display = 'block';

    feetInput.setAttribute('required', '');
    inchesInput.setAttribute('required', '');
    metersInput.removeAttribute('required');

    metersInput.value = '';
  } else {
    switchBtn.setAttribute('class', 'meters');
    switchBtn.value = '身長をフィートとインチで入力';

    metersInputGroup.style.display = 'block';
    feetInputGroup.style.display = 'none';

    feetInput.removeAttribute('required');
    inchesInput.removeAttribute('required');
    metersInput.setAttribute('required', '');

    feetInput.value = '';
    inchesInput.value = '';
  }
});
```

いくつかの変数を宣言した後、イベントリスナーを `button` に追加し、切り替えの仕組みを制御しています。これはとても単純で、ほとんどがボタンの `class` と {{HTMLElement("label")}} を変更するためのものであり、そしてボタンが押されたときに2組の入力の display 値を更新しています。

(なお、ここではメートルとフィート/インチの間の変換は行っていませんが、実際のウェブアプリケーションではおそらく行うでしょう。)

> **Note:** ユーザーがボタンをクリックしたとき、 `required` 属性を非表示にする入力欄から削除し、 `value` 属性を空にしています。これは入力欄の両方の組が入力されていなくてもフォームを送信することができるようにしています。これはユーザーが意図していないデータをフォームが送信しないことを保証するものでもあります。
>
> これを行わないと、フィート/インチ**と**メートルの両方を入力してフォームを送信することができてしまいます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォームガイド](/ja/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/ja/docs/Web/HTML/Element/input/tel)
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
