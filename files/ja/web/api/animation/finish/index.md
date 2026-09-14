---
title: "Animation: finish() メソッド"
short-title: finish()
slug: Web/API/Animation/finish
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Web Animations")}}

**`finish()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の {{domxref("Animation")}} インターフェイスのメソッドで、現在の再生時刻を現在の再生方向に対応するアニメーションの末尾に設定します。

つまり、アニメーションが順方向に再生されている場合は、再生時刻をアニメーションシーケンスの長さに設定し、アニメーションが逆方向に再生されている（{{domxref("Animation.reverse", "reverse()")}} メソッドが呼び出されている）場合は、再生時刻を 0 に設定します。

## 構文

```js-nolint
finish()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidState`
  - : プレーヤーの再生レートが 0 であるか、アニメーションの再生レートが 0 より大きく、アニメーションの終了時刻が無限大である場合。

## 例

次の例では、 `finish()` メソッドを使用して `InvalidState` エラーを捕捉する方法を示します。

```js-nolint
interfaceElement.addEventListener("mousedown", () => {
  try {
    player.finish();
  } catch (e) {
    if (e instanceof InvalidState) {
      console.log("一時停止中または完了したアニメーションで finish() が呼び出されました。");
    } else {
      logMyErrors(e); // 例外オブジェクトをエラーハンドラーに渡す
    }
  }
});
```

次の例では、再生方向に関係なく、単一の要素のアニメーションをすべて完了させています。

```js
elem.getAnimations().forEach((animation) => animation.finish());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxref("Animation.play()")}}: アニメーションを正方向に再生します
- {{domxref("Animation.reverse()")}}: アニメーションを逆方向に再生します
