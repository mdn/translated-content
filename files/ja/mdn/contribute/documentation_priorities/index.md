---
title: MDN 文書化の優先順位リスト
slug: MDN/Contribute/Documentation_priorities
tags:
  - Best practices
  - Community
  - MDN
  - Documentation
  - Priorities
translation_of: MDN/Contribute/Documentation_priorities
---
<p>{{MDNSidebar}}</p>

<p>訳注: この文書は英語版の原文を対象としたものです。アクセス頻度やページ数などは、すべて英語版のものです。</p>

<p>この文書では、 MDN の様々な優先順位の階層を定義し、それぞれの階層にどのような文書トピックが存在するかを示しています。私たちはこれを<strong>第一階層</strong>および<strong>第二階層</strong>と呼んでいます。</p>

<p>この文書の目的は 2 つあります。</p>

<ul>
  <li>トリアージプロセスの中で、コンテンツのバグに優先順位をつけるのに役立ちます。これにより、協力者はどのバグが現時点で最も重要であるかを知ることで、どのバグに取り組むべきかを決めることができます。</li>
  <li>特定のバグではなく、特定のトピック領域で作業したい協力者が、どのバグに時間を割くのが最も有用かを判断しやすくするため (例えば、 MDN で自動化されたクリーンアップスクリプトを実行するのが好きな人など)。</li>
</ul>

<p>これらの文書の相対的な重要性は、純粋にページビューの数値を見て決定しました。利用できる計測法はたくさんありますが、ページビューは客観的で、よい指標にもなります。 — より重要なウェブ技術はより頻繁に検索されるため、そうした文書の問題を解決することが最も重要であると思われるからです。</p>

<p>また、これらの階層は、独立した文書ツリー (つまり、リンク先のページと、その下の階層にあるすべての文書) で構成されていることにも留意してください。時には、第一階層の文書が第二階層の文書にリンクしたり、その逆の場合もありますが、それは問題ありません。</p>

<p>文書ツリーの後の括弧内の数字は、そのツリーの下にある文書の数を表しています。これらの数字は時間の経過とともに変化する可能性が高いので、近いうちに再検討する必要があるかもしれません。</p>

<h2 id="tier_1">第一階層</h2>

<p>第一階層のコンテンツは MDN で最も重要なコンテンツです。 — ユーザー数が多く、ウェブプラットフォームの最も重要な技術をカバーするためのものです。</p>

<ul>
  <li><a href="/ja/docs/Web/Accessibility">アクセシビリティ</a> (104)</li>
  <li><a href="/ja/docs/Web/CSS">CSS</a> (933)</li>
  <li><a href="/ja/docs/Web/Events">イベント</a> (4)</li>
  <li><a href="/ja/docs/Web/HTML">HTML</a> (239)</li>
  <li><a href="/ja/docs/Web/HTTP">HTTP</a> (292)</li>
  <li><a href="/ja/docs/Web/JavaScript">JavaScript</a> (921)</li>
  <li><a href="/ja/docs/Learn">ウェブ開発を学ぶ</a> (355)</li>
  <li><a href="/ja/docs/Web/Media">メディア</a> (17)</li>
  <li><a href="/ja/docs/Web/Performance">パフォーマンス</a> (16)</li>
  <li><a href="/ja/docs/Web/Privacy">プライバシー</a> (1)</li>
  <li><a href="/ja/docs/Web/Progressive_web_apps">プログレッシブウェブアプリ</a> (16)</li>
  <li><a href="/ja/docs/Web/Security">セキュリティ</a> (27)</li>
  <li><a href="/ja/docs/Web/API">Web API</a>: 以下のグループのインターフェイスは第一階層です (ここに何が含まれるかの詳細な分類は、下記の<a href="#tier_1_webapis">第一階層の WebAPI</a> の節を参照してください (1189):
    <ul>
      <li>Canvas API (112)</li>
      <li>Clipboard API (13)</li>
      <li>DOM (439)</li>
      <li>DOM Events (22)</li>
      <li>Fetch API (47)</li>
      <li>File API (48)</li>
      <li>HTML DOM (371)</li>
      <li>URL API (43)</li>
      <li>Web Storage API (8)</li>
      <li>WebSockets API (28)</li>
      <li>XMLHttpRequest (58)</li>
    </ul>
  </li>
  <li><a href="/ja/docs/Web/Manifest">ウェブアプリマニフェスト</a> (19)</li>
  <li><a href="/ja/docs/WebAssembly">WebAssembly</a> (12)</li>
  <li><a href="/ja/docs/Web/Web_Components">ウェブコンポーネント</a> (5)</li>
</ul>

<p><strong>第一階層のページ数の合計: 4150</strong></p>

<h2 id="tier_2">第二階層</h2>

<p>第二階層のコンテンツはは、一般的にはあまり使われませんが、それでも役に立つものです。</p>

<ul>
  <li><a href="/ja/docs/Web/Houdini">CSS Houdini</a> (1)</li>
  <li><a href="/ja/docs/Games">Game development docs</a> (73)</li>
  <li><a href="/ja/docs/Web/Guide">ガイド</a> (56)</li>
  <li><a href="/ja/docs/Web/MathML">MathML</a> (38)</li>
  <li><a href="/ja/docs/MDN">MDN メタ文書</a> (82)。これは重要ですが、バグ修正は主に MDN コアチームが扱います)</li>
  <li><a href="/ja/docs/Web/SVG">SVG</a> (382)</li>
  <li><a href="/ja/docs/Glossary">MDN Web Docs 用語集</a> (534)</li>
  <li><a href="/ja/docs/Web/API">WebAPI</a> のうち、「第一階層の WebAPI」の一覧に含まれないもの (4701)</li>
  <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions">WebExtensions</a> (635)。本当はウェブプラットフォームではありませんが、重要なものです。</li>
</ul>

<p><strong>第二階層のページ数の合計: 6502</strong></p>

<h2 id="other_content">その他のコンテンツ</h2>

<p>MDN には、ウェブプラットフォーム技術の範囲外のコンテンツ — アーカイブされたコンテンツや Firefox 固有のドキュメント (例: DevTools、プラットフォーム内部) などもあります。これらのコンテンツは完全に優先順位が下がっており、ほとんどの場合、私たちは他に移すための場所を探しているか、もはや有用でない場合は削除しています。このページに記載されていない分野にコミュニティが時間を費やすことはお勧めできません。</p>

<h2 id="tier_1_webapis">第一階層の WebAPI</h2>

<p>以下の API インターフェースリファレンス文書 (およびその子ページ) は、現在第一階層とみなされています。これらのグループ分けと優先順位の根拠については、 <a href="https://github.com/mdn/sprints/issues/3327">https://github.com/mdn/sprints/issues/3327</a> を参照してください。</p>

<h3 id="canvas_api">Canvas API (112)</h3>

<ul>
  <li><code><a href="/ja/docs/Web/API/CanvasGradient">CanvasGradient</a></code> (2)</li>
  <li><code><a href="/ja/docs/Web/API/CanvasImageSource">CanvasImageSource</a></code> (1)</li>
  <li><code><a href="/ja/docs/Web/API/CanvasPattern">CanvasPattern</a></code> (2)</li>
  <li><code><a href="/ja/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a></code> (71)</li>
  <li><code><a href="/ja/docs/Web/API/ImageBitmap">ImageBitmap</a></code> (4)</li>
  <li><code><a href="/ja/docs/Web/API/ImageBitmapRenderingContext">ImageBitmapRenderingContext</a></code> (2)</li>
  <li><code><a href="/ja/docs/Web/API/ImageData">ImageData</a></code> (5)</li>
  <li><code><a href="/ja/docs/Web/API/OffscreenCanvas">OffscreenCanvas</a></code> (8)</li>
  <li><code><a href="/ja/docs/Web/API/Path2D">Path2D</a></code> (3)</li>
  <li><code><a href="/ja/docs/Web/API/RenderingContext">RenderingContext</a></code> (1)</li>
  <li><code><a href="/ja/docs/Web/API/TextMetrics">TextMetrics</a></code> (13)</li>
</ul>

<h3 id="clipboard_api">Clipboard API (13)</h3>

<ul>
  <li><code><a href="/ja/docs/Web/API/Clipboard">Clipboard</a></code> (5)</li>
  <li><code><a href="/ja/docs/Web/API/ClipboardEvent">ClipboardEvent</a></code> (3)</li>
  <li><code><a href="/ja/docs/Web/API/ClipboardItem">ClipboardItem</a></code> (5)</li>
</ul>

<h3 id="dom">DOM (439)</h3>

<div class="note notecard">
  <h4>注</h4>
  <p>"DOM" は部分的なグループに過ぎません。第一階層のサイズを管理可能な数に抑えるために、ページビューの多いインターフェイスの文書だけを含めました。この一覧に入っていない他の DOM インターフェースは、第二階層にあります。</p>
</div>

<ul>
  <li><code><a href="/ja/docs/Web/API/AbortController">AbortController</a></code> (4)</li>
  <li><code><a href="/ja/docs/Web/API/ChildNode">ChildNode</a></code> (5)</li>
  <li><code><a href="/ja/docs/Web/API/CustomEvent">CustomEvent</a></code> (4)</li>
  <li><code><a href="/ja/docs/Web/API/Document">Document</a></code> (164)</li>
  <li><code><a href="/ja/docs/Web/API/DOMParser">DOMParser</a></code> (2)</li>
  <li><code><a href="/ja/docs/Web/API/DOMString">DOMString</a></code> (2)</li>
  <li><code><a href="/ja/docs/Web/API/Element">Element</a></code> (176)</li>
  <li><code><a href="/ja/docs/Web/API/Event">Event</a></code> (24)</li>
  <li><code><a href="/ja/docs/Web/API/EventTarget">EventTarget</a></code> (5)</li>
  <li><code><a href="/ja/docs/Web/API/HTMLCollection">HTMLCollection</a></code> (4)</li>
  <li><code><a href="/ja/docs/Web/API/MutationObserver">MutationObserver</a></code> (5)</li>
  <li><code><a href="/ja/docs/Web/API/Node">Node</a></code> (36)</li>
  <li><code><a href="/ja/docs/Web/API/NodeList">NodeList</a></code> (7)</li>
  <li><code><a href="/ja/docs/Web/API/USVString">USVString</a></code> (1)</li>
</ul>

<h3 id="dom_events">DOM Events (22)</h3>

<div class="note notecard">
  <h4>注</h4>
  <p>"DOM Events" は部分的なグループに過ぎません。第一階層のサイズを管理可能な数に抑えるために、ページビューの多いインターフェイスの文書だけを含めました。この一覧に入っていない他の DOM Events のインターフェースは、第二階層にあります。</p>
</div>

<ul>
  <li><code><a href="/ja/docs/Web/API/EventListener">EventListener</a></code> (2)</li>
  <li><code><a href="/ja/docs/Web/API/KeyboardEvent">KeyboardEvent</a></code> (20)</li>
</ul>

<h3 id="fetch_api">Fetch API (47)</h3>

<ul>
  <li><code><a href="/ja/docs/Web/API/Headers">Headers</a></code> (11)</li>
  <li><code><a href="/ja/docs/Web/API/Request">Request</a></code> (15)</li>
  <li><code><a href="/ja/docs/Web/API/Response">Response</a></code> (13)</li>
</ul>

<h3 id="file_api">File API (48)</h3>

<ul>
  <li><code><a href="/ja/docs/Web/API/Blob">Blob</a></code> (8)</li>
  <li><code><a href="/ja/docs/Web/API/File">File</a></code> (15)</li>
  <li><code><a href="/ja/docs/Web/API/FileList">FileList</a></code> (1)</li>
  <li><code><a href="/ja/docs/Web/API/FileReader">FileReader</a></code> (19)</li>
  <li><code><a href="/ja/docs/Web/API/FileReaderSync">FileReaderSync</a></code> (5)</li>
</ul>

<h3 id="html_dom">HTML DOM (371)</h3>

<div class="note notecard">
  <h4>注</h4>
  <p>"HTML DOM" は部分的なグループに過ぎません。第一階層のサイズを管理可能な数に抑えるために、ページビューの多いインターフェイスの文書だけを含めました。この一覧に入っていない他の HTML DOM インターフェースは、第二階層にあります。</p>
</div>

<ul>
  <li><code><a href="/ja/docs/Web/API/History">History</a></code> (9)</li>
  <li><code><a href="/ja/docs/Web/API/HTMLAudioElement">HTMLAudioElement</a></code> (4)</li>
  <li><code><a href="/ja/docs/Web/API/HTMLCanvasElement">HTMLCanvasElement</a></code> (14)</li>
  <li><code><a href="/ja/docs/Web/API/HTMLElement">HTMLElement</a></code> (45)</li>
  <li><code><a href="/ja/docs/Web/API/HTMLFormElement">HTMLFormElement</a></code> (17)</li>
  <li><code><a href="/ja/docs/Web/API/HTMLInputElement">HTMLInputElement</a></code> (17)</li>
  <li><code><a href="/ja/docs/Web/API/HTMLTextAreaElement">HTMLTextAreaElement</a></code> (2)</li>
  <li><code><a href="/ja/docs/Web/API/Location">Location</a></code> (17)</li>
  <li><code><a href="/ja/docs/Web/API/Navigator">Navigator</a></code> (45)</li>
  <li><code><a href="/ja/docs/Web/API/NavigatorLanguage">NavigatorLanguage</a></code> (3)</li>
  <li><code><a href="/ja/docs/Web/API/NavigatorOnLine">NavigatorOnLine</a></code> (3)</li>
  <li><code><a href="/ja/docs/Web/API/Window">Window</a></code> (182)</li>
  <li><code><a href="/ja/docs/Web/API/WindowEventHandlers">WindowEventHandlers</a></code> (13)</li>
</ul>

<h3 id="url_api">URL API (43)</h3>

<ul>
  <li><code><a href="/ja/docs/Web/API/URL">URL</a></code> (18)</li>
  <li><code><a href="/ja/docs/Web/API/URLSearchParams">URLSearchParams</a></code> (14)</li>
  <li><code><a href="/ja/docs/Web/API/URLUtilsReadOnly">URLUtilsReadOnly</a></code> (11)</li>
</ul>

<h3 id="web_storage_api">Web Storage API (8)</h3>

<ul>
  <li><code><a href="/ja/docs/Web/API/Storage">Storage</a></code> (7)</li>
  <li><code><a href="/ja/docs/Web/API/StorageEvent">StorageEvent</a></code> (1)</li>
</ul>

<h3 id="websockets_api">WebSockets API (28)</h3>

<ul>
  <li><code><a href="/ja/docs/Web/API/CloseEvent">CloseEvent</a></code> (3)</li>
  <li><code><a href="/ja/docs/Web/API/MessageEvent">MessageEvent</a></code> (7)</li>
  <li><code><a href="/ja/docs/Web/API/WebSocket">WebSocket</a></code> (18)</li>
</ul>

<h3 id="xmlhttprequest">XMLHttpRequest (58)</h3>

<ul>
  <li><code><a href="/ja/docs/Web/API/FormData">FormData</a></code> (12)</li>
  <li><code><a href="/ja/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code> (40)</li>
  <li><code><a href="/ja/docs/Web/API/XMLHttpRequestEventTarget">XMLHttpRequestEventTarget</a></code> (6)</li>
</ul>
