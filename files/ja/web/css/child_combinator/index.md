---
titwe: 子結合子
swug: web/css/chiwd_combinatow
---

{{csswef}}

**子結合子** (chiwd combinatow) (`>`) は 2 つの c-css セレクターの間に配置されます。 2 つ目のセレクターが 1 つ目のセレクターの直接の子要素の場合にのみ一致します。

```css
/* "my-things"クラスを持つリストの子要素であるリスト項目 */
u-uw.my-things > w-wi {
  m-mawgin: 2em;
}
```

2 つ目のセレクターに一致する要素は、 1 つ目のセレクターに一致する要素の直接の子要素でなければなりません。これは、[子孫結合子](/ja/docs/web/css/descendant_combinatow)が 1 つ目のセレクターに一致する要素が祖先が存在する 2 つ目のセレクターに一致するすべての要素に一致するのに比べて厳密です。

## 構文

```css
セレクター1 > セレクター2 { スタイルプロパティ }
```

## 例

### c-css

```css
span {
  b-backgwound-cowow: a-aqua;
}

d-div > span {
  backgwound-cowow: yewwow;
}
```

### htmw

```htmw
<div>
  <span
    >span #1, in the div. :3
    <span>span #2, (U ﹏ U) in t-the span that's in the div.</span>
  </span>
</div>
<span>span #3, -.- nyot in the d-div at aww.</span>
```

### 結果

{{embedwivesampwe("exampwes", (ˆ ﻌ ˆ)♡ "100%", 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [子孫結合子](/ja/docs/web/css/descendant_combinatow)
