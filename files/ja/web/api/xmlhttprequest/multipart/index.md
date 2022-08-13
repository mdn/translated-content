---
title: XMLHttpRequest.multipart
slug: Web/API/XMLHttpRequest/multipart
tags:
  - API
  - Gecko
  - Mozilla
  - Non-standard
  - Obsolete
  - Property
  - Reference
  - XMLHttpRequest
  - multipart
translation_of: Web/API/XMLHttpRequest/multipart
---
{{APIRef('XMLHttpRequest')}}{{non-standard_header}}

> **Warning:** Gecko 22 から廃止されました。

**この Gecko 専用機能は Firefox/Gecko 22 で削除されました**。代わりに [Server-Sent Events](/ja/docs/Web/API/Server-sent_events)、[Web Sockets](/ja/docs/Web/API/WebSockets_API)、または progress イベントからの `responseText` を使用してください。

この真偽値は、レスポンスが複数の XML ドキュメントのストリームになる可能性があることを示します。 `true` に設定されている場合、最初のレスポンスのコンテンツタイプは `multipart/x-mixed-replace` でなければなりません。すべてのリクエストは非同期でなければなりません。

このリクエストに書き込まれた各 XML ドキュメントに対して新しい XML DOM ドキュメントが作成され、ドキュメント間で `onload` ハンドラが呼び出されます。

> **Note:** **メモ:** これが設定されている場合、最初の XMLdocument がロードされた後、`onload` ハンドラや他のイベントハンドラはリセットされず、レスポンスの各部分が受信された後に `onload` ハンドラが呼び出されます。
