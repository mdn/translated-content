---
title: PWA をインストール可能にするには
slug: Web/Progressive_web_apps/Installable_PWAs
tags:
  - PWA
  - a2hs
  - js13kGames
  - インストール可能
  - ホーム画面に追加
  - 進歩的ウェブアプリ
translation_of: Web/Progressive_web_apps/Installable_PWAs
---
<div>{{PreviousMenuNext("Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}</div>

<p class="summary">前回の記事では、サンプルアプリケーション <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> が<a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカー</a>によってオフラインで動作する方法を見てきましたが、さらに、対応しているモバイルブラウザーやデスクトップブラウザーでは、ウェブアプリをユーザーがインストールできるようにすることができます。インストールされたウェブアプリは、ネイティブアプリと同様にユーザーが起動することができます。 この記事では、ウェブアプリマニフェストと「ホーム画面に追加」と呼ばれる機能を使用して、これを実現する方法を説明します。</p>

<p>これらの技術により、ユーザーはブラウザーを開いてからブックマークを使ってサイトに移動したり、 URL を入力したりするのではなく、アプリを端末のホーム画面から直接起動することができます。ウェブアプリは、第一級市民としてネイティブアプリケーションの隣に座ることができます。さらに、アプリを全画面またはスタンドアロン モードで起動するように指定できるため、既定ののブラウザーのユーザーインターフェイスが削除され、よりシームレスでネイティブアプリに近い感覚が得られます。</p>

<h2 id="Requirements" name="Requirements">要求事項</h2>

<p>ウェブサイトをインストール可能にするには、以下のものが必要になります。</p>

<ul>
 <li><a href="/ja/docs/Web/Progressive_web_apps/Add_to_home_screen#Manifest">正しくフィールドが入力された</a>ウェブマニフェスト</li>
 <li>安全な (HTTPS) ドメインから提供されるウェブサイト</li>
 <li>端末上のアプリを表すアイコン</li>
 <li>アプリをオフラインで動作させるために登録された<a href="/ja/docs/Web/API/Service_Worker_API">service worker</a> (現時点では Android の Chrome にのみ必要です)</li>
</ul>

<div class="blockIndicator note">
<p>現在、サービスワーカーが必要なのは、 Chrome, Edge, Samsung Internet などの Chromium ベースのブラウザーのみです。Firefox を使ってアプリを開発する場合は、 Chromium ベースのブラウザーと互換性を持たせるためにサービスワーカーが必要になるので注意が必要です。</p>
</div>

<h3 id="The_manifest_file" name="The_manifest_file">マニフェストファイル</h3>

<p>重要な要素はウェブマニフェストファイルです。 このファイルには、ウェブサイトに関するすべての情報が JSON 形式でリストされます。</p>

<p>通常、ウェブアプリのルートフォルダーに存在します。これには、アプリのタイトル、 OS 上でアプリを表現するために使用できる様々なサイズのアイコンへのパス (ホーム画面上のアイコン、スタートメニューの項目、デスクトップ上のアイコンなど)、読み込み中画面やスプラッシュ画面で使用する背景色などの有用な情報が含まれています。この情報は、ブラウザーがインストール処理中にウェブアプリを適切に表示したり、モバイル端末のホーム画面などの端末のアプリ起動インターフェイス内で表示したりするために必要です。</p>

<p><a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> ウェブアプリの <code>js13kpwa.webmanifest</code> ファイルは、 <code>index.html</code> ファイルの {{HTMLElement("head")}} ブロックに次のコード行を使用して含まれています。</p>

<pre class="brush: html notranslate">&lt;link rel="manifest" href="js13kpwa.webmanifest"&gt;</pre>

<div class="note">
<p>過去にマニフェストに使用されてきた一般的な拡張機能がいくつかあります。 <code>manifest.webapp</code> は Firefox OS アプリのマニフェストで一般的でしたが、多くの場合、コンテンツは JSON 構造で編成されているためウェブマニフェストには <code>manifest.json</code> を使用します。 しかし、<code>.webmanifest</code> ファイル形式は <a href="https://w3c.github.io/manifest/">W3C マニフェスト仕様書</a> (英語) で明示的に言及されており、ここでは使用するのはこれです。</p>
</div>

<p>ファイルの内容は次のようになります。</p>

<pre class="brush: json notranslate">{
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
</pre>

<p>ほとんどのフィールドは一目瞭然ですが、念のため、以下のものと同じです。</p>

<ul>
 <li><code>name</code>: ウェブアプリの正式な名前。</li>
 <li><code>short_name</code>: ホーム画面に表示する省略した名前。</li>
 <li><code>description</code>: アプリが何をするのかを説明する一つ二つの文章。</li>
 <li><code>icons</code>: 一連のアイコン情報 — ソース URL、サイズ、種類。 ユーザーの端末に最適なものが選択されるように、少なくともいくつか含めるようにしてください。</li>
 <li><code>start_url</code>: アプリの起動時に起動する index 文書。</li>
 <li><code>display</code>: アプリの表示方法 — <code>fullscreen</code> (全画面), <code>standalone</code> (スタンドアロン), <code>minimal-ui</code> , <code>browser</code> (ブラウザー) のいずれかです。</li>
 <li><code>theme_color</code>: テーマカラー — オペレーティングシステムで使用される UI の基本色です 。</li>
 <li><code>background_color</code>: アプリの既定の背景色、インストール中およびスプラッシュ画面で使用します。</li>
</ul>

<p>最小限のウェブマニフェストには、少なくとも <code>name</code> と、1つ以上のアイコンが定義された <code>icons</code> フィールドがなければなりません。アイコンには、少なくとも <code>src</code>, <code>size</code>, and <code>type</code> がなければなりません。それ以外はすべてオプションですが、<code>description</code>, <code>short_name</code>, <code>start_url</code> フィールドは推奨されます。上記のフィールド以外にも使用できるフィールドがあります。 - 詳細については、必ず<a href="/ja/docs/Web/Manifest">ウェブアプリマニフェストリファレンス</a>を確認してください。</p>

<h2 id="Add_to_home_screen" name="Add_to_home_screen">ホーム画面に追加</h2>

<p>「ホーム画面に追加」（Add to home screen、略して a2hs）は、モバイルブラウザーによって実装され、アプリのウェブマニフェストにある情報を取得して、それらを使用して端末のホーム画面上のアプリをアイコンと名前で表す機能です。 これは、上記のように、アプリが必要な要件をすべて満たしている場合にのみ機能します。</p>

<p>ユーザーがサポートしているモバイルブラウザーで PWA にアクセスすると、アプリを PWA としてインストールすることが可能であることを示す通知 (バナーやダイアログボックスなど) が表示されます。</p>

<p><img alt="js13kPWA のホーム画面に追加のポップアップ。" src="https://mdn.mozillademos.org/files/15928/js13kpwa-icon.png" style="border-style: solid; border-width: 1px; display: block; height: 640px; margin: 0px auto; width: 360px;"></p>

<p>ユーザーがインストールを実行する意志を示したら、インストールバナーが表示されます。 そのバナーは、マニフェストファイルからの情報に基づいて、ブラウザーによって自動的に作成されます。例えば、プロンプトにはアプリの名前とアイコンが含まれています。</p>

<p><img alt="js13kPWA のインストールバナー。" src="https://mdn.mozillademos.org/files/15927/js13kpwa-banner.png" style="border-style: solid; border-width: 1px; display: block; height: 640px; margin: 0px auto; width: 360px;"></p>

<p>ユーザーがボタンをクリックすると、アプリがどのように表示されるかを示し、間違いなくアプリを追加するかどうかをユーザーに選択させる最後のステップがあります。</p>

<p><img alt="js13kPWA のホーム画面に追加のポップアップ。" src="https://mdn.mozillademos.org/files/15926/js13kpwa-add.png" style="border-style: solid; border-width: 1px; display: block; height: 640px; margin: 0px auto; width: 360px;"></p>

<p>確認すると、アプリがホーム画面にインストールされます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15834/js13kpwa-installed.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>これでユーザーは、端末上の他のアプリケーションと同じようにウェブアプリを起動して使用することができるようになりました。端末やオペレーティングシステムによっては、ウェブアプリのアイコンにウェブアプリであることを示す小さなアイコンが付けられている場合があります。例えば、上のスクリーンショットでは、アプリには小さな Firefox のアイコンが付いており、 Firefox ランタイムを使用するウェブアプリであることを示しています。</p>

<h3 id="Splash_screen" name="Splash_screen">スプラッシュ画面</h3>

<p>一部のブラウザーでは、マニフェストの情報からスプラッシュ画面も生成されます。 これは、 PWA が起動され読み込まれている間に表示されます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15835/js13kpwa-splash.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>この画面の作成には、アイコンとテーマカラーと背景色が使用されます。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>この記事では、適切に設定されたウェブマニフェストで PWA をインストール可能にする方法と、その後でブラウザーの「ホーム画面に追加」機能を使って PWA をインストールする方法について学びました。</p>

<p>a2hs の詳細については、必ず<a href="/ja/docs/Web/Progressive_web_apps/Add_to_home_screen">ホーム画面に追加のガイド</a>をお読みください。 ブラウザーのサポートは現在、Android の Firefox 58 以降、Mobile Chrome および Android Webview 31 以降、および Android の Opera 32 以降に制限されていますが、近い将来に改善されるはずです。</p>

<p>それでは、PWA パズルの最後のピース、プッシュ通知を使用してユーザーとアナウンスを共有し、ユーザーがアプリに再び参加できるようにする方法に移りましょう。</p>

<p>{{PreviousMenuNext("Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}</p>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}</p>
