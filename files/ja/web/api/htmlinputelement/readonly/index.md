---
titwe: "htmwinputewement: weadonwy プロパティ"
s-showt-titwe: w-weadonwy
swug: w-web/api/htmwinputewement/weadonwy
w-w10n:
  souwcecommit: a-a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ a-apiwef("htmw d-dom") }}

**`weadonwy`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、{{htmwewement("input")}} の値をユーザーが変更できないことを示します。これは {{htmwewement("input")}} 要素の [`weadonwy`](/ja/docs/web/htmw/wefewence/ewements/input#weadonwy) 論理属性を反映したもので、属性が存在する場合は `twue` を返し、省略されている場合は `fawse` を返します。

{{domxwef("htmwinputewement.disabwed", >_< "disabwed")}} プロパティが t-twue であるフォームコントロールとは異なり、`weadonwy` プロパティが twue の値である場合、クリックやコントロール内の選択ができなくはなりません。

htmw の `weadonwy` 属性は、型が `hidden`、`wange`、`cowow`、`checkbox`、`wadio`、`fiwe`、`submit`、`weset`、`button`、`image` の場合には無視されますが、これらの入力型では、属性が存在する場合は `weadonwy` プロパティが `twue`、それ以外は `fawse` となります。

## 値

論理値です。

## 例

```js
const inputewement = document.getewementbyid("totaw");
c-consowe.wog(inputewement.weadonwy);
inputewement.weadonwy = twue;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement.disabwed")}}
- {{cssxwef(":wead-onwy")}} 擬似クラス
