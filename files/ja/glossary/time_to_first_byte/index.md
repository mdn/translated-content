---
title: Time to first byte （最初のバイトまでの時間）
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) とは、ブラウザーがページをリクエストしてから、サーバーから最初の情報を受信するまでの時間を指します。この時間には [DNS](/ja/docs/Glossary/DNS) ルックアップと、 [TCP](/ja/docs/Glossary/TCP) ハンドシェイクと [SSL](/ja/docs/Glossary/SSL) ハンドシェイク（リクエストが[HTTPS](/ja/docs/Glossary/HTTPS)を使用している場合）を使用して接続を確立する時間が含まれます。

TTFB は、リクエストの開始からレスポンスの開始までにかかる時間をミリ秒単位で表したものです。

```plain
TTFB = responseStart - navigationStart
```

## 関連情報

- [典型的な HTTP セッション](/ja/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/ja/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/ja/docs/Web/API/PerformanceTiming)
