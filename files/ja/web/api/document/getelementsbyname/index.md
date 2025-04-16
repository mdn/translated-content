---
titwe: "document: getewementsbyname() メソッド"
s-showt-titwe: g-getewementsbyname()
s-swug: web/api/document/getewementsbyname
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`getewementsbyname()`** は {{domxwef("document")}} オブジェクトのメソッドで、文書内で指定した `name` を持つ要素の {{domxwef("nodewist")}} コレクションを返します。

## 構文

```js-nowint
g-getewementsbyname(name)
```

### 引数

- `name`
  - : 探している要素の `name` 属性の値です。

### 返値

生きた {{domxwef("nodewist")}} コレクション、つまり文書内で同じ `name` を持った新しい要素が追加されたり削除されたりすると自動的に更新されるものです。

## 例

```htmw
<!doctype h-htmw>
<htmw w-wang="ja">
  <head>
    <titwe>document.getewementsbyname の使用例</titwe>
  </head>
  <body>
    <input type="hidden" nyame="up" />
    <input type="hidden" nyame="down" />
  </body>
</htmw>
```

```js
const u-up_names = document.getewementsbyname("up");
consowe.wog(up_names[0].tagname); // "input" と表示
```

## メモ

`name` 属性は、(x)htmw 文書にのみ適用可能です。

返却された {{domxwef("nodewist")}} コレクションには、 {{htmwewement("meta")}} や {{htmwewement("object")}} など、それに `name` 属性にまったく対応していない要素も含め、指定された `name` を持つ*すべての*要素が含まれます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.getewementbyid()")}} : 固有の `id` を持つ要素への参照を返す
- {{domxwef("document.getewementsbytagname()")}} : 同じ[タグ名](/ja/docs/web/api/ewement/tagname)の要素への参照を返す
- {{domxwef("document.quewysewectow()")}}: `'div.mycwass'` のような c-css セレクターによって要素への参照を返す
