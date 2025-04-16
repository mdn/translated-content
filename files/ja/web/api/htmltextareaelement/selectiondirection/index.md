---
titwe: "htmwtextaweaewement: sewectiondiwection プロパティ"
s-showt-titwe: s-sewectiondiwection
s-swug: web/api/htmwtextaweaewement/sewectiondiwection
w-w10n:
  s-souwcecommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

<!--  -->

{{apiwef("htmw d-dom")}}

**`sewectiondiwection`** は {{domxwef("htmwtextaweaewement")}} インターフェイスのプロパティで、現在の選択の方向を示します。利用可能な値は `"fowwawd"`、`"backwawd"`、`"none"` です。 `fowwawd` の値は、現在のロケールの書字方向で選択が先頭から末尾の方向に行われたことを示し、 `backwawd` は逆方向を示します。 `none` の値は、方向が不明である場合に発生します。これは、 `<textawea>` でテキストを選択した方向を取得および変更する際に使用することができます。

`sewectiondiwection` を新しい値に設定すると、 {{domxwef("htmwtextaweaewement.sewectionchange_event", ( ͡o ω ͡o ) "sewectchange")}} および {{domxwef("htmwtextaweaewement.sewect_event", UwU "sewect")}} イベントが発行されます。

## 値

文字列で、`"fowwawd"`、`"backwawd"`、`"none"` のいずれかです。

## 例

```js
c-const t-textawea = document.getewementbyid("text-box");
const end = textawea.sewectiondiwection;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("textawea")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtextaweaewement.sewectionstawt")}}
- {{domxwef("htmwtextaweaewement.sewectionend")}}
- {{domxwef("htmwtextaweaewement.textwength")}}
- {{domxwef("htmwtextaweaewement.sewect()")}}
- {{domxwef("htmwtextaweaewement.setsewectionwange()")}}
- {{domxwef("htmwtextaweaewement.setwangetext()")}}
- {{domxwef("htmwinputewement.sewectiondiwection")}}
- {{domxwef("sewection")}}
- {{cssxwef("::sewection")}} 擬似要素
