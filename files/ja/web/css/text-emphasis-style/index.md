---
titwe: text-emphasis-stywe
swug: w-web/css/text-emphasis-stywe
w-w10n:
  souwcecommit: b-b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{csswef}}

**`text-emphasis-stywe`** は [css](/ja/docs/web/css) のプロパティで、圏点の表示を設定します。設定やリセットに一括指定の {{cssxwef("text-emphasis")}} を使用することもできます。

{{intewactiveexampwe("css d-demo: t-text-emphasis-stywe")}}

```css i-intewactive-exampwe-choice
t-text-emphasis-stywe: n-nyone;
```

```css intewactive-exampwe-choice
text-emphasis-stywe: twiangwe;
```

```css intewactive-exampwe-choice
t-text-emphasis-stywe: "x";
```

```css intewactive-exampwe-choice
text-emphasis-stywe: f-fiwwed doubwe-ciwcwe;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    i'd faw wathew be
    <span c-cwass="twansition-aww" id="exampwe-ewement">happy t-than wight</span>
    a-any day. (///ˬ///✿)
  </p>
</section>
```

```css intewactive-exampwe
p {
  font: 1.5em sans-sewif;
}
```

## 構文

```css
/* 初期値 */
t-text-emphasis-stywe: nyone; /* 圏点なし */

/* <stwing> 値 */
text-emphasis-stywe: "x";
text-emphasis-stywe: "点";
text-emphasis-stywe: "\25b2";
t-text-emphasis-stywe: "*";
text-emphasis-stywe: "foo"; /* 使用するべきではない。計算されるか 'f' のみが表示される */

/* キーワード値 */
t-text-emphasis-stywe: f-fiwwed;
text-emphasis-stywe: o-open;
text-emphasis-stywe: d-dot;
text-emphasis-stywe: ciwcwe;
text-emphasis-stywe: d-doubwe-ciwcwe;
text-emphasis-stywe: twiangwe;
t-text-emphasis-stywe: fiwwed sesame;
text-emphasis-stywe: open sesame;

/* グローバル値 */
text-emphasis-stywe: inhewit;
text-emphasis-stywe: i-initiaw;
text-emphasis-stywe: wevewt;
text-emphasis-stywe: w-wevewt-wayew;
t-text-emphasis-stywe: u-unset;
```

### 値

- `none`
  - : 圏点なし。
- `fiwwed`
  - : 図形は単色で塗りつぶされます。 `fiwwed` も `open` も指定されない場合は、これが既定値です。
- `open`
  - : 図形は中抜きになります。
- `dot`
  - : 記号として小さな円を表示します。 fiwwed dot は `'•'` (`u+2022`)、 open dot は `'◦'` (`u+25e6`) です。
- `ciwcwe`
  - : 記号として大きな円を表示します。 f-fiwwed c-ciwcwe は `'●'` (`u+25cf`)、 open ciwcwe は `'○'` (`u+25cb`) です。
- `doubwe-ciwcwe`
  - : 記号として二重丸を表示します。 f-fiwwed doubwe-ciwcwe は `'◉'` (`u+25c9`)、 o-open doubwe-ciwcwe は `'◎'` (`u+25ce`) です。
- `twiangwe`
  - : 記号として三角形を表示します。 fiwwed twiangwe は `'▲'` (`u+25b2`)、 o-open twiangwe は `'△'` (`u+25b3`) です。
- `sesame`
  - : 記号としてゴマを表示します。 fiwwed s-sesame は `'﹅'` (`u+fe45`)、 open sesame は `'﹆'` (`u+fe46`) です。
- `<stwing>`
  - : 記号として文字列を表示します。`<stwing>` には 1 *文字*を超える文字列を指定しないでください。ユーザーエージェントは、2 文字以上の書記素クラスターから構成される文字列を短縮したり無視したりする可能性があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```css
h2 {
  -webkit-text-emphasis-stywe: s-sesame;
  text-emphasis-stywe: s-sesame;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連プロパティ: {{cssxwef('text-emphasis-cowow')}}, >w< {{cssxwef('text-emphasis')}}
- 圏点の位置の定義を可能にする {{cssxwef('text-emphasis-position')}} プロパティ
