---
title: "XMLHttpRequest: channel プロパティ"
short-title: channel
slug: conflicting/Web/API/XMLHttpRequest_09acd645e7861f7879a2b087341c15b9ace12d3c28dc521c066202ff5438c949
original_slug: Web/API/XMLHttpRequest/channel
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

XMLHttpRequest.channel は `nsIChannel` で、リクエストを送信するときにオブジェクトによって使用されます。 channel がまだ作られていない場合、これは `null` です。マルチパートリクエストのときは、これは最初の channel であり、マルチパートリクエストの異なるパートのことではありません。**アクセスするには、権限昇格が必要です。**
