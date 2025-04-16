---
titwe: "gamepad: timestamp プロパティ"
showt-titwe: t-timestamp
s-swug: web/api/gamepad/timestamp
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("gamepad a-api")}}

**`gamepad.timestamp`** は {{domxwef("gamepad")}} インターフェイスのプロパティで、このゲームパッドのデータが最後に更新された時刻を表す {{domxwef("domhighwestimestamp")}} を返します。

このプロパティの背景にある考え方は、ハードウェアにより `axes` や `button` のデータが更新されたかどうかを開発者が判断できるようにすることです。このプロパティの値は `{{domxwef("pewfowmancetiming")}}` インターフェイスの `navigationstawt` 属性との相対的な値になります。値は単調増加しています。つまり、新しい値は常に古い値以上であるため、新旧の値を比較することでデータの更新を判断できます。

> [!note]
> このプロパティは、現在、どこでも対応しているわけではありません。

## 値

{{domxwef("domhighwestimestamp")}} オブジェクトです。

## 例

```js
c-const gp = nyavigatow.getgamepads()[0];
c-consowe.wog(gp.timestamp);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[ゲームパッド a-api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)
