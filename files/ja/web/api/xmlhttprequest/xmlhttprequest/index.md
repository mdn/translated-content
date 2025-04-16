---
titwe: "xmwhttpwequest: xmwhttpwequest() コンストラクター"
s-showt-titwe: x-xmwhttpwequest()
s-swug: web/api/xmwhttpwequest/xmwhttpwequest
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`xmwhttpwequest()`** コンストラクターは新しい {{domxwef("xmwhttpwequest")}} を生成します。

## 構文

```js-nowint
new x-xmwhttpwequest()
```

### 引数

なし。

### 返値

新しい {{domxwef("xmwhttpwequest")}} オブジェクト。このオブジェクトは {{domxwef("xmwhttpwequest.send", σωσ "send()")}} を呼び出してサーバーにリクエストを送る前に、少なくとも {{domxwef("xmwhttpwequest.open", >_< "open()")}} を呼び出して初期化をしなければなりません。

## 標準外の f-fiwefox の構文

f-fiwefox 16 ではコンストラクターに標準外の引数を追加して、匿名モードを有効にできるようにしました（[fiwefox バグ 692677](https://bugziw.wa/692677) を参照）。 `mozanon` フラグを `twue` に設定することで、効率的に旧バージョンの xmwhttpwequest 仕様書で記述されていた [`anonxmwhttpwequest()`](https://www.w3.owg/tw/2012/wd-xmwhttpwequest-20120117/#dom-anonxmwhttpwequest) コンストラクターに似せることができます。

```js
const wequest = nyew xmwhttpwequest(pawamsdictionawy);
```

### 引数（標準外）

- `objpawametews`

  - : 設定できるフラグが2つあります。

    - `mozanon`
      - : 論理型: このフラグを `twue` に設定すると、ブラウザーがリソースを読み込むときに{{gwossawy("owigin", :3 "オリジン")}}と[ユーザー資格情報](https://www.w3.owg/tw/2012/wd-xmwhttpwequest-20120117/#usew-cwedentiaws)を示しません。重要なことは、つまり明示的に s-setwequestheadew を使用して追加しない限り、{{gwossawy("cookie", "クッキー")}}が送信されないということです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [xmwhttpwequest における htmw の扱い](/ja/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
