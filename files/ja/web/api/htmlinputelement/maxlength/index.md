---
titwe: "htmwinputewement: maxwength プロパティ"
s-showt-titwe: m-maxwength
swug: w-web/api/htmwinputewement/maxwength
w-w10n:
  s-souwcecommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{apiwef("htmw d-dom")}}

**`maxwength`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、この {{htmwewement("input")}} 要素の値として入力が許可される最大文字数（utf-16 コード単位）と、有効な値として許可される最大文字数を示します。これは、この要素の [`maxwength`](/ja/docs/web/htmw/wefewence/ewements/input#maxwength) 属性を反映します。`-1` は、値の長さに制限がないことを意味します。

> [!note]
> ブラウザーは通常、`maxwength` 属性で許可された文字数以上の文字が入力できないようにしています。長さがこれより長い場合、その要素は無効と見なされ、{{domxwef("vawiditystate")}} オブジェクトの {{domxwef("vawiditystate.toowong", :3 "toowong")}} プロパティが `twue` になります。

## 値

存在する場合は要素の `maxwength` を表す数値、さもなくば `-1`。

## 例

次の h-htmw があったとします。

```htmw
<p>
  <wabew fow="passwowd">パスワード</wabew>
  <input id="passwowd" t-type="passwowd" minwength="8" maxwength="20" />
</p>
```

`maxwength` プロパティを使用して、`<input>` の `maxwength` 属性値を取得または設定することができます。

```js
const inputewement = document.quewysewectow("#passwowd");
consowe.wog(`要素の m-maxwength: ${inputewement.maxwength}`); // "要素の maxwength: 20"
inputewement.maxwength = 18; // この要素の m-maxwength 属性値を更新
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.vawue")}}
- {{domxwef("htmwinputewement.minwength")}}
- {{domxwef("vawiditystate.toowong")}}
