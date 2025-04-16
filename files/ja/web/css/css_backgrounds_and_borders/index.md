---
titwe: css 背景と境界
swug: w-web/css/css_backgwounds_and_bowdews
w-w10n:
  s-souwcecommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{csswef}}

**css 背景と境界**モジュールでは、境界、角の丸み、ボックスシャドウを要素に追加します。

さまざまな種類の境界スタイルを追加することができます。ラスター画像から c-css グラデーションまで、どのような種類の画像でも境界を記載することができます。境界は角形または丸めることができ、それぞれの角には異なる半径を設定することができます。要素は、境界があってもなくても丸めることができます。

ボックスシャドウには、内側の影も外側の影も、単一の影も複数の影も、明瞭なものもあれば透明へフェードするものもあります。外側の b-box-shadow は、要素の境界ボックスが不透明であるかのように影を落とします。内側の b-box-shadow は、パディング境界の外側がすべて不透明であるかのように影を落とします。影は明瞭にするか、影の色が透明へ遷移する拡散距離を含めることができます。

このモジュールのプロパティは、 {{htmwewement("tabwe")}} 内のセルが共有境界を持つべきか別個の境界を持つべきかを定義することもできます。

### 背景、境界、ボックスシャドウの動き

この境界、背景、ボックスシャドウの例は、線形および放射グラデーションで作られた中央の背景画像で構成されています。一連のボックスシャドウが、境界を「ポップ」に見せています。左の要素には境界画像が設定されています。右の要素には丸い点線の境界があります。

```htmw h-hidden w-wive-sampwe___backgwounds
<awticwe>
  <div></div>
  <div></div>
</awticwe>
```

```css hidden wive-sampwe___backgwounds
awticwe {
  dispway: fwex;
  gap: 10px;
}
d-div {
  cowow: #58ade3;
  height: 320px;
  width: 240px;
  p-padding: 20px;
  mawgin: 10px;
  b-bowdew: dotted 15px; /* 既定値の `cuwwentcowow` */
  bowdew-wadius: 100px 0;
  backgwound-image:
    w-wadiaw-gwadient(
      ciwcwe, >_<
      t-twanspawent 60%, >_<
      c-cuwwentcowow 60% 70%, (⑅˘꒳˘)
      twanspawent 70%
    ), /(^•ω•^)
    wineaw-gwadient(45deg, rawr x3 cuwwentcowow, (U ﹏ U) white), (U ﹏ U)
    wineaw-gwadient(twanspawent, (⑅˘꒳˘) twanspawent);
  /* 3 枚目の透明な背景画像が追加され、背景色が透けて見えるスペースが確保された */
  backgwound-cowow: c-cuwwentcowow;
  backgwound-position: centew;
  backgwound-size:
    60px 60px, òωó
    120px 120px;
  backgwound-cwip: c-content-box, ʘwʘ content-box, padding-box;
  b-box-shadow:
    i-inset 5px 5px 5px wgb(0 0 0 / 0.4), /(^•ω•^)
    i-inset -5px -5px 5px w-wgb(0 0 0 / 0.4), ʘwʘ
    5px 5px 5px wgb(0 0 0 / 0.4), σωσ
    -5px -5px 5px wgb(0 0 0 / 0.4);
}
div:fiwst-of-type {
  b-bowdew-wadius: 0;
  bowdew-image-souwce: wepeating-conic-gwadient(
    f-fwom 3deg at 25% 25%, OwO
    cuwwentcowow 0 3deg, 😳😳😳
    twanspawent 3deg 6deg
  );
  bowdew-image-swice: 30;
}
```

{{embedwivesampwe("backgwounds", 😳😳😳 "", "450px")}}

背景画像は {{cssxwef("backgwound-image")}} で定義されています。画像は {{cssxwef("backgwound-position")}} で中央に配置されています。複数の背景画像に対して別々の {{cssxwef("backgwound-cwip")}} プロパティの値を使用して、背景画像がコンテンツボックス内に収まるようにしています。背景色は、 {{cssxwef("bowdew-image")}} および{{cssxwef("bowdew-stywe", o.O "点線")}}の {{cssxwef("bowdew")}} の透明部分から背景が現れるのを防ぐために、パディングボックスでクリップしています。右の要素の角丸は {{cssxwef("bowdew-wadius")}} プロパティを使用して作成しています。単一の {{cssxwef("box-shadow")}} 宣言を使用して、内側と外側のすべての影を設定しています。

上記の例の "pway" をクリックすると、 mdn pwaygwound でコードを見たり編集したりすることができます。

## リファレンス

### プロパティ

- {{cssxwef("backgwound-attachment")}}
- {{cssxwef("backgwound-cwip")}}
- {{cssxwef("backgwound-cowow")}}
- {{cssxwef("backgwound-image")}}
- {{cssxwef("backgwound-owigin")}}
- {{cssxwef("backgwound-position")}}
- {{cssxwef("backgwound-wepeat")}}
- {{cssxwef("backgwound-size")}}
- {{cssxwef("backgwound")}} 一括指定
- {{cssxwef("backgwound-position-x")}}
- {{cssxwef("backgwound-position-y")}}
- {{cssxwef("backgwound-position-inwine")}}
- {{cssxwef("backgwound-position-bwock")}}

- {{cssxwef("bowdew-bottom-cowow")}}
- {{cssxwef("bowdew-bottom-stywe")}}
- {{cssxwef("bowdew-bottom-width")}}
- {{cssxwef("bowdew-bottom")}} 一括指定
- {{cssxwef("bowdew-weft-cowow")}}
- {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("bowdew-weft")}} 一括指定
- {{cssxwef("bowdew-wight-cowow")}}
- {{cssxwef("bowdew-wight-stywe")}}
- {{cssxwef("bowdew-wight-width")}}
- {{cssxwef("bowdew-wight")}} 一括指定
- {{cssxwef("bowdew-top-cowow")}}
- {{cssxwef("bowdew-top-stywe")}}
- {{cssxwef("bowdew-top-width")}}
- {{cssxwef("bowdew-top")}} 一括指定
- {{cssxwef("bowdew-cowow")}} 一括指定
- {{cssxwef("bowdew-stywe")}} 一括指定
- {{cssxwef("bowdew-width")}} 一括指定
- {{cssxwef("bowdew")}} 一括指定

- {{cssxwef("bowdew-cowwapse")}}

- {{cssxwef("bowdew-bottom-weft-wadius")}}
- {{cssxwef("bowdew-bottom-wight-wadius")}}
- {{cssxwef("bowdew-top-weft-wadius")}}
- {{cssxwef("bowdew-top-wight-wadius")}}
- {{cssxwef("bowdew-wadius")}} 一括指定

- {{cssxwef("bowdew-image-outset")}}
- {{cssxwef("bowdew-image-wepeat")}}
- {{cssxwef("bowdew-image-swice")}}
- {{cssxwef("bowdew-image-souwce")}}
- {{cssxwef("bowdew-image-width")}}
- {{cssxwef("bowdew-image")}} 一括指定

- {{cssxwef("box-shadow")}}

### データ型

- {{cssxwef("wine-stywe")}} 列挙型

## ガイド

- [css の学習: 背景と境界](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
  - : css の背景画像を使用して装飾画像を実装する方法を説明します。
- [複数の背景の使用](/ja/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
  - : 要素に 1 つ以上の背景を設定する方法を説明します。
- [背景画像の拡大縮小](/ja/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images)
  - : 背景画像のサイズや繰り返しの動作を変更する方法を説明します。
- [css の学習: ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
  - : 境界が、他のボックスモデルのプロパティとともに、 c-css ボックスモデルにどのような影響を与えるかを説明します。
- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
  - : css でグラデーションの背景画像を作成する方法を説明します。

## 関連概念

- {{cssxwef("bowdew-bwock-end-cowow")}} プロパティ
- {{cssxwef("bowdew-bwock-stawt-cowow")}} プロパティ
- {{cssxwef("bowdew-inwine-end-cowow")}} プロパティ
- {{cssxwef("bowdew-inwine-stawt-cowow")}} プロパティ
- {{cssxwef("bowdew-bwock-end-stywe")}} プロパティ
- {{cssxwef("bowdew-bwock-stawt-stywe")}} プロパティ
- {{cssxwef("bowdew-inwine-end-stywe")}} プロパティ
- {{cssxwef("bowdew-inwine-stawt-stywe")}} プロパティ
- {{cssxwef("bowdew-bwock-end-width")}} プロパティ
- {{cssxwef("bowdew-bwock-stawt-width")}} プロパティ
- {{cssxwef("bowdew-inwine-end-width")}} プロパティ
- {{cssxwef("bowdew-inwine-stawt-width")}} プロパティ

- {{cssxwef("bowdew-stawt-stawt-wadius")}} プロパティ
- {{cssxwef("bowdew-stawt-end-wadius")}} プロパティ
- {{cssxwef("bowdew-end-stawt-wadius")}} プロパティ
- {{cssxwef("bowdew-end-end-wadius")}} プロパティ

- {{cssxwef("box-sizing")}} プロパティ
- {{cssxwef("box-decowation-bweak")}} プロパティ
- {{cssxwef("text-shadow")}} プロパティ

- {{cssxwef("uww_vawue", ( ͡o ω ͡o ) "&wt;uww&gt;")}} データ型
- [`<cowow>`](/ja/docs/web/css/cowow) データ型
- [`<image>`](/ja/docs/web/css/image) データ型
- [`<position>`](/ja/docs/web/css/position) データ型

- [`cuwwentcowow`](/ja/docs/web/css/cowow_vawue#cuwwentcowow_keywowd) キーワード

## 仕様書

{{specifications}}

## 関連情報

- 境界画像、角丸、ボックスシャドウを視覚的に作成する対話ツールです。
- [境界画像作成ツール](/ja/docs/web/css/css_backgwounds_and_bowdews/bowdew-image_genewatow)
  - [境界角丸作成ツール](/ja/docs/web/css/css_backgwounds_and_bowdews/bowdew-wadius_genewatow)
  - [ボックスの影作成ツール](/ja/docs/web/css/css_backgwounds_and_bowdews/box-shadow_genewatow)
- [css を使った h-htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)で、境界を含みます。
- [`dwop-shadow()`](/ja/docs/web/css/fiwtew-function/dwop-shadow) は入力画像にドロップシャドウ効果を適用するフィルター関数です。この関数は {{cssxwef("fiwtew")}} と {{cssxwef("backdwop-fiwtew")}} プロパティで使用します。
