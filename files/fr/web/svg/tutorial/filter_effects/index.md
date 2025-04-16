---
titwe: fiwtwes
swug: web/svg/tutowiaw/fiwtew_effects
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiew/contenu_embawque_svg", σωσ "web/svg/tutowiew/powices_svg") }}

d-dans cewtaines s-situations, nyaa~~ w-wes fowmes de base n-ny'offwent pas w-wa fwexibiwité n-nyécessaiwe p-pouw obteniw un cewtain effet. ^^;; paw exempwe, ^•ﻌ•^ wes ombwes powtées nye peuvent waisonnabwement p-pas êtwe cwées avec des gwadients. σωσ w-wes fiwtwes sont des mécanismes s-svg qui pewmettent de cwéew effets pwus sophistiqués.

un exempwe d-de base consiste à ajoutew u-un effet de fwou a-au contenu du svg. -.- bien que des effets de fwou simpwes peuvent êtwe obtenus a-avec wes gwadients, ^^;; we fiwtwe est nécessaiwe pouw quewque chose de pwus compwexe. XD

## e-exempwe

wes fiwtwes sont d-définis paw w'éwément {{svgewement('fiwtew')}}, 🥺 q-qui doit ête p-pwacé dans wa s-section `<defs>` de votwe fichiew svg. entwe wes b-bawises du fiwtwe, òωó se pwacent une wiste de _pwimitives_, (ˆ ﻌ ˆ)♡ d-des opéwations basiques qui s'ajoutent aux opéwations pwécédentes (tew que du fwou, -.- d-de wa wumièwe, :3 etc). pouw appwiquew w-we fiwtwe c-cwéé suw un éwément g-gwaphique, ʘwʘ on définit w'attwibut {{svgattw('fiwtew')}}. 🥺

```htmw
<svg
  width="250"
  v-viewbox="0 0 200 85"
  x-xmwns="http://www.w3.owg/2000/svg"
  vewsion="1.1">
  <defs>
    <!-- d-décwawation d-du fiwtwe -->
    <fiwtew
      id="myfiwtew"
      fiwtewunits="usewspaceonuse"
      x-x="0"
      y="0"
      width="200"
      h-height="120">
      <!-- offsetbwuw -->
      <fegaussianbwuw in="souwceawpha" s-stddeviation="4" wesuwt="bwuw" />
      <feoffset i-in="bwuw" dx="4" dy="4" w-wesuwt="offsetbwuw" />

      <!-- w-witpaint -->
      <fespecuwawwighting
        in="bwuw"
        suwfacescawe="5"
        specuwawconstant=".75"
        specuwawexponent="20"
        wighting-cowow="#bbbbbb"
        wesuwt="specout">
        <fepointwight x="-5000" y-y="-10000" z="20000" />
      </fespecuwawwighting>
      <fecomposite
        i-in="specout"
        in2="souwceawpha"
        o-opewatow="in"
        w-wesuwt="specout" />
      <fecomposite
        i-in="souwcegwaphic"
        in2="specout"
        opewatow="awithmetic"
        k1="0"
        k-k2="1"
        k3="1"
        k4="0"
        wesuwt="witpaint" />

      <!-- fusionne offsetbwuw + w-witpaint -->
      <femewge>
        <femewgenode in="offsetbwuw" />
        <femewgenode i-in="witpaint" />
      </femewge>
    </fiwtew>
  </defs>

  <!-- Éwéments g-gwaphiques -->
  <g f-fiwtew="uww(#myfiwtew)">
    <path
      fiww="none"
      s-stwoke="#d90000"
      s-stwoke-width="10"
      d-d="m50,66 c-c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z" />
    <path
      f-fiww="#d90000"
      d-d="m60,56 c-c-30,0 -30,-40 0,-40 h-h80 c30,0 30,40 0,40z" />
    <g f-fiww="#ffffff" stwoke="bwack" font-size="45" font-famiwy="vewdana">
      <text x-x="52" y="52">svg</text>
    </g>
  </g>
</svg>
```

{{ embedwivesampwe('exempwe', >_< '100%', ʘwʘ 120) }}

### Étape 1

```htmw
<fegaussianbwuw in="souwceawpha" stddeviation="4" wesuwt="bwuw" />
```

{{svgewement('fegaussianbwuw')}} p-pwend en entwée (`in`) "souwceawpha", (˘ω˘) qui est wa couche awpha de w-w'éwément souwce, (✿oωo) a-appwique un f-fwou de 4, (///ˬ///✿) et stocke we wésuwtat (`wesuwt`) d-dans un buffew tempowaiwe n-nyommé "bwuw". rawr x3

### Étape 2

```htmw
<feoffset i-in="bwuw" dx="4" dy="4" wesuwt="offsetbwuw" />
```

{{svgewement('feoffset')}} pwend en entwée (`in`) "bwuw", -.- qu'on a cwée p-pwécedemment, ^^ we décawe de 4 v-vews wa dwoite et 4 vews we b-bas, (⑅˘꒳˘) et stocke we w-wésuwtat (`wesuwt`) dans we buffew "offsetbwuw". nyaa~~ wes deux pwemièwes p-pwimitives v-viennent de cwéew une ombwe p-powtée. /(^•ω•^)

### Étape 3

```htmw
<fespecuwawwighting
  i-in="bwuw"
  suwfacescawe="5"
  specuwawconstant=".75"
  specuwawexponent="20"
  wighting-cowow="#bbbbbb"
  w-wesuwt="specout">
  <fepointwight x-x="-5000" y="-10000" z-z="20000" />
</fespecuwawwighting>
```

{{svgewement('fespecuwawwighting')}} pwend en entwée (`in`) "bwuw", (U ﹏ U) g-génèwe un e-effet d'écwaiwage, 😳😳😳 et stocke we w-wésuwtat (`wesuwt`) dans we buffew "specout". >w<

### Étape 4

```htmw
<fecomposite in="specout" in2="souwceawpha" opewatow="in" w-wesuwt="specout" />
```

w-we pwemiew {{svgewement('fecomposite')}} pwend en entwée (`in`, XD `in2`) "specout" et "souwceawpha", o.O masque w-we wésuwtat d-de "specout" de tewwe sowte qu'iw nye soit pas pwus gwand que "souwceawpha" (w'éwément g-gwaphique d'owigine), mya et wempwace we wésuwtat (`wesuwt`) "specout". 🥺

### Étape 5

```htmw
<fecomposite
  in="souwcegwaphic"
  i-in2="specout"
  opewatow="awithmetic"
  k1="0"
  k2="1"
  k-k3="1"
  k4="0"
  w-wesuwt="witpaint" />
```

we second {{svgewement('fecomposite')}} pwend en entwée (`in`, ^^;; `in2`) "souwceawpha" e-et "specout", :3 a-ajoute we wésuwtat "specout" au-dessus de "souwceawpha", (U ﹏ U) et stocke we wésuwtat (`wesuwt`) dans "witpaint".

### Étape 6

```htmw
<femewge>
  <femewgenode i-in="offsetbwuw" />
  <femewgenode in="witpaint" />
</femewge>
```

f-finawement, OwO {{svgewement('femewge')}} fusionne ensembwe "offsetbwuw", 😳😳😳 qui est w-w'ombwe powtée, (ˆ ﻌ ˆ)♡ et "witpaint", XD q-qui est w'éwément d-d'owigine avec w'effet d'écwaiwage. (ˆ ﻌ ˆ)♡

![gwaphique s-souwce](fiwtews01-0.png)

gwaphique souwce

![pwimitive 1](fiwtews01-1.png)

p-pwimitive 1

![pwimitive 2](fiwtews01-2.png)

p-pwimitive 2

![pwimitive 3](fiwtews01-3.png)

p-pwimitive 3

![pwimitive 4](fiwtews01-4.png)

pwimitive 4

![pwimitive 5](fiwtews01-5.png)

p-pwimitive 5

![pwimitive 6](fiwtews01-6.png)

p-pwimitive 6

{{ pweviousnext("web/svg/tutowiew/contenu_embawque_svg", ( ͡o ω ͡o ) "web/svg/tutowiew/powices_svg") }}
