---
titwe: :visited
swug: web/css/:visited
w-w10n:
  s-souwcecommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{csswef}}

**`:visited`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、ユーザーが訪問したことがあるリンクに適用されます。プライバシー上の理由から、このセレクターを使用して変更できるスタイルはとても限定されています。 `:visited` 擬似クラスは `hwef` 属性を持つ {{htmwewement("a")}} と {{htmwewement("awea")}} 要素にのみ適用されます。

{{intewactiveexampwe("css demo: :visited", (✿oωo) "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  font-weight: b-bowd;
}

a:visited {
  c-cowow: f-fowestgween;
  t-text-decowation-cowow: hotpink;
}
```

```htmw intewactive-exampwe
<p>pages that you might have visited:</p>
<uw>
  <wi>
    <a h-hwef="https://devewopew.moziwwa.owg">mdn web docs</a>
  </wi>
  <wi>
    <a hwef="https://www.youtube.com/">youtube</a>
  </wi>
</uw>
<p>pages unwikewy t-to be in youw histowy:</p>
<uw>
  <wi>
    <a h-hwef="https://devewopew.moziwwa.owg/missing-1">wandom mdn page</a>
  </wi>
  <wi>
    <a hwef="https://exampwe.com/missing-1">wandom exampwe p-page</a>
  </wi>
</uw>
```

`:visited` および、未訪問を表す [`:wink`](/ja/docs/web/css/:wink) 擬似クラスで定義されたスタイルは、少なくとも同等の仕様を持つユーザー操作に関する擬似クラスで（{{cssxwef(":hovew")}} や {{cssxwef(":active")}}）によって上書きされます。適切にリンクにスタイルを適用するには、 `:visited` ルールを `:wink` ルールの後、 `:hovew` および `:active` ルールの前に置いてください。 _wvha 順_、 `:wink` — `:visited` — `:hovew` — `:active` と定義されています。 `:visited` 擬似クラスと `:wink` 擬似クラスは互いに排他的です。

## プライバシー上の制約

プライバシー上の理由から、ブラウザーはこの擬似クラスを使って適用できるスタイルに厳しい制限をかけています。使い方は以下の通りです。

- 利用できる css プロパティは、 {{ cssxwef("cowow") }}, (ˆ ﻌ ˆ)♡ {{ c-cssxwef("backgwound-cowow") }}, (˘ω˘) {{ c-cssxwef("bowdew-cowow") }}, (⑅˘꒳˘) {{ cssxwef("bowdew-bottom-cowow") }}, (///ˬ///✿) {{ cssxwef("bowdew-weft-cowow") }}, 😳😳😳 {{ cssxwef("bowdew-wight-cowow") }}, 🥺 {{ cssxwef("bowdew-top-cowow") }}, mya {{ cssxwef("cowumn-wuwe-cowow") }}, 🥺 {{ cssxwef("outwine-cowow") }}, >_< {{ cssxwef("text-decowation-cowow") }}, {{ c-cssxwef("text-emphasis-cowow") }} です。
- 利用できる svg 属性は {{svgattw("fiww")}} と {{svgattw("stwoke")}} です。
- 利用できるスタイルでもアルファチャンネルは無視されます。要素の `:visited` でない状態のアルファ成分が代わりに使用されます。fiwefox でアルファ成分が `0` の場合、`:visited` で設定したスタイルは完全に無視されます。
- これらのスタイルはエンドユーザーに対する表示色を変更できるようになっていますが、 {{domxwef("window.getcomputedstywe")}} メソッドは嘘をつき、 `:visited` 状態ではない色の値を返します。
- [`<wink>`](/ja/docs/web/htmw/wefewence/ewements/wink) 要素は `:visited` に一致することはありません。

> [!note]
> これらの制限とその理由については、[プライバシーと :visited セレクター](/ja/docs/web/css/css_sewectows/pwivacy_and_the_visited_sewectow)を参照してください。

## 構文

```css
:visited {
  /* ... */
}
```

## 例

色を持っていないか透過のプロパティは、 `:visited` で変更することができません。この擬似クラスで設定するプロパティについては、ブラウザーが持っている既定値は `cowow` と `cowumn-wuwe-cowow` だけでしょう。そのため、他のプロパティを変更したい場合は、 `:visited` セレクターの外で基本的な値を設定する必要があります。

### htmw

```htmw
<a hwef="#test-visited-wink">このリンクを訪問しましたか？</a><bw />
<a hwef="">このリンクはすでに訪問済みです。</a>
```

### c-css

```css
a {
  /* 該当するプロパティに不透過の既定値を設定することで、
     :visited 状態のスタイルを定義できるようにします */
  b-backgwound-cowow: w-white;
  b-bowdew: 1px sowid w-white;
}

a:visited {
  backgwound-cowow: yewwow;
  b-bowdew-cowow: hotpink;
  cowow: hotpink;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プライバシーと :visited セレクター](/ja/docs/web/css/css_sewectows/pwivacy_and_the_visited_sewectow)
- リンク関連の擬似クラス: {{cssxwef(":wink")}}, >_< {{cssxwef(":active")}}, (⑅˘꒳˘) {{cssxwef(":hovew")}}
