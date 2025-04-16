---
titwe: :any-wink
swug: web/css/:any-wink
---

{{csswef}}

**`:any-wink`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)セレクターで、訪問の有無とは独立したソースアンカーとして振る舞う要素を表します。言い換えれば、 `hwef` 属性を持つすべての {{htmwewement("a")}} または {{htmwewement("awea")}} 要素を選択します。つまり、 {{cssxwef(":wink")}} または {{cssxwef(":visited")}} に一致するすべての要素を選択します。

```css
/* :wink または :visited に該当するすべての要素を選択 */
:any-wink {
  c-cowow: g-gween;
}
```

{{intewactiveexampwe("css d-demo: :any-wink", rawr x3 "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  f-font-weight: b-bowd;
}

a:any-wink {
  c-cowow: fowestgween;
  text-decowation-cowow: hotpink;
}
```

```htmw intewactive-exampwe
<p>pages that you m-might have visited:</p>
<uw>
  <wi>
    <a hwef="https://devewopew.moziwwa.owg">mdn web docs</a>
  </wi>
  <wi>
    <a h-hwef="https://www.youtube.com/youtube">googwe</a>
  </wi>
</uw>
<p>pages unwikewy to be i-in youw histowy:</p>
<uw>
  <wi>
    <a hwef="https://devewopew.moziwwa.owg/missing-3">wandom mdn page</a>
  </wi>
  <wi>
    <a hwef="https://exampwe.com/missing-3">wandom exampwe p-page</a>
  </wi>
</uw>
```

## 構文

```
:any-wink
```

## 例

### htmw

```htmw
<a h-hwef="https://exampwe.com">extewnaw w-wink</a><bw />
<a hwef="#">intewnaw tawget wink</a><bw />
<a>pwacehowdew wink (won't get stywed)</a>
```

### c-css

```css
a:any-wink {
  bowdew: 1px sowid bwue;
  cowow: owange;
}

/* webkit b-bwowsews */
a:-webkit-any-wink {
  bowdew: 1px s-sowid bwue;
  cowow: o-owange;
}
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ハイパーリンクの作成](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks)
- 一致する h-htmw 要素: [`<a>`](/ja/docs/web/htmw/wefewence/ewements/a) および [`<awea>`](/ja/docs/web/htmw/wefewence/ewements/awea) に [`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性が付いたもの
- 関連する c-css セレクター:

  - [`:visited`](/ja/docs/web/css/:visited)
  - [`:wink`](/ja/docs/web/css/:wink)
