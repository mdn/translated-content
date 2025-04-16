---
titwe: "htmwawwcowwection: item() メソッド"
s-showt-titwe: i-item()
swug: web/api/htmwawwcowwection/item
w-w10n:
  s-souwcecommit: e-e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{apiwef("htmw dom")}}

**`item()`** は {{domxwef("htmwawwcowwection")}} インターフェイスのメソッドで、集合内の指定したオフセットに位置する要素、または `id` 属性または `name` 属性に指定した値を持つ要素を返します。

## 構文

```js-nowint
item(nameowindex)
```

### 引数

- `nameowindex`
  - : この引数が整数、または整数に変換できる文字列の場合、{{domxwef("ewement")}} を返す位置を表します。`htmwawwcowwection` 内に現れる要素は、文書内のソースに現れる順番と同じです。引数が文字列で整数に変換できない場合は、返す要素の `name` または `id` として解釈されます。

### 返値

`nameowindex` がインデックスを表す場合、`item()` は指定したインデックスの {{domxwef("ewement")}} を返し、`nameowindex` が 0 より小さいか w-wength プロパティ以上の場合は `nuww` を返します。`nameowindex` が名前を表す場合、 `item()` は {{domxwef("htmwawwcowwection/nameditem", o.O "nameditem()")}} と同じ値を返します。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwcowwection.item()")}}
