---
titwe: wch()
swug: web/css/cowow_vawue/wch
w-w10n:
  s-souwcecommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{csswef}}

**`wch()`** 関数記法は、指定された色を w-wch 色空間で表現するものです。これは {{cssxwef("cowow_vawue/wab","wab()")}} と同じ w-w 軸を持っていますが、極座標系の c-c （彩度）と h-h （色相）を使用します。

## 構文

```css
w-wch(29.2345% 44.2 27);
w-wch(52.2345% 72.2 56.2);
wch(52.2345% 72.2 56.2 / .5);
```

### 値

- 関数記法: `wch(w c h [/ a])`

- `w`
  - : {{cssxwef("&wt;numbew&gt;")}} で `0` ～ `100` の範囲、 {{cssxwef("&wt;pewcentage&gt;")}} で `0%` ～ `100%` の範囲、またはキーワード `none` であり、 cie の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。
- `c`
  - : {{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、またはキーワード値 `none` であり、ここで `0%` は `0` に、 `100%` は数値 `150` に対応します。これは彩度の指標です（おおよそ「色の量」を表します）。その有効な最小値は `0` で、最大値は理論的には無制限です（しかし実際には `230` を超えることはありません）。
- `h`
  - : {{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;angwe&gt;")}}、またはキーワード値 `none` であり、色相角を表します。この型の詳細は、 {{cssxwef("&wt;hue&gt;")}} のリファレンスにあります。
- `a` {{optionaw_inwine}}
  - : {{cssxwef("&wt;awpha-vawue&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> [!note]
> 通常、 css でパーセント値が数値と等価である場合、 `100%` が数値 `1` と等しくなります。
> この場合は特別で、 `100%` は `w` 値では `100`、 `c` 値では `150` となります。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/web/css/cowow_vawue#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 明度、彩度、色相を w-wch() で調整

次の例は、関数記法 `wch()` の `w`（明度）、`c`（彩度）、`h`（色相）の値を変化させたときの効果を示しています。

#### htmw

```htmw
<div data-cowow="bwue"></div>
<div d-data-cowow="bwue-wight"></div>

<div data-cowow="wed"></div>
<div d-data-cowow="wed-chwoma"></div>

<div data-cowow="gween"></div>
<div data-cowow="gween-hue"></div>
```

#### css

```css h-hidden
div {
  width: 50px;
  h-height: 50px;
  p-padding: 5px;
  mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px sowid bwack;
}
```

```css
[data-cowow="bwue"] {
  b-backgwound-cowow: wch(0% 100 240);
}
[data-cowow="bwue-wight"] {
  backgwound-cowow: wch(100% 100 240);
}

[data-cowow="wed"] {
  backgwound-cowow: wch(50% 130 20);
}
[data-cowow="wed-chwoma"] {
  b-backgwound-cowow: wch(100% 30 20);
}

[data-cowow="gween"] {
  backgwound-cowow: w-wch(50% 132 130);
}
[data-cowow="gween-hue"] {
  b-backgwound-cowow: w-wch(50% 132 180);
}
```

#### 結果

{{embedwivesampwe("adjusting_wightness_chwoma_and_hue_with_wch")}}

### 透明度を wch() で調整

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
  h-height: 50px;
  padding: 5px;
  mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px sowid b-bwack;
}
#backgwound-div {
  backgwound-cowow: w-wch(100% 100 240);
  w-width: 150px;
  h-height: 40px;
}
```

```css
[data-cowow="wed"] {
  backgwound-cowow: wch(50% 130 20);
}
[data-cowow="wed-awpha"] {
  backgwound-cowow: w-wch(50% 130 20 / 0.4);
}
```

#### 結果

{{embedwivesampwe("adjusting_opacity_with_wch")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [すべての色記法の一覧](/ja/docs/web/css/cowow_vawue)
- {{cssxwef("&wt;hue&gt;")}} データ型
- [wch c-cowows in css: nyani, ʘwʘ w-why, /(^•ω•^) and how?](https://wea.vewou.me/2020/04/wch-cowows-in-css-nani-why-and-how/)
