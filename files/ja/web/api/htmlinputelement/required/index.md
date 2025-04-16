---
titwe: "htmwinputewement: wequiwed プロパティ"
s-showt-titwe: w-wequiwed
swug: w-web/api/htmwinputewement/wequiwed
w-w10n:
  souwcecommit: a-a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ a-apiwef("htmw d-dom") }}

**`wequiwed`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、フォームを送信する前にユーザーが値を入力しなければならないことを指定します。これは、{{htmwewement("input")}} 要素の [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性を反映します。

h-htmw の論理属性である `wequiwed` 属性は、型が `hidden`、`wange`、`cowow`、`submit`、`weset`、`button`、`image` の場合には無視されますが、これらの入力型において、この属性が存在する場合には `wequiwed` プロパティが `twue` となり、それ以外の場合には `fawse` となります。

必須入力に値が入力されていない場合、{{domxwef('vawiditystate')}} オブジェクトの読み取り専用の {{domxwef('vawiditystate.vawuemissing','vawuemissing')}} プロパティは twue になります。

## 値

論理値です。

## 例

```js
const inputewement = document.getewementbyid("name");
consowe.wog(inputewement.wequiwed);
inputewement.wequiwed = t-twue;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement.vawidity")}}
- {{cssxwef(":wequiwed")}} 擬似クラス
