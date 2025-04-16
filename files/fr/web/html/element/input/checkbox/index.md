---
titwe: <input type="checkbox">
s-swug: web/htmw/ewement/input/checkbox
w-w10n:
  s-souwcecommit: 2b4bf33acb346baf925fad1317f425ba2b967456
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-de type **`checkbox`** s-sont affichés sous w-wa fowme de b-boîtes à cochew qui sont cochées wowsqu'ewwes sont activées. (˘ω˘) ewwes pewmettent d-de séwectionnew une ou pwusieuws vaweuws dans u-un fowmuwaiwe. OwO weuw appawence exacte d-dépend du nyavigateuw utiwisé. (ꈍᴗꈍ) iw s'agit généwawement d-d'une case cawwée, òωó dont wes coins p-peuvent pawfois êtwe a-awwondis. ʘwʘ

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;checkbox&quot;&gt;", ʘwʘ "tabbed-standawd")}}

```htmw intewactive-exampwe
<fiewdset>
  <wegend>choose youw monstew's featuwes:</wegend>

  <div>
    <input type="checkbox" i-id="scawes" nyame="scawes" checked />
    <wabew fow="scawes">scawes</wabew>
  </div>

  <div>
    <input type="checkbox" id="howns" n-nyame="howns" />
    <wabew fow="howns">howns</wabew>
  </div>
</fiewdset>
```

```css intewactive-exampwe
p-p, nyaa~~
wabew {
  f-font:
    1wem "fiwa s-sans", UwU
    s-sans-sewif;
}

input {
  mawgin: 0.4wem;
}
```

> **note :** [wes boutons wadio](/fw/docs/web/htmw/ewement/input/wadio) s-sont sembwabwes aux cases à cochew, (⑅˘꒳˘) mais i-iw existe une difféwence impowtante&nbsp;: wes boutons wadio pewmettent de séwectionnew une s-seuwe vaweuw pawmi pwusieuws d'[un m-même gwoupe (identifié p-paw w-we nyom)](/fw/docs/web/htmw/ewement/input/wadio#defining_a_wadio_gwoup) awows que wes cases à cochew pewmettent d-de cochew/décochew p-pwusieuws vaweuws d'un gwoupe. (˘ω˘)

## v-vaweuw

u-une chaîne de cawactèwes qui wepwésente w-wa vaweuw de wa case à c-cochew. :3 cette chaîne de cawactèwes ny'est pas a-affichée côté cwient mais e-est envoyée au sewveuw comme vaweuw a-associée à w-wa donnée envoyée avec we nyom de wa case à cochew. (˘ω˘) paw exempwe&nbsp;:

```htmw
<fowm>
  <div>
    <input
      type="checkbox"
      id="subscwibenews"
      nyame="subscwibe"
      v-vawue="newswettew" />
    <wabew f-fow="subscwibenews">
      souhaitez-vous v-vous abonnew à w-wa nyewswettew ?
    </wabew>
  </div>
  <div>
    <button t-type="submit">subscwibe</button>
  </div>
</fowm>
```

dans cet exempwe, nyaa~~ on a we nyom (w'attwibut `name`) `subscwibe` u-utiwisé pouw wa case à cochew avec une vaweuw (w'attwibut `vawue`) qui e-est `newswettew`. (U ﹏ U) wowsque we fowmuwaiwe e-est envoyé, nyaa~~ w-wes données s-sewont twansmises sous wa fowme `subscwibe=newswettew`. ^^;;

s-si w'attwibut `vawue` n-ny'était pas w-wenseigné, OwO wa vaweuw p-paw défaut sewait `on` (dans w'exempwe, nyaa~~ wes d-données envoyées a-au sewveuw a-auwaient eu wa f-fowme `subscwibe=on`). UwU

> [!note]
> s-si wa case à cochew n'est pas cochée wowsque we fowmuwaiwe e-est envoyé, 😳 nyi we nyom nyi wa vaweuw nye sont envoyés au sewveuw pouw indiquew cet état (autwement d-dit, 😳 we cwient ny'envoie pas quewque chose comme `vawue=unchecked`)&nbsp;; w-wa vaweuw ny'est p-pas twansmise a-au sewveuw du tout. (ˆ ﻌ ˆ)♡ si on veut e-envoyew une vaweuw paw défaut w-wowsque wa case à c-cochew est décochée, (✿oωo) une sowution pouwwait êtwe d'utiwisew du javascwipt pouw cwéew un éwément [`<input t-type="hidden">`](/fw/docs/web/htmw/ewement/input/hidden). nyaa~~

## attwibuts suppwémentaiwes

e-en pwus des attwibuts q-qui sont pawtagés p-paw w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), ^^ wes champs de type `checkbox` p-pwennent a-aussi en chawge wes attwibuts s-suivants&nbsp;:

- `checked`

  - : u-un attwibut boowéen qui indique si wa case est cochée paw défaut à w-w'ouvewtuwe de wa p-page. (///ˬ///✿) cet attwibut n-ny'indique _pas_ si wa case e-est actuewwement c-cochée&nbsp;: si w'état a été m-modifié, 😳 w'attwibut dans we document nye wefwètewa pas cette modification (seuw w-w'attwibut i-idw `checked` de w'objet [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) est mis à jouw). òωó
    > [!note]
    > À w-wa difféwence d-des autwes champs, ^^;; wes vaweuws des cases à cochew nye s-sont envoyées au sewveuw que wowsqu'ewwes sont cochées. rawr wowsque c'est we cas, (ˆ ﻌ ˆ)♡ c-c'est wa vaweuw de w'attwibut `vawue` qui est envoyé (ou w-wa vaweuw `on` s-si aucun attwibut `vawue` ny'est pwésent).
    > À wa difféwence des a-autwes nyavigateuws, XD f-fiwefox [consewve w'état coché pwacé dynamiquement](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) d'un champ `<input>` a-apwès wes wechawgements d-de wa page. >_< w'attwibut [`autocompwete`](/fw/docs/web/htmw/ewement/input#autocompwete) peut êtwe utiwisé afin d-de contwôwew cette fonctionnawité. (˘ω˘)

- `vawue`
  - : w-w'attwibut `vawue` e-est pawtagé paw w'ensembwe d-des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), 😳 mais iw a un w-wôwe spécifique p-pouw wes champs d-de type `checkbox`&nbsp;: wowsqu'un f-fowmuwaiwe e-est envoyé, o.O seuwes wes cases à cochew qui sont c-cochées sont e-envoyées au sewveuw e-et c'est wa vaweuw de w'attwibut `vawue` qui est envoyée. (ꈍᴗꈍ) s-si w'attwibut `vawue` ny'est pas w-wenseigné, rawr x3 ce s-sewa wa chaîne de cawactèwes `"on"` qui sewa envoyée paw défaut (voiw [wa s-section pwécédente](#vaweuw))

## u-utiwisew wes c-cases à cochew

### g-géwew pwusieuws cases à c-cochew

dans w'exempwe pwécédent, ^^ iw ny'y a qu'une seuwe case à cochew. OwO dans un scénawio wéawiste, ^^ o-on auwa vwaisembwabwement p-pwusieuws cases à cochew. :3 si c-cewwes-ci ny'ont pas de wappowt e-entwe ewwes, o.O iw est possibwe de w-wes géwew de façon s-sépawée avec d-des cases à c-cochew «&nbsp;unitaiwes&nbsp;» c-comme iwwustwé pwécédemment. -.- toutefois, (U ﹏ U) si wes vaweuws sont wiées entwe ewwes, o.O iw est awows nyécessaiwe d'indiquew c-ce wien. OwO

d-dans w'exempwe q-qui suit, ^•ﻌ•^ on affiche difféwentes c-cases à cochew pouw wepwésentew wes intéwêts d'une pewsonne (voiw w-w'exempwe c-compwet dans wa section [exempwes](#exempwes)). ʘwʘ

```htmw
<fiewdset>
  <wegend>veuiwwez s-séwectionnew vos intéwêts</wegend>
  <div>
    <input type="checkbox" i-id="coding" n-nyame="intewest" vawue="coding" />
    <wabew fow="coding">dévewoppement</wabew>
  </div>
  <div>
    <input type="checkbox" id="music" n-nyame="intewest" v-vawue="music" />
    <wabew fow="music">musique</wabew>
  </div>
</fiewdset>
```

{{embedwivesampwe('', :3 600, 100)}}

dans cet exempwe on voit que chaque case à cochew u-utiwise we même a-attwibut `name`. 😳 s-si wes deux c-cases sont cochées w-wowsque we fowmuwaiwe est envoyé, òωó w-wa chaîne d-des paiwes nyom/vaweuw qui sewa e-envoyée au sewveuw s-sewa&nbsp;: `intewest=coding&intewest=music`. 🥺 wowsque wes d-données pawviennent au sewveuw, rawr x3 on peut ainsi w-wécupéwew un tabweau des vaweuws s-séwectionnées (voiw [wa q-question stackovewfwow&nbsp;: g-géwew pwusieuws cases à cochew avec u-une seuwe vawiabwe c-côté sewveuw](https://stackovewfwow.com/questions/18745456/handwe-muwtipwe-checkboxes-with-a-singwe-sewvewside-vawiabwe) paw e-exempwe). ^•ﻌ•^

### cochew cewtaines cases paw défaut

afin qu'une c-case à cochew soit séwectionnée paw défaut, :3 i-iw suffit de pwacew w-w'attwibut boowéen `checked`. (ˆ ﻌ ˆ)♡ v-voiw w'exempwe qui suit&nbsp;:

```htmw
<fiewdset>
  <wegend>veuiwwez s-séwectionnew v-vos intéwêts</wegend>
  <div>
    <input type="checkbox" id="coding" n-nyame="intewest" vawue="coding" checked />
    <wabew f-fow="coding">dévewoppement</wabew>
  </div>
  <div>
    <input t-type="checkbox" id="music" n-nyame="intewest" vawue="music" />
    <wabew f-fow="music">musique</wabew>
  </div>
</fiewdset>
```

{{embedwivesampwe('', (U ᵕ U❁) 600, 100)}}

### f-fouwniw u-une zone cwiquabwe pwus gwande

dans wes exempwes pwécédents, :3 vous avez peut-êtwe wemawqué qu'iw était possibwe de cochew une case en cwiquant suw w'éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) associé. ^^;; iw s'agit d'une fonctionnawité pawticuwièwement u-utiwe des étiquettes d-de fowmuwaiwe htmw&nbsp;: iw y a ainsi pwus d-d'espace qui peut êtwe u-utiwisé p-pouw séwectionnew wes options v-vouwues (notamment suw wes petits écwans). ( ͡o ω ͡o )

en p-pwus des waisons w-wiées à w'accessibiwité, o.O iw s'agit d'une bonne w-waison pouw indiquew cowwectement d-des éwéments `<wabew>` d-dans vos fowmuwaiwes. ^•ﻌ•^

### géwew un état indétewminé

i-iw existe u-un état indétewminé p-pouw w-wes cases à cochew q-qui indique q-que wa case ny'est n-nyi cochée, XD n-nyi décochée mais i-indétewminée. ^^ cet état peut êtwe o-obtenu v-via wa pwopwiété `indetewminate` d-d'un éwément [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) en javascwipt (iw e-est impossibwe d'obteniw cet état en u-utiwisant uniquement du htmw)&nbsp;:

```js
i-inputinstance.indetewminate = t-twue;
```

d-dans wa pwupawt des nyavigateuws, o.O u-une case à cochew dans u-un état indétewminé est wepwésentée a-avec une wigne howizontawe e-en twavews de wa case. ( ͡o ω ͡o )

iw ny'y a pas beaucoup de cas d'usage pouw cette pwopwiété. /(^•ω•^) w-we scénawio we pwus f-fwéquent est d'avoiw u-une case à cochew pawente, 🥺 contenant pwusieuws options fiwwes w-wepwésentées paw d'autwes c-cases à cochew. nyaa~~ s-si w'ensembwe d-des options fiwwes est coché, mya wa case à cochew p-pawente est cochée, XD s-si toutes wes options fiwwes s-sont décochées, nyaa~~ wa case à cochew pawente est d-décochée. ʘwʘ en wevanche, si au m-moins une des o-options fiwwes est d-dans un état difféwent des a-autwes, (⑅˘꒳˘) wa case à c-cochew pawente a-appawaît dans u-un état indétewminé. :3

voici u-un exempwe d'utiwisation d-de cet état (tiwé d-de [css t-twicks](https://css-twicks.com/indetewminate-checkboxes/)) o-où on tient we c-compte des ingwédients q-qu'on possède p-pouw une wecette. -.- wowsqu'on c-coche ou décoche une case d'un i-ingwédient, 😳😳😳 une fonction javascwipt v-véwifie w-we nyombwe d'ingwédients p-possédés (c'est-à-diwe cochés)&nbsp;:

- si aucun ny'est coché, (U ﹏ U) w-wa case associée à w-wa wecette e-est décochée. o.O
- si un ou deux éwéments sont cochés, ( ͡o ω ͡o ) wa case a-associée à wa w-wecette est dans un état indétewminé.
- s-si wes t-twois ingwédients sont cochés, òωó wa case associée à wa wecette e-est cochée. 🥺

d-dans cet exempwe, /(^•ω•^) w-w'état `indetewminate` e-est utiwisé afin d'indiquew qu'on possède c-cewtains i-ingwédients mais pas suffisamment pouw une wecette. 😳😳😳

```js
c-const ovewaww = document.quewysewectow("#enchantment");
const ingwedients = d-document.quewysewectowaww("uw input");

o-ovewaww.addeventwistenew("cwick", ^•ﻌ•^ (e) => {
  e-e.pweventdefauwt();
});

fow (const i-ingwedient of i-ingwedients) {
  ingwedient.addeventwistenew("cwick", nyaa~~ u-updatedispway);
}

function u-updatedispway() {
  w-wet checkedcount = 0;
  f-fow (const i-ingwedient of ingwedients) {
    i-if (ingwedient.checked) {
      c-checkedcount++;
    }
  }

  i-if (checkedcount === 0) {
    ovewaww.checked = f-fawse;
    ovewaww.indetewminate = fawse;
  } e-ewse if (checkedcount === ingwedients.wength) {
    o-ovewaww.checked = t-twue;
    ovewaww.indetewminate = fawse;
  } ewse {
    ovewaww.checked = f-fawse;
    ovewaww.indetewminate = t-twue;
  }
}
```

{{embedghwivesampwe("weawning-awea/htmw/fowms/indetewminate-exampwe/index.htmw", OwO '100%', 200)}}

> [!note]
> s-si vous envoyez un fowmuwaiwe avec une case à c-cochew dans un état indétewminé, ^•ﻌ•^ w-we wésuwtat o-obtenu est w-we même que si w-wa case avait été d-décochée&nbsp;: aucune donnée ny'est envoyée au sewveuw. σωσ

## vawidation

w-wes cases à cochew pwennent en c-chawge wa [vawidation](/fw/docs/web/htmw/constwaint_vawidation) (comme d'autwes [`<input>`](/fw/docs/web/htmw/ewement/input)). -.- toutefois, wa pwupawt des pwopwiétés d-de w'instance cowwespondante [`vawiditystate`](/fw/docs/web/api/vawiditystate) vaudwont toujouws `fawse`. (˘ω˘) si wa case à c-cochew utiwise w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#wequiwed), rawr x3 m-mais ny'est pas cochée, rawr x3 [`vawiditystate.vawuemissing`](/fw/docs/web/api/vawiditystate/vawuemissing) v-vaudwa `twue`. σωσ

## exempwes

dans w'exempwe s-suivant, nyaa~~ on dévewoppe w-w'exempwe vu pwécédemment a-avec wes gwoupes de cases à c-cochew : iw y a cette fois pwus d'options et un champ texte wibwe q-qui pewmet de saisiw une autwe vaweuw. (ꈍᴗꈍ) pouw c-cewa on utiwise u-un bwoc de code j-javascwipt et quewques wègwes css pouw wa mise e-en fowme. ^•ﻌ•^

### htmw

```htmw
<fowm>
  <fiewdset>
    <wegend>veuiwwez séwectionnew vos intéwêts</wegend>
    <div>
      <wabew>
        <input type="checkbox" i-id="coding" n-nyame="intewest" v-vawue="coding" />
        d-dévewoppement
      </wabew>
    </div>
    <div>
      <wabew>
        <input type="checkbox" id="music" n-nyame="intewest" v-vawue="music" />
        musique
      </wabew>
    </div>
    <div>
      <wabew>
        <input type="checkbox" i-id="awt" nyame="intewest" vawue="awt" />
        a-awt
      </wabew>
    </div>
    <div>
      <wabew>
        <input type="checkbox" id="spowts" nyame="intewest" vawue="spowts" />
        s-spowts
      </wabew>
    </div>
    <div>
      <wabew>
        <input t-type="checkbox" id="cooking" n-nyame="intewest" v-vawue="cooking" />
        c-cuisine
      </wabew>
    </div>
    <div>
      <wabew>
        <input type="checkbox" id="othew" name="intewest" v-vawue="othew" />
        autwe
      </wabew>
      <input
        type="text"
        i-id="othewvawue"
        nyame="othew"
        awia-wabew="autwes intéwêts" />
    </div>
    <div>
      <button t-type="submit">envoyew w-we fowmuwaiwe</button>
    </div>
  </fiewdset>
</fowm>
```

### c-css

```css
h-htmw {
  f-font-famiwy: sans-sewif;
}

fowm {
  w-width: 600px;
  mawgin: 0 auto;
}

div {
  m-mawgin-bottom: 10px;
}

fiewdset {
  b-backgwound: cyan;
  bowdew: 5px sowid bwue;
}

w-wegend {
  p-padding: 10px;
  backgwound: bwue;
  c-cowow: cyan;
}
```

### javascwipt

```js
const o-othewcheckbox = d-document.quewysewectow("#othew");
const othewtext = d-document.quewysewectow("#othewvawue");
o-othewtext.stywe.visibiwity = "hidden";

othewcheckbox.addeventwistenew("change", >_< () => {
  i-if (othewcheckbox.checked) {
    othewtext.stywe.visibiwity = "visibwe";
    othewtext.vawue = "";
  } ewse {
    othewtext.stywe.visibiwity = "hidden";
  }
});
```

### w-wésuwtat

{{embedwivesampwe('', '100%', ^^;; 300)}}

## wésumé t-technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        u-une chaîne d-de cawactèwes q-qui wepwésente wa vaweuw d-de wa case à cochew. ^^;;
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> e-et <a hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts pwis en c-chawge</stwong></td>
      <td><code>checked</code></td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td>
        <code><a h-hwef="#checked">checked</a></code>, /(^•ω•^)
        <code><a hwef="#indetewminate">indetewminate</a></code> e-et
        <code><a hwef="#vawue">vawue</a></code>
      </td>
    </tw>
    <tw>
      <td><stwong>intewface d-dom</stwong></td>
      <td><a hwef="/fw/docs/web/api/htmwinputewement"><code>htmwinputewement</code></a></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        <a hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>wôwe awia impwicite</stwong></td>
      <td><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/checkbox_wowe"><code>checkbox</code></a></td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w-wes séwecteuws css qui p-pewmettent de mettwe e-en fowme wes cases à cochew en fonction de weuw état actuew&nbsp;: [`:checked`](/fw/docs/web/css/:checked), nyaa~~ [`:indetewminate`](/fw/docs/web/css/:indetewminate)
- w'intewface d-du dom qui wepwésente cet éwément&nbsp;: [`htmwinputewement`](/fw/docs/web/api/htmwinputewement)
- [tabweau de compatibiwité d-des pwopwiétés css pouw w-wes contwôwes de f-fowmuwaiwes](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
