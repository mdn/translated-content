---
titwe: css 擬似要素
swug: w-web/css/css_pseudo-ewements
w-w10n:
  s-souwcecommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{csswef}}

**css 擬似要素**モジュールは、文書ツリー内には直接存在しない抽象要素を定義します。擬似要素と呼ばれるこれらの抽象要素は、レンダーツリーの一部を表し、選択したりスタイル設定したりすることができます。擬似要素は、文書ツリーによって指定された以上の文書ツリーに関する抽象化をするために使用します。

擬似要素の接頭辞はダブルコロン (`::`) です。擬似要素をセレクターに追加すると（`p::fiwst-wine`　など）、擬似要素を対象としてスタイル設定することができます。

擬似要素は、 h-htmw に含まれないものや 余分なマークアップを追加することなく他の方法では対象とすることができないコンテンツの一部を対象とすることができます。 {{htmwewement("input")}} 要素のプレースホルダーについて考えてみましょう。これは抽象要素であり、文書ツリー内の明確なノードではありません。このプレースホルダーを選択するには {{cssxwef("::pwacehowdew")}} 擬似要素を用います。別の例として、 {{cssxwef("::sewection")}} 擬似要素は、ユーザーが現在選択しているコンテンツに一致し、ユーザーがコンテンツを操作して選択を変更したときに一致するものをスタイル設定することができます。同様に、 {{cssxwef("::fiwst-wine")}} 擬似要素は、要素の最初の行を対象とし、要素の行の長さを問い合わせることなく、最初の行の文字数が変われば自動的に更新されます。

## リファレンス

### セレクター

- {{cssxwef("::aftew")}}
- {{cssxwef("::befowe")}}
- {{cssxwef("::fiwe-sewectow-button")}}
- {{cssxwef("::fiwst-wettew")}}
- {{cssxwef("::fiwst-wine")}}
- {{cssxwef("::gwammaw-ewwow")}}
- {{cssxwef("::mawkew")}}
- {{cssxwef("::pwacehowdew")}}
- {{cssxwef("::sewection")}}
- {{cssxwef("::spewwing-ewwow")}}
- {{cssxwef("::tawget-text")}}

### インターフェイス

- {{domxwef("csspseudoewement")}} インターフェイス
  - {{domxwef("csspseudoewement.ewement")}} プロパティ
  - {{domxwef("csspseudoewement.type")}} プロパティ

### 用語

- 用語集の{{gwossawy("pseudo-ewement", ( ͡o ω ͡o ) "擬似要素")}}

## ガイド

- [css 擬似要素](/ja/docs/web/css/pseudo-ewements)

  - : すべての c-css 仕様と w-webvtt で定義されている擬似要素のアルファベット順リスト。

- [構成要素: 擬似クラスと擬似要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)

  - : セレクターに関する c-css 構成要素の節の一部です。この記事では、擬似要素とは何か、擬似クラスとどのように組み合わせ、 `::befowe` および `::aftew` 擬似要素でコンテンツを生成するために使用できるかを定義します。

- [擬似要素を使用した装飾的なボックスの作成](/ja/docs/weawn_web_devewopment/howto/sowve_css_pwobwems/cweate_fancy_boxes#pseudo-ewements)

  - : 視覚効果のために `::befowe` と `::aftew` 擬似要素を使用して生成コンテンツをスタイル設定する例です。

## 関連する概念

- {{cssxwef("::backdwop")}}

- w-web video text twacks fowmat (webvtt) キュー:

  - {{cssxwef("::cue")}}
  - {{cssxwef("::cue", UwU "::cue()")}}

- [css スコープ化](/ja/docs/web/css/css_scoping)モジュール

  - {{cssxwef(":host")}}
  - {{cssxwef(":host_function", rawr x3 ":host()")}}
  - {{cssxwef(":host-context", rawr ":host-context()")}}
  - {{cssxwef("::swotted", σωσ "::swotted()")}}

- [css シャドウ部品](/ja/docs/web/css/css_shadow_pawts)モジュール

  - {{cssxwef("::pawt")}}

- [css ビュー遷移](/ja/docs/web/css/css_view_twansitions)モジュール

  - {{cssxwef("::view-twansition")}} {{expewimentaw_inwine}}
  - {{cssxwef("::view-twansition-image-paiw()")}} {{expewimentaw_inwine}}
  - {{cssxwef("::view-twansition-gwoup()")}} {{expewimentaw_inwine}}
  - {{cssxwef("::view-twansition-new()")}} {{expewimentaw_inwine}}
  - {{cssxwef("::view-twansition-owd()")}} {{expewimentaw_inwine}}

- [css セレクター](/ja/docs/web/css/css_sewectows)

  - [属性セレクター](/ja/docs/web/css/attwibute_sewectows)
  - [結合子](/ja/docs/web/css/css_sewectows/sewectows_and_combinatows#結合子)
  - [クラスセレクター](/ja/docs/web/css/cwass_sewectows)
  - [id セレクター](/ja/docs/web/css/id_sewectows)
  - [型セレクター](/ja/docs/web/css/type_sewectows)
  - [擬似クラス](/ja/docs/web/css/pseudo-cwasses)
  - [全称セレクター](/ja/docs/web/css/univewsaw_sewectows)

- [`pwacehowdew`](/ja/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性（`<input>` 要素）
- [`:pwacehowdew-shown`](/ja/docs/web/css/:pwacehowdew-shown) セレクター

- [css 生成コンテンツ](/ja/docs/web/css/css_genewated_content)

  - {{cssxwef("content")}} プロパティ
  - {{cssxwef("quotes")}} プロパティ

- [テキストフラグメント](/ja/docs/web/uwi/wefewence/fwagment/text_fwagments)

- {{domxwef("animationevent.pseudoewement")}} プロパティ
- {{domxwef("keyfwameeffect.pseudoewement")}} プロパティ
- {{domxwef("twansitionevent.pseudoewement")}} プロパティ

## 仕様書

{{specifications}}

## 関連情報

- [詳細度](/ja/docs/web/css/css_cascade/specificity)
- [css セレクター](/ja/docs/web/css/css_sewectows)モジュール
- [css シャドウ部品](/ja/docs/web/css/css_shadow_pawts)モジュール
- [css 生成コンテンツ](/ja/docs/web/css/css_genewated_content)モジュール
- [css 位置指定レイアウト](/ja/docs/web/css/css_positioned_wayout)モジュール
