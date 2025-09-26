---
title: "Document: execCommand() メソッド"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{ApiRef("DOM")}}{{deprecated_header}}

**`execCommand`** メソッドは、複数の異なるコマンドを実装しています。クリップボードへのアクセスを提供するものもあれば、[フォーム入力フィールド](/ja/docs/Web/HTML/Reference/Elements/input)や [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) の要素、文書全体（[デザインモード](/ja/docs/Web/API/Document/designMode)に切り替えた場合）を編集するためのものもあります。

クリップボードにアクセスするには、`execCommand()` よりも新しい[クリップボード API](/ja/docs/Web/API/Clipboard_API) が推奨されます。しかし、編集コマンドを置き換えるものはありません。DOM を直接操作するのとは異なり、`execCommand()` によって実行された変更はアンドゥバッファ (編集履歴) を保持します。

多くのコマンドは、文書の[選択範囲](/ja/docs/Web/API/Selection)に対して影響を及ぼします。例えば、一部のコマンド（太字、斜体など）は現在選択されているテキストを整形する一方で、他のコマンドは選択範囲を削除したり、新しい要素を挿入したり（選択範囲を置き換えたり）、行全体に影響を与えたり（インデント）します。変更することができるのは現在アクティブになっている編集可能な要素だけですが、一部のコマンド（`copy`など）は編集可能な要素がなくても動作します。

> [!NOTE]
> `execCommand()` によって行われた変更は、ブラウザーや構成によって {{domxref("Element/beforeinput_event", "beforeinput")}} と {{domxref("Element/input_event", "input")}} イベントを発生させる場合と発生させない場合があります。起動されると、イベントのハンドラーは `execCommand()` を返す前に実行されます。制作者はこのような再帰的な呼び出し、特にこれらのイベントに応答して `execCommand()` を呼び出す場合には注意が必要です。Firefox 82 以降、入れ子になった `execCommand()` 呼び出しは常に失敗します。[バグ 1634262](https://bugzil.la/1634262) を参照してください。

## 構文

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### 引数

- `aCommandName`
  - : 文字列で、実行するコマンドの名前を指定します。以下のコマンドが使用できます。
    - `backColor`
      - : 文書の背景色を変更します。 `styleWithCss` モードでは、文書ではなく含まれているブロックの背景色に影響します。この場合、引数として {{cssxref("&lt;color&gt;")}} 値の文字列を渡す必要があります。
    - `bold`
      - : 選択範囲または挿入位置の太字のオンとオフを切り替えます。
    - `contentReadOnly`
      - : 内容の文書の読み取り専用または編集可能を切り替えます。引数として true または false の論理値が必要です。
    - `copy`
      - : 現在の選択範囲をクリップボードにコピーします。この動作が有効になる条件は、ブラウザーによって様々であり、時の経過により発展する可能性があります。このコマンドが使用可能かどうかは、ブラウザーの互換性の節で確認してください。
    - `createLink`
      - : 選択範囲からハイパーリンクを作成しますが、選択範囲が`ある`ときだけです。ハイパーリンクの `href` の引数として、{{Glossary("URI")}} 文字列が必要です。 URI は少なくとも1文字を含む必要があり、ホワイトスペースでもかまいません。
    - `cut`
      - : 現在の選択範囲を除去して、クリップボードにコピーします。いつこの動作が有効になるかはブラウザーによって様々であり、条件は時期によって変化しています。使用方法の詳細は[互換性一覧表](#ブラウザーの互換性)で確認してください。
    - `decreaseFontSize`
      - : 選択範囲の前後または挿入位置に {{HTMLElement("small")}} タグを追加します。
    - `defaultParagraphSeparator`
      - : 編集可能なテキスト領域に新しい段落が作成された時の、段落区切りを変更します。詳しくは[マークアップ生成の違い](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable#differences_in_markup_generation)を参照してください。
    - `delete`
      - : 現在の選択範囲を削除します。
    - `enableAbsolutePositionEditor`
      - : 絶対配置の要素を移動させるためのグラバーを有効化または無効化します。 Firefox 64 以降では、既定で無効です。 ([Firefox バグ 1490641](https://bugzil.la/1490641))
    - `enableInlineTableEditing`
      - : 表の行/列の挿入・削除コントロールを有効または無効にします。 Firefox 64 以降では、既定で無効です。 ([Firefox バグ 1490641](https://bugzil.la/1490641))
    - `enableObjectResizing`
      - : 画像、表、絶対配置の要素、などの大きさの変更が可能なオブジェクトにおいて、大きさ変更用のハンドルを有効化または無効化します。 Firefox 64 以降では、既定で無効です。 ([Firefox バグ 1490641](https://bugzil.la/1490641))
    - `fontName`
      - : 選択範囲または挿入位置のフォント名を変更します。引数としてフォント名の文字列（`"Arial"` など）が必要です。
    - `fontSize`
      - : 選択範囲または挿入位置のフォントサイズを変更します。引数として `1` - `7` の整数値が必要です。
    - `foreColor`
      - : 選択範囲または挿入位置のフォント色を変更します。引数として 16 進表記で色の値の文字列が必要です。
    - `formatBlock`
      - : 現在の選択範囲を含む行の前後に HTML ブロックレベル要素を追加し、すでに存在する場合は、その行を含むブロック要素に置き換えます (Firefox では {{HTMLElement("blockquote")}} は例外です。 — これはブロック要素を囲みます)。引数としてタグ名の文字列が必要です。実質的にすべてのブロックレベル要素を利用することができます。（古い Edge は見出しタグ `H1`–`H6`, `ADDRESS`, `PRE` のみに対応しており、`"<H1>"` のように山かっこで囲む必要があります。）
    - `forwardDelete`
      - : [カーソル](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%AB)位置より前の文字を 1 文字削除します。これは、 Windows のキーボードで Delete キーを押すのと同じ動作です。
    - `heading`
      - : 選択範囲または挿入位置の行の周りに見出し要素を追加します。引数としてタグ名の文字列（つまり `"H1"` や `"H6"`）が必要です。 (Safari は対応していません。)
    - `hiliteColor`
      - : 選択範囲または挿入位置の背景色を変更します。引数として color 値の文字列が必要です。この機能は `useCSS` を `true` にしないと使えません。
    - `increaseFontSize`
      - : 選択範囲または挿入位置に {{HTMLElement("big")}} タグを追加します。
    - `indent`
      - : 選択範囲または挿入位置を含む行を字下げします。Firefox では、選択範囲が字下げレベルの異なる複数行にわたる場合、選択範囲内の最も字下げの少ない行のみが字下げされます。
    - `insertBrOnReturn`
      - : Enter キーで {{HTMLElement("br")}} 要素を挿入するか現在のブロック要素を二分割するかを制御します。
    - `insertHorizontalRule`
      - : 挿入位置に {{HTMLElement("hr")}} 要素を挿入するか、選択範囲を置き換えるかします。
    - `insertHTML`
      - : 挿入位置に HTML 文字列を挿入します (選択範囲は削除されます)。引数として正しい HTML 文字列が必要です。(Internet Explorer では対応していません。)
    - `insertImage`
      - : 挿入位置に画像を挿入します (選択範囲は削除されます)。引数として画像の `src` のための URL 文字列が必要です。この文字列の要求事項は、 `createLink` と同じです。
    - `insertOrderedList`
      - : 選択範囲または挿入位置に[番号付き順序付きリスト](/ja/docs/Web/HTML/Reference/Elements/ol)を生成します。
    - `insertUnorderedList`
      - : 選択範囲または挿入位置[行頭記号付き順序なしリスト](/ja/docs/Web/HTML/Reference/Elements/ul)を生成します。
    - `insertParagraph`
      - : 選択範囲の前後または現在の行に[段落](/ja/docs/Web/HTML/Reference/Elements/p)を挿入します。
    - `insertText`
      - : 挿入位置に与えられたプレーンテキストを挿入します (選択範囲は削除されます)。
    - `italic`
      - : 選択範囲または挿入位置のイタリック体のオンとオフを切り替えます。
    - `justifyCenter`
      - : 選択範囲または挿入位置を中央揃えにします。
    - `justifyFull`
      - : 選択範囲または挿入位置を両端揃えにします。
    - `justifyLeft`
      - : 選択範囲または挿入位置を左寄せにします。
    - `justifyRight`
      - : 選択範囲または挿入位置を右寄せにします。
    - `outdent`
      - : 選択範囲または挿入位置を含む行の字下げを戻します。
    - `paste`
      - : クリップボードのコンテンツを挿入位置に貼り付け（ペースト）します（現在の選択範囲は置き換えられます）。ウェブコンテンツでは無効です。
    - `redo`
      - : 前回の undo コマンドを元に戻します。
    - `removeFormat`
      - : 現在の選択範囲からすべての書式を削除します。
    - `selectAll`
      - : 編集可能領域のすべてのコンテンツを選択します。
    - `strikeThrough`
      - : 選択範囲または挿入位置の取り消し線のオンとオフを切り替えます。
    - `subscript`
      - : 選択範囲または挿入位置の[下付き文字](/ja/docs/Web/HTML/Reference/Elements/sub)のオンとオフを切り替えます。
    - `superscript`
      - : 選択範囲または挿入位置の[上付き文字](/ja/docs/Web/HTML/Reference/Elements/sup)のオンとオフを切り替えます。
    - `underline`
      - : 選択範囲または挿入位置の[下線](/ja/docs/Web/HTML/Reference/Elements/u)のオンとオフを切り替えます。
    - `undo`
      - : 最後に実行したコマンドを取り消します。
    - `unlink`
      - : 選択されたハイパーリンクから[アンカー要素](/ja/docs/Web/HTML/Reference/Elements/a)を削除します。
    - `useCSS` {{Deprecated_inline}}
      - : 生成するマークアップに HTML タグと CSS のどちらを使用するかを切り替えます。引数として true または false の真偽値が必要です。
        > [!NOTE]
        > この引数は論理が逆です（つまり、`false` で CSS が使用され、`true` で HTML が使用される）。これは `styleWithCSS` に置き換えられ、非推奨になりました。

    - `styleWithCSS`
      - : `useCSS` コマンドを置き換えるものです。`true` はマークアップ時に `style` 属性が生成または変更され、false では書式要素が生成されます。
    - `AutoUrlDetect`
      - : ブラウザーの自動リンクの動作を変更します。

- `aShowDefaultUI`
  - : 論理値で、既定のユーザーインターフェイスを表示するかどうかを指示します。 Mozilla では未実装です。
- `aValueArgument`
  - : 入力引数を必要とするコマンド向けのもので、その情報を提供する文字列です。例えば、 `insertImage` では挿入する画像の URL です。引数が不要な場合は `null` を指定してください。

### 返値

論理値で、コマンドが対応していないか無効であれば `false` になります。

> [!NOTE]
> `document.execCommand()` はユーザーの操作の中で行われた場合にのみ `true` を返します。コマンドを呼び出す前に、ブラウザーが対応しているかどうかを調べるために返値を使用しないでください。

## 例

[execCommand と contentEditable 要素の使用方法](https://codepen.io/chrisdavidmills/full/gzYjag/)の例 (CodePen) です。

### insertText の使用

この例では、2 つの非常に基本的な HTML エディターを示しています。{{HTMLElement("textarea")}} 要素を用いたものと、 {{HTMLElement("pre")}} 要素に [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性を設定したものを用いたものです。

"Bold" または "Italic" ボタンをクリックすると、要素に適切なタグが挿入され、`insertText` を使用して編集履歴が保存されるので、ユーザーは操作を元に戻すことができます。

#### HTML

```html
<h2>textarea</h2>

<div class="actions" data-for="textarea">
  <button data-el="b">Bold</button>
  <button data-el="i">Italic</button>
</div>

<textarea class="editarea">Some text.</textarea>

<h2>contenteditable</h2>

<div class="actions" data-for="pre">
  <button data-el="b">Bold</button>
  <button data-el="i">Italic</button>
</div>

<pre contenteditable="true" class="editarea">Some text.</pre>
```

#### JavaScript

```js
// Prepare action buttons
const buttonContainers = document.querySelectorAll(".actions");

for (const buttonContainer of buttonContainers) {
  const buttons = buttonContainer.querySelectorAll("button");
  const pasteTarget = buttonContainer.getAttribute("data-for");

  for (const button of buttons) {
    const elementName = button.getAttribute("data-el");
    button.addEventListener("click", () =>
      insertText(`<${elementName}></${elementName}>`, pasteTarget),
    );
  }
}

// Inserts text at cursor, or replaces selected text
function insertText(newText, selector) {
  const textarea = document.querySelector(selector);
  textarea.focus();

  let pasted = true;
  try {
    if (!document.execCommand("insertText", false, newText)) {
      pasted = false;
    }
  } catch (e) {
    console.error("error caught:", e);
    pasted = false;
  }

  if (!pasted) {
    console.error("paste unsuccessful, execCommand not supported");
  }
}
```

#### 結果

{{EmbedLiveSample("Using insertText", 100, 300)}}

## 仕様書

この機能は現在のどの仕様にも属しませんが、これを規定しようとする[非公式な草案](https://w3c.github.io/editing/docs/execCommand/)があります。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
