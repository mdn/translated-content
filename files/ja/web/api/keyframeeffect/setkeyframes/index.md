---
title: "KeyframeEffect: setKeyframes() メソッド"
short-title: setKeyframes()
slug: Web/API/KeyframeEffect/setKeyframes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Animations") }}

**`setKeyframes()`** は {{domxref("KeyframeEffect")}} インターフェイスのメソッドで、影響する `KeyframeEffect` を構成するキーフレームを、新しいキーフレームのセットに設定して置き換えます。

## 構文

```js-nolint
setKeyframes(keyframes)
```

### 引数

- `keyframes`
  - : キーフレームオブジェクトまたは `null`。`null` に設定した場合、キーフレームは空のキーフレームの並びに置き換えます。

    キーフレームオブジェクトの[形式](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats#構文)の詳細情報はリンク先を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">例外</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        1 つ以上のフレームが正しいオブジェクト型でなかったか、キーフレームが<a href="https://w3c.github.io/web-animations/#loosely-sorted-by-offset"
          >オフセット順に緩やかに並べ替えられて</a
        >いなかったか、オフセットに 0 未満または 1 を超えるキーフレームが存在していた場合。
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> キーフレームが処理できない場合、または不正な形式である場合、`KeyframeEffect`のキーフレームは変更されません。

## 例

```js
// キーフレームオブジェクトの配列を渡す
existingKeyframeEffect.setKeyframes([
  { color: "blue" },
  { color: "green", left: "10px" },
]);

// 値の配列をオブジェクトで渡す
existingKeyframeEffect.setKeyframes({
  color: ["blue", "green"],
  left: ["0", "10px"],
});

// 単一メンバーのオブジェクトを渡す
existingKeyframeEffect.setKeyframes({
  color: "blue",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [KeyframeEffect インターフェイス](/ja/docs/Web/API/KeyframeEffect)
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
