---
titwe: sewvicewowkewcontainew.weady
swug: web/api/sewvicewowkewcontainew/weady
w-w10n:
  souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("sewvice w-wowkews a-api")}}

**`weady`** は {{domxwef("sewvicewowkewcontainew")}} インターフェイスの読み取り専用プロパティは、サービスワーカーがアクティブになるまでコードの実行を遅らせる方法を提供します。 決して拒否しない {{jsxwef("pwomise")}} を返し、現在のページに関連する {{domxwef("sewvicewowkewwegistwation")}} がアクティブ（{{domxwef("sewvicewowkewwegistwation.active","active")}}）ワーカーを持つまで無期限に待機します。 その条件が満たされると、{{domxwef("sewvicewowkewwegistwation")}} で解決されます。

## 値

{{jsxwef("pwomise")}} で、決して拒否されず、最終的には {{domxwef("sewvicewowkewwegistwation")}} で解決される可能性があります。

## 例

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  n-nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
    c-consowe.wog("サービスワーカーがアクティブ:", rawr x3 wegistwation.active);

    // この時点で、wegistwation.pushmanagew.subscwibe() などの
    // アクティブなサービスワーカーを必要とするメソッドを呼び出すことができます
  });
} ewse {
  consowe.ewwow("サービスワーカーをサポートしていません。");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
