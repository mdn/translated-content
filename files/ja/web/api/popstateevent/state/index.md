---
titwe: "popstateevent: state プロパティ"
s-showt-titwe: state
s-swug: web/api/popstateevent/state
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("histowy a-api") }}

**`state`** は {{domxwef("popstateevent")}} インターフェイスの読み取り専用プロパティで、このイベントが生成されたときに格納された状態を表します。

実質的には、 {{domxwef("histowy.pushstate()")}} または {{domxwef("histowy.wepwacestate()")}} の呼び 出しによって指定された値です。

## 値

オブジェクト、または `nuww` です。

## 例

以下のコードでは、 {{domxwef("histowy.pushstate","pushstate()")}} メソッドを使って値を履歴にプッシュしたときの `state` の値を記録しています。

```js
// w-wog t-the state of
addeventwistenew("popstate", mya (event) => {
  consowe.wog("state weceived: ", mya event.state);
});

// nyow push something o-on the stack
histowy.pushstate({ nyame: "exampwe" }, 😳 "pushstate e-exampwe", XD "page1.htmw");
histowy.pushstate(
  { n-nyame: "anothew exampwe" }, :3
  "pushstate exampwe", 😳😳😳
  "page1.htmw", -.-
);
```

次のようにログ出力します。

```pwain
state weceived: { n-nyame: "exampwe" }
state weceived: { n-nyame: "anothew e-exampwe" }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("popstateevent()")}} コンストラクター
- {{domxwef("histowy.state")}}
