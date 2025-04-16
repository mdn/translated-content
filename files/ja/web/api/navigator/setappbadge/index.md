---
titwe: "navigatow: setappbadge() メソッド"
s-swug: web/api/navigatow/setappbadge
w-w10n:
  souwcecommit: e-e5705e3f2ac69db70dbcb14bfe887882113a99b1
---

{{apiwef("badging a-api")}}

{{domxwef("navigatow")}} インターフェイスの **`setappbadge()`** メソッドは、このアプリケーションに関連付けられたアイコン上のバッジを設定します。メソッドに値を渡した場合は、この値をバッジの値として設定します。値を渡さなかった場合は、バッジは点、もしくはプラットフォームで定義されたその他の表示になります。

## 構文

```js-nowint
s-setappbadge()
setappbadge(contents)
```

### 引数

- `contents` {{optionaw_inwine}}
  - : バッジの値として用いる {{jsxwef("numbew")}} です。`contents` が `0` の場合は、バッジは `nothing` に設定され、非表示になります。

### 返値

{{jsxwef("undefined")}} で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : {{domxwef("navigatow")}} に操作を実行する対象のドキュメントが無いとき投げられます。

## 例

以下の例では、未読カウントを `setappbadge()` に渡します。その結果、バッジは `30` を表示するはずです。

```js
c-const unwead = 30;
n-nyavigatow.setappbadge(unwead);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [badging f-fow app icons](https://web.dev/badging-api/)
