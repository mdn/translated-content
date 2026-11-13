---
title: PWA をインストール可能にするには
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

このチュートリアルの前回のステップでは、サンプルアプリケーション [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) が[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)のおかげでオフラインでどのように動作するのかについて読みましたが、さらに一歩進んで、ユーザーがウェブアプリケーションを端末にインストールできるようにすることもできます。インストールされたウェブアプリケーションは、 OS ネイティブのアプリケーションと同様に、ユーザーによって起動することができます。この記事では、ウェブアプリケーションのマニフェストを使用してこれを実現する方法について説明します。

ウェブアプリマニフェストにより、ユーザーがブラウザーを開き、ブックマークを使用したりURLを入力してサイトに移動したりするのではなく、アプリを端末のホーム画面、タスクバー、ドックから直接起動できるようになります。ウェブアプリはネイティブアプリケーションと並んで表示されるため、ユーザーがアクセスしやすくなります。さらに、アプリを全画面モードまたはスタンドアロンモードで起動するように指定することもでき、これにより、そうでなければ存在するであろう既定のブラウザーのユーザーインターフェイスが除去され、よりシームレスでネイティブアプリのような感覚を作成することができます。

詳しくは [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)を参照してください。

## 要求事項

ウェブサイトをインストール可能にするには、以下のものが必要になります。

- [正しくフィールドが入力された](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#マニフェスト)ウェブマニフェスト
- 安全な (HTTPS) ドメインから提供されるウェブサイト
- 端末上のアプリを表すアイコン

### ウェブアプリマニフェストファイル

重要な要素はウェブアプリケーションマニフェストファイルです。 このファイルには、ウェブサイトに関するすべての情報が JSON 形式でリストされます。

通常、ウェブアプリのルートフォルダーに存在します。これには、アプリのタイトル、 OS 上でアプリを表現するために使用できる様々なサイズのアイコンへのパス (ホーム画面上のアイコン、スタートメニューの項目、デスクトップ上のアイコンなど)、読み込み中画面やスプラッシュ画面で使用する背景色などの有用な情報が含まれています。この情報は、ブラウザーがインストール処理中にウェブアプリを適切に表示したり、モバイル端末のホーム画面などの端末のアプリ起動インターフェイス内で表示したりするために必要です。

`js13kpwa.webmanifest` ファイルは [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) ウェブアプリのファイルで、 `index.html` ファイルの {{HTMLElement("head")}} ブロックに次のコード行を使用して含まれています。

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> 多くのウェブアプリマニフェストでは、コンテンツが JSON 構造で整理されているため、 `manifest.json` が使用されています。しかし、`.webmanifest` ファイル形式は [W3C マニフェスト仕様書](https://w3c.github.io/manifest/) (英語) で明示的に言及されており、ここではこれを使用します。

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

ほとんどのフィールドは一目瞭然です。前回示したコードサンプルに表示されているメンバーを説明します。

- `name`: ウェブアプリの正式な名前。
- `short_name`: ホーム画面に表示する省略した名前。
- `description`: アプリが何をするのかを説明する一つ二つの文章。
- `icons`: 一連のアイコン情報 — ソース URL、サイズ、種類。 ユーザーの端末に最適なものが選択されるように、少なくともいくつか含めるようにしてください。詳しくは[アプリのアイコンの定義](/ja/docs/Web/Progressive_web_apps/How_to/Define_app_icons)を参照してください。
- `start_url`: アプリの起動時に起動するインデックス文書。
- `display`: アプリの表示方法 — `fullscreen` (全画面), `standalone` (スタンドアロン), `minimal-ui` , `browser` (ブラウザー) のいずれかです。
- `theme_color`: テーマカラー — オペレーティングシステムで使用される UI の基本色です 。
- `background_color`: アプリの既定の背景色、インストール中およびスプラッシュ画面で使用します。

上記のフィールド以外にも使用できるフィールドがあります。 - 詳細については、必ず[ウェブアプリマニフェストリファレンス](/ja/docs/Web/Progressive_web_apps/Manifest)を確認してください。

## PWA のインストール

ウェブアプリマニフェストで得られる情報を使用して、対応しているブラウザーはユーザーにインストールを促すプロンプトを表示することができます。ユーザーが PWA を訪問すると、端末にインストールするよう促すプロンプトが表示されます。ユーザーがプロンプトを受け入れると、 PWA は他の OS ネイティブアプリと同様にインストールされ、ユーザーはウェブアプリを通常通り起動して使用することができます。

ユーザーが PWA をインストールする方法についてさらに学ぶには、[ウェブアプリのインストールとアンインストール](/ja/docs/Web/Progressive_web_apps/Guides/Installing)を参照してください。

### スプラッシュ画面

一部のブラウザーでは、マニフェストの情報からスプラッシュ画面も生成されます。 これは、 PWA が起動され読み込まれている間に表示されます。

![携帯電話のアプリのスプラッシュ画面の画面ショット。 すべて赤のページで、中央にアプリケーションのロゴ、その下に "js13kGames Progressive Web App" という名前付きです。](js13kpwa-splash.png)

この画面の作成には、アイコンとテーマカラーと背景色が使用されます。

## まとめ

この記事では、適切に構成されたウェブアプリマニフェストを使用して PWA をインストール可能にする方法と、ユーザーが端末に PWA をインストールする方法について学びました。

これで PWA チュートリアルの最後の段階に移ります。プッシュ通知を使用してユーザーに通知を共有し、ユーザーがアプリを再開するのを手伝っていただく方法です。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
