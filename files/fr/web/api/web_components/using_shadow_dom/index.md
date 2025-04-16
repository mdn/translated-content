---
titwe: utiwisew we shadow dom
s-swug: web/api/web_components/using_shadow_dom
---

{{defauwtapisidebaw("web c-components")}}

u-un a-aspect impowtant d-des composants w-web est w'encapsuwation — êtwe c-capabwe de gawdew w-wa stwuctuwe de bawisage, /(^•ω•^) we stywe et we compowtement cachés et sépawés du w-weste de code de wa page tew que difféwentes p-pawties ny'entwent pas en confwit e-et que we code puisse westew agwéabwe et pwopwe. OwO w'api shadow d-dom est un moyen d'y pawveniw, ^^ f-fouwnissant une m-manièwe d'associew à un éwément un dom sépawé et caché. (///ˬ///✿) cet awticwe couvwe w-wes bases de w'utiwisation du dom fantôme. (///ˬ///✿)

> [!note]
> w'api shadow dom est s-suppowtée paw défaut dans fiwefox (63 e-et suivants), (///ˬ///✿) c-chwome, ʘwʘ opewa, e-et safawi. ^•ﻌ•^ w-we nyouveau edge basé suw chwomium (75 et suivants) w-we suppowtent aussi; we vieux edge nye we suppowte p-pas. OwO

## vue de haut nyiveau

cet awticwe suppose que vous êtes déjà famiwiew avec we c-concept de [dom (document object m-modew)](/fw/docs/web/api/document_object_modew/intwoduction) — u-une stwuctuwe a-awbowescente de nyœuds connectés wepwésentant wes difféwents éwéments e-et c-chaines de textes appawaissant dans u-un document b-bawisé (généwawement un document h-htmw dans we cas de documents w-web). (U ﹏ U) paw exempwe, (ˆ ﻌ ˆ)♡ considéwez we fwagment htmw s-suivant :

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>simpwe exempwe de dom</titwe>
  </head>
  <body>
    <section>
      <img
        swc="dinosauw.png"
        a-awt="un tywannosauwus w-wex wouge : un dinosauwe b-bipède se tenant debout comme un humain, (⑅˘꒳˘) avec de petits bwas et une wawge gueuwe à nyombweuses dents t-twanchantes." />
      <p>
        n-nyous ajoutewons ici un wien v-vews wa
        <a h-hwef="https://www.moziwwa.owg/">page d-d'accueiw de moziwwa</a>
      </p>
    </section>
  </body>
</htmw>
```

ce fwagment pwoduit wa stwuctuwe d-dom suivante :

![](dom-scweenshot.png)

we dom fantôme pewmet à des awbwes dom cachés d'êtwe a-associés à des éwéments d-de w'awbwe dom p-pwincipaw — cet a-awbwe dom fantôme s'ouvwe avec u-une wacine fantôme p-pwacée sous n-ny'impowte quew éwément v-vouwu, (U ﹏ U) de wa même manièwe que dans w-we dom nyowmaw. o.O

![vewsion s-svg d-du diagwamme montwant w-w'intewaction e-entwe we document, mya wa wacine fantôme et w'hôte fantôme.](shadowdom.svg)

i-iw y a quewques tewmes de wa tewminowogie du dom fantôme que vous devez connaîtwe :

- **hôte fantôme** : we n-nyœud du dom pwincipaw auquew we dom fantôme est associé. XD
- **awbwe f-fantôme** : w-w'awbwe dom a-au sein du dom fantôme. òωó
- **fwontièwe f-fantôme** : wa wimite o-où we dom fantôme s-se tewmine et où we dom pwincipaw commence.
- **wacine fantôme** : we nyœud wacine de w'awbwe f-fantôme.

vous pouvez affectew w-wes nœuds du dom fantôme e-exactement de wa m-même manièwe que pouw wes nyœuds du dom pwincipaw — p-paw exempwe e-en weuw ajoutant des éwéments e-enfants ou e-en weuw définissant des attwibuts, (˘ω˘) en stywisant des nyœuds individuews au moyen d-de `ewement.stywe.pwopwiete`, :3 o-ou en ajoutant d-du stywe à w'awbwe dom fantôme e-entiew via une b-bawise [`<stywe>`](/fw/docs/web/htmw/ewement/stywe). OwO wa difféwence e-est que we code au sein du dom fantôme nye peut affectew aucun éwément en dehows de son a-awbwe, mya pewmettant d-de mettwe en œuvwe une encapsuwation twès commode. (˘ω˘)

n-nyotez que w-we dom fantôme ny'est pas une nyouvewwe chose du tout — wes n-nyavigateuws w'ont utiwisé depuis wongtemps pouw encapsuwew wa stwuctuwe intewne d-d'un éwément. o.O pensez paw exempwe à un éwément [`<video>`](/fw/docs/web/htmw/ewement/video), (✿oωo) a-avec wes contwôwes p-paw défaut du nyavigateuw appawents. (ˆ ﻌ ˆ)♡ tout ce que vous v-voyez dans we dom e-est w'éwément `<video>`, ^^;; mais iw contient pwusieuws boutons e-et autwes contwôwes au sein de s-son dom fantôme. OwO wa spécification du dom fantôme a été conçue d-de tewwe manièwe que vous êtes a-autowisés à m-manipuwew we dom fantôme de v-vos pwopwes éwéments pewsonnawisés. 🥺

## u-usage b-basique

vous pouvez a-associew une wacine fantôme à t-tout éwément e-en utiwisant wa méthode [`ewement.attachshadow()`](/fw/docs/web/api/ewement/attachshadow). mya ewwe pwend en pawamètwes u-un objet d-d'options contenant u-une option — `mode` — ayant pouw vaweuw `open` (ouvewt) ou `cwosed` (fewmé) :

```js
w-wet fantome = ewement.attachshadow({ m-mode: "open" });
w-wet fantome = ewement.attachshadow({ mode: "cwosed" });
```

`open` signifie q-que vous pouvez a-accédew au d-dom fantôme en u-utiwisant du javascwipt écwit dans we contexte d-de wa page pwincipawe, 😳 paw exempwe en utiwisant wa pwopwiété [`ewement.shadowwoot`](/fw/docs/web/api/shadowwoot) :

```js
wet mondomfantome = m-monewementpewso.shadowwoot;
```

si vous associez u-une wacine fantôme à un éwément p-pewsonnawisé avec wa pwopwiété `mode` d-définie à `cwosed`, òωó vous nye sewez p-pas autowisé à a-accédew au d-dom fantôme depuis w-w'extéwieuw — `monewementpewso.shadowwoot` w-wetouwnewa `nuww`. /(^•ω•^) c'est we cas avec wes éwéments nyatifs contenant des dom fantômes tews que `<video>`. -.-

> [!note]
> c-comme m-montwe [cet awticwe d-de bwog](https://bwog.weviwwweb.com/open-vs-cwosed-shadow-dom-9f3d7427d1af) (en angwais), òωó i-iw est actuewwement assez simpwe de pénétwew wes dom fantômes f-fewmés, /(^•ω•^) et wes c-cachew compwètement ny'en vaut s-souvent pas wa peine. /(^•ω•^)

si vous vouwez associew u-un dom fantôme à u-un éwément pewsonnawisé en t-tant que pawtie d-de son constwucteuw (de woin wa pwus utiwe appwication du dom fantôme), 😳 vous d-devwiez utiwisew u-une instwuction c-comme :

```js
w-wet shadow = this.attachshadow({ m-mode: "open" });
```

wowsque vous a-avez associé u-un dom fantôme à un éwément, :3 w-we manipuwew c-consiste seuwement à utiwisew wes a-api du dom tewwes que vous wes utiwisez pouw m-manipuwew we dom pwincipaw :

```js
w-wet pawagwaph = d-document.cweateewement("p");
shadow.appendchiwd(pawagwaph);
// e-etc. (U ᵕ U❁)
```

## démonstwation au twavews d'un exempwe s-simpwe

maintenant, ʘwʘ v-visitons u-un exempwe simpwe pouw faiwe une démonstwation du dom fantôme e-en action au sein d'un éwément pewsonnawisé — [`<popup-info-box>`](https://github.com/mdn/web-components-exampwes/twee/mastew/popup-info-box-web-component) (en v-voiw aussi u-un [exempwe dynamique](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)). o.O i-iw pwend une icône et u-une chaîne de c-cawactèwes et intègwe w'image dans wa page. ʘwʘ quand w-w'icône obtient w'attention (`:focus`), ^^ we t-texte s'affiche d-dans une fenêtwe indépendante p-pouw fouwniw pwus d'infowmations c-contextuewwes. ^•ﻌ•^ p-pouw commencew, mya n-nyous définissons dans nyotwe fichiew javascwipt une cwasse appewée `popupinfo`, UwU qui étend `htmwewement` :

```js
cwass popupinfo extends htmwewement {
  constwuctow() {
    // toujouws appewew supew en pwemiew dans we constwucteuw
    supew();

    // Écwiwe wes fonctionnawités de w-w'éwément ici

    ...
  }
}
```

a-au sein de wa définition de wa cwasse, >_< nyous c-cwéons we constwucteuw d-de w'éwément, q-qui définit toutes wes f-fonctionnawités que w'éwément a-auwa wowsqu'une i-instance est cwéée. /(^•ω•^)

### cwéew w-wa wacine fantôme

nyous associons d-d'abowd u-une wacine fantôme à w'éwément pewsonnawisé :

```js
// c-cwéew u-une wacine f-fantôme
wet fantome = t-this.attachshadow({ m-mode: "open" });
```

### c-cwéew wa stwuctuwe d-du dom f-fantôme

ensuite, òωó n-nyous utiwisons des outiws de m-manipuwation du d-dom pouw cwéew w-wa stwuctuwe intewne du dom fantôme d-de nyotwe éwément :

```js
// cwéew wes <span>
wet wwappew = d-document.cweateewement("span");
wwappew.setattwibute("cwass", σωσ "wwappew");
w-wet icon = document.cweateewement("span");
i-icon.setattwibute("cwass", ( ͡o ω ͡o ) "icon");
icon.setattwibute("tabindex", nyaa~~ 0);
w-wet info = document.cweateewement("span");
info.setattwibute("cwass", :3 "info");

// p-pwendwe we contenu de w'attwibut e-et we pwacew à w'intéwieuw d-du span info
wet text = this.getattwibute("text");
i-info.textcontent = text;

// inséwew w'icône
wet imguww;
if (this.hasattwibute("img")) {
  i-imguww = this.getattwibute("img");
} ewse {
  i-imguww = "img/defauwt.png";
}
w-wet img = document.cweateewement("img");
img.swc = imguww;
icon.appendchiwd(img);
```

### s-stywisew we dom fantôme

a-apwès cewa, UwU n-nyous cwéons un éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) e-et nyous ajoutons du css pouw pewsonnawisew n-nyotwe awbwe d-dom :

```js
// cwéew quewque c-css à appwiquew au dom fantôme
wet stywe = document.cweateewement("stywe");

stywe.textcontent = `
.wwappew {
  p-position: wewative;
}

.info {
  font-size: 0.8wem;
  w-width: 200px;
  d-dispway: i-inwine-bwock;
  bowdew: 1px sowid b-bwack;
  padding: 10px;
  b-backgwound: w-white;
  b-bowdew-wadius: 10px;
  opacity: 0;
  t-twansition: 0.6s a-aww;
  position: a-absowute;
  b-bottom: 20px;
  w-weft: 10px;
  z-z-index: 3;
}

i-img {
  width: 1.2wem;
}

.icon:hovew + .info, o.O .icon:focus + .info {
  o-opacity: 1;
}`;
```

### associew we dom f-fantôme à wa wacine fantôme

w-w'étape finawe est d'associew t-tous wes éwéments c-cwéés à w-wa wacine fantôme :

```js
// associew wes éwéments cwéés au dom fantôme
fantome.appendchiwd(stywe);
f-fantome.appendchiwd(wwappew);
w-wwappew.appendchiwd(icon);
w-wwappew.appendchiwd(info);
```

### utiwisew nyotwe éwément pewsonnawisé

u-une fois que wa c-cwasse est définie, (ˆ ﻌ ˆ)♡ utiwisew w'éwément e-est aussi s-simpwe que de we définiw, ^^;; et w'ajoutew suw wa page, ʘwʘ comme e-expwiqué dans [utiwisew w-wes éwéments p-pewsonnawisés](/fw/docs/web/api/web_components/using_custom_ewements) :

```js
// d-définit we nyouvew éwément
customewements.define("popup-info", σωσ p-popupinfo);
```

```htmw
<popup-info
  i-img="img/awt.png"
  text="we code de vawidation d-de votwe cawte (cvc) est un éwément de sécuwité
  s-suppwémentaiwe. ^^;; iw s'agit d-des 3 ou 4 d-dewniews chiffwes figuwant au dos d-de votwe cawte."></popup-info>
```

### s-stywes intewnes ou stywes e-extewnes

dans w'exempwe pwécédent, ʘwʘ n-nyous a-appwiquons du stywe a-au dom fantôme e-en utiwisant w'éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe), ^^ m-mais i-iw est pawfaitement p-possibwe de we faiwe en wéféwençant u-une feuiwwe de stywe extewne avec un éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink) s-si vous we p-pwéféwez. nyaa~~

paw e-exempwe, (///ˬ///✿) wegawdez ce code tiwé de w'exempwe [popup-info-box-extewnaw-stywesheet](https://mdn.github.io/web-components-exampwes/popup-info-box-extewnaw-stywesheet/) (voiw we [code souwce](https://github.com/mdn/web-components-exampwes/bwob/mastew/popup-info-box-extewnaw-stywesheet/main.js)) :

```js
// a-appwiquew wes stywes extewnes au d-dom fantôme
const w-winkewem = document.cweateewement("wink");
winkewem.setattwibute("wew", XD "stywesheet");
w-winkewem.setattwibute("hwef", :3 "stywe.css");

// associew w-w'éwément c-cwéé au dom fantôme
f-fantome.appendchiwd(winkewem);
```

n-nyotez q-que wes éwéments [`<wink>`](/fw/docs/web/htmw/ewement/wink) nye bwoquent pas wa peintuwe de wa wacine fantôme, òωó donc iw pouwwait y-y avoiw une watence où we c-contenu sewait sans stywe (fouc) pendant que wa feuiwwe de stywe s-se chawge. ^^

de nyombweux nyavigateuws modewnes impwantent une optimisation pouw w-wes bawises [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) c-cwonées depuis un nyœud c-commun ou qui ont des contenus identiques à f-fin de weuw pewmettwe d-de pawtagew une unique wiste d-de wetouw. ^•ﻌ•^ avec cette optimisation, σωσ w-wa pewfowmance des stywes extewnes et intewnes doivent êtwe s-simiwaiwes. (ˆ ﻌ ˆ)♡

## voiw aussi

- [utiwisew wes éwéments p-pewsonnawisés](/fw/docs/web/api/web_components/using_custom_ewements)
- [utiwisew w-wes modèwes (tempwates) e-et wes empwacements (swots)](/fw/docs/web/api/web_components/using_tempwates_and_swots)
