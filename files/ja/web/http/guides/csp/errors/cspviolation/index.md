---
title: "Content Security Policy: The page's settings blocked the loading of a resource: xyz"
slug: Web/HTTP/Guides/CSP/Errors/CSPViolation
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

警告 "Content Security Policy: The page's settings blocked the loading of a resource: xyz" は、`xyz` で指定されたページの CSP 設定が、文書のコンテキストにリソースが読み込まれるのを妨げた場合に発生します。

## エラーメッセージ

### Firefox

`Content Security Policy: The pages settings blocked the loading of a resource: xyz`

ここで、

- `xyz`
  - : リソースをブロックした CSP ディレクティブの名前です。これはディレクティブの名前そのものか、ポリシーのディレクティブ文字列全体で表される可能性があります。
- `uvw`
  - : 問題を解決するのに役立つ可能性がある情報を提供する文字列であり、CSP 構成に行う可能性がある特定の変更を含むこともあります。

### Chrome

- `Refused to apply inline style because it violates the following Content Security Policy Directive: "xyz". uvw.`
- `Refused to execute inline script because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to run the JavaScript URL because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to execute inline event handler because it violates the following Content Security Policy directive: "xyz". uvw.`

ここで、

- `xyz`
  - : リソースをブロックした CSP ディレクティブの名前です。これはディレクティブの名前そのものか、ポリシーのディレクティブ文字列全体で表される可能性があります。
- `uvw`
  - : 問題を解決するのに役立つ可能性がある情報を提供する文字列であり、CSP 構成に行う可能性がある特定の変更を含むこともあります。

## エラーの原因

この警告メッセージは、特定の CSP ディレクティブが存在するためにリソースが読み込まれなかったことを意味します。

## 関連情報

- [CSP のエラーと警告](/ja/docs/Web/HTTP/Guides/CSP/Errors)
- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
