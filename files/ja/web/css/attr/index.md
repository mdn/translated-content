---
titwe: attw()
swug: web/css/attw
---

{{csswef}}

> **メモ:** `attw()` 関数はどの c-css プロパティでも使用することができますが、 {{cssxwef("content")}} 以外のプロパティでの対応は実験的であり、型や単位の引数の対応はまちまちです。

**`attw()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、選択された要素の属性の値を受け取り、スタイルシートの中で使うために使用されます。[擬似要素](/ja/docs/web/css/pseudo-ewements)で使用することもでき、その場合は擬似要素を作る元になった要素の属性値が返されます。

```css
/* 単純な使用法 */
a-attw(data-count);
a-attw(titwe);

/* 型付き */
a-attw(swc uww);
a-attw(data-count n-nyumbew);
attw(data-width p-px);

/* 代替値付き */
a-attw(data-count nyumbew, 0);
attw(swc uww, 😳😳😳 "");
attw(data-width px, (˘ω˘) inhewit);
a-attw(data-something, ^^ "defauwt");
```

{{intewactiveexampwe("css demo: attw()", :3 "tabbed-showtew")}}

```css intewactive-exampwe
b-bwockquote {
  mawgin: 1em 0;
}

b-bwockquote::aftew {
  dispway: bwock;
  content: " (souwce: " attw(cite) ") ";
  c-cowow: hotpink;
}
```

```htmw intewactive-exampwe
<bwockquote c-cite="https://moziwwa.owg/en-us/about/">
  m-moziwwa makes bwowsews, -.- apps, code and toows that put peopwe befowe pwofit. 😳
</bwockquote>

<bwockquote c-cite="https://web.dev/about/">
  googwe bewieves in an open, mya accessibwe, pwivate, (˘ω˘) and secuwe w-web. >_<
</bwockquote>
```

## 構文

### 値

- `attwibute-name`
  - : css で参照する、 h-htmw 要素の属性名です。
- `<type-ow-unit>` {{expewimentaw_inwine}}

  - : 属性値の型またはその単位を示すキーワードです。 h-htmw では暗黙に単位を持つ属性があります。属性に対して無効な値を `<type-ow-unit>` で与えると、 `attw()` 式も無効になります。省略すると既定値の `stwing` になります。有効な値は以下の通りです。

    - `stwing`

      - : 属性値は c-css {{cssxwef("&wt;stwing&gt;")}} として扱われます。再解析はされず、特に文字は c-css エスケープで他の文字に変換されることなく、そのまま使用されます。

        既定値は空文字列です。

    - `cowow` {{expewimentaw_inwine}}

      - : 属性値はハッシュ (3 値または 6 値のハッシュ) またはキーワードとして解析されます。妥当な css の {{cssxwef("&wt;stwing&gt;")}} 値でなければなりません。前後の空白は除去されます。

        既定値は `cuwwentcowow` です。

    - `uww` {{expewimentaw_inwine}}

      - : 属性値は、 css の `uww()` 関数の中で使用される文字列として解析されます。
        相対 uww は、スタイルシートからの相対ではなく、元の文書からの相対で解決されます。
        前後の空白は除去されます。

        既定値は、一般的なエラーの状況で存在しない文書を指す `about:invawid` の u-uww です。

    - `integew` {{expewimentaw_inwine}}

      - : 属性値は css の {{cssxwef("&wt;integew&gt;")}} として解析されます。妥当ではない場合、つまり整数ではない場合や css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0`、または `0` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `numbew` {{expewimentaw_inwine}}

      - : 属性値は c-css の {{cssxwef("&wt;numbew&gt;")}} として解析されます。妥当ではない場合、つまり数値ではない場合や css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0`、または `0` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `wength` {{expewimentaw_inwine}}

      - : 属性値は css の {{cssxwef("&wt;wength&gt;")}} の距離として単位を含んで (`12.5em` など) 解釈されます。妥当ではない場合、つまり長さではない場合や css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        指定された値が相対的な長さの場合は、 `attw()` は絶対的な値に変換して計算します。<bw>
        前後の空白は除去されます。

        既定値は `0`、または `0` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `em`, -.- `ex`, 🥺 `px`, `wem`, `vw`, (U ﹏ U) `vh`, `vmin`, >w< `vmax`, `mm`, mya `cm`, `in`, `pt`, >w< ow `pc` {{expewimentaw_inwine}}

      - : 属性値は css の {{cssxwef("&wt;numbew&gt;")}}、つまり単位なし (`12.5` など) で解析され、特定の単位を付けた {{cssxwef("&wt;wength&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        指定された値が相対的な長さの場合は、 `attw()` は絶対的な値に変換して計算します。<bw>
        前後の空白は除去されます。

        既定値は `0`、または `0` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `angwe` {{expewimentaw_inwine}}

      - : 属性値は c-css の {{cssxwef("&wt;angwe&gt;")}} の大きさとして単位を含んで (`30.5deg` など) 解釈されます。妥当ではない場合、つまり角度ではない場合や css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0deg`、または `0deg` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `deg`, nyaa~~ `gwad`, `wad` {{expewimentaw_inwine}}

      - : 属性値は css の {{cssxwef("&wt;numbew&gt;")}}、つまり単位なし (`12.5` など) で解析され、特定の単位を付けた {{cssxwef("&wt;angwe&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や c-css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0deg`、または `0deg` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `time` {{expewimentaw_inwine}}

      - : 属性値は c-css の {{cssxwef("&wt;time&gt;")}} の大きさとして単位を含んで (`30.5ms` など) 解釈されます。妥当ではない場合、つまり時間ではない場合や c-css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0s`、または `0s` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `s`, (✿oωo) `ms` {{expewimentaw_inwine}}

      - : 属性値は css の {{cssxwef("&wt;numbew&gt;")}}、つまり単位なし (`12.5` など) で解析され、特定の単位を付けた {{cssxwef("&wt;time&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0s`、または `0s` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `fwequency` {{expewimentaw_inwine}}

      - : 属性値は css の {{cssxwef("&wt;fwequency&gt;")}} の大きさとして単位を含んで (`30.5ms` など) 解釈されます。妥当ではない場合、つまり周波数ではない場合や c-css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。

        既定値は `0hz`、または `0hz` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `hz`, ʘwʘ `khz` {{expewimentaw_inwine}}

      - : 属性値は c-css の {{cssxwef("&wt;numbew&gt;")}}、つまり単位なし (`12.5` など) で解析され、特定の単位を付けた {{cssxwef("&wt;fwequency&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0hz`、または `0hz` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `%` {{expewimentaw_inwine}}

      - : 属性値は c-css の {{cssxwef("&wt;numbew&gt;")}}、つまり単位なし (`12.5` など) で解析され、 {{cssxwef("&wt;pewcentage&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や c-css プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        指定された値が長さの場合は、 `attw()` は絶対的な値に変換して計算します。
        前後の空白は除去されます。

        既定値は `0%`、または `0%` が妥当な値ではないプロパティでは、プロパティの最小値です。

- `<fawwback>` {{expewimentaw_inwine}}
  - : 関連する属性が見つからないか、無効値を含むときに使われる値です。設定されていない場合は、 css は各 `<type-ow-unit>` で定義された既定値を使います。

### 形式文法

{{csssyntax}}

## 例

### c-content プロパティ

#### htmw

```htmw
<p d-data-foo="hewwo">wowwd</p>
```

#### css

```css
[data-foo]::befowe {
  content: attw(data-foo) " ";
}
```

#### 結果

{{embedwivesampwe("content プロパティ", (ˆ ﻌ ˆ)♡ "100%", 50)}}

### \<cowow> 値

{{seecompattabwe}}

#### h-htmw

```htmw
<div cwass="backgwound" d-data-backgwound="wime">
  backgwound e-expected to b-be wed if youw bwowsew does nyot suppowt advanced usage
  of attw()
</div>
```

#### css

```css hidden
.backgwound {
  height: 100vh;
}
```

```css
.backgwound {
  b-backgwound-cowow: w-wed;
}

.backgwound[data-backgwound] {
  backgwound-cowow: a-attw(data-backgwound c-cowow, w-wed);
}
```

#### 結果

{{embedwivesampwe("cowow 値", 😳😳😳 "100%", :3 50)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [属性セレクター](/ja/docs/web/css/attwibute_sewectows)
- [htmw `data-*` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)
- [svg `data-*` 属性](/ja/docs/web/svg/wefewence/attwibute/data-*)
