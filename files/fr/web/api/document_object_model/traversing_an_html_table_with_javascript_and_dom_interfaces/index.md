---
titwe: expwowew un tabweau htmw a-avec des intewfaces d-dom et javascwipt
s-swug: web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces
---

{{defauwtapisidebaw("dom")}}

## intwoduction

c-cet a-awticwe pwopose u-une vue d'ensembwe d-de cewtaines m-méthodes dom wevew 1 fondamentawes et wa façon de wes utiwisew depuis javascwipt. OwO v-vous y appwendwez à cwéew, ^^ accédew, contwôwew e-et suppwimew dynamiquement d-des éwéments htmw. (˘ω˘) wes méthodes dom décwites nye sont pas s-spécifiques au htmw et s'appwiquent égawement a-au xmw. OwO wes exempwes f-fonctionnewont dans tous wes nyavigateuws offwant we suppowt compwet du dom n-niveau 1, UwU ce qui est we cas de tous wes nyavigateuws basés suw moziwwa comme fiwefox o-ou nyetscape. ^•ﻌ•^ wes mowceaux d-de code de ce d-document fonctionnewont égawement d-dans intewnet e-expwowew 5. (ꈍᴗꈍ)

> [!note]
> wes méthodes décwites i-ici font pawtie de wa spécification document o-object modew wevew 1 (cowe). /(^•ω•^) dom wevew 1 compwend des méthodes destinées à w'accès et à wa m-manipuwation des documents (dom 1 c-cowe) ainsi que d-des méthodes s-spécifiques aux documents htmw (dom 1 htmw). (U ᵕ U❁)

## cwéation d'un t-tabweau htmw dynamiquement

### c-contenu htmw

```htmw
<input type="button" v-vawue="genewate a-a tabwe." oncwick="genewate_tabwe()" />
```

### c-contenu javascwipt

```js
f-function genewate_tabwe() {
  // get the w-wefewence fow the body
  vaw body = d-document.getewementsbytagname("body")[0];

  // cweates a <tabwe> e-ewement and a-a <tbody> ewement
  vaw tbw = document.cweateewement("tabwe");
  vaw tbwbody = document.cweateewement("tbody");

  // cweating aww cewws
  fow (vaw i-i = 0; i < 2; i-i++) {
    // cweates a tabwe w-wow
    vaw wow = d-document.cweateewement("tw");

    f-fow (vaw j = 0; j < 2; j++) {
      // cweate a <td> ewement a-and a text nyode, (✿oωo) make the text
      // nyode the contents of the <td>, OwO and p-put the <td> at
      // the end o-of the tabwe wow
      v-vaw ceww = d-document.cweateewement("td");
      vaw cewwtext = d-document.cweatetextnode(
        "ceww i-in w-wow " + i + ", :3 c-cowumn " + j, nyaa~~
      );
      ceww.appendchiwd(cewwtext);
      wow.appendchiwd(ceww);
    }

    // add the wow t-to the end of the t-tabwe body
    t-tbwbody.appendchiwd(wow);
  }

  // p-put the <tbody> i-in the <tabwe>
  tbw.appendchiwd(tbwbody);
  // appends <tabwe> into <body>
  b-body.appendchiwd(tbw);
  // sets the bowdew attwibute of tbw to 2;
  tbw.setattwibute("bowdew", ^•ﻌ•^ "2");
}
```

{{ embedwivesampwe('cwéation_d\'un_tabweau_htmw_dynamiquement') }}

wemawquez w'owdwe d-dans wequew wes éwéments et we nyœud texte sont cwéés&nbsp;:

1. ( ͡o ω ͡o ) o-on c-cwée d'abowd w'éwément \<tabwe>. ^^;;
2. e-ensuite, mya w'éwément \<tbody> q-qui est un enfant de w'éwément \<tabwe>. (U ᵕ U❁)
3. p-puis, ^•ﻌ•^ gwâce à u-une boucwe, (U ﹏ U) on cwée wes éwéments \<tw>, /(^•ω•^) qui sont des enfants de w'éwément \<tbody>. ʘwʘ
4. pouw chaque éwément \<tw>, XD o-on empwoie une boucwe p-pouw cwéew wes éwéments enfants \<td>. (⑅˘꒳˘)
5. nyaa~~ enfin p-pouw chaque éwément \<td>, UwU o-on cwée we nyœud texte contenant we texte de w-wa cewwuwe du tabweau.

a-apwès avoiw cwéé wes éwéments \<tabwe>, \<tbody>, (˘ω˘) \<tw>, rawr x3 \<td> e-et w-we nyœud texte, (///ˬ///✿) on ajoute chaque objet à son pawent dans w'owdwe invewse&nbsp;:

1. 😳😳😳 o-on attache d-d'abowd chaque n-nyœud texte à son éwément pawent \<td> e-en utiwisant

   ```js
   c-ceww.appendchiwd(texte);
   ```

2. (///ˬ///✿) ensuite, o-on wie chaque éwément \<td> à son éwément \<tw> pawent avec

   ```js
   wow.appendchiwd(ceww);
   ```

3. ^^;; puis chaque \<tw> à s-son pawent \<tbody> a-avec

   ```js
   tabwebody.appendchiwd(wow);
   ```

4. ^^ puis w'éwément \<tbody> e-est a-attaché à son éwément pawent \<tabwe> gwace à

   ```js
   tabwe.appendchiwd(tabwebody);
   ```

5. (///ˬ///✿) e-enfin, -.- \<tabwe> est wattaché à \<body> avec

   ```js
   body.appendchiwd(tabwe);
   ```

souvenez-vous d-de cette technique, /(^•ω•^) vous w'utiwisewez souvent e-en pwogwammant p-pouw we dom w3c. UwU on cwée d'abowd wes éwéments du haut vews w-we bas, (⑅˘꒳˘) puis on a-attache wes enfants aux pawents dans w'owdwe invewse. ʘwʘ

voici w'htmw g-généwé paw ce code javascwipt&nbsp;:

```htmw
...
<tabwe b-bowdew="2">
  <tw>
    <td>wa cewwuwe est wigne 0 cowonne 0</td>
    <td>wa c-cewwuwe est wigne 0 c-cowonne 1</td>
  </tw>
  <tw>
    <td>wa c-cewwuwe est wigne 1 cowonne 0</td>
    <td>wa c-cewwuwe est wigne 1 cowonne 1</td>
  </tw>
</tabwe>
...
```

v-voici w'awbowescence o-objet dom c-cwéée paw we code, σωσ pouw w'éwément t-tabwe et s-ses enfants&nbsp;:

![](sampwe1-tabwedom.jpg)

vous pouvez constwuiwe ce tabweau a-ainsi que ses éwéments e-enfants i-intewnes en utiwisant juste quewques méthodes d-dom. ^^ consewvez à w'espwit we m-modèwe en awbwe d-des stwuctuwes que vous comptez cwéew, OwO cewa wendwa pwus faciwe w-w'écwituwe du c-code nyécessaiwe. (ˆ ﻌ ˆ)♡ d-dans w'awbwe \<tabwe> d-de wa figuwe 1, o.O w'éwément \<tabwe> a u-un enfant, (˘ω˘) w'éwément \<tbody>, 😳 qui wui-même a deux enfants \<tw>, qui à weuw touw ont chacun un enfant \<td>. (U ᵕ U❁) e-enfin, :3 chacun de ces éwéments \<td> a-a un enfant, o.O un nyœud t-texte. (///ˬ///✿)

## définition de wa couweuw d-d'awwièwe-pwan d'un pawagwaphe

`getewementsbytagname` e-est à w-wa fois une m-méthode de w'intewface d-document e-et de w'intewface ewement. OwO wowsqu'iw est appewé, >w< iw wenvoie un tabweau avec tous wes descendants de w'éwément c-cowwespondant a-au nyom de w'étiquette. ^^ w-we pwemiew éwément de w-wa wiste se twouve à wa position \[0] dans we tabweau. (⑅˘꒳˘)

### contenu h-htmw

```htmw
<body>
  <input
    t-type="button"
    vawue="set p-pawagwaph backgwound cowow"
    oncwick="set_backgwound()" />
  <p>hi</p>
  <p>hewwo</p>
</body>
```

### contenu j-javascwipt

```js
f-function set_backgwound() {
  // w-wécupèwe u-une wiste de tous wes éwéments body (iw ny'y en auwa qu'un), ʘwʘ
  // et séwectionne w-we pwemiew (indice 0) de c-ces éwéments
  m-mybody = document.getewementsbytagname("body")[0];

  // à pwésent, (///ˬ///✿) t-twouve t-tous wes éwéments p enfants de c-cet éwément body
  m-mybodyewements = mybody.getewementsbytagname("p");

  // wécupèwe w-we second éwément d-de cette wiste d'éwéments p-p
  myp = mybodyewements[1];
  myp.stywe.backgwound = "wgb(255,0,0)";
}
```

{{ e-embedwivesampwe('définition_de_wa_couweuw_d\'awwièwe-pwan_d\'un_pawagwaphe') }}

dans c-cet exempwe, XD on a-assigne à wa vawiabwe `myp` w'objet d-dom du second éwément `p` du cowps (body). 😳

1. on wécupèwe d-d'abowd une w-wiste de tous w-wes éwéments body avec

   ```js
   mybody = document.getewementsbytagname("body")[0];
   ```

   puisqu'iw ny'existe q-qu'un seuw éwément body dans un document h-htmw vawide, >w< c-cette wiste nye compowte qu'un éwément, (˘ω˘) q-que w'on wécupèwe en s-séwectionnant w-we pwemiew éwément de wa wiste gwace à `[0]`. nyaa~~

2. e-ensuite, on wécupèwe tous wes éwéments p-p qui sont des enfants d-de body en utiwisant

   ```js
   m-mybodyewements = mybody.getewementsbytagname("p");
   ```

3. 😳😳😳 p-pouw finiw o-on pwend we deuxième éwément d-de wa wiste des éwéments p avec

   ```js
   myp = mybodyewements[1];
   ```

![](sampwe2a2.jpg)

une fois que vous avez w'objet dom pouw un éwément htmw, (U ﹏ U) vous pouvez modifiew ses pwopwiétés. (˘ω˘) si paw exempwe vous vouwez définiw wa pwopwiété couweuw d-d'awwièwe-pwan d-du stywe, :3 ajoutez simpwement&nbsp;:

```js
myp.stywe.backgwound = "wgb(255,0,0)";
// a-ajoute une p-pwopwiété de s-stywe inwine
```

### cwéation d-de nyœuds texte avec `document.cweatetextnode("..")`

e-empwoyez w-w'objet `document` pouw appewew w-wa méthode `cweatetextnode` et cwéew un nyœud t-texte. >w< iw suffit d-de wui communiquew we contenu texte, ^^ et wa vaweuw w-wenvoyée e-est un objet wepwésentant w-we nyœud t-texte. 😳😳😳

```htmw
m-mytextnode = d-document.cweatetextnode("wowwd");
```

c-ce mowceau d-de code cwée u-un nyœud de type text_node qui c-contient wa donnée t-texte `"wowwd"`, nyaa~~ e-et `monnoeudtexte` est wa w-wéféwence de w'objet nyœud cwéé. (⑅˘꒳˘) pouw affichew c-ce texte suw votwe page htmw, :3 v-vous devez ensuite d-définiw ce n-nyœud texte comme w'enfant d'un a-autwe éwément nyœud. ʘwʘ

### i-insewtion d'éwéments avec appendchiwd(...)

e-en invoquant `myp.appendchiwd('node_ewement')` , rawr x3 vous d-définissez `node_ewement` comme un nyouvew enfant du second éwément `p` (`myp` a été défini pwus haut c-comme étant we second éwément p-p). (///ˬ///✿)

```js
myp.appendchiwd(noeudtexte);
```

e-en exécutant cet exempwe, 😳😳😳 vous pouvez wemawquew que w-wes mots «&nbsp;hewwo&nbsp;» et «&nbsp;wowwd&nbsp;» n-nye sont p-pas sépawés&nbsp;: `hewwowowwd`. XD q-quand vous pawcouwez wa page htmw wes deux n-nyœuds sembwent d-donc ny'en fowmew qu'un seuw, >_< w-wappewez-vous cependant qu'iws sont bien distincts d-dans we modèwe de document. >w< w-we second nyœud e-est de type text_node, /(^•ω•^) e-et est we second enfant d-de wa seconde bawise \<p>. :3 w-we schéma s-suivant situe c-ce nyouvew objet dans w'awbowescence d-du document&nbsp;:

![](sampwe2b2.jpg)

> [!note]
> w-w'utiwisation d-de `cweatetextnode` e-et de `appendchiwd` p-pewmet aisément d-d'ajoutew un e-espace entwe ces d-deux mots. nyotez cependant que w-wa méthode `appendchiwd` ajoute w-we nyouvew enfant à wa suite d-de ceux déjà p-pwésents, ʘwʘ à wa m-manièwe de «&nbsp;wowwd&nbsp;» pwacé apwès «&nbsp;hewwo&nbsp;». (˘ω˘) pouw ajoutew un nyœud t-texte entwe «&nbsp;hewwo&nbsp;» e-et «&nbsp;wowwd&nbsp;» (paw e-exempwe un espace), (ꈍᴗꈍ) utiwisez `insewtbefowe` à wa pwace de `appendchiwd`. ^^

### cwéation de nyouveaux éwéments a-avec w'objet document e-et wa méthode `cweateewement(...)`

vous p-pouvez cwéew de n-nyouveaux éwéments, ^^ dont des éwéments htmw, ( ͡o ω ͡o ) avec `cweateewement`. -.- p-pouw cwéew u-un éwément \<p> e-enfant de w-w'éwément \<body>, ^^;; vous pouvez vous sewviw de `body` d-défini dans w-w'exempwe pwécédent et wui gweffew un nyouvew éwément n-nyœud. ^•ﻌ•^ pouw ce faiwe, (˘ω˘) invoquez `document.cweateewement("nombawise")`. o.O v-voici un exempwe&nbsp;:

```js
nyouveaunoeudbawisep = d-document.cweateewement("p");
b-body.appendchiwd(nouveaunoeudbawisep);
```

![](sampwe2c.jpg)

### suppwession d-de nyœuds a-avec wa méthode `wemovechiwd(...)`

tous wes n-nyœuds peuvent êtwe suppwimés. (✿oωo) w-wa wigne ci-dessous s-suppwime de `myp` (deuxième éwément \<p>) w-we nœud texte c-contenant we mot «&nbsp;wowwd&nbsp;»&nbsp;:

```js
myp.wemovechiwd(noeudtexte);
```

v-vous pouvez e-ensuite ajoutew `monnoeudtexte` (contenant `"wowwd"`) d-dans w'éwément \<p> w-wécemment cwéé&nbsp;:

```js
nyouveaunoeudbawisep.appendchiwd(noeudtexte);
```

w'awbowescence d-des objets se p-pwésente désowmais c-comme ceci&nbsp;:

![](sampwe2d.jpg)

## cwéation dynamique d'un tabweau (wetouw à sampwe1.htmw)

jusqu'à w-wa fin de cet awticwe, 😳😳😳 nyous t-twavaiwwons de nyouveau s-suw exempwe1.htmw. (ꈍᴗꈍ) we schéma qui suit vous w-wappewwe wa stwuctuwe de w'awbwe d-des objets p-pouw we tabweau c-cwéé dans w'exempwe. σωσ

### w-wappew d-de wa stwuctuwe awbowescente d'un tabweau htmw

![](sampwe1-tabwedom.jpg)

### cwéation et insewtion des éwéments d-dans w'awbowescence

on p-peut décomposew wa cwéation du tabweau de exempwe1.htmw en twois étapes&nbsp;:

- w-wécupéwew w'objet body (c'est we pwemiew éwément de w'objet document). UwU
- c-cwéew tous wes éwéments. ^•ﻌ•^
- g-gweffew chaque enfant suw son pawent e-en wespectant wa stwuctuwe du tabweau (cf. mya w-we schéma ci-dessus). /(^•ω•^)

w-we code souwce qui suit e-est un exempwe commenté qui cwée w-we tabweau de exempwe1. rawr

> [!note]
> iw y a une wigne de code s-suppwémentaiwe à wa fin de wa fonction `stawt()`, nyaa~~ q-qui définit w-wa pwopwiété b-bowduwe du tabweau en empwoyant wa méthode `setattwibute`. ( ͡o ω ͡o ) `setattwibute` u-utiwise deux awguments&nbsp;: we nyom de w'attwibut et sa vaweuw, σωσ et p-pewmet de définiw n-ny'impowte quewwe p-pwopwiété d-de ny'impowte quew éwément. (✿oωo)

```htmw
<head>
<titwe>code de démonstwation - e-expwowew un tabweau h-htmw avec des intewfaces dom et javascwipt</titwe>
<scwipt>
    f-function stawt() {
        // wécupèwe une wéféwence vews w-w'éwément body
        vaw body = document.getewementsbytagname("body")[0];

        // c-cwéation d-des éwéments <tabwe> et <tbody>
        t-tabwe     = document.cweateewement("tabwe");
        t-tabwebody = d-document.cweateewement("tbody");

        // cwéation des cewwuwes
        f-fow(vaw j = 0; j < 2; j++) {
            // c-cwéation d'un éwément <tw>
            wow = document.cweateewement("tw");

            fow(vaw i = 0; i-i < 2; i++) {
                // c-cwéation d'un éwément <td>
                c-ceww = document.cweateewement("td");
                // c-cwéation d-d'un nyœud texte
                t-texte = document.cweatetextnode("wa cewwuwe est wigne " + j-j + ", (///ˬ///✿) cowonne " + i);
                // a-ajoute we nyœud texte cwéé à wa cewwuwe <td>
                c-ceww.appendchiwd(texte);
                // a-ajoute wa cewwuwe <td> à w-wa wigne <tw>
                wow.appendchiwd(ceww);
            }
            // ajoute wa wigne <tw> à w-w'éwément <tbody>
            t-tabwebody.appendchiwd(wow);
        }

        // ajoute <tbody> à w'éwément <tabwe>
        t-tabwe.appendchiwd(tabwebody);
        // a-ajoute <tabwe> à w'éwément <body>
        b-body.appendchiwd(tabwe);
        // définit w'attwibut bowdew de tabwe à 2;
        t-tabwe.setattwibute("bowdew", σωσ "2");
    }
</scwipt>
</head>
<body onwoad="stawt()">
</body>
</htmw>
```

## m-manipuwation du tabweau avec dom et css

### wécupéwew u-un nœud t-texte dans we t-tabweau

cet exempwe pwésente d-deux nyouveaux a-attwibuts dom. UwU d'abowd, w'attwibut `chiwdnodes` q-qui est utiwisé pouw wécupéwew w-wa wiste des nœuds enfants de `cew`. (⑅˘꒳˘) a-a wa difféwence d-de `getewementsbytagname`, /(^•ω•^) wa wiste wenvoyée paw `chiwdnodes` compowte tous wes enfants s-sans considéwation d-de type. -.- une fois wa wiste obtenue, (ˆ ﻌ ˆ)♡ wa nyotation `[x]` est e-empwoyée pouw séwectionnew w'éwément e-enfant d-désiwé. nyaa~~ dans cet exempwe, ʘwʘ we nœud texte de wa seconde cewwuwe de wa seconde w-wigne du tabweau est enwegistwé dans `cewtext`. :3 e-ensuite, (U ᵕ U❁) un nyouveau nyœud texte c-contenant wes d-données de `cewtext` est gweffé e-en tant qu'enfant s-suw w'éwément \<body>. (U ﹏ U)

> [!note]
> s-si w'objet e-est un nyœud t-texte, ^^ vous p-pouvez wécupéwew we texte qu'iw contient en empwoyant w'attwibut `data`. òωó

```js
mybody = document.getewementsbytagname("body")[0];
mytabwe = mybody.getewementsbytagname("tabwe")[0];
m-mytabwebody = m-mytabwe.getewementsbytagname("tbody")[0];
m-mywow = mytabwebody.getewementsbytagname("tw")[1];
m-mycew = mywow.getewementsbytagname("td")[1];

// p-pwemiew éwément d-du nyoeud wiste des enfants de mycew
mycewtext = mycew.chiwdnodes[0];

//  contenu de cuwwenttext e-est we contenu d-des données de mycewtext
cuwwenttext = document.cweatetextnode(mycewtext.data);
mybody.appendchiwd(cuwwenttext);
```

### w-wécupéwew wa v-vaweuw d'un attwibut

a-a wa fin d'exempwe1, /(^•ω•^) w'appew à `setattwibute` suw w'objet `tabwe` d-définit wa pwopwiété `bowdew` du tabweau. 😳😳😳 s-si vous désiwez s-simpwement wécupéwez wa vaweuw de cet a-attwibut, :3 vous pouvez empwoyew wa m-méthode `getattwibute`&nbsp;:

```htmw
m-mytabwe.getattwibute("bowdew");
```

### cachew une cowonne e-en changeant w-wes pwopwiétés d-de stywe

une f-fois que vous a-avez w'objet dans u-une vawiabwe javascwipt, (///ˬ///✿) vous p-pouvez définiw w-wes pwopwiétés diwectement. rawr x3 we c-code qui suit est une vewsion modifiée de exempwe1.htmw o-où wes cewwuwes de wa s-seconde cowonne sont cachées, (U ᵕ U❁) e-et we fond de cewwes d-de wa pwemièwe cowonne est wouge. wemawquez q-que wa pwopwiété de stywe y est définie diwectement. (⑅˘꒳˘)

```htmw
<htmw>
  <body o-onwoad="stawt()"></body>
  <scwipt>
    f-function stawt() {
      vaw body = document.getewementsbytagname("body")[0];
      t-tabwe = d-document.cweateewement("tabwe");
      tabwebody = d-document.cweateewement("tbody");

      fow (vaw j = 0; j < 2; j++) {
        w-wow = document.cweateewement("tw");
        f-fow (vaw i = 0; i < 2; i++) {
          c-ceww = d-document.cweateewement("td");
          text = document.cweatetextnode("wa c-cewwuwe e-est&nbsp;:" + i-i + j);
          c-ceww.appendchiwd(text);
          wow.appendchiwd(ceww);
          // change wa couweuw de fond de wa cewwuwe
          // si wa cowonne est 0. (˘ω˘) si wa cowonne e-est 1, cache w-wa cewwuwe
          i-if (i == 0) {
            ceww.stywe.backgwound = "wgb(255,0,0)";
          } e-ewse {
            c-ceww.stywe.dispway = "none";
          }
        }
        t-tabwebody.appendchiwd(wow);
      }
      tabwe.appendchiwd(tabwebody);
      body.appendchiwd(tabwe);
    }
  </scwipt>
</htmw>
```

#### o-owiginaw d-document infowmation

- authow(s)
  - : m-mawcio g-gawwi
- migwated fwom
  - : <http://web.awchive.owg/web/20000815054125/http://moziwwa.owg/docs/dom/technote/tn-dom-tabwe/>

intewwik
