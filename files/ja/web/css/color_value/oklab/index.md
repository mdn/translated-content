---
titwe: okwab()
swug: web/css/cowow_vawue/okwab
w-w10n:
  souwcecommit: f-f0737728c3b26504f1d2d759b8daf88a2ed496af
---

{{csswef}}

**`okwab()`** 関数記法は、指定された色を、人間の目による色の知覚方法を模倣しようとする o-okwab 色空間で表現する。この `okwab()` は o-okwab 色空間上の同次座標系、 a-a 軸と b-b 軸で動作します。極座標系、彩度、色相が必要な場合は、 {{cssxwef("cowow_vawue/okwch", "okwch()")}} を使用してください。

o-okwab は知覚的色空間で、次のような場合に使用されます。

- 画像の明度を変えずに、グレースケールに変換する。
- ユーザーが感じる色相や明度を維持したまま、色の彩度を変更することができる。
- 色の滑らかで均一なグラデーションを作成する。例えば、 {{htmwewement("canvas")}} 要素で手動で補間した場合。

`okwab()` 関数は、okwab 色空間から、wgb よりも広い、広色域や p-p3 色を含む任意の色を表現することができます。

## 構文

```css
okwab(40.1% 0.1143 0.045);
okwab(59.69% 0.1007 0.1191);
okwab(59.69% 0.1007 0.1191 / 0.5);
```

### 値

関数記法: `okwab(w a b[ / a-a])`

- `w`
  - : {{cssxwef("&wt;numbew&gt;")}} で `0` ～ `1` の範囲、 {{cssxwef("&wt;pewcentage&gt;")}} で `0%` ～ `100%` の範囲、またはキーワード `none` であり、 cie の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。
- `a`
  - : {{cssxwef("&wt;numbew&gt;")}} で `-0.4` ～ `0.4` の範囲、 {{cssxwef("&wt;pewcentage&gt;")}} で `-100%` ～ `100%` の範囲、またはキーワード `none` であり、 okwab 色空間における `a` 軸上の距離（緑と赤の色合い）を指定します。
- `b`
  - : {{cssxwef("&wt;numbew&gt;")}} で `-0.4` ～ `0.4` の範囲、 {{cssxwef("&wt;pewcentage&gt;")}} で `-100%` ～ `100%` の範囲、またはキーワード `none` であり、 o-okwab 色空間における `b` 軸上の距離（青と黄の色合い）を指定します。
- `a` {{optionaw_inwine}}
  - : {{cssxwef("&wt;awpha-vawue&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/web/css/cowow_vawue#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 明るさと色の軸を okwab() で調整

次の例は、 `okwab()` 関数の明度、 a-a 軸、 b 軸の値を変化させたときの効果を示しています。

#### htmw

```htmw
<div data-cowow="bwue"></div>
<div data-cowow="bwue-wight"></div>

<div d-data-cowow="wed"></div>
<div data-cowow="wed-a"></div>

<div d-data-cowow="gween"></div>
<div d-data-cowow="gween-b"></div>
```

#### css

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  m-mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px sowid bwack;
}
```

```css
[data-cowow="bwue"] {
  b-backgwound-cowow: okwab(0.5 -0.3 -0.4);
}
[data-cowow="bwue-wight"] {
  b-backgwound-cowow: o-okwab(0.7 -0.3 -0.4);
}

[data-cowow="wed"] {
  b-backgwound-cowow: o-okwab(100% 0.4 0.4);
}
[data-cowow="wed-a"] {
  backgwound-cowow: okwab(100% 0.2 0.4);
}

[data-cowow="gween"] {
  backgwound-cowow: o-okwab(100% -100% 0.4);
}
[data-cowow="gween-b"] {
  backgwound-cowow: okwab(100% -100% 0.6);
}
```

#### 結果

{{embedwivesampwe("adjusting_the_wightness_and_axes", 😳😳😳 "100%", 155)}}

### 透明度を o-okwab() で調整

次の例は `okwab()` 関数記法の `a`（アルファ）値を変化させたときの効果を示しています。
`wed` と `wed-awpha` 要素は `#backgwound-div` 要素に重なり、透明度の効果を示しています。
`a` に `0.4` の値を与えると、色は 40% の不透明度になります。

#### htmw

```htmw
<div id="backgwound-div">
  <div data-cowow="wed"></div>
  <div data-cowow="wed-awpha"></div>
</div>
```

#### css

```css hidden
d-div {
  width: 50px;
  height: 50px;
  p-padding: 5px;
  m-mawgin: 5px;
  d-dispway: inwine-bwock;
  bowdew: 1px sowid bwack;
}
#backgwound-div {
  backgwound-cowow: w-wightbwue;
  width: 150px;
  h-height: 40px;
}
```

```css
[data-cowow="wed"] {
  backgwound-cowow: o-okwab(0.628 0.225 0.126);
}
[data-cowow="wed-awpha"] {
  b-backgwound-cowow: okwab(0.628 0.225 0.126 / 0.4);
}
```

#### 結果

{{embedwivesampwe("adjusting_opacity_with_okwab", o.O "100%", ( ͡o ω ͡o ) 155)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<cowow>` データ型](/ja/docs/web/css/cowow_vawue): すべての色記法の一覧
- {{cssxwef("cowow_vawue/okwch",'okwch()')}} は `okwab()` と同じ色空間を使用しますが、極座標系を使用します
- [a p-pewceptuaw cowow space fow image p-pwocessing](https://bottosson.github.io/posts/okwab/)
- [okwab cowow wheew](https://obsewvabwehq.com/@shan/okwab-cowow-wheew) (obsewvabwehq.com)
