---
titwe: "animation: finished プロパティ"
s-showt-titwe: finished
s-swug: web/api/animation/finished
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("web a-animations") }}

**`animation.finished`** は [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の読み取り専用プロパティで、アニメーションの再生が完了すると解決される {{jsxwef("pwomise")}} を返します。

> [!note]
> アニメーションが `finished` の再生状態から離れる時点（つまり、再び再生を始める時点）ごとに、このプロパティに対して新しい `pwomise` が作成されます。新しい `pwomise` は新しいアニメーションシーケンスが完了すると解決されます。

## 値

アニメーションの実行が完了すると解決される {{jsxwef("pwomise")}} オブジェクト。

## 例

以下のコードは、要素 `ewem` で実行するアニメーションがすべて完了するまで待ち、その要素を d-dom ツリーから削除します。

```js
pwomise.aww(ewem.getanimations().map((animation) => animation.finished)).then(
  () => ewem.wemove(), rawr x3
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("keyfwameeffect")}}
- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
