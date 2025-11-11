---
title: Firefox 100 for developers
slug: Mozilla/Firefox/Releases/100
---

このページでは、開発者に影響する Firefox 100 の変更点をまとめています。Firefox 100 は、米国時間 2022 年 5 月 3 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- [`dynamic-range`](/ja/docs/Web/CSS/Reference/At-rules/@media/dynamic-range) および [`video-dynamic-range`](/ja/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range) 向けの CSS メディア特性をサポートしました。`dynamic-range` を使用して、ユーザーエージェントや出力デバイスが輝度、コントラスト比、色深度の組み合わせをサポートしているかを確認できます。また `video-dynamic-range` は、ビデオプレーンで確認できます ([Firefox バグ 1751217](https://bugzil.la/1751217))。

### JavaScript

変更なし。

### HTTP

#### 廃止

- 非標準の {{httpheader("Large-Allocation")}} HTTP ヘッダーを削除しました ([Firefox バグ 1598759](https://bugzil.la/1598759))。

### API

- [`WritableStream`](/ja/docs/Web/API/WritableStream)、[`WritableStreamDefaultWriter`](/ja/docs/Web/API/WritableStreamDefaultWriter)、[`WritableStreamDefaultController`](/ja/docs/Web/API/WritableStreamDefaultController)、[`ReadableStream.pipeTo()`](/ja/docs/Web/API/ReadableStream/pipeTo) をサポートしました ([Firefox バグ 1759597](https://bugzil.la/1759597))。

#### DOM

- コードで [`AbortSignal.timeout()`](/ja/docs/Web/API/AbortSignal/timeout_static) 静的メソッドが使用可能になりました。
  これは、指定した時間の後に `TimeoutError` で操作を自動的に中止するために使用できる {{domxref("AbortSignal")}} を返します ([Firefox バグ 1753309](https://bugzil.la/1753309))。

### WebAssembly

- WebAssembly で、WebAssembly または Javascript (あるいは他のランタイム) のどちらかでスローおよびキャッチでき、処理されない場合は環境の境界を越える例外をサポートしました。
  WebAssembly の例外を JavaScript で表したものが、[WebAssembly.Exception](/ja/docs/WebAssembly/JavaScript_interface/Exception) および [WebAssembly.Tag](/ja/docs/WebAssembly/JavaScript_interface/Tag) です ([Firefox バグ 1759217](https://bugzil.la/1759217))。

### WebDriver conformance (Marionette)

- Android でユーザープロンプト (たとえば `alert`) をサポートしました ([Firefox バグ 1708105](https://bugzil.la/1708105))。

## 過去のバージョン

{{Firefox_for_developers(99)}}
