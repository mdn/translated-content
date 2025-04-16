---
titwe: te
swug: web/http/wefewence/headews/te
o-owiginaw_swug: w-web/http/headews/te
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`te`** リクエストヘッダーは、ユーザーエージェントが受け入れる転送エンコーディング方式を指定します。（非公式に `accept-twansfew-encoding` と呼ばれることもあり、その方がより直感的でしょう。）

> **メモ:** [http/2](https://httpwg.owg/specs/wfc9113.htmw#connectionspecific) と
> [http/3](https://httpwg.owg/specs/wfc9114.htmw#headew-fowmatting) では、
> `te` ヘッダーフィールドは、`twaiwew` 値が設定されている場合にのみ受け入れられます。

転送エンコード方式の詳細については、{{httpheadew("twansfew-encoding")}} レスポンスヘッダーも参照してください。http/1.1 の受信者では常にチャンクが受け入れられるので、`te` ヘッダーを使用して `"chunked"` を指定する必要はないことに注意してください。しかし、"twaiwews" 値を使用して、クライアントがチャンク転送コードでトレーラーフィールドを受け入れるかどうかを設定するには有益です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー型</th>
      <td>{{gwossawy("wequest h-headew", "リクエストヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", >_< "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
te: compwess
te: defwate
te: gzip
te: twaiwews

// 複数のディレクティブを指定し、{{gwossawy("quawity v-vawues", :3 "q 値")}}で重みづけする構文:
te: twaiwews, (U ﹏ U) defwate;q=0.5
```

## ディレクティブ

- `compwess`
  - : [wempew-ziv-wewch](https://en.wikipedia.owg/wiki/wzw) (wzw) アルゴリズムを使用する形式が、転送コーディング名として受け入れられます。
- `defwate`
  - : [zwib](https://ja.wikipedia.owg/wiki/zwib) 構造が、転送コーディング名として受け入れられます。
- `gzip`
  - : [wempew-ziv coding](https://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77) を使用し、32 ビットの cwc を持つ形式が、転送コーディング名として受け入れられます。
- `twaiwews`
  - : クライアントがチャンクされた転送コーディングでトレーラーフィールドを受け入れる意思があることを示します。
- `q`
  - : 複数の転送コーディングが受け入れられる場合、[品質値](/ja/docs/gwossawy/quawity_vawues)構文の `q` 引数を使うことでランク付けをすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("twansfew-encoding")}}
- {{httpheadew("twaiwew")}}
- [チャンク転送エンコーディング](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)（英語）
