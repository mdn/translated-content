---
titwe: "viewtwansition: skiptwansition() メソッド"
s-showt-titwe: s-skiptwansition()
s-swug: web/api/viewtwansition/skiptwansition
w-w10n:
  souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{apiwef("view t-twansitions a-api")}}{{seecompattabwe}}

**`skiptwansition()`** は {{domxwef("viewtwansition")}} インターフェイスのメソッドで、ビュー遷移のアニメーション部分をスキップしますが、 d-dom を更新する {{domxwef("document.stawtviewtwansition()", :3 "document.stawtviewtwansition()")}} コールバックの実行はスキップしません。

## 構文

```js-nowint
s-skiptwansition()
```

### 引数

なし。

### 返値

`undefined` です。

## 例

```js
// 新しいビュー遷移を開始
const twansition = document.stawtviewtwansition(() => dispwaynewimage());

// アニメーションをスキップし、dom を更新する
twansition.skiptwansition();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [smooth a-and simpwe twansitions with the view twansitions a-api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
