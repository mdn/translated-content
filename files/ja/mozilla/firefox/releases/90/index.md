---
title: Firefox 90 for developers
slug: Mozilla/Firefox/Releases/90
---

このページでは、開発者に影響する Firefox 90 の変更点をまとめています。Firefox 90 は、米国時間 2021 年 7 月 13 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- 応答ビューで [ウェブフォントのプレビュー](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response_tab) を表示するようになりました ([Firefox バグ 872078](https://bugzil.la/872078))。

### HTML

- multipart/formdata 形式のフォームペイロードの、改行の正規化やエスケープに関する処理方法を修正しました。これは更新された仕様を満たしており、また他のブラウザーの実装に合致しています ([Firefox バグ 1686765](https://bugzil.la/1686765))。
- Firefox は画像の {{Glossary("intrinsic size", "内在サイズ")}} や解像度を、{{Glossary("EXIF")}} 情報に基づいて設定するようになりました (EXIF 情報が提供されて、自己矛盾がない場合)。これは例えば、読み込みを高速化するためにサーバーが低品質のプレースホルダー画像を送信することを可能にします。また、[ほかにもいくつかの利用方法](https://github.com/eeeps/exif-intrinsic-sizing-explainer) を実現できます ([Firefox バグ 1680387](https://bugzil.la/1680387))。

### CSS

- `-webkit-image-set()` を、標準化された {{cssxref("image/image-set()")}} 関数の別名として実装しました ([Firefox バグ 1709415](https://bugzil.la/1709415))。

### JavaScript

- [プライベート静的フィールド/メソッド、プライベートインスタンスフィールド/メソッド](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements) をデフォルトでサポートしました ([Firefox バグ 1708235](https://bugzil.la/1708235) および [Firefox バグ 1708236](https://bugzil.la/1708236))。
- [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in#private_fields_and_methods) 演算子を、[プライベートなメソッドやフィールドが定義されているかの確認](/ja/docs/Web/JavaScript/Guide/Using_classes#private_fields#checking_if_a_private_fieldmethod_exists) に使用できるようになりました。これはコードを `try/catch` で包むこととは対照的に、未定義の可能性がある機能をよりコンパクトな方法で扱うことができます ([Firefox バグ 1648090](https://bugzil.la/1648090))。
- [`Intl.DateTimeFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) のオプションとして指定する独自の日付や時刻のフォーマットに、`dayPeriod` を含めることが可能になりました。これは、1 日のうちのおおまかな時間帯 (例えば "朝" や "夜" など) を `narrow`、`short` または `long` の文字列として含めることを示します ([Firefox バグ 1645115](https://bugzil.la/1645115))。
- 相対的な位置を指定するメソッドである `at()` を [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)、[`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)、[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) グローバルオブジェクトに追加しました ([Firefox バグ 1681371](https://bugzil.la/1681371))。

### HTTP

- HTTP {{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}} (`Sec-Fetch-*`) をサポートしました。これらのヘッダーは、リクエストが同一オリジン、クロスオリジン、同一サイト、ユーザー起動であるかや、リクエストデータをどこでどのように使用するかといった、リクエストに関する追加のコンテキストをサーバーに提供します。これは、サーバーがいくつかの種類のクロスオリジン攻撃を軽減できます ([Firefox バグ 1695911](https://bugzil.la/1695911))。

#### 廃止

- FTP を Firefox から削除しました ([Firefox バグ 1574475](https://bugzil.la/1574475))。これは [Firefox 88 で非推奨にした](/ja/docs/Mozilla/Firefox/Releases/88#http) ことに続くものです。拡張機能は、引き続き自身を [FTP プロトコルのハンドラー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) として登録できます。

### API

#### DOM

- 非推奨の {{DOMxref("WheelEvent")}} プロパティである `WheelEvent.wheelDelta`、`WheelEvent.wheelDeltaX`、`WheelEvent.wheelDeltaY` をサポートしました。これにより最近行った `WheelEvent` の互換性向上により問題が発生したごく一部のページが、Firefox で動作するようになります ([Firefox バグ 1708829](https://bugzil.la/1708829))。
- {{domxref("Canvas API")}} の {{domxref("CanvasRenderingContext2D")}} インターフェイスで {{domxref('CanvasRenderingContext2D.createConicGradient()','createConicGradient()')}} メソッドを提供するようになりました。これは既存の {{domxref('CanvasRenderingContext2D.createLinearGradient()','linear')}} および {{domxref('CanvasRenderingContext2D.createRadialGradient()','radial')}} グラデーションによく似ている {{domxref('CanvasGradient')}} を返しますが、座標で定義した点の周りを回るグラデーションを生成できます。詳しくは [Firefox バグ 1627014](https://bugzil.la/1627014) をご覧ください。
- `matrix` プロトコルをサポートして、{{domxref('Navigator.registerProtocolHandler()')}} メソッドへ有効なスキームとして渡すことが可能になりました。

### WebDriver conformance (Marionette)

- Marionette が、アクティブな WebDriver セッションを 1 つに制限するようになりました ([Firefox バグ 1691047](https://bugzil.la/1691047))。
- Firefox の新しいタイプのユーザープロンプトをサポートしました ([Firefox バグ 1686741](https://bugzil.la/1686741))。
- ウィンドウハンドルで一意の ID を使用するようになりました。また、[cross-group navigations](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) によって発生するプロセスの交換で ID を変更しないようになりました ([Firefox バグ 1680479](https://bugzil.la/1680479))。
- バックグラウンドのタブで新しいユーザープロンプトが開いたとき、現在の WebDriver のコマンドで不適切な中止が発生する問題を修正しました ([Firefox バグ 1701686](https://bugzil.la/1701686))。
- `WebDriver:GetWindowHandles` コマンドを、アンロードされたタブを適切に扱うように修正しました ([Firefox バグ 1682062](https://bugzil.la/1682062))。
- `WebDriver:NewSession` コマンドを、`proxy` 機能が空の場合でも常に返すように修正しました ([Firefox バグ 1710935](https://bugzil.la/1710935))。

#### 廃止

- [Firefox Firefox 90 で FTP のサポートを廃止した](#removals_http) ことに合わせて、`ftpProxy` 能力を評価しなくなりました。また、この能力を使用したときに `invalid argument` エラーが発生するようになりました ([Firefox バグ 1703805](https://bugzil.la/1703805))。

## アドオン開発者向けの変更点

- `matrix` URI スキームをサポートして、拡張機能の [`manifest.json`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) で [`protocol_handlers`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) キーでプロトコルとして定義できるようになりました。
- 本バージョンから、[Cache API](/ja/docs/Web/API/Cache) を拡張機能のページやワーカーグローバルで使用できるようになりました。詳しくは ([Firefox バグ 1575625](https://bugzil.la/1575625)) をご覧ください。

## 過去のバージョン

{{Firefox_for_developers(89)}}
