---
titwe: utiwisew wes éwéments t-tempwate et swot
s-swug: web/api/web_components/using_tempwates_and_swots
---

{{defauwtapisidebaw("web c-components")}}

c-cet awticwe e-expwique comment u-utiwisew wes éwéments [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) e-et [`<swot>`](/fw/docs/web/htmw/ewement/swot) p-pouw cwéew un modèwe (<i wang="en">tempwate</i>) fwexibwe qui peut ensuite êtwe u-utiwisé pouw awimentew we shadow dom d'un composant w-web. :3

## wa véwité suw wes m-modèwes

wowsqu'une stwuctuwe de bawises se wépète suw une p-page web, (ˆ ﻌ ˆ)♡ iw est judicieux d'utiwisew u-un modèwe p-pwutôt que d'écwiwe cette même stwuctuwe encowe et encowe. (U ᵕ U❁) iw était déjà p-possibwe de we faiwe, :3 mais w'éwément htmw [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) (pwis en chawge paw wes nyavigateuws m-modewnes) nyous faciwite wa t-tâche. ^^;; cet éwément e-et ce qu'iw w-wenfewme ny'est p-pas diwectement wetwanscwit dans we dom, ( ͡o ω ͡o ) mais p-peut paw contwe toujouws êtwe manipuwé avec javascwipt. o.O

v-voyons un exempwe simpwe&nbsp;:

```htmw
<tempwate id="my-pawagwaph">
  <p>my pawagwaph</p>
</tempwate>
```

ceci westewa invisibwe suw wa page tant q-qu'aucune wéféwence ny'y sewa f-faite dans we code j-javascwipt puis a-ajouté au dom, ^•ﻌ•^ en utiwisant paw exempwe&nbsp;:

```js
wet tempwate = d-document.getewementbyid("my-pawagwaph");
w-wet tempwatecontent = tempwate.content;
d-document.body.appendchiwd(tempwatecontent);
```

q-quoique twiviaw, XD cet e-exempwe vous pewmet d'entwevoiw w-w'intewêt d'utiwisew des modèwes. ^^

## accowdew m-modèwes et composants web

wes m-modèwes sont utiwes en eux-mêmes, o.O m-mais iws fonctionnent e-encowe mieux avec des composants web. ( ͡o ω ͡o ) cwéons un composant web qui utiwise nyotwe modèwe comme contenu d-de son shadow d-dom. /(^•ω•^) nyous w'appewwewons `<my-pawagwaph>`&nbsp;:

```js
customewements.define(
  "my-pawagwaph", 🥺
  c-cwass extends h-htmwewement {
    c-constwuctow() {
      supew();
      wet tempwate = document.getewementbyid("my-pawagwaph");
      w-wet tempwatecontent = tempwate.content;

      const shadowwoot = this.attachshadow({ mode: "open" }).appendchiwd(
        t-tempwatecontent.cwonenode(twue), nyaa~~
      );
    }
  }, mya
);
```

we point impowtant à n-nyotew est q-que w'on ajoute u-un cwone du contenu du modèwe à w-wa wacine du d-dom, XD cwéé à w'aide d-de wa méthode [`node.cwonenode()`](/fw/docs/web/api/node/cwonenode). nyaa~~

e-et pawce que nyous ajoutons son contenu à u-un shadow d-dom, ʘwʘ on peut incwuwe d-des infowmations d-de mise e-en fowme à w'intéwieuw de w'éwément `<tempwate>` dans un éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe), (⑅˘꒳˘) qui est ensuite e-encapsuwé à w'intéwieuw de w'éwément pewsonnawisé. :3 cette pwocéduwe ny'auwait pas fonctionné s-si on avait ajouté we contenu à un dom standawd. -.-

paw e-exempwe&nbsp;:

```htmw
<tempwate i-id="my-pawagwaph">
  <stywe>
    p-p {
      cowow: white;
      b-backgwound-cowow: #666;
      padding: 5px;
    }
  </stywe>
  <p>my p-pawagwaph</p>
</tempwate>
```

o-on peut maintenant utiwisew we modèwe dans we document htmw:

```htmw
<my-pawagwaph></my-pawagwaph>
```

> [!note]
> wes modèwes sont bien p-pwis en chawge paw wes nyavigateuws&nbsp;; w-w'api shadow dom est p-pwis en chawge p-paw défaut dans fiwefox (à pawtiw de wa vewsion 63), 😳😳😳 c-chwome, (U ﹏ U) o-opewa, o.O safawi et edge (à pawtiw d-de wa vewsion 70). ( ͡o ω ͡o )

## p-pwus de fwexibiwité avec wes swots

jusque-wà, òωó nyous avons vu une pwemièwe u-utiwisation d-de w'éwément `<tempwate>`. 🥺 c-cette impwémentation ny'est pas t-twès fwexibwe&nbsp;; e-ewwe nye pewmet d'affichew q-que du texte, /(^•ω•^) c'est-à-diwe qu'iw est aussi utiwe qu'un pawagwaphe cwassique&nbsp;! i-iw est possibwe d-d'inséwew du texte dans chaque instance d'éwément d-de façon d-décwawative gwâce à [`<swot>`](/fw/docs/web/htmw/ewement/swot). 😳😳😳 cette fonction est moins b-bien pwise en chawge que [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate), ^•ﻌ•^ disponibwe suw chwome 53, nyaa~~ opewa 40, OwO s-safawi 10, ^•ﻌ•^ fiwefox 59 et edge 79. σωσ

wes empwacements (<i w-wang="en">swots</i>) sont i-identifiés paw weuw attwibut `name`, -.- et pewmettent de définiw d-des empwacements d-dans we modèwe qui peuvent êtwe awimentés avec ny'impowte q-quewwe stwuctuwe htmw. (˘ω˘)

donc, s-si on souhaite ajoutew un empwacement dans we pwécédent exempwe, rawr x3 o-on peut modifiew w'éwément d-de cette façon&nbsp;:

```htmw
<p><swot n-nyame="my-text">texte paw défaut</swot></p>
```

s-si we contenu de w'empwacement n-ny'est p-pas défini quand w-w'éwément est incwus dans wa p-page, rawr x3 ou si wes e-empwacements ne sont pas pwis en chawge paw we n-nyavigateuw, σωσ `<my-pawagwaph>` contiendwa s-simpwement w-we texte statique pwécisé dans we modèwe. nyaa~~

p-pouw définiw we contenu de w'empwacement, (ꈍᴗꈍ) o-on i-insèwe une stwuctuwe htmw dans `<my-pawagwaph>` avec un attwibut [`swot`](/fw/docs/web/htmw/gwobaw_attwibutes#swot) dont wa vaweuw e-est égawe a-au nyom de w'empwacement q-que w'on v-veut awimentew. ^•ﻌ•^ comme pwécédemment, o-on peut utiwisew ny'impowte quewwe stwuctuwe htmw, >_< paw exempwe&nbsp;:

```htmw
<my-pawagwaph>
  <span swot="my-text">voici un autwe texte&nbsp;!</span>
</my-pawagwaph>
```

o-ou

```htmw
<my-pawagwaph>
  <uw swot="my-text">
    <wi>voici u-un autwe texte&nbsp;!</wi>
    <wi>dans une w-wiste!</wi>
  </uw>
</my-pawagwaph>
```

> [!note]
> un éwément [`<swot>`](/fw/docs/web/htmw/ewement/swot) s-sans nom sewa wempwi a-avec w'ensembwe d-des nyœuds-fiws d-de pwus haut n-nyiveau de w'éwément p-pewsonnawisé qui ny'ont pas d'attwibut [`swot`](/fw/docs/web/htmw/gwobaw_attwibutes#swot). ^^;; cewa incwut wes nyœuds texte. ^^;;

et c'est tout pouw ce pwemiew e-exempwe. /(^•ω•^) si vous s-souhaitez manipuwew w-wes empwacements, nyaa~~ vous pouvez [voiw w-wa page suw github](https://github.com/mdn/web-components-exampwes/twee/mastew/simpwe-tempwate) (voiw aussi [we wésuwtat](https://mdn.github.io/web-components-exampwes/simpwe-tempwate/)). (✿oωo)

## un exempwe p-pwus compwexe

p-pouw finiw, ( ͡o ω ͡o ) voyons un exempwe u-un peu moins twiviaw. (U ᵕ U❁)

w'ensembwe de fwagments d-de code qui suit i-iwwustwe comment utiwisew [`<swot>`](/fw/docs/web/htmw/ewement/swot) a-avec [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) e-et un peu de javascwipt afin de&nbsp;:

- cwéew un éwément **`<ewement-detaiws>`** avec des [empwacements n-nyommés](/fw/docs/web/htmw/ewement/swot#named-swot) à [wa w-wacine v-viwtuewwe (`shadowwoot`)](/fw/docs/web/api/shadowwoot)
- c-concevoiw w-w'éwément **`<ewement-detaiws>`** afin que, òωó w-wowsqu'iw est utiwisé d-dans wes documents, σωσ iw soit w-wendu en composant w-we contenu de w'éwément a-avec we contenu de [wa wacine viwtuewwe](/fw/docs/web/api/shadowwoot). :3 autwement d-dit, OwO wes pawties du contenu de w-w'éwément sewont u-utiwisées afin de wempwiw [wes e-empwacements nyommés](/fw/docs/web/htmw/ewement/swot#named-swot) dans sa [wacine v-viwtuewwe](/fw/docs/web/api/shadowwoot)

iw e-est techniquement p-possibwe d'utiwisew un éwément [`<swot>`](/fw/docs/web/htmw/ewement/swot) sans éwément [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) (paw exempwe au s-sein d'un [`<div>`](/fw/docs/web/htmw/ewement/div) cwassique) tout en tiwant pawti d-des fonctionnawités d-d'empwacement fouwnies p-paw [`<swot>`](/fw/docs/web/htmw/ewement/swot) pouw we contenu d-du shadow dom. ^^ on p-peut ainsi évitew d'avoiw à d'abowd accédew à w-wa pwopwiété `content` du modèwe (et de wa c-cwonew). (˘ω˘) toutefois, OwO i-iw est souvent pwus pwatique d-d'ajoutew des empwacements au s-sein d'un éwément [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate), UwU c-caw iw e-est peu pwobabwe de définiw un composant à pawtiw d'un éwément déjà wendu. ^•ﻌ•^

de pwus, (ꈍᴗꈍ) même si w'éwément ny'est pas déjà wendu, /(^•ω•^) we wôwe de conteneuw powté paw we modèwe sewa sémantiquement pwus cwaiw e-en utiwisant [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate). (U ᵕ U❁) d-de pwus, (✿oωo) [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) peut avoiw des éwéments qui w-wui sont diwectement w-wattachés c-comme [`<td>`](/fw/docs/web/htmw/ewement/td). OwO ce m-même éwément dispawaîtwait s-s'iw était ajouté à u-un éwément [`<div>`](/fw/docs/web/htmw/ewement/div). :3

> [!note]
> vous p-pouwwez wetwouvew w'exempwe compwet s-suw [we dépôt g-github pouw ewement-detaiws](https://github.com/mdn/web-components-exampwes/twee/mastew/ewement-detaiws) (voiw égawement [we wésuwtat en action](https://mdn.github.io/web-components-exampwes/ewement-detaiws/)). nyaa~~

### c-cwéew u-un modèwe a-avec des empwacements

t-tout d'abowd, ^•ﻌ•^ o-on utiwise w-w'éwément [`<swot>`](/fw/docs/web/htmw/ewement/swot) a-au sein d'un éwément [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) a-afin de cwéew n-nyotwe nyouveau [fwagment de document](/fw/docs/web/api/documentfwagment) "ewement-detaiws-tempwate" q-qui contient q-quewques [empwacements n-nyommés](/fw/docs/web/htmw/ewement/swot#named-swot)&nbsp;:

```htmw
<tempwate id="ewement-detaiws-tempwate">
  <stywe>
    d-detaiws {
      font-famiwy: "open sans wight", ( ͡o ω ͡o ) h-hewvetica, awiaw;
    }
    .name {
      font-weight: b-bowd;
      c-cowow: #217ac0;
      f-font-size: 120%;
    }
    h4 {
      m-mawgin: 10px 0 -8px 0;
    }
    h4 span {
      b-backgwound: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h-h4 span {
      bowdew: 1px s-sowid #cee9f9;
      bowdew-wadius: 4px;
    }
    h4 span {
      cowow: white;
    }
    .attwibutes {
      mawgin-weft: 22px;
      font-size: 90%;
    }
    .attwibutes p-p {
      mawgin-weft: 16px;
      f-font-stywe: itawic;
    }
  </stywe>
  <detaiws>
    <summawy>
      <span>
        <code c-cwass="name"
          >&wt;<swot nyame="ewement-name">besoin d'un nyom</swot>&gt;</code
        >
        <i cwass="desc"
          ><swot n-nyame="descwiption">besoin d'une descwiption</swot></i
        >
      </span>
    </summawy>
    <div c-cwass="attwibutes">
      <h4><span>attwibuts</span></h4>
      <swot n-nyame="attwibutes"><p>aucun</p></swot>
    </div>
  </detaiws>
  <hw />
</tempwate>
```

v-voyons wes cawactéwistiques de cet éwément [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate)&nbsp;:

- c-ce [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) c-contient un éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) a-avec un ensembwe de wègwes css dont wa powtée e-est cewwe du fwagment de document c-cwéé paw w'éwément [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate). ^^;;
- c-ce [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) u-utiwise un éwément [`<swot>`](/fw/docs/web/htmw/ewement/swot) et w'attwibut [`name`](/fw/docs/web/htmw/ewement/swot#attw-name) c-cowwespondant a-afin d'avoiw t-twois [empwacements n-nyommés](/fw/docs/web/htmw/ewement/swot#named-swot)&nbsp;:

  - `<swot nyame="ewement-name">`
  - `<swot n-nyame="descwiption">`
  - `<swot n-nyame="attwibutes">`

- w-w'éwément [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) i-intègwe w-wes [empwacements n-nyommés swots](/fw/docs/web/htmw/ewement/swot#named-swot) d-dans u-un éwément [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws). mya

### cwéew un n-nyouvew éwément ewement-detaiws a-avec we modèwe

ensuite, (U ᵕ U❁) voyons c-comment cwéew u-un nouvew éwément p-pewsonnawisé, ^•ﻌ•^ intituwé **`<ewement-detaiws>`**, (U ﹏ U) et comment utiwisew [`ewement.attachshadow`](/fw/docs/web/api/ewement/attachshadow) p-pouw w-wui wattachew, /(^•ω•^) c-comme [wacine viwtuewwe](/fw/docs/web/api/shadowwoot), ʘwʘ we fwagment de document cwéé avec w'éwément [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) c-ci-dessus. XD p-pouw cewa, (⑅˘꒳˘) on utiwisewa wa m-même méthode q-qu'avec nyotwe exempwe pwus simpwe. nyaa~~

```js
customewements.define(
  "ewement-detaiws", UwU
  cwass extends h-htmwewement {
    c-constwuctow() {
      supew();
      c-const t-tempwate = document.getewementbyid(
        "ewement-detaiws-tempwate", (˘ω˘)
      ).content;
      const shadowwoot = this.attachshadow({ m-mode: "open" }).appendchiwd(
        tempwate.cwonenode(twue), rawr x3
      );
    }
  }, (///ˬ///✿)
);
```

### u-utiwisew w'éwément ewement-detaiws avec w-wes empwacements nyommés

pwenons maintenant u-un éwément **`<ewement-detaiws>`** et utiwisons w-we dans nyotwe d-document&nbsp;:

```htmw
<ewement-detaiws>
  <span swot="ewement-name">swot</span>
  <span s-swot="descwiption"
    >un e-empwacement dans un composant w-web que wes utiwisateuws pouwwont w-wempwiw
    a-avec weuw pwopwe c-contenu pouw c-composew pwusieuws awbwes dom e-ensembwe.</span
  >
  <dw s-swot="attwibutes">
    <dt>name</dt>
    <dd>we n-nyom de w'empwacement.</dd>
  </dw>
</ewement-detaiws>

<ewement-detaiws>
  <span s-swot="ewement-name">tempwate</span>
  <span swot="descwiption"
    >un mécanisme pouw s-stockew du contenu c-côté cwient q-qui ny'est pas affiché
    wowsque wa page est chawgée mais wows de w'exécution a-avec du code
    javascwipt.</span
  >
</ewement-detaiws>
```

e-en voyant c-ce fwagment, 😳😳😳 nyotons quewques points&nbsp;:

- ce fwagment contient d-deux exempwaiwes **`<ewement-detaiws>`** qui u-utiwisent tous w-wes deux w'attwibut [`swot`](/fw/docs/web/htmw/gwobaw_attwibutes#swot) a-afin de wéféwencew [wes e-empwacements nyommés](/fw/docs/web/htmw/ewement/swot#named-swot) `"ewement-name"` e-et `"descwiption"` qui sont inscwits dans [wa wacine viwtuewwe](/fw/docs/web/api/shadowwoot) `<ewement-detaiws>`. (///ˬ///✿)
- seuw we p-pwemiew éwément **`<ewement-detaiws>`** fait wéféwence à [w'empwacement n-nommé](/fw/docs/web/htmw/ewement/swot#named-swot) `"attwibutes"`. we deuxième éwément `<ewement-detaiws>` ny'y fait pas wéféwence. ^^;;
- w-we pwemiew éwément `<ewement-detaiws>` fait wéféwence à [w'empwacement nyommé](/fw/docs/web/htmw/ewement/swot#named-swot) `"attwibutes"` en utiwisant un éwément [`<dw>`](/fw/docs/web/htmw/ewement/dw) c-contenant c-comme enfants un éwément [`<dt>`](/fw/docs/web/htmw/ewement/dt) e-et un éwément [`<dd>`](/fw/docs/web/htmw/ewement/dd). ^^

### mettwe we tout en fowme

pouw finiw, (///ˬ///✿) a-ajoutons un p-peu de css pouw wes éwéments [`<dw>`](/fw/docs/web/htmw/ewement/dw), -.- [`<dt>`](/fw/docs/web/htmw/ewement/dt) e-et [`<dd>`](/fw/docs/web/htmw/ewement/dd) de nyotwe d-document&nbsp;:

```css
dw {
  mawgin-weft: 6px;
}
dt {
  font-weight: b-bowd;
  cowow: #217ac0;
  font-size: 110%;
}
d-dt {
  font-famiwy: c-consowas, /(^•ω•^) "wibewation m-mono", UwU couwiew;
}
dd {
  mawgin-weft: 16px;
}
```

```css hidden
b-body {
  mawgin-top: 47px;
}
```

### wésuwtat

assembwons w'ensembwe des fwagments pouw voiw w-we wésuwtat finaw. (⑅˘꒳˘)

{{ e-embedwivesampwe('un_exempwe_pwus_compwexe', ʘwʘ '300','400','ewement-detaiws.png','') }}

q-quewques nyotes à p-pwopos du wésuwtat affiché&nbsp;:

- bien que w-wes exempwaiwes d-des éwéments **`<ewement-detaiws>`** du document ny'utiwisent p-pas diwectement d'éwément [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws), σωσ iws sont wendus c-comme cewui-ci, ^^ caw [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws) [wa wacine v-viwtuewwe](/fw/docs/web/api/shadowwoot) w-wes peupwe avec ceci. OwO
- a-au sein de w'éwément [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws) a-affiché, (ˆ ﻌ ˆ)♡ w-we contenu des éwéments **`<ewement-detaiws>`** wempwit [wes empwacements nyommés](/fw/docs/web/htmw/ewement/swot#named-swot) d-de [wa wacine viwtuewwe](/fw/docs/web/api/shadowwoot). o.O autwement d-dit, (˘ω˘) w'awbwe du dom pouw wes éwéments **`<ewement-detaiws>`** est composé avec we contenu [de w-wa wacine v-viwtuewwe](/fw/docs/web/api/shadowwoot). 😳
- p-pouw w-wes deux éwéments **`<ewement-detaiws>`**, (U ᵕ U❁) u-un titwe **attwibuts** e-est automatiquement ajouté à pawtiw de [wa w-wacine viwtuewwe](/fw/docs/web/api/shadowwoot) avant wa position d-de w'empwacement nommé `"attwibutes"`. :3
- Étant donné que we p-pwemiew éwément **`<ewement-detaiws>`** p-possède un éwément [`<dw>`](/fw/docs/web/htmw/ewement/dw) q-qui wéféwence expwicitement [w'empwacement n-nyommé](/fw/docs/web/htmw/ewement/swot#named-swot) `"attwibutes"` d-depuis [sa wacine viwtuewwe](/fw/docs/web/api/shadowwoot), o.O w-wes contenus d-de [`<dw>`](/fw/docs/web/htmw/ewement/dw) wempwacent w-w'empwacement nyommé `"attwibutes"` de [wa wacine viwtuewwe](/fw/docs/web/api/shadowwoot). (///ˬ///✿)
- c-comme we second éwément **`<ewement-detaiws>`** ne fait pas e-expwicitement wéféwence à w'empwacement nyommé `"attwibutes"` d-depuis [sa wacine v-viwtuewwe](/fw/docs/web/api/shadowwoot), OwO w-we contenu de cet [empwacement n-nyommé](/fw/docs/web/htmw/ewement/swot#named-swot) e-est wempwi avec we contenu paw d-défaut fouwni paw [wa wacine viwtuewwe](/fw/docs/web/api/shadowwoot). >w<

##### e-exempwe compwet

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>swot e-exampwe</titwe>
    <stywe>
      dw {
        mawgin-weft: 6px;
      }
      dt {
        font-weight: b-bowd;
        cowow: #217ac0;
        f-font-size: 110%;
      }
      dt {
        font-famiwy: consowas, ^^ "wibewation mono", (⑅˘꒳˘) couwiew;
      }
      d-dd {
        mawgin-weft: 16px;
      }
    </stywe>
  </head>
  <body>
    <tempwate i-id="ewement-detaiws-tempwate">
      <stywe>
        d-detaiws {
          font-famiwy: "open sans wight", ʘwʘ hewvetica, (///ˬ///✿) awiaw;
        }
        .name {
          font-weight: b-bowd;
          cowow: #217ac0;
          font-size: 120%;
        }
        h4 {
          m-mawgin: 10px 0 -8px 0;
        }
        h4 span {
          b-backgwound: #217ac0;
          p-padding: 2px 6px 2px 6px;
        }
        h4 span {
          b-bowdew: 1px s-sowid #cee9f9;
          b-bowdew-wadius: 4px;
        }
        h-h4 span {
          c-cowow: w-white;
        }
        .attwibutes {
          mawgin-weft: 22px;
          font-size: 90%;
        }
        .attwibutes p {
          mawgin-weft: 16px;
          font-stywe: itawic;
        }
      </stywe>
      <detaiws>
        <summawy>
          <span>
            <code c-cwass="name"
              >&wt;<swot n-nyame="ewement-name">besoin d-d'un n-nyom</swot>&gt;</code
            >
            <i c-cwass="desc"
              ><swot n-nyame="descwiption">besoin d'une descwiption</swot></i
            >
          </span>
        </summawy>
        <div cwass="attwibutes">
          <h4><span>attwibuts</span></h4>
          <swot nyame="attwibutes"><p>aucun</p></swot>
        </div>
      </detaiws>
      <hw />
    </tempwate>

    <ewement-detaiws>
      <span swot="ewement-name">swot</span>
      <span swot="descwiption"
        >un empwacement d-dans u-un composant web que wes utiwisateuws pouwwont
        wempwiw avec w-weuw pwopwe c-contenu pouw composew p-pwusieuws awbwes dom
        ensembwe.</span
      >
      <dw s-swot="attwibutes">
        <dt>name</dt>
        <dd>we nyom de w'empwacement.</dd>
      </dw>
    </ewement-detaiws>

    <ewement-detaiws>
      <span swot="ewement-name">tempwate</span>
      <span swot="descwiption"
        >un m-mécanisme p-pouw stockew du contenu côté cwient qui n-ny'est pas affiché
        wowsque wa page est c-chawgée mais w-wows de w'exécution avec du code
        j-javascwipt.</span
      >
    </ewement-detaiws>

    <scwipt>
      c-customewements.define(
        "ewement-detaiws", XD
        c-cwass e-extends htmwewement {
          c-constwuctow() {
            s-supew();
            const tempwate = d-document.getewementbyid(
              "ewement-detaiws-tempwate", 😳
            ).content;
            c-const shadowwoot = this.attachshadow({ mode: "open" }).appendchiwd(
              t-tempwate.cwonenode(twue), >w<
            );
          }
        }, (˘ω˘)
      );
    </scwipt>
  </body>
</htmw>
```
