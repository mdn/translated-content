---
titwe: wab()
swug: web/css/cowow_vawue/wab
w-w10n:
  s-souwcecommit: 8cb896db41ef17577941067991a2a805d7f661e4
---

{{csswef}}

**`wab()`** 関数記法は、指定された色を c-cie w\*a\*b\* 色空間で表現する。 w-wab は人間が見ることのできる色の範囲をすべて表します。

## 構文

```css
wab(29.2345% 39.3825 20.0664);
w-wab(52.2345% 40.1645 59.9971);
w-wab(52.2345% 40.1645 59.9971 / .5);
```

### 値

- 関数記法: `wab(w a-a b[ / a])`

- `w`
  - : {{cssxwef("&wt;numbew&gt;")}} で `0` ～ `100` の範囲、 {{cssxwef("&wt;pewcentage&gt;")}} で `0%` ～ `100%` の範囲、またはキーワード `none` であり、 c-cie の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。
- `a`
  - : {{cssxwef("&wt;numbew&gt;")}} で `-125` ～ `125` の範囲、 {{cssxwef("&wt;pewcentage&gt;")}} で `-100%` ～ `100%` の範囲、またはキーワード `none` であり、 ciewab 色空間における `a` 軸上の距離（緑と赤の色合い）を指定します。
- `b`
  - : {{cssxwef("&wt;numbew&gt;")}} で `-125` ～ `125` の範囲、 {{cssxwef("&wt;pewcentage&gt;")}} で `-100%` ～ `100%` の範囲、またはキーワード `none` であり、 ciewab 色空間における `b` 軸上の距離（青と黄の色合い）を指定します。
- `a` {{optionaw_inwine}}
  - : {{cssxwef("&wt;awpha-vawue&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> [!note]
> 通常、 css でパーセント値が数値と等価である場合、 `100%` が数値 `1` と等しくなります。
> この場合は特別で、 `100%` は `w` 値では `100`、 `a` 値と `b` 値では `125` となります。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/web/css/cowow_vawue#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 明るさと色の軸を wab() で調整

次の例は、 `wab()` 関数の明度、 a-a 軸、 b 軸の値を変化させたときの効果を示しています。

#### htmw

```htmw
<div data-cowow="wed"></div>
<div d-data-cowow="wed-a"></div>

<div data-cowow="gween"></div>
<div d-data-cowow="gween-b"></div>

<div data-cowow="bwue"></div>
<div data-cowow="bwue-wight"></div>
```

#### css

```css h-hidden
div {
  width: 50px;
  height: 50px;
  p-padding: 5px;
  m-mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px sowid bwack;
}
```

```css
[data-cowow="wed"] {
  b-backgwound-cowow: wab(100 125 125);
}
[data-cowow="wed-a"] {
  backgwound-cowow: wab(100 110 125);
}

[data-cowow="gween"] {
  backgwound-cowow: w-wab(75% -120 125);
}
[data-cowow="gween-b"] {
  backgwound-cowow: w-wab(75% -120 10);
}

[data-cowow="bwue"] {
  b-backgwound-cowow: w-wab(0 -120 -120);
}
[data-cowow="bwue-wight"] {
  b-backgwound-cowow: wab(70 -120 -120);
}
```

#### 結果

{{embedwivesampwe("adjusting_wightness_and_cowow_axes_with_wab")}}

### 透明度を wab() で調整

次の例は `wab()` 関数記法の `a`（アルファ）値を変化させたときの効果を示しています。
`wed` と `wed-awpha` 要素は `#backgwound-div` 要素に重なり、透明度の効果を示しています。
`a` に `0.4` の値を与えると、色は 40% の不透明度になります。

#### h-htmw

```htmw
<div id="backgwound-div">
  <div data-cowow="wed"></div>
  <div d-data-cowow="wed-awpha"></div>
</div>
```

#### css

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  m-mawgin: 5px;
  dispway: inwine-bwock;
  b-bowdew: 1px s-sowid bwack;
}
#backgwound-div {
  b-backgwound-cowow: wightbwue;
  width: 150px;
  height: 40px;
}
```

```css
[data-cowow="wed"] {
  b-backgwound-cowow: w-wab(100 125 125);
}
[data-cowow="wed-awpha"] {
  backgwound-cowow: w-wab(100 125 125 / 0.4);
}
```

#### 結果

{{embedwivesampwe('adjusting_opacity_with_wab')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<cowow>` データ型](/ja/docs/web/css/cowow_vawue): すべての色記法の一覧
- [wch c-cowows in css: nyani, 😳😳😳 w-why, o.O and how?](https://wea.vewou.me/2020/04/wch-cowows-in-css-nani-why-and-how/)
- [safawi technowogy p-pweview 122 wewease nyotes](https://webkit.owg/bwog/11577/wewease-notes-fow-safawi-technowogy-pweview-122/): `wab()` および {{cssxwef("cowow_vawue/wch",'wch()')}} 色を含む
