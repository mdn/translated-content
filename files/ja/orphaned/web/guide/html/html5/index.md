---
title: HTML5
slug: orphaned/Web/Guide/HTML/HTML5
original_slug: Web/Guide/HTML/HTML5
---

HTML5 は [HTML](/ja/docs/HTML) で定義されている最新の標準仕様の名称です。この用語は、 2 つの異なる概念を表しています。これは HTML 言語の新しいバージョンであり、新しい要素、属性、動作、**および**より多彩でパワフルなウェブサイトやアプリケーションを構築することができるより大きな一連の技術でもあります。このセットは HTML5 & friends と呼ばれることがあり、よく HTML5 と短縮されます。

このリファレンスは、すべてのオープンウェブ開発者に便利になるように設計されており、機能に基づいていくつかのグループに分類された数多くの HTML5 の技術についてのリソースにリンクしています。

- _Semantics_: そのコンテンツが何であるかをよりはっきりと表現することを可能にします。
- _Connectivity_: 新しい革新的な方法でサーバーと通信することができます。
- _Offline and storage_: ウェブページがクライアント側にローカルにデータを格納し、より効率的にオフライン操作をできるようにします。
- _Multimedia_: 動画と音声をオープンウェブの第一級市民にします。
- _2D/3D graphics and effects_: はるかに広い多彩な範囲のプレゼンテーションオプションを可能にします。
- _Performance and integration_: より速度の最適化を行い、コンピューターのハードウェアをより活用します。
- _Device access_: より多彩な入力および出力機器の使用を可能にします。
- _Styling_: もっと洗練されたテーマを書けるようにします。

## ![](/files/3827/HTML5_Semantics_512.png)Semantics

- [HTML5 のセクションとアウトライン](/ja/docs/Sections_and_Outlines_of_an_HTML5_document)
  - : HTML5 ではアウトラインとセクションに関する要素が追加されました。 {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}
- [HTML5 の audio 要素と video 要素の利用](/ja/docs/Using_HTML5_audio_and_video)
  - : {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素はマルチメディアコンテンツの埋め込みや操作を可能にします。
- [フォームの改善](/ja/docs/Learn/HTML/Forms)
  - : HTML5 ではウェブフォームに様々な改善が施されています。制約バリデーション API、多数の新しい属性、 {{HTMLElement("input")}} 要素の属性の新しい {{htmlattrxref("type", "input")}} の値の追加。そして新要素として {{HTMLElement("output")}} が追加されています。
- 新しいセマンティック要素
  - : セクション、メディア、フォーム要素のほかに、 {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, {{HTMLElement("figcaption")}}, {{HTMLElement("data")}}, {{HTMLElement("time")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} あるいは {{HTMLElement("meter")}} のような多くの新しい要素、[妥当な HTML5 の要素](/ja/docs/Web/HTML/HTML5/HTML5_element_list)はますます増えています。
- {{HTMLElement("iframe")}} の改善
  - : {{htmlattrxref("sandbox", "iframe")}}, {{htmlattrxref("srcdoc", "iframe")}} 属性を使用することで、著者は今やセキュリティレベルを明確にし、望まれた {{HTMLElement("iframe")}} 要素の描画が可能となりました。
- [MathML](/ja/docs/MathML)
  - : HTML 文書に数式を直接埋め込むことができます。
- [HTML5 の紹介](/ja/docs/HTML/HTML5/Introduction_to_HTML5)
  - : この記事では、ウェブデザインやウェブアプリケーションでの HTML5 の利用方法を紹介します。
- [HTML5 リファレンスガイド](https://hostingcanada.org/html-cheat-sheet/)
  - : マークアップ作成ツール、コード例、ウェブ開発者ツールを含む HTML5 のクイックリファレンスシートです。このガイドは利用やアクセスがしやすいようにダウンロードできます。このページは W3C の支援によって、 HTML5 を使用した基本的な親しみやすさと経験のために作成されました。
- [ダウンロード可能な HTML5 ガイド](https://websitesetup.org/html5-cheat-sheet/)
  - : HTML5 のクイックガイドで、よくある HTML タグと新しい HTML5 のタグを含みます。 Downloadable in PDF and PNG formats.
- [HTML5 虎の巻](https://www.wpkube.com/html5-cheat-sheet/)
  - : HTML 5、要素、イベント属性、互換性をマスターしたいと思う初心者向けの HTML 5 の小さな虎の巻です。
- [HTML5 準拠のパーサー](/ja/docs/HTML/HTML5/HTML5_Parser)
  - : HTML 文書のバイト列を DOM に変換するパーサーは拡張され、妥当ではない HTML に直面したときも含め、すべての場合で使用する振る舞いを詳細に定義されるようになりました。これによって、予測可能性や、 HTML5 準拠のブラウザー間で相互運用性が格段に高まりました。

## ![](/files/3839/HTML5_Connectivity_512.png)Connectivity

- [Web Socket](/ja/docs/WebSockets)
  - : Web Socket はページとサーバーが永続的な接続を作成し、 HTML ではないデータを交換することを可能にします 。
- [Server-sent event](/ja/docs/Server-sent_events/Using_server-sent_events)
  - : サーバーがクライアントからのリクエストに対するレスポンスとしてのみデータを送ることができたという、古典的な枠組みより、サーバーがクライアントにイベントを送出することが可能になります。
- [WebRTC](/ja/docs/WebRTC)
  - : この RTC (Real-Time Communication) という技術によって、プラグインや外部のアプリケーション無しに、ブラウザで直接、他者に接続して、テレビ会議を操作することが可能になります。

## ![](/files/3833/HTML5_Offline_Storage_512.png)Offline & storage

[オフラインリソース: アプリケーションキャッシュ](/ja/docs/HTML/Using_the_application_cache)

<dl><dd>Firefox は HTML5 のオフラインリソースの仕様に完全に対応しています。その他のほとんどのブラウザーは、ある程度のレベルでオフラインリソースに対応しています。</dd><dt><a href="/ja/docs/Online_and_offline_events" title="Online_and_offline_events">オンラインおよびオフラインのイベント</a></dt><dd>Firefox 3 は WHATWG の、アプリケーションや拡張機能にアクティブなインターネット接続があるかどうかを検出させ、接続の成功やダウンも検出する、オンラインおよびオフラインのイベントをサポートしています。</dd><dt><a href="/ja/docs/DOM/Storage" title="DOM/Storage">WHATWG のクライアントサイドセッションと、 DOM Storage として知られる永続的なストレージ</a></dt><dd>クライアントサイドセッションと永続的なストレージは、ウェブアプリケーションが、構築されたデータをクライアントサイドに保存することを可能とします。</dd><dt><a href="/ja/docs/IndexedDB" title="IndexedDB">IndexedDB</a></dt><dd>IndexedDB は、インデックスを使って、ブラウザーで大量に構造化されたデータの保存と、このデータの高性能な検索のためのウェブ標準です。</dd><dt><a href="/ja/docs/Using_files_from_web_applications" title="Using_files_from_web_applications">ウェブアプリケーションからファイルを扱う</a></dt><dd>新しい HTML5 File API のサポートが Gecko に加えられており、ウェブアプリケーションはユーザーによって選択されたローカルファイルにアクセスすることができるようになっています。これは、<strong><a href="/ja/docs/HTML/Element/Input#attr-type" title="/ja/docs/HTML/Element/input#attr-type">type</a></strong> が <code>file</code> である <span style="font-family: monospace;">{{HTMLElement("input")}} </span>HTML 要素の新しい <strong><a href="/ja/docs/HTML/Element/Input#attr-multiple" title="/ja/docs/HTML/Element/input#attr-multiple">multiple</a></strong> 属性を使った、複数のファイル選択のサポートを含みます。 <a href="/ja/docs/DOM/FileReader" title="DOM/FileReader"><code>FileReader</code></a> もあります。</dd></dl>

## ![](/files/3835/HTML5_Multimedia_512.png)Multimedia

- [HTML5 の audio 要素 と video 要素の利用](/ja/docs/Using_HTML5_audio_and_video)
  - : {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素はマルチメディアコンテンツの埋め込みと操作を可能にします。
- [WebRTC](/ja/docs/WebRTC)
  - : この RTC (Real-Time Communication) という技術によって、プラグインや外部のアプリケーション無しに、ブラウザで直接、他者に接続して、テレビ会議を操作することが可能になります。
- [Camera API の利用](/ja/docs/DOM/Using_the_Camera_API)
  - : コンピューターのカメラの使用、操作、およびカメラ画像を格納することができます。
- Track and WebVTT
  - : {{HTMLElement("track")}} 要素は字幕とチャプターを可能にします。 [WebVTT](/ja/docs/HTML/WebVTT) はテキストトラックフォーマットです。

## ![](/files/3841/HTML5_3D_Effects_512.png)2D/3D graphics AND effects

- [Canvas チュートリアル](/ja/docs/Canvas_tutorial)
  - : 新しい {{HTMLElement("canvas")}} `要素についてと、 Firefox でどのようにグラフや他のオブジェクトを描画するかを学習します。
- [HTML5 text API for `<canvas>` elements](/ja/docs/Drawing_text_using_a_canvas)
  - : HTML5 の text API が {{HTMLElement("canvas")}} 要素によってサポートされます。
- [WebGL](/ja/docs/WebGL)
  - : WebGL は、 HTML5 の {{HTMLElement("canvas")}} 要素で利用できる、OpenGL ES 2.0 に厳密に従った API を提供することで、 3D グラフィックスを Web にもたらします。
- [SVG](/ja/docs/SVG)
  - : ベクター画像の XML ベースのフォーマット。HTML5 では SVG を直接文書に埋め込む事が可能になりました。

## ![](/files/3831/HTML5_Performance_512.png)Performance and Integration

- [Web Worker](/ja/docs/DOM/Using_web_workers)
  - : JavaScript の評価をバックグラウンドのスレッドに委譲することを可能にして、これらの動作がインタラクティブなイベントを低速にすることを防ぐことを可能にします。
- [`XMLHttpRequest`](/ja/docs/DOM/XMLHttpRequest) Level 2
  - : ページのいくつかのパーツの非同期に取得することを可能にして、時間とユーザーのアクションによって変化する、動的なコンテンツを表示することを可能とします。これは [Ajax](/ja/docs/AJAX) の背後にある技術です。
- JIT-compiling JavaScript engines
  - : 新世代 の JavaScript エンジンは以前よりはるかに強力で、パフォーマンスの向上を導きます。
- [History API](/ja/docs/DOM/Manipulating_the_browser_history)
  - : ブラウザーの閲覧履歴の操作ができます。特に対話的に新しい情報を読み込むページに於いて有益な API です。
- [contentEditable 属性で、あなたのウェブサイトが wiki に変身！](/ja/docs/HTML/Content_Editable)
  - : HTML5 は contentEditable 属性を標準化しました。この機能についてより学びます。
- [ドラッグ＆ドロップ API](/ja/docs/DragDrop/Drag_and_Drop)
  - : HTML5 の ドラッグ＆ドロップ API は、ウェブサイト内部あるいはウェブサイト間の、アイテムのドラッグ及びドロップのサポートを可能にします。これはまた、拡張機能や Mozilla ベースのアプリケーションで使用するための、よりシンプルな API 提供します。
- [HTML でのフォーカスの管理](/ja/docs/Focus_management_in_HTML)
  - : 新しい HTML5 の `activeElement` と `hasFocus` 属性がサポートされています。
- [Web ベースのプロトコルハンドラー](/ja/docs/Web-based_protocol_handlers)
  - : `navigator.registerProtocolHandler()` メソッドを使って、ウェブアプリケーションをプロトコルのハンドラーとして登録することができます。
- [requestAnimationFrame](/ja/docs/Web/API/Window/requestAnimationFrame)
  - : アニメーションのレンダリングのに最適なチューニングが施された新しいメソッド。
- [Fullscreen API](/ja/docs/DOM/Using_full-screen_mode)
  - : ブラウザの UI を表示せずに、ウェブページやアプリケーションがスクリーン全体の使用を制御します。
- [Pointer Lock API](/ja/docs/API/Pointer_Lock_API)
  - : ゲームや類似したアプリケーションが、ポインタがウィンドウの境界に達したときにフォーカスを失わないように、コンテンツにポインタをロックすることを可能にします。
- [オンラインおよびオフラインのイベント](/ja/docs/Online_and_offline_events)
  - : オフラインで有能な良い Web アプリケーションを構築するため、アプリケーションが実際にオフラインであるときのことを知る必要があります。ついでに、アプリケーションが再度オンライン状態を返したときのことも知る必要があります。

## ![](/files/3837/HTML5_Device_Access_512.png)Device access

- [Camera API の利用](/ja/docs/DOM/Using_the_Camera_API)
  - : コンピュータのカメラからの画像の使用、操作、保存が可能になります。
- [Touch events](/ja/docs/DOM/Touch_events)
  - : 閲覧者のタッチスクリーン押下によって発生するイベントに対応するハンドラ。
- [Geolocation の利用](/ja/docs/Using_geolocation)
  - : ブラウザが閲覧者の現在位置を取得し、これを利用する事が出来ます。
- [デバイスの方向の検出](/ja/docs/Detecting_device_orientation)
  - : ブラウザを起動しているデバイスが方向を変えたときに、その情報を得られるようにします。例えば、デバイスの姿勢に反応するゲームを作るための入力デバイス、あるいは縦長または横長というスクリーンの方向に、ページのレイアウトを適応するために利用できます。
- [Pointer Lock API](/ja/docs/API/Pointer_Lock_API)
  - : ゲームや類似したアプリケーションが、ポインタがウィンドウの境界に達したときにフォーカスを失わないように、コンテンツにポインタをロックすることを可能にします。

## ![](/files/3829/HTML5_Styling_512.png)StylIng

[CSS](/ja/docs/CSS) は、さらに複雑な方法で要素を形成することができるように拡張されてきました。 CSS はもう一枚岩の仕様ではなく、異なるモジュールがすべてレベル 3 ではありませんが、これはしばしば [CSS3](/ja/docs/CSS/CSS3) として参照されます。いくつかのモジュールはレベル 1 、あるモジュールはレベル 4 で、その中間のすべてのレベルをカバーしています。

- 背景のスタイル付けの新機能
  - : {{cssxref("box-shadow")}}、 [複数の背景](/ja/docs/CSS/Multiple_backgrounds)、 CSS の {{cssxref("filter")}} を用いてボックスに影をつけることができるようになりました。これらは [Advanced box effects](/ja/docs/Learn/CSS/Styling_boxes/Advanced_box_effects) を読むことで知ることができます。
- より飾った境界線
  - : {{cssxref("border-image")}} およびそれに関連する個別指定プロパティを用いて枠線の形成に画像を使うことができるだけでなく、 {{cssxref("border-radius")}} プロパティによって角丸の枠線に対応しています。
- スタイルのアニメーション
  - : 異なる状態にアニメーションするための [CSS Transitions](/ja/docs/CSS/Using_CSS_transitions) の使用、またはイベントの引き金無くページのパーツをアニメーションするための [CSS Animations](/ja/docs/CSS/Using_CSS_animations) の使用により、ページの可動要素を操作することができます。
- タイポグラフィの改善
  - : 著者には、より良いタイポグラフィに到達するための、より良いコントロールがあります。 {{cssxref("text-overflow")}} や[ハイフネーション](/ja/docs/CSS/hyphens)はもちろん、[影](/ja/docs/CSS/text-shadow)もコントロールでき、またはその[装飾](/ja/docs/Web/CSS/text-decoration)はより明確にコントロールすることができます。新しい {{cssxref("@font-face")}} @-規則のおかげで、特別な書体をダウンロードし、適用することができます。
- 新しい表象的なレイアウト
  - : デザインの柔軟性の向上のため、二つの新しいレイアウトが加えられました。 [CSS 段組みレイアウト](/ja/docs/Web/CSS/Using_CSS_multi-column_layouts)と、 [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Flexbox)です。
