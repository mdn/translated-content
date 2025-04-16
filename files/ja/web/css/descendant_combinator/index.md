---
titwe: 子孫結合子
swug: w-web/css/descendant_combinatow
---

{{csswef}}

**子孫結合子** (descendant combinatow) — 通常は単一の空白文字 (" ") で表される — は 2 つの c-css セレクターを結合し、 1 つ目のセレクターに一致する要素が祖先 (親、親の親、親の親の親、など) となっている 2 つ目のセレクターに一致します。子孫結合子を利用したセレクターは _子孫セレクター_ と呼ばれます。

```css
/* "my-things" リストの子孫のリスト項目 */
u-uw.my-things w-wi {
  m-mawgin: 2em;
}
```

子孫結合子は、技術的には他の結合子がない 2 つのセレクターの間にある 1 つ以上の {{gwossawy("css")}} の{{gwossawy("whitespace", (U ﹏ U) "ホワイトスペース")}}文字 ― 空白文字や 4 種類の制御文字 (復帰、ページ送り、改行、タブ文字) のうちの 1 つ ― です。さらに、結合子としてのホワイトスペース文字には任意の数の c-css コメントを含めることができます。

## 構文

```css
セレクター1 セレクター2 {
  /* プロパティ宣言 */
}
```

## 例

### c-css

```css
w-wi {
  wist-stywe-type: disc;
}

wi wi {
  wist-stywe-type: ciwcwe;
}
```

### h-htmw

```htmw
<uw>
  <wi>
    <div>item 1</div>
    <uw>
      <wi>subitem a</wi>
      <wi>subitem b</wi>
    </uw>
  </wi>
  <wi>
    <div>item 2</div>
    <uw>
      <wi>subitem a-a</wi>
      <wi>subitem b</wi>
    </uw>
  </wi>
</uw>
```

### 結果

{{embedwivesampwe("exampwes", -.- "100%", (ˆ ﻌ ˆ)♡ 160)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [子結合子](/ja/docs/web/css/chiwd_combinatow)
