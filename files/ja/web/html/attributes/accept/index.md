---
title: "HTML 属性: accept"
slug: Web/HTML/Attributes/accept
---

{{HTMLSidebar}}

**`accept`** 属性は、値としてカンマ区切りでファイル種別または[固有ファイル種別指定子](#unique_file_type_specifiers)を取り、どのファイル種別を受け入れるかを記述します。 accept プロパティは {{HTMLElement("input/file", "file")}} 型の {{htmlelement("input")}} 要素のプロパティです。もとは {{htmlelement("form")}} 要素で対応していましたが、 HTML5 で削除され、 {{HTMLElement("input/file", "file")}} に変更されました。

与えられたファイル種別は複数の方法で識別される可能性があるため、特定の種別のファイルが必要な場合には、型指定子の完全なセットを提供したり、ワイルドカードを使用して任意の形式の型が許容されることを示したりすると便利です。

例えば、 Microsoft Word ファイルを識別できる方法は何通りもありますので、 Word ファイルを受け付けるサイトは `<input>` を次のように使用するかもしれません。

```html
<input type="file" id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
```

一方、メディアファイルを受け入れる場合は、そのメディア種別の任意の形式を含めるようにしたいかもしれません。

```html
<input type="file" id="soundFile" accept="audio/*">
<input type="file" id="videoFile" accept="video/*">
<input type="file" id="imageFile" accept="image/*">
```

`accept` 属性は、選択されたファイルの種別を検証するものではありません。これはブラウザーがユーザーに対して正しいファイル種別を選択できるようにするためのガイドをするためのヒントを提供するだけです。ユーザーがファイルセレクターのオプションを切り替え、これを上書きして任意のファイルを選択し、不正なファイル種別を選択することは (ほとんどの場合) 可能です。

このため、期待される要件をサーバー側で検証するようにしてください。

## 例

ファイル入力型に設定された場合、ネイティブファイルピッカーが開いたときに、正しいファイル種別のファイルのみを選択できるようにする必要があります。ほとんどのオペレーティングシステムでは、条件に合わず選択できないファイルが薄く表示されます。

```html
<p>
  <label for="soundFile">Select an audio file:</label>
  <input type="file" id="soundFile" accept="audio/*">
  </p>
  <p>
  <label for="videoFile">Select a video file:</label>
  <input type="file" id="videoFile" accept="video/*">
  </p>
  <p>
  <label for="imageFile">Select some images:</label>
  <input type="file" id="imageFile" accept="image/*" multiple>
  </p>
```

{{EmbedLiveSample('simple_example', '100%', 200)}}

なお、最後の例では複数の画像を選択することができます。詳しくは [`multiple`](multiple) 属性を参照してください。

## 固有ファイル種別指定子

**固有ファイル種別指定子**は文字列で、ユーザーが {{HTMLElement("input")}} 要素の `file` 型で選択することができるファイルの種類を記述します。それぞれの固有ファイル種別記述子は、以下の形のうちの一つを取ります。

- ピリオド (".") 文字から始まる有効なファイル拡張子で、大文字小文字の区別をしないもの。例えば、 `.jpg`, `.pdf`, `.doc` などです。
- 有効な MIME タイプの文字列で、拡張子なしのもの。
- 文字列 `audio/*` は「任意の音声ファイル」を意味します。
- 文字列 `video/*` は「任意の映像ファイル」を意味します。
- 文字列 `image/*` は「任意の画像ファイル」を意味します。

`accept` 属性は、カンマ区切りの 1 つ以上の固有ファイル種別指定子を含む文字列を値として取ります。例えば、標準的な画像形式と PDF ファイルの両方を含む、画像として表示できるコンテンツを必要とするファイルピッカーは、次のようになります。

```html
<input type="file" accept="image/*,.pdf">
```

## file 入力の使用

### 基本的な例

```html
<form method="post" enctype="multipart/form-data">
 <div>
   <label for="file">Choose file to upload</label>
   <input type="file" id="file" name="file" multiple>
 </div>
 <div>
   <button>Submit</button>
 </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

これは次のような出力を生成します。

{{EmbedLiveSample('A_basic_example', 650, 60)}}

> **メモ:** この例は GitHub でも見ることができます。 — [ソースコード](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/simple-file.html)と[ライブ実行](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html)を確認してください。

ユーザーの端末やオペレーティングシステムが何であろうと、ファイル入力には、ユーザーがファイルを選択するためのファイルピッカーダイアログを開くボタンが用意されす。

上記のように [`multiple`](multiple) 属性を含めることで、複数のファイルを一度に選択できるようになります。ユーザーは、選択したプラットフォームが許す任意の方法でファイルピッカーから複数のファイルを選択することができます (例えば、<kbd>Shift</kbd> キーまたは <kbd>Control</kbd> キーを押しながらクリックするなど)。 `<input>` ごとに 1 つのファイルのみを選択させたい場合は、 `multiple` 属性を省略してください。

### 受け付けるファイル種別の制限

多くの場合は、ユーザーが任意の種別のファイルを選択できるようにするのではなく、特定の種別のファイルを選択できるようにしたいものです。例えば、ファイル入力でユーザーがプロフィール画像をアップロードできる場合、 {{Glossary("JPEG")}} や {{Glossary("PNG")}} などのウェブ互換の画像形式を選択させたいと思うでしょう。/p>

許容されるファイル種別は、 [`accept`](/ja/docs/Web/HTML/Element/input/file#accept) 属性で許容されるファイル拡張子や MIME タイプのカンマ区切りのリストを取ることで指定することができます。いくつかの例を示します。

- `accept="image/png"` または `accept=".png"` — PNG ファイルを受け付ける。
- `accept="image/png, image/jpeg"` または `accept=".png, .jpg, .jpeg"` — PNG または JPEG ファイルを受け付ける。
- `accept="image/*"` — `image/*` MIME タイプで任意のファイルを受け付ける (また、多くのモバイル端末では、これを使用するとユーザーにカメラで写真を撮影させることができる。)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — MS Word 文書と思しきすべてのファイルを受け付ける。

もっと完全な例を見てみましょう。

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Choose file to upload</label>
    <input type="file" id="profile_pic" name="profile_pic"
          accept=".jpg, .jpeg, .png">
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Using_files_from_web_applications)
- [File API](/ja/docs/Web/API/File)
