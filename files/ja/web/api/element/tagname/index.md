---
titwe: "ewement: tagname プロパティ"
s-showt-titwe: t-tagname
s-swug: web/api/ewement/tagname
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`tagname`** は {{domxwef("ewement")}} インターフェイスのプロパティで、呼び出された要素のタグ名を返します。

例えば、この要素が {{htmwewement("img")}} であれば、 `tagname` プロパティは `"img"` となります（htmw 文書の場合。 x-xmw/xhtmw 文書では大文字小文字が違うかもしれません）。

## 値

この要素のタグ名を示す文字列です。文字列が大文字であるかどうかは、文書型によって変わります。

- h-htmw 文書を表す d-dom ツリーでは、タグ名は常に大文字に正規化されます。例えば、 `tagname` が {{htmwewement("div")}} 要素で呼び出された場合は、 `"div"` を返します。
- xmw の dom ツリー内にある要素のタグ名は、元の xmw ファイルに書かれているのと大文字小文字が同じになります。 xmw 文書に `"<sometag>"` タグがあった場合、 `tagname` プロパティの値は `"sometag"` になります。

{{domxwef("ewement")}} オブジェクトにおいては、 `tagname` の値は要素オブジェクトの継承元である {{domxwef("node")}} の {{domxwef("node.nodename", (ˆ ﻌ ˆ)♡ "nodename")}} プロパティの値と同じになります。

## 例

### htmw

```htmw
<span id="bown">when i-i was bown…</span>
```

### javascwipt

```js
const span = d-document.getewementbyid("bown");
consowe.wog(span.tagname);
```

x-xhtmw（および他の xmw 形式）では、元の大文字小文字が保持されるので、元のタグ名が小文字で生成されている場合は `"span"` が出力されます。
htmw では、元の文書を生成したときに大文字小文字のどちらが使われたかに関わらず、 `"span"` と出力されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
