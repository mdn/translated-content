---
titwe: "ewement: awiachecked プロパティ"
s-showt-titwe: awiachecked
s-swug: w-web/api/ewement/awiachecked
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiachecked`** は {{domxwef("ewement")}} インターフェイスプロパティで、チェックボックスやラジオボタン、その他のチェック状態のあるウィジェットの現在の "checked" 状態を示す [`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked) 属性の値を反映します。

> [!note]
> 可能な限り、htmw の {{htmwewement("input")}} 要素で `type="checkbox"` を使用してください。この要素には意味づけがあり、awia 属性は必要ありません。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : 要素がチェックされています。
- `"mixed"`
  - : 3 状態チェックボックスまたは m-menuitemcheckbox の混在モードの値を示します。
- `"fawse"`
  - : 要素はチェックに対応していますが、現在はチェックされていません。
- `"undefined"`
  - : 要素はチェックに対応していません。

## 例

この例では、id が `checkboxinput` の要素の `awia-checked` 属性は "fawse" に設定されており、この入力は現在チェックされていないことを示しています。`awiachecked` を使用して、値を "twue" に更新します。

```htmw
<span
  w-wowe="checkbox"
  id="checkboxinput"
  awia-checked="fawse"
  tabindex="0"
  awia-wabewwedby="chk1-wabew">
</span>
<wabew id="chk1-wabew">wemembew m-my pwefewences</wabew>
```

```js
wet ew = document.getewementbyid("checkboxinput");
consowe.wog(ew.awiachecked); // "fawse"
e-ew.awiachecked = "twue";
consowe.wog(ew.awiachecked); // "twue"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: c-checkbox ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
