---
title: 制約検証
slug: Web/HTML/Constraint_validation
---

{{HTMLSidebar}}

ウェブフォームの作成は常に複雑な作業でした。フォーム自体をマークアップすること自体は簡単ですが、それぞれの入力欄が妥当で一貫しているかどうかをチェックすることはもっと難しく、問題をユーザーに伝えることは頭痛がするかもしれません。[HTML5](/ja/docs/Glossary/HTML5) では、フォームに新しい仕組みが導入されました。 {{ HTMLElement("input") }} 要素に意味を持つ新しい型と、クライアント側でフォームの内容をチェックする作業を簡単にする*制約検証*が追加されました。基本的な、よくある制約は、JavaScript を必要とせずに、新しい属性を設定することでチェックできます。もっと複雑な制約は[制約検証 API](/ja/docs/Web/API/Constraint_validation) を使用して検査することができます。

これらの概念の基本的な入門 (サンプル付き) は、[フォーム検証チュートリアル](/ja/docs/Learn/Forms/Form_validation)をご覧ください。

> **メモ:** HTML5 の制約検証は、*サーバー側*での検証の必要性をなくす訳ではありません。不正なフォームのリクエストは減少すると思われますが、不正なリクエストはまだ互換性のないブラウザー（例えば、HTML5 や JavaScript に対応していないブラウザー）から送られたり、ウェブアプリケーションをだまそうとする悪意のある人から送られたりする可能性があります。従って、HTML4 の時と同様、クライアント側で行われている検証と一貫性のある方法で、サーバー側でも入力の制約を検証する必要があります。

## 組み込みの基本的な制約

HTML5 では、基本的な制約は 2 通りの方法で定義されます。

- {{ HTMLElement("input") }} 要素の [`type`](/ja/docs/Web/HTML/Element/input#type) 属性に意味的に最も適切な値を選択する。例えば `email` を選択することで、値が妥当なメールアドレスであるかどうかをチェックする制約が自動的に作成されます。
- 検証関連属性を設定することで、基本的な制約を簡単な方法で、JavaScript の必要なく記述できます。

### 意味を持つ入力型

[`type`](/ja/docs/Web/HTML/Element/input#type) 属性の組込み制約は次の通りです。

| 入力型                                                         | 制約の説明                                                                                                                                        | 関連付けられた違反                                                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/ja/docs/Web/HTML/Element/input/url)     | 値は絶対 [URL](/ja/docs/Learn/Common_questions/What_is_a_URL) であり、 [URL Living Standard](https://url.spec.whatwg.org/) で定義された通りでなければなりません。 | **[TypeMismatch](/ja/docs/Web/API/ValidityState/typeMismatch)** 制約違反 |
| [`<input type="email">`](/ja/docs/Web/HTML/Element/input/email) | 値は統語的に妥当なメールアドレスで、ふつうは `username@hostname.tld` の書式でなければなりません。                                               | **[TypeMismatch](/ja/docs/Web/API/ValidityState/typeMismatch)** 制約違反 |

これらの入力型のどちらでも、[`multiple`](/ja/docs/Web/HTML/Element/input#multiple) 属性が設定されていたら、この入力欄にカンマ区切りのリストで複数の値を設定することができます。これらの中でここで書かれた条件に満足しないものがある場合、 **Type mismatch** 制約違反が発生します。

なお、ほとんどの入力型には内部的な制約がありません。制約検証が禁止されているものや、不正な値を正しい既定値に変換する無害化アルゴリズムがあるものがあるためです。

### 検証関連属性

上記で述べた `type` 属性に加えて、下記の要素が基本的な制約を記述するのに使われます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col">属性をサポートする入力型</th>
      <th scope="col">とりうる値</th>
      <th scope="col">制約の説明</th>
      <th scope="col">関連する違反</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>
      </td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">JavaScript 正規表現</a>
        （<a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript 5</a> で <code>global</code>, <code>ignoreCase</code>, <code>multiline</code> フラグが<em>無効</em>でコンパイルされたもの）
      </td>
      <td>値がパターンに一致する必要がある。</td>
      <td>
        <strong><code><a href="/ja/docs/Web/API/ValidityState/patternMismatch">patternMismatch</a></code></strong>
        制約違反
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/ja/docs/Web/HTML/Attributes/min">min</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>有効な数値</td>
      <td rowspan="3">値がその値以上であること。</td>
      <td rowspan="3">
        <strong><code><a href="/ja/docs/Web/API/ValidityState/rangeUnderflow">rangeUnderflow</a></code></strong>
        制約違反
      </td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>有効な日付</td>
    </tr>
    <tr>
      <td>
        <code>datetime</code>, <code>datetime-local</code>, <code>time</code>
      </td>
    <td>有効な日付と時刻</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/ja/docs/Web/HTML/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>有効な数値</td>
      <td rowspan="3">値がその値以下であること。</td>
      <td rowspan="3">
        <strong><code><a href="/ja/docs/Web/API/ValidityState/rangeOverflow">rangeOverflow</a></code></strong>
        制約違反
      </td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>有効な日付</td>
    </tr>
    <tr>
      <td>
        <code>datetime</code>, <code>datetime-local</code>, <code>time</code>
      </td>
      <td>有効な日付と時刻</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/required">required</a></code>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>,
        <code>date</code>, <code>datetime</code>, <code>datetime-local</code>,
        <code>month</code>, <code>week</code>, <code>time</code>,
        <code>number</code>, <code>checkbox</code>, <code>radio</code>,
        <code>file</code> および {{ HTMLElement("select") }} と {{ HTMLElement("textarea") }} 要素にも
      </td>
      <td>
        <em>なし</em>。論理属性のため、存在すれば <em>true</em>、存在しなければ <em>false</em> を意味する。
      </td>
      <td>値は必須 (設定された場合)。</td>
      <td>
        <strong><code><a href="/ja/docs/Web/API/ValidityState/valueMissing">valueMissing</a></code></strong>
        制約違反
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/ja/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>日の整数値</td>
      <td rowspan="5">
        step がリテラル値 <code>any</code> 以外に設定されていた場合、値は <strong>min</strong> + step の整数倍である必要がある。
      </td>
      <td rowspan="5">
        <strong><code><a href="/ja/docs/Web/API/ValidityState/stepMismatch">stepMismatch</a></code></strong>
        制約違反
      </td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>月の整数値</td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>週の整数値</td>
    </tr>
    <tr>
      <td>
        <code>datetime</code>, <code>datetime-local</code>, <code>time</code>
      </td>
      <td>秒の整数値</td>
    </tr>
    <tr>
      <td><code>range</code>, <code>number</code></td>
      <td>整数値</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code> と
        {{ HTMLElement("textarea") }} 要素
      </td>
      <td>整数長</td>
      <td>
        空でない場合、文字数 (コードポイント数) は属性値より少なくなってはならない。 {{ HTMLElement("textarea") }} では、改行はすべて (CRLF の組ではなく) 1 文字に正規化される。
      </td>
      <td>
        <strong><code><a href="/ja/docs/Web/API/ValidityState/tooShort">tooShort</a></code></strong>
        制約違反
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/HTML/Attributes/maxlength"><code>maxlength</code></a>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code> と
        {{ HTMLElement("textarea") }} 要素
      </td>
      <td>整数長</td>
      <td>
        文字数 (コードポイント数) が属性値を超えてはいけない。
      </td>
      <td>
        <strong><code><a href="/ja/docs/Web/API/ValidityState/tooLong">tooLong</a></code></strong>
        制約違反
      </td>
    </tr>
  </tbody>
</table>

## 制約検証プロセス

制約検証は、制約検証 API を通じて、単一のフォーム要素、またはフォームレベルの {{ HTMLElement("form") }} 要素自体に対して行われます。制約検証は以下の方法で行われます。

- `checkValidity()` または `reportValidity()` メソッドをフォーム関連 DOM インターフェイス ([`HTMLInputElement`](/ja/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/ja/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/ja/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/ja/docs/Web/API/HTMLOutputElement), [`HTMLTextAreaElement`](/ja/docs/Web/API/HTMLTextAreaElement)) に対して呼び出すことによって、この要素のみの制約を評価し、スクリプトがこの情報を取得できるようにします。 `checkValidity()` メソッドは、この要素の値が制約に合格するかどうかを論理値で返します。（これはふつう、 CSS 擬似クラスの {{ Cssxref(":valid") }} または {{ Cssxref(":invalid") }} のどちらを適用するかを判断する際に、ブラウザーが呼び出します。）一方、 `reportValidity()` メソッドはあらゆる制約違反をユーザーに報告します。
- `checkValidity()` または `reportValidity()` メソッドを [`HTMLFormElement`](/ja/docs/Web/API/HTMLFormElement) インターフェイスに対して呼び出すことによって。
- フォーム自身を送信することによって。

`checkValidity()` を呼び出すことは、制約を*静的*に検証するといい、`reportValidity()` を呼び出したり、フォームを送信したりすることは、制約を*対話的*に検証するといいます。

> **メモ:**
>
> - [`novalidate`](/ja/docs/Web/HTML/Element/form#novalidate) 属性が {{ HTMLElement("form") }} 要素に設定されている場合、制約の*対話的*な検証は行われません。
> - `submit()` メソッドを [`HTMLFormElement`](/ja/docs/Web/API/HTMLFormElement) インターフェイスで呼び出しても、制約検証は行われません。言い換えれば、このメソッドは制約を満たさなくてもフォームデータをサーバーに送信します。代わりに送信ボタンの `click()` メソッドを呼び出してください。

## 制約検証 API を使用した複雑な制約

JavaScript と制約 API を使用すると、より複雑な制約を実装することができます。例えば、複数のフィールドを組み合わせた制約や、複雑な計算を含む制約などです。

基本的には、制約に違反しているかどうかを計算するために、何らかのフォームフィールドイベント (**onchange**など) で JavaScript を起動し、検証の結果を設定するためにメソッド `field.setCustomValidity()` を使用することです。空文字列は制約が満たされていることを意味し、その他の文字列はエラーがあったことを意味し、この文字列がユーザーに表示するエラーメッセージになります。

### 複数のフィールドを組み合わせた制約：郵便番号の検証

郵便番号の形式は、国によって異なります。ほとんどの国では、国コードの前に任意の接頭辞を付けることができるだけでなく（ドイツでは `D-`、フランスやスイスでは `F-` のように）、固定の桁数しかない郵便番号を持つ国もありますし、イギリスのように、特定の位置にアルファベットを入れることができる、より複雑な構造を持つ国もあります。

> **メモ:** これは包括的な郵便番号検証ライブラリーではなく、主要概念のデモンストレーションです。

例として、この単純なフォームの制約検証をチェックするスクリプトを追加します。

```html
<form>
    <label for="ZIP">郵便番号 : </label>
    <input type="text" id="ZIP">
    <label for="Country">国 : </label>
    <select id="Country">
      <option value="ch">スイス</option>
      <option value="fr">フランス</option>
      <option value="de">ドイツ</option>
      <option value="nl">オランダ</option>
    </select>
    <input type="submit" value="検証">
</form>
```

これは以下のように表示されます。

{{EmbedLiveSample("Constraint_combining_several_fields_Postal_code_validation")}}

まず、自分自身の制約をチェックする関数を書きます。

```js
function checkZIP() {
  // それぞれの国で、郵便番号が従うべきパターンを定義する
  var constraints = {
    ch : [ '^(CH-)?\\d{4}$', "スイスの郵便番号は明確な 4 桁である必要があります。例: CH-1950 または 1950" ],
    fr : [ '^(F-)?\\d{5}$' , "フランスの郵便番号は明確な 5 桁です。例: F-75012 または 75012" ],
    de : [ '^(D-)?\\d{5}$' , "ドイツの郵便番号は明確な 5 桁です。例: D-12345 または 12345" ],
    nl : [ '^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$',
                    "オランダの郵便番号は明確な 4 桁に、SA、SD、SS 以外の2文字が続きます。" ]
  };

  // 国 ID を読む
  var country = document.getElementById("Country").value;

  // NPA フィールドを取得
  var ZIPField = document.getElementById("ZIP");

  // 制約チェッカーを構築
  var constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);

  // チェックする
  if (constraint.test(ZIPField.value)) {
    // 郵便番号は制約に従っていることを ConstraintAPI を使って伝える
    ZIPField.setCustomValidity("");
  }
  else {
    // 郵便番号が制約に従っていないことを伝えるために、 ConstraintAPI を使用して
    // この国で必要な書式についてのメッセージを伝える
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}
```

それから、これを {{ HTMLElement("select") }} の **onchange** イベントと {{ HTMLElement("input") }} の **oninput** イベントにリンクします。

```js
window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
}
```

郵便番号の検証の[ライブサンプル](constraint.html)もあります。

### アップロード前にファイルの大きさを制限

もう一つの一般的な制約は、アップロードされるファイルのサイズを制限することです。ファイルがサーバーに送信される前に、クライアント側でこれをチェックするには、制約検証 API、特に `field.setCustomValidity()` メソッドを、別の JavaScript API、ここでは File API と組み合わせる必要があります。

こちらが HTML 部分です。

```html
<label for="FS">75KB よりも小さいファイルを選択してください。 </label>
<input type="file" id="FS">
```

次のように表示されます。

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

JavaScript は選択されたファイルを読み込み、 `File.size()` メソッドを使ってそのサイズを取得し、それを（ハードコードされた）制限値と比較し、違反があった場合は Constraint API を呼び出してブラウザーに通知します。

```js
function checkFileSize() {
  var FS = document.getElementById("FS");
  var files = FS.files;

  // If there is (at least) one file selected
  if (files.length > 0) {
     if (files[0].size > 75 * 1024) { // 制約をチェック
       FS.setCustomValidity("選択されたファイルは 75 kB より大きくてはいけません。");
       return;
     }
  }
  // No custom constraint violation
  FS.setCustomValidity("");
}
```

最後に、このメソッドを正しいイベントにフックします。

```js
window.onload = function () {
  document.getElementById("FS").onchange = checkFileSize;
}
```

ファイルサイズの制約検証の[ライブサンプル](fileconstraint.html)を見ることができます。

## 制約検証の視覚的スタイル

制約条件を設定するだけでなく、ウェブ開発者は、ユーザーにどのようなメッセージを表示するか、どのようなスタイルにするかを制御したいと考えています。

### 要素の外見の制御

CSS の擬似クラスで、要素の外見を制御することができます。

#### :required および :optional 擬似クラス

{{cssxref(':required')}} と {{cssxref(':optional')}} [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、[`required`](/ja/docs/Web/HTML/Element/input#required) 属性がある、またはないフォーム要素に一致するセレクターを書くことができます。

#### :placeholder-shown 擬似クラス

{{cssxref(':placeholder-shown')}} を参照してください。

#### :valid :invalid 擬似クラス

{{cssxref(':valid')}} と {{cssxref(':invalid')}} [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)は、 \<input> 要素の内容がその型の設定に応じて、それぞれ検証されたか、検証に失敗したかを表すために使用します。これらのクラスは、有効または無効なフォーム要素にスタイルを与えることで書式が正しい要素と正しくない要素の識別をしやすくします。

### 制約違反のテキストの制御

制約違反のテキストを制御するには、以下の項目が有用です。

- 以下の要素の [element.setCustomValidity(message)](</ja/docs/Web/API/Constraint_validation#element.setcustomvalidity(message)>) メソッド

  - {{HTMLElement("fieldset")}} メモ: fieldset 要素にカスタム検証メッセージを設定しても、多くのブラウザーでは送信が抑止できません。
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - 送信ボタン（{{HTMLElement("button")}} 要素の `submit` 型、または `input` 要素の {{HTMLElement("input/submit", "submit")}} 型。それ以外のボタンは制約検証の対象にはなりません。
  - {{HTMLElement("textarea")}}

- [`ValidityState`](/ja/docs/Web/API/ValidityState) インターフェイスは、上記の要素型の [validity](/ja/docs/Web/API/Constraint_validation#validity) プロパティによって返されるオブジェクトを説明します。入力された値が無効になる可能性がある様々な方法を表しています。これらを合わせると、要素の値が有効でない場合に、なぜ検証に失敗するのかを説明することができます。
