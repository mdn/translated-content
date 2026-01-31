---
title: "Navigator: getInstalledRelatedApps() メソッド"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

**`getInstalledRelatedApps()`** メソッドは、ユーザーがインストールしたプラットフォーム専用のアプリや[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)を表すオブジェクトの配列で解決するプロミスを返します。プラットフォーム専用のアプリや PWA がすでにインストールされている場合、ウェブアプリから「アプリをインストール」のバナーが除去されるなど、コンテンツの個人設定に使用することができます。

> [!NOTE]
> このメソッドは、最上位の[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)から呼び出す必要があります。つまり、{{htmlelement("iframe")}} に埋め込まれたところからは呼び出せません。

## 解説

`getInstalledRelatedApps()` を使用すると、このメソッドを呼び出しているウェブアプリに関連するユニバーサル Windows プラットフォーム (UWP) アプリ、Android アプリ、PWA のインストール状況を調べることができます。

呼び出しているウェブアプリをプラットフォーム専用のアプリまたは PWA と関連付けるには、次の 2 つのことを行う必要があります。

1. 呼び出すウェブアプリは、[マニフェストファイル](/ja/docs/Web/Progressive_web_apps/Manifest) の [`related_applications`](/ja/docs/Web/Progressive_web_apps/Manifest/related_applications) メンバーで指定する必要があります。
2. プラットフォーム専用のアプリまたは PWA は、呼び出し元のアプリとの関係を定義する必要があります。

関係を定義する方法は、アプリの機種によって異なります。

- Android アプリは、[デジタル資産リンクシステム](https://developers.google.com/digital-asset-links/v1/getting-started)を介して行います。
- Windows UWP アプリは、[URI ハンドラー](https://learn.microsoft.com/ja/windows/uwp/launch-resume/web-to-app-linking)を介して行います。
- PWA は、次のような方法で行います。
  - PWA の場合、`related_applications` マニフェストメンバー内に自分自身で定義した項目で、基盤となるプラットフォームにインストールされているかどうかを調べます。
  - PWA 以外のアプリの場合、[`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785) ディレクトリーにある `assetlinks.json` ファイルに、インストールされているかどうかを調べるコードを記述します。

これらのケースのそれぞれを処理する方法の詳細については、[Is your app installed? getInstalledRelatedApps() will tell you!](https://web.dev/articles/get-installed-related-apps) を参照してください。

> [!NOTE]
> ほとんどの対応ブラウザーでは、インストール可能な PWA が検出された場合、独自のインストール UI を指定しています。これは、すでにインストールされている場合は表示されません。詳しくは、[PWA をインストール可能にする > ウェブからのインストール](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#ウェブからのインストール)を参照してください。この表示は、{{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} イベントを使用して抑制することができます。また、`getInstalledRelatedApps()` と組み合わせて、プラットフォーム専用のアプリが利用できるかどうかによって表示を抑制することもできます。詳しくは、[Trigger installation from your PWA](/ja/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed)を参照してください。

## 構文

```js-nolint
getInstalledRelatedApps()
```

### 引数

なし。

### 返値

{{JSxRef("Promise")}} で、インストールされた相対アプリを表すオブジェクトの配列で履行されます。各オブジェクトは、以下のプロパティを含むことができます。

- `id` {{optional_inline}}
  - : 指定されたプラットフォーム上でアプリケーションを表すために使用する ID を表す文字列。文字列の正確な書式はプラットフォームによって異なります。
- `platform`
  - : 関連するアプリが関連付けられている[プラットフォーム](https://github.com/w3c/manifest/wiki/Platforms)（エコシステムまたはオペレーティングシステム）を表す文字列です。 以下のいずれかになります。
    - `"chrome_web_store"`: [Google Chrome Web Store](https://chromewebstore.google.com/) アプリ。
    - `"play"`: [Google Play ストア](https://play.google.com/store/games)アプリ。
    - `"chromeos_play"`: [ChromeOS Play](https://support.google.com/googleplay/answer/7021273) アプリ。
    - `"webapp"`: [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)。
    - `"windows"`: [Windows ストア](https://apps.microsoft.com/?rtc=1&hl=en-us&gl=us)アプリ。
    - `"f-droid"`: [F-Droid](https://f-droid.org/) アプリ。
    - `"amazon"`: [Amazon アプリストア](https://www.amazon.com/gp/browse.html?node=2350149011)アプリ
- `url` {{optional_inline}}
  - : アプリに関連付けられた URL を表す文字列です。通常、この場所でアプリに関する情報を読み、インストールすることができます。
- `version` {{optional_inline}}
  - : 関連するアプリのバージョンを表す文字列です。

関連するアプリの情報は、前回呼び出したウェブアプリの [マニフェストファイル](/ja/docs/Web/Progressive_web_apps/Manifest) のメンバーである [`related_applications`](/ja/docs/Web/Progressive_web_apps/Manifest/related_applications) に指定された情報である必要があります。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このメソッドが、最上位の閲覧コンテキストで呼び出されませんでした。

## 例

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// 関連のアプリをすべてコンソール内の表に書き出す
console.table(relatedApps);

// プラットフォーム専用の特定のアプリを検索
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp && doesVersionSendPushMessages(psApp.version)) {
  // プッシュ通知の送信を処理するプラットフォーム専用のアプリがインストールされている
  // ウェブアプリで処理する必要はない
  return;
}
```

> [!NOTE]
> この例では、`doesVersionSendPushMessages()` は理論上の開発者定義関数であり、ブラウザーによって提供されているわけではありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Is your app installed? getInstalledRelatedApps() will tell you!](https://web.dev/articles/get-installed-related-apps)
