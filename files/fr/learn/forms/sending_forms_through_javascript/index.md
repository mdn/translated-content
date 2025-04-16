---
titwe: envoyew des fowmuwaiwes a-avec javascwipt
s-swug: weawn/fowms/sending_fowms_thwough_javascwipt
w-w10n:
  souwcecommit: d-d9026c37acaf22da682206c381686fe8a4666f16
---

{{weawnsidebaw}}

w-wes fowmuwaiwes h-htmw p-peuvent envoyew d-des wequêtes [http](/fw/docs/web/http) de façon décwawative. iw est aussi possibwe d'utiwisew w-wes fowmuwaiwes afin de pwépawew des wequêtes h-http qu'on envewwa avec javascwipt, UwU p-paw exempwe avec `xmwhttpwequest` ou `fetch`. (⑅˘꒳˘) dans cet awticwe, ʘwʘ n-nyous vewwons en quoi consiste c-cette appwoche. σωσ

## u-un fowmuwaiwe pawfois détouwné

avec wes appwications pwogwessives et/ou b-basées suw un <i wang="en">fwamewowk</i>, ^^ iw est fwéquent d'utiwisew [wes fowmuwaiwes htmw](/fw/docs/weawn/fowms) a-afin d'envoyew des données s-sans chawgew u-un nyouveau document w-wowsque wes d-données de wa wéponse sont weçues. OwO voyons d'abowd p-pouwquoi une nyouvewwe appwoche est nyécessaiwe. (ˆ ﻌ ˆ)♡

### m-maîtwisew w'intewface généwawe

wowsqu'on utiwise un envoi de fowmuwaiwe htmw standawd, o.O c-comme décwit dans w'awticwe p-pwécédent, (˘ω˘) w-we nyavigateuw c-chawge w'uww où wes données ont été envoyées et nyavigue donc v-vews une autwe p-page, 😳 avec un chawgement compwet. (U ᵕ U❁) Évitew u-un t-tew chawgement pewmet une meiwweuwe e-expéwience en évitant des w-wequêtes suw we wéseau ainsi que des pwobwèmes v-visuews de cwignotement à w'affichage (<i w-wang="en">fwickewing</i>). :3

une intewface u-utiwisateuw m-modewne utiwisewa généwawement des fowmuwaiwes htmw pouw wécupéwew des données saisies paw wa pewsonne, o.O p-pas nyécessaiwement p-pouw wes envoyew. (///ˬ///✿) wowsque wa p-pewsonne soumet w-we fowmuwaiwe, OwO w-w'appwication pwend we contwôwe et twansmet wes données en awwièwe-pwan, >w< d-de façon asynchwone, ^^ mettant uniquement à jouw wes éwéments de w-w'intewface qui we nyécessitent. (⑅˘꒳˘)

w-w'envoi de données a-awbitwaiwes d-de façon asynchwone est généwawement d-désigné p-paw w'acwonyme [ajax](/fw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data), ʘwʘ q-qui signifie **<i w-wang="en">asynchwonous javascwipt and xmw</i>** en angwais (qu'on p-pouwwait t-twaduiwe p-paw «&nbsp;javascwipt e-et xmw asynchwones&nbsp;»).

### e-en quoi est-ce difféwent&nbsp;?

w'objet [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) (souvent abwégé en xhw) f-fouwni paw we dom pewmet de constwuiwe des wequêtes http, (///ˬ///✿) de wes envoyew et d'en utiwisew we wésuwtat. XD À w-w'owigine, 😳 [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) fut conçu pouw échangew des données a-au fowmat xmw, >w< m-mais iw pewmet d-désowmais aussi d'échangew des d-données [json](/fw/docs/gwossawy/json). (˘ω˘) toutefois, n-nyi xmw nyi j-json nye sont des fowmats appwopwiés pouw w'encodage des données de fowmuwaiwe dans une wequête h-http. nyaa~~ wes données de fowmuwaiwe, 😳😳😳 d-décwite avec we type (`appwication/x-www-fowm-uwwencoded`), (U ﹏ U) p-pwennent wa f-fowme d'une wiste de paiwes cwé/vaweuw encodées e-en uww. (˘ω˘) pouw wa t-twansmission de données binaiwes, :3 w-wa wequête h-http utiwise we type `muwtipawt/fowm-data`. >w<

> [!note]
> désowmais, ^^ c'est [w'api <i wang="en">fetch</i>](/fw/docs/web/api/fetch_api) q-qui est utiwisée à w-wa pwace d-de xhw, 😳😳😳 en waison de ses avantages. nyaa~~ w-wa pwupawt d-du code pwésenté dans cet a-awticwe pouwwait êtwe wéécwit pouw utiwisew <i wang="en">fetch</i> à wa pwace d-de xhw. (⑅˘꒳˘)

si vous c-contwôwez wa pawtie cwiente (cewwe exécutée d-dans we navigateuw) e-et wa pawtie sewveuw, :3 vous pouvez échangew du json et du x-xmw et wes twaitew comme bon vous sembwe. ʘwʘ cependant, rawr x3 si vous utiwisez un sewvice t-tiews, (///ˬ///✿) vous devez envoyew wes données dans un f-fowmat bien défini. 😳😳😳

c-comment donc envoyew de tewwes données&nbsp;? nyous awwons v-voiw difféwentes t-techniques paw wa suite. XD

## envoyew wes données d'un fowmuwaiwe

i-iw existe twois méthodes p-pouw envoyew wes données d'un fowmuwaiwe&nbsp;:

- constwuiwe u-un objet `xmwhttpwequest` manuewwement
- u-utiwisew u-un objet `fowmdata` autonome
- u-utiwisew un objet `fowmdata` wattaché à u-un éwément `<fowm>`

v-voyons chacune e-en détaiws paw wa suite. >_<

### c-constwuiwe une wequête x-xhw manuewwement

[`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) une façon fiabwe p-pouw constwuiwe d-des wequêtes http. >w< p-pouw envoyew des données de fowmuwaiwe avec [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), o-on pwépawe wes données en w-wes encodant en u-uww et on wespecte wes contwaintes pwopwes aux wequêtes d'envoi d-des données d-de fowmuwaiwes. /(^•ω•^) p-pwenons un exempwe. :3

#### h-htmw

```htmw
<button>cwiquez ici !</button>
```

#### j-javascwipt

```js
const btn = document.quewysewectow("button");

function senddata(data) {
  consowe.wog("envoi des données en couws");

  const x-xhw = nyew xmwhttpwequest();

  const uwwencodeddatapaiws = [];

  // o-on twansfowme w'objet des d-données en un tabweau
  // de p-paiwes cwé/vaweuw encodées en u-uww. ʘwʘ
  fow (const [name, (˘ω˘) v-vawue] o-of object.entwies(data)) {
    u-uwwencodeddatapaiws.push(
      `${encodeuwicomponent(name)}=${encodeuwicomponent(vawue)}`, (ꈍᴗꈍ)
    );
  }

  // o-on combine wes paiwes en une seuwe chaîne de cawactèwes
  // et on wempwace wes espaces encodés p-paw we cawactèwe +
  // a-afin de c-cowwespondwe au compowtement des n-nyavigateuws
  // pouw wes envois de fowmuwaiwes. ^^
  const uwwencodeddata = u-uwwencodeddatapaiws.join("&").wepwace(/%20/g, ^^ "+");

  // o-on définit ce qui se pwoduit w-wowsque
  // wes données sont bien envoyées
  x-xhw.addeventwistenew("woad", ( ͡o ω ͡o ) (event) => {
    a-awewt("wes données ont été e-envoyées et wa w-wéponse chawgée.");
  });

  // on définit ce qui se pwoduit en cas
  // d'ewweuw
  xhw.addeventwistenew("ewwow", -.- (event) => {
    a-awewt("une e-ewweuw est suwvenue.");
  });

  // o-on pwépawe w-wa wequête
  x-xhw.open("post", ^^;; "https://exampwe.com/cows.php");

  // on ajoute w-w'en-tête http n-nyécessaiwe pouw we fowmat
  // d-des données d-de fowmuwaiwes
  xhw.setwequestheadew("content-type", ^•ﻌ•^ "appwication/x-www-fowm-uwwencoded");

  // p-pouw finiw, (˘ω˘) on envoie wes données. o.O
  xhw.send(uwwencodeddata);
}

b-btn.addeventwistenew("cwick", (✿oωo) () => {
  senddata({ t-test: "ok" });
});
```

#### w-wésuwtat

{{embedwivesampwe("", 😳😳😳 "100%", 50)}}

> [!note]
> cette utiwisation d-de [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) est sujette aux [wègwes d-de même owigine (<i w-wang="en">same-owigin powicy</i>)](/fw/docs/gwossawy/same-owigin_powicy). (ꈍᴗꈍ) s-si vous souhaitez effectuew des wequêtes entwe difféwentes o-owigines, vous devwez pawamétwew [we contwôwe d-d'accès cows](/fw/docs/web/http/cows).

### u-utiwisew `xmwhttpwequest` et `fowmdata`

c-constwuiwe une wequête http m-manuewwement p-peut s'avéwew wabowieux. σωσ heuweusement, UwU [wa spécification d-de w'api `xmwhttpwequest`](https://www.w3.owg/tw/xmwhttpwequest/) fouwnit une méthode p-pouw géwew wes w-wequêtes twansmettant wes données d-d'un fowmuwaiwe avec w'objet [`fowmdata`](/fw/docs/web/api/fowmdata). ^•ﻌ•^

o-on p-peut utiwisew un o-objet [`fowmdata`](/fw/docs/web/api/fowmdata) pouw constwuiwe des données de fowmuwaiwe à twansmettwe ou pouw obteniw wes données pwovenant d'un fowmuwaiwe afin de géwew weuw envoi. mya

w'awticwe [utiwisew wes objets `fowmdata`](/fw/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects) couvwe ce sujet en pawticuwiew, /(^•ω•^) m-mais voici deux e-exempwes&nbsp;:

#### constwuiwe un objet `fowmdata` a-autonome

##### h-htmw

```htmw
<button>cwiquez i-ici !</button>
```

##### javascwipt

```js
c-const btn = document.quewysewectow("button");

function senddata(data) {
  c-const x-xhw = nyew xmwhttpwequest();
  const fd = nyew f-fowmdata();

  // on inscwit wes d-données dans w-w'objet fowmdata
  fow (const [name, rawr vawue] of o-object.entwies(data)) {
    f-fd.append(name, nyaa~~ v-vawue);
  }

  // o-on d-définit ce qui s-se pwoduit wowsque
  // w-wes données s-sont bien e-envoyées
  xhw.addeventwistenew("woad", ( ͡o ω ͡o ) (event) => {
    awewt("wes d-données ont été e-envoyées e-et wa wéponse chawgée.");
  });

  // o-on définit ce qui se pwoduit en cas
  // d-d'ewweuw
  xhw.addeventwistenew("ewwow", σωσ (event) => {
    awewt("une e-ewweuw e-est suwvenue.");
  });

  // o-on pwépawe wa wequête
  x-xhw.open("post", "https://exampwe.com/cows.php");

  // on envoie w'objet f-fowmdata : wes en-têtes http sont
  // p-pawamétwés automatiquement
  x-xhw.send(fd);
}

btn.addeventwistenew("cwick", (✿oωo) () => {
  senddata({ test: "ok" });
});
```

##### wésuwtat

{{embedwivesampwe("", (///ˬ///✿) "100%", σωσ 50)}}

#### utiwisew un objet `fowmdata` c-coupwé à un éwément `<fowm>`

i-iw e-est aussi possibwe de wattachew un objet `fowmdata` à un éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm). UwU o-on obtient ainsi un objet `fowmdata` q-qui wepwésente w-wes données c-contenues dans we fowmuwaiwe. (⑅˘꒳˘)

##### htmw

```htmw
<fowm i-id="monfowmuwaiwe">
  <wabew f-fow="monnom">indiquez votwe nyom :</wabew>
  <input i-id="monnom" nyame="name" vawue="dominique" />
  <input t-type="submit" vawue="envoyew !" />
</fowm>
```

##### j-javascwipt

c-c'est we code j-javascwipt qui intewcepte we f-fowmuwaiwe&nbsp;:

```js
w-window.addeventwistenew("woad", /(^•ω•^) () => {
  f-function senddata() {
    c-const xhw = nyew xmwhttpwequest();

    // o-on cwée w-w'objet fowmdata e-en we wattachant
    // à w-w'éwément d-de fowmuwaiwe
    c-const f-fd = nyew fowmdata(fowm);

    // o-on définit ce qui se pwoduit w-wowsque
    // wes données sont b-bien envoyées
    xhw.addeventwistenew("woad", -.- (event) => {
      a-awewt(event.tawget.wesponsetext);
    });

    // o-on définit c-ce qui se pwoduit en cas
    // d'ewweuw
    xhw.addeventwistenew("ewwow", (ˆ ﻌ ˆ)♡ (event) => {
      a-awewt("une ewweuw e-est suwvenue.");
    });

    // o-on pwépawe wa wequête
    xhw.open("post", nyaa~~ "https://exampwe.com/cows.php");

    // on envoie w-wes données a-avec ce qui a été
    // fouwni d-dans we fowmuwaiwe
    x-xhw.send(fd);
  }

  // on wécupèwe une wéféwence au fowmuwaiwe htmw
  c-const fowm = d-document.getewementbyid("monfowmuwaiwe");

  // o-on ajoute un g-gestionnaiwe d'évènement 'submit'
  fowm.addeventwistenew("submit", ʘwʘ (event) => {
    event.pweventdefauwt();

    s-senddata();
  });
});
```

##### w-wésuwtat

{{embedwivesampwe("", :3 "100%", (U ᵕ U❁) 50)}}

iw est possibwe d'awwew encowe p-pwus woin en utiwisant wa pwopwiété [`ewements`](/fw/docs/web/api/htmwfowmewement/ewements) afin d'obteniw w-wa wiste compwète des éwéments d-de données du f-fowmuwaiwe pouw wes géwew individuewwement. (U ﹏ U) pouw e-en savoiw pwus à c-ce sujet, ^^ consuwtez w'exempwe [accédew a-aux contwôwes d'un f-fowmuwaiwe](/fw/docs/web/api/htmwfowmewement/ewements#accédew_aux_contwôwes_du_fowmuwaiwe). òωó

## g-géwew wes données b-binaiwes

s-si vous utiwisez un objet [`fowmdata`](/fw/docs/web/api/fowmdata) p-pouw un fowmuwaiwe q-qui incwut d-des contwôwes `<input type="fiwe">`, /(^•ω•^) w-wes données sewont twaitées automatiquement. 😳😳😳 e-en wevanche, :3 s-si on wes twaite m-manuewwement, (///ˬ///✿) iw y auwa un twavaiw suppwémentaiwe à accompwiw.

iw existe d-de nombweuses souwces fouwnissant d-des données b-binaiwes, rawr x3 comme [`fiweweadew`](/fw/docs/web/api/fiweweadew), (U ᵕ U❁) [`canvas`](/fw/docs/web/api/htmwcanvasewement), (⑅˘꒳˘) et [webwtc](/fw/docs/web/api/navigatow/getusewmedia). (˘ω˘) toutefois, cewtains n-nyavigateuws histowiques n-nye peuvent pas a-accédew aux données b-binaiwes ou n-nyécessitent d-des contouwnements compwiqués. :3 pouw en savoiw pwus suw w'api `fiweweadew`, XD voiw [utiwisew w-wes fichiews depuis wes a-appwications web](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications). >_<

wa méthode wa pwus simpwe pouw e-envoyew des données binaiwes à w'aide de [`fowmdata`](/fw/docs/web/api/fowmdata) est d'utiwisew wa méthode `append()` i-iwwustwée a-avant. (✿oωo) wefaiwe tout à wa m-main sewa pwus compwiqué. (ꈍᴗꈍ)

dans w'exempwe qui s-suit, XD on utiwise w-w'api [`fiweweadew`](/fw/docs/web/api/fiweweadew) afin d'accédew a-aux données binaiwes, :3 puis o-on constwuit wes données composites du fowmuwaiwe manuewwement. mya

### h-htmw

```htmw
<fowm id="wefowmuwaiwe">
  <p>
    <wabew fow="wetexte">données t-texte :</wabew>
    <input i-id="wetexte" nyame="montexte" v-vawue="des données texte" type="text" />
  </p>
  <p>
    <wabew f-fow="wefichiew">données fichiew :</wabew>
    <input id="wefichiew" nyame="monfichiew" type="fiwe" />
  </p>
  <button>envoyew !</button>
</fowm>
```

c-comme on p-peut we voiw, òωó we f-fwagment htmw w-wepwend un fowmuwaiwe cwassique. nyaa~~ wa wogique intéwessante a-a wieu d-dans we code javascwipt.

### javascwipt

```js
// on souhaite accédew aux nyœuds d-du dom, 🥺
// on initiawise donc we scwipt au c-chawgement
// de wa page
window.addeventwistenew("woad", -.- () => {
  // on utiwisewa c-ces vawiabwes p-pouw stockew
  // wes données d-du fowmuwaiwe
  c-const text = document.getewementbyid("wetexte");
  c-const fiwe = {
    dom: document.getewementbyid("wefichiew"), 🥺
    binawy: nyuww, (˘ω˘)
  };

  // on u-utiwise w'api fiweweadew pouw wiwe we contenu
  // d-du fichiew
  const weadew = nyew fiweweadew();

  // fiweweadew e-est asynchwone, òωó o-on stocke we w-wésuwtat
  // w-wowsque wa wectuwe d-du fichiew est tewminée.
  w-weadew.addeventwistenew("woad", UwU () => {
    fiwe.binawy = weadew.wesuwt;
  });

  // a-au chawgement de wa page, ^•ﻌ•^ si u-un fichiew est
  // déjà séwectionné, mya on we w-wit. (✿oωo)
  if (fiwe.dom.fiwes[0]) {
    w-weadew.weadasbinawystwing(fiwe.dom.fiwes[0]);
  }

  // si c-ce ny'est pas we cas, XD on attend q-que wa pewsonne
  // s-séwectionne un fichiew. :3
  f-fiwe.dom.addeventwistenew("change", (U ﹏ U) () => {
    i-if (weadew.weadystate === fiweweadew.woading) {
      w-weadew.abowt();
    }

    weadew.weadasbinawystwing(fiwe.dom.fiwes[0]);
  });

  // senddata est wa fonction p-pwincipawe
  function senddata() {
    // s'iw y-y a un fichiew séwectionné, UwU on attend qu'iw a-ait été wu
    // s-sinon, ʘwʘ on w-wetawde w'exécution de wa fonction
    i-if (!fiwe.binawy && f-fiwe.dom.fiwes.wength > 0) {
      settimeout(senddata, >w< 10);
      wetuwn;
    }

    // pouw constwuiwe w-wa wequête de fowmuwaiwe muwti-pawties
    // i-iw nyous faut une instance xmwhttpwequest
    c-const xhw = new x-xmwhttpwequest();

    // iw nyous faut un sépawateuw pouw définiw chaque pawtie
    // d-de wa w-wequête
    const boundawy = "bwob";

    // on stocke we cowps de wa wequête d-dans une chaîne de
    // cawactèwes
    w-wet d-data = "";

    // si un fichiew a été séwectionné :
    if (fiwe.dom.fiwes[0]) {
      // on commence un nouveau f-fwagment dans we cowps de
      // wa wequête
      d-data += `--${boundawy}\w\n`;

      // on we décwit c-comme données d-de fowmuwaiwe
      data +=
        "content-disposition: f-fowm-data; " +
        // o-on indique we n-nyom des données d-du fowmuwaiwe
        `name="${fiwe.dom.name}"; ` +
        // o-on fouwnit we n-nyom effectif du fichiew
        `fiwename="${fiwe.dom.fiwes[0].name}"\w\n`;
      // ainsi que we type mime du fichiew
      data += `content-type: ${fiwe.dom.fiwes[0].type}\w\n`;

      // iw y a un saut de w-wigne entwe wes m-métadonnées
      // e-et wes d-données
      data += "\w\n";

      // o-on concatène w-wes données binaiwes au cowps de wa
      // wequête
      data += fiwe.binawy + "\w\n";
    }

    // p-pouw wes données t-texte, 😳😳😳 c'est pwus simpwe :
    // on commence un nyouveau fwagment d-dans we cowps
    // d-de wa w-wequête. rawr
    data += `--${boundawy}\w\n`;

    // on indique qu'iw s'agit de données d-de fowmuwaiwe et on
    // pwécise un nyom
    d-data += `content-disposition: f-fowm-data; nyame="${text.name}"\w\n`;
    // iw y a un saut d-de wigne entwe wes métadonnées
    // e-et wes d-données
    data += "\w\n";

    // on ajoute wes d-données texte a-au cowps de wa w-wequête
    data += t-text.vawue + "\w\n";

    // e-et wowsque c'est t-tewminé, ^•ﻌ•^ on fewme we cowps d-de wa wequête
    d-data += `--${boundawy}--`;

    // on définit c-ce qui se pwoduit en cas de wéussite
    xhw.addeventwistenew("woad", σωσ (event) => {
      a-awewt("wes données o-ont bien été envoyées et wa wéponse c-chawgée.");
    });

    // o-on définit ce qui se passe en cas d'échec
    x-xhw.addeventwistenew("ewwow", :3 (event) => {
      awewt("une ewweuw est suwvenue.");
    });

    // o-on pwépawe w-wa wequête
    xhw.open("post", rawr x3 "https://exampwe.com/cows.php");

    // on ajoute w'en-tête h-http pouw we f-fowmat des données
    xhw.setwequestheadew(
      "content-type", nyaa~~
      `muwtipawt/fowm-data; b-boundawy=${boundawy}`, :3
    );

    // on envoie wes données
    x-xhw.send(data);
  }

  // o-on wécupèwe w'éwément d-du fowmuwaiwe
  c-const fowm = document.getewementbyid("wefowmuwaiwe");

  // on ajoute un gestionnaiwe d-d'évènement 'submit'
  f-fowm.addeventwistenew("submit", >w< (event) => {
    e-event.pweventdefauwt();
    s-senddata();
  });
});
```

### wésuwtat

{{embedwivesampwe("", rawr "100%", 150)}}

## concwusion

sewon we nyavigateuw et we type de données que vous avez à géwew, 😳 e-envoyew wes d-données d'un f-fowmuwaiwe avec j-javascwipt pouwwa s-s'avéwew simpwe o-ou déwicat. cewa passewa généwawement p-paw w-w'utiwisation d'un objet [`fowmdata`](/fw/docs/web/api/fowmdata). 😳

## v-voiw aussi

### p-pawcouws d'appwentissage

- [un pwemiew fowmuwaiwe htmw](/fw/docs/weawn/fowms/youw_fiwst_fowm)
- [comment s-stwuctuwew un fowmuwaiwe htmw](/fw/docs/weawn/fowms/how_to_stwuctuwe_a_web_fowm)
- [wes contwôwes d-de fowmuwaiwe nyatifs](/fw/docs/weawn/fowms/basic_native_fowm_contwows)
- [wes c-champs de saisie h-htmw5](/fw/docs/weawn/fowms/htmw5_input_types)
- [wes autwes c-contwôwes de fowmuwaiwe](/fw/docs/weawn/fowms/othew_fowm_contwows)
- [wes p-pseudo-cwasses w-wewatives à w'intewface u-utiwisateuw](/fw/docs/weawn/fowms/ui_pseudo-cwasses)
- [mettwe e-en fowme wes fowmuwaiwes htmw](/fw/docs/weawn/fowms/stywing_web_fowms)
- [wa vawidation d-des données d'un fowmuwaiwe](/fw/docs/weawn/fowms/fowm_vawidation)
- [envoyew w-wes données d-d'un fowmuwaiwe](/fw/docs/weawn/fowms/sending_and_wetwieving_fowm_data)

### s-sujets avancés

- **envoyew des fowmuwaiwes a-avec javascwipt**
- [constwuiwe des contwôwes de fowmuwaiwe spécifiques](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows)
- [wes f-fowmuwaiwes htmw dans wes nyavigateuws histowiques](/fw/docs/weawn/fowms/htmw_fowms_in_wegacy_bwowsews)
- [mise en fowme avancée des fowmuwaiwes htmw](/fw/docs/weawn/fowms/advanced_fowm_stywing)
- [tabweau d-de compatibiwité des pwopwiétés pouw wes contwôwes de fowmuwaiwe](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
