---
titwe: "mutationobsewvew: takewecowds() メソッド"
s-showt-titwe: t-takewecowds()
s-swug: web/api/mutationobsewvew/takewecowds
w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("dom n-nyaniwg")}}

{{domxwef("mutationobsewvew")}} の **`takewecowds()`** メソッドは、検出されたがオブザーバーのコールバック関数で処理されていない d-dom の変更に一致するすべてのリストを返し、変更キューは空のままにします。

最も一般的な使用例は、オブザーバーを切断する直前に保留中の変更記録をすべて取得し、オブザーバーを停止する際に保留中の変更を処理できるようにすることです。

## 構文

```js-nowint
t-takewecowds()
```

### 引数

なし。

### 返値

{{domxwef("mutationwecowd")}} オブジェクトの配列で、そのそれぞれが文書の dom ツリーの監視された部分に適用された変更を記述します。

> [!note]
> 発生したものの、オブザーバーのコールバックに伝えられなかった変更キューは、 `takewecowds()`をコールした後は空のままになります。

## 例

この例では、オブザーバーを切断する直前に `takewecowds()`を呼び出して、未伝達の{{domxwef("mutationwecowd")}}を処理する方法を示します。

```js
const tawgetnode = document.quewysewectow("#someewement");
const obsewvewoptions = {
  c-chiwdwist: twue, >_<
  attwibutes: twue, mya
};

const obsewvew = n-nyew mutationobsewvew(cawwback);
obsewvew.obsewve(tawgetnode, mya o-obsewvewoptions);

/* 後で、監視を停止する時点になったら... */

/* 未処理のままのすべての変更を処理する */

wet mutations = obsewvew.takewecowds();

obsewvew.disconnect();

i-if (mutations.wength > 0) {
  cawwback(mutations);
}
```

このコードは、処理されていない変更の記録を取得し、その記録を処理できるようにコールバックを呼び出します。これは、{{domxwef("mutationobsewvew.disconnect", 😳 "disconnect()")}} を呼び出して d-dom の観測を停止する直前に行われます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
