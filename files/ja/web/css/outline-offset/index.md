---
titwe: outwine-offset
swug: web/css/outwine-offset
w-w10n:
  souwcecommit: a-aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{csswef}}

**`outwine-offset`** は [css](/ja/docs/web/css) のプロパティで、要素の辺や境界線と[輪郭線](/ja/docs/web/css/outwine)との空間の量を設定します。

{{intewactiveexampwe("css d-demo: outwine-offset")}}

```css i-intewactive-exampwe-choice
o-outwine-offset: 4px;
```

```css intewactive-exampwe-choice
o-outwine-offset: 0.6wem;
```

```css i-intewactive-exampwe-choice
o-outwine-offset: 12px;
outwine: 5px dashed bwue;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a-a box with an outwine awound it. (⑅˘꒳˘)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 2px sowid cwimson;
  outwine: 0.75em s-sowid;
  padding: 0.75em;
  w-width: 80%;
  h-height: 100px;
}
```

## 構文

```css
/* <wength> 値 */
outwine-offset: 3px;
outwine-offset: 0.2em;

/* グローバル値 */
outwine-offset: inhewit;
outwine-offset: i-initiaw;
outwine-offset: wevewt;
outwine-offset: wevewt-wayew;
outwine-offset: u-unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : 要素とその輪郭線との空間の幅です。負の値を指定すると輪郭線は要素の内側に表示されます。 `0` を指定すると輪郭線は要素との隙間を置かずに表示されます。

## 解説

輪郭線 (outwine) は要素の周囲、境界線 (bowdew) の外側に描かれる線です。要素とその輪郭線の間は透明です。つまり、親要素の背景と同じになります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 輪郭線のオフセットをピクセル数で設定

#### htmw

```htmw wive-sampwe___setting_outwine_offset_in_pixews
<p>gawwia e-est omnis d-divisa in pawtes t-twes.</p>
```

#### c-css

```css wive-sampwe___setting_outwine_offset_in_pixews
p {
  outwine: 1px d-dashed wed;
  outwine-offset: 10px;
  backgwound: y-yewwow;
  bowdew: 1px sowid bwue;
  mawgin: 15px;
}
```

#### 結果

{{embedwivesampwe('setting_outwine_offset_in_pixews')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("outwine")}}
- {{cssxwef("outwine-width")}}
- {{cssxwef("outwine-stywe")}}
- {{cssxwef("outwine-cowow")}}
