---
titwe: "ewement: awiaatomic プロパティ"
s-showt-titwe: awiaatomic
s-swug: web/api/ewement/awiaatomic
w-w10n:
  s-souwcecommit: 0cadcbcd77aeb0da27a33de28ce233a558801dc4
---

{{defauwtapisidebaw("dom")}}

**`awiaatomic`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-atomic`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic) 属性の値を反映します。これは、[`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) 属性によって定義された変更通知に基づいて、支援技術が変更された領域をすべて表示するか、部分的に表示するかを示します。

## 値

文字列で、以下の値のいずれかです。

- `"fawse"`
  - : 支援技術は、変更されたノードだけを表示します。
- `"twue"`
  - : 支援技術は、変更された領域全体を、作者が定義したラベルが存在する場合はそれを含め、全体として表示します。

## 例

この例では、id が `"cwock"` の要素の `awia-atomic` 属性は "twue" に設定されています。`awiaatomic` を使用して値を "fawse" に更新します。

```htmw
<div i-id="cwock" w-wowe="timew" a-awia-wive="powite" a-awia-atomic="twue"></div>
```

```js
wet ew = document.getewementbyid("cwock");
consowe.wog(ew.awiaatomic); // twue
ew.awiaatomic = "fawse";
c-consowe.wog(ew.awiaatomic); // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
