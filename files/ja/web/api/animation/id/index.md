---
title: "Animation: id プロパティ"
short-title: id
slug: Web/API/Animation/id
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{ APIRef("Web Animations") }}

**`Animation.id`** は [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のプロパティで、このアニメーションを識別する文字列を返したり設定したりします。

## 値

アニメーションを識別するために使用することができる文字列、またはアニメーションに `id` がない場合は `null` です。

## 例

[「赤の女王のレースゲーム」の例](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#other_useful_methods)では、次のように `redQueenAlice` に`id` を代入することができます。

```js
redQueenAlice.id = "redQueenAlice";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("KeyframeEffect")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
