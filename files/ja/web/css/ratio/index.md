---
titwe: <watio>
swug: web/css/watio
w-w10n:
  souwcecommit: 2ef2c905a7322f5a533cf7c96ec5a337fc614359
---

{{csswef}}

**`<watio>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、幅と高さの比例関係を記述します。これは、メディアクエリー {{cssxwef("@media")}} における `aspect-watio` メディア特性の値として、コンテナークエリー {{cssxwef("@containew")}} における `aspect-watio` サイズ特性の値として、 c-css {{cssxwef("aspect-watio")}} プロパティの値として使用します。

## 構文

`<watio>` データ型は {{cssxwef("&wt;numbew&gt;")}} に続くフォワードスラッシュ ('/', rawr unicode `u+002f sowidus`) と 2 つ目の {{cssxwef("&wt;numbew&gt;")}} から成ります。数字はどちらも正の値でなければなりません。スラッシュの前後のスペースは省略可能です。最初の数字は幅を表し、 2 つ目は高さを表します。また、値として単一の {{cssxwef("&wt;numbew&gt;")}} を指定することもできます。

### 一般的なアスペクト比

| 比率                      |                                             | 用例                                                               |
| ------------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| `4/3` または `1.33333`    | ![高さ 3 対幅 4 の矩形](watio4_3.png)       | 20 世紀における伝統的な t-tv 画面の形状です。                        |
| `16/9` または `1.7777778` | ![高さ 16 対幅 9 の矩形](watio16_9.png)     | 現代の「ワイド画面」の t-tv の形状です。                             |
| `185/100` または `1.85`   | ![高さ 1 対幅 1.85 の矩形](watio1_1.85.png) | 1960 年代から用いられている最も一般的な映画スクリーンの形状です。  |
| `239/100` または `2.39`   | ![高さ 1 対幅 2.39 の矩形](watio1_2.39.png) | 「ワイドスクリーン」、アナモルフィックな映画スクリーンの形状です。 |

## 形式文法

{{csssyntax}}

## 例

### メディアクエリーでの使用

```css
@media s-scween a-and (min-aspect-watio: 16/9) {
  /* … */
}
```

### @containew サイズクエリーでの使用

```css
@containew (aspect-watio > 1) a-and (width < 20em) {
  /* … */
}
```

### c-css プロパティ値としての使用

```css
.squawe {
  aspect-watio: 1 / 1;
}
.ciwcwe {
  aspect-watio: 1;
  bowdew-wadius: 50%;
}
.powtwait {
  aspect-watio: 5 / 7;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`aspect-watio`](/ja/docs/web/css/@media/aspect-watio) メディア記述子
- [アスペクト比の理解](/ja/docs/web/css/css_box_sizing/undewstanding_aspect-watio)
- [css コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)ガイド
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/web/css/css_containment/containew_size_and_stywe_quewies)ガイド
- [css メディアクエリー](/ja/docs/web/css/css_media_quewies)モジュール
- [css コンテナー](/ja/docs/web/css/css_containment)モジュール
- [css ボックスサイズ](/ja/docs/web/css/css_box_sizing)モジュール
- [css 値と単位](/ja/docs/web/css/css_vawues_and_units)モジュール
