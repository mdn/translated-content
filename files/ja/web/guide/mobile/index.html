---
title: モバイルウェブ開発
slug: Web/Guide/Mobile
tags:
  - Intermediate
  - NeedsExample
translation_of: Web/Guide/Mobile
---
<p>このページでは、モバイル端末で適切に機能するウェブサイトを設計するために必要となる、主要な一部のテクニックの概要を説明します。 Mozilla の Firefox OS プロジェクトに関する情報を探している場合は、 <a href="/ja/docs/Mozilla/Firefox_OS">Firefox OS</a> のページを参照してください。または、 <a href="/ja/docs/Mozilla/Firefox_for_Android">Android 版 Firefox</a> に興味があるかもしれません。</p>

<p><a href="#designing_for_mobile_devices">モバイル端末向けの設計</a>と<a href="#cross-browser_development">ブラウザー間の互換性</a>の2つの節に整理しました。また、 Jason Grlicky によるウェブ開発者向けの<a href="/ja/docs/Web/Guide/Mobile/Mobile-friendliness">モバイルへの親和性</a>のガイドも参照してください。</p>

<h2 id="Designing_for_mobile_devices">モバイル端末向けの設計</h2>

<p>モバイル端末は、デスクトップパソコンやノートパソコンと比較して、ハードウェアの特性がまったく異なります。画面は通常、明らかに小さくなりますが、ユーザーが端末を回転させると、画面の向きがポートレートモードとランドスケープモードの間で自動的に切り替わります。通常、ユーザー入力用のタッチスクリーンがあります。位置情報や画面の向きなどの API は、デスクトップでは未対応であったりあまり有用でなかったりしますので、これらの API はモバイルユーザーに、サイトと対話するための新しい方法を提供します。</p>

<h3 id="Working_with_small_screens">小さな画面での作業</h3>

<p><a href="/ja/docs/Web/Progressive_web_apps">レスポンシブウェブデザイン</a>は、ウェブサイトのレイアウトを表示する環境 — 特に、大きさと画面の向き — の変化に合わせることができる一連の技術を表す用語です。これには次のような技術が含まれています。</p>

<ul>
 <li>流動的 CSS レイアウトにより、ブラウザーの大きさが変化したときにページを円滑に合わせる</li>
 <li><a href="/ja/docs/Web/CSS/Media_queries">メディアクエリ</a>を使用して、端末の画面の<a href="/ja/docs/Web/CSS/@media/width">幅</a>と<a href="/ja/docs/Web/CSS/@media/height">高さ</a>にふさわしい CSS の規則を条件付きで含める</li>
</ul>

<p><a href="/ja/docs/Mozilla/Mobile/Viewport_meta_tag">viewport メタタグ</a>で、ブラウザーに対してユーザーの端末の適切な表示倍率でサイトを表示するよう指示します。</p>

<h3 id="Working_with_touch_screens">タッチ画面での操作</h3>

<p>タッチ画面を使うには、 <a href="/ja/docs/Web/API/Touch_events">DOM タッチイベント</a>の作業をする必要があります。 CSS の {{cssxref(":hover")}} 擬似クラスを使用することはできないでしょうし、指はマウスポインターより太いという事実を考慮して、クリック可能なアイテムをボタンのようにデザインする必要があるでしょう。この記事、 <a href="https://web.archive.org/web/20150520130912/http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/">designing for touch screens</a> を参照してください。</p>

<p><a href="/ja/docs/Web/CSS/@media/pointer">pointer</a> または <a href="/ja/docs/Web/CSS/@media/any-pointer">any-pointer</a> メディアクエリを使用して、タッチ可能な端末で異なる CSS を読み込むことができます。</p>

<h3 id="Optimizing_images">画像の最適化</h3>

<p>端末の帯域幅が低かったり高価だったりするユーザーを支援するために、デバイスの画面サイズと解像度に適した画像をロードして画像を最適化することができます。 CSS でこれを行うには、画面の<a href="/ja/docs/Web/CSS/@media/height">高さ</a>、<a href="/ja/docs/Web/CSS/@media/width">幅</a>、<a href="/ja/docs/Web/CSS/@media/resolution">ピクセル比</a>でクエリを行います。</p>

<p>CSS プロパティを使用して、画像を使用せずに<a href="/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients">グラデーション</a>や<a href="/ja/docs/Web/CSS/box-shadow">影</a>などの視覚効果を実装することもできます。</p>

<h3 id="Mobile_APIs">モバイル API</h3>

<p>最後に、<a href="/ja/docs/Web/API/Detecting_device_orientation">端末の向き</a>や<a href="/ja/docs/Web/API/Geolocation_API">位置情報</a>など、モバイル端末が提供する新しい可能性の利点を活用することができます。</p>

<h2 id="Cross-browser_development">クロスブラウザー開発</h2>

<h3 id="Write_cross-browser_code">クロスブラウザーコードを書く</h3>

<p>様々なモバイル端末で受け入れられ動作するウェブサイトを作成するには、以下のことが必要です。</p>

<ul>
 <li>ベンダー接頭辞のついた CSS プロパティなど、ブラウザーに依存した機能を使用することを避けるようにしてください。</li>
 <li>これらの機能を使用する必要がある場合は、他のブラウザーがこれらの機能を独自に実装しているかを調べ、それも対象にします。</li>
 <li>ブラウザーがそれらの機能に対応していない場合は、利用可能な代替機能を提供してください。</li>
</ul>

<p>例えば、一部のテキストに背景としてグラデーションを、 <code>-webkit-linear-gradient</code> のようなベンダー接頭辞の付いたプロパティを使用して設定する場合、最も良いのは {{cssxref("linear-gradient()")}} プロパティの他のベンダー接頭辞が付いたものを含めることです。それを行わない場合は、少なくとも既定の背景がテキストとコントラストが付いていることを確認してください。つまり、ページが少なくとも <code>linear-gradient</code> 規則の対象外のブラウザーで利用できるようにします。</p>

<p>この <a href="/ja/docs/Web/CSS/Mozilla_Extensions">Gecko 固有のプロパティの一覧</a>と、この <a href="/ja/docs/Web/CSS/WebKit_Extensions">WebKit 固有のプロパティの一覧</a>、そして Peter Beverloo の <a href="http://peter.sh/experiments/vendor-prefixed-css-property-overview/">table of vendor-specific properties</a> を参照してください。</p>

<p><a href="http://csslint.net/">CSS Lint</a> などのツールを使用すると、コード内のこのような問題を探すのに役立ちますし、 <a href="http://sass-lang.com/">SASS</a> や <a href="http://lesscss.org/">LESS</a> などのプリプロセッサーを使用すると、クロスブラウザーのコードを生成するのに役立つことがあります。</p>

<h3 id="Take_care_with_user_agent_sniffing">ユーザーエージェントの推測に注意</h3>

<p>以上のような手法を使用して、ウェブサイトが画面の大きさやタッチ画面などといった特定の端末特性を検出し、それに適応することが望ましい形です。しかし、これは非現実的である場合があり、ウェブサイトがブラウザーのユーザーエージェント文字列を解析して、デスクトップ、タブレット、携帯電話を区別し、端末ごとに異なるコンテンツを提供することに手を出しがちです。</p>

<p>これを行う場合は、アルゴリズムが正しく、特定のブラウザーのユーザーエージェント文字列を理解していないために、間違った種類のコンテンツをデバイスに提供していないことを確認してください。<a href="/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile.2c_tablet_or_desktop">ユーザーエージェント文字列を使用して端末の種類を決定するガイド</a>を参照してください。</p>

<h3 id="Test_on_multiple_browsers">複数のブラウザーでのテストTest on multiple browsers</h3>

<p>ウェブサイトを複数のブラウザーでテストしてください。これは複数のプラットフォームでテストをするということです。 — 少なくとも iOS と Android です。</p>

<ul>
 <li>iPhone のモバイル Safari をテストするには、 <a class="link-https" href="https://developer.apple.com/devcenter/ios/index.action">iOS シミュレーター</a>を使用します</li>
 <li>Opera や Firefox は <a class="link-https" href="https://developer.android.com/sdk/index.html">Android SDK</a> でテストします。これらの詳しい操作方法は、 <a class="link-https" href="https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator">running Firefox for Android using the Android emulator</a> を参照してください。</li>
</ul>
