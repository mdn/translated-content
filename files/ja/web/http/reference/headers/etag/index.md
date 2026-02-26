---
title: ETag ヘッダー
short-title: ETag
slug: Web/HTTP/Reference/Headers/ETag
l10n:
  sourceCommit: 099a15b4234071958980dcae0e122a7145fdbdfa
---

HTTP の **`ETag`** （エンティティタグ）{{Glossary("response header", "レスポンスヘッダー")}}は、リソースの特定バージョンの識別子です。
これにより、[キャッシュ](/ja/docs/Web/HTTP/Guides/Caching)の効率が向上し、帯域幅を節約できます。コンテンツが変更されていない場合、ウェブサーバーは完全なレスポンスを再送信する必要がないためです。
さらに、 ETag はリソースの同時更新による上書き（[空中衝突](#空中衝突の回避)）を防止するのに役立ちます。

指定された URL のリソースが変更された場合は、新しい `ETag` 値を生成する必要があります。これらを比較することで、リソースの 2 つの表現が同じかどうかを素早く判断できます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}, {{Glossary("Representation header", "表現ヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## ディレクティブ

- `W/` {{optional_inline}}
  - : `W/` (大文字) は[弱いバリデーター](/ja/docs/Web/HTTP/Guides/Conditional_requests#弱い検証)を使用することを示します。
    弱い ETag は生成が簡単ですが、比較にはあまり役立ちません。
    強力なバリデーターは比較には理想的ですが、効率的に生成するのはとても困難です。
    同じリソースを表現する 2 つの弱い `ETag` の値があった場合、意味的には同等ですが、バイト単位では同じではない可能性があります。
    すなわち、弱い ETag は[バイト範囲指定のリクエスト](/ja/docs/Web/HTTP/Reference/Headers/Accept-Ranges)が行われたときにキャッシュされませんが、強い ETag は範囲指定のリクエストもキャッシュします。
- `<etag_value>`
  - : リクエストされたリソースを一意に表すエンティティタグです。これは二重引用符で囲まれた {{Glossary("ASCII")}} 文字列であり、 `"675af34563dc-tr34"`のような形です。
    `ETag` 値を生成する方法は指定されていません。
    コンテンツのハッシュ、最終更新タイムスタンプのハッシュ、単なるリビジョン番号などがよく使用されます。
    例えば、 Wiki エンジンは、文書内の記事コンテンツの 16 進ハッシュを使用することがあります。

## 例

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### 空中衝突の回避

`ETag` と {{HTTPHeader("If-Match")}} ヘッダーの助けを借りて、編集の空中衝突を検出することができます。

たとえば、 MDN を編集する場合、現在の Wiki コンテンツのハッシュが算出され、そのレスポンスで `Etag` に入れられます。

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wiki ページに変更を保存 (データの投稿) するとき、 {{HTTPMethod("POST")}} リクエストには、 {{HTTPHeader("If-Match")}} ヘッダーに `ETag` 値を入れて、新しいかどうかをチェックします。

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

ハッシュが一致しない場合は、文書が途中で編集されたことを意味し、 {{HTTPStatus("412", "412 Precondition Failed")}} エラーが発生します。

### 変更されていないリソースのキャッシュ

もう一つの `ETag` ヘッダーの典型的な使用例として、変更されていないリソースをキャッシュすることがあります。
ユーザーが (`ETag` が設定されている) 指定された URL を再度訪問した時、それが*古くなったもの* (古すぎて使用できない) であった場合、クライアントは {{HTTPHeader("If-None-Match")}} ヘッダー欄で `ETag` の値を送ります。

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

サーバーは、クライアントの `ETag` (`If-None-Match` で送信されたもの) を現在のバージョンの `ETag` と比較し、両方の値が一致する (つまりリソースは変更されていない) 場合、サーバーは {{HTTPStatus("304", "304 Not Modified")}} ステータスを本文なしで返送し、キャッシュされたレスポンスのバージョンがまだ使用可能 (新しい) であることをクライアントに通知します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}} へっだー
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} レスポンスステータスコード
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
