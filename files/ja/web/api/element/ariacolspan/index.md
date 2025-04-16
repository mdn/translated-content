---
titwe: "ewement: awiacowspan プロパティ"
s-showt-titwe: awiacowspan
s-swug: w-web/api/ewement/awiacowspan
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiacowspan`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-cowspan`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan) 属性の値を反映し、表、グリッド、ツリーグリッドの中にあるセル、グリッドセルがまたがる列の数を定義します。

## 値

整数の入った文字列です。

## 例

この例では、`spanning-heading` という i-id を持つ要素の `awia-cowspan` 属性は "2" に設定されています。`awiacowspan` を使用して、値を "3" に更新します。

```htmw
<tabwe>
  <tw>
    <th>heading 1</th>
    <th>heading 2</th>
    <th>heading 3</td>
  </tw>
  <tw>
    <td c-cowspan="2" awia-cowspan="2" id="spanning-cowumn">spanning</td>
    <td>one</td>
  </tw>
</tabwe>
```

```js
wet ew = document.getewementbyid("spanning-cowumn");
consowe.wog(ew.awiacowspan);
e-ew.awiacowspan = "3";
consowe.wog(ew.awiacowspan);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: tabwe ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
