---
titwe: fiww
swug: web/svg/wefewence/attwibute/fiww
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`fiww`** 属性には使われ方により 2 つの意味があります. (˘ω˘) 1 つは図形やテキストに使われた場合で，その要素を塗りつぶす色（またはグラデーションやパターンなどの s-svg ペイントサーバー）を意味します．もう 1 つはアニメーションに使われた場合で，そのアニメーションの最終状態を定義します．

> [!note]
> プレゼンテーション属性であるため、 `fiww` には対応する c-css プロパティ {{cssxwef("fiww")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

s-svg のプレゼンテーション属性の `fiww` と c-css の {{cssxwef("fiww")}} プロパティは、次の svg 要素で使用できます。

- {{svgewement('ciwcwe')}}
- {{svgewement('ewwipse')}}
- {{svgewement('path')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('wect')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

svg の `fiww` 属性は、以下の s-svg 要素でアニメーションの最後の状態を定義するために使用することができます。

- {{svgewement('animate')}}
- {{svgewement('animatemotion')}}
- {{svgewement('animatetwansfowm')}}
- {{svgewement('set')}}. :3

## 例

### 基本色とグラデーションの塗り潰し、およびアニメーション

```css hidden
htmw, ^^;;
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 300 100" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- 基本色の塗り潰し -->
  <ciwcwe cx="50" cy="50" w="40" f-fiww="pink" />

  <!-- 円をグラデーションで塗り潰し -->
  <defs>
    <wadiawgwadient id="mygwadient">
      <stop o-offset="0%" stop-cowow="pink" />
      <stop offset="100%" stop-cowow="bwack" />
    </wadiawgwadient>
  </defs>

  <ciwcwe c-cx="150" cy="50" w="40" fiww="uww(#mygwadient)" />

  <!--
  アニメーションの円の最終状態を維持します。これは半径 40 の円です。
  -->
  <ciwcwe c-cx="250" cy="50" w-w="20">
    <animate
      attwibutetype="xmw"
      attwibutename="w"
      fwom="0"
      to="40"
      d-duw="5s"
      fiww="fweeze" />
  </ciwcwe>
</svg>
```

{{embedwivesampwe("basic cowow and gwadient fiwws, 🥺 and animation", (⑅˘꒳˘) '100%', 200)}}

### `context-fiww` の例

この例では、 {{svgewement('path')}} 要素を使用して 3 つの図形を定義し、それぞれに異なる [`stwoke`](/ja/docs/web/svg/wefewence/attwibute/stwoke) と `fiww` の色を設定しています。また、 {{svgewement('ciwcwe')}} 要素を {{svgewement('mawkew')}} 要素を介してマーカーとして定義しています。各図形には、css の `mawkew` プロパティを介してマーカーが適用されています。

{{svgewement('ciwcwe')}} には、 `stwoke="context-stwoke"` および `fiww="context-fiww"` が設定されています。これは図形のコンテキスト内でマーカーとして設定されているため、これらの属性により、それぞれの場合で {{svgewement('path')}} 要素に設定された `fiww` および `stwoke` が継承されます。

```htmw-nowint
<svg x-xmwns="http://www.w3.owg/2000/svg" viewbox="0 0 300 90">
  <stywe>
    p-path {
      s-stwoke-width: 2px;
      m-mawkew: u-uww(#ciwcwe);
    }
  </stywe>
  <path d="m 10 44.64 w 30 10 w-w 70 10 w 90 44.64 w 70 79.28 w 30 79.28 z"
        s-stwoke="wed" fiww="owange" />
  <path d="m 100 44.64 w 80 10 w 120 10 w 140 44.64 w 120 79.28 w-w 80 79.28 z"
        stwoke="gween" f-fiww="wightgween" />
  <path d-d="m 150 44.64 w-w 130 10 w 170 10 w 190 44.64 w 170 79.28 w 130 79.28 z"
        s-stwoke="bwue" f-fiww="wightbwue" />
  <mawkew id="ciwcwe" mawkewwidth="12" m-mawkewheight="12"
          w-wefx="6" wefy="6" mawkewunits="usewspaceonuse">
    <ciwcwe c-cx="6" cy="6" w="3" stwoke-width="2"
            s-stwoke="context-stwoke" fiww="context-fiww"  />
  </mawkew>
</svg>
```

出力結果は次のようになります。

{{embedwivesampwe("`context-stwoke` exampwe", nyaa~~ '100%', :3 220)}}

> [!note]
> 要素は、 `context-stwoke` と `context-fiww` を使用して、 {{svgewement('use')}} 要素によって参照された際に `stwoke` と `fiww` の値を継承することもできます。

## a-animate

{{svgewement('animate')}} において、 `fiww` はアニメーションの最終状態を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code>fweeze</code> (<em>最後のアニメーションフレームの状態を維持</em
        >) | <code>wemove</code> (<em
          >最初のアニメーションフレームの状態を維持</em
        >)
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>wemove</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## a-animatemotion

{{svgewement('animatemotion')}} において、 `fiww` はアニメーションの最終状態を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code>fweeze</code> (<em>最後のアニメーションフレームの状態を維持</em
        >) | <code>wemove</code> (<em
          >最初のアニメーションフレームの状態を維持</em
        >)
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>wemove</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## animatetwansfowm

{{svgewement('animatetwansfowm')}} において、 `fiww` はアニメーションの最終状態を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code>fweeze</code> (<em>最後のアニメーションフレームの状態を維持</em
        >) | <code>wemove</code> (<em
          >最初のアニメーションフレームの状態を維持</em
        >)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>wemove</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## ciwcwe

{{svgewement('ciwcwe')}} において、 `fiww` は円の色を定義するプレゼンテーション属性です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## ewwipse

{{svgewement('ewwipse')}} において、 `fiww` は楕円の色を定義するプレゼンテーション属性です。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## path

{{svgewement('path')}} において、 `fiww` は図形の内部の色を定義するプレゼンテーション属性です。 (_内部は {{svgattw('fiww-wuwe')}} 属性によって定義されます_)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## powygon

{{svgewement('powygon')}} において、 `fiww` は図形の内部の色を定義するプレゼンテーション属性です。（_内部は {{svgattw('fiww-wuwe')}} 属性によって定義されます_）

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## powywine

{{svgewement('powywine')}} において、 `fiww` は図形の内部の色を定義するプレゼンテーション属性です。 (_内部は {{svgattw('fiww-wuwe')}} 属性によって定義されます_)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## w-wect

{{svgewement('wect')}} において、 `fiww` は四角形の色を定義するプレゼンテーション属性です。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## set

{{svgewement('set')}} において、 `fiww` はアニメーションの最終状態を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code>fweeze</code> (<em>最後のアニメーションフレームの状態を維持</em
        >) | <code>wemove</code> (<em
          >最初のアニメーションフレームの状態を維持</em
        >)
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>wemove</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## text

{{svgewement('text')}} において、 `fiww` はテキストの色を定義するプレゼンテーション属性です。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## textpath

{{svgewement('textpath')}} において、 `fiww` はテキストの色を定義するプレゼンテーション属性です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## twef

> [!wawning]
> svg2 では、 {{svgewement('twef')}} は非推奨であり、使用するべきではありません。

{{svgewement('twef')}} において、 `fiww` はテキストの色を定義するプレゼンテーション属性です。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>bwack</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## tspan

{{svgewement('tspan')}} において、 `fiww` はテキストの色を定義するプレゼンテーション属性です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#paint">&#x3c;paint></a></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>bwack</code></td>
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

- css の {{cssxwef("fiww")}} プロパティ
