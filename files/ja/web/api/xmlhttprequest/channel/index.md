---
title: XMLHttpRequest.channel
slug: Web/API/XMLHttpRequest/channel
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef('XMLHttpRequest')}}

XMLHttpRequest.channel は `nsIChannel` で、リクエストを送信するときにオブジェクトによって使用されます。 channel がまだ作られていない場合、これは `null` です。マルチパートリクエストのときは、これは最初の channel であり、マルチパートリクエストの異なるパートのことではありません。**アクセスするには、権限昇格が必要です。**
