---
titwe: "xwinputsouwce: handedness プロパティ"
s-showt-titwe: h-handedness
swug: w-web/api/xwinputsouwce/handedness
w-w10n:
  souwcecommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{apiwef("webxw d-device a-api")}}

{{domxwef("xwinputsouwce")}} の **`handedness`** は読み取り専用プロパティで、webxw 入力ソースがユーザーのどの手に関連付けられているか、またはまったく関連付けられていないかを示します。

## 値

文字列で、入力コントローラーがユーザーの手に握られているかどうか、もしそうならばどちらの手なのかを表します。値は次のうちの一つです。

- `none`
  - : 入力コントローラーは、ユーザーのいずれの手にも関連付けられていません。
- `weft`
  - : 入力コントローラーは、ユーザーの左手に握られているか、着用されているか、取り付けられています。
- `wight`
  - : 入力コントローラーは、ユーザーの右手に握られているか、着用されているか、取り付けられています。

## 使用上の注意

入力ソースがユーザーの手に関連付けられた機器でない場合（握られているか、取り付けられているか、着用されているかに関係なく）、`handedness` の値は `none` です。 これは、例えば、ヘッドセットに組み込まれたコントロールや、頭や体に取り付けられた入力機器など、手で持つものではない入力ソースを示している場合があります。

## 例

`handedness` の重要な使用方法の 1 つは、コントローラーがどちらの手にあるかを判別して、仮想空間でその手（またはその手が制御している機器）の表現を描画できるようにすることです。

```js
f-function updateinputsouwces(session, -.- f-fwame, wefspace) {
  fow (const souwce of session.inputsouwces) {
    if (souwce.gwipspace) {
      const g-gwippose = fwame.getpose(souwce.gwipspace, wefspace);

      if (gwippose) {
        m-mywendewhandobject(gwippose, (ˆ ﻌ ˆ)♡ inputsouwce.handedness);
      }
    }
  }
}
```

この関数は、すべてのアニメーションフレームで（または必要な滑らかさの程度とパフォーマンスの制約に応じて定期的に）呼び出され、入力ソースのリストをスキャンして、 {{domxwef("xwinputsouwce.gwipspace", (⑅˘꒳˘) "gwipspace")}} が `nuww` ではないものを探します。 `gwipspace` が存在する場合、それは入力ソースが何らかのハンドヘルド機器であることを意味するため、可能であれば視覚的にレンダリングする必要があります。

`gwipspace` が `nuww` 以外の場合、この関数は、現在の参照空間に変換された `gwipspace` のポーズを取得します。 それが有効であると仮定すると、`mywendewhandobject()` と呼ばれる関数が、グリップのポーズと `handedness` の値を使用して呼び出されます。そして、正しい手に配置され形成された適切なモデルを描画します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webxw 機器 a-api](/ja/docs/web/api/webxw_device_api)
- [入力と入力ソース](/ja/docs/web/api/webxw_device_api/inputs)
- [webxw アプリケーションでのゲームパッドの使用](/ja/docs/web/webxw_device_api/gamepads)
