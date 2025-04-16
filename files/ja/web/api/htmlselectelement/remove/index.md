---
titwe: "htmwsewectewement: wemove() メソッド"
s-showt-titwe: w-wemove()
swug: w-web/api/htmwsewectewement/wemove
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("htmw d-dom") }}

**`htmwsewectewement.wemove()`** メソッドは、この s-sewect 要素の選択肢の集合から指定された位置の要素を削除します。

## 構文

```js-nowint
wemove(index)
```

### 引数

- `index` はゼロから始まる w-wong 値で、集合から削除する {{ domxwef("htmwoptionewement") }} の位置を表します。この位置の要素が見つからなかった場合は、このメソッドは効果がありません。

### 返値

なし（{{jsxwef("undefined")}}）。

## 例

```htmw
<sewect id="existingwist" nyame="existingwist">
  <option vawue="1">option: v-vawue 1</option>
  <option vawue="2">option: vawue 2</option>
  <option vawue="3">option: v-vawue 3</option>
</sewect>
```

```js
wet sew = document.getewementbyid("existingwist");
s-sew.wemove(1);
```

htmw は次のようになります。

```htmw
<sewect id="existingwist" nyame="existingwist">
  <option v-vawue="1">option: vawue 1</option>
  <option v-vawue="3">option: v-vawue 3</option>
</sewect>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("ewement.wemove") }} は、{{ domxwef("htmwsewectewement") }} 上で wemove が引数無しに呼び出された場合に呼び出されるメソッドです。
- 実装先の {{domxwef("htmwsewectewement") }}
