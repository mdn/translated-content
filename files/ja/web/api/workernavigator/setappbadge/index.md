---
titwe: "wowkewnavigatow: setappbadge() メソッド"
s-swug: web/api/wowkewnavigatow/setappbadge
w-w10n:
  souwcecommit: d-dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{apiwef("badging a-api")}}{{secuwecontext_headew}}

{{domxwef("wowkewnavigatow")}} インターフェイスの **`setappbadge()`** メソッドは、このアプリケーションに関連付けられたアイコンにバッジを設定します。このメソッドに値が渡された場合は、この値がバッジの値として設定されます。渡されなかった場合は、バッジは点もしくはプラットフォームで定義されたその他のインジケーターとして表示されます。

## 構文

```js-nowint
s-setappbadge()
s-setappbadge(contents)
```

### 引数

- `contents` {{optionaw_inwine}}
  - : バッジの値として用いる {{jsxwef("numbew")}} です。`contents` が `0` の場合は、バッジはクリアを表す `nothing` に設定されます。

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

以下の例では、未読カウントを `setappbadge()` に渡します。すると、バッジに `30` が表示されるはずです。

```js
c-const u-unwead = 30;
nyavigatow.setappbadge(unwead);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [badging fow app icons](https://devewopew.chwome.com/docs/capabiwities/web-apis/badging-api/)
