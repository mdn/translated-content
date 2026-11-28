---
title: サブリソース完全性 (SRI) の実装
short-title: Subresource integrity (SRI)
slug: Web/Security/Practical_implementation_guides/SRI
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity) (SRI) により、ブラウザーは取得したリソース（例えば CDN から取得したリソース）が、予期しない改ざんを受けずに配信されたことを検証できます。
取得したリソースと一致する必要がある暗号学的ハッシュを指定できる仕組みにより動作します。

## 問題

攻撃者がコンテンツ配信ネットワーク (CDN) を悪用して、その CDN にホスティングされている JavaScript ライブラリーの内容を変更した場合、これらのライブラリーを使用するすべてのウェブサイトに脆弱性が生じます。

例えば、`library.org` にホスティングされた JavaScript を `example.org` から読み込むと、`example.org` の全内容にアクセスできてしまいます。攻撃者がホスティングされた JavaScript を変更して悪意あるコードを含めた場合、ダウンロードリンクの変更、サイトの改ざん、資格情報の窃取、サービス拒否 (DoS) 攻撃などを引き起こす可能性があります。

## 解決策

特定の時点で既知の内容となっている外部 JavaScript リソースを、SRI を使用して固定します。これは、base64 エンコードされた暗号学的ハッシュで検証されます。リソースを読み込む際に、このハッシュを `integrity` 属性に指定します。

この時点以降にファイルが変更された場合、ハッシュが一致しなくなるため、対応しているウェブブラウザーはファイルの読み込みを拒否します。

外部の JavaScript リソースやスタイルシートリソースを読み込む際には、SRI を使用すべきです。
リソースは HTTPS 経由で読み込む必要があります。

CDN は、[`Access-Control-Allow-Origin`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)ヘッダーを設定することで、[オリジン間リソース共有 (CORS)](/ja/docs/Web/Security/Practical_implementation_guides/CORS)を使用しなければなりません。

## 例

jQuery 2.1.4 を CDN から読み込みます。

```html
<script
  src="https://code.jquery.com/jquery-2.1.4.min.js"
  integrity="sha384-R4/ztc4ZlRqWjqIuvf6RX5yb/v90qNGx6fS48N0tRxiGkqveZETq72KgDVJCp2TC"
  crossorigin="anonymous"></script>
```

AngularJS 1.4.8 を CDN から読み込みます。

```html
<script
  src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"
  integrity="sha384-r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp"
  crossorigin="anonymous"></script>
```

ハッシュを自分で生成します。

```bash
$ curl -s https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js | \
    openssl dgst -sha384 -binary | \
    openssl base64 -A

r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp
```

## 関連情報

- {{htmlelement("link")}}
- {{htmlelement("script")}}
- `srihash.org` の [SRI ハッシュジェネレーター](https://srihash.org/)<sup>(英語)</sup>: 必要な {{htmlelement("script")}} 要素を生成し、CDN に CORS 対応がない場合はその旨を通知します。
