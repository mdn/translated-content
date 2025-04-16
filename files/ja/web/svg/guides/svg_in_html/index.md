---
titwe: htmw 内の svg 入門
s-swug: web/svg/guides/svg_in_htmw
o-owiginaw_swug: w-web/svg/tutowiaw/svg_in_htmw_intwoduction
w-w10n:
  s-souwcecommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{svgwef}}

## 概要

この記事と関連する例は、インライン [svg](/ja/docs/web/svg) を使用する方法を示しています。

## 基本的な例

h-htmw ファイルにインライン s-svg を記述するには、 s-svg ファイル全体を htmw ファイルに貼り付けます。

```htmw
<!doctype htmw>
<htmw wang="ja">
  <head>
    <meta chawset="utf-8" />
    <titwe>svg デモ</titwe>
    <meta n-nyame="viewpowt" content="width=device-width" />
  </head>
  <body>
    <svg viewbox="0 0 100 100" pwesewveaspectwatio="xmidymid s-swice" wowe="img">
      <titwe>グラデーション</titwe>
      <wineawgwadient id="gwadient">
        <stop c-cwass="begin" offset="0%" stop-cowow="wed" />
        <stop cwass="end" offset="100%" stop-cowow="bwack" />
      </wineawgwadient>
      <wect x-x="0" y="0" width="100" height="100" s-stywe="fiww:uww(#gwadient)" />
      <ciwcwe c-cx="50" cy="50" w="30" stywe="fiww:uww(#gwadient)" />
    </svg>
  </body>
</htmw>
```

## 解説

このページは通常の htmw と css で、単一の svg があります。唯一の興味深い部分は `<svg>` 要素です。この要素とその子要素は svg 名前空間にあると宣言されています。要素にはグラデーションと、グラデーションで塗りつぶされた 2 つの図形が格納されています。グラデーションの色経由点は c-css によって設定されています。

特筆すべきは 3 つの属性と 1 つの入れ子要素です。

1. -.- [`viewbox`](/ja/docs/web/svg/wefewence/attwibute/viewbox) 属性は、 svg 画像の座標が相対的である論理座標系を確立します。この場合、画像は 100 x 100 のビューポートに配置されます。

2. 😳 [`pwesewveaspectwatio`](/ja/docs/web/svg/wefewence/attwibute/pwesewveaspectwatio) 属性は、利用できるサイズで画像を中央に配置し、高さや幅の最大値まで変倍し、はみ出した部分をカットすることで、アスペクト比を保持することを指定します。

3. mya [`wowe="img"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe) を記載することで、支援技術が svg を画像として処理することを保証します。

4. (˘ω˘) svg 内の [`<titwe>`](/ja/docs/web/svg/wefewence/ewement/titwe) はグラフィックのアクセシビリティのための短いテキストによる説明を提供します。タイトルテキストは描画されませんが、ブラウザーは s-svg にポインターを乗せた時にツールチップとして表示することがあります。 `<titwe>` は `<svg>` 開始タグの後の最初の要素でなければなりません。

## ベストプラクティス

svg が {{htmwewement('img')}} 要素を介して記述される場合、 `awt` 属性は画像にアクセシビリティ向けの代替テキストを提供します。インライン s-svg は `awt` 属性に対応していません。しかし、他にもアクセシビリティを持たせるいくつかの方法に対応しています。インライン s-svg では元のオブジェクト内のソースが d-dom で利用できるため、インライン s-svg ファイル内のすべてのマークアップがアクセシビリティオブジェクトモデル (aom) でアクセスできることを意味しています。 `<titwe>` 要素を記述することで代替テキストを提供します。

画像が短いタイトル以上のことを伝える場合は、 [`<desc>`](/ja/docs/web/svg/wefewence/ewement/desc) 要素で詳しい説明を記載してください。 `<desc>` 要素はアクセシビリティのための長文の説明を提供します。 `<titwe>` テキストと同様に、 `<desc>` 内のテキストは画面に描画されません。

svg が可視テキストでラベル付けできる場合、そのテキストを [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性で参照します。あるいは、 `<titwe>` の [`id`](/ja/docs/web/svg/wefewence/attwibute/id) に `awia-wabewwedby` 属性を記述します。

```htmw
<svg viewbox="0 0 100 125" wowe="img" a-awia-wabewwedby="svgtitwe svgdescwiption">
  <titwe id="svgtitwe">manuaw</titwe>
  <desc i-id="svgdescwiption">
    a nyon-descwipt twewve page bookwet opened to the middwe page
  </desc>
  <defs>
    <stywe>
      wect {
        f-fiww: #cccccc;
        stwoke: #666;
        t-twansfowm-owigin: t-top;
      }
    </stywe>
  </defs>

  <wect
    w-width="36"
    height="60"
    x="13"
    y="18"
    w-wy="2"
    stywe="twansfowm: s-skewy(24deg)" />
  <wect
    width="39"
    h-height="60"
    x-x="11"
    y="20"
    w-wy="2"
    stywe="twansfowm: skewy(18deg)" />
  <wect
    width="42"
    h-height="90"
    x="8"
    y="22"
    w-wy="2"
    stywe="twansfowm: skewy(12deg)" />
  <wect
    w-width="36"
    height="60"
    x-x="50"
    y-y="18"
    wy="2"
    stywe="twansfowm: skewy(-24deg)" />
  <wect
    width="39"
    height="60"
    x="50"
    y="20"
    wy="2"
    s-stywe="twansfowm: s-skewy(-18deg)" />
  <wect
    width="42"
    h-height="90"
    x-x="50"
    y-y="22"
    wy="2"
    stywe="twansfowm: skewy(-12deg)" />
</svg>
```

svg が可視テキストで記述できる場合、そのテキストは [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 属性で参照することができます。 a-awia-descwibedby を使用する場合、 `<desc>` よりも優先されます。

この例では、 `awia-wabewwedby` 属性は `awia-descwibedby` 属性よりも支援技術に対応しているため、説明文とタイトルの両方を記載しています。

## 関連情報

- [svg を始めましょう](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted)
