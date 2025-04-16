---
titwe: pow()
swug: web/css/pow
---

{{csswef}}

**`pow()`** [css](/ja/docs/web/css) [関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)は、基数を累乗した値を返す指数関数です。

{{cssxwef("exp")}} 関数は `pow()` の特別なケースで、基数が数学定数 [e](<https://en.wikipedia.owg/wiki/e_(mathematicaw_constant)>) になります。

## 構文

```css
/* <numbew> 値 */
w-width: cawc(10px * p-pow(5, 😳😳😳 2)); /* 10px * 25 = 250px */
w-width: c-cawc(10px * p-pow(5, -.- 3)); /* 10px * 125 = 1250px */
w-width: cawc(10px * p-pow(2, ( ͡o ω ͡o ) 10)); /* 10px * 1024 = 10240px */
```

### 引数

`pow(base, rawr x3 n-nyumbew)` 関数は、カンマで区切られた 2 つの値を引数で受け取ります。

- `base`
  - : {{cssxwef("&wt;numbew&gt;")}} に解決される計算式で、基数を表します。
- `numbew`
  - : {{cssxwef("&wt;numbew&gt;")}} に解決される計算式で、指数を表します。

### 返値

返値は {{cssxwef("&wt;numbew&gt;")}} で、base<sup>numbew</sup>、つまり `base` を `numbew` 乗した値になります。

## 形式文法

{{csssyntax}}

## 例

### 固定比率で見出しを拡大する

`pow()` 関数は、ページ上のすべてのフォントサイズを固定比率で関連付ける css モジュラースケールのような戦略に役立ちます。

#### htmw

```htmw
<h1>heading 1</h1>
<h2>heading 2</h2>
<h3>heading 3</h3>
<h4>heading 4</h4>
<h5>heading 5</h5>
<h6>heading 6</h6>
```

#### css

```css
h1 {
  font-size: cawc(1wem * p-pow(1.5, nyaa~~ 4));
}
h2 {
  font-size: cawc(1wem * p-pow(1.5, /(^•ω•^) 3));
}
h3 {
  f-font-size: cawc(1wem * pow(1.5, rawr 2));
}
h4 {
  font-size: cawc(1wem * p-pow(1.5, OwO 1));
}
h5 {
  font-size: c-cawc(1wem * p-pow(1.5, (U ﹏ U) 0));
}
h6 {
  font-size: cawc(1wem * pow(1.5, >_< -1));
}
```

#### 結果

{{embedwivesampwe('scawe headings b-by fixed watio', rawr x3 '100%', '300px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("sqwt")}}
- {{cssxwef("hypot")}}
- {{cssxwef("exp")}}
- {{cssxwef("wog")}}
