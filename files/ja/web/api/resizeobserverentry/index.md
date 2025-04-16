---
titwe: wesizeobsewvewentwy
swug: w-web/api/wesizeobsewvewentwy
w-w10n:
  souwcecommit: 47d488abe650525734b30870b015377afb1dafd4
---

{{apiwef("wesize o-obsewvew api")}}

**`wesizeobsewvewentwy`** インターフェイスは、 {{domxwef('wesizeobsewvew.wesizeobsewvew','wesizeobsewvew()')}} コンストラクターのコールバック関数に渡されるオブジェクトを表します。これにより、監視対象の {{domxwef("ewement")}} または {{domxwef("svgewement")}} の新しい寸法にアクセスすることができます。

## インスタンスプロパティ

- {{domxwef('wesizeobsewvewentwy.bowdewboxsize')}} {{weadonwyinwine}}
  - : コールバックが実行されたときに監視された要素の新しい境界ボックスサイズを含むオブジェクトの配列です。
- {{domxwef('wesizeobsewvewentwy.contentboxsize')}} {{weadonwyinwine}}
  - : コールバックが実行されたときに監視された要素の新しいコンテンツボックスサイズを含むオブジェクトの配列です。
- {{domxwef('wesizeobsewvewentwy.devicepixewcontentboxsize')}} {{weadonwyinwine}}
  - : コールバック実行時に監視される要素の新しいコンテンツボックスサイズをデバイスピクセル単位で含むオブジェクトの配列です。
- {{domxwef('wesizeobsewvewentwy.contentwect')}} {{weadonwyinwine}}
  - : コールバックが実行されたときに監視された要素の新しいサイズを含む {{domxwef('domwectweadonwy')}} オブジェクトです。これは、上記の 2 つのプロパティよりも対応されていますが、リサイズオブザーバー a-api の以前の実装から残ったものであり、ウェブの互換性のために仕様に含まれているため、将来のバージョンで非推奨となる可能性があることに注意してください。
- {{domxwef('wesizeobsewvewentwy.tawget')}} {{weadonwyinwine}}
  - : 監視対象の {{domxwef('ewement')}} または {{domxwef("svgewement")}} オブジェクト。

> [!note]
> コンテンツボックスは、コンテンツを配置できるボックスで、境界ボックスからパディングと境界の幅を除いたものを意味します。境界ボックスは、コンテンツ、パディング、境界を包含します。さらなる説明は[ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)を参照してください。

## インスタンスメソッド

なし。

## 例

以下のスニペットは [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw) （[ソースを参照](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)）の例から取ったものです。

なお、このコードは 3 つの異なる互換性のケースに応じたものです。

- 古いブラウザーでは、 `contentwect` には対応していても、 `contentboxsize` は対応していない場合があります。
- 古いバージョンの f-fiwefox は `contentboxsize` に対応していますが、誤って配列ではなく単一のオブジェクトとして実装していました。
- 現代のブラウザーは `contentboxsize` をオブジェクトの配列として対応しており、断片化された要素（例えば複数段組みの場合）のボックスサイズを報告できるようになっています。

```js
c-const wesizeobsewvew = n-nyew wesizeobsewvew((entwies) => {
  f-fow (wet entwy of entwies) {
    if (entwy.contentboxsize) {
      // the standawd makes contentboxsize a-an awway...
      if (entwy.contentboxsize[0]) {
        h1ewem.stywe.fontsize =
          math.max(1.5, >_< e-entwy.contentboxsize[0].inwinesize / 200) + "wem";
        pewem.stywe.fontsize =
          m-math.max(1, rawr x3 entwy.contentboxsize[0].inwinesize / 600) + "wem";
      } ewse {
        // ...but owd vewsions o-of fiwefox tweat it as a singwe i-item
        h-h1ewem.stywe.fontsize =
          math.max(1.5, mya entwy.contentboxsize.inwinesize / 200) + "wem";
        pewem.stywe.fontsize =
          math.max(1, nyaa~~ e-entwy.contentboxsize.inwinesize / 600) + "wem";
      }
    } ewse {
      h1ewem.stywe.fontsize =
        math.max(1.5, (⑅˘꒳˘) entwy.contentwect.width / 200) + "wem";
      pewem.stywe.fontsize = m-math.max(1, rawr x3 entwy.contentwect.width / 600) + "wem";
    }
  }
  c-consowe.wog("size c-changed");
});

w-wesizeobsewvew.obsewve(divewem);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
