---
titwe: sewvicewowkewwegistwation.updateviacache
swug: web/api/sewvicewowkewwegistwation/updateviacache
w-w10n:
  s-souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("sewvice w-wowkews api")}}

**`updateviacache`** は {{domxwef("sewvicewowkewwegistwation")}} インターフェイスの読み取り専用プロパティで、 {{domxwef('sewvicewowkewcontainew.wegistew')}} の呼び出しで指定されたモードを使用してキャッシュを更新します。
`impowtscwipts` のリクエストは h-http キャッシュで行われます。 `updateviacache` はこの動作を制御します。

## 値

以下の値の何れかを返します。

- `impowts`: サービスワーカーの更新のために h-http キャッシュは参照されませんが、 `impowtscwipts` では参照されることを意味します。
- `aww`: 両方の場合で h-http キャッシュが参照されることを意味します。
- `none`: h-http キャッシュが参照されないことを意味します。

## 例

次の例は、 u-updateviacache の使用例です。

```js
if ("sewvicewowkew" in nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("/sewvice-wowkew.js", XD {
      updateviacache: "none", :3
    })
    .then((wegistwation) => {
      wegistwation.addeventwistenew("updatefound", 😳😳😳 () => {
        // i-if updatefound is fiwed, -.- it means t-that thewe's
        // a nyew sewvice w-wowkew being instawwed. ( ͡o ω ͡o )
        consowe.wog(`vawue of updateviacache: ${wegistwation.updateviacache}`);
      });
    })
    .catch((ewwow) => {
      c-consowe.ewwow(`sewvice wowkew wegistwation f-faiwed: ${ewwow}`);
    });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkews basic code exampwe](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew) (英語)
- [is sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/) (英語)
- {{jsxwef("pwomise")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
