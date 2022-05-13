---
title: Firefox 100 for developers
slug: Mozilla/Firefox/Releases/100
tags:
  - '100'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 100 の変更点をまとめています。Firefox 100 は、米国時間 2022 年 5 月 3 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- [`dynamic-range`](/ja/docs/Web/CSS/@media/dynamic-range) および [`video-dynamic-range`](/ja/docs/Web/CSS/@media/video-dynamic-range) 向けの CSS メディア特性をサポートしました。`dynamic-range` を使用して、ユーザーエージェントや出力デバイスが輝度、コントラスト比、色深度の組み合わせをサポートしているかを確認できます。また `video-dynamic-range` は、ビデオプレーンで確認できます ({{bug(1751217)}})。

### JavaScript

変更なし。

### HTTP

#### 廃止

- 非標準の {{httpheader("Large-Allocation")}} HTTP ヘッダーを削除しました ({{bug(1598759)}})。

### API

- [`WritableStream`](/ja/docs/Web/API/WritableStream)、[`WritableStreamDefaultWriter`](/ja/docs/Web/API/WritableStreamDefaultWriter)、[`WritableStreamDefaultController`](/ja/docs/Web/API/WritableStreamDefaultController)、[`ReadableStream.pipeTo()`](/ja/docs/Web/API/ReadableStream/pipeTo) をサポートしました ({{bug(1759597)}})。

#### DOM

- コードで [`AbortSignal.timeout()`](/ja/docs/Web/API/AbortSignal/timeout) 静的メソッドが使用可能になりました。
  これは、指定した時間の後に `TimeoutError` で操作を自動的に中止するために使用できる {{domxref("AbortSignal")}} を返します ({{bug(1753309)}})。

### WebAssembly

- WebAssembly で、WebAssembly または Javascript (あるいは他のランタイム) のどちらかでスローおよびキャッチでき、処理されない場合は環境の境界を越える例外をサポートしました。
  WebAssembly の例外を JavaScript で表したものが、[WebAssembly.Exception](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception) および [WebAssembly.Tag](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag) です ({{bug(1759217)}})。

### WebDriver conformance (Marionette)

- Android でユーザープロンプト (たとえば `alert`) をサポートしました ({{bug(1708105)}})。

## 過去のバージョン

{{Firefox_for_developers(99)}}
