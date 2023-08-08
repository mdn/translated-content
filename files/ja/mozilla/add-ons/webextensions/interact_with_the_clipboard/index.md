---
title: クリップボードとのやりとり
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{AddonSidebar}}

拡張機能でクリップボードを扱うのは、Web API の {{domxref("Document.execCommand()","document.execCommand")}} メソッド（非推奨）から {{domxref("Clipboard", "navigator.clipboard")}} メソッドに移行しています。

> **メモ:** {{domxref("Clipboard", "navigator.clipboard")}} API は最近追加された仕様であり、すべてのブラウザーで完全に実装されているとは限りません。この記事ではいくつかの制限事項を説明しますが、API があなたのニーズをサポートしていることを確認するために、使用する前に必ず各メソッドの互換性テーブルを確認するようにしてください。

2 つの API の違いは、{{domxref("Document.execCommand()","document.execCommand")}} がキーボードのコピー、カット、ペーストの操作に似ていて、ウェブページとクリップボード間でデータを交換するのに対し、{{domxref("Clipboard", "navigator.clipboard")}} はクリップボードとの間で任意のデータの書き込みと読み出しを行うことです。

{{domxref("Clipboard", "navigator.clipboard")}} は、読み書きのためのメソッドを個別に提供しています。

- テキストを扱う場合は {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} と {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} が使えます。
- 画像、リッチテキスト、HTML、その他のリッチコンテンツを扱う場合は {{domxref("Clipboard.read", "navigator.clipboard.read()")}} と {{domxref("Clipboard.write", "navigator.clipboard.write()")}} が使えます。

しかし、{{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} と {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} はすべてのブラウザーで動作しますが、{{domxref("Clipboard.read", "navigator.clipboard.read()")}} と {{domxref("Clipboard.write", "navigator.clipboard.write()")}} は動作するとは限りません。例えば、執筆時点の Firefox では、{{domxref("Clipboard.read", "navigator.clipboard.read()")}} と {{domxref("Clipboard.write", "navigator.clipboard.write()")}} は完全に実装されていないため、次のことを留意する必要があります。

- 画像を扱う場合は、クリップボードに画像を書き込むために {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}} を使い、ウェブページに画像を貼り付けるために {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} を使います。
- リッチコンテンツ（HTML、画像を含むリッチテキストなど）をクリップボードに書き込むには、{{domxref("Document.execCommand()","document.execCommand(&#34;copy&#34;)")}} か {{domxref("Document.execCommand()","document.execCommand(&#34;cut&#34;)")}} を使います。その後、{{domxref("Clipboard.read","navigator.clipboard.read()")}} （推奨）または {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} を使ってクリップボードからコンテンツを読み取ります。

## クリップボードへの書き込み

ここでは、クリップボードにデータを書き込むためのオプションについて説明します。

### Clipboard API を使用する

Clipboard API は、拡張機能から任意のデータをクリップボードに書き込むものです。この API を使用するには、`manifest.json` ファイルに `"clipboardRead"` または `"clipboardWrite"` というパーミッションを設定する必要があります。この API は[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用可能であるため、`http:` ページで動作するコンテンツスクリプトからは使用できず、`https:` ページでのみ使用できます。

ページスクリプトの場合、Web API の {{domxref("Permissions", "navigator.permissions")}} を使用して `"clipboard-write"` パーミッションを要求する必要があります。そのパーミッションは、{{domxref("Permissions.query", "navigator.permissions.query()")}} を使って確認することができます。

```js
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    /* write to the clipboard now */
  }
});
```

> **メモ:** `clipboard-write` のパーミッション名は Firefox ではサポートされておらず、Chromium ブラウザーでのみサポートされています。

この関数は、文字列を受け取り、それをクリップボードに書き込みます。

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(
    () => {
      /* clipboard successfully set */
    },
    () => {
      /* clipboard write failed */
    },
  );
}
```

### execCommand() を使用する

{{domxref("Document.execCommand", "document.execCommand()")}} メソッドの `"cut"` と `"copy"` コマンドは、クリップボードの内容を選択した素材に置き換えるために使用されます。これらのコマンドは、ユーザーアクションに対する短時間のイベントハンドラー（例えば、クリックハンドラー）で特別な許可なしに使用することができます。

例えば、以下のような HTML を含むポップアップがあったとします。

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

`"copy"` ボタンで {{HTMLElement("input")}} 要素の内容をコピーさせるには、次のようなコードを使用します。

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

`execCommand()` の呼び出しはクリックイベントハンドラーの中にあるので、特別な権限は必要ありません。

しかし、その代わりに、アラームからコピーを起動させたとしましょう。

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1,
});

browser.alarms.onAlarm.addListener(copy);
```

ブラウザーによっては、うまく動作しないことがあります。Firefox では動作せず、コンソールに次のようなメッセージが表示されます。

`document.execCommand('cut'/'copy') was denied because it was not called from inside a short running user-generated event handler.`

このユースケースを有効にするには、`"clipboardWrite"` [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を要求する必要があります。つまり `"clipboardWrite"` は、ユーザーアクションのための短時間のイベントハンドラーの外側でクリップボードに書き込むことを可能にします。

> **メモ:** {{domxref("Document.execCommand", "document.execCommand()")}} は、`type="hidden"` の入力フィールド、HTML5 属性の `"hidden"`、または `"display: none;"` を使った CSS ルールにマッチするものでは機能しません。したがって、`span`, `div`, `p` タグに「クリップボードにコピー」ボタンを追加するには、入力の位置を絶対座標に設定し、ビューポートの外に移動させるなどの回避策をとる必要があります。

### 特定のブラウザーにおける留意事項

クリップボードなどの API は日進月歩で進化しているため、ブラウザーによって動作にばらつきがあります。

Chrome の場合:

- ユーザーが作成したイベントハンドラーの外でクリップボードに書き込む場合でも、`"clipboardWrite"` は必要ありません。

Firefox の場合:

- {{domxref("Clipboard.write", "navigator.clipboard.write()")}} はサポートされていません。

詳細は[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## クリップボードからの読み込み

ここでは、クリップボードからデータを読み込んだり、貼り付けたりするためのオプションについて説明します。

### Clipboard API を使用する

Clipboard API の {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} と {{domxref("Clipboard.read", "navigator.clipboard.read()")}} メソッドを使うと、[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でクリップボードから任意のテキストまたはバイナリデータを読み取ることができます。これにより、編集可能な要素に貼り付けることなく、クリップボードのデータにアクセスすることができます。

一度 [Permissions API](/ja/docs/Web/API/Permissions_API) から `"clipboard-read"` パーミッションを取得すると、クリップボードから簡単に読み取ることができるようになります。例えば、このコードのスニペットはクリップボードからテキストを取得し、ID が `"outbox"` の要素の内容をそのテキストで置き換えます。

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### execCommand() を使用する

{{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} を使用するには、拡張機能には `"clipboardRead"` [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。これは、{{domxref("Element/click_event", "click")}} や {{domxref("Element/keypress_event", "keypress")}} などのユーザーが生成したイベントハンドラーから `"paste"` コマンドを使用する場合でも同様です。

このような内容を含む HTML を考えてみましょう。

```html
<textarea id="output"></textarea> <button id="paste">Paste</button>
```

ユーザーが `"paste"` の {{HTMLElement("button")}} をクリックしたときに、クリップボードから ID が `"output"` の {{HTMLElement("textarea")}} 要素の内容を設定するには、次のようなコードを使用します。

```js
function paste() {
  let pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

### 特定のブラウザーにおける留意事項

Firefox はバージョン 54 から `"clipboardRead"` [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)をサポートしていますが、[コンテンツ編集可能モード](/ja/docs/Web/Guide/HTML/Editable_content)の要素への貼り付けのみをサポートしており、コンテンツスクリプトの場合は {{HTMLElement("textarea")}} でのみ機能します。バックグラウンドスクリプトでは、どの要素もコンテンツ編集可能モードに設定できます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipboard API](/ja/docs/Web/API/Clipboard_API)
- [Permissions API](/ja/docs/Web/API/Permissions_API)
- [コンテンツを編集可能にする](/ja/docs/Web/Guide/HTML/Editable_content)
- [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable)
