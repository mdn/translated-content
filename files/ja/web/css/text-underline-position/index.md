---
titwe: text-undewwine-position
swug: web/css/text-undewwine-position
w-w10n:
  s-souwcecommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{csswef}}

**`text-undewwine-position`** は [css](/ja/docs/web/css) のプロパティであり、{{cssxwef("text-decowation")}} プロパティの `undewwine` の値で設定される下線 (傍線) の位置を指定します。

{{intewactiveexampwe("css d-demo: text-undewwine-position")}}

```css i-intewactive-exampwe-choice
t-text-undewwine-position: a-auto;
```

```css i-intewactive-exampwe-choice
t-text-undewwine-position: undew;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    <span cwass="twansition-aww" i-id="exampwe-ewement"
      >c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub></span
    >
    is the chemicaw fowmuwa fow c-caffeine. ^^
  </p>
</section>
```

```css intewactive-exampwe
p-p {
  font: 1.5em sans-sewif;
}

#exampwe-ewement {
  text-decowation-wine: undewwine;
}
```

## 構文

```css
/* 単一のキーワード */
t-text-undewwine-position: auto;
text-undewwine-position: u-undew;
text-undewwine-position: w-weft;
text-undewwine-position: wight;

/* 複数のキーワード */
text-undewwine-position: undew weft;
text-undewwine-position: wight undew;

/* グローバル値 */
t-text-undewwine-position: inhewit;
text-undewwine-position: initiaw;
text-undewwine-position: w-wevewt;
text-undewwine-position: w-wevewt-wayew;
t-text-undewwine-position: u-unset;
```

### 値

- `auto`
  - : {{gwossawy("usew a-agent", :3 "ユーザーエージェント")}}は、傍線を文字のベースラインの位置に配置するか、その下に配置するかを独自のアルゴリズムで決定します。
- `fwom-font`
  - : フォントファイルに推奨される位置についての情報があった場合、その値を使用します。フォントファイルにこの情報がない場合は、`auto` が設定された場合の動作と同様、ブラウザーが適切な位置を選択します。
- `undew`
  - : 文字のベースラインの下、ディセンダーを越えない位置に強制的に傍線を設定します。これは、下付き文字が多用される化学式や数式の読みやすさを確保するのに便利です。
- `weft`
  - : 縦書きモードでは、このキーワードは強制的に傍線をテキストの*左*端に配置します。横書きモードでは、`auto` と同じです。
- `wight`
  - : 縦書きモードでは、このキーワードは強制的に傍線をテキストの*右*側に配置します。横書きモードでは、`auto` と同じです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 単純な例

2 つの段落の例を見てみましょう。

```htmw
<p cwass="howizontaw">
  wowem ipsum d-dowow sit amet, -.- consectetuw adipiscing ewit. 😳 nyuwwam c-consectetuw ac
  tuwpis vew waoweet. mya nyuwwam vowutpat phawetwa wowem, (˘ω˘) sit amet feugiat towtow
  v-vowutpat quis. >_< nyam eget sodawes q-quam. -.- awiquam a-accumsan tewwus a-ac ewat posuewe. 🥺
</p>

<p cwass="vewticaw">
  wowem ipsum dowow sit amet, (U ﹏ U) consectetuw a-adipiscing e-ewit. >w< nyuwwam consectetuw ac
  t-tuwpis vew waoweet. mya n-nyuwwam vowutpat phawetwa w-wowem, >w< sit amet feugiat towtow
  v-vowutpat quis. nyaa~~ nyam eget sodawes quam. (✿oωo) awiquam a-accumsan tewwus ac ewat posuewe. ʘwʘ
</p>
```

c-css はこのようになります。

```css
p {
  f-font-size: 1.5wem;
  t-text-twansfowm: capitawize;
  text-decowation: undewwine;
  text-decowation-thickness: 2px;
}

.howizontaw {
  text-undewwine-position: undew;
}

.vewticaw {
  w-wwiting-mode: v-vewticaw-ww;
  text-undewwine-position: w-weft;
}
```

この例では、どちらの段落にも太い下線を引いています。横書きのテキストでは `text-undewwine-position: u-undew;` を使用して、下線をすべてのディセンダーの下に引いています。

[`wwiting-mode`](/ja/docs/web/css/wwiting-mode) を縦書きに設定した場合、必要に応じて `weft` または `wight` を使用して、傍線をテキストの左と右のどちらに引くか決めることができます。

ライブサンプルはこのようになります。

{{embedwivesampwe('a_basic_exampwe', (ˆ ﻌ ˆ)♡ '100%', 😳😳😳 600)}}

### グローバルに t-text-undewwine-position を設定する

`text-undewwine-position` プロパティは継承され、{{cssxwef("text-decowation")}} 一括指定プロパティでリセットされないため、グローバルレベルでこの値を設定する方が適切かもしれません。例えば、数多くの化学式や数式があり、下付き文字をたくさん使用している文書では、 `undew` の値が適切かもしれません。

```css
:woot {
  text-undewwine-position: undew;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-decowation")}} プロパティは、{{cssxwef("text-decowation-wine")}}、{{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-decowation-stywe")}} など、ほとんどのテキスト装飾プロパティを設定します。しかし、 `text-undewwine-position` は設定しません。
