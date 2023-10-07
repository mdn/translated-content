---
title: ホーム画面に追加
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: 8e1f45b8c0a3671f6e3de43c0764ad610aa345dd
---

ホーム画面に追加 (または A2HS と略記) は最近のブラウザーで利用できる機能で、ユーザーがウェブアプリを「インストール」、すなわちお気に入りのウェブアプリケーション (またはウェブサイト) を表すショートカットを自分のホーム画面に追加することができるので、今後はこのショートカットを一回タップすればアクセスできるようになります。このガイドでは、 A2HS の使用方法と、ユーザーがこの機能を利用できるようにするために開発者として行う必要のあることについて説明します。

## なぜ A2HS か

A2HS は[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)の思想の一環となるよう考えられています。 — ウェブアプリにネイティブアプリと同等の使い勝手を与えることで、今日のエコシステム競争に参戦できるものです。この部分はホーム画面のアイコンをタップするという簡単な操作でアプリを起動できるものであり、きちんとした独自のウィンドウに表示されます。 A2HS ではこれを実現します。

## A2HS に対応しているブラウザー

A2HS は、 iOS webview を除いたすべてのモバイルブラウザーが対応しています。また、一部の Chromium ベースのデスクトップブラウザーも対応しています。

Firefox はモバイルでの対応を[v58 から](/ja/docs/Mozilla/Firefox/Releases/58#その他)行っています。

正確な詳細は [caniuse.com](https://caniuse.com/#feat=web-app-manifest) を参照してください。

## 利用方法

A2HS を説明するために最小構成のサンプルページを作成しました(デモページは[ここから](https://mdn.github.io/pwa-examples/a2hs/), ソースコードは [こちらから](https://github.com/mdn/pwa-examples/tree/master/a2hs))。このページ自体に大した機能はありませんが、ページを端末のホーム画面に追加してサービスワーカーのお陰でページをオフラインで使用可能にするために必要なコードが書かれています。このページは何枚かのキツネの写真を表示します。

もし Android 版 Firefox または Android 版 Chrome を使用可能であれば、それを使用して[デモ](https://mdn.github.io/pwa-examples/a2hs/)に移動してみてください（URL バーは Chrome では上端、 Firefox では下端に表示されます。）。

![URL バーメニューL](url_bar_menu.png)

URL バーの横にあるメニューを開きます。
使用しているのが Chrome であるか、 Android であるかによって、「インストール」または「アプリのインストール」というメニューが表示されます。
これが、必要な機能を備えているサイトに表示される「ホーム画面に追加」オプションです。

![アプリをインストールするオプション付きメニュー](menu_install_app.png)

> **メモ:** 古いバージョンのブラウザーでは、「ホーム」アイコンの中にプラス (+) アイコンが表示される場合があります。
> これは同じことを行います。
>
> ![ホーム画面に追加するアイコン（古いブラウザーで使用するもの）](add-to-home-screen-icon.png)

オプションを選択すると、アプリケーションをホーム画面に追加する処理が開始されます。

このプロセスは、ブラウザー、モバイル端末のオペレーティングシステム、さらには機器によって若干異なる場合があります。
例えば、 Google Pixel 3 で Android 上の Firefox を使用すると、 Pixel ランチャーが表示されます。

![Pixelランチャーでのアプリのインストール](pixel_launcher_add_app.png)

> **メモ:** Chrome のインストールバナーについては、[自分自身でウェブインストール体験を指定された方法](https://web.dev/customize-install/)の記事から、いろいろと調べることができます。

どのブラウザーで使用しているかにかかわらず、ホーム画面に追加することを選ぶと、ネイティブアプリと同じように、短いタイトルとともにアプリが表示されるのがわかります。

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

> **メモ:** 拡張子`.webmanifest` は W3C の[WebAppManifest についてのドキュメント](/ja/docs/)の中の [Media type registration](https://w3c.github.io/manifest/#media-type-registration) の節の中で定義されています。ただ、多くの場合ブラウザーは拡張子 `.json` マニフェストファイルをサポートしています。

A2HS に必要なフィールドは次の通りです。

- `background_color`: いくつかのアプリのコンテキストで使用する背景色を指定します。 A2HS に最も関連するのは、ホーム画面のアプリアイコンをタップして最初にロードを開始したときに表示されるスプラッシュ画面です (現在のところ、これは Chrome でアプリがホーム画面に追加されたときにのみ表示されます)。
- `display`: アプリの表示方法を指定します。独立したアプリ (単なるウェブページではなく) のように見せるには、 `fullscreen` (UI が全く表示されない) や `standalone` (よく似ているが、ステータスバーなどのシステムレベルの UI 要素が表示される場合がある) などの値を選択してください。
- `icons`: アプリをさまざまな場所 (タスク切り替えや肝心のホーム画面) など、で表示する際に使用するブラウザーのアイコンを指定します。今回のデモでは 1 つだけを含めました。
- `name`/`short_name`: これらのフィールドは、異なる場所でアプリを表示する際に表示されるアプリ名を提供します。 `name` はアプリの完全な名前を提供し、 `short_name` は完全な名前を表示するためのスペースが不足している場合に使用される短縮名を提供します。アプリの名前が特に長い場合は、両方を指定することをお勧めします。
- `start_url`: ホーム画面に追加したアプリが起動したときに読み込まれる資産へのパスを指定します。これは、サイトインデックスを指す相対 URL であり、マニフェストの URL からの相対 URL でなければならないことに注意してください。また、 Chrome ではインストールバナーを表示するのに必要ですが、 Firefox でプラス印の付いたホームのアイコンを表示するためは必要ではないことに注意してください。

サンプルアプリのマニフェストは次のようになります。

```json
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

上記のマニフェスト一覧に記載されているように、アプリを使用するために192 x 192 pxのアイコンを記載しています。必要に応じて、さらに多くのサイズを記載することができます。Android は、さまざまな用途に応じて最も適切なサイズを選択します。また、端末が最適なものを使用できるように、異なる種類のアイコンを記載することもできます（例: Chrome はすでに WebP 形式に対応しています）。

各アイコンのオブジェクトの `type` メンバがアイコンの MIME タイプを指定することに注意してください。これにより、ブラウザーはそのアイコンの種類をすばやく読み取り、対応していない場合はそれを無視して別のアイコンに移動することができます。

アイコンのデザイン方法については、他の Android のアイコンと同じ最善の手法に従うべきです（ [Google Play icon design specifications](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) を参照）。

### HTML からマニフェストへリンクする

マニフェストの設定を完了するには、アプリケーションのホームページの HTML からマニフェストを参照する必要があります。

```html
<link rel="manifest" href="manifest.webmanifest" />
```

A2HS に対応しているブラウザーは、これによってマニフェストがどこにあるかを把握することができます。

## A2HS でできないこと

ホーム画面にアプリを追加しても、それはアプリを簡単にアクセスできるようにするだけで、アプリの資産やデータを機器にダウンロードしたり、アプリをオフラインで利用できるようにしたりするようなことはしないことを覚えておいてください。アプリをオフラインで動作させるには、オフラインで資産を格納するために[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) を使用し、必要に応じて [ウェブストレージ](/ja/docs/Web/API/Web_Storage_API) や [IndexedDB](/ja/docs/Web/API/IndexedDB_API) を使用してそのデータを格納するようにしなければなりません。

この例のアプリでは、必要なファイルをすべて格納するためにサービスワーカーを使用しただけです。サービスワーカーは、 [`index.js`](https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js) ファイル内の最後のコードブロックで、サイトに対して登録されます。次に、[キャッシュ API](/ja/docs/Web/API/Cache) を使用してサイトのすべての資産をキャッシュし、 [sw.js](https://github.com/mdn/pwa-examples/blob/master/a2hs/sw.js) ファイルのコードを使用してネットワークの代わりにキャッシュからそれらを提供します。

## デスクトップでの A2HS

本来はモバイル OS での使い勝手を向上させるためのものですが、PWA をデスクトッププラットフォームにもインストールする動きが出てきてい ます。

> **メモ:** この説明の時点では、以下の機能は新しいバージョンのChromeでのみ対応しています。Windowsでは既定で、 macOS では `#enable-desktop-pwas` フラグの後ろで対応しています。

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

[`index.js` ファイル](https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js)の一番下に、インストールを処理するための JavaScript を追加しています。まず最初に、変数 `deferredPrompt` を宣言し（これについては後ほど説明します）、インストールボタンを参照し、最初は `display: none` に設定しています。

```js
let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";
```

PWA は A2HS の基準に従うことで、初めてインストールを利用できるようになるため、最初はボタンを非表示にしています。このとき、対応しているブラウザーは `beforeinstallprompt` イベントを発行します。そして、以下のようなハンドラーを使用して、インストールを処理することができます。

```js
window.addEventListener("beforeinstallprompt", (e) => {
  // Chrome 67以前のバージョンでプロンプトが自動的に表示されないようにする
  e.preventDefault();
  // 後で発生させることができるように、イベントを隠しておく。
  deferredPrompt = e;
  // ホーム画面に内側へ追加できることをユーザーに通知する UI の更新
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // A2HS ボタンを表示するユーザーインターフェイスを非表示にします。
    addBtn.style.display = "none";
    // プロンプトを表示
    deferredPrompt.prompt();
    // ユーザーがプロンプトに応答するのを待つ
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("ユーザーが A2HS プロンプトを受け入れました。");
      } else {
        console.log("ユーザーは A2HS のプロンプトを拒否しました。");
      }
      deferredPrompt = null;
    });
  });
});
```

すなわち、次のようにします。

- {{domxref("Event.preventDefault()")}} を呼び出すと、 Chrome 67 以前では自動的にインストールプロンプトを呼び出さなくなります（この動作は Chrome 68 で変更されました）。
- イベントオブジェクトを `deferredPrompt` 変数に格納し、後で実際のインストールを行う際に使用できるようにします。
- ボタンを `display: block` に設定し、ユーザーがクリックできるように UI に表示されるようにします。
- ボタンに `click` ハンドラーを設定します。

クリックハンドラーは以下のステップで構成されています。

- ボタンを `display: none` でもう一度隠します。アプリがインストールされたらもう必要ありません。
- インストールプロンプトを表示するトリガーとして、（`deferredPrompt` に格納された） `beforeinstallprompt` イベントオブジェクトで利用できる `prompt()` メソッドを使用します。
- 再び `beforeinstallprompt` イベントオブジェクトで使用できる `userChoice` プロパティを使用して、ユーザーとプロンプトの対話に応答します。
- もう必要ないので、 `deferredPrompt` を null に設定します。

そこで、ボタンをクリックすると、インストールを促すプロンプトが現れます。

![](chrome-desktop-a2hs-banner.png)

ユーザーが \[インストール] を選択すると、アプリはインストールされ（スタンドアロンのデスクトップアプリとして利用できます）、インストールボタンは表示されなくなります（アプリがすでにインストールされている場合は、 `onbeforeinstallprompt` イベントが発行されなくなります）。アプリを開くと、アプリは自分自身でウィンドウに表示されます。

![](a2hs-installed-desktop.png)

ユーザーが \[キャンセル] を選択すると、アプリの状態はボタンがクリックされる前の状態に戻ります。

> **メモ:** この章のコードは多くを [How to provide your own in-app install experience](https://web.dev/customize-install/) (Pete LePage) から引用しました。

## 関連情報

- [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [ウェブマニフェストリファレンス](/ja/docs/Web/Manifest)

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}
