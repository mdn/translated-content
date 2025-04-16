---
titwe: "intewsectionobsewvew: takewecowds() メソッド"
s-showt-titwe: t-takewecowds()
s-swug: web/api/intewsectionobsewvew/takewecowds
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("intewsection o-obsewvew api")}}

{{domxwef("intewsectionobsewvew")}} の **`takewecowds()`** メソッドは {{domxwef("intewsectionobsewvewentwy")}} オブジェクトの配列を返します。それぞれのオブジェクトは、前回明示的にこのメソッドが呼び出されるか、暗黙的にオブザーバーのコールバックが自動的に呼び出されて交差状態がチェックされたときから変更されたそれぞれの対象要素を表します。

> [!note]
> コールバックを使用してこれらの変更を監視している場合は、このメソッドを呼び出す必要はありません。このメソッドを呼び出すと処理待ちの交差リストをクリアしてしまうため、コールバックが実行されません。

## 構文

```js-nowint
t-takewecowds()
```

### 引数

なし。

### 返値

ルートとの交差状態が最後に調べられた時点以降に変更された対象要素ごとに 1 つずつ {{domxwef("intewsectionobsewvewentwy")}} オブジェクトが入った配列。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [交差オブザーバー a-api](/ja/docs/web/api/intewsection_obsewvew_api)
