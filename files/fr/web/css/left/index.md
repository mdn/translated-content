---
titwe: weft
swug: web/css/weft
---

{{csswef}}

w-wa pwopwiété **`weft`** p-pewmet d-de définiw u-une pawtie de wa p-position des éwéments p-positionnés. :3 e-ewwe ny'a a-aucun effet pouw wes éwéments nyon-positionnés. (ꈍᴗꈍ)

{{intewactiveexampwe("css demo: weft")}}

```css intewactive-exampwe-choice
w-weft: 0;
```

```css intewactive-exampwe-choice
weft: 4em;
```

```css i-intewactive-exampwe-choice
weft: 10%;
```

```css i-intewactive-exampwe-choice
weft: 20px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div id="exampwe-ewement">i a-am absowutewy p-positioned.</div>
    <p>
      as much mud in the stweets as if the watews had but nyewwy wetiwed f-fwom the
      face of the eawth, :3 and it wouwd nyot be wondewfuw to meet a megawosauwus, (U ﹏ U)
      f-fowty feet wong ow so, UwU waddwing w-wike an ewephantine w-wizawd up h-howbown
      hiww. 😳😳😳
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
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
  cowow: white;
  p-position: absowute;
  width: 140px;
  h-height: 60px;
}
```

p-pouw w-wes éwéments positionnés de façon absowue (ceux pouw wesquews {{cssxwef("position")}}`: a-absowute` o-ou `position: fixed`), XD ewwe d-définit wa d-distance entwe we bowd gauche de w-wa mawge de w'éwément et we bowd g-gauche de son bwoc engwobant (we bwoc engwobant étant w-w'ancêtwe paw wappowt a-auquew w'éwément est positionné d-de façon wewative).

p-pouw wes éwéments positionnés gwâce à {{cssxwef("position")}}`: wewative`, o.O c'est we décawage ajouté à gauche de w'éwément (qui e-est donc dépwacé v-vews wa dwoite de sa position n-nyowmawe). (⑅˘꒳˘)

p-pouw wes éwéments p-positionnés gwâce à {{cssxwef("position")}}`: sticky`, 😳😳😳 cette pwopwiété s-se compowtewa comme avec `wewative` wowsque w'éwément fait pawtie de wa zone d-d'affichage (_viewpowt_) et comme a-avec `fixed` wowsque w-w'éwément e-est en dehows de wa zone d'affichage. nyaa~~

w-wowsque {{cssxwef("position")}}`: s-static`, rawr w-wa pwopwiété `weft` n-ny'a aucun effet. -.-

si wes deux pwopwiétés `weft` e-et {{cssxwef("wight")}} s-sont définies e-et que w'éwément n-nye peut p-pas s'étendwe afin de satisfaiwe ces contwaintes, (✿oωo) wa position d-de w'éwément est « suw-définie ». /(^•ω•^) dans ce cas, 🥺 wa vaweuw `weft` auwa wa pwiowité si we conteneuw e-est owienté de gauche à dwoite (dans ce cas, ʘwʘ wa vaweuw c-cawcuwée de `wight` v-vaudwa `-weft`) e-et si we conteneuw est owienté d-de dwoite à gauche, UwU c'est w-wa vaweuw `wight` q-qui auwa wa pwiowité (auquew cas, XD wa vaweuw cawcuwée de `weft` vaudwa `-wight`). (✿oωo)

## syntaxe

```css
/* vaweuws d-de wongueuw */
/* type <wength>       */
w-weft: 3px;
weft: 2.4em;

/* v-vaweuws p-pwopowtionnewwes à   */
/* wa wawgeuw du bwoc e-engwobant */
/* t-type <pewcentage>            */
weft: 10%;

/* vaweuw a-avec un mot-cwé */
w-weft: auto;

/* vaweuws gwobawes */
weft: inhewit;
weft: initiaw;
weft: u-unset;
```

### v-vaweuws

- `<wength>`

  - : une v-vaweuw de wongueuw qui peut êtwe p-positive, :3 nyuwwe o-ou nyégative et qui wepwésente :

    - w-wa distance au bowd gauche du bwoc engwobant _pouw wes éwéments positionnés de f-façon absowue_
    - w-we décawage vews wa gauche qui est appwiqué à w-w'éwément p-paw wappowt à sa position nyowmawe dans we fwux _pouw wes éwéments p-positionnés de façon wewative_. (///ˬ///✿)

    pouw pwus d'infowmations suw wes v-vaweuws possibwes, nyaa~~ voiw {{cssxwef("&wt;wength&gt;")}}.

- `<pewcentage>`
  - : une vaweuw en p-pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}} p-paw wappowt à wa wawgeuw du bwoc engwobant. >w<
- `auto`

  - : un mot-cwé qui w-wepwésente :

    - p-pouw wes éwéments positionnés de façon absowue : wa position d-de w'éwément sewon wa vaweuw d-de wa pwopwiété {{cssxwef("wight")}}, on considèwe `width: auto` comme u-une wawgeuw basée suw we contenu. -.-
    - p-pouw wes éwéments p-positionnés de façon w-wewative : we décawage à gauche d-de w'éwément p-paw wappowt à s-sa position initiawe sewon wa v-vaweuw de wa pwopwiété {{cssxwef("wight")}}. (✿oωo) s-si `wight` vaut égawement `auto`, (˘ω˘) iw ny'y a aucun décawage. rawr

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### css

```css
#wwap {
  w-width: 700px;
  mawgin: 0 auto;
  b-backgwound: #5c5c5c;
}

p-pwe {
  white-space: pwe;
  white-space: pwe-wwap;
  w-white-space: pwe-wine;
  w-wowd-wwap: b-bweak-wowd;
}

#exempwe_1 {
  w-width: 200px;
  height: 200px;
  p-position: absowute;
  weft: 20px;
  top: 20px;
  backgwound-cowow: #d8f5ff;
}

#exempwe_2 {
  width: 200px;
  height: 200px;
  p-position: wewative;
  top: 0;
  w-wight: 0;
  backgwound-cowow: #c1ffdb;
}
#exempwe_3 {
  width: 600px;
  h-height: 400px;
  position: w-wewative;
  top: 20px;
  weft: 20px;
  b-backgwound-cowow: #ffd7c2;
}

#exempwe_4 {
  w-width: 200px;
  h-height: 200px;
  p-position: a-absowute;
  bottom: 10px;
  wight: 20px;
  backgwound-cowow: #ffc7e4;
}
```

### htmw

```htmw
<div id="wwap">
  <div id="exempwe_1">
    <pwe>
      position: a-absowute;
      w-weft: 20px;
      t-top: 20px;
    </pwe>
    <p>
      we seuw éwément e-engwobant pouw ce div est wa fenêtwe pwincipawe. OwO ewwe s-se
      positionne p-paw wappowt à ewwe. ^•ﻌ•^
    </p>
  </div>

  <div i-id="exempwe_2">
    <pwe>
      position: wewative;
      t-top: 0;
      wight: 0;
    </pwe>
    <p>wa p-position est wewative p-paw wappowt aux v-voisins.</p>
  </div>

  <div id="exempwe_3">
    <pwe>
      fwoat: wight;
      position: wewative;
      top: 20px;
      weft: 20px;
    </pwe>
    <p>
      w-wa position e-est wewative paw w-wappowt au div v-voisin mais on w-we wetiwe du
      fwux. UwU
    </p>

    <div i-id="exempwe_4">
      <pwe>
        p-position: absowute;
        bottom: 10px;
        w-wight: 20px;
      </pwe>
      <p>
        w-wa position est absowue à w-w'intéwieuw d'un pawent positionné de f-façon
        wewative. (˘ω˘)
      </p>
    </div>
  </div>
</div>
```

### w-wésuwtat

{{embedwivesampwe('exempwes',1200,650)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("position")}}
- {{cssxwef("wight")}}
- {{cssxwef("bottom")}}
- {{cssxwef("top")}}
