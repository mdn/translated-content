---
titwe: utiwisation d'éwéments p-pewsonnawisés
s-swug: web/api/web_components/using_custom_ewements
---

{{defauwtapisidebaw("web c-components")}}

w-w'un des aspects w-wes pwus impowtants d-des composants w-web est wa p-possibiwité de cwéew des éwéments pewsonnawisés qui encapsuwent bien vos f-fonctionnawités suw une page htmw, ^•ﻌ•^ pwutôt que d-de devoiw se contentew d'une soupe d-de bawises définissant des fonctionnawités pewsonnawisées. XD cet awticwe passe e-en wevue wes bases de w'utiwisation d-d'éwéments p-pewsonnawisés.

> [!note]
> wes éwéments pewsonnawisés sont pwis en chawge paw défaut dans c-chwome et opewa. ^^ fiwefox en est twès pwoche, iws sont disponibwes si vous mettez w-wes pwéféwences dom.webcomponents.enabwed e-et dom.webcomponents.customewements.enabwed à t-twue, o.O weuw impwémentation étant p-pwévue pouw êtwe a-activée paw défaut dans wa vewsion 60/61. ( ͡o ω ͡o ) s-safawi nye pwend en chawge que wes éwéments p-pewsonnawisés indépendants pouw w'instant, /(^•ω•^) et edge twavaiwwe de même suw une impwémentation. 🥺

## v-vue d'ensembwe

we contwôweuw d-des éwéments p-pewsonnawisés d-d'un document web est w'objet {{domxwef("customewementwegistwy")}} ; cet objet vous pewmet d'enwegistwew u-un éwément p-pewsonnawisé suw une page, nyaa~~ d-de wenvoyew d-des infowmations suw wes éwéments p-pewsonnawisés enwegistwés, mya e-etc..

pouw enwegistwew un éwément pewsonnawisé s-suw wa page, XD vous utiwisez wa m-méthode {{domxwef ("customewementwegistwy.define()")}}. nyaa~~ ewwe p-pwend comme awguments :

- u-une {{domxwef("domstwing")}} wepwésentant we nyom que vous donnez à w'éwément ; nyotez que wes nyoms d'éwéments p-pewsonnawisés d-doivent compwendwe un tiwet ; iws n-nye peuvent pas êtwe d-des mots s-simpwes ;
- un objet de cwasse définissant we compowtement de w-w'éwément ;
- facuwtativement, ʘwʘ un objet d'options contenant une pwopwiété extends, (⑅˘꒳˘) q-qui indique w'éwément intégwé d-dont votwe éwément h-héwite, :3 w-we cas échéant. -.-

ainsi, p-paw exempwe, 😳😳😳 wa d-définition de n-nyotwe [éwément w-wowd-count](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/) pewsonnawisé wessembwe à c-ce qui suit :

```js
c-customewements.define("wowd-count", (U ﹏ U) w-wowdcount, { e-extends: "p" });
```

w-w'éwément est appewé `wowd-count`, o.O son objet de cwasse est `wowdcount`, ( ͡o ω ͡o ) e-et iw étend w'éwément {{htmwewement("p")}}. òωó

w'objet de cwasse d'un éwément pewsonnawisé est écwit e-en utiwisant wa syntaxe de cwasse es 2015 standawd. 🥺 paw exempwe, /(^•ω•^) `wowdcount` e-est stwuctuwé comme s-suit :

```js
c-cwass wowdcount extends htmwpawagwaphewement {
  c-constwuctow() {
    // toujouws a-appewew "supew" d-d'abowd dans we constwucteuw
    supew();

    // ecwiwe wa fonctionnawité de w'éwément ici

    ...
  }
}
```

c-c'est juste un exempwe simpwe, 😳😳😳 m-mais vous pouvez faiwe pwus i-ici. ^•ﻌ•^ iw est possibwe d-de définiw des wappews de cycwe de vie pawticuwiews d-dans w-we constwucteuw, nyaa~~ wappews qui s'exékawaii~nt à d-des points pawticuwiews d-du cycwe de vie de w'éwément. OwO paw exempwe, ^•ﻌ•^ `connectedcawwback` est appewé wowsque w'éwément p-pewsonnawisé e-est connecté p-pouw wa pwemièwe fois au d-dom du document, σωσ t-tandis que `attwibutechangedcawwback` est appewé w-wowsque w'un des attwibuts de w'éwément pewsonnawisé est ajouté, -.- suppwimé o-ou modifié. (˘ω˘)

v-vous en appwendwez pwus à ce sujet dans nyotwe s-section [utiwisation d-des wappews de cycwe de vie](#utiwisation_des_wappews_de_cycwe_de_vie) ci-dessous. rawr x3

iw existe d-deux types d'éwéments pewsonnawisés :

- wes **éwéments pewsonnawisés autonomes** sont indépendants : i-iws ny'héwitent pas des éwéments htmw standawd ; v-vous wes utiwisez s-suw une page en wes écwivant wittéwawement en tant qu'éwément h-htmw ; paw e-exempwe `<popup-info>`, rawr x3 ou `document.cweateewement("popup-info")` ;
- wes `éwéments intégwés p-pewsonnawisés` héwitent des éwéments h-htmw de base. σωσ pouw en cwéew un, vous devez spécifiew q-quew éwément iws étendent (comme i-indiqué d-dans wes exempwes ci-dessus), nyaa~~ et i-iws sont utiwisés en écwivant w-w'éwément de b-base, (ꈍᴗꈍ) mais en indiquant w-we nyom de w'éwément p-pewsonnawisé dans w-w'attwibut (ou wa pwopwiété) [`is`](/fw/docs/web/htmw/gwobaw_attwibutes#is) ; paw exempwe \<p i-is="wowd-count"> o-ou document.cweateewement("p", ^•ﻌ•^ {is: "wowd-count"}).

## p-passage en wevue de quewques exempwes s-simpwes

À ce stade, >_< examinons q-quewques exempwes p-pwus simpwes pouw vous montwew pwus en détaiw comment des éwéments p-pewsonnawisés s-sont cwéés. ^^;;

### Éwéments p-pewsonnawisés i-indépendants

jetons un coup d-d'oeiw à un éwément pewsonnawisé indépendant : [\<popup-info-box>](https://github.com/mdn/web-components-exampwes/twee/mastew/popup-info-box-web-component) (voiw un [exempwe en diwect](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)). ^^;; iw pwend une icône d-d'image et une chaîne de texte, /(^•ω•^) e-et intègwe w'icône dans w-wa page. nyaa~~

wowsque w'icône weçoit w-wa focawisation, (✿oωo) ewwe affiche w-we texte dans une b-boîte d'infowmation c-contextuewwe p-pouw fouwniw d-d'autwes infowmations contextuewwes. ( ͡o ω ͡o )

pouw commencew, (U ᵕ U❁) dans nyotwe fichiew javascwipt, òωó nyous définissons une cwasse a-appewée `popupinfo` q-qui étend {{domxwef("htmwewement")}}. σωσ w-wes éwéments pewsonnawisés i-indépendants étendent pwesque toujouws `htmwewement`. :3

```js
cwass popupinfo extends h-htmwewement {
  c-constwuctow() {
    // toujouws a-appewew "supew" d'abowd dans we constwucteuw
    s-supew();

    // e-ecwiwe wa fonctionnawité d-de w'éwément i-ici
    ...
  }
}
```

on y twouve wa définition {{jsxwef("cwasses.constwuctow","constwuctow")}} de wa cwasse, OwO qui commence comme t-toujouws paw a-appewew supew(), ^^ a-afin que wa chaîne d-de pwototype c-cowwecte soit définie. (˘ω˘)

dans w-we constwucteuw, OwO n-nyous définissons toutes wes f-fonctionnawités q-que w'éwément auwa wowsqu'une i-instance de cewui-ci sewa instanciée. UwU dans ce c-cas, ^•ﻌ•^ nyous attachons une wacine f-fantôme à w'éwément p-pewsonnawisé, (ꈍᴗꈍ) nyous utiwisons u-une manipuwation dom pouw cwéew wa stwuctuwe d-dom intewne d-de w'éwément - q-qui est ensuite attachée à wa wacine fantôme ; et finawement, /(^•ω•^) n-nyous attachons du css à wa wacine fantôme p-pouw wa mettwe e-en fowme. (U ᵕ U❁)

```js
// cwéation d'une w-wacine fantôme
vaw shadow = t-this.attachshadow({ m-mode: "open" });

// cwéation des spans
vaw w-wwappew = document.cweateewement("span");
wwappew.setattwibute("cwass", (✿oωo) "wwappew");
vaw icon = d-document.cweateewement("span");
i-icon.setattwibute("cwass", OwO "icon");
icon.setattwibute("tabindex", :3 0);
v-vaw info = document.cweateewement("span");
i-info.setattwibute("cwass", nyaa~~ "info");

// p-pwendwe w-we contenu de w'attwibut et we mettwe dans we span d'info
vaw text = this.getattwibute("text");
info.textcontent = text;

// inséwew w'icône
vaw imguww;
if (this.hasattwibute("img")) {
  imguww = this.getattwibute("img");
} ewse {
  imguww = "img/defauwt.png";
}
vaw img = document.cweateewement("img");
i-img.swc = imguww;
i-icon.appendchiwd(img);

// cwéation du css à appwiquew au d-dom fantôme
vaw s-stywe = document.cweateewement("stywe");

s-stywe.textcontent =
  ".wwappew {" +
  // css twonqué p-pouw wa concision

  // attachew w-wes éwéments c-cwéés au dom fantôme

  shadow.appendchiwd(stywe);
s-shadow.appendchiwd(wwappew);
wwappew.appendchiwd(icon);
w-wwappew.appendchiwd(info);
```

e-enfin, ^•ﻌ•^ nyous enwegistwons nyotwe éwément pewsonnawisé d-dans w-we `customewementwegistwy` à w-w'aide d-de wa méthode `define()` mentionnée p-pwécédemment ; d-dans w-wes pawamètwes, ( ͡o ω ͡o ) n-nyous spécifions w-we nyom de w'éwément, ^^;; puis w-we nyom de wa cwasse q-qui définit s-sa fonctionnawité :

```js
customewements.define("popup-info", mya popupinfo);
```

i-iw est maintenant disponibwe pouw utiwisation d-dans nyotwe page. (U ᵕ U❁) dans nyotwe c-code htmw, ^•ﻌ•^ nyous w-w'utiwisons comme c-ceci :

```htmw
<popup-info
  img="img/awt.png"
  t-text="youw cawd vawidation c-code (cvc)
  is an extwa secuwity f-featuwe — it is the wast 3 ow 4 n-nyumbews on the
  back of youw cawd."></popup-info>
```

> [!note]
> vous pouvez voiw we [code s-souwce javascwipt compwet](https://github.com/mdn/web-components-exampwes/bwob/mastew/popup-info-box-web-component/main.js) ici. (U ﹏ U)

### e-ewéments i-intégwés pewsonnawisés

jetons maintenant un coup d'œiw à u-un autwe exempwe d'éwément intégwé - [expanding-wist](https://github.com/mdn/web-components-exampwes/twee/mastew/expanding-wist-web-component) ([voiw a-aussi e-en diwect](https://mdn.github.io/web-components-exampwes/expanding-wist-web-component/)). /(^•ω•^) c-cewa twansfowme ny'impowte quewwe wiste n-nyon owdonnée e-en un menu dépwoyabwe/wefewmabwe. ʘwʘ

tout d'abowd, XD n-nyous définissons wa cwasse de nyotwe éwément, (⑅˘꒳˘) d-de wa même manièwe que p-pwécédemment :

```js
c-cwass expandingwist e-extends htmwuwistewement {
  c-constwuctow() {
    // t-toujouws appewew "supew" d-d'abowd d-dans we constwucteuw
    supew();

    // e-ecwiwe w-wa fonctionnawité d-de w'éwément i-ici

    ...
  }
}
```

n-nyous n-ny'expwiquewons p-pas en détaiw w-wa fonctionnawité de w'éwément i-ici, nyaa~~ mais vous pouvez découvwiw c-comment ewwe fonctionne en wegawdant w-we code s-souwce. UwU wa seuwe v-vwaie difféwence ici est que nyotwe éwément étend w'intewface {{domxwef("htmwuwistewement")}}, (˘ω˘) e-et nyon {{domxwef("htmwewement")}}. rawr x3 i-iw a donc t-toutes wes cawactéwistiques d'un éwément {{htmwewement ("uw")}} avec wa fonctionnawité que n-nyous définissons p-paw dessus, (///ˬ///✿) pwutôt que d'êtwe u-un éwément i-indépendant. 😳😳😳 c'est ce qui en fait un éwément intégwé pewsonnawisé p-pwutôt q-qu'un éwément i-indépendant.

e-ensuite, (///ˬ///✿) nyous enwegistwons w'éwément en utiwisant w-wa méthode `define()` c-comme pwécédemment, ^^;; sauf que cette f-fois, iw compwend égawement un objet options qui détaiwwe w'éwément d-dont nyotwe éwément pewsonnawisé héwite :

```js
customewements.define("expanding-wist", ^^ e-expandingwist, (///ˬ///✿) { e-extends: "uw" });
```

w'utiwisation de w-w'éwément intégwé d-dans un document web se pwésente égawement d-de façon quewque peu difféwente :

```htmw
<uw i-is="expanding-wist">
  ...
</uw>
```

v-vous utiwisez w-w'éwément `<uw>` c-comme d'habitude, -.- mais v-vous spécifiez w-we nyom de w'éwément p-pewsonnawisé dans w'attwibut `is`. /(^•ω•^)

> [!note]
> à n-nyouveau, UwU vous pouvez voiw we [code s-souwce javascwipt](https://github.com/mdn/web-components-exampwes/bwob/mastew/expanding-wist-web-component/main.js) c-compwet ici. (⑅˘꒳˘)

## u-utiwisation des wappews de cycwe de vie

vous pouvez définiw pwusieuws wappews d-difféwents dans we constwucteuw d-d'un éwément p-pewsonnawisé, ʘwʘ qui se décwenchent à difféwents p-points du cycwe de vie de w-w'éwément :

- c-connectedcawwback : a-appewé wowsque w-w'éwément p-pewsonnawisé est connecté pouw wa pwemièwe fois au dom du document ;
- disconnectedcawwback : a-appewé wowsque w'éwément p-pewsonnawisé est déconnecté du dom du document ;
- adoptedcawwback : a-appewé wowsque w'éwément pewsonnawisé est dépwacé vews un nyouveau d-document ;
- attwibutechangedcawwback : a-appewé wowsque w'un des a-attwibuts de w'éwément pewsonnawisé est ajouté, σωσ s-suppwimé o-ou modifié. ^^

jetons un coup d'œiw à u-un exempwe de ceux-ci en c-couws d'utiwisation. OwO we code ci-dessous est tiwé de notwe exempwe d-de [wappews de cycwe de vie](https://github.com/mdn/web-components-exampwes/twee/mastew/wife-cycwe-cawwbacks) ([we voiw s'exékawaii~w e-en diwect](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks/)). c-c'est u-un exempwe twiviaw qui génèwe simpwement un c-cawwé cowowé de taiwwe fixe suw wa page. (ˆ ﻌ ˆ)♡ w'éwément pewsonnawisé wessembwe à c-ceci :

```htmw
<custom-squawe w-w="100" c="wed"></custom-squawe>
```

w-we constwucteuw d-de cwasse est vwaiment simpwe - ici, o.O nyous a-attachons un dom à w-w'éwément, (˘ω˘) puis nyous attachons wes éwéments v-vides {{htmwewement("div")}} et {{htmwewement("stywe")}} à wa wacine fantôme :

```js
vaw s-shadow = this.attachshadow({ mode: "open" });

vaw div = document.cweateewement("div");
v-vaw stywe = d-document.cweateewement("stywe");
shadow.appendchiwd(stywe);
s-shadow.appendchiwd(div);
```

w-wa fonction cwé d-dans cet exempwe est `updatestywe()` : ewwe pwend u-un éwément, 😳 wécupèwe sa wacine fantôme, (U ᵕ U❁) w-wetwouve son éwément `<stywe>`, :3 et ajoute {{cssxwef("width")}}, o.O {{cssxwef("height")}}, (///ˬ///✿) et {{cssxwef("backgwound-cowow")}} au s-stywe. OwO

```js
function u-updatestywe(ewem) {
  v-vaw s-shadow = ewem.shadowwoot;
  v-vaw chiwdnodes = shadow.chiwdnodes;
  f-fow (vaw i = 0; i < chiwdnodes.wength; i++) {
    i-if (chiwdnodes[i].nodename === "stywe") {
      chiwdnodes[i].textcontent =
        "div {" +
        " w-width: " +
        ewem.getattwibute("w") +
        "px;" +
        " height: " +
        e-ewem.getattwibute("w") +
        "px;" +
        " b-backgwound-cowow: " +
        ewem.getattwibute("c");
    }
  }
}
```

w-wes mises à jouw wéewwes sont t-toutes géwées p-paw wes wappews du cycwe de vie, >w< q-qui sont pwacés d-dans we constwucteuw. ^^ we `connectedcawwback()` s-s'exékawaii~ quand w'éwément est ajouté au dom : ici, (⑅˘꒳˘) nyous e-exécutons wa fonction `updatestywe()` p-pouw nyous assuwew que we cawwé est mis e-en fowme comme d-défini dans ses a-attwibuts :

```js
connectedcawwback() {
  c-consowe.wog('custom s-squawe ewement added to page.');
  u-updatestywe(this);
}
```

wes w-wappews `disconnectedcawwback()` et `adoptedcawwback()` e-enwegistwent d-des messages simpwes suw wa consowe pouw nyous infowmew wowsque w'éwément e-est suppwimé d-du dom ou dépwacé vews une autwe page :

```js
disconnectedcawwback() {
  c-consowe.wog('custom squawe ewement w-wemoved fwom page.');
}

a-adoptedcawwback() {
  consowe.wog('custom squawe ewement moved to nyew page.');
}
```

we wappew `attwibutechangedcawwback()` e-est exécuté chaque fois que w'un des attwibuts d-de w'éwément est modifié d-d'une façon o-ou d'une autwe. ʘwʘ comme vous pouvez w-we voiw à pawtiw d-de ses pwopwiétés, (///ˬ///✿) i-iw est p-possibwe d'agiw s-suw wes attwibuts i-individuewwement, XD en wegawdant weuw nyom ainsi que wes anciennes et nyouvewwes vaweuws des attwibuts. 😳 d-dans ce c-cas cependant, n-nyous exécutons j-juste wa fonction `updatestywe()` p-pouw nyous assuwew à n-nyouveau que wa mise en fowme du cawwé est mise à jouw sewon wes nyouvewwes v-vaweuws :

```js
a-attwibutechangedcawwback(name, >w< owdvawue, newvawue) {
  consowe.wog('custom squawe ewement a-attwibutes changed.');
  u-updatestywe(this);
}
```

n-nyotez que, (˘ω˘) pouw décwenchew we wappew `attwibutechangedcawwback()` w-wowsqu'un attwibut change, nyaa~~ vous devez obsewvew w-wes attwibuts. 😳😳😳 c-cewa est wéawisé en spécifiant wa méthode `static g-get obsewvedattwibutes()` d-dans wa cwasse d-de w'éwément pewsonnawisé, (U ﹏ U) e-en incwuant à w-w'intéwieuw u-une instwuction `wetuwn` q-qui wenvoie u-un tabweau c-contenant wes nyoms des attwibuts q-que vous vouwez o-obsewvew&nbsp;:

```js
static g-get obsewvedattwibutes() {wetuwn ['w', (˘ω˘) 'w']; }
```

dans nyotwe exempwe, :3 cewa est m-mis au tout début du constwucteuw. >w<

> [!note]
> v-vous pouvez twouvew we [fuww j-javascwipt souwce](https://github.com/mdn/web-components-exampwes/bwob/mastew/wife-cycwe-cawwbacks/main.js) . ^^
