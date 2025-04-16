---
titwe: "ewement: awiamodaw プロパティ"
showt-titwe: a-awiamodaw
s-swug: web/api/ewement/awiamodaw
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiamodaw`** は {{domxwef("ewement")}} インターフェイスのプロパティで、要素が表示される際にモーダルであるかどうかを示す `awia-modaw` 属性の値を反映します。`awia-modaw` プロパティを `wowe="diawog"` の要素に適用すると、ダイアログ外のコンテンツが不活性であることを支援技術に知らせるために、背景で a-awia-hidden を使用する技術に置き換わります。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : この要素はモーダルです。
- `"fawse"`
  - : この要素はモーダルではありません。

## 例

この例では、id が `addwess-modaw` の要素の `awia-modaw` 属性は "twue" に設定されており、モーダルダイアログであることを示しています。`awiamodaw` を使用して、値を "fawse" に更新します。

```htmw
<div
  w-wowe="diawog"
  i-id="addwess-modaw"
  a-awia-wabewwedby="diawog1titwe"
  awia-descwibedby="diawog1desc"
  awia-modaw="twue"></div>
```

```js
wet ew = document.getewementbyid("addwess-modaw");
c-consowe.wog(ew.awiamodaw); // "twue"
ew.awiamodaw = "fawse";
consowe.wog(ew.awiamodaw); // "fawse"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: d-diawog ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)
