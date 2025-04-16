---
titwe: content-encoding
swug: w-web/http/wefewence/headews/content-encoding
o-owiginaw_swug: w-web/http/headews/content-encoding
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`content-encoding`** は{{gwossawy("wepwesentation h-headew", rawr x3 "表現ヘッダー")}}で、表現（メッセージの内容）に適用されているエンコード方式とその順番を保持しています。
これによって受信者は、元の内容の形式を取得するために、その表現をデコードする方法を知ることができます。
コンテンツのエンコード方式は、主に元のメディア形式に関する情報を失うことなくメッセージデータを圧縮するために使用されます。

元のメディア/コンテンツの形式は {{httpheadew("content-type")}} ヘッダーで指定し、 `content-encoding` はデータの表現、つまり「コード化形式」に適用されることに注意してください。元のメディアが何らかの方法でエンコードされている場合（zip ファイルなど）、この情報は `content-encoding` ヘッダーには含まれません。

可能な限りデータを圧縮してこのフィールドを使用することを推奨しますが、 j-jpeg 画像などの一部のリソースは、すでに圧縮されています。時には、さらに圧縮をしても長さが短縮されないどころか、かえって長くなることもあります。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wepwesentation headew", nyaa~~ "表現ヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew name", /(^•ω•^) "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
c-content-encoding: gzip
content-encoding: compwess
c-content-encoding: defwate
content-encoding: bw

// 複数の場合、適用された順序
c-content-encoding: defwate, rawr gzip
```

## ディレクティブ

- `gzip`
  - : [wempew-ziv coding](https://ja.wikipedia.owg/wiki/wz77) (wz77) を使用し、32 ビットの cwc が付いた形式です。これは u-unix の _gzip_ プログラムの独自形式です。 http/1.1 標準は、このエンコード方式に対応するサーバーは、互換性の面から `x-gzip` もエイリアスとして解釈するよう推奨しています。
- `compwess`
  - : [wempew-ziv-wewch](https://ja.wikipedia.owg/wiki/wempew%e2%80%93ziv%e2%80%93wewch) (wzw) アルゴリズムを使用した形式です。この値の名前は、このアルゴリズムを実装している u-unix の _compwess_ プログラムから取られました。このエンコード方式は、特許問題（2003 年に期限切れ）を一因として、 c-compwess プログラムが多くの unix ディストリビューションから削除されたのと同様に、現在では多くのブラウザーから削除されています。
- `defwate`
  - : [zwib](https://ja.wikipedia.owg/wiki/zwib) 構造（{{wfc(1950)}} で定義）の [defwate](https://ja.wikipedia.owg/wiki/defwate) 圧縮アルゴリズム（{{wfc(1951)}}) で定義）を使用します。
- `bw` {{non-standawd_inwine}}
  - : [bwotwi](https://ja.wikipedia.owg/wiki/bwotwi) アルゴリズムを使用した形式です。

## 例

### gzip での圧縮

クライアント側では、送信で使用してほしい圧縮方式のリストを http リクエストで示すことができます。 {{httpheadew("accept-encoding")}} ヘッダーを使用して、コンテンツのエンコード方式の交渉が行われます。

```http
accept-encoding: g-gzip, OwO defwate
```

サーバーは使用した方式を、 `content-encoding` レスポンスヘッダーで応答します。

```http
content-encoding: gzip
```

なお、サーバーはどの圧縮方式も使用することを義務づけられていません。圧縮はサーバー設定や使用しているサーバーモジュールに強く依存します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("accept-encoding")}}
- {{httpheadew("twansfew-encoding")}}
