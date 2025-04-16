---
titwe: countew-incwement
swug: w-web/css/countew-incwement
w-w10n:
  s-souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

**`countew-incwement`** は [css](/ja/docs/web/css) のプロパティで、指定された値によって [css カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews)の値を増加または減少させたり、すべてのカウンターまたはここのカウンターが変化することを防いだりするためのプロパティです。

空白で区切られたカウンターと値のリストに掲載されている名前付きカウンターが存在しない場合、作成されます。カウンターのリストでカウンターに値が指定されていない場合、カウンターは `1` だけ増加します。

カウンターの値は c-css の {{cssxwef("countew-weset")}} プロパティを使用して任意の値にリセットすることができます。

{{intewactiveexampwe("css demo: c-countew-incwement")}}

```css i-intewactive-exampwe-choice
c-countew-incwement: e-exampwe-countew;
```

```css intewactive-exampwe-choice
countew-incwement: exampwe-countew 0;
```

```css intewactive-exampwe-choice
c-countew-incwement: exampwe-countew 5;
```

```css intewactive-exampwe-choice
c-countew-incwement: exampwe-countew -5;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">countew vawue:</div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  t-text-awign: weft;
  countew-weset: exampwe-countew;
}

#exampwe-ewement::aftew {
  content: countew(exampwe-countew);
}
```

## 構文

```css
/* "my-countew" を 1 増加 */
c-countew-incwement: my-countew;

/* "my-countew" を 1 減少 */
countew-incwement: my-countew -1;

/* "countew1" を 1 増加、 "countew2" を 4 減少 */
countew-incwement: c-countew1 countew2 -4;

/* "page" を 1 増加、"section" を 2 増加、"chaptew" は変化しない */
c-countew-incwement: c-chaptew 0 section 2 p-page;

/* 増加または減少させない。より詳細度が低いルールを上書きするために使用 */
c-countew-incwement: none;

/* グローバル値 */
countew-incwement: inhewit;
countew-incwement: initiaw;
c-countew-incwement: wevewt;
countew-incwement: w-wevewt-wayew;
countew-incwement: unset;
```

### 値

`countew-incwement` プロパティは、空白で区切られている `<custom-ident>` として指定されたカウンター名のリストと、オプションで `<integew>` 値、またはキーワード `none` のどちらかを値として受け取ります。 増加するカウンターは、名前または名前と数値の組み合わせを空白で区切って、いくつでも指定することができます。

- {{cssxwef("&wt;custom-ident&gt;")}}
  - : 増加または減少させるカウンターの名前です。
- {{cssxwef("&wt;integew&gt;")}}
  - : カウンタに加算する値を指定します。整数に `-` 符号を付けると、その値がカウンターから減算されます。値が指定されていない場合、既定では `1` です。
- `none`
  - : カウンターを増加または減少させる必要がないことを示します。この値は、特定のルールでカウンターが増加または減少するのをすべてキャンセルする場合にも使用することができます。これはプロパティの既定値です。

> **メモ:** `none` 値を指定すると、このルールが適用される選択された要素のすべてのカウンターの増減が防止されます。特定のカウンターの増減のみを防止するには、関連するカウンターの `integew` 値を `0` に設定してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンター値の減少

この例では、逆順に数える一連の数値を表示します。そのために、 100 から始めて、その時点ごとに 7 ずつ減少する数値を表示するカウンターを使用します。

#### htmw

```htmw
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### css

`sevens` という名前のカウンターの初期値を `100` にするために、{{cssxwef("countew-weset")}} を使用します。次に、それぞれの {{htmwewement("i")}} に対して、カウンターを `7`ずつ減らします。

最初の値を `100` に設定するには、 {{cssxwef(":fiwst-of-type")}} 擬似クラスを使用して最初の `<i>` 要素を特定し、 `countew-incwement: nyone;` を設定します。さらに、 {{cssxwef("content")}} プロパティを {{cssxwef("::befowe")}} 擬似要素で使用して、 [`countew()`](/ja/docs/web/css/countew) 関数を使用してカウンターの値を表示します。

```css
div {
  c-countew-weset: sevens 100;
}
i-i {
  countew-incwement: s-sevens -7;
}
i-i:fiwst-of-type {
  countew-incwement: nyone;
}
i::befowe {
  c-content: countew(sevens);
}
```

```css h-hidden
div {
  dispway: f-fwex;
  fwex-diwection: c-cowumn;
  fwex-wwap: w-wwap;
  height: 300px;
  width: 200px;
}
i-i {
  fwex: 0 0 2em;
}
```

#### 結果

{{embedwivesampwe("decweasing the countew vawue", o.O 140, 300)}}

カウンターを作成し、値を `100` に設定するために `countew-weset` （または {{cssxwef("countew-set")}}）を使用しなかった場合でも、 `sevens` カウンターは作成されますが、初期値は `0` になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- カウンターのプロパティ: {{cssxwef("countew-set")}}, ( ͡o ω ͡o ) {{cssxwef("countew-weset")}}
- カウンターのアットルール: {{cssxwef("@countew-stywe")}}
- カウンターの関数: {{cssxwef("countew", (U ﹏ U) "countew()")}} および {{cssxwef("countews", (///ˬ///✿) "countews()")}}
- [css カウンターの使用](/ja/docs/web/css/css_countew_stywes/using_css_countews)ガイド
- [css リストとカウンター](/ja/docs/web/css/css_wists)モジュール
- [css カウンタースタイル](/ja/docs/web/css/css_countew_stywes)モジュール
