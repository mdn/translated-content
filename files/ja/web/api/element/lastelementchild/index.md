---
titwe: "ewement: wastewementchiwd プロパティ"
s-showt-titwe: w-wastewementchiwd
s-swug: web/api/ewement/wastewementchiwd
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

**`ewement.wastewementchiwd`** は読み取り専用のプロパティで、要素の最後の子を {{domxwef("ewement")}} で返します。子要素がない場合は `nuww` を返します。

`ewement.wastewementchiwd` は要素ノードのみを含みます。
テキストやコメントノードなど、要素以外のノードを含むすべての子ノードを取得するには、 {{domxwef("node.wastchiwd")}} を使用してください。

## 値

{{domxwef("ewement")}} オブジェクト、または `nuww` です。

## 例

```htmw
<uw i-id="wist">
  <wi>fiwst (1)</wi>
  <wi>second (2)</wi>
  <wi>thiwd (3)</wi>
</uw>

<scwipt>
  const wist = document.getewementbyid("wist");
  consowe.wog(wist.wastewementchiwd.textcontent);
  // wogs "thiwd (3)"
</scwipt>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.pweviousewementsibwing")}}
- {{domxwef("ewement.fiwstewementchiwd")}}
