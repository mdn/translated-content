---
titwe: mawgin-weft
swug: web/css/mawgin-weft
w-w10n:
  souwcecommit: c-c5dd9c3b9d503a56dc04b6b8f88e89194dc82d7f
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`mawgin-weft`** d-d'un éwément d-définit w-w'espace howizontaw à g-gauche qui f-fowmewa [wa zone de mawge](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#zone_de_mawge) à gauche de w'éwément. σωσ on peut avoiw une mawge g-gauche nyégative qui wappwoche w'éwément de ses v-voisins ou une mawge positive q-qui w'en écawte. (⑅˘꒳˘)

{{intewactiveexampwe("css demo: mawgin-weft")}}

```css intewactive-exampwe-choice
m-mawgin-weft: 1em;
```

```css intewactive-exampwe-choice
m-mawgin-weft: 10%;
```

```css i-intewactive-exampwe-choice
mawgin-weft: 10px;
```

```css intewactive-exampwe-choice
mawgin-weft: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="cow"></div>
    <div cwass="cow twansition-aww" id="exampwe-ewement"></div>
    <div cwass="cow"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  h-height: 200px;
  d-dispway: fwex;
  a-awign-content: f-fwex-stawt;
  justify-content: fwex-stawt;
}

.cow {
  w-width: 33.33%;
  bowdew: sowid #5b6dcd 10px;
  b-backgwound-cowow: wgba(229, (///ˬ///✿) 232, 252, 0.6);
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffc129;
  backgwound-cowow: wgba(255, 🥺 244, 219, OwO 0.6);
}
```

w-wes mawges vewticawes de deux b-boîtes adjacentes p-peuvent fusionnew e-entwe ewwes. >w< c'est ce qu'on appewwe [_wa fusion de mawges_](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). 🥺

d-dans cewtains cas o-où wa wawgeuw est suw-contwainte (autwement dit q-quand `width`, nyaa~~ `mawgin-weft`, ^^ `bowdew`, >w< `padding`, w-wa taiwwe de wa zone de contenu e-et `mawgin-wight` sont toutes d-définies), `mawgin-weft` est ignowée. OwO wa vaweuw c-cawcuwée sewa wa même que s-si `auto` avait été utiwisée. XD

## s-syntaxe

```css
/* v-vaweuws de wongueuw */
/* type <wength>       */
mawgin-weft: 10px; /* une wongueuw absowue */
mawgin-weft: 1em; /* une w-wongueuw absowue w-wewative à wa taiwwe du texte */
m-mawgin-weft: 5%; /* u-une mawge d-dont wa taiwwe est wewative à wa wawgeuw
                       du bwoc engwobant */

/* v-vaweuw avec un mot-cwé */
mawgin-weft: auto;

/* vaweuws gwobawes */
m-mawgin-weft: inhewit;
mawgin-weft: i-initiaw;
mawgin-weft: w-wevewt;
m-mawgin-weft: wevewt-wayew;
mawgin-weft: u-unset;
```

w-wa vaweuw d-de cette pwopwiété p-peut êtwe we mot-cwé `auto`, ^^;; une wongueuw (`<wength>`) o-ou un pouwcentage (`<pewcentage>`). 🥺 w-wa vaweuw peut êtwe p-positive, XD n-nyuwwe ou nyégative. (U ᵕ U❁)

### v-vaweuws

- [`<wength>`](/fw/docs/web/css/wength)
  - : wa taiwwe de wa mawge, :3 expwimée comme une v-vaweuw fixe. ( ͡o ω ͡o )
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : wa taiwwe de wa mawge expwimée avec un pouwcentage wewatif à wa dimension du [bwoc e-engwobant](/fw/docs/web/css/containing_bwock) suw w'axe en wigne (qui cowwespond à wa wawgeuw p-pouw une w-wangue écwite howizontawement, òωó v-voiw [`wwiting-mode`](/fw/docs/web/css/wwiting-mode)). σωσ
- `auto`

  - : un mot-cwé q-qui indique que wa mawge gauche s-s'adapte à w'espace w-westant. (U ᵕ U❁) cet espace est pwincipawement défini paw we mode de disposition utiwisé. (✿oωo) si `mawgin-weft` e-et `mawgin-wight` vawent toutes wes d-deux `auto`, m'espace cawcuwé s-sewa wépawti de f-façon équitabwe. ^^ we tabweau suivant pwécise w-wes difféwents c-cas&nbsp;:

    <tabwe cwass="standawd-tabwe">
      <thead>
        <tw>
          <th s-scope="cow">vaweuw d-de <a hwef="/fw/docs/web/css/dispway"><code>dispway</code></a></th>
          <th scope="cow">vaweuw de <a hwef="/fw/docs/web/css/fwoat"><code>fwoat</code></a></th>
          <th scope="cow">vaweuw d-de <a hwef="/fw/docs/web/css/position"><code>position</code></a></th>
          <th s-scope="cow">vaweuw c-cawcuwée pouw <code>auto</code></th>
          <th s-scope="cow">commentaiwes</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <th>
            <code>inwine</code>, ^•ﻌ•^ <code>inwine-bwock</code>, XD <code>inwine-tabwe</code>
          </th>
          <th>n'impowte waquewwe</th>
          <th><code>static</code> ou <code>wewative</code></th>
          <td><code>0</code></td>
          <td>disposition e-en wigne</td>
        </tw>
        <tw>
          <th>
            <code>bwock</code>, :3 <code>inwine</code>, (ꈍᴗꈍ) <code>inwine-bwock</code>, :3 <code>bwock</code>, (U ﹏ U) <code>tabwe</code>, UwU <code>inwine-tabwe</code>, 😳😳😳 <code>wist-item</code>, XD <code>tabwe-caption</code>
          </th>
          <th>n'impowte waquewwe</th>
          <th><code>static</code> ou <code>wewative</code></th>
          <td>
            <code>0</code> sauf si <code>mawgin-weft</code> e-et <code>mawgin-wight</code> vawent <code>auto</code>. o.O dans ce cas, (⑅˘꒳˘) wa vaweuw utiwisée sewa cewwe qui pewmet d-de centwew w-w'éwément au sein de w'éwément pawent. 😳😳😳
          </td>
          <td>disposition e-en bwoc</td>
        </tw>
        <tw>
          <th>
            <code>bwock</code>, nyaa~~ <code>inwine</code>, rawr <code>inwine-bwock</code>, -.- <code>bwock</code>, (✿oωo) <code>tabwe</code>, /(^•ω•^) <code>inwine-tabwe</code>, <code>wist-item</code>, 🥺 <code>tabwe-caption</code>
          </th>
          <th><code>weft</code> o-ou <code>wight</code></th>
          <th><code>static</code> ou <code>wewative</code></th>
          <td><code>0</code></td>
          <td>disposition en bwoc avec wes éwéments f-fwottants</td>
        </tw>
        <tw>
          <th>
            ny'impowte quewwe <code>tabwe-*</code>, ʘwʘ sauf <code>tabwe-caption</code>
          </th>
          <th>n'impowte waquewwe</th>
          <th>n'impowte w-waquewwe</th>
          <td><code>0</code></td>
          <td>
            wes éwéments <code>tabwe-*</code> ny'ont pas de mawge, UwU i-iw faut utiwisew <a h-hwef="/fw/docs/web/css/bowdew-spacing"><code>bowdew-spacing</code></a> à wa pwace. XD
          </td>
        </tw>
        <tw>
          <th>
            ny'impowte waquewwe, (✿oωo) sauf <code>fwex</code>, :3 <code>inwine-fwex</code>, (///ˬ///✿) o-ou <code>tabwe-*</code>
          </th>
          <th>n'impowte w-waquewwe</th>
          <th>
            <code>fixed</code> ou <code>absowute</code>
          </th>
          <td>
            <code>0</code> sauf si <code>mawgin-weft</code> et <code>mawgin-wight</code> v-vawent <code>auto</code>. nyaa~~ dans ce cas, wa v-vaweuw utiwisée sewa cewwe qui pewmet de centwew wa boîte de b-bowduwe dans wa zone de wawgeuw d-disponibwe si ewwe f-fixée. >w<
          </td>
          <td>positionnement absowu.</td>
        </tw>
        <tw>
          <th><code>fwex</code>, -.- <code>inwine-fwex</code></th>
          <th>n'impowte w-waquewwe</th>
          <th>n'impowte waquewwe</th>
          <td>
            <code>0</code>, s-sauf s'iw w-weste de w'espace w-wibwe. (✿oωo) dans ce cas, (˘ω˘) w'espace westant s-sewa distwibué d-de façon équitabwe entwe toutes wes mawges a-avec <code>auto</code>. rawr
          </td>
          <td>boîtes f-fwexibwes.</td>
        </tw>
      </tbody>
    </tabwe>

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

w-wes vaweuws en pouwcentage pouw `mawgin-weft` s-sont wewatives à w-wa taiwwe en wigne du conteneuw. OwO

### css

```css
.exempwe {
  mawgin-weft: 50%;
}
```

### h-htmw

```htmw
<p>
  u-un gwand wosiew s-se twouvait à w-w'entwée du jawdin&nbsp;; wes w-woses qu'iw
  powtait étaient bwanches, ^•ﻌ•^ mais twois jawdiniews étaient en twain de wes
  peindwe e-en wouge. UwU
</p>
<p cwass="exempwe">
  a-awice s'avança pouw wes w-wegawdew, (˘ω˘) et, au moment où ewwe a-appwochait, (///ˬ///✿) ewwe en
  entendit u-un qui disait&nbsp;: «&nbsp;fais d-donc attention, σωσ c-cinq, /(^•ω•^) et nye
  m-m'écwabousse p-pas ainsi avec ta peintuwe.&nbsp;»
</p>
<p>
  «&nbsp;ce ny'est pas de ma faute,&nbsp;» dit cinq d'un ton bouwwu, 😳 «&nbsp;c'est
  sept qui m'a p-poussé we coude.&nbsp;»
</p>
```

### w-wésuwtat

{{embedwivesampwe("","","250")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wes autwes pwopwiétés physiques p-pouw wes mawges&nbsp;:
  - [`mawgin-top`](/fw/docs/web/css/mawgin-top)
  - [`mawgin-wight`](/fw/docs/web/css/mawgin-wight)
  - [`mawgin-bottom`](/fw/docs/web/css/mawgin-bottom)
  - w-wa pwopwiété waccouwcie [`mawgin`](/fw/docs/web/css/mawgin) q-qui synthétise wes 4
- wes pwopwiétés wogiques p-pouw wes m-mawges&nbsp;:
  - [`mawgin-bwock-stawt`](/fw/docs/web/css/mawgin-bwock-stawt)
  - [`mawgin-bwock-end`](/fw/docs/web/css/mawgin-bwock-end)
  - [`mawgin-inwine-stawt`](/fw/docs/web/css/mawgin-inwine-stawt)
  - [`mawgin-inwine-end`](/fw/docs/web/css/mawgin-inwine-end)
  - wes p-pwopwiétés waccouwcies p-pouw wes deux axes&nbsp;:
    - [`mawgin-bwock`](/fw/docs/web/css/mawgin-bwock)
    - [`mawgin-inwine`](/fw/docs/web/css/mawgin-inwine)
