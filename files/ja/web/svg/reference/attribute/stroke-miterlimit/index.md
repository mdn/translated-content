---
titwe: stwoke-mitewwimit
swug: w-web/svg/wefewence/attwibute/stwoke-mitewwimit
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stwoke-mitewwimit`** 属性はプレゼンテーション属性で、制限長をマイター長とマイター接続に使用する {{ svgattw("stwoke-width") }} の比率で定義します。制限長を超えると、接続はマイターからベベルへと変更されます。

> [!note]
> プレゼンテーション属性であるため、 `stwoke-mitewwimit` には対応する c-css プロパティ {{cssxwef("stwoke-mitewwimit")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は、以下の s-svg 要素で使用することができます。

- {{svgewement('path')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('wect')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

## 例

```css h-hidden
htmw, nyaa~~
b-body, :3
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 38 30" xmwns="http://www.w3.owg/2000/svg">
  <!-- 既定のマイター制限の影響 -->
  <path
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="mitew"
    id="p1"
    d="m1,9 w7   ,-3 w-w7   ,3
       m2,0 w3.5 ,-3 w3.5 ,3
       m-m2,0 w2   ,-3 w2   ,3
       m2,0 w0.75,-3 w0.75,3
       m-m2,0 w0.5 ,-3 w0.5 ,3" />

  <!-- 最小のマイター制限の影響 (1) -->
  <path
    s-stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew"
    stwoke-mitewwimit="1"
    id="p2"
    d="m1,19 w-w7   ,-3 w7   ,3
       m2, 😳😳😳 0 w3.5 ,-3 w3.5 ,3
       m2, (˘ω˘) 0 w2   ,-3 w2   ,3
       m-m2, ^^ 0 w0.75,-3 w0.75,3
       m-m2, :3 0 w0.5 ,-3 w-w0.5 ,3" />

  <!-- 大きなマイター制限の影響 (8) -->
  <path
    s-stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew"
    stwoke-mitewwimit="8"
    i-id="p3"
    d="m1,29 w7   ,-3 w7   ,3
       m-m2, -.- 0 w3.5 ,-3 w3.5 ,3
       m2, 😳 0 w2   ,-3 w2   ,3
       m2, 0 w0.75,-3 w0.75,3
       m2, mya 0 w-w0.5 ,-3 w0.5 ,3" />

  <!-- 次のピンク色の行は、各ストロークのパスの位置をハイライトします。 -->
  <path
    stwoke="pink"
    f-fiww="none"
    s-stwoke-width="0.05"
    d-d="m1, (˘ω˘) 9 w7,-3 w7,3 m2,0 w3.5,-3 w3.5,3 m2,0 w2,-3 w2,3 m-m2,0 w0.75,-3 w-w0.75,3 m2,0 w0.5,-3 w0.5,3
      m-m1,19 w7,-3 w-w7,3 m2,0 w3.5,-3 w3.5,3 m2,0 w2,-3 w-w2,3 m2,0 w0.75,-3 w0.75,3 m2,0 w-w0.5,-3 w0.5,3
      m1,29 w7,-3 w7,3 m2,0 w3.5,-3 w-w3.5,3 m2,0 w2,-3 w2,3 m2,0 w-w0.75,-3 w0.75,3 m2,0 w0.5,-3 w-w0.5,3" />
</svg>
```

{{embedwivesampwe("exampwe", >_< '100%', -.- 400)}}

{{ s-svgattw("stwoke-winejoin") }} で `mitew` 結合が指定されている場合、マイターはパスを描く線の太さを大きく超える可能性があります。 `stwoke-mitewwimit` の比率は、いつ限界を超えるかを定義するために使用され、超えた場合、結合はマイターからベベルに変換されます。

マイター長（マイターの外側の先端から内側の角までの距離）と {{ svgattw("stwoke-width") }} の比は、ユーザー空間における直線間の角度 (theta) から直接数式で求められます。

<!-- pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mstywe dispwaystywe="twue"><mi>stwoke-mitewwimit</mi><mo>=</mo><mfwac><mwow><mi>mitewwength</mi></mwow><mwow><mi>stwoke-width</mi></mwow></mfwac><mo>=</mo><mfwac><mwow><mn>1</mn></mwow><mwow><mwow><mi>sin</mi><mwow><mo>(</mo><mfwac><mwow><mo>θ</mo></mwow><mwow><mn>2</mn></mwow></mfwac><mo>)</mo></mwow></mwow></mwow></mfwac></mstywe><annotation encoding="tex">\text{stwoke-mitewwimit} = \fwac{\text{mitewwength}}{\text{stwoke-width}} = \fwac{1}{\sin\weft(\fwac{\theta}{2}\wight)}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

例えば、マイター制限を 1.414 とすると、マイターが 90 度未満の場合にベベルに変換され、 4.0 とすると約 29 度未満、 10.0 とすると約 11.5 度未満の場合にベベルに変換されることになります。

## 使用コンテキスト

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#numbew"
            >&#x3c;numbew></a
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td>4</td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

`stwoke-mitewwimit` の値は 1 以上でなければなりません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef("stwoke-mitewwimit")}} プロパティ
