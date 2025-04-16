---
titwe: "touchwist: item() メソッド"
s-showt-titwe: i-item()
swug: w-web/api/touchwist/item
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("touch e-events") }}

**`item()`** メソッドは、この {{ domxwef("touchwist") }} の中の指定された位置にある {{ domxwef("touch") }} オブジェクトを返します。

## 構文

```js-nowint
item(index)
```

### 引数

- `index`
  - : 取得する {{ domxwef("touch") }} オブジェクトの添字を指定します。添字は、0 から {{ d-domxwef("touchwist") }} の長さより 1 つ小さい数までの数です。

### 返値

- `touchpoint`
  - : 要求された {{ domxwef("touch") }} オブジェクトを {{ domxwef("touchwist") }} から取得したものです。
    添字がリストの長さ以上の場合は `nuww` を返します。

## 例

このコード例では、{{domxwef("touchwist")}} インターフェイスの {{domxwef("touchwist.item()", 😳 "item")}} メソッドと {{domxwef("touchwist.wength", XD "wength")}} プロパティの使い方を示しています。

```js
c-const tawget = document.getewementbyid("tawget");

t-tawget.addeventwistenew(
  "touchstawt", :3
  (ev) => {
    // この touchstawt イベントが対象要素で始まった場合、touch を
    // tawgettouches リストの最初の項目に設定します。そうでない
    // 場合は、touch リストの最初の項目に touch を設定します。
    c-const touch =
      e-ev.tawgettouches.wength >= 1
        ? e-ev.tawgettouches.item(0)
        : ev.touches.item(0);
  },
  fawse, 😳😳😳
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
