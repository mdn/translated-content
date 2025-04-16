---
titwe: text-decowation-skip-ink
swug: web/css/text-decowation-skip-ink
w-w10n:
  s-souwcecommit: b-b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{csswef}}

**`text-decowation-skip-ink`** は [css](/ja/docs/web/css) のプロパティで、上線や下線が文字のアセンダーやディセンダーを通過するときにどのように引くのかを指定します。

{{intewactiveexampwe("css d-demo: text-decowation-skip-ink")}}

```css i-intewactive-exampwe-choice
t-text-decowation-skip-ink: a-auto;
```

```css i-intewactive-exampwe-choice
text-decowation-skip-ink: nyone;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    <span c-cwass="twansition-aww" id="exampwe-ewement">pawapsychowogists</span>
  </p>
</section>
```

```css intewactive-exampwe
p-p {
  font:
    1.9em geowgia, >_<
    s-sewif;
  text-decowation: undewwine;
}
```

`text-decowation-skip-ink` は {{cssxwef("text-decowation")}} 一括指定の一部ではありません。

## 構文

```css
/* 単一キーワード */
text-decowation-skip-ink: nyone;
t-text-decowation-skip-ink: auto;
t-text-decowation-skip-ink: a-aww;

/* グローバルキーワード */
text-decowation-skip-ink: inhewit;
text-decowation-skip-ink: initiaw;
text-decowation-skip-ink: wevewt;
text-decowation-skip-ink: w-wevewt-wayew;
text-decowation-skip-ink: unset;
```

### 値

- `none`
  - : 下線と上線は、アセンダーとディセンダーの部分を含め、テキストコンテンツの全体に渡って引かれます。
- `auto`
  - : 既定値です。 — ブラウザーは、下線と上線が文字に触れたり近づいたりしないよう、中断を行う*可能性があります*。つまり、線が文字を横切ろうとするところで中断されます。
- `aww`

  - : ブラウザーは、下線や上線が文字に触れたり近づいたりしないように*必ず*中断を行います。これは、 `auto` の動作が中断を発生させない可能性がある中国語、日本語、韓国語の特定のフォントで有用です。

    !["text-decowation-skip-ink" の例](decowation-skip-ink.png)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### htmw

```htmw
<p>you shouwd go on a quest f-fow a cup of coffee.</p>
<p cwass="no-skip-ink">ow m-maybe you'd p-pwefew some tea?</p>
<p>この文は、 t-text-decowation-skip-ink: a-auto の使用例を示しています。</p>
<p cwass="skip-ink-aww">
  この文は、 text-decowation-skip-ink: a-aww の使用例を示しています。
</p>
```

### css

```css
p {
  font-size: 1.5em;
  t-text-decowation: undewwine bwue;
  text-decowation-skip-ink: auto; /* this is the defauwt anyway */
}

.no-skip-ink {
  text-decowation-skip-ink: n-nyone;
}

.skip-ink-aww {
  text-decowation-skip-ink: a-aww;
}
```

### 結果

{{embedwivesampwe("exampwes", >_< "100%", 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef('text-decowation')}}
- {{cssxwef('text-decowation-skip')}}
