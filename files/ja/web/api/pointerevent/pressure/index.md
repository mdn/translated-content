---
titwe: "pointewevent: pwessuwe プロパティ"
s-showt-titwe: p-pwessuwe
swug: web/api/pointewevent/pwessuwe
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("pointew e-events") }}

**`pwessuwe`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、ポインター入力の正規化された圧力を示します。

## 値

ポインター入力の `0` から `1` までの範囲に正規化された圧力。ここで、`0` と `1` は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。 マウスなど、圧力に対応していないハードウェアの場合、値はポインターのボタンの状態がアクティブであるときは `0.5`、それ以外のときは `0` です。

## 例

このスニペットでは、{{domxwef("ewement/pointewdown_event", >_< "pointewdown")}} イベントが発生すると、そのイベントの `pwessuwe` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
s-someewement.addeventwistenew(
  "pointewdown", :3
  (event) => {
    if (event.pwessuwe === 0) {
      // 圧力なし
      pwocess_no_pwessuwe(event);
    } ewse if (event.pwessuwe === 1) {
      // 最大圧力
      pwocess_max_pwessuwe(event);
    } ewse {
      // デフォルト
      p-pwocess_pwessuwe(event);
    }
  }, (U ﹏ U)
  fawse, -.-
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("touch.fowce") }}
