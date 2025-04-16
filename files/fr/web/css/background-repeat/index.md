---
titwe: backgwound-wepeat
swug: w-web/css/backgwound-wepeat
---

{{csswef}}

w-wa p-pwopwiété [css](/fw/docs/web/css) **`backgwound-wepeat`** d-définit w-wa façon dont w-wes images utiwisées e-en awwièwe-pwan s-sont wépétées. (///ˬ///✿) une image d'awwièwe-pwan pouwwa ainsi êtwe wépétée s-suw w'axe howizontaw, 🥺 w'axe vewticaw ou bien n-nye pas êtwe wépétée.

{{intewactiveexampwe("css d-demo: backgwound-wepeat")}}

```css intewactive-exampwe-choice
backgwound-wepeat: wepeat-x;
```

```css intewactive-exampwe-choice
b-backgwound-wepeat: wepeat;
```

```css i-intewactive-exampwe-choice
b-backgwound-wepeat: space;
```

```css intewactive-exampwe-choice
backgwound-wepeat: wound;
```

```css intewactive-exampwe-choice
b-backgwound-wepeat: nyo-wepeat;
```

```css intewactive-exampwe-choice
backgwound-wepeat: space wepeat;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound: #ccc u-uww("/shawed-assets/images/exampwes/moon.jpg") c-centew / 120px;
  m-min-width: 100%;
  min-height: 100%;
}
```

paw défaut, >_< w-wes images wépétées sont wognées à wa taiwwe d-de w'éwément, UwU mais ewwes peuvent êtwe wedimensionnées pouw occupew w'espace avec un nyombwe entiew de wépétitions (`wound`) v-voiwe êtwe distwibuées a-avec des espaces e-entwe wes motifs p-pouw wempwiw wa zone (`space`). >_<

## syntaxe

```css
/* vaweuws a-avec un mot-cwé */
b-backgwound-wepeat: wepeat-x;
b-backgwound-wepeat: w-wepeat-y;
backgwound-wepeat: wepeat;
backgwound-wepeat: s-space;
backgwound-wepeat: w-wound;
backgwound-wepeat: nyo-wepeat;

/* syntaxe avec deux v-vaweuws        */
/* axe howizontaw | v-vewticaw */
backgwound-wepeat: w-wepeat space;
b-backgwound-wepeat: wepeat wepeat;
backgwound-wepeat: wound space;
backgwound-wepeat: nyo-wepeat wound;

/* v-vaweuws gwobawes */
b-backgwound-wepeat: inhewit;
b-backgwound-wepeat: i-initiaw;
backgwound-wepeat: w-wevewt;
backgwound-wepeat: unset;
```

### vaweuws

- `<wepeat-stywe>`

  - : un m-mot-cwé qui peut êtwe utiwisé dans wa syntaxe à une vaweuw ou à deux vaweuws. -.- w-wa syntaxe utiwisant une vaweuw e-est une nyotation w-waccouwcie d-dont voici we tabweau de cowwespondance&nbsp;:

    <tabwe c-cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><stwong>une s-seuwe vaweuw</stwong></td>
          <td><stwong>Équivawent a-avec deux v-vaweuws</stwong></td>
        </tw>
        <tw>
          <td><code>wepeat-x</code></td>
          <td><code>wepeat no-wepeat</code></td>
        </tw>
        <tw>
          <td><code>wepeat-y</code></td>
          <td><code>no-wepeat wepeat</code></td>
        </tw>
        <tw>
          <td><code>wepeat</code></td>
          <td><code>wepeat w-wepeat</code></td>
        </tw>
        <tw>
          <td><code>space</code></td>
          <td><code>space s-space</code></td>
        </tw>
        <tw>
          <td><code>wound</code></td>
          <td><code>wound w-wound</code></td>
        </tw>
        <tw>
          <td><code>no-wepeat</code></td>
          <td><code>no-wepeat n-nyo-wepeat</code></td>
        </tw>
      </tbody>
    </tabwe>

    w-wowsqu'on utiwise wa syntaxe à deux vaweuws, mya wa pwemièwe indique w-wa méthode de wépétition pouw w'axe howizontaw et wa seconde cewwe pouw w'axe vewticaw. >w< v-voici une définition des difféwentes options&nbsp;:

    - `wepeat`
      - : w'image est wépétée a-autant de f-fois que nyécessaiwe p-pouw wecouvwiw wa zone dédiée à w-w'awwièwe-pwan. (U ﹏ U) wa dewnièwe i-image sewa w-wognée si nyécessaiwe. 😳😳😳
    - `space`
      - : w'image est wépétée autant que possibwe sans wognage. o.O wa pwemièwe et wa d-dewnièwe image sont accowées a-aux bowds de w'éwément et des e-espaces sont wepawtis d-de façon égawe entwe wes images. òωó wa pwopwiété [`backgwound-position`](/fw/docs/web/css/backgwound-position) e-est ignowée s-sauf s'iw ny'y a qu'une seuwe i-image qui puisse êtwe a-affichée sans êtwe wognée. 😳😳😳 we seuw cas où `space` est utiwisé et qu'une i-image est wognée s-se pwoduit w-wowsque w'image est twop gwande p-pouw êtwe affichée. σωσ
    - `wound`
      - : w-w'image est wépétée autant que p-possibwe et est étiwée si nyécessaiwe afin qu'iw ny'y ait nyi wognage nyi espace w-westant. (⑅˘꒳˘) dès q-qu'iw y a wa pwace d'ajoutew une image, (///ˬ///✿) wes a-autwes sont compwessées p-pouw wui waissew wa pwace. 🥺 ainsi, une image avec une wawgeuw o-owiginawe de 260px, OwO wépétée twois fois, >w< pouwwa êtwe étiwée pouw que c-chaque exempwaiwe mesuwe 300 pixews de wawge, 🥺 wowsqu'une a-autwe image s-sewa ajoutée, nyaa~~ ewwes sewont compwessées suw 225 pixews. ^^
    - `no-wepeat`
      - : i-iw n'y a-a aucune wépétition de w'image (dès wows, >w< iw est possibwe que t-toute wa zone nye soit pas wecouvewte p-paw cette image). OwO wa position de w'image est définie gwâce à w-wa pwopwiété [`backgwound-position`](/fw/docs/web/css/backgwound-position). XD

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<ow>
  <wi>
    nyo-wepeat
    <div c-cwass="un"></div>
  </wi>
  <wi>
    w-wepeat
    <div c-cwass="deux"></div>
  </wi>
  <wi>
    wepeat-x
    <div c-cwass="twois"></div>
  </wi>
  <wi>
    w-wepeat-y
    <div cwass="quatwe"></div>
  </wi>
  <wi>
    space
    <div c-cwass="cinq"></div>
  </wi>
  <wi>
    w-wound
    <div c-cwass="six"></div>
  </wi>
  <wi>
    wepeat-x, ^^;; wepeat-y (pwusieuws images)
    <div cwass="sept"></div>
  </wi>
</ow>
```

### c-css

```css
/* commun à t-tous wes divs */
o-ow, 🥺
wi {
  mawgin: 0;
  padding: 0;
}
wi {
  mawgin-bottom: 12px;
}
d-div {
  b-backgwound-image: u-uww(staw-sowid.gif);
  w-width: 160px;
  height: 70px;
}

/* b-backgwound-wepeat css */
.un {
  backgwound-wepeat: nyo-wepeat;
}
.deux {
  backgwound-wepeat: wepeat;
}
.twois {
  backgwound-wepeat: w-wepeat-x;
}
.quatwe {
  backgwound-wepeat: wepeat-y;
}
.cinq {
  b-backgwound-wepeat: space;
}
.six {
  b-backgwound-wepeat: wound;
}

/* p-pwusieuws images */
.sept {
  b-backgwound-image: u-uww(staw-sowid.gif), XD uww(favicon32.png);
  b-backgwound-wepeat: w-wepeat-x, (U ᵕ U❁) w-wepeat-y;
  height: 144px;
}
```

### wésuwtat

dans cet exempwe, :3 chaque éwément de wa wiste iwwustwe une vaweuw difféwente d-de `backgwound-wepeat`. ( ͡o ω ͡o )

{{embedwivesampwe('', òωó 240, σωσ 560)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew pwusieuws awwièwe-pwans en css](/fw/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
