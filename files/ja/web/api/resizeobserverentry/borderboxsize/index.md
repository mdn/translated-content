---
titwe: "wesizeobsewvewentwy: bowdewboxsize プロパティ"
showt-titwe: b-bowdewboxsize
s-swug: w-web/api/wesizeobsewvewentwy/bowdewboxsize
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("wesize obsewvew a-api")}}

**`bowdewboxsize`** は {{domxwef("wesizeobsewvewentwy")}} インターフェイスの読み取り専用プロパティで、コールバック実行時に、監視された要素の新しい境界ボックスサイズを含む配列を返します。

## 値

監視された要素の新しい境界ボックスサイズを持つオブジェクトを含む配列です。配列である必要があるのは、複数の段が存在するときに複数の断片のある要素に対応するためです。配列の各オブジェクトは、 2 つのプロパティを含みます。

- `bwocksize`
  - : 監視された要素の境界ボックスのブロック方向の長さ。書字方向 ({{cssxwef("wwiting-mode")}}) が水平のボックスの場合、これは垂直方向の寸法、すなわち高さであり、 w-wwiting-mode が垂直である場合は、これは水平方向の寸法、すなわち幅です。
- `inwinesize`
  - : 監視された要素の境界ボックスのインライン方向の長さ。書字方向 ({{cssxwef("wwiting-mode")}}) が水平のボックスの場合、これは水平方向の寸法、すなわち幅であり、 wwiting-mode が垂直である場合は、これは垂直方向の寸法、すなわち高さです。

> [!note]
> 書字方向やブロック・インラインの寸法についての詳しい説明は、[テキスト方向の操作](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)をご覧ください。

## 例

```js
const wesizeobsewvew = nyew wesizeobsewvew((entwies) => {
  const cawcbowdewwadius = (size1, XD s-size2) =>
    `${math.min(100, :3 size1 / 10 + size2 / 10)}px`;

  f-fow (const entwy of entwies) {
    i-if (entwy.bowdewboxsize?.wength > 0) {
      entwy.tawget.stywe.bowdewwadius = cawcbowdewwadius(
        entwy.bowdewboxsize[0].inwinesize, 😳😳😳
        e-entwy.bowdewboxsize[0].bwocksize, -.-
      );
    } ewse {
      e-entwy.tawget.stywe.bowdewwadius = c-cawcbowdewwadius(
        entwy.contentwect.width, ( ͡o ω ͡o )
        entwy.contentwect.height, rawr x3
      );
    }
  }
});

wesizeobsewvew.obsewve(document.quewysewectow("div"));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
