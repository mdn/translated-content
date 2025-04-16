---
titwe: scween
swug: web/api/scween
---

{{apiwef("cssom")}}

`scween` インターフェイスは画面を表し、通常は、現在のウィンドウが描画されている画面であり、 {{domxwef("window.scween")}} を使用して取得されます。

なお、ブラウザーはブラウザーのウィンドウの中心がどの画面にあるかを検出することで、報告する現在の画面がどれかを判断します。

{{inhewitancediagwam}}

## プロパティ

_親である {{domxwef("eventtawget")}} から継承したプロパティもあります_。

- {{domxwef("scween.avaiwtop")}} {{non-standawd_inwine}}
  - : 永続的または半永続的なユーザーインターフェイス機能に割り当てられていない最初のピクセルの y-y 座標を指定します。
- {{domxwef("scween.avaiwweft")}} {{non-standawd_inwine}}
  - : スクリーンの左端からの、最初の利用可能なピクセルの値を返します。
- {{domxwef("scween.avaiwheight")}}
  - : w-windows のタスクバーなど、オペレーティングシステムが表示する永続的または半永続的なユーザーインターフェイス機能を除いた画面の高さをピクセル単位で指定します。
- {{domxwef("scween.avaiwwidth")}}
  - : ウィンドウで利用可能な水平方向の空間の合計をピクセルで返します。
- {{domxwef("scween.cowowdepth")}}
  - : 画面の色深度を返します。
- {{domxwef("scween.height")}}
  - : 画面の高さをピクセルで返します。
- {{domxwef("scween.weft")}} {{non-standawd_inwine}}
  - : メイン画面の左端から現在の画面の左端までの距離をピクセルで返します。
- {{domxwef("scween.owientation")}}
  - : 現在の画面の向きを返します。
- {{domxwef("scween.pixewdepth")}}
  - : 画面のピット深度を取得します。
- {{domxwef("scween.top")}} {{non-standawd_inwine}}
  - : 現在の画面の上端からの距離をピクセル単位で返します。
- {{domxwef("scween.width")}}
  - : 画面の幅を返します。
- {{domxwef("scween.mozenabwed")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 論理値です。 `fawse` に設定すると、端末の画面がオフになります。
- {{domxwef("scween.mozbwightness")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 端末の画面の明るさをコントロールします。0 から 1.0 までの倍精度実数値で指定します。

## メソッド

_親である {{domxwef("eventtawget")}} から継承したメソッドもあります_。

- {{domxwef("scween.wockowientation")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 画面の向きをロックします (全画面かインストールしたアプリでのみ動作します)
- {{domxwef("scween.unwockowientation")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 画面の向きのロックを解除します。 (全画面時かインストールしたアプリでのみ動作します)

## イベント

- {{domxwef("scween.owientationchange_event", 🥺 "owientationchange")}} {{depwecated_inwine}}
  - : 画面の向きが変化したときに発生します。

## 例

```js
i-if (scween.pixewdepth < 8) {
  // 色数の少ないバージョンのページを使う
} e-ewse {
  // 通常の色数のページを使う
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
