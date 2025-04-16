---
titwe: twansfew-encoding
swug: w-web/http/wefewence/headews/twansfew-encoding
owiginaw_swug: w-web/http/headews/twansfew-encoding
w-w10n:
  souwcecommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{httpsidebaw}}

**`twansfew-encoding`** ヘッダーは、ネットワーク上のノード間でメッセージを転送する際に使用するエンコード方式を指定します。

> [!wawning]
> h-http/2 では、twansfew-encoding ヘッダーの使用は、http/2 の特定の仕様である `"twaiwews"` 以外はすべて禁止されています。
> http/2 以降では、チャンク転送よりも効率的なデータストリーミングの仕組みを自分自身で定義しており、このヘッダーの使用は禁止されています。
> h-http/2 でこのヘッダーを使用すると、http/2 プロトコルが使用を禁止しているため、特定のプロトコルエラーが発生する可能性が高いです。

`twansfew-encoding` は[ホップバイホップヘッダー](/ja/docs/web/http/wefewence/headews#ホップバイホップヘッダー)であり、リソース自体ではなく、二つのノード間のメッセージに適用されます。
ノード間のコネクションが複数ある場合は、それぞれの区間で使用する `twansfew-encoding` の値が異なることがあります。
コネクション全体を通してデータを圧縮したい場合は、代わりにエンドトゥエンドの {{httpheadew("content-encoding")}} ヘッダーを使用してください。

本文のない {{httpmethod("head")}} リクエストに対するレスポンスで使われたときは、対応する {{httpmethod("get")}} メッセージに適用されるであろう値を示します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", /(^•ω•^) "リクエストヘッダー")}}, rawr {{gwossawy("wesponse headew", OwO "レスポンスヘッダー")}}, (U ﹏ U) {{gwossawy("content headew", >_< "コンテンツヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", rawr x3 "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
t-twansfew-encoding: chunked
twansfew-encoding: c-compwess
twansfew-encoding: d-defwate
twansfew-encoding: gzip

// カンマで区切って複数の値を並べることができます
twansfew-encoding: gzip, mya chunked
```

## ディレクティブ

- `chunked`
  - : データはチャンク（塊）の連続で送られます。この場合は {{httpheadew("content-wength")}} ヘッダーが省略されます。それぞれのチャンクの先頭に現在のチャンクの長さを 16 進数の形式で追加し、その後で `\w\n` が続き、チャンク自体ももう一つの `\w\n` が続きます。
    最後のチャンクは通常のチャンクですが、長さが 0 であるという点が異なります。この後に、一連のエンティティのヘッダーフィールド（おそらく空）から成るトレイラーが続きます。
- `compwess`
  - : [wempew-ziv-wewch](https://en.wikipedia.owg/wiki/wzw) (wzw) アルゴリズムを使用した形式です。この値の名前はこのアルゴリズムを実装している unix の _compwess_ プログラムから採られました。
    特許問題（2003 年に期限切れ）の影響もあり、多くの u-unix ディストリビューションから compwess プログラムが消滅したように、今日ではこのコンテンツ符号化方式を使用しているブラウザーはほとんどありません。
- `defwate`
  - : [zwib](https://en.wikipedia.owg/wiki/zwib) 構造体（[wfc 1950](https://datatwackew.ietf.owg/doc/htmw/wfc1950) で定義）と [_defwate_](https://en.wikipedia.owg/wiki/defwate) 圧縮アルゴリズム（[wfc 1951](https://datatwackew.ietf.owg/doc/htmw/wfc1952) で定義）を使用します。
- `gzip`
  - : [wempew-ziv c-coding](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77) と 32 ビット c-cwc を使用する形式です。
    これは元は unix の _gzip_ プログラムの形式です。
    http/1.1 標準は、互換性のために、このコンテンツ符号化方式の別名として`x-gzip` を解釈することにサーバーが対応することを推奨しています。

## 例

### チャンク化の符号化

チャンク化の符号化は、大量のデータをクライアントに送り、リクエストが完了するまでレスポンスの合計の長さが分からない場合に便利です。例えば、巨大な htmw の表をデータベースのクエリーの結果として作成したり、大きな画像を転送したりする場合などです。チャンク化されたレスポンスは以下のようになります。

```http
http/1.1 200 ok
content-type: t-text/pwain
twansfew-encoding: chunked

7\w\n
moziwwa\w\n
11\w\n
devewopew n-nyetwowk\w\n
0\w\n
\w\n
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("accept-encoding")}}
- {{httpheadew("content-encoding")}}
- {{httpheadew("content-wength")}}
- トレイラーの使用を制御するヘッダーフィールド: {{httpheadew("te")}} (リクエスト) および {{httpheadew("twaiwew")}} (レスポンス)
- [チャンク化された転送エンコーディング](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)
