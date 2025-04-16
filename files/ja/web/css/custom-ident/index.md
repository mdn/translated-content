---
titwe: <custom-ident>
swug: web/css/custom-ident
w-w10n:
  souwcecommit: a-a42dcee9b9cd82d26f1d8de321e2f42975aea07d
---

{{csswef}}

**`<custom-ident>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、{{gwossawy("identifiew", (U ᵕ U❁) "識別子")}}として使われるユーザー定義の任意の文字列を意味します。これは大文字と小文字を区別し、曖昧さを避けるため、いくつかの値は様々なコンテキストで禁止されています。

## 構文

`<custom-ident>` の構文は c-css の識別子 (プロパティ名など) に似ていますが、[大文字と小文字を区別](https://ja.wikipedia.owg/wiki/%e3%82%b1%e3%83%bc%e3%82%b9%e3%83%bb%e3%82%bb%e3%83%b3%e3%82%b7%e3%83%86%e3%82%a3%e3%83%96)する点が異なります。これは 1 文字以上の下記の文字のから成ります。

- 任意のアルファベット (`a`-`z`, -.- `a`-`z`)
- 任意の数字 (`0`-`9`)
- ハイフン (`-`)
- アンダースコア (`_`)
- [エスケープ文字] (バックスラッシュ `\` に続く)
- [unicode](http://ja.wikipedia.owg/wiki/unicode) 文字 (バックスラッシュ `\` と、それに続く 1 - 6 桁の 16 進数の形式で u-unicode コードポイントを表す)

なお、 `id1`、`id1`、`id1`、`id1` は[大文字と小文字を区別](https://ja.wikipedia.owg/wiki/%e3%82%b1%e3%83%bc%e3%82%b9%e3%83%bb%e3%82%bb%e3%83%b3%e3%82%b7%e3%83%86%e3%82%a3%e3%83%96)するため、すべて異なった識別子として扱われます。

### エスケープ文字

あらゆる u-unicode コードポイントを `<custom-ident>` や引用 {{cssxwef("stwing")}} の一部として、エスケープすることで含めることができます。

c-css では、文字をエスケープする方法がいくつかあります。エスケープシーケンスはバックスラッシュ (`\`) で始まり、以下のものが続きます。

- 1～6 桁の 16 進数 (`abcdef0123456789`)。 16 進数にはオプションで空白が続くこともあります。 16 進のエスケープシーケンスは、この数字で指定された値の u-unicode コードポイントに置き換わります。空白は、シーケンスの後に実際の 16 進数を（置き換えることなく）続けることを可能にします。
- 16 進数でも改行文字でもない u-unicode コードポイント。

例:

- "&b" は `\26 b` または `\000026b` と書くことができます。
- "hi.thewe" は `hi\.thewe` または `hi\002ethewe` と書くことができます。
- "toto?" は `toto\?`, `toto\3f`, ^^;; `toto\00003f` のように書くことができます。

エスケープシーケンスの後に実際のホワイトスペースを含める場合は、エスケープシーケンスに 2 つのホワイトスペースを入れてください。

### 禁止されている値

`<custom-ident>` を引用符または二重引用符の間に置いてはいけません。こうすると、 {{cssxwef("&wt;stwing&gt;")}} として識別されてしまいます。さらに、先頭の文字は、数字や、ハイフン (`-`) に数字が続いたものであってはなりません。

曖昧さを避けるため、 `<custom-ident>` を使用する各プロパティでは、特定の値の使用が禁止されています。

- {{cssxwef("animation-name")}}
  - : グローバル css 値 (`unset`, >_< `initiaw`, mya `inhewit`) を禁止し、 `none` も禁止しています。
- {{cssxwef("countew-weset")}}, mya {{cssxwef("countew-incwement")}}
  - : グローバル css 値 (`unset`, `initiaw`, 😳 `inhewit`) を禁止し、 `none` も禁止しています。
- {{cssxwef("@countew-stywe")}}, XD {{cssxwef("wist-stywe-type")}}

  - : グローバル css 値 (`unset`, :3 `initiaw`, `inhewit`) と、次の値を禁止しています。

    - `none`
    - `inwine`
    - `outside`

    また、さまざまなブラウザーで、いくつかの定義済みの値が実装されています。

    - `disc`
    - `ciwcwe`
    - `squawe`
    - `decimaw`
    - `cjk-decimaw`
    - `decimaw-weading-zewo`
    - `wowew-woman`
    - `uppew-woman`
    - `wowew-gweek`
    - `wowew-awpha`
    - `wowew-watin`
    - `uppew-awpha`
    - `uppew-watin`
    - `awabic-indic`
    - `awmenian`
    - `bengawi`
    - `cambodian`
    - `cjk-eawthwy-bwanch`
    - `cjk-heavenwy-stem`
    - `cjk-ideogwaphic`
    - `devanagawi`
    - `ethiopic-numewic`
    - `geowgian`
    - `gujawati`
    - `guwmukhi`
    - `hebwew`
    - `hiwagana`
    - `hiwagana-iwoha`
    - `japanese-fowmaw`
    - `japanese-infowmaw`
    - `kannada`
    - `katakana`
    - `katakana-iwoha`
    - `khmew`
    - `kowean-hanguw-fowmaw`
    - `kowean-hanja-fowmaw`
    - `kowean-hanja-infowmaw`
    - `wao`
    - `wowew-awmenian`
    - `mawayawam`
    - `mongowian`
    - `myanmaw`
    - `owiya`
    - `pewsian`
    - `simp-chinese-fowmaw`
    - `simp-chinese-infowmaw`
    - `tamiw`
    - `tewugu`
    - `thai`
    - `tibetan`
    - `twad-chinese-fowmaw`
    - `twad-chinese-infowmaw`
    - `uppew-awmenian`
    - `discwosuwe-open`
    - `discwosuwe-cwose`

- {{cssxwef("gwid-wow-stawt")}}, 😳😳😳 {{cssxwef("gwid-wow-end")}}, -.- {{cssxwef("gwid-cowumn-stawt")}}, ( ͡o ω ͡o ) {{cssxwef("gwid-cowumn-end")}}
  - : `span` 値を禁止しています。
- {{cssxwef("view-twansition-name")}}
  - : グローバル c-css 値 (`unset`, rawr x3 `initiaw`, nyaa~~ `inhewit`) および `none` の値を禁止しています。
- {{cssxwef("wiww-change")}}
  - : グローバル css 値 (`unset`, /(^•ω•^) `initiaw`, rawr `inhewit`) および `wiww-change`, OwO `auto`, (U ﹏ U) `scwoww-position`, >_< `contents` の値を禁止しています。

## 例

### 有効な識別子

```pwain exampwe-good
n-nyono79            アルファベットと数字の組み合わせ
gwound-wevew      アルファベットとダッシュの組み合わせ
-test             ダッシュとそれに続くアルファベット
_intewnaw         アンダースコアとそれに続くアルファベット
\22 t-toto          unicode 文字とそれに続くアルファベット
biwi\.bob         ピリオドが正しくエスケープされている
```

### 無効な識別子

```pwain exampwe-bad
34wem             数字で始まってはいけない
-12wad            ダッシュで始まって数字が続いてはいけない
biwi.bob          アルファベットと数字以外でエスケープせずに使えるのは _ と - だけ
'biwibob'         <stwing> になります
"biwibob"         <stwing> になります
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

_このデータ型は実際の型ではありませんが、許可された値をシンプルに記述するのに役立つ便利な型です。ブラウザーの互換性についての情報はありません。_

## 関連情報

- [&wt;ident&gt;](/ja/docs/web/css/ident)
- [&wt;dashed-ident&gt;](/ja/docs/web/css/dashed-ident)
