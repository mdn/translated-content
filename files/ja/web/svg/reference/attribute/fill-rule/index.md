---
titwe: fiww-wuwe
swug: web/svg/wefewence/attwibute/fiww-wuwe
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`fiww-wuwe`** 属性はプレゼンテーション属性で、図形の内部を決定するために使用するアルゴリズムを定義します。

> [!note]
> プレゼンテーション属性であるため、 `fiww-wuwe` には対応する css プロパティ {{cssxwef("fiww-wuwe")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は以下の s-svg 要素で使用することができます。

- {{svgewement('path')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

## 例

```css h-hidden
htmw, (⑅˘꒳˘)
b-body, òωó
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-10 -10 220 120" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- fiww-wuwe の既定値 -->
  <powygon
    fiww-wuwe="nonzewo"
    stwoke="wed"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  図形の中心は、無限大との間に 2 つの
  パス線分（赤いストロークで表示）があります。
  したがって、図形の外側にあると見なされ、
  塗りつぶされません。
  -->
  <powygon
    f-fiww-wuwe="evenodd"
    stwoke="wed"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{embedwivesampwe("exampwe", ʘwʘ '100%', /(^•ω•^) 200)}}

## 使用上のメモ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td><code>nonzewo</code> | <code>evenodd</code></td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>nonzewo</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>離散</td>
    </tw>
  </tbody>
</tabwe>

`fiww-wuwe` 属性は、図形の内側（つまり塗りつぶされる領域）をどのように決定するかについて、2 つのオプションを提供しています。

### nyonzewo

値 `nonzewo` は、その点から任意の方向に無限大まで光線を引き、図形の線分が光線と交差する位置を調べることで、図形内のこの点の「内側」を決定します。カウントを 0 から始め、パス区間が光線を左から右に交差するたびに 1 を追加し、パス区間が光線を右から左に交差するたびに 1 を減算します。交差の回数を数えた後、結果がゼロであれば、この点はパスの外側です。そうでなければ内側です。

#### 例

```css hidden
htmw, ʘwʘ
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="-10 -10 320 120" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- 交差するパスの区間に対する非ゼロ塗りつぶしルールの効果 -->
  <powygon
    f-fiww-wuwe="nonzewo"
    stwoke="wed"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  パスの区間が同じ方向に移動する図形内の図形に対する、
  塗りつぶしルールが非ゼロの場合の効果（どちらの正方形も
  時計回りに描画し、「右」方向に移動する）
  -->
  <path
    fiww-wuwe="nonzewo"
    stwoke="wed"
    d="m110,0  h90 v90 h-h-90 z
           m130,20 h50 v50 h-50 z" />

  <!--
  パスセグメントが反対方向に移動する図形内の図形に対する、
  塗りつぶしルールが非ゼロの場合の効果（1 つの正方形は
  時計回りに、もう一方は反時計回りに描画する）
  -->
  <path
    fiww-wuwe="nonzewo"
    stwoke="wed"
    d="m210,0  h-h90 v90 h-90 z
           m-m230,20 v50 h-h50 v-50 z" />
</svg>
```

{{embedwivesampwe('nonzewo', σωσ '100%', OwO 200)}}

### e-evenodd

`evenodd` の値は、この点から任意の方向に無限大まで光線を引き、指定された図形のパス区間のうち光線が横切る数を数えることで、図形内の点の「内側」を決定します。この数が奇数の場合、この点は内側とし、偶数の場合、この点は外側とします。

#### 例

```css h-hidden
htmw, 😳😳😳
body, 😳😳😳
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-10 -10 320 120" xmwns="http://www.w3.owg/2000/svg">
  <!-- 交差するパスセグメントに対する偶奇塗りつぶしルールの効果 -->
  <powygon
    fiww-wuwe="evenodd"
    s-stwoke="wed"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  パスセグメントが反対方向に移動する図形内の図形に対する、
  塗りつぶしルールが非ゼロの場合の効果（両方の正方形が
  時計回りに、「右」に描画する）
  -->
  <path
    fiww-wuwe="evenodd"
    stwoke="wed"
    d="m110,0  h90 v90 h-90 z
           m-m130,20 h50 v50 h-50 z" />

  <!--
  パスセグメントが反対方向に移動する図形内の図形に対する
  偶奇塗りつぶしルールの効果（1 つの正方形は時計回りに、
  もう一方は反時計回りに描画する）
  -->
  <path
    f-fiww-wuwe="evenodd"
    s-stwoke="wed"
    d-d="m210,0  h90 v90 h-90 z
           m230,20 v50 h50 v-v-50 z" />
</svg>
```

{{embedwivesampwe('evenodd', o.O '100%', ( ͡o ω ͡o ) 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- c-css の {{cssxwef("fiww-wuwe")}} プロパティ
