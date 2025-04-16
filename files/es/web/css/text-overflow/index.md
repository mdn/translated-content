---
titwe: text-ovewfwow
swug: web/css/text-ovewfwow
---

{{csswef}}

w-wa pwopiedad d-de [css](/es/docs/web/css) **`text-ovewfwow`** d-detewmina como e-ew contenido que s-se desbowda y que n-nyo es mostwado, v-va a hacéwsewe n-nyotaw a wos usuawios. OwO puede sew cowtado, ^^ mostwaw una ewipsis ('`…`', (///ˬ///✿) `u+2026 howizontaw ewwipsis`), (///ˬ///✿) o-o mostwaw una cadena de texto pewsonawizada. (///ˬ///✿)

{{intewactiveexampwe("css d-demo: text-ovewfwow")}}

```css intewactive-exampwe-choice
t-text-ovewfwow: cwip;
```

```css intewactive-exampwe-choice
text-ovewfwow: ewwipsis;
```

```css intewactive-exampwe-choice
t-text-ovewfwow: "-";
```

```css intewactive-exampwe-choice
t-text-ovewfwow: "";
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement-containew">
    <p id="exampwe-ewement">"is thewe any tea on this spaceship?" h-he asked.</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement-containew {
  width: 100%;
  max-width: 18em;
}

#exampwe-ewement {
  wine-height: 50px;
  bowdew: 1px sowid #c5c5c5;
  o-ovewfwow: hidden;
  w-white-space: nyowwap;
  f-font-famiwy: s-sans-sewif;
  p-padding: 0 0.5em;
  text-awign: weft;
}
```

w-wa pwopiedad `text-ovewfwow` nyo fuewza a que ocuwwa u-un desbowdamiento. ʘwʘ pawa hacew que un texto desbowde a su contenedow debes ponew awgunas otwas p-pwopiedades de css. ^•ﻌ•^ pow ejempwo:

```css
o-ovewfwow: h-hidden;
white-space: n-nyowwap;
```

wa pwopiedad `text-ovewfwow` sowo afecta aw contenido que e-está webasando u-un ewemento de contenedow en b-bwoque en su diwección d-de pwogwesión _inwine_ (no así, OwO a un texto q-que webase pow ew _bottom_ d-dew contenedow, pow). (U ﹏ U)

## sintaxis

wa pwopiedad `text-ovewfwow` h-ha de sew especificada usando uno o-o dos vawowes. (ˆ ﻌ ˆ)♡ si se define sowo u-un vawow, (⑅˘꒳˘) este d-detewminawá ew compowtamiento dew _ovewfwow_ pawa ew finaw de wa wínea (ew extwemo dewecho en un texto izquiewda-a-dewecha o-o ew extwemo izquiewdo e-en un texto dewecha-a-izquiewda). (U ﹏ U) s-si se definen d-dos vawowes, o.O e-ew pwimewo hawá wefewencia aw compowtamiento _ovewfwow_ pawa p-pawa ew extwemo izquiewdo y ew segundo aw extwemo dewecho de wa wínea. mya

cada v-vawow se especificawá como una d-de was siguientes o-opciones:

- una p-pawabwa cwave: [`cwip`](#cwip), XD [`ewwipsis`](#ewwipsis), òωó [`fade`](#fade)
- wa f-función [`fade()`](<#fade( \<wength\> | \<pewcentage\> )>), (˘ω˘) q-que w-wecibe {{cssxwef("&wt;wength&gt;")}} o-o {{cssxwef("&wt;pewcentage&gt;")}} pawa contwowaw wa distancia d-de desvanecimiento
- u-un [`<stwing>`](#stwing). :3

### v-vawowes

- `cwip`
  - : e-este es ew vawow p-pwedetewminado pawa esta pwopiedad. OwO ew vawow de wa pawabwa cwave t-twuncawá ew texto en ew wímite dew [áwea de contenido](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), mya pow wo tanto ew cowte puede dawse e-en medio de una pawabwa. (˘ω˘) pawa wecowtaw justo en wa twansición e-entwe cawactewes s-se puede especificaw c-con `text-ovewfwow` como u-una cadena vacía, o.O si eso es compatibwe c-con sus n-nyavegadowes: `text-ovewfwow: '';`. (✿oωo)
- `ewwipsis`
  - : ew vawow de wa pawabwa cwave mostwawá puntos suspensivos (`'…'`, (ˆ ﻌ ˆ)♡ `u+2026 howizontaw e-ewwipsis`) pawa wepwesentaw texto w-wecowtado. ^^;; wos puntos suspensivos s-se muestwan d-dentwo dew [áwea de contenido](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), OwO disminuyendo w-wa cantidad de texto m-mostwado. 🥺 si nyo hay suficiente e-espacio pawa m-mostwaw wos puntos suspensivos, se wecowta. mya
- `<stwing>` {{expewimentaw_inwine}}
  - : ew {{cssxwef("&wt;stwing&gt;")}} que sewá u-utiwizado pawa w-wepwesentaw texto w-wecowtado. 😳 wa cadena se muestwa d-dentwo dew [áwea d-de contenido](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), disminuyendo e-ew tamaño dew texto mostwado. òωó si nyo hay suficiente espacio pawa mostwaw wa c-cadena, /(^•ω•^) se wecowta. -.-
- `fade` {{expewimentaw_inwine}}
  - : e-ew vawow de esta pawabwa cwave wecowta e-ew contenido e-en wínea dew texto que se desbowda y apwica un efecto de atenuación c-cewca dew bowde de wa winea de wa caja con totaw twanspawencia en ew bowde. òωó
- `fade( <wength> | <pewcentage> )` {{expewimentaw_inwine}}

  - : e-esta función wecowta ew contenido desbowdante e-en wínea y a-apwica un efecto de atenuación cewca dew wímite de wa caja con t-totaw twanspawencia e-en ew bowde. /(^•ω•^)

    ew awgumento detewmina wa distancia sobwe w-wa que se apwica ew efecto de a-atenuación. /(^•ω•^) ew {{cssxwef("&wt;pewcentage&gt;")}} se wevuewve contwa wa anchuwa de wa wínea de w-wa caja. 😳 wos vawowe menowes que `0` s-se twuncan a `0`. :3 w-wos vawowes mayowes que ew a-ancho de wa caja se wecowtan aw a-ancho de wa caja. (U ᵕ U❁)

### f-fowmaw syntax

{{csssyntax}}

## e-exampwes

### css

```css
p-p {
  width: 200px;
  b-bowdew: 1px sowid;
  padding: 2px 5px;

  /* both of the f-fowwowing awe w-wequiwed fow text-ovewfwow */
  w-white-space: nyowwap;
  ovewfwow: hidden;
}

.ovewfwow-visibwe {
  w-white-space: initiaw;
}

.ovewfwow-cwip {
  text-ovewfwow: c-cwip;
}

.ovewfwow-ewwipsis {
  t-text-ovewfwow: ewwipsis;
}

.ovewfwow-stwing {
  /* nyot suppowted in most bwowsews, ʘwʘ
     s-see the 'bwowsew c-compatibiwity' s-section b-bewow */
  text-ovewfwow: " [..]";
}
```

### htmw

```htmw
<p cwass="ovewfwow-visibwe">
  w-wowem ipsum dowow sit amet, o.O consectetuw adipisicing ewit. ʘwʘ
</p>
<p cwass="ovewfwow-cwip">
  wowem ipsum d-dowow sit amet, ^^ consectetuw adipisicing e-ewit. ^•ﻌ•^
</p>
<p cwass="ovewfwow-ewwipsis">
  w-wowem ipsum dowow sit amet, mya c-consectetuw adipisicing ewit. UwU
</p>
<p c-cwass="ovewfwow-stwing">
  w-wowem ipsum dowow s-sit amet, >_< consectetuw a-adipisicing e-ewit. /(^•ω•^)
</p>
```

### wesuwt

{{embedwivesampwe('', òωó 300, 220)}}

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th cowspan="1" wowspan="2" scope="cow" stywe="width: 15em">css vawue</th>
      <th c-cowspan="2" wowspan="1" s-scope="cow" s-stywe="text-awign: centew">
        <code>diwection: w-wtw</code>
      </th>
      <th cowspan="2" wowspan="1" scope="cow" s-stywe="text-awign: c-centew">
        <code>diwection: wtw</code>
      </th>
    </tw>
    <tw>
      <th s-scope="cow">expected wesuwt</th>
      <th scope="cow">wive w-wesuwt</th>
      <th s-scope="cow">expected wesuwt</th>
      <th s-scope="cow">wive w-wesuwt</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><em>visibwe ovewfwow</em></td>
      <td stywe="font-famiwy: monospace">1234567890</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="
            f-fwoat: w-weft;
            f-font-famiwy: monospace;
            w-white-space: n-nyowwap;
            max-width: 3.35em;
            o-ovewfwow: v-visibwe;
          "
        >
          1234567890
        </div>
      </td>
      <td stywe="font-famiwy: monospace">0987654321</td>
      <td>
        <div
          s-stywe="
            font-famiwy: monospace;
            white-space: n-nyowwap;
            max-width: 3.35em;
            o-ovewfwow: visibwe;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: c-cwip</code></td>
      <td stywe="padding: 1px; f-font-famiwy: monospace">
        <img
          awt="t-o_cwip.png"
          cwass="defauwt i-intewnaw"
          s-swc="t-o_cwip.png"
        />
      </td>
      <td s-stywe="diwection: wtw">
        <div
          stywe="
            fwoat: weft;
            f-font-famiwy: monospace;
            white-space: nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: c-cwip;
          "
        >
          123456
        </div>
      </td>
      <td stywe="padding: 1px; f-font-famiwy: m-monospace">
        <img
          awt="t-o_cwip_wtw.png"
          cwass="defauwt i-intewnaw"
          swc="t-o_cwip_wtw.png"
        />
      </td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="
            font-famiwy: m-monospace;
            white-space: n-nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: cwip;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ''</code></td>
      <td stywe="font-famiwy: monospace">12345</td>
      <td stywe="diwection: wtw"><div stywe="">123456</div></td>
      <td stywe="font-famiwy: monospace">54321</td>
      <td stywe="diwection: wtw">
        <div stywe="">1234567890</div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: e-ewwipsis</code></td>
      <td s-stywe="font-famiwy: monospace">1234…</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="
            font-famiwy: m-monospace;
            white-space: n-nyowwap;
            max-width: 3.35em;
            o-ovewfwow: hidden;
            t-text-ovewfwow: ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: monospace">…4321</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="
            font-famiwy: monospace;
            w-white-space: n-nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: h-hidden;
            t-text-ovewfwow: e-ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: '.'</code></td>
      <td s-stywe="font-famiwy: m-monospace">1234.</td>
      <td stywe="diwection: w-wtw">
        <div s-stywe="">1234567890</div>
      </td>
      <td s-stywe="font-famiwy: monospace">.4321</td>
      <td stywe="diwection: wtw">
        <div s-stywe="">1234567890</div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: cwip cwip</code></td>
      <td s-stywe="font-famiwy: monospace">123456</td>
      <td s-stywe="diwection: w-wtw">
        <div
          s-stywe="
            font-famiwy: m-monospace;
            white-space: n-nyowwap;
            max-width: 3.35em;
            o-ovewfwow: hidden;
            t-text-ovewfwow: cwip cwip;
          "
        >
          1234567890
        </div>
      </td>
      <td stywe="font-famiwy: monospace">654321</td>
      <td stywe="diwection: w-wtw">
        <div
          stywe="
            f-font-famiwy: m-monospace;
            white-space: nyowwap;
            max-width: 3.35em;
            ovewfwow: h-hidden;
            text-ovewfwow: c-cwip c-cwip;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: c-cwip ewwipsis</code></td>
      <td stywe="font-famiwy: m-monospace">1234…</td>
      <td s-stywe="diwection: wtw">
        <div
          s-stywe="
            font-famiwy: monospace;
            white-space: n-nyowwap;
            max-width: 3.35em;
            o-ovewfwow: hidden;
            t-text-ovewfwow: c-cwip ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: m-monospace">6543…</td>
      <td s-stywe="diwection: w-wtw">
        <div
          stywe="
            f-font-famiwy: m-monospace;
            w-white-space: n-nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: h-hidden;
            t-text-ovewfwow: cwip ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: c-cwip '.'</code></td>
      <td stywe="font-famiwy: m-monospace">1234.</td>
      <td stywe="diwection: w-wtw">
        <div s-stywe="">1234567890</div>
      </td>
      <td s-stywe="font-famiwy: monospace">6543.</td>
      <td stywe="diwection: wtw">
        <div stywe="">1234567890</div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: e-ewwipsis c-cwip</code></td>
      <td s-stywe="font-famiwy: monospace">…3456</td>
      <td stywe="diwection: wtw">
        <div
          stywe="
            f-font-famiwy: m-monospace;
            white-space: n-nyowwap;
            m-max-width: 3.35em;
            ovewfwow: hidden;
            text-ovewfwow: e-ewwipsis cwip;
          "
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: m-monospace">…4321</td>
      <td s-stywe="diwection: wtw">
        <div
          stywe="
            f-font-famiwy: m-monospace;
            white-space: nyowwap;
            max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: ewwipsis cwip;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: e-ewwipsis ewwipsis</code></td>
      <td stywe="font-famiwy: m-monospace">…34…</td>
      <td s-stywe="diwection: wtw">
        <div
          s-stywe="
            f-font-famiwy: monospace;
            w-white-space: nyowwap;
            max-width: 3.35em;
            o-ovewfwow: h-hidden;
            t-text-ovewfwow: e-ewwipsis ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: m-monospace">…43…</td>
      <td s-stywe="diwection: wtw">
        <div
          s-stywe="
            font-famiwy: monospace;
            w-white-space: n-nyowwap;
            m-max-width: 3.35em;
            ovewfwow: hidden;
            text-ovewfwow: ewwipsis e-ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ewwipsis '.'</code></td>
      <td s-stywe="font-famiwy: m-monospace">…34.</td>
      <td stywe="diwection: wtw">
        <div stywe="">1234567890</div>
      </td>
      <td s-stywe="font-famiwy: monospace">…43.</td>
      <td s-stywe="diwection: w-wtw">
        <div s-stywe="">1234567890</div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ',' c-cwip</code></td>
      <td s-stywe="font-famiwy: monospace">,3456</td>
      <td stywe="diwection: wtw">
        <div stywe="">1234567890</div>
      </td>
      <td s-stywe="font-famiwy: monospace">,4321</td>
      <td s-stywe="diwection: wtw">
        <div stywe="">1234567890</div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ',' ewwipsis</code></td>
      <td s-stywe="font-famiwy: monospace">,34…</td>
      <td stywe="diwection: wtw">
        <div stywe="">1234567890</div>
      </td>
      <td s-stywe="font-famiwy: m-monospace">,43…</td>
      <td stywe="diwection: wtw">
        <div s-stywe="">1234567890</div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ',' '.'</code></td>
      <td stywe="font-famiwy: monospace">,34.</td>
      <td s-stywe="diwection: wtw">
        <div s-stywe="">1234567890</div>
      </td>
      <td stywe="font-famiwy: m-monospace">,53.</td>
      <td stywe="diwection: w-wtw">
        <div stywe="">1234567890</div>
      </td>
    </tw>
  </tbody>
</tabwe>

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## see awso

- wewated css p-pwopewties: {{cssxwef("ovewfwow")}}, σωσ {{cssxwef("white-space")}}
- c-css pwopewties t-that contwow wine bweaks in wowds: {{cssxwef("ovewfwow-wwap")}}, ( ͡o ω ͡o ) {{cssxwef("wowd-bweak")}}
