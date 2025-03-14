---
title: Firefox 14 for developers
slug: Mozilla/Firefox/Releases/14
---

{{FirefoxSidebar}}

Firefox 14 は 米国時間 2012 年 7 月 17 日にリリースされました。この記事では、ウェブ開発者が知っておくべくことについてだけでなく、アドオン開発者および Firefox と Gecko 開発者にも役立つ主な変更点を一覧にしています。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("progress")}} 要素が誤ってフォーム関連要素に分類されていたものを修正しました。そのため、 `form` 属性は無くなります。
- Mac での HTML コンテンツの既定のアクセスキーが Control + Option キーに変更されました。これは Mac での Webkit ベースブラウザーと同じです。

### DOM

- [input](/ja/docs/Web/API/Element/input_event) イベントが [contenteditable](/ja/docs/Web/API/HTMLElement/contentEditable) エディターをホストしている要素および [designMode](/ja/docs/Web/API/Document/designMode) エディターのルート要素上での編集でも発生するようになりました。
- {{domxref("DOMException", "DOMException.code")}} は最新の DOM Level 4 仕様に従って非推奨になりました。
- {{domxref("Range.insertNode()")}} が 折り畳まれた (collapsed) 範囲上で用いられたときに正しく動作するようになりました。
- {{domxref("BlobBuilder", "MozBlobBuilder")}} インターフェイスが {{domxref("Blob")}} コンストラクターの利用を促すために非推奨になりました。 `MozBlobBuilder` を利用した場合、ウェブコンソールに警告が表示されます。
- [Mutation Observers](/ja/docs/Web/API/MutationObserver) のサポートが導入されました。これは、パフォーマンスに関する多くの問題がある DOM3 の Mutation Events の置き換えとして設計されました。
- {{domxref("HTMLImageElement")}} インターフェイスの `x` プロパティおよび `y` プロパティは Gecko 7.0 で削除されましたが、互換性の理由でこのリリースから復活しました。
- {{domxref("Document")}} のメソッドである `execCommandShowHelp()` と `queryCommandText()` は、今まで何もしませんでしたが、削除されました。`
- `GeoPositionAddress` インターフェイスは、 [Geolocation](/ja/docs/Web/API/Geolocation_API) API で廃止された仕様の一部であり、削除されました。
- {{domxref("Storage", "localStorage/sessionStorage")}} がプロパティアクセスを通した宣言されていないキーに対して `null` ではなく `undefined` を正しく返すようになりました。
- {{domxref("ImageData")}} オブジェクトが実装されました ([Firefox バグ 550309](https://bugzil.la/550309))。
- {{domxref("Attr")}} インターフェイスの子ノードに関する属性やメソッドが廃止されました ([Firefox バグ 737122](https://bugzil.la/737122))。

### CSS

- {{cssxref("text-transform")}} と {{cssxref("font-variant")}} CSS プロパティが `i` → `İ` および `ı` → `I` という [テュルク諸語](http://ja.wikipedia.org/wiki/%E3%83%86%E3%83%A5%E3%83%AB%E3%82%AF%E8%AB%B8%E8%AA%9E) 固有の文字対応の組を正しく扱うように修正されました。
- オランダ語の IJ という連字が `text-transform: capitalization` で正しく扱われるようになりました。類似のものとして、ギリシャ文字の `Σ` には、2つの小文字 `σ` と `ς` がありますが、これらが `text-transform: lowercase` で正しく扱われるようになりました。
- ドラフト標準から削除されたため、`skew()` 関数のサポートが {{cssxref("transform")}} プロパティから削除されました。
- {{cssxref("border-image")}} の構文が最新版の仕様書に合うように更新されました。末尾のスラッシュ ("/") を受け付けなくなりました。

### JavaScript

_変更なし。_

### MathML

- {{MathMLElement("maction")}} 要素での action 属性の値 `statusline` の構文が MathML 仕様に合うように変更されました。

### HTTP

Gecko で新しい [HTTP](/ja/docs/Web/HTTP) [`308 Permanent Redirect`](/ja/docs/Web/HTTP/Status#308) ステータスコードに対応しました。 Gecko は永続的リダイレクトと一時的リダイレクトを区別しないので、 [`307 Temporary Redirect`](/ja/docs/Web/HTTP/Status#307) ステータスコードのように振る舞います。ユーザーエージェントが 2 つのリクエスト間で HTTP メソッドを変更することは禁止されます (`POST` は `POST` のままであり、`GET` は `GET` のままです)。

## Mozilla 開発者とアドオン開発者向けの変更点

### JavaScript コードモジュール

#### source-editor.jsm

- 現在の選択範囲をコメントアウトする、もしくは、コメントアウトを解除するためのキーボードショートカットが追加されました（Ctrl-/ もしくは Mac OS X では Cmd-/）。
- 現在のブロックの開始と終端にテキスト入力位置を移動するための Ctrl-\[ および Ctrl-] キーボードショートカットが追加されました。
- 新しく [`getLineStart()`](/ja/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) および [`getLineEnd()`](docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) メソッドが追加されました。

### XUL

- 新しい `fullscreenbutton` 属性が `<window>` 要素に追加されました。この属性に `true` を設定することで、ウィンドウのクローム (chrome) に全画面モードに変更するためのボタンが追加されます。

### インターフェイス

- `nsILocalFile` インターフェイスは `nsIFile` にマージされました ([bug 682360](https://bugzilla.mozilla.org/show_bug.cgi?id=682360))。
- ブックマークをインポートするための `nsIPlacesImportExportService` におけるメソッドは [`BookmarkHTMLUtils.jsm`](/ja/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) JavaScript コードモジュールの利用を促すために削除されました。
- `nsIDOMGeoPositionAddress` インターフェイスは削除されました。
- `getItemGUID`, `setItemGUID`, `getItemIdForGUID` の各メソッドが `nsINavBookmarksService` から削除されました ([Firefox バグ 715355](https://bugzil.la/715355))。

### スペルチェック

- 辞書の名前が完全な [BCP 47](https://www.rfc-editor.org/info/bcp47) 言語タグで解釈されるようになりました ([bug 730209](https://bugzilla.mozilla.org/show_bug.cgi?id=730209), [bug 741842](https://bugzilla.mozilla.org/show_bug.cgi?id=741842))。開発者は辞書名での言語名をハードコーディングしないようにしてください。

## 関連記事

{{Firefox_for_developers('13')}}
