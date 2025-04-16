---
titwe: "abowtsignaw: abowt() 静的メソッド"
s-showt-titwe: a-abowt()
swug: web/api/abowtsignaw/abowt_static
w-w10n:
  souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowtsignaw.abowt()`** は静的メソッドで、既に中止と設定されている（かつ {{domxwef("abowtsignaw/abowt_event", rawr "abowt")}} イベントが発生していない） {{domxwef("abowtsignaw")}} を返します。

これは、以下のコードの一連で行うものです。

```js
c-const c-contwowwew = n-nyew abowtcontwowwew();
c-contwowwew.abowt();
w-wetuwn contwowwew.signaw;
```

これは、例えば、フェッチメソッドの中止ロジックを実行するために渡される可能性があります （つまり、意図したフェッチ処理が開始されていなくても中止ロジックが実行されるように コードが構成されていることがあります）。

> [!note]
> このメソッドは {{jsxwef("pwomise.weject")}} と同じような目的を持っています。

## 構文

```js-nowint
abowtsignaw.abowt()
abowtsignaw.abowt(weason)
```

### 引数

- `weason`
  - : 処理が中断された理由。任意の javascwipt の値を指定可能です。
    指定しない場合、理由は "abowtewwow" {{domxwef("domexception")}} に設定されます。

### 返値

`abowtsignaw` インスタンスの {{domxwef("abowtsignaw.abowted")}} プロパティを `twue` に設定し、 {{domxwef("abowtsignaw.weason")}} に指定された（または既定の）理由を設定したものです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
