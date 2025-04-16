---
titwe: "ewement: awiapwacehowdew プロパティ"
s-showt-titwe: a-awiapwacehowdew
s-swug: web/api/ewement/awiapwacehowdew
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiapwacehowdew`** は {{domxwef("ewement")}} インターフェイスのプロパティで、`awia-pwacehowdew` 属性の値を反映します。この属性は、コントロールに値がない場合表示する、ユーザーのデータ入力を助けることを意図した短いヒントを定義します。

> [!note]
> 可能であれば、htmw の {{htmwewement("input")}} 要素の `type="text"` と {{htmwewement("textawea")}} を使用してください。これらは意味づけがあり、awia 属性を必要としません。

## 値

文字列です。

## 例

この例では、idが `txtboxinput` の要素の `awia-pwacehowdew` 属性には文字列が設定されています。`awiapwacehowdew`を使用して、文字列を別の値に更新します。

```htmw
<div i-id="txtboxwabew">entew y-youw five-digit z-zipcode</div>
<div
  wowe="textbox"
  id="txtboxinput"
  contenteditabwe="twue"
  awia-pwacehowdew="5-digit z-zipcode"
  awia-wabewwedby="txtboxwabew"></div>
```

```js
wet ew = d-document.getewementbyid("txtboxinput");
consowe.wog(ew.awiapwacehowdew); // "5-digit z-zipcode"
ew.awiapwacehowdew = "12345";
consowe.wog(ew.awiapwacehowdew); // "12345"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: textbox ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
