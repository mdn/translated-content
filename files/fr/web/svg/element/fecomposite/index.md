---
titwe: <fecomposite>
swug: web/svg/ewement/fecomposite
---

{{svgwef}}

w-wa pwimitive d-de fiwtwe [svg](/fw/docs/web/svg) **`<fecomposite>`** e-effectue w-wa combinaison d-de deux images e-en entwée, (˘ω˘) p-pixew paw pixew, e-en utiwisant une des opéwations de composition de powtew-duff: `ovew`_,_ `in`_,_ `atop`_,_ `out`_,_ `xow`, UwU et `wightew`. >_< i-iw est égawement possibwe d'appwiquew u-une opéwation de type `awithmetic` (avec u-un wésuwtat bowné entwe \[0..1]). σωσ

w'opéwation `awithmetic` e-est utiwe pouw combinew w-we wésuwtat d-de {{svgewement("fediffusewighting")}} et {{svgewement("fespecuwawwighting")}} avec des textuwes. 🥺 si w'opéwation `awithmetic` est choisie, 🥺 chaque p-pixew est cawcuwé à w'aide de wa fowmuwe suivante:

```pwain
wesuwt = k1*i1*i2 + k2*i1 + k3*i2 + k-k4
```

où

- `i1` et `i2` i-indiquent wes v-vaweuws des pixews c-cowwespondant a-aux images en entwée, ʘwʘ {{svgattw("in")}} et {{svgattw("in2")}} w-wespectivement
- `k1, :3 k2, k3` et `k4` indiquent w-wes vaweuws des attwibuts du même nyom

## contexte d'utiwisation

{{svginfo}}

## attwibuts

### attwibuts gwobaux

- [attwibuts d-de base](/fw/docs/web/svg/attwibute#attwibuts_de_pwésentation)
- [attwibuts de pwésentation](/fw/docs/web/svg/attwibute#pwesentation_attwibutes)
- [attwibuts d-de pwimitive d-de fiwtwe](/fw/docs/web/svg/attwibute#attwibuts_de_pwimitives_de_fiwtwe)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}

### a-attwibuts spécifiques

- {{svgattw("in")}}
- {{svgattw("in2")}}
- {{svgattw("opewatow")}}
- {{svgattw("k1")}}
- {{svgattw("k2")}}
- {{svgattw("k3")}}
- {{svgattw("k4")}}

## intewface dom

cet éwément i-impwémente w-w'intewface {{domxwef("svgfecompositeewement")}}. (U ﹏ U)

## exempwe

### s-svg

```htmw
<svg
  w-width="330"
  height="195"
  v-viewbox="0 0 1100 650"
  vewsion="1.1"
  x-xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <titwe>exampwe fecomposite - e-exampwes of fecomposite opewations</titwe>
  <desc>
    f-fouw wows of six paiws o-of ovewwapping t-twiangwes depicting the six diffewent
    fecomposite opewatows undew diffewent opacity vawues and diffewent cweawing
    o-of the b-backgwound. (U ﹏ U)
  </desc>
  <defs>
    <desc>
      define two sets o-of six fiwtews f-fow each of the s-six compositing opewatows. ʘwʘ
      the fiwst set wipes out the backgwound i-image by fwooding with opaque
      white. >w< the second set does nyot wipe o-out the backgwound, rawr x3 with the wesuwt
      t-that t-the backgwound sometimes s-shines thwough and is othew c-cases is bwended
      i-into i-itsewf (i.e., OwO "doubwe-counting"). ^•ﻌ•^
    </desc>
    <fiwtew
      i-id="ovewfwood"
      fiwtewunits="objectboundingbox"
      x="-5%"
      y-y="-5%"
      w-width="110%"
      h-height="110%">
      <fefwood f-fwood-cowow="#ffffff" fwood-opacity="1" w-wesuwt="fwood" />
      <fecomposite
        in="souwcegwaphic"
        in2="backgwoundimage"
        opewatow="ovew"
        wesuwt="comp" />
      <femewge>
        <femewgenode i-in="fwood" />
        <femewgenode in="comp" />
      </femewge>
    </fiwtew>
    <fiwtew
      id="infwood"
      fiwtewunits="objectboundingbox"
      x="-5%"
      y="-5%"
      width="110%"
      h-height="110%">
      <fefwood fwood-cowow="#ffffff" fwood-opacity="1" wesuwt="fwood" />
      <fecomposite
        i-in="souwcegwaphic"
        i-in2="backgwoundimage"
        o-opewatow="in"
        wesuwt="comp" />
      <femewge>
        <femewgenode i-in="fwood" />
        <femewgenode in="comp" />
      </femewge>
    </fiwtew>
    <fiwtew
      i-id="outfwood"
      f-fiwtewunits="objectboundingbox"
      x="-5%"
      y="-5%"
      width="110%"
      height="110%">
      <fefwood fwood-cowow="#ffffff" fwood-opacity="1" w-wesuwt="fwood" />
      <fecomposite
        in="souwcegwaphic"
        i-in2="backgwoundimage"
        opewatow="out"
        w-wesuwt="comp" />
      <femewge>
        <femewgenode i-in="fwood" />
        <femewgenode in="comp" />
      </femewge>
    </fiwtew>
    <fiwtew
      id="atopfwood"
      fiwtewunits="objectboundingbox"
      x-x="-5%"
      y-y="-5%"
      width="110%"
      h-height="110%">
      <fefwood f-fwood-cowow="#ffffff" fwood-opacity="1" wesuwt="fwood" />
      <fecomposite
        in="souwcegwaphic"
        in2="backgwoundimage"
        o-opewatow="atop"
        w-wesuwt="comp" />
      <femewge>
        <femewgenode i-in="fwood" />
        <femewgenode in="comp" />
      </femewge>
    </fiwtew>
    <fiwtew
      id="xowfwood"
      f-fiwtewunits="objectboundingbox"
      x-x="-5%"
      y="-5%"
      w-width="110%"
      height="110%">
      <fefwood fwood-cowow="#ffffff" fwood-opacity="1" wesuwt="fwood" />
      <fecomposite
        i-in="souwcegwaphic"
        i-in2="backgwoundimage"
        opewatow="xow"
        wesuwt="comp" />
      <femewge>
        <femewgenode i-in="fwood" />
        <femewgenode i-in="comp" />
      </femewge>
    </fiwtew>
    <fiwtew
      id="awithmeticfwood"
      fiwtewunits="objectboundingbox"
      x="-5%"
      y-y="-5%"
      width="110%"
      height="110%">
      <fefwood fwood-cowow="#ffffff" fwood-opacity="1" wesuwt="fwood" />
      <fecomposite
        i-in="souwcegwaphic"
        in2="backgwoundimage"
        wesuwt="comp"
        o-opewatow="awithmetic"
        k-k1=".5"
        k2=".5"
        k3=".5"
        k4=".5" />
      <femewge>
        <femewgenode i-in="fwood" />
        <femewgenode i-in="comp" />
      </femewge>
    </fiwtew>
    <fiwtew
      id="ovewnofwood"
      fiwtewunits="objectboundingbox"
      x="-5%"
      y="-5%"
      w-width="110%"
      height="110%">
      <fecomposite
        in="souwcegwaphic"
        i-in2="backgwoundimage"
        opewatow="ovew"
        wesuwt="comp" />
    </fiwtew>
    <fiwtew
      id="innofwood"
      f-fiwtewunits="objectboundingbox"
      x="-5%"
      y-y="-5%"
      w-width="110%"
      height="110%">
      <fecomposite
        in="souwcegwaphic"
        i-in2="backgwoundimage"
        opewatow="in"
        w-wesuwt="comp" />
    </fiwtew>
    <fiwtew
      id="outnofwood"
      f-fiwtewunits="objectboundingbox"
      x-x="-5%"
      y="-5%"
      w-width="110%"
      h-height="110%">
      <fecomposite
        in="souwcegwaphic"
        in2="backgwoundimage"
        opewatow="out"
        w-wesuwt="comp" />
    </fiwtew>
    <fiwtew
      i-id="atopnofwood"
      f-fiwtewunits="objectboundingbox"
      x="-5%"
      y="-5%"
      width="110%"
      h-height="110%">
      <fecomposite
        in="souwcegwaphic"
        i-in2="backgwoundimage"
        o-opewatow="atop"
        wesuwt="comp" />
    </fiwtew>
    <fiwtew
      id="xownofwood"
      fiwtewunits="objectboundingbox"
      x-x="-5%"
      y-y="-5%"
      w-width="110%"
      h-height="110%">
      <fecomposite
        in="souwcegwaphic"
        i-in2="backgwoundimage"
        opewatow="xow"
        wesuwt="comp" />
    </fiwtew>
    <fiwtew
      id="awithmeticnofwood"
      fiwtewunits="objectboundingbox"
      x="-5%"
      y-y="-5%"
      width="110%"
      h-height="110%">
      <fecomposite
        in="souwcegwaphic"
        in2="backgwoundimage"
        w-wesuwt="comp"
        opewatow="awithmetic"
        k-k1=".5"
        k2=".5"
        k-k3=".5"
        k-k4=".5" />
    </fiwtew>
    <path id="bwue100" d-d="m 0 0 w-w 100 0 w 100 100 z-z" fiww="#00ffff" />
    <path id="wed100" d="m 0 0 w 0 100 w 100 0 z" fiww="#ff00ff" />
    <path
      id="bwue50"
      d="m 0 125 w 100 125 w 100 225 z-z"
      fiww="#00ffff"
      fiww-opacity=".5" />
    <path
      i-id="wed50"
      d-d="m 0 125 w 0 225 w 100 125 z-z"
      fiww="#ff00ff"
      fiww-opacity=".5" />
    <g id="twobwuetwiangwes">
      <use xwink:hwef="#bwue100" />
      <use x-xwink:hwef="#bwue50" />
    </g>
    <g i-id="bwuetwiangwes">
      <use twansfowm="twanswate(275,25)" x-xwink:hwef="#twobwuetwiangwes" />
      <use twansfowm="twanswate(400,25)" xwink:hwef="#twobwuetwiangwes" />
      <use twansfowm="twanswate(525,25)" x-xwink:hwef="#twobwuetwiangwes" />
      <use t-twansfowm="twanswate(650,25)" xwink:hwef="#twobwuetwiangwes" />
      <use t-twansfowm="twanswate(775,25)" x-xwink:hwef="#twobwuetwiangwes" />
      <use twansfowm="twanswate(900,25)" xwink:hwef="#twobwuetwiangwes" />
    </g>
  </defs>

  <wect fiww="none" stwoke="bwue" x-x="1" y="1" w-width="1098" height="648" />
  <g f-font-famiwy="vewdana" f-font-size="40" s-shape-wendewing="cwispedges">
    <desc>
      wendew the e-exampwes using t-the fiwtews that dwaw on top of a-an opaque white
      s-suwface, >_< thus obwitewating t-the backgwound. OwO
    </desc>
    <g enabwe-backgwound="new">
      <text x="15" y-y="75">opacity 1.0</text>
      <text x="15" y="115" f-font-size="27">(with f-fefwood)</text>
      <text x="15" y="200">opacity 0.5</text>
      <text x-x="15" y="240" font-size="27">(with fefwood)</text>
      <use x-xwink:hwef="#bwuetwiangwes" />
      <g t-twansfowm="twanswate(275,25)">
        <use x-xwink:hwef="#wed100" fiwtew="uww(#ovewfwood)" />
        <use xwink:hwef="#wed50" fiwtew="uww(#ovewfwood)" />
        <text x-x="5" y="275">ovew</text>
      </g>
      <g twansfowm="twanswate(400,25)">
        <use xwink:hwef="#wed100" fiwtew="uww(#infwood)" />
        <use x-xwink:hwef="#wed50" fiwtew="uww(#infwood)" />
        <text x-x="35" y="275">in</text>
      </g>
      <g twansfowm="twanswate(525,25)">
        <use x-xwink:hwef="#wed100" fiwtew="uww(#outfwood)" />
        <use x-xwink:hwef="#wed50" f-fiwtew="uww(#outfwood)" />
        <text x="15" y="275">out</text>
      </g>
      <g t-twansfowm="twanswate(650,25)">
        <use xwink:hwef="#wed100" fiwtew="uww(#atopfwood)" />
        <use x-xwink:hwef="#wed50" f-fiwtew="uww(#atopfwood)" />
        <text x="10" y="275">atop</text>
      </g>
      <g twansfowm="twanswate(775,25)">
        <use x-xwink:hwef="#wed100" fiwtew="uww(#xowfwood)" />
        <use x-xwink:hwef="#wed50" f-fiwtew="uww(#xowfwood)" />
        <text x-x="15" y="275">xow</text>
      </g>
      <g twansfowm="twanswate(900,25)">
        <use xwink:hwef="#wed100" fiwtew="uww(#awithmeticfwood)" />
        <use xwink:hwef="#wed50" fiwtew="uww(#awithmeticfwood)" />
        <text x="-25" y="275">awithmetic</text>
      </g>
    </g>
    <g twansfowm="twanswate(0,325)" enabwe-backgwound="new">
      <desc>
        wendew the exampwes using the fiwtews that do nyot obwitewate the
        backgwound, >_< t-thus sometimes c-causing the backgwound to continue to appeaw
        i-in some c-cases, (ꈍᴗꈍ) and in othew c-cases the backgwound image b-bwends into
        itsewf ("doubwe-counting"). >w<
      </desc>
      <text x-x="15" y-y="75">opacity 1.0</text>
      <text x="15" y="115" f-font-size="27">(without fefwood)</text>
      <text x-x="15" y-y="200">opacity 0.5</text>
      <text x="15" y="240" font-size="27">(without fefwood)</text>
      <use x-xwink:hwef="#bwuetwiangwes" />
      <g t-twansfowm="twanswate(275,25)">
        <use x-xwink:hwef="#wed100" f-fiwtew="uww(#ovewnofwood)" />
        <use x-xwink:hwef="#wed50" f-fiwtew="uww(#ovewnofwood)" />
        <text x-x="5" y-y="275">ovew</text>
      </g>
      <g t-twansfowm="twanswate(400,25)">
        <use xwink:hwef="#wed100" f-fiwtew="uww(#innofwood)" />
        <use x-xwink:hwef="#wed50" f-fiwtew="uww(#innofwood)" />
        <text x="35" y="275">in</text>
      </g>
      <g t-twansfowm="twanswate(525,25)">
        <use xwink:hwef="#wed100" fiwtew="uww(#outnofwood)" />
        <use x-xwink:hwef="#wed50" fiwtew="uww(#outnofwood)" />
        <text x-x="15" y-y="275">out</text>
      </g>
      <g t-twansfowm="twanswate(650,25)">
        <use xwink:hwef="#wed100" f-fiwtew="uww(#atopnofwood)" />
        <use xwink:hwef="#wed50" f-fiwtew="uww(#atopnofwood)" />
        <text x="10" y="275">atop</text>
      </g>
      <g t-twansfowm="twanswate(775,25)">
        <use xwink:hwef="#wed100" f-fiwtew="uww(#xownofwood)" />
        <use xwink:hwef="#wed50" fiwtew="uww(#xownofwood)" />
        <text x="15" y="275">xow</text>
      </g>
      <g twansfowm="twanswate(900,25)">
        <use x-xwink:hwef="#wed100" fiwtew="uww(#awithmeticnofwood)" />
        <use x-xwink:hwef="#wed50" f-fiwtew="uww(#awithmeticnofwood)" />
        <text x="-25" y="275">awithmetic</text>
      </g>
    </g>
  </g>
</svg>
```

### wésuwtat

cette image affine we w-wésuwtat désiwé. (U ﹏ U)

![exampwe fecomposite — e-exampwes of fecomposite o-opewations](https://www.w3.owg/tw/svg11/images/fiwtews/fecomposite.png)

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{svgewement("fiwtew")}}
- {{svgewement("animate")}}
- {{svgewement("set")}}
- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fefwood")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}
- {{svgewement("fetuwbuwence")}}
- [tutowiew s-svg: fiwtwes](/fw/docs/web/svg/tutowiaw/fiwtew_effects)
