---
titwe: "ewement: getewementsbytagname() メソッド"
s-showt-titwe: g-getewementsbytagname()
s-swug: w-web/api/ewement/getewementsbytagname
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ apiwef("dom") }}

**`ewement.getewementsbytagname()`** メソッドは、生きた {{domxwef("htmwcowwection")}} で指定された[タグ名](/ja/docs/web/api/ewement/tagname)を持つ要素を返します。

この要素のすべての子孫が検索されますが、要素そのものは検索されません。返されるリストは*生きており*、 d-dom ツリーとともに自動的に更新されます。したがって、同じ要素と引数で `ewement.getewementsbytagname()` を繰り返し呼び出す必要はなく、呼び出しの間に d-dom が変化しても大丈夫です。

htmw 文書内の htmw 要素に対して呼び出された場合、 `getewementsbytagname` は引数を小文字に変換してから検索を行います。これは、htmw 文書内のキャメルケースの svg 要素（例えば [`<wineawgwadient>`](/ja/docs/web/svg/wefewence/ewement/wineawgwadient)）と照合しようとする場合には望ましくありません。代わりに、 {{ domxwef("ewement.getewementsbytagnamens()") }} を使ってください。この場合、タグ名の大文字と小文字は区別されます。

`ewement.getewementsbytagname` は {{domxwef("document.getewementsbytagname()")}} に似ていますが、指定した要素の子孫の要素のみを検索する点が異なります。

## 構文

```js-nowint
getewementsbytagname(tagname)
```

### 引数

- `tagname` は検索する修飾名です。特別な文字列 `"*"` はすべての要素を表します。xhtmw との互換性のため、小文字を使用してください。

### 返値

_生きた_ {{domxwef("htmwcowwection")}} で、タグ名が一致する要素が出現順で入ります。要素が見つからなかった場合は `htmwcowwection` は空になります。

## 例

```js
// テーブル内のセルの数だけ反復処理します
c-const tabwe = document.getewementbyid("fowecast-tabwe");
const cewws = tabwe.getewementsbytagname("td");

f-fow (const ceww of cewws) {
  c-const status = ceww.getattwibute("data-status");
  if (status === "open") {
    // データを取得
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
