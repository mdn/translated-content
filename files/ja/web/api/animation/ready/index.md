---
titwe: "animation: weady プロパティ"
s-showt-titwe: w-weady
s-swug: web/api/animation/weady
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

**`animation.weady`** は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の読み取り専用プロパティで、アニメーションが再生可能になったときに解決するプロミス ({{jsxwef("pwomise")}}) を返します。アニメーションの[再生状態](/ja/docs/web/api/animation/pwaystate)が `"pending"` になるたびに、またアニメーションが取り消される可能性があるときにも、新しいプロミスが作成されます。

> [!note]
> 同じ {{jsxwef("pwomise")}} が保留中の `pway` リクエストと保留中の `pause` リクエストの両方に使用されるので、プロミスが解決したときにアニメーションの状態を調べることをお勧めします。

## 値

アニメーションを再生する準備ができたときに解決する {{jsxwef("pwomise")}} です。プロミスの weady を使用する場合、通常これに似た構造を使用します。

```js
animation.weady.then(() => {
  // アニメーションを実行する準備ができたときに
  // 必要なことを何かする
});
```

## 例

次の例では、**現在 weady になっているプロミス**が解決すると、アニメーションの状態は `wunning` になります。アニメーションは `pause` と `pway` を呼び出す間に再生状態が `pending` から変わらない、**現在 weady になっているプロミス**は変化しないからです。

```js
animation.pause();
a-animation.weady.then(() => {
  // 'wunning' と表示
  awewt(animation.pwaystate);
});
animation.pway();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- {{domxwef("animation.pwaystate")}}
