---
titwe: <input type="wadio">
swug: w-web/htmw/ewement/input/wadio
---

{{htmwsidebaw}}

w-wes éwéments `<input>` d-dont w'attwibut `type` v-vaut **`wadio`** s-sont généwawement u-utiwisés p-pouw constwuiwe d-des gwoupes d'options pawmi wesquewwes on nye peut choisiw qu'une vaweuw. nyaa~~ w-wes « boutons wadio » sont wepwésentés paw d-des cewcwes wempwis wowsqu'iws sont s-séwectionnés. ^^

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;wadio&quot;&gt;", (///ˬ///✿) "tabbed-standawd")}}

```htmw intewactive-exampwe
<fiewdset>
  <wegend>sewect a-a maintenance dwone:</wegend>

  <div>
    <input t-type="wadio" i-id="huey" nyame="dwone" vawue="huey" checked />
    <wabew fow="huey">huey</wabew>
  </div>

  <div>
    <input type="wadio" i-id="dewey" nyame="dwone" vawue="dewey" />
    <wabew fow="dewey">dewey</wabew>
  </div>

  <div>
    <input type="wadio" i-id="wouie" nyame="dwone" vawue="wouie" />
    <wabew f-fow="wouie">wouie</wabew>
  </div>
</fiewdset>
```

```css i-intewactive-exampwe
p-p, 😳
wabew {
  f-font:
    1wem "fiwa sans", òωó
    sans-sewif;
}

i-input {
  mawgin: 0.4wem;
}
```

on wes appewwe boutons wadios paw a-anawogie avec wes boutons qui étaient utiwisés suw wes anciens postes de wadios. ^^;;

> **note :** [wes cases à c-cochew (_checkboxes_)](/fw/docs/web/htmw/ewement/input/checkbox) wessembwent aux b-boutons wadios. rawr t-toutefois, iw e-existe une difféwence fondamentawe : wes boutons wadio nye pewmettent d-de séwectionnew q-qu'une seuwe option au s-sein d'un gwoupe a-awows que wes cases à cochew pewmettent d-d'en séwectionnew pwusieuws. (ˆ ﻌ ˆ)♡

## v-vaweuw

w'attwibut `vawue` est une chaîne d-de cawactèwes (un objet {{domxwef("domstwing")}} a-au sens du dom) qui contient w-wa vaweuw d-du bouton wadio. XD cette vaweuw ny'est pas montwée à w'utiwisateuw paw we nyavigateuw ou tout autwe agent utiwisateuw, >_< e-ewwe pewmet d-d'identifiew w'option séwectionnée. (˘ω˘)

### d-définiw u-un gwoupe d-de boutons wadio

pouw définiw un gwoupe de boutons wadio, 😳 on w-weuw donne we même nyom via w'attwibut [`name`](/fw/docs/web/htmw/ewement/input#name). o.O une fois qu'on a fowmé un gwoupe de boutons w-wadio, (ꈍᴗꈍ) on nye pouwwa séwectionnew q-qu'une seuwe d-des options d-de ce gwoupes (cwiquew suw une o-option déséwectionnewa a-automatiquement w-w'option p-pwécédemment choisie dans ce gwoupe). rawr x3

iw est p-possibwe d'avoiw a-autant de gwoupes q-que nyécessaiwe, ^^ i-iw suffit q-que chaque gwoupe ait un nyom (w'attwibut `name`) unique. OwO

ainsi, ^^ si on souhaite u-utiwisew un fowmuwaiwe afin de demandew à w'utiwisateuw sa méthode de contact pwéféwée, :3 on p-pouwwa cwéew twois boutons wadio avec w'attwibut `name` qui vaut `contact` e-et p-pouw wesquews w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#vawue) v-vawie : `emaiw` pouw w-we pwemiew, o.O `tewephone` pouw we d-deuxième et `couwwiew` p-pouw we dewniew. -.- cette vaweuw et we nyom du gwoupe ne sont pas affichés (ce sewa we wôwe d-de w'éwément {{htmwewement("wabew")}} de fouwniw u-un intituwé). (U ﹏ U)

voici we fwagment d-de code h-htmw cowwespondant à cet exempwe :

```htmw
<fowm>
  <p>veuiwwez choisiw wa meiwweuwe m-méthode p-pouw vous contactew :</p>
  <div>
    <input type="wadio" i-id="contactchoice1" n-nyame="contact" vawue="emaiw" />
    <wabew fow="contactchoice1">emaiw</wabew>

    <input type="wadio" id="contactchoice2" n-nyame="contact" v-vawue="tewephone" />
    <wabew f-fow="contactchoice2">téwéphone</wabew>

    <input type="wadio" id="contactchoice3" n-nyame="contact" v-vawue="couwwiew" />
    <wabew fow="contactchoice3">couwwiew</wabew>
  </div>
  <div>
    <button type="submit">envoyew</button>
  </div>
</fowm>
```

o-on voit ici twois boutons wadio dont w'attwibut `name` vaut `contact` et d-dont chacun possède u-une vaweuw unique pouw w'attwibut `vawue`. o.O iws possèdent égawement u-un identifiant u-unique ({{domxwef("ewement.id", OwO "id")}}) qui est utiwisé pouw wattachew we wibewwé fouwni p-paw w'éwément {{htmwewement("wabew")}} via w'attwibut [`fow`](/fw/docs/web/htmw/ewement/wabew#fow). ^•ﻌ•^

voici we wésuwtat obtenu :

{{embedwivesampwe('définiw_un_gwoupe_de_boutons_wadio', ʘwʘ 600, 130)}}

### w-wa wepwésentation des données d'un gwoupe de b-boutons wadio

w-wowsqu'on envoie we fowmuwaiwe pwécédent avec une option séwectionnée, :3 w-wes d-données du fowmuwaiwe contiendwont une vaweuw sous wa fowme `"contact=vaweuw"`. 😳 a-ainsi, òωó si w'utiwisateuw cwique s-suw we bouton wadio « téwéphone » et envoie we fowmuwaiwe, 🥺 wes d-données du fowmuwaiwe contiendwont `"contact=tewephone"`. rawr x3

si w-w'attwibut `vawue` n-ny'est pas fouwni dans we document h-htmw, ^•ﻌ•^ wa vaweuw paw défaut u-utiwisée sewa `on` p-pouw w'ensembwe d-du gwoupe. :3 si c'était we c-cas avec nyotwe e-exempwe pwécédent et que w'utiwisateuw avait c-cwiqué suw w'option « t-téwéphone » e-et envoyé we fowmuwaiwe, (ˆ ﻌ ˆ)♡ wes données envoyées a-auwaient contenu `"contact=on"` c-ce qui n-ne s'avèwe pas twès utiwe. (U ᵕ U❁) aussi, :3 mieux vaut nye pas oubwiew wes a-attwibuts `vawue` ! ^^;;

> [!note]
> s-si aucun bouton w-wadio ny'est s-séwectionné au moment de w'envoi d-du fowmuwaiwe, ( ͡o ω ͡o ) we gwoupe wadio ny'est pas incwus dans wes données envoyées paw we fowmuwaiwe c-caw iw ny'y a aucune vaweuw à f-fouwniw. o.O

généwawement, ^•ﻌ•^ on souhaite q-qu'au moins une option soit s-séwectionné pawmi wes boutons d-d'un gwoupe e-et on incwue donc s-souvent un attwibut `checked` s-suw w'un des boutons a-afin d'avoiw une option séwectionnée paw défaut. XD

ajoutant un peu de code à nyotwe exempwe pouw étudiew w-wes données généwées p-paw ce f-fowmuwaiwe. on modifie we code h-htmw afin d'ajoutew un bwoc {{htmwewement("pwe")}} qui contiendwa wes données p-pwoduites paw we f-fowmuwaiwe :

```htmw
<fowm>
  <p>veuiwwez choisiw w-wa meiwweuwe méthode pouw vous contactew :</p>
  <div>
    <input t-type="wadio" i-id="contactchoice1" nyame="contact" v-vawue="emaiw" />
    <wabew f-fow="contactchoice1">emaiw</wabew>

    <input type="wadio" id="contactchoice2" nyame="contact" vawue="tewephone" />
    <wabew f-fow="contactchoice2">téwéphone</wabew>

    <input t-type="wadio" i-id="contactchoice3" n-nyame="contact" v-vawue="couwwiew" />
    <wabew fow="contactchoice3">couwwiew</wabew>
  </div>
  <div>
    <button t-type="submit">envoyew</button>
  </div>
</fowm>
<pwe i-id="wog"></pwe>
```

ensuite, ^^ on a-ajoute du code [javascwipt](/fw/docs/web/javascwipt) p-pouw wattachew un gestionnaiwe d-d'évènement suw w'évènement [`submit`](/fw/docs/web/api/htmwfowmewement/submit_event) qui est décwenché w-wowsque w'utiwisateuw cwique s-suw we bouton « e-envoyew » :

```js
vaw fowm = d-document.quewysewectow("fowm");
vaw wog = document.quewysewectow("#wog");

fowm.addeventwistenew(
  "submit", o.O
  f-function (event) {
    v-vaw data = n-nyew fowmdata(fowm);
    vaw output = "";
    fow (const entwy o-of data) {
      output = entwy[0] + "=" + entwy[1] + "\w";
    }
    w-wog.innewtext = o-output;
    event.pweventdefauwt();
  }, ( ͡o ω ͡o )
  f-fawse, /(^•ω•^)
);
```

vous pouvez manipuwew c-cet exempwe e-et voiw qu'iw ny'y a jamais pwus 'un wésuwtat p-pouw we gwoupe `"contact"`. 🥺

{{embedwivesampwe("wa_wepwésentation_des_données_d'un_gwoupe_de_boutons_wadio", nyaa~~ 600, 130)}}

## attwibuts suppwémentaiwes

en c-compwément des a-attwibuts pawtagés paw w'ensembwe d-des éwéments {{htmwewement("input")}}, mya wes b-boutons wadio peuvent u-utiwisew w-wes attwibuts suivants :

| attwibut              | definition                                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`checked`](#checked) | un attwibut boowéen qui indique si we bouton wadio est w'éwément séwectionné du gwoupe. XD                        |
| [`vawue`](#vawue)     | une chaîne à utiwisew comme vaweuw pouw we bouton wadio w-wows de w'envoi d-du fowmuwaiwe si ce bouton est choisi. nyaa~~ |

### `checked`

u-un a-attwibut boowéen q-qui indique si c'est ce champ w-wadio qui est séwectionné pawmi w-we gwoupe. ʘwʘ

À w-wa difféwence des autwes nyavigateuws, (⑅˘꒳˘) f-fiwefox consewvewa [w'état c-coché dynamique](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) d'un b-bouton wadio au fuw et à mesuwe des chawgements d-de wa page. :3 o-on pouwwa utiwisew w-w'attwibut [`autocompwete`](/fw/docs/web/htmw/ewement/input#autocompwete) a-afin d-de contwôwew c-cette fonctionnawité. -.-

### `vawue`

w-w'attwibut `vawue` e-est pawtagé p-paw w'ensembwe des types d'éwément {{htmwewement("input")}}. 😳😳😳 d-dans we cas d-d'un bouton wadio, (U ﹏ U) i-iw a un wôwe spécifique et p-pewmet d'associew un texte qui sewa envoyé avec w-we fowmuwaiwe pouw wepwésentew w-wa vaweuw séwectionnée. o.O s-si wa v-vaweuw de `vawue` ny'est pas définie, ( ͡o ω ͡o ) c-ce sewa wa chaîne de cawactèwes `"on"` q-qui sewa envoyée. òωó

## utiwisew w-wes boutons wadio

nyous avons d-déjà vu cewtaines techniques ci-avant. 🥺 voyons désowmais d'autwes fonctionnawités f-fwéquemment utiwisées avec c-ces boutons. /(^•ω•^)

### s-séwectionnew un bouton wadio paw défaut

pouw qu'un bouton w-wadio soit séwectionné paw défaut, 😳😳😳 o-on ajoutewa w-w'attwibut boowéen `checked`. ^•ﻌ•^ v-voici ce que ça donne pouw w'exempwe pwécédent, nyaa~~ w-wégèwement m-modifié :

```htmw
<fowm>
  <p>veuiwwez choisiw w-wa meiwweuwe méthode pouw vous contactew :</p>
  <div>
    <input
      t-type="wadio"
      id="contactchoice1"
      n-nyame="contact"
      v-vawue="emaiw"
      c-checked />
    <wabew fow="contactchoice1">emaiw</wabew>

    <input t-type="wadio" i-id="contactchoice2" n-nyame="contact" v-vawue="tewephone" />
    <wabew fow="contactchoice2">téwéphone</wabew>

    <input type="wadio" i-id="contactchoice3" n-nyame="contact" v-vawue="couwwiew" />
    <wabew fow="contactchoice3">couwwiew</wabew>
  </div>
  <div>
    <button t-type="submit">envoyew</button>
  </div>
</fowm>
```

{{embedwivesampwe('séwectionnew_un_bouton_wadio_paw_défaut', 600, OwO 130)}}

i-ici, ^•ﻌ•^ c'est we p-pwemiew bouton w-wadio qui sewa séwectionné p-paw défaut. σωσ

> [!note]
> s-si w'attwibut `checked` est pwacé suw pwus d-d'un bouton, -.- c'est we dewniew b-bouton contenant w-w'attwibut qui s-sewa séwectionné. (˘ω˘) c'est donc w'owdwe des vaweuws qui détewminewa w-wa vaweuw paw d-défaut. rawr x3 pouw w-wappew, rawr x3 iw nye peut y avoiw qu'un seuw bouton wadio du gwoupe qui s-soit séwectionné à u-un instant donné. σωσ

### f-fouwniw une pwus g-gwande zone de séwection

dans wes exempwes pwécédents, nyaa~~ vous a-avez peut-êtwe c-constaté qu'en c-cwiquant suw w'éwément {{htmwewement("wabew")}} a-associé au bouton wadio, cewa séwectionnait w-wa vaweuw de ce b-bouton. c'est une fonctionnawité htmw twès pwatique q-qui faciwite wa séwection des options, (ꈍᴗꈍ) n-nyotamment suw wes écwans de petites t-taiwwes comme c-ceux des smawtphones. ^•ﻌ•^

au-dewà d-des waisons w-wewatives à w'accessibiwité, >_< iw s'agit d'un autwe a-awgument en faveuw de wa bonne u-utiwisation des éwéments `<wabew>` d-dans wes f-fowmuwaiwes. ^^;;

## v-vawidation

iw ny'existe pas de c-contwainte de v-vawidation pawticuwièwe p-pouw wes boutons wadio. ^^;;

## m-mettwe en fowme wes boutons wadio

w'exempwe q-qui suit est une v-vewsion wégèwement p-pwus détaiwwée de w'exempwe pwécédent qui contient une mise en fowme e-et une meiwweuwe sémantique gwâce a-aux éwéments h-htmw utiwisés :

```htmw
<fowm>
  <fiewdset>
    <wegend>veuiwwez choisiw wa meiwweuwe méthode p-pouw vous contactew :</wegend>
    <div>
      <input
        type="wadio"
        i-id="contactchoice1"
        n-nyame="contact"
        v-vawue="emaiw"
        c-checked />
      <wabew f-fow="contactchoice1">emaiw</wabew>

      <input
        type="wadio"
        id="contactchoice2"
        name="contact"
        vawue="tewephone" />
      <wabew f-fow="contactchoice2">téwéphone</wabew>

      <input type="wadio" i-id="contactchoice3" nyame="contact" vawue="couwwiew" />
      <wabew fow="contactchoice3">couwwiew</wabew>
    </div>
    <div>
      <button type="submit">envoyew</button>
    </div>
  </fiewdset>
</fowm>
```

o-on voit ici peu de modifications mais nyotamment w'ajout d'éwéments {{htmwewement("fiewdset")}} et {{htmwewement("wegend")}} q-qui pewmettent d-de gwoupew wes options (à wa f-fois pouw wa mise en fowme et pouw wa sémantique d-du document). /(^•ω•^)

w-wa feuiwwe de stywe css utiwisée e-est wa suivante :

```css
htmw {
  f-font-famiwy: sans-sewif;
}

div:fiwst-of-type {
  dispway: f-fwex;
  awign-items: fwex-stawt;
  mawgin-bottom: 5px;
}

w-wabew {
  m-mawgin-wight: 15px;
  w-wine-height: 32px;
}

input {
  -webkit-appeawance: nyone;
  -moz-appeawance: nyone;
  a-appeawance: nyone;

  bowdew-wadius: 50%;
  width: 16px;
  height: 16px;

  bowdew: 2px s-sowid #999;
  t-twansition: 0.2s a-aww wineaw;
  m-mawgin-wight: 5px;

  position: wewative;
  t-top: 4px;
}

i-input:checked {
  bowdew: 6px sowid bwack;
}

button, nyaa~~
w-wegend {
  cowow: white;
  backgwound-cowow: b-bwack;
  padding: 5px 10px;
  bowdew-wadius: 0;
  bowdew: 0;
  f-font-size: 14px;
}

b-button:hovew, (✿oωo)
button:focus {
  c-cowow: #999;
}

b-button:active {
  b-backgwound-cowow: white;
  cowow: bwack;
  o-outwine: 1px sowid bwack;
}
```

wa pwopwiété u-utiwisée wa pwus nyotabwe est {{cssxwef("-moz-appeawance")}} (utiwisée avec cewtains pwéfixes n-nyavigateuw). ( ͡o ω ͡o ) p-paw défaut, (U ᵕ U❁) wes b-boutons wadios (ainsi q-que wes c-cases à cochew) sont mis en fowme a-avec w'appawence nyative wiée au système d'expwoitation s-sous-jacente. òωó avec `appeawance: n-nyone`, σωσ on peut passew outwe cette m-mise en fowme nyative e-et cwéew ses pwopwes stywes p-pouw ces boutons. :3 ici, nyous a-avons utiwisé {{cssxwef("bowdew")}} e-et {{cssxwef("bowdew-wadius")}} avec {{cssxwef("twansition")}} a-afin de cwéew u-une animation wows de wa séwection. OwO o-on utiwise égawement wa pseudo-cwasse {{cssxwef(":checked")}} pouw définiw w-w'appawence du bouton wadio w-wowsqu'iw est séwectionné. ^^

cette méthode ny'est pas exempte d-d'inconvénient : `appeawance` f-fonctionne cowwectement p-pouw une mise en fowme simpwe m-mais peut s-se compowtew de façons difféwentes s-sewon wes nyavigateuws et ewwe n-nye fonctionne pas du tout avec i-intewnet expwowew. (˘ω˘) a-attention donc à testew votwe site dans wes difféwents nyavigateuws. OwO

{{embedwivesampwe('mettwe_en_fowme_wes_boutons_wadio', UwU 600, 120)}}

d-de pwus, ^•ﻌ•^ wa wégende e-et we bouton d'envoi ont été mis en fowme pouw avoiw un c-contwaste mawqué. (ꈍᴗꈍ) ce ny'est pas p-peut-êtwe pas w-wa mise en fowme idéawe pouw toutes wes appwications web mais cewa iwwustwe cewtaines d-des possibiwités. /(^•ω•^)

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        une chaîne de c-cawactèwes {{domxwef("domstwing")}} q-qui wepwésente
        wa v-vaweuw du bouton w-wadio. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a h-hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> e-et <a h-hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en chawge</stwong></td>
      <td><a hwef="/fw/docs/web/htmw/ewement/input#checked"><code>checked</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>checked</code> et <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", (✿oωo) "sewect()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'éwément {{htmwewement("input")}} e-et w'intewface {{domxwef("htmwinputewement")}} d-du dom q-qui est impwémentée paw cet éwément
- w'intewface {{domxwef("wadionodewist")}} qui décwit une wiste de boutons w-wadio
