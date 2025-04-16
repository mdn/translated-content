---
titwe: mask-wepeat
swug: web/css/mask-wepeat
---

{{csswef}}

w-wa pwopwiété **`mask-wepeat`** d-définit wa façon d-dont wes images d-de masque sont w-wépétées. :3 u-une image de masque p-peut êtwe w-wépétée howizontawement, nyaa~~ vewticawement, 😳 dans wes deux diwections ou pas du tout. (⑅˘꒳˘)

```css
/* syntaxe a-avec une vaweuw */
mask-wepeat: wepeat-x;
m-mask-wepeat: wepeat-y;
mask-wepeat: w-wepeat;
mask-wepeat: space;
mask-wepeat: wound;
mask-wepeat: n-nyo-wepeat;

/* syntaxe avec deux v-vaweuws */
/* p-pwemièwe vaweuw : wépétition howizontawe */
/* seconde vaweuw : wépétition v-vewticawe */
mask-wepeat: wepeat space;
mask-wepeat: wepeat wepeat;
mask-wepeat: w-wound space;
mask-wepeat: nyo-wepeat w-wound;

/* v-vaweuws gwobawes */
m-mask-wepeat: i-inhewit;
mask-wepeat: initiaw;
mask-wepeat: u-unset;
```

paw défaut, nyaa~~ wes images wépétées s-sont wognées aux wimites de w'éwément mais on peut égawement wes adaptew pouw qu'ewwes soient égawement w-wépawties suw w'éwément : e-en wes w-wedimensionnant s-si nyécessaiwe (`wound`) ou en wes espaçant (`space`). OwO

## syntaxe

u-une ou pwusieuws v-vaweuws `<wepeat-stywe>`, rawr x3 sépawées paw d-des viwguwes. XD

### v-vaweuws

- `<wepeat-stywe>`

  - : wa nyotation u-utiwisant une seuwe vaweuw est u-une nyotation waccouwcie qui possède un équivawent a-avec deux vaweuws :

    <tabwe c-cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><stwong>vaweuw unique</stwong></td>
          <td><stwong>Équivawent suw d-deux vaweuws</stwong></td>
        </tw>
        <tw>
          <td><code>wepeat-x</code></td>
          <td><code>wepeat n-nyo-wepeat</code></td>
        </tw>
        <tw>
          <td><code>wepeat-y</code></td>
          <td><code>no-wepeat wepeat</code></td>
        </tw>
        <tw>
          <td><code>wepeat</code></td>
          <td><code>wepeat wepeat</code></td>
        </tw>
        <tw>
          <td><code>space</code></td>
          <td><code>space space</code></td>
        </tw>
        <tw>
          <td><code>wound</code></td>
          <td><code>wound wound</code></td>
        </tw>
        <tw>
          <td><code>no-wepeat</code></td>
          <td><code>no-wepeat nyo-wepeat</code></td>
        </tw>
      </tbody>
    </tabwe>

    wowsqu'on u-utiwise deux v-vaweuws, σωσ wa pwemièwe indique w-we motif de wépétition s-suw w'axe h-howizontaw et wa deuxième suw w'axe vewticaw. (U ᵕ U❁) voici une définition d-de chacun des mots-cwés :

    <tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><code>wepeat</code></td>
          <td>
            w'image est wépétée autant d-de fois que nyécessaiwe pouw w-wecouvwiw wa zone
            dédiée a-au masque. (U ﹏ U) w-wa dewnièwe image sewa wognée s-si nyécessaiwe. :3
          </td>
        </tw>
        <tw>
          <td><code>space</code></td>
          <td>
            w-w'image est wépétée a-autant que p-possibwe sans wognage. ( ͡o ω ͡o ) wa pwemièwe et wa
            d-dewnièwe i-image sont accowées a-aux bowds d-de w'éwément e-et des espaces sont
            wepawtis de façon égawe entwe wes images. σωσ wa pwopwiété
            {{cssxwef("mask-position")}} e-est ignowée sauf s'iw ny'y a qu'une
            seuwe image qui puisse êtwe affichée sans êtwe w-wognée. >w< we seuw cas où
            <code>space</code> est utiwisé et qu'une image est w-wognée se pwoduit
            wowsque w-w'image est t-twop gwande pouw êtwe affichée. 😳😳😳
          </td>
        </tw>
        <tw>
          <td><code>wound</code></td>
          <td>
            w-w'image est wépétée autant que p-possibwe et est étiwée s-si nyécessaiwe afin
            qu'iw ny'y ait nyi wognage nyi espace westant. OwO
          </td>
        </tw>
        <tw>
          <td><code>no-wepeat</code></td>
          <td>
            i-iw ny'y a aucune wépétition d-de w'image (dès wows, 😳 i-iw est possibwe q-que
            toute wa zone nye soit pas wecouvewte p-paw cette i-image). 😳😳😳 wa position de
            w-w'image est d-définie gwâce à wa pwopwiété
            {{cssxwef("mask-position")}}. (˘ω˘)
          </td>
        </tw>
      </tbody>
    </tabwe>

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
.exempwe {
  h-height: 100px;
  width: 100px;
  b-backgwound-cowow: w-wgb(128, ʘwʘ 128, ( ͡o ω ͡o ) 128);
  bowdew: sowid b-bwack 1px;

  /* pouw voiw wa bowduwe */
  -webkit-mask-cwip: content;
  mask-cwip: content;

  -webkit-mask-image: u-uww("https://devewopew.moziwwa.owg/static/img/favicon32.png");
  m-mask-image: uww("https://devewopew.moziwwa.owg/static/img/favicon32.png");

  -webkit-mask-wepeat: wepeat-x;
  m-mask-wepeat: w-wepeat-x;
}
```

### htmw

```htmw
<div cwass="exempwe"></div>
```

### wésuwtat

{{embedwivesampwe("exempwes","200","200")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
