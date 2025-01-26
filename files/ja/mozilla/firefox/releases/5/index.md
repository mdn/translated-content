---
title: Firefox 5 for developers
slug: Mozilla/Firefox/Releases/5
---

{{FirefoxSidebar}}

Firefox 5 は Gecko 5.0 ベースのブラウザーで、2011 年 6 月 21 日にリリースされました。このページは Firefox 5 のリリースにあたり、開発者に影響する変更について情報をまとめたものです。

## ウェブ開発者向けの変更点一覧

### HTML

- すべての HTML 要素が {{ domxref("element.accessKey", "accessKey") }} 属性を持つようになりました。また、{{ domxref("element.blur()", "blur()") }}, {{ domxref("element.click()", "click()") }}, {{ domxref("element.focus()", "focus()") }} メソッドもすべての要素に定義されました。これらの属性やメソッドは {{ domxref("HTMLElement") }} に定義されています。
- HTML5 仕様への準拠により、[文字エンコーディング](/ja/docs/Character_Sets_Supported_by_Gecko) UTF-7 と UTF-32 のサポートが削除されました。
- Quirks モードにおいて、空の {{ HTMLElement("map") }} がマッチされず、空でない `<map>` にスキップしてしまう問題が修正されました。詳細は {{ HTMLElement("map") }} 要素のページにある [Gecko の実装に関する注意書き](/ja/docs/Web/HTML/Element/map#gecko_notes) をご覧ください。
- Android 版 Firefox mobile が {{ cssxref("@font-face") }} で WOFF を利用できるようになりました。
- セキュリティ対策により、WebGL で [もとのドメイン外からのテクスチャが読み込まれなくなりました](/ja/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)。将来的に [HTTP access control](/ja/docs/Web/HTTP/CORS) のサポートが行われ、セキュリティを確保したかたちでクロステクスチャが実現できるでしょう。

#### Canvas の修正

- {{ HTMLElement("canvas") }} 2D コンテキストの `createImageData()` メソッドに `ImageData` オブジェクト指定できるようになりました。このメソッドは指定したオブジェクトと同じ大きさの [新しい `ImageData` オブジェクトを作成](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object) しますが、すべてのピクセルが透明な黒で描画されます。これは実装されたと書かれていたのですが、そうではありませんでした。
- {{ domxref("CanvasGradient") }} の `addColorStop()` メソッドの呼び出しで非有限なカラーストップが指定された際、`INDEX_SIZE_ERR` が適切に投げられるようになりました (これまでは `SYNTAX_ERR` が投げられていました)。
- {{ domxref("HTMLCanvasElement") }} の `toDataURL()` メソッド実装が修正され、指定した MIME 型をマッチングの前に小文字に変換するようになりました。
- `getImageData()` が修正され、canvas の境界を超えた矩形を受け入れるようになりました。canvas 外にあるピクセルは透明な黒として返されます。
- `drawImage()` と `createImageData()` が仕様に準拠し、負の引数を処理するようになりました。この処理は、適切な軸にそって矩形を反転させます。**We need an article about [CSS sizing](https://dev.w3.org/csswg/css3-images/#default-sizing) and how this works.**
- `createImageData()` の呼び出しで非有限な値が指定された際、`NOT_SUPPORTED_ERR` が適切に投げられるようになりました。
- 1px より小さな矩形が指定された際、`createImageData()` と `getImageData()` は適切に 1px 相当の ImageData を返すようになりました。
- `createRadialGradient()` の半径に負の値を指定した際、`INDEX_SIZE_ERR` が適切に投げられるようになりました。
- `createPattern()` や `drawImage()` の呼び出しで、画像に `null` や `undefined` が指定された際、`TYPE_MISMATCH_ERR` が適切に投げられるようになりました。
- `globalAlpha` に不正な値が指定されても `SYNTAX_ERR` が投げられないようになりました。このような場合は適切にただ無視されます。
- `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()`, `arc()` に不正な値が指定されても例外が投げられないようになりました。このような場合は適切にただ無視されます。
- `shadowOffsetX`, `shadowOffsetY`, `shadowBlur` に不正な値が指定された際、それらはただ無視されるようになりました。
- `rotate`, `scale` に不正な値が指定された際、それらはただ無視されるようになりました。

### CSS

- [CSS Animations](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : CSS Animations がサポートされました。`-moz-` 接頭辞をつければ利用可能です。

### DOM

- {{ domxref("selection") }} オブジェクトの [`modify()`](/ja/docs/Web/API/Selection/modify) メソッドが変更され、単語の選択で単語の後にある空白を含まなくなりました。この変更はプラットフォームごとの一貫性を向上させ、また WebKit の挙動とも一致します。
- アクティブでないタブにおいて {{ domxref("window.setTimeout()") }} メソッドのタイムアウトが 1 秒に 1 回 を超えないようになりました。また、入れ子のタイムアウトが HTML5 仕様で定められた最小値 4ms になりました (これまでは 10ms でした)。
- 上記と同様に、アクティブでないタブにおける {{ domxref("window.setInterval()") }} も 1 秒に 1 回以下になりました。
- [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) が [`loadend` イベントをサポート](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) for progress listeners. このイベントはすべての転送が終了した際 (つまり、`abort`, `error`, `load` イベントの後) に発生します。このイベントを利用すると、転送の成功・失敗に関わらず実行されるタスクを処理できます。
- {{ domxref("Blob") }} オブジェクトと {{ domxref("File") }} オブジェクトの `slice()` メソッドが削除され、代わりに提案中のメソッドに置き換えられました。提案中のメソッドは JavaScript の [`Array.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`String.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice) メソッドにより近いものです。現時点では [`mozSlice()`](</ja/docs/DOM/Blob#mozSlice()>) という名前がつけられています。
- {{ domxref("window.navigator.language") }} の値が `Accept-Language` [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers) の値から決定されるようになりました。
- DOM 仕様の要件により、{{ domxref("Node.prefix") }} プロパティが readonly になりました。

### JavaScript

- 正規表現を関数のように呼び出せなくなりました。この変更は WebKit チームと互換性の確保について話し合った結果行われたものです。([WebKit bug 28285](https://webkit.org/b/28285) をお読みください。この機能は長いこと存在していたものの、少なくとも MDC ではドキュメント化されていませんでした。)
- [`Function.prototype.isGenerator()`](/ja/docs/JavaScript/Reference/Global_Objects/Function/isGenerator) メソッドがサポートされました。個のメソッドによってある関数が [generator](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators#ジェネレーター関数.3a_a_better_way_to_build_iterators) であるかを調べられます。
- chrome コード内に生成された DOM 文書が sandbox 内のスクリプトに現れなくなりました。
- [予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar) `class`, `enum`, `export`, `extends`, `import`, `super` はこれまで Strict Mode のみで予約されていましたが、Strict Mode ではない通常のモードでも予約語扱いになりました。
- JSON パーサーが書き直され、スピードと準拠度が向上しました。この書き直しには [Firefox バグ 572279](https://bugzil.la/572279) の修正も含まれています。

### SVG

- {{ SVGAttr("class") }} SVG アトリビュートを動的に変化させられるようになりました。
- {{ domxref("SVGLengthList") }}, {{ domxref("SVGNumberList") }}, {{ domxref("SVGPathSegList") }}, {{ domxref("SVGPointList") }} など、オブジェクトのリストを表す SVG DOM インターフェイスがインデックスされ、配列のようにアクセス可能となりました。加えて、リスト中の項目数を表す `length` も持ちます。

### HTTP

- Firefox は `Keep-Alive` HTTP ヘッダーを送信しないようになります。私たちはこのヘッダーを正しく整形していませんでした。また、{{ httpheader("Connection") }} や {{ httpheader("Proxy-Connection") }} ヘッダーに "keep-alive" を指定していたため重複しており、意味がなかったのです。
- HTTP のトランザクションモデルを変更し、持続的接続プール内の接続を再利用するというより高度なものになりました。Necko はプールを [FIFO](https://ja.wikipedia.org/wiki/FIFO) と扱うのではなく、プール内の接続を [congestion window](https://en.wikipedia.org/wiki/congestion_window) (CWND) の大きい順に並べ替えます。Window のサイズ拡大を避けることで、多くのケースで HTTP トランザクションの確認応答時間 (RTT) を減少させることができるでしょう。
- Firefox は `Content-Disposition` HTTP レスポンスヘッダーについて、`filename`, `filename*` パラメタがどちらも与えられている場合にそれらをより効果的に処理するようになりました。これは `filename` が先に与えられている場合でも `filename*` をまず調べすべての名前を読み取ることで実現しています。これまでは最初にマッチしたパラメタが使われており、後により適切な名前が与えられていた場合でもそれが使われなかったのです。詳細は [Firefox バグ 588781](https://bugzil.la/588781) をお読みください。

### MathML

- [embellished operators](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3) がサポートされました。

### 開発者ツール

- [ウェブコンソールの `Console` オブジェクト](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the_console_object) に `debug()` メソッドが導入されました。これは `log()` のエイリアスで、導入によっていくつかのウェブサイトとの互換性が向上します。

## アドオン開発者向けの変更点一覧

すでに開発済みのアドオンを Firefox 5 向けにアップデートを行う方法については [Firefox 5 へのアドオンのアップデート方法](/ja/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_5)をご覧ください。

> [!NOTE]
> Firefox 5 は他のメジャーリリース版の Firefox と同様に、再コンパイルされたバイナリーコンポーネントが必要となります。詳しくは[バイナリーインターフェイス](/ja/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces)をご覧ください。

### JavaScript コードモジュールに対する変更点

#### 新しい JavaScript コードモジュール

- [`Dict.jsm`](/ja/docs/JavaScript_code_modules/Dict.jsm)コードモジュールが追加されました。このモジュールはキーと値のペアの辞書に対する API を提供します。

#### NetUtil.jsm

- [`asyncFetch()`](</ja/docs/JavaScript_code_modules/NetUtil.jsm#asyncFetch()>) メソッドは今回から`nsIInputStream` として入力ソースの特定をサポートします。

### インターフェイスの変更点

- `nsIHttpChannelInternal` インターフェイスはチャネルの端点のアドレスとポートの情報にアクセスする新しい属性を持っています。この情報は主にデバッグに用いることができます。
- {{ HTMLElement("canvas") }} エレメントの [`width`](/ja/docs/Web/HTML/Element/canvas#width) と [`height`](/ja/docs/Web/HTML/Element/canvas#height) 属性は今回から符号付き整数から符合なし整数に変わり、IDL におけるリフレクトを行います（[`HTMLCanvasElement`](/ja/docs/Web/API/HTMLCanvasElement) をご覧ください）。
- `nsIAppStartup2` と `nsIAppStartup_MOZILLA_2_0` インターフェイスは`nsIAppStartup` インターフェイスに統合されました。
- `nsIDocShell_MOZILLA_2_0_BRANCH は` `nsIDocShell` インターフェイスに統合されました。
- `nsIFocusManager_MOZILLA_2_0_BRANCH` インターフェイスは `nsIFocusManager` インターフェイスに統合されました。
- `nsIHTMLEditor_MOZILLA_2_0_BRANCH` インターフェイスは `nsIHTMLEditor` インターフェイスに統合されました。

#### 新しいインターフェイス

- `nsIDOMAnimationEvent` が追加されました。 {{domxref("AnimationEvent")}}

#### 削除されたインターフェイス

次にあげるインターフェイスはもはや必要がないと判断されました。

- `nsICiter` （[Firefox バグ 633066](https://bugzil.la/633066) をご覧ください）
- `nsIDOM3Document` （[Firefox バグ 639849](https://bugzil.la/639849) をご覧ください。）
- `nsIFIXptrEvaluator`
- `nsISelectElement` （[Firefox バグ 619996](https://bugzil.la/619996) をご覧ください。）

### デバッグの補助

- 新しい [`DebugOnly<T>`](/ja/docs/Namespace/Mozilla/DebugOnly%3CT%3E) ヘルパーはデバッグモードにおけるビルドにおいてのみ変数の定義を可能にしました。

### JavaScript API (SpiderMonkey)

- [`jsdouble`](/ja/docs/SpiderMonkey/JSAPI_Reference/jsdouble) の値を C の符号付き整数型と符合なし整数型に変換するために `JS_DoubleToInt32()` と [`JS_DoubleToUint32()`](/ja/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) が追加されました。

### ビルドシステムの変更点

- `mozconfig` ファイルがなくても Firefox をビルドできるようになり、 [`--enable-application` setting](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) が "browser" のデフォルトになりました。コードをダウンロード後、`configure && make` (or `make -f client.mk`) を行うだけで Firefox をビルドできます。

## 参考

- [Firefox 5 の後方互換性に関わる修正のまとめ](https://dev.mozilla.jp/2011/06/firefox5-backward-compatibility/)
- [高速リリースサイクルに関するよくある質問](http://mozilla.jp/firefox/preview/faq/)

{{Firefox_for_developers('4')}}
