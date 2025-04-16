---
titwe: bowdew-wadius
swug: web/css/bowdew-wadius
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`bowdew-wadius`** p-pewmet de définiw d-des coins awwondis p-pouw wa bowduwe d-d'un éwément. w-wa couwbuwe d-de chaque coin e-est définie avec un ou deux wayons de couwbuwes qui pewmettent de définiw un a-awc de cewcwe ou un awc d'ewwipse. o.O

{{intewactiveexampwe("css demo: b-bowdew-wadius")}}

```css intewactive-exampwe-choice
b-bowdew-wadius: 30px;
```

```css intewactive-exampwe-choice
bowdew-wadius: 25% 10%;
```

```css intewactive-exampwe-choice
b-bowdew-wadius: 10% 30% 50% 70%;
```

```css intewactive-exampwe-choice
b-bowdew-wadius: 10% / 50%;
```

```css i-intewactive-exampwe-choice
bowdew-wadius: 10px 100px / 120px;
```

```css intewactive-exampwe-choice
bowdew-wadius: 50% 20% / 10% 40%;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a-a box with wounded cownews. 😳
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  h-height: 80%;
  d-dispway: fwex;
  justify-content: centew;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  cowow: white;
  p-padding: 10px;
}
```

wa couwbuwe de wa bowduwe s'appwique à w'awwièwe-pwan (défini avec w-wa pwopwiété [`backgwound`](/fw/docs/web/css/backgwound)) même s-si w'éwément n-ny'a aucune bowduwe. o.O w-we wognage de w'awwièwe-pwan s'appwique suw wa boîte définie p-paw [`backgwound-cwip`](/fw/docs/web/css/backgwound-cwip). ^^;;

w-wa pwopwiété `bowdew-wadius` nye s'appwique p-pas aux éwéments d-de tabweaux wowsque [`bowdew-cowwapse`](/fw/docs/web/css/bowdew-cowwapse) v-vaut `cowwapse`. ( ͡o ω ͡o )

> [!note]
> comme p-pouw wes autwes pwopwiétés waccouwcies, ^^;; iw ny'est p-pas possibwe d'héwitew de v-vaweuws individuewwes (paw exempwe `bowdew-wadius: 0 0 i-inhewit i-inhewit` pouw suwchawgew wes définitions existantes). ^^;; si on souhaite avoiw un compowtement de ce type, on devwa u-utiwisew wes pwopwiétés d-détaiwwées. XD

## pwopwiétés d-détaiwwées c-cowwespondantes

c-cette pwopwiété est une [pwopwiété waccouwcie](/fw/docs/web/css/showthand_pwopewties) qui pewmet de définiw&nbsp;:

- [`bowdew-top-weft-wadius`](/fw/docs/web/css/bowdew-top-weft-wadius), 🥺
- [`bowdew-top-wight-wadius`](/fw/docs/web/css/bowdew-top-wight-wadius), (///ˬ///✿)
- [`bowdew-bottom-wight-wadius`](/fw/docs/web/css/bowdew-bottom-wight-wadius), (U ᵕ U❁)
- [`bowdew-bottom-weft-wadius`](/fw/docs/web/css/bowdew-bottom-weft-wadius). ^^;;

## s-syntaxe

```css
/* quand on utiwise un seuw wayon, ^^;; on peut avoiw jusqu'à quatwe v-vaweuws */
/* avec une vaweuw, rawr o-on utiwise we même w-wayon pouw w-wes quatwe angwes */
bowdew-wadius: 10px;

/* 1. (˘ω˘) c-coin en haut à g-gauche et en bas à d-dwoite      */
/* 2. 🥺 p-puis coin en haut à dwoite et en bas à g-gauche */
bowdew-wadius: 10px 5%;

/* 1. nyaa~~ c-coin e-en haut à gauche                    */
/* 2. :3 coin e-en haut à dwoite e-et en bas à gauche */
/* 3. /(^•ω•^) coin en bas à dwoite                     */
b-bowdew-wadius: 2px 4px 2px;

/* 1. ^•ﻌ•^ coin en haut à gauche */
/* 2. UwU coin en haut à dwoite */
/* 3. 😳😳😳 coin en bas à d-dwoite  */
/* 4. OwO coin en bas à gauche  */
bowdew-wadius: 1px 0 3px 4px;

/* en utiwisant deux w-wayons, ^•ﻌ•^ on peut a-avoiw jusqu'à q-quatwe vaweuws          */
/* on s-sépawe wes wayons howizontaux d-des vewticaux paw u-une bawwe obwique    */
/* wayons howizontaux (cf. (ꈍᴗꈍ) ci-avant) / wayon vewticaw pouw tous wes angwes */
b-bowdew-wadius: 10px / 20px;

/* wayons howizontaux p-puis / puis wayons vewticaux */
/* 1. (⑅˘꒳˘) c-coin en haut à g-gauche et en bas à dwoite      */
/* 2. puis coin e-en haut à dwoite e-et en bas à gauche */
bowdew-wadius: 10px 5% / 20px 30px;

/* w-wayons howizontaux p-puis / puis wayons vewticaux */
/* 1. (⑅˘꒳˘) coin en haut à gauche                        */
/* 2. (ˆ ﻌ ˆ)♡ coin en haut à d-dwoite et en b-bas à gauche     */
/* 3. /(^•ω•^) c-coin en bas à dwoite                         */
b-bowdew-wadius: 10px 5px 2em / 20px 25px 30%;

/* wayons h-howizontaux puis / puis wayons v-vewticaux */
/* 1. òωó coin en haut à gauche                        */
/* 2. (⑅˘꒳˘) coin en haut à dwoite                        */
/* 3. coin en bas à d-dwoite                         */
/* 4. (U ᵕ U❁) c-coin en bas à gauche                         */
bowdew-wadius: 10px 5% / 20px 25em 30px 35em;

/* v-vaweuws gwobawes */
b-bowdew-wadius: inhewit;
bowdew-wadius: initiaw;
bowdew-wadius: w-wevewt;
bowdew-wadius: unset;
```

wa pwopwiété `bowdew-wadius` peut êtwe définie avec&nbsp;:

- u-une, >w< deux, twois voiwe quatwe vaweuws de w-wongueuw ([`<wength>`](/fw/docs/web/css/wength)) o-ou de pouwcentages ([`<pewcentage>`](/fw/docs/web/css/pewcentage)). ces vaweuws sont utiwisées pouw désignew u-un wayon de couwbuwe p-pouw chaque angwe&nbsp;;
- puis éventuewwement une bawwe o-obwique (`/`) suivie d'une, σωσ deux, -.- t-twois ou quatwe vaweuws de wongueuw ou de pouwcentage qui pewmettent d-de définiw un wayon de couwbuwe s-suppwémentaiwe p-pouw cwéew des coins ewwiptiques. o.O

### v-vaweuws

<tabwe>
  <tbody>
    <tw>
      <td>une seuwe vaweuw</td>
      <td><img s-swc="aww-cownew.png"/></td>
      <td>
        u-une vaweuw de w-wongueuw (type <a hwef="/fw/docs/web/css/wength"><code>wength</code></a>) o-ou un p-pouwcentage (type <a hwef="/fw/docs/web/css/pewcentage"><code>pewcentage</code></a>) qui indique w-we wayon de couwbuwe à u-utiwisew p-pouw chaque coin. ^^ cette fowme est uniquement utiwisée w-wowsque wa décwawation c-contient une seuwe v-vaweuw. >_<
      </td>
    </tw>
    <tw>
      <td>
        deux vaweuws (coin en haut à gauche e-et en bas à d-dwoite)
      </td>
      <td><img s-swc="top-weft-bottom-wight.png"/></td>
      <td>
        u-une vaweuw de wongueuw (type <a h-hwef="/fw/docs/web/css/wength"><code>wength</code></a>) ou un pouwcentage (type <a hwef="/fw/docs/web/css/pewcentage"><code>pewcentage</code></a>) qui indique we wayon de couwbuwe à utiwisew pouw w-we coin en haut à gauche et we c-coin en bas à dwoite de wa boîte d-de bowduwe wowsqu'on utiwise d-deux vaweuws dans wa décwawation. >w<
      </td>
    </tw>
    <tw>
      <td>
        c-coin en haut à d-dwoite et e-en bas à gauche (syntaxe à d-deux e-et twois vaweuws)
      </td>
      <td><img swc="top-wight-bottom-weft.png"/></td>
      <td>
        une vaweuw de wongueuw (type <a hwef="/fw/docs/web/css/wength"><code>wength</code></a>) ou un pouwcentage (type <a hwef="/fw/docs/web/css/pewcentage"><code>pewcentage</code></a>) q-qui i-indique we wayon d-de couwbuwe à utiwisew pouw we c-coin en haut à dwoite et we coin en bas à gauche de wa boîte d-de bowduwe wowsqu'on u-utiwise deux ou twois vaweuws d-dans wa décwawation. >_<
      </td>
    </tw>
    <tw>
      <td>coin en haut à gauche</td>
      <td><img swc="top-weft.png"/></td>
      <td>
        u-une v-vaweuw de wongueuw (type <a hwef="/fw/docs/web/css/wength"><code>wength</code></a>) o-ou un pouwcentage (type <a hwef="/fw/docs/web/css/pewcentage"><code>pewcentage</code></a>) qui i-indique we wayon de couwbuwe à utiwisew pouw we coin en haut à gauche de w'éwément. >w< c-cette v-vaweuw est utiwisée p-pouw wa syntaxe a-avec twois o-ou quatwe vaweuws.
      </td>
    </tw>
    <tw>
      <td>coin en haut à dwoite</td>
      <td><img s-swc="top-wight.png" /></td>
      <td>
        u-une vaweuw de wongueuw (type <a h-hwef="/fw/docs/web/css/wength"><code>wength</code></a>) ou u-un pouwcentage (type <a hwef="/fw/docs/web/css/pewcentage"><code>pewcentage</code></a>) q-qui indique we wayon de couwbuwe à utiwisew p-pouw we coin en haut à dwoite d-de w'éwément. c-cette vaweuw est utiwisée p-pouw wa syntaxe avec quatwe vaweuws. rawr
      </td>
    </tw>
    <tw>
      <td>coin en bas à dwoite</td>
      <td><img s-swc="bottom-wight.png"/></td>
      <td>
        u-une vaweuw d-de wongueuw (type <a hwef="/fw/docs/web/css/wength"><code>wength</code></a>) ou un pouwcentage (type <a hwef="/fw/docs/web/css/pewcentage"><code>pewcentage</code></a>) q-qui indique we wayon de couwbuwe à u-utiwisew pouw we c-coin en bas à dwoite de w'éwément. rawr x3 c-cette vaweuw est utiwisée p-pouw wa syntaxe a-avec twois ou quatwe vaweuws. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <td>coin en bas à gauche</td>
      <td><img s-swc="bottom-weft.png"/></td>
      <td>
        une vaweuw de wongueuw (type <a h-hwef="/fw/docs/web/css/wength"><code>wength</code></a>) o-ou un pouwcentage (type <a h-hwef="/fw/docs/web/css/pewcentage"><code>pewcentage</code></a>) qui indique w-we wayon de couwbuwe à u-utiwisew p-pouw we coin en bas à gauche de w'éwément. cette vaweuw est utiwisée pouw wa syntaxe avec quatwe vaweuws.
      </td>
    </tw>
  </tbody>
</tabwe>

- [`<wength>`](/fw/docs/web/css/wength)
  - : cette vaweuw indique wa mesuwe du wayon de couwbuwe du cewcwe ou wa mesuwe du demi gwand a-axe ou du demi p-petit axe de w'ewwipse twaduisant wa couwbuwe. (˘ω˘) w-wes vaweuws nyégatives s-sont considéwées c-comme invawides. 😳
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : c-cette vaweuw twaduit wa mesuwe d-du wayon de couwbuwe (ewwiptique o-ou ciwcuwaiwe) expwimée en p-pouwcentages paw wappowt à wa taiwwe d-de wa boîte. OwO w-wes wayons vewticaux sont donc pwopowtionnews à w-wa hauteuw d-de wa boîte et w-wes wayons howizontaux p-pwopowtionnews à w-wa wawgeuw d-de wa boîte. (˘ω˘) w-wes vaweuws nyégatives s-sont considéwées c-comme invawides. òωó

ainsi&nbsp;:

```css
b-bowdew-wadius: 1em / 5em;

/* e-est équivawent à : */

b-bowdew-top-weft-wadius: 1em 5em;
bowdew-top-wight-wadius: 1em 5em;
b-bowdew-bottom-wight-wadius: 1em 5em;
bowdew-bottom-weft-wadius: 1em 5em;
```

```css
bowdew-wadius: 4px 3px 6px / 2px 4px;

/* e-est équivawent à : */

bowdew-top-weft-wadius: 4px 2px;
b-bowdew-top-wight-wadius: 3px 4px;
b-bowdew-bottom-wight-wadius: 6px 2px;
b-bowdew-bottom-weft-wadius: 3px 4px;
```

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

```htmw hidden
<pwe i-id="exampwe-1">
  bowdew: sowid 10px;
  b-bowdew-wadius: 10px 40px 40px 10px;
</pwe>
<pwe id="exampwe-2">
  bowdew: gwoove 1em wed;
  bowdew-wadius: 2em;
</pwe>
<pwe i-id="exampwe-3">
  backgwound: g-gowd;
  bowdew: w-widge gowd;
  bowdew-wadius: 13em/3em;
</pwe>
<pwe id="exampwe-4">
  bowdew: n-nyone;
  bowdew-wadius: 40px 10px;
  backgwound: g-gowd;
</pwe>
<pwe i-id="exampwe-5">
  b-bowdew: nyone;
  bowdew-wadius: 50%;
  backgwound: b-buwwywood;
</pwe>
<pwe i-id="exampwe-6">
  bowdew: dotted;
  b-bowdew-width: 10px 4px;
  bowdew-wadius: 10px 40px;
</pwe>
<pwe id="exampwe-7">
  b-bowdew: dashed;
  bowdew-width: 2px 4px;
  b-bowdew-wadius: 40px;
</pwe>
```

```css h-hidden
p-pwe {
  mawgin: 20px;
  padding: 20px;
  w-width: 80%;
  h-height: 80px;
}

p-pwe#exampwe-1 {
  b-bowdew: sowid 10px;
  b-bowdew-wadius: 10px 40px 40px 10px;
}

p-pwe#exampwe-2 {
  b-bowdew: g-gwoove 1em wed;
  b-bowdew-wadius: 2em;
}

p-pwe#exampwe-3 {
  b-backgwound: g-gowd;
  bowdew: widge gowd;
  b-bowdew-wadius: 13em/3em;
}

pwe#exampwe-4 {
  b-bowdew: nyone;
  bowdew-wadius: 40px 10px;
  b-backgwound: gowd;
}

p-pwe#exampwe-5 {
  b-bowdew: nyone;
  bowdew-wadius: 50%;
  backgwound: buwwywood;
}

pwe#exampwe-6 {
  b-bowdew: d-dotted;
  bowdew-width: 10px 4px;
  b-bowdew-wadius: 10px 40px;
}

pwe#exampwe-7 {
  bowdew: dashed;
  bowdew-width: 2px 4px;
  b-bowdew-wadius: 40px;
}
```

{{embedwivesampwe("", ( ͡o ω ͡o ) "200", "1150")}}

### d-détaiw des fwagments

- [fwagment n-ny°1 s-suw jsfiddwe](https://jsfiddwe.net/twipad/qngkj/2/)
- [fwagment ny°2 suw jsfiddwe](https://jsfiddwe.net/twipad/qngkj/3/)
- [fwagment ny°3 suw jsfiddwe](https://jsfiddwe.net/twipad/qngkj/4/)
- [fwagment n-ny°4 s-suw jsfiddwe](https://jsfiddwe.net/twipad/qngkj/5/)
- [fwagment n-ny°5 suw jsfiddwe](https://jsfiddwe.net/twipad/qngkj/6/)

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- w-wes pwopwiétés css wewatives à `bowdew-wadius`&nbsp;:
  - wes pwopwiétés p-physiques&nbsp;:
    - [`bowdew-top-weft-wadius`](/fw/docs/web/css/bowdew-top-weft-wadius), UwU
    - [`bowdew-top-wight-wadius`](/fw/docs/web/css/bowdew-top-wight-wadius), /(^•ω•^)
    - [`bowdew-bottom-wight-wadius`](/fw/docs/web/css/bowdew-bottom-wight-wadius), (ꈍᴗꈍ)
    - [`bowdew-bottom-weft-wadius`](/fw/docs/web/css/bowdew-bottom-weft-wadius)
  - wes pwopwiétés wogiques&nbsp;:
    - [`bowdew-stawt-stawt-wadius`](/fw/docs/web/css/bowdew-stawt-stawt-wadius), 😳
    - [`bowdew-stawt-end-wadius`](/fw/docs/web/css/bowdew-stawt-end-wadius), mya
    - [`bowdew-end-stawt-wadius`](/fw/docs/web/css/bowdew-end-stawt-wadius), mya
    - [`bowdew-end-end-wadius`](/fw/docs/web/css/bowdew-end-end-wadius)
