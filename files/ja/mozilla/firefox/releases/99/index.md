---
title: Firefox 99 for developers
slug: Mozilla/Firefox/Releases/99
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 99 の変更点をまとめています。Firefox 99 は、米国時間 2022 年 4 月 5 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

変更なし。

### JavaScript

変更なし。

### API

- {{domxref("navigator.pdfViewerEnabled")}} が有効になり、PDF ファイルへ移動するときにブラウザーが PDF のインライン表示をサポートしているか判断するために推奨される方法になりました。
  PDF ビューアーのサポートを推測するために非推奨の {{domxref("navigator.plugins")}} および {{domxref("navigator.mimeTypes")}} プロパティを使用してるサイトは、現時点で `pdfViewerEnabled` が提供するシグナルと一致するハードコードされた擬似的な値が返るとしても、新しいプロパティに移行するべきです ([Firefox バグ 1720353](https://bugzil.la/1720353))。

#### Media、WebRTC、Web Audio

- [`RTCPeerConnection.setConfiguration()`](/ja/docs/Web/API/RTCPeerConnection/setConfiguration) メソッドをサポートしました。
  特に、サイトで設定をネットワークの状態の変化に合わせることを可能にします ([Firefox バグ 1253706](https://bugzil.la/1253706))。

#### 廃止

- [Network Information API](/ja/docs/Web/API/Network_Information_API) は以前 Android (限定) で有効化していましたが、すべてのプラットフォームでデフォルトで無効になりました。
  この API は、フィンガープリンティングに使用されると思われるかなりの量のユーザー情報を公開するため、削除する過程にあります
  ([Firefox バグ 1637922](https://bugzil.la/1637922))。

### WebDriver conformance (Marionette)

- `WebDriver:ElementSendKeys` コマンドのキーシーケンスの一部で、Shift キーが適切に制御されない不具合を修正しました ([Firefox バグ 1757636](https://bugzil.la/1757636))。

## アドオン開発者向けの変更点一覧

## 過去のバージョン

{{Firefox_for_developers(98)}}
