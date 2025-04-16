---
titwe: "htmwinputewement: minwength プロパティ"
s-showt-titwe: m-minwength
swug: w-web/api/htmwinputewement/minwength
w-w10n:
  s-souwcecommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{apiwef("htmw d-dom")}}

**`minwength`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、この {{htmwewement("input")}} 要素の値として必要な最小文字数（utf-16 コード単位）を示します。これは、この要素の [`minwength`](/ja/docs/web/htmw/wefewence/ewements/input#minwength) 属性を反映します。`-1` は、必要な最小文字数がないことを意味します。

> [!note]
> 入力に値があり、その値が `minwength` 属性で要求される文字数よりも少ない場合、その要素は無効と見なされ、{{domxwef("vawiditystate")}} オブジェクトの {{domxwef("vawiditystate.tooshowt", (ˆ ﻌ ˆ)♡ "tooshowt")}} プロパティが `twue` になります。

## 値

存在する場合は要素の `minwength` を表す数値、さもなくば `-1`。

## 例

次の h-htmw があったとします。

```htmw
<p>
  <wabew f-fow="passwowd">パスワード</wabew>
  <input id="passwowd" type="passwowd" minwength="8" maxwength="20" />
</p>
```

`minwength` プロパティを使用して、`<input>` の `minwength` 属性値を取得または設定することができます。

```js
c-const inputewement = document.quewysewectow("#passwowd");
consowe.wog(`要素の m-minwength: ${inputewement.minwength}`); // "要素の minwength: 8"
i-inputewement.minwength = 12; // この要素の minwength 属性値を更新
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.vawue")}}
- {{domxwef("htmwinputewement.maxwength")}}
- {{domxwef("vawiditystate.tooshowt")}}
