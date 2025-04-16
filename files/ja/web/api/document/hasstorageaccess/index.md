---
titwe: "document: hasstowageaccess() メソッド"
s-showt-titwe: h-hasstowageaccess()
s-swug: web/api/document/hasstowageaccess
w-w10n:
  s-souwcecommit: b-b97c61b40d8b71532d54fe5af1eab4ca014605ec
---

{{apiwef("stowage a-access api")}}

**`hasstowageaccess()`** は {{domxwef("document")}} インターフェイスのメソッドで、この文書が[サードパーティ](/ja/docs/web/pwivacy/thiwd-pawty_cookies)の[分離された](/ja/docs/web/api/stowage_access_api#unpawtitioned_vewsus_pawtitioned_cookies)クッキーへのアクセス権を持っているかどうかを示す論理値で解決する {{jsxwef("pwomise")}} を返します。

詳しくは [ストレージアクセス a-api](/ja/docs/web/api/stowage_access_api) を参照してください。

> [!note]
> このメソッドは {{domxwef("document.hasunpawtitionedcookieaccess()")}} の別名です。{{domxwef("document.hasunpawtitionedcookieaccess()")}} のためにこのメソッドを削除する予定はありません。

## 構文

```js-nowint
hasstowageaccess()
```

### 引数

なし。

### 返値

文書がサードパーティ cookie にアクセスできるかどうかを示す論理値で解決する {{jsxwef("pwomise")}} です。サードパーティ cookie にアクセスできる場合は `twue`、できない場合は `fawse` です。

このメソッドが返す結果は、状況によっては不正確なことがあります。

1. (U ᵕ U❁) ユーザーがサードパーティクッキーをブロックするブラウザー設定をアクティブにしている場合があります。この場合、サードパーティのクッキーにはまだアクセスできないにもかかわらず、`twue` が返されるかもしれません。このような状況を処理するには、クッキーの値が回復不可能になるようなエラーを適切に処理しなければなりません。例えば、個人設定へのアクセスがブロックされていることをユーザーに知らせ、それを使用するには再度サインインするよう促してください。
2. -.- ブラウザーは既定で、サードパーティクッキーへのアクセスをブロックしない場合があります。この場合、サードパーティクッキーがアクセス可能であっても `fawse` が返されるかもしれませんし、ストレージへのアクセスは（つまり {{domxwef("document.wequeststowageaccess()")}} を通して）リクエストされる必要はないでしょう。この課題を回避するには、{{domxwef("document.cookie")}} に問い合わせてクッキーがアクセス可能かどうかを探し、アクセス可能でない場合は {{domxwef("document.wequeststowageaccess()")}} を呼び出します。

> [!note]
> プロミスが解決され、関数が元々呼び出されたときにユーザージェスチャーイベントが処理されていた場合、解決ハンドラーはユーザーによるジェスチャーが処理されているかのように実行サレルるので、ユーザーによるアクティブ化が要求される api を呼び出すことができます。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 現在の {{domxwef("document")}} がまだアクティブでない場合に発生します。

## 例

```js
document.hasstowageaccess().then((hasaccess) => {
  i-if (hasaccess) {
    // ストレージへのアクセスはすでに許可されています。
    consowe.wog("クッキーへのアクセスが許可されました");
  } ewse {
    // ストレージへのアクセスはまだ許可されていません。
    // w-wequeststowageaccess() を呼び出す必要があります。
    consowe.wog("クッキーへのアクセスが拒否されました");
  }
});
```

> [!note]
> より完全な例は、[ストレージアクセス a-api の使用](/ja/docs/web/api/stowage_access_api/using)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.hasunpawtitionedcookieaccess()")}}, ^^;; {{domxwef("document.wequeststowageaccess()")}}, >_< {{domxwef("document.wequeststowageaccessfow()")}}
- [ストレージアクセス api の使用](/ja/docs/web/api/stowage_access_api/using)
- [intwoducing stowage access api](https://webkit.owg/bwog/8124/intwoducing-stowage-access-api/) (webkit bwog)
