---
title: ホーム画面に追加
slug: Web/Progressive_web_apps/Add_to_home_screen
tags:
  - Manifest
  - PWA
  - Progressive web apps
  - Service Worker
  - a2hs
  - add to home screen
  - icon
translation_of: Web/Progressive_web_apps/Add_to_home_screen
---
<p class="summary">ホーム画面に追加 (または A2HS と略記) は最近のブラウザーで利用できる機能で、ユーザーがウェブアプリを「インストール」、すなわちお気に入りのウェブアプリケーション (またはウェブサイト) を表すショートカットを自分のホーム画面に追加することができるので、今後はこのショートカットを一回タップすればアクセスできるようになります。このガイドでは、 A2HS の使用方法と、ユーザーがこの機能を利用できるようにするために開発者として行う必要のあることについて説明します。</p>

<h2 id="Why_A2HS" name="Why_A2HS">なぜ A2HS か</h2>

<p>A2HS は<a href="/ja/docs/Web/Progressive_web_apps">プログレッシブウェブアプリ</a>の思想の一環となるよう考えられています。 — ウェブアプリにネイティブアプリと同等の使い勝手を与えることで、今日のエコシステム戦争に参戦できるものです。この部分はホーム画面のアイコンをタップするという簡単な操作でアプリを起動できるものであり、きちんとした独自のウィンドウに表示されます。 A2HS ではこれを実現します。</p>

<h2 id="What_browsers_support_A2HS" name="What_browsers_support_A2HS">A2HS に対応しているブラウザー</h2>

<p>A2HS は、 iOS webview を除いたすべてのモバイルブラウザーが対応しています。また、一部の Chromium ベースのデスクトップブラウザーも対応しています。<br>
 Firefox はモバイルでの対応を<a href="/ja/docs/Mozilla/Firefox/Releases/58#Other">v58 から</a>行っており、<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1407202">デスクトップでの対応</a>は作業中です。</p>

<p>正確な詳細は <a href="https://caniuse.com/#feat=web-app-manifest">caniuse.com</a> を参照してください。</p>

<h2 id="How_do_you_use_it" name="How_do_you_use_it">利用方法</h2>

<p>A2HSを説明するために最小構成のサンプルページを作成しました(デモページは<a href="https://mdn.github.io/pwa-examples/a2hs/">ここから</a>, ソースコードは <a href="https://github.com/mdn/pwa-examples/tree/master/a2hs">こちらから</a>)。このページ自体に大した機能はありませんが、ページを端末のホーム画面に追加してサービスワーカーのお陰でページをオフラインで使用可能にするために必要なコードが書かれています。このページは何枚かのキツネの写真を表示します。</p>

<p>もし Android 版 Firefox を使用可能であれば、それを使用して <code>https://mdn.github.io/pwa-examples/a2hs/</code> にあるデモに移動してみてください。キツネの写真を見ることができますが、もっと重要なのは、その中にプラス (+) アイコンを持つ "ホーム " のアイコンが表示されることです。 — これは、必要な機能が所定の場所にある任意のサイトのために表示される "ホーム画面に追加 "アイコンです。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15762/add-to-home-screen-icon.png" style="border-style: solid; border-width: 1px; display: block; height: 64px; margin: 0px auto; width: 500px;"></p>

<p>このボタンをタップすると、このページをホーム画面に追加するかどうかの確認バナーが表示されます。ここで大きな + <em>ADD TO HOME SCREEN</em> を選択するとウェブアプリがホーム画面に追加されます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15772/fx-a2hs-banner.png" style="border-style: solid; border-width: 1px; display: block; height: 421px; margin: 0px auto; width: 700px;"></p>

<p>もし Chrome をお使いの場合は操作方法がやや異なります。 Chrome では、ページを読み込むと自動的にホーム画面に追加するかどうかのポップアップが現れます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15771/chrome-a2hs-banner.png" style="border-style: solid; border-width: 1px; display: block; height: 421px; margin: 0px auto; width: 700px;"></p>

<div class="note">
<p><strong>注</strong>: Chrome でもバナーを表示したい場合は <a href="https://developers.google.com/web/fundamentals/app-install-banners/">Web App Install Banners</a> の記事が役立ちます。</p>
</div>

<p>このポップアップで「追加しない」を選んでしまったけれど、やっぱりインストールを行ないたい場合は Chrome のメニューを開いて「ホーム画面に追加」を押せば追加することができます。</p>

<p>ホーム画面に追加したウェブアプリは、どのブラウザーをお使いの場合でもフルネームではなく短縮名のほうで表示されます。これはほかのネイティブアプリの挙動と同じです。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15770/a2hs-on-home-screen.png" style="border-style: solid; border-width: 1px; display: block; height: 243px; margin: 0px auto; width: 400px;"></p>

<p>このアイコンをタップすると開きますが、全画面アプリとして開き、その周囲のブラウザー UI は表示されません。</p>

<h2 id="How_do_you_make_an_app_A2HS-ready" name="How_do_you_make_an_app_A2HS-ready">アプリを A2HS 対応にするには</h2>

<p>ウェブアプリをA2HS対応にするには、次の要件を満たしている必要があります。</p>

<ul>
 <li>ウェブアプリが HTTPS で配信されていること ― ウェブはいまよりセキュアなほうへ向かっており A2HS を含むモダンなウェブ技術はセキュアな通信の上でのみ動くようになっています。</li>
 <li>正しくフィールドが記入されたマニフェストファイルが含まれていて、それが HTML の &lt;head&gt; 部分にリンクされていること</li>
 <li>ホーム画面に追加した時に正しく表示されるように適切なアイコンが含まれていること</li>
 <li>Chrome は、追加でアプリがサービスワーカーを登録しておく必要があります (例えば、オフライン時に機能するように)。</li>
</ul>

<h3 id="Manifest" name="Manifest">マニフェスト</h3>

<p>マニフェストファイルは JSON 形式で書かれ、ウェブアプリ内のどこかに設置される必要があります (置き場所はルートディレクトリにするのがよいです)。またファイルの拡張子は <code>.webmanifest</code> にします。ここでは <code>manifest.webmanifest</code> といファイル名にしました。このファイルにはウェブアプリについての情報やどのような挙動をするのかについての設定が記されています。</p>

<div class="note">
<p><strong>注</strong>: 拡張子<code>.webmanifest</code> は W3C の<a href="/ja/docs/">WebAppManifestについてのドキュメント</a>の中の <a href="https://w3c.github.io/manifest/#media-type-registration">Media type registration</a> の節の中で定義されています。ただ、多くの場合ブラウザーは拡張子 <code>.json</code> マニフェストファイルをサポートしています。</p>
</div>

<p>A2HS に必要なフィールドは次の通りです。</p>

<ul>
 <li><code>background_color</code>: いくつかのアプリのコンテキストで使用する背景色を指定します。 A2HS に最も関連するのは、ホーム画面のアプリアイコンをタップして最初にロードを開始したときに表示されるスプラッシュ画面です (現在のところ、これは Chrome でアプリがホーム画面に追加されたときにのみ表示されます)。</li>
 <li><code>display</code>: アプリの表示方法を指定します。独立したアプリ (単なるウェブページではなく) のように見せるには、 <code>fullscreen</code> (UIが全く表示されない) や <code>standalone</code> (よく似ているが、ステータスバーなどのシステムレベルの UI 要素が表示される場合がある) などの値を選択してください。</li>
 <li><code>icons</code>: アプリをさまざまな場所 (タスク切り替えや肝心のホーム画面) など、で表示する際に使用するブラウザーのアイコンを指定します。今回のデモでは1つだけを含めました。</li>
 <li><code>name</code>/<code>short_name</code>: これらのフィールドは、異なる場所でアプリを表示する際に表示されるアプリ名を提供します。 <code>name</code> はアプリの完全な名前を提供し、 <code>short_name</code> は完全な名前を表示するためのスペースが不足している場合に使用される短縮名を提供します。アプリの名前が特に長い場合は、両方を指定することをお勧めします。</li>
 <li><code>start_url</code>: ホーム画面に追加したアプリが起動したときに読み込まれる資産へのパスを指定します。これは、サイトインデックスを指す相対 URL であり、マニフェストの URL からの相対 URL でなければならないことに注意してください。また、 Chrome ではインストールバナーを表示するのに必要ですが、 Firefox でプラス印の付いたホームのアイコンを表示するためは必要ではないことに注意してください。</li>
</ul>

<p>サンプルアプリのマニフェストは次のようになります。</p>

<pre class="brush: js notranslate">{
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
}</pre>

<h3 id="Appropriate_icon" name="Appropriate_icon">適切なアイコン</h3>

<p>As shown in the above manifest listing, we are including a 192 x 192 px icon for use in our app. You can include more sizes if you want; Android will choose the most appropriate size for each different use case. You could also decide to include different types of icons so devices can use the best one they are able to (e.g., Chrome already supports the WebP format).</p>

<p>Note that the <code>type</code> member in each icon's object specifies the icon's mimetype, so the browser can quickly read what type the icon is, and then ignore it and move to a different icon if it doesn't support it.</p>

<p>In terms of how to design the icon, you should follow the same best practices you'd follow for any Android icon (see the <a href="https://developer.android.com/guide/practices/ui_guidelines/icon_design.html">Android icon design guidelines</a>).</p>

<h3 id="Link_the_HTML_to_the_manifest" name="Link_the_HTML_to_the_manifest">HTML からマニフェストへリンクする</h3>

<p>To finish setting up your manifest, you need to reference it from the HTML of your application's home page:</p>

<pre class="brush: html notranslate">&lt;link rel="manifest" href="manifest.webmanifest"&gt;</pre>

<p>Browsers that support A2HS will know where to look for your manifest once this is in place.</p>

<h2 id="What_does_A2HS_not_give_you" name="What_does_A2HS_not_give_you">A2HS でできないこと</h2>

<p>Bear in mind that when you add an app to your Home screen, it just makes the app easily accessible — it doesn't download the app's assets and data to your device and make the app available offline, or anything like that. To make your app work offline, you have to use the <a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> to handle storing the assets offline, and if required, <a href="/ja/docs/Web/API/Web_Storage_API">Web storage</a> or <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> to store its data.</p>

<p>In our example app, we've just used a service worker to store all necessary files. The service worker is registered against the site with the final code block in the <code><a href="https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js">index.js</a></code> file. We then cache all the site's assets using the <a href="/ja/docs/Web/API/Cache">Cache API</a>, and serve them from the cache instead of the network using the code in the <a href="https://github.com/mdn/pwa-examples/blob/master/a2hs/sw.js">sw.js</a> file.</p>

<h2 id="A2HS_on_desktop" name="A2HS_on_desktop">デスクトップでの A2HS</h2>

<p>While originally intended to improve user experience on mobile OSes, there is movement to make PWAs installable on desktop platforms too.</p>

<div class="note">
<p><strong>Note</strong>: At the time of writing, the functionality described below was only supported in newer versions of Chrome — by default on Windows, and behind the <code>#enable-desktop-pwas</code> flag on macOS.</p>
</div>

<h3 id="Adding_an_install_button" name="Adding_an_install_button">インストールボタンの追加</h3>

<p>PWA インストール機能をデスクトップでも実現するには、まずインストールボタンをドキュメントに追加する必要があります。デスクトップではモバイル端末とは違い自動的にポップアップなどが出るわけではなくユーザーがトリガーを設定してやる必要があるのです。</p>

<pre class="brush: html notranslate">&lt;button class="add-button"&gt;ホーム画面に追加&lt;/button&gt;</pre>

<p>例えばこんなふうにデザインします。</p>

<pre class="brush: css notranslate">.add-button {
  position: absolute;
  top: 1px;
  left: 1px;
}</pre>

<h3 id="JavaScript_for_handling_the_install" name="JavaScript_for_handling_the_install">インストールを扱うための JavaScript</h3>

<p>At the bottom of our <a href="https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js"><code>index.js</code> file</a>, we added some JavaScript to handle the installation. First of all, we declare a <code>deferredPrompt</code> variable (which we'll explain later on), get a reference to our install button, and set it to <code>display: none</code> initially:</p>

<pre class="brush: js notranslate">let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';</pre>

<p>We hide the button initially because the PWA will not be available for install until it follows the A2HS criteria. When this happens, supporting browsers will fire a <code>beforeinstallprompt</code> event. We can then use a handler like the one below to handle the installation:</p>

<pre class="brush: js notranslate">window.addEventListener('beforeinstallprompt', (e) =&gt; {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) =&gt; {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) =&gt; {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});</pre>

<p>So here we:</p>

<ul>
 <li>Call {{domxref("Event.preventDefault()")}} to stop Chrome 67 and earlier from calling the install prompt automatically (this behavior changed in Chrome 68).</li>
 <li>Store the event object in the <code>deferredPrompt</code> variable so it can be used later on to perform the actual installation.</li>
 <li>Set the button to <code>display: block</code> so it appears in the UI for the user to click.</li>
 <li>Set a <code>click</code> handler for the button.</li>
</ul>

<p>The click handler contains the following steps:</p>

<ul>
 <li>Hide the button again with <code>display: none</code> — it is no longer needed once the app is installed.</li>
 <li>Use the <code>prompt()</code> method available on the <code>beforeinstallprompt</code> event object (stored in <code>deferredPrompt</code>) to trigger showing the install prompt.</li>
 <li>Respond to the user's interaction with the prompt using the <code>userChoice</code> property, again available on the <code>beforeinstallprompt</code> event object.</li>
 <li>Set <code>deferredPrompt</code> to null since it is no longer needed.</li>
</ul>

<p>So when the button is clicked, the install prompt appears.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16281/chrome-desktop-a2hs-banner.png" style="border-style: solid; border-width: 1px; display: block; height: 163px; margin: 0px auto; width: 300px;"></p>

<p>If the user selects <em>Install</em>, the app is installed (available as standalone desktop app), and the Install button no longer shows (the <code>onbeforeinstallprompt</code> event no longer fires if the app is already installed). When you open the app, it will appear in its own window:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16280/a2hs-installed-desktop.png" style="border-style: solid; border-width: 1px; display: block; height: 296px; margin: 0px auto; width: 500px;"></p>

<p>If the user selects <em>Cancel</em>, the state of the app goes back to how it was before the button was clicked.</p>

<div class="note">
<p><strong>Note</strong>: The code for this section was mostly taken from <a href="https://developers.google.com/web/fundamentals/app-install-banners/">App install banners/Add to Home Screen</a> by Pete LePage.</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Progressive_web_apps">プログレッシブウェブアプリ</a></li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
 <li><a href="/ja/docs/Web/Manifest">ウェブマニフェストリファレンス</a></li>
 <li><a href="https://developers.google.com/web/fundamentals/app-install-banners/">App install banners</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}</div>
