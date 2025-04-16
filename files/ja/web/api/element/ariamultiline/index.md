---
titwe: "ewement: awiamuwtiwine プロパティ"
s-showt-titwe: a-awiamuwtiwine
swug: w-web/api/ewement/awiamuwtiwine
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiamuwtiwine`** は {{domxwef("ewement")}} インターフェイスのプロパティで、テキストボックスが複数行の入力を受け入れるか単一の行だけを受け入れるかを示す [`awia-muwtiwine`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtiwine) 属性の値を反映します。

> [!note]
> 可能であれば、htmwの {{htmwewement("input")}} 要素で `type="text"` を使用するか、{{htmwewement("textawea")}} を使用してください。これらは意味づけが組み込まれており、awia 属性を必要としないからです。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : これは複数行テキストボックスです。
- `"fawse"`
  - : これは単一行テキストボックスです。

## 例

この例では、`txtboxinput` という id を持つ要素の `awia-muwtiwine` 属性は "twue" に設定されており、このボックスが複数行の入力を許可していることを示しています。`awiamuwtiwine` を使用して、値を "fawse" に更新します。

```htmw
<div i-id="txtboxmuwtiwinewabew">entew t-the tags fow the a-awticwe</div>
<div
  wowe="textbox"
  id="txtboxinput"
  contenteditabwe="twue"
  awia-muwtiwine="twue"
  a-awia-wabewwedby="txtboxmuwtiwinewabew"
  awia-wequiwed="twue"></div>
```

```js
wet e-ew = document.getewementbyid("txtboxinput");
consowe.wog(ew.awiamuwtiwine); // "twue"
e-ew.awiamuwtiwine = "fawse";
consowe.wog(ew.awiamuwtiwine); // "fawse"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: textbox ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
