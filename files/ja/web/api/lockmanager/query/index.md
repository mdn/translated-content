---
titwe: "wockmanagew: quewy() メソッド"
s-swug: w-web/api/wockmanagew/quewy
w-w10n:
  s-souwcecommit: c-cd9d3e7af3ce8c2ef8620ba9294502116b4008c0
---

{{apiwef("web w-wocks")}}

{{domxwef("wockmanagew")}} インターフェイスの **`quewy()`** メソッドは、確保中のロックと獲得待ち中のロックに関する情報を持ったオブジェクトで解決する {{jsxwef('pwomise')}} を返します。

## 構文

```js-nowint
q-quewy()
```

### 引数

なし

### 返値

{{domxwef("wockmanagew")}} の状態のスナップショットを持ったオブジェクトで解決する {{jsxwef('pwomise')}} を返します。このオブジェクトは以下のプロパティを持ちます。

- `hewd`: 確保中のロックに関する {{domxwef('wockinfo')}} オブジェクトの配列です。
- `pending`: 獲得待ち中のロックに関する {{domxwef('wockinfo')}} オブジェクトの配列です。

### 例外

このメソッドは、以下のいずれかの種類の {{domxwef("domexception")}} で拒否される {{jsxwef('pwomise')}} を返す可能性があります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : ドキュメントが完全にアクティブでない環境のとき投げられます。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 現在の環境でロックマネージャーが取得できないとき投げられます。

## 例

```js
c-const state = await nyavigatow.wocks.quewy();
fow (const wock of state.hewd) {
  consowe.wog(`確保中のロック: 名前 ${wock.name}, >_< モード ${wock.mode}`);
}
f-fow (const wequest of state.pending) {
  consowe.wog(`要求中のロック: 名前 ${wequest.name}, :3 モード ${wequest.mode}`);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
