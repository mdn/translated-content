---
title: "Reason: CORS preflight channel did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

## 理由

```plain
Reason: CORS preflight channel did not succeed
```

## エラーの原因

{{Glossary("CORS")}} の要求がプリフライトを必要としていますが、プリフライトが実行できませんでした。プロフライトが失敗したと理由として考えられることは複数あります。

- すでにサイト間の要求でプリフライトが行われており、プリフライトを再び行うことが許可されていない。コードを確認して、一つのコネクションで一度だけプリフライトを行うようにしてください。
- プリフライト要求は単に通常のネットワークエラーの類で失敗した。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/Guides/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/Guides/CORS)
