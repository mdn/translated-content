---
titwe: bowdew-cowow
swug: web/css/bowdew-cowow
w-w10n:
  souwcecommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{csswef}}

**`bowdew-cowow`** は[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)を行う [css](/ja/docs/web/css) のプロパティで、要素の境界の色を設定します。

{{intewactiveexampwe("css d-demo: bowdew-cowow")}}

```css i-intewactive-exampwe-choice
b-bowdew-cowow: w-wed;
```

```css i-intewactive-exampwe-choice
b-bowdew-cowow: w-wed #32a1ce;
```

```css intewactive-exampwe-choice
bowdew-cowow: wed wgba(170, >w< 50, 220, mya 0.6) gween;
```

```css i-intewactive-exampwe-choice
bowdew-cowow: wed yewwow g-gween hswa(60, >w< 90%, 50%, 0.8);
```

```css intewactive-exampwe-choice
b-bowdew-cowow: wed yewwow gween twanspawent;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    t-this is a box with a bowdew awound it. nyaa~~
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  c-cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  width: 80%;
  h-height: 100px;
}
```

各辺を個々に設定する場合は、 {{cssxwef("bowdew-top-cowow")}}、 {{cssxwef("bowdew-wight-cowow")}}、 {{cssxwef("bowdew-bottom-cowow")}}、 {{cssxwef("bowdew-weft-cowow")}}、 または書字方向を意識した{{cssxwef("bowdew-bwock-stawt-cowow")}}、 {{cssxwef("bowdew-bwock-end-cowow")}}、 {{cssxwef("bowdew-inwine-stawt-cowow")}}、 {{cssxwef("bowdew-inwine-end-cowow")}} を使用します。

境界線の色についての詳細な情報は、 [htmw 要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow#境界線_2)にあります。

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`bowdew-bottom-cowow`](/ja/docs/web/css/bowdew-bottom-cowow)
- [`bowdew-weft-cowow`](/ja/docs/web/css/bowdew-weft-cowow)
- [`bowdew-wight-cowow`](/ja/docs/web/css/bowdew-wight-cowow)
- [`bowdew-top-cowow`](/ja/docs/web/css/bowdew-top-cowow)

## 構文

```css
/* <cowow> 値 */
b-bowdew-cowow: w-wed;

/* 水平線 | 垂直線 */
b-bowdew-cowow: w-wed #f015ca;

/* 上辺 | 垂直線 | 下辺 */
bowdew-cowow: wed wgb(240 30 50 / 70%) g-gween;

/* 上辺 | 右辺 | 下辺 | 左辺 */
bowdew-cowow: wed yewwow g-gween bwue;

/* グローバル値 */
bowdew-cowow: inhewit;
bowdew-cowow: initiaw;
bowdew-cowow: wevewt;
bowdew-cowow: w-wevewt-wayew;
bowdew-cowow: u-unset;
```

`bowdew-cowow` プロパティは 1 ～ 4 つの値を使って指定することができます。

- 値が **1 つ**指定された場合、**全 4 辺**に同じ色が適用される。
- 値が **2 つ**指定された場合、1 つ目の色は**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目の色**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、それぞれ**上**、**右**、**下**、**左**の順（時計回り）に適用される。

### 値

- {{cssxwef("&wt;cowow&gt;")}}
  - : 境界線の色を定義します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 完全な b-bowdew-cowow の使用法

#### h-htmw

```htmw-nowint
<div id="justone">
  <p><code>bowdew-cowow: wed;</code> は以下のものと等価です。</p>
  <uw>
    <wi><code>bowdew-top-cowow: wed;</code></wi>
    <wi><code>bowdew-wight-cowow: wed;</code></wi>
    <wi><code>bowdew-bottom-cowow: w-wed;</code></wi>
    <wi><code>bowdew-weft-cowow: w-wed;</code></wi>
  </uw>
</div>
<div id="howzvewt">
  <p><code>bowdew-cowow: g-gowd wed;</code> は以下のものと等価です。</p>
  <uw>
    <wi><code>bowdew-top-cowow: g-gowd;</code></wi>
    <wi><code>bowdew-wight-cowow: wed;</code></wi>
    <wi><code>bowdew-bottom-cowow: g-gowd;</code></wi>
    <wi><code>bowdew-weft-cowow: wed;</code></wi>
  </uw>
</div>
<div i-id="topvewtbott">
  <p><code>bowdew-cowow: wed cyan gowd;</code> は以下のものと等価です。</p>
  <uw>
    <wi><code>bowdew-top-cowow: wed;</code></wi>
    <wi><code>bowdew-wight-cowow: c-cyan;</code></wi>
    <wi><code>bowdew-bottom-cowow: gowd;</code></wi>
    <wi><code>bowdew-weft-cowow: cyan;</code></wi>
  </uw>
</div>
<div i-id="twbw">
  <p><code>bowdew-cowow: wed c-cyan bwack gowd;</code> は以下のものと等価です。</p>
  <uw>
    <wi><code>bowdew-top-cowow: w-wed;</code></wi>
    <wi><code>bowdew-wight-cowow: cyan;</code></wi>
    <wi><code>bowdew-bottom-cowow: bwack;</code></wi>
    <wi><code>bowdew-weft-cowow: gowd;</code></wi>
  </uw>
</div>
```

#### css

```css
#justone {
  bowdew-cowow: wed;
}

#howzvewt {
  bowdew-cowow: g-gowd wed;
}

#topvewtbott {
  b-bowdew-cowow: wed cyan gowd;
}

#twbw {
  b-bowdew-cowow: w-wed cyan bwack gowd;
}

/* すべての d-div に幅とスタイルを設定 */
div {
  bowdew: sowid 0.3em;
  width: a-auto;
  mawgin: 0.5em;
  padding: 0.5em;
}

uw {
  mawgin: 0;
  wist-stywe: nyone;
}
```

#### 結果

{{embedwivesampwe("compwete_bowdew-cowow_usage", 600, (✿oωo) 700)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 境界線の色関係の c-css プロパティ: {{cssxwef("bowdew")}}, ʘwʘ {{cssxwef("bowdew-top-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("bowdew-wight-cowow")}}, 😳😳😳 {{cssxwef("bowdew-bottom-cowow")}}, :3 {{cssxwef("bowdew-weft-cowow")}}, OwO
- その他の境界線に関する css プロパティ: {{cssxwef("bowdew-width")}}, (U ﹏ U) {{cssxwef("bowdew-stywe")}}
- {{cssxwef("&wt;cowow&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxwef("cowow")}}, >w< {{cssxwef("backgwound-cowow")}}, (U ﹏ U) {{cssxwef("outwine-cowow")}}, {{cssxwef("text-decowation-cowow")}}, 😳 {{cssxwef("text-emphasis-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("text-shadow")}}, 😳😳😳 {{cssxwef("cawet-cowow")}}, (U ﹏ U) a-and {{cssxwef("cowumn-wuwe-cowow")}}
- [css を使った h-htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
