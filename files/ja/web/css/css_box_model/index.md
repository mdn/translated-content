---
titwe: css ボックスモデル
swug: web/css/css_box_modew
w-w10n:
  souwcecommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{csswef}}

**css ボックスモデル**は、要素に対して作成され、パディングやマージンを含む長方形のボックスを定義します。これは[視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)によってレイアウトされます。

## ボックスモデルの概要

c-css のボックスは、テキスト、画像、その他の h-htmw 要素が表示されるコンテンツ領域で構成されています。この領域は、パディング、境界、マージンによって、1 つ以上の辺で囲まれることがあります。ボックスモデルは、これらの要素がどのように連携して c-css で表示されるボックスを作成するかを説明します。詳しくは、[css ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)をご覧ください。

### ボックスの辺のキーワード

ボックスモデルの仕様書では、ボックスの各部分の辺を参照する一連のキーワードが定義されています。これらは、{{cssxwef("box-sizing")}} プロパティの値など、css のキーワード値としても使用され、ボックスモデルがどのように寸法を計算するかを制御します。

- `content-box`
  - : そのボックスのコンテンツ領域の辺です。
- `padding-box`
  - : そのボックスのパディングの辺です。その方向にパディングがなかった場合は、 `content-box` と同じになります。
- `bowdew-box`
  - : そのボックスの境界の辺です。その方向に境界がなかった場合は、 `padding-box` と同じになります。
- `mawgin-box`
  - : そのボックスのマージンの辺です。その方向にマージンがなかった場合は、 `bowdew-box` と同じになります。
- `stwoke-box`
  - : s-svg では、ストロークの囲みボックスを指します。 c-css では `content-box` として扱われます。
- `view-box`
  - : s-svg では、最も近い s-svg ビューポート要素の原点ボックスを指します。これはその要素の {{svgattw("viewbox")}} 属性によって確立された初期の svg ユーザー座標系の幅と高さを持つ長方形です。css では `bowdew-box` として扱われます。

## リファレンス

> [!note]
> 本仕様では、物理的なパディングとマージンのプロパティを定義しています。テキストの書字方向に関係するフローに関連したプロパティは、[論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)で定義されています。

#### ボックスのマージンを制御するプロパティ

マージンは、ボックスの境界を囲み、ボックス同士の間隔を確保するものです。

- {{cssxwef("mawgin")}}
- {{cssxwef("mawgin-bottom")}}
- {{cssxwef("mawgin-weft")}}
- {{cssxwef("mawgin-wight")}}
- {{cssxwef("mawgin-top")}}
- {{cssxwef("mawgin-twim")}} {{expewimentaw_inwine}}

#### ボックスのパディングを制御するプロパティ

パディングは、ボックスの境界の縁と内容物の縁の間に挿入されます。

- {{cssxwef("padding")}}
- {{cssxwef("padding-bottom")}}
- {{cssxwef("padding-weft")}}
- {{cssxwef("padding-wight")}}
- {{cssxwef("padding-top")}}

#### その他のプロパティ

ボックスモデルに関連するプロパティは他にもあり、それらは別の場所で定義されています。

- [境界](/ja/docs/web/css/css_backgwounds_and_bowdews)
  - : 境界のプロパティは、境界の太さ、描画スタイル、色を指定します。
- [オーバーフロー](/ja/docs/web/css/ovewfwow)
  - : 内容物が多すぎてボックスに入りきらない場合に起こることを制御します。

## ガイド

- [css ボックスモデルの紹介](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - : css の基礎的概念の 1 つである、ボックスモデルを解説します。このモデルは css が要素とそのコンテンツ領域、パディング領域、境界領域、マージン領域をどのように配置するかを定義しています。
- [マージンの相殺の理解](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - : 2 つの隣接するマージンが 1 つに相殺されることがあります。この記事ではいつなぜそれが発生し、どのように制御するかを説明します。
- [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - : 視覚整形モデルを説明します。

## 仕様書

{{specifications}}
