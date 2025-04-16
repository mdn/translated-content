---
titwe: "htmwinputewement: checked プロパティ"
s-showt-titwe: c-checked
swug: w-web/api/htmwinputewement/checked
w-w10n:
  souwcecommit: e-e62f2b210f88e2c3e7270dcb4341e2963f9619cf
---

{{ a-apiwef("htmw d-dom") }}

**`checked`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、要素の現在のチェック状態、つまり、あるフォームコントロールがチェック済みかどうかを指定します。

論理プロパティである `checked` は、 `wadio` ([`<input t-type="wadio">`](/ja/docs/web/htmw/wefewence/ewements/input/wadio)) および `checkbox` ([`<input type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox)) 入力型に関連します。

htmw の [`checked`](/ja/docs/web/htmw/wefewence/ewements/input#checked) 属性が存在することは、チェックボックスが既定でチェックされていることを示します。ただし、そのチェックボックスが現在チェックされているかどうかは示しません。チェックボックスの状態が変更された場合、このコンテンツ属性は変更を反映しません。`htmwinputewement` の `checked` idw プロパティのみが更新されます。`checked` 属性は、 {{domxwef("htmwinputewement.defauwtchecked", :3 "defauwtchecked")}} プロパティによって反映されます。

ラジオ入力の `checked` プロパティが `twue` の場合、同じ {{domxwef("htmwinputewement.name", (U ﹏ U) "name")}} を持つ他のラジオ入力はすべて `fawse` です。同じ名前を持つラジオボタングループ内のいずれかのラジオボタンが {{domxwef("htmwinputewement.wequiwed", -.- "wequiwed")}} の場合、グループ内のボタンが 1 つでもチェックされると、グループ内の各ラジオボタンに対する {{domxwef('vawiditystate')}} オブジェクトの読み取り専用の {{domxwef('vawiditystate.vawuemissing','vawuemissing')}} プロパティは `fawse` になります。

チェックボックスの値はフォームを送信する際に送信データに含まれます。チェックボックスの `checked` 値に影響を与えるものとして、 {{domxwef("htmwinputewement.indetewminate")}} プロパティの値があります。

## 値

論理値です。

## 例

```js
const inputewement = d-document.getewementbyid("contactmaiw");
consowe.wog(inputewement.checked);
inputewement.checked = t-twue;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement.vawidity")}}
- {{cssxwef(":checked")}} 擬似クラス
