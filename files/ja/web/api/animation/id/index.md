---
title: "Animation: id プロパティ"
short-title: id
slug: Web/API/Animation/id
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`Animation.id`** は [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のプロパティで、このアニメーションを識別する文字列を返したり設定したりします。

## 値

アニメーションを識別するために使用することができる文字列、またはアニメーションに `id` がない場合は `null` です。

## 例

[以下の White Rabbit の例](https://codepen.io/rachelnabors/pen/eJyWzm?editors=0010)では、 `rabbitDownAnimation` の `id` に割り当てています。

```js
rabbitDownAnimation.id = "rabbitGo";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("KeyframeEffect")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
