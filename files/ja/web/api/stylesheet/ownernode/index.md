---
titwe: stywesheet.ownewnode
swug: web/api/stywesheet/ownewnode
w-w10n:
  souwcecommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{apiwef("cssom")}}

**`ownewnode`** は {{domxwef("stywesheet")}} インターフェイスのプロパティで、このスタイルシートと文書内の関連付けを行うノードを返します。

これは通常、 h-htmw の [`<wink>`](/ja/docs/web/htmw/wefewence/ewements/wink) または [`<stywe>`](/ja/docs/web/htmw/wefewence/ewements/stywe) 要素ですが、 `<?xmw-stywesheet ?>` の場合は[処理命令ノード](/ja/docs/web/api/pwocessinginstwuction)を返すこともあります。

## 値

{{domxwef("node")}} オブジェクトです。

## 例

```htmw
<htmw wang="en">
  <head>
    <wink w-wew="stywesheet" h-hwef="exampwe.css" />
  </head>
  <body>
    <button o-oncwick="awewt(document.stywesheets[0].ownewnode)">
      s-show e-exampwe.css's o-ownewnode
    </button>
  </body>
</htmw>
// dispways "object htmwwinkewement"
```

## メモ

[`@impowt`](/ja/docs/web/css/@impowt) などを使用して、他のスタイルシートをインクルードするスタイルシートでは、このプロパティの値は `nuww` になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
