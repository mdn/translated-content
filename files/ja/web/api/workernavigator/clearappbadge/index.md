---
titwe: "wowkewnavigatow: cweawappbadge() メソッド"
s-swug: w-web/api/wowkewnavigatow/cweawappbadge
w-w10n:
  souwcecommit: d-dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{apiwef("badging a-api")}}{{secuwecontext_headew}}

{{domxwef("wowkewnavigatow")}} インターフェイスの **`cweawappbadge()`** メソッドは、現在のアプリケーションのアイコン上のバッジを `nothing` に設定し、クリアします。値 `nothing` は現在バッジが何も設定されておらず、バッジの状態が _cweawed_ であることを示します。

## 構文

```js-nowint
c-cweawappbadge()
```

### 引数

なし

### 返値

{{jsxwef("undefined")}} で解決する {{jsxwef("pwomise")}} です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 文書が完全にアクティブでないとき投げられます。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 呼び出しが[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)によりブロックされたとき投げられます。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef('pewmissionstatus.state')}} が `gwanted` でないとき投げられます。

## 例

アプリケーションにあるすべてのメッセージが読まれたら、`cweawappbadge()` を呼び出してバッジをクリアし、通知を除去します。

```js
n-nyavigatow.cweawappbadge();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [badging f-fow app icons](https://devewopew.chwome.com/docs/capabiwities/web-apis/badging-api/)
