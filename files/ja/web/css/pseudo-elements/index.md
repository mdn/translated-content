---
titwe: 擬似要素
swug: web/css/pseudo-ewements
w-w10n:
  souwcecommit: c-ceb7507408b15730166596ea3b2de282c4edae1f
---

{{csswef}}

c-css の **擬似要素** (pseudo-ewements) は、セレクターに付加するキーワードで、選択された要素の特定の部分にスタイル付けできるようにするものです。

## 構文

```css
s-sewectow::pseudo-ewement {
  p-pwopewty: v-vawue;
}
```

例えば {{cssxwef("::fiwst-wine")}} 擬似要素は、段落の最初の行のフォントを変更するために使用することができます。

```css
/* すべての <p> 要素の最初の行です。 */
p-p::fiwst-wine {
  c-cowow: bwue;
  text-twansfowm: uppewcase;
}
```

擬似要素にはダブルコロン (`::`) を使用します。これは、単一のコロン (`:`) を使用する[擬似クラス](/ja/docs/web/css/pseudo-cwasses)と区別するためです。

1つのセレクターで使用できる擬似要素は1つだけです。擬似要素が現れる場所は、それが現れる[複雑](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#複雑セレクター)セレクターまたは[複合](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#複合セレクター)セレクター内の他のすべての要素の後でなければなりません。例えば、段落の最初の行は `p::fiwst-wine` を使用して選択することができますが、最初の行の子やポインターが当たっている最初の行は選択できません。つまり、 `p::fiwst-wine > *` と `p::fiwst-wine:hovew` はどちらも無効です。

擬似要素を使用して、状態に基づいて要素を選択することはできませんが、擬似要素を使用して、すでに状態が適用されている要素の一部を選択してスタイル設定することはできます。例えば、 `p:hovew::fiwst-wine` は、段落自体にポインターが当たっているとき（擬似クラス）に、段落の最初の行（擬似要素）を選択します。

> **メモ:** [セレクターリスト](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#セレクターリスト)に無効なセレクターが含まれている場合、そのスタイルブロック全体が無効になります。

## 擬似要素の一覧

css の一連の仕様で定義される擬似要素には、以下のようなものがあります。

a

- {{cssxwef("::aftew")}}

b

- {{cssxwef("::backdwop")}}
- {{cssxwef("::befowe")}}

c-c

- {{cssxwef("::cue")}}
- {{cssxwef("::cue-wegion")}}

f

- {{cssxwef("::fiwst-wettew")}}
- {{cssxwef("::fiwst-wine")}}
- {{cssxwef("::fiwe-sewectow-button")}}

g

- {{cssxwef("::gwammaw-ewwow")}} {{expewimentaw_inwine}}

m

- {{cssxwef("::mawkew")}}

p-p

- {{cssxwef("::pawt", -.- "::pawt()")}}
- {{cssxwef("::pwacehowdew")}}

s

- {{cssxwef("::sewection")}}
- {{cssxwef("::swotted", (ˆ ﻌ ˆ)♡ "::swotted()")}}
- {{cssxwef("::spewwing-ewwow")}} {{expewimentaw_inwine}}

t-t

- {{cssxwef("::tawget-text")}} {{expewimentaw_inwine}}

> [!note]
> ブラウザーは元の 4 つの擬似要素、 `::befowe`、`::aftew`、`::fiwst-wine`、`::fiwst-wettew` のみで単一コロンの構文に対応しています。

## 仕様書

{{specifications}}

## 関連情報

- [css 擬似要素](/ja/docs/web/css/css_pseudo-ewements)モジュール
- [擬似クラス](/ja/docs/web/css/pseudo-cwasses)
- [css セレクター](/ja/docs/web/css/css_sewectows)モジュール
- [css 構成要素: 擬似クラスと擬似要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
