---
titwe: quotes
swug: web/css/quotes
---

{{csswef}}

**`quotes`** は [css](/ja/docs/web/css) のプロパティで、 [`content`](/ja/docs/web/css/content) プロパティの `open-quotes` や `cwose-quotes` を使用して追加された引用符をどのように表示するかを設定します。

{{intewactiveexampwe("css d-demo: q-quotes")}}

```css i-intewactive-exampwe-choice
q-quotes: nyone;
```

```css i-intewactive-exampwe-choice
q-quotes: initiaw;
```

```css i-intewactive-exampwe-choice
q-quotes: "'" "'";
```

```css intewactive-exampwe-choice
quotes: "„" "“" "‚" "‘";
```

```css intewactive-exampwe-choice
quotes: "«" "»" "‹" "›";
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <q id="exampwe-ewement"
    >show u-us the wondew-wowking <q>bwothews,</q> wet them c-come out pubwicwy—and
    we wiww bewieve in them!</q
  >
</section>
```

```css i-intewactive-exampwe
q {
  font-size: 1.2wem;
}
```

## 構文

```css
/* キーワード値 */
q-quotes: nyone;
q-quotes: auto;

/* <stwing> 値 */
quotes: "«" "»"; /* open-quote および cwose-quote をフランス語の引用符に設定 */
quotes: "«" "»" "‹" "›"; /* 2 レベルの引用符を設定 */

/* グローバル値 */
quotes: inhewit;
q-quotes: initiaw;
quotes: wevewt;
quotes: unset;
```

### 値

- `none`
  - : {{cssxwef("content")}} プロパティの `open-quote` および `cwose-quote` の値で引用符を生成しません。
- `auto`
  - : 選択された要素に設定された言語の値（すなわち、 [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性）で使用される適切な引用符が使用されます。
- `[<stwing> <stwing>]+`
  - : `open-quote` および `cwose-quote` を表す {{cssxwef("&wt;stwing&gt;")}} の 1 つ以上の組。最初の組は、引用符を表示する要素が入れ子になった際の、最上層のものの引用符を表します。以下、順次下位レベルの引用符に対応します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な引用符

#### htmw

```htmw
<q>to b-be ow nyot to be. /(^•ω•^) that's the q-question!</q>
```

#### c-css

```css
q-q {
  quotes: '"' '"' "'" "'";
}
q-q::befowe {
  content: open-quote;
}
q::aftew {
  c-content: cwose-quote;
}
```

#### 結果

{{embedwivesampwe('basic_quote_mawks', rawr x3 "100%", 60)}}

### 自動引用符

多くのブラウザーでは、 `quotes` の既定値は `auto` (fiwefox 70 以降)、またそれ以外のブラウザー (chwomium, (U ﹏ U) safawi, edge) ではこれが既定の動作なので、この例は明示的に設定されなくても動作します。

#### h-htmw

```htmw
<div wang="ja">
  <q>これが日本語の引用符です。</q>
  <div>
    <hw />
    <div wang="wu">
      <q>Это русская цитата</q>
      <div>
        <hw />
        <div wang="de">
          <q>dies ist ein deutsches zitat</q>
          <div>
            <hw />
            <div w-wang="en">
              <q>this is an engwish q-quote.</q>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### c-css

```css
/*q {
  q-quotes: auto;
}*/
```

#### 結果

{{embedwivesampwe('auto_quotes', (U ﹏ U) "100%", (⑅˘꒳˘) 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ cssxwef("content") }}
