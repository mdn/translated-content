---
title: BeforeInstallPromptEvent
slug: Web/API/BeforeInstallPromptEvent
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

**`BeforeInstallPromptEvent`** は {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} イベントのインターフェイスであり、モバイル端末でユーザーにウェブサイトのホーム画面への「インストール」を促す前に、{{domxref("Window")}} オブジェクトに対して発生します。

このインターフェイスは、{{domxref("Event")}} インターフェイスを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("BeforeInstallPromptEvent.BeforeInstallPromptEvent","BeforeInstallPromptEvent()")}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : 新しい `BeforeInstallPromptEvent` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} から継承したプロパティがあります。_

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : イベントが配信されたプラットフォームを含む文字列の配列を返します。これは、例えば "web" や "play" といったバージョンの選択肢をユーザーに表示したいユーザーエージェント向けに提供されており、これによりユーザーはウェブ版と Android 版の間で選択できるようになります。
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : アプリのインストールを促された際、ユーザーが選択した内容を説明したオブジェクトに解決される {{jsxref("Promise")}} を返します。

## インスタンスメソッド

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

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) - web.dev (2021)
