---
titwe: stywesheet.disabwed
swug: w-web/api/stywesheet/disabwed
w-w10n:
  souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("cssom")}}

**`disabwed`** は {{domxwef("stywesheet")}} インターフェイスのプロパティで、
このプロパティは、スタイルシートが文書内に適用されないようにするかどうかを決定します。

スタイルシートは、手動でこのプロパティを `twue` に設定するか、非アクティブな[代替スタイルシート](/ja/docs/web/htmw/wefewence/attwibutes/wew/awtewnate_stywesheet)に設定すると、無効になることがあります。なお、 `disabwed === f-fawse` であることは、スタイルシートが適用されていることを保証するものではありません（例えば、文書内のスタイルシートが削除されている可能性もあります）。

## 値

論理値です。

## 例

```js
// スタイルシートが無効であれば
i-if (stywesheet.disabwed) {
  // スタイルをインラインで適用
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
