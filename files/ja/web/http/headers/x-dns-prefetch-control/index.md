---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
---

{{HTTPSidebar}}

**`X-DNS-Prefetch-Control`** は HTTP のレスポンスヘッダーで、 DNS 先読み、つまりユーザーが進むことができるリンクと、画像、 CSS、 JavaScript などの文書から参照される項目の両方で、ブラウザーが事前にドメイン名の解決を実行する機能を制御します。

この先読みはバックグラウンドで行われるので、参照されている項目が必要になった時に {{glossary("DNS")}} が解決されている可能性が高くなります。これによって、ユーザーがリンクをクリックしたときに遅延が短縮されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### ディレクティブ

- on
  - : DNS 先読みを有効にします。この機能に対応しているブラウザーは、このヘッダーが存在しない場合はこの動作をします。
- off
  - : DNS 先読みを無効にします。これはページのリンクを制御しない場合や、ドメインに情報漏洩させたくないと分かる場合に有用です。

## 解説

DNS リクエストは帯域で見ればとても小さいものですが、遅延は、特にモバイルネットワークではとても大きいものです。 DNS の先読みを投機的に行うと、ユーザーがリンクをクリックするときなど特定の場面の遅延を著しく短縮することができます。場合によっては、遅延を秒単位で短縮することができます。

ブラウザーによってはこの先読みの実装で、ドメイン名の解決が実際のページのコンテンツの読み込みと (直後ではなく) 並列で行うことができます。これを行うことで、遅延の大きい名前解決プロセスがコンテンツの読み込みを遅らせないようにします。

ページの読み込み時間は – 特にモバイルネットワークにおいては – この方法で著しく改善できます。画像のドメイン名がリクエストに先立って解決できれば、多数の画像を読み込むページの読み込み時間に 5% 以上の改善が見られることがあります。

### ブラウザーの先読みの構成

一般に、先読みを管理することを考える必要はありません。しかし、ユーザーは先読みを無効にしたいと思うかもしれません。 Firefox では、設定の `network.dns.disablePrefetch` を `true` にすることで実現できます。

また、既定では、埋め込みリンクのホスト名の先読みは {{glossary("HTTPS")}} で読み込まれた文書では実行されません。 Firefox では、設定の `network.dns.disablePrefetchFromHTTPS` を `false` に設定することでこれを変更することができます。

## 例

### 先読みの有効化と無効化

次のように、サーバー側から `X-DNS-Prefetch-Control` ヘッダーを送信するか、個別の文書で [`http-equiv`](/ja/docs/Web/HTML/Element/meta#http-equiv) 属性を {{ HTMLElement("meta") }} 要素に設定します。

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

逆の設定をするには `content` を "`on`" にしてください。

### 特定のホスト名の参照の強制

[リンク種別](/ja/docs/Web/HTML/Link_types)を `dns-prefetch` にした {{ HTMLElement("link") }} 要素に [`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性を使用することで、そのホスト名を使用した特定のアンカーを提供せずに、特定のホスト名を強制的に検索することができます。

```html
<link rel="dns-prefetch" href="https://www.mozilla.org/contribute/" />
```

この例では、 "[www.mozilla.org/contribute](https://www.mozilla.org/contribute/)" というドメイン名が事前に解決されます。

同様に、 link 要素は完全な URL を提供せずにホスト名を解決するために使用することができますが、ホスト名の前に 2 つのスラッシュを付けた場合だけです。

```html
<link rel="dns-prefetch" href="//www.mozilla.org/contribute/" />
```

ホスト名の強制的な先読みは、例えば、あるサイトのホームページ自体では使用されていないにもかかわらず、サイト全体で頻繁に参照されるドメイン名を強制的に事前解決するために有用かもしれません。これは、ホームページの性能には影響しないかもしれませんが、サイトの全体的なパフォーマンスを向上させます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Firefox の DNS 先読み (ブログ記事)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome じゃ DNS 先読み制御を扱います](https://dev.chromium.org/developers/design-documents/dns-prefetching)
