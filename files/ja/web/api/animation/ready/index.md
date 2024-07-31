---
title: "Animation: ready プロパティ"
short-title: ready
slug: Web/API/Animation/ready
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`Animation.ready`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の読み取り専用プロパティで、アニメーションが再生可能になったときに解決するプロミス ({{jsxref("Promise")}}) を返します。アニメーションの[再生状態](/ja/docs/Web/API/Animation/playState)が `"pending"` になるたびに、またアニメーションが取り消される可能性があるときにも、新しいプロミスが作成されます。

> [!NOTE]
> 同じ {{jsxref("Promise")}} が保留中の `play` リクエストと保留中の `pause` リクエストの両方に使用されるので、プロミスが解決したときにアニメーションの状態を調べることをお勧めします。

## 値

アニメーションを再生する準備ができたときに解決する {{jsxref("Promise")}} です。プロミスの ready を使用する場合、通常これに似た構造を使用します。

```js
animation.ready.then(() => {
  // アニメーションを実行する準備ができたときに
  // 必要なことを何かする
});
```

## 例

次の例では、**現在 ready になっているプロミス**が解決すると、アニメーションの状態は `running` になります。アニメーションは `pause` と `play` を呼び出す間に再生状態が `pending` から変わらない、**現在 ready になっているプロミス**は変化しないからです。

```js
animation.pause();
animation.ready.then(() => {
  // 'running' と表示
  alert(animation.playState);
});
animation.play();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
