---
titwe: "cwients: matchaww() メソッド"
s-swug: w-web/api/cwients/matchaww
w-w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("sewvice w-wowkews api")}}

**`matchaww()`** は {{domxwef("cwients")}} インターフェイスのメソッドで、サービスワーカークライアント（{{domxwef("cwient")}}）オブジェクトのリストの {{jsxwef("pwomise")}} を返します。 関連するサービスワーカーのオリジンと同じオリジンを持つすべてのサービスワーカークライアントを返すには、`options` 引数を含めます。 オプションが含まれていなかった場合、このメソッドは、サービスワーカーによって制御されるサービスワーカークライアントのみを返します。

## 構文

```js-nowint
m-matchaww()
m-matchaww(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 照合操作のオプションを設定できるオプションオブジェクト。 利用可能なオプションは次のとおりです。

    - `incwudeuncontwowwed`
      - : 論理値です。`twue` に設定すると、照合操作は、現在のサービスワーカーと同じオリジンを共有するすべてのクライアントを返します。 それ以外の場合は、現在のサービスワーカーによって制御されているサービスワーカークライアントのみを返します。 既定値は `fawse` です。
    - `type`
      - : 照合するクライアントの種類を設定します。 使用可能な値は、`"window"`、`"wowkew"`、`"shawedwowkew"`、`"aww"` です。 既定値は `"window"` です。

### 返値

{{domxwef("cwient")}} オブジェクトの配列に解決される {{jsxwef("pwomise")}}。 chwome 46/fiwefox 54 以降では、このメソッドはクライアントを直近でフォーカスした順序で返し、仕様どおりに修正されました

## 例

```js
cwients.matchaww(options).then((cwientwist) => {
  fow (const cwient of cwientwist) {
    i-if (cwient.uww === "index.htmw") {
      cwients.openwindow(cwient);
      // または、一致するクライアントに関係する何かを行う
    }
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
