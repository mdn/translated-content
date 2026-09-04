---
title: クリップボードとのやりとり
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

拡張機能でクリップボードを操作するには、Web API の {{domxref("Clipboard", "navigator.clipboard")}} メソッドと、`"clipboardRead"` または `"clipboardWrite"` の拡張機能権限を使用します。{{domxref("Clipboard", "navigator.clipboard")}} を使用することで、拡張機能はクリップボードから任意のデータを読み取ったり、クリップボードに任意のデータを書き込んだりすることができます。

> [!NOTE]
> クリップボード機能を提供するために、Web API の {{domxref("Document.execCommand()","document.execCommand")}} メソッドが使用されていました。しかし、{{domxref("Document.execCommand()","document.execCommand(&#34;copy&#34;)")}}、{{domxref("Document.execCommand()","document.execCommand(&#34;cut&#34;)")}}、{{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} はいずれも非推奨となっており、どのブラウザーにおいても動作や利用が保証されなくなりました。これらの機能は、歴史的な参照としてこの記事に記載されています。

{{domxref("Clipboard", "navigator.clipboard")}} API は、次の目的のメソッドを提供しています。

- テキストを扱う場合は {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} と {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} が使えます。
- 画像、リッチテキスト、HTML、その他のリッチコンテンツを扱う場合は {{domxref("Clipboard.read", "navigator.clipboard.read()")}} と {{domxref("Clipboard.write", "navigator.clipboard.write()")}} が使えます。

> [!NOTE]
> クリップボード API の書き込みおよび読み取りメソッドは、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ利用可能です。拡張機能は、`http:` ページで動作しているコンテンツスクリプトからはこれらのメソッドを使用することはできません。`https:` ページからのみ使用することができます。

## クリップボードへの書き込み

クリップボード API の {{domxref("Clipboard.write", "navigator.clipboard.write()")}} および {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} メソッドは、任意のコンテンツをクリップボードに書き込みます。これらのメソッドは保護されたコンテキストから利用できるのですが、拡張機能のユーザーが{{Glossary("Transient Activation","一時的な有効化")}}を実行した後にのみ機能します。ただし、[`"clipboardWrite"` 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite)がある場合は、一時的な有効化は要求されません。

> [!NOTE]
> Firefox および Chrome では、`"clipboardWrite"` 権限により、すべての拡張機能コンテキストおよびコンテンツスクリプトからクリップボードへ書き込むことができます。Safari では、`"clipboardWrite"` 権限は拡張機能コンテキストでのみ対応しています（コンテンツスクリプトでは対応していません）。

この関数は、文字列を受け取り、それをクリップボードに書き込みます。

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(
    () => {
      /* クリップボードの設定に成功 */
    },
    () => {
      /* クリップボードの書き込みに失敗 */
    },
  );
}
```

### execCommand() を使用する

> [!NOTE]
> {{domxref("Document.execCommand()","document.execCommand(&#34;copy&#34;)")}} と {{domxref("Document.execCommand()","document.execCommand(&#34;cut&#34;)")}} は非推奨となっており、どのブラウザーにおいても動作するかどうかや利用できるかどうかが保証されなくなりました。

{{domxref("Document.execCommand", "document.execCommand()")}} メソッドの `"cut"` と `"copy"` コマンドは、クリップボードの内容を選択した素材に置き換えるために使用されます。拡張機能は、ユーザーの操作によって発生する短命なイベントハンドラー（例えば、クリックハンドラーなど）において、特別な権限を必要とせずにこれらのコマンドを使用することができます。

例えば、この HTML を含むポップアップがあったとします。

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

`execCommand()` の呼び出しはクリックイベントハンドラー内で行われるため、この拡張機能には特別な権限は必要ありません。

しかし、拡張機能がアラームをきっかけにコピーを開始する場合を例に挙げてみましょう。

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

このユースケースを有効にするには、拡張機能が `"clipboardWrite"` [権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を要求する必要があります。つまり `"clipboardWrite"` を使用すると、拡張機能は、ユーザー操作に対する短命なイベントハンドラーの外側で、クリップボードに書き込むことができます。

> [!NOTE]
> {{domxref("Document.execCommand", "document.execCommand()")}} は、`type="hidden"` の入力フィールド、HTML5 属性の `"hidden"`、または `"display: none;"` を使った CSS ルールにマッチするものでは機能しません。したがって、`span`, `div`, `p` タグに「クリップボードにコピー」ボタンを追加するには、入力の位置を絶対座標に設定し、ビューポートの外に移動させるなどの回避策をとる必要があります。

## クリップボードからの読み込み

クリップボード API の {{domxref("Clipboard.read", "navigator.clipboard.read()")}} と {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} メソッドを使うと、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でクリップボードから任意のテキストまたはバイナリーデータを読み取ることができます。これにより、編集可能な要素に貼り付けることなく、クリップボードのデータにアクセスすることができます。

これらのメソッドは保護されたコンテキストから利用できるのですが、拡張機能のユーザーが {{Glossary("Transient Activation","一時的な有効化")}}を実行し、一時的なコンテキストメニュー内の貼り付けプロンプトをクリックした後にのみ機能します。ただし、[`"clipboardRead"` 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread)があれば、ユーザーの確認や一時的な有効化なしに、拡張機能からクリップボードを読み取ることができます。

> [!NOTE]
> Firefox および Chrome では、`"clipboardRead"` 権限を有効にすると、すべての拡張機能コンテキストおよびコンテンツスクリプトからクリップボードへの書き込みをすることができます。Safari では、`"clipboardRead"` 権限は対応していません。

このコードスニペットは、クリップボードからテキストを取得し、ID が `"outbox"`の要素の内容をそのテキストに置き換えます。

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### execCommand() の使用

> [!NOTE]
> {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} は非推奨となっており、どのブラウザーにおいても動作するかどうかや利用できるかどうかが保証されなくなりました。

{{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} を使用するには、拡張機能には `"clipboardRead"` [権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。この要件は、{{domxref("Element/click_event", "click")}} や {{domxref("Element/keypress_event", "keypress")}} などのユーザーが生成したイベントハンドラーから `"paste"` コマンドを使用する場合でも存在します。

これを含む HTML を考えてみましょう。

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

Chrome の場合:

- Chrome は拡張機能のサービスワーカーに対して `navigator.clipboard` を公開しておらず、また、API の文書フォーカス要件により、オフスクリーン文書からは `navigator.clipboard` にアクセスできません。その結果、Chrome 拡張機能では、オフスクリーン文書内で非推奨となった `document.execCommand()` API を使用するか、コンテンツスクリプトや拡張機能ページなど、別のコンテキストで `navigator.clipboard` を使用する必要があります。
  ページスクリプトの場合、Web API の {{domxref("Permissions", "navigator.permissions")}} を使用して `"clipboard-write"` パーミッションを要求する必要があります。そのパーミッションは、{{domxref("Permissions.query", "navigator.permissions.query()")}} を使って確認することができます。

  ```js
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* クリップボードに書き込む */
    }
  });
  ```

  > [!NOTE]
  > `clipboard-write` 権限は Firefox や Safari では対応していません。

Firefox の場合:

- 貼り付けプロンプトに対するユーザーのレスポンスにおいて、クリップボード API の読み取りメソッドが利用できる機能は、Firefox 127 のウェブページおよび Firefox 147 の拡張機能で導入されました。それ以前は、`"clipboardRead"` 権限が設定されている場合にのみ、これらのメソッドを利用することができました。

Safari の場合:

- `"clipboardWrite"` 権限は、拡張機能のコンテキスト（コンテンツスクリプトを除く）でのみ対応しています。
- `"clipboardRead"` 権限には対応していません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [権限 API](/ja/docs/Web/API/Permissions_API)
- [コンテンツを編集可能にする](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable)
