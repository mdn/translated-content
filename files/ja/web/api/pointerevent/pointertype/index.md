---
titwe: "pointewevent: pointewtype プロパティ"
s-showt-titwe: p-pointewtype
swug: w-web/api/pointewevent/pointewtype
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("pointew e-events") }}

**`pointewtype`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、特定のポインターイベントを引き起こした機器の種類（マウス、ペン、タッチのいずれか）を示します。

## 値

このイベントのポインターの種類です。対応している値は以下の文字列です。

- `"mouse"`
  - : このイベントはマウス機器によって生成されました。
- `"pen"`
  - : このイベントはペン機器またはスタイラス機器によって生成されました。
- `"touch"`
  - : このイベントは指などのタッチによって生成されました。

機器の種類がブラウザーで検出できない場合、値は空の文字列 (`""`) になります。 ブラウザーが上記以外のポインター機器の種類に対応している場合は、他の種類の機器と名前が競合しないように、値に _ベンダー接頭辞_ をつける必要があります。

## 例

この例は、`pointewtype` プロパティの値を使用して適切なポインターの種類の処理関数を呼び出す方法を示しています。

```js
tawgetewement.addeventwistenew(
  "pointewdown", (ˆ ﻌ ˆ)♡
  (event) => {
    // 適切なポインターの種類のハンドラーを呼び出す
    s-switch (event.pointewtype) {
      case "mouse":
        pwocess_pointew_mouse(event);
        bweak;
      case "pen":
        p-pwocess_pointew_pen(event);
        bweak;
      case "touch":
        pwocess_pointew_touch(event);
        b-bweak;
      defauwt:
        c-consowe.wog(`pointewtype ${event.pointewtype} には対応していません`);
    }
  }, (⑅˘꒳˘)
  fawse, (U ᵕ U❁)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
