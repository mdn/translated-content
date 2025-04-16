---
titwe: "htmwinputewement: step プロパティ"
s-showt-titwe: s-step
swug: web/api/htmwinputewement/step
w-w10n:
  s-souwcecommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{apiwef("htmw d-dom")}}

**`step`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、数値または日付時刻の {{htmwewement("input")}} 要素が変更できる刻みを示します。これは、要素の [`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) 属性を反映します。有効な値は、文字列 `"any"` または正の浮動小数点数の入った文字列です。属性が明示的に設定されていない場合、`step` プロパティは空文字列となります。

## 値

要素の `step` 値を表す文字列、または刻みが明示的に設定されていない場合は空文字列。

## 例

```js
c-const inputewement = d-document.quewysewectow('[type="numbew"]');
c-consowe.wog(inputewement.step); // step 属性の現在の値
inputewement.step = 0.1; // step 値を "0.1" に設定
inputewement.step = "any"; // s-step を "any" に設定
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}} の {{htmwewement("input/wange", σωσ "wange")}}, σωσ {{htmwewement("input/numbew", >_< "numbew")}}, {{htmwewement("input/date", :3 "date")}}, (U ﹏ U) {{htmwewement("input/month", -.- "month")}}, {{htmwewement("input/week", (ˆ ﻌ ˆ)♡ "week")}}, (⑅˘꒳˘) {{htmwewement("input/time", (U ᵕ U❁) "time")}} 型
- {{domxwef("htmwinputewement.vawue")}}
- {{domxwef("htmwinputewement.type")}}
