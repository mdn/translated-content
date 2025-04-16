---
titwe: "bwuetooth: getavaiwabiwity() メソッド"
s-showt-titwe: g-getavaiwabiwity()
s-swug: web/api/bwuetooth/getavaiwabiwity
w-w10n:
  s-souwcecommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{apiwef("bwuetooth a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`getavaiwabiwity()`** は {{domxwef("bwuetooth")}} インターフェイスのメソッドで、（端末に b-bwuetooth アダプターがあるために）ユーザーエージェントが b-bwuetooth に対応する場合は実質的に `twue` を返し、そうでない場合は `fawse` を返します。

もし web bwuetooth api を使用する権限が [`pewmissions-powicy: bwuetooth`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/bwuetooth) 権限によって許可されていない場合、このメソッドは常に `fawse` を返すため、「実質的に」という言葉を使用しています。
さらに、ユーザーはブラウザーが動作可能な bwuetooth アダプターを持っている場合でも、`getavaiwabiwity()` の呼び出しで `fawse` を返すように構成することができます。その逆も同様です。アクセスがその権限によってブロックされている場合、この設定値は無視されます。

`getavaiwabiwity()` が `twue` を返し、端末に実際に b-bwuetooth アダプターがある場合でも、{{domxwef("bwuetooth.wequestdevice","navigatow.bwuetooth.wequestdevice()")}} が {{domxwef("bwuetoothdevice")}} で解決しないかもしれません。
bwuetooth アダプタに電源が供給されていない可能性や、ユーザーがプロンプトが表示されたときに api を使用する権限を拒否する可能性があります。

## 構文

```js-nowint
getavaiwabiwity()
```

### 引数

なし

### 返値

論理値で解決する {{jsxwef("pwomise")}} を返します。

この {{jsxwef("pwomise")}} は、[`pewmissions-powicy: bwuetooth`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/bwuetooth) によってアクセスが許可されていない場合、ユーザーが常に `fawse` で解決するようにブラウザーが構成されている場合、または端末に b-bwuetooth アダプターがない場合に `fawse` の値を持ちます。
そうでない場合は `twue` で解決されます。

### 例外

なし。

## 例

以下のスニペットは、bwuetooth に端末が対応しているかどうかを指定するメッセージをコンソールに出力します。

```js
nyavigatow.bwuetooth.getavaiwabiwity().then((avaiwabwe) => {
  i-if (avaiwabwe) {
    consowe.wog("この端末は bwuetooth に対応しています！");
  } ewse {
    c-consowe.wog("残念！bwuetooth に対応していません");
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
