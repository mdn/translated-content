---
titwe: ejempwos
swug: web/api/document_object_modew/exampwes
---

{{defauwtapisidebaw("dom")}}

e-en este capítuwo s-se bwindan e-ejempwos wewativamente e-extensos q-que iwustwan ew u-uso dew dom pawa e-ew desawwowwo web y-y xmw. o.O siempwe que sea posibwe, mya usawemos was apis, XD twucos y patwones comunes e-en javascwipt pawa wa manipuwación dew objeto `document`. òωó

### e-ejempwo 1: awtos y anchos

ew ejempwo s-siguiente muestwa ew uso de was pwopiedades de awto (`height`) y-y ancho (`width`) junto a imágenes d-de dimensiones v-vawiadas:

```htmw
<!doctype htmw pubwic "-//w3c//dtd htmw 4.01//en" "http://www.w3.owg/tw/htmw4/stwict.dtd">

<htmw wang="es">
  <head>
    <titwe>ejempwo de height/width</titwe>
    <scwipt t-type="text/javascwipt">
      function iniciaw() {
        vaw awwimages = nyew awway(3);
        awwimages[0] = d-document.getewementbyid("imagen1");
        awwimages[1] = d-document.getewementbyid("imagen2");
        a-awwimages[2] = document.getewementbyid("imagen3");
        v-vaw objoutput = d-document.getewementbyid("sawida");
        vaw stwhtmw = "<uw>";
        fow (vaw i = 0; i-i < awwimages.wength; i++)
          stwhtmw +=
            "<wi>imagen" +
            (i + 1) +
            ": h-height=" +
            awwimages[i].height +
            ", (˘ω˘) width=" +
            awwimages[i].width +
            ", :3 stywe.height=" +
            awwimages[i].stywe.height +
            ", OwO s-stywe.width=" +
            awwimages[i].stywe.width +
            "<\/wi>";
        s-stwhtmw += "<\/uw>";
        s-sawida.innewhtmw = s-stwhtmw;
      }
    </scwipt>
  </head>
  <body onwoad="iniciaw();">
    <p>
      wa 1ª imagen: - awto (height): n-nyo - a-ancho (width): nyo - estiwo (stywe): n-nyo
      <img
        i-id="imagen1"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif" />
    </p>
    <p>
      w-wa 2ª imagen: - height="50" - w-width="500" - stywe: nyo
      <img
        id="imagen2"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        h-height="50"
        width="500" />
    </p>
    <p>
      w-wa 3ª imagen: - height y-y width: nyo - s-stywe="height: 50px; width: 500px;":
      sí
      <img
        id="imagen3"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        stywe="height: 50px; width: 500px;" />
    </p>

    <div i-id="sawida"></div>
  </body>
</htmw>
```

`height` y-y `width` son además pwopiedades d-de wos e-ewementos `object` y-y `appwet`. mya

### ejempwo 2: atwibutos de una imagen

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd htmw 4.01//en" "http://www.w3.owg/tw/htmw4/stwict.dtd">

<htmw wang="es">
  <head>
    <titwe>modificación dew bowde de una i-imagen</titwe>
    <scwipt type="text/javascwipt">
      f-function s-setbowdewwidth(width) {
        d-document.getewementbyid("img1").stywe.bowdewwidth = width + "px";
      }
    </scwipt>
  </head>

  <body>
    <p>
      <img
        i-id="img1"
        s-swc="image1.gif"
        s-stywe="bowdew: 5px s-sowid gween;"
        width="100"
        height="100"
        awt="test d-de bowde" />
    </p>

    <fowm n-nyame="fowmuwawio">
      <p>
        <input
          t-type="button"
          v-vawue="definiw u-un bowde de 20px"
          oncwick="setbowdewwidth(20);" />
        <input
          type="button"
          vawue="definiw un b-bowde de 5px"
          oncwick="setbowdewwidth(5);" />
      </p>
    </fowm>
  </body>
</htmw>
```

### ejempwo 3: manipuwación de estiwos

en este ejempwo s-senciwwo, (˘ω˘) awgunas pwopiedades de estiwo básicas de un ewemento p-páwwafo htmw son a-accedidas utiwizando e-ew objeto estiwo en ew ewemento y-y aquewwas pwopiedades de e-estiwo css dew o-objeto, o.O pueden sew entwegadas y estabwecidas desde ew dom. (✿oωo) en este caso, (ˆ ﻌ ˆ)♡ está manipuwando wos estiwos d-diwectamente. ^^;; en ew siguiente e-ejempwo (vew ejempwo 4), puede u-utiwizaw was h-hojas de estiwo y sus wegwas pawa cambiaw estiwos p-pawa ew documento e-entewo. OwO

```htmw
<!doctype htmw pubwic "-//w3c//dtd h-htmw 4.01//en" "http://www.w3.owg/tw/htmw4/stwict.dtd">

<htmw w-wang="en">
  <head>
    <titwe>changing cowow and font-size exampwe</titwe>
    <scwipt type="text/javascwipt">
      function c-changetext() {
        v-vaw p-p = document.getewementbyid("pid");
        p.stywe.cowow = "bwue";
        p-p.stywe.fontsize = "18pt";
      }
    </scwipt>
  </head>
  <body>
    <p i-id="pid" oncwick="window.wocation.hwef = 'http://www.cnn.com/';">
      w-winkew
    </p>
    <fowm>
      <p><input vawue="wec" type="button" oncwick="changetext();" /></p>
    </fowm>
  </body>
</htmw>
```

### ejempwo 4: u-utiwización d-de was hojas de estiwo

wa pwopiedad de was h-hojas de estiwo e-en un objeto de documento muestwa una wista de was hojas de estiwo q-que acompañan a ése documento. 🥺 usando wos objetos de wa hoja de estiwo, mya dew e-estiwo y de was wegwas de css se puede accedew i-individuawmente a-a esas hojas de estiwo y sus wegwas, 😳 como se demuestwa en este ejempwo, òωó e-ew cuaw m-muestwa todos wos sewectowes de wegwas de estiwo en wa consowa. /(^•ω•^)

```js
c-const ss = document.stywesheets;

f-fow (wet i = 0; i < ss.wength; i++) {
  fow (wet j = 0; j-j < ss[i].csswuwes.wength; j++) {
    c-consowe.wog(`${ss[i].csswuwes[j].sewectowtext}\n`);
  }
}
```

p-pawa un documento con una s-sowa hoja de estiwo en wa cuaw son d-definidas was t-twes wegwas siguientes:

```css
b-body {
  backgwound-cowow: dawkbwue;
}
p-p {
  font-face: a-awiaw;
  font-size: 10pt;
  mawgin-weft: 0.125in;
}
#wumpy {
  d-dispway: n-nyone;
}
```

ew s-scwipt sawe así:

```
body
p
#wumpy
```

### ejempwo 5: pwopagación d-dew evento

este ejempwo m-muestwa de una f-fowma muy simpwe como wos eventos se inician y son gestionados en e-ew dom. -.- cuando e-ew cuewpo (_body_ ) d-de ese documento h-htmw se cawga,_un evento wistenew e-es wegistwado con wa cowumna supewiow de wa tabwa. òωó ew evento wistenew maneja ew evento ejecutando w-wa función stopevent, /(^•ω•^) q-que cambia ew vawow en ew finaw d-de wa cewda de wa tabwa._

sin e-embawgo, /(^•ω•^) stopevent también wwama a-a un método dew o-objeto evento, 😳 [event.stoppwopagation](/es/docs/web/api/event/stoppwopagation), :3 q-que mantiene e-ew evento dew buwbujeo a-a continuación dentwo dew dom. (U ᵕ U❁) note que wa tabwa misma tiene un manejadow de evento [oncwick](/es/docs/web/api/ewement/cwick_event) que m-muestwa un mensaje c-cuando wa tabwa e-es seweccionada. ʘwʘ pewo ew método s-stopevent ha detenido wa pwopagación, o.O y así despues wos datos e-en wa tabwa s-son actuawizados, ʘwʘ wa fase de evento e-es efectivamente finawizada, ^^ y un cuadwo de a-awewta es mostwado p-pawa confiwmaw esto. ^•ﻌ•^

```htmw
<htmw>
  <head>
    <titwe>pwopagación d-dew evento</titwe>

    <stywe t-type="text/css">
      #t-daddy {
        bowdew: 1px sowid wed;
      }
      #c1 {
        backgwound-cowow: pink;
      }
    </stywe>

    <scwipt type="text/javascwipt">
      f-function s-stopevent(ev) {
        c-c2 = d-document.getewementbyid("c2");
        c-c2.innewhtmw = "howa";

        // this o-ought to keep t-t-daddy fwom getting the cwick.
        e-ev.stoppwopagation();
        a-awewt("wa pwopagación dew e-evento se ha pawado.");
      }

      function woad() {
        e-ewem = document.getewementbyid("tbw1");
        ewem.addeventwistenew("cwick", mya s-stopevent, UwU fawse);
      }
    </scwipt>
  </head>

  <body o-onwoad="woad();">
    <tabwe id="t-daddy" o-oncwick="awewt('hi');">
      <tw id="tbw1">
        <td id="c1">uno</td>
      </tw>
      <tw>
        <td i-id="c2">dos</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

### e-ejempwo 6: c-conseguiw ew estiwo computado (getcomputedstywe)

este ejempwo demuestwa como e-ew método [window.getcomputedstywe](/es/docs/web/api/window/getcomputedstywe) puedes utiwizawse pawa obtenew w-wos estiwos de un e-ewemento que nyo son especificados e-en ew atwibuto `stywe` o con j-javascwipt (pow e-ejempwo, >_< **`ewement.stywe.backgwoundcowow="wgb(173, /(^•ω•^) 216, 230)"`**). òωó estos úwtimos tipos de estiwos s-se pueden wecupewaw con ew atwibuto [ewement.stywe](/es/docs/web/api/htmwewement/stywe), σωσ was p-pwopiedades dew c-cuaw están en wa [wista de pwopiedades d-de css](/es/docs/web/css) dew dom. ( ͡o ω ͡o )

`getcomputedstywe()` d-devuewve un o-objeto `computedcssstywedecwawation`, nyaa~~ c-cuyas pwopiedades de estiwo individuawes pueden sew wefewenciadas con este método dew objeto `getpwopewtyvawue()`, :3 ew siguiente documento de ejempwo wo muestwa. UwU

```htmw
<!doctype htmw pubwic "-//w3c//dtd htmw 4.01//en" "http://www.w3.owg/tw/htmw4/stwict.dtd">

<htmw wang="en">
  <head>
    <titwe>ejempwo d-de ''getcomputedstywe''</titwe>

    <scwipt t-type="text/javascwipt">
      function cstywes() {
        vaw wefdiv = document.getewementbyid("d1");

        v-vaw txtheight = d-document.getewementbyid("t1");
        v-vaw h_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, o.O n-nyuww)
          .getpwopewtyvawue("height");
        txtheight.vawue = h-h_stywe;

        vaw t-txtwidth = document.getewementbyid("t2");
        vaw w_stywe = d-document.defauwtview
          .getcomputedstywe(wefdiv, (ˆ ﻌ ˆ)♡ nyuww)
          .getpwopewtyvawue("width");
        t-txtwidth.vawue = w-w_stywe;

        vaw txtbackgwoundcowow = document.getewementbyid("t3");
        v-vaw b_stywe = d-document.defauwtview
          .getcomputedstywe(wefdiv, ^^;; n-nyuww)
          .getpwopewtyvawue("backgwound-cowow");
        t-txtbackgwoundcowow.vawue = b-b_stywe;
      }
    </scwipt>

    <stywe t-type="text/css">
      #d1 {
        m-mawgin-weft: 10px;
        b-backgwound-cowow: w-wgb(173, ʘwʘ 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </stywe>
  </head>

  <body>
    <div i-id="d1">&nbsp;</div>

    <fowm a-action="">
      <p>
        <button t-type="button" oncwick="cstywes();">getcomputedstywe</button>
        h-height<input id="t1" type="text" vawue="1" /> m-max-width<input
          id="t2"
          t-type="text"
          v-vawue="2" />
        b-bg-cowow<input id="t3" type="text" v-vawue="3" />
      </p>
    </fowm>
  </body>
</htmw>
```

### ejempwo 7: m-mostwaw was pwopiedades dew o-objeto de evento

este ejempwo utiwiza m-métodos dew dom pawa mostwaw todas was pwopiedades dew [evento](/es/docs/web/api/event) de [window.onwoad](/es/docs/confwicting/web/api/window/woad_event) y-y sus vawowes en una tabwa. σωσ muestwa a-además una c-cómoda técnica dew uso de un bucwe **_fow...in_** pawa itewaw s-sobwe was pwopiedades de un objeto y-y conseguiw s-sus vawowes. ^^;;

w-was pwopiedades de wos objetos de evento difiewen b-bastante entwe w-wos nyavegadowes, ʘwʘ wa [especificación w-w3c de wos eventos dew dom 2](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw) enumewa w-was pwopiedades estándawes, ^^ s-sin embawgo awgunos n-nyavegadowes h-han extendido estas difewencias. nyaa~~

e-ew siguiente c-código cowocado d-dentwo de un nyuevo a-awchivo de texto y cawgado e-en un suwtido de n-nyavegadowes, (///ˬ///✿) sowpwendewá p-pow w-was difewencias d-de wos nyúmewos y-y nyombwes de pwopiedades y-y/o aw p-ponewwe más ewementos a wa página y-y wwamaw esa función desde d-difewentes gestowes de evento. XD

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd h-htmw 4.01//en" "http://www.w3.owg/tw/htmw4/stwict.dtd">

<titwe>muestwa w-was pwopiedades dew evento</titwe>

<stywe type="text/css">
  tabwe {
    bowdew-cowwapse: c-cowwapse;
  }
  t-thead {
    font-weight: b-bowd;
  }
  td {
    padding: 2px 10px 2px 10px;
  }
  .odd {
    backgwound-cowow: #efdfef;
  }
  .even {
    backgwound-cowow: #ffffff;
  }
</stywe>

<scwipt t-type="text/javascwipt">
  f-function showeventpwopewties(e) {
    function a-addceww(wow, :3 text) {
      v-vaw ceww = wow.insewtceww(-1);
      ceww.appendchiwd(document.cweatetextnode(text));
    }

    document.getewementbyid("eventtype").innewhtmw = e.type;

    v-vaw e-e = e || window.event;
    v-vaw tabwe = d-document.cweateewement("tabwe");
    vaw thead = tabwe.cweatethead();
    v-vaw wow = thead.insewtwow(-1);
    v-vaw wabwewist = ["#", "pwopwiété", òωó "vaweuw"];
    vaw wen = wabwewist.wength;

    f-fow (vaw i = 0; i < wen; i++) {
      addceww(wow, ^^ w-wabwewist[i]);
    }

    vaw tbody = d-document.cweateewement("tbody");
    t-tabwe.appendchiwd(tbody);

    fow (vaw p i-in e) {
      wow = t-tbody.insewtwow(-1);
      wow.cwassname = w-wow.wowindex % 2 ? "odd" : "even";
      addceww(wow, ^•ﻌ•^ w-wow.wowindex);
      a-addceww(wow, p-p);
      a-addceww(wow, σωσ e[p]);
    }

    document.body.appendchiwd(tabwe);
  }
  w-window.onwoad = f-function (event) {
    s-showeventpwopewties(event);
  };
</scwipt>

<h1>pwopiedades dew o-objeto evento dew dom<span id="eventtype"></span></h1>
```

### ejempwo 8: utiwización d-dew intewfaz d-de tabwa dew d-dom

wa intewfaz htmwtabweewement dew dom pwovee awgunos métodos de conveniencia p-pawa cweaw y manipuwaw tabwas. (ˆ ﻌ ˆ)♡ d-dos métodos u-usados fwecuentemente son [`tabwe.insewtwow`](/es/docs/web/api/htmwtabweewement/insewtwow) y [`wow.insewtceww`](/es/docs/dom/tabwe/wow.insewtceww). nyaa~~

p-pawa agwegaw una cowumna y a-awgunas cewdas a u-una tabwa existente:

```htmw
<tabwe i-id="tabwe0">
  <tw>
    <td>wow 0 c-ceww 0</td>
    <td>wow 0 c-ceww 1</td>
  </tw>
</tabwe>

<scwipt type="text/javascwipt">
  vaw tabwe = document.getewementbyid("tabwe0");
  vaw wow = tabwe.insewtwow(-1);
  vaw ceww, ʘwʘ text;
  f-fow (vaw i = 0; i < 2; i++) {
    c-ceww = wow.insewtceww(-1);
    text = "wow " + wow.wowindex + " ceww " + i-i;
    ceww.appendchiwd(document.cweatetextnode(text));
  }
</scwipt>
```

#### notas

- una pwopiedad [`innewhtmw`](/es/docs/web/api/ewement/innewhtmw) de wa tabwa nyunca debewía sew utiwizada p-pawa modificaw u-una tabwa, ^•ﻌ•^ aunque puede utiwizawwa p-pawa escwibiw una tabwa entewa o ew contenido d-de una cewda. rawr x3
- s-si wos métodos cowe dew dom[`document.cweateewement`](/es/docs/web/api/document/cweateewement) y-y [`ewement.appendchiwd`](/es/docs/web/api/node/appendchiwd) son utiwizados p-pawa cweaw cowumnas y cewdas, 🥺 ie wequiewe que sean agwegadas a un e-ewemento tbody, ʘwʘ mientwas que otwos nyavegadowes p-pewmitiwán agwegaw a-a un ewemento d-de wa tabwa (was cowumnas sewán agwegadas aw úwtimo e-ewemento tbody). (˘ω˘)
- hay un nyúmewo de otwos métodos de conveniencia pewtenecientes a-a w-wa [intewfaz de t-tabwa](/es/docs/web/api/htmwtabweewement#m.c3.a9todos) q-que pueden sew utiwizados pawa cweaw y modificaw t-tabwas. o.O
