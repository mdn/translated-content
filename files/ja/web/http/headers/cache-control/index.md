---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
tags:
  - Cache-Control
  - HTTP
  - HTTP Header
  - Request header
  - Response header
  - Reference
translation_of: Web/HTTP/Headers/Cache-Control
---

{{HTTPSidebar}}


HTTPヘッダーフィールドの **`Cache-Control`** には、ブラウザやshared caches(Proxy, CDN など)の[caching](/en-US/docs/Web/HTTP/Caching)を制御するためのdirective(指示)が、リクエストとレスポンスの両方に含まれています。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 構文

Cache のディレクティブには、以下のような規則があります。

- 大文字と小文字は区別されませんが、実装によっては大文字のディレクティブを認識しないものもあるので、小文字を推奨します。
- 複数のディレクティブはカンマで区切ります。
- いくつかのディレクティブにはオプションの引数があります。

### Cache directives

標準的な `Cache-Control` ディレクティブは以下のように定義されています。

| Request          | Response                 |
| :--------------- | :----------------------- |
| `max-age`        | `max-age`                |
| `max-stale`      | -                        |
| `min-fresh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-store`       | `no-store`               |
| `no-transform`   | `no-transform`           |
| `only-if-cached` | -                        |
| -                | `must-revalidate`        |
| -                | `proxy-revalidate`       |
| -                | `must-understand`        |
| -                | `private`                |
| -                | `public`                 |
| -                | `immutable`              |
| -                | `stale-while-revalidate` |
| `stale-if-error` | `stale-if-error`         |

注意: [compatibility table](#browser_compatibility) でサポートされているかを確認してください。解釈できないユーザーエージェントはこれらを無視します。

## 用語集

このドキュメントでは、次の用語が使用されています。すべてではありませんが、仕様書に基づいています。

- `(HTTP) cache`
  - : リクエストとレスポンスを保持し、次のリクエストで再利用するための実装。Shared cache または Private cache のいずれかです。
- `Shared cache`
  - : オリジンサーバーとクライアントの間に存在する cache (Proxy, CDN など)。1 つのレスポンスを保存し、それを複数のユーザーで再利用します。したがって、開発者は Shared cache にパーソナライズされたコンテンツを cache として保存することは避けるべきです。
- `Private cache`
  - : クライアント内に存在する cache です。_local cache_ 、あるいは単に _browser cache_ などとも呼ばれます。ユーザーのためにパーソナライズされたコンテンツを保存し、再利用することができます。
- `Store response`
  - : cache 可能な場合には、レスポンスを cache に保存します。しかし、そのまま再利用されるとは限りません。(通常、"cache" はレスポンスを保存することを意味します。)
- `Reuse response`
  - : cache されたレスポンスを次のリクエストに再利用します。
- `Revalidate response`
  - : オリジンサーバーに、保存されているレスポンスがまだ新しいか確認します。通常は条件付きのリクエストで行います。
- `Fresh response`
  - : レスポンスが新しい状態であることを示します。これは通常、リクエストの指示に応じて、レスポンスを後続のリクエストに再利用できることを意味します。
- `Stale response`
  - : レスポンスが古い状態になっていることを示します。これは通常、レスポンスがそのままでは再利用できないことを意味します。Cache storage は古いレスポンスをすぐに削除する必要はありません。なぜなら、再検証によってレスポンスが古いものから再び新しい状態に変わる可能性があるからです。
- `Age`
  - : レスポンスが生成されてからの時間です。レスポンスが新しい状態か古い状態かの基準となります。

## ディレクティブ

このセクションでは、cache に影響を与えるディレクティブ (応答ディレクティブと要求ディレクティブの両方) を列挙します。

###　レスポンスディレクティブ

#### `max-age`

レスポンスディレクティブの`max-age=N` は、レスポンスが生成されてから _N_  秒後まで、レスポンスが新鮮なままであることを示します。

```
Cache-Control: max-age=604800
```

cache がこのリクエストを保存し、新鮮なうちに後続のリクエストに再利用できることを示す。

なお、`max-age` はレスポンスを受信してからの経過時間ではなく、オリジンサーバーでレスポンスが生成されてからの経過時間であることに注意してください。したがって、他の cache (レスポンスが通ったネットワークルート上) が 100 秒間保存した場合（レスポンスヘッダーフィールドの `age` で示される）、ブラウザキャッシュはその鮮度の有効期間から 100 秒を差し引いたものになります。

```
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

レスポンスディレクティブの `s-maxage` も、レスポンスが新鮮である期間を示します (`max-age` に似ています)。しかし、これは shared caches 特有のもので、shared caches は `max-age` が存在する場合は無視します。

```
Cache-Control: s-maxage=604800
```

#### `no-cache`

レスポンスディレクティブの `no-cache` は、caches に保存できることを示しますが、caches がオリジンサーバーから切断された場合でも、再利用の前にオリジンサーバーで検証しなければなりません。

```
Cache-Control: no-cache
```

caches に常にコンテンツの更新をチェックさせる一方で、保存されているコンテンツに変更がない場合再利用させたい場合は、`no-cache` を使用する必要があります。これは、caches がオリジンサーバーに各リクエストを再確認することを要求することで実現されます。

`no-cache` は caches にレスポンスを保存することを許可しますが、再利用する前に再確認することを要求します。もし、「caches しない」の意味が実際には「保存しない」であるなら、`no-store` が使用すべきディレクティブです。

#### `must-revalidate`

レスポンスディレクティブの `must-revalidate` は、レスポンスが caches に保存され、新鮮なうちは再利用できることを示します。古くなったレスポンスは、再利用する前にオリジンサーバで検証されなければなりません。

通常、`must-revalidate` は `max-age` と共に使用されます。

```
Cache-Control: max-age=604800, must-revalidate
```

HTTP では、caches がオリジンサーバーから切り離されたときに、古いレスポンスを再利用することができます。`must-revalidate` はそれを防ぐための方法で、caches は保存されたレスポンスを元のサーバーで再検証するか、それが再利用不可能な場合は 504 (Gateway Timeout) のレスポンスを生成します。

#### `proxy-revalidate`

レスポンスディレクティブの `proxy-revalidate` は `must-revalidate` と同等ですが、shared caches にのみ適用されます。

#### `no-store`

レスポンスディレクティブの `no-store` は、あらゆる種類の caches (private または shared) がこのレスポンスを保存しないようにすることを指示します。

```
Cache-Control: no-store
```

#### `private`

レスポンスディレクティブの `private` は、レスポンスが private cache (ブラウザの local caches など) にのみ保存されることを示します。

```
Cache-Control: private
```

ユーザー個人を特定するコンテンツ、特にログイン後に受け取るレスポンスや、クッキーで管理されるセッションについては、`private` ディレクティブを追加する必要があります。

パーソナライズされたコンテンツを持つレスポンスに `private` を付け忘れると、そのレスポンスが shared cache に保存され、複数のユーザーによって使用されてしまい、個人情報の漏えいに繋がる可能性があります。

#### `public`

ヘッダーフィールドに `Authorization` を持つリクエストに対するレスポンスは、shared cache に保存してはいけません。しかし、`public` ディレクティブはそのようなレスポンスを shared cache に保存します。

```
Cache-Control: public
```

一般に、ページが Basic Auth または Digest Auth の場合、ブラウザは `Authorization` ヘッダーを付けてリクエストを送信します。つまり、レスポンスは制限されたユーザー (アカウントを持つユーザー) のためにアクセス制御され、たとえ `max-age` がついていても基本的に共有キャッシュ可能ではありません。

その制限を解除するために `public` ディレクティブが使用できます。

```
Cache-Control: public, max-age=604800
```

なお、`s-maxage` や `must-revalidate` もこの制限を解除します。

リクエストに `Authorization` ヘッダーがない場合、あるいはレスポンスに ` s-maxage` または `must-revalidate` をすでに使用している場合は、` public` を使用する必要はありません。

#### `must-understand`

レスポンスディレクティブの `must-understand` は、ステータスコードに基づいて cache の要件を理解している場合にのみ、cache がレスポンスを保存すべきであると示します。

`must-understand` は、フォールバック動作のために `no-store` と組み合わせる必要があります。

```
Cache-Control: must-understand, no-store
```

cache が  `must-understand` をサポートしていない場合は、無視されます。`no-store` も存在する場合は、レスポンスは保存されません。

cache  が `must-understand` をサポートしている場合、ステータスコードに基づいて cache の要件を理解してレスポンスを保存します。

#### `no-transform`

仲介者の中には、さまざまな理由でコンテンツを変換する人がいます。たとえば、転送サイズを小さくするために画像を変換するものがあります。場合によっては、これはコンテンツプロバイダにとって望ましくありません。

`no-transform` は、仲介者が (cache を実装しているかどうかに関係なく) レスポンスの内容を変換すべきではないことを示します。

注意: [Google’s Web Light](https://support.google.com/webmasters/answer/6211428) は、そのような仲介業者の一種です。これは、cache store や低速接続のデータを最小化するために画像を変換し、オプトアウトオプションとして `no-transform` をサポートします。

#### `immutable`

レスポンスディレクティブの `immutable` は、レスポンスが新鮮な間は更新されないことを示します。

```
Cache-Control: public, max-age=604800, immutable
```

静的なリソースに対する最近のベストプラクティスは、バージョン/ハッシュをURLに含める一方で、リソースには決して手を加えず必要なときに、新しいバージョン番号/ハッシュを持つ新しいバージョンでリソースを更新し、URLも異なるものにすることです。これを **cache-busting** パターンと呼びます。

```
<script src=https://example.com/react.0.0.0.js></script>
```

ユーザーがブラウザをリロードすると、ブラウザはオリジンサーバーに検証のための条件付きリクエストを送信します。しかし、これらの静的リソースは、ユーザーがブラウザをリロードしても決して変更されないため、再検証する必要がありません。
なぜなら、それらは決して変更されないからです。 `immutable` は cache にレスポンスが新鮮な間は不変であることを伝え、サーバーへの不要な条件付きリクエストを回避します。

#### `stale-while-revalidate`

レスポンスディレクティブの `stale-while-revalidate` は、cache を再検証している間、古いレスポンスの再利用が可能なことを示します。

```
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

上記の例では、レスポンスは7日間（604800 s）新鮮です。7 日後、レスポンスは古くなりますが、cache は翌日 (86400 s) のリクエストに再利用することができます。ただし、バックグラウンドでレスポンスを再認識することが条件です。

再バリデーションにより、cache は再び新鮮になるため、クライアントはその期間中は常に新鮮であったかのように見えます。これにより再バリデーションの遅延ペナルティを効果的にクライアントから隠蔽することができます。

その間にリクエストがなければ、cache は古くなり、次のリクエストは正常に再検証されます。

#### `stale-if-error`

レスポンスディレクティブの `stale-if-error` は、オリジンサーバーがエラー (500、502、503、504) でレスポンスを返したときに、cache が古いレスポンスを再利用できることを指示します。

```
Cache-Control: max-age=604800, stale-if-error=86400
```

上記の例では、レスポンスは7日間（604800 s）新鮮です。7 日を過ぎると古くなりますが、サーバーがエラーでレスポンスを返した場合はさらに 1 日 (86400 s) 利用することができます。

しばらくすると、保存されたレスポンスは正常に古くなりました。つまり、オリジンサーバーがエラーレスポンスを送信した場合、クライアントはそのままエラーレスポンスを受信します。

## リクエストディレクティブ

### `no-cache`

リクエストディレクティブの `no-cache` は cache に、再利用する前にオリジンサーバでレスポンスを検証するように要求します。

```
Cache-Control: no-cache
```

`no-cache` は、cache に新しいレスポンスがある場合でも、クライアントが最新のレスポンスを要求することを可能にします。

ブラウザは通常、ユーザーがページを **force reloading** しているときに、リクエストに `no-cache` を追加します。

### `no-store`

リクエストディレクティブの `no-store` は、オリジンサーバーのレスポンスが保存される可能性がある場合でも、クライアントがリクエストと対応するレスポンスを保存しないように cache に要求することを可能にします。

```
Cache-Control: no-store
```

主要なブラウザは `no-store` を使ったリクエストに対応していないことに注意してください。

### `max-age`

リクエストディレクティブの `max-age=N` は、オリジンサーバで _N_  秒以内に生成される保存されたレスポンスをクライアントが許可することを示します。

```
Cache-Control: max-age=3600
```

上記の場合、`Cache-Control: max-age=604800` のレスポンスが3時間前に cache に保存されていた場合、cache はそのレスポンスを再利用することができません。

以下で説明するように、多くのブラウザは **reloading** 時に、このディレクティブを使用します。

```
Cache-Control: max-age=0
```

`max-age=0` は `no-cache` の回避策です。多くの古い (HTTP/1.0) cache の実装は `no-cache` をサポートしていないからです。最近のブラウザは、後方互換性のために `max-age=0` を "reloading" の際に使用し、`no-cache` を使用して "force reloading" を行うようになっています。

### `max-stale`

リクエストディレクティブの `max-stale=N` は、クライアントが_N_秒以内に失効した保存されたレスポンスを許可することを示します。

```
Cache-Control: max-stale=3600
```

上記の場合、3時間前に `Cache-Control: max-age=604800` を持つレスポンスが cache に保存されていた場合、cache はそのレスポンスを再利用することができません。

クライアントは、オリジンサーバーがダウンしているときや遅すぎるときにこのヘッダーを使うことができ、多少古くても cache されたレスポンスを cache から受け入れることができます。

主要なブラウザは `max-stale` を指定したリクエストに対応していないことに注意してください。

### `min-fresh`

リクエストディレクティブの `min-fresh` は、クライアントが少なくとも _N_ 秒間新鮮な保存されたレスポンスを許可することを示します。

```
Cache-Control: min-fresh=600
```

上記の場合、51分前に `Cache-Control: max-age=3600` を持つレスポンスが cache に保存されていた場合、cache はそのレスポンスを再利用することができません。

クライアントがこのヘッダーを使用できるのは、ユーザーのレスポンスが新鮮であることだけでなく、一定期間更新されないことも要求する場合です。

主要なブラウザは `min-fresh` を使ったリクエストに対応していないことに注意してください。

### `no-transform`

レスポンスの `no-transform` と同じ意味ですが、リクエストに対するものです。

### `only-if-cached`

クライアントは、cache がすでに cache されたレスポンスを取得する必要があることを示します。cache にレスポンスが保存されている場合は、再利用されます。

## Use Cases

### Preventing storing

レスポンスをキャッシュに保存したくない場合は、 `no-store` ディレクティブを使用します。

```
Cache-Control: no-store
```

`no-cache` は「保存することはできるが、検証する前に再利用しない」という意味なので、レスポンスが保存されないようにするためのものではないことに注意してください。

```plain example-bad
Cache-Control: no-cache
```

理論的には、ディレクティブが衝突した場合、最も制限の厳しいディレクティブが尊重されるべきです。つまり、以下の例は基本的に無意味です。`private`, `no-cache`, `max-age=0`, `must-revalidate` は `no-store` と競合しているからです。

```plain example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalant to
Cache-Control: no-store
```

### Caching static assets with “cache busting”

バージョン/ハッシュ機構を持つ静的資産を構築する場合、ファイル名やクエリ文字列にバージョン/ハッシュを追加することは、cache を管理するための良い方法です。

例：

```html
<!-- index.html -->
<script src=/assets/react.min.js></script>
<img src=/assets/hero.png width=900 height=400>
```

Reactライブラリのバージョンは、ライブラリを更新すると変わりますし、`hero.png` も画像を編集すると変わります。そのため、これらは `max-age` を使って cache に保存するのは難しくなります。

このような場合、特定の番号のついたバージョンのライブラリを使用し、画像のURLにハッシュを含めることでcache の必要性に対応することができます。

```html
<!-- index.html -->
<script src=/assets/react.0.0.0min.js></script>
<img src=/assets/hero.png?hash=deadbeef width=900 height=400>
```

長い `max-age` 値を追加することができ、コンテンツは決して変更されないので `immutable` とすることができます。

```
# /assets/*
Cache-Control: max-age=31536000, immutable
```

ライブラリを更新したり、画像を編集したりすると、新しいコンテンツは新しいURLを持つはずなので、cache は再利用されません。それを “cache busting” パターンと呼びます。

長い `max-age` を使用して、HTML レスポンス自体が cache されないようにします。`no-cache` は再バリデーションを引き起こす可能性があり、クライアントは新しいバージョンの HTML レスポンスと静的アセットを正しく受信します。

```
# /index.html
Cache-Control: no-cache
```

注意: `index.html` が基本認証またはダイジェスト認証で制御されている場合、`/assets` 以下のファイルは shared cache に保存されません。もし `/assets/` のファイルが shared cache に保存するのに適しているなら、 `public`、`s-maxage` または `must-revalidate` のうちの1つが必要です。

### Up-to-date contents always

動的に生成されるコンテンツや、静的であっても頻繁に更新されるコンテンツでは、ユーザーが常に最新版を受信できるようにしたいものです。

もし、レスポンスが cache されることを意図していないからといって `Cache-Control` ヘッダーを追加しなければ、予期せぬ結果を引き起こす可能性があります。Cache storage は、ヒューリスティックに cache することが許されています。したがって、cache に関する何らかの要求がある場合は、常に `Cache-Control` ヘッダで明示的に示す必要があります。

レスポンスに `no-cache` を追加すると、サーバーで再バリデーションが行われるので、毎回新鮮なレスポンスを提供できます。また、クライアントがすでに新しいレスポンスを持っている場合は、`304 Not Modified` とだけレスポンスを返します。

```
Cache-Control: no-cache
```

ほとんどの HTTP/1.0 cache は `no-cache` ディレクティブをサポートしていないので、歴史的には `max-age=0` が回避策として使用されてきました。しかし、`max-age=0` だけでは、cache がオリジンサーバーから切断されたときに、古いレスポンスが再利用される可能性がありました。`must-revalidate` はそれに対応するものです。そのため、以下の例では `no-cache` と同等になっています。

```
Cache-Control: max-age=0, must-revalidate
```

しかし、今のところ、単に `no-cache` を代わりに使用できます。

### Clearing an already-stored cache

残念ながら、すでに保存されているレスポンスを cache からクリアするための cache ディレクティブはありません。

クライアント caches が、あるパスに対する新鮮なレスポンスを保存し、サーバーへのリクエストフライトがない状態を想像してください。そのパスに対してサーバーができることは何もありません。

また、`Clear-Site-Data` はブラウザの cache をクリアすることができます。しかし、これはサイトの保存されたすべてのレスポンスをクリアするので注意してください。そして、ブラウザのみで、shared cache はクリアされません。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

[HTTP Caching](https://httpwg.org/http-core/draft-ietf-httpbis-cache-latest.html)
[RFC5861 - HTTP Cache-Control Extensions for Stale Content](https://datatracker.ietf.org/doc/html/rfc5861)
[RFC8246 - HTTP Immutable Responses](https://datatracker.ietf.org/doc/html/rfc8246)

## See also

- [HTTP Caching FAQ](/en-US/docs/Web/HTTP/Caching)
- [Caching Tutorial for Web Authors and Webmasters](https://www.mnot.net/cache_docs/)
- [Caching best practices & max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control for Civilians](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}