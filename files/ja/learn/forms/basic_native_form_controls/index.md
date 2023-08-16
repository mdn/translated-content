---
title: 基本的なネイティブフォームコントロール
slug: Learn/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 25233e77fc3d3de84511203fd41eaddf361880ef
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

[一つ前の記事](/ja/docs/Learn/Forms/How_to_structure_a_web_form)では、機能的なウェブフォームの例をマークアップし、いくつかのフォームコントロールとよくある構造要素を導入し、アクセシビリティのベストプラクティスを見てきました。次にさまざまなフォームコントロールやウィジェットの機能を詳しく見ていきます。 — 色々な種類のデータを集めるのにどんなオプションが使えるのかを見ていきます。とりわけこの記事では、ウェブの初期からありすべてのブラウザーで利用できる、元からあるフォームコントロールを見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシーと、基本的な
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML の理解</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        データを収集するためにブラウザーで使用できる基本的なネイティブフォームコントロールの種類と、それらを HTML を使用して実装する方法を理解する。
      </td>
    </tr>
  </tbody>
</table>

既にいくつかのフォーム要素を見てきました。 {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}}, {{HTMLelement('input')}} などです。この記事では、以下の要素を扱います。

- よく使われる入力型である {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}}, {{HTMLelement('input/text', 'text')}}
- すべてのフォームコントロールに共通する属性のいくつか

> **メモ:** 次の 2 回分の記事で、 HTML5 で追加された、もっと強力なフォームコントロールを取り上げます。より高度なリファレンスを読みたい方は、 [HTML フォーム要素のリファレンス](/ja/docs/Web/HTML/Element#フォーム)、全般的には [`<input>` 型](/ja/docs/Web/HTML/Element/input) のリファレンスを参照してください。

## テキスト入力フィールド

テキスト入力 ({{htmlelement("input")}}) フィールドは、最も基本的なフォームウィジェットです。これらはユーザーがあらゆる種類のデータを入力できるとても便利な方法です。

> **メモ:** HTML フォームのテキストフィールドは単純なプレーンテキストの入力コントロールです。つまり、これらを使ってリッチテキストの編集（太字、斜体など）を実現することはできません。見かけるリッチテキストエディターは、すべて HTML、CSS、JavaScript で作成されたカスタムウィジェットです。

すべてのテキストフィールドに共通する動作があります。

- [`readonly`](/ja/docs/Web/HTML/Element/input#readonly) （ユーザーは入力値が変更できないが、他のフォームデータとともに送信される）あるいは [`disabled`](/ja/docs/Web/HTML/Element/input#disabled) （入力値が変更できず、他のフォームデータとともに送られない）とすることができます。
- [`placeholder`](/ja/docs/Web/HTML/Element/input#placeholder) を設定することができます。これは、ボックスの目的を簡単に説明する、ボックス内に表示されるテキストです。
- [`size`](/ja/docs/Web/HTML/Attributes/size) （ボックスの物理的な大きさ）や [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength) （ボックスに入力できる最大文字数）による制限が可能です。
- ブラウザーが対応していれば、スペルチェックの便宜を図ることができます ([`spellcheck`](/ja/docs/Web/HTML/Global_attributes/spellcheck)属性を用いて)。

> **メモ:** {{htmlelement("input")}} 要素は [`type`](/ja/docs/Web/HTML/Element/input#type) 属性によってさまざまな形になるため、 HTML 要素の中でも独特です。単一行のテキストフィールド、時間と日付のコントロール、チェックボックス、ラジオボタン、カラーピッカー、ボタンのようなテキスト入力のないコントロールなど、ほとんどの種類のフォームウィジェットの作成に使用されます。

### 単一行のテキストフィールド

単一行のテキストフィールドを生成するには、 {{HTMLElement("input")}} 要素で [`type`](/ja/docs/Web/HTML/Element/input#type) 属性値を `text` に設定するか、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を省略するかします (`text` が既定値です)。この属性の `text` の値は、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性に指定した値をブラウザーに認識できない場合 (たとえば `type="color"` を指定した場合で、ブラウザーがネイティブの色ピッカーに対応していない場合) の代替値になります。

> **メモ:** GitHub の [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/single-line-text-fields.html) に、すべての単一行テキストフィールド型の例があります ([ライブで確認できます](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html))。

基本的な単一行のテキストフィールドの例を示します。

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

単一行のテキストフィールドは、ひとつだけ厳密な制約があります。改行を含むテキストを入力した場合、ブラウザーはデータを送信する前に改行を取り除きます。

_下記のスクリーンショットは macOS での Firefox 71 と Safari、および Windows 10 の Chrome 79 と Edge 18 において、テキストフィールドが既定の場合、フォーカスされた場合、無効にされた場合を示しています。_

![Firefox、Safari、Chrome、Edge における、テキスト入力の disabled 属性と既定の :focus スタイルを表示したスクリーンショットです。](disabled.png)

> **メモ:** 特定の検証制約を強制する [`type`](/ja/docs/Web/HTML/Element/input#type) 属性の値、例えば color、email、url 入力型については、次の記事の [HTML5 の入力型](/ja/docs/Learn/Forms/HTML5_input_types)で説明します。

#### パスワードフィールド

元からあった入力型の一つが、 `password` テキストフィールド型でした。

```html
<input type="password" id="pwd" name="pwd" />
```

`password` の値は、入力されるテキストに特別な制約を加えるものではありませんが、フィールドに入力された値を (ドットやアスタリスクなどで) 不明瞭にして、他の人が簡単に読めないようにします。

これはユーザーインターフェイスの機能でしかないことに注意してください。テキストは JavaScript を使用してあなた自身でエンコードしなければ、平文で送信されてしまい、セキュリティ上で好ましくありません。 — 悪意のある第三者がデータを傍受し、パスワードやクレジットカード情報などを盗む可能性があります。このようなことからユーザーを保護する最善の方法は、フォームを含むページを安全な接続（すなわち、 `https://` ... を指すアドレス）でホストし、データを送信する前に暗号化することです。

ブラウザーは、安全でない接続でフォームデータを送信することのセキュリティ上の影響を認識しており、ユーザーが安全でないフォームを使用することを抑止するために警告を表示します。 Firefox が実装している機能の詳細については、[安全でないパスワード](/ja/docs/Web/Security/Insecure_passwords)を参照してください。

### hidden コンテンツ

もう一つの元からあるテキストコントロールは `hidden` 入力型です。これは、ユーザーには見えないが、送信されると他のフォームデータと一緒にサーバーに送信されるフォームコントロールを作成するために使用されます。 — 例えば、注文が行われた時のタイムスタンプをサーバーに送信したい場合などです。表示されないので、ユーザーは値を見ることも、意図的に編集することもできず、フォーカスを受けることもなく、スクリーンリーダーも知らせることはありません。

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

このような要素を作成する場合は、 `name` 属性と `value` 属性の設定が必要です。この値は JavaScript にて動的にセットできます。`hidden` 入力型には関連したラベルはありません。

その他のテキスト型、{{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, は次のチュートリアルの [HTML5 の入力型](/ja/docs/Learn/Forms/HTML5_input_types)にて扱います。

## チェック可能項目: チェックボックスとラジオボタン

チェック可能項目は、そのものや、関連したラベルをクリックすることで状態を変更できるコントロールです。チェック可能項目は 2 種類あります。チェックボックスとラジオボタンです。どちらもそのウィジェットが既定でチェック状態にするかどうかを示すために、 [`checked`](/ja/docs/Web/HTML/Element/input/checkbox#attr-checked) 属性を使用します。

これらのウィジェットは、他のフォームウィジェットと同じようには動作しない点が特徴です。ほとんどのフォームウィジェットでは、フォームを送信すると [`name`](/ja/docs/Web/HTML/Element/input#name) 属性を持つすべてのウィジェットが、値が入力されていなくても送信されます。チェック可能項目では、チェックされている場合にのみ値が送信されます。チェックされていない場合は、 name も含めて何も送信されません。チェックされているが値がない場合、 name が _on_ という値で送信されます。

> **メモ:** この節の例は、[checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) として GitHub にあります（[ライブで確認できます](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)）。

最大限のユーザビリティ/アクセシビリティを実現するために、関連項目の各リストを {{htmlelement("fieldset")}} で囲み、リストの全体的な説明を示す {{htmlelement("legend")}} で囲むことをお勧めします。 {{htmlelement("label")}}/{{htmlelement("input")}} 要素の個々のペアは、それぞれ独自のリスト項目（または同様のもの）に含める必要があります。関連した {{htmlelement('label')}} はラジオボタンやチェックボックスの直後に、 {{htmlelement("legend")}} の中身にラジオボタンやチェックボックスのグループの説明が置かれます。これは上の例に示されています。

### チェックボックス

チェックボックスは、 {{HTMLElement("input")}} 要素で [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を {{HTMLElement("input/checkbox", "checkbox")}} に設定して作成します。

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

関連するチェックボックス項目には、同じ [`name`](/ja/docs/Web/HTML/Element/input#name) 属性を使用してください。 [`checked`](/ja/docs/Web/HTML/Element/input/checkbox#checked) 属性を含めると、ページが読み込まれたときにチェックボックスが自動的にチェックされます。チェックボックス自体または関連づけられたラベルをクリックすると、チェックボックスのオンとオフが切り替わります。

```html
<fieldset>
  <legend>Choose all the vegetables you like to eat</legend>
  <ul>
    <li>
      <label for="carrots">Carrots</label>
      <input
        type="checkbox"
        id="carrots"
        name="vegetable"
        value="carrots"
        checked />
    </li>
    <li>
      <label for="peas">Peas</label>
      <input type="checkbox" id="peas" name="vegetable" value="peas" />
    </li>
    <li>
      <label for="cabbage">Cabbage</label>
      <input type="checkbox" id="cabbage" name="vegetable" value="cabbage" />
    </li>
  </ul>
</fieldset>
```

下記のスクリーンショットは macOS での Firefox 71 と Safari、および Windows 10 の Chrome 79 と Edge 18 において、チェックボックスが既定の場合、フォーカスされた場合、無効にされた場合を示しています。

![Mac での Firefox 71 および Safari 13 と、 Windows 10 での Chrome 79 および Edge 18 の既定、フォーカス、無効状態のチェックボックス](checkboxes.png)

> **メモ:** チェックボックスやラジオボタンで読み込み時に [`checked`](/ja/docs/Web/HTML/Element/input/checkbox#attr-checked) 属性が付いていれば、チェック状態が解除されても {{cssxref(':default')}} 擬似クラスに一致します。現在チェックされているものは `{{cssxref(':checked')}}` 擬似クラスに一致します。

チェックボックスにはオンとオフになるという性質があるため、チェックボックスはトグルボタンと考えられており、多くの開発者やデザイナーが既定のチェックボックスのスタイルを拡張して、トグルスイッチのように見えるボタンを作成しています。[ここで動作する例を](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/)見ることができます（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)も見られます）。

### ラジオボタン

ラジオボタンは、 {{HTMLElement("input")}} 要素の [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を `radio` に設定して生成します。

```html
<input type="radio" id="soup" name="meal" checked />
```

複数のラジオボタンを結びつけることができます。 [`name`](/ja/docs/Web/HTML/Element/input#name) 属性の値が同じであれば、同じグループのボタンであるとみなされます。グループ内のボタンは同時に一つしかチェックできません。つまり、あるボタンがチェックされると、他のボタンは自動的にチェックが外されます。フォームが送信される際には、チェックされたラジオボタンの値のみが送信されます。一つもチェックされていない場合、ラジオボタンのグループ全体が未知の状態であるとみなされ、値はフォームと共に送信されません。同じ名前のグループのラジオボタンの一つがチェックされると、ユーザーはフォームをリセットせずに、すべてのボタンのチェックを外すことはできません。

```html
<fieldset>
  <legend>What is your favorite meal?</legend>
  <ul>
    <li>
      <label for="soup">Soup</label>
      <input type="radio" id="soup" name="meal" value="soup" checked />
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="meal" value="curry" />
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="meal" value="pizza" />
    </li>
  </ul>
</fieldset>
```

下記のスクリーンショットは macOS での Firefox 71 と Safari、および Windows 10 の Chrome 79 と Edge 18 において、ラジオボタンがチェックされていない場合といる場合、フォーカスがある場合、無効にされていてチェックされていない場合といる場合を示しています。

![Mac の Firefox 71 と Safari 13 および Windows 10 の Chrome 79 と Edge 18 のラジオボタン](radios.png)

## 実際のボタン

ラジオボタンはその名に反して、実際のボタンではありません。実際のボタンを見てみましょう。ボタンを生成するための入力型は 3 種類あります。

- `submit`
  - : フォームデータをサーバーに送信します。 {{HTMLElement("button")}} 要素の場合、`type` 属性を省略した場合（または `type` の値が無効であった場合）、送信ボタンが表示されます。
- `reset`
  - : すべてのフォームウィジェットを既定値にリセットします。
- `button`
  - : 自動的な効果のないボタンで、 JavaScript コードを用いてカスタマイズできるものです。

また、ボタンそのものを示す {{htmlelement("button")}} 要素もあります。これは `type` 属性に `submit`, `reset`, `button` の値を取り、上記の 3 つの `<input>` 型を模倣できます。この 2 つの主な違いは、実際の `<button>` 要素の方がはるかにスタイル付けしやすいことです。

> **メモ:** `image` 入力型もボタンとしてレンダリングされます。それについては後で触れます。

> **メモ:** この節の例は [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) として GitHub にあります（[ライブで確認できます](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)）。

以下に、それぞれのボタンの `<input>` 型と、同等の `<button>` 型の例を示します。

### submit

```html
<button type="submit">これは<strong>送信ボタン</strong>です</button>

<input type="submit" value="これは送信ボタンです" />
```

### reset

```html
<button type="reset">これは<strong>リセットボタン</strong>です</button>

<input type="reset" value="これはリセットボタンです" />
```

### ただのボタン

```html
<button type="button">これは<strong>ただのボタン</strong>です</button>

<input type="button" value="これはただのボタンです" />
```

ボタンは {{HTMLElement("button")}} 要素と {{HTMLElement("input")}} 要素のどちらを使用しても常に同じ動作になります。しかし、上記の例で分かるように、 {{HTMLElement("button")}} 要素は中身として HTML を使用することができ、これが `<button>` の開始・終了タグの間に挿入されます。一方で{{HTMLElement("input")}} 要素は空要素です。つまり `value` 属性に中身が挿入され、したがってプレーンテキストのコンテンツのみ使用できます。

下記の例は macOS での Firefox 71 と Safari 13、および Windows 10 の Chrome 79 と Edge 18 にて、ボタンの既定、フォーカス、無効状態を示しています。

![Mac 版の Firefox 71 と Safari 13、 Windows 版の Chrome 79 と Edge 18 の既定、フォーカス、無効状態の button 入力型](buttons.png)

### 画像ボタン

**画像ボタン**コントロールは {{HTMLElement("img")}} 要素とまったく同じように表示されますが、ユーザーがクリックすると送信ボタン（前述）のように動作します。

画像ボタンは、 {{HTMLElement("input")}} 要素の[`type`](/ja/docs/Web/HTML/Element/input#type) 属性を `image` に設定することで作成します。この要素は {{HTMLElement("img")}} 要素とまったく同じ属性に対応しており、さらに他のフォームボタンが対応している属性にもすべて対応しています。

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

画像ボタンをフォームの送信に使用する場合、このウィジェットは自身の値を送信しませんが、代わりに画像上でクリックした位置の X 座標と Y 座標を送信します (座標は画像に対して相対的、つまり画像の左上隅が座標 (0, 0) になります)。座標は 2 つのキーと値の組として送信されます。

- X 値のキーは [`name`](/ja/docs/Web/HTML/Element/input#name) 属性の値の後ろに文字列 "_.x_" をつけたもの、
- Y 値のキーは [`name`](/ja/docs/Web/HTML/Element/input#name) 属性の値の後ろに文字列 "_.y_" をつけたものです。

サンプルをご覧ください。フォームの画像上の座標 (123, 456) でクリックすると、 `get` メソッド経由で送信されて、以下のような値の追加された URL が送信されます。

```
http://foo.com?pos.x=123&pos.y=456
```

これは「ホットマップ」を作成するためにとても便利な手段です。これらの値がどのように送信あるいは取得されるかについては、[フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)の記事で詳しく説明します。

## ファイルピッカー

初期の HTML にあった `<input>` 型がもう一つあります。ファイル入力型です。フォームで、ファイルをサーバーに送信することができます (この具体的な操作については、[フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)の記事でも詳しく触れます)。ファイルピッカーウィジェットで、ユーザーは送信するファイルを 1 つ以上選択することができます。

[ファイルピッカーウィジェット](/ja/docs/Web/HTML/Element/input/file)を作成するには、 {{HTMLElement("input")}} 要素の [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を `file` に設定します。 [`accept`](/ja/docs/Web/HTML/Element/input#accept) 属性を使用して、受け入れるファイルの種類を制限することができます。加えて、ユーザーが複数のファイルを選択できるようにしたい場合は、 [`multiple`](/ja/docs/Web/HTML/Element/input#multiple) 属性を付加します。

#### 例

以下の例では、画像ファイルを要求するファイルピッカーを作成しています。ユーザーは複数のファイルを指定できます。

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

いくつかのモバイル端末では、ファイルピッカーは、次のようにキャプチャー情報を `accept` 属性に追加することで、端末のカメラやマイクでキャプチャーされた写真、動画、音声にアクセスすることができます。

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

## 共通の属性

フォームコントロールの定義に使われる要素の多くは、それぞれ固有の属性を持っています。しかし、すべてのフォーム要素に共通する属性があります。これらの属性のいくつかはすでに見たことがあると思いますが、参考までに共通の属性を以下に列挙します。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">属性名</th>
      <th scope="col">既定値</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/ja/docs/Web/HTML/Global_attributes/autofocus"
            >autofocus</a
          ></code
        >
      </td>
      <td>false</td>
      <td>
        この論理属性を使用すると、ページ読み込み時に自動的に要素に入力フォーカスを設定するように指定できます。この属性を指定できるのは、文書内の 1 つのフォーム関連要素だけです。
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ja/docs/Web/HTML/Attributes/disabled">disabled</a></code
        >
      </td>
      <td>false</td>
      <td>
        この論理属性は、ユーザーが要素と対話できないことを示します。この属性が指定されていない場合、要素はそれを含む要素（例えば {{HTMLElement("fieldset")}}）からその設定を継承します。 <code>disabled</code> 属性が設定されている包含要素がない場合は、その要素が有効になります。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/form">form</a></code>
      </td>
      <td></td>
      <td>
        ウィジェットが関連付けられている <code>&#x3C;form></code> 要素で、そのフォーム内に含まれていない場合に使用されます。属性の値は、同じ文書内の {{HTMLElement("form")}} 要素の <code>id</code> 属性でなければなりません。これにより、フォームコントロールをフォームに外側から、他のフォーム要素の中にあったとしても、関連付けることができます。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/input#name">name</a></code>
      </td>
      <td></td>
      <td>要素の名前。これはフォームデータとともに送信されます。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/input#value">value</a></code>
      </td>
      <td></td>
      <td>要素の初期値です。</td>
    </tr>
  </tbody>
</table>

## スキルをテストしましょう!

この記事の最後に到着しましたが、もっとも大事な情報を覚えていますか？ 次に進む前に、この情報を保持しているか検証するテストがあります — [Test your skills: Basic controls](/ja/docs/Learn/Forms/Test_your_skills:_Basic_controls) を見てください。

## まとめ

この記事では古い入力型を扱ってきました。 — これは HTML の初期の頃に導入された元からのもので、すべてのブラウザーがよく対応しています。次の節では、もっと新しい `type` 属性の値を見ていきます。

{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}
