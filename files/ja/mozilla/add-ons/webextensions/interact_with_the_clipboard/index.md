---
title: クリップボードとのやりとり
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
---
{{AddonSidebar}}

[`document.execCommand()`](/ja/docs/Web/API/Document/execCommand)を使用することで、WebExtension API で構築されたブラウザー拡張がシステムのクリップボードと連携できるようになります:

- `document.execCommand("copy")`
- `document.execCommand("cut")`
- `document.execCommand("paste")`

## クリップボードへの書き込み

document.execCommand をユーザー操作に対する短命なイベントハンドラー(例えば click ハンドラー)のなかで実行することで、特別な許可なしに"切り取り"や"コピー"などのクリップボード操作が可能になります。

例えば、次のような HTML を含むポップアップを見たとします:

```html
<input id="input" type="text"/>
<button id="copy">Copy</button>
```

"copy"ボタンで"input"要素の内容をコピーするためには、次のようなコードを使用します。:

```js
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

`execCommand()` が click イベントハンドラーの中で呼ばれているので、特別な許可はここでは不要です。

しかし、たとえば alarm の中からコピーを実行するとどうなるでしょうか。:

```js
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1
});

browser.alarms.onAlarm.addListener(copy);
```

ブラウザーにもよりますが、おそらくコピーはうまくいかないでしょう。Firefox ではうまくいきません。そして、ブラウザーコンソールに以下のようなメッセージが出力されているのが確認できると思います。:

```
"document.execCommand(‘cut’/‘copy’) was denied because it was not called from inside a short running user-generated event handler."
```

上記のようなケースでもコピーを可能にするには、"clipboardWrite" [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) の要求が必要です。"clipboardWrite"はユーザー操作に対する短命なイベントハンドラー以外の箇所でもクリップボードに対する書き込みを可能にします。

### 特定のブラウザーにおける留意事項

Chrome の場合:

- バックグラウンドページ、コンテンツスクリプト、オプションページ、ポップアップなどすべての実行コンテキストでクリップボードへの書き込みが可能です。
- ユーザー操作が起点のイベントハンドラーの外でクリップボードに書き込む場合でも、実際には"clipboardWrite"は不要です。

Firefox の場合:

- バックグラウンドページを除くすべての実行コンテキストでクリップボードへの書き込みが可能です。Firefox ではテキストを選択したり、入力フィールドにフォーカスすることがバックグラウンドページではできません。そのため、バックグラウンドページからはクリップボードへの書き込みができません。
- "clipboardWrite" パーミッションはバージョン 51 以降でのみサポートされます。
- バージョン 57 以降では、[`clipboard.setImageData()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData) API を使用することでクリップボードへの画像のコピーが可能です。

## クリップボードからの読み込み

"貼り付け"を使用するには"clipboardRead" [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/Request_the_right_permissions) が必要です。例えば、HTML に次のような内容を含めると思います:

```html
<textarea id="output"></textarea>
<button id="paste">Paste</button>
```

ユーザーが"paste"をクリックした際に"output"要素にクリップボードの内容を設定する場合、次のようなコードを使用します:

```js
function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

このコードには、ユーザー操作が起点のイベントハンドラーの場合でも"clipboardRead"のパーミッションが必要です。

### 特定のブラウザーにおける留意事項

Firefox は"clipboardRead" [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) をバージョン 54 からサポートしています。しかし、クリップボードからの読み込みにはパーミッションの他に、貼り付け先の要素が [content editable mode](/ja/docs/Web/Guide/HTML/Editable_content) である必要があります。さらに、コンテンツスクリプトの場合は\<textarea>要素のみ動作します。バックグラウンドスクリプトでは、どの要素でも content editable mode に設定できます。
