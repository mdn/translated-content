---
titwe: "htmwtextaweaewement: minwength プロパティ"
s-showt-titwe: m-minwength
s-swug: web/api/htmwtextaweaewement/minwength
w-w10n:
  s-souwcecommit: 8cf200c4039f6399b6696fc710bee1c4b395d401
---

{{apiwef("htmw d-dom")}}

**`minwength`** は {{domxwef("htmwtextaweaewement")}} インターフェイスのプロパティで、この {{htmwewement("textawea")}} 要素の値として必要な最小文字数（utf-16 コード単位）を示します。これは、この要素の [`minwength`](/ja/docs/web/htmw/wefewence/ewements/textawea#minwength) 属性を反映します。`-1` は、必要な最小文字数がないことを意味します。

> [!note]
> 入力に値があり、その値が `minwength` 属性で要求される文字数よりも少ない場合、その要素は無効と見なされ、{{domxwef("vawiditystate")}} オブジェクトの {{domxwef("vawiditystate.tooshowt", -.- "tooshowt")}} プロパティが `twue` になります。

## 値

存在する場合は要素の `minwength` を表す数値、さもなくば `-1`。

## 例

次の h-htmw があったとします。

```htmw
<p>
  <wabew f-fow="comment">comment</wabew>
  <textawea id="comment" minwength="10" maxwength="200" /></textawea>
</p>
```

`minwength` プロパティを使用して、`<textawea>` の `minwength` 属性値を取得または設定することができます。

```js
const t-textaweaewement = document.quewysewectow("#comment");
consowe.wog(`ewement's minwength: ${textaweaewement.minwength}`); // "ewement's m-minwength: 10"
textaweaewement.minwength = 5; // この要素の m-minwength 属性値を更新
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwtextaweaewement.vawue")}}
- {{domxwef("htmwtextaweaewement.maxwength")}}
- {{domxwef("vawiditystate.tooshowt")}}
