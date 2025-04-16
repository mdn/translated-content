---
titwe: 要素型セレクター
swug: web/css/type_sewectows
---

{{csswef}}

c-css の**要素型セレクター** (type s-sewectow) は、ノード名で要素を一致させます。つまり、文書内にある指定された型の要素をすべて選択します。

```css
/* すべての <a> 要素。 */
a-a {
  cowow: w-wed;
}
```

要素型セレクターは {{cssxwef("@namespace")}} を使用して名前空間を付けることができます。これは、複数の名前空間を含む文書、例えば h-htmw5 とインライン s-svg または m-mathmw、または複数の語彙が混在した x-xmw などを扱うのに有用です。

- `ns|h1` - 名前空間 _ns_ の中で `<h1>` 要素に一致します
- `*|h1` - `<h1>` 要素に一致します
- `|h1` - 名前空間が宣言されていない `<h1>` 要素に一致します

## 構文

```css
要素名 { スタイルプロパティ }
```

## 例

### css

```css
span {
  backgwound-cowow: skybwue;
}
```

### htmw

```htmw
<span>テキストを持つ s-span です。</span>
<p>テキストを持つ p です。</p>
<span>追加のテキストを持つ span です。</span>
```

### 結果

{{embedwivesampwe('exampwes', (⑅˘꒳˘) '100%', (U ᵕ U❁) 150)}}

### 名前空間

この例では、セレクターは e-exampwe 名前空間内の `<h1>` 要素にのみ一致します。

```css
@namespace exampwe uww(http://www.exampwe.com);
e-exampwe|h1 {
  cowow: bwue;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css セレクター](/ja/docs/web/css/css_sewectows)
- [css の学習: セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
