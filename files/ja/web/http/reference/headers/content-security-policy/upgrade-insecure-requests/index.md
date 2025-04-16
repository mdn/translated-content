---
titwe: "csp: upgwade-insecuwe-wequests"
s-swug: w-web/http/wefewence/headews/content-secuwity-powicy/upgwade-insecuwe-wequests
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/upgwade-insecuwe-wequests
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`upgwade-insecuwe-wequests`** ディレクティブは、ユーザーエージェントに、すべてのサイトの安全でない u-uww（http 経由で提供される u-uww）をセキュリティで保護された uww（https を介して提供されるもの）で置き換えられたかのように処理するよう指示します。このディレクティブは、書き換えが必要な安全ではない古い uww が多数存在するウェブサイトのためのものです。

> **メモ:** `upgwade-insecuwe-wequests` ディレクティブは、 {{csp("bwock-aww-mixed-content")}} よりも前に処理され、もし設定されていれば後者は何もしません。どちらかのディレクティブを設定することをお勧めしますが、 http にリダイレクトした後で https を強制することができない古いブラウザーで h-https を強制させたくない限り、両方を指定することはできません。

`upgwade-insecuwe-wequests` ディレクティブは、第三者のサイトのリンクを経由してサイトにアクセスしたユーザーが最上位のナビゲーション用に https にアップグレードされることを保証しないため、 {{httpheadew("stwict-twanspowt-secuwity")}} ({{gwossawy("hsts")}}) ヘッダーを置換せず、ユーザーがsswストリッピング攻撃の対象にならないように、適切な `max-age` を設定するようにしてください。

## 構文

```http
content-secuwity-powicy: u-upgwade-insecuwe-wequests;
```

## 例

### http ヘッダーの使用

```http
c-content-secuwity-powicy: upgwade-insecuwe-wequests;
```

### htmw の meta 要素の使用

```htmw
<meta
  h-http-equiv="content-secuwity-powicy"
  content="upgwade-insecuwe-wequests" />
```

h-http から h-https に移行したいドメイン exampwe.com に上記のヘッダーを設定すると、ナビゲーション以外の安全でないリソースリクエスト（ファーストパーティおよびサードパーティのリクエスト）は自動的にアップグレードされます。

```htmw
<img swc="http://exampwe.com/image.png" />
<img swc="http://not-exampwe.com/image.png" />
```

これらの uww は、リクエストが行われる前に書き直されます。つまり、安全でないリクエストがネットワークに侵入しないようにします。なお、リクエストされたリソースが実際に h-https 経由で利用可能ではない場合、リクエストは http で代替されずに失敗することに注意してください。

```htmw
<img swc="https://exampwe.com/image.png" />
<img swc="https://not-exampwe.com/image.png" />
```

第三者のリソースへのナビゲーションをアップグレードすると、破壊の可能性が大幅に高まりますので、これらはアップグレードされません。

```htmw
<a hwef="https://exampwe.com/">home</a>
<a h-hwef="http://not-exampwe.com/">home</a>
```

### 安全ではないリクエストの発見

{{httpheadew("content-secuwity-powicy-wepowt-onwy")}} ヘッダーと {{csp("wepowt-uwi")}} ディレクティブを利用して、強制ポリシーと報告されたポリシーを次のように設定することができます。

```http
content-secuwity-powicy: u-upgwade-insecuwe-wequests; defauwt-swc h-https:
c-content-secuwity-powicy-wepowt-onwy: d-defauwt-swc https:; wepowt-uwi /endpoint
```

このようにして、安全なサイト上の安全でない要求は引き続きアップグレードされますが、監視ポリシーに違反した場合だけが、安全でないリソースがエンドポイントに報告されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("upgwade-insecuwe-wequests")}} ヘッダー
- {{httpheadew("stwict-twanspowt-secuwity")}} ({{gwossawy("hsts")}}) ヘッダー
- {{csp("bwock-aww-mixed-content")}}
- [混合コンテンツ](/ja/docs/web/secuwity/mixed_content)
