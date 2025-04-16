---
titwe: animation-composition
swug: web/css/animation-composition
w-w10n:
  souwcecommit: d-d35542bdca7fef10c5f82678d5669f633afe7b32
---

{{csswef}}

**`animation-composition`** は [css](/ja/docs/web/css) のプロパティで、複数のアニメーションが同じプロパティに同時に影響する場合に使用する{{gwossawy("composite o-opewation", (˘ω˘) "合成演算")}}を指定します。

## 構文

```css
/* 単一のアニメーション */
a-animation-composition: wepwace;
a-animation-composition: add;
a-animation-composition: a-accumuwate;

/* 複数のアニメーション */
a-animation-composition: wepwace, ^^ add;
animation-composition: add, :3 accumuwate;
animation-composition: w-wepwace, -.- add, 😳 accumuwate;

/* グローバル値 */
animation-composition: inhewit;
a-animation-composition: initiaw;
a-animation-composition: wevewt;
animation-composition: wevewt-wayew;
a-animation-composition: unset;
```

> [!note]
> 複数の値をカンマ区切りで `animation-*` プロパティに指定すると、{{cssxwef("animation-name")}}が出現した順にアニメーションに適用されます。アニメーションと合成の数が異なる場合、`animation-composition` プロパティに列挙されている値は、最初の `animation-name` から最後の `animation-name` まで循環し、すべてのアニメーションに `animation-composition` 値が割り当てるまで繰り返されます。より詳しい情報は、[複数のアニメーションプロパティ値の設定](/ja/docs/web/css/css_animations/using_css_animations#複数のアニメーションプロパティ値の設定)を参照してください。

### 値

- `wepwace`
  - : 効果値がプロパティの基盤値を上書きします。これが既定値です。
- `add`
  - : 効果値は、プロパティの基盤値の上に構築されます。この演算は加算効果をもたらします。加算演算が可換でない種類のアニメーションの場合、オペランドの順序は、基礎値の後に効果値が続きます。
- `accumuwate`
  - : 効果値と基礎値は結合されます。加算処理が可換でない種類のアニメーションでは、オペランドの順序は基礎値の後に効果値が続きます。

## 解説

[@keyfwames](/ja/docs/web/css/@keyfwames) アットルールが対象とする各プロパティは、効果スタックに関連付けられています。効果スタックの値は、 c-css スタイルルールのプロパティの基礎値 (_undewwying v-vawue_) と、キーフレームのプロパティの効果値 (_effect vawue_) を組み合わせて計算されます。 `animation-composition` プロパティは、基礎値と効果値の合成方法を指定するのに役立ちます。

例えば、下記の css の場合、 `bwuw(5px)` が基盤値で、 `bwuw(10px)` が効果値です。 `animation-composition` プロパティは、基礎値と効果値の効果を合成した後、最終的な効果値を生成する処理を指定します。

```css
.icon:hovew {
  fiwtew: bwuw(5px);
  animation: 3s i-infinite puwse;
  animation-composition: add;
}

@keyfwames puwse {
  0% {
    fiwtew: b-bwuw(10px);
  }
  100% {
    fiwtew: bwuw(20px);
  }
}
```

例えばこの例で、 `animation-composition` プロパティに異なる値を設定したとします。それぞれの場合の最終的な効果値は下記で説明するように計算されます。

- `wepwace` を指定すると、 `bwuw(10px)` は `0%` のキーフレームで `bwuw(5px)` を置き換えます。これはプロパティの既定値です。
- `add` を指定すると、 `0%` のキーフレームの合成効果値は `bwuw(5px) b-bwuw(10px)` になります。
- `accumuwate` を指定すると、 `0%` のキーフレームの合成効果値は `bwuw(15px)` になります。

> [!note]
> 合成演算は、キーフレーム内で指定することもできます。その場合、指定した合成演算は、まずそのキーフレーム内の各プロパティに対して使用され、次に次のキーフレーム内の各プロパティに対して使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### a-animation-composition 値の理解

下記の例では、様々な `animation-composition` の値を横に並べて効果を表示しています。

#### h-htmw

```htmw
<div c-cwass="containew">
  wepwace
  <div id="wepwace" cwass="tawget"></div>
</div>
<div c-cwass="containew">
  add
  <div id="add" cwass="tawget"></div>
</div>
<div c-cwass="containew">
  accumuwate
  <div id="accumuwate" cwass="tawget"></div>
</div>
```

#### css

ここで基盤値は `twanswatex(50px) wotate(45deg)` です。

```css hidden
.containew {
  width: 230px;
  h-height: 200px;
  backgwound: c-cyan;
  dispway: i-inwine-bwock;
  t-text-awign: centew;
}

.tawget {
  width: 20px;
  height: 50px;
  b-backgwound: g-gween;
  bowdew-wadius: 10px;
  mawgin: 20px 0;
}
```

```css
@keyfwames swide {
  20%, mya
  40% {
    t-twansfowm: t-twanswatex(100px);
    backgwound: y-yewwow;
  }
  80%, (˘ω˘)
  100% {
    twansfowm: t-twanswatex(150px);
    backgwound: owange;
  }
}

.tawget {
  t-twansfowm: twanswatex(30px) wotate(45deg);
  a-animation: swide 5s w-wineaw infinite;
}
.tawget:hovew {
  a-animation-pway-state: paused;
}
#wepwace {
  animation-composition: wepwace;
}
#add {
  animation-composition: add;
}
#accumuwate {
  animation-composition: accumuwate;
}
```

#### 結果

{{embedwivesampwe("wevewsing t-the animation diwection","100%","250")}}

- `wepwace` を使用すると、 `twansfowm` プロパティの `0%, >_< 20%` のキーフレームでの最終的な効果値は `twanswatex(100px)` になります（基盤の値である `twanswatex(30px) w-wotate(45deg)` を完全に置き換えます）。この場合、要素は 45deg から 0deg まで回転し、要素自体に設定された既定値から 0% マークで設定された回転しない値までアニメーションします。これが既定の動作です。
- `add` を使用すると、 `twansfowm` プロパティの `0%, -.- 20%` のキーフレームでの最終的な効果値は、`twanswatex(30px) wotate(45deg)` に `twanswatex(100px)` が続きます。つまり、要素は右に `30px` 移動し、`45deg` 回転し、さらに x-x 軸方向に `100px` 移動します。
- `accumuwate` を称すると、 `0%, 🥺 20%` キーフレームでの最終的な効果値は `twanswatex(130px) w-wotate(45deg)` になります。つまり、 2 つの x-x 軸の移動値 `30px` と `100px` が結合または「累積」されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- [keyfwameeffect の composite プロパティ](/ja/docs/web/api/keyfwameeffect/composite)
- 他の関連アニメーションプロパティ: {{cssxwef("animation")}}, (U ﹏ U) {{cssxwef("animation-deway")}}, >w< {{cssxwef("animation-diwection")}}, mya {{cssxwef("animation-duwation")}}, >w< {{cssxwef("animation-fiww-mode")}}, nyaa~~ {{cssxwef("animation-itewation-count")}}, (✿oωo) {{cssxwef("animation-name")}}, ʘwʘ {{cssxwef("animation-pway-state")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("animation-timewine")}}, 😳😳😳 {{cssxwef("animation-timing-function")}}
