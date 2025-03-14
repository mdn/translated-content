---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
---

{{AddonSidebar}}

拡張機能に、ユーザーがアドレスバーに入力した時のカスタマイズされた振る舞いを有効にします。

ユーザーがブラウザーのアドレスバーにフォーカスした時、ブラウザーは、タイプした内容に応じたサジェストページを含んだドロップダウンリストを表示します。これはユーザーにとって、例えば履歴やブックマークからのページにすぐにアクセスできる方法を与えます。

omnibox API は、ユーザーが拡張機能で定義されたキーワードを入力した時に、ドロップダウンに表示されるサジェストを拡張機能がカスタマイズする方法を提供します。これは下記のように動作します:

1. まず、拡張機能は [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルに "[omnibox](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)" キーを入れないといけません、ここでキーワードを定義します。
2. ユーザーがアドレスバーにフォーカスしてキーワードに続いてスペースをタイプした時、拡張機能は {{WebExtAPIRef("omnibox.onInputStarted")}} イベントを受け取ります。
3. オプションとして、拡張機能は {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} を呼んでアドレスバーのドロップダウンに最初に表示されるサジェストを定義します。
4. ユーザーがこの後にも文字をタイプし続けると、拡張機能は {{WebExtAPIRef("omnibox.onInputChanged")}} イベントを受け取ります。イベントリスナーはユーザーがタイプした現在の値を受けて、アドレスバーのドロップダウンにサジェストを生成できます。拡張機能が {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} を使ったデフォルトのサジェストをセットした場合、これがドロップダウンの最初に出てきます。
5. ユーザーがサジェストを受け入れたら、拡張機能は {{WebExtAPIRef("omnibox.onInputEntered")}} イベントを受け取ります。イベントリスナーは受け入れられたサジェストを受け取ります。
6. ユーザーがドロップダウンを止めたら、拡張機能は {{WebExtAPIRef("omnibox.onInputCancelled")}} イベントを受け取ります。

## 型

- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}
  - : Describes the recommended method to handle the selected suggestion: open in the current tab, open in a new foreground tab, or open in a new background tab.
- {{WebExtAPIRef("omnibox.SuggestResult")}}
  - : Object representing a suggestion to add to the address bar drop-down.

## 関数

- {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}
  - : Defines the first suggestion that appears in the drop-down when the user enters the keyword for your extension, followed by a space.

## イベント

- {{WebExtAPIRef("omnibox.onInputStarted")}}
  - : Fired when a the user focuses the address bar and types your extension's omnibox keyword, followed by a space.
- {{WebExtAPIRef("omnibox.onInputChanged")}}
  - : Fired whenever the user's input changes, after they have focused the address bar and typed your extension's omnibox keyword, followed by a space.
- {{WebExtAPIRef("omnibox.onInputEntered")}}
  - : Fired when the user accepts one of your extension's suggestions.
- {{WebExtAPIRef("omnibox.onInputCancelled")}}
  - : Fired when the user dismisses the address bar drop-down, after they have focused the address bar and typed your extension's omnibox keyword.

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
