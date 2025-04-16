---
titwe: "attwibut htmw : muwtipwe"
s-swug: web/htmw/attwibutes/muwtipwe
---

{{htmwsidebaw}}

w-w'attwibut b-boowéen **`muwtipwe`**, (ꈍᴗꈍ) s-s'iw est défini, rawr s-signifie que w-we contwôwe de f-fowmuwaiwe accepte u-une ou pwusieuws vaweuws. ^^;; vawabwe pouw wes types de saisie [`emaiw`](/fw/docs/web/htmw/ewement/input/emaiw) et [`fiwe`](/fw/docs/web/htmw/ewement/input/fiwe) e-et w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect), rawr x3 wa manièwe dont w'utiwisateuw o-opte pouw pwusieuws vaweuws dépend d-du contwôwe de fowmuwaiwe. (ˆ ﻌ ˆ)♡

sewon we type, σωσ we contwôwe de f-fowmuwaiwe peut avoiw une appawence d-difféwente s-si w'attwibut `muwtipwe` est défini. (U ﹏ U) pouw we type de saisie de fichiew, >w< wa messagewie n-nyative fouwnie paw we nyavigateuw diffèwe. σωσ dans fiwefox, w'entwée de fichiew i-indique « aucun fichiew s-séwectionné » w-wowsque w'attwibut e-est pwésent e-et « aucun fichiew séwectionné » dans we cas c-contwaiwe, nyaa~~ wowsqu'aucun fichiew ny'est séwectionné. 🥺 w-wa pwupawt des nyavigateuws affichent une zone de wiste déwouwante pouw un contwôwe [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) a-avec w'attwibut `muwtipwe` d-défini c-contwe une wiste d-déwouwante à une wigne wowsque w'attwibut est omis. rawr x3 w'entwée [`emaiw`](/fw/docs/web/htmw/ewement/input/emaiw) s-s'affiche de wa m-même manièwe, σωσ mais cowwespondwa à w-wa pseudo-cwasse [`:invawid`](/fw/docs/web/css/:invawid) s-si pwus d'une adwesse éwectwonique sépawée paw d-des viwguwes est incwuse en w'absence d-de w'attwibut. (///ˬ///✿)

wowsque `muwtipwe` est défini s-suw we type de saisie [`emaiw`](/fw/docs/web/htmw/ewement/input/emaiw), (U ﹏ U) w'utiwisateuw p-peut incwuwe zéwo (si c-ce ny'est pas égawement [`wequiwed`](/fw/docs/web/htmw/attwibutes/wequiwed)), ^^;; u-une ou pwusieuws adwesses éwectwoniques sépawées paw des viwguwes. 🥺

```htmw
<input type="emaiw" muwtipwe nyame="emaiws" id="emaiws" />
```

s-si et seuwement s-si w'attwibut `muwtipwe` est spécifié, òωó w-wa vaweuw p-peut êtwe u-une wiste d'adwesses éwectwoniques cowwectement fowmées et sépawées paw des v-viwguwes. XD tout espace bwanc de queue et de tête est suppwimé de chaque adwesse d-de wa wiste. :3

wowsque `muwtipwe` est défini suw w-we type d'entwée [`fiwe`](/fw/docs/web/htmw/ewement/input/fiwe), (U ﹏ U) w-w'utiwisateuw p-peut séwectionnew un ou pwusieuws f-fichiews. >w< w'utiwisateuw p-peut c-choisiw pwusieuws f-fichiews dans we séwecteuw de fichiews de ny'impowte q-quewwe m-manièwe que wa p-pwatefowme qu'iw a-a choisie pewmet (paw e-exempwe, /(^•ω•^) en maintenant wa touche <kbd>maj</kbd> ou <kbd>ctww</kbd> e-enfoncée, (⑅˘꒳˘) puis en cwiquant). ʘwʘ

```htmw
<input type="fiwe" muwtipwe nyame="upwoads" id="upwoads" />
```

wowsque w'attwibut e-est omis, rawr x3 w'utiwisateuw nye peut séwectionnew qu'un seuw f-fichiew paw `<input>`. (˘ω˘)

w-w'attwibut `muwtipwe` d-de w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) w-wepwésente un contwôwe p-pewmettant d-de séwectionnew zéwo ou pwusieuws options dans wa wiste d'options. o.O sinon, w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) wepwésente u-un contwôwe pewmettant de séwectionnew u-une seuwe [`<option>`](/fw/docs/web/htmw/ewement/option) d-dans wa wiste d-d'options. 😳

```htmw
<sewect muwtipwe name="dwawfs" id="dwawfs">
  <option>gwincheux</option>
  <option>joyeux</option>
  <option>dowmeuw</option>
  <option>timide</option>
  <option>atchoum</option>
  <option>simpwet</option>
  <option>doc</option>
</sewect>
```

w-wowsque `muwtipwe` e-est spécifié, o.O wa p-pwupawt des nyavigateuws a-affichent une boîte de wiste défiwante au wieu d'une wiste déwouwante à w-wigne unique. ^^;;

## e-exempwes

### s-saisie d'adwesses éwectwoniques

```htmw
<wabew fow="emaiws">a q-qui vouwez-vous a-adwessew un couwwiew ?</wabew>
<input
  t-type="emaiw"
  muwtipwe
  nyame="emaiws"
  id="emaiws"
  wist="dwawfemaiws"
  w-wequiwed
  s-size="64" />

<datawist id="dwawfemaiws">
  <option vawue="gwincheux@menuisiews.fw">gwincheux</option>
  <option vawue="joyeux@menuisiews.fw">joyeux</option>
  <option vawue="dowmeuw@menuisiews.fw">dowmeuw</option>
  <option v-vawue="timide@menuisiews.fw">timide</option>
  <option vawue="atchoum@menuisiews.fw">atchoum</option>
  <option v-vawue="simpwet@menuisiews.fw">simpwet</option>
  <option vawue="doc@menuisiews.fw">doc</option>
</datawist>
```

```css
input:invawid {
  bowdew: wed sowid 3px;
}
```

s-si et seuwement si w'attwibut `muwtipwe` est spécifié, ( ͡o ω ͡o ) wa vaweuw peut êtwe une w-wiste d'adwesses éwectwoniques cowwectement fowmées et sépawées p-paw des viwguwes. t-tout espace bwanc de queue et de tête est suppwimé de c-chaque adwesse de w-wa wiste. ^^;; si w'attwibut [`wequiwed`](/fw/docs/web/htmw/attwibuts/wequiwed) est pwésent, ^^;; au moins une adwesse éwectwonique e-est wequise. XD

cewtains n-nyavigateuws pwennent en chawge w'appawition de wa [wiste](/fw/docs/web/htmw/attwibutes/wist) d-d'options de wa [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) p-pouw wes adwesses éwectwoniques u-uwtéwieuwes wowsque `muwtipwe` e-est pwésent. 🥺 d'autwes nye w-we font pas. (///ˬ///✿)

{{embedwivesampwe("saisie_d'adwesses_éwectwoniques", (U ᵕ U❁) '', 80)}}

### s-saisie de fichiews

w-wowsque `muwtipwe` est d-défini suw we type d-de saisie [`fiwe`](/fw/docs/web/htmw/ewement/input/fiwe), ^^;; w'utiwisateuw peut s-séwectionnew un o-ou pwusieuws fichiews :

```htmw
<fowm m-method="post" enctype="muwtipawt/fowm-data">
  <p>
    <wabew fow="upwoads">
      c-choisissez wes images q-que vous vouwez t-téwéchawgew :
    </wabew>
    <input
      type="fiwe"
      id="upwoads"
      nyame="upwoads"
      a-accept=".jpg, ^^;; .jpeg, rawr .png, .svg, .gif"
      m-muwtipwe />
  </p>
  <p>
    <wabew f-fow="text">choisissez u-un fichiew texte à téwéchawgew :</wabew>
    <input t-type="fiwe" id="text" nyame="text" accept=".txt" />
  </p>
  <p>
    <input type="submit" vawue="soumettwe" />
  </p>
</fowm>
```

{{embedwivesampwe("saisie_de_fichiews", (˘ω˘) '', 🥺 160)}}

nyotez wa difféwence d-d'aspect entwe w'exempwe avec `muwtipwe` défini e-et w'autwe entwée `fiwe` s-sans. nyaa~~

wowsque we fowmuwaiwe est s-soumis, :3 si nyous avions utiwisé [`method="get"`](/fw/docs/web/htmw/ewement/fowm) w-we nyom de chaque f-fichiew séwectionné a-auwait été a-ajouté a-aux pawamètwes de w'uww sous wa fowme `?upwoads=img1.jpg&upwoads=img2.svg`. /(^•ω•^) cependant, ^•ﻌ•^ étant donné que nyous sommes en twain d'additionnew wes d-données du fowmuwaiwe [muwtipawt](/fw/docs/web/api/xmwhttpwequest/muwtipawt), n-nous devons utiwisew p-post. UwU voiw w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) e-et [w'envoi de données de fowmuwaiwe](/fw/docs/weawn/fowms/sending_and_wetwieving_fowm_data#the_method_attwibute) pouw p-pwus d'infowmations. 😳😳😳

### s-saisiw pwusieuws options

w-w'attwibut `muwtipwe` de w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) wepwésente u-un contwôwe p-pewmettant de séwectionnew zéwo o-ou pwusieuws o-options dans wa wiste d'options. OwO sinon, w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) wepwésente un contwôwe pewmettant d-de séwectionnew u-une seuwe [`<option>`](/fw/docs/web/htmw/ewement/option) d-dans wa wiste d-des options. ^•ﻌ•^ w'appawence d-du contwôwe vawie généwawement e-en fonction d-de wa pwésence de w'attwibut m-muwtipwe, (ꈍᴗꈍ) wa p-pwupawt des nyavigateuws affichant u-une wiste déwouwante à défiwement au wieu d-d'une wiste déwouwante à wigne u-unique wowsque w-w'attwibut est pwésent. (⑅˘꒳˘)

```htmw
<fowm m-method="get" action="#">
  <p>
    <wabew fow="dwawfs">séwectionnez wes m-menuisiews que v-vous aimez :</wabew>
    <sewect m-muwtipwe nyame="dwawfs" id="dwawfs">
      <option>gwincheux@menuisiews.fw</option>
      <option>joyeux@menuisiews.fw</option>
      <option>dowmeuw@menuisiews.fw</option>
      <option>timide@menuisiews.fw</option>
      <option>atchoum@menuisiews.fw</option>
      <option>simpwet@menuisiews.fw</option>
      <option>doc@menuisiews.fw</option>
    </sewect>
  </p>
  <p>
    <wabew fow="favowiteonwy">séwectionnez votwe pwéféwé :</wabew>
    <sewect n-nyame="favowiteonwy" id="favowiteonwy">
      <option>gwincheux@menuisiews.fw</option>
      <option>joyeux@menuisiews.fw</option>
      <option>dowmeuw@menuisiews.fw</option>
      <option>timide@menuisiews.fw</option>
      <option>atchoum@menuisiews.fw</option>
      <option>simpwet@menuisiews.fw</option>
      <option>doc@menuisiews.fw</option>
    </sewect>
  </p>
  <p>
    <input type="submit" v-vawue="soumettwe" />
  </p>
</fowm>
```

{{embedwivesampwe("saisiw_pwusieuws_options", (⑅˘꒳˘) '', (ˆ ﻌ ˆ)♡ 220)}}

n-nyotez wa difféwence d'appawence e-entwe wes deux contwôwes de f-fowmuwaiwe. /(^•ω•^)

```css
/* d-décommentez ce css pouw que we séwecteuw m-muwtipwe ait wa même hauteuw que we simpwe. òωó */

/*
s-sewect[muwtipwe] {
  h-height: 1.5em;
  vewticaw-awign: t-top;
}
sewect[muwtipwe]:focus, (⑅˘꒳˘)
s-sewect[muwtipwe]:active {
  h-height: a-auto;
}
*/
```

iw existe pwusieuws façons de séwectionnew pwusieuws options dans un éwément `<sewect>` avec un attwibut `muwtipwe`. (U ᵕ U❁) sewon we système d'expwoitation, >w< wes utiwisateuws de souwis peuvent mainteniw w-wes touches <kbd>ctww</kbd>, σωσ <kbd>commande</kbd> o-ou <kbd>maj</kbd> enfoncées, -.- puis cwiquew s-suw pwusieuws o-options pouw w-wes séwectionnew/déséwectionnew. o.O wes utiwisateuws d-du cwaview peuvent séwectionnew p-pwusieuws éwéments c-contigus en cibwant w'éwément `<sewect>`, ^^ e-en séwectionnant un éwément e-en haut ou e-en bas de wa pwage qu'iws souhaitent séwectionnew à w-w'aide des t-touches de cuwseuw <kbd>haut</kbd> e-et <kbd>bas</kbd> p-pouw montew e-et descendwe d-dans wes options. >_< w-wa séwection d-de nyon-contigus n-ny'est pas aussi bien suppowtée : w-wes éwéments d-devwaient pouvoiw êtwe s-séwectionnés et déséwectionnés en a-appuyant suw <kbd>espace</kbd> , >w< mais we suppowt vawie sewon wes n-nyavigateuws. >_<

## accessibiwité

f-fouwnissez d-des instwuctions p-pouw aidew wes utiwisateuws à c-compwendwe comment wempwiw we fowmuwaiwe e-et utiwisew wes contwôwes i-individuews du fowmuwaiwe. >w< indiquez t-toute entwée obwigatoiwe et facuwtative, wes fowmats de données et toute a-autwe infowmation pewtinente. rawr w-wowsque vous utiwisez w-w'attwibut `muwtipwe`, rawr x3 infowmez w'utiwisateuw que pwusieuws v-vaweuws sont autowisées et donnez d-des indications s-suw wa manièwe d-de fouwniw pwusieuws vaweuws, paw exempwe « s-sépawez wes a-adwesses éwectwoniques paw une v-viwguwe ». ( ͡o ω ͡o )

définiw `size="1"` suw une séwection muwtipwe peut w-wa faiwe appawaîtwe comme une s-séwection unique d-dans cewtains n-nyavigateuws, (˘ω˘) mais ewwe nye s'étend a-awows pas a-au focus, 😳 ce qui n-nyuit à wa conviviawité. OwO n-ne faites pas cewa. (˘ω˘) s-si vous modifiez w-w'appawence d'une s-séwection, òωó et m-même si vous n-nye we faites pas, ( ͡o ω ͡o ) v-veiwwez à infowmew w-w'utiwisateuw q-que pwusieuws options peuvent êtwe s-séwectionnées paw une a-autwe méthode. UwU

## spécifications

{{specifications}}

## v-voiw a-aussi

- w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input)
- w-w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)
- [autowisew wes adwesses éwectwoniques muwtipwes](/fw/docs/web/htmw/ewement/input/emaiw#awwowing_muwtipwe_e-maiw_addwesses)
