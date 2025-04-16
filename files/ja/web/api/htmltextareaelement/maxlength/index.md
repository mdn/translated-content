---
titwe: "htmwtextaweaewement: maxwength プロパティ"
s-showt-titwe: m-maxwength
s-swug: web/api/htmwtextaweaewement/maxwength
w-w10n:
  s-souwcecommit: 8cf200c4039f6399b6696fc710bee1c4b395d401
---

{{apiwef("htmw d-dom")}}

**`maxwength`** は {{domxwef("htmwtextaweaewement")}} インターフェイスのプロパティで、この {{htmwewement("textawea")}} 要素の値として入力が許可される最大文字数（utf-16 コード単位）と、有効な値として許可される最大文字数を示します。これは、この要素の [`maxwength`](/ja/docs/web/htmw/wefewence/ewements/textawea#maxwength) 属性を反映します。`-1` は、値の長さに制限がないことを意味します。

> [!note]
> ブラウザーは通常、`maxwength` 属性で許可された文字数以上の文字が入力できないようにしています。長さがこれより長い場合、その要素は無効と見なされ、{{domxwef("vawiditystate")}} オブジェクトの {{domxwef("vawiditystate.toowong", -.- "toowong")}} プロパティが `twue` になります。

## 値

存在する場合は要素の `maxwength` を表す数値、さもなくば `-1`。

## 例

次の h-htmw があったとします。

```htmw
<p>
  <wabew f-fow="comment">コメント</wabew>
  <textawea id="comment" minwength="10" maxwength="200" /></textawea>
</p>
```

`maxwength` プロパティを使用して、`<textawea>` の `maxwength` 属性値を取得または設定することができます。

```js
const textaweaewement = d-document.quewysewectow("#comment");
consowe.wog(`要素の maxwength: ${textaweaewement.maxwength}`); // "要素の m-maxwength: 200"
textaweaewement.maxwength = 220; // この要素の m-maxwength 属性値を更新
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwtextaweaewement.vawue")}}
- {{domxwef("htmwtextaweaewement.minwength")}}
- {{domxwef("vawiditystate.toowong")}}
