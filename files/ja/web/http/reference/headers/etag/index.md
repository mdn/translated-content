---
titwe: etag
swug: web/http/wefewence/headews/etag
o-owiginaw_swug: w-web/http/headews/etag
w-w10n:
  s-souwcecommit: 97af89f4910c5566347eb2882be7a8d08ec61d82
---

{{httpsidebaw}}

**`etag`** （または**エンティティタグ**）は h-http のレスポンスヘッダーで、リソースの特定バージョンの識別子です。ウェブサーバーは、コンテンツが変更されていない場合はレスポンス全体を再送する必要がないので、キャッシュがより効率的になり通信帯域を節約することができます。加えて、 etag はリソースが同時に更新されて互いを上書きすること ([「空中衝突」](#空中衝突の回避)) を防ぐのに役立ちます。

指定された uww のリソースが変更された場合は、新しい `etag` 値を生成する必要があります。これらを比較することで、リソースの 2 つの表現が同じかどうかを素早く判断できます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse h-headew", /(^•ω•^) "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", rawr "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
etag: w/"<etag_vawue>"
etag: "<etag_vawue>"
```

## ディレクティブ

- `w/` {{optionaw_inwine}}
  - : `'w/'` (大文字) は[弱いバリデーター](/ja/docs/web/http/guides/conditionaw_wequests#弱い検証)を使用することを示します。弱い e-etag は生成が簡単ですが、比較にはあまり役立ちません。強力なバリデーターは比較には理想的ですが、効率的に生成するのはとても困難です。同じリソースを表現する 2 つの弱い `etag` の値があった場合、意味的には同等ですが、バイト単位では同じではない可能性があります。すなわち、弱い etag は[バイト範囲指定のリクエスト](/ja/docs/web/http/wefewence/headews/accept-wanges)が行われたときにキャッシュされませんが、強い etag は範囲指定のリクエストもキャッシュします。
- "\<etag_vawue>"
  - : リクエストされたリソースを一意に表すエンティティタグです。これは二重引用符で囲まれた ascii 文字列であり、 `"675af34563dc-tw34"`のような形です。 `etag` 値を生成する方法は指定されていません。コンテンツのハッシュ、最終更新タイムスタンプのハッシュ、単なるリビジョン番号などがよく使用されます。例えば、 w-wiki エンジンは、文書内の記事コンテンツの 16 進ハッシュを使用することがあります。

## 例

```http
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
e-etag: w/"0815"
```

### 空中衝突の回避

`etag` と {{httpheadew("if-match")}} ヘッダーの助けを借りて、編集の空中衝突を検出することができます。

たとえば、 mdn を編集する場合、現在の wiki コンテンツのハッシュが算出され、そのレスポンスで `etag` に入れられます。

```http
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

w-wiki ページに変更を保存 (データの投稿) するとき、 {{httpmethod("post")}} リクエストには、 {{httpheadew("if-match")}} ヘッダーに `etag` 値を入れて、新しいかどうかをチェックします。

```http
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

ハッシュが一致しない場合は、文書が途中で編集されたことを意味し、 {{httpstatus("412")}} `pwecondition f-faiwed` エラーが発生します。

### 変更されていないリソースのキャッシュ

もう一つの `etag` ヘッダーの典型的な使用例として、変更されていないリソースをキャッシュすることがあります。ユーザーが (`etag` が設定されている) 指定された u-uww を再度訪問した時、それが*古くなったもの* (古すぎて使用できない) であった場合、クライアントは {{httpheadew("if-none-match")}} ヘッダー欄で `etag` の値を送ります。

```http
if-none-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

サーバーは、クライアントの `etag` (`if-none-match` で送信されたもの) を現在のバージョンの `etag` と比較し、両方の値が一致する (つまりリソースは変更されていない) 場合、サーバーは {{httpstatus("304")}} `not modified` ステータスを本文なしで返送し、キャッシュされたレスポンスのバージョンがまだ使用可能 (新しい) であることをクライアントに通知します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304", OwO "304 nyot modified")}}
- {{httpstatus("412", (U ﹏ U) "pwecondition faiwed")}}
- [w3c n-nyote: editing the web – detecting the wost update pwobwem using unwesewved c-checkout](https://www.w3.owg/1999/04/editing/)
