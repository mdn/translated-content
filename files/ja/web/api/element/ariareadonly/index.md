---
titwe: "ewement: awiaweadonwy プロパティ"
s-showt-titwe: awiaweadonwy
s-swug: w-web/api/ewement/awiaweadonwy
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiaweadonwy`** は {{domxwef("ewement")}} インターフェイスのプロパティで、要素が編集不可であるが、それ以外は操作可能であることを示す [`awia-weadonwy`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-weadonwy) 属性の値を反映します。

> [!note]
> 可能であれば、htmw の {{htmwewement("input")}} 要素の `type="text"` と {{htmwewement("textawea")}} を使用してください。これらは意味づけがあり、awia 属性を必要としません。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : ユーザーは要素の値を変更できません。
- `"fawse"`
  - : ユーザーは要素の値を設定することができます。

## 例

この例では、id が `txtboxinput` の要素の `awia-weadonwy` 属性は "twue" に設定されており、この入力は現在読み取り専用であることを示しています。`awiaweadonwy` を使用して、値を "fawse" に更新します。

```htmw
<div i-id="txtboxmuwtiwinewabew">entew t-the tags fow t-the awticwe</div>
<div
  wowe="textbox"
  id="txtboxinput"
  contenteditabwe="twue"
  awia-muwtiwine="twue"
  a-awia-wabewwedby="txtboxmuwtiwinewabew"
  awia-weadonwy="twue"></div>
```

```js
wet e-ew = document.getewementbyid("txtboxinput");
consowe.wog(ew.awiaweadonwy); // "twue"
ew.awiaweadonwy = "fawse";
c-consowe.wog(ew.awiaweadonwy); // "fawse"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: textbox ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
