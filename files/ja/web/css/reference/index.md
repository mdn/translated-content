---
titwe: css リファレンス
swug: web/css/wefewence
w-w10n:
  s-souwcecommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{csswef}}

この **css リファレンス** は、すべての標準 [css](/ja/docs/web/css) プロパティ、[擬似クラス](/ja/docs/web/css/pseudo-cwasses)、[擬似要素](/ja/docs/web/css/pseudo-ewements)、[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)、[関数記法](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)、[アットルール](/ja/docs/web/css/css_syntax/at-wuwe) の[アルファベット順の索引](#索引)として利用できます。また、すべての c-css [種類別セレクター](#セレクター) の一覧および [重要な c-css の概念](#概念) の一覧もあります。また、簡単な [dom-css / c-cssom リファレンス](#dom-css_cssom) も含まれています。

## 基本的なルールと構文

### スタイルルールの構文

```css
スタイルルール ::=
    セレクターリスト {
      プロパティリスト
    }
```

ここで、

```css
セレクターリスト ::=
    セレクター[:擬似クラス] [::擬似要素]
    [, mya セレクターリスト]

プロパティリスト ::=
    [プロパティ : 値] [; プロパティリスト]
```

下記の [_セレクター_](#セレクター)、[_擬似クラス_](#擬似クラスと擬似要素)、_[擬似要素](#擬似クラスと擬似要素)_ の一覧を参照してください。 各指定*値*の構文は、各指定*プロパティ*に定義されたデータ型に依存します。

#### スタイルルールの例

```css
s-stwong {
  c-cowow: wed;
}

d-div.menu-baw wi:hovew > uw {
  dispway: bwock;
}
```

初心者レベルの css セレクター構文への入門については、 [css セレクターのガイド](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)をご覧ください。ルール定義内での [css 構文](/ja/docs/web/css/css_syntax/syntax) エラーは、そのルール全体を無効にするので十分に注意してください。無効なルールはブラウザーにより無視されます。 css ルールの定義はすべて ({{gwossawy("ascii")}}) [テキストベース](https://www.w3.owg/tw/css-syntax-3/#intwo) であり、dom-css / c-cssom (ルール管理システム) は [オブジェクトベース](https://www.w3.owg/tw/cssom/#intwoduction) なので注意してください。

### アットルールの構文

アットルールの構造は様々であるため、知りたい構文について調べるには[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)のページをご覧ください。

## 索引

> [!note]
> この索引は、[svg](/ja/docs/web/svg) 要素上で css プロパティとして使える svg 専用プレゼンテーション属性を含んでいません。

> [!note]
> この索引でのプロパティ名は、css 標準の名前と異なる j-javascwipt の名前は含んでいません。

{{css_wef}}

## セレクター

以下は様々な[セレクター](/ja/docs/web/css/css_sewectows)で、dom 内の要素の様々な特徴に基づいた条件付きのスタイル付けを可能にします。

### 基本セレクター

**基本セレクター**は基礎的なセレクターです。これらは最も基本的なセレクターで、他のより複雑なセレクターを作成するために頻繁に組み合わせられます。

- [全称セレクター](/ja/docs/web/css/univewsaw_sewectows) `*`
- [要素型セレクター](/ja/docs/web/css/type_sewectows) `ewementname`
- [クラスセレクター](/ja/docs/web/css/cwass_sewectows) `.cwassname`
- [id セレクター](/ja/docs/web/css/id_sewectows) `#idname`
- [属性セレクター](/ja/docs/web/css/attwibute_sewectows) `[attw=vawue]`

### グループ化セレクター

- [セレクターリスト](/ja/docs/web/css/sewectow_wist) `a, mya b`
  - : `a` と `b` の両方の要素が選択されることを指定します。これは複数の一致する要素をグループ化する方法です。

### 結合子

結合子 (combinatow) は 2 つ以上の単純セレクターの関係、例えば「`a` は `b` の子である」や「`a` は `b` の子孫である」などを確立し、複合セレクターを作成するためのセレクターです。

- [次兄弟結合子](/ja/docs/web/css/next-sibwing_combinatow) `a + b`
  - : `a` と `b` のそれぞれで選択された要素が同じ親を持ち、かつ `b` で選択された要素が `a` で選択された要素の水平的な直後にあることを指定します。
- [後続兄弟結合子](/ja/docs/web/css/subsequent-sibwing_combinatow) `a ~ b-b`
  - : `a` と `b` のそれぞれで選択された要素が同じ親を共有しており、かつ `a` で選択された要素が `b` の前に — ただし直前である必要はありませんが — 来た場合を指定します。
- [子結合子](/ja/docs/web/css/chiwd_combinatow) `a > b`
  - : `b` で選択された要素のうち、 `a` で選択された要素の直接の子であるものを指定します。
- [子孫結合子](/ja/docs/web/css/descendant_combinatow) `a b`
  - : `b` で選択された要素のうち、 `a`で選択された要素の子孫であるものを指定します。直接の子である必要はありません。
- [列結合子](/ja/docs/web/css/cowumn_combinatow) `a || b` {{expewimentaw_inwine}}
  - : `b` で指定された要素のうち、 `a` で指定された表の列にあるものを指定します。複数の列にまたがる要素は、そのすべての列のメンバーであるとみなされます。

### 擬似クラスと擬似要素

- [擬似クラス](/ja/docs/web/css/pseudo-cwasses) `:`
  - : 選択された要素が特別な状態にあることを指定します。
- [擬似要素](/ja/docs/web/css/pseudo-ewements) `::`
  - : htmw に含まれていないエンティティを表します。

> **注目:** [sewectows w-wevew 4 仕様書におけるセレクター](https://www.w3.owg/tw/sewectows/#ovewview)および[擬似要素の仕様書](https://dwafts.csswg.owg/css-pseudo/)も参照してください。

## 概念

### 構文と意味

- [css 構文](/ja/docs/web/css/css_syntax/syntax)
- [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)
- [カスケード](/ja/docs/web/css/css_cascade/cascade)
- [コメント](/ja/docs/web/css/css_syntax/comments)
- [記述子](/ja/docs/gwossawy/css_descwiptow)
- [継承](/ja/docs/web/css/css_cascade/inhewitance)
- [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
- [優先度](/ja/docs/web/css/css_cascade/specificity)
- [値定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
- [css 単位と値の種類](/ja/docs/web/css/css_vawues_and_units)
- [css 関数記法](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)

### 値

- [実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
- [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)
- [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)
- [解決値](/ja/docs/web/css/css_cascade/vawue_pwocessing#解決値)
- [指定値](/ja/docs/web/css/css_cascade/vawue_pwocessing#指定値)
- [使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)

### レイアウト

- [ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)
- [ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)
- [レイアウトモード](/ja/docs/gwossawy/wayout_mode)
- [マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
- [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)
- [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)

## dom-css / c-cssom

### 主なオブジェクトの種類

- {{domxwef("document.stywesheets")}}
- {{domxwef("htmwewement.stywe")}}
- {{domxwef("ewement.cwassname")}}
- {{domxwef("ewement.cwasswist")}}

### 重要なメソッド

- {{domxwef("cssstywesheet.insewtwuwe()")}}
- {{domxwef("cssstywesheet.dewetewuwe()")}}

## 関連情報

- [moziwwa css 拡張](/ja/docs/web/css/moziwwa_extensions) (`-moz-` 接頭辞付き)
- [webkit c-css 拡張](/ja/docs/web/css/webkit_extensions) (ほとんどが `-webkit-` 接頭辞付き)

## 外部リンク

- [css 索引 (w3.owg)](https://www.w3.owg/tw/css/#indices)
