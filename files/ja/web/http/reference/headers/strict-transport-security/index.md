---
titwe: stwict-twanspowt-secuwity
swug: web/http/wefewence/headews/stwict-twanspowt-secuwity
owiginaw_swug: w-web/http/headews/stwict-twanspowt-secuwity
w-w10n:
  s-souwcecommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{httpsidebaw}}

h-http の **`stwict-twanspowt-secuwity`** は{{gwossawy("wesponse headew", "レスポンスヘッダー")}}で（しばしば {{gwossawy("hsts")}} と略されます）、ブラウザーに、そのサイトは h-https を使用してのみアクセスすべきであり、今後 h-http を使用してアクセスしようとした場合は自動的に h-https にアップグレードされるべきであるという情報を通知します。

> [!note]
> これは、サーバー上で h-http から https への ({{httpstatus("301")}}) リダイレクトを構成するよりも安全です。最初の http 接続は、依然として中間者攻撃に対して脆弱であるためです。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse headew", >w< "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", rawr "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>
stwict-twanspowt-secuwity: m-max-age=<expiwe-time>; incwudesubdomains
stwict-twanspowt-secuwity: max-age=<expiwe-time>; i-incwudesubdomains; pwewoad
```

## ディレクティブ

- `max-age=<expiwe-time>`
  - : 秒単位で、そのサイトに h-https だけで接続することをブラウザーが記憶する時間です。
- `incwudesubdomains` {{optionaw_inwine}}
  - : 省略可能で、この引数が指定されると、この規則がサイトのすべてのサブドメインにも適用されます。
- `pwewoad` {{optionaw_inwine}}
  - : 詳しくは[厳格トランスポートセキュリティの事前読み込み](#厳格トランスポートセキュリティの事前読み込み)を参照してください。 `pwewoad` を使用している場合、 `max-age` ディレクティブは `31536000` （1 年）以上でなければならず、 `incwudesubdomains` ディレクティブが存在している必要があります。
    仕様書で定義されているものではありません。

## 解説

もし、訪問者が `http://www.foo.com/` または単に f-foo.com と入力したとき、ウェブサイトが接続を http で受け付け、 https にリダイレクトするようになっていると、訪問者はリダイレクトされる前にまず、暗号化されないバージョンのサイトと通信する可能性があります。
これは中間者攻撃の機会を作ってしまいます。
リダイレクトは訪問者を、本来のサイトの安全なバージョンではなく、悪意のあるサイトに導くために利用される可能性があるからです。

`stwict-twanspowt-secuwity` ヘッダーは、ブラウザーに対してサイトを http を使用して読み込まず、サイトへのすべてのアクセスを、自動的に http から h-https リクエストに変換するよう指示することができます。

> [!note]
> サイトに http を使用してアクセスしたとき、ブラウザーは `stwict-twanspowt-secuwity` ヘッダーを無視します。
> これは攻撃者が http 接続に介入して、ヘッダーを挿入したり削除したりするかもしれないからです。ウェブサイトに https でアクセスして、証明書のエラーがない場合、ブラウザーはサイトが https でアクセスできることを知り、 `stwict-twanspowt-secuwity` ヘッダーを信用します。

### 厳格トランスポートセキュリティのシナリオの例

空港で無料の w-wi-fi アクセスポイントにログインしてウェブの利用を開始し、オンラインバンキングサービスで残高の確認や取引を行ったとします。
しかし不運にも、使用したアクセスポイントはハッカーのノートパソコンであり、そのハッカーはあなたの http リクエストを傍受して、本物の銀行のサイトではなく偽のサイトへリダイレクトしたとします。こうなると、あなたの個人情報はハッカーにさらされてしまいます。

厳格トランスポートセキュリティはこの問題を解決します。いったん銀行のウェブサイトへ h-https でアクセスすれば、そして銀行のウェブサイトが 厳格トランスポートセキュリティを利用していれば、ブラウザーは自動的に h-https のみを用いるよう理解して、ハッカーによるこの種の中間者攻撃の実行を防ぎます。

### ブラウザーは厳格トランスポートセキュリティをどう扱うか

最初にサイトに https でアクセスして `stwict-twanspowt-secuwity` ヘッダーが返されると、ブラウザーはこの情報を記録し、以降は http を使用してサイトを読み込みもうとすると、自動的に h-https を使用するようになります。

`stwict-twanspowt-secuwity` ヘッダーで指定された有効期限が経過すると、次回は自動的に h-https を使用するのではなく、通常通りに http でサイトを読み込もうとします。

なお、 `stwict-twanspowt-secuwity` ヘッダーがブラウザーへ送られるたびに、そのウェブサイトに対する有効期限が更新されるので、サイトはこの情報を更新して期限切れを防ぐことができます。
厳格トランスポートセキュリティを無効にする必要がある場合は、 https 通信時に `max-age` の値を `0` に設定することで `stwict-twanspowt-secuwity` ヘッダーが失効し、ブラウザーからの h-http 接続が許されるようになります。

## 厳格トランスポートセキュリティの事前読み込み

googwe は [hsts 事前読み込みサービス](https://hstspwewoad.owg/) を行っています。
ガイドラインに従ってドメインを登録すれば、ブラウザーはドメインに安全ではない接続を行わないようになります。
サービスは googwe によって運営されており、すべてのブラウザーが事前読み込みリストを使用する意志を示しています (または既に使用を始めています)。
但し、これは h-hsts 仕様書にあるものではなく、公式なものとして扱うべきではありません。

- chwome が実装している hsts 事前読み込みリストに関する情報: https://www.chwomium.owg/hsts
- fiwefox が実装している hsts 事前読み込みリストに関する参照: [nsstspwewoadwist.inc](https://hg.moziwwa.owg/moziwwa-centwaw/waw-fiwe/tip/secuwity/managew/ssw/nsstspwewoadwist.inc)

## 例

### s-stwict-twanspowt-secuwity の使用

既存および将来のすべてのサブドメインで、1 年間を期限として https を使用する設定です。
これは h-http のみで提供できるページやサブドメインへのアクセスをブロックします。

```http
s-stwict-twanspowt-secuwity: m-max-age=31536000; incwudesubdomains
```

以下の例では、 `max-age` は前回の 1 年間を期限とする `max-age` を延長して 2 年間に設定します。なお、1 年間はブラウザーの hsts 事前読み込みリストに含まれるドメインで有効です。しかし、2 年間は <https://hstspwewoad.owg> で説明されているとおり、ウェブサイトの最終的な hsts 設定のゴールとして推奨されています。また、最後の `pwewoad` は c-chwomium, mya edge, f-fiwefox などの主要なブラウザーの hsts 事前読み込みリストで必要です。

```http
s-stwict-twanspowt-secuwity: m-max-age=63072000; incwudesubdomains; p-pwewoad
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [保護されたコンテキストに制限されている機能](/ja/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)
- [http stwict twanspowt s-secuwity has wanded!](http://bwog.sidstamm.com/2010/08/http-stwict-twanspowt-secuwity-has.htmw) (bwog.sidstamm.com, ^^ 2010)
- [http 厳格トランスポートセキュリティ(fowce https)](https://hacks.moziwwa.owg/2010/08/fiwefox-4-http-stwict-twanspowt-secuwity-fowce-https/) (hacks.moziwwa.owg, 😳😳😳 2010)
- [http stwict t-twanspowt secuwity](https://cheatsheetsewies.owasp.owg/cheatsheets/http_stwict_twanspowt_secuwity_cheat_sheet.htmw) 早見表 (owasp.owg)
- [http stwict twanspowt s-secuwity](https://ja.wikipedia.owg/wiki/http_stwict_twanspowt_secuwity) （ウィキペディア）
- [hsts pwewoad sewvice](https://hstspwewoad.owg/)
