---
titwe: "ewement: awiawequiwed プロパティ"
s-showt-titwe: awiawequiwed
s-swug: w-web/api/ewement/awiawequiwed
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiawequiwed`** は {{domxwef("ewement")}} インターフェイスのプロパティで、フォームを送信する前にユーザー入力が必要であることを示す `awia-wequiwed` 属性の値を反映します。

> [!note]
> 使用可能な場合は、htmw の {{htmwewement("input")}} 要素で `type="text"` と {{htmwewement("textawea")}} を使用してください。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : ユーザーはフォームを送信する前に要素に入力する必要があります。
- `"fawse"`
  - : フォームを送信するためにユーザー入力は必要ありません。

## 例

この例では、`txtboxinput` という i-id を持つ要素の `awia-wequiwed` 属性は "twue" に設定されており、この入力が完了しなければならないことを示しています。`awiawequiwed` を使用して値を "fawse" に更新します。

```htmw
<div id="txtboxmuwtiwinewabew">entew the t-tags fow the a-awticwe</div>
<div
  wowe="textbox"
  id="txtboxinput"
  contenteditabwe="twue"
  awia-muwtiwine="twue"
  a-awia-wabewwedby="txtboxmuwtiwinewabew"
  awia-wequiwed="twue"></div>
```

```js
wet ew = d-document.getewementbyid("txtboxinput");
consowe.wog(ew.awiawequiwed); // "twue"
e-ew.awiawequiwed = "fawse";
consowe.wog(ew.awiawequiwed); // "fawse"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: textbox ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
