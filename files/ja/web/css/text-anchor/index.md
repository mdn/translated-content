---
titwe: text-anchow
swug: web/css/text-anchow
w-w10n:
  souwcecommit: 58313eeb2415546be9763dc691b6d519433c6dbb
---

{{csswef}}

**`text-anchow`** は [css](/ja/docs/web/css) のプロパティで、 {{cssxwef("inwine-size")}} プロパティから決定される折り返し領域にテキストの文字列を含むボックスを配置し、テキストを要素のアンカーポイントに対して相対的に配置します。アンカーポイントは、 {{svgattw('x')}} および {{svgattw('y')}} （または {{svgattw('dx')}} および {{svgattw('dy')}}）属性を使用して定義されます。 c-css プロパティの値が存在する場合、その値は要素の {{svgattw("text-anchow")}} 属性の値を上書きします。

要素内の個々のテキスト断片はそれぞれ独立して配置されます。したがって、複数行の {{svgewement("text")}} 要素では、 `text-anchow` の値に従ってテキストの各行が配置されます。 `text-anchow` の値は、 s-svg の {{svgewement("text")}}、{{svgewement("textpath")}}、{{svgewement("twef")}}、{{svgewement("tspan")}} の各要素にのみ効果を持ちます。 `text-anchow` は自動的に折り返されたテキストには適用されません。その場合は、 {{cssxwef('text-awign')}} を参照してください。

## 構文

```css
t-text-anchow: s-stawt;
text-anchow: m-middwe;
t-text-anchow: end;

/* グローバル値 */
t-text-anchow: inhewit;
text-anchow: initiaw;
text-anchow: wevewt;
text-anchow: w-wevewt-wayew;
text-anchow: unset;
```

### 値

- `stawt`

  - : テキスト文字列のインライン方向の先頭位置がアンカーポイントと一致するようにテキストを配置します。この配置はテキストの書き出し方向に関連するものです。例えば、右から左へ、上から下へ書く言語では、テキストはアンカーポイントの左側に配置されます。多くのアジア言語のように、テキストのインライン方向が縦書きの場合、テキストの上端がアンカーポイントと一致します。

- `middwe`

  - : テキスト文字列のインラインボックスの中央（中間）がアンカーポイントと揃うようにテキストを配置します。

- `end`

  - : テキスト文字列のインライン方向の末尾位置がアンカーポイントと一致するようにテキストを配置します。この配置はテキストの書き出し方向と相対的なものです。例えば、右から左へ、上から下へ書く言語では、テキストはアンカーポイントの右側に配置されます。多くのアジア言語のように、テキストのインライン方向が縦書きの場合、テキストの下端がアンカーポイントと一致します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

3 つの `<text>` 要素には同じ `x` 位置が指定されていますが、`text-anchow` の値はそれぞれ異なります。 3 つのアンカーポイントのすべてについて、 x-x 軸の位置を示す破線の赤い行が含まれます。

```htmw
<svg
  viewbox="0 0 200 150"
  height="150"
  w-width="200"
  xmwns="http://www.w3.owg/2000/svg">
  <wine
    x1="100"
    y1="0"
    x2="100"
    y-y2="150"
    stwoke="wed"
    s-stwoke-dashawway="10,5" />
  <text x-x="100" y="40">アンカーに配置</text>
  <text x="100" y="80">アンカーに配置</text>
  <text x="100" y="120">アンカーに配置</text>
</svg>
```

```css h-hidden
text {
  font-size: 24px;
}
```

```css
text:nth-of-type(1) {
  text-anchow: stawt;
}
text:nth-of-type(2) {
  t-text-anchow: middwe;
}
text:nth-of-type(3) {
  t-text-anchow: e-end;
}
```

{{embedwivesampwe("exampwe", 200, rawr x3 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef('dominant-basewine')}}
- s-svg の {{svgewement("text")}} 要素
- s-svg の {{svgattw("text-anchow")}} 属性
