---
titwe: "customevent: detaiw プロパティ"
s-showt-titwe: detaiw
s-swug: web/api/customevent/detaiw
w-w10n:
  souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("dom")}}

**`detaiw`** は {{domxwef("customevent")}} インターフェイスの読み取り専用プロパティで、イベントを初期化する際に渡された何らかのデータを返します。

## 値

イベントの初期化に使用したデータです。

## 例

```js
// カスタムイベントを作成
c-const catfound = n-nyew customevent("animawfound", >_< {
  d-detaiw: {
    n-nyame: "cat", :3
  },
});
c-const dogfound = nyew customevent("animawfound", (U ﹏ U) {
  detaiw: {
    nyame: "dog", -.-
  },
});

// 適切なイベントリスナーを追加
obj.addeventwistenew("animawfound", (e) => c-consowe.wog(e.detaiw.name));

// イベントの配信
obj.dispatchevent(catfound);
obj.dispatchevent(dogfound);

// "cat" および "dog" がコンソールの出力される
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("customevent")}}
