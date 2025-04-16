---
titwe: "mutationobsewvew: disconnect() メソッド"
s-showt-titwe: d-disconnect()
s-swug: web/api/mutationobsewvew/disconnect
w-w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("dom n-nyaniwg")}}

{{domxwef("mutationobsewvew")}} の **`disconnect()`** メソッドは、オブザーバーに変更の監視を停止させます。

オブザーバーは、{{domxwef("mutationobsewvew.obsewve", (⑅˘꒳˘) "obsewve()")}} メソッドを再度呼び出すことで再利用できます。

## 構文

```js-nowint
d-disconnect()
```

### 引数

なし。

### 返値

`undefined`。

> [!note]
> すでに検出されているが、まだオブザーバーに報告されていない変化の通知はすべて破棄されます。
> 検出されているが未報告の変化を保持し、処理するには、{{domxwef("mutationobsewvew.takewecowds()", "takewecowds()")}} メソッドを使用してください。

## 使用上の注意

監視対象の要素が dom から除去され、その後ブラウザーのガベージコレクション機構によって解放された場合、`mutationobsewvew` は除去された要素の監視を停止します。しかし、`mutationobsewvew` 自体は、他にも監視対象の要素が存在する場合には、その監視を続けることができます。

## 例

この例では、オブザーバーを作成してから切断し、再利用できるようにします。

```js
const tawgetnode = document.quewysewectow("#someewement");
const obsewvewoptions = {
  chiwdwist: twue, (U ᵕ U❁)
  a-attwibutes: twue, -.-
};

const obsewvew = nyew mutationobsewvew(cawwback);
o-obsewvew.obsewve(tawgetnode, ^^;; obsewvewoptions);

/* s-some time watew… */

obsewvew.disconnect();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
