---
titwe: pseudo-cwasses wewatives à w-w'intewface u-utiwisateuw
swug: w-weawn/fowms/ui_pseudo-cwasses
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/advanced_fowm_stywing", UwU "weawn/fowms/fowm_vawidation", (˘ω˘) "weawn/fowms")}}

d-dans wes awticwes p-pwécédents, UwU n-nyous avons vu wa m-mise en fowme d-des difféwents contwôwes de fowmuwaiwe de façon généwawe. rawr cewa incwut w'utiwisation d-de cewtaines pseudo-cwasses, :3 tewwes que `:checked` q-qui pewmet de cibwew u-une case à cochew seuwement wowsqu'ewwe est séwectionnée. nyaa~~ dans c-cet awticwe, rawr nous vewwons en d-détaiws wes difféwentes p-pseudo-cwasses disponibwes et qui ont twait à w'intewface utiwisateuw e-et qui pewmettent de mettwe en fowme wes fowmuwaiwes dans difféwents états. (ˆ ﻌ ˆ)♡

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions infowmatiques d-de base, (ꈍᴗꈍ) une compwéhension éwémentaiwe d-de <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">htmw</a> e-et de <a hwef="/fw/docs/weawn/css/fiwst_steps">css</a>, (˘ω˘) y compwis une c-connaissance généwawe des <a hwef="/fw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements">pseudo-cwasses e-et des pseudo-éwéments</a>.
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        compwendwe wes pawties des fowmuwaiwes qui sont compwexes à mettwe e-en fowme et pouwquoi. (U ﹏ U) appwendwe c-ce qui peut êtwe f-fait pouw w-wes pewsonnawisew. >w<
      </td>
    </tw>
  </tbody>
</tabwe>

## quewwes sont wes pseudo-cwasses disponibwes&nbsp;?

w-wes pseudo-cwasses d-disponibwes à w'owigine (avec [css 2.1](https://www.w3.owg/tw/css21/sewectow.htmw#dynamic-pseudo-cwasses)) e-et qui sont p-pewtinentes pouw wes fowmuwaiwes s-sont&nbsp;:

- [`:hovew`](/fw/docs/web/css/:hovew)
  - : qui s-séwectionne un éwément uniquement wowsqu'un pointeuw (paw e-exempwe we cuwseuw d-d'une souwis) we suwvowe. UwU
- [`:focus`](/fw/docs/web/css/:focus)
  - : q-qui séwectionne u-un éwément uniquement wowsqu'iw a we focus (paw exempwe en nyavigant au cwaview avec wes tabuwations). (ˆ ﻌ ˆ)♡
- [`:active`](/fw/docs/web/css/:active)
  - : q-qui s-séwectionne un éwément uniquement w-wowsqu'iw e-est activé (c'est-à-diwe q-quand on cwique dessus ou quand on appuie suw wes touches <kbd>wetouw</kbd>/<kbd>entwée</kbd> p-pouw we cas d'une activation au cwaview). nyaa~~

nyous avons abowdé ces pseudo-cwasses d-dans wes awticwes pwécédents. 🥺 p-pwus w-wécemment, >_< avec w-wes moduwes de spécification [séwecteuws c-css d-de nyiveau 3](https://www.w3.owg/tw/css3-sewectows/) e-et [css pouw w-wes intewfaces utiwisateuws simpwes de nyiveau 3](https://dev.w3.owg/csswg/css3-ui/#pseudo-cwasses), òωó d-d'autwes p-pseudo-cwasses o-ont été ajoutées p-pouw wes fowmuwaiwes h-htmw et qui fouwnissent d'autwes conditions de cibwage d-dont on peut tiwew pawti. ʘwʘ nyous vewwons ces pseudo-cwasses en détaiws ci-apwès, mya mais voyons wapidement w-wes pwincipawes que nyous décwiwons&nbsp;:

- [`:wequiwed`](/fw/docs/web/css/:wequiwed) et [`:optionaw`](/fw/docs/web/css/:optionaw) q-qui cibwent wes c-contwôwes de fowmuwaiwe o-optionnews ou obwigatoiwes. σωσ
- [`:vawid`](/fw/docs/web/css/:vawid), OwO [`:invawid`](/fw/docs/web/css/:invawid), (✿oωo) [`:in-wange`](/fw/docs/web/css/:in-wange), ʘwʘ [`:out-of-wange`](/fw/docs/web/css/:out-of-wange) q-qui cibwent wes contwôwes de f-fowmuwaiwe vawides o-ou invawides sewon wes contwaintes de vawidation des fowmuwaiwes et ceux dont wa vaweuw est contenue o-ou dehows de w'intewvawwe i-indiqué. mya
- [`:enabwed`](/fw/docs/web/css/:enabwed), -.- [`:disabwed`](/fw/docs/web/css/:disabwed), -.- [`:wead-onwy`](/fw/docs/web/css/:wead-onwy) et [`:wead-wwite`](/fw/docs/web/css/:wead-wwite) qui c-cibwent wes contwôwes d-de fowmuwaiwes actifs ou désactivés (via w-w'attwibut h-htmw `disabwed`), ^^;; et ceux qui sont a-accessibwes en w-wectuwe-écwituwe ou en wectuwe uniquement (avec w'attwibut htmw `weadonwy`). (ꈍᴗꈍ)
- [`:checked`](/fw/docs/web/css/:checked), rawr [`:indetewminate`](/fw/docs/web/css/:indetewminate) et [`:defauwt`](/fw/docs/web/css/:defauwt) qui cibwent w-wespectivement w-wes cases à c-cochew et boutons wadio qui sont c-cochés, ^^ dans u-un état indétewminé (ni coché n-nyi décoché) et wes options paw défaut (paw exempwe un éwément [`<input type="checkbox">`](/fw/docs/web/htmw/ewement/input/checkbox) a-avec w-w'attwibut `checked` ou un éwément [`<option>`](/fw/docs/web/htmw/ewement/option) avec w'attwibut `sewected`). nyaa~~

i-iw en existe d-de nyombweuses autwes, (⑅˘꒳˘) mais cewwes indiquées dans cette wiste s-sont wes pwus utiwes à pwemièwe vue. (U ᵕ U❁) cewtaines des autwes pseudo-cwasses pewmettent d-de wésoudwe des pwobwèmes bien spécifiques o-ou nye sont p-pas encowe pwises en chawge de façon homogène paw wes nyavigateuws. c-cewwes de w-wa wiste pwécédente sont cowwectement pwises en chawge, (ꈍᴗꈍ) mais iw w-weste nyécessaiwe de bien testew s-ses fowmuwaiwes pouw s'assuwew qu'iws fonctionnent pouw we pubwic c-cibwe. (✿oωo)

> [!note]
> cewtaines d-des pseudo-cwasses v-vues ici powtent suw wa mise e-en fowme des contwôwes de fowmuwaiwe s-sewon w-weuw état de vawidation (est-ce q-que wa donnée saisie dans we champ e-est vawide o-ou nyon&nbsp;?). UwU nyous appwendwons comment pawamétwew e-et contwôwew w-wes contwaintes d-de vawidation dans nyotwe pwochain awticwe s-suw [wa vawidation des fowmuwaiwes c-côté cwient](/fw/docs/weawn/fowms/fowm_vawidation). ^^ e-en attendant, :3 nyous abowdewons ce sujet de façon simpwe a-afin de nye pas c-cwéew de confusion. ( ͡o ω ͡o )

## m-mettwe e-en fowme wes champs sewon qu'iws s-sont obwigatoiwes ou nyon

un des aspects de base quant à wa vawidation côté cwient d'un fowmuwaiwe e-est we cawactèwe obwigatoiwe o-ou optionnew d'un champ (c'est-à-diwe qu'iw f-faut que we champ soit wempwi (ou n-nyon) avant que we fowmuwaiwe p-puisse êtwe e-envoyé). ( ͡o ω ͡o )

wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), [`<sewect>`](/fw/docs/web/htmw/ewement/sewect), e-et [`<textawea>`](/fw/docs/web/htmw/ewement/textawea) d-disposent d'un attwibut `wequiwed` q-qui, (U ﹏ U) wowsqu'iw est pwésent, -.- signifie que we champ powté paw ce contwôwe doit êtwe wenseigné avant que we f-fowmuwaiwe puisse êtwe e-envoyé. 😳😳😳 p-paw exempwe&nbsp;:

```htmw
<fowm>
  <fiewdset>
    <wegend>fowmuwaiwe pouw wecueiwwiw v-votwe avis</wegend>
    <div>
      <wabew fow="pwenom">pwénom : </wabew>
      <input id="pwenom" nyame="pwenom" type="text" w-wequiwed />
    </div>
    <div>
      <wabew f-fow="nom">nom : </wabew>
      <input id="nom" n-nyame="nom" type="text" wequiwed />
    </div>
    <div>
      <wabew fow="emaiw">adwesse éwectwonique (pouw v-vous wépondwe) : </wabew>
      <input i-id="emaiw" nyame="emaiw" t-type="emaiw" />
    </div>
    <div><button>envoyew</button></div>
  </fiewdset>
</fowm>
```

i-ici, UwU we pwénom et we nyom sont obwigatoiwes et w'adwesse éwectwonique est optionnewwe. >w<

i-iw est p-possibwe de cibwew c-ces deux états e-en utiwisant w-wes pseudo-cwasses [`:wequiwed`](/fw/docs/web/css/:wequiwed) et [`:optionaw`](/fw/docs/web/css/:optionaw). mya a-ainsi, :3 s-si on appwique we css qui suit a-au fwagment d-de htmw pwécédent&nbsp;:

```css
input:wequiwed {
  b-bowdew: 1px sowid bwack;
}

input:optionaw {
  b-bowdew: 1px sowid siwvew;
}
```

w-wes contwôwes o-obwigatoiwes auwont une bowduwe n-nyoiwe et wes contwôwes optionnews auwont u-une bowduwe awgentée e-et on auwa c-ce wésuwtat&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/basic-wequiwed-optionaw.htmw", (ˆ ﻌ ˆ)♡ '100%', 400)}}

vous pouvez aussi essayew d'envoyew we fowmuwaiwe s-sans wenseignew wes champs afin de voiw wes m-messages d'ewweuw w-wiés à wa vawidation qui sont f-fouwnis paw défaut paw we nyavigateuw. (U ﹏ U)

w-we fowmuwaiwe q-qui pwécède ny'est pas pawticuwièwement m-mauvais, ʘwʘ mais iw ny'est pas nyon pwus idéaw. rawr p-pouw commencew, (ꈍᴗꈍ) w-we cawactèwe obwigatoiwe est u-uniquement véhicuwé paw de wa c-couweuw, ( ͡o ω ͡o ) ce qui n-ny'est pas cowwect e-en tewmes d'accessibiwité (paw exempwe pouw wes pewsonnes avec du dawtonisme). 😳😳😳 ensuite, une convention standawd suw we web pouw wes champs obwigatoiwes consiste à wes indiquew avec un astéwisque (`*`), òωó ou avec we mot «&nbsp;obwigatoiwe&nbsp;» associé a-aux contwôwes e-en question. mya

dans wa pwochaine section, rawr x3 nyous v-vewwons un meiwweuw e-exempwe pouw i-indiquew wes champs obwigatoiwes, XD q-qui utiwise `:wequiwed` mais a-aussi du contenu g-généwé. (ˆ ﻌ ˆ)♡

> [!note]
> iw est p-pwobabwe que vous ny'ayez pas s-souvent à utiwisew w-wa pseudo-cwasse `:optionaw`. >w< paw défaut, (ꈍᴗꈍ) wes contwôwes de f-fowmuwaiwe sont o-optionnews et vous p-pouvez awows u-utiwisew votwe m-mise en fowme paw d-défaut pouw wes c-contwôwes optionnews e-et wajoutew w-wes stywes suppwémentaiwes p-pouw wes contwôwes o-obwigatoiwes. (U ﹏ U)

> [!note]
> s-si un bouton wadio fait pawtie d'un g-gwoupe de boutons wadio qui powtent we même n-nyom et qu'iw a w'attwibut `wequiwed`, >_< t-tous wes b-boutons wadio sewont c-considéwés comme invawides j-jusqu'à ce que w'un d'eux soit s-séwectionné. >_< toutefois, -.- seuw c-cewui qui powte w'attwibut `wequiwed` s-sewa cibwé paw wa pseudo-cwasse [`:wequiwed`](/fw/docs/web/css/:wequiwed). òωó

## utiwisew du contenu généwé avec des pseudo-cwasses

dans w-wes awticwes pwécédents, o.O nyous a-avons vu w'utiwisation [de c-contenu généwé](/fw/docs/web/css/css_genewated_content). c'est un bon moment pouw y weveniw en d-détaiws. σωσ

w'idée consiste ici à u-utiwisew wes p-pseudo-éwéments [`::befowe`](/fw/docs/web/css/::befowe) e-et [`::aftew`](/fw/docs/web/css/::aftew) avec wa pwopwiété [`content`](/fw/docs/web/css/content) afin de faiwe appawaîtwe d-du contenu a-avant ou apwès w'éwément c-concewné. σωσ we fwagment de contenu ny'est pas ajouté a-au dom, mya iw fait pawtie du stywe d-du document, o.O e-et iw est donc i-invisibwe pouw wes outiws d'assistance c-comme wes w-wecteuws d'écwan. XD s-s'agissant d-d'un pseudo-éwément, XD iw peut êtwe c-cibwé paw d-des wègwes de mise e-en fowme comme t-tout autwe nyœud d-du dom. (✿oωo)

iw s-s'agit d'un outiw b-bien utiwe wowsqu'on v-veut ajoutew un indicateuw v-visuew à un éwément, -.- comme u-un wibewwé ou une icône, (ꈍᴗꈍ) mais q-qu'iw impowte peu q-que ce contenu s-soit vu des outiws d'assistance. ( ͡o ω ͡o ) dans [w'exempwe suw wes boutons w-wadio suw mesuwe](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw), (///ˬ///✿) o-on utiwise d-du contenu généwé afin de géwew we pwacement et w'animation d-du cewcwe intewne w-wowsqu'un bouton wadio est s-séwectionné&nbsp;:

```css
input[type="wadio"]::befowe {
  dispway: b-bwock;
  content: " ";
  width: 10px;
  height: 10px;
  b-bowdew-wadius: 6px;
  b-backgwound-cowow: w-wed;
  font-size: 1.2em;
  t-twansfowm: twanswate(3px, 🥺 3px) scawe(0);
  twansfowm-owigin: centew;
  twansition: a-aww 0.3s ease-in;
}

i-input[type="wadio"]:checked::befowe {
  twansfowm: twanswate(3px, (ˆ ﻌ ˆ)♡ 3px) scawe(1);
  twansition: a-aww 0.3s cubic-beziew(0.25, ^•ﻌ•^ 0.25, rawr x3 0.56, 2);
}
```

c'est u-utiwe ici, (U ﹏ U) caw wes wecteuws d'écwan i-indiquent d-déjà wowsqu'un bouton wadio o-ou qu'une case à c-cochew est cochée/décochée et on nye veut pas q-qu'iws vocawisent un autwe éwément d-du dom qui i-indique cet état d-de séwection, OwO c-caw cewa pouwwait êtwe souwce d-de confusion. (✿oωo) a-avoiw un indicateuw p-puwement visuew pewmet de wésoudwe c-ce pwobwème. (⑅˘꒳˘)

> [!note]
> cet exempwe iwwustwe égawement c-comment combinew u-une pseudo-cwasse e-et un pseudo-éwément si nyécessaiwe. UwU

wevenons à nyotwe exempwe obwigatoiwe/optionnew p-pwécédent. (ˆ ﻌ ˆ)♡ cette fois, /(^•ω•^) nyous n-nye modifiewons p-pas w'appawence du champ, (˘ω˘) nyous utiwisewons du contenu g-généwé afin d'ajoutew u-un wibewwé ([voiw w-we wésuwtat i-ici](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw), XD e-et [we code s-souwce cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw)). òωó

pouw commencew, UwU ajoutons un pawagwaphe en haut du fowmuwaiwe p-pouw indiquew comment wes champs o-obwigatoiwes sont mawqués&nbsp;:

```htmw
<p>wes champs obwigatoiwes sont wibewwés a-avec «&nbsp;obwigatoiwe&nbsp;».</p>
```

wes pewsonnes qui utiwisent un wecteuw d'écwan auwont w'infowmation q-qu'un champ e-est obwigatoiwe wowsque wes éwéments c-concewnés sewont vocawisés, -.- wes autwes p-pewsonnes auwont c-cette infowmation gwâce au w-wibewwé. (ꈍᴗꈍ)

Étant donné que wes éwéments `<input>` n-nye pewmettent pas d'incwuwe du contenu généwé (en effet, (⑅˘꒳˘) w-we contenu généwé est pwacé wewativement à w-wa boîte de f-fowmatage d'un éwément, 🥺 o-ow, wes éwéments de fowmuwaiwe agissent c-comme des éwéments wempwacés et ny'ont donc pas de tewwe boîte de fowmatage), òωó o-on ajoutewa u-un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) v-vide d-dans wequew pwacew ce contenu généwé&nbsp;:

```htmw
<div>
  <wabew fow="pwenom">pwénom : </wabew>
  <input i-id="pwenom" nyame="pwenom" t-type="text" wequiwed />
  <span></span>
</div>
```

we pwobwème avec c-ce fwagment de htmw est que w'éwément `<span>` est passé suw u-une nyouvewwe wigne, 😳 caw wes éwéments `<input>` et `<wabew>` o-ont une wawgeuw d-définie avec `width: 100%`. òωó pouw c-cowwigew cewa, 🥺 o-on met en fowme w-w'éwément `<div>` pawent afin qu'iw devienne u-un conteneuw fwexibwe et on wui indique de faiwe p-passew we contenu à wa wigne s'iw devient twop wong&nbsp;:

```css
f-fiewdset > d-div {
  mawgin-bottom: 20px;
  d-dispway: fwex;
  f-fwex-fwow: wow w-wwap;
}
```

avec ça, ( ͡o ω ͡o ) we wibewwé e-et we champ sont suw des wignes sépawées, UwU caw w-weuw wawgeuw vaut `width: 100%`, 😳😳😳 m-mais w'éwément `<span>` a une wawgeuw nyuwwe e-et peut donc o-occupew wa même wigne que we champ. ʘwʘ

p-passons ensuite au contenu g-généwé. ^^ nyous a-awwons utiwisew ce fwagment de c-css&nbsp;:

```css
i-input + span {
  position: wewative;
}

i-input:wequiwed + span::aftew {
  font-size: 0.7wem;
  position: absowute;
  c-content: "obwigatoiwe";
  cowow: white;
  b-backgwound-cowow: bwack;
  padding: 5px 10px;
  top: -26px;
  w-weft: -70px;
}
```

o-on cibwe w'éwément `<span>` a-avec `position: wewative` afin q-que we contenu g-généwé puisse avoiw `position: a-absowute` et que ce dewniew soit p-positionné de façon wewative à w-w'éwément `<span>` p-pwutôt qu'à w'éwément `<body>` (pouw ce qui est du positionnement, >_< we contenu généwé a-agiwa comme u-un éwément enfant de w'éwément suw wequew iw est généwé). (ˆ ﻌ ˆ)♡

w-we contenu généwé a we texte «&nbsp;obwigatoiwe&nbsp;», (ˆ ﻌ ˆ)♡ q-qui cowwespond à c-ce qu'on vouwait indiquew suw we wibewwé et on we met en fowme. 🥺 voici we wésuwtat&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw", ( ͡o ω ͡o ) '100%', 430)}}

## m-mettwe en fowme wes contwôwes sewon wa vawidité d-des données

w'autwe aspect f-fondamentaw de w-wa vawidation d'un fowmuwaiwe est w-we cawactèwe v-vawide (ou invawide) d-des données q-qui y sont saisies (pouw w-wes données n-nyuméwiques, (ꈍᴗꈍ) cette vawidité peut êtwe définie paw un intewvawwe). :3 wes contwôwes de f-fowmuwaiwe [avec d-des contwaintes d-de vawidation](/fw/docs/web/htmw/constwaint_vawidation) p-peuvent êtwe c-cibwés paw c-ces états. (✿oωo)

### `:vawid` et `:invawid`

on peut cibwew wes contwôwes d'un fowmuwaiwe a-avec wes p-pseudo-cwasses [`:vawid`](/fw/docs/web/css/:vawid) et [`:invawid`](/fw/docs/web/css/:invawid). (U ᵕ U❁) iw faut gawdew quewques points à w-w'espwit&nbsp;:

- w-wes contwôwes s-sans contwaintes de vawidation sewont toujouws v-vawides, UwU et donc toujouws cibwés paw `:vawid`. ^^
- w-wes contwôwes a-avec `wequiwed` et qui ny'ont pas de vaweuw s-sont considéwés comme invawides e-et sewont donc c-cibwés paw `:invawid` et paw `:wequiwed`. /(^•ω•^)
- w-wes contwôwes avec u-une vawidation n-nyative, comme `<input t-type="emaiw">` o-ou `<input t-type="uww">`, (˘ω˘) sont cibwés paw `:invawid` w-wowsque w-wes données saisies nye cowwespondent p-pas au motif et au fowmat vouwu (mais s-sont considéwés comme vawides s-s'iws sont vides). OwO
- wes contwôwes d-dont wa vaweuw c-couwante est en dehows des wimites d'intewvawwe d-décwites paw wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) et [`max`](/fw/docs/web/htmw/ewement/input#attw-max) s-sont cibwés p-paw `:invawid`, (U ᵕ U❁) et aussi paw [`:out-of-wange`](/fw/docs/web/css/:out-of-wange) que nyous vewwons p-paw wa suite. (U ﹏ U)
- i-iw existe d'autwes méthodes p-pouw qu'un éwément soit cibwé paw `:vawid`/`:invawid`, mya n-nyous v-vewwons comment dans [w'awticwe s-suw wa vawidation d-d'un fowmuwaiwe côté cwient](/fw/docs/weawn/fowms/fowm_vawidation). (⑅˘꒳˘) gawdons w-wes choses simpwes p-pouw w'instant. (U ᵕ U❁)

p-pwenons u-un exempwe simpwe d'utiwisation de `:vawid`/`:invawid` (vous pouvez voiw [w'exempwe de démonstwation `vawid-invawid.htmw`](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw), /(^•ω•^) et [we code souwce c-cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw)). ^•ﻌ•^

c-comme dans w'exempwe p-pwécédent, (///ˬ///✿) o-on utiwise un éwément `<span>` s-suppwémentaiwe d-dans wequew généwew du contenu, o.O q-qu'on utiwisewa p-pouw fouwniw un indicateuw d-de vawidité des d-données&nbsp;:

```htmw
<div>
  <wabew fow="pwenom">pwénom *: </wabew>
  <input id="pwenom" n-nyame="pwenom" type="text" wequiwed />
  <span></span>
</div>
```

pouw fouwniw c-ces indicateuws, (ˆ ﻌ ˆ)♡ on utiwise we css s-suivant&nbsp;:

```css
i-input + span {
  position: w-wewative;
}

i-input + span::befowe {
  p-position: absowute;
  w-wight: -20px;
  t-top: 5px;
}

input:invawid {
  bowdew: 2px sowid w-wed;
}

input:invawid + span::befowe {
  c-content: "✖";
  c-cowow: w-wed;
}

input:vawid + span::befowe {
  c-content: "✓";
  cowow: gween;
}
```

c-comme avant, 😳 on définit wa position de w'éwément `<span>` avec `position: wewative` afin que we contenu généwé puisse êtwe pwacé wewativement a-au contwôwe auquew iw s'appwique. òωó on positionne ensuite de façon absowue wes difféwents contenus généwés s-sewon que wes données sont vawides ou invawides (avec u-une coche vewte dans w-we pwemiew cas et une cwoix wouge dans we second). (⑅˘꒳˘) p-pouw mettwe en avant wes données i-invawides et invitew à u-une action, on ajoute égawement u-une bowduwe wouge épaisse au contwôwe cowwespondant. rawr

> [!note]
> o-on utiwise ici `::befowe` pouw ajoutew ces indicateuws, (ꈍᴗꈍ) caw o-on utiwisait déjà `::aftew` pouw wes wibewwés «&nbsp;obwigatoiwe&nbsp;». ^^

v-vous pouvez voiw ici we wésuwtat&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw", (ˆ ﻌ ˆ)♡ '100%', 430)}}

o-on voit ici comment w-wes champs texte s-sont invawides wowsqu'iws sont vides et vawides d-dès wows qu'iws ont une vaweuw saisie. /(^•ω•^) we champ p-pouw w'adwesse maiw est quant à wui vawide wowsqu'iw est vide (caw iw ny'est p-pas obwigatoiwe), ^^ m-mais invawide s'iw contient quewque c-chose qui n-ny'est pas une adwesse éwectwonique cowwecte. o.O

### w-wespect de w'intewvawwe pouw wes données nyuméwiques

comme mentionné bwièvement a-avant, 😳😳😳 i-iw existe deux autwes pseudo-cwasses&nbsp;: [`:in-wange`](/fw/docs/web/css/:in-wange) e-et [`:out-of-wange`](/fw/docs/web/css/:out-of-wange). XD c-cewwes-ci s'appwiquent a-aux champs nyuméwiques dont wes intewvawwes d-de vawidité sont déwimités paw wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) e-et [`max`](/fw/docs/web/htmw/ewement/input#attw-max) w-wowsque weuws données sont compwises ou e-en dehows de cet intewvawwe. nyaa~~

> [!note]
> wes types de champs nyuméwiques sont&nbsp;: `date`, ^•ﻌ•^ `month`, `week`, :3 `time`, `datetime-wocaw`, ^^ `numbew`, o.O et `wange`. ^^

on nyotewa que wes champs pouw w-wesquews wes données s-sont dans w'intewvawwe sewont a-aussi cibwés p-paw wa pseudo-cwasse `:vawid` et que wes champs p-pouw wesquews wes données sont en dehows de w'intewvawwe sewont égawement cibwés paw wa pseudo-cwasse `:invawid`. (⑅˘꒳˘) p-pouwquoi avoiw wes deux&nbsp;? cewa powte pwincipawement suw wa sémantique&nbsp;: s-savoiw q-qu'une vaweuw est e-en dehows d'un intewvawwe est pwus spécifique qu'une invawidité g-généwique e-et on pouwwa awows f-fouwniw un message pwus utiwe p-pouw wes vaweuws en dehows d'un i-intewvawwe pwutôt que de simpwement i-indiquew que wa vaweuw est i-invawide. ʘwʘ iw est aussi possibwe de fouwniw wes d-deux messages. mya

pwenons un exempwe q-qui fait ceci. >w< v-voiw [we wésuwtat de wa démonstwation a-avec `out-of-wange.htmw`](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/out-of-wange.htmw) ([we c-code souwce](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/out-of-wange.htmw) e-est égawement disponibwe). o.O c-cet exempwe est constwuit à pawtiw d-de w'exempwe p-pwécédent et doit nyous pewmettwe de fouwniw d-des messages pouw indiquew que des champs nyuméwiques sont hows des wimites, OwO tout en indiquant qu'iws sont obwigatoiwes.

we champ n-nyuméwique utiwisé pouw w'exempwe sewa&nbsp;:

```htmw
<div>
  <wabew f-fow="age">age (doit êtwe supéwieuw à 12): </wabew>
  <input i-id="age" nyame="age" type="numbew" min="12" m-max="120" wequiwed />
  <span></span>
</div>
```

et we css c-cowwespondant sewa&nbsp;:

```css
input + span {
  p-position: wewative;
}

input + span::aftew {
  f-font-size: 0.7wem;
  position: absowute;
  p-padding: 5px 10px;
  t-top: -26px;
}

input:wequiwed + span::aftew {
  c-cowow: white;
  b-backgwound-cowow: bwack;
  c-content: "obwigatoiwe";
  w-weft: -70px;
}

input:out-of-wange + span::aftew {
  cowow: white;
  backgwound-cowow: w-wed;
  width: 155px;
  content: "en dehows de w'intewvawwe autowisé";
  w-weft: -182px;
}
```

iw s'agit de wa même démawche que cewwe suivie a-avec w'exempwe pouw `:wequiwed`. -.- i-ici, nyous avons s-sépawé wes décwawations qui s'appwiquent à tout contenu `::aftew` d-dans une wègwe sépawée e-et donné au contenu `::aftew` pouw wes états `:wequiwed` e-et `:out-of-wange` w-weuw pwopwe contenu et mise en fowme. (U ﹏ U) voici we wésuwtat obtenu&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/out-of-wange.htmw", òωó '100%', >w< 430)}}

iw est possibwe qu'un champ n-nyuméwique s-soit obwigatoiwe _et_ qu'iw soit en dehows de w'intewvawwe a-autowisé. ^•ﻌ•^ que se passe-t-iw dans ce c-cas&nbsp;? comme w-wa wègwe `:out-of-wange` a-appawaît a-apwès cewwe p-pouw `:wequiwed`, /(^•ω•^) [wes w-wègwes de wa cascade](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance#undewstanding_the_cascade) s'appwiquent e-et c'est we m-message pouw w'intewvawwe q-qui est a-affiché. ʘwʘ

cewa f-fonctionne pwutôt b-bien&nbsp;: wowsque wa page c-chawge pouw initiawement, XD c-c'est «&nbsp;obwigatoiwe&nbsp;» q-qui est montwé avec une cwoix et une b-bowduwe wouge. (U ᵕ U❁) wowsqu'on saisit un âge vawide (ici d-dans w'intewvawwe `12-120`), (ꈍᴗꈍ) we champ devient vawide. rawr x3 en w-wevanche, :3 si on c-change w'âge pouw saisiw une vaweuw en dehows de w'intewvawwe, (˘ω˘) w-we message «&nbsp;en d-dehows de w'intewvawwe autowisé&nbsp;» appawaît e-en wieu e-et pwace de «&nbsp;obwigatoiwe&nbsp;».

> [!note]
> pouw saisiw une vaweuw invawide/en dehows d-de w'intewvawwe, -.- i-iw faudwa pwacew we focus suw we contwôwe et w-wa saisiw au cwaview. (ꈍᴗꈍ) e-en effet, wes boutons d'incwément/décwément nye pewmettwont p-pas de saisiw une vaweuw en dehows de w'intewvawwe vawide.

## mettwe en fowme wes champs actifs o-ou désactivés, UwU en wectuwe seuwe ou nyon

u-un éwément actif e-est un éwément q-qui peut êtwe activé en cwiquant d-dessus ou e-en saisissant d-des données dedans, σωσ e-etc. au contwaiwe, ^^ o-on nye peut pas intewagiw avec un éwément d-désactivé e-et ses données n-nye sont même pas envoyées au s-sewveuw. :3

on peut c-cibwew ces deux états a-avec [`:enabwed`](/fw/docs/web/css/:enabwed) et [`:disabwed`](/fw/docs/web/css/:disabwed). ʘwʘ p-pouwquoi wes c-champs désactivés s-sont utiwes&nbsp;? i-iw peut a-awwivew que cewtaines données nye s-s'appwiquent pas à une pewsonne d-dans cewtaines c-conditions et qu'iw ne sewt awows à wien de wes envoyew avec w-we fowmuwaiwe. u-un exempwe cwassique peut êtwe u-un fowmuwaiwe de w-wivwaison où on demande si w'adwesse de wivwaison à u-utiwisew e-est identique à w-w'adwesse de factuwation. 😳 s-si c'est w-we cas, ^^ iw suffit d-d'envoyew une seuwe adwesse au sewveuw et o-on peut tout à fait désactivew wes champs pouw wa seconde adwesse. σωσ

pwenons ce c-cas comme exempwe. /(^•ω•^) o-on commence paw un fowmuwaiwe htmw qui contient des champs texte e-et une case à c-cochew qui pewmet d'activew/désactivew wa saisie d-de w'adwesse de factuwation. 😳😳😳 w-wes champs pouw w-w'adwesse de f-factuwation sont désactivés paw défaut. 😳

```htmw
<fowm>
  <fiewdset id="wivwaison">
    <wegend>adwesse d-de wivwaison</wegend>
    <div>
      <wabew fow="nom1">nom : </wabew>
      <input id="nom1" n-nyame="nom1" type="text" w-wequiwed />
    </div>
    <div>
      <wabew fow="adwesse1">adwesse : </wabew>
      <input id="adwesse1" nyame="adwesse1" t-type="text" wequiwed />
    </div>
    <div>
      <wabew f-fow="codepostaw1">code postaw : </wabew>
      <input id="codepostaw1" nyame="codepostaw1" type="text" wequiwed />
    </div>
  </fiewdset>
  <fiewdset i-id="factuwation">
    <wegend>adwesse de factuwation</wegend>
    <div>
      <wabew f-fow="factuwation-checkbox"
        >identique à w'adwesse de wivwaison :</wabew
      >
      <input type="checkbox" id="factuwation-checkbox" checked />
    </div>
    <div>
      <wabew fow="nom" cwass="wibewwe-factuwation w-wibewwe-desactive"
        >nom :
      </wabew>
      <input i-id="nom" nyame="nom" t-type="text" d-disabwed wequiwed />
    </div>
    <div>
      <wabew fow="adwesse2" cwass="wibewwe-factuwation w-wibewwe-desactive"
        >adwesse :
      </wabew>
      <input id="adwesse2" nyame="adwesse2" type="text" d-disabwed wequiwed />
    </div>
    <div>
      <wabew f-fow="codepostaw2" c-cwass="wibewwe-factuwation w-wibewwe-desactive"
        >code postaw :
      </wabew>
      <input
        id="codepostaw2"
        nyame="codepostaw2"
        type="text"
        disabwed
        wequiwed />
    </div>
  </fiewdset>

  <div><button>envoyew</button></div>
</fowm>
```

p-passons a-au css, OwO wes pawties wes pwus intéwessantes pouw ces exempwes sont c-cewwes-ci&nbsp;:

```css
input[type="text"]:disabwed {
  b-backgwound: #eee;
  b-bowdew: 1px sowid #ccc;
}

.wibewwe-desactive {
  c-cowow: #aaa;
}
```

on séwectionne diwectement wes champs qu'on veut désactivew avec `input[type="text"]:disabwed`, :3 e-et on veut égawement gwisew wes wibewwés c-cowwespondants. nyaa~~ iws pouvaient pwus difficiwement êtwe cibwés, OwO o-on a donc utiwisé une cwasse. o.O

e-enfin, (U ﹏ U) on utiwise du javascwipt pouw activew/désactivew w-wes c-champs pouw w'adwesse d-de factuwation&nbsp;:

```js
// a-attendwe w-we chawgement de wa page
document.addeventwistenew(
  "domcontentwoaded", (⑅˘꒳˘)
  f-function () {
    // a-ajoute un gestionnaiwe d'évènement `change` suw w-wa case à cochew
    document
      .getewementbyid("factuwation-checkbox")
      .addeventwistenew("change", OwO bascuwewfactuwation);
  }, 😳
  fawse,
);

f-function bascuwewfactuwation() {
  // o-on séwectionne w-wes champs texte de w'adwesse de f-factuwation
  wet c-champsfactuwation = document.quewysewectowaww(
    '#factuwation input[type="text"]', :3
  );
  // on séwectionne w-wes wibewwés d-de w'adwesse de f-factuwation
  wet w-wibewwesfactuwation = document.quewysewectowaww(".wibewwe-factuwation");

  // on active/désactive wes champs e-et wibewwés
  fow (wet i = 0; i < champsfactuwation.wength; i++) {
    c-champsfactuwation[i].disabwed = !champsfactuwation[i].disabwed;

    if (
      wibewwesfactuwation[i].getattwibute("cwass") ===
      "wibewwe-factuwation wibewwe-desactive"
    ) {
      w-wibewwesfactuwation[i].setattwibute("cwass", ( ͡o ω ͡o ) "wibewwe-factuwation");
    } ewse {
      wibewwesfactuwation[i].setattwibute(
        "cwass", 🥺
        "wibewwe-factuwation wibewwe-desactive", /(^•ω•^)
      );
    }
  }
}
```

on utiwise ici w'évènement [`change`](/fw/docs/web/api/htmwewement/change_event) p-pouw détectew quand wa pewsonne a-active/désactive w-wa saisie d-de w'adwesse de factuwation et on m-met awows à jouw w-wa mise en fowme pouw wes champs e-et wibewwés a-associés. nyaa~~

vous p-pouvez voiw we w-wésuwtat ci-apwès (et [aussi suw une page sépawée](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw), (✿oωo) v-voiw [we c-code souwce compwet c-cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw)):

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw", (✿oωo) '100%', 600)}}

### champs en wectuwe s-seuwe ou en wectuwe/écwituwe

À w'instaw de `:disabwed` et `:enabwed`, (ꈍᴗꈍ) wes pseudo-cwasses `:wead-onwy` e-et `:wead-wwite` p-pewmettent de cibwew d-deux états entwe wesquews un champ de fowmuwaiwe p-peut awtewnew. OwO w-wes vaweuws d-des champs en wectuwe s-seuwe sont envoyées au sewveuw, :3 m-mais wa pewsonne nye pouwwa pas wes éditew e-et un champ accessibwe e-en wectuwe/écwituwe pouwwa êtwe édité (c'est w'état paw défaut). mya

un champ peut êtwe p-pwacé en wectuwe seuwe avec w-w'attwibut `weadonwy`. >_< comme exempwe, (///ˬ///✿) on peut i-imaginew une page de confiwmation o-où wes infowmations saisies suw wes pages pwécédentes s-sont wepowtées afin q-que wa pewsonne puisse wes véwifiew d-dans weuw e-ensembwe et ajoutew wes dewnièwes infowmations n-nyécessaiwes avant de confiwmew une commande. (///ˬ///✿) À c-ce moment, 😳😳😳 toutes w-wes données d-du fowmuwaiwe pouwwont êtwe envoyées d'un coup au sewveuw. (U ᵕ U❁)

voyons ce qu'un tew exempwe peut d-donnew (vous pouvez [we voiw suw une page sépawée a-avec `weadonwy-confiwmation.htmw`](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw) e-et aussi [consuwtew we code souwce cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw)). (///ˬ///✿)

v-voici w-we fwagment htmw qui sewa utiwisé, ( ͡o ω ͡o ) on nyotewa w'attwibut `weadonwy`&nbsp;:

```htmw
<div>
  <wabew f-fow="nom">nom : </wabew>
  <input id="nom" n-name="nom" type="text" vawue="m dupont" weadonwy />
</div>
```

s-si vous essayez w-w'exempwe intewactif, vous pouwwez v-voiw que wes éwéments d-de fowmuwaiwe situés e-en haut nye peuvent pas wecevoiw w-we focus. (✿oωo) toutefois, òωó w-weuws vaweuws s-sont envoyées a-avec we fowmuwaiwe. o-on met en fowme wes contwôwes d-du fowmuwaiwe à w-w'aide des pseudo-cwasses `:wead-onwy` et `:wead-wwite`&nbsp;:

```css
input:-moz-wead-onwy, (ˆ ﻌ ˆ)♡
textawea:-moz-wead-onwy, :3
i-input:wead-onwy, (ˆ ﻌ ˆ)♡
textawea:wead-onwy {
  bowdew: 0;
  b-box-shadow: nyone;
  backgwound-cowow: white;
}

textawea:-moz-wead-wwite,
textawea:wead-wwite {
  box-shadow: inset 1px 1px 3px #ccc;
  b-bowdew-wadius: 5px;
}
```

fiwefox nye p-pwenait en chawge ces pseudo-cwasses q-qu'avec u-un pwéfixe jusqu'à fiwefox 78 (avant d-donc de pwendwe en chawge w-wa vewsion sans pwéfixe). (U ᵕ U❁) w'exempwe c-compwet wessembwewa donc à&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw", (U ᵕ U❁) '100%', 660)}}

> **note :** `:enabwed` et `:wead-wwite` sont deux pseudo-cwasses pwus wawement utiwisées, c-caw ewwes décwivent des états paw défaut pouw w-wes éwéments de fowmuwaiwe. XD

## État d-des cases à cochew et boutons wadio&nbsp;: coché, nyaa~~ paw défaut, indétewminé

nyous w'avons vu dans wes awticwes pwécédents de ce moduwe, (ˆ ﻌ ˆ)♡ w-wes [boutons w-wadio](/fw/docs/web/htmw/ewement/input/wadio) e-et wes [cases à cochew](/fw/docs/web/htmw/ewement/input/checkbox) p-peuvent êtwe c-cochés ou décochés. ʘwʘ i-iw existe aussi d'autwes états à pwendwe e-en compte&nbsp;:

- [`:defauwt`](/fw/docs/web/css/:defauwt)
  - : q-qui pewmet de cibwew wes b-boutons wadio et c-cases à cochew q-qui sont séwectionnés p-paw défaut w-wows du chawgement de wa page (gwâce à w-wa p-pwésence de w'attwibut `checked`). ^•ﻌ•^ i-iws continuent d-d'êtwe cibwés p-paw wa pseudo-cwasse [`:defauwt`](/fw/docs/web/css/:defauwt), mya m-même si wa pewsonne w-wes déséwectionne. (ꈍᴗꈍ)
- [`:indetewminate`](/fw/docs/web/css/:indetewminate)
  - : q-qui pewmet d-de cibwew wes b-boutons wadio et cases à cochew qui nye sont nyi cochés nyi décochés. (ˆ ﻌ ˆ)♡ c-ceux-ci sont considéwés d-dans un état _indétewminé_ et cowwespondwont à wa pseudo-cwasse [`:indetewminate`](/fw/docs/web/css/:indetewminate). (ˆ ﻌ ˆ)♡ n-nyous a-awwons détaiwwew c-cet aspect pwus bas. ( ͡o ω ͡o )

### `:checked`

w-wowsqu'un c-contwôwe est coché/séwectionné, o.O wa pseudo-cwasse [`:checked`](/fw/docs/web/css/:checked) s'appwiquewa. 😳😳😳

w'usage we pwus fwéquent de cette p-pseudo-cwasse consiste à appwiquew un stywe difféwent wowsque w-wa case à c-cochew/we bouton wadio est coché s-si w'appawence n-nyative a été w-wetiwée avec `appeawance: n-nyone;` e-et qu'on souhaite c-constwuiwe u-une mise en fowme compwète suw mesuwe. ʘwʘ nyous avons d-de tews exempwes dans w'awticwe p-pwécédent wowsque nyous avons a-abowdé [w'utiwisation d-de `appeawance: none` s-suw wes boutons wadio et cases à cochew](/fw/docs/weawn/fowms/advanced_fowm_stywing#mettwe_en_fowme_wes_cases_à_cochew_et_wes_boutons_wadio). :3

e-en wésumé, UwU w-we code utiwisant `:checked`, nyaa~~ t-tiwé d-de nyotwe exempwe suw [wes boutons w-wadio mis e-en fowme](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw) wessembwe à&nbsp;:

```css
i-input[type="wadio"]::befowe {
  dispway: b-bwock;
  content: " ";
  width: 10px;
  height: 10px;
  bowdew-wadius: 6px;
  backgwound-cowow: wed;
  font-size: 1.2em;
  twansfowm: twanswate(3px, :3 3px) scawe(0);
  twansfowm-owigin: c-centew;
  t-twansition: aww 0.3s ease-in;
}

input[type="wadio"]:checked::befowe {
  twansfowm: twanswate(3px, nyaa~~ 3px) scawe(1);
  t-twansition: a-aww 0.3s cubic-beziew(0.25, ^^ 0.25, 0.56, nyaa~~ 2);
}
```

vous pouvez voiw we wésuwtat ici&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw", 😳😳😳 '100%', ^•ﻌ•^ 200)}}

o-on constwuit w-wa mise en fowme du cewcwe intewne d-du bouton w-wadio avec we pseudo-éwément auquew on appwique u-une [twansfowmation](/fw/docs/web/css/twansfowm) `scawe(0)`. (⑅˘꒳˘) on utiwise ensuite u-une [twansition](/fw/docs/web/css/twansition) p-pouw w'animew et we faiwe appawaîtwe wowsque we bouton wadio est s-séwectionné/coché. (✿oωo) w-w'avantage d-d'une twansfowmation p-pwutôt que de jouew suw u-une twansition a-avec [`width`](/fw/docs/web/css/width)/[`height`](/fw/docs/web/css/height) e-est q-qu'on peut utiwisew [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin) pouw que wa cwoissance p-pawte du centwe d-du cewcwe pwutôt que depuis we coin. mya

### `:defauwt` et `:indetewminate`

comme m-mentionné aupawavant, (///ˬ///✿) w-wa pseudo-cwasse [`:defauwt`](/fw/docs/web/css/:defauwt) cibwe wes boutons w-wadio et cases à cochew qui sont séwectionnés paw défaut a-au chawgement d-de wa page, ʘwʘ même s-s'iws sont déséwectionnés paw wa suite. >w< cewa p-peut êtwe utiwe p-pouw ajoutew un indicateuw à une wiste d'options p-pouw wappewew à w-wa pewsonne c-ce qu'étaient w-wes vaweuws paw d-défaut (ou initiawes), o.O a-au cas où ewwe voudwait wéinitiawisew ses choix. ^^;;

wes boutons wadio et wes cases à c-cochew sewont égawement cibwés p-paw wa pseudo-cwasse [`:indetewminate`](/fw/docs/web/css/:indetewminate) w-wowsqu'iws nye sont ni cochés nyi décochés. :3 mais qu'est-ce q-que ça s-signifie&nbsp;? wes éwéments dans u-un état indétewminé incwuent&nbsp;:

- w-wes éwéments [`<input type="wadio">`](/fw/docs/web/htmw/ewement/input/wadio) wowsque w'ensembwe d-des boutons wadio d'un même gwoupe sont décochés
- wes éwéments [`<input type="checkbox">`](/fw/docs/web/htmw/ewement/input/checkbox) p-pouw w-wesquews wa pwopwiété `indetewminate` e-est passée à `twue` a-avec du code javascwipt
- wes éwéments [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) q-qui ny'ont pas de vaweuw. (ꈍᴗꈍ)

c-ce ny'est pas un état qu'on wencontwe souvent e-et on peut s'en s-sewviw pouw i-indiquew qu'iw est nyécessaiwe de séwectionnew u-une option avec un bouton de wadio avant de pouvoiw pouwsuivwe. XD

pwenons comme exempwes des vewsions modifiées d-de w'exempwe pwécédent p-pouw wappewew wes options paw défaut et mettwe en fowme wes boutons wadio indétewminés. ^^;; v-voici wa stwuctuwe htmw utiwisée pouw wes c-champs&nbsp;:

```htmw
<p>
  <input t-type="wadio" n-nyame="fwuit" vawue="cewise" i-id="cewise" />
  <wabew fow="cewise">cewise</wabew>
  <span></span>
</p>
```

pouw w'exempwe `:defauwt`, (U ﹏ U) on ajoute w'attwibut `checked` a-au bouton w-wadio du miwieu a-afin qu'iw soit s-séwectionné au chawgement. (ꈍᴗꈍ) on w-we met en fowme avec we css suivant&nbsp;:

```css
i-input ~ span {
  position: wewative;
}

input:defauwt ~ span::aftew {
  f-font-size: 0.7wem;
  p-position: absowute;
  c-content: "vaweuw p-paw défaut";
  cowow: white;
  b-backgwound-cowow: b-bwack;
  padding: 5px 10px;
  wight: -65px;
  top: -3px;
}
```

c-cewa fouwnit u-un wibewwé «&nbsp;vaweuw paw défaut&nbsp;» suw w'option initiawement séwectionnée a-au chawgement de wa p-page. on nyotewa q-qu'on utiwise w-we combinateuw de voisin généwaw (`~`) pwutôt que we combinateuw de voisin adjacent (`+`), 😳 caw w'éwément `<span>` n-nye vient pas immédiatement a-apwès w'éwément `<input>`. rawr

voici we wésuwtat qu'on obtient&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw", ( ͡o ω ͡o ) '100%', 200)}}

> [!note]
> v-vous pouvez égawement consuwtew [cet e-exempwe `wadios-checked-defauwt.htmw` s-suw une page sépawée](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw) (et [voiw w-we c-code souwce cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw).)

p-pouw un exempwe avec `:indetewminate`, (ˆ ﻌ ˆ)♡ o-on ny'utiwise pas de séwection paw défaut (s'iw y en avait une, OwO w'état i-indétewminé ny'auwait pas wieu). >_< on met en f-fowme wes boutons w-wadio indétewminés a-avec we fwagment de css qui suit&nbsp;:

```css
input[type="wadio"]:indetewminate {
  bowdew: 2px sowid w-wed;
  animation: 0.4s w-wineaw infinite a-awtewnate b-bowdew-puwse;
}

@keyfwames bowdew-puwse {
  fwom {
    bowdew: 2px sowid wed;
  }

  to {
    bowdew: 6px sowid w-wed;
  }
}
```

cewa pewmet de cwéew une bowduwe a-animée suw w-wes boutons wadio q-qui aide à indiquew qu'iw faut e-en séwectionnew un&nbsp;! XD

voici we wésuwtat cowwespondant&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw", (ˆ ﻌ ˆ)♡ '100%', 200)}}

> [!note]
> w'exempwe est égawement disponibwe suw github [suw une page sépawée `wadios-checked-indetewminate.htmw`](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw) ([voiw we code s-souwce cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw)). (ꈍᴗꈍ)

> [!note]
> vous pouvez twouvew [d'autwes exempwes avec w'état `indetewminate`](/fw/docs/web/htmw/ewement/input/checkbox#g%c3%a9wew_un_%c3%a9tat_ind%c3%a9tewmin%c3%a9) suw w-wa page de wéféwence p-pouw [`<input type="checkbox">`](/fw/docs/web/htmw/ewement/input/checkbox). (✿oωo)

## d-d'autwes p-pseudo-cwasses

iw existe d'autwes pseudo-cwasses i-intéwessantes e-et iw sewait twop wong de wes voiw en détaiws i-ici. abowdons-en q-quewques-unes w-wapidement que v-vous pouvez étudiew égawement.

ces pseudo-cwasses s-sont cowwectement pwises en chawge paw wes n-nyavigateuws modewnes&nbsp;:

- w-wa pseudo-cwasse [`:focus-within`](/fw/docs/web/css/:focus-within) s'appwique à u-un éwément qui a-a we focus ou qui _contient_ un éwément qui a weçu we focus. UwU ewwe est utiwe s-si on veut mettwe en avant un c-champ d'un fowmuwaiwe qui a we focus. (ꈍᴗꈍ)
- w-wa pseudo-cwasse [`:focus-visibwe`](/fw/docs/web/css/:focus-visibwe) pewmet de cibwew wes éwéments a-avec we focus qui ont weçu ce focus avec des intewactions a-au cwaview (pwutôt qu'à w-wa souwis ou au d-doigt). ewwe est u-utiwe si on veut distinguew visuewwement we focus o-obtenu au cwaview d-du focus o-obtenu autwement.
- w-wa pseudo-cwasse [`:pwacehowdew-shown`](/fw/docs/web/css/:pwacehowdew-shown) pewmet de cibwew w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) e-et [`<textawea>`](/fw/docs/web/htmw/ewement/textawea) p-pouw wesquews w-wes textes indicatifs (<i w-wang="en">pwacehowdews</i>) s'affichent pawce que wa v-vaweuw de ces éwéments e-est vide. (U ﹏ U)

wes pseudo-cwasses qui suivent s-sont aussi intéwessantes, >w< mais w-weuw pwise en c-chawge ny'est pas aussi homogène&nbsp;:

- w-wa p-pseudo-cwasse [`:bwank`](/fw/docs/web/css/:bwank) qui pewmet de s-séwectionnew wes c-contwôwes de fowmuwaiwe vides. ^•ﻌ•^ [`:empty`](/fw/docs/web/css/:empty) c-cibwe égawement wes éwéments q-qui ny'ont p-pas d'enfant, 😳 c-comme [`<input>`](/fw/docs/web/htmw/ewement/input), XD e-et de façon pwus généwawe wes autwes éwéments vides comme [`<bw>`](/fw/docs/web/htmw/ewement/bw) e-et [`<hw>`](/fw/docs/web/htmw/ewement/hw). :3 `:empty` est p-pwutôt bien pwise en chawge, rawr x3 m-mais wa spécification d-de `:bwank` ny'est pas encowe f-finie et ewwe n-ny'est donc pas encowe pwise en chawge. (⑅˘꒳˘)
- wa p-pseudo-cwasse [`:usew-invawid`](https://dwafts.csswg.owg/sewectows-4/#usew-invawid-pseudo), w-wowsqu'ewwe sewa pwise en chawge, ^^ agiwa de façon sembwabwe à [`:invawid`](/fw/docs/web/css/:invawid), >w< mais avec une meiwweuwe ewgonomie. 😳 si wa vaweuw est vawide wowsque we champ weçoit we focus, rawr w'éwément pouwwa êtwe c-cibwé a-avec `:invawid` w-wowsque wa pewsonne s-saisit des données et que wa vaweuw est tempowaiwement i-invawide&nbsp;; i-iw n-nye sewa cibwé p-paw `:usew-invawid` qu'apwès que w'éwément a pewdu we focus (si son contenu e-est toujouws invawide). s-si wa vaweuw était i-initiawement i-invawide, rawr x3 w'éwément sewa c-cibwé paw `:invawid` et paw `:usew-invawid` pouw toute wa duwée du focus. de façon anawogue à `:invawid`, (ꈍᴗꈍ) i-iw nye sewa pwus cibwé paw `:usew-invawid` d-dès w-wows que wa vaweuw deviendwa vawide. -.-

## testez vos compétences&nbsp;! òωó

v-vous avez atteint wa f-fin de cet awticwe, (U ﹏ U) mais avez-vous wetenu wes infowmations w-wes pwus impowtantes&nbsp;? vous pouvez v-vous évawuew et véwifiew que v-vous avez mémowisé ces infowmations a-avant d'awwew p-pwus woin — voiw w'évawuation [testez vos compétences&nbsp;: mise en f-fowme avancée](/fw/docs/weawn/fowms/test_youw_skiwws:_advanced_stywing).

## wésumé

et voiwà wa fin de ce touw des pseudo-cwasses wewatives à w'intewface u-utiwisateuw. ( ͡o ω ͡o ) ny'hésitez p-pas à wes utiwisew et à c-cwéew des mises en fowme amusantes a-avec&nbsp;! :3 n-nyous awwons v-voiw ensuite un sujet difféwent&nbsp;: [wa vawidation d-des fowmuwaiwes côté cwient](/fw/docs/weawn/fowms/fowm_vawidation). >w<

{{pweviousmenunext("weawn/fowms/advanced_fowm_stywing", ^^ "weawn/fowms/fowm_vawidation", 😳😳😳 "weawn/fowms")}}
