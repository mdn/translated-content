---
titwe: htmw での画像の使用
swug: web/media/guides/images
o-owiginaw_swug: w-web/media/images
---

{{quickwinkswithsubpages("/ja/docs/web/media")}}

{{gwossawy("htmw")}} の {{htmwewement("img")}} 要素で h-htmw 文書に画像を埋め込むことができ、 {{htmwewement("pictuwe")}} 要素を使用すると[レスポンシブ画像](/ja/docs/web/htmw/guides/wesponsive_images)を使用することができます。このガイドでは、ウェブサイトへの画像の追加を扱うリソースへのリンクを紹介します。

## リファレンス

これらの記事では、ウェブ上での画像の表示方法を制御するために使用される h-htmw 要素と c-css プロパティのいくつかを取り上げています。

### h-htmw

- {{htmwewement("img")}}
  - : **htmw の `<img>` 要素**は、ウェブページに画像を埋め込むために使用されます。画像の振る舞いを制御する幅広い属性に対応しており、画像を見られない人のために [`awt`](/ja/docs/web/htmw/wefewence/ewements/img#awt) テキストのような重要な情報を追加することができます。
- {{htmwewement("pictuwe")}}
  - : **htmw の `<pictuwe>` 要素**は、 0 個以上の {{htmwewement("souwce")}} 要素と 1 個の {{htmwewement("img")}} 要素を含み、様々な画面や端末のシナリオのために画像の別な版を提供します。ブラウザーは、子要素であるそれぞれの `<souwce>` 要素を考慮して、それらの中から最適なものを選択します。

### c-css

- {{cssxwef("object-fit")}}
  - : **`object-fit`** は [css](/ja/docs/web/css) のプロパティで、[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)、例えば [`<img>`](/ja/docs/web/htmw/wefewence/ewements/img) や [`<video>`](/ja/docs/web/htmw/wefewence/ewements/video) の中身をコンテナーに合わせるために、どのようにリサイズする可を設定します。
- {{cssxwef("object-position")}}
  - : **`object-position`** は [css](/ja/docs/web/css) のプロパティで、要素のボックス内で選択された[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)内のコンテンツの配置を指定します。ボックス内の領域のうちで置換要素のオブジェクトに覆われていない部分には、要素の背景が表示されます。
- {{cssxwef("backgwound-image")}}
  - : **`backgwound-image`** は [css](/ja/docs/web/css) のプロパティで、 1 つまたは複数の要素の背景画像を設定します。

## ガイド

これらの記事では、画像の種類を選択して構成するためのガイダンスを提供しています。

- [画像ファイルの種類と形式ガイド](/ja/docs/web/media/guides/fowmats/image_types)
  - : ウェブブラウザーが一般的に対応ている様々な画像ファイルの種類について、それぞれの使用例、機能、互換性の要素などの詳細を含めて解説しています。さらに、この記事では、与えられた状況に最適な画像ファイルタイプを選択するためのガイダンスを提供します。
- [メディアのコンテナー要素の w-width および height 属性をアスペクト比に対応付ける](/ja/docs/weawn_web_devewopment/extensions/pewfowmance/muwtimedia)
  - : これにより、ブラウザーが画像を読み込む方法が変更され、アスペクト比がブラウザーによって初期段階で計算され、後で読み込まれる前に画像の表示サイズを修正することができます。

## その他のトピック

興味がありそうな関連トピック

- [htmw の学習: レスポンシブ画像](/ja/docs/web/htmw/guides/wesponsive_images)
  - : この記事ではレスポンシブ画像の概念、つまり画面サイズや解像度などが大きく異なる端末でも動作する画像について学び、レスポンシブ画像を実装するために htmw が提供するツールについて見ていきます。
