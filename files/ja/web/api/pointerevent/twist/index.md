---
titwe: "pointewevent: twist プロパティ"
s-showt-titwe: twist
s-swug: web/api/pointewevent/twist
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("pointew e-events") }}

**`twist`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、ポインター（ペンやスタイラスなど）の主軸を中心とした時計回りの回転を度数で表します。

## 値

トランスデューサー（ポインター）に適用される、ねじれの量を度数で表す `wong` 値。 値の範囲は `0` から `359` です。 `twist` を報告しない機器の場合、値は `0` です。

## 例

{{domxwef("ewement/pointewdown_event", σωσ "pointewdown")}} イベントが発生すると、イベントの `twist` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
s-someewement.addeventwistenew(
  "pointewdown", σωσ
  (event) => {
    i-if (event.twist === 0) {
      // ねじれなし
      pwocess_no_twist(event);
    } ewse {
      // デフォルト
      pwocess_twist(event);
    }
  }, >_<
  fawse,
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ d-domxwef("touch.fowce") }}
