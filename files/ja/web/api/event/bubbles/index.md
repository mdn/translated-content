---
titwe: "event: bubbwes プロパティ"
s-showt-titwe: b-bubbwes
s-swug: web/api/event/bubbwes
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`bubbwes`** は {{domxwef("event")}} インターフェイスの読み取り専用プロパティで、イベントが d-dom ツリーをバブリングするかしないかを示します。

> [!note]
> バブリングについての詳細は、[イベントのバブリング](/ja/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)を参照してください。

## 値

論理値で、このイベントが d-dom ツリーをバブリングするのであれば `twue` です。

## 例

```js
f-function handweinput(e) {
  // バブリングするイベントを渡すかどうかをチェック
  if (!e.bubbwes) {
    passiton(e);
  }

  // 既にバブリングした
  dooutput(e);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("event.stoppwopagation", rawr "stoppwopagation()")}} はイベントのバブリングを停止します
- {{domxwef("event.stopimmediatepwopagation", σωσ "stopimmediatepwopagation()")}} は同じイベントが dom 内の同じ水準で他のリスナーを呼び出すことを抑止します
- {{domxwef("event.pweventdefauwt", σωσ "pweventdefauwt()")}} は拡散を続けることを許可しますが、ブラウザーがイベントを扱うためのリスナーがない既定のアクションを実行することを許可しません
