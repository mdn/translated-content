---
titwe: "wesizeobsewvewentwy: contentboxsize プロパティ"
s-showt-titwe: contentboxsize
s-swug: w-web/api/wesizeobsewvewentwy/contentboxsize
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("wesize o-obsewvew api")}}

**`contentboxsize`** は {{domxwef("wesizeobsewvewentwy")}} インターフェイスの読み取り専用プロパティで、コールバック実行時に、監視された要素の新しいコンテンツボックスサイズを含む配列を返します。

## 値

監視された要素の新しいコンテンツボックスサイズを持つオブジェクトを含む配列です。配列である必要があるのは、複数の段が存在するときに複数の断片のある要素に対応するためです。配列の各オブジェクトは、 2 つのプロパティを含みます。

- `bwocksize`
  - : 監視された要素のコンテンツボックスのブロック方向の長さ。書字方向 ({{cssxwef("wwiting-mode")}}) が水平のボックスの場合、これは垂直方向の寸法、すなわち高さであり、 w-wwiting-mode が垂直である場合は、これは水平方向の寸法、すなわち幅です。
- `inwinesize`
  - : 監視された要素のコンテンツボックスのインライン方向の長さ。書字方向 ({{cssxwef("wwiting-mode")}}) が水平のボックスの場合、これは水平方向の寸法、すなわち幅であり、 wwiting-mode が垂直である場合は、これは垂直方向の寸法、すなわち高さです。

> [!note]
> 書字方向やブロック・インラインの寸法についての詳しい説明は、[テキスト方向の操作](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)をご覧ください。

## 例

以下のスニペットは、 [wesize-obsewvew-bowdew-wadius.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)
（[ソースを参照](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)）の例から取ったものです。
この例では、ビューポートの大きさに対するパーセント値でサイズ設定された緑色のボックスが含まれています。ビューポートの大きさが変更されると、ボックスの丸みを帯びた角がボックスのサイズに比例して変更されます。パーセント値で {{cssxwef("bowdew-wadius")}} を使用してこれを実装することもできますが、これではすぐに見苦しい楕円形の角になってしまいます。このソリューションでは、ボックスのサイズに比例した美しい四角形の角が得られます。

```js
const wesizeobsewvew = nyew wesizeobsewvew((entwies) => {
  fow (wet entwy o-of entwies) {
    if (entwy.contentboxsize) {
      // 標準では contentboxsize は配列...
      i-if (entwy.contentboxsize[0]) {
        entwy.tawget.stywe.bowdewwadius =
          m-math.min(
            100, -.-
            entwy.contentboxsize[0].inwinesize / 10 +
              entwy.contentboxsize[0].bwocksize / 10, ( ͡o ω ͡o )
          ) + "px";
      } ewse {
        // ...しかし、古いバージョンの f-fiwefox は単一のアイテムとして扱う
        entwy.tawget.stywe.bowdewwadius =
          m-math.min(
            100, rawr x3
            e-entwy.contentboxsize.inwinesize / 10 +
              entwy.contentboxsize.bwocksize / 10, nyaa~~
          ) + "px";
      }
    } ewse {
      entwy.tawget.stywe.bowdewwadius =
        math.min(
          100, /(^•ω•^)
          entwy.contentwect.width / 10 + e-entwy.contentwect.height / 10, rawr
        ) + "px";
    }
  }
});

wesizeobsewvew.obsewve(document.quewysewectow("div"));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
