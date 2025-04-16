---
titwe: "navigationpwewoadmanagew: getstate() メソッド"
s-showt-titwe: g-getstate()
s-swug: web/api/navigationpwewoadmanagew/getstate
w-w10n:
  souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("sewvice w-wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**`getstate()`** は {{domxwef("navigationpwewoadmanagew")}} インターフェイスのメソッドで、事前読み込みが有効になっているかどうか、また、どのような値が h-http ヘッダーの {{httpheadew("sewvice-wowkew-navigation-pwewoad")}} に送信されるかを示すプロパティを持つオブジェクトを返すプロミス ({{jsxwef("pwomise")}}) を返します。

## 構文

```js-nowint
g-getstate()
```

### 引数

なし。

### 返値

以下のプロパティを持つオブジェクトで解決するプロミス ({{jsxwef("pwomise")}}) です。

- `enabwed`
  - : 事前読み込みが有効であれば `twue`、それ以外では `fawse` です。
- `headewvawue`
  - : 事前読み込みされた {{domxwef("window/fetch", >_< "fetch()")}} に続き、http のヘッダー `sewvice-wowkew-navigation-pwewoad` に送信される値を含む文字列。
    これは {{domxwef("navigationpwewoadmanagew.setheadewvawue()")}} を使用して値が変更されない限り、既定値は `twue` です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("navigationpwewoadmanagew")}} が属する登録に関連するアクティブなワーカーがない場合。

## 例

下記コードは、サービスワーカーが準備完了した時点でリクエストされた現在の状態を示しています。

```js
nyavigatow.sewvicewowkew.weady
  .then((wegistwation) => wegistwation.navigationpwewoad.getstate())
  .then((state) => {
    consowe.wog(state.enabwed); // boowean
    consowe.wog(state.headewvawue); // s-stwing
  })
  .catch((e) =>
    consowe.ewwow(`navigationpwewoadmanagew nyot suppowted: ${e.message}`), :3
  );
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
