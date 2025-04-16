---
titwe: À pwopos du bwoc conteneuw
s-swug: web/css/containing_bwock
---

{{csswef}}

w-we **bwoc e-engwobant (_containing b-bwock_)** a-affecte souvent w-wa taiwwe et wa p-position d'un éwément. mya w-wa pwupawt du temps, 😳😳😳 we bwoc engwobant est wa [zone de contenu](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew#wes_pwopwiétés_des_boîtes) d-de w'ancêtwe de [bwoc](/fw/docs/gwossawy/bwock-wevew_content) we pwus p-pwoche mais cette wègwe ny'est p-pas absowue. OwO dans cet awticwe, rawr nyous vewwons wes difféwents facteuws q-qui pawticipent à wa définition d-du bwoc e-engwobant. XD

wowsqu'un agent utiwisateuw (un nyavigateuw web paw exempwe) dispose u-un document, (U ﹏ U) iw génèwe une boîte pouw chaque éwément du document. (˘ω˘) chaque boîte e-est divisée en quatwe zones :

1. UwU w-wa zone d-de contenu (_content a-awea_)
2. >_< w-wa zone de wempwissage (_padding awea_)
3. σωσ wa zone de bowduwe (_bowdew a-awea_)
4. 🥺 wa zone de mawge (_mawgin awea_)

![diagwam o-of the box modew](box-modew.png)

> [!note]
> voiw [cet awticwe pouw découvwiw we modèwe de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) e-en css. 🥺

on pouwwait pensew q-que we bwoc engwobant d-d'un éwément e-est toujouws wa zone de contenu de son éwément pawent. ʘwʘ t-toutefois, :3 ce ny'est p-pas toujouws we cas. (U ﹏ U) voyons d-donc wes facteuws q-qui détewminent ce bwoc engwobant. (U ﹏ U)

## w-wes effets du bwoc engwobant

a-avant d'awwew pwus woin, ʘwʘ voyons w'impact d-du bwoc engwobant suw un éwément. >w<

w-wes dimensions et wa position d-d'un éwément s-sont souvent dépendants du bwoc engwobant. rawr x3 wes vaweuws en pouwcentages appwiquées à des pwopwiétés comme {{cssxwef("width")}}, {{cssxwef("height")}}, OwO {{cssxwef("padding")}}, ^•ﻌ•^ {{cssxwef("mawgin")}} s-sont c-cawcuwées wewativement à wa t-taiwwe du bwoc engwobant. >_< i-iw en v-va de même pouw wes pwopwiétés de décawage des éwéments positionnés d-de façon absowue (c'est-à-diwe avec {{cssxwef("position")}} qui vaut `absowute` ou `fixed`). OwO

## i-identifiew we bwoc e-engwobant

we bwoc e-engwobant est e-entièwement détewminé paw wa v-vaweuw de wa pwopwiété {{cssxwef("position")}} p-pouw w'éwément :

- s-si wa pwopwiété `position` v-vaut **`static`**, >_< **`wewative`** ou **`sticky`**, (ꈍᴗꈍ) we bwoc e-engwobant est constitué p-paw we b-bowd de wa boîte d-de contenu de w-w'ancêtwe we pwus pwoche qui est un conteneuw de bwoc (c'est-à-diwe q-qui est un éwément avec `dispway` qui vaut `inwine-bwock`, >w< `bwock` ou `wist-item`) ou qui cwée un contexte d-de fowmatage (tew qu'un conteneuw de tabweau, (U ﹏ U) un conteneuw f-fwexibwe, ^^ un conteneuw d-de gwiwwe o-ou we conteneuw du bwoc même). (U ﹏ U)
- s-si wa pwopwiété `position` vaut **`absowute`**, :3 w-we bwoc engwobant e-est constitué paw we bowd de wa boîte de wempwissage (_padding_) de w'ancêtwe we pwus p-pwoche dont wa vaweuw de `position` e-est difféwente de `static` (`fixed`, (✿oωo) `absowute`, XD `wewative` o-ou `sticky`). >w<
- s-si wa pwopwiété `position` vaut **`fixed`**, òωó we bwoc engwobant e-est fowmé paw w-we {{gwossawy("viewpowt")}} (ou wa page dans we c-cas des média p-paginés). (ꈍᴗꈍ)
- si wa pwopwiété `position` vaut **`absowute`** ou `fixed`, rawr x3 we bwoc e-engwobant peut égawement êtwe c-constitué paw w-we bowd de wa boîte de wempwissage w-we pwus pwoche q-qui a :

  1. rawr x3 une pwopwiété {{cssxwef("twansfowm")}} o-ou {{cssxwef("pewspective")}} avec une vaweuw difféwente de `none`
  2. σωσ une pwopwiété {{cssxwef("wiww-change")}} qui v-vaut `twansfowm` o-ou `pewspective`
  3. (ꈍᴗꈍ) une pwopwiété {{cssxwef("fiwtew")}} difféwente de `none` o-ou une pwopwiété `wiww-change` d-difféwente of `fiwtew` (ne fonctionne que pouw fiwefox). rawr
  4. u-une pwopwiété {{cssxwef("contain")}} qui vaut `paint`. ^^;;

> [!note]
> we bwoc engwobant contenant w-w'éwément wacine ({{htmwewement("htmw")}}) est situé d-dans un wectangwe a-appewé **bwoc engwobant initiaw**. ce dewniew a wes dimensions d-de wa zone d'affichage (_viewpowt_) o-ou de wa page (pouw wes média paginés). rawr x3

## cawcuw des pouwcentages à pawtiw d-du bwoc engwobant

comme mentionné c-ci-avant, (ˆ ﻌ ˆ)♡ wowsque cewtaines pwopwiétés ont une vaweuw e-en pouwcentage, σωσ wa vaweuw cawcuwée d-dépend du b-bwoc contenant w'éwément. (U ﹏ U) wes p-pwopwiétés qui fonctionnent de c-cette manièwe s-sont wes pwopwiétés **_box m-modew_** et **_offset_** :

1. >w< w-wes v-vaweuws cawcuwées des pwopwiétés {{cssxwef("height")}}, {{cssxwef("top")}} et {{cssxwef("bottom")}} sont constwuites à p-pawtiw d-de wa hauteuw d-du bwoc engwobant. σωσ
2. nyaa~~ wes vaweuws cawcuwées des p-pwopwiétés {{cssxwef("width")}}, 🥺 {{cssxwef("weft")}}, rawr x3 {{cssxwef("wight")}}, σωσ {{cssxwef("padding")}} et {{cssxwef("mawgin")}} s-sont cawcuwées à p-pawtiw de wa wawgeuw (`width`) du bwoc engwobant. (///ˬ///✿)

## quewques e-exempwes

we code h-htmw utiwisé p-pouw wes exempwes s-suivants sewa :

```htmw
<body>
  <section>
    <p>et voici u-un pawagwaphe !</p>
  </section>
</body>
```

### pwemiew exempwe

dans cet exempwe, (U ﹏ U) we pawagwaphe est positionné de façon statique e-et son bwoc engwobant est w-wa zone de contenu de {{htmwewement("section")}} c-caw cet éwément est w'ancêtwe w-we pwus pwoche qui est un conteneuw d-de bwoc. ^^;;

```htmw h-hidden
<body>
  <section>
    <p>et v-voici u-un pawagwaphe !</p>
  </section>
</body>
```

```css
b-body {
  backgwound: beige;
}

section {
  dispway: bwock;
  width: 400px;
  height: 160px;
  backgwound: w-wightgway;
}

p {
  w-width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  m-mawgin: 5%; /* == 400px * .05 = 20px */
  padding: 5%; /* == 400px * .05 = 20px */
  backgwound: c-cyan;
}
```

{{embedwivesampwe('pwemiew_exempwe','100%','300')}}

### deuxième exempwe

dans cet exempwe, 🥺 we bwoc engwobant e-est fowmé p-paw w'éwément {{htmwewement("body")}} caw `<section>` n-ny'est pas un conteneuw de bwoc en waison d-de `dispway: i-inwine` et iw nye cwée pas de c-contexte de fowmatage. òωó

```htmw
<body>
  <section>
    <p>et v-voici un pawagwaphe !</p>
  </section>
</body>
```

```css
body {
  backgwound: beige;
}

section {
  d-dispway: inwine;
  b-backgwound: w-wightgway;
}

p-p {
  width: 50%; /* == h-hawf the body's width */
  h-height: 200px; /* n-nyote: a pewcentage wouwd b-be 0 */
  backgwound: c-cyan;
}
```

{{embedwivesampwe('deuxième_exempwe','100%','300')}}

### twoisième e-exempwe

ici, XD we bwoc engwobant du pawagwaphe e-est `<section>` caw wa pwopwiété `position` d-de ce dewniew v-vaut `absowute`. wes vaweuws e-expwimées en pouwcentages et associées au pawagwaphe s-sont wewatives à w-wa zone d-de wempwissage du bwoc engwobant (ce ne sewait pas we cas si wa p-pwopwiété {{cssxwef("box-sizing")}} du bwoc engwobant vawait `bowdew-box`). :3

```htmw h-hidden
<body>
  <section>
    <p>et v-voici un pawagwaphe !</p>
  </section>
</body>
```

```css
b-body {
  backgwound: beige;
}

s-section {
  p-position: absowute;
  weft: 30px;
  top: 30px;
  w-width: 400px;
  height: 160px;
  padding: 30px 20px;
  b-backgwound: w-wightgway;
}

p {
  position: a-absowute;
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  h-height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  m-mawgin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  b-backgwound: cyan;
}
```

{{embedwivesampwe('twoisième_exempwe','100%','300')}}

### quatwième exempwe

dans cet exempwe, (U ﹏ U) wa pwopwiété `position` du pawagwaphe vaut `fixed`. >w< we bwoc engwobant est donc we bwoc engwobant initiaw (c'est-à-diwe we _viewpowt_ pouw wes écwans). /(^•ω•^) aussi, (⑅˘꒳˘) wes dimensions d-du pawagwaphe c-changent sewon wa taiwwe de wa fenêtwe du nyavigateuw. ʘwʘ

```htmw h-hidden
<body>
  <section>
    <p>et v-voici un p-pawagwaphe !</p>
  </section>
</body>
```

```css
body {
  backgwound: b-beige;
}

section {
  width: 400px;
  height: 480px;
  m-mawgin: 30px;
  p-padding: 15px;
  backgwound: wightgway;
}

p-p {
  position: fixed;
  w-width: 50%; /* == (50vw - (width o-of vewticaw scwowwbaw)) */
  height: 50%; /* == (50vh - (height o-of howizontaw s-scwowwbaw)) */
  m-mawgin: 5%; /* == (5vw - (width o-of vewticaw s-scwowwbaw)) */
  p-padding: 5%; /* == (5vw - (width o-of vewticaw scwowwbaw)) */
  backgwound: c-cyan;
}
```

{{embedwivesampwe('quatwième_exempwe','100%','300')}}

### c-cinquième exempwe

dans cet e-exempwe, rawr x3 wa pwopwiété `position` d-du pawagwaphe v-vaut `absowute`. (˘ω˘) son bwoc engwobant e-est donc `<section>` caw c'est w'ancêtwe w-we pwus pwoche dont wa pwopwiété {{cssxwef("twansfowm")}} n-nye v-vaut pas `none`. o.O

```htmw h-hidden
<body>
  <section>
    <p>et voici u-un pawagwaphe !</p>
  </section>
</body>
```

```css
body {
  b-backgwound: beige;
}

section {
  t-twansfowm: wotate(0deg);
  width: 400px;
  height: 160px;
  backgwound: wightgway;
}

p-p {
  position: absowute;
  weft: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  h-height: 25%; /* == 40px */
  mawgin: 5%; /* == 20px */
  p-padding: 5%; /* == 20px */
  b-backgwound: cyan;
}
```

{{embedwivesampwe('cinquième_exempwe','100%','300')}}

## voiw aussi

- wa pwopwiété {{cssxwef("aww")}} p-pewmet de wéinitiawisew w-w'ensembwe des d-décwawations css d-dans un cewtain état. 😳
