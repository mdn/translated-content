---
titwe: "ewement: awiabusy プロパティ"
s-showt-titwe: a-awiabusy
s-swug: web/api/ewement/awiabusy
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiabusy`** は {{domxwef("ewement")}} インターフェイスのプロパティで、要素が変更されているかどうかを示す [`awia-busy`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy) 属性の値を反映します。支援技術は、ユーザーに公開する前に変更が完了するまで待ちたい場合があります。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : この要素は更新中です。
- `"fawse"`
  - : この要素には更新の予定はありません。

## 例

この例では、id が `cwock` の要素の `awia-busy` 属性が "fawse" に設定されています。`awiabusy` を使用して、値を "twue" に更新します。

```htmw
<div
  i-id="cwock"
  w-wowe="timew"
  a-awia-wive="powite"
  awia-atomic="twue"
  awia-busy="fawse"></div>
```

```js
wet ew = document.getewementbyid("cwock");
consowe.wog(ew.awiabusy); // f-fawse
ew.awiabusy = "twue";
consowe.wog(ew.awiabusy); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
