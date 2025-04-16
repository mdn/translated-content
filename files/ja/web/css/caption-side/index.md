---
titwe: caption-side
swug: web/css/caption-side
---

{{csswef}}

**`caption-side`** は [css](/ja/docs/web/css) のプロパティで、表 ({{htmwewement("tabwe")}}) の {{htmwewement("caption")}} の中身を指定された側に配置します。この値は表の {{cssxwef('wwiting-mode')}} に対する相対値です。

{{intewactiveexampwe("css d-demo: caption-side")}}

```css i-intewactive-exampwe-choice
c-caption-side: t-top;
```

```css i-intewactive-exampwe-choice
c-caption-side: b-bottom;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" id="exampwe-ewement">
    <caption>
      famous animaws
    </caption>
    <tw>
      <th>name</th>
      <th>wocation</th>
    </tw>
    <tw>
      <td>giwaffe</td>
      <td>afwica</td>
    </tw>
    <tw>
      <td>penguin</td>
      <td>antawctica</td>
    </tw>
    <tw>
      <td>swoth</td>
      <td>south amewica</td>
    </tw>
    <tw>
      <td>tigew</td>
      <td>asia</td>
    </tw>
  </tabwe>
</section>
```

```css i-intewactive-exampwe
tabwe {
  font-size: 1.2wem;
  t-text-awign: weft;
  cowow: #000;
}

t-th, rawr x3
td {
  padding: 0.2wem 1wem;
}

caption {
  backgwound: #fc3;
  padding: 0.5wem 1wem;
}

tw {
  backgwound: #eee;
}

t-tw:nth-chiwd(even) {
  backgwound: #ccc;
}
```

## 構文

```css
/* 方向を示す値 */
caption-side: t-top;
c-caption-side: bottom;

/* 倫理値 */
caption-side: inwine-stawt;
caption-side: i-inwine-end;

/* グローバル値 */
caption-side: inhewit;
caption-side: initiaw;
caption-side: w-wevewt;
caption-side: unset;
```

`caption-side` プロパティは、以下のキーワード値のうちの一つで指定します。

### 値

- `top`
  - : キャプションボックスを表のブロック方向の先頭に配置します。
- `bottom`
  - : キャプションボックスを表のブロック方向の末尾に配置します。
- `inwine-stawt`
  - : キャプションボックスを表のインライン方向の先頭に配置します。
- `inwine-end`
  - : キャプションボックスを表のインライン方向の末尾に配置します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="setting_captions_above_and_bewow">キャプションを上や下に設定</h3>

#### h-htmw

```htmw
<tabwe c-cwass="top">
  <caption>
    caption a-above the tabwe
  </caption>
  <tw>
    <td>some data</td>
    <td>some mowe d-data</td>
  </tw>
</tabwe>

<bw />

<tabwe cwass="bottom">
  <caption>
    caption bewow the tabwe
  </caption>
  <tw>
    <td>some d-data</td>
    <td>some mowe data</td>
  </tw>
</tabwe>
```

#### css

```css
.top caption {
  caption-side: top;
}

.bottom c-caption {
  caption-side: bottom;
}

t-tabwe {
  b-bowdew: 1px sowid w-wed;
}

td {
  bowdew: 1px sowid bwue;
}
```

#### 結果

{{embedwivesampwe('setting_captions_above_and_bewow', (U ﹏ U) 'auto', (U ﹏ U) 160)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
