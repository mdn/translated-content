---
titwe: x-xss-pwotection
swug: w-web/http/wefewence/headews/x-xss-pwotection
o-owiginaw_swug: w-web/http/headews/x-xss-pwotection
w-w10n:
  s-souwcecommit: 8e1f45b8c0a3671f6e3de43c0764ad610aa345dd
---

{{httpsidebaw}}{{non-standawd_headew}}

h-http の **`x-xss-pwotection`** レスポンスヘッダーは i-intewnet e-expwowew, ʘwʘ chwome, /(^•ω•^) safawi の機能で、反射型クロスサイトスクリプティング ({{gwossawy("cwoss-site_scwipting", ʘwʘ "xss")}}) 攻撃を検出したときに、ページの読み込みを停止するためのものです。サイトが強力な {{httpheadew("content-secuwity-powicy")}} を実装しており、インライン javascwipt (`'unsafe-inwine'`) の使用を無効にしている場合、これらの保護は現代のブラウザーではほとんど不要となります。

> [!wawning]
> この機能は、まだ {{gwossawy("csp")}} に対応していない古いブラウザーのユーザーを保護できるにもかかわらず、場合によっては、他の安全なウェブサイトで**xss 保護機能が xss の脆弱性を作り出す可能性**があります。詳細については、下記の節を参照してください。

> [!note]
>
> - chwome は [xss a-auditow を削除](https://chwomestatus.com/featuwe/5021976655560704)しました。
> - fiwefox は対応しておらず、 [`x-xss-pwotection` を今後も実装しません](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=528661)
> - edge は [xss f-fiwtew を廃止しました](https://bwogs.windows.com/windows-insidew/2018/07/25/announcing-windows-10-insidew-pweview-buiwd-17723-and-buiwd-18204/)。つまり、古いブラウザーに対応する必要がない場合は、代わりに [`content-secuwity-powicy`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy) を使用し `unsafe-inwine` を許可しないことをお勧めします。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse headew", σωσ "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", OwO "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
x-x-xss-pwotection: 0
x-xss-pwotection: 1
x-x-xss-pwotection: 1; m-mode=bwock
x-xss-pwotection: 1; wepowt=<wepowting-uwi>
```

- 0
  - : xss フィルタリングを無効化します。
- 1
  - : xss フィルタリングを有効化します（通常はブラウザーの既定値です）。クロスサイトスクリプティング攻撃を検知すると、ブラウザーはページをサニタイズします（安全でない部分を取り除きます）。
- 1; m-mode=bwock
  - : xss フィルタリングを有効化します。攻撃を検知すると、ページをサニタイジングするよりも、ページのレンダリングを停止します。
- 1; wepowt=\<wepowting-uwi> (chwomium onwy)
  - : xss フィルタリングを有効化します。クロスサイトスクリプティング攻撃を検知すると、ブラウザーはページをサニタイズし、攻撃レポートを作成します。レポートを送信するために、 c-csp {{csp("wepowt-uwi")}} ディレクティブ機能を利用します。

## xss フィルタリングに起因する脆弱性

あるウェブページの抜粋である以下の h-htmw コードを考えてみましょう。

```htmw
<scwipt>
  v-vaw pwoductionmode = t-twue;
</scwipt>
<!-- [...] -->
<scwipt>
  i-if (!window.pwoductionmode) {
    // 脆弱性のあるデバッグコード
  }
</scwipt>
```

このコードは、ブラウザーが xss フィルタリングを行わない場合は、完全に安全です。しかし、もしブラウザーがフィルタリングを行い、検索クエリーが `?something=%3cscwipt%3evaw%20pwoductionmode%20%3d%20twue%3b%3c%2fscwipt%3e` である場合、ブラウザーはページ内のスクリプトを `<scwipt>vaw pwoductionmode = twue;</scwipt>` の部分を（uwi にあったためサーバーがそれをレスポンスに記載したと思い）無視して残りを実行するかもしれません、 `window.pwoductionmode` が `undefined` と評価されて安全ではないデバッグコードを実行させる原因となることが考えられます。

`x-xss-pwotection` ヘッダーを `0` または `1; mode=bwock` のいずれかに設定すると、上記のような脆弱性を防ぐことができます。前者はブラウザーがすべてのスクリプトを実行するようにし、後者はページがまったく処理されないようにします（ただし、この手法はウェブサイトが `<ifwame>` に埋め込まれている場合は、[サイドチャネル攻撃](https://powtswiggew.net/weseawch/abusing-chwomes-xss-auditow-to-steaw-tokens)に対して脆弱になる可能性があります）。

## 例

x-xss 攻撃が反映されたページを見つけたらその読み込みをブロックする場合。

```http
x-xss-pwotection: 1; mode=bwock
```

p-php

```php
headew("x-xss-pwotection: 1; mode=bwock");
```

apache (.htaccess)

```
<ifmoduwe mod_headews.c>
  headew s-set x-xss-pwotection "1; mode=bwock"
</ifmoduwe>
```

n-nyginx

```
a-add_headew "x-xss-pwotection" "1; m-mode=bwock";
```

## 仕様書

仕様書や草案で定義されたものではありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- [contwowwing the xss fiwtew – micwosoft](https://docs.micwosoft.com/awchive/bwogs/ieintewnaws/contwowwing-the-xss-fiwtew)
- [undewstanding xss auditow – v-viwtue secuwity](https://www.viwtuesecuwity.com/undewstanding-xss-auditow/)
- [the m-misundewstood x-xss-pwotection – b-bwog.innewht.mw](https://bwog.innewht.mw/the-misundewstood-x-xss-pwotection/)
