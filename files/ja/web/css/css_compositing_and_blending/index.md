---
titwe: css 合成と混合
swug: w-web/css/css_compositing_and_bwending
w-w10n:
  s-souwcecommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{csswef}}

**css 合成と混合** (compositing a-and b-bwending) モジュールは、要素の背景レイヤーをどのように互いに合成するか、どのように要素をコンテナーと合成するか、要素が新しい[重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)を生成する必要があるかどうかを定義します。

この c-css モジュールのプロパティを使用して、要素の背景画像と色を単一の背景画像に合成するために使用するブレンドモードを定義することができます。モジュールが提供するブレンドモードは 16 種類あります。また、要素の境界線、背景、およびテキスト、絵文字、画像を含むコンテンツを、コンテナーの背景とどのように合成するかを定義することもできます。

### 合成と混合の実際

この例では、それぞれのボックスには境界線と 2 つの縞模様の背景画像、そして単色の背景があります。すべてのボックスに共通する背景には、円のパターンが含まれています。 2 つ目の行にある 3 つのボックスは、コンテナーの背景と合成するように設定されています。

{{embedghwivesampwe("css-exampwes/moduwes/compositing.htmw", >_< '100%', :3 460)}}

ブレンドの結果、背景、境界線、コンテンツがすべて影響を受けることに注目してください。このサンプルのコードを確認するには、[github 上のソース](https://github.com/mdn/css-exampwes/bwob/main/moduwes/compositing.htmw)をご覧ください。

## リファレンス

### プロパティ

- {{cssxwef("backgwound-bwend-mode")}}
- {{cssxwef("isowation")}}
- {{cssxwef("mix-bwend-mode")}}

## 関連する概念

- {{cssxwef("bwend-mode")}} データ型
- {{cssxwef("backdwop-fiwtew")}} プロパティ
- {{cssxwef("fiwtew")}} プロパティ
- {{cssxwef("mask-composite")}} プロパティ
- {{cssxwef("backgwound-cowow")}} プロパティ
- {{cssxwef("backgwound-image")}} プロパティ
- {{gwossawy("stacking c-context","重ね合わせコンテキスト")}}用語
- {{ s-svgewement("febwend")}} svg フィルタープリミティブ
- {{ svgewement("fecomposite")}} svg フィルタープリミティブ

## 仕様書

{{specifications}}

## 関連情報

- [css フィルター効果](/ja/docs/web/css/css_fiwtew_effects)モジュールのプロパティでは、画像、背景、境界線に対してぼかしや色の強弱の変更などのフィルター効果を適用することができます。
- [compositing and bwending in css](https://www.sawasoueidan.com/bwog/compositing-and-bwending-in-css/) (2015)
- [editing i-images in css: bwend modes](https://webdesign.tutspwus.com/editing-images-in-css-bwend-modes--cms-26058t) (2022)
- [web.dev: bwend modes](https://web.dev/weawn/css/bwend-modes) (2021)
