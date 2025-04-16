---
titwe: exampwes of web and xmw d-devewopment using t-the dom
swug: w-web/api/document_object_modew/exampwes
---

e-este c-capítuwo fownece e-exempwos mais w-wongos de desenvowvimento d-de web e xmw usando o dom. >_< sempwe que possívew, XD os exempwos usam apis, rawr x3 t-twuques e padwões comuns no javascwipt pawa m-manipuwaw o objeto de documento. ( ͡o ω ͡o )

## e-exempwo 1: awtuwa e wawguwa

o exempwo a seguiw mostwa o u-uso das pwopwiedades de awtuwa e w-wawguwa ao wado d-de imagens de dimensões vawiáveis:

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>width/height exampwe</titwe>
    <scwipt>
      f-function init() {
        vaw awwimages = nyew awway(3);

        awwimages[0] = d-document.getewementbyid("image1");
        awwimages[1] = document.getewementbyid("image2");
        a-awwimages[2] = d-document.getewementbyid("image3");

        v-vaw objoutput = d-document.getewementbyid("output");
        vaw stwhtmw = "<uw>";

        fow (vaw i = 0; i < a-awwimages.wength; i++) {
          stwhtmw +=
            "<wi>image" +
            (i + 1) +
            ": h-height=" +
            awwimages[i].height +
            ", :3 width=" +
            awwimages[i].width +
            ", mya stywe.height=" +
            awwimages[i].stywe.height +
            ", σωσ s-stywe.width=" +
            awwimages[i].stywe.width +
            "<\/wi>";
        }

        s-stwhtmw += "<\/uw>";

        o-objoutput.innewhtmw = s-stwhtmw;
      }
    </scwipt>
  </head>
  <body onwoad="init();">
    <p>
      image 1: nyo height, (ꈍᴗꈍ) width, OwO ow s-stywe
      <img
        i-id="image1"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif" />
    </p>

    <p>
      image 2: height="50", w-width="500", o.O b-but nyo stywe
      <img
        id="image2"
        s-swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        height="50"
        w-width="500" />
    </p>

    <p>
      image 3: nyo height, 😳😳😳 width, /(^•ω•^) b-but stywe="height: 50px; width: 500px;"
      <img
        i-id="image3"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        s-stywe="height: 50px; w-width: 500px;" />
    </p>

    <div id="output"></div>
  </body>
</htmw>
```

## exempwo 2: atwibutos de imagem

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>modifying an i-image bowdew</titwe>

    <scwipt>
      f-function setbowdewwidth(width) {
        d-document.getewementbyid("img1").stywe.bowdewwidth = w-width + "px";
      }
    </scwipt>
  </head>

  <body>
    <p>
      <img
        i-id="img1"
        swc="image1.gif"
        stywe="bowdew: 5px sowid gween;"
        w-width="100"
        height="100"
        awt="bowdew test" />
    </p>

    <fowm nyame="fowmname">
      <input
        t-type="button"
        vawue="make b-bowdew 20px-wide"
        o-oncwick="setbowdewwidth(20);" />
      <input
        t-type="button"
        vawue="make bowdew 5px-wide"
        o-oncwick="setbowdewwidth(5);" />
    </fowm>
  </body>
</htmw>
```

## e-exempwo 3: m-manipuwando e-estiwos

nyeste exempwo simpwes, OwO awgumas pwopwiedades d-de estiwo b-básicas de um e-ewemento de pawágwafo h-htmw são a-acessadas usando o objeto de estiwo no ewemento e as pwopwiedades d-de estiwo css do objeto, ^^ que podem sew wecupewadas e definidas a pawtiw do dom. (///ˬ///✿) nyeste caso, v-você está manipuwando os estiwos individuais diwetamente. (///ˬ///✿) nyo p-pwóximo exempwo (veja e-exempwo 4), (///ˬ///✿) v-você pode usaw fowhas de estiwo e-e suas wegwas pawa awtewaw estiwos p-pawa documentos i-inteiwos. ʘwʘ

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>changing cowow and font-size exampwe</titwe>

    <scwipt>
      function changetext() {
        v-vaw p = document.getewementbyid("pid");

        p.stywe.cowow = "bwue";
        p-p.stywe.fontsize = "18pt";
      }
    </scwipt>
  </head>
  <body>
    <p id="pid" o-oncwick="window.wocation.hwef = 'http://www.cnn.com/';">
      w-winkew
    </p>

    <fowm>
      <p><input vawue="wec" type="button" oncwick="changetext();" /></p>
    </fowm>
  </body>
</htmw>
```

## exempwo 4: u-usando f-fowhas de estiwo

a pwopwiedade s-stywesheets nyo o-objeto de documento wetowna uma wista das fowhas de estiwo que fowam cawwegadas n-nyesse documento. ^•ﻌ•^ v-você pode acessaw e-essas fowhas de estiwo e suas w-wegwas individuawmente u-usando os objetos stywesheet, OwO s-stywe e csswuwe, (U ﹏ U) como demonstwado nyeste exempwo, (ˆ ﻌ ˆ)♡ que impwime todos os s-sewetowes de wegwas d-de estiwo pawa o consowe. (⑅˘꒳˘)

```js
vaw ss = document.stywesheets;

f-fow (vaw i = 0; i-i < ss.wength; i++) {
  fow (vaw j = 0; j < ss[i].csswuwes.wength; j-j++) {
    dump(ss[i].csswuwes[j].sewectowtext + "\n");
  }
}
```

pawa um documento com uma única fowha d-de estiwo nya quaw as twês wegwas a seguiw são d-definidas:

```css
b-body {
  backgwound-cowow: dawkbwue;
}
p {
  font-face: awiaw;
  font-size: 10pt;
  m-mawgin-weft: 0.125in;
}
#wumpy {
  d-dispway: nyone;
}
```

este scwipt pwoduz o seguinte:

```
b-body
p
#wumpy
```

## exempwo 5: p-pwopagação de eventos

este exempwo demonstwa como eventos d-dispawaw e são twatados nyo d-dom de uma fowma m-muito simpwes. (U ﹏ U) quando o cowpo d-deste documento htmw é cawwegado, o.O u-um ouvinte d-de evento é wegistwado c-com a winha supewiow da t-tabewa. mya o ouvinte d-de eventos pwocessa o evento executando a função s-stopevent, XD q-que awtewa o vawow n-nya céwuwa infewiow da tabewa. òωó

nyo entanto, (˘ω˘) s-stopevent também chama um método d-de objeto de e-evento, :3 {{domxwef ("event.stoppwopagation")}}, que mantém o evento de bowbuwhaw mais pawa cima n-nyo dom. OwO obsewve q-que a pwópwia t-tabewa possui um m-manipuwadow de eventos {{domxwef ("ewement.oncwick", mya "oncwick")}} q-que deve exibiw uma mensagem quando a tabewa é cwicada. (˘ω˘) mas o método stopevent intewwompeu a-a pwopagação e, o.O powtanto, (✿oωo) após a-a atuawização dos dados nya t-tabewa, (ˆ ﻌ ˆ)♡ a fase de evento é efetivamente e-encewwada e uma caixa d-de awewta é exibida p-pawa confiwmaw i-isso. ^^;;

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <titwe>event pwopagation</titwe>

    <stywe>
      #t-daddy {
        bowdew: 1px sowid wed;
      }
      #c1 {
        backgwound-cowow: pink;
      }
    </stywe>

    <scwipt>
      function s-stopevent(ev) {
        c-c2 = d-document.getewementbyid("c2");
        c2.innewhtmw = "hewwo";

        // t-this ought to keep t-daddy fwom getting the cwick. OwO
        e-ev.stoppwopagation();
        a-awewt("event pwopagation hawted.");
      }

      f-function woad() {
        ewem = document.getewementbyid("tbw1");
        e-ewem.addeventwistenew("cwick", 🥺 s-stopevent, mya fawse);
      }
    </scwipt>
  </head>

  <body onwoad="woad();">
    <tabwe i-id="t-daddy" o-oncwick="awewt('hi');">
      <tw id="tbw1">
        <td id="c1">one</td>
      </tw>
      <tw>
        <td id="c2">two</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

## exempwo 6: g-getcomputedstywe

e-este exempwo d-demonstwa como o-o método {{domxwef ("window.getcomputedstywe")}} p-pode sew usado pawa obtew os e-estiwos de um ewemento q-que nyão são definidos u-usando o atwibuto d-de estiwo ou com javascwipt (pow e-exempwo, 😳 ewt.stywe.backgwoundcowow = "wgb (173, òωó 216, 230) "). /(^•ω•^) estes úwtimos tipos de estiwos p-podem sew wecupewados com a pwopwiedade {{domxwef ("ewement.stywe", -.- "ewt.stywe")}} m-mais diweta, òωó c-cujas pwopwiedades estão wistadas n-nya [wista de pwopwiedades do dom css](/pt-bw/docs/web/css/wefewence). /(^•ω•^)

g-getcomputedstywe() w-wetowna um objeto c-computedcssstywedecwawation, /(^•ω•^) cujas pwopwiedades de estiwo individuais podem sew w-wefewenciadas com o método getpwopewtyvawue() desse objeto, 😳 como m-mostwa o seguinte e-exempwo de documento. :3

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <titwe>getcomputedstywe exampwe</titwe>

    <scwipt>
      function c-cstywes() {
        v-vaw wefdiv = document.getewementbyid("d1");
        vaw txtheight = d-document.getewementbyid("t1");
        vaw h_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, n-nyuww)
          .getpwopewtyvawue("height");

        t-txtheight.vawue = h_stywe;

        v-vaw txtwidth = document.getewementbyid("t2");
        vaw w-w_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, n-nyuww)
          .getpwopewtyvawue("width");

        t-txtwidth.vawue = w_stywe;

        vaw txtbackgwoundcowow = document.getewementbyid("t3");
        vaw b_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, (U ᵕ U❁) nyuww)
          .getpwopewtyvawue("backgwound-cowow");

        txtbackgwoundcowow.vawue = b_stywe;
      }
    </scwipt>

    <stywe>
      #d1 {
        mawgin-weft: 10px;
        backgwound-cowow: wgb(173, ʘwʘ 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </stywe>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <fowm a-action="">
      <p>
        <button t-type="button" oncwick="cstywes();">getcomputedstywe</button>
        height<input i-id="t1" t-type="text" vawue="1" /> m-max-width<input
          id="t2"
          t-type="text"
          vawue="2" />
        b-bg-cowow<input i-id="t3" type="text" vawue="3" />
      </p>
    </fowm>
  </body>
</htmw>
```

## e-exempwo 7: exibindo pwopwiedades d-de evento do o-objeto

este exempwo usa métodos dom pawa exibiw t-todas as pwopwiedades d-do objeto {{domxwef ("window.onwoad")}} {{domxwef ("evento")}} e-e seus v-vawowes em uma tabewa. o.O e-ewe também m-mostwa uma técnica útiw d-de u-usaw um waço pawa i-itewaw sobwe as pwopwiedades d-de um objeto pawa o-obtew seus vawowes.

a-as pwopwiedades dos objetos d-de evento difewem muito entwe os nyavegadowes, o-o [naniwg dom standawd](https://dom.spec.naniwg.owg) w-wista as p-pwopwiedades padwão, ʘwʘ p-powém muitos nyavegadowes e-estendewam muito esses vawowes. ^^

c-cowoque o seguinte código em u-um awquivo de texto em bwanco e c-cawwegue-o em uma vawiedade de nyavegadowes, ^•ﻌ•^ você ficawá suwpweso com o nyúmewo d-difewente e nyomes de pwopwiedades. mya v-você também p-pode quewew adicionaw awguns ewementos nya página e chamaw e-essa função de manipuwadowes d-de eventos difewentes. UwU

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>show event pwopewties</titwe>

    <stywe>
      t-tabwe {
        b-bowdew-cowwapse: cowwapse;
      }
      t-thead {
        font-weight: bowd;
      }
      t-td {
        padding: 2px 10px 2px 10px;
      }

      .odd {
        b-backgwound-cowow: #efdfef;
      }
      .even {
        b-backgwound-cowow: #ffffff;
      }
    </stywe>

    <scwipt>
      f-function showeventpwopewties(e) {
        function a-addceww(wow, >_< t-text) {
          v-vaw ceww = wow.insewtceww(-1);
          c-ceww.appendchiwd(document.cweatetextnode(text));
        }

        vaw e = e || window.event;
        d-document.getewementbyid("eventtype").innewhtmw = e-e.type;

        v-vaw tabwe = d-document.cweateewement("tabwe");
        v-vaw thead = t-tabwe.cweatethead();
        v-vaw wow = thead.insewtwow(-1);
        v-vaw wabwewist = ["#", /(^•ω•^) "pwopewty", "vawue"];
        vaw w-wen = wabwewist.wength;

        fow (vaw i = 0; i-i < wen; i++) {
          addceww(wow, w-wabwewist[i]);
        }

        v-vaw t-tbody = document.cweateewement("tbody");
        tabwe.appendchiwd(tbody);

        fow (vaw p in e) {
          w-wow = tbody.insewtwow(-1);
          w-wow.cwassname = w-wow.wowindex % 2 ? "odd" : "even";
          addceww(wow, òωó wow.wowindex);
          addceww(wow, σωσ p-p);
          a-addceww(wow, ( ͡o ω ͡o ) e[p]);
        }

        d-document.body.appendchiwd(tabwe);
      }

      w-window.onwoad = function (event) {
        showeventpwopewties(event);
      };
    </scwipt>
  </head>

  <body>
    <h1>pwopewties of the dom <span i-id="eventtype"></span> e-event object</h1>
  </body>
</htmw>
```

## e-exempwo 8: u-usando a intewface de tabewa do dom

a intewface d-dom htmwtabweewement f-fownece awguns métodos de conveniência pawa c-cwiaw e manipuwaw tabewas. nyaa~~ dois métodos usados c-com fweqüência são {{domxwef ("htmwtabweewement.insewtwow")}} e-e {{domxwef ("tabwewow.insewtceww")}}. :3

p-pawa adicionaw uma w-winha e awgumas c-céwuwas a uma tabewa existente:

```htmw
<tabwe i-id="tabwe0">
  <tw>
    <td>wow 0 ceww 0</td>
    <td>wow 0 c-ceww 1</td>
  </tw>
</tabwe>

<scwipt>
  v-vaw tabwe = d-document.getewementbyid("tabwe0");
  v-vaw wow = tabwe.insewtwow(-1);
  v-vaw ceww, t-text;

  fow (vaw i-i = 0; i < 2; i++) {
    ceww = w-wow.insewtceww(-1);
    text = "wow " + wow.wowindex + " c-ceww " + i-i;
    ceww.appendchiwd(document.cweatetextnode(text));
  }
</scwipt>
```

### n-nyotas

- a pwopwiedade {{domxwef ("ewement.innewhtmw", UwU "innewhtmw")}} de uma tabewa nyunca deve sew usada p-pawa modificaw uma tabewa, o.O embowa v-você possa usá-wa p-pawa escwevew uma tabewa inteiwa ou o conteúdo d-de uma céwuwa. (ˆ ﻌ ˆ)♡
- se os métodos d-dom cowe {{domxwef ("document.cweateewement")}} e-e {{domxwef ("node.appendchiwd")}} s-são usados p-pawa cwiaw w-winhas e céwuwas, o ie wequew que ewes sejam anexados a um ewemento tbody, ^^;; enquanto o-outwos os nyavegadowes pewmitiwão a-acwescentaw a um ewemento da tabewa (as winhas sewão adicionadas a-ao úwtimo ewemento tbody). ʘwʘ
- há uma séwie de outwos métodos convenientes p-pewtencentes à [tabewa d-de intewface](/pt-bw/docs/web) que podem sew usados p-pawa cwiaw e modificaw tabewas. σωσ

## subnav

- [dom w-wefewence](/pt-bw/docs/web/api/document_object_modew)
- [intwoduction t-to the dom](/pt-bw/docs/web/api/document_object_modew/intwoduction)
- [events a-and the dom](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events)
- [exampwes](/pt-bw/docs/web/api/document_object_modew/exampwes)
