---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

{{HTMLElement("input")}} 要素の **`type="file"`** 型は、ユーザーが一つまたは複数のファイルを端末のストレージから選択することができるようにします。選択されると、ファイルは[フォーム投稿](/ja/docs/Learn/Forms)を使用してサーバーにアップロードしたり、JavaScript コードと[ファイル API](/ja/docs/Web/API/File_API/Using_files_from_web_applications) を使用して操作したりすることができます。

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## 値

ファイル入力欄の [`value`](/ja/docs/Web/HTML/Element/input#value) 属性には、選択されたファイルへのパスを表す文字列が入ります。ファイルが選択されていない場合は、値は空文字列 (`""`) になります。ユーザーが複数のファイルを選択すると、`value` は選択されたファイルのリストのうち最初のファイルを表します。その他のファイルは [input 要素の `HTMLInputElement.files` プロパティ](/ja/docs/Web/API/File_API/Using_files_from_web_applications#選択されたファイルについての情報の取得)を使って得ることができます。

> **メモ:** 文字列には[常に `C:\fakepath\` の接頭辞が付き](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly)、ファイルの実際のパスにはなりません。疑わしいソフトウェアがユーザーのファイル構造を推測することを防止するためです。

## 追加の属性

すべての {{HTMLElement("input")}} に共通の属性に加え、 `file` 型の入力欄は次の属性にも対応しています。

### accept

[`accept`](/ja/docs/Web/HTML/Attributes/accept) 属性の値は文字列で、ファイル入力欄が受け付けるファイル型を定義します。この文字列は **[固有ファイル型指定子](#固有ファイル型指定子)** をカンマで区切ったリストです。指定されたファイル型が複数の方法で識別されることがあるので、指定された形式のファイルが必要な場合は一連の型指定子を提供するといいでしょう。

例えば、 Microsoft Word ファイルを識別する方法がいくつもあるので、 Word ファイルを受け付けるサイトは次のように `<input>` を使用することがあります。

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

[`capture`](/ja/docs/Web/HTML/Attributes/capture) 属性は文字列で、 [`accept`](/ja/docs/Web/HTML/Attributes/accept) 属性で入力が画像または映像データであると示した場合、これらのデータを取り込むためにどのカメラを使用するかを指定します。 `user` の値では、ユーザーの方を向いているカメラやマイクを使用します。 `environment` は外側を向いたカメラやマイクを使用します。この属性がない場合、{{Glossary("user agent", "ユーザーエージェント")}}は何をするかを自分で自由に決めます。要求された方向が有効ではない場合、ユーザーエージェントは推奨される既定のモードで代用します。

> **メモ:** `capture` は以前は論理値であり、存在した場合、ファイル入力を要求する代わりに、カメラやマイクなどその端末のメディア取り込み機器を使用するように要求していました。

### multiple

[`multiple`](/ja/docs/Web/HTML/Attributes/multiple) 論理属性が指定されていると、ファイル入力欄はユーザーに複数のファイルを選択することを許します。

## 標準外の属性

上記に挙げた属性に加え、以下の標準外の属性が一部のブラウザーで利用できます。実装していないブラウザーではコードが機能する可能性が制限されるため、できれば使用することを避けてください。

### `webkitdirectory`

論理型の `webkitdirectory` 属性は、もし存在する場合は、ファイル選択インターフェイスでユーザーがディレクトリのみを選択することができることを示します。詳しい解説と例については {{domxref("HTMLInputElement.webkitdirectory")}} を参照してください。

> **メモ:** `webkitdirectory` はもともと WebKit ベースのブラウザー向けのみに実装されたものですが、 Microsoft Edge や Firefox 50 以降でも使用できます。しかし、比較的広く対応されていますが、まだ標準になっておらず、代替手段がない限りは使用するべきではありません。

## 固有ファイル型指定子

**固有ファイル型指定子**は文字列で、 `file` 型の {{HTMLElement("input")}} 要素でユーザーが選択することができるファイルの種類を記述します。それぞれの固有ファイル型指定子は、次の形のうち一つを取ることができます。

- 有効なファイル拡張子で、大文字小文字の区別なく、ピリオド (".") 文字で始まるもの。例えば、 `.jpg`, `.pdf`, `.doc` など。
- 有効な MIME タイプ文字列で、拡張子のないもの。
- 文字列 `audio/*` で「任意の音声ファイル」を意味する。
- 文字列 `video/*` で「任意の動画ファイル」を意味する。
- 文字列 `image/*` で「任意の画像ファイル」を意味する。

`accept` 属性は、これらの固有ファイル型指定子を 1 つ以上含む文字列を取ります。例えば、ファイル選択ダイアログが画像として表示することができるコンテンツを必要としており、標準の画像形式と PDF ファイルの両方を含める場合、このようになります。

```html
<input type="file" accept="image/*,.pdf" />
```

## ファイル入力欄の使用

### 基本的な例

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">アップロードするファイルを選択してください</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

これは以下のような出力になります。

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> **メモ:** この例は GitHub にもあります。 — [ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html)と[ライブ実行](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html)を確認してください。

ユーザーの端末やオペレーティングシステムに関わらず、ファイル入力欄にはユーザーがファイルを選択することができるファイル選択ダイアログを開くボタンがあります。

上記のように、 [`multiple`](#multiple) 属性を含めると、複数のファイルを一度に選択することができることを指定します。ユーザーはファイル選択ダイアログから、プラットフォームが許す方法（例えば、 <kbd>Shift</kbd> または <kbd>Control</kbd> を押しながらクリック）によって、複数のファイルを選択できます。ユーザーに `<input>` あたり 1 つのファイルを選択させたい場合は、 `multiple` 属性を省略してください。

### 選択されたファイルの情報の取得

選択されたファイルは、この要素の `HTMLInputElement.files` プロパティで返され、これは {{domxref("File")}} オブジェクトのリストを含む {{domxref("FileList")}} オブジェクトです。 `FileList` は配列のようにふるまうので、 `length` プロパティを使用して選択されたファイルの数を取得することができます。

それぞれの `File` オブジェクトは以下のような情報を持っています。

- `name`
  - : ファイルの名前です。
- `lastModified`
  - : ファイルが最後に変更された日時を表す数値で、 UNIX 時刻 (1970 年 1 月 1 日午前 0 時) からの経過ミリ秒数です。
- `lastModifiedDate` {{deprecated_inline}}
  - : ファイルが最後に変更された日時を表す {{jsxref("Date")}} オブジェクトです。_これは非推奨であり使うべきではありません。代わりに `lastModified` を使用してください。_
- `size`
  - : バイト数によるファイルサイズです。
- `type`
  - : ファイルの [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)です。
- `webkitRelativePath` {{non-standard_inline}}
  - : ディレクトリ選択ダイアログ (つまり、 [`webkitdirectory`](#webkitdirectory) 属性が設定されている `file` ダイアログ) で選択されたベースディレクトリからのファイルの相対パスを表す文字列です。_これは標準外なので使用するには注意してください。_

> **メモ:** 最近のブラウザーはすべて、 `HTMLInputElement.files` の値を取得だけではなく設定もできるようになっています。これが最も後に追加されたのは Firefox で、バージョン 57 で追加されました (see [Firefox バグ 1384030](https://bugzil.la/1384030))。

### 受け付けるファイル型の制限

ふつう、ユーザーが自由な形式のファイルを選択できるようにはしたくないでしょう。代わりに、特定の形式のファイルを選択させたいでしょう。例えば、ファイル入力欄でユーザーにプロフィールファイルをアップロードさせるのであれば、おそらく {{Glossary("JPEG")}} または {{Glossary("PNG")}} のようなウェブに互換性がある画像形式を選択させたいでしょう。

受付可能なファイル形式は [`accept`](#accept) 属性で、受け付けるファイルの拡張子または MIME タイプいくつか例を示します。

- `accept="image/png"` または `accept=".png"` — PNG ファイルを受け付けます。
- `accept="image/png, image/jpeg"` または `accept=".png, .jpg, .jpeg"` — PNG または JPEG ファイルを受け付けます。
- `accept="image/*"` — `image/*` の MIME タイプである任意のファイルを受け付けます。 (多くのモバイル端末では、この場合にユーザーがカメラで写真を撮ることもできるようになっています。)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — MS Word 文書と思われるファイルをすべて受け付けます。

もっと複雑な例を見てみましょう。

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">アップロードするファイルを選択してください</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

これは前回の例と似た外見の出力をします。

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> **メモ:** この例は GitHub にもあります。 — [ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html)と[ライブ実行](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html)を確認してください。

同じように見えるかもしれませんが、この入力欄でファイルを選択しようとすると、このファイル選択ダイアログでは `accept` の値で指定されたファイル形式しか選択できません。 (細かい動きはブラウザーやオペレーティングシステムによって異なります)。

`accept` 属性は選択されたファイルの形式を検証しません。単にブラウザーにユーザーが正しいファイル形式を選択するためのガイドするためのヒントを出すだけです。 (多くの場合) ユーザーがファイル選択ダイアログオプションを切り替えることで、ファイル選択ダイアログがこの設定を上書きして任意のファイルを選択することができるので、不正なファイル形式を選択する可能性があります。

このため、 `accept` 属性は適切なサーバー側の検証でバックアップする必要があることを意識しておいてください。

### 注

1. スクリプトからファイル選択ダイアログの値を設定することはできません。 — 以下のようにしても効果はありません。

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. `<input type="file">` を使用してファイルが選択された場合、セキュリティ上の理由から、元のファイルへの実際のパスが `value` 属性上では見えないようになっています。その代わりに、ファイル名の先頭に `C:\fakepath\` を追加したものが表示されます。この処置にはいくつかの経緯上の理由がありますが、すべての最新のブラウザーで対応されており、実際に[仕様書で定義されています](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly)。

## 例

この例では、この例では、 `HTMLInputElement.files` プロパティで利用できるファイル情報を利用する、さらに高度なファイル選択ダイアログを示し、またいくつか巧妙なテクニックを示します。

> **メモ:** この例の完全なソースコードは GitHub — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([ライブ版もあります](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)) で見ることができます。 CSS については説明しません。 JavaScript が中心です。

最初に、 HTML を見てみましょう。

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">アップロードする画像を選択してください (PNG, JPG)</label>
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
  </div>
  <div class="preview">
    <p>アップロードするファイルが選択されていません</p>
  </div>
  <div>
    <button>送信</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  width: 580px;
  background: #ccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
  height: 64px;
  order: 1;
}

form p {
  line-height: 32px;
  padding-left: 10px;
}

form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
```

これは以前見たものに似ています。特筆するべきものはありません。

次に、 JavaScript を一通り見てみましょう。

スクリプトの最初の行で、フォームの入力欄自体と `.preview` クラスが設定された {{htmlelement("div")}} 要素の参照を取得します。次に {{htmlelement("input")}} 要素を非表示にします。 — これは、ファイル入力欄が概して醜く、スタイル付けをするのが難しく、ブラウザー間でデザインに一貫性がないからです。 {{htmlelement("label")}} をクリックすることで `input` 要素をアクティブ化することができるので、 `input` 要素を見かけは非表示にしてラベルをボタンらしくしたほうが、ユーザーがファイルをアップロードしたいときの操作が分かります。

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **メモ:** ファイル入力欄を非表示にするために {{cssxref("opacity")}} を使用し、 {{cssxref("visibility", "visibility: hidden")}} や {{cssxref("display", "display: none")}} を使用しないのは、支援技術が後二者のファイル入力欄が対話可能ではないと解釈するからです。

次に、[イベントリスナー](/ja/docs/Web/API/EventTarget/addEventListener)を入力欄に追加して、選択された値の変化 (この場合、ファイルが選択されたこと) を監視します。イベントリスナーは独自の `updateImageDisplay()` 関数を呼び出します。

```js
input.addEventListener("change", updateImageDisplay);
```

`updateImageDisplay()` 関数が呼び出されるたびに、以下のことを行います。

- {{jsxref("Statements/while", "while")}} ループを使ってプレビューの `<div>` の中にある以前のコンテンツを空にします。
- 選択されたすべてのファイルの情報を持つ {{domxref("FileList")}} オブジェクトを取り、 `curFiles` と呼ばれる変数に保存します。
- `curFiles.length` が 0 かどうかをチェックすることで、ファイルが選択されていないかを確認します。選択されていない場合は、プレビューの `<div>` に選択されているファイルがない旨のメッセージを表示します。
- ファイルが選択されて*いた*場合、ループで 1 つずつ、プレビューの `<div>` にそれについての情報を表示します。特筆するべきは次です。
- 独自の `validFileType()` 関数を使用して、ファイルが正しい形式 (つまり、 `accept` 属性で指定された画像形式) であるかどうかをチェックします。
- そうであるなら、次のことを行います。

  - ファイルの名前とファイルサイズを、前述の `<div>` (`file.name` および `file.size` で取得) 内のリストアイテムに出力します。独自の `returnFileSize()` 関数はファイルサイズを バイト/KB/MB のうち適切な形式で返します (既定でブラウザーは長さを絶対的なバイトで返します)。
  - {{domxref("URL.createObjectURL_static", "URL.createObjectURL(curFiles[i])")}} を呼び出して、画像のプレビューのサムネイルを生成します。次に、新しい {{htmlelement("img")}} を生成し、その [`src`](/ja/docs/Web/HTML/Element/img#src) をサムネイルに設定することで、リスト項目にも画像を挿入します。

- ファイル形式が無効である場合、リストのアイテム内にメッセージを表示して、ユーザーに別なファイル形式を選択する必要があることを伝えます。

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "アップロードするファイルが選択されていません";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `ファイル名: ${file.name}, ファイルサイズ: ${returnFileSize(
          file.size
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `ファイル名: ${file.name}: ファイル形式が有効ではありません。選択しなおしてください。`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

独自の `validFileType()` 関数は {{domxref("File")}} オブジェクトを引数として取り、それから {{jsxref("Array.prototype.includes()")}} を使用して、 `fileTypes` の中の値にファイルの `type` プロパティに一致するものがあるかどうかをチェックします。一致するものが見つかった場合は、関数は `true` を返します。一致するものが見つからなければ、 `false` を返します。

```js
// https://developer.mozilla.org/ja/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
```

`returnFileSize()` 関数は数値（現在のファイルの `size` プロパティから取得したバイト数）を取り、バイト/KB/MB のうち適切な形式で返します。

```js
function returnFileSize(number) {
  if (number < 1024) {
    return `${number} バイト`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}
```

この例は次のようにできます。使ってみましょう。

{{EmbedLiveSample('Examples', '100%', 200)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>
        選択されたファイルのパスを表す文字列です。
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応する共通属性</strong></td>
      <td><a href="/ja/docs/Web/HTML/Element/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>追加の属性</strong></td>
      <td>
        <a href="#accept" aria-current="page"><code>accept</code></a>,
        <a href="#capture" aria-current="page"><code>capture</code></a>,
        <a href="#multiple" aria-current="page"><code>multiple</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>files</code> および <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"><code>no corresponding role</code></a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの利用](/ja/docs/Web/API/File_API/Using_files_from_web_applications) — `<input type="file">` および[ファイル API](/ja/docs/Web/API/File) に関するたくさんの有用な例も含まれています。
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
