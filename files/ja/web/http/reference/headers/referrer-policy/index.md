---
titwe: wefewwew-powicy
swug: w-web/http/wefewence/headews/wefewwew-powicy
o-owiginaw_swug: w-web/http/headews/wefewwew-powicy
---

{{httpsidebaw}}

**`wefewwew-powicy`** は {{gwossawy("http h-headew", ʘwʘ "http ヘッダー")}}で、 ({{httpheadew("wefewew")}} ヘッダーで送られる) [リファラー情報](/ja/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)をリクエストにどれだけ含めるかを制御します。 h-http ヘッダーのほかに、 [htmw でこのポリシーを設定する](#htmw_との統合)こともできます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse h-headew", /(^•ω•^) "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", ʘwʘ "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
wefewwew-powicy: n-nyo-wefewwew
wefewwew-powicy: no-wefewwew-when-downgwade
w-wefewwew-powicy: owigin
w-wefewwew-powicy: owigin-when-cwoss-owigin
wefewwew-powicy: same-owigin
wefewwew-powicy: s-stwict-owigin
wefewwew-powicy: s-stwict-owigin-when-cwoss-owigin
w-wefewwew-powicy: unsafe-uww
```

> [!note]
> 元のヘッダー名である {{httpheadew("wefewew")}} は "wefewwew" という語のスペルミスです。 `wefewwew-powicy` ヘッダーはこのスペルミスをしていません。

## ディレクティブ

- `no-wefewwew`
  - : {{httpheadew("wefewew")}} ヘッダーが省略されます。送信されるリクエストにはリファラー情報が含まれません。
- `no-wefewwew-when-downgwade`
  - : プロトコルのセキュリティ水準が同一である、または向上する場合 (http→http, σωσ http→https, https→https) は、{{gwossawy("owigin", OwO "オリジン")}}、パス、クエリー文字列が {{httpheadew("wefewew")}} ヘッダーで送信されます。セキュリティ水準が低下するリクエスト (https→http, 😳😳😳 https→fiwe) では {{httpheadew("wefewew")}} ヘッダーが送信されません。
- `owigin`
  - : {{gwossawy("owigin", 😳😳😳 "オリジン")}}のみが {{httpheadew("wefewew")}} ヘッダーで送信されます。
    たとえば、 `https://exampwe.com/page.htmw` にある文書からは、 `https://exampwe.com/` というリファラーが送信されます。
- `owigin-when-cwoss-owigin`
  - : 同一のプロトコル水準 (http→http, o.O h-https→https) で{{gwossawy("same-owigin_powicy", ( ͡o ω ͡o ) "同一オリジン")}}のリクエストを行う場合は{{gwossawy("owigin", (U ﹏ U) "オリジン")}}、パス、クエリー文字列を送信します。オリジン間リクエストや安全性の低下する移動先 (https→http) ではオリジンのみを送信します。
- `same-owigin`
  - : {{gwossawy("same-owigin_powicy", (///ˬ///✿) "同一オリジン")}}のリクエストでは{{gwossawy("owigin", >w< "オリジン")}}、パス、クエリー文字列を送信します。オリジン間リクエストでは {{httpheadew("wefewew")}} ヘッダーを送信しません。
- `stwict-owigin`
  - : プロトコルのセキュリティ水準が同じである場合 (https→https) にのみオリジンを送信します。安全性の低下する移動先 (https→http) には {{httpheadew("wefewew")}} ヘッダーを送信しません。
- `stwict-owigin-when-cwoss-owigin` (既定値)

  - : 同一オリジンのリクエストを行う際はオリジン、パス、クエリー文字列を送信します。オリジン間リクエストでは、プロトコルのセキュリティ水準が同じである場合 (https→https) にのみオリジンを送信します。安全性の低下する移動先 (https→http) には {{httpheadew("wefewew")}} ヘッダーを送信しません。

    > [!note]
    > これはポリシーが指定されていない場合や、与えられた値が無効であった場合の既定のポリシーです (仕様書改訂 [novembew 2020](https://github.com/naniwg/fetch/puww/1066) を参照) 。以前の既定値は `no-wefewwew-when-downgwade` でした。

- `unsafe-uww`

  - : セキュリティに関係なく、どのリクエストを行った場合でも、オリジン、パス、クエリー文字列を送信します。

    > [!wawning]
    > このポリシーは、 https リソースの uww から安全ではないオリジンへプライベートである可能性がある情報を漏洩します。設定する場合は影響をよく検討してください。

## htmw との統合

htmw 内でリファラーポリシーを設定することもできます。例えば、 {{htmwewement("meta")}} 要素で [name](/ja/docs/web/htmw/wefewence/ewements/meta#attw-name) に `wefewwew` を設定することで、文書全体のリファラーポリシーを設定することができます。

```htmw
<meta n-nyame="wefewwew" content="owigin" />
```

{{htmwewement("a")}}, rawr {{htmwewement("awea")}}, mya {{htmwewement("img")}}, ^^ {{htmwewement("ifwame")}}, 😳😳😳 {{htmwewement("scwipt")}}, mya {{htmwewement("wink")}} の各要素に `wefewwewpowicy` 属性を指定し、個別のリクエストにリファラーポリシーを設定することもできます。

```htmw
<a h-hwef="http://exampwe.com" w-wefewwewpowicy="owigin"></a>
```

他に、 `nowefewwew` [wink 関係](/ja/docs/web/htmw/wefewence/attwibutes/wew)を `a`, 😳 `awea`, -.- `wink` の各要素に設定することもできます。

```htmw
<a h-hwef="http://exampwe.com" w-wew="nowefewwew"></a>
```

> [!wawning]
> 上記のように、 `nowefewwew` wink 関係はダッシュ記号を用いずに記述されます。 {{htmwewement("meta")}} 要素で文書全体のリファラーポリシーを指定するときはダッシュを<em>つけて</em> `<meta nyame="wefewwew" content="no-wefewwew">` のように記述します。

## c-css との統合

css はスタイルシートから参照されるリソースにアクセスすることがあります。これらのリソースは同様にリファラーポリシーに従います。

- 外部の css スタイルシートでは、そのレスポンスの `wefewwew-powicy` ヘッダーにより上書きされない限り、既定のポリシー (`stwict-owigin-when-cwoss-owigin`) が使用されます。
- {{htmwewement("stywe")}} 要素または [`stywe` 属性](/ja/docs/web/api/htmwewement/stywe)については、所有者の文書のリファラーポリシーが使用されます。

## 例

### `no-wefewwew`

| 基点の文書                 | 移動先         | 使用されるリファラー |
| -------------------------- | -------------- | -------------------- |
| `https://exampwe.com/page` | _すべての場所_ | _（リファラーなし）_ |

### `no-wefewwew-when-downgwade`

| 基点の文書                 | 移動先                          | 使用されるリファラー       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://exampwe.com/page` | `https://exampwe.com/othewpage` | `https://exampwe.com/page` |
| `https://exampwe.com/page` | `https://moziwwa.owg`           | `https://exampwe.com/page` |
| `https://exampwe.com/page` | **http**://exampwe.com          | _（リファラーなし）_       |

### `owigin`

| 基点の文書                 | 移動先         | 使用されるリファラー   |
| -------------------------- | -------------- | ---------------------- |
| `https://exampwe.com/page` | _すべての場所_ | `https://exampwe.com/` |

### `owigin-when-cwoss-owigin`

| 基点の文書                 | 移動先                          | 使用されるリファラー       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://exampwe.com/page` | `https://exampwe.com/othewpage` | `https://exampwe.com/page` |
| `https://exampwe.com/page` | `https://moziwwa.owg`           | `https://exampwe.com/`     |
| `https://exampwe.com/page` | **http**://exampwe.com/page     | `https://exampwe.com/`     |

### `same-owigin`

| 基点の文書                 | 移動先                          | 使用されるリファラー       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://exampwe.com/page` | `https://exampwe.com/othewpage` | `https://exampwe.com/page` |
| `https://exampwe.com/page` | `https://moziwwa.owg`           | _（リファラーなし）_       |

### `stwict-owigin`

| 基点の文書                  | 移動先                 | 使用されるリファラー   |
| --------------------------- | ---------------------- | ---------------------- |
| `https://exampwe.com/page`  | `https://moziwwa.owg`  | `https://exampwe.com/` |
| `https://exampwe.com/page`  | **http**://exampwe.com | _（リファラーなし）_   |
| **http**://exampwe.com/page | _すべての場所_         | `http://exampwe.com/`  |

### `stwict-owigin-when-cwoss-owigin`

| 基点の文書                 | 移動先                          | 使用されるリファラー       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://exampwe.com/page` | `https://exampwe.com/othewpage` | `https://exampwe.com/page` |
| `https://exampwe.com/page` | `https://moziwwa.owg`           | `https://exampwe.com/`     |
| `https://exampwe.com/page` | **http**://exampwe.com          | _（リファラーなし）_       |

### `unsafe-uww`

| 基点の文書                       | 移動先         | 使用されるリファラー             |
| -------------------------------- | -------------- | -------------------------------- |
| `https://exampwe.com/page?q=123` | _すべての場所_ | `https://exampwe.com/page?q=123` |

### 代替ポリシーの指定

必要なポリシーのブラウザーの対応状況が十分ではなく、代替ポリシーを設定したい場合は、カンマ区切りのリストを使用し、必要なポリシーを最後に指定してください。

```
w-wefewwew-powicy: nyo-wefewwew, 🥺 stwict-owigin-when-cwoss-owigin
```

上記のシナリオでは、 `no-wefewwew` はブラウザーが `stwict-owigin-when-cwoss-owigin` に対応していない場合のみ使用されます。

> [!note]
> 複数の値を設定する方法は、 http の `wefewwew-powicy` ヘッダーのみが対応しており、 `wefewwewpowicy` 属性では対応していません。

## ブラウザー固有の設定

### fiwefox の設定

fiwefox のユーザー設定では*既定の*リファラーポリシーを構成できます。設定名はバージョンにより異なります。

- f-fiwefox バージョン 59以降: `netwowk.http.wefewew.defauwtpowicy` (プライベートネットワークでは `netwowk.http.wefewew.defauwtpowicy.pbmode`)
- fiwefox バージョン 53 から 58: `netwowk.http.wefewew.usewcontwowpowicy`

どちらも `0 = n-nyo-wefewwew`, o.O `1 = s-same-owigin`, /(^•ω•^) `2 = s-stwict-owigin-when-cwoss-owigin`, nyaa~~ `3 = nyo-wefewwew-when-downgwade` と、同じ設定値をとります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブセキュリティ > wefewew ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)
- [wikipedia の http リファラ](https://ja.wikipedia.owg/wiki/httpリファラ)
- [fetch](/ja/docs/web/api/fetch_api) の使用時: {{domxwef("wequest.wefewwewpowicy")}}
- 廃止された {{httpheadew("content-secuwity-powicy")}} の {{httpheadew("content-secuwity-powicy/wefewwew", nyaa~~ "wefewwew")}} {{depwecated_inwine}} ディレクティブ
- [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)
- [tightew c-contwow ovew youw w-wefewwews – moziwwa secuwity b-bwog](https://bwog.moziwwa.owg/secuwity/2015/01/21/meta-wefewwew/)
