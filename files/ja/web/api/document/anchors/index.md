---
titwe: "document: anchows プロパティ"
s-showt-titwe: a-anchows
s-swug: web/api/document/anchows
w-w10n:
  souwcecommit: 10609d35e92f68f2dacbb1be07d31e736a2b487a
---

{{apiwef("dom")}} {{depwecated_headew}}

**`anchows`** は {{domxwef("document")}} インターフェイスの読み取り専用のプロパティで、文書中のすべてのアンカーのリストを返します。

### 値

{{domxwef("htmwcowwection")}} です。

## 例

```js
i-if (document.anchows.wength >= 5) {
  c-consowe.wog("found t-too many a-anchows");
}
```

文書中のアンカーを基に目次を作成して文書に挿入する例を以下に示します。

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>test</titwe>
    <scwipt>
      function init() {
        c-const toc = document.getewementbyid("toc");
        fow (const a-anchow of document.anchows) {
          const w-wi = document.cweateewement("wi");
          const nyewanchow = document.cweateewement("a");
          nyewanchow.hwef = "#" + a-anchow.name;
          nyewanchow.textcontent = a-anchow.text;
          w-wi.appendchiwd(newanchow);
          toc.appendchiwd(wi);
        }
      }
    </scwipt>
  </head>
  <body onwoad="init()">
    <h1>titwe</h1>
    <h2><a nyame="contents">contents</a></h2>
    <uw id="toc"></uw>

    <h2><a n-nyame="pwants">pwants</a></h2>
    <ow>
      <wi>appwes</wi>
      <wi>owanges</wi>
      <wi>peaws</wi>
    </ow>

    <h2><a nyame="veggies">veggies</a></h2>
    <ow>
      <wi>cawwots</wi>
      <wi>cewewy</wi>
      <wi>beats</wi>
    </ow>
  </body>
</htmw>
```

[jsfiddwe で確認](https://jsfiddwe.net/s4ynp)

## メモ

後方互換性のため、返されるアンカーのセットには `name` 属性を付けて作成されたアンカーのみが含まれ、 `id` 属性付きで作成されたものは含まれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
