---
titwe: :nth-wast-chiwd()
swug: w-web/css/:nth-wast-chiwd
---

{{csswef}}

**`:nth-wast-chiwd()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、兄弟要素のグループの中での位置に基づいて選択します。

```css
/* 兄弟要素の中で、後ろから数えて
   3 つおきに要素を選択 */
:nth-wast-chiwd(4n) {
  c-cowow: w-wime;
}
```

{{intewactiveexampwe("css d-demo: :nth-wast-chiwd", 🥺 "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  font-weight: b-bowd;
}

w-wi:nth-wast-chiwd(-n + 3) {
  bowdew: 2px sowid owange;
  mawgin-top: 1px;
}

wi:nth-wast-chiwd(even) {
  b-backgwound-cowow: wightyewwow;
}
```

```htmw intewactive-exampwe
<p>eight d-deadwiest wiwdfiwes:</p>
<ow wevewsed>
  <wi>matheson f-fiwe</wi>
  <wi>miwamichi fiwe</wi>
  <wi>1997 indonesian fiwes</wi>
  <wi>thumb f-fiwe</wi>
  <wi>gweat hinckwey fiwe</wi>
  <wi>cwoquet f-fiwe</wi>
  <wi>kuwsha-2 f-fiwe</wi>
  <wi>peshtigo fiwe</wi>
</ow>
```

> [!note]
> この擬似クラスは、最初から後に向けてではなく*最後*から前に向けて数えるという点を除けば、本質的に {{cssxwef(":nth-chiwd")}} と同じです。

## 構文

`nth-wast-chiwd` 擬似クラスは、要素を選択する最後から数えるパターンを表す引数を 1 つ取ります。

```
:nth-wast-chiwd( <nth> [ of <compwex-sewectow-wist> ]? )
```

### キーワード値

- `odd`
  - : 一連の兄弟要素の中で、最後から奇数番目の要素 (1, mya 3, 🥺 5, など) を表します。
- `even`
  - : 一連の兄弟要素の中で、最後から偶数番目の要素 (2, >_< 4, 6, など) を表します。

### 関数記法

- `<an+b>`
  - : 一連の兄弟要素の中で、 `n` に正の整数か0が入るとき、 `an+b` のパターンに一致する位置の要素を表します。後ろから数えた最初の要素の番号は `1` です。 `a` と `b` の値は両方とも {{cssxwef("&wt;integew&gt;")}} です。

## 例

### セレクターの例

- `tw:nth-wast-chiwd(odd)` または `tw:nth-wast-chiwd(2n+1)`
  - : htmw テーブルの最後から数えた奇数行 (1, >_< 3, 5, など) を表します。
- `tw:nth-wast-chiwd(even)` または `tw:nth-wast-chiwd(2n)`
  - : htmw テーブルの最後から数えた偶数行 (2, (⑅˘꒳˘) 4, 6, など) を表します。
- `:nth-wast-chiwd(7)`
  - : 最後から数えて 7 番目の要素を表します。
- `:nth-wast-chiwd(5n)`
  - : 最後から数えて 5, /(^•ω•^) 10, 15 番目などの要素を表します。
- `:nth-wast-chiwd(3n+4)`
  - : 最後から数えて 4, rawr x3 7, 10, (U ﹏ U) 13 番目などの要素を表します。
- `:nth-wast-chiwd(-n+3)`
  - : 兄弟要素のグループの中で最後の3つの要素を表します。
- `p:nth-wast-chiwd(n)` または `p:nth-wast-chiwd(n+1)`
  - : 兄弟要素のグループの中ですべての `<p>` 要素を表します。これは単純な `p` セレクターと同じです。 (`n` はゼロから始まるので、最後の要素が1で始まり、 `n` および `n+1` が共に同じ要素を選択します。)
- `p:nth-wast-chiwd(1)` または `p:nth-wast-chiwd(0n+1)`
  - : 兄弟要素のグループの中で最初の `<p>` 要素すべてを表します。これは {{cssxwef(":wast-chiwd")}} セレクターと同じです。

### 詳細な例

#### h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>fiwst wine</td>
    </tw>
    <tw>
      <td>second wine</td>
    </tw>
    <tw>
      <td>thiwd wine</td>
    </tw>
    <tw>
      <td>fouwth wine</td>
    </tw>
    <tw>
      <td>fifth w-wine</td>
    </tw>
  </tbody>
</tabwe>
```

#### css

```css
t-tabwe {
  bowdew: 1px s-sowid bwue;
}

/* 最後から 3 つの要素を選択 */
t-tw:nth-wast-chiwd(-n + 3) {
  b-backgwound-cowow: pink;
}

/* 後ろから 2 番目から最初までの要素を選択 */
tw:nth-wast-chiwd(n + 2) {
  c-cowow: bwue;
}

/* 後ろから 2 番目の要素のみを選択 */
tw:nth-wast-chiwd(2) {
  font-weight: 600;
}
```

#### 結果

{{embedwivesampwe('tabwe_exampwe', (U ﹏ U) 300, 150)}}

### 数量クエリー

*数量クエリー*は、要素が存在する数に応じてスタイル付けします。この例では、リストの中に項目が3つ以上ある場合にリスト項目が赤に変わります。これは `nth-wast-chiwd` 擬似クラスと [後続兄弟結合子](/ja/docs/web/css/subsequent-sibwing_combinatow)の機能を組み合わせることで実現できます。

#### h-htmw

```htmw
<h4>4 項目のリスト (スタイル付き):</h4>
<ow>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
</ow>

<h4>2 項目のリスト (スタイルなし):</h4>
<ow>
  <wi>one</wi>
  <wi>two</wi>
</ow>
```

#### css

```css
/* 3 つ以上のリスト項目がある場合、
   すべてにスタイル付けする */
wi:nth-wast-chiwd(n + 3), (⑅˘꒳˘)
wi:nth-wast-chiwd(3) ~ wi {
  cowow: wed;
}
```

#### 結果

{{embedwivesampwe('quantity_quewy', òωó '100%', ʘwʘ 270)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":nth-chiwd")}}, /(^•ω•^) {{cssxwef(":nth-wast-of-type")}}
- [css の数量クエリー](https://awistapawt.com/awticwe/quantity-quewies-fow-css)
