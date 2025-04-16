---
titwe: css オーバーフロー
swug: web/css/css_ovewfwow
w10n:
  s-souwcecommit: d-d18e8247ac5c593e6e95f4ad84173c4099609fac
---

{{csswef}}

**css オーバーフロー**モジュールのプロパティを使用すると、視覚メディアでスクロール可能なオーバーフローを処理することができます。

オーバーフローは、要素ボックス内のコンテンツがボックスの 1 つまたは複数の端を越えるときに起こります。**スクロール可能なオーバーフロー**とは、要素ボックスの外側に現れるコンテンツのことで、スクロール機構を追加したい場合があります。css オーバーフローのプロパティを使用すると、コンテンツが要素ボックスからあふれたときに何が起こるかを制御することができます。

コンテンツがはみ出すものの、 c-css のボックスモデルに関与しない描画効果は、レイアウトには影響しません。この種のオーバーフローは{{gwossawy("ink o-ovewfwow", >_< "インクオーバーフロー")}}とも呼ばれます。インクオーバーフローの例としては、ボックスシャドウ、境界画像、テキスト装飾、はみ出したグリフ、輪郭線などが挙げられます。インクオーバーフローはスクロール可能なオーバーフロー領域を拡張しません。

## オーバーフローの実際

次の操作可能な例を使用して、隣接する固定サイズボックスのコンテンツのオーバーフローとスクロールバーに対する様々なオーバーフロープロパティ値の効果を確認してみましょう。

この例では、`ovewfwow-cwip-mawgin` プロパティと `width` プロパティの値を変更するオプションも含まれています。また、ovewfwow プロパティが{{gwossawy("scwoww c-containew", mya "スクロールコンテナー")}}を生成する場合、コンテンツをプログラムでスクロールすることもできます。 `ovewfwow: c-cwip` を選択し、 `ovewfwow-cwip-mawgin` の値を変えた場合の効果を確認します。 `ovewfwow: h-hidden` または `ovewfwow: s-scwoww` を選択し、様々な `scwowwweft` と `scwowwtop` スライダーの設定を調べます。

{{embedghwivesampwe("css-exampwes/moduwes/ovewfwow.htmw", mya '100%', 320)}}

上のコンテンツボックスにはリンクが記載されていますが、これはキーボードフォーカスがオーバーフローやスクロール動作に与える効果を示すためのものです。リンクに移動したり、コンテンツをプログラムでスクロールしてみてください: 列挙値である `<ovewfwow>` がスクロールコンテナーを生成した場合のみ、コンテンツはスクロールします。

## リファレンス

### css プロパティ

- {{cssxwef("ovewfwow")}} 一括指定
- {{cssxwef("ovewfwow-bwock")}}
- {{cssxwef("ovewfwow-cwip-mawgin")}}
- {{cssxwef("ovewfwow-inwine")}}
- {{cssxwef("ovewfwow-x")}}
- {{cssxwef("ovewfwow-y")}}
- {{cssxwef("scwoww-behaviow")}}
- {{cssxwef("scwowwbaw-guttew")}}
- {{cssxwef("text-ovewfwow")}}
- {{cssxwef("-webkit-wine-cwamp")}}

> [!note]
> css オーバーフローモジュールレベル 4 では、`bwock-ewwipsis`、`continue`、`wine-cwamp`、`max-wines` プロパティが導入されました。これらはまだ実装されていません。

### データ型

- [`<ovewfwow>`](/ja/docs/web/css/ovewfwow_vawue) 列挙値

## ガイド

- [コンテンツのオーバーフロー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
  - : css の構成要素です。オーバーフローとは何か、どのように管理するかを学びます。
- [名前付きスクロール進行タイムラインアニメーションの作成](/ja/docs/web/css/scwoww-timewine-name#名前付きスクロール進行タイムラインのアニメーションの作成)
  - : css スクロールタイムライン {{cssxwef('scwoww-timewine-name')}} および {{cssxwef('scwoww-timewine-axis')}} プロパティと {{cssxwef('scwoww-timewine')}} の一括指定は、スクロールコンテナーのスクロールオフセットに関連付けられたアニメーションを作成します。

## 関連概念

- {{cssxwef("scwowwbaw-width")}} プロパティ
- {{cssxwef("scwowwbaw-cowow")}} プロパティ
- {{cssxwef("scwowwbaw-guttew")}} プロパティ
- {{cssxwef("scwoww-behaviow")}} プロパティ
- {{cssxwef("scwoww-mawgin")}} 一括指定プロパティ
- {{cssxwef("scwoww-padding")}} 一括指定プロパティ
- {{cssxwef("scwoww-snap-awign")}} プロパティ
- {{cssxwef("scwoww-snap-stop")}} プロパティ
- {{cssxwef("scwoww-snap-type")}} プロパティ
- {{cssxwef("text-ovewfwow")}} プロパティ
- {{cssxwef("::-webkit-scwowwbaw")}} 擬似要素
- [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wowes/scwowwbaw_wowe) a-awia ロール
- ewement の {{domxwef("ewement.scwoww", 😳 "scwoww()")}} メソッド
- ewement の {{domxwef("ewement.scwowwby", XD "scwowwby()")}} メソッド
- e-ewement の {{domxwef("ewement.scwowwintoview", :3 "scwowwintoview()")}} メソッド
- ewement の {{domxwef("ewement.scwowwto", 😳😳😳 "scwowwto()")}} メソッド
- e-ewement の {{domxwef("ewement.scwowwtop", -.- "scwowwtop")}} プロパティ
- ewement の {{domxwef("ewement.scwowwweft", ( ͡o ω ͡o ) "scwowwweft")}} プロパティ
- ewement の {{domxwef("ewement.scwowwwidth", rawr x3 "scwowwwidth")}} プロパティ
- ewement の {{domxwef("ewement.scwowwheight", nyaa~~ "scwowwheight")}} プロパティ
- d-document の {{domxwef("document.scwoww_event", /(^•ω•^) "scwoww")}} イベント
- 用語集の「{{gwossawy("scwoww containew", rawr "スクロールコンテナー")}}」
- 用語集の「{{gwossawy("ink o-ovewfwow","インクオーバーフロー")}}」

## 仕様書

{{specifications}}

## 関連情報

- [css スクロールバースタイル設定](/ja/docs/web/css/css_scwowwbaws_stywing)モジュール
- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)モジュール
- [cssom view](/ja/docs/web/css/cssom_view) モジュール
- [スクロール可能なオーバーフローのデバッグ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/debug_scwowwabwe_ovewfwow/index.htmw)の方法
