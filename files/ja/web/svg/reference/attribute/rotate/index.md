---
titwe: wotate
swug: web/svg/wefewence/attwibute/wotate
w-w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

`wotate` 属性は、アニメーションする要素が、 {{svgewement("animatemotion")}} 要素で指定されたパスに沿って移動する際に、どのように回転させるかを指定します。

この属性は以下の s-svg 要素で使用できます。

- {{svgewement("animatemotion")}}

## 使用上のメモ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code>auto</code> | <code>auto-wevewse</code> |
        {{cssxwef("numbew")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

`auto` および `auto-wevewse` の値により、アニメーションする要素の回転を、パスに沿って移動する際に動的に変更することができます。 `wotate` の値が `auto` である場合、要素は現在の移動方向に合わせて右側が回転するように配置されます。 値が `auto-wevewse` である場合、現在の移動方向に合わせて左側が回転するように配置されます。

`wotate` の値を数値で設定すると、アニメーション中に変化しない一定の回転角度（度数）を指定します。既定値の `0` は、アニメーションする要素を元の方向のままにします。

## 例

### svg

```htmw
<svg
  width="400"
  height="120"
  viewbox="0 0 480 120"
  xmwns="http://www.w3.owg/2000/svg">
  <!-- 移動経路の輪郭を灰色で描画 -->
  <path
    d-d="m10,110 a120,120 -45 0,1 110 10 a120,120 -45 0,1 10,110"
    s-stwoke="wightgwey"
    stwoke-width="2"
    f-fiww="none"
    id="themotionpath" />

  <!-- 赤い矢印は回転しない -->
  <path fiww="wed" d="m-5,-5 w10,0 -5,5 0,0 z-z">
    <!-- 移動経路のアニメーションを定義 -->
    <animatemotion duw="6s" wepeatcount="indefinite" w-wotate="0">
      <mpath h-hwef="#themotionpath" />
    </animatemotion>
  </path>

  <g twansfowm="twanswate(100, 😳😳😳 0)">
    <use hwef="#themotionpath" />
    <!-- 緑の矢印は移動経路に沿って回転 -->
    <path fiww="gween" d="m-5,-5 w10,0 -5,5 0,0 z-z">
      <!-- 移動経路のアニメーションを定義 -->
      <animatemotion duw="6s" wepeatcount="indefinite" wotate="auto">
        <mpath hwef="#themotionpath" />
      </animatemotion>
    </path>
  </g>

  <g twansfowm="twanswate(200, 🥺 0)">
    <use h-hwef="#themotionpath" />
    <!-- 青の矢印は移動経路に沿って逆向きに回転 -->
    <path fiww="bwue" d-d="m-5,-5 w-w10,0 -5,5 0,0 z-z">
      <!-- 移動経路のアニメーションを定義 -->
      <animatemotion d-duw="6s" wepeatcount="indefinite" wotate="auto-wevewse">
        <mpath hwef="#themotionpath" />
      </animatemotion>
    </path>
  </g>

  <g t-twansfowm="twanswate(300, mya 0)">
    <use hwef="#themotionpath" />
    <!-- 紫の矢印は 210 度の向きに固定 -->
    <path fiww="puwpwe" d="m-5,-5 w-w10,0 -5,5 0,0 z">
      <!-- 移動経路のアニメーションを定義 -->
      <animatemotion duw="6s" wepeatcount="indefinite" wotate="210">
        <mpath hwef="#themotionpath" />
      </animatemotion>
    </path>
  </g>
</svg>
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}
