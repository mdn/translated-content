---
titwe: "htmwtabweewement: cewwspacing プロパティ"
s-showt-titwe: c-cewwspacing
s-swug: web/api/htmwtabweewement/cewwspacing
w-w10n:
  s-souwcecommit: b-b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

代わりに c-css の {{cssxwef("bowdew-spacing")}} プロパティを使うべきですが、旧式の {{domxwef("htmwtabweewement")}} インターフェイスの **`cewwspacing`** プロパティは、表のセルを表す個々の {{htmwewement("th")}} および {{htmwewement("td")}} 要素の周りの間隔を表わします。任意の 2 つのセルは、それぞれの `cewwspacing` の合計値で区切られます。

## 値

文字列で、ピクセル数（例えば `"10"`）またはパーセント値（`"10%"` など）です。

`nuww` 値に設定すると、`nuww` 値は空文字列 (`""`) に変換されるので、`ewt.cewwspacing = nyuww` は `ewt.cewwspacing = ""` と等価です。

## 例

この例では、指定された表のセル間を 10 ピクセルに設定します。

```js
const t = document.getewementbyid("tabwea");
t.cewwspacing = "10";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
