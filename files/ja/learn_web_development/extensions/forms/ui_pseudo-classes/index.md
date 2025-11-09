---
title: UI 擬似クラス
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: f6844f5e30882a6a4843da9b026bc0166ade9c41
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

これまでの記事では、様々なフォームコントロールのスタイル設定について、一般的な方法で説明しました。これには、例えばチェックボックスが選択されたときだけターゲットにするために `:checked` を使用するような、擬似クラスの使用方法も記載しました。この記事では、さまざまな状態のフォームをスタイル設定するために利用できる、さまざまな UI 擬似クラスについて詳しく説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的な
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> および
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a> を理解していること（一般的な
        <a
          href="/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >擬似クラスと擬似要素</a
        >の知識を含む）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        フォームのどの部分がスタイル設定しにくいのか、その理由を理解すること。カスタマイズするために何ができるかを学ぶこと。
      </td>
    </tr>
  </tbody>
</table>

## 利用できる擬似クラスには何があるのか

フォームに関連する、（[CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes) からの）元から利用できる擬似クラスは次の通りです。

- {{cssxref(":hover")}}: マウスポインターを当てたときだけ要素を選択します。
- {{cssxref(":focus")}}: フォーカスされているとき（キーボードからタブで移動しているとき）にのみ、要素を選択します。
- {{cssxref(":active")}}: その要素がアクティブ化されているとき（つまり、クリックされたとき、またはキーボード操作の場合は <kbd>Return</kbd> / <kbd>Enter</kbd> キーが押されたとき）だけ、要素を選択します。

これらの基本的な擬似クラスについては、 もう慣れたことでしょう。 [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)では、他にも HTML フォームに関連する擬似クラスをいくつか提供しています。これらは、これらは、利用することができる有用なターゲット条件をいくつか提供しています。以下の節で詳しく説明しますが、簡単に説明すると、主なものは以下のとおりです。

- {{cssxref(':required')}} および {{cssxref(':optional')}}: 必須となりうる要素（HTML [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) 属性に対応している要素など）を、必須かオプションかに基づいて対象とします。
  必須または省略可能なフォームコントロールを対象とします。
- {{cssxref(":valid")}} と {{cssxref(":invalid")}}、 {{cssxref(":in-range")}} と {{cssxref(":out-of-range")}}: 設定されたフォーム検証の制約に従って有効/無効、または範囲内/範囲外のフォームコントロールを対象とします。
- {{cssxref(":enabled")}} と {{cssxref(":disabled")}}、 {{cssxref(":read-only")}} と {{cssxref(":read-write")}}: 無効化できる要素（HTML [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) 属性に対応した要素など）については現在有効か無効かに基づいて、また、読み書き可能、読み取り専用のフォームコントロール（HTML [`readonly`](/ja/docs/Web/HTML/Reference/Attributes/readonly) 属性が設定された要素など）を対象にします。
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, {{cssxref(":default")}}: それぞれ、チェックされているチェックボックスとラジオボタン、不確定な状態（チェックされていないかチェックされていないかのどちらか）、ページを読み込んだときの既定の選択オプション（例えば、 [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) に [`checked`](/ja/docs/Web/HTML/Reference/Elements/input#checked) 属性が設定されているもの、または [`<option>`](/ja/docs/Web/HTML/Reference/Elements/option) 要素に [`selected`](/ja/docs/Web/HTML/Reference/Elements/option#selected) 属性が設定されているものなどが対象です。）

他にもたくさんありますが、上に挙げたものが明らかに最も有用です。中にはとても特殊でニッチな問題を解決することを目的としたものもあります。上に挙げた UI 擬似クラスはブラウザーの対応が充実していますが、もちろん、対象とするユーザーに対して確実に動作するよう、フォームの実装を慎重にテストする必要があります。

> [!NOTE]
> ここで説明する多くの擬似クラスは、検証状態（データが有効か無効か）に基づくフォームコントロールのスタイル設定に関係しています。検証制約の設定と操作については、次の記事「[クライアントサイドのフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)」で詳しく説明しますが、今は混乱しないようにフォーム検証に関して単純にしておきます。

## 入力が必須か否かによるスタイル設定

クライアントサイドのフォーム検証に関する最も基本的な概念の一つは、フォームの入力が必須（フォームを送信する前に入力する必要がある）か任意（オプション）かです。

{{htmlelement('input')}}、{{htmlelement('select')}}、{{htmlelement('textarea')}} の各要素には `required` 属性を利用することができ、設定すると、フォームが正常に送信される前にそのコントロールに入力しなければならないことを意味しています。例えば、

```html
<form>
  <fieldset>
    <legend>Feedback form</legend>
    <div>
      <label for="fname">First name: </label>
      <input id="fname" name="fname" type="text" required />
    </div>
    <div>
      <label for="lname">Last name: </label>
      <input id="lname" name="lname" type="text" required />
    </div>
    <div>
      <label for="email">
        Email address (include if you want a response):
      </label>
      <input id="email" name="email" type="email" />
    </div>
    <div><button>Submit</button></div>
  </fieldset>
</form>
```

ここでは、最初の名前と姓は必須ですが、電子メールアドレスは任意です。

この 2 つの状態を一致させるには、 {{cssxref(':required')}} と {{cssxref(':optional')}} 擬似クラスが使用できます。例えば、上記の HTML に以下のような CSS を適用するとします。

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

必要な操作には黒い枠線が、オプションの操作には銀色の枠線が、このように表示されます。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

また、フォームに入力せずに送信してみると、ブラウザーが既定で出すクライアントサイドの検証エラーメッセージを見ることができます。

上記のフォームは悪くはないのですが、とても良いわけではありません。第一に、必須とオプションの状態を色だけで表示していることです。これは色覚障碍者にとってはあまり良いことではありません。第二に、ウェブでの標準的な必須状態の表記は、アスタリスク (`*`)、または「必須」という言葉を該当する操作に関連付けることだからです。

次の節では、 `:required` を使用して必須項目を示すより良い例を見ていきます。これは、生成コンテンツを使用することについても掘り下げます。

> [!NOTE]
> おそらく `:optional` 擬似クラスを使用することはあまりないでしょう。フォームコントロールは既定でオプションなので、オプションのスタイル設定を既定値で行い、必要なコントロールのスタイルを上から追加すればよいのです。

> [!NOTE]
> 同じ名前のラジオボタン群の中の 1 つのラジオボタンに `required` 属性が設定されている場合、すべてのラジオボタンは 1 つが選択されるまで無効ですが、属性が割り当てられたものだけが実際に {{cssxref(':required')}} に一致することになります。

## 擬似クラスでコンテンツを生成する

これまでの記事で、[生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)の使い方を見てきましたが、今こそもう少し詳しく話をする良い機会だと思い、今回はその内容を紹介します。

これは、 [`::before`](/ja/docs/Web/CSS/Reference/Selectors/::before) と [`::after`](/ja/docs/Web/CSS/Reference/Selectors/::after) という擬似要素と [`content`](/ja/docs/Web/CSS/Reference/Properties/content) というプロパティを使用して、影響を受ける要素の前または後にコンテンツの塊を表示させることができるというものです。コンテンツの塊は DOM に追加されないので、スクリーンリーダーによっては見えないかもしれません。擬似要素なので、実際の DOM ノードと同じ方法でスタイル設定の対象とすることができます。

これは、すべてのユーザーのアクセシビリティを保証するため代替のインジケーターも利用できる場合に、ラベルやアイコンのような視覚的なインジケーターを要素に追加したい場合に実に有益です。たとえば、[カスタムラジオボタンの例](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html)では、ラジオボタンが選択されたときにカスタムラジオボタンの内側の円の配置とアニメーションを処理するために生成コンテンツを使用しています。

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

これは実に有用です。スクリーンリーダーでは、遭遇したラジオボタンやチェックボックスがチェックまたは選択されているかをすでにユーザーに知らせているので、選択を示す別の DOM 要素を読み上げさせたくはないでしょう。紛らわしくなる可能性があるからです。純粋に視覚的なインジケーターを置くことで、この問題は解決されます。

すべての `<input>` 型が生成コンテンツを保有することに対応しているわけではありません。動的テキストを入力する `text`、`password`、`button` などの入力型は、すべて生成コンテンツを表示しません。他にも `range`、`color`、`checkbox` などがあり、これらは生成コンテンツを表示します。

先ほどの必須/オプションの例に戻りますが、今回は入力フィールド自体の外観は変更しません。生成コンテンツを使用して、指示するラベルを追加します（[こちらでライブで確認](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html)するか、[こちらでソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)を確認するかしてください。

まず最初に、フォームの一番上に、何を求めているのか、という段落を追加します。

```html
<p>Required fields are labeled with "required".</p>
```

スクリーンリーダーには、 "required" が追加情報として読み上げられ、目の見えるユーザーには、このラベルが表示されます。

前に述べたように、テキスト入力フィールドは生成コンテンツに対応していないので、生成コンテンツをぶら下げるために空の [`<span>`](/ja/docs/Web/HTML/Reference/Elements/span) を追加します。

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

この場合、入力フィールドとラベルの両方が `width: 100%` に設定されているため、span が入力フィールドの下の新しい行にドロップされてしまうという問題がありました。これを修正するために、親の `<div>` をフレックスコンテナーにするスタイルを設定し、さらにコンテンツが長くなりすぎた場合は新しい行に折り返すように指示します。

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

この効果として、ラベルと入力フィールドはどちらも `width: 100%` なので別個の行に表示されますが、 `<span>` は width が `0` なので、入力フィールドと同じ行に表示されます。

次に、生成コンテンツについて説明します。この CSS を使用してコンテンツを作成します。

```css
input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "required";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}
```

ここでは `<span>` を `position: relative` に設定しているので、生成されるコンテンツを `position: absolute` に設定すると、位置は `<body>` ではなく `<span>` からの相対位置になります（位置決めのために生成コンテンツは生成要素の子ノードであるかのように動作します）。

そして、生成コンテンツに、このラベルに書かせたい内容である "required" を与え、好きなようにスタイルと位置を設定します。結果は以下のようになります。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## データが妥当が否かでコントロールをスタイル設定する

フォーム検証におけるもう一つの実に重要で基本的な概念は、フォームコントロールのデータが有効か無効か（数値データの場合、範囲内と範囲外のデータという言い方もできる）です。[制約制限](/ja/docs/Web/HTML/Guides/Constraint_validation)を持つフォームコントロールは、これらの状態に基づいて対象とすることができます。

### :valid と :invalid

フォームコントロールは {{cssxref(":valid")}} と {{cssxref(":invalid")}} 擬似クラスを使用して対象とすることができます。この点については、いくつか留意すべき点があります。

- 制約検証を行わないコントロールは常に有効であり、したがって `:valid` と一致します。
- `required` が設定されているコントロールで、値がないものは無効とみなされ、 `:invalid` および `:required` と一致します。
- 組み込みの検証機能を持つコントロール、たとえば `<input type="email">` や `<input type="url">` は、入力されたデータが検索するパターンと一致しない場合、 `:invalid` に一致します（ただし、空の場合は有効になります）。
- 現在の値が [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) と [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性で指定した範囲の外にあるコントロールは、後述するように `:invalid` と一致しますが {{cssxref(":out-of-range")}} によっても一致させることができます。
- 他にも `:valid`/`:invalid` に一致する要素を作る方法はいくつかありますが、それは[クライアントサイドのフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation) の記事で見てください。しかし、今は事をシンプルにすることにしましょう。

それでは、 `:valid`/`:invalid` の簡単な例を見てみましょう（ライブ版は [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) を、また[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)も参照してください）。

前の例と同様に、コンテンツを生成するための余分な `<span>` を保有しており、これを使用して、有効/無効なデータのインジケーターを提供していきます。

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

これらの指標を提供するために、以下の CSS を使用しています。

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

これまでと同様に、`<span>`を `position: relative` に設定し、生成されたコンテンツを相対的に位置指定できるようにします。次に、フォームのデータが有効か無効かによって、異なる生成コンテンツを絶対位置指定します。無効なデータには、少し緊急性を追加するために、入力フィールドに太い赤の境界線が指定されました。

> [!NOTE]
> ここで `::before` を使用してラベルを追加したのは、 `::after` を既に "required" ラベルのために使用していたからです。

次のもので試してみてください。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

必須のテキスト入力フィールドは、空の状態では無効ですが、何か記入されている状態では有効であることに注目してください。一方、 email の入力フィールドは、必須でないため空の状態では有効ですが、適切なメールアドレスでないものが含まれていると無効となります。

### 範囲内と範囲外のデータ

上で触れたように、他にも2つの関連する擬似クラスがあります。 {{cssxref(":in-range")}} と {{cssxref(":out-of-range")}} です。これらは、 [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) と [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) によって範囲指定された数値入力フィールドに対して、そのデータがそれぞれ指定した範囲内または範囲外にあるときに一致させます。

> [!NOTE]
> 数値の入力型とは、 `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` のことです。

注目すべきは、データが範囲内にある入力フィールドは `:valid` 擬似クラスに一致し、データが範囲外である入力フィールドは `:invalid` 擬似クラスに一致することです。では、なぜこの 2 つが存在するのでしょうか？実に意味論上の問題です。範囲外であるということは無効であることを伝えるためのより具体的なものなので、入力が範囲外であるというと、単に「無効」と言うよりユーザーに役立つ可能性があります。両方を提供することもできます。

まさにこれを行う例を見てみましょう。この [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) デモ（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html) も参照）は、前の例の上に構築されており、数値入力フィールドに対して範囲外である場合のメッセージと、それが必要であるかどうかを示しています。

数値入力フィールドはこのようになります。

```html
<div>
  <label for="age">年齢（12 歳以上）:</label>
  <input id="age" name="age" type="number" min="12" max="120" required />
  <span></span>
</div>
```

そして、 CSS は次のようになります。

```css
input + span {
  position: relative;
}

input + span::after {
  font-size: 0.7rem;
  position: absolute;
  padding: 5px 10px;
  top: -26px;
}

input:required + span::after {
  color: white;
  background-color: black;
  content: "Required";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "Outside allowable value range";
  left: -182px;
}
```

これは以前の `:required` の例と同じような話ですが、ここでは `::after` の内容に適用される宣言を別のルールに分割し、 `:required` と `:out-of-range` 状態のための `::after` の内容に、それぞれ別のコンテンツとスタイルを保有するようにした点が異なっています。こちらで試すことができます。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

数値の入力フィールドが必須であると同時に範囲外である可能性もありますが、その場合はどうなるのでしょうか？ `:out-of-range` のルールは `:required` のルールよりもソースコード上の後で現れるため、[カスケードルール](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#カスケードを理解する)が作用して、範囲外のメッセージが表示されます。

これはとてもうまく動作します。最初にページを読み込むと、赤いバツ印と枠線とともに "Required" が表示されます。有効な年齢（12 ～ 120 歳の範囲）を入力すると、入力フィールドは有効になります。しかし、年齢を範囲外の値に変更すると、 "Required" の代わりに "Outside allowable value range" というメッセージが表示されます。

> [!NOTE]
> 無効な値や範囲外の値を入力するには、実際にフォームにフォーカスを当てて、キーボードを使用して入力する必要があります。スピナーボタンでは、許容範囲外の値まで増加/減少させることはできません。

## 有効/無効や読み取り専用/読み書き可能の入力フィールドをスタイル設定する

有効な要素とは、選択、クリック、入力などが可能な、アクティブにできる要素のことです。一方、無効な要素はどのような方法でも操作することができず、そのデータがサーバーに送信されることもありません。

この 2 つの状態は {{cssxref(":enabled")}} と {{cssxref(":disabled")}} を使用して対象化することができます。無効化された入力フィールドはなぜ有用なのでしょうか？あるデータが特定のユーザーに適用されない場合、そのユーザーがフォームを送信するときにそのデータを送信したくないことがあります。請求先と配送先に同じ住所を使用するかどうか尋ねられることがよくありますが、その場合は単一の住所をサーバーに送信すればよく、請求先フィールドを使用しないようにすることもできます。

このような例を見てみましょう。まず最初の HTML は、テキスト入力フィールドと、請求先住所の無効化をオン・オフするためのチェックボックスを含むシンプルなフォームです。請求先住所フィールドは既定値で無効になっています。

```html
<form>
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <div>
      <label for="name1">Name: </label>
      <input id="name1" name="name1" type="text" required />
    </div>
    <div>
      <label for="address1">Address: </label>
      <input id="address1" name="address1" type="text" required />
    </div>
    <div>
      <label for="zip-code1">Zip/postal code: </label>
      <input id="zip-code1" name="zip-code1" type="text" required />
    </div>
  </fieldset>
  <fieldset id="billing">
    <legend>Billing address</legend>
    <div>
      <label for="billing-checkbox">Same as shipping address:</label>
      <input type="checkbox" id="billing-checkbox" checked />
    </div>
    <div>
      <label for="name" class="billing-label disabled-label">Name: </label>
      <input id="name" name="name" type="text" disabled required />
    </div>
    <div>
      <label for="address2" class="billing-label disabled-label">
        Address:
      </label>
      <input id="address2" name="address2" type="text" disabled required />
    </div>
    <div>
      <label for="zip-code2" class="billing-label disabled-label">
        Zip/postal code:
      </label>
      <input id="zip-code2" name="zip-code2" type="text" disabled required />
    </div>
  </fieldset>

  <div><button>Submit</button></div>
</form>
```

さて、CSS の話です。この例で最も関連性の高い部分は以下の通りです。

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

label:has(+ :disabled) {
  color: #aaa;
}
```

無効にしたい入力フィールドを、 `input[type="text"]:disabled` を使用して直接選択しましたが、対応するテキストラベルも灰色で表示したいと思います。これらは選択するのがそれほど簡単ではないので、スタイル設定を提供するためにクラスを使用しました。

最後に、請求先住所フィールドの無効化を切り替えるために、いくらかの JavaScript を使用しました。

```js
// Wait for the page to finish loading
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // Attach `change` event listener to checkbox
    document
      .getElementById("billing-checkbox")
      .addEventListener("change", toggleBilling);
  },
  false,
);

function toggleBilling() {
  // Select the billing text fields
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Toggle the billing text fields
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

これは [`change`イベント](/ja/docs/Web/API/HTMLElement/change_event)を使用して、ユーザーが請求フィールドを有効/無効にしたり、関連するラベルのスタイルを切り替えたりできるようにします。

この例は以下で見ることができます（[ここでライブで見る](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html)ことや、[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)も見ることができます。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### read-only と read-write

disabled`と`:enabled`と同様に、`:read-only`および`:read-write` 擬似クラスは、フォーム入力フィールドが切り替えられる 2 つの状態を対象としています。 read-only は値をサーバーに送信しますが、ユーザーが編集することはできません。一方、 read-write は編集可能な状態、つまり既定の状態です。

入力フィールドは `readonly` 属性を使用して読み取り専用に設定されます。例として、開発者が前のページで入力された内容をこのページに送り、ユーザーに一箇所で確認してもらい、必要なデータを追加し、送信して注文を確定させることを目的とした確認ページを想像してください。この点で、すべての最終的なフォームデータを一度にサーバーに送信することができます。

フォームがどのようなものか見てみましょう（ライブサンプルは [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) を参照してください。また[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)も参照してください）。

HTML の一部を以下に示します。 readonly 属性に注意してください。

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

ライブサンプルを試してみると、一番上のフォーム要素のセットはフォーカスされませんが、フォームが送信されたときに値が送信されることがわかります。このように、`:read-only` と `:read-write` 擬似クラスを使用して、フォームコントロールのスタイル設定を行いました。

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

完全な例は次のようになります。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> [!NOTE]
> また、 `:enabled` と `:read-write` は、入力要素の既定の状態を記述する擬似クラスで、おそらくほとんど使用することはないでしょう。

## ラジオボタンとチェックボックスの状態 — チェック済み、既定、不定

このモジュールの以前の記事で見たように、{{HTMLElement("input/radio", "radio buttons")}} と {{HTMLElement("input/checkbox", "checkboxes")}} にはチェックと解除の状態があります。しかし、他にも考慮すべき状態がいくつかあります。

- {{cssxref(":default")}}: ページ読み込み時に既定で（つまり、それらに `checked` 属性を設定することで）チェックされているラジオボタン/チェックボックスに一致します。これらは、ユーザーがチェックを外したとしても、 {{cssxref(":default")}} 擬似クラスに一致します。
- {{cssxref(":indeterminate")}}: ラジオボタン/チェックボックスがチェックも解除もされていない状態で、これらは _不定_ とみなされ、 {{cssxref(":indeterminate")}} 擬似クラスに一致します。これが何を意味しているかは、以下で詳しく説明します。

### :checked

チェックされたときは、 {{cssxref(":checked")}} 擬似クラスで照合できます。

これの最も一般的な使用方法は、 [`appearance: none;`](/ja/docs/Web/CSS/Reference/Properties/appearance) を使用してシステムの既定のスタイルを削除し、自分でスタイルを構築し直したい場合に、チェックボックスやラジオボタンがチェックされたとき、異なるスタイルを追加することです。前回の記事で、[ラジオ/チェックボックスで `appearance: none` を使用する](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes)について述べたときに、この例を見ました。

おさらいですが、 [Styled radio buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) の例の `:checked` コードは以下のようになっています。

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

こちらで試すことができます。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/radios-styled.html", '100%', 200)}}

基本的には、ラジオボタンの「内側の円」のスタイルを `::before` 擬似要素を使用して構築しますが、それに `scale(0)` を [`transform`](/ja/docs/Web/CSS/Reference/Properties/transform) を設定します。次に、 [`transition`](/ja/docs/Web/CSS/Reference/Properties/transition) を使用して、ラジオが選択/チェックされたときにラベルの生成コンテンツがうまくアニメーションして表示されるようにしています。 [`width`](/ja/docs/Web/CSS/Reference/Properties/width)/[`height`](/ja/docs/Web/CSS/Reference/Properties/height) を遷移させるのではなく、座標変換を使用することの利点は、円の角から伸びるように見えるのではなく、円の中心から伸びるようにするために [`transform-origin`](/ja/docs/Web/CSS/Reference/Properties/transform-origin) を使用することができ、かつボックスモデルプロパティ値を更新しないため、ジャンプする動作がないことです。

### :default と :indeterminate

前述のように、 {{cssxref(":default")}} 擬似クラスは、ページ読み込み時に既定でチェックされるラジオ／チェックボックスに、チェックされていないときでも一致します。これは、ユーザーが選択をリセットしたい場合に備えて、既定値（または開始時の選択肢）が何であったかを思い出させるために、選択肢のリストにインジケータを追加するのに有用でしょう。

また、上記のラジオボタン/チェックボックスは、チェックでも解除でもない状態にあるとき、 {{cssxref(":indeterminate")}} 擬似クラスに一致します。しかし、これはどういう意味でしょうか？ indeterminate になる要素には、以下のようなものが記載されています。

- {{HTMLElement("input/radio")}} 入力フィールドで、同じ名前のグループ内のすべてのラジオボタンのチェックが外れている場合
- {{HTMLElement("input/checkbox")}} 入力フィールドの `indeterminate` プロパティが、JavaScript によって `true` に設定された場合。
- {{HTMLElement("progress")}} の要素に値がない場合。

これは、あまり頻繁に使用するものではないでしょう。 1 つの用途は、ユーザーが次に移動する前に、必ずラジオボタンを選択する必要があることを指示するためのものです。

前の例を修正して、既定値が何であるかをユーザーに知らせる版と、不確定な場合にラジオボタンのラベルのスタイルを設定する版を見てみましょう。これらは両方とも、入力フィールドに以下のような HTML 構造を有しています。

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

`:default` の例では、中央のラジオボタン入力フィールドに `checked` 属性を追加して、読み込んだときに既定で選択されるようにしました。そして、以下の CSS でスタイルを設定しています。

```css
input ~ span {
  position: relative;
}

input:default ~ span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "Default";
  color: white;
  background-color: black;
  padding: 5px 10px;
  right: -65px;
  top: -3px;
}
```

これは、ページが読み込まれたときに最初に選択されたものの上に、小さな "Default" ラベルを提供しています。ここでは、次兄弟結合子 (`+`) ではなく、後続兄弟結合子 (`~`) を使用していることに注意してください。 `<span>` がソース順では `<input>` のすぐ後に来ないので、このようにする必要があるのです。

以下のライブ結果を見てください。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> この例は GitHub の [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) でもライブで見ることができます（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html) も参照してください）。

`:indeterminate` の例では、既定値で選択されたラジオボタンがありません。これは重要なことで、もしあれば、スタイル設定する不定値の状態は存在しません。不確定なラジオボタンには以下の CSS でスタイルを設定しています。

```css
input[type="radio"]:indeterminate {
  outline: 2px solid red;
  animation: 0.4s linear infinite alternate outline-pulse;
}

@keyframes outline-pulse {
  from {
    outline: 2px solid red;
  }

  to {
    outline: 6px solid red;
  }
}
```

これは、ラジオボタンにちょっと動く楽しい輪郭線を生成し、いずれかを選択する必要があることを期待します。

以下のライブ結果をご覧ください。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> この例は GitHub の [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) でライブで見ることもできます（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html) も参照してください）。

> [!NOTE]
> [`indeterminate` 状態を含む興味深い例](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) が [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) リファレンスページに掲載されていますので、参考にしてください。

## その他の擬似クラス

他にも興味のある擬似クラスはたくさんありますが、ここでそのすべてを詳しく書くスペースはありません。ここでは、時間をかけて調査する必要があるいくつかのものについて説明します。

- {{cssxref(":focus-within")}} 擬似クラスは、フォーカスを保有する要素、あるいはフォーカスを保有する要素を 含む\_ 要素に一致します。これは、フォーム内の入力フィールドにフォーカスが当たったとき、フォーム全体を何らかの方法でハイライトさせたい場合に有用です。
- {{cssxref(":focus-visible")}} 擬似クラスは、（タッチやマウスではなく）キーボード操作によってフォーカスを受けた要素に一致します。マウス（または他の）フォーカスとは異なるスタイルをキーボードフォーカスのために使用したい場合、有用です。
- {{cssxref(":placeholder-shown")}} 擬似クラスは、{{htmlelement('input')}} と {{htmlelement('textarea')}} 要素の値が空であるため、そのプレースホルダーを表示している（すなわち [`placeholder`](/ja/docs/Web/HTML/Reference/Elements/input#placeholder) 属性の内容を示している）要素に一致します。

以下のものも興味深いですが、まだブラウザーの対応が十分でありません。

- {{cssxref(":blank")}} 擬似クラスは、空のフォームコントロールを選択します。 {{cssxref(":empty")}} も {{HTMLElement("input")}} のように子を持たない要素に一致しますが、より一般化されており、他の{{glossary("void element", "空要素")}}、例えば {{HTMLElement("br")}} や {{HTMLElement("hr")}} などにも一致します。 `:empty` はそれなりにブラウザーが対応しています。`:blank` 擬似クラスの仕様書はまだ完成していないので、どのブラウザーも対応しているわけではありません。
- [`:user-invalid`](/ja/docs/Web/CSS/Reference/Selectors/:user-invalid) 擬似クラスは、対応されると {{cssxref(":invalid")}} に似ていますが、使い勝手がより良くなるでしょう。入力にフォーカスが当たった時に値が有効であれば、ユーザーがデータを入力フィールドする際に、その要素が `:invalid` に一致する可能性がありますが、フォーカスが外れた時には `:user-invalid` にのみ一致することになります。元々無効な値であった場合は、フォーカスがある間中、 `:invalid` と `:user-invalid` の両方に一致することになります。 `:invalid` と同様に、値が有効になると `:user-invalid` と一致しなくなります。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト：高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms)を見てください。

## まとめ

これで、フォーム入力に関連する UI 擬似クラスについての説明は完全に終了しました。どんどん使って、楽しいフォームスタイルを作成してください。次は別のもの、[クライアントサイドフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)に移動しましょう。

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

### 高度なトピック

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [JavaScript によるフォームの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
