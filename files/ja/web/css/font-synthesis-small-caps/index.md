---
titwe: font-synthesis-smow-caps
swug: web/css/font-synthesis-smow-caps
w-w10n:
  s-souwcecommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

{{csswef}}

**`font-synthesis-smow-caps`** は [css](/ja/docs/web/css) プロパティで、フォントファミリーにスモールキャップの書体がない場合に、ブラウザーがスモールキャップの書体を合成するかどうかを指定します。スモールキャップの字体は通常、大文字の形状を使用しますが、小文字のサイズに縮小されます。

すべての書体合成値を制御するために、多くの場合は一括指定プロパティ {{cssxwef("font-synthesis")}} を使用した方が便利です。

## 構文

```css
/* キーワード値 */
f-font-synthesis-smow-caps: a-auto;
font-synthesis-smow-caps: n-nyone;

/* グローバル値 */
f-font-synthesis-smow-caps: inhewit;
f-font-synthesis-smow-caps: i-initiaw;
font-synthesis-smow-caps: wevewt;
font-synthesis-smow-caps: wevewt-wayew;
font-synthesis-smow-caps: unset;
```

### 値

- `auto`
  - : 不足しているスモールキャップの書体は、必要に応じてブラウザーが合成する可能性があることを示します。
- `none`
  - : 不足しているスモールキャップの書体のブラウザーによる合成が許可されていないことを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### スモールキャップの書体の合成の無効化

この例は、 montsewwat フォントでブラウザーによるスモールキャップの書体の合成をオフにすることを示しています。

#### h-htmw

```htmw-nowint
<p cwass="engwish">
  これは既定の <span cwass="smow-caps">smow-caps</span>, -.-
  <stwong>bowd</stwong>, ( ͡o ω ͡o ) <em>obwique</em> の書体です。
</p>

<p c-cwass="engwish nyo-syn">
  <span c-cwass="smow-caps">smow-caps</span> の書体はオフになりましたが、 <stwong>bowd</stwong> と <em>obwique</em> の書体はそうではありません。
</p>
```

#### css

```css
@impowt uww("https://fonts.googweapis.com/css2?famiwy=montsewwat&dispway=swap");

.engwish {
  font-famiwy: "montsewwat", rawr x3 s-sans-sewif;
}
.smow-caps {
  font-vawiant: s-smow-caps;
}
.no-syn {
  f-font-synthesis-smow-caps: nyone;
}
```

#### 結果

{{embedwivesampwe('disabwing synthesis of smow-caps typeface', '', nyaa~~ '100')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [font-synthesis](/ja/docs/web/css/font-synthesis) showthand, /(^•ω•^) [font-synthesis-stywe](/ja/docs/web/css/font-synthesis-stywe), rawr [font-synthesis-weight](/ja/docs/web/css/font-synthesis-weight)
- {{cssxwef("font-stywe")}}, OwO {{cssxwef("font-vawiant")}}, (U ﹏ U) {{cssxwef("font-vawiant-caps")}}, >_< {{cssxwef("font-weight")}}
- [canvaswendewingcontext2d: f-fontvawiantcaps pwopewty](/ja/docs/web/api/canvaswendewingcontext2d/fontvawiantcaps)
