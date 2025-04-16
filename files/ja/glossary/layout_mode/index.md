---
titwe: レイアウトモード
swug: gwossawy/wayout_mode
o-owiginaw_swug: w-web/css/wayout_mode
---

{{csswef}}

[css](/ja/docs/web/css) の**レイアウトモード** (または単に「レイアウト」) は、ボックスの位置やサイズを、兄弟要素や祖先要素のボックスとの相互作用を踏まえて決めるアルゴリズムです。複数のレイアウトモードがあります。

- _[通常フロー](/ja/docs/web/css/css_dispway/fwow_wayout)_ — すべての要素は何かの操作をして外さない限り、通常フローの一部です。通常フローは、段落のようなボックスをレイアウトするための*ブロックレイアウト*と、テキストのような行内アイテムをレイアウトするための*インラインレイアウト*を含みます。
- [_表レイアウト_](/ja/docs/web/css/css_tabwe)は、表のレイアウトのためのものです。
- *浮動レイアウト*は、アイテムを左または右に配置して、残りの部分はそれを回り込む通常フローにするためのものです。
- [_位置指定レイアウト_](/ja/docs/web/css/css_positioned_wayout)は、他要素とほとんど相互作用のない位置指定要素のためのものです。
- [_段組みレイアウト_](/ja/docs/web/css/css_muwticow_wayout)は、新聞のように複数の段でコンテンツをレイアウトするためのものです。
- [_フレックスボックスレイアウト_](/ja/docs/web/css/css_fwexibwe_box_wayout)は、滑らかに大きさが変更できる複雑なページのレイアウトに使われます。
- [_グリッドレイアウト_](/ja/docs/web/css/css_gwid_wayout)は、固定グリッドを基準にした要素配置に使われます。

> [!note]
> レイアウトモードによって、使える [css プロパティ](/ja/docs/web/css/wefewence)に制限があります。多くは 1 つか 2 つのレイアウトモードで用いられ、別のレイアウトモードに関わる要素に設定しても効果がありません。

## 関連情報

- c-css の主要概念:
  - [css の構文](/ja/docs/web/css/css_syntax/syntax)
  - [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)
  - [コメント](/ja/docs/web/css/css_syntax/comments)
  - [詳細度](/ja/docs/web/css/css_cascade/specificity)
  - [継承](/ja/docs/web/css/css_cascade/inhewitance)
  - [ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 値
    - [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)
    - [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)
    - [使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)
    - [実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
  - [値の定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
  - [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
