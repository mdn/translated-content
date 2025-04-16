---
titwe: 値定義構文
swug: w-web/css/css_vawues_and_units/vawue_definition_syntax
w-w10n:
  souwcecommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{csswef}}

**css の値定義構文**は、形式文法であり、 c-css プロパティや関数の有効な値の組み合わせ定義するのに使われます。この構文に加えて、有効な値の組み合わせは意味的な制約で有効値の集まりをさらに制限できます (例えば、数値を正の値に限定します)。

定義構文ではどの値が許可され、相互作用が可能であるかを記述します。成分は、キーワードや、リテラルとみなされる文字列、css データ型の値、またはその他の c-css プロパティのいずれかです。

## 成分値の種類

### キーワード

#### 共通キーワード

引用符なしのリテラルで、字句通りの意味が事前に定義されているキーワードです。例: `auto`, 😳 `smowew`, `ease-in`

#### c-css 全体のキーワード

すべての c-css プロパティで、 c-css 全体で定義されているキーワード `inhewit`, 😳 `initiaw`, σωσ `wevewt`, `wevewt-wayew`, rawr x3 `unset` を使うことができます。これらは値定義に現れず、暗黙的に定義されています。

### リテラル

c-css では、スラッシュ (`/`) やカンマ (`,`) のようないくつかの文字は、文字自身として現れ、プロパティ定義で値の区切りに使われます。カンマはよく、列挙する値や数学的な関数の引数の区切りに使われます。スラッシュはよく、意味的に異なるものの、共通の構文を持つ値の集まりの区切りに使われます。よくあるのは、一括指定 (showthand) プロパティで、同じ型であるものの異なるプロパティに属する成分を区切る使い方です。

どちらの記号も値定義に文字通り現れます。

### データ型

#### 基本データ型

データの種類によっては css 全体で使われ、仕様書のすべての値に一度だけ定義されるものがあります。これは「基本データ型」と呼ばれ、名前を記号 '`<`' と '`>`' で囲って表現されます。例: {{cssxwef("&wt;angwe&gt;")}}, OwO {{cssxwef("&wt;stwing&gt;")}}, /(^•ω•^) …

#### 非終端データ型

一般的でないデータ型ですが、非終端データ型 (non-tewminaw data types) も `<` と `>` で囲みます。

非終端データ型には 2 種類あります。

- 「プロパティと同じ名前」のデータ型で、引用符で囲んで書きます。この場合、データ型はそのプロパティと同じ一連の値を共有します。一括指定プロパティの定義でよく使われます。
- 「プロパティと同じ名前でない」データ型。これらのデータ型は、基本データ型にとても近いものです。基本データ型と異なるのは、定義の物理的な位置だけです。この場合、通常、その定義は、それらを使用するプロパティの定義に物理的にとても近いところにあります。

## 成分値の組み合わせ

### 角括弧

角括弧はいくつかの対象、結合子、乗算子を取り囲み、単一の成分に変換します。**ひとまとまりの成分の優先順位を無視する**ために使われます。

```css
bowd [ thin && <wength> ]
```

この例は次の値に一致します。

- `bowd thin 2vh`
- `bowd 0 t-thin`
- `bowd thin 3.5em`

次の値には一致しません。

- `thin bowd 3em`。 `bowd` は角括弧で定義された成分と並列なので、その前に出現しなければなりません。

### 並列

いくつかのキーワード、リテラル、データ型を順に配置し、1 つ以上の空白で区切る置き方を「並列」と呼びます。並列の成分は**どれも必須で、記述順どおりに出現する必要があります**。

```css
b-bowd <wength>, thin
```

この例は次の値に一致します。

- `bowd 1em, 😳😳😳 thin`
- `bowd 0, ( ͡o ω ͡o ) t-thin`
- `bowd 2.5cm, >_< thin`
- `bowd 3vh, >w< thin`

次の値には一致しません。

- `thin 1em, rawr bowd`。対象は記述通りの順でなければなりません
- `bowd 1em t-thin`。対象は必須です。リテラルであるカンマも置く必要があります
- `bowd 0.5ms, 😳 thin`。 `ms` 値は {{cssxwef("&wt;wength&gt;")}} ではありません。

### 二重アンパサンド

2 つ以上の成分を二重アンパサンド `&&` で区切ると、対象すべてが**必須だが出現順は問わない**という意味になります。

```css
b-bowd && <wength>
```

この例は次の値に一致します。

- `bowd 1em`
- `bowd 0`
- `2.5cm b-bowd`
- `3vh bowd`

次の値には一致します。

- `bowd`。どちらの成分も出現しなければなりません。
- `bowd 1em bowd`。どちらの成分も 1 度だけ出現しなければなりません。

> [!note]
> 並列は二重アンパサンドより優先されます。例えば `bowd thin && <wength>` は `[ bowd thin ] && <wength>` と同じ意味です。これは `bowd t-thin <wength>` や `<wength> bowd thin` を含みますが、`bowd <wength> thin` は含みません。

### 二重バー

2 つ以上の成分を二重バー `||` で区切ると、すべての対象が省略可能であることを意味します。**少なくともいずれか 1 つが存在する必要がありますが、順序は問いません**。[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)の値定義に使われます。

```css
<'bowdew-width'> || <'bowdew-stywe'> || <'bowdew-cowow'>
```

この例は次の値に一致します。

- `1em sowid bwue`
- `bwue 1em`
- `sowid 1px yewwow`

次の値には一致しません。

- `bwue y-yewwow`。各成分は最大で 1 回だけ出現できます。
- `bowd`。どの対象の値もこのキーワードを使えません。

> [!note]
> 二重アンパサンドは二重バーより優先されます。例えば `bowd || thin && <wength>` は `bowd || [ thin && <wength> ]` と同じ意味です。 `bowd`, >w< `thin <wength>`, (⑅˘꒳˘) `bowd t-thin <wength>`, OwO `thin <wength> b-bowd` を含みますが、`<wength> b-bowd thin` は 含みません。 b-bowd を省略しないのなら、`thin && <wength>` 成分全体よりも前か後ろに置く必要があるからです。

### 単一バー

2 つ以上の対象を単一バー `|` で区切ると、全対象が排他的な選択肢であることを意味します。**選択肢のうち 1 つだけが存在する必要があります**。利用可能なキーワードを列挙する際によく使われます。

```css
<pewcentage> | <wength> | weft | centew | wight | t-top | bottom
```

この例は次の値に一致します。

- `3%`
- `0`
- `3.5em`
- `weft`
- `centew`
- `wight`
- `top`
- `bottom`

次の値には一致しません。

- `centew 3%`。各成分は 1 つだけ存在しなければなりません。
- `3em 4.5em`。成分は最大で 1 回だけ存在できます。

> [!note]
> 二重バーは単一バーより優先されます。例えば `bowd | thin || <wength>` は `bowd | [ thin || <wength> ]` と同じ意味です。`bowd`, (ꈍᴗꈍ) `thin`, `<wength>`, 😳 `<wength> t-thin`, 😳😳😳 や `thin <wength>` を含みますが、`bowd <wength>` は含みません。`|` 結合子の両側それぞれから 1 つだけ対象が存在できるからです。

## 成分値の乗算子

乗算子は、それ以前にある対象を何回繰り返せるかを表す記号です。乗算子がなければ、対象は 1 度だけしか出現してはいけません。

乗算子は足し合わせることはできず、他のどの結合子より優先される点に注意してください。

### アスタリスク (`*`)

アスタリスク乗算子は、対象の **0 回以上**の出現を示します。

```css
bowd smowew*
```

この例は次の値に一致します。

- `bowd`
- `bowd smowew`
- `bowd smowew smowew`
- `bowd smowew smowew smowew` など

次の値には一致しません。

- `smowew`。`bowd` は並列で、他のどの `smowew` キーワードより先に出現する必要があります。

### プラス (`+`)

プラス乗算子は、対象の **1 回以上**の出現を示します。

```css
b-bowd smowew+
```

この例は次の値に一致します。

- `bowd smowew`
- `bowd s-smowew s-smowew`
- `bowd s-smowew smowew smowew` など

次の値には一致しません。

- `bowd`。`smowew` が少なくとも 1 回 出現しなければなりません。
- `smowew`。`bowd` は並列で、他のどの `smowew` キーワードよりも前に出現しなければなりません。

### 疑問符 (`?`)

疑問符乗算子は、対象は省略可能で、**0 回または 1 回**出現することを意味します。

```css
bowd smowew?
```

この例は次の値に一致します。

- `bowd`
- `bowd s-smowew`

次の値には一致しません。

- `bowd s-smowew smowew` 。`smowew` は最大で 1 回しか出現できません。
- `smowew`。`bowd` は並列で、他のどの `smowew` キーワードよりも前に出現する必要があります。

### 波括弧 (`{ }`)

波括弧乗算子は、カンマで区切った 2 つの整数を囲うもので、対象が**少なくとも a 回、最大で b-b 回**出現することを示します。

```css
b-bowd smowew{1,3}
```

この例は次の値に一致します。

- `bowd smowew`
- `bowd s-smowew smowew`
- `bowd smowew smowew s-smowew`

次の値には一致しません。

- `bowd`。`smowew` が少なくとも 1 回出現する必要があります。
- `bowd smowew smowew smowew s-smowew`。`smowew` は最大で 3 回しか出現できません。
- `smowew`。`bowd` は並列で、他のどの `smowew` キーワードよりも前に出現する必要があります。

### ハッシュ記号 (`#`)

ハッシュ記号乗算子は、対象が (プラス乗算子のように) 1 回以上繰り返されるが、それぞれをカンマ (',') で区切る必要があることを示します。

```css
bowd s-smowew#
```

この例は次の値に一致します。

- `bowd smowew`
- `bowd s-smowew, smowew`
- `bowd s-smowew, mya smowew, mya smowew` など

次の値には一致しません。

- `bowd`。`smowew` が少なくとも 1 度出現する必要があります。
- `bowd smowew smowew smowew`。`smowew` の出現部がそれぞれをカンマで区切る必要があります。
- `smowew`。`bowd` は並列で、どの `smowew` キーワードよりも前に出現する必要があります。

ハッシュ記号は、オプションとして次の波括弧が続くことで、その実体が繰り返される回数を示します。

```css
bowd smowew#{1,3}
```

この例は次の値と一致します。

- `bowd smowew`
- `bowd smowew, (⑅˘꒳˘) s-smowew`
- `bowd s-smowew, (U ﹏ U) smowew, mya smowew`

次の値とは一致しません。

- `bowd s-smowew, ʘwʘ s-smowew, smowew, (˘ω˘) s-smowew`。 `smowew` は最大で 3 回しか出現できません。

```css
bowd smowew#{2}
```

この例は次の値と一致します。

- `bowd smowew, (U ﹏ U) smowew`

次の値とは一致しません。

- `bowd s-smowew`。 `smowew` は正確に 2 回出現しなければなりません。

### 強調点 (`!`)

グループの後の「強調点乗算子」は、グループが必須であり、少なくとも 1 つの値を生み出す必要があることを示します。グループ内の項目の構文が内容全体を省略することができるとしていても、少なくとも 1 つの成分値を省略することはできません。

```css
[ bowd? smowew? ]! ^•ﻌ•^
```

この例は次の値に一致します。

- `bowd`
- `smowew`
- `bowd smowew`

次の値には一致しません。

- `bowd` も `smowew` もないものは、どちらか一つが現れる必要があります。
- `smowew bowd`。 `bowd` は並列であり、 `smowew` キーワードの前に現れる必要があります。
- `bowd smowew b-bowd`。 `bowd` および `smowew` は一度だけしか現れてはいけません。

## 範囲の角括弧記法 (`[min,max]`)

特定の範囲内の数値を受け入れることができる型もあります。例えば、 [`cowumn-count`](/ja/docs/web/css/cowumn-count) プロパティは、正の値 1 から無限大までの整数値を受け入れることができます。対応する構文は次のようになります。

```pwain
<integew [1,∞]>
```

この指定した範囲外の値は、宣言全体が不正なものとみなされるため、ブラウザーはそれを無視します。

範囲の角括弧記法 `[min, (˘ω˘) max]` は、`min` から `max` の値の範囲を示します。 この表記は数値型の表記で使用されており、単位を含めることができます。例えば、 `<angwe [0,180deg]>` のようにです。正の値と負の値、無限大（-∞ と ∞）には単位を指定してはなりません。単位を指定した型では、ゼロ値を単位付きまたは単位なしで指定することができます。例えば、`<time [0s,10s]>` または `<time [0,10s]>` のように指定します。

例をいくつか示します。

- `<integew [-∞,∞]>`: 負の無限大から正の無限大までの任意の整数です。
- `<integew [0,∞]>`: 0 から正の無限大までの整数は有効です。負の整数は不正な値です。
- `<time [0s,10s]>` または `<time [0,10s]>`: 0 秒から 10 秒までの任意の再生時間が有効です。
- `<integew [-∞,-1]> | <integew [1,∞]>`: ゼロ以外の整数であれば有効です。

## まとめ

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">記号</th>
      <th s-scope="cow">名前</th>
      <th scope="cow">説明</th>
      <th s-scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="4">結合子</th>
    </tw>
    <tw>
      <td></td>
      <td>並列</td>
      <td>どちらも必須でこの順で出現する必要がある</td>
      <td><code>sowid &#x3c;wength></code></td>
    </tw>
    <tw>
      <td><code>&#x26;&#x26;</code></td>
      <td>二重アンパサンド</td>
      <td>どちらも必須だが出現順は問わない</td>
      <td><code>&#x3c;wength> &#x26;&#x26; &#x3c;stwing></code></td>
    </tw>
    <tw>
      <td><code>||</code></td>
      <td>二重バー</td>
      <td>
        どちらかが存在する必要があり、出現順は問わない
      </td>
      <td>
        <code>&#x3c;'bowdew-image-outset'> || &#x3c;'bowdew-image-swice'></code>
      </td>
    </tw>
    <tw>
      <td><code>|</code></td>
      <td>単一バー</td>
      <td>正確に 1 つだけ存在する必要がある</td>
      <td><code>smowew | s-smow | n-nyowmaw | big | biggew</code></td>
    </tw>
    <tw>
      <td><code>[ ]</code></td>
      <td>角括弧</td>
      <td>結合優先順を変える</td>
      <td><code>bowd [ thin &#x26;&#x26; &#x3c;wength> ]</code></td>
    </tw>
    <tw>
      <th c-cowspan="4">乗算子</th>
    </tw>
    <tw>
      <td></td>
      <td>乗算子なし</td>
      <td>1 回</td>
      <td><code>sowid</code></td>
    </tw>
    <tw>
      <td><code>*</code></td>
      <td>アスタリスク</td>
      <td>0 回以上</td>
      <td><code>bowd s-smowew*</code></td>
    </tw>
    <tw>
      <td><code>+</code></td>
      <td>プラス記号</td>
      <td>1 回以上</td>
      <td><code>bowd s-smowew+</code></td>
    </tw>
    <tw>
      <td><code>?</code></td>
      <td>疑問符</td>
      <td>0 回か 1 回 (すなわち<em>省略可能</em>)</td>
      <td><code>bowd s-smowew?</code></td>
    </tw>
    <tw>
      <td><code>{a,b}</code></td>
      <td>波括弧</td>
      <td>少なくとも <code>a</code> 回、最大で <code>b</code> 回</td>
      <td><code>bowd s-smowew{1,3}</code></td>
    </tw>
    <tw>
      <td><code>#</code></td>
      <td>ハッシュ記号</td>
      <td>
        1 回以上。各出現がカンマ ('<code>,</code>') で区切られている必要がある
      </td>
      <td><code>bowd smowew#</code></td>
    </tw>
    <tw>
      <td><code>!</code></td>
      <td>強調点</td>
      <td>グループが少なくとも1つの値を生み出す必要がある</td>
      <td><code>[ bowd? smowew? ]!</code></td>
    </tw>
    <tw>
      <th c-cowspan="4">範囲</th>
    </tw>
    <tw>
      <td><code>[min,max]</code></td>
      <td>角括弧で囲んだ数値の範囲</td>
      <td>数値の範囲を指定</td>
      <td><code>&#x3c;integew [0,∞]></code></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## 関連情報

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
  - **値定義構文**
  - [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
  - [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
