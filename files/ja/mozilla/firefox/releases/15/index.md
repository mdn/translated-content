---
title: Firefox 15 開発者向けリリースノート
short-title: Firefox 15
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 15 は 2012 年 8 月 28 日にリリースされました。この記事では、ウェブ開発者に知らせるだけでなく、Firefox や Gecko 開発者、アドオン開発者にも役立つ主な変更点のリストを掲載しています。

## ウェブ開発者向けの変更点

### HTML

- {{HTMLElement("font")}} 要素の `size` 属性が HTML5 仕様に従って扱われるようになりました。つまり、10 より大きい、または、-10 より小さい整数はすべて 10 か -10 であるとみなされるようになりました。
- `<font>` 要素の `font-weight` および `point-size` 属性のサポートが削除されました。これらは非標準であり、Gecko はそれらをサポートする唯一のレンダリングエンジンでした。
- {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素のための Ogg コンテナーで音声向けの [Opus コーデック](http://www.opus-codec.org/) がサポートされました。
- {{HTMLElement("source")}} 要素で `media` 属性がサポートされました。
- {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素で `played` 属性がサポートされました。この属性の値はこれまで再生したメディアの時間を一覧化した {{domxref("TimeRanges")}} オブジェクトです。

### CSS

- {{cssxref("font-feature-settings")}} プロパティが最新の構文に更新されました。例: `font-feature-settings: "lnum" 1;`
- {{cssxref("text-transform")}} プロパティが (`ﬁ` のような) Unicode の合字を正しく扱うように拡張されました。
- CSS の {{cssxref("word-break")}} プロパティが実装されました。
- The {{cssxref("border-image")}} プロパティが最新の仕様と接頭辞無しのプロパティに対応するように更新されました。 ([bug 713643](https://bugzil.la/713643))
- {{cssxref("transform")}} の `skew()` 関数は Firefox 14 で削除されましたが、既存サイト互換性のために復活しました。ですが、代りに、`skewX()` および `skewY()` 関数を利用することを勧めます。
- CSS の {{cssxref("unicode-bidi")}} プロパティの `plaintext` プロパティがインライン要素にも適用されるようになりました。 ([Firefox bug 746987](https://bugzil.la/746987)).

### DOM

- DOM Events Level 3 のメソッドであり、`Ctrl` `や Shift`のような、修飾キーの状態を調べることができる、[`KeyboardEvent.getModifierState()`](/ja/docs/Web/API/KeyboardEvent/getModifierState) と [`MouseEvent.getModifierState()`](/ja/docs/Web/API/MouseEvent/getModifierState) が実装されました（bugs [630811](https://bugzil.la/630811) および [731878](https://bugzil.la/731878)）。ただし、その挙動は最新の D3E 草案に従っています。そのため、修飾キー名のいくつかが IE と異なります（[Firefox バグ 769190](https://bugzil.la/769190)）。
- マウスイベントで、[`MouseEvent.buttons`](/ja/docs/Web/API/MouseEvent) 属性を用いたマウスボタンの状態を調べるためのサポートが実装されました。
- キーボードイベントで、 [KeyboardEvent.location](/ja/docs/Web/API/KeyboardEvent#attributes_location) 属性を用いたキーの位置（標準、修飾キーの左もしくは右、テンキー上）を調べるためのサポートが実装されました（[Firefox バグ 166240](https://bugzil.la/166240)）。
- `KeyboardEvent.keycode` の結果が Windows/Linux/Mac でほぼ同じであった従来のルールよりも優れたルールから算出されるようになりました。そして、それらは アラビア文字、キリル文字, タイ文字などのような、Linux と Mac での非 ASCII 入力可能レイアウトでも利用可能です。[仮想キーコードのための文書](/ja/docs/Web/API/UI_Events/Keyboard_event_key_values)を参照してください。
- [`range.detach()`](/ja/docs/Web/API/Range/detach) メソッドは何もしないように変更されました。恐らく、将来的に削除されるでしょう。
- `HTMLVideoElement.mozHasAudio()` メソッドが実装されました。与えられた video 要素に関連づけられた音声トラックがあるかどうかを示します（[バグ 480376](https://bugzil.la/480376)）。
- `Performance` API に新しいメソッド `now()` が追加されました。このメソッドは `DOMHighResTimeStamp` 型の高解像度タイマをサポートします（[バグ 539095](https://bugzil.la/539095)）。
- [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Mobile_Messaging_API) が更新され、SMS テキストメッセージが既読か未読かのどちらかを示す `read` 属性がサポートされました。
- [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) が実装されました。
- [`Blob`](/ja/docs/Web/API/Blob) コンストラクターが `blobParts` 引数の値として `ArrayBuffer` に加えて `ArrayBufferView` を取れるようになりました。 ([bug 752402](https://bugzil.la/752402))
- [Ambient Light Events Working Draft](https://w3c.github.io/ambient-light/) で策定された `DeviceLightEvent` が実装されました。
- `DeviceProximityEvent` および `UserProximityEvent` [Proximity Events](https://w3c.github.io/proximity/) が実装されました。
- {{domxref("File")}} の `lastModifiedDate` プロパティが実装されました。 ([Firefox バグ 673586](https://bugzil.la/673586))

### JavaScript

- Typed Arrays 仕様由来の [`DataView`](/ja/docs/Web/JavaScript/Reference/Global_Objects/DataView) インターフェイスのサポートが追加されました。これは [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) に含まれるデータへの低レベルアクセスを提供します。
- ECMAScript 2015 の組み込みの [`Number.isNaN()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) のサポートが追加されました。([bug 749818](https://bugzil.la/749818), [bug 761495](https://bugzil.la/761495), [bug 761480](https://bugzil.la/749818))
- ECMAScript 2015 [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)が追加されました。 ([bug 757676](https://bugzil.la/757676))
- ECMAScript 2015 [残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)が追加されました。 ([bug 574132](https://bugzil.la/574132))

### WebGL

- [`WEBGL_compressed_texture_s3tc`](/ja/docs/Web/API/WEBGL_compressed_texture_s3tc) 拡張のサポートが追加されました。圧縮されたテクスチャは GPU 上でテクスチャを保持するために必要なメモリーの量を減少させます。その結果、より高解像度なテクスチャや同解像度でもより多くのテクスチャを扱えます。

### MathML

- 数学演算記号で {{cssxref("@font-face")}} で指定したダウンローダブルフォントを利用できるようになりました。これにより、[MathML-fonts アドオン](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) で引き伸ばされた演算記号が正常に表示されるようになります。
- {{MathMLElement("maction")}} の `selection` 属性が `actiontype` 属性の値が `toggle` のときにのみ考慮されるようになりました。
- [非推奨の名前付き空白バインディング](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) が削除されました（[Firefox バグ 673759](https://bugzil.la/673759)）。
- [Length](/ja/docs/Web/MathML/Reference/Values) と {{MathMLElement("mpadded")}} の値でサポートされる構文が MathML3 仕様で指定されたものにより近くなりました。
- アラビア語数式用の新しい MathML ミラー対応演算子が演算子辞書に追加されました ([Firefox バグ 757125](https://bugzil.la/757125)).

### SVG

- {{SVGElement("view")}} 要素のサポートが追加されました ([Firefox バグ 512525](https://bugzil.la/512525))。

### ネットワーク

- SPDY v3 プロトコルのサポートが実装されました。既定では無効であり、`network.http.spdy.enabled.v3` の設定を `true` にすることで有効になります。 ([bug 737470](https://bugzil.la/737470))

## Mozilla 開発者とアドオン開発者向けの変更点

### インターフェイスの変更点

- `nsIDOMWindowUtils`
  - : `sendMouseEvent()`、`sendTouchEvent()`、`sendMouseEventToWindow()`、`sendMouseScrollEvent()`、`sendKeyEvent()` の `aModifiers` は [`KeyboardEvent.getModifierState()`](/ja/docs/Web/API/KeyboardEvent/getModifierState) でサポートされている修飾キーのすべてをサポートします。`MODIFIER_*` という値を利用してください。 また、`sendKeyEvent()` の第 5 引数が `boolean` から `unsigned long` に変更されました。後方互換性のために、呼び出し元がそれに対して `true` または `false` を渡している場合、挙動は変更されません。この変更によって呼び出し元がキーの位置を指定することができるようになります。
- `nsIBrowserHistory`
  - : `hidePage()` メソッドは一度も実装されずに、かつ、このリリースで完全に削除されます。Places API のすべてを非同期化する進行中の作業の一部として、`addPageWithDetails()` メソッドも削除されます。代わりに `mozIAsyncHistory.updatePlaces` を利用してください。また、`count` 属性も削除されます。それはときどき実際のカウントを返していませんでした（代わりに、単純にエントリーが存在したかどうかを返していました）。代わりに `nsINavHistoryService.hasHistoryEntries` を利用できます。
- `nsIDOMUtils`
  - : `nslDOMUtils.parseStyleSheet()` メソッドが追加され、CSS の (再) 解析ができるようになりました。
- `nsIINIParserWriter`
  - : `nsIINIParserWriter.writeFile()` メソッドが `flags` プロパティを受け入れるようになりました。現在は 1 個のオプションのみを与えます: Windows および特定のインストーラーとの互換性のため、ファイルを UTF-8 形式の代わりに UTF-16 形式で書き込むことを知らせることができます。

#### 新しいインターフェイス

- `nsISpeculativeConnect`
  - : 近い将来のいつかに要求される可能性がある、与えられた URI への接続をオープンするネットワーキング層のヒントを与えるための方法を提供します。これによりネットワーク層が時として高レイテンシプロセスで前もっと新しいネットワーク接続を開き始めることを可能にします。

#### 削除されたインターフェイス

以下のインターフェイスが削除されました。

- `nsIGlobalHistory`
