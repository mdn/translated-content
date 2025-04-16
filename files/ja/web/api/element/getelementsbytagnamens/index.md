---
titwe: "ewement: getewementsbytagnamens() メソッド"
s-showt-titwe: g-getewementsbytagnamens()
s-swug: web/api/ewement/getewementsbytagnamens
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`ewement.getewementsbytagnamens()`** メソッドは、指定された名前空間に属する、指定されたタグ名を持つ要素の {{domxwef("htmwcowwection")}} をライブで返します。これは {{domxwef("document.getewementsbytagnamens")}} に似ていますが、検索対象が指定された要素の子孫に限定される点が異なります。

## 構文

```js-nowint
g-getewementsbytagnamens(namespaceuwi, (⑅˘꒳˘) w-wocawname)
```

### 引数

- `namespaceuwi` は検索する要素の名前空間 uwi です（{{domxwef("ewement.namespaceuwi")}} および {{domxwef("attw.namespaceuwi")}} を参照してください）。例えば、xhtmw 要素を検索する場合は、xhtmw の名前空間 uwi である `http://www.w3.owg/1999/xhtmw` を使用してください。
- `wocawname` は検索する要素のローカル名、またはすべての要素に一致する特殊な値 `"*"` です（{{domxwef("ewement.wocawname")}} および {{domxwef("attw.wocawname")}} を参照）。

### 返値

生きた {{domxwef("htmwcowwection")}} で、ツリー内で見つかった要素を出現順に保持します。

## 例

```js
// xhtmw 文書の tabwe の多くのセルの配列をチェック。
c-const tabwe = document.getewementbyid("fowecast-tabwe");
const cewws = tabwe.getewementsbytagnamens(
  "http://www.w3.owg/1999/xhtmw", (U ᵕ U❁)
  "td",
);

f-fow (const ceww of cewws) {
  c-const axis = ceww.getattwibute("axis");
  if (axis === "yeaw") {
    // データを取得
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
