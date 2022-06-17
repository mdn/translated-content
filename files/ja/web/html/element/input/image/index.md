---
title: <input type="image">
slug: Web/HTML/Element/input/image
tags:
  - 要素
  - フォーム画像
  - フォーム画像ボタン
  - フォーム
  - HTML
  - HTML 画像ボタン
  - HTML フォーム
  - 画像ボタン
  - Input
  - 入力型
  - Number
  - リファレンス
browser-compat: html.elements.input.type_image
translation_of: Web/HTML/Element/input/image
---

{{HTMLRef}}

{{HTMLElement("input")}} 要素の **`image`** 型は、テキストではなく画像の形をとる送信ボタン、すなわちテキストではなく画像の形をとる送信ボタンを作成するために使用されます。

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>なし — `value` 属性は指定しないでください。</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>なし</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("alt", "input")}},
        {{htmlattrxref("src", "input")}},
        {{htmlattrxref("width", "input")}},
        {{htmlattrxref("height", "input")}},
        {{htmlattrxref("formaction", "input")}},
        {{htmlattrxref("formenctype", "input")}},
        {{htmlattrxref("formmethod", "input")}},
        {{htmlattrxref("formnovalidate", "input")}},
        {{htmlattrxref("formtarget", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>なし</td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>なし</td>
    </tr>
  </tbody>
</table>

## 値

`<input type="image">` 要素は `value` 属性を受け付けません。表示する画像へのパスを `src` 属性で指定します。

## 追加の属性

すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `image` 型の入力欄は次の属性にも対応しています。

### alt

`alt` 属性は、画像が表示できない場合のボタンのラベルとして使用される代替文字列を提供します（エラーの場合、{{Glossary("user agent", "ユーザーエージェント")}}が画像を表示できない場合、画像を表示しないように設定されていた場合、ユーザーが読み上げ端末を使用している場合など）。提供する場合は、ボタンのラベルとして適切な空ではない文字列である必要があります。

例えば、「今すぐログイン」をアイコンやテキストが入った画像を表示するグラフィックボタンの場合、 `alt` 属性も `今すぐログイン` のように設定してください。

> **Note:** `alt` 属性は技術的には省略可能ですが、コンテンツの利用性を最大化するために常に設定してください。

`<input type="image">` の `alt` 属性は、機能的には {{HTMLElement("img")}} 要素における {{htmlattrdef("alt", "img")}} 属性と同様に動作します。

### formaction

文字列で、データの送信先の URL を示します。これはこの {{HTMLElement("input")}} が属する {{HTMLElement("form")}} 要素の {{htmlattrxref("action", "form")}} 属性より優先します。

この属性は [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit) および {{HTMLElement("button")}} 要素でも使用できます。

### formenctype

文字列で、フォームのデータをサーバーーに送信する際に使われるエンコーディング方法を識別します。許されている値は 3 つです。

- `application/x-www-form-urlencoded`
  - : これは既定値で、フォームのデータを {{jsxref("encodeURI", "encodeURI()")}} などのアルゴリズムを使って URL エンコーディングした後で送信します。
- `multipart/form-data`
  - : データを管理するために {{domxref("FormData")}} API を使用し、複数のファイルをサーバーーに送信することができます。フォームに {{HTMLElement("input")}} 要素の {{htmlattrxref("type", "input")}} が `file` のもの ([`<input type="file">`](/ja/docs/Web/HTML/Element/input/file)) が含まれている場合は、このエンコーディング型を*使わなければなりません*。
- `text/plain`
  - : プレーンテキストです。ほとんどデバッグでしか役に立ちませんが、送信されたデータを簡単に見ることができます。

`formenctype` 属性が指定された場合、所属するフォームの {{htmlattrxref("action", "form")}} 属性を上書きします。

この属性は [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit) および {{HTMLElement("button")}} 要素でも使用できます。

### formmethod

文字列で、フォームのデータを送信するときに使用する HTTP メソッドを示します。この値は所有者であるフォームの {{htmlattrxref("method", "form")}} を上書きします。許されている値は次の通りです。

- `get`
  - : URL は `formaction` または {{htmlattrxref("action", "form")}} 属性で与えられた URL で始まり、クエスチョンマーク ("?") 文字を付加し、次に `formenctype` またはフォームの {{htmlattrxref("enctype", "form")}} 属性の記述に従ってコード化したフォームデータを付加して作成されます。この URL は、 HTTP の {{HTTPMethod("get")}} リクエストでサーバーーに送信されます。この方法は、ASCII 文字のみを含み、副作用のない単純なフォームに対してよく機能します。これは既定値です。
- `post`
  - : フォームのデータは `formaction` または {{htmlattrxref("action", "form")}} 属性で指定された URL に HTTP の {{HTTPMethod("post")}} リクエストで送信される本文に含まれます。このメソッドは、複雑なデータやファイルの添付に対応しています。
- `dialog`
  - : このメソッドは、ボタンが入力に関連するダイアログを閉じ、フォームデータを全く送信しないことを示すために使用される。

この属性は [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit) および {{HTMLElement("button")}} 要素でも使用できます。

### formnovalidate

論理属性で、これがある場合は、サーバーーに送信する前にフォームの検証を行わないことを指定します。これは、その要素の所有するフォームの {{htmlattrxref("novalidate", "form")}} 属性の値より優先されます。

この属性は [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit) および {{HTMLElement("button")}} 要素でも使用できます。

### formtarget

文字列で、フォームを送信した後に受け取ったレスポンスを表示する場所を示す、名前またはキーワードを指定します。この文字列は、**閲覧コンテキスト**（つまり、タブ、ウィンドウ、または {{HTMLElement("iframe")}}）の名前である必要があります。ここで指定された値は、この入力を所有する {{HTMLElement("form")}} の {{htmlattrxref("target", "form")}} 属性で指定されたターゲットよりも優先されます。

タブ、ウィンドウ、インライン枠などの実際の名前のほかに、いくつかの特別なキーワードを使用することができます。

- `_self`
  - : レスポンスを、フォームを含むものと同じ閲覧コンテキストに読み込みます。これにより、現在の文書が受信したデータで置き換えられます。これは、何も指定されていない場合に使用される既定値です。
- `_blank`
  - : レスポンスを新しい、名前のない閲覧コンテキストに読み込みます。これは通常、現在の文書と同じウィンドウの新しいタブですが、{{Glossary("user agent", "ユーザーエージェント")}}の設定によって異なる場合があります。
- `_parent`
  - : 現在の閲覧コンテキストの親コンテキストにレスポンスを読み込みます。親コンテキストがない場合は、 `_self` と同じ動作をします。
- `_top`
  - : これは現在のコンテキストの最上位の祖先である閲覧コンテキストです。現在のコンテキストが最上位のコンテキストである場合、これは `_self` と同じように動作します。

この属性は [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit) および {{HTMLElement("button")}} 要素でも使用できます。

### height

`src` 属性で指定された画像を描画する高さを CSS ピクセルで指定した数値です。

### src

文字列で、グラフィカルな送信ボタンを表現するために表示する画像ファイルの URL を指定します。ユーザーが画像と対話するとき、その入力は他のボタン入力と同様に処理されます。

### width

画像を描画する幅を CSS ピクセルで表した数値です。

## 廃止された属性

以下の属性は、 HTML 4 で `image` 入力用に定義されたものですが、すべてのブラウザーで実装されていたわけではなく、その後、非推奨となりました。

### usemap

`usemap` が指定された場合、画像と共に使用するイメージマップを定義します。イメージマップ要素 {{HTMLElement("map")}} の名前でなければなりません。この使い方は時代遅れです。イメージマップを使いたい場合は、 {{HTMLElement("img")}} 要素を使うように切り替えてください。

## image 入力の使用

`<input type="image">` 要素は[置換要素](/ja/docs/Web/CSS/Replaced_element)（CSS レイヤーによって内容が生成されたり、直接管理されたりしない要素）で、大部分は通常の {{htmlelement("img")}} 要素と同じ動きをしますが、[送信ボタン](/ja/docs/Web/HTML/Element/input/submit)の機能を持っています。

### 基本的な input 入力の機能

必要な機能をすべて含んだ基本的な例を見てみましょう（これらは `<img>` 要素とまったく同じように動作します）。

```html
<input id="image" type="image" width="100" height="30" alt="Login"
       src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png">
```

{{ EmbedLiveSample('Essential_image_input_features', 600, 50) }}

- {{htmlattrxref("src", "input")}} 属性は、ボタンに表示したい画像のパスを指定するために使用されます。
- {{htmlattrxref("alt", "input")}} 属性は画像の alt テキストを提供し、画面リーダーの利用者がボタンが何に使われるかをより良く理解することができるようにします。また、何らかの理由で画像を表示できない場合にも表示されます（例えば、パスのスペルが間違っている場合など）。可能であれば、標準的な送信ボタンを使用する場合に使用するラベルと一致するテキストを使用してください。
- {{htmlattrxref("width", "input")}} と {{htmlattrxref("height", "input")}} 属性は、画像を表示する幅と高さをピクセル単位で指定するために使用されます。ボタンは画像と同じ大きさです。ボタンのヒット領域を画像より大きくしたい場合は、 CSS を使う必要があります（例： {{cssxref("padding")}}）。また、片方の寸法だけを指定した場合、もう片方は自動的に調整され、画像は元のアスペクト比を維持します。

### 既定のフォームの動作の上書き

`<input type="image">` 要素は — 通常の[送信ボタン](/ja/docs/Web/HTML/Element/input/submit)と同様に — 既定のフォームの動作を上書きするいくつかの属性を受け付けます。

- {{htmlattrdef("formaction")}}
  - : input 要素から送信された情報を処理するプログラムの URI。要素のフォームオーナーの {{htmlattrxref("action", "form")}} 属性を上書きします。
- {{htmlattrdef("formenctype")}}

  - : サーバーーにフォームを送信する際に使用するコンテンツの種類を指定します。指定可能な値は以下のとおりです。

    - `application/x-www-form-urlencoded`: 属性が指定されていない場合の既定値。
    - `text/plain`.

    この属性が指定された場合、要素のフォームオーナーの {{htmlattrxref("enctype", "form")}} 属性を上書きします。

- {{htmlattrdef("formmethod")}}

  - : ブラウザーがフォームを送信するために使用する HTTP メソッドを指定します。指定可能な値は以下のとおりです。

    - `post`: フォームのデータは、フォームの本文に含まれ、サーバーーに送信されます。
    - `get`: フォームからのデータは、 '?' を区切り文字として **`form`** 属性の URI に追加され、結果の URI がサーバーーに送信されます。このメソッドは、フォームに副作用がなく、 ASCII 文字のみを含む場合に使用してください。

    指定された場合、この属性は要素のフォームオーナーの {{htmlattrxref("method", "form")}} 属性を上書きします。

- {{htmlattrdef("formnovalidate")}}
  - : 論理属性で、フォーム送信時に検証を行わないことを指定します。この属性が指定された場合、要素のフォームオーナーの {{htmlattrxref("novalidate", "form")}} 属性を上書きします。
- {{htmlattrdef("formtarget")}}

  - : フォームを送信した後に受信したレスポンスを表示する場所を示す名前またはキーワードです。これは、閲覧コンテキスト（例えば、タブ、ウィンドウ、インライン枠）の名前、またはキーワードです。この属性が指定された場合、要素のフォームオーナーの {{htmlattrxref("target", "form")}} 属性を上書きします。次のキーワードは特別な意味を持ちます。

    - \_`self`: 現在のコンテキストと同じ閲覧コンテキストにレスポンスを読み込みます。この属性が指定されていない場合は、この値が既定値となります。
    - `_blank`: 新しい無名の閲覧コンテキストにレスポンスを読み込みます。
    - `_parent`: 現在の閲覧コンテキストの親コンテキストにレスポンスを読み込みます。親が存在しない場合、このオプションは `_self` と同じように動作します。
    - `_top`: 最上位の閲覧コンテキスト（つまり、現在の閲覧コンテキストの祖先のうち、親を持たない閲覧コンテキスト）にレスポンスを読み込みます。親がいない場合、このオプションは `_self` と同じ振る舞いをします。

### 点の x および y のデータの使用

`<input type="image">` で作成したボタンを使ってフォームを送信すると、ブラウザーが自動的に `x` と `y` という 2 つの追加データをサーバーに送信します。 [X Y 座標の例](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html)で、その様子を見ることができます。

画像をクリックしてフォームを送信すると、 `?x=52&y=55` のようなデータが引数として URL に付加されるのがわかります。画像入力に {{htmlattrxref("name", "input")}} 属性がある場合、指定した名前はすべての属性の先頭に付くことに注意してください。したがって、`name` が `position` である場合、返される座標は URL で `?position.x=52&position.y=55` という書式となります。もちろん、これは他のすべての属性にも当てはまります。

これらは、マウスでクリックしてフォームを送信した画像の X と Y の座標で、 (0,0) が画像の左上となります。これらは、画像の中でクリックされた位置が重要である場合、例えば、地図がクリックされると、クリックされた座標がサーバーに送信されるような場合に利用することができます。サーバー側のコードは、クリックされた場所を特定し、その近くの場所についての情報を返します。

上記の例では、サーバー側のコードで、送信された座標からどの色がクリックされたかを調べ、人々が投票した好きな色の集計を行うことができます。

### 画像の位置と拡大縮小アルゴリズムの調整

{{cssxref("object-position")}} プロパティを使用すると、 `<input>` 要素の枠内での画像の位置を調整することができ、 {{cssxref("object-fit")}} プロパティは枠内に収める画像の大きさを調整する方法を制御することができます。これにより、 `width` と `height` 属性を用いて画像の枠を指定し、レイアウト内に空間を確保した上で、その空間内のどこに画像を配置し、その空間に合わせて画像を縮小する方法（または縮小するかどうか）を調整することができます。

## 例

### ログインフォーム

次の例は、前と同じボタンを、典型的なログインフォームのコンテキストに含めて表示したものです。

#### 実行例
{{ EmbedLiveSample('A_login_form', 600, 170) }}

#### HTML

```html
<form>
  <p>アカウントにログインしてください</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId">
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd">
  </div>
  <div>
    <input id="image" type="image" src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" alt="Login" width="100">
  </div>
</form>
```

#### CSS

次に、基本的な要素をよりきれいに配置するための簡単な CSS です。

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
```

### 画像の位置と大きさの調整

この例では、前の例を応用して画像のための空間を確保し、 {{cssxref("object-fit")}} と {{cssxref("object-position")}} で実際の画像の大きさと位置を調整しています。

#### 実行例
{{EmbedLiveSample("Adjusting_the_image_position_and_scaling", 600, 300)}}

#### HTML

```html
<form>
  <p>アカウントにログインしてください</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId">
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd">
  </div>
  <div>
    <input id="image" type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login" width="200" height="100">
  </div>
</form>
```

#### CSS

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

#image {
  object-position: right top;
  object-fit: contain;
  background-color: #ddd;
}
```

ここでは、 `object-position` は画像を要素の右上隅に描画するように設定され、 `object-fit` は `contain` に設定されています。これは、画像の縦横比を変えずに要素のボックス内に収まる最大の大きさで描画することを意味しています。画像で覆われていない領域では、要素の灰色の背景がまだ見えていることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} および実装している {{domxref("HTMLInputElement")}} インターフェイス
- `<input>` 要素の枠内における画像の位置と大きさの指定: {{cssxref("object-position")}} および {{cssxref("object-fit")}}
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
