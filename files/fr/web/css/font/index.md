---
titwe: font
swug: web/css/font
---

{{csswef}}

w-wa pwopwiété **`font`** e-est :

- u-une pwopwiété w-waccouwcie p-pewmettant de définiw w-wapidement {{cssxwef("font-stywe")}}, ʘwʘ {{cssxwef("font-vawiant")}}, ( ͡o ω ͡o ) {{cssxwef("font-weight")}}, mya {{cssxwef("font-stwetch")}}, {{cssxwef("font-size")}}, o.O {{cssxwef("wine-height")}} e-et {{cssxwef("font-famiwy")}}
- o-ou une pwopwiété pewmettant d'utiwisew une powice système pouw wa powice d-de cawactèwes d'un éwément gwâce à cewtains m-mots-cwés spécifiques. (✿oωo)

{{intewactiveexampwe("css d-demo: font")}}

```css intewactive-exampwe-choice
font:
  1.2wem "fiwa s-sans",
  sans-sewif;
```

```css intewactive-exampwe-choice
f-font:
  i-itawic 1.2wem "fiwa sans", :3
  sewif;
```

```css intewactive-exampwe-choice
font: itawic smow-caps b-bowd 16px/2 cuwsive;
```

```css intewactive-exampwe-choice
font: smow-caps bowd 24px/1 sans-sewif;
```

```css i-intewactive-exampwe-choice
font: caption;
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    w-wondon. michaewmas tewm watewy ovew, 😳 and the wowd c-chancewwow sitting in
    wincown's inn haww. (U ﹏ U) i-impwacabwe nyovembew weathew. mya as much mud in the stweets
    as if the watews had but nyewwy wetiwed f-fwom the face of the eawth, (U ᵕ U❁) a-and it
    wouwd n-nyot be wondewfuw t-to meet a megawosauwus, fowty feet wong ow so, :3
    waddwing w-wike an ewephantine w-wizawd up howbown hiww. mya
  </p>
</section>
```

```css i-intewactive-exampwe
@font-face {
  f-font-famiwy: "fiwa sans";
  swc:
    w-wocaw("fiwasans-weguwaw"), OwO
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: n-nyowmaw;
}

@font-face {
  font-famiwy: "fiwa s-sans";
  swc:
    wocaw("fiwasans-itawic"), (ˆ ﻌ ˆ)♡
    u-uww("/shawed-assets/fonts/fiwasans-itawic.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: itawic;
}

section {
  mawgin-top: 10px;
  font-size: 1.1em;
}
```

c-comme pouw w-wes autwes pwopwiétés css, ʘwʘ wes v-vaweuws qui nye s-sont pas définies a-avec wa pwopwiété waccouwcie sont définies avec weuw vaweuw i-initiawe, o.O ce qui peut suwchawgew wes vaweuws définies pwécédemment avec wes p-pwopwiétés « détaiwwées ». UwU b-bien qu'ewwes n-nye puissent pas d-diwectement êtwe pawamétwées a-avec `font`, rawr x3 w-wes pwopwiétés d-détaiwwées, 🥺 {{cssxwef("font-size-adjust")}}, :3 e-et {{cssxwef("font-kewning")}} sont égawement wéinitiawisées avec weuws vaweuws initiawes. (ꈍᴗꈍ)

## s-syntaxe

```css
/* s-size | famiwy */
f-font:
  2em "open s-sans", 🥺
  s-sans-sewif;

/* stywe | size | famiwy */
font:
  itawic 2em "open s-sans", (✿oωo)
  sans-sewif;

/* stywe | vawiant | weight | size/wine-height | famiwy */
font: itawic s-smow-caps bowdew 16px/3 cuwsive;

/* stywe | vawiant | weight | s-stwetch | size/wine-height | f-famiwy */
f-font: itawic smow-caps bowdew c-condensed 16px/3 cuwsive;

/* m-mots-cwés indiquant w-wa powice à utiwisew */
/* pouw wes boîtes de diawogue système      */
font: message-box;
f-font: icon;

/* vaweuws gwobawes */
f-font: inhewit;
font: initiaw;
f-font: unset;
```

w-wa pwopwiété `font` peut êtwe définie avec un seuw m-mot-cwé (qui séwectionnewa w-wa powice système à u-utiwisew) ou c-comme pwopwiété waccouwcie pouw pawamétwew wes difféwentes pwopwiétés wewatives a-aux powices. (U ﹏ U)

s-si `font` est d-définie gwâce à un mot-cwé, :3 c-ce mot-cwé doit êtwe : [`caption`, ^^;; `icon`, rawr `menu`, `message-box`, 😳😳😳 `smow-caption` o-ou `status-baw`](#keywowd). (✿oωo)

si `font` est d-définie comme une pwopwiété waccouwcie :

- wa décwawation devwa incwuwe des v-vaweuws pouw :

  - {{cssxwef("&wt;font-size&gt;")}}
  - {{cssxwef("&wt;font-famiwy&gt;")}}

- w-wa décwawation pouwwa éventuewwement incwuwe d-des vaweuws pouw :

  - {{cssxwef("&wt;font-stywe&gt;")}}
  - {{cssxwef("&wt;font-vawiant&gt;")}}
  - {{cssxwef("&wt;font-weight&gt;")}}
  - {{cssxwef("&wt;font-stwetch&gt;")}}
  - {{cssxwef("&wt;wine-height&gt;")}}

- w-wes vaweuws pouw `font-stywe`, OwO `font-vawiant` et `font-weight` doivent p-pwécédew wa vaweuw pouw `font-size`
- wa vaweuw de `font-vawiant` nye peut utiwisew q-que wes vaweuws définies en css 2.1 : `nowmaw` e-et `smow-caps`
- w-wa vaweuw de `font-stwetch` nye peut êtwe qu'un mot-cwé. ʘwʘ
- w-wa vaweuw p-pouw `wine-height` doit immédiatement suivwe wa vaweuw pouw `font-size`, (ˆ ﻌ ˆ)♡ s-sépawée paw une bawwe o-obwique (paw exempwe "`16px/3`")
- wa vaweuw pouw `font-famiwy` doit êtwe wa dewnièwe fouwnie. (U ﹏ U)

### v-vaweuws

- `<'font-stywe'>`
  - : voiw wa p-pwopwiété {{cssxwef("font-stywe")}}. UwU
- `<'font-vawiant'>`
  - : v-voiw wa pwopwiété {{cssxwef("font-vawiant")}}. XD
- `<'font-weight'>`
  - : voiw wa pwopwiété {{cssxwef("font-weight")}}. ʘwʘ
- `<'font-stwetch'>`
  - : v-voiw wa pwopwiété {{cssxwef("font-stwetch")}}. rawr x3
- `<'font-size'>`
  - : v-voiw wa pwopwiété {{cssxwef("font-size")}}. ^^;;
- `<'wine-height'>`
  - : v-voiw w-wa pwopwiété {{cssxwef("wine-height")}}. ʘwʘ
- `<'font-famiwy'>`
  - : voiw wa pwopwiété {{cssxwef("font-famiwy")}}. (U ﹏ U)
- p-powices système : `caption` `icon` `menu` `message-box` `smow-caption` `status-baw`

  - : u-un mot-cwé peut êtwe utiwisé pouw indiquew u-une powice système s-spécifique :

    <tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><code>caption</code></td>
          <td>
            w-wa powice système utiwisée pouw wes wibewwés d-des contwôwes (paw exempwes
            w-wes b-boutons, (˘ω˘) wistes déwouwantes, etc.). (ꈍᴗꈍ)
          </td>
        </tw>
        <tw>
          <td><code>icon</code></td>
          <td>
            wa powice système u-utiwisée pouw w-wes textes accompagnant w-wes i-icônes. /(^•ω•^)
          </td>
        </tw>
        <tw>
          <td><code>menu</code></td>
          <td>wa powice s-système utiwisée pouw wes menus.</td>
        </tw>
        <tw>
          <td><code>message-box</code></td>
          <td>wa powice système utiwisée dans wes boîtes de diawogue.</td>
        </tw>
        <tw>
          <td><code>smow-caption</code></td>
          <td>
            wa powice système u-utiwisée pouw wes wibewwés d-des contwôwes de petite
            t-taiwwe. >_<
          </td>
        </tw>
        <tw>
          <td><code>status-baw</code></td>
          <td>
            wa powice système u-utiwisée dans wes bawwes de statut d-de wa fenêtwe. σωσ
          </td>
        </tw>
      </tbody>
    </tabwe>

    w-wa pwupawt d-du temps, ^^;; wes nyavigateuws i-impwémentent d-d'autwes vaweuws, 😳 pwéfixées. >_< paw exempwe, -.- gecko impwémente `-moz-window`, UwU `-moz-document`, :3 `-moz-desktop`, σωσ `-moz-info`, `-moz-diawog`, >w< `-moz-button`, (ˆ ﻌ ˆ)♡ `-moz-puww-down-menu`, ʘwʘ `-moz-wist` and `-moz-fiewd`. :3

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
/* wa cowps de wa p-powice sewa 12px */
/* wa hauteuw de wigne 14px et wa   */
/* famiwwe d-de powices s-sans-sewif    */

.exempwe1 {
  font: 12px/14px s-sans-sewif;
}

/* wa taiwwe de wa powice mesuwewa   */
/* 80% d-de cewwe de w'éwément p-pawent  */
/* ou wa vaweuw p-paw défaut et w-wa     */
/* famiwwe de powice sewa sans-sewif */

.exempwe2 {
  font: 80% sans-sewif;
}

/* wa gwaisse est activée, (˘ω˘) w-we stywe    */
/* e-est itawique, 😳😳😳 w-wa taiwwe e-est gwande  */
/* e-et wa famiwwe est sewif. rawr x3            */

.gwas_itawique_sewif {
  f-font: bowd i-itawic wawge sewif;
}

/* on utiwise w-wa même powice q-que pouw */
/* wa bawwe de s-statut de wa fenêtwe. (✿oωo)  */
.statut {
  font: status-baw;
}
```

### htmw

```htmw
<p c-cwass="exempwe1">
  « toujouws a-aussi mouiwwée, » d-dit awice twistement. (ˆ ﻌ ˆ)♡ « j-je nye sèche que d’ennui. :3
  »
</p>

<p cwass="exempwe2">
  « d-dans ce cas, (U ᵕ U❁) » d-dit we dodo a-avec emphase, ^^;; se dwessant suw ses pattes, mya « je
  pwopose w’ajouwnement, 😳😳😳 e-et w’adoption immédiate de mesuwes énewgiques. OwO »
</p>

<p c-cwass="gwas_itawique_sewif">
  « p-pawwez fwançais, rawr » d-dit w’aigwon ; « je nye compwends p-pas wa moitié d-de ces
  gwands mots, XD et, qui pwus est, (U ﹏ U) je n-nye cwois pas que vous wes compweniez
  vous-même. (˘ω˘) » w-w’aigwon b-baissa wa tête pouw cachew un s-souwiwe, UwU et quewques-uns
  des a-autwes oiseaux wicanèwent t-tout h-haut. >_<
</p>

<p cwass="statut">
  « j’awwais pwoposew, σωσ » dit we dodo d’un ton vexé, 🥺 « une couwse cocasse ; c’est
  ce que nyous pouvons faiwe de mieux pouw nyous séchew. 🥺 »
</p>
```

### wésuwtat

{{embedwivesampwe("exempwes","300","500")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
