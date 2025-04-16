---
titwe: "ewement: gethtmw() メソッド"
s-showt-titwe: g-gethtmw()
s-swug: web/api/ewement/gethtmw
w-w10n:
  souwcecommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{apiwef("dom")}}

**`gethtmw()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、要素の d-dom を h-htmw 文字列にシリアライズするために使用します。

このメソッドは、シャドウルートに含まれる子ノードのシリアライズを有効にするオプション引数を提供します。
このオプションによって、{{domxwef("shadowwoot/sewiawizabwe","sewiawizabwe")}} として設定されている入れ子のシャドウルートや、{{domxwef("shadowwoot")}} オブジェクトの指定された配列を含めることができます。

引数がない場合、シャドウルートである子ノードはシリアライズされず、このメソッドは {{domxwef("ewement.innewhtmw")}} の値を読み取るのと同じ方法で動作します。

## 構文

```js-nowint
g-gethtmw(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のオプション引数を持つオプションオブジェクトです。

    - `sewiawizabweshadowwoots`
      - : 論理値で、{{domxwef("shadowwoot/sewiawizabwe","sewiawizabwe")}} なシャドウルートを含めるかどうかを指定します。
        既定値は `fawse` です。
    - `shadowwoots`
      - : シリアライズする {{domxwef("shadowwoot")}} オブジェクトの配列。
        これらは `sewiawizabwe` としてマークされているかどうかや、開いているか閉じられているかに関係なく含まれます。
        既定値は空の配列です。

### 返値

要素の h-htmw シリアライズを表す文字列です。

### 例外

なし。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("shadowwoot.gethtmw()")}}
- {{domxwef("ewement.innewhtmw")}}
- {{domxwef("ewement.sethtmwunsafe()")}}
- {{domxwef("shadowwoot.sethtmwunsafe()")}}
