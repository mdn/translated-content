---
title: "Reason: CORS preflight channel did not succeed"
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## 理由

```plain
Reason: CORS preflight channel did not succeed
```

## エラーの原因

{{Glossary("CORS")}} の要求がプリフライトを必要としていますが、プリフライトが実行できませんでした。プロフライトが失敗したと理由として考えられることは複数あります。

- すでにサイト間の要求でプリフライトが行われており、プリフライトを再び行うことが許可されていない。コードを確認して、一つのコネクションで一度だけプリフライトを行うようにしてください。
- プリフライト要求は単に通常のネットワークエラーの類で失敗した。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
