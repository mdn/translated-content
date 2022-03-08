---
title: XMLHttpRequest.channel
slug: Web/API/XMLHttpRequest/channel
tags:
  - API
  - 標準外
  - プロパティ
  - リファレンス
  - XHR
  - XMLHttpRequest
  - channel
  - nsIChannel
translation_of: Web/API/XMLHttpRequest/channel
---
{{draft}}{{APIRef('XMLHttpRequest')}}

XMLHttpRequest.channel は [`nsIChannel`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIChannel) で、リクエストを送信するときにオブジェクトによって使用されます。 channel がまだ作られていない場合、これは `null` です。マルチパートリクエストのときは、これは最初の channel であり、マルチパートリクエストの異なるパートのことではありません。**アクセスするには、権限昇格が必要です。**
