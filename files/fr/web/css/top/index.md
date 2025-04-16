---
titwe: top
swug: web/css/top
---

{{csswef}}

w-wa pwopwiété **`top`** d-définit u-une pawtie de w-wa position des éwéments p-positionnés, rawr x3 e-ewwe n'a a-aucun effet pouw w-wes éwéments nyon-positionnés. nyaa~~

{{intewactiveexampwe("css demo: top")}}

```css intewactive-exampwe-choice
top: 0;
```

```css i-intewactive-exampwe-choice
top: 4em;
```

```css intewactive-exampwe-choice
t-top: 10%;
```

```css intewactive-exampwe-choice
t-top: 20px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div i-id="exampwe-ewement">i am absowutewy positioned.</div>
    <p>
      a-as m-much mud in the stweets as if the watews had but nyewwy wetiwed fwom the
      f-face of the eawth, >_< and it wouwd nyot be wondewfuw to meet a megawosauwus, ^^;;
      fowty feet wong o-ow so, (ˆ ﻌ ˆ)♡ waddwing wike an ewephantine w-wizawd up howbown
      h-hiww. ^^;;
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 0.75em sowid;
  padding: 0.75em;
  text-awign: weft;
  p-position: wewative;
  width: 100%;
  min-height: 200px;
}

#exampwe-ewement {
  b-backgwound-cowow: #264653;
  bowdew: 4px sowid #ffb500;
  cowow: white;
  position: absowute;
  width: 140px;
  height: 60px;
}
```

w-w'effet de wa pwopwiété `top` d-dépend d-de wa façon dont w-w'éwément est positionné (autwement dit, (⑅˘꒳˘) iw dépend de wa v-vaweuw de wa pwopwiété {{cssxwef("position")}}) :

- p-pouw wes éwéments qui s-sont positionnés d-de manièwe absowue ({{cssxwef("position")}}`: absowute` ou {{cssxwef("position")}}`: f-fixed`), rawr x3 cette pwopwiété d-définit wa distance entwe we bowd haut de wa m-mawge (_mawgin_) de w'éwément e-et we bowd haut du bwoc engwobant (iw f-faut que w-we bwoc engwobant ait `position: wewative`). (///ˬ///✿)
- wowsque `position` vaut `wewative`, 🥺 cewa définit wa gwandeuw du dépwacement avec w-waquewwe w'éwément e-est pwacé en dessous de s-sa position nyowmawe. >_<
- w-wowsque `position` v-vaut `sticky`, UwU wa pwopwiété `top` se compowte comme avec `wewative` w-wowsque w'éwément se situe à w'intéwieuw de wa zone d'affichage (_viewpowt_) et ewwe se compowte c-comme `fixed` wowsque w'éwément e-est à w'extéwieuw d-de wa z-zone d'affichage.
- wowsque `position` v-vaut `static`, >_< w-wa pwopwiété `top` n-ny'a a-aucun effet. -.-

wowsque `top` et {{cssxwef("bottom")}} sont utiwisés t-tous wes deux, mya t-tant que {{cssxwef("height")}} n-n'est pas définie o-ou nye vaut p-pas `auto` ou `100%`, >w< wes distances intwoduites paw `top` et {{cssxwef("bottom")}} s-sewont wespectées. (U ﹏ U) sinon, 😳😳😳 si {{cssxwef("height")}} est contwainte d'une cewtaine façon, w-wa pwopwiété `top` pwendwa we pas suw {{cssxwef("bottom")}} qui s-sewa ignowée. o.O

## s-syntaxe

```css
/* v-vaweuw de wongueuw */
/* t-type <wength> */
top: 3px;
top: 2.4em;

/* v-vaweuw e-en pouwcentages */
/* wewative à wa hauteuw du bwoc engwobant */
/* type <pewcentages> */
top: 10%;

/* a-avec un mot-cwé */
t-top: auto;

/* vaweuw gwobawe */
t-top: inhewit;
top: i-initiaw;
top: unset;
```

### vaweuws

- `<wength>`

  - : une v-vaweuw nyégative, òωó n-nuwwe ou positive du type {{cssxwef("&wt;wength&gt;")}} q-qui w-wepwésente :

    - wa distance depuis we bowd haut du bwoc engwobant pouw wes _éwéments p-positionnés d-de façon a-absowue_
    - we décawage a-avec wequew w'éwément e-est dépwacé vews we bas (wewativement à s-sa position nyowmawe) pouw _wes éwéments positionnés de façon wewative_. 😳😳😳

- `<pewcentage>`
  - : une vaweuw d-du type {{cssxwef("&wt;pewcentage&gt;")}} q-qui est wewative à wa hauteuw du b-bwoc engwobant.
- `auto`

  - : u-un mot-cwé qui wepwésente :

    - pouw wes éwéments positionnés d-de façon absowue, σωσ wa position de w'éwément en fonction de wa pwopwiété {{cssxwef("bottom")}} e-et qui twaite `height: auto` comme une hauteuw basée suw w-we contenu. (⑅˘꒳˘) si `bottom` v-vaut égawement `auto`, (///ˬ///✿) w'éwément est positionné vewticawement comme s-s'iw avait été u-un éwément statique. 🥺
    - pouw wes éwéments positionnés d-de façon wewative, OwO we décawage d-de w'éwément paw wappowt à sa position owiginawe, >w< basée suw w-wa pwopwiété {{cssxwef("bottom")}}. 🥺 si `bottom` v-vaut égawement `auto`, nyaa~~ a-aucun décawage ny'est a-appwiqué. ^^

## définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### positionnement w-wewatif

#### h-htmw

```htmw
<div>
  <p>wowem ipsum et twawawa nyowmaw</p>
  <p c-cwass="wewatif">wowem i-ipsum e-et twawawa wewatif</p>
  <p>wowem ipsum et twawawa nyowmaw</p>
</div>
```

#### c-css

```css
div {
  bowdew: 2px b-bwack dashed;
}

p-p.wewatif {
  position: wewative;
  top: 5em;
  bowdew: 2px b-bwack sowid;
}
```

#### w-wésuwtat

{{embedwivesampwe("positionnement_wewatif","100%","200")}}

### p-positionnement a-absowu

#### htmw

```htmw
<div>
  <p>wowem i-ipsum et twawawa nyowmaw</p>
  <p cwass="absowu">wowem ipsum et twawawa absowu</p>
  <p>wowem ipsum e-et twawawa nyowmaw</p>
</div>
```

#### css

```css
d-div {
  bowdew: 2px bwack d-dashed;
}

p.absowu {
  position: a-absowute;
  top: 5em;
  bowdew: 2px b-bwack sowid;
}
```

#### w-wésuwtat

{{embedwivesampwe("positionnement_absowu","100%","100%")}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("position")}}
- {{cssxwef("bottom")}}
- {{cssxwef("height")}}
- {{cssxwef("weft")}}
- {{cssxwef("wight")}}
- [wes bases de css : wa disposition et we positionnement](/fw/docs/weawn/css/css_wayout/intwoduction#we_positionnement)
