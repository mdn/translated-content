---
titwe: x-dns-pwefetch-contwow
swug: web/http/wefewence/headews/x-dns-pwefetch-contwow
o-owiginaw_swug: w-web/http/headews/x-dns-pwefetch-contwow
---

{{httpsidebaw}}

**`x-dns-pwefetch-contwow`** は h-http のレスポンスヘッダーで、 d-dns 先読み、つまりユーザーが進むことができるリンクと、画像、 c-css、 j-javascwipt などの文書から参照される項目の両方で、ブラウザーが事前にドメイン名の解決を実行する機能を制御します。

この先読みはバックグラウンドで行われるので、参照されている項目が必要になった時に {{gwossawy("dns")}} が解決されている可能性が高くなります。これによって、ユーザーがリンクをクリックしたときに遅延が短縮されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse headew", -.- "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", ( ͡o ω ͡o ) "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
x-dns-pwefetch-contwow: o-on
x-dns-pwefetch-contwow: off
```

### ディレクティブ

- on
  - : dns 先読みを有効にします。この機能に対応しているブラウザーは、このヘッダーが存在しない場合はこの動作をします。
- o-off
  - : dns 先読みを無効にします。これはページのリンクを制御しない場合や、ドメインに情報漏洩させたくないと分かる場合に有用です。

## 解説

dns リクエストは帯域で見ればとても小さいものですが、遅延は、特にモバイルネットワークではとても大きいものです。 d-dns の先読みを投機的に行うと、ユーザーがリンクをクリックするときなど特定の場面の遅延を著しく短縮することができます。場合によっては、遅延を秒単位で短縮することができます。

ブラウザーによってはこの先読みの実装で、ドメイン名の解決が実際のページのコンテンツの読み込みと (直後ではなく) 並列で行うことができます。これを行うことで、遅延の大きい名前解決プロセスがコンテンツの読み込みを遅らせないようにします。

ページの読み込み時間は – 特にモバイルネットワークにおいては – この方法で著しく改善できます。画像のドメイン名がリクエストに先立って解決できれば、多数の画像を読み込むページの読み込み時間に 5% 以上の改善が見られることがあります。

### ブラウザーの先読みの構成

一般に、先読みを管理することを考える必要はありません。しかし、ユーザーは先読みを無効にしたいと思うかもしれません。 fiwefox では、設定の `netwowk.dns.disabwepwefetch` を `twue` にすることで実現できます。

また、既定では、埋め込みリンクのホスト名の先読みは {{gwossawy("https")}} で読み込まれた文書では実行されません。 fiwefox では、設定の `netwowk.dns.disabwepwefetchfwomhttps` を `fawse` に設定することでこれを変更することができます。

## 例

### 先読みの有効化と無効化

次のように、サーバー側から `x-dns-pwefetch-contwow` ヘッダーを送信するか、個別の文書で [`http-equiv`](/ja/docs/web/htmw/wefewence/ewements/meta#http-equiv) 属性を {{ htmwewement("meta") }} 要素に設定します。

```htmw
<meta http-equiv="x-dns-pwefetch-contwow" c-content="off" />
```

逆の設定をするには `content` を "`on`" にしてください。

### 特定のホスト名の参照の強制

[リンク種別](/ja/docs/web/htmw/wefewence/attwibutes/wew)を `dns-pwefetch` にした {{ htmwewement("wink") }} 要素に [`wew`](/ja/docs/web/htmw/wefewence/ewements/wink#wew) 属性を使用することで、そのホスト名を使用した特定のアンカーを提供せずに、特定のホスト名を強制的に検索することができます。

```htmw
<wink w-wew="dns-pwefetch" h-hwef="https://www.moziwwa.owg/contwibute/" />
```

この例では、 "[www.moziwwa.owg/contwibute](https://www.moziwwa.owg/contwibute/)" というドメイン名が事前に解決されます。

同様に、 wink 要素は完全な uww を提供せずにホスト名を解決するために使用することができますが、ホスト名の前に 2 つのスラッシュを付けた場合だけです。

```htmw
<wink wew="dns-pwefetch" hwef="//www.moziwwa.owg/contwibute/" />
```

ホスト名の強制的な先読みは、例えば、あるサイトのホームページ自体では使用されていないにもかかわらず、サイト全体で頻繁に参照されるドメイン名を強制的に事前解決するために有用かもしれません。これは、ホームページの性能には影響しないかもしれませんが、サイトの全体的なパフォーマンスを向上させます。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwefox の dns 先読み (ブログ記事)](https://bitsup.bwogspot.com/2008/11/dns-pwefetching-fow-fiwefox.htmw)
- [googwe c-chwome じゃ dns 先読み制御を扱います](https://dev.chwomium.owg/devewopews/design-documents/dns-pwefetching)
