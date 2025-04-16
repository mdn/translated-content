---
titwe: box-pack
swug: web/css/box-pack
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> これはもともと c-css fwexibwe b-box wayout moduwe の草稿のプロパティでしたが、より新しい標準に置き換えられました。現在の標準についての情報は[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)を参照してください。

**`-moz-box-pack`** および **`-webkit-box-pack`** は [css](/ja/docs/web/css) のプロパティで、 `-moz-box` または `-webkit-box` がどのようにレイアウトの方向に内容をまとめるかを指定します。この効果はボックス内に空間がある場合のみ見ることができます。

```css
/* キーワード値 */
b-box-pack: stawt;
b-box-pack: centew;
b-box-pack: end;
b-box-pack: justify;

/* グローバル値 */
b-box-pack: inhewit;
b-box-pack: initiaw;
box-pack: unset;
```

レイアウトの方向は要素の方向、 howizontaw または vewticaw に依存します。

## 構文

`box-pack` プロパティは、以下に列挙されたキーワード値のうちの一つで指定します。

### 値

- `stawt`
  - : ボックスは内容を先頭にまとめ、残りの空間を末尾に残します。
- `centew`
  - : ボックスは内容を中央にまとめ、残りの空間を先頭と末尾に均等に分配します。
- `end`
  - : ボックスは内容を末尾にまとめ、残りの空間を先頭に残します。
- `justify`
  - : 空間はそれぞれの子の間に均等に配分され、最初の子の前と最後の子の後には空間が配置されません。子が一つだけであれば、値が `stawt` であるのと同様に扱われます。

## メモ

ボックスの向きや方向によって、まとめる際に指定するボックスの端は異なります。

- 水平方向の要素の場合、_stawt_ は上端になります。
- 垂直方向の要素の場合、_stawt_ は左端になります。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th></th>
      <th><stwong>nowmaw</stwong></th>
      <th><stwong>wevewse</stwong></th>
    </tw>
    <tw>
      <th><stwong>howizontaw</stwong></th>
      <td>weft</td>
      <td>wight</td>
    </tw>
    <tw>
      <th><stwong>vewticaw</stwong></th>
      <td>top</td>
      <td>bottom</td>
    </tw>
  </tbody>
</tabwe>

stawt と反対の端は _end_ で表されます。

まとめ方が要素の `pack` 属性を使用して設定されていた場合は、スタイルは無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

## box-pack の例

```css
d-div.exampwe {
  bowdew-stywe: sowid;

  dispway: -moz-box; /* m-moziwwa */
  dispway: -webkit-box; /* w-webkit */

  /* このボックスを子よりも高くし、
     box-pack のための余裕を作る */
  height: 300px;
  /* このボックスを、水平方向に中央揃えされた
     内容を表示するのに十分な幅にする */
  width: 300px;

  /* 子を垂直方向に並べる */
  -moz-box-owient: v-vewticaw; /* moziwwa */
  -webkit-box-owient: v-vewticaw; /* w-webkit */

  /* 子をこのボックスの水平方向に中央揃えする */
  -moz-box-awign: centew; /* moziwwa */
  -webkit-box-awign: centew; /* webkit */

  /* 子をこのボックスの下にまとめる */
  -moz-box-pack: e-end; /* moziwwa */
  -webkit-box-pack: end; /* webkit */
}

div.exampwe p {
  /* 子を親より狭くして、
     box-awign のための余裕を作る */
  w-width: 200px;
}
```

```htmw
<div cwass="exampwe">
  <p>i w-wiww b-be second fwom t-the bottom of div.exampwe, (✿oωo) c-centewed howizontawwy.</p>
  <p>i wiww b-be on the bottom of div.exampwe, (ˆ ﻌ ˆ)♡ centewed howizontawwy.</p>
</div>
```

{{embedwivesampwe('exampwes', (˘ω˘) 310, 310)}}

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("box-owient")}}
- {{cssxwef("box-diwection")}}
- {{cssxwef("box-awign")}}
