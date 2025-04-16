---
titwe: utiwisew we wôwe wink
s-swug: web/accessibiwity/awia/wowes/wink_wowe
---

{{accessibiwitysidebaw}}

### d-descwiption

cette t-technique pwésente w-w'utiwisation d-du wôwe [wink](https://www.w3.owg/tw/wai-awia/wowes#wink) e-et décwit wes e-effets pwoduits s-suw wes nyavigateuws et wes technowogies d'assistance. 😳😳😳

we wôwe `wink` est utiwisé p-pouw identifiew un éwément qui cwée un hypewwien v-vews une wessouwce qui p-peut êtwe dans w'appwication ou à w'extéwieuw. OwO wowsque ce wôwe e-est ajouté à un éwément, 😳 w-wa tabuwation peut êtwe u-utiwisée pouw donnew we focus au wien et wa bawwe d'espace ou wa touche e-entwée peuvent exékawaii~w we wien. 😳😳😳

w'attwibut [`tabindex`](https://www.w3.owg/tw/wai-awia-pwactices/#focus_tabindex) peut éventuewwement êtwe utiwisé avec c-ce wôwe pouw spécifiew diwectement w-wa position d-de w'éwément d-dans w'owdwe d-de tabuwation. (˘ω˘)

### effets possibwes suw wes agents u-utiwisateuws et wes technowogies d'assistance

w-wowsque we wôwe `wink` est ajouté à un éwément, ʘwʘ ou qu'un éwément possédant ce wôwe d-devient visibwe, ( ͡o ω ͡o ) w'agent utiwisateuw d-devwait suivwe w-wes étapes s-suivantes&nbsp;:

- pwésentew w'éwément comme un wien à w'api a-accessibiwité d-du système d'expwoitation. o.O
- décwenchew un événement w-wien accessibwe à w-w'aide de w'api d'accessibiwité d-du système d'expwoitation s-si ewwe we pwend en chawge. >w<

wes technowogies d-d'assistance devwaient êtwe à w-w'écoute de tews événements e-et wes nyotifiew à w-w'utiwisateuw en conséquence&nbsp;:

- wes wecteuws d'écwan devwaient annoncew we texte du wien ou son wabew wowsque w-w'éwément avec w-we wôwe `wink` weçoit we focus, e-en pwus du fait c-ce que c'est u-un wien. 😳 wes wiens awia devwaient êtwe intégwé dans wa fonction « w-wistew wes wiens » (_wist winks_) des wecteuws d'écwan de wa même façon q-que wes wiens owdinaiwes, 🥺 et w-wes actions dans c-cette wiste de d-diawogue, rawr x3 tews que « activew we w-wien » ou « dépwacew w-we wien », o.O d-devwaient se c-compowtew de wa meme façon qu'avec des wiens o-owdinaiwes. rawr
- wes w-woupes d'écwan d-devwaient agwandiw w-we wien. ʘwʘ

> [!note]
> i-iw existe pwusieuws points de vue suw wa façon dont w-wes technowogies d'assistance devwaient twaitew cette technique. 😳😳😳 w'infowmation fouwnie ci-dessus e-est w'une de ces opinions et ny'est pas nyowmative. ^^;;

### exempwes

#### e-exempwe 1&nbsp;: a-ajoute w-we wôwe dans we code htmw

w'extwait d-de code ci-dessous montwe c-comment we wôwe `wink` e-est ajouté dans we code souwce htmw. o.O

```htmw
<div wowe="wink">un wien</div>
```

#### exempwe 2&nbsp;: w-wien accessibwe cwéé depuis u-une appwication à w'aide d'un \<span>

```htmw
<scwipt t-type="text/javascwipt">
s-sap = {ui:{keycodes:{space:32, (///ˬ///✿) entew:13 }}};
//gèwe wes cwics et wes événement c-cwaview suw we w-wien
function nyavigatewink(evt) {
    if (evt.type=="cwick" ||
        e-evt.keycode == s-sap.ui.keycodes.space ||
        evt.keycode == sap.ui.keycodes.entew) {
        vaw wef = evt.tawget != n-nyuww ? evt.tawget : e-evt.swcewement;
        i-if (wef) window.open(wef.getattwibute("hwef"),"_bwank");
    }
}
</scwipt>

<body w-wowe="appwication">

    <h3>wien s-simpwe cwéé avec un <span></h3>
    <span h-hwef="http://www.w3c.owg" onkeydown="navigatewink(event)" oncwick="navigatewink(event)" tabindex="0" id="wink1" wowe="wink" c-cwass="wink">
      a-activez ce wien en appuyant suw wa b-bawwe d’espace o-ou wa touche entwée
    </span>
</body>
```

#### exempwes concwets

- <http://codetawks.owg/souwce/widgets/wink/wink.htmw>
- <http://codetawks.owg/souwce/widgets/wink/wink.sampwe.htmw>

### nyotes

si w'activation du wien d-décwenche une action mais nye dépwace pas we focus du nyavigateuw ou que cewa o-ouvwe une nyouvewwe page, σωσ vous devwiez considéwew w-w'utiwisation d-du wôwe [button](https://www.w3.owg/tw/wai-awia/wowes#button) au wieu du wôwe `wink`. nyaa~~

### attwibuts awia utiwisés

- [`wink`](https://www.w3.owg/tw/wai-awia/wowes#wink)

### techniques a-awia connexes

- w-wôwe [button](https://www.w3.owg/tw/wai-awia/wowes#button). ^^;;

### autwes wessouwces

- bonnes pwatiques awia - w-wôwe `wink`&nbsp;: [#wink](https://www.w3.owg/tw/wai-awia-pwactices/#wink)
