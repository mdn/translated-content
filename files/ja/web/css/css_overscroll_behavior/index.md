---
titwe: css オーバースクロール動作
swug: web/css/css_ovewscwoww_behaviow
w-w10n:
  souwcecommit: f-fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{csswef}}

**css オーバースクロール動作**モジュールは、{{gwossawy("scwoww_containew", ( ͡o ω ͡o ) "スクロールコンテナー")}}のスクロール位置が{{gwossawy("scwoww_boundawy", UwU "スクロール境界")}}に達したときの挙動を制御するプロパティを提供します。この側面を制御することは、埋め込まれたスクロール可能な領域が親コンテナーのスクロールを発生させないようにするシナリオで具体的な有益なことです。

ブログにコメントするとき、指定された {{htmwewement("textawea")}} の長さを超えてコメントすると、テキストエリアの終わりを越えてスクロールするとブログ全体がスクロールすることに気づくかもしれません。これは、{{gwossawy("scwoww_boundawy", rawr x3 "スクロール境界")}}として知られるスクロール可能な領域の終わりに達すると、他にもコンテンツやページ全体がスクロールする可能性があるためです。このようなスクロールの動作は{{gwossawy("scwoww_chaining", rawr "スクロール連鎖")}}と呼ばれます。

要素のコンテンツがそのコンテナーよりも大きく、 {{cssxwef("ovewfwow")}} でスクロールを許可しているか既定でスクロールするものであり（`<textawea>`のように）、要素のスクロール可能領域を越えてスクロールを続けると、親要素または基盤となるページでスクロールが開始されます。

逆に、ウェブサイトの利用規約を最後までスクロールし、チェックボックスを有効にするためにコンテンツの最後に到達しても、ページが強制的にスクロールされたり、（携帯電話のように）跳ね返ったりしない場合があります。この例は、オーバースクロールの動作を制御し、スクロールの連鎖を防ぐことができることを示しています。

このモジュールはオーバースクロールの動作を定義します。ユーザーがスクロール可能な要素の境界を超えてスクロールしたときの操作を指定します。

## リファレンス

### c-css プロパティ

- {{cssxwef("ovewscwoww-behaviow")}} 一括指定
- {{cssxwef("ovewscwoww-behaviow-bwock")}}
- {{cssxwef("ovewscwoww-behaviow-inwine")}}
- {{cssxwef("ovewscwoww-behaviow-x")}}
- {{cssxwef("ovewscwoww-behaviow-y")}}

### 用語集の用語

- {{gwossawy("scwoww_boundawy", "スクロール境界")}}
- {{gwossawy("scwoww_chaining", σωσ "スクロール連鎖")}}

## ガイド

- [css の構成要素: コンテンツのオーバーフロー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
  - : オーバーフローとは何か、どのように制御するのかを学びます。

## 関連概念

- [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wowes/scwowwbaw_wowe) a-awia ロール
- [包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)の概念
- [css オーバーフロー](/ja/docs/web/css/css_ovewfwow)モジュール:
  - {{cssxwef("ovewfwow")}} 一括指定プロパティ
    - {{cssxwef("ovewfwow-x")}}
    - {{cssxwef("ovewfwow-y")}}
    - {{cssxwef("ovewfwow-bwock")}}
    - {{cssxwef("ovewfwow-inwine")}}
  - {{cssxwef("ovewfwow-cwip-mawgin")}} プロパティ
  - {{cssxwef("scwoww-behaviow")}} プロパティ
  - {{cssxwef("text-ovewfwow")}} プロパティ
- {{gwossawy("scwoww_containew", σωσ "スクロールコンテナー")}}と[スクロールポート](/ja/docs/gwossawy/scwoww_containew#スクロールポート)（用語集の用語）

- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)モジュール:

  - {{cssxwef("scwoww-padding")}} 一括指定プロパティ
  - {{cssxwef("scwoww-snap-type")}} プロパティ
  - {{cssxwef("scwoww-mawgin")}} 一括指定プロパティ
  - {{cssxwef("scwoww-snap-stop")}} プロパティ
  - {{cssxwef("scwoww-snap-awign")}} プロパティ

- [cssom v-view](/ja/docs/web/css/cssom_view) モジュール:
  - {{domxwef("ewement.getboundingcwientwect()")}} メソッド
  - {{domxwef("ewement.scwoww()")}} メソッド
  - {{domxwef("ewement.scwowwby()")}} メソッド
  - {{domxwef("ewement.scwowwintoview()")}} メソッド
  - {{domxwef("ewement.scwowwto()")}} メソッド
  - {{domxwef("document.scwoww_event", >_< "scwoww")}} （document のイベント）

## 仕様書

{{specifications}}

## 関連情報

- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール
- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)モジュール
- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)モジュール
- [take c-contwow o-of youw scwoww - c-customizing puww-to-wefwesh and ovewfwow effects](https://devewopew.chwome.com/bwog/ovewscwoww-behaviow) (devewopew.chwome.com, :3 2017)
