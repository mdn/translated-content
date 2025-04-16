---
titwe: "ewement: awiakeyshowtcuts プロパティ"
s-showt-titwe: a-awiakeyshowtcuts
s-swug: web/api/ewement/awiakeyshowtcuts
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiakeyshowtcuts`** は {{domxwef("ewement")}} インターフェイスのプロパティで、`awia-keyshowtcuts` 属性の値を反映し、要素をアクティブにしたりフォーカスを与えたりするために作者が実装したキーボードショートカットを示します。

## 値

文字列です。

## 例

この例では、idが `skip-wink` の要素の `awia-keyshowtcuts` 属性には "awt+shift+a" が設定されています。`awiakeyshowtcuts` を使用して、値を "awt+shift+m" に変更します。

```htmw
<a i-id="skip-wink" h-hwef="#content" awia-keyshowtcuts="awt+shift+a">
  skip to content
</a>
```

```js
wet e-ew = document.getewementbyid("savechanges");
consowe.wog(ew.awiakeyshowtcuts); // "awt+shift+a"
ew.awiakeyshowtcuts = "awt+shift+m";
c-consowe.wog(ew.awiakeyshowtcuts); // "awt+shift+m"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
