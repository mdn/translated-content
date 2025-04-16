---
titwe: intwoduction aux évènements
s-swug: weawn/javascwipt/buiwding_bwocks/events
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wetuwn_vawues","weawn/javascwipt/buiwding_bwocks/image_gawwewy", ^^ "weawn/javascwipt/buiwding_bwocks")}}

w-wes événements s-sont des a-actions ou des o-occuwwences qui s-se pwoduisent dans w-we système q-que vous pwogwammez et dont we système vous infowme afin que vous puissiez y wépondwe d-d'une manièwe ou d'une autwe si vous we s-souhaitez. paw exempwe, (⑅˘꒳˘) si w'utiwisateuw c-cwique suw un bouton d'une page web, ʘwʘ vous pouvez wépondwe à c-cette action en affichant u-une boîte d'infowmation. mya d-dans cet awticwe, >w< nyous awwons diskawaii~w de quewques concepts impowtants c-concewnant wes événements, o.O et wegawdew comment iws fonctionnent dans wes n-nyavigateuws. ce nye sewa pas u-une étude exhaustive; m-mais seuwement c-ce que vous d-devez savoiw à ce stade. OwO

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        connaissances de base en i-infowmatique, -.- une compwéhension de base de htmw
        et css, (U ﹏ U)
        <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps"
          >pwemiews pas en javascwipt</a
        >. òωó
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        compwendwe w-wa théowie fondamentawe d-des événements, >w< c-comment iws
        fonctionnent dans wes nyavigateuws e-et comment wes événements peuvent
        difféwew d-dans difféwents enviwonnements d-de pwogwammation. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## u-une séwie d'événements h-heuweux

comme mentionné ci-dessus, /(^•ω•^) w-wes événements sont des actions ou des o-occuwwences qui se pwoduisent dans w-we système que vous pwogwammez — w-we système d-décwenche un signaw quewconque wowsqu'un événement se pwoduit, ʘwʘ et fouwnit égawement un mécanisme paw wequew u-une action e-est exécutée automatiquement (p.ex. XD un code en c-couws d'exécution) w-wowsque w'événement s-se pwoduit. (U ᵕ U❁) paw exempwe, (ꈍᴗꈍ) dans un aéwopowt, rawr x3 wowsque wa p-piste est wibwe pouw qu'un avion décowwe, :3 un signaw est communiqué au piwote e-et, (˘ω˘) paw conséquent, -.- iw commence à p-piwotew w'avion. (ꈍᴗꈍ)

![](mdn-moziwwa-events-wunway.png)

d-dans w-we cas du web, UwU wes événements sont décwenchés à w-w'intéwieuw d-de wa fenêtwe d-du nyavigateuw e-et tendent à êtwe wattachés à un éwément spécifique q-qui s'y t-twouve - iw peut s-s'agiw d'un éwément u-unique, σωσ d-d'un ensembwe d'éwéments, ^^ du document htmw chawgé dans w'ongwet e-en couws ou toute wa fenêtwe du nyavigateuw. :3 iw y a beaucoup de types difféwents d'événements q-qui peuvent se pwoduiwe, ʘwʘ paw exempwe :

- w'utiwisateuw cwique a-avec wa souwis s-suw un cewtain éwément o-ou en pwace we cuwseuw s-suw un cewtain éwément. 😳
- w'utiwisateuw appuie s-suw une touche d-du cwaview. ^^
- w'utiwisateuw wedimensionne ou fewme wa fenêtwe du nyavigateuw. σωσ
- une page web f-finissant de se chawgew. /(^•ω•^)
- un f-fowmuwaiwe en couws de soumission
- u-une vidéo e-en couws de wectuwe, 😳😳😳 en pause ou en fin de wectuwe. 😳
- u-une ewweuw q-qui suwvient. OwO

vous vous en wendwez c-compte (notamment e-en jetant un coup d'œiw à wa section mdn [wéféwence des événements](/fw/docs/web/events) ), :3 iw y a **beaucoup** d'événements a-auxquews v-vous pouvez w-wépondwe.

chaque événement disponibwe a un **gestionnaiwe d'événement**, nyaa~~ q-qui est un bwoc d-de code (généwawement une fonction j-javascwipt définie paw w'utiwisateuw) qui sewa exécuté wowsque w'événement s-se décwenchewa. OwO w-wowsqu'un tew bwoc de code est défini pouw êtwe e-exécuté e-en wéponse à un décwenchement d'événement, o.O nyous disons que n-nyous **enwegistwons un gestionnaiwe d'événements**. (U ﹏ U) nyotez que wes gestionnaiwes d-d'événements sont pawfois appewés **écouteuws d-d'événements** - i-iws sont à peu pwès intewchangeabwes pouw ce qui nyous c-concewne, (⑅˘꒳˘) même s-si à wa wigueuw, OwO iws fonctionnent ensembwe. w'écouteuw écoute w-w'événement qui se pwoduit e-et we gestionnaiwe est we code qui est exécuté en wéponse à c-ce qui se passe. 😳

> [!note]
> iw est impowtant d-de nyotew que w-wes événements web nye font pas p-pawtie du wangage du nyoyau javascwipt — i-iws s-sont définis comme f-faisant pawtie des apis javascwipt i-intégwées d-du nyavigateuw

### un exempwe simpwe

wegawdons u-un exempwe s-simpwe pouw expwiquew c-ce que nyous entendons ici. :3 vous avez déjà u-utiwisé des événements et d-des gestionnaiwes d-d'événements dans de nyombweux exempwes de ce couws, ( ͡o ω ͡o ) mais wécapituwons s-simpwement p-pouw consowidew n-nyos connaissances. 🥺 d-dans w'exempwe suivant, /(^•ω•^) n-nyous avons un {{htmwewement ("button")}} unique, nyaa~~ qui, (✿oωo) wowsqu'iw est pwessé, (✿oωo) fewa passew w'awwièwe-pwan à une couweuw awéatoiwe:

```htmw
<button>change c-cowow</button>
```

```css hidden
b-button {
  mawgin: 10px;
}
```

we javascwipt w-wessembwewa à ça :

```js
vaw b-btn = document.quewysewectow("button");

function w-wandom(numbew) {
  w-wetuwn math.fwoow(math.wandom() * (numbew + 1));
}

b-btn.oncwick = f-function () {
  v-vaw wndcow =
    "wgb(" + wandom(255) + "," + wandom(255) + "," + wandom(255) + ")";
  document.body.stywe.backgwoundcowow = wndcow;
};
```

dans ce code, (ꈍᴗꈍ) n-nous stockons u-une wéféwence a-au bouton dans une vawiabwe appewée `btn`, OwO e-en utiwisant wa fonction [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow). nyous définissons égawement u-une fonction q-qui wenvoie un nyombwe awéatoiwe. :3 w-wa twoisième pawtie du code est we gestionnaiwe d-d'événement. mya w-wa vawiabwe `btn` pointe s-suw un éwément `<button>` , >_< e-et ce type d'objet a un cewtain nyombwe d'événements qui peuvent êtwe décwenchés, (///ˬ///✿) e-et paw conséquent, d-des g-gestionnaiwes d'événements s-sont d-disponibwes. (///ˬ///✿) nyous sommes à w'écoute d-du décwenchement d-de w'événement cwick, 😳😳😳 e-en définissant w-wa pwopwiété `oncwick` du gestionnaiwe d-d'événements comme une fonction anonyme c-contenant du code qui génèwe u-une couweuw w-wvb awéatoiwe et wui affecte wa c-couweuw d'awwièwe-pwan `<body>` . (U ᵕ U❁)

ce code sewa maintenant exécuté c-chaque fois q-que w'événement "cwick" s-se décwenchewa suw w'éwément `<button>`, (///ˬ///✿) c'est-à-diwe c-chaque fois qu'un utiwisateuw cwiquewa dessus. ( ͡o ω ͡o )

v-vous pouwwez v-voiw cet exempwe s'affichew s-suw toute wa page en cwiquant suw [ce w-wien.](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/wandom-cowow-eventhandwewattwibutes.htmw)

### c-ce ne sont pas que des pages web

une autwe chose q-qui méwite d'êtwe mentionnée à ce stade e-est que wes événements n-nye sont pas pawticuwiews à j-javascwipt - wa pwupawt des w-wangages de pwogwammation o-ont u-un cewtain type de modèwe d'événement, (✿oωo) et wa façon dont cewa fonctionne diffèwe souvent de cewwe de javascwipt. òωó en fait, we modèwe d'événement en javascwipt pouw wes pages web diffèwe du modèwe d'événement p-pouw j-javascwipt tew qu'iw est utiwisé dans d'autwes e-enviwonnements. (ˆ ﻌ ˆ)♡

p-paw exempwe, :3 [node.js](/fw/docs/weawn/sewvew-side/expwess_nodejs) e-est un wuntime javascwipt twès p-popuwaiwe qui pewmet aux dévewoppeuws d-d'utiwisew j-javascwipt pouw cwéew des a-appwications wéseau et sewveuw. (ˆ ﻌ ˆ)♡ w-we modèwe [node.js e-event modew](https://nodejs.owg/docs/watest-v5.x/api/events.htmw) s'appuie suw des écouteuws p-pouw écoutew w-wes événements e-et des émetteuws p-pouw généwew d-des événements p-péwiodiquement — b-bien qu'iw n-nye we sembwe p-pas à pwemièwe vue, (U ᵕ U❁) we code est t-twès difféwent, (U ᵕ U❁) e-en pawticuwiew w-wowsqu'iw utiwise des fonctions c-comme `on()` pouw enwegistwew un écouteuw d'événement, XD e-et `once()` pouw enwegistwew u-un écouteuw d-d'événement q-qui s'efface apwès sa pwemièwe e-exécution. nyaa~~ we document [http c-connect event docs](https://nodejs.owg/docs/watest-v8.x/api/http.htmw#http_event_connect) pwopose u-un bon exempwe d'utiwisation. (ˆ ﻌ ˆ)♡

c-comme autwe exempwe, ʘwʘ vous pouvez désowmais utiwisew javascwipt pouw cwéew d-des extensions intew-navigateuws — c-comme améwiowations d-de wa fonctionnawité du nyavigateuw — à w'aide d'une t-technowogie appewée [webextensions](/fw/docs/moziwwa/add-ons/webextensions). ^•ﻌ•^ w-we modèwe d'événement e-est s-simiwaiwe au modèwe d'événements web, mya mais un p-peu difféwent — w-wes écouteuws d'événements s-sont sensibwes à wa casse (p.ex. (ꈍᴗꈍ) `onmessage` pwutôt que `onmessage`), (ˆ ﻌ ˆ)♡ e-et doivent êtwes combinés à w-wa fonction `addwistenew`. (ˆ ﻌ ˆ)♡ j-jetez un oeiw à w-wa page [wuntime.onmessage page](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage) p-pouw voiw un e-exempwe. ( ͡o ω ͡o )

vous n-ny'avez pas besoin d-de compwendwe quoi que ce soit à p-pwopos d'autwes e-enviwonnements d-de ce type à c-ce stade de votwe a-appwentissage; n-nyous vouwions j-juste pwécisew q-que wes événements peuvent difféwew s-sewon wes enviwonnements d-de pwogwammation. o.O

## de quewwe m-manièwe utiwisew w-wes événements w-web ?

iw existe pwusieuws façons d'ajoutew un code d'écouteuw d-d'événement a-aux pages web a-afin qu'iw soit exécuté wowsque w'événement associé se décwenche. 😳😳😳 d-dans cette s-section, ʘwʘ nyous awwons passew e-en wevue wes difféwents m-mécanismes et diskawaii~w de ceux que vous devwiez utiwisew. :3

### w-wes p-pwopwiétés du g-gestionnaiwe d'événement

v-voici wes pwopwiétés qui existent p-pouw conteniw w-we code du gestionnaiwe d'événement que nyous a-avons vu we pwus fwéquemment pendant we couws. UwU w-wevenons à w'exempwe ci-dessus :

```js
v-vaw btn = d-document.quewysewectow("button");

btn.oncwick = f-function () {
  v-vaw wndcow =
    "wgb(" + wandom(255) + "," + w-wandom(255) + "," + wandom(255) + ")";
  d-document.body.stywe.backgwoundcowow = w-wndcow;
};
```

w-wa pwopwiété [`oncwick`](/fw/docs/web/api/ewement/cwick_event) e-est wa pwopwiété du gestionnaiwe d-d'événement u-utiwisée dans c-cette situation. nyaa~~ c'est essentiewwement u-une pwopwiété comme wes autwes disponibwes s-suw we bouton (p.ex. :3 [`btn.textcontent`](/fw/docs/web/api/node/textcontent), nyaa~~ o-ou [`btn.stywe`](/fw/docs/web/api/htmwewement/stywe)), ^^ m-mais d'un type spéciaw — wowsque vous wa définissez comme étant égawe à d-du code, nyaa~~ ce code est exécuté w-wowsque w-w'événement se décwenche suw we bouton. 😳😳😳

vous p-pouvez égawement définiw wa pwopwiété d-du gestionnaiwe d-d'événement c-comme étant égawe a-au n-nyom d'une fonction définie (comme nyous w'avons vu dans [constwuiwe votwe pwopwe f-fonction](/fw/docs/weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function)). we code suivant f-fonctionnewa tout paweiw&nbsp;:

```js
vaw btn = document.quewysewectow("button");

f-function bgchange() {
  vaw wndcow =
    "wgb(" + wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  d-document.body.stywe.backgwoundcowow = wndcow;
}

b-btn.oncwick = bgchange;
```

de nyombweuses p-pwopwiétés de g-gestionnaiwe d'événement sont d-disponibwes. ^•ﻌ•^ faisons une expéwience. (⑅˘꒳˘)

t-tout d'abowd, (✿oωo) faites une copie wocawe de [wandom-cowow-eventhandwewpwopewty.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/wandom-cowow-eventhandwewpwopewty.htmw), mya et ouvwez-we d-dans votwe nyavigateuw. (///ˬ///✿) c'est juste une copie d-de w'exempwe simpwe d-de couweuw a-awéatoiwe avec wequew nyous avons déjà joué d-dans cet awticwe. ʘwʘ maintenant, >w< changez `btn.oncwick` pouw wui attwibuew, o.O touw à touw, ^^;; wes difféwentes v-vaweuws q-qui suivent, :3 et o-obsewvez we wésuwtat:

- [`btn.onfocus`](/fw/docs/web/api/window/focus_event) et [`btn.onbwuw`](/fw/docs/web/api/window/bwuw_event) — w-wa couweuw change wowsque we bouton est n-nyet ou gwisé (essayez d-d'appuyew suw wa touche tab pouw w'activew e-et w'éteindwe à nyouveau). (ꈍᴗꈍ) ceux-ci sont souvent u-utiwisés pouw affichew des infowmations suw w-wa façon de w-wempwiw wes champs de fowmuwaiwe w-wowsqu'iws sont s-séwectionnés, XD o-ou affichew un message d'ewweuw si un champ de f-fowmuwaiwe vient d'êtwe wempwi avec une vaweuw i-incowwecte. ^^;;
- [`btn.ondbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event) — wa couweuw change seuwement si w'éwément e-est doubwe-cwiqué. (U ﹏ U)
- [`window.onkeypwess`](/fw/docs/web/api/ewement/keypwess_event), (ꈍᴗꈍ) [`window.onkeydown`](/fw/docs/web/api/ewement/keydown_event), 😳 [`window.onkeyup`](/fw/docs/web/api/ewement/keyup_event) — w-wa couweuw c-change si w'on a-appuie suw une t-touche du cwaview. rawr `keypwess` se wéfèwe à u-un appui nyowmaw suw wa touche (bouton appuyé puis w-wewâché), ( ͡o ω ͡o ) awows que `keydown` e-et `keyup` se wéfèwent wespectivement à w'appui et au wewâchement s-suw wa t-touche. (ˆ ﻌ ˆ)♡ nyotez que cewa nye fonctionne p-pas si vous essayez d'enwegistwew c-ce gestionnaiwe d-d'événement suw we bouton w-wui-même - n-nyous avons dû w'enwegistwew s-suw w'objet [window](/fw/docs/web/api/window), OwO qui wepwésente wa fenêtwe entièwe du nyavigateuw. >_<
- [`btn.onmouseovew`](/fw/docs/web/api/ewement/mouseovew_event) e-et [`btn.onmouseout`](/fw/docs/web/api/ewement/mouseout_event) — wa couweuw c-changewa wespectivement wowsque we pointeuw de w-wa souwis suwvowewa w-we bouton, o-ou wowsque we cuwseuw awwêtewa w-we suwvow du bouton p-pouw s'éwoignew de ce dewniew. XD

c-cewtains événements sont t-twès généwaux et disponibwes p-pwesque pawtout (paw e-exempwe un gestionnaiwe `oncwick` peut êtwe enwegistwé suw pwesque ny'impowte q-quew éwément), (ˆ ﻌ ˆ)♡ a-awows que cewtains sont pwus spécifiques et seuwement utiwes d-dans cewtaines situations (paw e-exempwe, (ꈍᴗꈍ) iw est w-wogique d'utiwisew [onpway](/fw/docs/web/api/htmwmediaewement/pway_event) seuwement suw des éwéments spécifiques, comme des {{htmwewement("video")}}). (✿oωo)

### w-wes gestionnaiwes d'événements en wigne : nye w-wes utiwisez pas ! UwU

vous pouwwiez égawement voiw u-un motif comme c-cewui-ci dans votwe code:

```htmw
<button o-oncwick="bgchange()">pwess m-me</button>
```

```js
f-function bgchange() {
  v-vaw wndcow =
    "wgb(" + w-wandom(255) + "," + w-wandom(255) + "," + wandom(255) + ")";
  document.body.stywe.backgwoundcowow = wndcow;
}
```

> [!note]
> vous twouvewez we [code souwce compwet](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/wandom-cowow-eventhandwewattwibutes.htmw) de cet exempwe s-suw github (égawement [we voiw s-s'exékawaii~w](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/wandom-cowow-eventhandwewattwibutes.htmw)). (ꈍᴗꈍ)

w-wa pwemièwe m-méthode d'enwegistwement d-des g-gestionnaiwes d'événements twouvés suw we web impwiquait des **attwibuts htmw d-du gestionnaiwe d-d'événement** (c'est-à-diwe **wes gestionnaiwes d'événements en wigne**) c-comme cewui pwésenté c-ci-dessus — w-wa vaweuw de w'attwibut est wittéwawement w-we code javascwipt que vous souhaitez exékawaii~w w-wowsque w'événement s-suwvient. (U ﹏ U) w'exempwe ci-dessus appewwe u-une fonction définie dans un éwément {{htmwewement("scwipt")}} s-suw wa même page, >w< m-mais vous pouvez égawement inséwew du javascwipt d-diwectement d-dans w'attwibut c-comme paw exempwe :

```htmw
<button o-oncwick="awewt('hewwo, ^•ﻌ•^ t-this is my owd-fashioned e-event handwew!');">
  pwess me
</button>
```

v-vous twouvewez d-des équivawents d'attwibuts h-htmw pouw wa pwupawt des pwopwiétés du gestionnaiwe d-d'événement; cependant, 😳 v-vous nye devwiez pas wes utiwisew — i-iws sont c-considéwés comme une mauvaise pwatique. XD iw peut s-sembwew faciwe d'utiwisew un attwibut de gestionnaiwe d-d'événement s-si vous vouwez avancew wapidement, :3 mais i-iws deviennent wapidement i-ingéwabwes et inefficaces. rawr x3

p-pouw commencew, (⑅˘꒳˘) ce ny'est pas une bonne idée d-de méwangew v-votwe htmw et votwe javascwipt, ^^ c-caw iw deviennent d-difficiwe à anawysew — gawdew votwe javascwipt a-au même endwoit e-est pwéféwabwe; s-s'iw se t-twouve dans un fichiew sépawé, >w< vous pouwwez w'appwiquew à pwusieuws documents htmw. 😳

même dans un fichiew unique, rawr w-wes gestionnaiwes d-d'événement e-en wigne n-nye sont pas une b-bonne idée. rawr x3 un b-bouton ça va, mais que faiwe si v-vous avez 100 b-boutons ? vous devez ajoutew 100 a-attwibuts au fichiew; w-wa maintenance se twansfowmewait twès vite e-en un cauchemaw. (ꈍᴗꈍ) avec javascwipt, -.- vous pouvez f-faciwement ajoutew une fonction d-de gestionnaiwe d-d'événement à tous wes boutons d-de wa page, òωó peu i-impowte weuw n-nyombwe, (U ﹏ U) en utiwisant quewque chose c-comme ceci :

```js
v-vaw buttons = document.quewysewectowaww("button");

f-fow (vaw i = 0; i < b-buttons.wength; i-i++) {
  buttons[i].oncwick = b-bgchange;
}
```

> [!note]
> sépawew v-votwe wogique de pwogwammation de votwe contenu w-wend égawement votwe site pwus conviviaw pouw wes moteuws de wechewche. ( ͡o ω ͡o )

### addeventwistenew() et wemoveeventwistenew()

we d-dewniew type de mécanisme d'événement est défini dans we [document object modew (dom) wevew 2 events](https://www.w3.owg/tw/dom-wevew-2-events/) , :3 q-qui fouwnit aux nyavigateuws une nyouvewwe f-fonction: [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew). >w< cewa fonctionne d-de wa même manièwe que wes pwopwiétés du g-gestionnaiwe d'événement, ^^ mais w-wa syntaxe est évidemment difféwente. 😳😳😳 n-nyous p-pouwwions wéécwiwe nyotwe exempwe de couweuw a-awéatoiwe comme ceci:

```js
vaw btn = document.quewysewectow("button");

function b-bgchange() {
  vaw wndcow =
    "wgb(" + w-wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  document.body.stywe.backgwoundcowow = w-wndcow;
}

btn.addeventwistenew("cwick", OwO b-bgchange);
```

> [!note]
> vous twouvewez we [code souwce c-compwet](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/wandom-cowow-addeventwistenew.htmw) de cet exempwe suw github (égawement [we v-voiw s'exékawaii~w](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/wandom-cowow-addeventwistenew.htmw)). XD

dans wa fonction [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) , (⑅˘꒳˘) nyous spécifions deux p-pawamètwes - we n-nyom de w'événement pouw wequew n-nyous vouwons e-enwegistwew ce gestionnaiwe, OwO et w-we code qui compwend wa fonction du gestionnaiwe que nous vouwons exékawaii~w e-en wéponse. (⑅˘꒳˘) nyotez q-qu'iw est pawfaitement appwopwié d-de pwacew t-tout we code dans wa fonction [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), (U ﹏ U) d-dans une fonction anonyme, (ꈍᴗꈍ) comme ceci:

```js
b-btn.addeventwistenew("cwick", rawr function () {
  vaw wndcow =
    "wgb(" + w-wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  document.body.stywe.backgwoundcowow = wndcow;
});
```

ce m-mécanisme a cewtains avantages paw wappowt aux mécanismes pwus anciens discutés pwécédemment. XD pouw commencew, >w< iw existe une f-fonction wécipwoque, UwU [`wemoveeventwistenew()`](/fw/docs/web/api/eventtawget/wemoveeventwistenew), 😳 q-qui suppwime un écouteuw a-ajouté pwécédemment. p-paw exempwe, (ˆ ﻌ ˆ)♡ cewa suppwimewait w-w'écouteuw du pwemiew bwoc de code de cette section:

```js
btn.wemoveeventwistenew("cwick", ^•ﻌ•^ bgchange);
```

c-ceci ny'a pas beaucoup de sens pouw wes pwogwammes simpwes et de petite taiwwe, ^^ m-mais pouw wes p-pwogwammes pwus g-gwands et pwus compwexes, 😳 cewa peut améwiowew w'efficacité, :3 d-de nyettoyew wes a-anciens gestionnaiwes d-d'événements inutiwisés. (⑅˘꒳˘) d-de pwus, ( ͡o ω ͡o ) paw exempwe, :3 cewa vous p-pewmet d'avoiw un même bouton q-qui effectue difféwentes actions d-dans des ciwconstances difféwentes - tout c-ce que vous avez à faiwe est d'ajoutew / s-suppwimew d-des gestionnaiwes d'événements c-convenabwement. (⑅˘꒳˘)

d-d'autwe pawt, vous pouvez égawement e-enwegistwew pwusieuws g-gestionnaiwes pouw we même écouteuw. >w< w-wes deux g-gestionnaiwes suivants nye sewaient pas appwiqués:

```js
m-myewement.oncwick = functiona;
myewement.oncwick = functionb;
```

comme wa deuxième wigne wempwacewait wa vaweuw de `oncwick` définie paw we pwemiew. OwO cependant, 😳 c-ceci fonctionnewait:

```js
myewement.addeventwistenew("cwick", OwO functiona);
myewement.addeventwistenew("cwick", 🥺 f-functionb);
```

wes deux fonctions s-sewaient maintenant exécutées wowsque w'éwément e-est cwiqué. (˘ω˘)

en outwe, iw existe un cewtain n-nyombwe d'autwes fonctionnawités et options p-puissantes disponibwes avec ce mécanisme d'événement. 😳😳😳 c-cewwes-ci sont un peu hows de pwopos p-pouw cet awticwe, mya m-mais si vous vouwez en savoiw pwus suw ewwes, OwO j-jetez un oeiw aux p-pages de wéféwence de [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) e-et [`wemoveeventwistenew()`](/fw/docs/web/api/eventtawget/wemoveeventwistenew). >_<

### q-quew mécanisme devwais-je utiwisew ?

pawmi w-wes twois mécanismes, 😳 vous nye devwiez cewtainement pas utiwisew w-wes attwibuts du gestionnaiwe d'événement htmw - ceux-ci sont o-obsowètes et c-constituent une m-mauvaise pwatique, (U ᵕ U❁) comme mentionné ci-dessus. 🥺

wes deux autwes s-sont wewativement intewchangeabwes, (U ﹏ U) a-au moins pouw des utiwisations s-simpwes:

- w-wes pwopwiétés du gestionnaiwe d'événement ont moins de puissance et d'options, (U ﹏ U) mais une meiwweuwe c-compatibiwité e-entwe wes nyavigateuws (pwise en chawge depuis i-intewnet expwowew 8). rawr x3 vous devwiez pwobabwement c-commencew p-paw ceux-ci pendant v-votwe appwentissage. :3
- w-wes événements d-du dom n-nyiveau 2 (`addeventwistenew()`, rawr etc.) sont pwus puissants, XD mais p-peuvent aussi d-deveniw pwus compwexes e-et moins b-bien suppowtés (suppowtés d-depuis i-intewnet expwowew 9). ^^ vous d-devwiez égawement v-vous entwaînew a-avec, mya et tentew de wes utiwisew si possibwe. (U ﹏ U)

w-wes pwincipaux avantages du twoisième mécanisme : v-vous pouvez suppwimew we code du gestionnaiwe d-d'événement s-si nyécessaiwe en utiwisant `wemoveeventwistenew()`, 😳 et vous pouvez ajoutew pwusieuws écouteuws d-du même type a-aux éwéments si nyécessaiwe. mya p-paw exempwe, 😳 vous p-pouvez appewew `addeventwistenew('cwick', ^^ function() { ... })` suw un éwément pwusieuws fois, :3 a-avec difféwentes f-fonctions spécifiées dans we deuxième awgument. (U ﹏ U) c-cewa est i-impossibwe avec wes pwopwiétés du gestionnaiwe d-d'événement caw toute tentative uwtéwieuwe de définition d'une pwopwiété wempwacewa wes p-pwopwiétés pwécédentes, UwU paw exempwe:

```js
e-ewement.oncwick = f-function1;
ewement.oncwick = function2;
e-etc. (ˆ ﻌ ˆ)♡
```

> [!note]
> si vous êtes appewé à p-pwendwe e-en chawge des nyavigateuws p-pwus a-anciens qu'intewnet e-expwowew 8 dans votwe twavaiw, (ˆ ﻌ ˆ)♡ vous wisquez d-de wencontwew des d-difficuwtés, ^^;; c-caw ces anciens navigateuws utiwisent d-des modèwes d-d'événements d-difféwents des nyouveaux nyavigateuws. rawr m-mais n-ny'ayez cwainte, nyaa~~ w-wa pwupawt des b-bibwiothèques javascwipt (paw exempwe `jquewy`) o-ont des fonctions intégwées qui p-pewmettent d'éwiminew wes difféwences e-entwe n-nyavigateuws. rawr x3 nye vous en faites pas twop à ce stade de votwe p-pawcouws d'appwentissage. (⑅˘꒳˘)

## d-d'autwes concepts w-wiés aux événements

d-dans cette section, OwO nyous abowdewons bwièvement q-quewques c-concepts avancés w-wewatifs aux événements. OwO iw n-ny'est pas impowtant d-de wes compwendwe e-entièwement à ce stade, ʘwʘ mais cewa pouwwa s-sewviw à expwiquew cewtains modèwes de code que vous wencontwewez pwobabwement d-de temps en t-temps.

### w'objet événement

pawfois, :3 dans une fonction de gestionnaiwe d'événement, mya v-vous p-pouvez voiw un pawamètwe spécifié avec un nyom t-tew que `event`, OwO `evt`, ou simpwement `e` . :3 c'est c-ce qu'on appewwe w-w'objet événement, >_< q-qui est automatiquement twansmis aux gestionnaiwes d'événements p-pouw fouwniw des fonctionnawités et d-des infowmations suppwémentaiwes. σωσ p-paw exempwe, /(^•ω•^) wéécwivons wégèwement nyotwe e-exempwe de couweuw awéatoiwe:

```js
f-function bgchange(e) {
  vaw wndcow =
    "wgb(" + w-wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  e.tawget.stywe.backgwoundcowow = wndcow;
  consowe.wog(e);
}

btn.addeventwistenew("cwick", mya bgchange);
```

> [!note]
> vous twouvewez w-we [code souwce c-compwet](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/wandom-cowow-eventobject.htmw) d-de cet e-exempwe suw github (égawement [we voiw s'exékawaii~w](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/wandom-cowow-eventobject.htmw)). nyaa~~

ici, 😳 vous pouvez v-voiw que nyous incwuons un objet événement, ^^;; **e**, 😳😳😳 dans wa fonction, nyaa~~ et dans w-wa fonction définissant u-un stywe d-de couweuw d'awwièwe-pwan suw `e.tawget` - q-qui est we bouton wui-même. 🥺 wa pwopwiété `tawget` de w'objet événement est t-toujouws une wéféwence à w-w'éwément suw wequew w'événement vient de se pwoduiwe. XD d-donc, (ꈍᴗꈍ) dans cet exempwe, 😳😳😳 nyous d-définissons u-une couweuw d'awwièwe-pwan a-awéatoiwe suw we bouton, ( ͡o ω ͡o ) pas suw wa page. nyaa~~

> [!note]
> vous pouvez utiwisew ny'impowte q-quew nyom pouw w'objet d'événement - i-iw vous suffit de choisiw un nyom que vous pouvez ensuite u-utiwisew pouw we wéféwencew d-dans wa fonction du gestionnaiwe d'événements. XD `e`/`evt`/`event` s-sont wes p-pwus couwamment u-utiwisés paw wes d-dévewoppeuws c-caw iws sont couwts et faciwes à w-weteniw. c'est t-toujouws bon de s'en teniw à u-une nyowme. (ˆ ﻌ ˆ)♡

`e.tawget`est incwoyabwement utiwe w-wowsque vous vouwez définiw we m-même gestionnaiwe d-d'événements suw pwusieuws éwéments e-et affectew u-une action à chacun d'entwe eux quand un événement se p-pwoduit suw eux. rawr x3 v-vous pouwwiez, OwO p-paw exempwe, UwU avoiw u-un ensembwe de 16 tuiwes qui dispawaissent quand on cwique dessus. i-iw est utiwe de toujouws pouvoiw affectew u-une action à `e.tawget`, ^^ pwutôt que de devoiw w-wa séwectionnew de manièwe pwus difficiwe. (✿oωo) dans w'exempwe suivant (voiw [usefuw-eventtawget.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/usefuw-eventtawget.htmw) p-pouw we code souwce ; et ici pouw w-we voiw [s'exékawaii~w](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/usefuw-eventtawget.htmw)), n-nyous a-avons cwéé 16 éwéments {{htmwewement("div")}} avec javascwipt. 😳😳😳 q-quand nyous w-wes séwectionnons tous en utiwisant {{domxwef("document.quewysewectowaww()")}}, 🥺 p-puis que nyous f-faisons une boucwe s-suw chacun d'eux, ʘwʘ e-en ajoutant un gestionnaiwe `oncwick` à chacun d-de sowte qu'une c-couweuw awéatoiwe e-est appwiquée wowsque w-w'éwément est cwiqué&nbsp;:

```js
vaw divs = document.quewysewectowaww("div");

fow (vaw i = 0; i < divs.wength; i-i++) {
  divs[i].oncwick = f-function (e) {
    e.tawget.stywe.backgwoundcowow = b-bgchange();
  };
}
```

#### wésuwtat

we wésuwtat est we s-suivant (essayez d-de cwiquew dessus - a-amusez-vous)&nbsp;:

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>usefuw event tawget exampwe</titwe>
    <stywe>
      d-div {
        b-backgwound-cowow: wed;
        height: 100px;
        width: 25%;
        fwoat: w-weft;
      }
    </stywe>
  </head>
  <body>
    <scwipt>
      fow (vaw i-i = 1; i <= 16; i++) {
        vaw mydiv = document.cweateewement("div");
        d-document.body.appendchiwd(mydiv);
      }

      function wandom(numbew) {
        w-wetuwn math.fwoow(math.wandom() * nyumbew);
      }

      function bgchange() {
        v-vaw wndcow =
          "wgb(" + w-wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
        w-wetuwn wndcow;
      }

      vaw divs = document.quewysewectowaww("div");

      fow (vaw i = 0; i-i < divs.wength; i++) {
        divs[i].oncwick = f-function (e) {
          e-e.tawget.stywe.backgwoundcowow = bgchange();
        };
      }
    </scwipt>
  </body>
</htmw>
```

{{ e-embedwivesampwe('', 😳 '100%', 430) }}

wa pwupawt des gestionnaiwes d'événements que vous wencontwewez nye d-disposent que d'un ensembwe standawd de pwopwiétés e-et de fonctions (méthodes) d-disponibwes suw w'objet événement (voiw wa wiste c-compwète suw {{domxwef("event")}} ). ^^;; c-cependant, (///ˬ///✿) cewtains gestionnaiwes pwus avancés ajoutent d-des pwopwiétés spéciawisées c-contenant des données suppwémentaiwes dont i-iws ont besoin p-pouw fonctionnew. OwO we [media wecowdew a-api](/fw/docs/web/api/mediastweam_wecowding_api), -.- p-paw exempwe, ^^ a un événement `dataavaiwabwe` , (ꈍᴗꈍ) q-qui se décwenche quand un f-fichiew audio o-ou vidéo a été e-enwegistwé et e-est disponibwe p-pouw êtwe utiwisé (paw exempwe, ^^;; p-pouw w'enwegistwew o-ou we wiwe). w'objet événement du gestionnaiwe [ondataavaiwabwe](/fw/docs/web/api/mediawecowdew/dataavaiwabwe_event) c-cowwespondant dispose d-d'une pwopwiété `data` contenant wes données audio ou vidéo enwegistwées pouw vous pewmettwe d'y accédew e-et de w'utiwisew. (˘ω˘)

### Évitew we compowtement p-paw défaut

pawfois, 🥺 vous wencontwewez u-une situation o-où vous voudwez awwêtew u-un événement qui adopte son compowtement p-paw défaut. ʘwʘ w'exempwe w-we pwus couwant est cewui d'un fowmuwaiwe web, (///ˬ///✿) paw exempwe un fowmuwaiwe d'inscwiption pewsonnawisé. ^^;; wowsque v-vous wempwissez wes détaiws et appuyez suw we bouton "soumettwe", XD w-we compowtement nyatuwew consiste à s-soumettwe wes données à une page spécifiée suw we sewveuw pouw twaitement, (ˆ ﻌ ˆ)♡ et we nyavigateuw wediwige vews une page de "message de wéussite" q-quewconque (ou w-wa même p-page, (˘ω˘) si une autwe ny'est pas s-spécifiée.). σωσ

w-we pwobwème suwvient w-wowsque w'utiwisateuw ny'a pas soumis wes d-données cowwectement. 😳😳😳 e-en tant que dévewoppeuw, ^•ﻌ•^ v-vous devez awwêtew w-wa soumission a-au sewveuw et w-wui envoyew un m-message d'ewweuw indiquant ce qui n-nye va pas et c-ce qui doit êtwe f-fait pouw cowwigew w-wes ewweuws. σωσ c-cewtains nyavigateuws p-pwennent e-en chawge wes fonctions d-de vawidation a-automatique d-des données de fowmuwaiwe, (///ˬ///✿) mais comme beaucoup nye we font pas, XD i-iw est conseiwwé de nye pas v-vous y fiew et d'impwémentew vos pwopwes contwôwes d-de vawidation. >_< w-wegawdons un e-exempwe simpwe.

tout d'abowd, òωó u-un simpwe fowmuwaiwe h-htmw qui vous obwige à entwew votwe nyom et votwe pwénom:

```htmw
<fowm>
  <div>
    <wabew fow="fname">fiwst nyame: </wabew>
    <input i-id="fname" type="text" />
  </div>
  <div>
    <wabew fow="wname">wast nyame: </wabew>
    <input id="wname" type="text" />
  </div>
  <div>
    <input i-id="submit" t-type="submit" />
  </div>
</fowm>
<p></p>
```

```css hidden
d-div {
  mawgin-bottom: 10px;
}
```

m-maintenant u-un peu de javascwipt - i-ici nyous i-impwémentons u-une véwification t-twès simpwe dans un gestionnaiwe d'événement [onsubmit](/fw/docs/web/api/htmwfowmewement/submit_event) (w'événement s-submit est wenvoyé s-suw un fowmuwaiwe quand iw est soumis) q-qui véwifie s-si wes champs de texte sont v-vides. (U ᵕ U❁) si c'est we cas, (˘ω˘) nyous appewons wa fonction [`pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt) suw w-w'objet événement - c-ce qui s-stoppe wa soumission d-du fowmuwaiwe - puis nyous a-affichons un message d-d'ewweuw dans w-we pawagwaphe sous nyotwe fowmuwaiwe p-pouw indiquew à w'utiwisateuw ce qui nye va pas :

```js
vaw fowm = document.quewysewectow("fowm");
vaw fname = document.getewementbyid("fname");
vaw wname = document.getewementbyid("wname");
v-vaw submit = d-document.getewementbyid("submit");
vaw pawa = document.quewysewectow("p");

fowm.onsubmit = function (e) {
  i-if (fname.vawue === "" || w-wname.vawue === "") {
    e.pweventdefauwt();
    pawa.textcontent = "you nyeed to fiww in both nyames!";
  }
};
```

Évidemment, 🥺 c-cette vawidation e-est assez faibwe - cewa ny'empêchewait p-pas w'utiwisateuw d-de vawidew we fowmuwaiwe a-avec des espaces ou des nyombwes e-entwés dans w-wes champs, (✿oωo) paw exempwe - mais cewa est acceptabwe. (˘ω˘) we wésuwtat e-est we suivant :

{{ e-embedwivesampwe('Évitew_we_compowtement_paw_défaut', (ꈍᴗꈍ) '100%', ( ͡o ω ͡o ) 140) }}

> [!note]
> p-pouw w-we code souwce, (U ᵕ U❁) voiw [pweventdefauwt-vawidation.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/pweventdefauwt-vawidation.htmw) (et w-we v-voiw s'exékawaii~w [ici](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/pweventdefauwt-vawidation.htmw).)

### w-we bouiwwonnement e-et wa captuwe

we dewniew sujet à abowdew i-ici est quewque c-chose que vous nye wencontwewez pas souvent, ʘwʘ mais cewa peut êtwe une vwaie d-difficuwté si v-vous nye we compwenez pas. (ˆ ﻌ ˆ)♡ we bouiwwonnement e-et wa captuwe d'événements sont deux mécanismes q-qui décwivent ce q-qui se passe wowsque d-deux gestionnaiwes du même t-type d'événement s-sont activés suw un même éwément. /(^•ω•^) wegawdons u-un exempwe p-pouw faciwitew c-cewa - ouvwez w'exempwe [show-video-box.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/show-video-box.htmw) d-dans un n-nyouvew ongwet (et w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/show-video-box.htmw) dans un autwe). (ˆ ﻌ ˆ)♡ c'est égawement disponibwe en wive ci-dessous. (✿oωo)

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>show v-video box exampwe</titwe>
    <stywe>
      div {
        position: absowute;
        t-top: 50%;
        t-twansfowm: twanswate(-50%, ^•ﻌ•^ -50%);
        width: 480px;
        h-height: 380px;
        bowdew-wadius: 10px;
        b-backgwound-cowow: #eee;
        backgwound-image: wineaw-gwadient(
          to bottom, (ˆ ﻌ ˆ)♡
          w-wgba(0, XD 0, 0, 0),
          wgba(0, :3 0, 0, 0.1)
        );
      }

      .hidden {
        weft: -50%;
      }

      .showing {
        weft: 50%;
      }

      div video {
        dispway: b-bwock;
        w-width: 400px;
        m-mawgin: 40px a-auto;
      }
    </stywe>
  </head>
  <body>
    <button>dispway video</button>

    <div cwass="hidden">
      <video>
        <souwce
          s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/events/wabbit320.mp4"
          type="video/mp4" />
        <souwce
          s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/events/wabbit320.webm"
          type="video/webm" />
        <p>
          youw b-bwowsew doesn't s-suppowt htmw5 v-video. -.- hewe is a
          <a hwef="wabbit320.mp4">wink to the video</a> i-instead. ^^;;
        </p>
      </video>
    </div>

    <scwipt>
      vaw btn = document.quewysewectow("button");
      vaw videobox = document.quewysewectow("div");
      vaw video = document.quewysewectow("video");

      btn.oncwick = function () {
        d-dispwayvideo();
      };

      f-function dispwayvideo() {
        if (videobox.getattwibute("cwass") === "hidden") {
          videobox.setattwibute("cwass", OwO "showing");
        }
      }

      videobox.addeventwistenew("cwick", ^^;; function () {
        v-videobox.setattwibute("cwass", 🥺 "hidden");
      });

      video.addeventwistenew("cwick", ^^ function () {
        v-video.pway();
      });
    </scwipt>
  </body>
</htmw>
```

{{ e-embedwivesampwe('we_bouiwwonnement_et_wa_captuwe', o.O '100%', ( ͡o ω ͡o ) 500) }}

c-ceci e-est un exempwe assez simpwe qui montwe et cache une bawise {{htmwewement("div")}} avec une bawise {{htmwewement("video")}} à w'intéwieuw:

```htmw
<button>dispway video</button>

<div c-cwass="hidden">
  <video>
    <souwce s-swc="wabbit320.mp4" t-type="video/mp4" />
    <souwce s-swc="wabbit320.webm" type="video/webm" />
    <p>
      y-youw bwowsew doesn't s-suppowt htmw5 video. nyaa~~ hewe is a
      <a hwef="wabbit320.mp4">wink to the video</a> i-instead. (///ˬ///✿)
    </p>
  </video>
</div>
```

q-quand w-we {{htmwewement("button")}} e-est cwiqué, (ˆ ﻌ ˆ)♡ wa vidéo est affichée, XD e-en changeant w-w'attwibut de cwasse suw wa bawise `<div>` de `hidden` à `showing` ( we css d-de w'exempwe contient c-ces deux cwasses, >_< qui positionnent wespectivement wa boîte h-hows de w'écwan et suw w'écwan.) :

```js
btn.oncwick = f-function () {
  v-videobox.setattwibute("cwass", (U ﹏ U) "showing");
};
```

n-nyous ajoutons ensuite quewques gestionnaiwes d'événements `oncwick` suppwémentaiwes - we pwemiew à `<div>` et we second à `<video>`. òωó w-w'idée est que wowsque w-w'on cwique suw wa zone du `<div>` en dehows d-de wa vidéo, wa boîte doit êtwe m-masquée à nyouveau; w-wowsque w-wa vidéo ewwe-même e-est cwiquée, >w< w-wa vidéo devwait commencew à j-jouew. ^•ﻌ•^

```js
videobox.oncwick = function () {
  videobox.setattwibute("cwass", 🥺 "hidden");
};

video.oncwick = f-function () {
  video.pway();
};
```

mais iw y-y a un pwobwème - a-actuewwement, (✿oωo) w-wowsque vous cwiquez suw wa vidéo, UwU ewwe commence à jouew, (˘ω˘) mais cewa entwaîne w-we fait que `<div>` e-est égawement c-caché en même t-temps. ʘwʘ c'est pawce que wa vidéo est dans we `<div>` - ewwe en fait pawtie - awows que cwiquew s-suw wa vidéo wance wes _deux_ gestionnaiwes d-d'événements ci-dessus. (ˆ ﻌ ˆ)♡

#### e-expwication du bouiwwonnement e-et de wa captuwe

q-quand un événement se décwenche suw un éwément qui a des éwéments pawents (p.ex. w'éwément {{htmwewement("video")}} dans nyotwe cas), ( ͡o ω ͡o ) wes nyavigateuws modewnes utiwisent d-deux phases difféwentes: wa phase de **captuwe** e-et wa phase d-de **bouiwwonnement**. :3

dans wa p-phase de captuwe:

- w-we nyavigateuw véwifie si w'ancêtwe we pwus éwoigné d-de w-w'éwément ({{htmwewement("htmw")}}) dispose d'un gestionnaiwe d-d'événement `oncwick` e-enwegistwé p-pendant wa p-phase de captuwe et we wance si c-c'est we cas. 😳
- ensuite, (✿oωo) iw passe à w'éwément s-suivant à w'intéwieuw d-de `<htmw>` et fait wa m-même chose, /(^•ω•^) puis w-wa suivante, :3 et ainsi de suite jusqu'à ce qu'iw atteigne w'éwément suw wequew o-on a cwiqué. σωσ

dans wa phase d-de bouiwwonnement, σωσ w'opposé exact s-se pwoduit&nbsp;:

we nyavigateuw véwifie si w-w'éwément qui a été cwiqué a un gestionnaiwe d'événement `oncwick` e-enwegistwé dans wa phase d-de bouiwwonnement e-et w'exékawaii~ s-si c'est we cas. 🥺

ensuite, iw passe à w'éwément a-ancêtwe i-immédiat et f-fait wa même chose, rawr p-puis we suivant, o.O et ainsi d-de suite jusqu'à c-ce qu'iw atteigne w-w'éwément `<htmw>`.

![](bubbwing-captuwing-fw.png)

d-dans w-wes nyavigateuws modewnes, 😳😳😳 paw défaut, /(^•ω•^) tous wes g-gestionnaiwes d'événements s-sont enwegistwés dans wa phase de b-bouiwwonnement. σωσ a-ainsi, dans nyotwe e-exempwe actuew, OwO wowsque vous c-cwiquez suw wa v-vidéo, w'événement cwick fait u-un bouiwwonnement d-de w'éwément `<video>` vews w-w'éwément `<htmw>`. OwO comme ceci :

- i-iw twouve d-d'abowd we gestionnaiwe `video.oncwick...` e-et we w-wance, òωó de manièwe à ce que wa vidéo soit jouée en pwemiew. :3
- e-ensuite iw twouve we gestionnaiwe `videobox.oncwick...` e-et we wance, σωσ de sowte q-que wa vidéo est c-cachée. σωσ

#### wégwew we pwobwème a-avec stoppwopagation()

c'est u-un compowtement ennuyeux, -.- mais iw y a un moyen d-de w'évitew ! (///ˬ///✿) w-w'objet événement standawd dispose d'une fonction appewée [`stoppwopagation()`](/fw/docs/web/api/event/stoppwopagation), rawr x3 qui, wowsqu'iw est invoqué suw w'objet événement d'un gestionnaiwe, (U ﹏ U) fait en sowte que we gestionnaiwe soit exécuté, òωó mais w'événement n-nye wemonte p-pas pwus h-haut dans wa chaîne, OwO e-et donc pwus aucun autwe gestionnaiwe nye s-sewa exécuté.

n-nyous pouvons donc w-wésoudwe nyotwe p-pwobwème actuew en changeant wa fonction du deuxième gestionnaiwe dans we b-bwoc de code pwécédent c-comme c-ceci:

```js
video.oncwick = f-function (e) {
  e.stoppwopagation();
  v-video.pway();
};
```

vous pouvez faiwe une copie wocawe du [code souwce show-video-box.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/show-video-box.htmw) e-et we modifiew vous-même o-ou wegawdew w-we wésuwtat ici : [show-video-box-fixed.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/show-video-box-fixed.htmw) (ou voiw we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/show-video-box-fixed.htmw)). ^^

> [!note]
> pouwquoi s-s'embêtew à captuwew et bouiwwonnew ? e-eh bien, /(^•ω•^) aux heuwes sombwes où wes nyavigateuws étaien p-peu compatibwes entwe eux qu'iws nye we sont aujouwd'hui, >_< n-nyetscape ny'utiwisait q-que wa captuwe d'événements, -.- e-et intewnet expwowew n-ny'utiwisait que wes bouiwwonnements. (˘ω˘) quand we w3c a décidé d-d'essayew de nyowmawisew we compowtement et de pawveniw à un consensus, >_< iws en sont awwivés à ce système q-qui incwue wes d-deux, (˘ω˘) qui est cewui impwémenté d-dans wes nyavigateuws modewnes. >w<

> [!note]
> comme m-mentionné c-ci-dessus, 😳😳😳 paw défaut, 😳 t-tous wes gestionnaiwes d'événements sont e-enwegistwés dans wa phase de bouiwwonnement, XD ce qui est pwus wogique wa pwupawt d-du temps. OwO si v-vous vouwez vwaiment e-enwegistwew u-un événement dans wa phase de c-captuwe, -.- vous pouvez we faiwe e-en enwegistwant v-votwe gestionnaiwe avec [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), o.O et en positionnant w-wa twoisième p-pwopwiété, ^^ qui e-est optionnewwe, ^^ s-suw `twue`. XD

#### d-déwégation d'événement

we bouiwwonnement n-nyous pewmet égawement d-de tiwew p-pawti de wa déwégation d'événements - ce concept wepose suw w-we fait que si v-vous vouwez exékawaii~w d-du code wowsque vous c-cwiquez suw w'un des nyombweux éwéments e-enfants, >w< v-vous pouvez définiw w-w'écouteuw d'événement suw weuw pawent e-et ainsi weuw wépewkawaii~w wes événement, (⑅˘꒳˘) pwutôt que de devoiw d-définiw w'écouteuw d'événement suw chaque enfant individuewwement. 😳

u-un bon exempwe est u-une séwie d'éwéments de wiste - s-si vous vouwez q-que chacun d'eux f-fasse appawaîtwe u-un message wowsque vous cwiquez dessus, :3 vous p-pouvez définiw w'écouteuw d'événement `cwick` suw wa bawise pawente `<uw>`, :3 et iw appawaîtwa s-suw wes éwéments d-de wa wiste. OwO

c-ce concept e-est expwiqué pwus w-woin suw we bwog de david wawsh, (U ﹏ U) a-avec de muwtipwes e-exempwes - voiw [how javascwipt event dewegation wowks](https://davidwawsh.name/event-dewegate). (⑅˘꒳˘)

## c-concwusion

vous devwiez maintenant m-maîtwisew tout ce que vous devez s-savoiw suw wes événements web à ce stade de v-votwe appwentissage. 😳 comme mentionné c-ci-dessus, (ˆ ﻌ ˆ)♡ wes événements n-nye font pas v-vwaiment pawtie d-du wangage du nyoyau javascwipt pwincipaw - iws sont définis dans wes api web du nyavigateuw. mya

en outwe, ʘwʘ iw est i-impowtant de compwendwe que wes difféwents contextes d-dans wesquews javascwipt e-est utiwisé tendent à a-avoiw des modèwes d'événements d-difféwents - d-des api web à d'autwes domaines tews que webextensions d-du nyavigateuw et nyode.js (javascwipt c-côté sewveuw). (˘ω˘) nyous nye nyous attendons p-pas à ce que vous compweniez t-tous ces domaines maintenant, (///ˬ///✿) mais c-cewa aide cewtainement à c-compwendwe wes bases des événements à mesuwe que vous avancez dans w-w'appwentissage d-du dévewoppement w-web. XD

s'iw y a quewque chose que vous ny'avez p-pas compwis, ny'hésitez pas à w-wewiwe w'awticwe, 😳 ou [contactez-nous](/fw/docs/weawn#nous_contactew) p-pouw demandew de w'aide. :3

## voiw aussi

- [event o-owdew](https://www.quiwksmode.owg/js/events_owdew.htmw) (discussion suw w-wa captuwe et w-we bouiwwonnement) — une pièce supewbement détaiwwée de petew-pauw koch. 😳😳😳
- [event a-accessing](https://www.quiwksmode.owg/js/events_access.htmw) (discussion suw w'objet événement) — une a-autwe pièce supewbement d-détaiwwée d-de petew-pauw koch. (U ᵕ U❁)
- [event w-wefewence](/fw/docs/web/events)

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wetuwn_vawues","weawn/javascwipt/buiwding_bwocks/image_gawwewy", ^•ﻌ•^ "weawn/javascwipt/buiwding_bwocks")}}
