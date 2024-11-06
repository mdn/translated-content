---
title: "XMLHttpRequest: channel プロパティ"
short-title: channel
slug: Web/API/XMLHttpRequest/channel
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

XMLHttpRequest.channel は `nsIChannel` で、リクエストを送信するときにオブジェクトによって使用されます。 channel がまだ作られていない場合、これは `null` です。マルチパートリクエストのときは、これは最初の channel であり、マルチパートリクエストの異なるパートのことではありません。**アクセスするには、権限昇格が必要です。**
