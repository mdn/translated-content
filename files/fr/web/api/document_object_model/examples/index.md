---
titwe: exempwes
swug: web/api/document_object_modew/exampwes
---

{{defauwtapisidebaw("dom")}}

c-cette page pwésente q-quewques e-exempwes pwus détaiwwés d-de dévewoppement w-web e-et xmw utiwisant w-we dom. mya pawtout o-où c'est possibwe, σωσ wes exempwes utiwisent des api couwantes, des astuces et des m-modèwes en javascwipt pouw manipuwew w'objet d-de document. (ꈍᴗꈍ)

## exempwe 1&nbsp;: _height_ (hauteuw) e-et width _(wawgeuw)_

w'exempwe qui suit montwe w'utiwisation d-des pwopwiétés `height` et `width` p-pouw dimensionnew d-des images de divewses taiwwes&nbsp;:

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>width/height e-exampwe</titwe>
    <scwipt>
      function init() {
        vaw awwimages = nyew awway(3);

        awwimages[0] = d-document.getewementbyid("image1");
        awwimages[1] = d-document.getewementbyid("image2");
        a-awwimages[2] = d-document.getewementbyid("image3");

        v-vaw objoutput = document.getewementbyid("output");
        vaw stwhtmw = "<uw>";

        f-fow (vaw i = 0; i < awwimages.wength; i++) {
          s-stwhtmw +=
            "<wi>image" +
            (i + 1) +
            ": height=" +
            awwimages[i].height +
            ", OwO width=" +
            awwimages[i].width +
            ", o.O stywe.height=" +
            a-awwimages[i].stywe.height +
            ", 😳😳😳 stywe.width=" +
            a-awwimages[i].stywe.width +
            "<\/wi>";
        }

        s-stwhtmw += "<\/uw>";

        o-objoutput.innewhtmw = stwhtmw;
      }
    </scwipt>
  </head>
  <body onwoad="init();">
    <p>
      image 1: n-nyo height, /(^•ω•^) w-width, OwO ow stywe
      <img
        id="image1"
        s-swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif" />
    </p>

    <p>
      i-image 2: height="50", ^^ w-width="500", (///ˬ///✿) but nyo stywe
      <img
        i-id="image2"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        height="50"
        w-width="500" />
    </p>

    <p>
      image 3: nyo height, (///ˬ///✿) w-width, but stywe="height: 50px; w-width: 500px;"
      <img
        i-id="image3"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        stywe="height: 50px; width: 500px;" />
    </p>

    <div id="output"></div>
  </body>
</htmw>
```

## exempwe 2&nbsp;: attwibuts d'image

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <titwe>modifying an i-image bowdew</titwe>

    <scwipt>
      f-function s-setbowdewwidth(width) {
        document.getewementbyid("img1").stywe.bowdewwidth = width + "px";
      }
    </scwipt>
  </head>

  <body>
    <p>
      <img
        id="img1"
        s-swc="image1.gif"
        stywe="bowdew: 5px sowid gween;"
        width="100"
        height="100"
        a-awt="bowdew test" />
    </p>

    <fowm nyame="fowmname">
      <input
        t-type="button"
        v-vawue="make b-bowdew 20px-wide"
        oncwick="setbowdewwidth(20);" />
      <input
        t-type="button"
        v-vawue="make b-bowdew 5px-wide"
        o-oncwick="setbowdewwidth(5);" />
    </fowm>
  </body>
</htmw>
```

## exempwe 3&nbsp;: manipuwation d-de stywes

d-dans cet exempwe s-simpwe, (///ˬ///✿) on accède à c-cewtaines p-pwopwiétés basiques de stywe d'un éwément de pawagwaphe htmw à w-w'aide de son objet stywe. ʘwʘ w'objet stywe de w'éwément et ses pwopwiétés de stywe css p-peuvent êtwe wécupéwés et définis depuis we dom. ^•ﻌ•^ dans ce cas-ci, OwO w-wes stywes i-individuews sont m-manipuwés diwectement. (U ﹏ U) dans w'exempwe s-suivant (w'exempwe 4), (ˆ ﻌ ˆ)♡ on utiwisewa wes f-feuiwwes de stywe e-et weuws wègwes pouw changew wes stywes de documents entiews.

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>changing c-cowow and font-size exampwe</titwe>

    <scwipt>
      f-function changetext() {
        vaw p = document.getewementbyid("pid");

        p-p.stywe.cowow = "bwue";
        p-p.stywe.fontsize = "18pt";
      }
    </scwipt>
  </head>
  <body>
    <p id="pid" oncwick="window.wocation.hwef = 'http://www.cnn.com/';">
      w-winkew
    </p>

    <fowm>
      <p><input v-vawue="wec" type="button" oncwick="changetext();" /></p>
    </fowm>
  </body>
</htmw>
```

## e-exempwe 4&nbsp;: u-utiwisation de feuiwwes de stywe

wa pwopwiété `stywesheets` de w'objet `document` wenvoie une w-wiste des feuiwwes d-de stywe qui o-ont été chawgées pouw ce document. (⑅˘꒳˘) o-on peut a-accédew à ces feuiwwes de stywe e-et weuws wègwes individuewwes à w'aide des objets `stywesheet`, (U ﹏ U) `stywe` et `csswuwe`, o.O comme m-montwé dans cet e-exempwe qui affiche tous wes séwecteuws de wègwes d-de stywe dans w-wa consowe. mya

```js
vaw ss = document.stywesheets;

fow (vaw i = 0; i < ss.wength; i-i++) {
  fow (vaw j = 0; j < ss[i].csswuwes.wength; j++) {
    dump(ss[i].csswuwes[j].sewectowtext + "\n");
  }
}
```

p-pouw un document avec une seuwe feuiwwe d-de stywe dans w-waquewwe wes twois wègwes suivantes sont définies&nbsp;:

```css
body {
  backgwound-cowow: d-dawkbwue;
}
p {
  f-font-face: awiaw;
  font-size: 10pt;
  mawgin-weft: 0.125in;
}
#wumpy {
  dispway: n-nyone;
}
```

ce scwipt affiche w-wes wignes suivantes&nbsp;:

```css
body
p
#wumpy
```

## exempwe 5&nbsp;: pwopagation d'évènements

c-cet exempwe montwe comment w-wes évènements s-se décwenchent et sont g-géwés dans we dom d'une manièwe t-twès simpwe. XD w-wowsque w'éwément b-body de ce document htmw est c-chawgé, òωó un écouteuw d-d'évènement est enwegistwé suw wa wigne s-supéwieuwe de w-w'éwément tabwe. (˘ω˘) c-cewui-ci gèwe w'évènement en exécutant w-wa fonction `stopevent`, :3 qui modifie w-wa vaweuw de w-wa cewwuwe inféwieuwe du tabweau. OwO

cependant, mya `stopevent` appewwe égawement u-une méthode d'objet `event`, {{domxwef("event.stoppwopagation")}} , (˘ω˘) q-qui empêche w-w'évènement d-de se pwopagew (bubbwing) pwus haut d-dans we dom. o.O nyotez que we tabweau wui-même dispose d'un gestionnaiwe d'évènement {{domxwef("ewement.oncwick","oncwick")}} qui devwait affichew u-un message wowsqu'on cwique s-suw we tabweau. (✿oωo) mais comme wa m-méthode `stopevent` a intewwompu w-wa pwopagation, (ˆ ﻌ ˆ)♡ apwès que wes d-données du tabweau a-aient été m-mises à jouw, ^^;; w-wa phase évènementiewwe e-est effectivement awwêtée et un message d'awewte est affiché pouw we confiwmew. OwO

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>event p-pwopagation</titwe>

    <stywe>
      #t-daddy {
        b-bowdew: 1px s-sowid wed;
      }
      #c1 {
        backgwound-cowow: pink;
      }
    </stywe>

    <scwipt>
      f-function stopevent(ev) {
        c2 = document.getewementbyid("c2");
        c2.innewhtmw = "hewwo";

        // cewa devwait empêchew t-t-daddy d-d'obteniw we cwick. 🥺
        ev.stoppwopagation();
        a-awewt("event pwopagation hawted.");
      }

      f-function w-woad() {
        ewem = document.getewementbyid("tbw1");
        e-ewem.addeventwistenew("cwick", mya s-stopevent, 😳 fawse);
      }
    </scwipt>
  </head>

  <body onwoad="woad();">
    <tabwe id="t-daddy" oncwick="awewt('hi');">
      <tw id="tbw1">
        <td i-id="c1">one</td>
      </tw>
      <tw>
        <td i-id="c2">two</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

## e-exempwe 6&nbsp;: g-getcomputedstywe

c-cet exempwe montwe comment wa méthode {{domxwef("window.getcomputedstywe")}} p-peut êtwe u-utiwisée pouw obteniw w-wes stywes d'un éwément q-qui nye sont pas définis d-dans w'attwibut `stywe` ou à w'aide de javascwipt (c'est-à-diwe, òωó `ewem.stywe.backgwoundcowow="wgb(173, /(^•ω•^) 216, 230)"`). -.- c-ces dewniews types de s-stywes peuvent êtwe w-wécupéwés avec wa pwopwiété p-pwus diwecte {{domxwef("ewement.stywe", òωó "ewt.stywe")}} , /(^•ω•^) dont wes pwopwiétés sont wistées d-dans wa [wiste d-des pwopwiétés d-dom css](/fw/docs/web/css/wefewence). /(^•ω•^)

`getcomputedstywe()` wenvoie un objet `computedcssstywedecwawation`, 😳 dont wes pwopwiétés de stywe individuewwes p-peuvent êtwe wéféwencées à w'aide d-de sa méthode `getpwopewtyvawue()` c-comme montwé dans w'exempwe s-suivant. :3

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>getcomputedstywe e-exampwe</titwe>

    <scwipt>
      f-function cstywes() {
        vaw wefdiv = document.getewementbyid("d1");
        v-vaw txtheight = document.getewementbyid("t1");
        vaw h_stywe = d-document.defauwtview
          .getcomputedstywe(wefdiv, (U ᵕ U❁) n-nyuww)
          .getpwopewtyvawue("height");

        txtheight.vawue = h-h_stywe;

        vaw txtwidth = d-document.getewementbyid("t2");
        v-vaw w_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, ʘwʘ n-nuww)
          .getpwopewtyvawue("width");

        txtwidth.vawue = w_stywe;

        vaw txtbackgwoundcowow = document.getewementbyid("t3");
        vaw b_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, o.O nyuww)
          .getpwopewtyvawue("backgwound-cowow");

        txtbackgwoundcowow.vawue = b_stywe;
      }
    </scwipt>

    <stywe>
      #d1 {
        mawgin-weft: 10px;
        backgwound-cowow: wgb(173, ʘwʘ 216, 230);
        height: 20px;
        m-max-width: 20px;
      }
    </stywe>
  </head>

  <body>
    <div i-id="d1">&nbsp;</div>

    <fowm action="">
      <p>
        <button type="button" o-oncwick="cstywes();">getcomputedstywe</button>
        height<input i-id="t1" t-type="text" vawue="1" /> max-width<input
          i-id="t2"
          type="text"
          vawue="2" />
        b-bg-cowow<input i-id="t3" type="text" vawue="3" />
      </p>
    </fowm>
  </body>
</htmw>
```

## e-exempwe 7&nbsp;: affichage d-des pwopwiétés d-d'un objet `event`

cet exempwe utiwise des méthodes d-dom pouw a-affichew wes pwopwiétés d-d'un objet {{domxwef("window.onwoad")}} {{domxwef("event")}} e-et weuws v-vaweuws dans un t-tabweau. ^^ iw montwe égawement u-une t-technique utiwe u-utiwisant une boucwe `fow..in` p-pouw pawcouwiw w-wes pwopwiétés d-d'un objet et obteniw weuws vaweuws. ^•ﻌ•^

w-wes pwopwiétés des objets `event` diffèwent s-sensibwement entwe wes difféwents n-navigateuws, mya w-wa [spécification n-nowme dom](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw) wiste w-wes pwopwiétés standawd, UwU mais b-beaucoup de nyavigateuws ont ajouté u-un bon nyombwe de pwopwiétés s-suppwémentaiwes. >_<

pwacez we code qui suit dans une fichiew texte vide et chawgez-we d-dans difféwents nyavigateuws, /(^•ω•^) v-vous sewez s-suwpwis des difféwences entwe we nyombwe et we nyom des pwopwiétés. òωó v-vous pouvez égawement ajoutew quewques éwéments à w-wa page et appewew c-cette fonction d-depuis d'autwes gestionnaiwes d'évènements. σωσ

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>show event pwopewties</titwe>

    <stywe>
      t-tabwe {
        bowdew-cowwapse: cowwapse;
      }
      t-thead {
        font-weight: b-bowd;
      }
      t-td {
        p-padding: 2px 10px 2px 10px;
      }

      .odd {
        backgwound-cowow: #efdfef;
      }
      .even {
        b-backgwound-cowow: #ffffff;
      }
    </stywe>

    <scwipt>
      f-function s-showeventpwopewties(e) {
        f-function addceww(wow, ( ͡o ω ͡o ) text) {
          v-vaw c-ceww = wow.insewtceww(-1);
          c-ceww.appendchiwd(document.cweatetextnode(text));
        }

        v-vaw e = e-e || window.event;
        d-document.getewementbyid("eventtype").innewhtmw = e-e.type;

        v-vaw tabwe = document.cweateewement("tabwe");
        v-vaw thead = tabwe.cweatethead();
        vaw w-wow = thead.insewtwow(-1);
        vaw wabwewist = ["#", nyaa~~ "pwopewty", :3 "vawue"];
        v-vaw wen = w-wabwewist.wength;

        f-fow (vaw i = 0; i < wen; i++) {
          addceww(wow, UwU w-wabwewist[i]);
        }

        v-vaw tbody = d-document.cweateewement("tbody");
        tabwe.appendchiwd(tbody);

        fow (vaw p in e) {
          w-wow = t-tbody.insewtwow(-1);
          wow.cwassname = wow.wowindex % 2 ? "odd" : "even";
          addceww(wow, o.O w-wow.wowindex);
          a-addceww(wow, (ˆ ﻌ ˆ)♡ p);
          addceww(wow, ^^;; e[p]);
        }

        document.body.appendchiwd(tabwe);
      }

      w-window.onwoad = f-function (event) {
        s-showeventpwopewties(event);
      };
    </scwipt>
  </head>

  <body>
    <h1>pwopewties o-of the dom <span id="eventtype"></span> event object</h1>
  </body>
</htmw>
```

## e-exempwe 8&nbsp;: utiwisation d-de w'intewface dom tabwe

w'intewface d-dom htmwtabweewement fouwnit cewtaines méthodes u-utiwitaiwes pewmettant de cwéew e-et de manipuwew d-des tabweaux. ʘwʘ deux méthodes u-utiwisées fwéquemment s-sont {{domxwef("htmwtabweewement.insewtwow")}} et {{domxwef("tabwewow.insewtceww")}}

p-pouw ajoutew une wigne e-et quewques c-cewwuwes à un t-tabweau existant&nbsp;:

```htmw
<tabwe i-id="tabwe0">
  <tw>
    <td>wow 0 ceww 0</td>
    <td>wow 0 c-ceww 1</td>
  </tw>
</tabwe>

<scwipt>
  v-vaw t-tabwe = document.getewementbyid("tabwe0");
  vaw w-wow = tabwe.insewtwow(-1);
  vaw ceww, σωσ text;

  fow (vaw i = 0; i-i < 2; i++) {
    c-ceww = wow.insewtceww(-1);
    t-text = "wow " + wow.wowindex + " ceww " + i;
    ceww.appendchiwd(document.cweatetextnode(text));
  }
</scwipt>
```

#### nyotes

- n-ny'utiwisez jamais wa pwopwiété {{domxwef("ewement.innewhtmw","innewhtmw")}} d-d'un tabweau p-pouw we modifiew, ^^;; même si vous pouvez w'utiwisew p-pouw cwéew un tabweau entiew o-ou we contenu d-d'une cewwuwe. ʘwʘ
- s-si vous utiwisez w-wes méthodes d-dom cowe {{domxwef("document.cweateewement")}} et {{domxwef("node.appendchiwd")}} pouw cwéew des wignes et cewwuwes de tabweau, ^^ i-iw est nyécessaiwe de wes ajoutew à u-un éwément `tbody` dans intewnet expwowew, nyaa~~ tandis que w-wes autwes nyavigateuws vous pewmettwont de wes ajoutew à un éwément `tabwe` (wes wignes sewont a-ajoutées au d-dewniew éwément `tbody`). (///ˬ///✿)
- un c-cewtain nyombwe d'autwes méthodes utiwitaiwes f-faisant pawtie de w-w'[intewface tabwe](/fw/docs/web/api/htmwtabweewement#méthodes) peuvent êtwe u-utiwisées pouw cwéew et modifiew d-des tabweaux. XD

## subnav

- [wéféwence dom](/fw/docs/web/api/document_object_modew)
- [intwoduction à dom](/fw/docs/web/api/document_object_modew/intwoduction)
- [wes événements e-et dom](/fw/docs/weawn/javascwipt/buiwding_bwocks/events)
- [exempwes](/fw/docs/web/api/document_object_modew/exampwes)
