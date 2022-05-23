---
title: Document.execCommand()
slug: Web/API/Document/execCommand
tags:
  - API
  - DOM
  - メソッド
  - NeedsExample
  - リファレンス
  - エディター
  - 非推奨
browser-compat: api.Document.execCommand
translation_of: Web/API/Document/execCommand
---
{{ApiRef("DOM")}}{{deprecated_header}}

HTML 文書が [`designMode`](/ja/docs/Web/API/Document/designMode) に切り替わっていると、その `document` オブジェクトは **`execCommand`** メソッドを公開して、[フォーム入力欄](/ja/docs/Web/HTML/Element/input)や [`contentEditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) を持った要素など、現在編集可能な領域を操作するためのコマンドが実行できるようにします。

多くのコマンドは、文書の[選択範囲](/ja/docs/Web/API/Selection)に対して影響を及ぼしますが (太字、イタリック、など)、他にも新しい要素の挿入 (リンクの追加) や行全体に影響するもの (字下げ) もあります。 `contentEditable` を使用した場合、 `execCommand()` は現在アクティブな編集可能要素に影響を及ぼします。

> **Note:** このメソッドは廃止されており、使用すべきではありません。特に、クリップボードを操作したい場合は [Clipboard API](/ja/docs/Web/API/Clipboard_API) の使用を検討してください。

## 構文

```js
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### 返値

論理値で、コマンドが対応していないか無効であれば `false` になります。

> **Note:** `document.execCommand()` はユーザーの操作の中で行われた場合にのみ `true` を返します。コマンドを呼び出す前に、ブラウザーが対応しているかどうかを調べるために返値を使用しないでください。 Firefox 82 以降は、`document.execCommand()` を重ねて呼び出すと常に `false` を返します。

### 引数

- `aCommandName`
  - : {{domxref("DOMString")}} で、実行するコマンドの名前を指定します。使用可能なコマンドの一覧は、[コマンド](#commands)の節をご覧ください。
- `aShowDefaultUI`
  - : 論理値で、既定のユーザインターフェースを表示するかどうかを指示します。 Mozilla では未実装です。
- `aValueArgument`
  - : 追加の引数を必要とするコマンドの引数 (例えば、 `insertImage` では挿入する画像の URL)。引数の値は {{domxref("DOMString")}} です。引数が不要な場合は `null` を指定します。

### コマンド

- `backColor`
  - : 文書の背景色を変更します。 `styleWithCss` モードでは、文書ではなく含まれているブロックの背景色に影響します。この場合、引数として {{cssxref("&lt;color&gt;")}} 値の文字列を渡す必要があります。ただし、Internet Explorer ではテキストの背景色を設定するために使用します。
- `bold`
  - : 選択範囲または挿入位置の太字のオンとオフを切り替えます。 Internet Explorer は {{HTMLElement("b")}} タグの代わりに {{HTMLElement("strong")}} タグを使用します。
- `ClearAuthenticationCache`
  - : キャッシュからすべての資格情報をクリアします。
- `contentReadOnly`
  - : 内容の文書の読み取り専用または編集可能を切り替えます。引数として true または false の論理値が必要です。 (Internet Explorer は対応していません。)
- `copy`
  - : 現在の選択範囲をクリップボードにコピーします。この動作が有効になる条件は、ブラウザーによって様々であり、時の経過により発展する可能性があります。このコマンドが使用可能かどうかは、ブラウザーの互換性の節で確認してください。
- `createLink`
  - : 選択範囲からハイパーリンクを作成しますが、選択範囲が`ある`ときだけです。ハイパーリンクの `href` の引数として、 [URI](/ja/docs/Archive/Mozilla/URIs_and_URLs) が必要です。 URI は少なくとも1文字を含む必要があり、空白文字でもかまいません。 (Internet Explorer は `null` 値でリンクを作成できます。)
- `cut`
  - : 現在の選択範囲を除去して、クリップボードにコピーします。いつこの動作が有効になるかはブラウザーによって様々であり、条件は時期によって変化しています。使用方法の詳細は[互換性一覧表](#ブラウザーの互換性)で確認してください。
- `decreaseFontSize`
  - : 選択範囲の前後または挿入位置に {{HTMLElement("small")}} タグを追加します。(Internet Explorer では対応していません。)
- `defaultParagraphSeparator`
  - : 編集可能なテキスト領域に新しい段落が作成された時の、段落区切りを変更します。詳しくは[マークアップ生成の違い](/ja/docs/Web/Guide/HTML/Editable_content#Differences_in_markup_generation)を参照してください。
- `delete`
  - : 現在の選択範囲を削除します。
- `enableAbsolutePositionEditor`
  - : 絶対配置の要素を移動させるためのグラバーを有効化または無効化します。 Firefox 64 以降では、既定で無効です。 ({{bug(1490641)}})
- `enableInlineTableEditing`
  - : 表の行/列の挿入・削除コントロールを有効または無効にします。 Firefox 64 以降では、既定で無効です。 ({{bug(1490641)}})
- `enableObjectResizing`
  - : 画像、表、絶対配置の要素、などの大きさの変更が可能なオブジェクトにおいて、大きさ変更用のハンドルを有効化または無効化します。 Firefox 64 以降では、既定で無効です。 ({{bug(1490641)}})
- `fontName`
  - : 選択範囲または挿入位置のフォント名を変更します。引数としてフォント名の文字列 (`"Arial"` など) が必要です。
- `fontSize`
  - : 選択範囲または挿入位置のフォントサイズを変更します。引数として `1`-`7` の整数値が必要です。
- `foreColor`
  - : 選択範囲または挿入位置のフォント色を変更します。引数として 16 進表記で色の値の文字列が必要です。
- `formatBlock`
  - : 現在の選択範囲を含む行の前後に HTML ブロックレベル要素を追加し、すでに存在する場合は、その行を含むブロック要素に置き換えます (Firefox では {{HTMLElement("blockquote")}} は例外です。 — これはブロック要素を囲みます)。引数としてタグ名の文字列が必要です。実質的にすべてのブロックレベル要素を利用することができます。 (Internet Explorer および Edge は見出しタグ `H1`–`H6`, `ADDRESS`, `PRE` のみに対応しており、`"<H1>"` のように山かっこで囲む必要があります。)
- `forwardDelete`
  - : [カーソル](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%AB)位置より前の文字を 1 文字削除します。これは、 Windows のキーボードで Delete キーを押すのと同じ動作です。
- `heading`
  - : 選択範囲または挿入位置の行の周りに見出し要素を追加します。引数としてタグ名の文字列 (つまり `"H1"` や `"H6"`) が必要です。 (Internet Explorer や Safari は対応していません。)
- `hiliteColor`
  - : 選択範囲または挿入位置の背景色を変更します。引数として color 値の文字列が必要です。この機能は `useCSS` を `true` にしないと使えません。(Internet Explorer では対応していません。)
- `increaseFontSize`
  - : 選択範囲または挿入位置に {{HTMLElement("big")}} タグを追加します。(Internet Explorer では対応していません。)
- `indent`
  - : 選択範囲または挿入位置を含む行を字下げします。Firefox では、選択範囲が字下げレベルの異なる複数行にわたる場合、選択範囲内の最も字下げの少ない行のみが字下げされます。
- `insertBrOnReturn`
  - : Enter キーで {{HTMLElement("br")}} 要素を挿入するか現在のブロック要素を二分割するかを制御します。 (Internet Explorer では対応していません。)
- `insertHorizontalRule`
  - : 挿入位置に {{HTMLElement("hr")}} 要素を挿入するか、選択範囲を置き換えるかします。
- `insertHTML`
  - : 挿入位置に HTML 文字列を挿入します (選択範囲は削除されます)。引数として正しい HTML 文字列が必要です。(Internet Explorer では対応していません。)
- `insertImage`
  - : 挿入位置に画像を挿入します (選択範囲は削除されます)。引数として画像の `src` のための URL 文字列が必要です。この文字列の要求事項は、 `createLink` と同じです。
- `insertOrderedList`
  - : 選択範囲または挿入位置に[番号付き順序付きリスト](/ja/docs/Web/HTML/Element/ol)を生成します。
- `insertUnorderedList`
  - : 選択範囲または挿入位置[行頭記号付き順序なしリスト](/ja/docs/Web/HTML/Element/ul)を生成します。
- `insertParagraph`
  - : 選択範囲の前後または現在の行に[段落](/ja/docs/Web/HTML/Element/p)を挿入します。(Internet Explorer は挿入位置に段落を挿入し、現在の選択範囲を削除します。)
- `insertText`
  - : 挿入位置に与えられたプレーンテキストを挿入します (選択範囲は削除されます)。
- `italic`
  - : 選択範囲または挿入位置のイタリック体のオンとオフを切り替えます。(Internet Explorer は {{HTMLElement("i")}} 要素ではなく、 {{HTMLElement("em")}} 要素を使用します。)
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
  - : クリップボードのコンテンツを挿入位置に貼り付け (ペースト) します (現在の選択範囲は置き換えられます)。ウェブコンテンツでは無効です。
- `redo`
  - : 前回の undo コマンドを元に戻します。
- `removeFormat`
  - : 現在の選択範囲からすべての書式を削除します。
- `selectAll`
  - : 編集可能領域のすべてのコンテンツを選択します。
- `strikeThrough`
  - : 選択範囲または挿入位置の取り消し線のオンとオフを切り替えます。
- `subscript`
  - : 選択範囲または挿入位置の[下付き文字](/ja/docs/Web/HTML/Element/sub)のオンとオフを切り替えます。
- `superscript`
  - : 選択範囲または挿入位置の[上付き文字](/ja/docs/Web/HTML/Element/sup)のオンとオフを切り替えます。
- `underline`
  - : 選択範囲または挿入位置の[下線](/ja/docs/Web/HTML/Element/u)のオンとオフを切り替えます。
- `undo`
  - : 最後に実行したコマンドを取り消します。
- `unlink`
  - : 選択されたハイパーリンクから[アンカー要素](/ja/docs/Web/HTML/Element/a)を削除します。
- `useCSS` {{Deprecated_inline}}

  - : 生成するマークアップに HTML タグと CSS のどちらを使用するかを切り替えます。引数として true または false の真偽値が必要です。

    > **Note:** この引数は論理的に逆で (つまり、 `false` で CSS が使用され、`true` で HTML が使用される)、 Internet Explorer では対応していません。これは `styleWithCSS` に置き換えられ、非推奨になりました。

- `styleWithCSS`

  - : `useCSS` コマンドを置き換えるものです。 `true` はマークアップ時に `style` 属性が生成または変更され、 false では書式要素が生成されます。

- `AutoUrlDetect`
  - : ブラウザーの自動リンクの動作を変更します (Internet Explorer のみ)。


## 例

[使用方法](https://codepen.io/chrisdavidmills/full/gzYjag/)の例 (CodePen) です。

## 仕様書

この機能は現行の仕様書に含まれていません。標準化の予定もありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
- [Mozilla におけるリッチテキスト編集](/ja/docs/Web/Guide/HTML/Editable_content/Rich-Text_Editing_in_Mozilla)
- [Scribe's
  "Browser Inconsistencies" documentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md) with bugs related to
  `document.execCommand`.

<ul>
 <li>{{domxref("HTMLElement.contentEditable")}}</li>
 <li>{{domxref("document.designMode")}}</li>
 <li><a href="/ja/docs/Rich-Text_Editing_in_Mozilla">Mozilla におけるリッチテキスト編集</a></li>
 <li><a href="https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md">Scribe's "Browser Inconsistencies" documentation</a> with bugs related to `document.execCommand`.</li>
</ul>
