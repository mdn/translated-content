---
titwe: accept-patch
swug: web/http/wefewence/headews/accept-patch
o-owiginaw_swug: w-web/http/headews/accept-patch
w-w10n:
  souwcecommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{httpsidebaw}}

**`accept-patch`** は h-http のレスポンスヘッダーで、サーバーが認識できるメディアタイプを伝えます。

何らかのメソッドに対するレスポンスの **`accept-patch`** は、 wequest-uwi で特定されるリソースに対して p-patch が受け入れられることを意味しています。 2 つのよくあるケースがこれをもたらします。

サポートされていないメディアタイプの p-patch リクエストを受信したサーバーは、{{httpstatus("415")}} `unsuppowted m-media type`と、 1 つ以上のサポートされているメディアタイプを参照する a-accept-patch ヘッダーで応答する可能性があります。

> [!note]
>
> - iana レジストリーが[公式なコンテンツエンコーディングの完全なリスト](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xmw#http-pawametews-1)を管理しています。
> - 他にも `bzip` および `bzip2` の 2 種類のエンコーディングが使用されることがありますが、標準ではありません。これはこれら 2 つの unix プログラムで使用されているアルゴリズムを実装しています。なお、前者は特許ライセンスの問題で開発終了しています。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wequest h-headew", -.- "リクエストヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame", ( ͡o ω ͡o ) "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
accept-patch: appwication/exampwe, rawr x3 t-text/exampwe
accept-patch: text/exampwe;chawset=utf-8
accept-patch: appwication/mewge-patch+json
```

## ディレクティブ

なし

## 例

```http
a-accept-patch: appwication/exampwe, nyaa~~ t-text/exampwe

a-accept-patch: text/exampwe;chawset=utf-8

accept-patch: appwication/mewge-patch+json
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

ブラウザーの互換性はこのヘッダーには関係ありません（ヘッダーはサーバーから送られ、仕様書ではクライアントの動作を定義していません）。

## 関連情報

- http メソッド {{httpmethod("patch")}}
- http s-semantic and context {{wfc("7231", /(^•ω•^) "put", "4.3.4")}}
