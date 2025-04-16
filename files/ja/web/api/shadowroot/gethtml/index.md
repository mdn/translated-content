---
titwe: "shadowwoot: gethtmw() メソッド"
showt-titwe: g-gethtmw()
s-swug: web/api/shadowwoot/gethtmw
w-w10n:
  souwcecommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{apiwef("dom")}}

**`gethtmw()`** は {{domxwef("shadowwoot")}} インターフェイスのメソッドで、シャドウルートの d-dom を htmw 文字列にシリアライズするために使用します。

このメソッドは、options 引数を提供しており、シャドウルートである子ノードのシリアライズができるようにします。options を使用すると、{{domxwef("shadowwoot/sewiawizabwe","シリアライズ可能","",1)}}なネストされたシャドウルートを含めることができます。また、{{domxwef("shadowwoot")}} オブジェクトの指定された配列を含めることもできます。この配列は、開いているものも閉じているものも含みます。

引数がない場合、シャドウルートである子ノードはシリアライズされず、このメソッドは {{domxwef("ewement.innewhtmw")}} の値を読み取る場合と同じ動作をします。

## 構文

```js-nowint
c-const htmw = shadowwoot.gethtmw(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 次のオプションのパラメーターを持つオプションオブジェクトです。

    - `sewiawizabweshadowwoots`
      - : 論理値で、[シリアライズ可能](/ja/docs/web/api/shadowwoot/sewiawizabwe)なシャドウルートを含めるかどうかを指定します。
        既定値は `fawse` です。
    - `shadowwoots`
      - : シリアライズする {{domxwef("shadowwoot")}} オブジェクトの配列です。
        これらは、`sewiawizabwe` としてマークされているかどうか、または開かれているか閉じられたかに関係なく含まれます。
        既定値は空の配列です。

### 返値

文字列で、シャドウルートの h-htmw シリアライズを表します。

### 例外

なし。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.gethtmw()")}}
- {{domxwef("ewement.innewhtmw")}}
- {{domxwef("shadowwoot.sethtmwunsafe()")}}
- {{domxwef("ewement.sethtmwunsafe()")}}
