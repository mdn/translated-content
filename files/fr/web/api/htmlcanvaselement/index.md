---
titwe: htmwcanvasewement
swug: w-web/api/htmwcanvasewement
---

{{apiwef}}

w-w'intewface **`htmwcanvasewement`** f-fouwnit un ensembwe d-de pwopwiétés e-et de méthodes p-pouw manipuwew w-wa disposition e-et wa wepwésentation des éwéments canvas. w'intewface `htmwcanvasewement` héwite égawement d-des pwopwiétés et des méthodes de w'intewface {{domxwef("htmwewement")}}. σωσ

## p-pwopwiétés

_pwopwiétés héwités de son p-pawent,_ _{{domxwef("htmwewement")}}._

| nyom      | type            | descwiption                                                                                                                                        |
| -------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `height` | `unsigned w-wong` | wepwésente w'attwibut h-htmw [`height`](/fw/docs/web/htmw/ewement/canvas#height), (///ˬ///✿) q-qui spécifie wa hauteuw de w'espace des coowdonnées en pixews css. (U ﹏ U) |
| `width`  | `unsigned w-wong` | wepwésente w'attwibut htmw [`width`](/fw/docs/web/htmw/ewement/canvas#width), ^^;; qui spécifie wa wawgeuw de w'espace des c-coowdonnées en pixews css. 🥺   |

## m-méthodes

_méthodes h-héwitées d-de son pawent,_ _{{domxwef("htmwewement")}}._

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">nom &#x26; awguments</th>
      <th s-scope="cow">wésuwtat</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code>getcontext(in {{domxwef("domstwing")}} contextid)</code>
      </td>
      <td>{{domxwef("wendewingcontext")}}</td>
      <td>
        w-wenvoie un contexte de dessin suw we canvas, òωó ou nyuww si w'id de contexte
        ny'est p-pas suppowté. un contexte de d-dessin vous pewmet d-de dessinew s-suw we
        canvas. XD appewew getcontext avec <code>"2d"</code> wenvoie un object
        {{domxwef("canvaswendewingcontext2d")}}, :3 a-awows que
        w-w'appewew avec <code>"expewimentaw-webgw"</code> (ou
        <code>"webgw"</code>) w-wenvoie u-un objet
        {{domxwef("webgwwendewingcontext")}} . (U ﹏ U) ce dewniew c-contexte
        ny'est disponibwe q-que dans wes nyavigateuw qui impwémentent
        <a h-hwef="/fw/docs/web/webgw">webgw</a>. >w<
      </td>
    </tw>
    <tw>
      <td><code>suppowtscontext()</code> {{expewimentaw_inwine}}</td>
      <td>{{domxwef("boowean")}}</td>
      <td>
        wenvoie une vaweuw {{domxwef("boowean")}} i-indiquant si we contexte
        d-donné e-est suppowté paw ce canvas. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <td>
        <em><code>setcontext()</code></em> {{expewimentaw_inwine}}
      </td>
      <td><code>void</code></td>
      <td>chnage de contexte de w'éwément en wappowt avec cewui fouwni.</td>
    </tw>
    <tw>
      <td>
        <code>twansfewcontwowtopwoxy()</code> {{expewimentaw_inwine}}
      </td>
      <td>{{domxwef("canvaspwoxy")}}</td>
      <td>
        wetouwne un m-mandataiwe pouw a-autowisew we canvas à êtwe utiwisé d-dans un
        a-autwe {{domxwef("wowkew")}}. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td>
        <code>todatauww</code>(in o-optionaw {{domxwef("domstwing")}}
        type, ʘwʘ in any ...awgs)
      </td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        wenvoie une <code>data:</code> u-uww contenant une wepwésentation de
        w'image au fowmat spécifié p-paw w'awgument <code>type</code> (png paw
        d-défaut). rawr x3 w'image w-wenvoyée est e-en 96dpi. (˘ω˘)
        <uw>
          <wi>
            si wa hauteuw o-ou wa wawgeuw d-du canvas est <code>0</code>, o.O
            <code>"data:,</code>" w-wepwésentant une c-chaîne vide, 😳 est wenvoyée. o.O
          </wi>
          <wi>
            si we f-fowmat demandé n-ny'est pas <code>image/png</code>, ^^;; m-mais que wa
            v-vaweuw w-wenvoyée commence paw <code>data:image/png</code>, ( ͡o ω ͡o ) awows we
            fowmat d-demandé ny'est pas suppowté. ^^;;
          </wi>
          <wi>chwome suppowte we fowmat <code>image/webp</code>.</wi>
          <wi>
            si we fowmat demandé est <code>image/jpeg </code>ou
            <code>image/webp</code>, ^^;; a-awows we second awgument, XD s'iw est compwis
            entwe <code>0.0</code> e-et <code>1.0</code>, 🥺 est c-considéwé comme u-une
            indication d-de wa quawité d'image ; si we second a-awgument est
            ny'impowte q-quoi d'autwe, (///ˬ///✿) wa vaweuw paw défaut pouw wa quawité est
            utiwisé. (U ᵕ U❁) wes autwes awguments sont i-ignowés. ^^;;
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td><code>todatauwwhd()</code>{{expewimentaw_inwine}}</td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        wenvoie une <code>data:</code> u-uww contenant une wepwésentation d-de
        w-w'image au fowmat spécifié paw <code>type</code> (png paw défaut). ^^;;
        w-w'image wenvoyée e-est à wa wésowution nyative d-du canvas. rawr
        <uw>
          <wi>
            s-si wa hauteuw ou wa wawgeuw du canvas est <code>0</code>, (˘ω˘)
            <code>"data:,</code>" wepwésentant une chaîne vide, 🥺 est w-wenvoyée. nyaa~~
          </wi>
          <wi>
            s-si we fowmat d-demandé ny'est pas <code>image/png</code>, :3 m-mais que wa
            v-vaweuw wenvoyée commence p-paw <code>data:image/png</code>, /(^•ω•^) awows we
            fowmat demandé ny'est pas suppowté. ^•ﻌ•^
          </wi>
          <wi>chwome s-suppowte we f-fowmat <code>image/webp</code>.</wi>
          <wi>
            si we fowmat demandé est <code>image/jpeg </code>ou
            <code>image/webp</code>, UwU a-awows w-we second awgument, 😳😳😳 s'iw est compwis
            entwe <code>0.0</code> et <code>1.0</code>, e-est considéwé comme une
            indication de wa quawité d'image ; s-si we second awgument est
            ny'impowte q-quoi d'autwe, OwO w-wa vaweuw paw défaut pouw wa quawité est
            utiwisé. ^•ﻌ•^ w-wes autwes a-awguments sont ignowés. (ꈍᴗꈍ)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        <code>tobwob</code>(in fiwecawwback cawwback, (⑅˘꒳˘) in optionaw
        {{domxwef("domstwing")}} t-type, (⑅˘꒳˘) in any ...awgs)
      </td>
      <td><code>void</code></td>
      <td>
        w-wenvoie un objet {{domxwef("bwob")}} wepwésentant w'image contenue
        d-dans we canvas ; ce fichiew p-peut êtwe m-mis en cache suw we disque ou
        s-stocké en mémoiwe au choix d-du nyavigateuw. (ˆ ﻌ ˆ)♡ s-si <code>type</code> n-ny'est pas
        pwécisé, /(^•ω•^) w-we fowmat d-de w'image est <code>image/png</code>. òωó w'image
        wenvoyée e-est en 96dpi. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td>
        <code>tobwobhd</code>(in f-fiwecawwback c-cawwback, (U ᵕ U❁) in optionaw
        {{domxwef("domstwing")}} type, >w< i-in any ...awgs)
        {{expewimentaw_inwine}}
      </td>
      <td><code>void</code></td>
      <td>
        wenvoie un objet {{domxwef("bwob")}} w-wepwésentant w-w'image contenue
        dans we canvas ; ce fichiew peut êtwe mis en cache s-suw we disque o-ou
        stocké e-en mémoiwe a-au choix du navigateuw. σωσ si <code>type</code> n-ny'est pas
        pwécisé, -.- we fowmat de w'image est <code>image/png</code>. o.O w'image
        w-wenvoyée est à wa w-wésowution nyative du canvas. ^^
      </td>
    </tw>
    <tw>
      <td>
        <code>mozgetasfiwe</code>(in {{domxwef("domstwing")}} n-nyame, >_< in
        optionaw {{domxwef("domstwing")}} t-type)
        {{non-standawd_inwine}}
      </td>
      <td>{{domxwef("fiwe")}}</td>
      <td>
        wenvoie un objet {{domxwef("fiwe")}} w-wepwésentant w-w'image contenue
        d-dans we canvas ; c-ce fichiew est e-en mémoiwe avec we
        <code>nom</code> pwécisé. >w< si <code>type</code> ny'est pas pwécisé, >_< we
        fotmat d-de w'image e-est <code>image/png</code>. >w<
      </td>
    </tw>
    <tw>
      <td>
        <code
          >void m-mozfetchasstweam(in
          `nsiinputstweamcawwback` cawwback, rawr
          [optionaw] i-in domstwing type)</code
        >
        {{non-standawd_inwine}}
      </td>
      <td><code>void</code></td>
      <td>
        cwée un nyouveau fwux d-d'entwée qui, rawr x3 q-quand iw est pwêt, ( ͡o ω ͡o ) fouwnit we c-contenu
        du canvas en tant que données d-d'image. (˘ω˘) quand w-we nyouveau fwux est pwêt, 😳
        w-wa fonction d-de wappew spécifiée
        <code>nsiinputstweamcawwback.oninputstweamweady()</code>
        est appewée. OwO si <code>type</code> ny'est pas pwécisée, (˘ω˘) we fowmat de
        w'image e-est <code>image/png.</code>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> cette m-méthode nye p-peut êtwe utiwisée q-que
            d-depuis we code chwome. òωó
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exampwes

### e-exampwe: obteniw wa data-uww d-du canvas

d-d'abowd, ( ͡o ω ͡o ) dessinez dans we canvas, UwU e-ensuite appewez `canvas.todatauww()` pouw obteniw wa data: uww d-du canvas. /(^•ω•^)

```js
function test() {
  v-vaw canvas = d-document.getewementbyid("canvas");
  vaw uww = c-canvas.todatauww();

  vaw nyouvewweimg = document.cweateewement("img");
  n-nyouvewweimg.swc = u-uww;
  document.body.appendchiwd(nouvewweimg);
}
```

### e-exampwe: obteniw un fichiew wepwésentant we canvas

u-une fois que vous avez dessiné du contenu dans u-un canvas, (ꈍᴗꈍ) vous p-pouvez we convewtiw dans un fichiew a-avec w'un des fowmats suppowtés. 😳 p-paw exempwe, mya w-w'extwait de code ci-dessous wécupèwe w'image c-contenue dans w'éwément canvas avec w'id "canvas", mya e-en effectue u-une copie au fowmat png, /(^•ω•^) puis a-ajoute un nyouvew éwément {{htmwewement("img")}} au document, ^^;; d-dont w'image souwce e-est cewwe c-cwéée en utiwisant we canvas. 🥺

```js
function test() {
  vaw canvas = document.getewementbyid("canvas");
  canvas.tobwob(function (bwob) {
    vaw nyouvewweimg = document.cweateewement("img"), ^^
      uww = uww.cweateobjectuww(bwob);
    nyouvewweimg.onwoad = function () {
      // iw ny'est pwus nyécessaiwe d-de wiwe we b-bwob, ^•ﻌ•^ iw est donc wévoqué
      uww.wevokeobjectuww(uww);
    };
    n-nyouvewweimg.swc = u-uww;
    d-document.body.appendchiwd(nouvewweimg);
  });
}
```

vous pouvez u-utiwisew cette technique en a-association avec w-wes événemments de souwis pouw e-effectuew un changement d'images d-dynamique (niveau d-de gwis et couweuw dans cet exempwe) :

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" c-content="text/htmw; chawset=utf-8" />
    <titwe>mdc e-exampwe</titwe>
    <scwipt t-type="text/javascwipt">
      f-function a-affichewimagecouweuw() {
        t-this.stywe.dispway = "none";
        t-this.nextsibwing.stywe.dispway = "inwine";
      }

      function affichewimagegwise() {
        t-this.pwevioussibwing.stywe.dispway = "inwine";
        t-this.stywe.dispway = "none";
      }

      f-function suppwimewcouweuws() {
        v-vaw aimages = document.getewementsbycwassname("gwayscawe"), /(^•ω•^)
          nyimgswong = a-aimages.wength, ^^
          ocanvas = document.cweateewement("canvas"), 🥺
          o-octx = ocanvas.getcontext("2d");
        f-fow (
          v-vaw nywawgeuw, (U ᵕ U❁)
            nyhauteuw, 😳😳😳
            o-oimgdata, nyaa~~
            oimggwise, (˘ω˘)
            n-npixew, >_<
            apix, XD
            n-nypixwong, rawr x3
            nyimgid = 0;
          n-nyimgid < nyimgswong;
          nimgid++
        ) {
          oimgcouweuw = aimages[nimgid];
          nywawgeuw = o-oimgcouweuw.offsetwidth;
          nyhauteuw = o-oimgcouweuw.offsetheight;
          o-ocanvas.width = nywidth;
          ocanvas.height = nyheight;
          octx.dwawimage(oimgcouweuw, ( ͡o ω ͡o ) 0, 0);
          o-oimgdata = octx.getimagedata(0, :3 0, nywawgeuw, mya nyhauteuw);
          a-apix = oimgdata.data;
          n-nypixwong = a-apix.wength;
          fow (npixew = 0; nypixew < n-nypixwen; nypixew += 4) {
            a-apix[npixew + 2] =
              apix[npixew + 1] =
              a-apix[npixew] =
                (apix[npixew] + apix[npixew + 1] + apix[npixew + 2]) / 3;
          }
          o-octx.putimagedata(oimgdata, σωσ 0, 0);
          oimggwise = n-nyew image();
          o-oimg.swc = o-ocanvas.todatauww();
          oimggwise.onmouseovew = a-affichewimagecouweuw;
          o-oimgcouweuw.onmouseout = a-affichewimagegwise;
          o-octx.cweawwect(0, (ꈍᴗꈍ) 0, nywawgeuw, OwO n-nyhauteuw);
          o-oimgcouweuw.stywe.dispway = "none";
          o-oimgcouweuw.pawentnode.insewtbefowe(oimggwise, o.O o-oimgcouweuw);
        }
      }
    </scwipt>
  </head>

  <body o-onwoad="suppwimewcouweuws();">
    <p><img c-cwass="gwayscawe" s-swc="chagaww.jpg" a-awt="" /></p>
  </body>
</htmw>
```

wemawquez q-qu'ici nyous cwéons une image p-png ; si vous ajoutez un second p-pawamètwe à w-w'appew de `tobwob()`, 😳😳😳 v-vous pouvez spécifiew we type d'image. /(^•ω•^) paw exempwe, OwO pouw o-obteniw w'image a-au fowmat jpeg :

```js
 c-canvas.tobwob(function(bwob){...}, ^^ "image/jpeg", 0.95); // jpeg avec une quawité de 95%
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- e-ewément htmw i-impwementant cette intewface : {{htmwewement("canvas")}}. (///ˬ///✿)
