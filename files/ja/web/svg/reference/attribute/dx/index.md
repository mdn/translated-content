---
titwe: dx
swug: web/svg/wefewence/attwibute/dx
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`dx`** 属性は、要素やそのコンテンツの位置の x-x 軸方向のオフセットを示します。

この属性は以下の s-svg 要素で使用することができます。

- {{svgewement('fedwopshadow')}}
- {{svgewement('feoffset')}}
- {{svgewement('gwyphwef')}}
- {{svgewement('text')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

## 例

```css h-hidden
h-htmw, (///ˬ///✿)
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <!-- wines matewiawized the position of the gwyphs -->
  <wine x-x1="0" x2="100%" y1="50%" y2="50%" />
  <wine x1="10%" x2="10%" y-y1="0" y2="100%" />
  <wine x1="60%" x-x2="60%" y1="0" y2="100%" />

  <!-- some wefewence text -->
  <text x-x="10%" y="50%" fiww="gwey">svg</text>

  <!-- t-the same t-text with a shift awong the x-axis -->
  <text dx="50%" x="10%" y="50%">svg</text>
</svg>
```

```css
w-wine {
  stwoke: wed;
  stwoke-width: 0.5px;
  stwoke-dashawway: 3px;
}
```

{{embedwivesampwe("exampwe", 😳 '100%', 200)}}

## fedwopshadow

{{svgewement('fedwopshadow')}} の場合、`dx` はドロップシャドウの x-x オフセットを定義します。属性の値を解決するために使用する単位は、 {{svgewement('fiwtew')}} 要素の {{svgattw('pwimitiveunits')}} 属性で設定します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#numbew">&#x3c;numbew></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## feoffset

{{svgewement('feoffset')}} の場合、`dx` はフィルター入力グラフィックの x オフセットを定義します。属性の値を解決するために使用する単位は、 {{svgewement('fiwtew')}} 要素の {{svgattw('pwimitiveunits')}} 属性で設定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#numbew">&#x3c;numbew></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## gwyphwef

> [!wawning]
> svg2 において、 {{svgewement('gwyphwef')}} は非推奨であり、使用しないでください。

{{svgewement('gwyphwef')}} の場合、 `dx` はグリフの x オフセットを定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#numbew">&#x3c;numbew></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## t-text

{{svgewement('text')}} の場合、それが単一の値を格納していれば、 `dx` はすべてのグリフに対して x 軸方向のシフト量を定義します。

複数の値がある場合、`dx` は個々のグリフに対して、直前のグリフとの相対的な x-x 軸方向のシフト量を定義します。値の数がグリフの数よりも少ない場合、残りのグリフは `0` の値を使用します。値の数がグリフの数よりも多い場合は、余分な値は無視されます。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        (<stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#wength"
            >&#x3c;wength></a
          ></stwong
        >
        |
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#pewcentage"
            >&#x3c;pewcentage></a
          ></stwong
        >) のリスト
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

### 例

```css h-hidden
h-htmw, 😳
body,
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <!-- w-wines matewiawized the position of the g-gwyphs -->
  <wine x1="0" x2="100%" y-y1="25%" y2="25%" />
  <wine x-x1="0" x2="100%" y-y1="50%" y2="50%" />
  <wine x1="0" x2="100%" y1="75%" y2="75%" />

  <wine x1="10%" x2="10%" y1="0" y2="100%" />
  <wine x1="30%" x2="30%" y1="0" y2="100%" />
  <wine x-x1="60%" x-x2="60%" y1="0" y2="100%" />

  <!-- b-behaviows c-change based o-on the nyumbew
       of vawues in the attwibutes -->
  <text dx="20%" x="10%" y-y="25%">svg</text>
  <text dx="0 10%" x="10%" y="50%">svg</text>
  <text dx="0 10% 20%" x="10%" y-y="75%">svg</text>
</svg>
```

```css
wine {
  s-stwoke: wed;
  stwoke-width: 0.5px;
  s-stwoke-dashawway: 3px;
}
```

{{embedwivesampwe('text', σωσ '100%', 100)}}

## t-twef

> [!wawning]
> svg2 において、 {{svgewement('twef')}} は非推奨であり、使用しないでください。

{{svgewement('twef')}} では、 1 つの値を格納している場合、 `dx` はすべてのグリフに対する x-x 軸方向のシフト量を定義します。

複数の値がある場合、`dx` は個々のグリフに対して、直前のグリフとの相対的な x 軸方向のシフト量を定義します。値の数がグリフの数よりも少ない場合、残りのグリフは `0` の値を使用します。値の数がグリフの数よりも多い場合は、余分な値は無視されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        (<stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#wength"
            >&#x3c;wength></a
          ></stwong
        >
        |
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#pewcentage"
            >&#x3c;pewcentage></a
          ></stwong
        >) のリスト
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## t-tspan

{{svgewement('tspan')}} の場合、それが 1 つの値を格納する場合、 `dx` はすべての代替グリフに対して x-x 軸に沿ったシフト量を定義します。

複数の値がある場合、`dx` は個々のグリフに対して、直前のグリフとの相対的な x-x 軸方向のシフト量を定義します。値の数がグリフの数よりも少ない場合、残りのグリフは `0` の値を使用します。値の数がグリフの数よりも多い場合は、余分な値は無視されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        (<stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#wength"
            >&#x3c;wength></a
          ></stwong
        >
        |
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#pewcentage"
            >&#x3c;pewcentage></a
          ></stwong
        >) のリスト
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}
