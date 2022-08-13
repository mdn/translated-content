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
{{MDNSidebar}}

訳注: この文書は英語版の原文を対象としたものです。アクセス頻度やページ数などは、すべて英語版のものです。

この文書では、 MDN の様々な優先順位の階層を定義し、それぞれの階層にどのような文書トピックが存在するかを示しています。私たちはこれを**第一階層**および**第二階層**と呼んでいます。

この文書の目的は 2 つあります。

- トリアージプロセスの中で、コンテンツのバグに優先順位をつけるのに役立ちます。これにより、協力者はどのバグが現時点で最も重要であるかを知ることで、どのバグに取り組むべきかを決めることができます。
- 特定のバグではなく、特定のトピック領域で作業したい協力者が、どのバグに時間を割くのが最も有用かを判断しやすくするため (例えば、 MDN で自動化されたクリーンアップスクリプトを実行するのが好きな人など)。

これらの文書の相対的な重要性は、純粋にページビューの数値を見て決定しました。利用できる計測法はたくさんありますが、ページビューは客観的で、よい指標にもなります。 — より重要なウェブ技術はより頻繁に検索されるため、そうした文書の問題を解決することが最も重要であると思われるからです。

また、これらの階層は、独立した文書ツリー (つまり、リンク先のページと、その下の階層にあるすべての文書) で構成されていることにも留意してください。時には、第一階層の文書が第二階層の文書にリンクしたり、その逆の場合もありますが、それは問題ありません。

文書ツリーの後の括弧内の数字は、そのツリーの下にある文書の数を表しています。これらの数字は時間の経過とともに変化する可能性が高いので、近いうちに再検討する必要があるかもしれません。

## 第一階層

第一階層のコンテンツは MDN で最も重要なコンテンツです。 — ユーザー数が多く、ウェブプラットフォームの最も重要な技術をカバーするためのものです。

- [アクセシビリティ](/ja/docs/Web/Accessibility) (104)
- [CSS](/ja/docs/Web/CSS) (933)
- [イベント](/ja/docs/Web/Events) (4)
- [HTML](/ja/docs/Web/HTML) (239)
- [HTTP](/ja/docs/Web/HTTP) (292)
- [JavaScript](/ja/docs/Web/JavaScript) (921)
- [ウェブ開発を学ぶ](/ja/docs/Learn) (355)
- [メディア](/ja/docs/Web/Media) (17)
- [パフォーマンス](/ja/docs/Web/Performance) (16)
- [プライバシー](/ja/docs/Web/Privacy) (1)
- [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (16)
- [セキュリティ](/ja/docs/Web/Security) (27)
- [Web API](/ja/docs/Web/API): 以下のグループのインターフェイスは第一階層です (ここに何が含まれるかの詳細な分類は、下記の[第一階層の WebAPI](#tier_1_webapis) の節を参照してください (1189):

  - Canvas API (112)
  - Clipboard API (13)
  - DOM (439)
  - DOM Events (22)
  - Fetch API (47)
  - File API (48)
  - HTML DOM (371)
  - URL API (43)
  - Web Storage API (8)
  - WebSockets API (28)
  - XMLHttpRequest (58)

- [ウェブアプリマニフェスト](/ja/docs/Web/Manifest) (19)
- [WebAssembly](/ja/docs/WebAssembly) (12)
- [ウェブコンポーネント](/ja/docs/Web/Web_Components) (5)

**第一階層のページ数の合計: 4150**

## 第二階層

第二階層のコンテンツはは、一般的にはあまり使われませんが、それでも役に立つものです。

- [CSS Houdini](/ja/docs/Web/Houdini) (1)
- [Game development docs](/ja/docs/Games) (73)
- [ガイド](/ja/docs/Web/Guide) (56)
- [MathML](/ja/docs/Web/MathML) (38)
- [MDN メタ文書](/ja/docs/MDN) (82)。これは重要ですが、バグ修正は主に MDN コアチームが扱います)
- [SVG](/ja/docs/Web/SVG) (382)
- [MDN Web Docs 用語集](/ja/docs/Glossary) (534)
- [WebAPI](/ja/docs/Web/API) のうち、「第一階層の WebAPI」の一覧に含まれないもの (4701)
- [WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) (635)。本当はウェブプラットフォームではありませんが、重要なものです。

**第二階層のページ数の合計: 6502**

## その他のコンテンツ

MDN には、ウェブプラットフォーム技術の範囲外のコンテンツ — アーカイブされたコンテンツや Firefox 固有のドキュメント (例: DevTools、プラットフォーム内部) などもあります。これらのコンテンツは完全に優先順位が下がっており、ほとんどの場合、私たちは他に移すための場所を探しているか、もはや有用でない場合は削除しています。このページに記載されていない分野にコミュニティが時間を費やすことはお勧めできません。

## 第一階層の WebAPI

以下の API インターフェースリファレンス文書 (およびその子ページ) は、現在第一階層とみなされています。これらのグループ分けと優先順位の根拠については、 <https://github.com/mdn/sprints/issues/3327> を参照してください。

### Canvas API (112)

- [`CanvasGradient`](/ja/docs/Web/API/CanvasGradient) (2)
- [`CanvasImageSource`](/ja/docs/Web/API/CanvasImageSource) (1)
- [`CanvasPattern`](/ja/docs/Web/API/CanvasPattern) (2)
- [`CanvasRenderingContext2D`](/ja/docs/Web/API/CanvasRenderingContext2D) (71)
- [`ImageBitmap`](/ja/docs/Web/API/ImageBitmap) (4)
- [`ImageBitmapRenderingContext`](/ja/docs/Web/API/ImageBitmapRenderingContext) (2)
- [`ImageData`](/ja/docs/Web/API/ImageData) (5)
- [`OffscreenCanvas`](/ja/docs/Web/API/OffscreenCanvas) (8)
- [`Path2D`](/ja/docs/Web/API/Path2D) (3)
- [`RenderingContext`](/ja/docs/Web/API/RenderingContext) (1)
- [`TextMetrics`](/ja/docs/Web/API/TextMetrics) (13)

### Clipboard API (13)

- [`Clipboard`](/ja/docs/Web/API/Clipboard) (5)
- [`ClipboardEvent`](/ja/docs/Web/API/ClipboardEvent) (3)
- [`ClipboardItem`](/ja/docs/Web/API/ClipboardItem) (5)

### DOM (439)

> **Note:** #### 注"DOM" は部分的なグループに過ぎません。第一階層のサイズを管理可能な数に抑えるために、ページビューの多いインターフェイスの文書だけを含めました。この一覧に入っていない他の DOM インターフェースは、第二階層にあります。

- [`AbortController`](/ja/docs/Web/API/AbortController) (4)
- [`ChildNode`](/ja/docs/Web/API/ChildNode) (5)
- [`CustomEvent`](/ja/docs/Web/API/CustomEvent) (4)
- [`Document`](/ja/docs/Web/API/Document) (164)
- [`DOMParser`](/ja/docs/Web/API/DOMParser) (2)
- [`DOMString`](/ja/docs/Web/API/DOMString) (2)
- [`Element`](/ja/docs/Web/API/Element) (176)
- [`Event`](/ja/docs/Web/API/Event) (24)
- [`EventTarget`](/ja/docs/Web/API/EventTarget) (5)
- [`HTMLCollection`](/ja/docs/Web/API/HTMLCollection) (4)
- [`MutationObserver`](/ja/docs/Web/API/MutationObserver) (5)
- [`Node`](/ja/docs/Web/API/Node) (36)
- [`NodeList`](/ja/docs/Web/API/NodeList) (7)
- [`USVString`](/ja/docs/Web/API/USVString) (1)

### DOM Events (22)

> **Note:** #### 注"DOM Events" は部分的なグループに過ぎません。第一階層のサイズを管理可能な数に抑えるために、ページビューの多いインターフェイスの文書だけを含めました。この一覧に入っていない他の DOM Events のインターフェースは、第二階層にあります。

- [`EventListener`](/ja/docs/Web/API/EventListener) (2)
- [`KeyboardEvent`](/ja/docs/Web/API/KeyboardEvent) (20)

### Fetch API (47)

- [`Headers`](/ja/docs/Web/API/Headers) (11)
- [`Request`](/ja/docs/Web/API/Request) (15)
- [`Response`](/ja/docs/Web/API/Response) (13)

### File API (48)

- [`Blob`](/ja/docs/Web/API/Blob) (8)
- [`File`](/ja/docs/Web/API/File) (15)
- [`FileList`](/ja/docs/Web/API/FileList) (1)
- [`FileReader`](/ja/docs/Web/API/FileReader) (19)
- [`FileReaderSync`](/ja/docs/Web/API/FileReaderSync) (5)

### HTML DOM (371)

> **Note:** #### 注"HTML DOM" は部分的なグループに過ぎません。第一階層のサイズを管理可能な数に抑えるために、ページビューの多いインターフェイスの文書だけを含めました。この一覧に入っていない他の HTML DOM インターフェースは、第二階層にあります。

- [`History`](/ja/docs/Web/API/History) (9)
- [`HTMLAudioElement`](/ja/docs/Web/API/HTMLAudioElement) (4)
- [`HTMLCanvasElement`](/ja/docs/Web/API/HTMLCanvasElement) (14)
- [`HTMLElement`](/ja/docs/Web/API/HTMLElement) (45)
- [`HTMLFormElement`](/ja/docs/Web/API/HTMLFormElement) (17)
- [`HTMLInputElement`](/ja/docs/Web/API/HTMLInputElement) (17)
- [`HTMLTextAreaElement`](/ja/docs/Web/API/HTMLTextAreaElement) (2)
- [`Location`](/ja/docs/Web/API/Location) (17)
- [`Navigator`](/ja/docs/Web/API/Navigator) (45)
- [`NavigatorLanguage`](/ja/docs/Web/API/NavigatorLanguage) (3)
- [`NavigatorOnLine`](/ja/docs/Web/API/NavigatorOnLine) (3)
- [`Window`](/ja/docs/Web/API/Window) (182)
- [`WindowEventHandlers`](/ja/docs/Web/API/WindowEventHandlers) (13)

### URL API (43)

- [`URL`](/ja/docs/Web/API/URL) (18)
- [`URLSearchParams`](/ja/docs/Web/API/URLSearchParams) (14)
- [`URLUtilsReadOnly`](/ja/docs/Web/API/URLUtilsReadOnly) (11)

### Web Storage API (8)

- [`Storage`](/ja/docs/Web/API/Storage) (7)
- [`StorageEvent`](/ja/docs/Web/API/StorageEvent) (1)

### WebSockets API (28)

- [`CloseEvent`](/ja/docs/Web/API/CloseEvent) (3)
- [`MessageEvent`](/ja/docs/Web/API/MessageEvent) (7)
- [`WebSocket`](/ja/docs/Web/API/WebSocket) (18)

### XMLHttpRequest (58)

- [`FormData`](/ja/docs/Web/API/FormData) (12)
- [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) (40)
- [`XMLHttpRequestEventTarget`](/ja/docs/Web/API/XMLHttpRequestEventTarget) (6)
