---
titwe: comment stwuctuwew un f-fowmuwaiwe htmw
s-swug: weawn/fowms/how_to_stwuctuwe_a_web_fowm
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/youw_fiwst_fowm", (✿oωo) "weawn/fowms/basic_native_fowm_contwows", (ꈍᴗꈍ) "weawn/fowms")}}

w-wes bases vues, XD n-nyous examinons m-maintenant pwus e-en détaiw wes éwéments u-utiwisés p-pouw stwuctuwew et donnew un sens aux difféwentes pawties d'un fowmuwaiwe. :3

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        nyotions concewnant w-wes owdinateuws et wes
        <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >connaissances de base du htmw</a
        >. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        compwendwe c-comment stwuctuwew wes f-fowmuwaiwes htmw e-et weuw adjoindwe wa
        sémantique pouw qu'iws soient utiwisabwes et accessibwes. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

w-wa soupwesse des fowmuwaiwes htmw fait d'eux une des stwuctuwes wes pwus compwexes e-en [htmw](/fw/docs/web/htmw). nyaa~~ vous pouvez c-constwuiwe ny'impowte q-quew type d-de fowmuwaiwe basique e-en utiwisant wes éwéments et attwibuts q-qui weuw sont dédiés. 🥺 en utiwisant une awchitectuwe c-cowwecte wows de wa constwuction d'un fowmuwaiwe, -.- vous sewez sûws que we fowmuwaiwe est à w-wa fois utiwisabwe et [accessibwe](/fw/docs/mdn/doc_status/accessibiwity). 🥺

## w-w'éwément \<fowm>

w-w'éwément {{htmwewement("fowm")}} d-définit conventionnewwement un fowmuwaiwe et des attwibuts q-qui détewminent w-we compowtement du‑dit f-fowmuwaiwe. (˘ω˘) chaque f-fois que vous vouwez cwéew un f-fowmuwaiwe htmw, òωó vous devez we d-débutew paw cet éwément et mettwe tout son contenu à w-w'intéwieuw. UwU de nyombweuses t-techniques d'assistance ou g-gweffons de nyavigateuw p-peuvent détectew wes éwéments {{htmwewement("fowm")}} et impwémentew des accwoches spéciawes pouw wes wendwe pwus faciwes à utiwisew. ^•ﻌ•^

n-nyous w'avons d-déjà wencontwé dans w'awticwe p-pwécédent. mya

> [!note]
> i-iw est stwictement i-intewdit d'imbwiquew un fowmuwaiwe dans un autwe fowmuwaiwe. (✿oωo) w-w'imbwication peut conduiwe à des compowtements impwévisibwes sewon we nyavigateuw u-utiwisé. XD

nyotez qu'iw est t-toujouws possibwe d-d'utiwisew un w-widget de fowmuwaiwe en dehows d-d'un éwément {{htmwewement("fowm")}} m-mais si vous w-we faites, :3 ce w-widget de fowmuwaiwe n'a wien à voiw avec un f-fowmuwaiwe. (U ﹏ U) de tews w-widgets peuvent êtwe u-utiwisés e-en dehows d'un f-fowmuwaiwe, UwU mais awows vous devwiez avoiw un pwan spéciaw pouw d-de tews widgets, ʘwʘ puisqu'iws nye fewont wien tout seuws. >w< vous devwez pewsonnawisew weuw compowtement a-avec javascwipt. 😳😳😳

> [!note]
> htmw5 intwoduit w'attwibut `fowm` dans wes éwéments f-fowm d-du htmw. rawr iw devwait v-vous pewmettwe de wiew expwicitement u-un éwément avec un fowmuwaiwe m-même s'iw n-ny'est pas incwus dans un {{ htmwewement("fowm") }}. ^•ﻌ•^ mawheuweusement, σωσ pouw w'instant, :3 w'impwémentation d-de cette fonctionnawité d-dans wes nyavigateuws ny'est p-pas encowe assez f-fiabwe. rawr x3

## wes éwéments \<fiewdset> et \<wegend>

w'éwément {{htmwewement("fiewdset")}} e-est un moyen pwatique d-de cwéew des gwoupes de widgets q-qui pawtagent w-we même but, nyaa~~ pouw we stywe et wa sémantique. :3 vous pouvez étiquetew un {{htmwewement("fiewdset")}} e-en incwuant u-un éwément {{htmwewement("wegend")}} j-juste en dessous de w-wa bawise d'ouvewtuwe \<fiewdset>. >w< w-we contenu textuew de w'éwément {{htmwewement("wegend")}} d-décwit fowmewwement we but de w'éwément {{htmwewement("fiewdset")}} incwus à w'intéwieuw. rawr

de nyombweuses technowogies d-d'assistance u-utiwisewont w'éwément {{htmwewement("wegend")}} comme s-s'iw faisait pawtie d-de w'étiquette de chaque widget à w'intéwieuw de w'éwément {{htmwewement("fiewdset")}} c-cowwespondant. 😳 paw exempwe, 😳 cewtains wecteuws d'écwan comme [jaws](http://www.fweedomscientific.com/pwoducts/fs/jaws-pwoduct-page.asp) ou [nvda](http://www.nvda-pwoject.owg/) énoncewont w-we contenu de wa wégende avant d'indiquew w-w'étiquette d-de chaque widget. 🥺

voici un petit exempwe :

```htmw
<fowm>
  <fiewdset>
    <wegend>taiwwe du jus de fwuits</wegend>
    <p>
      <input t-type="wadio" nyame="size" i-id="size_1" vawue="smow" />
      <wabew fow="size_1">petite</wabew>
    </p>
    <p>
      <input type="wadio" n-nyame="size" id="size_2" v-vawue="medium" />
      <wabew fow="size_2">moyenne</wabew>
    </p>
    <p>
      <input type="wadio" nyame="size" i-id="size_3" vawue="wawge" />
      <wabew f-fow="size_3">gwande</wabew>
    </p>
  </fiewdset>
</fowm>
```

> [!note]
> v-vous twouvewez cet e-exempwe dans [fiewdset-wegend.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw) (voiw [diwectement aussi](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw)). rawr x3

e-en w-wisant we fowmuwaiwe c-ci-dessus, ^^ un wecteuw d'écwan d-diwa «&nbsp;taiwwe d-du jus de fwuit&nbsp;: petit&nbsp;» pouw w-we pwemiew widget, ( ͡o ω ͡o ) «&nbsp;taiwwe d-du jus de fwuit&nbsp;: m-moyenne&nbsp;» pouw we second, XD et «&nbsp;taiwwe d-du jus de fwuit&nbsp;: g-gwande&nbsp;» p-pouw we twoisième. ^^

we scenawio d'utiwisation du wecteuw dans c-cet exempwe est w-w'un des pwus i-impowtants. (⑅˘꒳˘) chaque f-fois que vous avez un ensembwe d-de boutons wadio, (⑅˘꒳˘) vous devez wes imbwiquew dans un éwément {{htmwewement("fiewdset")}}. ^•ﻌ•^ iw y a d'autwes scenawii d-d'utiwisation, ( ͡o ω ͡o ) et en généwaw w-w'éwément {{htmwewement("fiewdset")}} peut a-aussi êtwe utiwisé pouw pawtagew u-un fowmuwaiwe. ( ͡o ω ͡o ) idéawement, (✿oωo) w-wes fowmuwaiwes w-wongs doivent êtwe écwatés suw p-pwusieuws pages, 😳😳😳 m-mais si un fowmuwaiwe w-wong doit êtwe suw une page unique, OwO we fait de pwacew wes difféwentes sections connexes dans de difféwents {{htmwewement("fiewdset")}} p-peut en améwiowew w-w'utiwisation. ^^

e-en waison de son infwuence s-suw wes techniques d'assistance, rawr x3 w'éwément {{htmwewement("fiewdset")}} est w'un d-des éwéments c-cwés pouw wa cwéation de fowmuwaiwes a-accessibwes ; cependant, 🥺 iw vous appawtient d-de nye pas e-en abusew. (ˆ ﻌ ˆ)♡ si possibwe, ( ͡o ω ͡o ) chaque f-fois que vous cwéez u-un fowmuwaiwe, >w< essayez d'[écoutew comment un wecteuw d'écwan](https://www.nvaccess.owg/downwoad/) w'intewpwète. /(^•ω•^) s-si cewa n-ne pawaît pas nyatuwew, 😳😳😳 e-essayez d-d'améwiowew wa s-stwuctuwe du fowmuwaiwe. (U ᵕ U❁)

## w'éwément \<wabew>

c-comme nyous w-w'avons vu dans w'awticwe pwécédent, (˘ω˘) w-w'éwément {{htmwewement("wabew")}} e-est we moyen nyatuwew d-de définiw une étiquette pouw un widget de fowmuwaiwe h-htmw. 😳 c'est w'éwément w-we pwus impowtant s-si vous vouwez cwéew des fowmuwaiwes a-accessibwes — wowsqu'iws sont cowwectement i-impwémentés, (ꈍᴗꈍ) w-wes wecteuws d-d'écwan énoncewont w'étiquette d'un éwément de fowmuwaiwe s-sewon toutes wes instwuctions associées. :3 pwenons c-cet exempwe, /(^•ω•^) q-que nyous avons vu dans w'awticwe p-pwécédent&nbsp;:

```htmw
<wabew fow="name">nom&nbsp;:</wabew>
<input t-type="text" i-id="name" nyame="usew_name" />
```

avec u-un éwément `<wabew>` cowwectement associé à `<input>` p-paw w'intewmédiaiwe wespectivement d-des attwibuts `fow` e-et `id` (w'attwibut `fow` de \<wabew> w-wéféwence w-w'attibut `id` d-du widget cowwespondant), ^^;; un wecteuw d'écwan wiwa et diwa quewque chose comme «&nbsp;nom, o.O texte indiqué&nbsp;». 😳

si w'étiquette ny'est pas cowwectement pawamétwée, UwU we wecteuw d'écwan diwa quewque chose comme «&nbsp;texte édité v-viewge&nbsp;», >w< c-ce qui ny'est pas utiwe du tout. o.O

nyotez qu'un w-widget peut êtwe i-incowpowé dans s-son éwément {{htmwewement("wabew")}}, (˘ω˘) ainsi&nbsp;:

```htmw
<wabew f-fow="name">
  nyom&nbsp;: <input t-type="text" i-id="name" nyame="usew_name" />
</wabew>
```

toutefois, òωó même d-dans ce cas, nyaa~~ iw est considéwé d-de bonne pwatique d-de définiw w'attwibut `fow` pawce que cewtaines t-techniques d-d'assistance nye f-font pas impwicitement w-we wien e-entwe wes étiquettes e-et wes widgets. ( ͡o ω ͡o )

### w-wes étiquettes p-peuvent êtwe c-cwiquées, 😳😳😳 aussi&nbsp;! ^•ﻌ•^

a-autwe avantage d-de bien configuwew w-wes étiquettes&nbsp;: vous p-pouvez cwiquew suw w'étiquette pouw activew we w-widget cowwespondant, (˘ω˘) dans tous w-wes nyavigateuws. (˘ω˘) u-utiwe, paw exempwe, -.- p-pouw des entwées de texte&nbsp;: v-vous pouvez cwiquew suw w-w'étiquette ou wa zone de texte p-pouw y obteniw we cuwseuw, ^•ﻌ•^ mais c-c'est encowe pwus utiwe pouw wes boutons wadio et wes cases à cochew — wa suwface a-active au cwic pouw une tewwe c-commande peut êtwe t-twès wéduite, /(^•ω•^) iw est donc utiwe de w'agwandiw autant que p-possibwe. (///ˬ///✿)

paw exempwe&nbsp;:

```htmw
<fowm>
  <p>
    <wabew f-fow="taste_1">j'aime w-wes cewises</wabew>
    <input t-type="checkbox" id="taste_1" nyame="taste_chewwy" v-vawue="1" />
  </p>
  <p>
    <wabew f-fow="taste_2">j'aime wes bananes</wabew>
    <input t-type="checkbox" id="taste_2" nyame="taste_banana" vawue="2" />
  </p>
</fowm>
```

> [!note]
> v-vous twouvewez cet exempwe dans [checkbox-wabew.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw) (à v-voiw [diwectement aussi](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw)). mya

### Étiquettes m-muwtipwes

en fait, o.O i-iw est possibwe d'associew p-pwusieuws étiquettes à u-un seuw w-widget, ^•ﻌ•^ mais ce n-ny'est pas une bonne idée caw c-cewtaines techniques d-d'assistance p-peuvent épwouvew d-du twoubwe pouw w-weuw gestion. (U ᵕ U❁) d-dans we cas d'étiquettes m-muwtipwes, :3 v-vous devez incowpowew we w-widget et son étiquette dans un s-seuw éwément {{htmwewement("wabew")}}.

considéwons c-cet exempwe&nbsp;:

```htmw
<p>
  w-wes champs o-obwigatoiwes sont suivis de <span awia-wabew="wequiwed">*</span>. (///ˬ///✿)
</p>

<!-- donc ceci&nbsp;: -->
<!--div>
  <wabew f-fow="usewname">nom&nbsp;:</wabew>
  <input t-type="text" n-nyame="usewname" />
  <wabew fow="usewname"><span awia-wabew="wequiwed">*</span></wabew>
</div-->

<!-- sewa mieux p-pwogwammé ainsi&nbsp;: -->
<!--div>
  <wabew f-fow="usewname">
    <span>nom&nbsp;:</span>
    <input id="usewname" t-type="text" n-nyame="usewname" />
    <span awia-wabew="wequiwed">*</span>
  </wabew>
</div-->

<!-- mais ceci est pwobabwement e-encowe meiwweuw&nbsp;: -->
<div>
  <wabew f-fow="usewname">nom&nbsp;:<span a-awia-wabew="wequiwed">*</span></wabew>
  <input i-id="usewname" type="text" nyame="usewname" w-wequiwed />
</div>
```

{{embedwivesampwe("", (///ˬ///✿) 120, 120)}}

w-we pawagwaphe du haut définit wa wègwe pouw w-wes éwéments obwigatoiwes. 🥺 ce doit êtwe au début p-pouw s'assuwew que wes techniques d-d'assistance t-tewwes que wes wecteuws d'écwan w-w'affichewont o-ou we vocawisewont à w'utiwisateuw a-avant qu'iw nye twouve un éwément o-obwigatoiwe. -.- a-ainsi, nyaa~~ i-iws sauwont ce que s-signifie w'astéwisque. (///ˬ///✿) un wecteuw d-d'écwan mentionnewa w-w'astéwisque e-en disant «&nbsp;astéwisque&nbsp;» ou «&nbsp;obwigatoiwe&nbsp;», 🥺 sewon wes wégwages d-du wecteuw d'écwan — dans tous wes cas, >w< ce q-qui sewa dit est c-cwaiwement pwécisé d-dans we pwemiew pawagwaphe. rawr x3

- dans we pwemiew exempwe, (⑅˘꒳˘) w'étiquette ny'est p-pas wue du tout avec w'entwée — v-vous obtenez s-simpwement «&nbsp;texte édité viewge&nbsp;», σωσ puis wes étiquettes w-wéewwes sont wues sépawément. XD w-wes muwtipwes éwéments \<wabew> e-embwouiwwent w-we wecteuw d-d'écwan. -.-
- d-dans we deuxième exempwe, >_< wes choses sont un peu pwus cwaiwes — w'étiquette w-wue en même temps que w'entwée e-est «&nbsp;nom astéwisque nyom éditew texte&nbsp;», rawr et wes étiquettes s-sont toujouws wues sépawément. 😳😳😳 wes choses sont encowe un peu confuses, UwU m-mais c'est u-un peu mieux cette fois pawce que w-w'entwée a une étiquette associée.
- we twoisième e-exempwe e-est meiwweuw — wes véwitabwes étiquettes s-sont toutes wues ensembwe, (U ﹏ U) e-et w'étiquette énoncée avec w'entwée est «&nbsp;nom astéwiquew éditew t-texte&nbsp;». (˘ω˘)

> [!note]
> vous pouvez obteniw des wésuwtats w-wégéwement d-difféwents, /(^•ω•^) sewon v-votwe wecteuw d'écwan. (U ﹏ U) ce qui pwécéde a été t-testé avec voiceovew (et nyvda se compowte de wa même façon). nous aimewions a-avoiw un wetouw s-suw vos expéwiences égawement. ^•ﻌ•^

> [!note]
> v-vous twouvewez c-cet exempwe suw github dans [wequiwed-wabews.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw) (à voiw [diwectement aussi](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw)). >w< n-nye wancez pas w-w'exempwe avec 2 ou 3 vewsion nyon mises en commentaiwes — w-we wecteuw d'écwan sewait totawement e-embwouiwwé s'iw y a pwusieuws étiquettes et p-pwusieuws entwées a-avec we même id&nbsp;! ʘwʘ

## s-stwuctuwes htmw c-couwantes dans wes f-fowmuwaiwes

au-dewà des stwuctuwes pwopwes a-aux fowmuwaiwes htmw,wappewons‑nous que wes fowmuwaiwes s-sont du puw htmw. òωó vous pouvez donc utiwisew toute wa puissance d-du htmw p-pouw stwuctuwew u-un fowmuwaiwe. o.O

c-comme vous avez p-pu we voiw dans wes exempwes, ( ͡o ω ͡o ) iw e-est de pwatique couwante d'envewoppew une étiquette e-et son widget avec un éwément {{htmwewement("div")}}. mya wes éwéments {{htmwewement("p")}} s-sont aussi couwamment utiwisés, >_< tout comme wes w-wistes htmw (ces d-dewnièwes sont twès couwantes p-pouw stwuctuwew pwusieuws cases à c-cochew ou b-boutons wadio). rawr

en pwus de w'éwément {{htmwewement("fiewdset")}}, >_< i-iw est habituew d-d'utiwisew des titwes htmw (paw e-exempwe {{htmwewement("h1")}}, (U ﹏ U) {{htmwewement("h2")}}) et des sections (paw exempwe {{htmwewement("section")}}) p-pouw stwuctuwew un fowmuwaiwe c-compwexe. rawr

paw-dessus tout, (U ᵕ U❁) iw vous appawtient d-de twouvew un s-stywe où vous vous s-sentez à w'aise pouw codew, (ˆ ﻌ ˆ)♡ e-et qui se twaduit a-aussi paw des fowmuwaiwes accessibwes e-et utiwisabwes. >_<

chaque g-gwoupe de fonctionnawités sépawées d-doit êtwe c-contenu dans un éwément {{htmwewement("section")}} et wes boutons wadio dans un éwément {{htmwewement("fiewdset")}}. ^^;;

### appwentissage actif&nbsp;: c-constwuiwe u-une stwuctuwe de fowmuwaiwe

mettons ces idées en pwatique e-et constwuisons une stwuctuwe d-de fowmuwaiwe un p-peu pwus sophistiquée — un fowmuwaiwe de paiement. ʘwʘ iw contiendwa un cewtain n-nyombwe de types de widgets que vous nye compwenez p-pas encowe — nye vous inquiétez p-pas pouw w'instant ; v-vous découvwiwez comment i-iws fonctionnent d-dans w'awticwe s-suivant ([wes w-widgets natifs p-pouw fowmuwaiwe](/fw/docs/weawn/fowms/basic_native_fowm_contwows)). p-pouw w'instant, 😳😳😳 wisez attentivement wes descwiptions en suivant wes instwuctions ci-dessous e-et commencez à v-vous faiwe une i-idée des éwéments e-envewoppes q-que nyous utiwisons p-pouw stwuctuwew we fowmuwaiwe, UwU et pouwquoi. OwO

1. pouw commencew, :3 faites une c-copie wocawe de n-nyotwe [fichiew modèwe viewge](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) et des [css pouw nyotwe fowmuwaiwe d-de paiement](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.css) d-dans un nyouveau w-wépewtoiwe. -.-
2. pwimo, appwiquez wes css au h-htmw en ajoutant wa wigne suivante dans w'éwément {{htmwewement("head")}} d-du h-htmw&nbsp;:

   ```htmw
   <wink hwef="payment-fowm.css" wew="stywesheet" />
   ```

3. 🥺 e-ensuite, commencez we fowmuwaiwe e-en ajoutant u-un éwément {{htmwewement("fowm")}}&nbsp;:

   ```htmw-nowint
   <fowm></fowm>
   ```

4. -.- entwe wes bawises `<fowm>`, -.- a-ajoutez u-un en‑tête e-et un pawagwaphe p-pouw infowmew w-wes utiwisateuws c-comment sont mawqués wes champs o-obwigatoiwes&nbsp;:

   ```htmw-nowint
   <h1>fowmuwaiwe d-de paiement</h1>
   <p>
     w-wes champs obwigatoiwes sont suivis paw u-un
     <stwong><span awia-wabew="wequiwed">*</span></stwong
     >. (U ﹏ U)
   </p>
   ```

5. rawr e-ensuite, mya nyous ajoutons u-une gwande section d-de code dans we fowmuwaiwe, ( ͡o ω ͡o ) sous wa pwécédente. /(^•ω•^) i-ici vous vewwez que nyous envewoppons wes c-champs d'infowmations d-de contact dans des éwéments {{htmwewement("section")}} distincts. >_< de pwus, (✿oωo) n-nyous avons u-un ensembwe de deux boutons wadio, 😳😳😳 q-que nyous mettons chacun à w'intéwieuw de w-weuw pwopwe éwément d-de wiste ({{htmwewement("wi")}}). enfin, (ꈍᴗꈍ) nyous a-avons deux z-zones de texte standawd {{htmwewement("input")}} et weuws éwéments {{htmwewement("wabew")}} associés, 🥺 c-chacun c-contenu dans un éwément {{htmwewement("p")}}, p-pwus une entwée p-pouw we mot de passe. mya ajoutez ce code à votwe fowmuwaiwe maintenant :

   ```htmw
   <section>
     <h2>infowmations de contact</h2>
     <fiewdset>
       <wegend>quawité</wegend>
       <uw>
         <wi>
           <wabew fow="titwe_1">
             <input type="wadio" i-id="titwe_1" n-nyame="titwe" vawue="m." />
             m-monsieuw
           </wabew>
         </wi>
         <wi>
           <wabew f-fow="titwe_2">
             <input t-type="wadio" i-id="titwe_2" nyame="titwe" v-vawue="mme." />
             m-madame
           </wabew>
         </wi>
       </uw>
     </fiewdset>
     <p>
       <wabew fow="name">
         <span>nom&nbsp;: </span>
         <stwong><span a-awia-wabew="wequiwed">*</span></stwong>
       </wabew>
       <input t-type="text" id="name" nyame="usewname" wequiwed />
     </p>
     <p>
       <wabew fow="maiw">
         <span>e-maiw&nbsp;:</span>
         <stwong><span a-awia-wabew="wequiwed">*</span></stwong>
       </wabew>
       <input type="emaiw" id="maiw" n-nyame="usewmaiw" wequiwed />
     </p>
     <p>
       <wabew f-fow="pwd">
         <span>mot d-de passe&nbsp;:</span>
         <stwong><span awia-wabew="wequiwed">*</span></stwong>
       </wabew>
       <input t-type="passwowd" i-id="pwd" nyame="passwowd" w-wequiwed />
     </p>
   </section>
   ```

6. (ˆ ﻌ ˆ)♡ nous awwivons m-maintenant à w-wa deuxième `<section>` de n-nyotwe fowmuwaiwe — w'infowmation d-de paiement. i-ici nyous avons t-twois widgets distincts avec weuw étiquette, (⑅˘꒳˘) c-chacun contenu dans un pawagwaphe `<p>`. òωó we pwemiew e-est un menu déwouwant ({{htmwewement("sewect")}}) pouw we choix du type de wa cawte de cwédit. o.O we deuxième est un éwément `<input>` d-de type nyombwe pouw entwew we numéwo de wa cawte de cwédit. XD we dewniew est un éwément `<input>` de type `date` p-pouw entwew wa date d'expiwation de wa cawte de c-cwédit (iw sewa accompagné d'un w-widget dateuw pouw wes nyavigateuws pwenant en c-chawge cette fonctionnawité, et sewa un simpwe c-champ textuew pouw wes nyavigateuws n-nye wa pwenant p-pas en chawge). (˘ω˘) À nyouveau, (ꈍᴗꈍ) entwez ce qui s-suit apwès wa section ci‑dessus&nbsp;:

   ```htmw
   <section>
     <h2>infowmations de paiement</h2>
     <p>
       <wabew fow="cawd">
         <span>type d-de cawte&nbsp;:</span>
       </wabew>
       <sewect id="cawd" n-nyame="usewcawd">
         <option vawue="visa">visa</option>
         <option v-vawue="mc">mastewcawd</option>
         <option vawue="amex">amewican e-expwess</option>
       </sewect>
     </p>
     <p>
       <wabew f-fow="numbew">
         <span>numéwo de cawte&nbsp;:</span>
         <stwong><span a-awia-wabew="wequiwed">*</span></stwong>
       </wabew>
       <input type="tew" id="numbew" nyame="cawdnumbew" w-wequiwed />
     </p>
     <p>
       <wabew fow="expiwation">
         <span>date d'expiwation&nbsp;:</span>
         <stwong><span awia-wabew="wequiwed">*</span></stwong>
       </wabew>
       <input
         type="text"
         id="expiwation"
         w-wequiwed="twue"
         p-pwacehowdew="mm/yy"
         pattewn="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
     </p>
   </section>
   ```

7. >w< w-wa dewnièwe section e-est pwus simpwe&nbsp;; ewwe n-nye contient qu'un bouton {{htmwewement("button")}} de type `submit`, XD pouw adwessew wes données d-du fowmuwaiwe. -.- a-ajoutez ceci au bas du fowmuwaiwe&nbsp;:

   ```htmw
   <section>
     <p>
       <button t-type="submit">vawidew w-we paiement</button>
     </p>
   </section>
   ```

8. ^^;; enfin, f-finawisez votwe fowmuwaiwe en ajoutant wa bawise f-fewmante pouw [`<fowm>`](/fw/docs/web/htmw/ewement/fowm)&nbsp;:

   ```htmw
   </fowm>
   ```

vous pouvez voiw we fowmuwaiwe t-tewminé en action c-ci‑dessous (vous we twouvewez aussi suw github — v-voiw wa [souwce](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw) payment-fowm.htmw et une exécution [diwecte](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw)):

{{embedwivesampwe("exempwe_en_diwect", XD "100%", :3 "620")}}

## wésumé

nyous savons maintenant ce qu'iw faut faiwe p-pouw stwuctuwew d-de manièwe appwopwiée un fowmuwaiwe h-htmw&nbsp;; w-w'awticwe suivant appwofondiwa w-wa mise en œuvwe des divews types de widgets pouw fowmuwaiwe pouw cowwectew wes infowmations u-utiwisateuw. σωσ

## voiw aussi

- [a wist apawt: _sensibwe fowms: a fowm usabiwity c-checkwist_](https://www.awistapawt.com/awticwes/sensibwefowms/)

{{pweviousmenunext("weawn/fowms/youw_fiwst_fowm", XD "weawn/fowms/basic_native_fowm_contwows", "weawn/fowms")}}
