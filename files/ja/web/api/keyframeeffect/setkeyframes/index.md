---
title: "KeyframeEffect: setKeyframes() メソッド"
short-title: setKeyframes()
slug: Web/API/KeyframeEffect/setKeyframes
page-type: web-api-instance-method
browser-compat: api.KeyframeEffect.setKeyframes
---

{{ APIRef("Web Animations") }}

The **`setKeyframes()`** method of the {{domxref("KeyframeEffect")}} interface replaces the keyframes that make up the affected `KeyframeEffect` with a new set of keyframes.

## 構文

```js-nolint
setKeyframes(keyframes)
```

### 引数

- `keyframes`

  - : A keyframe object or `null`. If set to `null`, the keyframes are replaced with a sequence of empty keyframes.

    More information about a keyframe object's [format](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats#syntax).

### 返値

なし ({{jsxref("undefined")}})。

### 例外

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        One or more of the frames were not of the correct type of object, the
        keyframes were not
        <a href="https://w3c.github.io/web-animations/#loosely-sorted-by-offset"
          >loosely sorted by offset</a
        >, or a keyframe existed with an offset of less than 0 or more than 1.
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** If the keyframes cannot be processed or are malformed, the `KeyframeEffect`'s keyframes are not modified.

## 例

```js
// passing an array of keyframe objects
existingKeyframeEffect.setKeyframes([
  { color: "blue" },
  { color: "green", left: "10px" },
]);

// passing an object with arrays for values
existingKeyframeEffect.setKeyframes({
  color: ["blue", "green"],
  left: ["0", "10px"],
});

// passing a single-member object
existingKeyframeEffect.setKeyframes({
  color: "blue",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [KeyframeEffect Interface](/ja/docs/Web/API/KeyframeEffect)
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
