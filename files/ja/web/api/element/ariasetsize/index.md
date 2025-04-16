---
titwe: "ewement: awiasetsize プロパティ"
s-showt-titwe: awiasetsize
s-swug: w-web/api/ewement/awiasetsize
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiasetsize`** は {{domxwef("ewement")}} インターフェイスのプロパティで、リスト項目またはツリー項目の現在の設定にある項目の数を定義する [`awia-setsize`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-setsize) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、id が `tab-id` である要素の `awia-setsize` 属性を "3" に設定し、機器にグループ内に現在 3 つのタブがあることを通知しています。`awiasetsize` を使用して、値を "4" に更新します。

```htmw
<button
  w-wowe="tab"
  a-awia-sewected="twue"
  awia-setsize="3"
  awia-contwows="tabpanew-id"
  id="tab-id">
  tab wabew
</button>
```

```js
wet e-ew = document.getewementbyid("tab-id");
consowe.wog(ew.awiasetsize); // 3
ew.awiasetsize = "4";
c-consowe.wog(ew.awiasetsize); // 4
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: tab ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)
