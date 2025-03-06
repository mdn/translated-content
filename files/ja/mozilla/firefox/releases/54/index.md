---
title: Firefox 54 for developers
slug: Mozilla/Firefox/Releases/54
---

{{FirefoxSidebar}}

Firefox 54 は、米国時間 2017 年 6 月 13 日にリリースされました。このページでは、開発者に影響する Firefox 54 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ネットワーク要求の要約で、パフォーマンス解析ビューと同様に、実際に転送されたデータの量 ("転送量") を表示するようになりました ([Firefox バグ 1168376](https://bugzil.la/1168376))。
- ネットワーク要求のヘッダービューで、MDN の関連ドキュメントへのリンクを追加しました ([Firefox バグ 1320233](https://bugzil.la/1320233))。

### CSS

- {{cssxref("clip-path")}} で [基本シェイプ](/ja/docs/Web/CSS/CSS_shapes) をサポートしました ([Firefox バグ 1247229](https://bugzil.la/1247229))。
- Firefox の CSS Flexbox と CSS alignment の実装で、{{cssxref("align-items")}} と {{cssxref("align-self")}}、{{cssxref("justify-items")}} と {{cssxref("justify-self")}} の相互作用について更新された仕様を実装しました ([Firefox バグ 1340309](https://bugzil.la/1340309))。
- type が `checkbox` および `radio` である {{htmlelement("input")}} で {{cssxref("appearance", "-moz-appearance")}}`: none;` を設定した場合に、他のブラウザーとの互換性のため非置換要素にするようになりました ([Firefox バグ 605985](https://bugzil.la/605985))。
- 以前は、`display:block` を指定した {{domxref("HTMLInputElement")}} 型の子要素を持つ、{{cssxref("display")}}`: inline-block` を指定した要素のベースラインが誤っていました ([Firefox バグ 1330962](https://bugzil.la/1330962))。この問題を修正しました。
- Mozilla がコンテンツ専用のスレッドを (Electrolysis または e10s プロジェクトで) Firefox に導入したとき、{{HTMLElement("option")}} 要素へのスタイル設定機能のを一時的に削除しました。Firefox 54 より {{cssxref("color")}} および {{cssxref("background-color")}} プロパティを使用して、`<option>` 要素に再び前景色や背景色を設定できるようになりました。詳しくは [Firefox バグ 910022](https://bugzil.la/910022) をご覧ください。Linux では、コントラストが不足するためまだ無効化していますので注意してください (進捗状況は [Firefox バグ 1338283](https://bugzil.la/1338283) で確認してください)。
- [CSS Animations](/ja/docs/Web/CSS/CSS_animations) でアニメーションが早期に終了したとき、想定どおりに {{domxref("Element/animationcancel_event", "animationcancel")}} イベントが発生するようになりました ([Firefox バグ 1302648](https://bugzil.la/1302648))。
- 透過色 (すなわち、アルファチャンネルが 0 である色) が、特定の状況 で [`transparent` 色キーワード](/ja/docs/Web/CSS/color_value#transparent_keyword) にシリアライズされていました。これを、仕様書や他のブラウザーの実装に従うよう修正しました。詳しくは [Firefox バグ 1339394](https://bugzil.la/1339394) をご覧ください。
- 独自仕様である `:-moz-table-border-nonzero` 擬似クラスが、ウェブコンテンツで使用できなくなりました。Firefox 内部の UA スタイルシートのみに制限されています ([Firefox バグ 1341925](https://bugzil.la/1341925))。
- \[css-grid] overflow:auto を指定したコンテンツがグリッド内で重なり合う問題を修正しました ([Firefox バグ 1348857](https://bugzil.la/1348857))。
- \[css-grid] 固有の比率を持つ、サイズをパーセンテージで指定したグリッドアイテムに対する、Transferred min-size の寄与に関する問題を修正しました ([Firefox バグ 1349320](https://bugzil.la/1349320))。

### JavaScript

- `"u"` (Unicode) フラグと `"i"` (大文字・小文字を無視) フラグを設定した {{jsxref("RegExp")}} で `\b` および `\B` は、U+017F (LATIN SMALL LETTER LONG S) および U+212A (KELVIN SIGN) を単語に使用される文字として扱うようになりました ([Firefox バグ 1338373](https://bugzil.la/1338373))。
- {{jsxref("DataView")}} コンストラクターで、`byteOffset` 引数が {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) の範囲外であるときに {{jsxref("RangeError")}} が発生するようになりました ([Firefox バグ 1317382](https://bugzil.la/1317382))。
- {{jsxref("Date.UTC()")}} メソッドで引数が 2 個未満である場合の動作を、ECMAScript 2017 に準拠するように更新しました ([Firefox バグ 1050755](https://bugzil.la/1050755))。
- {{jsxref("Function.prototype.toString()")}} メソッドを、最新の [仕様案](https://tc39.es/Function-prototype-toString-revision/) に準拠するよう更新しました ([Firefox バグ 1317400](https://bugzil.la/1317400))。

### DOM & HTML DOM

- {{domxref("URL.toJSON()")}} メソッドを実装しました ([Firefox バグ 1337702](https://bugzil.la/1337702))。
- {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} コンストラクターが、init オブジェクトとして文字列を含むレコードを受け入れるようになりました ([Firefox バグ 1331580](https://bugzil.la/1331580))。
- macOS で、control キーと印刷可能なキーを組み合わせた場合に {{domxref("KeyboardEvent.key")}} が返す値を修正しました (command キーの押下中を除く) ([Firefox バグ 1342865](https://bugzil.la/1342865))。
- 主に、worker で [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) を使用したときに発生する問題 ([Firefox バグ 855665](https://bugzil.la/855665) のため。これは修正済み) を回避するために実装した設定項目 `dom.workers.latestJSVersion` を削除しました ([Firefox バグ 1219523](https://bugzil.la/1219523))。
- {{domxref("event.timeStamp")}} プロパティが、エポック時刻 ({{domxref("DOMTimeStamp")}})に代わり高精度モノトニック時刻 ({{domxref("DOMHighResTimeStamp")}}) を返すようになりました。

### Web Workers および Service Workers

- {{domxref("WorkerGlobalScope.close")}} が、{{domxref("DedicatedWorkerGlobalScope.close", "DedicatedWorkerGlobalScope")}} および {{domxref("SharedWorkerGlobalScope.close", "SharedWorkerGlobalScope")}} で利用可能になりました。この変更は、service workers で使用してはならない `close()` を使用できないようにして、呼び出された場合は常に例外が発生します ([Firefox バグ 1336043](https://bugzil.la/1336043))。
- {{domxref("origin")}} プロパティを実装しました ([Firefox バグ 1306170](https://bugzil.la/1306170))。
- {{domxref("Client.type")}} プロパティを実装しました ([Firefox バグ 1339844](https://bugzil.la/1339844))。
- {{domxref("Clients.matchAll()")}} が {{domxref("Client")}} オブジェクトを、直近に注視した順序で返すようになりました ([Firefox バグ 1266747](https://bugzil.la/1266747))。
- 新しいインスタンスを生成するために {{domxref("Request.Request","Request()")}} へ既存の {{domxref("Request")}} オブジェクトが渡されたときに見られる動作を、若干変更しました。以下の新たな動作は例外を発生しにくくするとともに、セキュリティを維持するように設計しました:

  - コンストラクターを呼び出すオリジンとは別のオリジンにこのオブジェクトが存在する場合は、{{domxref("Request.referrer")}} を削除します。
  - このオブジェクトの {{domxref("Request.mode")}} が `navigate` である場合は、`mode` の値を `same-origin` に変換します。

### Audio/Video

#### 全般

- Windows、macOS、Linux で、5.1ch サラウンド音声の再生をデフォルトで有効化しました ([Firefox バグ 1334508](https://bugzil.la/1334508)、[Firefox バグ 1321502](https://bugzil.la/1321502)、[Firefox バグ 1323659](https://bugzil.la/1323659))。

#### Media Capture and Streams API

- {{domxref("URL.createObjectURL()")}} の入力引数として {{domxref("MediaStream")}} オブジェクトを使用することが非推奨になりました。コンソールに警告を表示します ([Firefox バグ 1334564](https://bugzil.la/1334564))。代わりに {{domxref("HTMLMediaElement.srcObject")}} を使用することを推奨します。

#### Web Audio API

- {{domxref("AnalyserNode.getFloatFrequencyData()")}} メソッドが値 `-Infinity` で返すバッファーで、正しく無音のサンプルを表すようになりました ([Firefox バグ 1336098](https://bugzil.la/1336098))。
- {{domxref("AudioParam.setValueCurveAtTime()")}} で、指定された値のいずれかが有限値ではない場合に `TypeError` 例外が発生するようになりました ([Firefox バグ 1308437](https://bugzil.la/1308437))。

#### Encrypted MediaExtensions API

- `MediaKeySession.keySystem` 文字列が仕様書から削除されたため、Firefox 54 で廃止しました ([Firefox バグ 1335555](https://bugzil.la/1335555))。
- [Clear Key](https://www.w3.org/TR/encrypted-media/#clear-key) および [Widevine](https://www.widevine.com/) を使用する暗号化ストリームで、VP9 コーデックをサポートしました ([Firefox バグ 1338064](https://bugzil.la/1338064))。
- 以前は MSE で、システムが "十分に高速である" と思われる場合に限り WebM/VP8 動画の使用を許可していましたが、システムのパフォーマンスにかかわらず VP8 でエンコードした `webm/video` メディアの再生をサポートするようになりました。

#### WebRTC

- Firefox 41 で追加した TCP ICE candidate のサポートを、デフォルトで有効にしました。これにより、転送に好ましい UDP ではなく TCP を使用することを ICE レイヤーが候補として検討することを可能にします。これは、UDP がブロックされている環境で役に立つでしょう ([Firefox バグ 1176382](https://bugzil.la/1176382))。[こちらのブログ投稿](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) で、この機能を詳しく説明しています。

## ウェブプラットフォームから廃止

### CSS

- {{cssxref("unicode-bidi")}} プロパティの値 `isolate`、`isolate-override`、`plaintext` について、`-moz` 接頭辞がついている値を削除しました ([Firefox バグ 1333675](https://bugzil.la/1333675))。

### HTTP

- Firefox 54 で、HTTP/1 のパイプラインのサポートを廃止しました。ネットワークのパフォーマンス向上が標準化された HTTP/2 や他の価値ある技術が充実した段階へ移行するにつれて、パイプラインは互換性やパフォーマンスの問題によりメンテナンスする価値がなくなります。設定項目 `network.http.pipelining` (および "network.http.pipelining" で始まる他の項目) は無視します。詳しくは [Firefox バグ 1340655](https://bugzil.la/1340655) をご覧ください。

## 過去のバージョン

{{Firefox_for_developers(53)}}
