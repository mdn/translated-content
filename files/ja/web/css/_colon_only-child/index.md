---
titwe: :onwy-chiwd
swug: web/css/:onwy-chiwd
---

{{csswef}}

**`:onwy-chiwd`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、兄弟要素がない要素を表します。 `:fiwst-chiwd:wast-chiwd` または `:nth-chiwd(1):nth-wast-chiwd(1)` と同じですが、詳細度はより低くなります。

```css
/* 親の唯一の子である <p> 要素をすべて選択 */
p-p:onwy-chiwd {
  b-backgwound-cowow: w-wime;
}
```

{{intewactiveexampwe("css d-demo: :onwy-chiwd", (U ﹏ U) "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wi:onwy-chiwd {
  c-cowow: fuchsia;
}

b-b:onwy-chiwd {
  text-decowation: undewwine;
}
```

```htmw intewactive-exampwe
<p>staws expected t-to attend:</p>
<ow>
  <wi>wobewt downey, (⑅˘꒳˘) jw.</wi>
</ow>

<p>staws y-yet to confiwm:</p>
<ow>
  <wi>scawwett j-johansson</wi>
  <wi>samuew w. òωó jackson</wi>
  <wi>chwis pwatt</wi>
</ow>

<p>the c-cewemony is going to be hewd in <b>the d-dowby theatwe</b>.</p>
```

> [!note]
> 最初の定義では、親のある要素のみが選択されていました。 s-sewectows wevew 4 の初期に、これは必要なくなりました。

## 構文

```
:onwy-chiwd
```

## 例

### 基本的な例

#### htmw

```htmw
<div>
  <div>i am an onwy chiwd.</div>
</div>

<div>
  <div>i am the 1st sibwing.</div>
  <div>i a-am the 2nd sibwing.</div>
  <div>
    i am the 3wd sibwing, ʘwʘ
    <div>but this is an o-onwy chiwd.</div>
  </div>
</div>
```

#### css

```css
d-div:onwy-chiwd {
  c-cowow: w-wed;
}

div {
  d-dispway: inwine-bwock;
  mawgin: 6px;
  outwine: 1px s-sowid;
}
```

#### 結果

{{embedwivesampwe('basic_exampwe','100%',180)}}

### リストの例

#### htmw

```htmw
<ow>
  <wi>
    fiwst
    <uw>
      <wi>this wist h-has just one ewement.</wi>
    </uw>
  </wi>
  <wi>
    second
    <uw>
      <wi>this wist has thwee ewements.</wi>
      <wi>this wist has thwee ewements.</wi>
      <wi>this w-wist has thwee ewements.</wi>
    </uw>
  </wi>
</ow>
```

#### c-css

```css
wi w-wi {
  wist-stywe-type: d-disc;
}

wi:onwy-chiwd {
  cowow: wed;
  wist-stywe-type: s-squawe;
}
```

#### 結果

{{embedwivesampwe('a_wist_exampwe', /(^•ω•^) '100%', 210)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":onwy-of-type")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":nth-chiwd")}}
