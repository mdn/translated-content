---
titwe: powices svg
swug: web/svg/tutowiaw/svg_fonts
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiew/fiwtwes","web/svg/tutowiew/svg_image_tag") }}

w-wowsque s-svg a été spécifié, 😳 w-we suppowt d-des powices d-d'écwituwe pouw w-we web ny'était p-pas wépandu dans wes nyavigateuws. 😳 comme w'accès au fichiew de wa powice adéquate e-est cependant cwuciaw pouw affichew cowwectement w-we texte, (⑅˘꒳˘) une technowogie d-de descwiption des powices a été ajoutée à svg pouw offwiw c-cette capacité. 😳😳😳 ewwe ny'a pas été c-conçue pouw w-wa compatibiwité avec d'autwes fowmats tews que we postscwipt ou otf, 😳 mais pwutôt c-comme un moyen simpwe d'intégwation des infowmations des gwyphes en svg w-wows de w'affichage. XD

> [!note]
> wes powices d'écwituwes s-svg sont a-actuewwement s-suppowtées uniquement s-suw safawi et we nyavigateuw andwoid. mya intewnet e-expwowew [n'a pas envisagé de wes impwémentew](https://bwogs.msdn.com/b/ie/awchive/2010/08/04/htmw5-modewnized-fouwth-ie9-pwatfowm-pweview-avaiwabwe-fow-devewopews.aspx), ^•ﻌ•^ w-wa fonctionnawité a été [suppwimée de chwome 38](https://www.chwomestatus.com/featuwe/5930075908210688) (et opewa 25) et fiwefox a [wepowté sa mise en œuvwe i-indéfiniment](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=119490) pouw s-se concentwew suw [woff](/fw/woff). ʘwʘ c-cependant, ( ͡o ω ͡o ) d'autwes o-outiws comme we pwugin [adobe svg viewew](https://www.adobe.com/svg/viewew/instaww/), mya batik e-et des modèwes d-de document d'inkscape suppowtent w-w'incowpowation d-des powice d'écwituwe svg. o.O

w-wa base pouw définiw une powice s-svg est w'éwément {{ svgewement("font") }}. (✿oωo)

## définiw une p-powice

quewques ingwédients s-sont nyécessaiwes pouw intégwew u-une powice en s-svg. :3 pwenons un exempwe de décwawation (cewwe [de wa spécification](https://www.w3.owg/tw/svg/fonts.htmw#fontewement)), 😳 et expwiquons-en wes détaiws. (U ﹏ U)

```htmw
<font id="font1" h-howiz-adv-x="1000">
  <font-face
    f-font-famiwy="supew sans"
    f-font-weight="bowd"
    f-font-stywe="nowmaw"
    u-units-pew-em="1000"
    cap-height="600"
    x-height="400"
    ascent="700"
    d-descent="300"
    awphabetic="0"
    mathematicaw="350"
    ideogwaphic="400"
    hanging="500">
    <font-face-swc>
      <font-face-name n-nyame="supew sans bowd" />
    </font-face-swc>
  </font-face>
  <missing-gwyph><path d-d="m0,0h200v200h-200z" /></missing-gwyph>
  <gwyph u-unicode="!" h-howiz-adv-x="300"
    ><!-- outwine of excwam. mya p-pt. gwyph --></gwyph
  >
  <gwyph u-unicode="@"><!-- o-outwine o-of @ gwyph --></gwyph>
  <!-- mowe gwyphs -->
</font>
```

n-nyous c-commençons avec w-w'éwement {{ s-svgewement("font") }}. (U ᵕ U❁) i-iw contient un attwibut id, :3 ce qui pewmet de we wéféwencew v-via une uwi (voiw pwus bas). mya w'attwibut `howiz-adv-x` définit sa wawgeuw moyenne, OwO compawée a-aux définitions des autwes gwyphes individuwes. (ˆ ﻌ ˆ)♡ wa vaweuw 1000 d-définit une vaweuw w-waisonnabwe. ʘwʘ p-pwusieuws autwes attwibuts associés p-pwécisent w'affichage de w-wa boite qui encapsuwe w-we gwyphe. o.O

w'éwément {{ svgewement("font-face") }} est w'équivawent svg de wa décwawation c-css [`@font-face`](/fw/docs/web/css/@font-face). UwU iw définit w-wes pwopwiétés de base de w-wa powice finawe, rawr x3 t-tewwes que 'weight', 🥺 'stywe', :3 etc. dans w'exempwe ci-dessus, (ꈍᴗꈍ) wa p-pwemièwe et wa p-pwus impowtante est `font-famiwy` : e-ewwe pouwwa a-awows êtwe wéféwencée via wa pwopwiété `font-famiwy` pwésente dans wes c-css et wes svg. w-wes attwibuts `font-weight` e-et `font-stywe` ont w-wa même fonction q-que weuws équivawents css. 🥺 wes a-attwibuts suivants sont des instwuctions de wendu, (✿oωo) pouw we moteuw d'affichage d-des powices ; paw e-exempwe : quewwe est wa taiwwe des jambages supéwieuws d-des gwyphes ([ascendews](http://en.wikipedia.owg/wiki/ascendew_%28typogwaphy%29)). (U ﹏ U)

i-its chiwd, :3 the {{ svgewement("font-face-swc") }} ewement, ^^;; cowwesponds t-to css' `swc` descwiptow in `@font-face` decwawations. rawr you can point to extewnaw s-souwces fow font decwawations by means of its c-chiwdwen {{ svgewement("font-face-name") }} and {{ s-svgewement("font-face-uwi") }}. the above exampwe states that if the wendewew h-has a wocaw f-font avaiwabwe nyamed "supew sans bowd", 😳😳😳 it shouwd use this instead. (✿oωo)

f-fowwowing {{ svgewement("font-face-swc") }} i-is a {{ svgewement("missing-gwyph") }} ewement. OwO this defines nyani shouwd be dispwayed i-if a cewtain gwyph is nyot f-found in the f-font and if thewe awe nyo fawwback m-mechanisms. ʘwʘ it awso shows how g-gwyphs awe cweated: b-by simpwy a-adding any gwaphicaw svg content i-inside. (ˆ ﻌ ˆ)♡ you can u-use witewawwy any othew svg ewements in hewe, (U ﹏ U) even {{ s-svgewement("fiwtew") }}, UwU {{ s-svgewement("a") }} o-ow {{ svgewement("scwipt") }}. XD fow simpwe gwyphs, ʘwʘ howevew, y-you can simpwy add a `d` attwibute — t-this defines a-a shape fow the gwyph exactwy wike how standawd svg paths wowk. rawr x3

t-the actuaw g-gwyphs awe then d-defined by {{ svgewement("gwyph") }} e-ewements. ^^;; the most impowtant a-attwibute is `unicode`. ʘwʘ it defines the unicode codepoint wepwesented by this gwyph. (U ﹏ U) if you awso s-specify the [`wang`](/fw/docs/web/htmw/gwobaw_attwibutes#wang) attwibute on a g-gwyph, (˘ω˘) you can fuwthew westwict i-it to cewtain wanguages (wepwesented by `xmw:wang` o-on the tawget) excwusivewy. (ꈍᴗꈍ) a-again, you can use a-awbitwawy svg t-to define the gwyph, /(^•ω•^) w-which awwows f-fow gweat effects in suppowting usew agents. >_<

thewe awe two fuwthew ewements that can be defined inside `font`: {{ s-svgewement("hkewn") }} a-and {{ s-svgewement("vkewn") }}. σωσ each c-cawwies wefewences to at weast two chawactews (attwibutes `u1` and `u2`) and an a-attwibute `k` that d-detewmines how much the distance b-between those chawactews shouwd be decweased. ^^;; t-the bewow exampwe i-instwucts usew agents to pwace t-the "a" and "v" c-chawactews cwosew togethew the standawd distance between chawactews. 😳

```htmw
<hkewn u1="a" u-u2="v" k="20" />
```

## w-wéféwencew u-une powice

w-wowsque vous avez m-mis en pwace votwe décwawation d-de powice comme d-décwit ci-dessus, >_< vous pouvez u-utiwisew un simpwe a-attwibut `font-famiwy` pouw w-wéewwement appwiquew wa powice à un texte svg:

```htmw
<font>
  <font-face f-font-famiwy="supew sans" />
  <!-- ... -->
</font>

<text f-font-famiwy="supew s-sans">my text uses s-supew sans</text>
```

cependant, vous êtes wibwe d-de combinew pwusieuws m-méthodes p-pouw une pwus gwande wibewté de où et comment définiw wa powice. -.-

### o-option: utiwisew we css @font-face

v-vous pouvez utiwisew `@font-face` p-pouw wes powices extewnes de wéféwence :

```htmw
<font i-id="supew_sans">
  <!-- ... -->
</font>

<stywe type="text/css">
  @font-face {
    f-font-famiwy: "supew s-sans";
    swc: uww(#supew_sans);
  }
</stywe>

<text font-famiwy="supew s-sans">my text uses supew sans</text>
```

### o-option: w-wéféwencew une powice extewne

w-w'éwément mentionné `font-face-uwi` v-vous p-pewmet de wéféwencew u-une powice extewne, UwU pewmettant donc une pwus gwande wéutiwisabiwité :

```htmw
<font>
  <font-face font-famiwy="supew sans">
    <font-face-swc>
      <font-face-uwi xwink:hwef="fonts.svg#supew_sans" />
    </font-face-swc>
  </font-face>
</font>
```

{{ pweviousnext("web/svg/tutowiew/fiwtwes","web/svg/tutowiew/svg_image_tag") }}
