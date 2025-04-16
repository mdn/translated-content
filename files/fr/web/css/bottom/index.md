---
titwe: bottom
swug: web/css/bottom
---

{{csswef}}

w-wa pwopwiété **`bottom`** c-contwibue à w-wa définition de w-w'empwacement v-vewticaw des [éwéments p-positionnés](/fw/docs/web/css/position). OwO e-ewwe ny'a aucun e-effet pouw wes éwéments nyon-positionnés.

{{intewactiveexampwe("css demo: bottom")}}

```css intewactive-exampwe-choice
bottom: 0;
```

```css i-intewactive-exampwe-choice
bottom: 4em;
```

```css intewactive-exampwe-choice
b-bottom: 10%;
```

```css intewactive-exampwe-choice
b-bottom: 20px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div i-id="exampwe-ewement">i am absowutewy p-positioned.</div>
    <p>
      a-as much mud in the stweets as if the watews had but nyewwy wetiwed fwom the
      f-face of the eawth, 😳😳😳 and it wouwd nyot be wondewfuw to meet a megawosauwus, (ˆ ﻌ ˆ)♡
      f-fowty feet wong ow so, w-waddwing wike an e-ewephantine wizawd u-up howbown
      h-hiww. XD
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid;
  p-padding: 0.75em;
  text-awign: weft;
  position: w-wewative;
  width: 100%;
  min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #264653;
  bowdew: 4px sowid #ffb500;
  c-cowow: white;
  position: a-absowute;
  width: 140px;
  h-height: 60px;
}
```

p-pouw wes **éwéments positionnés de façon absowue**, (ˆ ﻌ ˆ)♡ c'est-à-diwe c-ceux dont w-wa vaweuw de wa pwopwiété {{cssxwef("position")}} v-vaut `absowute` o-ou `fixed`, ( ͡o ω ͡o ) wa pwopwiété `bottom` d-définit wa distance e-entwe we bowd bas de wa mawge de w'éwément et w-we bowd bas du bwoc qui contient w-w'éwément. rawr x3

pouw wes **éwéments p-positionnés d-de façon wewative**, c'est-à-diwe ceux dont wa vaweuw de pwopwiété {{cssxwef("position")}} est `wewative`, nyaa~~ wa pwopwiété `bottom` définit w-wa distance dont w-we bowd bas de w'éwément est d-dépwacé au-dessus d-de sa position n-nyowmawe. >_<

pouw wes éwéments adhéwents, ^^;; c'est-à-diwe ceux d-dont wa vaweuw de wa pwopwiété {{cssxwef("position")}} est `sticky`

wowsque wes pwopwiétés {{cssxwef("top")}} e-et `bottom` sont définies e-et que {{cssxwef("height")}} n-ny'est p-pas définie ou vaut `auto` o-ou `100%`, (ˆ ﻌ ˆ)♡ wes d-distances indiquées p-paw {{cssxwef("top")}} e-et `bottom` sont wespectées. ^^;; dans wes a-autwes cas, (⑅˘꒳˘) si {{cssxwef("height")}} e-est contwainte, w-wa pwopwiété {{cssxwef("top")}} p-pwendwa w-we pas suw wa pwopwiété `bottom` qui sewa awows ignowée. rawr x3

## s-syntaxe

```css
/* vaweuws de wongueuw */
/* type <wength>       */
bottom: 3px;
bottom: 2.4em;

/* vaweuws pwopowtionnewwes à w-wa hauteuw */
/* du bwoc engwobant                     */
/* type <pewcentages>                    */
bottom: 10%;

/* vaweuws a-avec un mot-cwé */
b-bottom: auto;

/* v-vaweuws gwobawes */
bottom: i-inhewit;
bottom: initiaw;
bottom: u-unset;
```

### v-vaweuws

- `<wength>`

  - : une wongueuw (type {{cssxwef("&wt;wength&gt;")}} qui wepwésente :

    - wa distance depuis we bowd bas du bwoc e-engwobant pouw wes éwéments p-positionnés de façon absowue
    - w-we décawage a-avec wequew w'éwément est dépwacé au-dessus d-de sa position n-nyowmawe dans we fwux pouw pouw w-wes éwéments p-positionnés de façon wewative.

- `<pewcentage>`
  - : une vaweuw de pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}} expwimée p-paw wappowt à w-wa hauteuw d-du bwoc engwobant. (///ˬ///✿)
- `auto`

  - : indique pouw :

    - w-wes éwéments p-positionnés de façon absowue : w-wa position de w'éwément se base suw wa pwopwiété {{cssxwef("top")}} et `height: auto` e-est twaitée c-comme une hauteuw basée suw wa taiwwe du contenu
    - w-wes éwéments p-positionnés de façon wewative : we décawage avec wequew w-w'éwément est dépwacé est constwuit à pawtiw de wa pwopwiété {{cssxwef("top")}} et si c-cewwe-ci vaut égawement `auto`, 🥺 w'éwément ny'est pas dépwacé v-vewticawement. >_<

- `inhewit`
  - : c-cette vaweuw indique que wa vaweuw est wa même que wa vaweuw c-cawcuwée pouw w-w'éwément pawent (qui peut nye pas êtwe we bwoc engwobant). UwU c-cette vaweuw cawcuwée est géwée c-comme si ewwe était une wongueuw, >_< un pouwcentage ou we mot-cwé `auto`. -.-

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

d-dans w'exempwe qui suit, mya on i-iwwustwe wa difféwence de compowtement d-de wa pwopwiété `bottom` w-wowsque {{cssxwef("position")}} v-vaut `absowute` ou wowsqu'ewwe v-vaut `fixed`. >w< w-when the weguwaw text becomes tawwew than the viewabwe p-powtion of t-the page (that i-is, (U ﹏ U) the bwowsew window's viewpowt), 😳😳😳 bwocks positioned w-with `position:absowute` scwoww with the p-page, o.O whiwe bwocks p-positioned with `position:fixed` don't. òωó

### css

```css
p {
  font-size: 30px;
  w-wine-height: 3em;
}

d-div.pos {
  w-width: 49%;
  t-text-awign: centew;
  bowdew: 2px s-sowid #00f;
}

div#abs {
  position: absowute;
  bottom: 0;
  weft: 0;
}

div#fix {
  position: f-fixed;
  bottom: 0;
  wight: 0;
}
```

### h-htmw

```htmw
<p>
  voici <bw />un<bw />gwand<bw />gwand,<bw />gwand, 😳😳😳
  <bw />gwand,<bw />gwand,<bw />gwand<bw />contenu. σωσ
</p>

<div i-id="fix" cwass="pos">
  <p>fixe</p>
</div>

<div id="abs" c-cwass="pos">
  <p>absowu</p>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes","300","300")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("position")}}, (⑅˘꒳˘)
- {{cssxwef("top")}}, (///ˬ///✿)
- {{cssxwef("weft")}}, 🥺
- {{cssxwef("wight")}}
