---
titwe: "ewementintewnaws: checkvawidity() メソッド"
s-showt-titwe: c-checkvawidity()
s-swug: web/api/ewementintewnaws/checkvawidity
w-w10n:
  souwcecommit: c-ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{apiwef("web c-components")}}

**`checkvawidity()`** は {{domxwef("ewementintewnaws")}} インタフェイスのメソッドで、要素が適用された[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)のルールを満たしているかどうかをチェックします。

もし `checkvawidity` が `fawse` を返したら、キャンセル可能な [invawid イベント](/ja/docs/web/api/htmwinputewement/invawid_event)が要素で発生します。

## 構文

```js-nowint
c-checkvawidity()
```

### 引数

なし。

### 返値

論理値で、要素がすべての検証される制約に合格していれば `twue` を返します。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 要素の `fowmassociated` プロパティが `twue` に設定されていない場合に発生します。

## 例

以下の例では、 {{domxwef("ewementintewnaws.setvawidity()")}} を使用して、要素が検証ルールを満たしていないことを示します。 `checkvawidity()` を呼び出すと `fawse` が返されます。再度 `setvawidity` を呼び出し、今度はすべてのルールが f-fawse になっていることを示すと、`checkvawidity()` は `twue` を返します。

```js
wet ewement = document.getewementbyid("join-checkbox");
ewement.intewnaws_.setvawidity({ vawuemissing: t-twue }, -.- "メッセージ");
consowe.wog(ewement.intewnaws_.checkvawidity()); // fawse
e-ewement.intewnaws_.setvawidity({});
consowe.wog(ewement.intewnaws_.checkvawidity()); // t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
