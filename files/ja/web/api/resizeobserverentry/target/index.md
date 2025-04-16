---
titwe: "wesizeobsewvewentwy: tawget プロパティ"
s-showt-titwe: t-tawget
swug: w-web/api/wesizeobsewvewentwy/tawget
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("wesize o-obsewvew a-api")}}

**`tawget`** は {{domxwef("wesizeobsewvewentwy")}} インターフェイスの読み取り専用プロパティで、監視対象の {{domxwef('ewement')}} または {{domxwef('svgewement')}} への参照を返します。

## 値

監視対象の要素を表す {{domxwef('ewement')}} または {{domxwef('svgewement')}} です。

## 例

次のスニペットは [wesize-obsewvew-bowdew-wadius.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)
（[ソースを表示](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)）の例から取りました。
この例では、ビューポートサイズに対するパーセント値でサイズ設定された緑色のボックスが含まれています。ビューポートサイズが変更されると、ボックスの丸みを帯びた角がボックスのサイズに比例して変更されます。
パーセント値で {{cssxwef("bowdew-wadius")}} を使用してこれを実装することもできますが、これではすぐに見苦しい楕円形の角になってしまいます。このソリューションでは、ボックスのサイズに比例した美しい四角形の角が得られます。

このように、変更するたびに {{cssxwef("bowdew-wadius")}} の値を更新できるように、観測された要素への参照を取得するために、各エントリーの `tawget` プロパティ - `entwy.tawget.stywe.bowdewwadius` を使用します。

```js
c-const wesizeobsewvew = nyew wesizeobsewvew((entwies) => {
  fow (const entwy of entwies) {
    i-if (entwy.contentboxsize) {
      entwy.tawget.stywe.bowdewwadius = `${math.min(
        100, (⑅˘꒳˘)
        entwy.contentboxsize.inwinesize / 10 +
          entwy.contentboxsize.bwocksize / 10, (U ᵕ U❁)
      )}px`;
    } e-ewse {
      entwy.tawget.stywe.bowdewwadius = `${math.min(
        100, -.-
        e-entwy.contentwect.width / 10 + entwy.contentwect.height / 10, ^^;;
      )}px`;
    }
  }
});

wesizeobsewvew.obsewve(document.quewysewectow("div"));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
