---
title: ホーム画面に追加
slug: Web/Progressive_web_apps/Add_to_home_screen
---
ホーム画面に追加 (または A2HS と略記) は最近のブラウザーで利用できる機能で、ユーザーがウェブアプリを「インストール」、すなわちお気に入りのウェブアプリケーション (またはウェブサイト) を表すショートカットを自分のホーム画面に追加することができるので、今後はこのショートカットを一回タップすればアクセスできるようになります。このガイドでは、 A2HS の使用方法と、ユーザーがこの機能を利用できるようにするために開発者として行う必要のあることについて説明します。

## なぜ A2HS か

A2HS は[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)の思想の一環となるよう考えられています。 — ウェブアプリにネイティブアプリと同等の使い勝手を与えることで、今日のエコシステム戦争に参戦できるものです。この部分はホーム画面のアイコンをタップするという簡単な操作でアプリを起動できるものであり、きちんとした独自のウィンドウに表示されます。 A2HS ではこれを実現します。

## A2HS に対応しているブラウザー

A2HS は、 iOS webview を除いたすべてのモバイルブラウザーが対応しています。また、一部の Chromium ベースのデスクトップブラウザーも対応しています。
Firefox はモバイルでの対応を[v58 から](/ja/docs/Mozilla/Firefox/Releases/58#Other)行っており、[デスクトップでの対応](https://bugzilla.mozilla.org/show_bug.cgi?id=1407202)は作業中です。

正確な詳細は [caniuse.com](https://caniuse.com/#feat=web-app-manifest) を参照してください。

## 利用方法

A2HS を説明するために最小構成のサンプルページを作成しました(デモページは[ここから](https://mdn.github.io/pwa-examples/a2hs/), ソースコードは [こちらから](https://github.com/mdn/pwa-examples/tree/master/a2hs))。このページ自体に大した機能はありませんが、ページを端末のホーム画面に追加してサービスワーカーのお陰でページをオフラインで使用可能にするために必要なコードが書かれています。このページは何枚かのキツネの写真を表示します。

もし Android 版 Firefox を使用可能であれば、それを使用して `https://mdn.github.io/pwa-examples/a2hs/` にあるデモに移動してみてください。キツネの写真を見ることができますが、もっと重要なのは、その中にプラス (+) アイコンを持つ "ホーム " のアイコンが表示されることです。 — これは、必要な機能が所定の場所にある任意のサイトのために表示される "ホーム画面に追加 "アイコンです。

![](add-to-home-screen-icon.png)

このボタンをタップすると、このページをホーム画面に追加するかどうかの確認バナーが表示されます。ここで大きな + _ADD TO HOME SCREEN_ を選択するとウェブアプリがホーム画面に追加されます。

![](fx-a2hs-banner.png)

もし Chrome をお使いの場合は操作方法がやや異なります。 Chrome では、ページを読み込むと自動的にホーム画面に追加するかどうかのポップアップが現れます。

![](chrome-a2hs-banner.png)

> **Note:** Chrome でもバナーを表示したい場合は [Web App Install Banners](https://developers.google.com/web/fundamentals/app-install-banners/) の記事が役立ちます。

このポップアップで「追加しない」を選んでしまったけれど、やっぱりインストールを行ないたい場合は Chrome のメニューを開いて「ホーム画面に追加」を押せば追加することができます。

ホーム画面に追加したウェブアプリは、どのブラウザーをお使いの場合でもフルネームではなく短縮名のほうで表示されます。これはほかのネイティブアプリの挙動と同じです。

![](a2hs-on-home-screen.png)

このアイコンをタップすると開きますが、全画面アプリとして開き、その周囲のブラウザー UI は表示されません。

## アプリを A2HS 対応にするには

ウェブアプリを A2HS 対応にするには、次の要件を満たしている必要があります。

- ウェブアプリが HTTPS で配信されていること ― ウェブはいまよりセキュアなほうへ向かっており A2HS を含むモダンなウェブ技術はセキュアな通信の上でのみ動くようになっています。
- 正しくフィールドが記入されたマニフェストファイルが含まれていて、それが HTML の \<head> 部分にリンクされていること
- ホーム画面に追加した時に正しく表示されるように適切なアイコンが含まれていること
- Chrome は、追加でアプリがサービスワーカーを登録しておく必要があります (例えば、オフライン時に機能するように)。

### マニフェスト

マニフェストファイルは JSON 形式で書かれ、ウェブアプリ内のどこかに設置される必要があります (置き場所はルートディレクトリにするのがよいです)。またファイルの拡張子は `.webmanifest` にします。ここでは `manifest.webmanifest` といファイル名にしました。このファイルにはウェブアプリについての情報やどのような挙動をするのかについての設定が記されています。

> **Note:** 拡張子`.webmanifest` は W3C の[WebAppManifest についてのドキュメント](/ja/docs/)の中の [Media type registration](https://w3c.github.io/manifest/#media-type-registration) の節の中で定義されています。ただ、多くの場合ブラウザーは拡張子 `.json` マニフェストファイルをサポートしています。

A2HS に必要なフィールドは次の通りです。

- `background_color`: いくつかのアプリのコンテキストで使用する背景色を指定します。 A2HS に最も関連するのは、ホーム画面のアプリアイコンをタップして最初にロードを開始したときに表示されるスプラッシュ画面です (現在のところ、これは Chrome でアプリがホーム画面に追加されたときにのみ表示されます)。
- `display`: アプリの表示方法を指定します。独立したアプリ (単なるウェブページではなく) のように見せるには、 `fullscreen` (UI が全く表示されない) や `standalone` (よく似ているが、ステータスバーなどのシステムレベルの UI 要素が表示される場合がある) などの値を選択してください。
- `icons`: アプリをさまざまな場所 (タスク切り替えや肝心のホーム画面) など、で表示する際に使用するブラウザーのアイコンを指定します。今回のデモでは 1 つだけを含めました。
- `name`/`short_name`: これらのフィールドは、異なる場所でアプリを表示する際に表示されるアプリ名を提供します。 `name` はアプリの完全な名前を提供し、 `short_name` は完全な名前を表示するためのスペースが不足している場合に使用される短縮名を提供します。アプリの名前が特に長い場合は、両方を指定することをお勧めします。
- `start_url`: ホーム画面に追加したアプリが起動したときに読み込まれる資産へのパスを指定します。これは、サイトインデックスを指す相対 URL であり、マニフェストの URL からの相対 URL でなければならないことに注意してください。また、 Chrome ではインストールバナーを表示するのに必要ですが、 Firefox でプラス印の付いたホームのアイコンを表示するためは必要ではないことに注意してください。

サンプルアプリのマニフェストは次のようになります。

```js
{
  "background_color": "purple",
  "description": "Shows random fox pictures. Hey, at least it isn't cats.",
  "display": "fullscreen",
  "icons": [
    {
      "src": "icon/fox-icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "name": "Awesome fox pictures",
  "short_name": "Foxes",
  "start_url": "/pwa-examples/a2hs/index.html"
}
```

### 適切なアイコン

As shown in the above manifest listing, we are including a 192 x 192 px icon for use in our app. You can include more sizes if you want; Android will choose the most appropriate size for each different use case. You could also decide to include different types of icons so devices can use the best one they are able to (e.g., Chrome already supports the WebP format).

Note that the `type` member in each icon's object specifies the icon's mimetype, so the browser can quickly read what type the icon is, and then ignore it and move to a different icon if it doesn't support it.

In terms of how to design the icon, you should follow the same best practices you'd follow for any Android icon (see the [Android icon design guidelines](https://developer.android.com/guide/practices/ui_guidelines/icon_design.html)).

### HTML からマニフェストへリンクする

To finish setting up your manifest, you need to reference it from the HTML of your application's home page:

```html
<link rel="manifest" href="manifest.webmanifest">
```

Browsers that support A2HS will know where to look for your manifest once this is in place.

## A2HS でできないこと

Bear in mind that when you add an app to your Home screen, it just makes the app easily accessible — it doesn't download the app's assets and data to your device and make the app available offline, or anything like that. To make your app work offline, you have to use the [Service Worker API](/ja/docs/Web/API/Service_Worker_API) to handle storing the assets offline, and if required, [Web storage](/ja/docs/Web/API/Web_Storage_API) or [IndexedDB](/ja/docs/Web/API/IndexedDB_API) to store its data.

In our example app, we've just used a service worker to store all necessary files. The service worker is registered against the site with the final code block in the [`index.js`](https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js) file. We then cache all the site's assets using the [Cache API](/ja/docs/Web/API/Cache), and serve them from the cache instead of the network using the code in the [sw.js](https://github.com/mdn/pwa-examples/blob/master/a2hs/sw.js) file.

## デスクトップでの A2HS

While originally intended to improve user experience on mobile OSes, there is movement to make PWAs installable on desktop platforms too.

> **Note:** At the time of writing, the functionality described below was only supported in newer versions of Chrome — by default on Windows, and behind the `#enable-desktop-pwas` flag on macOS.

### インストールボタンの追加

PWA インストール機能をデスクトップでも実現するには、まずインストールボタンをドキュメントに追加する必要があります。デスクトップではモバイル端末とは違い自動的にポップアップなどが出るわけではなくユーザーがトリガーを設定してやる必要があるのです。

```html
<button class="add-button">ホーム画面に追加</button>
```

例えばこんなふうにデザインします。

```css
.add-button {
  position: absolute;
  top: 1px;
  left: 1px;
}
```

### インストールを扱うための JavaScript

At the bottom of our [`index.js` file](https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js), we added some JavaScript to handle the installation. First of all, we declare a `deferredPrompt` variable (which we'll explain later on), get a reference to our install button, and set it to `display: none` initially:

```js
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';
```

We hide the button initially because the PWA will not be available for install until it follows the A2HS criteria. When this happens, supporting browsers will fire a `beforeinstallprompt` event. We can then use a handler like the one below to handle the installation:

```js
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
```

So here we:

- Call {{domxref("Event.preventDefault()")}} to stop Chrome 67 and earlier from calling the install prompt automatically (this behavior changed in Chrome 68).
- Store the event object in the `deferredPrompt` variable so it can be used later on to perform the actual installation.
- Set the button to `display: block` so it appears in the UI for the user to click.
- Set a `click` handler for the button.

The click handler contains the following steps:

- Hide the button again with `display: none` — it is no longer needed once the app is installed.
- Use the `prompt()` method available on the `beforeinstallprompt` event object (stored in `deferredPrompt`) to trigger showing the install prompt.
- Respond to the user's interaction with the prompt using the `userChoice` property, again available on the `beforeinstallprompt` event object.
- Set `deferredPrompt` to null since it is no longer needed.

So when the button is clicked, the install prompt appears.

![](chrome-desktop-a2hs-banner.png)

If the user selects _Install_, the app is installed (available as standalone desktop app), and the Install button no longer shows (the `onbeforeinstallprompt` event no longer fires if the app is already installed). When you open the app, it will appear in its own window:

![](a2hs-installed-desktop.png)

If the user selects _Cancel_, the state of the app goes back to how it was before the button was clicked.

> **Note:** The code for this section was mostly taken from [App install banners/Add to Home Screen](https://developers.google.com/web/fundamentals/app-install-banners/) by Pete LePage.

## 関連情報

- [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)
- [Service Worker API](/ja/docs/Web/API/Service_Worker_API)
- [ウェブマニフェストリファレンス](/ja/docs/Web/Manifest)
- [App install banners](https://developers.google.com/web/fundamentals/app-install-banners/)

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}
