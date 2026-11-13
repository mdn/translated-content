---
title: Firefox 19 開発者向けリリースノート
short-title: Firefox 19
slug: Mozilla/Firefox/Releases/19
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 19 は米国時間 2013 年 2 月 19 日にリリースされました。この記事では、ウェブ開発者だけでなく、Firefox および Gecko の開発者、アドオン開発者にも有益な主な変更点を掲載しています。

## ウェブ開発者向けの変更点一覧

### JavaScript

- [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) オブジェクトおよび [`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) オブジェクトは、`size()` メソッドを持つオブジェクトから `size` プロパティを持つオブジェクトに変わりました。([Firefox バグ 807001](https://bugzil.la/807001))
- [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) オブジェクトおよび [`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) オブジェクトに `clear()` メソッドが追加されました。([Firefox バグ 805003](https://bugzil.la/805003))

### CSS

- ビューポートに対して相対的な {{cssxref("&lt;length&gt;")}} の単位である `vh`、`vw`、`vmin`、および `vmax` をサポートしました ([Firefox バグ 503720](https://bugzil.la/503720))。
- CSS フレックスボックスの接頭辞を外しましたが、引き続きデフォルトでは無効にしています ([Firefox バグ 801098](https://bugzil.la/801098))。
- `-moz-initial` 値の接頭辞を外しました ([Firefox バグ 806068](https://bugzil.la/806068))。`-moz-initial` は当分の間、エイリアスとして残します。しかし、ウェブ開発者は `initial` に移行することを強く推奨します。
- CSS の {{cssxref("text-transform")}} プロパティで、日本語や中国語など固定幅の表意文字を使用したテキスト内に、ラテン文字をなめらかに追加できるようにするためのキーワードである `full-width` をサポートしました([Firefox バグ 774560](https://bugzil.la/774560))。
- CSS の {{cssxref("page-break-inside")}} を実装しました ([Firefox バグ 685012](https://bugzil.la/685012))。
- CSS の {{cssxref("calc", "calc()")}} 関数を、({{cssxref("gradient")}} の) `<color-stop>` で使用できるようになりました。
- CSS の {{cssxref("@page")}} アットルールをサポートしました ([Firefox バグ 115199](https://bugzil.la/115199))。擬似クラス {{cssxref(":first")}}、{{cssxref(":right")}}、および {{cssxref(":left")}} はまだ実装されていないことに注意してください。
- 擬似クラス `:-moz-placeholder` は、擬似要素 `::-moz-placeholder` に置き換えられました ([Firefox バグ 737786](https://bugzil.la/737786))。
- `!important` がついた宣言が {{cssxref("@keyframes")}} 内に現れた場合、仕様に従い無視されるようになりました（[Firefox バグ 784466](https://bugzil.la/784466)）。

### DOM

- {{domxref("Element.getElementsByTagName")}}、{{domxref("Element.getElementsByTagNameNS")}}、{{domxref("Element.getElementsByClassName")}} の各メソッドは {{domxref("HTMLCollection")}} を返すようになりました ([Firefox バグ 799464](https://bugzil.la/799464))。
- {{domxref("File")}} に `mozLastModifiedDate` プロパティを実装しました ([Firefox バグ 793955](https://bugzil.la/793955))。
- {{domxref("File")}} の `lastModifiedDate` プロパティは、最終更新日が不明である場合に現在の日付を返すようになりました。([Firefox バグ 793459](https://bugzil.la/793459))
- {{domxref("CanvasRenderingContext2D")}} に `isPointInStroke` メソッドを実装しました ([Firefox バグ 803124](https://bugzil.la/803124))。
- {{domxref("HTMLCanvasElement")}} の `toBlob` メソッドを実装しました ([Firefox バグ 648610](https://bugzil.la/648610))。
- `Node.isSupported` メソッドおよび {{domxref("document.implementation", "document.implementation.hasFeature()")}} メソッドは、常に `true` を返すように変更しました ([Firefox バグ 801425](https://bugzil.la/801425))。
- `document.createElement(null)` を呼び出すと、`null` は文字列化されて `document.createElement("null")` であるかのように動作します。
- {{domxref("TextDecoder")}} および {{domxref("TextEncoder")}} インターフェイスは、最新の仕様 ([Firefox バグ 801487](https://bugzil.la/801487)) と一致するように更新されました。

### XForms

Firefox 19 で、XForms の対応を[**削除しました**](http://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms)。

## アドオン開発者と Mozilla 開発者向けの変更点

> [!NOTE]
> Firefox 19 での重要な変更点は、`nsresult` が強い型付けになったことです。これは返値の処理ミスによって発生するバグの発見を容易にしますが、この点を誤って仮定している場合に既存のコードで不具合が発生する可能性があります。

- `getBrowserSelection()` が、テキスト入力フィールドで選択されているテキストを返すようになりました。このため、ユーザーがパスワードフィールドではないテキスト入力フィールドでテキストを選択したときに、`gContextMenu.isTextSelected` が `true` になります ([Firefox バグ 565717](https://bugzil.la/565717))。
- Dict.jsm: `Dict()` が JSON 文字列を受け入れるようになりました。`Dict.toJSON()` メソッドが追加され、これは JSON 文字列を返します ([Firefox バグ 727967](https://bugzil.la/727967))。

### インターフェイスの変更点

- `nsIImgLoadingContent`
  - : `addObserver()` メソッドの引数 (aObserver) が `imgIDecoderObserver` から `imgINotificationObserver` に替わりました。`imgINotificationObserver` の `notify()` メソッドはスクリプト可能ではありませんので、`imgITools` の `createScriptedObserver()` を使用しなければなりません。
- `nsIChannel`
  - : `contentLength` プロパティの型を `long` から `int64_t` に変更しました。

## 関連情報

- [Firefox 19 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/19.0beta/releasenotes/)
- [Add-on Compatibility for Firefox 19](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)
