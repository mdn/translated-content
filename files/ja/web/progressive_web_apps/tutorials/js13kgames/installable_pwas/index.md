---
title: PWA をインストール可能にするには
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
---

{{PreviousMenuNext("Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}

前回の記事では、サンプルアプリケーション [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) が[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)によってオフラインで動作する方法を見てきましたが、さらに、対応しているモバイルブラウザーやデスクトップブラウザーでは、ウェブアプリをユーザーがインストールできるようにすることができます。インストールされたウェブアプリは、ネイティブアプリと同様にユーザーが起動することができます。 この記事では、ウェブアプリマニフェストと「ホーム画面に追加」と呼ばれる機能を使用して、これを実現する方法を説明します。

これらの技術により、ユーザーはブラウザーを開いてからブックマークを使ってサイトに移動したり、 URL を入力したりするのではなく、アプリを端末のホーム画面から直接起動することができます。ウェブアプリは、第一級市民としてネイティブアプリケーションの隣に座ることができます。さらに、アプリを全画面またはスタンドアロン モードで起動するように指定できるため、既定ののブラウザーのユーザーインターフェイスが削除され、よりシームレスでネイティブアプリに近い感覚が得られます。

## 要求事項

ウェブサイトをインストール可能にするには、以下のものが必要になります。

- [正しくフィールドが入力された](/ja/docs/Web/Progressive_web_apps/Add_to_home_screen#マニフェスト)ウェブマニフェスト
- 安全な (HTTPS) ドメインから提供されるウェブサイト
- 端末上のアプリを表すアイコン
- アプリをオフラインで動作させるために登録された[service worker](/ja/docs/Web/API/Service_Worker_API) (現時点では Android の Chrome にのみ必要です)

> **メモ:** 現在、サービスワーカーが必要なのは、 Chrome, Edge, Samsung Internet などの Chromium ベースのブラウザーのみです。Firefox を使ってアプリを開発する場合は、 Chromium ベースのブラウザーと互換性を持たせるためにサービスワーカーが必要になるので注意が必要です。

### マニフェストファイル

重要な要素はウェブマニフェストファイルです。 このファイルには、ウェブサイトに関するすべての情報が JSON 形式でリストされます。

通常、ウェブアプリのルートフォルダーに存在します。これには、アプリのタイトル、 OS 上でアプリを表現するために使用できる様々なサイズのアイコンへのパス (ホーム画面上のアイコン、スタートメニューの項目、デスクトップ上のアイコンなど)、読み込み中画面やスプラッシュ画面で使用する背景色などの有用な情報が含まれています。この情報は、ブラウザーがインストール処理中にウェブアプリを適切に表示したり、モバイル端末のホーム画面などの端末のアプリ起動インターフェイス内で表示したりするために必要です。

[js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) ウェブアプリの `js13kpwa.webmanifest` ファイルは、 `index.html` ファイルの {{HTMLElement("head")}} ブロックに次のコード行を使用して含まれています。

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> **メモ:** 過去にマニフェストに使用されてきた一般的な拡張機能がいくつかあります。 `manifest.webapp` は Firefox OS アプリのマニフェストで一般的でしたが、多くの場合、コンテンツは JSON 構造で編成されているためウェブマニフェストには `manifest.json` を使用します。 しかし、`.webmanifest` ファイル形式は [W3C マニフェスト仕様書](https://w3c.github.io/manifest/) (英語) で明示的に言及されており、ここでは使用するのはこれです。

ファイルの内容は次のようになります。

```json
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Progressive Web App that lists games submitted to the A-Frame category in the js13kGames 2017 competition.",
  "icons": [
    {
      "src": "icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    // ...
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/pwa-examples/js13kpwa/index.html",
  "display": "fullscreen",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

ほとんどのフィールドは一目瞭然ですが、念のため、以下のものと同じです。

- `name`: ウェブアプリの正式な名前。
- `short_name`: ホーム画面に表示する省略した名前。
- `description`: アプリが何をするのかを説明する一つ二つの文章。
- `icons`: 一連のアイコン情報 — ソース URL、サイズ、種類。 ユーザーの端末に最適なものが選択されるように、少なくともいくつか含めるようにしてください。
- `start_url`: アプリの起動時に起動する index 文書。
- `display`: アプリの表示方法 — `fullscreen` (全画面), `standalone` (スタンドアロン), `minimal-ui` , `browser` (ブラウザー) のいずれかです。
- `theme_color`: テーマカラー — オペレーティングシステムで使用される UI の基本色です 。
- `background_color`: アプリの既定の背景色、インストール中およびスプラッシュ画面で使用します。

最小限のウェブマニフェストには、少なくとも `name` と、1 つ以上のアイコンが定義された `icons` フィールドがなければなりません。アイコンには、少なくとも `src`, `size`, and `type` がなければなりません。それ以外はすべてオプションですが、`description`, `short_name`, `start_url` フィールドは推奨されます。上記のフィールド以外にも使用できるフィールドがあります。 - 詳細については、必ず[ウェブアプリマニフェストリファレンス](/ja/docs/Web/Manifest)を確認してください。

## ホーム画面に追加

「ホーム画面に追加」（Add to home screen、略して a2hs）は、モバイルブラウザーによって実装され、アプリのウェブマニフェストにある情報を取得して、それらを使用して端末のホーム画面上のアプリをアイコンと名前で表す機能です。 これは、上記のように、アプリが必要な要件をすべて満たしている場合にのみ機能します。

ユーザーがサポートしているモバイルブラウザーで PWA にアクセスすると、アプリを PWA としてインストールすることが可能であることを示す通知 (バナーやダイアログボックスなど) が表示されます。

![js13kPWA のホーム画面に追加のポップアップ。](js13kpwa-icon.png)

ユーザーがインストールを実行する意志を示したら、インストールバナーが表示されます。 そのバナーは、マニフェストファイルからの情報に基づいて、ブラウザーによって自動的に作成されます。例えば、プロンプトにはアプリの名前とアイコンが含まれています。

![js13kPWA のインストールバナー。](js13kpwa-banner.png)

ユーザーがボタンをクリックすると、アプリがどのように表示されるかを示し、間違いなくアプリを追加するかどうかをユーザーに選択させる最後のステップがあります。

![js13kPWA のホーム画面に追加のポップアップ。](js13kpwa-add.png)

確認すると、アプリがホーム画面にインストールされます。

![](js13kpwa-installed.png)

これでユーザーは、端末上の他のアプリケーションと同じようにウェブアプリを起動して使用することができるようになりました。端末やオペレーティングシステムによっては、ウェブアプリのアイコンにウェブアプリであることを示す小さなアイコンが付けられている場合があります。例えば、上のスクリーンショットでは、アプリには小さな Firefox のアイコンが付いており、 Firefox ランタイムを使用するウェブアプリであることを示しています。

### スプラッシュ画面

一部のブラウザーでは、マニフェストの情報からスプラッシュ画面も生成されます。 これは、 PWA が起動され読み込まれている間に表示されます。

![](js13kpwa-splash.png)

この画面の作成には、アイコンとテーマカラーと背景色が使用されます。

## まとめ

この記事では、適切に設定されたウェブマニフェストで PWA をインストール可能にする方法と、その後でブラウザーの「ホーム画面に追加」機能を使って PWA をインストールする方法について学びました。

a2hs の詳細については、必ず[ホーム画面に追加のガイド](/ja/docs/Web/Progressive_web_apps/Add_to_home_screen)をお読みください。 ブラウザーのサポートは現在、Android の Firefox 58 以降、Mobile Chrome および Android Webview 31 以降、および Android の Opera 32 以降に制限されていますが、近い将来に改善されるはずです。

それでは、PWA パズルの最後のピース、プッシュ通知を使用してユーザーとアナウンスを共有し、ユーザーがアプリに再び参加できるようにする方法に移りましょう。

{{PreviousMenuNext("Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}
