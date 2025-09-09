---
title: Firefox 21 for developers
slug: Mozilla/Firefox/Releases/21
---

Gecko 21 を搭載した Firefox 21 は米国時間 2013 年 5 月 14 日にリリースされました。このページでは、開発者に影響する Firefox 20 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("style")}} 要素に [`scoped`](/ja/docs/Web/HTML/Reference/Elements/style#scoped) 属性を追加しました。これは、ドキュメントの他の部分から隔離されたスタイルを含めることを可能にします。このようなスタイルは、Firefox 20 で導入した {{cssxref(":scope")}} CSS 擬似要素を使用して選択できます ([Firefox バグ 508725](https://bugzil.la/508725))。
- 新たな HTML 要素 {{HTMLElement("main")}} を実装しました ([Firefox バグ 820508](https://bugzil.la/820508))。

### JavaScript

- 旧式の JavaScript 拡張である [E4X](/ja/docs/E4X) を削除しました。Gecko しか実装せず、有意な牽引力は得られませんでした ([Firefox バグ 788293](https://bugzil.la/788293))。
- [parseInt](/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt) は、先頭が "0" の文字列を 8 進数として扱わないようになりました ([Firefox バグ 786135](https://bugzil.la/786135))。

### CSS

- {{cssxref("user-select", "-moz-user-select")}} の値 `none` は、値 `-moz-none` と同じ動作になりました。Gecko が WebKit (Chrome, Safari)、Presto (Opera)、Trident (Internet Explorer) に合わせています ([Firefox バグ 816298](https://bugzil.la/816298))。
- XHTML コンテンツで {{cssxref("hyphens", "-moz-hyphens")}} の値 `auto` は、言語が明示的に宣言されていないときに間違ったハイフネーションルールを適用していました。これは ([Firefox バグ 702121](https://bugzil.la/702121)) で修正されました。
- CSS {{cssxref("-moz-orient")}} プロパティに値 `auto` を追加しました。値 `auto` は {{HTMLElement("meter")}} や {{HTMLElement("progress")}} に適用されたときに、`horizontal` と同等です ([Firefox バグ 835883](https://bugzil.la/835883))。

### DOM

- {{domxref("window.location")}} に `origin` プロパティを追加しました ([Firefox バグ 828261](https://bugzil.la/828261))。
- `<input type="time">` 向けに `valueAsDate` メソッドと `valueAsNumber` メソッドを追加しました ([Firefox バグ 781570](https://bugzil.la/781570))。
- `<input type="time">` に `min` 属性と `max` 属性が適用されるようになりました ([Firefox バグ 781572](https://bugzil.la/781572))。
- ボリュームコントロールのために、新たな keyCode をサポートしました ([Firefox バグ 674739](https://bugzil.la/674739))。
- AS/400 など昔のキーボードのレイアウト向けに、新たな keyCode を Windows および Linux でサポートしました ([Firefox バグ 833719](https://bugzil.la/833719))。
- Windows で、OEM 特有のキー向けのさまざまな keyCode 値を再びサポートしました ([Firefox バグ 833719](https://bugzil.la/833719))。
- 関数 [`window.crypto.getRandomValues`](/ja/docs/Web/API/Crypto/getRandomValues) を実装しました ([Firefox バグ 440046](https://bugzil.la/440046))。

### SVG

- {{cssxref("paint-order")}} プロパティを実装しました ([Firefox バグ 828805](https://bugzil.la/828805))。

### Networking

- CSP 実装を CSP 1.0 仕様 (勧告候補になりました) に準拠させるよう更新する作業を続けています:
  - 仕様書に準拠した `Content-Security-Policy` HTTP ヘッダーを (実験的な `X-Content-Security-Policy` に加えて) サポートしました ([Firefox バグ 783049](https://bugzil.la/783049)。**注意**: 新たなヘッダーのパッチは Firefox 21 で投入しましたが、ビルド時は無効にしています ([Firefox バグ 842657](https://bugzil.la/842657))。

### Worker

- {{domxref("window.URL.createObjectURL", "URL.createObjectURL")}} 関数と {{domxref("window.URL.revokeObjectURL", "URL.revokeObjectURL")}} 関数が、[Worker で利用可能な関数](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)に加わりました。

## アドオン開発者と Mozilla 開発者向けの変更点

- FUEL アプリケーションは Livemark Service を利用できません ([Firefox バグ 834492](https://bugzil.la/834492))。Livemark Service は非推奨になり段階的に廃止され、新たな非同期インターフェイスを採用します。
- `resource:///modules/` と `resource://gre/modules/` は異なるものになりました ([Firefox バグ 755724](https://bugzil.la/755724))。これは、metro 版の Firefox における作業のために行った変更です。`resource:///modules/` を使用してモジュールを読み込んでいる場合は、そうではなく `resource://gre/modules/` を使用したいのではないかを確認するべきです。また、一部のモジュールが Firefox から Toolkit に移動したことに注意してください ([Firefox バグ 840287](https://bugzil.la/840287) および [Firefox バグ 811548](https://bugzil.la/811548) で、`NewTabUtils.jsm` および thumbnail モジュールがそれぞれ移動しました)。
- Add-on SDK を Firefox に内蔵しました。([Firefox バグ 731779](https://bugzil.la/731779))
- 多くの非推奨 API を参照していた古い API を削除しました:
  - `mozIAsyncFavicons` で置き換え:
    - `nsIFaviconService::setFaviconUrlForPage`
    - `nsIFaviconService::setFaviconData`
    - `nsIFaviconService::getFaviconData`
    - `nsIFaviconService::getFaviconForPage`
    - `nsIFaviconService::setAndLoadFaviconForPage`
    - `nsIFaviconService::getFaviconImageForPage`
    - `nsIFaviconService::getFaviconDataAsDataURL`

  - `mozIAsyncLivemarks` で置き換え:
    - `nsILivemarkService::*`
    - `PlacesUtils.itemIsLivemark`
    - `PlacesUtils.nodeIsLivemarkContainer`
    - `PlacesUtils.nodeIsLivemarkItem`

  - 第 3 引数のみ削除:
    - `PlacesUIUtils.showBookmarkDialog`

  - Places でこれ以上の実装はありませんので、代わりに `mozIAsyncHistory` を使用してください:
    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - 不要になりましたので、`onDeleteURI` または `onItemRemoved` を使用してください:
    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - 正しく実装されていません:
    - `nsINavHistoryFullVisitResultNode`

  - 非推奨であり、代わりに `mozIAsyncHistory::updatePlaces` を使用してください:
    - `nsINavHistoryService::AddVisit`

- 壊れやすいハックを行うことなく HTTP チャネルのリダイレクトを可能にする、nsIHttpChannel.redirectTo を追加しました。

## 関連情報

- [Firefox 21 リリースノート](http://www.mozilla.jp/firefox/21.0/releasenotes/)
- [Firefox 21 アドオン互換性情報](https://dev.mozilla.jp/2013/04/firefox-21-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('20')}}
