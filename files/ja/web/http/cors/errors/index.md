---
title: CORS のエラー
slug: Web/HTTP/CORS/Errors
---

{{HTTPSidebar}}

[オリジン間リソース共有](/ja/docs/Web/HTTP/CORS) (Cross-Origin Resource Sharing) ({{Glossary("CORS")}}) は、サーバーが[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)を緩和することができる標準です。例えば、サイトが埋め込み可能なサービスを提供する場合、このような制約を緩和する必要があるかもしれません。このような CORS の構成の設定は必ずしも簡単ではなく、いくらか冒険的です。これらのページでは、よくある CORS のエラーメッセージと解決方法を調査します。

CORS 構成が正しく設定されていないと、ブラウザーコンソールには `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"` のようなエラーを表示して、リクエストが CORS のセキュリティ規則を侵害しているためにブロックされたことを示します。これは必ずしも設定ミスとは限りません。実際には、ユーザーのウェブアプリケーションおよびリモートの外部サービスからのリクエストが、意図的に許可されていない場合もあります。しかし、ただし、エンドポイントが使用可能である場合、成功するためにはデバッグが必要です。

## 問題の識別

CORS の構成に関する問題を理解するために、どのリクエストが、なぜ失敗したのかを調べる必要があります。そのためには以下の手順が役立つかもしれません。

1. 問題のウェブサイトやウェブアプリを実行し、[開発者ツール](/ja/docs/Tools)を開く。
2. 失敗するトランザクションを再現してみて、[コンソール](/ja/docs/Tools/Web_Console)で CORS 違反エラーメッセージが表示されるかを調べる。おそらく次のように見える。

![CORS エラーを表示している Firefox コンソール](cors-error2.png)

エラーメッセージのテキストは以下のようなものになるでしょう。

```
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> **メモ:** セキュリティ上の理由から、 CORS リクエストで何を失敗したかについては _JavaScript コードからは特定できません_。コードから分かることは、エラーが発生したことだけです。何を失敗したかを特定するための唯一の方法は、詳細をブラウザーのコンソールで見ることです。

## CORS のエラーメッセージ

Firefox のコンソールは、 CORS のためにリクエストが失敗した場合はコンソールにメッセージを表示します。エラーテキストには、何が失敗したのかの分析が追加された「reason」の部分があります。 reason のメッセージは以下の通りです。メッセージをクリックすると、エラーをより詳細に説明し、可能な解決方法を提供する記事を開くことができます。

- [Reason: CORS disabled](/ja/docs/Web/HTTP/CORS/Errors/CORSDisabled)
- [Reason: CORS request did not succeed](/ja/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed)
- [Reason: CORS header 'Origin' cannot be added](/ja/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded)
- [Reason: CORS request external redirect not allowed](/ja/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Reason: CORS request not http](/ja/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
- [Reason: CORS header 'Access-Control-Allow-Origin' missing](/ja/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)
- [Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'](/ja/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '\*'](/ja/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)
- [Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'](/ja/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound)
- [Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'](/ja/docs/Web/HTTP/CORS/Errors/CORSMissingAllowCredentials)
- [Reason: CORS preflight channel did not succeed](/ja/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed)
- [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'](/ja/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod)
- [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'](/ja/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader)
- [Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel](/ja/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed](/ja/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## 関連情報

- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
- [サーバー側 CORS 設定](/ja/docs/Web/HTTP/Server-Side_Access_Control)
- [CORS 有効化の画像](/ja/docs/Web/HTML/CORS_enabled_image)
- [CORS の設定属性](/ja/docs/Web/HTML/CORS_settings_attributes)
- <https://www.test-cors.org> – CORS リクエストの試験ページ
