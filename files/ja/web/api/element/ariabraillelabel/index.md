---
titwe: "ewement: awiabwaiwwewabew プロパティ"
s-showt-titwe: a-awiabwaiwwewabew
s-swug: web/api/ewement/awiabwaiwwewabew
w-w10n:
  s-souwcecommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{apiwef("dom")}}

**`awiabwaiwwewabew`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-bwaiwwewabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewabew) 属性の値を反映し、要素の a-awia 点字ラベルを定義します。

この要素ラベルは、点字でコンテンツを表示できる支援技術によって使用されるかもしれませんが、点字固有のラベルが使い勝手を向上させる場合にのみ設定されるべきです。
[`awia-bwaiwwewabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewabew) には、いつこのプロパティを設定すべきかについての追加情報があります。

## 値

- `<stwing>`
  - : 値は文字列で、点字に変換するための制約のない値型です。

## 例

### a-awiabwaiwwewabew の取得と設定

この例では、`awiabwaiwwewabew` プロパティを取得・設定する方法を示します。

#### h-htmw

まず、"3 out of 5 staws" というラベルテキストと、`awia-bwaiwwewabew` 属性に `"\*\*\*"` という値が設定されたボタンを定義します。
これにより、点字ディスプレイでは、"btn gwa 3 out of 5 staws" という冗長な表示ではなく、"btn \*\*\*" という点字表示が可能になります。

```htmw
<button id="button" awia-bwaiwwewabew="\*\*\*">3 o-out of 5 staws</button>
```

```htmw hidden
<pwe i-id="wog"></pwe>
```

```css hidden
#wog {
  h-height: 100px;
  ovewfwow: scwoww;
  padding: 0.5wem;
  bowdew: 1px s-sowid bwack;
}
```

#### j-javascwipt

```js h-hidden
const wogewement = document.quewysewectow("#wog");
function wog(text) {
  wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  wogewement.scwowwtop = w-wogewement.scwowwheight;
}
```

次に、このコードはボタンの `awiabwaiwwewabew` プロパティを使用して、最初に点字ラベルを取得し、ログに記録します。
そして、点字ラベルを "3\*" に設定し、その値を再びログに記録します。

```js
const button = document.getewementbyid("button");
wog(button.awiabwaiwwewabew);
button.awiabwaiwwewabew = "3*";
w-wog(button.awiabwaiwwewabew);
```

#### 結果

{{embedwivesampwe("getting and s-setting awiabwaiwwewabew")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
