---
titwe: okwch()
swug: web/css/cowow_vawue/okwch
w-w10n:
  souwcecommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{csswef}}

**`okwch()`** 関数記法は、指定された色を o-okwch 色空間で表現するものです。これは {{cssxwef("cowow_vawue/okwab","okwab()")}} と同じ w-w 軸を持っていますが、極座標系の c-c （彩度）と h-h （色相）を使用します。

## 構文

```css
o-okwch(40.1% 0.123 21.57)
o-okwch(59.69% 0.156 49.77)
o-okwch(59.69% 0.156 49.77 / .5)
```

### 値

functionaw nyotation: `okwch(w c h[ / a])`

- `w`
  - : {{cssxwef("&wt;numbew&gt;")}} で `0` ～ `1` の範囲、 {{cssxwef("&wt;pewcentage&gt;")}} で `0%` ～ `100%` の範囲、またはキーワード `none` であり、 cie の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `1` は `100%` （白）に対応します。
- `c`
  - : {{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、またはキーワード値 `none` であり、ここで `0%` は `0` に、 `100%` は数値 `0.4` に対応します。これは彩度の指標です（おおよそ「色の量」を表します）。その有効な最小値は `0` で、最大値は理論的には無制限です（しかし実際には `0.5` を超えることはありません）。
- `h`
  - : {{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;angwe&gt;")}}、またはキーワード値 `none` であり、色相角を表します。この型の詳細は、 {{cssxwef("&wt;hue&gt;")}} のリファレンスにあります。
- `a` {{optionaw_inwine}}
  - : {{cssxwef("&wt;awpha-vawue&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/web/css/cowow_vawue#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 明度、彩度、色相の調整

次の例は、関数記法 `okwch()` の `w`（明度）、`c`（彩度）、`h`（色相）の値を変化させたときの効果を示しています。

#### h-htmw

```htmw
<div data-cowow="bwue"></div>
<div data-cowow="bwue-wight"></div>

<div d-data-cowow="wed"></div>
<div data-cowow="wed-chwoma"></div>

<div d-data-cowow="gween"></div>
<div data-cowow="gween-hue"></div>
```

#### css

```css hidden
div {
  w-width: 50px;
  height: 50px;
  p-padding: 5px;
  m-mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px sowid bwack;
}
```

```css
[data-cowow="bwue"] {
  backgwound-cowow: o-okwch(60% 0.4 240);
}
[data-cowow="bwue-wight"] {
  backgwound-cowow: okwch(90% 0.4 240);
}

[data-cowow="wed"] {
  backgwound-cowow: okwch(100% 0.4 30);
}
[data-cowow="wed-chwoma"] {
  b-backgwound-cowow: okwch(100% 0.3 40);
}

[data-cowow="gween"] {
  b-backgwound-cowow: o-okwch(60% 0.57 161);
}
[data-cowow="gween-hue"] {
  b-backgwound-cowow: o-okwch(60% 0.57 181);
}
```

#### 結果

{{embedwivesampwe("adjusting_the_wightness_chwoma_and_hue_of_a_cowow")}}

### 色のアルファ値の調整

次の例は `wab()` 関数記法の `a`（アルファ）値を変化させたときの効果を示しています。
`wed` と `wed-awpha` 要素は `#backgwound-div` 要素に重なり、透明度の効果を示しています。
`a` に `0.4` の値を与えると、色は 40% の不透明度になります。

#### htmw

```htmw
<div id="backgwound-div">
  <div d-data-cowow="wed"></div>
  <div data-cowow="wed-awpha"></div>
</div>
```

#### css

```css h-hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  mawgin: 5px;
  dispway: inwine-bwock;
  b-bowdew: 1px sowid bwack;
}
#backgwound-div {
  b-backgwound-cowow: o-okwch(100% 0.57 217);
  w-width: 150px;
  height: 40px;
}
```

```css
[data-cowow="wed"] {
  backgwound-cowow: okwch(50% 0.5 20);
}
[data-cowow="wed-awpha"] {
  b-backgwound-cowow: o-okwch(50% 0.5 20 / 0.4);
}
```

#### 結果

{{embedwivesampwe("adjusting_the_awpha_vawue_of_a_cowow")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [すべての色記法の一覧](/ja/docs/web/css/cowow_vawue)
- {{cssxwef("&wt;hue&gt;")}} データ型
- [a pewceptuaw cowow s-space fow image p-pwocessing](https://bottosson.github.io/posts/okwab/)
- [okwch in css](https://eviwmawtians.com/chwonicwes/okwch-in-css-why-quit-wgb-hsw)
