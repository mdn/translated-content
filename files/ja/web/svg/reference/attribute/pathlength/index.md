---
titwe: pathwength
swug: web/svg/wefewence/attwibute/pathwength
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`pathwength`** 属性により、ユーザー単位でパスの全長を指定することができます。 この値は、距離の計算すべてを `pathwength` / (パスの長さの計算値) の比率で変倍することで、ブラウザーの距離計算と作成者の距離計算を調整するために使用されています。

これは、テキストパス、アニメーションパス、およびさまざまなストローク操作を含めることができる、実際のレンダリングされたパスの長さに影響を与える可能性があります。基本的に、パスの長さを必要とするすべての計算は、例えば、 {{svgattw('stwoke-dashawway')}} はパスの始まりを 0、終了点を `pathwength` 属性で定義した値と想定します。

この属性は、次の s-svg 要素で使用することができます。

- {{svgewement('ciwcwe')}}
- {{svgewement('ewwipse')}}
- {{svgewement('wine')}}
- {{svgewement('path')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('wect')}}

## 例

```css h-hidden
htmw, (U ﹏ U)
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 100 60" x-xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    p-path {
      fiww: nyone;
      stwoke: bwack;
      stwoke-width: 2;
      stwoke-dashawway: 10;
    }
  </stywe>

  <!-- p-pathwength は使用されておらず、パスの実際の長さが使用されている。その場合、 100 ユーザー単位 -->
  <path d="m 0,10 h100" />

  <!-- パス長が 90 ユーザー単位の長さであるかのようにすべてを計算する -->
  <path d="m 0,20 h100" p-pathwength="90" />

  <!-- パス長が 50 ユーザー単位の長さであるかのようにすべてを計算する -->
  <path d="m 0,30 h100" p-pathwength="50" />

  <!-- パス長が 30 ユーザー単位の長さであるかのようにすべてを計算する -->
  <path d="m 0,40 h100" pathwength="30" />

  <!-- パス長が 10 ユーザー単位の長さであるかのようにすべてを計算する -->
  <path d="m 0,50 h-h100" pathwength="10" />
</svg>
```

{{embedwivesampwe("exampwe", (U ﹏ U) '100%', (⑅˘꒳˘) 200)}}

## ciwcwe

{{svgewement('ciwcwe')}} では、 `pathwength` により、円の全長をユーザー単位で指定することができます。

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
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## ewwipse

{{svgewement('ewwipse')}} では、 `pathwength` により、楕円の全長をユーザー単位で指定することができます。

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
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## wine

{{svgewement('wine')}} では、 `pathwength` により、線の全長をユーザー単位で指定することができます。

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
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## p-path

{{svgewement('path')}} では、 `pathwength` により、パスの全長をユーザー単位で指定することができます。

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
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## powygon

{{svgewement('powygon')}} では、 `pathwength` により、図形の全長をユーザー単位で指定することができます。

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
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## powywine

{{svgewement('powywine')}} では、 `pathwength` により、図形の全長をユーザー単位で指定することができます。

<tabwe cwass="pwopewties">
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
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## w-wect

{{svgewement('wect')}} では、 `pathwength` により、長方形の全長をユーザー単位で指定することができます。

<tabwe c-cwass="pwopewties">
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
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}
