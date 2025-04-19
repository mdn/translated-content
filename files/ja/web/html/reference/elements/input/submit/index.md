---
title: <input type="submit">
slug: Web/HTML/Reference/Elements/input/submit
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} 要素の **`submit`** 型は、ボタンとして描画されます。 {{domxref("Element/click_event", "click")}} イベントが発生したとき（ふつうはユーザーがボタンをクリックしたとき）、{{Glossary("User agent", "ユーザーエージェント")}}はサーバーへフォームを送信しようとします。

## 値

`<input type="submit">` 要素の [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性は、ボタンのラベルとして表示される文字列を示します。ボタンはその他の真の値を持ちません。 `value` はボタンの{{glossary("Accessible description", "アクセシブル説明")}}を指定します。

### value 属性の設定

```html
<input type="submit" value="リクエストを送信" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### value 属性の省略

`value` を指定しなかった場合、ボタンにはユーザーエージェントによって選ばれた既定のラベルが表示されます。このラベルは「送信」または「クエリーを送信」などのものです。次のものはこのブラウザーにおける送信ボタンの既定のラベルです。

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## 追加の属性

すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `submit` 型の入力欄は次の属性にも対応しています。

### formaction

文字列で、データの送信先の URL を示します。これはこの {{HTMLElement("input")}} が属する {{HTMLElement("form")}} 要素の [`action`](/ja/docs/Web/HTML/Reference/Elements/form#action) 属性より優先します。

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

### formenctype

文字列で、フォームのデータをサーバーに送信する際に使われるエンコーディング方法を識別します。許されている値は 3 つです。

- `application/x-www-form-urlencoded`
  - : これは既定値で、フォームのデータを {{jsxref("encodeURI", "encodeURI()")}} などのアルゴリズムを使ってテキストを{{Glossary("Percent-encoding", "パーセントエンコーディング")}}した後のテキストとして送信します。
- `multipart/form-data`
  - : データを管理するために {{domxref("FormData")}} API を使用し、複数のファイルをサーバーに送信することができます。フォームに {{HTMLElement("input")}} 要素の [`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) が `file` ([`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file)) が含まれている場合は、このエンコーディング型を*使わなければなりません*。
- `text/plain`
  - : プレーンテキストです。ほとんどデバッグでしか役に立ちませんが、送信されたデータを簡単に見ることができます。

`formenctype` 属性が指定された場合、所属するフォームの [`enctype`](/ja/docs/Web/HTML/Reference/Elements/form#enctype) 属性を上書きします。

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

### formmethod

文字列で、フォームのデータを送信するときに使用する HTTP メソッドを示します。この値は所有者であるフォームの [`method`](/ja/docs/Web/HTML/Reference/Elements/form#method) を上書きします。許可されている値は次の通りです。

- `get`
  - : URL は `formaction` または [`action`](/ja/docs/Web/HTML/Reference/Elements/form#action) 属性で指定された URL に疑問符 ("?") を追加し、 `formenctype` または [`enctype`](/ja/docs/Web/HTML/Reference/Elements/form#enctype) 属性で指定された方法でエンコードされたフォームのデータが続くものになります。この URL は HTTP の {{HTTPMethod("GET")}} リクエストを用いてサーバーに送信されます。このメソッドは {{Glossary("ASCII")}} 文字のみを含むフォームでうまく動作し、副作用はありません。これが既定値です。
- `post`
  - : フォームのデータは、 `formaction` または [`action`](/ja/docs/Web/HTML/Reference/Elements/form#action) で指定された URL に HTTP の {{HTTPMethod("POST")}} メソッドを用いて送信されるリクエストの本文に含められます。このメソッドは複雑なデータやファイルの添付に対応しています。
- `dialog`
  - : このメソッドは、入力欄が関連付けられたダイアログを閉じるだけで、フォームのデータをまったく送信しない場合ことを表すために使用します。

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

### formnovalidate

論理属性で、存在する場合は、サーバーに送信する前にフォームの検証を行わないことを指定します。これは、自分自身で形成するフォームの [`novalidate`](/ja/docs/Web/HTML/Reference/Elements/form#novalidate) 属性の値より優先されます。

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

### formtarget

フォームを送信した後に受け取ったレスポンスを表示する場所を示す名前またはキーワードを指定する文字列です。この文字列は、**閲覧コンテキスト**（つまり、タブ、ウィンドウ、または {{HTMLElement("iframe")}}）の名前である必要があります。ここで指定された値は、この入力を所有している {{HTMLElement("form")}} の [`target`](/ja/docs/Web/HTML/Reference/Elements/form#target) 属性で指定された対象を上書きします。

タブ、ウィンドウ、インラインフレームなどの実際の名前の他に、使用できる特別なキーワードがいくつかあります。

- `_self`
  - : レスポンスを、形式を形成しているのと同じ閲覧コンテキストに読み込みます。これにより、現在の文書が受信したデータで置き換わります。これは、何も指定されなかった場合に使用される既定値です。
- `_blank`
  - : レスポンスを新しい、名前のない、閲覧コンテキストに読み込みます。これは通常、現在の文書内の同じウィンドウの新しいタブですが、{{Glossary("User agent", "ユーザーエージェント")}}の設定によって異なる形となる場合があります。
- `_parent`
  - : 現在の閲覧コンテキストの親コンテキストにレスポンスを読み込みます。親コンテキストがない場合は、 `_self` と同じ動作をします。
- `_top`
  - : レスポンスを最上位の閲覧コンテキストに読み込みます。これは、現在のコンテキストの最上位の祖先である閲覧コンテキストです。現在のコンテキストが最上位のコンテキストである場合、これは `_self` と同じように動作します。

この属性は [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) および {{HTMLElement("button")}} 要素でも使用できます。

## submit ボタンの使用

`<input type="submit">` ボタンはフォームを送信するために使用されます。もしカスタムボタンを作成し、JavaScript で動作をカスタマイズしたい場合は、[`<input type="button">`](/ja/docs/Web/HTML/Reference/Elements/input/button) か、より好ましくは {{htmlelement("button")}} 要素を使用しなければいけません。

もしフォームのボタンを作成するのに `<button>` 要素を使用するのであれば、次のことに注意してください。`<button>` が {{HTMLElement("form")}} の中にある場合、そのボタンは "submit" ボタンとして扱われます。ですから、どのボタンが送信ボタンであるかを明示的に指定する習慣をつけるとよいでしょう。

### 基本的な送信ボタン

まず、基本的な送信ボタンを持つフォームを作成することから始めます。

```html
<form>
  <div>
    <label for="example">テキストを送信してみましょう</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="送信" />
  </div>
</form>
```

次のように表示されます。

{{EmbedLiveSample("A_basic_submit_button", 650, 100)}}

テキストフィールドにいくらかテキストを入力してから、送信ボタンを押してみてください。

送信すると、データの名前と値のペアがサーバーに送信されます。この例では、文字列は `text=usertext` となります。"usertext" はユーザーが入力したテキストで、特殊文字を保持するためにエンコードされています。どこでどのようにデータを送信するかは `<form>` の設定によります。詳しくは[フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)を参照してください。

### 送信ボタンへのキーボードショートカットの追加

キーボードショートカットは、アクセスキーやキーボード相当物とも呼ばれ、ユーザーがキーボードのキーまたはキーの組み合わせを使ってボタンを発生させることができます。送信ボタンにキーボードショートカットを追加するには、それが意味をなす他の {{HTMLElement("input")}} と同じように、[`accesskey`](/ja/docs/Web/HTML/Reference/Global_attributes/accesskey) グローバル属性を使用してください。

この例では、 <kbd>s</kbd> がアクセスキーとして指定されています（<kbd>s</kbd> と、あなたのブラウザー/OS の組み合わせに応じた特定の修飾キーを押す必要があります）。ユーザーエージェント自身のキーボードショートカットとの競合を避けるために、ホストコンピューター上の他のショートカットとは異なる修飾キーがアクセスキーに使用されます。詳しくは [`accesskey`](/ja/docs/Web/HTML/Reference/Global_attributes/accesskey) を参照してください。

以下は、前回の例に <kbd>s</kbd> アクセスキーを追加した例です。

```html
<form>
  <div>
    <label for="example">テキストを送信してみましょう</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="送信" accesskey="s" />
  </div>
</form>
```

例えば、 Mac 版 Firefox では <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> を押すと送信ボタンを起動しますが、Windows 版 Chrome では <kbd>Alt</kbd>+<kbd>S</kbd> を使用します。

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

上の例の問題点は、ユーザーがアクセスキーが何であるかを知らないということです。 特に、競合を避けるために変更する修飾子は通常標準的でないため、このようなことが起こります。サイトを構築する際には、サイトのデザインを邪魔しないような方法でこの情報を提供するようにしてください（例えば、サイトのアクセスキーが何であるかについての情報を指し示す、簡単にアクセスできるリンクを提供する）。ボタンにツールチップを追加する（[`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性を使用する）こともできますが、アクセシビリティの観点からは完全な解決策とは言えません。

### 送信ボタンの無効化と有効化

送信ボタンを無効にするには、 [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) 属性を、次のように指定してください。

```html
<input type="submit" value="送信" disabled />
```

実行時に `disabled` を `true` または `false` に設定することで、ボタンを有効にしたり無効にしたりすることができます。JavaScript では、 `btn.disabled = true` または `btn.disabled = false` のようになります。

> [!NOTE]
> ボタンの有効化や無効化についてのさらなる考えは、 [`<input type="button">`](/ja/docs/Web/HTML/Reference/Elements/input/button#ボタンの無効化と有効化) ページを参照してください。

## 検証

送信ボタンは制約の検証には参加しません。制約を受ける実際の値を持っていません。

## 例

上に基本的な例を記載しています。送信ボタンについては、実のところこれ以上言うべきことはありません。この種のコントロールが「単純なボタン」と呼ばれることがあるのはそのためです。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>ボタンのラベルとして使用する文字列</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> および
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>なし</td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} およびそれが実装している {{domxref("HTMLInputElement")}} インターフェイス
- [フォームとボタン](/ja/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#実際のボタン)
- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("button")}} 要素
