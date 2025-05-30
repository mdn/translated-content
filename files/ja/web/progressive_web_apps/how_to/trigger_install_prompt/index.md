---
title: PWA からインストールを起動する
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{PWASidebar}}

> [!WARNING]
> ここで説明する手法は {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} イベントに依存していますが、これは標準外であり、現在 Chromium ベースのブラウザーでのみ実装されています。

既定では、ユーザーがウェブサイトにアクセスし、ブラウザーがサイトを [PWA としてインストール可能](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability)であると判断した場合、ブラウザーは、サイトインストール用の組み込み UI（例えば、URL バーにアイコン）を表示します。ユーザーがアイコンをクリックすると、ブラウザーは、少なくともアプリの[名前](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/name)と[アイコン](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons)を含むインストールプロンプトを表示します。ユーザーがアプリのインストールに同意すると、アプリがインストールされます。

ただし、アプリ内に独自の UI を実装して、ユーザーにアプリのインストールを確認するメッセージを表示し、インストールプロンプトを開始することができます。これの利点は次のとおりです。

- アプリに関するより詳しい情報を提供し、PWA としてインストールするメリットをユーザーに説明することができます。
- アプリ内インストール UI は、ブラウザーの既定の UI よりもユーザーにとって見つけやすく、理解しやすいでしょう。

## アプリ内のインストール UI の追加

まず、ユーザーがインストールできることを示す UI をアプリに追加します。例えば、次のようにします。

```html
<button id="install" hidden>Install</button>
```

ユーザーがインストールできないブラウザーでアプリにアクセスした場合、インストール UI が表示されないように、ボタンの [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性を設定します。次に、PWA のローカルインストールに対応しているブラウザーでのみボタンを表示する方法を見てみましょう。

## beforeinstallprompt の待ち受け

ブラウザーがアプリのインストールが可能であると判断すると、グローバルの {{domxref("Window")}} スコープで {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} イベントが発行されます。

メインアプリのコードでは、このイベントを待ち受けします。

```js
// main.js

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

このイベントハンドラーは 3 つのことを行います。

- このイベントの {{domxref("Event.preventDefault()","preventDefault()")}} を呼び出します。これで、ブラウザーが自身のインストール UI を表示するのを防ぎます。
- ハンドラーに渡されたイベントオブジェクトを参照します。これは {{domxref("BeforeInstallPromptEvent")}} のインスタンスであり、ユーザーにアプリのインストールを促すために使用されます。
- ボタンから `hidden` 属性を除去することで、アプリ内のインストール UI を表示します。

## インストールプロンプトの起動

次に、アプリ内のインストールボタンに click ハンドラーを追加する必要があります。

```js
// main.js

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}
```

変数 `installPrompt` は、 `beforeinstallprompt` イベントハンドラー内で `BeforeInstallPromptEvent` オブジェクトに初期化されています。何らかの理由で `installPrompt` が初期化されていない場合は、何もしません。

それ以外の場合は、その {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}} メソッドを呼び出します。これにより、インストールプロンプトが表示され、アプリがインストールされたかどうかを示すオブジェクトで解決されるプロミス ({{jsxref("Promise")}}) が返されます。具体的には、ユーザーがアプリのインストールを選択した場合は `outcome` プロパティが `"accepted"`、プロンプトを閉じた場合は `"dismissed"` になります。

いずれの場合も、 `prompt()` を呼び出した後は、その状態をリセットする必要があります。これは、 `BeforeInstallPromptEvent` インスタンスごとに 1 回しか呼び出せないためです。そこで、 `installPrompt` 変数をリセットし、インストールボタンを再び非表示にします。

## アプリのインストールへの応答

ブラウザーやプラットフォームによっては、ブラウザーがアプリをインストールするために自分自身の UI を表示する場合があります。すなわち、アプリがアプリ内のインストール UI を経由せずにインストールされる可能性があります。この場合、アプリ内のインストール UI を無効にするか、すでにインストールされているアプリに UI を表示させる必要があります。

これを行うには、アプリがインストールされたときにグローバル {{domxref("Window")}} スコープで発行される {{domxref("Window.appinstalled_event", "appinstalled")}} イベントを待ち受けします。

```js
// main.js

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}
```

## プラットフォーム固有のアプリがインストールされた場合への応答

上記の例では、プラットフォーム固有のバージョンのアプリとウェブアプリの両方があり、プラットフォーム固有のアプリがすでにインストールされているかどうかによって、ウェブアプリの動きを変更したい場合に対応できません。プラットフォーム固有のアプリがすでにインストールされているユーザーには、 PWA のインストールを勧めないようにしたり、あるいはコンテンツを表示する際にプラットフォーム固有のアプリに移動するよう促した利したい場合などです。

これは、 {{domxref("Navigator.getInstalledRelatedApps()")}} メソッドを使用して処理できます。このメソッドを使用すると、インストールされている関連プラットフォーム専用のアプリ（または PWA）を検出し、適切に対応することができます。

例を示します。

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// 特定のプラットフォーム固有アプリを探す
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
  // 適切に UI を更新
}
```

この方法は、プラットフォーム専用のアプリの可用性に応じてブラウザーのインストール UI を抑制する `beforeinstallprompt` と組み合わせることもできます。

```js
window.addEventListener("beforeinstallprompt", async (event) => {
  const relatedApps = await navigator.getInstalledRelatedApps();

  // 特定のプラットフォーム固有アプリを探す
  const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

  if (psApp) {
    event.preventDefault();
    // 適切に UI を更新
  }
});
```

## 関連情報

- [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} イベント
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) (web.dev, 2021)
