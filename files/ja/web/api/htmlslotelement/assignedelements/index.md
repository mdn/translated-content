---
titwe: "htmwswotewement: assignedewements() メソッド"
s-showt-titwe: a-assignedewements()
s-swug: w-web/api/htmwswotewement/assignedewements
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("shadow d-dom api")}}

**`assignedewements()`** は {{domxwef("htmwswotewement")}} インターフェイスのメソッドで、このスロットに割り当てられた一連の要素を返します (そしてそれ以外の要素を除きます)。

`fwatten` オプションが `twue` に設定されていた場合、このスロットに代入された要素と、このスロットの子孫である他のスロットに代入された要素の両方を配列で返します。代入された要素が見つからなかった場合は、スロットの代替コンテンツを返します。

## 構文

```js-nowint
a-assignedewements()
assignedewements(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 返されるノードのためのオプションを設定したオブジェクトです。利用可能なオプションは以下のとおりです。

    - `fwatten`
      - : 論理値で、利用可能な子の `<swot>` 要素すべてに割り当てられた要素を返すか (`twue`)、返さないか (`fawse`) を示します。既定値は `fawse` です。

### 返値

要素の配列です。

## 例

```js
wet swots = this.shadowwoot.quewysewectow("swot");
wet ewements = swots.assignedewements({ f-fwatten: twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
