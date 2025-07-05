---
title: Firefox 19 for developers
slug: Mozilla/Firefox/Releases/19
---

Gecko 19 を搭載した Firefox 19 は米国時間 2013 年 2 月 19 日にリリースされました。このページでは、開発者に影響する Firefox 19 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### JavaScript

- [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) オブジェクトおよび [`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) オブジェクトは、`size()` メソッドを持つオブジェクトから `size` プロパティを持つオブジェクトに変わりました。([Firefox バグ 807001](https://bugzil.la/807001))
- [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) オブジェクトおよび [`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) オブジェクトに `clear()` メソッドが追加されました。([Firefox バグ 805003](https://bugzil.la/805003))

### CSS

- Viewport に対して相対的な {{cssxref("&lt;length&gt;")}} の単位である `vh`、`vw`、`vmin`、および `vmax` をサポートしました ([Firefox バグ 503720](https://bugzil.la/503720))。
- CSS Flexbox の接頭辞を外しましたが、引き続きデフォルトでは無効にしています ([Firefox バグ 801098](https://bugzil.la/801098))。
- `-moz-initial` 値の接頭辞を外しました ([Firefox バグ 806068](https://bugzil.la/806068))。`-moz-initial` は当分の間、エイリアスとして残します。しかし、ウェブ開発者は `initial` に移行することを強く推奨します。
- CSS の {{ cssxref("text-transform")}} プロパティで、日本語や中国語など固定幅の表意文字を使用したテキスト内にラテン文字をなめらかに追加できるようにするためのキーワードである `full-width` をサポートしました([Firefox バグ 774560](https://bugzil.la/774560))。
- CSS の {{ cssxref("page-break-inside")}} を実装しました ([Firefox バグ 685012](https://bugzil.la/685012))。
- CSS の {{ cssxref("calc", "calc()")}} 関数を、({{cssxref("&lt;gradient&gt;")}} の) `<color-stop>` で使用できるようになりました。
- CSS の {{ cssxref("@page") }} @-規則をサポートしました ([Firefox バグ 115199](https://bugzil.la/115199))。擬似クラス {{cssxref(":first")}}、{{cssxref(":right")}}、および {{cssxref(":left")}} はまだ実装されていないことに注意してください。
- 擬似クラス {{ cssxref(":-moz-placeholder") }} は、擬似*要素* {{ cssxref("::-moz-placeholder") }} に置き換えられました ([Firefox バグ 737786](https://bugzil.la/737786))。

### DOM

- {{ domxref("element.getElementsByTagName") }} メソッドは `HTMLCollection` を返すようになりました ([Firefox バグ 799464](https://bugzil.la/799464))。
- {{domxref("File")}} に `mozLastModifiedDate` プロパティを実装しました ([Firefox バグ 793955](https://bugzil.la/793955))。
- {{domxref("File")}} の `lastModifiedDate` プロパティは、最終更新日が不明である場合に現在の日付を返すようになりました。([Firefox バグ 793459](https://bugzil.la/793459))
- {{domxref("CanvasRenderingContext2D")}} に `isPointInStroke` メソッドを実装しました ([Firefox バグ 803124](https://bugzil.la/803124))。
- {{domxref("HTMLCanvasElement")}} の `toBlob` メソッドを実装しました ([Firefox バグ 648610](https://bugzil.la/648610))。
- {{domxref("Node.isSupported")}} メソッドおよび {{domxref("document.implementation", "document.implementation.hasFeature()")}} メソッドは、常に `true` を返すように変更しました ([Firefox バグ 801425](https://bugzil.la/801425))。
- `document.createElement(null)` を呼び出すと、`null` は文字列化されて `document.createElement("null")` であるかのように動作します。

### XForms

Firefox 19 で、[XForms](/ja/docs/XForms) のサポートを[**削除しました**](http://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms/)。

## アドオン開発者と Mozilla 開発者向けの変更点

> [!NOTE]
> Firefox 19 での重要な変更点は、[`nsresult`](/ja/docs/XPCOM_API_Reference/nsresult) が強い型付けになったことです。これは戻り値の処理ミスによって発生するバグの発見を容易にしますが、この点を誤って仮定している場合に既存のコードで不具合が発生する可能性があります。

- `getBrowserSelection()` が、テキスト入力フィールドで選択されているテキストを返すようになりました。このため、ユーザーがパスワードフィールドではないテキスト入力フィールドでテキストを選択したときに、`gContextMenu.isTextSelected` が `true` になります ([Firefox バグ 565717](https://bugzil.la/565717))。
- [Dict.jsm](/ja/docs/Mozilla/JavaScript_code_modules/Dict.jsm): [`Dict()`](/ja/docs/Mozilla/JavaScript_code_modules/Dict.jsm#Creating_a_dictionary) が JSON 文字列を受け入れるようになりました。[`Dict.toJSON()`](</ja/docs/Mozilla/JavaScript_code_modules/Dict.jsm#toJSON()>) メソッドが追加され、これは JSON 文字列を返します ([Firefox バグ 727967](https://bugzil.la/727967))。

### インターフェイスの変更点

- `nsIImgLoadingContent`
  - : `addObserver()` メソッドの引数 (aObserver) が `imgIDecoderObserver` から `imgINotificationObserver` に替わりました。`imgINotificationObserver` の `notify()` メソッドはスクリプト可能ではありませんので、`imgITools` の `createScriptedObserver()` を使用しなければなりません。
- `nsIChannel`
  - : `contentLength` プロパティの型を `long` から `int64_t` に変更しました。

## 関連情報

- [Firefox 19 リリースノート](http://www.mozilla.jp/firefox/19.0/releasenotes/)
- [Firefox 19 のアドオン互換性に関わる修正のまとめ](https://dev.mozilla.jp/2013/02/firefox-19-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('18')}}
