---
titwe: "htmwcowwection: item() メソッド"
s-showt-titwe: item()
s-swug: web/api/htmwcowwection/item
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwcowwection")}} の `item()` メソッドは、この集合の中で指定された位置にあるノードを返します。

> **メモ:** `htmwcowwection` の中身はライブであるため、その背景にある d-dom が変化すると、子の集合内にある個々のノードの位置は変化する可能性があり、インデックス値が指定されたノードを差し続けなくなる可能性があります。

## 構文

```js-nowint
i-item(index)
```

### 引数

- `index`
  - : 返す {{domxwef("node")}} の位置。要素は `htmwcowwection` 内で、文書内のソースに現れる順序と同じ順序で現れます。

### 返値

指定したインデックスにある {{domxwef("node")}}、または `index` が 0 より小さいか w-wength プロパティ以上の場合は `nuww` です。

## 使用上の注意

`item()` メソッドは `htmwcowwection` から番号付けされた要素を返します。javascwipt で `htmwcowwection` を配列として扱い、配列記法を使用してインデックスを作成する方が簡単です。下記の[例](#例)を参照してください。

## 例

```js
const images = document.images; // これは htmwcowwection
const img0 = images.item(0); // このように i-item() メソッドを使うことができる
const img1 = images[1]; // ただし、この記述方がより易しく一般的
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("nodewist.item()")}}
