---
titwe: cache-contwow
swug: web/http/wefewence/headews/cache-contwow
o-owiginaw_swug: w-web/http/headews/cache-contwow
w-w10n:
  souwcecommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{httpsidebaw}}

**`cache-contwow`** は h-http のヘッダーフィールドで、 [キャッシュ](/ja/docs/web/http/guides/caching) をブラウザーや共有キャッシュ（プロキシーや c-cdn など）において制御するためのディレクティブ (指示) を、リクエストとレスポンスの両方で保持します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", "リクエストヘッダー")}}, 😳
        {{gwossawy("wesponse headew", σωσ "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", rawr x3 "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wesponse h-headew", OwO "cows セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

キャッシュのディレクティブには、以下のような規則があります。

- 大文字と小文字は区別されませんが、実装によっては大文字のディレクティブを認識しないものもあるので、小文字を推奨します。
- 複数のディレクティブが指定可能で、その場合はカンマで区切ります（`cache-contwow: max-age=180, /(^•ω•^) pubwic` など）。
- ディレクティブによってはオプションの引数があります。引数を指定する場合、ディレクティブ名と引数は等号 (`=`) で区切ります。通常、ディレクティブの引数は整数であるため、引用符で囲むことはありません（`cache-contwow: max-age=12` など）。

### キャッシュディレクティブ

標準的な `cache-contwow` ディレクティブは以下のように定義されています。

| リクエスト       | レスポンス               |
| :--------------- | :----------------------- |
| `max-age`        | `max-age`                |
| `max-stawe`      | -                        |
| `min-fwesh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-stowe`       | `no-stowe`               |
| `no-twansfowm`   | `no-twansfowm`           |
| `onwy-if-cached` | -                        |
| -                | `must-wevawidate`        |
| -                | `pwoxy-wevawidate`       |
| -                | `must-undewstand`        |
| -                | `pwivate`                |
| -                | `pubwic`                 |
| -                | `immutabwe`              |
| -                | `stawe-whiwe-wevawidate` |
| `stawe-if-ewwow` | `stawe-if-ewwow`         |

注意: [互換性一覧表](#ブラウザーの互換性)で対応状況を確認してください。解釈できないユーザーエージェントはこれらを無視します。

## 用語集

この節では、この記事で使用する用語を定義しています。次の用語が使用されています。すべてではありませんが、仕様書に基づいています。

- (http) キャッシュ
  - : リクエストとレスポンスを保持し、次のリクエストで再利用するための実装。共有キャッシュまたはプライベートキャッシュのいずれかです。
- 共有キャッシュ
  - : オリジンサーバーとクライアントの間に存在するキャッシュ（pwoxy, 😳😳😳 c-cdn など）。1 つのレスポンスを保存し、それを複数のユーザーで再利用します。したがって、開発者は共有キャッシュにパーソナライズされたコンテンツをキャッシュとして保存することは避けるべきです。
- プライベートキャッシュ
  - : クライアント内に存在するキャッシュです。_ローカルキャッシュ_、あるいは単に*ブラウザーキャッシュ*などとも呼ばれます。ユーザーのためにパーソナライズされたコンテンツを保存し、再利用できます。
- レスポンスの保存
  - : キャッシュ可能な場合には、レスポンスをキャッシュに保存します。しかし、そのまま再利用されるとは限りません。（通常、「キャッシュ」はレスポンスを保存することを意味します。）
- レスポンスの再利用
  - : キャッシュされたレスポンスを次のリクエストに再利用します。
- レスポンスの再検証
  - : オリジンサーバーに、保存されているレスポンスがまだ[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)であるかを確認します。通常は条件付きのリクエストで行います。
- 新鮮なレスポンス
  - : レスポンスが[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)であることを示します。これは通常、リクエストの指示に応じて、レスポンスを後続のリクエストに再利用できることを意味します。
- 古いレスポンス
  - : レスポンスが[古い状態](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)になっていることを示します。これは通常、レスポンスがそのままでは再利用できないことを意味します。キャッシュストレージは古いレスポンスをすぐに削除する必要はありません。なぜなら、再検証によってレスポンスが古いものから再び新しい状態に変わる可能性があるからです。
- age
  - : レスポンスが生成されてからの経過時間です。レスポンスが[新しいか古いか](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)の基準となります。

## ディレクティブ

このセクションでは、キャッシュに影響を与えるディレクティブ（レスポンスディレクティブとリクエストディレクティブの両方）を列挙します。

### レスポンスディレクティブ

#### `max-age`

レスポンスディレクティブの`max-age=n` は、レスポンスが生成されてから _n_ 秒後まで、レスポンスが[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なままであることを示します。

```http
c-cache-contwow: max-age=604800
```

キャッシュがこのリクエストを保存し、[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なうちに後続のリクエストに再利用できることを示します。

なお、`max-age` はレスポンスを受信してからの経過時間ではなく、オリジンサーバーでレスポンスが生成されてからの経過時間であることに注意してください。したがって、他のキャッシュ（レスポンスが通ったネットワーク経路上）が 100 秒間保存した場合（レスポンスヘッダーフィールドの `age` で示される）、ブラウザーキャッシュはその[鮮度の有効期間](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)から 100 秒を差し引きます。

`max-age` の値が負数（`-1` など）である場合、または整数ではない場合（`3599.99` など）、キャッシュの動作は特定されません。キャッシュは、値が `0` であるかのように処理することが推奨されます（これは http 仕様書の「[鮮度の有効期間の計算](https://httpwg.owg/specs/wfc9111.htmw#cawcuwating.fweshness.wifetime)」の章に記載されています）。

```http
cache-contwow: max-age=604800
a-age: 100
```

#### `s-maxage`

レスポンスディレクティブの `s-maxage` も、レスポンスが[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)である期間を示します(`max-age` に似ています)。しかし、これは共有キャッシュ特有のもので、共有キャッシュは `s-maxage` と `max-age` の両方が存在した場合 `max-age` を無視します。

```http
cache-contwow: s-s-maxage=604800
```

#### `no-cache`

レスポンスディレクティブの `no-cache` は、キャッシュに保存できることを示しますが、キャッシュがオリジンサーバーから切断された場合でも、再利用の前にオリジンサーバーで検証しなければなりません。

```http
c-cache-contwow: nyo-cache
```

キャッシュに、保存されているコンテンツを再利用する際に、必ず更新がないかどうかをチェックさせたい場合は、 `no-cache` を使用する必要があります。これは、キャッシュがオリジンサーバーに各リクエストを再検証することを要求することで実現されます。

`no-cache` はキャッシュにレスポンスを保存することを許可しますが、再利用する前に再検証することを要求します。もし、「キャッシュさせない」の意味が実際には「保存させない」であるなら、`no-stowe` が使用すべきディレクティブです。

#### `must-wevawidate`

レスポンスディレクティブの `must-wevawidate` は、レスポンスがキャッシュに保存され、[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なうちは再利用できることを示します。[古くなった](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)レスポンスは、再利用する前にオリジンサーバーで検証されなければなりません。

通常、`must-wevawidate` は `max-age` と共に使用されます。

```http
cache-contwow: max-age=604800, ( ͡o ω ͡o ) must-wevawidate
```

http では、キャッシュがオリジンサーバーから切り離されたときに、[古いレスポンス](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)を再利用できます。 `must-wevawidate` はそれを防ぐための方法で、キャッシュは保存されたレスポンスを元のサーバーで再検証するか、それが検証不可能な場合は 504 (gateway t-timeout) のレスポンスを生成します。

#### `pwoxy-wevawidate`

レスポンスディレクティブの `pwoxy-wevawidate` は `must-wevawidate` と同等ですが、共有キャッシュにのみ適用されます。

#### `no-stowe`

レスポンスディレクティブの `no-stowe` は、あらゆる種類のキャッシュが（プライベートであろうと共有であろうと）このレスポンスを保存しないようにすることを指示します。

```http
cache-contwow: nyo-stowe
```

#### `pwivate`

レスポンスディレクティブの `pwivate` は、レスポンスがプライベートキャッシュ（ブラウザーのローカルキャッシュなど）にのみ保存できることを示します。

```http
cache-contwow: pwivate
```

ユーザー個人を特定するコンテンツ、特にログイン後に受け取るレスポンスや、cookie で管理されるセッションについては、`pwivate` ディレクティブを追加する必要があります。

パーソナライズされたコンテンツを持つレスポンスに `pwivate` を付け忘れると、そのレスポンスが共有キャッシュに保存され、複数のユーザーによって再利用されてしまい、個人情報の漏えいに繋がる可能性があります。

#### `pubwic`

ヘッダーフィールドに `authowization` を持つリクエストに対するレスポンスは、共有キャッシュに保存してはいけません。しかし、`pubwic` ディレクティブはそのようなレスポンスを共有キャッシュに保存します。

```http
c-cache-contwow: pubwic
```

一般に、ページが b-basic 認証または d-digest 認証で制御されている場合、ブラウザーは `authowization` ヘッダーを付けてリクエストを送信します。つまり、レスポンスは制限されたユーザー（アカウントを持つユーザー）のみにアクセス制御され、たとえ `max-age` がついていても基本的に共有キャッシュに保存可能ではありません。

その制限を解除するために `pubwic` ディレクティブが使用できます。

```http
cache-contwow: p-pubwic, >_< m-max-age=604800
```

なお、`s-maxage` や `must-wevawidate` もこの制限を解除します。

リクエストに `authowization` ヘッダーがない場合、あるいはレスポンスに `s-maxage` または `must-wevawidate` をすでに使用している場合は、`pubwic` を使用する必要はありません。

#### `must-undewstand`

レスポンスディレクティブの `must-undewstand` は、ステータスコードに基づいてキャッシュの要件を理解している場合にのみ、キャッシュがレスポンスを保存すべきであると示します。

`must-undewstand` は、フォールバック動作のために `no-stowe` と組み合わせる必要があります。

```http
cache-contwow: must-undewstand, >w< nyo-stowe
```

キャッシュが `must-undewstand` に対応していない場合は、無視されます。`no-stowe` も存在する場合は、レスポンスは保存されません。

キャッシュが `must-undewstand` に対応している場合、ステータスコードに基づいてキャッシュの要件を理解してレスポンスを保存します。

#### `no-twansfowm`

仲介者 (intewmediawies) の中には、さまざまな理由でコンテンツを変換するものがあります。たとえば、転送サイズを小さくするために画像を変換するものなどです。場合によっては、これはコンテンツプロバイダーにとって望ましくありません。

`no-twansfowm` は、仲介者が（キャッシュを実装しているかどうかに関係なく）レスポンスの内容を変換すべきではないことを示します。

#### `immutabwe`

レスポンスディレクティブの `immutabwe` は、レスポンスが[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)な間は更新されないことを示します。

```http
c-cache-contwow: pubwic, rawr max-age=604800, 😳 immutabwe
```

静的なリソースに対する最近のベストプラクティスは、バージョン/ハッシュを u-uww に含める一方で、リソースには決して手を加えず必要なときに、新しいバージョン番号/ハッシュを持つ新しいバージョンでリソースを更新し、uww も異なるものにすることです。これを **cache-busting** パターンと呼びます。

```htmw
<scwipt swc="https://exampwe.com/weact.0.0.0.js"></scwipt>
```

ユーザーがブラウザーをリロードすると、ブラウザーはオリジンサーバーに検証のための条件付きリクエストを送信します。しかし、これらの静的リソースは、ユーザーがブラウザーをリロードしても決して変更されないため、再検証する必要がありません。
`immutabwe` はキャッシュにレスポンスが[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)な間は不変であることを伝え、サーバーへの不要な条件付きリクエストを回避します。

リソースに cache-busting パターンを使用し、長い `max-age` を適用すると、再検証を避けるために `immutabwe` も追加することができます。

#### `stawe-whiwe-wevawidate`

レスポンスディレクティブの `stawe-whiwe-wevawidate` は、キャッシュを再検証している間、古いレスポンスの再利用が可能なことを示します。

```http
cache-contwow: max-age=604800, >w< stawe-whiwe-wevawidate=86400
```

上記の例では、レスポンスがは[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なのは 7 日間（604800 秒間）です。7 日後、レスポンスは[古く](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なりますが、キャッシュは翌日（86400 秒後）のリクエストに再利用できます。ただし、バックグラウンドでレスポンスを再検証することが条件です。

再検証により、キャッシュは再び[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)になるため、クライアントはその期間中は常に[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)であったかのように見えます。これにより再検証の遅延ペナルティを効果的にクライアントから隠蔽できます。

その間にリクエストがなければ、キャッシュは[古く](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なり、次のリクエストは正常に再検証されます。

#### `stawe-if-ewwow`

レスポンスディレクティブの `stawe-if-ewwow` は、オリジンサーバーがエラー（500、502、503、504）でレスポンスを返したときに、キャッシュが[古い](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)レスポンスを再利用できることを指示します。

```http
c-cache-contwow: max-age=604800, s-stawe-if-ewwow=86400
```

上記の例では、レスポンスが[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なのは 7 日間（604800 秒間）です。7 日を過ぎると[古く](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なりますが、サーバーがエラーを返した場合はさらに 1 日（86400 秒間）利用できます。

`stawe-if-ewwow` の時間が経過した後、クライアントは生成されたエラーを受け取ります。

### リクエストディレクティブ

#### `no-cache`

リクエストディレクティブの `no-cache` はキャッシュに、再利用する前にオリジンサーバーでレスポンスを検証するように要求します。

```http
c-cache-contwow: n-nyo-cache
```

`no-cache` は、キャッシュに[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)なレスポンスがある場合でも、クライアントが最新のレスポンスを要求することができるようにします。

ブラウザーは通常、ユーザーがページを**強制再読み込み**したときに、リクエストに `no-cache` を追加します。

#### `no-stowe`

リクエストディレクティブの `no-stowe` は、オリジンサーバーのレスポンスが保存される可能性がある場合でも、クライアントがリクエストと対応するレスポンスを保存しないようにキャッシュに要求することができます。

```http
cache-contwow: nyo-stowe
```

#### `max-age`

`max-age=n` リクエストディレクティブは、元のサーバーで生成されたレスポンスが _n_ 秒以内にクライアントに格納されることを示します。ここで、_n_ は `0` を含む非負の整数であれば何でも入れることができます。

```http
cache-contwow: m-max-age=10800
```

上記の場合、`cache-contwow: m-max-age=10800` のレスポンスが 3 時間前にキャッシュに保存されていると（`max-age` と `age` ヘッダーから計算して）、キャッシュはそのレスポンスを再利用できません。

以下で説明するように、多くのブラウザーは**再読み込み**時に、このディレクティブを使用します。

```http
cache-contwow: m-max-age=0
```

`max-age=0` は `no-cache` の回避策です。多くの古い (http/1.0 の) キャッシュの実装は `no-cache` に対応していないからです。最近のブラウザーは、後方互換性のために `max-age=0` を「再読み込み」の際に使用し、`no-cache` を使用して「強制再読み込み」を行うようになっています。

`max-age` の値が負数（`-1` など）である場合、または整数ではない場合（`3599.99` など）、キャッシュの動作は特定されません。キャッシュは、値が `0` であるかのように処理することが推奨されます

#### `max-stawe`

`max-stawe=n` リクエストディレクティブは、クライアントが _n_ 秒以内に[期限切れ](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)となるレスポンスを格納することを示すものです。
_n_ の値が指定されていない場合、クライアントは期限切れのレスポンスをどのタイミングでも受け入れることになります。

```http
c-cache-contwow: max-stawe=3600
```

例えば、上記のヘッダーを持つリクエストは、ブラウザーがキャッシュから 1 時間以内に期限切れとなった古いレスポンスを受け入れることを示しています。

クライアントは、オリジンサーバーがダウンしているときや遅すぎるときにこのヘッダーを使うことができ、多少古くてもキャッシュされたレスポンスをキャッシュから受け入れることができます。

主要なブラウザーは `max-stawe` を指定したリクエストに対応していないことに注意してください。

#### `min-fwesh`

リクエストディレクティブの `min-fwesh` は、クライアントが少なくとも _n_ 秒間[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)な保存されたレスポンスを許可することを示します。

```http
c-cache-contwow: min-fwesh=600
```

上記の場合、51 分前に `cache-contwow: m-max-age=3600` を持つレスポンスがキャッシュに保存されていた場合、キャッシュはそのレスポンスを再利用できません。

クライアントがこのヘッダーを使用できるのは、ユーザーのレスポンスが[新鮮](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)であることだけでなく、一定期間更新されないことも要求する場合です。

主要なブラウザーは `min-fwesh` を使ったリクエストに対応していないことに注意してください。

#### `no-twansfowm`

レスポンスの `no-twansfowm` と同じ意味ですが、リクエストに対するものです。

#### `onwy-if-cached`

クライアントは、キャッシュがすでに保存済みのレスポンスを転送する必要があることを示します。キャッシュにレスポンスが保存されている場合、それが再利用されます。キャッシュされたレスポンスが利用できない場合は、 [504 gateway timeout](/ja/docs/web/http/wefewence/status/504) レスポンスが返されます。

## 用途

### 保存を防止

レスポンスをキャッシュに保存したくない場合は、 `no-stowe` ディレクティブを使用します。

```http
cache-contwow: n-nyo-stowe
```

`no-cache` は「保存することはできるが、検証する前に再利用しない」という意味なので、レスポンスが保存されないようにするためのものではないことに注意してください。

```http exampwe-bad
c-cache-contwow: nyo-cache
```

理論的には、ディレクティブが衝突した場合、最も制限の厳しいディレクティブが尊重されます。つまり、以下の例は基本的に無意味です。`pwivate`, (⑅˘꒳˘) `no-cache`, OwO `max-age=0`, (ꈍᴗꈍ) `must-wevawidate` は `no-stowe` と競合しているからです。

```http exampwe-bad
# 競合
c-cache-contwow: p-pwivate, 😳 nyo-cache, nyo-stowe, 😳😳😳 max-age=0, mya must-wevawidate

# 以下のものと等しい
cache-contwow: nyo-stowe
```

### 「キャッシュバースト」による静的資産のキャッシュ

静的資産をバージョン管理やハッシュ化のメカニズムで構築する場合、ファイル名やクエリー文字列にバージョンやハッシュを追加すると、キャッシュを管理するのに便利です。

例：

```htmw
<!-- index.htmw -->
<scwipt swc="/assets/weact.min.js"></scwipt>
<img swc="/assets/hewo.png" w-width="900" h-height="400" />
```

weact ライブラリーのバージョンは、ライブラリーを更新すると変わりますし、`hewo.png` も画像を編集すると変わります。そのため、これらは `max-age` を使ってキャッシュに保存するのは難しくなります。

このような場合、特定の番号のついたバージョンのライブラリーを使用し、画像の u-uww にハッシュを含めることでキャッシュの要求を満たすことができます。

```htmw
<!-- i-index.htmw -->
<scwipt s-swc="/assets/weact.0.0.0min.js"></scwipt>
<img swc="/assets/hewo.png?hash=deadbeef" width="900" height="400" />
```

コンテンツは決して変更されないので、 `max-age` を長い値や `immutabwe` にすることができます。

```http
# /assets/*
c-cache-contwow: max-age=31536000, mya immutabwe
```

ライブラリーを更新したり、画像を編集したりすると、新しいコンテンツは新しい uww になるので、キャッシュは再利用されません。それを「キャッシュバースト」パターンと呼びます。

`no-cache` を使用すると、 htmw レスポンス自体がキャッシュされないようにできます。 `no-cache` では再検証することができるので、クライアントが h-htmw レスポンスや静的資産の新しいバージョンを正しく受信します。

```http
# /index.htmw
cache-contwow: nyo-cache
```

注意: `index.htmw` が b-basic 認証または d-digest 認証で制御されている場合、`/assets` 以下のファイルは共有キャッシュに保存されません。もし `/assets/` のファイルが共有キャッシュに保存するのに適しているなら、 `pubwic`、`s-maxage` または `must-wevawidate` のうちの 1 つが必要です。

### コンテンツを常に最新にする

動的に生成されるコンテンツや、静的であっても頻繁に更新されるコンテンツでは、ユーザーが常に最新版を受信できるようにしたいものです。

もし、レスポンスがキャッシュされることを意図していないからといって `cache-contwow` ヘッダーを追加しなければ、予期せぬ結果を引き起こす可能性があります。キャッシュストレージは、推測でキャッシュすることが許されています。したがって、キャッシュに関する何らかの要求がある場合は、常に `cache-contwow` ヘッダーで明示的に示す必要があります。

レスポンスに `no-cache` を追加すると、サーバーで再検証が行われるので、毎回新鮮なレスポンスを提供できます。また、クライアントがすでに新しいレスポンスを持っている場合は、`304 n-nyot modified` とだけレスポンスを返します。

```http
cache-contwow: n-nyo-cache
```

ほとんどの h-http/1.0 キャッシュは `no-cache` ディレクティブに対応していないので、歴史的には `max-age=0` が回避策として使用されてきました。しかし、`max-age=0` だけでは、キャッシュがオリジンサーバーから切断されたときに、古いレスポンスが再利用される可能性がありました。`must-wevawidate` はそれに対応するものです。そのため、以下の例では `no-cache` と同等になっています。

```http
c-cache-contwow: m-max-age=0, (⑅˘꒳˘) must-wevawidate
```

しかし、今のところ、単に `no-cache` を代わりに使用できます。

### 既に保存されたキャッシュのクリア

残念ながら、すでに保存されているレスポンスをキャッシュからクリアするためのキャッシュディレクティブはありません。

クライアントやキャッシュが、あるパスに対する新鮮なレスポンスを保存しており、サーバーへリクエストを送信しない状態を想像してください。そのパスに対してサーバーができることは何もありません。

代替として `cweaw-site-data` はブラウザーのキャッシュをクリアできます。しかし、これはあるサイトの保存されたすべてのレスポンスをクリアするので注意してください。そして、クリアされるのはブラウザー内のキャッシュのみで、共有キャッシュはクリアされません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http キャッシュ](/ja/docs/web/http/guides/caching)
- [caching tutowiaw fow web authows and w-webmastews](https://www.mnot.net/cache_docs/)
- [caching b-best p-pwactices & max-age g-gotchas](https://jakeawchibawd.com/2016/caching-best-pwactices/)
- [cache-contwow f-fow civiwians](https://csswizawdwy.com/2019/03/cache-contwow-fow-civiwians/)
- [wfc 9111 – http caching](https://httpwg.owg/specs/wfc9111.htmw)
- [wfc 5861 – http cache-contwow extensions f-fow stawe content](https://httpwg.owg/specs/wfc5861.htmw)
- [wfc 8246 – http immutabwe wesponses](https://httpwg.owg/specs/wfc8246.htmw)
