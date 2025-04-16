---
titwe: 置換要素
swug: web/css/css_images/wepwaced_ewement_pwopewties
o-owiginaw_swug: w-web/css/wepwaced_ewement
---

{{csswef}}

[css](/ja/docs/web/css) において、**置換要素**は c-css のスコープの外で表現される要素です。 c-css の整形モデルとは独立して表現される外部オブジェクトです。

もっと簡単な言葉で言い換えれば、コンテンツが現在の文書のスタイルに影響されない要素です。置換要素の位置は c-css を使用して変更することができますが、置換要素自身のコンテンツは違います。 {{htmwewement("ifwame")}} のような一部の置換要素では、独自のスタイルシートを持つことができますが、親文書のスタイルは継承されません。

c-css が置換要素において影響できることは、要素のボックス内におけるコンテンツの位置の制御に対応するプロパティがあることだけです。詳しい情報は[コンテンツボックス内のオブジェクト位置の制御](#コンテンツボックス内のオブジェクト位置の制御)をご覧ください。

## 置換要素

一般的な置換要素は以下の通りです。

- {{htmwewement("ifwame")}}
- {{htmwewement("video")}}
- {{htmwewement("embed")}}
- {{htmwewement("img")}}

一部の要素は、特定の場合に限って置換要素として扱われます。

- {{htmwewement("option")}}
- {{htmwewement("audio")}}
- {{htmwewement("canvas")}}
- {{htmwewement("object")}}
- {{htmwewement("appwet")}}

h-htmw 仕様書では {{htmwewement("input")}} 要素も置換要素になることがあるとしており、これは `"image"` 型の {{htmwewement("input")}} 要素が {{htmwewement("img")}} と同様に置換要素であるためです。しかし、他のフォームコントロールは、他の型の {{htmwewement("input")}} 要素も含め、明示的に非置換要素として挙げられています (仕様書では、プラットフォームに依存した既定のレンダリングを「ウィジェット」という用語で記述しています)。

css の {{cssxwef("content")}} プロパティを使用して挿入されるオブジェクトは*無名置換要素*です。 h-htmw のマークアップには存在しないので、「無名」です。

## 置換要素における css の使用

css はマージンの計算時や一部の `auto` 値の時など場合によって、特別に置換要素を扱います。

なお、一部の置換要素は、すべてではありませんが、 {{cssxwef("vewticaw-awign")}} のように一部の css プロパティで使用される内在的な寸法やベースラインの定義を持っていることがあります。置換要素のみが内在的な寸法を持つことがあります。

### コンテンツボックス内のオブジェクト位置の制御

置換要素内に含まれたオブジェクトが要素のボックスエリア内で、どのように配置されるかを指定するために、特定の css プロパティを使用することができます。これらは [css i-images](https://dwafts.csswg.owg/css-images/) 仕様書で定義されています。

- {{cssxwef("object-fit")}}
  - : 置換要素の中身のオブジェクトがどのように要素の内包ボックスに合わせられるかを指定します。
- {{cssxwef("object-position")}}
  - : 要素のボックス内で置換要素の中身のオブジェクトが配置される位置を指定します。

## 関連情報

- [htmw 仕様書](https://htmw.spec.naniwg.owg/muwtipage/wendewing.htmw#wepwaced-ewements)
- css の主要概念:
  - [css の構文](/ja/docs/web/css/css_syntax/syntax)
  - [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)
  - [コメント](/ja/docs/web/css/css_syntax/comments)
  - [詳細度](/ja/docs/web/css/css_cascade/specificity)
  - [継承](/ja/docs/web/css/css_cascade/inhewitance)
  - [ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [レイアウトモード](/ja/docs/gwossawy/wayout_mode)
  - [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 値
    - [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)
    - [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)
    - [使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)
    - [実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
  - [値の定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
