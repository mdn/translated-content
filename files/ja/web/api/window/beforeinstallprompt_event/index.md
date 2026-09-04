---
title: "Window: beforeinstallprompt イベント"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

**`beforeinstallprompt`** イベントは、ブラウザーがウェブサイトを[プログレッシブウェブアプリとしてインストール可能](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)であると検出したときに発生します。

このイベントがいつ発生するかは保証されませんが、通常はページの読み込み時に発生します。

このイベントの代表的な用途は、ウェブアプリが、ブラウザーが指定する汎用的な UI ではなく、アプリ独自の UI を使用してユーザーにアプリのインストールを促す場合です。これにより、アプリはアプリに関するより詳しいコンテキストを提供し、ユーザーにインストールするメリットを説明することが可能になります。

このシナリオでは、このイベントのハンドラーは次の処理を行います。

- そこに渡される {{domxref("BeforeInstallPromptEvent")}} オブジェクトへの参照を保持してください
- アプリ内インストール UI を表示します（すべてのブラウザーがインストールに対応しているわけではないため、これはデフォルトで非表示にしておくべきです）。

ユーザーがアプリ内インストール UI を使用してアプリをインストールする場合、アプリ内インストール UI は、保持されている `BeforeInstallPromptEvent` オブジェクトの {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}} メソッドを呼び出し、インストールプロンプトを表示します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("beforeinstallprompt", (event) => { })

onbeforeinstallprompt = (event) => { }
```

## イベント型

{{domxref("BeforeInstallPromptEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} から継承したプロパティがあります。_

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : イベントが配信されたプラットフォームを含む文字列の配列を返します。これは、例えば "web" や "play" といったバージョンの選択肢をユーザーに表示したいユーザーエージェント向けに提供されており、これによりユーザーはウェブ版と Android 版の間で選択できるようになります。
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : アプリのインストールを促された際、ユーザーが選択した内容を説明したオブジェクトに解決される {{jsxref("Promise")}} を返します。

## イベントメソッド

- {{domxref("BeforeInstallPromptEvent.prompt()")}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : ユーザーにアプリのインストールを希望するかどうかを尋ねるプロンプトを表示させます。このメソッドは、アプリのインストールを促された際のユーザーの選択内容を説明したオブジェクトに解決される {{jsxref("Promise")}} を返します。

## 例

次の例では、アプリが独自のインストールボタンを提供しており、その `id` は `"install"` となっています。最初は、このボタンは非表示になっています。

```html
<button id="install" hidden>インストール</button>
```

`beforeinstallprompt` ハンドラーは次のように動作します。

- このイベントを取り消します。これにより、一部のプラットフォームにおいて、ブラウザーが自身のインストール UI を表示させるのを防ぎます
- `BeforeInstallPromptEvent` オブジェクトを変数に代入し、後で使用できるようにします
- アプリのインストールボタンを表示します。

```js
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

アプリのインストールボタンをクリックすると、次のように処理します。

- 保存されたイベントオブジェクトの {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}} メソッドを呼び出し、インストールプロンプトを開始します。
- `installPrompt` 変数をクリアし、自身を再び非表示にすることで、状態をリセットします。

```js
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`インストールプロンプト: ${result.outcome}`);
  installPrompt = null;
  installButton.setAttribute("hidden", "");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BeforeInstallPromptEvent.prompt")}}
- {{domxref("BeforeInstallPromptEvent")}}
