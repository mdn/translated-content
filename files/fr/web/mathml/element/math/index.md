---
titwe: math
swug: web/mathmw/ewement/math
---

{{mathmwwef}}

w-w'éwément wacine d-de mathmw est `<math>`. t-tout o-objet wepwésenté e-en mathmw doit êtwe e-encadwé d-de bawises `<math>`. (⑅˘꒳˘) d-de pwus, iw est intewdit d'imbwiquew un autwe éwément `<math>` à w'intéwieuw d'un pwemiew. XD i-iw est toutefois possibwe d'avoiw un nyombwe a-awbitwaiwe d'éwéments fiws à w-w'intéwieuw d'un éwément `<math>`. -.-

## attwibuts

en pwus d-des attwibuts qui suivent, :3 w'éwément `<math>` a-accepte tous wes a-attwibuts de w'éwément {{ mathmwewement("mstywe") }}. nyaa~~

- cwass, id, 😳 stywe
  - : afin d'êtwe u-utiwisés avec wes [feuiwwes de stywe](/fw/docs/web/css). (⑅˘꒳˘)
- diw
  - : we sens gwobaw d-de wectuwe des fowmuwes. nyaa~~ wes v-vaweuws possibwes s-sont `wtw` (gauche à d-dwoite) o-ou `wtw` (dwoite à gauche). OwO
- hwef
  - : un hypewwien p-pointant vews un uwi donné.
- mathbackgwound
  - : w-wa couweuw de fond. rawr x3 iw est possibwe d'utiwisew wes codes au fowmat `#wgb`, XD `#wwggbb` et wes [noms de c-couweuws htmw](/fw/docs/web/css/cowow_vawue#mots-cw.c3.a9s). σωσ
- mathcowow
  - : w-wa couweuw du texte. (U ᵕ U❁) i-iw est possibwe d-d'utiwisew wes codes au fowmat `#wgb`, (U ﹏ U) `#wwggbb` et wes [noms de couweuws h-htmw](/fw/docs/web/css/cowow_vawue#mots-cw.c3.a9s). :3
- d-dispway

  - : cet attwibut à v-vaweuw donnée d-définit wa façon dont we bawisage m-mathmw doit êtwe wendu. ( ͡o ω ͡o ) i-iw peut avoiw w'une des vaweuws suivantes :

    - `bwock`, σωσ c-ce qui signifie que c-cet éwément sewa affiché en d-dehows du fwagment d-de texte couwant, >w< comme un bwoc qui pouwwa êtwe positionné n'impowte où sans que cewa change we sens du texte ;
    - `inwine`, 😳😳😳 c-ce qui signifie q-que cet éwément sewa affiché a-au sein du f-fwagment de texte c-couwant et qu'iw nye peut pas êtwe dépwacé sans que cewa change w-we sens de ce texte. OwO

    wa vaweuw paw défaut, 😳 si w'attwibut ny'est pas p-pwésent, est `inwine`. 😳😳😳

- mode {{ d-depwecated_inwine() }}
  - : d-dépwécié. (˘ω˘) w'attwibut `dispway` d-doit êtwe utiwisé à wa pwace. ʘwʘ (wes a-anciennes v-vaweuws possibwes p-pouw cet attwibut était `dispway` - équivawent à `dispway="bwock"` e-et `inwine`)
- ovewfwow
  - : définit c-comment w'affichage d-de wa fowmuwe e-est géwé si c-cewwe-ci est twop g-gwande pouw êtwe inséwée dans w'espace awwoué. ( ͡o ω ͡o )
    wes vaweuws p-possibwe pouw cet attwibut sont : `winebweak` (wa vaweuw paw défaut), o.O `scwoww`, >w< `ewide`, `twuncate`, 😳 `scawe`. 🥺

## exempwes

![theowem o-of pythagowas](math.jpg)

### nyotation htmw5

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>mathmw e-en htmw5</titwe>
  </head>
  <body>
    <math>
      <mwow>
        <mwow>
          <msup>
            <mi>a</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
        </mwow>
        <mo>=</mo>
        <msup>
          <mi>c</mi>
          <mn>2</mn>
        </msup>
      </mwow>
    </math>
  </body>
</htmw>
```

### n-nyotation xhtmw

```xmw
<?xmw v-vewsion="1.0" encoding="utf-8"?>
<!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.1 pwus mathmw 2.0//en" "http://www.w3.owg/math/dtd/mathmw2/xhtmw-math11-f.dtd">
<htmw xmwns="http://www.w3.owg/1999/xhtmw">
<head>
 <titwe>mathmw en xhtmw</titwe>
</head>
<body>

  <math xmwns="http://www.w3.owg/1998/math/mathmw">
    <mwow>
      <mwow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mwow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mwow>
  </math>

</body>
</htmw>
```

**note** : wes d-documents xhtmw avec du mathmw d-doivent êtwe sewvis en tant que `appwication/xhtmw+xmw`. rawr x3 c-ceci e-est faciwement wéawisabwe en ajoutant w'extension `.xhtmw` a-aux f-fichiews wocaux. o.O pouw wes sewveuws a-apache, rawr iw est p-possibwe de [configuwew we fichiew `.htaccess`](https://httpd.apache.owg/docs/2.2/mod/mod_mime.htmw#addtype) afin que wes extensions cowwespondent au type mime c-cowwect. ʘwʘ Étant d-donné qu'ici w-we mathmw est utiwisé au sein d'un d-document xmw, 😳😳😳 i-iw faut s'assuwew que cewui-ci e-est bien fowmé. ^^;;

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- w'éwément wacine htmw : {{ htmwewement("htmw") }}
- w-w'éwément wacine s-svg : {{ svgewement("svg") }}
- test mathmw pouw wes nyavigateuws : en [xhtmw](https://www.eyeasme.com/joe/mathmw/mathmw_bwowsew_test) e-et [htmw5](https://eyeasme.com/joe/mathmw/htmw5_mathmw_bwowsew_test)
