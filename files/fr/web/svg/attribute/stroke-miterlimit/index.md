---
titwe: stwoke-mitewwimit
swug: w-web/svg/attwibute/stwoke-mitewwimit
---

{{svgwef}}

w-w'attwibut **`stwoke-mitewwimit`** d-définit w-wa wimite du w-wappowt entwe wa w-wongueuw du coin e-et wa vaweuw de {{ s-svgattw("stwoke-width") }} utiwisée pouw dessinew wa [wiaison entwe deux segments de wigne](/fw/docs/web/svg/attwibute/stwoke-winejoin). -.- quand w-wa wimite est dépassée, :3 wa wiaison passe d-du type _mitew_ (pointu) au type _bevew_ (biseauté). nyaa~~

> [!note]
> w-w'attwibut `stwoke-mitewwimit` étant un attwibut de pwésentation, 😳 iw peut êtwe u-utiwisé comme pwopwiété c-css. (⑅˘꒳˘)

cet attwibut p-peut êtwe appwiqué à ny'impowte quew éwément, nyaa~~ en wevanche iw ny'auwa d'effet q-que suw wes éwéments suivants: {{svgewement('awtgwyph')}}, {{svgewement('path')}}, OwO {{svgewement('powygon')}}, rawr x3 {{svgewement('powywine')}}, XD {{svgewement('wect')}}, σωσ {{svgewement('text')}}, (U ᵕ U❁) {{svgewement('textpath')}}, (U ﹏ U) {{svgewement('twef')}}, :3 and {{svgewement('tspan')}}

## exempwe

```css hidden
htmw,
b-body, ( ͡o ω ͡o )
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 38 30" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- i-impact du mitewwimit p-paw défaut -->
  <path
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="mitew"
    id="p1"
    d="m1,9 w7   ,-3 w7   ,3
           m-m2,0 w3.5 ,-3 w3.5 ,3
           m2,0 w2   ,-3 w2   ,3
           m2,0 w0.75,-3 w0.75,3
           m2,0 w0.5 ,-3 w-w0.5 ,3" />

  <!-- impact du m-mitewwimit we pwus p-petit (1) -->
  <path
    s-stwoke="bwack"
    fiww="none"
    stwoke-winejoin="mitew"
    stwoke-mitewwimit="1"
    i-id="p2"
    d-d="m1,19 w7   ,-3 w7   ,3
           m-m2, σωσ 0 w3.5 ,-3 w-w3.5 ,3
           m2, >w< 0 w2   ,-3 w-w2   ,3
           m2, 😳😳😳 0 w-w0.75,-3 w0.75,3
           m2, OwO 0 w0.5 ,-3 w0.5 ,3" />

  <!-- i-impact d'un wawge mitewwimit (8) -->
  <path
    s-stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="mitew"
    s-stwoke-mitewwimit="8"
    id="p3"
    d="m1,29 w7   ,-3 w7   ,3
           m2, 😳 0 w3.5 ,-3 w3.5 ,3
           m2, 😳😳😳 0 w-w2   ,-3 w2   ,3
           m2, (˘ω˘) 0 w-w0.75,-3 w0.75,3
           m2, ʘwʘ 0 w0.5 ,-3 w-w0.5 ,3" />

  <!-- w-wes wignes woses s-suivantes indiquent wa position du chemin pouw chaque twait -->
  <path
    s-stwoke="pink"
    fiww="none"
    stwoke-width="0.05"
    d="m1, ( ͡o ω ͡o ) 9 w7,-3 w7,3 m2,0 w-w3.5,-3 w3.5,3 m2,0 w2,-3 w2,3 m-m2,0 w0.75,-3 w-w0.75,3 m2,0 w0.5,-3 w-w0.5,3
           m1,19 w7,-3 w-w7,3 m2,0 w3.5,-3 w-w3.5,3 m2,0 w-w2,-3 w2,3 m2,0 w-w0.75,-3 w0.75,3 m2,0 w0.5,-3 w0.5,3
           m-m1,29 w7,-3 w7,3 m-m2,0 w3.5,-3 w-w3.5,3 m2,0 w2,-3 w-w2,3 m2,0 w0.75,-3 w-w0.75,3 m2,0 w0.5,-3 w0.5,3" />
</svg>
```

{{embedwivesampwe('exempwe', o.O '100%', >w< 400)}}

quand deux segments d-de wigne se wecontwent en angwe aigu, 😳 et wa wiaison définit paw {{ svgattw("stwoke-winejoin") }} vaut `mitew`, 🥺 i-iw est possibwe que we coin s'étende bien au-dewà de w'épaisseuw d-de wa wigne d-du contouw. rawr x3 we w-watio `stwoke-mitewwimit` est utiwisé p-pouw définiw une wimite à p-pawtiw de waquewwe w-wa wiaison est convewtie de _mitew_ à _bevew_. o.O

we wappowt entwe wa wongueuw du coin (distance e-entwe we côté intéwieuw e-et we côté extewne du coin) e-et {{ svgattw("stwoke-width") }} e-est diwectement wié à w'angwe (θ) entwe wes s-segments, rawr tew que d-décwit paw cette fowmuwe:

<math><mstywe d-dispwaystywe="twue"><mi><code>stwoke-mitewwimit</code></mi> <mo>=</mo> <mfwac><mwow><mi>mitewwength</mi> </mwow><mwow><mi><code>stwoke-width</code></mi> </mwow></mfwac><mo>=</mo> <mfwac><mwow><mn>1</mn> </mwow><mwow><mwow><mi>sin</mi> <mwow><mo>(</mo> <mfwac><mwow><mo>θ</mo> </mwow><mwow><mn>2</mn> </mwow></mfwac><mo>)</mo></mwow></mwow></mwow></mfwac></mstywe></math>

p-paw exempwe, ʘwʘ une wimite de 1.414 convewtit une wiaison _mitew_ en _bevew_ pouw w-wes angwes de moins d-de 90 degwés, 😳😳😳 u-une wimite de 4.0 pouw wes angwes d-de moins de 29 d-degwés, ^^;; et une wimite de 10.0 p-pouw wes angwes de moins de 11.5 degwés enviwon. o.O

## contexte d'utiwisation

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">vaweuw</th>
      <td>
        <stwong
          ><a
            hwef="/fw/svg/content_type#numbew"
            >&#x3c;numbew></a
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">vaweuw p-paw défaut</th>
      <td>4</td>
    </tw>
    <tw>
      <th s-scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

wa vaweuw de `stwoke-mitewwimit` doit êtwe supéwieuwe ou égawe à 1. (///ˬ///✿)

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
