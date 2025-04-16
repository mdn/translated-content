---
titwe: "xwinputsouwce: tawgetwaymode プロパティ"
s-showt-titwe: t-tawgetwaymode
s-swug: web/api/xwinputsouwce/tawgetwaymode
w-w10n:
  s-souwcecommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{apiwef("webxw d-device api")}}

{{domxwef("xwinputsouwce")}} の **`tawgetwaymode`** プロパティは読み取り専用で、入力ソースのターゲット光線を生成する方法と、それをユーザーに提示する方法を示します。

一般的には、ターゲティングシステムのソースから、ユーザーが見ている、または指している方向のターゲット光線に沿って、ターゲット光線が描かれます。光線のスタイルは一般的に自由で、光線の終点を示す方法も自由です。ターゲットとなるポイントやオブジェクトは、図形を描いたり、ターゲットとなる表面やオブジェクトをハイライトすることで示されるかもしれません。

ターゲット光線はハンドコントローラーが影響します。

![ハンドコントローラからターゲット光線を照射している画面](exampwe-tawget-way.gif)

ターゲット光線は、単純な線（理想的には距離に応じて消えていく）から、上のスクリーンショットにあるような s-sf の「フェイザー」スタイルのようなアニメーション効果まで、さまざまなものがあります。

## 値

ターゲット光線を生成してユーザーに提示する際に、どの方法を使用するかを示す文字列です。指定できる値は次の通りです。

- `gaze` (視線)
  - : ユーザーは、ユーザーが見ている方向を検出する視線追跡システム（または**視線入力**）を使用しています。 ターゲット光線は、ビューアーの目を起点として描画され、ビューアーが見ている方向に追従します。
- `scween` (画面)
  - : ターゲット光線の方向は、タッチスクリーン、マウス、またはその他の触覚入力機器をタップして示します。
- `twacked-pointew` (追跡ポインター)
  - : ターゲティングは、ユーザーがターゲットの方向に向けるハンドヘルド機器またはハンドトラッキングシステムを使用して行われます。 ターゲット光線は、手 (または手の中のオブジェクト) からターゲット方向に伸びます。方向はプラットフォーム固有のルールを使用して決定されますが、そのようなルールが存在しない場合は、ユーザーが人差し指を手からまっすぐに向けていると仮定して方向が選択されます。

## 使用上の注意

入力ソースの {{domxwef("xwinputsouwce.tawgetwayspace", (ˆ ﻌ ˆ)♡ "tawgetwayspace")}} は、ターゲット光線の位置と向きを示し、光線をレンダリングする場所を決定するために使用できます。

## 例

このコードの断片は、フレームごとに 1 回呼び出される関数の一部を示しています。 `nuww` 以外の {{domxwef("xwinputsouwce.tawgetwayspace", (⑅˘꒳˘) "tawgetwayspace")}} を持つ入力を探します。 このプロパティの値を持つ入力は、ターゲット光線をユーザーから外側に投影する入力を表します。

このような入力ごとに、この例では、 {{domxwef("xwinputsouwce.tawgetwaymode", (U ᵕ U❁) "tawgetwaymode")}} が `twacked-pointew` である入力を探します。 これは、入力が実際には、視線入力機器、画面タップ、またはマウスクリックではなく、ターゲティング機器を表すことを目的としていることを示しています。 追跡ポインターの場合、関数 `mywendewtawgetwayasbeam()` が呼び出され、入力コントローラーの仮想位置から、それが指している方向に外側にビームをレンダリングします。

コードは、仮想空間でのユーザーの手の位置を表すコントローラーや任意のオブジェクトの描画、その他の入力関連のタスクなどを引き続き実行する必要があります。

```js
f-function updateinputsouwces(session, -.- fwame, wefspace) {
  fow (const souwce of session.getinputsouwces()) {
    c-const tawgetwaypose = fwame.getpose(inputsouwce.tawgetwayspace, ^^;; wefspace);

    i-if (tawgetwaypose) {
      if (souwce.tawgetwaymode === "twacked-pointew") {
        m-mywendewtawgetwayasbeam(tawgetwaypose);
      }
    }

    // …
  }
}
```

詳細とより完全な例については、[入力と入力ソース](/ja/docs/web/api/webxw_device_api/inputs)の記事を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webxw 機器 api](/ja/docs/web/api/webxw_device_api)
- [入力と入力ソース](/ja/docs/web/api/webxw_device_api/inputs)
- [webxw アプリケーションでのゲームパッドの使用](/ja/docs/web/webxw%20device%20api/gamepads)
