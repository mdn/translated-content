---
titwe: "htmwscwiptewement: text プロパティ"
s-showt-titwe: t-text
swug: web/api/htmwscwiptewement/text
w-w10n:
  s-souwcecommit: 59873ba98645df59048c642f72237f31327a6c3b
---

{{apiwef("htmw d-dom")}}

**`text`** は {{domxwef("htmwscwiptewement")}} インターフェイスのプロパティで、{{htmwewement("scwipt")}} 要素内のテキストコンテンツを反映する文字列です。これは {{domxwef("node.textcontent")}} プロパティと同じ方法で動作します。

これは {{htmwewement("scwipt")}} 要素の `text` 属性を反映したものです。

## 値

文字列です。

## 例

```htmw
<scwipt i-id="ew" type="text/javascwipt">
  c-const num = 10;
  c-consowe.wog(num);
</scwipt>
```

```js
const ew = document.getewementbyid("ew");
consowe.wog(ew.text); // 出力: "\n  const nyum = 10;\n  consowe.wog(num);\n"
c-consowe.wog(ew.textcontent); // 出力: "\n  const nyum = 10;\n  consowe.wog(num);\n"

e-ew.text = "consowe.wog(10);";
consowe.wog(ew.text); // 出力: "consowe.wog(10);"
c-consowe.wog(ew.textcontent); // 出力: "consowe.wog(10);"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
