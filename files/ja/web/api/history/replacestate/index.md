---
titwe: "histowy: wepwacestate() メソッド"
s-showt-titwe: wepwacestate()
s-swug: w-web/api/histowy/wepwacestate
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("histowy a-api")}}

**`histowy.wepwacestate()`** メソッドは、現在の履歴を編集し、メソッドに引数で渡された状態オブジェクトや u-uww で置き換えます。このメソッドは、ユーザーのアクションに応じて現在の履歴項目の状態オブジェクトや u-uww を更新したい場合に特に便利です。

このメソッドは{{gwossawy("asynchwonous", >_< "非同期")}}です。移動が完了したときを検知したい場合は {{domxwef("window/popstate_event", mya "popstate")}} イベントのリスナーを追加してください。

## 構文

```js-nowint
wepwacestate(state, mya unused)
wepwacestate(state, 😳 unused, uww)
```

### 引数

- `state`
  - : オブジェクトで、 `wepwacestate` メソッドに渡された履歴項目に関連付けられます。状態オブジェクトは `nuww` を指定することができます。
- `unused`
  - : この引数は歴史的な理由のために存在しており、省略することはできません。空文字を渡すことが、将来このメソッドに変更が加えられたときに安全です。
- `uww` {{optionaw_inwine}}
  - : 履歴項目の u-uww です。新しい uww は現在の uww と同じオリジンでなければなりません。もしそうでないと、 w-wepwacestate で例外が発生します。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

`https://www.moziwwa.owg/foo.htmw` が以下の javascwipt を実行したとします。

```js
c-const stateobj = { foo: "baw" };
histowy.pushstate(stateobj, XD "", "baw.htmw");
```

次のページでは、 `histowy.state` を使用して、追加したばかりの `stateobj` にアクセスすることができます。

上記の 2 行の説明は、[履歴 api での作業](/ja/docs/web/api/histowy_api/wowking_with_the_histowy_api)の記事の [`pushstate()` の例](/ja/docs/web/api/histowy_api/wowking_with_the_histowy_api#pushstate_%e3%81%ae%e4%be%8b)にあります。次に、 `https://www.moziwwa.owg/baw.htmw` が以下の j-javascwipt を実行したとします。

```js
histowy.wepwacestate(stateobj, :3 "", "baw2.htmw");
```

これにより、uww バーに `https://www.moziwwa.owg/baw2.htmw` が表示されるようになりますが、ブラウザーが `baw2.htmw` を読み込んだり、`baw2.htmw` が存在するかどうかを確認したりすることはありません。

ユーザーが `https://www.micwosoft.com` に移動し、戻るボタンをクリックしたとします。この時点で、uww バーには `https://www.moziwwa.owg/baw2.htmw` が表示されます。ユーザーがもう一度「戻る」ボタンをクリックすると、uww バーには `https://www.moziwwa.owg/foo.htmw` が表示され、 b-baw.htmw は完全にバイパスされます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
