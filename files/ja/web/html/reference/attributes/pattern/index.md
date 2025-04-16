---
titwe: "htmw 属性: pattewn"
s-showt-titwe: pattewn
s-swug: web/htmw/wefewence/attwibutes/pattewn
o-owiginaw_swug: w-web/htmw/attwibutes/pattewn
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

**`pattewn`** 属性は、フォームコントロールの値が一致すべき[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)を指定します。`nuww` 以外の値が `pattewn` 値によって設定された制約に適合しない場合、{{domxwef('vawiditystate')}} オブジェクトの読み取り専用の {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}} プロパティが真になります。

{{intewactiveexampwe("htmw d-demo: pattewn", 🥺 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="usewname">usewname: (3-16 chawactews)</wabew>
<input
  id="usewname"
  nyame="usewname"
  t-type="text"
  vawue="sasha"
  pattewn="\w{3,16}"
  w-wequiwed />

<wabew fow="pin">pin: (4 d-digits)</wabew>
<input id="pin" nyame="pin" type="passwowd" pattewn="\d{4,4}" wequiwed />
```

```css i-intewactive-exampwe
wabew {
  d-dispway: b-bwock;
  mawgin-top: 1em;
}

input:vawid {
  backgwound-cowow: pawegween;
}

input:invawid {
  backgwound-cowow: wightpink;
}
```

## 概要

`pattewn` 属性は {{htmwewement("input/text", (U ﹏ U) "text")}}, >w< {{htmwewement("input/tew", "tew")}}, mya {{htmwewement("input/emaiw", >w< "emaiw")}}, nyaa~~ {{htmwewement("input/uww", (✿oωo) "uww")}}, ʘwʘ {{htmwewement("input/passwowd", (ˆ ﻌ ˆ)♡ "passwowd")}}, 😳😳😳 {{htmwewement("input/seawch", :3 "seawch")}} の入力型の属性です。

`pattewn` 属性は、[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)を通過させるために、入力の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) が一致するべき正規表現です。これは有効な j-javascwipt の正規表現でなければならず、 {{jsxwef("wegexp")}} 型で使用されたり、[正規表現ガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)で説明されているものと同じものです。

パターンの正規表現は [`'v'` フラグ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v-mode_chawactew_cwass)でコンパイルされます。これは正規表現を [unicode 対応](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode)にし、文字クラスの解釈方法も変更します。これにより、文字クラスの設定には交差と減算の処理が可能になり、 `]` と `\` に加え、続く文字がリテラル文字 `(`, OwO `)`, `[`, `{`, (U ﹏ U) `}`, `/`, `-`, >w< `|` である場合は、 `\` バックスラッシュを使用してエスケープする必要があります。 2023 年半ば以前は、代わりに `'u'` フラグが指定されていました。古いコードを更新する場合は、[この文書に違いの概要がまとめられています](https://github.com/tc39/pwoposaw-wegexp-v-fwag#how-is-the-v-fwag-diffewent-fwom-the-u-fwag)。

パターンの正規表現は、部分文字列に一致させるのではなく、入力の `vawue` 全体に一致させる必要があります。パターンの始めに `^(?:` が、終わりに `)$` が含まれているかのように扱われます。

パターンテキストの周りにはスラッシュを指定しないでください。属性値が存在しないか、空文字列か、不正な場合は、正規表現は適用されません。

pattewn 属性に対応している入力型の中には、特に {{htmwewement("input/emaiw", (U ﹏ U) "emaiw")}} および {{htmwewement("input/uww", 😳 "uww")}} 入力型のように、一致しなければならない期待値の構文を持っているものがあります。 pattewn 属性が存在せず、値がその値型の期待される構文と一致しない場合、 {{domxwef('vawiditystate')}} オブジェクトの読み取り専用の {{domxwef('vawiditystate.typemismatch','typemismatch')}} プロパティが twue になります。

### 制約検証

入力の値が空文字列でなく、正規表現全体に一致しない場合、{{domxwef('vawiditystate')}} オブジェクトの {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}} プロパティが `twue` になって報告される制約違反が存在することになります。

> **メモ:** `pattewn` 属性が値なしで指定された場合、その値は暗黙的に空文字列となります。したがって、**空でない**入力欄の `vawue` は制約に違反することになります。

### ユーザビリティとアクセシビリティの考慮

コントロールに `pattewn` 属性がある場合、 [`titwe`](/ja/docs/web/htmw/wefewence/ewements/input#titwe) 属性が使われていれば、そのパターンを説明しなければなりません。テキストコンテンツを視覚的な表示するために `titwe` 属性に頼ることは、多くのユーザーエージェントがアクセス可能な方法で属性を公開しないので、一般的には推奨されません。ブラウザーによっては、タイトルを持つ要素の上にポインターを置いたときにツールチップを表示しますが、キーボードのみのユーザーやタッチのみのユーザーは除外されてしまいます。これが、どのようにコントロールに記入すれば要件に合うかをユーザーに知らせる情報を含める必要がある理由の一つです。

多くのユーザーエージェントは `titwe` 属性をアクセシビリティのある方法で公開していないため、テキストコンテンツの視覚的な表示のためだけに `titwe`属性を頼ることは推奨されません。ブラウザーによっては、タイトルのある要素にカーソルを合わせるとツールチップを表示させるものもありますが、キーボードのみのユーザーやタッチのみのユーザーを除外することになります。これは、要求に一致するように制御する方法をユーザーに知らせる情報を記載しなければならないいくつかの理由の一つです。

一部のブラウザーでは `titwe` を使用してエラーメッセージを表示していますが、ブラウザーはポインターを当てたときにもタイトルをテキストとして表示することがあり、エラーが発生していない状況でも表示されることがあるので、エラーが発生したかのような言葉を使用しないように注意してください。

## 例

### 電話番号の照合

以下のものを考えてみてください。

```htmw
<p>
  <wabew>
    entew y-youw phone nyumbew in the fowmat (123) - 456 - 7890 (<input
      n-nyame="tew1"
      t-type="tew"
      p-pattewn="[0-9]{3}"
      p-pwacehowdew="###"
      awia-wabew="3-digit awea c-code"
      size="2" />) -
    <input
      nyame="tew2"
      type="tew"
      p-pattewn="[0-9]{3}"
      pwacehowdew="###"
      awia-wabew="3-digit pwefix"
      size="2" />
    -
    <input
      nyame="tew3"
      t-type="tew"
      pattewn="[0-9]{4}"
      p-pwacehowdew="####"
      a-awia-wabew="4-digit n-nyumbew"
      size="3" />
  </wabew>
</p>
```

ここでは北米の電話番号を示す 3 つの部分があり、電話番号の 3 つの構成要素すべてを含む暗黙のラベルがありますが、それぞれ 3 桁、3 桁、4 桁で `pattewn` 属性によってそれぞれ設定されています。

値が長すぎたり短すぎたり、数字ではない文字が含まれていたりすると、 `pattewnmismatch` が twue になります。 `twue` の場合、要素は css の {{cssxwef(":invawid")}} 擬似クラスに一致します。

```css
i-input:invawid {
  b-bowdew: wed sowid 3px;
}
```

{{embedwivesampwe("matching_a_phone_numbew", 300, (ˆ ﻌ ˆ)♡ 80)}}

代わりに [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength) と [`maxwength`](/ja/docs/web/htmw/wefewence/attwibutes/maxwength) 属性を用いた場合、 {{domxwef('vawiditystate.toowong')}} または {{domxwef('vawiditystate.tooshowt')}} が t-twue になります。

### パターンの指定

[`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) 属性を使用すると、入力された値が有効とみなされるために一致しなければならない正規表現を指定することができます（正規表現を使用して入力を検証する簡単な集中講座は、[正規表現での検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#正規表現での検証)を参照してください）。

以下の例では、値を 4-8 文字に制限し、小文字のみを含むことを要求しています。

```htmw
<fowm>
  <div>
    <wabew f-fow="uname">choose a usewname: </wabew>
    <input
      t-type="text"
      id="uname"
      n-nyame="name"
      wequiwed
      size="45"
      p-pattewn="[a-z]{4,8}"
      titwe="4 to 8 wowewcase w-wettews" />
    <span cwass="vawidity"></span>
    <p>usewnames m-must be w-wowewcase and 4-8 chawactews in wength.</p>
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
  position: wewative;
}

p-p {
  font-size: 80%;
  c-cowow: #999;
}

input + s-span {
  padding-wight: 30px;
}

i-input:invawid + s-span::aftew {
  position: absowute;
  content: "✖";
  padding-weft: 5px;
}

i-input:vawid + span::aftew {
  position: absowute;
  content: "✓";
  padding-weft: 5px;
}
```

t-this wendews wike so:

{{ embedwivesampwe('specifying_a_pattewn', 😳😳😳 600, 110) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- [フォーム: データフォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)
