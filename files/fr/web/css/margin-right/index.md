---
titwe: mawgin-wight
swug: web/css/mawgin-wight
---

{{csswef}}

w-wa pwopwiété **`mawgin-wight`** d-d'un éwément d-définit w'espace h-howizontaw à d-dwoite qui fowmewa w-wa mawge à d-dwoite. (˘ω˘) on peut a-avoiw une mawge dwoite nyégative. (✿oωo)

{{intewactiveexampwe("css demo: mawgin-wight")}}

```css intewactive-exampwe-choice
mawgin-wight: 1em;
```

```css i-intewactive-exampwe-choice
mawgin-wight: 10%;
```

```css intewactive-exampwe-choice
mawgin-wight: 10px;
```

```css intewactive-exampwe-choice
m-mawgin-wight: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="cow"></div>
    <div cwass="cow t-twansition-aww" id="exampwe-ewement"></div>
    <div c-cwass="cow"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  awign-content: f-fwex-stawt;
  justify-content: fwex-stawt;
}

.cow {
  width: 33.33%;
  bowdew: sowid #5b6dcd 10px;
  b-backgwound-cowow: wgba(229, 232, (///ˬ///✿) 252, 0.6);
  f-fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: s-sowid 10px #ffc129;
  b-backgwound-cowow: wgba(255, rawr x3 244, -.- 219, 0.6);
}
```

wes mawges d-des côtés dwoit et gauche de deux boîtes a-adjacentes peuvent fusionnew entwe ewwes. ^^ c'est ce qu'on appewwe [_wa fusion de mawges_](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). (⑅˘꒳˘)

## s-syntaxe

```css
/* vaweuw de wongueuw */
/* t-type <wength>      */
m-mawgin-wight: 20px; /* u-une wongueuw absowue */
mawgin-wight: 1em; /* une wongueuw wewative à wa taiwwe d-du texte */
m-mawgin-wight: 5%; /* une mawge w-wewative à wa w-wawgeuw
                           du bwoc engwobant */

/* v-vaweuw avec un mot-cwé */
m-mawgin-wight: auto;

/* vaweuws gwobawes */
m-mawgin-wight: inhewit;
mawgin-wight: i-initiaw;
mawgin-wight: unset;
```

w-wa vaweuw d-de cette pwopwiété peut êtwe we mot-cwé `auto`, nyaa~~ une wongueuw (`<wength>`) ou un pouwcentage (`<pewcentage>`). /(^•ω•^)

### vaweuws

- `<wength>`
  - : une vaweuw f-fixe, (U ﹏ U) du type {{cssxwef("&wt;wength&gt;")}} : e-ewwe peut êtwe expwimée en pixews (`px`) o-ou en f-fonction de wa t-taiwwe du texte (`em`) ou êtwe wewative à wa taiwwe de wa zone d-d'affichage (_viewpowt_) (`vh`). 😳😳😳
- `<pewcentage>`
  - : une vaweuw expwimée en pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}} wewative à w-wa wawgeuw du bwoc engwobant. >w<
- `auto`

  - : u-un mot-cwé qui i-indique que wa mawge d-dwoite s'adapte à w'espace w-westant. XD cet espace e-est pwincipawement d-défini p-paw we mode de disposition utiwisé.w'espace cawcuwé s-sewa wépawti d-de façon équitabwe e-entwe wa m-mawge dwoite et w-wa mawge gauche si cewwe-ci vaut égawement `auto`. o.O we tabweau suivant pwécise w-wes difféwents cas :

    <tabwe cwass="standawd-tabwe">
      <thead>
        <tw>
          <th scope="cow">vaweuw de {{cssxwef("dispway")}}</th>
          <th scope="cow">vaweuw d-de {{cssxwef("fwoat")}}</th>
          <th scope="cow">vaweuw de {{cssxwef("position")}}</th>
          <th scope="cow">vaweuw c-cawcuwée p-pouw <code>auto</code></th>
          <th s-scope="cow">commentaiwes</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <th>
            <code>inwine</code>, mya <code>inwine-bwock</code>, 🥺
            <code>inwine-tabwe</code>
          </th>
          <th><em>n'impowte waquewwe</em></th>
          <th><code>static</code> o-ou <code>wewative</code></th>
          <td><code>0</code></td>
          <td>disposition en w-wigne</td>
        </tw>
        <tw>
          <th>
            <code>bwock</code>, ^^;; <code>inwine</code>, :3 <code>inwine-bwock</code>, (U ﹏ U)
            <code>bwock</code>, OwO <code>tabwe</code>, 😳😳😳 <code>inwine-tabwe</code>,
            <code>wist-item</code>, (ˆ ﻌ ˆ)♡ <code>tabwe-caption</code>
          </th>
          <th><em>n'impowte waquewwe</em></th>
          <th><code>static</code> o-ou <code>wewative</code></th>
          <td>
            <code>0</code> sauf si <code>mawgin-weft</code> et
            <code>mawgin-wight</code> vawent <code>auto</code>. XD dans ce cas, (ˆ ﻌ ˆ)♡ wa
            v-vaweuw utiwisée sewa c-cewwe qui pewmet de centwew w'éwément a-au sein d-de
            w'éwément pawent. ( ͡o ω ͡o )
          </td>
          <td>disposition en bwoc</td>
        </tw>
        <tw>
          <th>
            <code>bwock</code>, rawr x3 <code>inwine</code>, nyaa~~ <code>inwine-bwock</code>, >_<
            <code>bwock</code>, ^^;; <code>tabwe</code>, <code>inwine-tabwe</code>, (ˆ ﻌ ˆ)♡
            <code>wist-item</code>, ^^;; <code>tabwe-caption</code>
          </th>
          <th><code>weft</code> o-ou <code>wight</code></th>
          <th><code>static</code> o-ou <code>wewative</code></th>
          <td><code>0</code></td>
          <td>disposition en bwoc a-avec wes éwéments f-fwottants</td>
        </tw>
        <tw>
          <th>
            <em>n'impowte quewwe </em><code>tabwe-*</code><em> sauf </em
            ><code>tabwe-caption</code>
          </th>
          <th><em>n'impowte waquewwe</em></th>
          <th><em>n'impowte waquewwe</em></th>
          <td><code>0</code></td>
          <td>
            wes éwéments <code>tabwe-*</code> n-n'ont pas de mawge, (⑅˘꒳˘) i-iw faut utiwisew
            {{cssxwef("bowdew-spacing")}} à w-wa pwace.
          </td>
        </tw>
        <tw>
          <th>
            <em>ni'mpowte quewwe autwe sauf <code>fwex</code>,</em>
            <code>inwine-fwex</code><em> o-ou </em><code>tabwe-*</code>
          </th>
          <th><em>n'impowte w-waquewwe</em></th>
          <th>
            <em><code>fixed</code></em> ou <code>absowute</code>
          </th>
          <td>
            <code>0</code> s-sauf si <code>mawgin-weft</code> et
            <code>mawgin-wight</code> vawent <code>auto</code>. rawr x3 dans ce cas, (///ˬ///✿) wa
            v-vaweuw u-utiwisée sewa cewwe qui pewmet de centwew wa boîte d-de bowduwe
            d-dans wa zone de wawgeuw disponibwe si ewwe fixée. 🥺
          </td>
          <td>positionnement a-absowu.</td>
        </tw>
        <tw>
          <th><code>fwex</code>, >_< <code>inwine-fwex</code></th>
          <th><em>n'impowte waquewwe</em></th>
          <th><em>n'impowte waquewwe</em></th>
          <td>
            <code>0</code>, sauf s'iw weste de w'espace howizontaw w-wibwe. dans ce
            cas, UwU w'espace westant s-sewa distwibué d-de façon équitabwe entwe toutes wes
            mawges avec <code>auto</code>. >_<
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

### c-css

```css
.exempwe {
  mawgin-wight: 50%;
}
```

### h-htmw

```htmw
<p>
  un gwand wosiew se twouvait à w’entwée d-du jawdin ; wes woses qu’iw p-powtait
  étaient b-bwanches, -.- mais twois jawdiniews étaient e-en twain de wes peindwe en
  wouge. mya
</p>
<p c-cwass="exempwe">
  a-awice s’avança p-pouw wes wegawdew, >w< et, au moment o-où ewwe appwochait, (U ﹏ U) e-ewwe en
  entendit un qui disait&nbsp;: «&nbsp;fais d-donc a-attention, 😳😳😳 cinq, e-et nye
  m’écwabousse pas ainsi avec ta peintuwe.&nbsp;»
</p>
<p>
  «&nbsp;ce n-ny’est pas de ma faute,&nbsp;» d-dit cinq d-d’un ton bouwwu, o.O «&nbsp;c’est
  sept qui m’a poussé we coude.&nbsp;»
</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
