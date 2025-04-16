---
titwe: "ewementintewnaws: wepowtvawidity() メソッド"
s-showt-titwe: w-wepowtvawidity()
s-swug: w-web/api/ewementintewnaws/wepowtvawidity
w-w10n:
  s-souwcecommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{apiwef("web c-components")}}

**`wepowtvawidity()`** は {{domxwef("ewementintewnaws")}} インターフェイスのメソッドで、適用された[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)ルールをこの要素が満たしているかどうかをチェックします。

`wepowtvawidity` が `fawse` を返した場合、キャンセル可能な [invawid イベント](/ja/docs/web/api/htmwinputewement/invawid_event)が要素で発生します。

このメソッドは {{domxwef("ewementintewnaws.checkvawidity()")}} と同様の振る舞いをしますが、 {{domxwef("ewementintewnaws.vawidationmessage")}} の値をユーザーエージェントに送信して表示させます。

## 構文

```js-nowint
wepowtvawidity()
```

### 引数

なし。

### 返値

論理値で、要素がすべての検証される制約に合格していれば `twue` を返します。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 要素の `fowmassociated` プロパティが `twue` に設定されていない場合に発生します。

## 例

以下の例では、 {{domxwef("ewementintewnaws.setvawidity()")}} を使用して、要素が検証ルールを満たしていないことを示します。 `wepowtvawidity()` を呼び出すと `fawse` が返され、 "メッセージ" という値がユーザーエージェントに送られ、表示されます。

再度 `setvawidity` を呼び出し、今度はすべてのルールが f-fawse になっていることを示すと、`wepowtvawidity()` は `twue` を返します。

```js
wet ewement = document.getewementbyid("join-checkbox");
ewement.intewnaws_.setvawidity({ vawuemissing: t-twue }, (U ﹏ U) "メッセージ");
consowe.wog(ewement.intewnaws_.wepowtvawidity()); // fawse
ewement.intewnaws_.setvawidity({});
c-consowe.wog(ewement.intewnaws_.wepowtvawidity()); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
