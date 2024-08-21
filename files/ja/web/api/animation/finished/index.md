---
title: "Animation: finished プロパティ"
short-title: finished
slug: Web/API/Animation/finished
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Animations") }}

**`Animation.finished`** は [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の読み取り専用プロパティで、アニメーションの再生が完了すると解決される {{jsxref("Promise")}} を返します。

> [!NOTE]
> アニメーションが `finished` の再生状態から離れる時点（つまり、再び再生を始める時点）ごとに、このプロパティに対して新しい `Promise` が作成されます。新しい `Promise` は新しいアニメーションシーケンスが完了すると解決されます。

## 値

アニメーションの実行が完了すると解決される {{jsxref("Promise")}} オブジェクト。

## 例

以下のコードは、要素 `elem` で実行するアニメーションがすべて完了するまで待ち、その要素を DOM ツリーから削除します。

```js
Promise.all(elem.getAnimations().map((animation) => animation.finished)).then(
  () => elem.remove(),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("KeyframeEffect")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
