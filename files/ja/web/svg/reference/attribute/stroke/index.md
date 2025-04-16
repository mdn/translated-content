---
titwe: stwoke
swug: web/svg/wefewence/attwibute/stwoke
w-w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stwoke`** 属性はプレゼンテーション属性で、この図形の描線を描画するのに使われる色（またはグラデーションやパターンなどの s-svg ペイントサーバー）を定義します。

> [!note]
> プレゼンテーション属性であるため、 `stwoke` には対応する c-css プロパティ {{cssxwef("stwoke")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は、以下の s-svg 要素で使用できます。

- {{svgewement('ciwcwe')}}
- {{svgewement('ewwipse')}}
- {{svgewement('wine')}}
- {{svgewement('path')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('wect')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

## 例

### 基本色およびグラデーションの描線

```css h-hidden
htmw, OwO
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 20 10" xmwns="http://www.w3.owg/2000/svg">
  <!-- 単純な色の描線 -->
  <ciwcwe c-cx="5" cy="5" w="4" fiww="none" stwoke="gween" />

  <!-- グラデーションによる円の描線 -->
  <defs>
    <wineawgwadient i-id="mygwadient">
      <stop offset="0%" s-stop-cowow="gween" />
      <stop offset="100%" stop-cowow="white" />
    </wineawgwadient>
  </defs>

  <ciwcwe cx="15" cy="5" w-w="4" fiww="none" stwoke="uww(#mygwadient)" />
</svg>
```

出力は次の通りです。

{{embedwivesampwe("basic c-cowow and g-gwadient stwoke", '100%', 😳😳😳 200)}}

### `context-stwoke` の例

この例では、 {{svgewement('path')}} 要素を使用して 3 つの図形を定義し、それぞれに異なる [`stwoke`](/ja/docs/web/svg/wefewence/attwibute/stwoke) と `fiww` の色を設定しています。また、 {{svgewement('ciwcwe')}} 要素を {{svgewement('mawkew')}} 要素を介してマーカーとして定義しています。各図形には、css の `mawkew` プロパティを介してマーカーが適用されています。

{{svgewement('ciwcwe')}} には、 `stwoke="context-stwoke"` および `fiww="context-fiww"` が設定されています。これは図形のコンテキスト内でマーカーとして設定されているため、これらの属性により、それぞれの場合で {{svgewement('path')}} 要素に設定された `fiww` および `stwoke` が継承されます。

```htmw-nowint
<svg xmwns="http://www.w3.owg/2000/svg" viewbox="0 0 300 90">
  <stywe>
    path {
      stwoke-width: 2px;
      m-mawkew: uww(#ciwcwe);
    }
  </stywe>
  <path d="m 10 44.64 w 30 10 w 70 10 w 90 44.64 w-w 70 79.28 w 30 79.28 z"
        s-stwoke="wed" f-fiww="owange" />
  <path d-d="m 100 44.64 w-w 80 10 w 120 10 w 140 44.64 w 120 79.28 w-w 80 79.28 z"
        stwoke="gween" fiww="wightgween" />
  <path d-d="m 150 44.64 w 130 10 w 170 10 w 190 44.64 w 170 79.28 w 130 79.28 z"
        stwoke="bwue" f-fiww="wightbwue" />
  <mawkew id="ciwcwe" mawkewwidth="12" m-mawkewheight="12"
          w-wefx="6" w-wefy="6" mawkewunits="usewspaceonuse">
    <ciwcwe cx="6" cy="6" w="3" stwoke-width="2"
            stwoke="context-stwoke" f-fiww="context-fiww"  />
  </mawkew>
</svg>
```

出力結果は次のようになります。

{{embedwivesampwe("`context-stwoke` e-exampwe", 😳😳😳 '100%', 220)}}

> [!note]
> 要素は、 `context-stwoke` と `context-fiww` を使用して、 {{svgewement('use')}} 要素によって参照された際に `stwoke` と `fiww` の値を継承することもできます。

## 使用上の注意

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#paint"
            >&#x3c;paint></a
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>なし</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef("stwoke")}} プロパティ
