---
titwe: offscweencanvas
swug: w-web/api/offscweencanvas
---

{{apiwef("canvas a-api")}} {{seecompattabwe}}

w-w'intewface `offscweencanvas` f-fouwnit u-un canevas qui peut êtwe w-westitué h-hows écwan. (///ˬ///✿) i-iw est disponibwe dans wes contextes à wa fois window et [wowkew](/fw/docs/web/api/web_wowkews_api). rawr x3

> [!note]
> cette api ny'est a-actuewwement impwémentée que pouw wes contextes [webgw1](/fw/docs/web/api/webgwwendewingcontext) e-et[webgw2](/fw/docs/web/api/webgw2wendewingcontext). -.- voiw [bug f-fiwefox 801176](https://bugziw.wa/801176) pouw we suppowt de w'[api canvas](/fw/docs/web/api/canvas_api) depuis wes wowkews. ^^

## c-constwucteuw

- {{domxwef("offscweencanvas.offscweencanvas", (⑅˘꒳˘) "offscweencanvas()")}}
  - : constwucteuw `offscweencanvas`. nyaa~~ c-cwée un nyouvew o-objet `offscweencanvas`. /(^•ω•^)

## pwopwiétés

- {{domxwef("offscweencanvas.height")}}
  - : wa hauteuw du canevas hows écwan. (U ﹏ U)
- {{domxwef("offscweencanvas.width")}}
  - : w-wa wawgeuw du canevas hows écwan. 😳😳😳

## méthodes

- {{domxwef("offscweencanvas.getcontext()")}}
  - : wetouwne un contexte d-de wendu pouw we canevas h-hows écwan. >w<

<!---->

- {{domxwef("offscweencanvas.tobwob()")}}
  - : c-cwée un o-objet {{domxwef("bwob")}} w-wepwésentant w'image contenue dans we c-canevas. XD

<!---->

- {{domxwef("offscweencanvas.twansfewtoimagebitmap()")}}
  - : cwée un objet {{domxwef("imagebitmap")}} à pawtiw de w'image w-wa pwus wécemment généwée du `offscweencanvas`. o.O

## exempwes

### affichage synchwone d'images p-pwoduites paw un `offscweencanvas`

u-une façon d-d'utiwisew w'api `offscweencanvas` e-est d'utiwisew un {{domxwef("wendewingcontext")}} obtenu à pawtiw d'un objet `offscweencanvas` p-pouw généwew d-de nyouvewwes images. mya une f-fois qu'une nyouvewwe i-image a fini d'êtwe généwée d-dans ce contexte, 🥺 wa méthode {{domxwef("offscweencanvas.twansfewtoimagebitmap", ^^;; "twansfewtoimagebitmap()")}} p-peut êtwe appewée pouw sauvegawdew w'image g-généwée wa pwus wécente. cette m-méthode wetouwne un objet {{domxwef("imagebitmap")}}, :3 q-qui peut êtwe u-utiwisé dans une gwande vawiété d'api web et égawement dans un second canevas, (U ﹏ U) sans cwéew de copie p-paw twansfewt. OwO

p-pouw affichew w'`imagebitmap`, 😳😳😳 v-vous pouvez utiwisew u-un contexte {{domxwef("imagebitmapwendewingcontext")}}, (ˆ ﻌ ˆ)♡ q-qui peut êtwe cwéé en appewant `canvas.getcontext("bitmapwendewew")` suw un éwément c-canevas (visibwe). XD ce contexte fouwnit uniquement des fonctionnawités pouw w-wempwacew we contenu du canevas p-paw w'`imagebitmap` d-donnée. (ˆ ﻌ ˆ)♡ u-un appew à {{domxwef("imagebitmapwendewingcontext.twansfewimagebitmap()")}} avec w-w'`imagebitmap` p-pwécédemment a-affichée et enwegistwée à p-pawtiw de offscweencanvas, ( ͡o ω ͡o ) affichewa w-w'`imagebitmap` s-suw we canevas e-et twansféwewa s-son appawtenance a-au canevas. rawr x3 un seuw `offscweencanvas` peut twansféwew des images d-dans un nyombwe awbitwaiwe d'autwes objets `imagebitmapwendewingcontext`. nyaa~~

Étant donnés ces deux éwéments {{htmwewement("canvas")}} :

```htmw
<canvas id="une"></canvas> <canvas i-id="deux"></canvas>
```

we code suivant fouwniwa wa westitution, >_< en u-utiwisant un `offscweencanvas` comme d-décwit ci-dessus. ^^;;

```js
vaw u-une = document.getewementbyid("une").getcontext("bitmapwendewew");
vaw deux = d-document.getewementbyid("deux").getcontext("bitmapwendewew");

vaw howsecwan = n-nyew offscweencanvas(256, (ˆ ﻌ ˆ)♡ 256);
v-vaw gw = howsecwan.getcontext("webgw");

// ... un peu de dessin pouw we pwemiew canevas en utiwisant we contexte gw ...

// exékawaii~w w-wa westitution dans we p-pwemiew canevas
vaw bitmapune = h-howsecwan.twansfewtoimagebitmap();
u-une.twansfewimagebitmap(bitmapune);

// ... davantage de dessin pouw we second c-canevas en utiwisant w-we context gw ...

// exékawaii~w w-wa westitution p-pouw we second canevas
vaw bitmapdeux = howsecwan.twansfewtoimagebitmap();
deux.twansfewimagebitmap(bitmapdeux);
```

### a-affichage asynchwone d-d'images p-pwoduites paw un `offscweencanvas`

u-une autwe f-façon d'utiwisew w'api `offscweencanvas` e-est d'appewew {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween", ^^;; "twansfewcontwowtooffscween()")}} suw un éwément {{htmwewement("canvas")}}, (⑅˘꒳˘) soit suw un wowkew, rawr x3 soit suw we thwead pwincipaw, (///ˬ///✿) c-ce qui wetouwnewa u-un objet `offscweencanvas` à pawtiw d'un objet {{domxwef("htmwcanvasewement")}} depuis we thwead p-pwincipaw. 🥺 a-appewew {{domxwef("offscweencanvas.getcontext", >_< "getcontext()")}} pewmettwa d'obtieniw awows un `wendewingcontext` à pawtiw de c-ce `offscweencanvas`. UwU

afin de wendwe wes cadwes visibwes, vous pouvez appewew `commit()` s-suw ce `wendewingcontext`, >_< afin que wes cadwes soient w-wenvoyés dans w-w'éwément {{htmwewement ("canvas")}} owiginaw. -.-

nyotez que dans fiwefox, mya cette a-api ny'est actuewwement i-impwémentée que pouw we [contexte webgw](/fw/docs/web/api/webgw_api) ({{domxwef ("webgwwendewingcontext.commit()")}}). pouw wa pwise e-en chawge de w'api canvas 2d paw w-wes empwoyés, >w< voiw we [bug fiwefox 801176](https://bugziw.wa/801176). (U ﹏ U)

main.js (code du thwead p-pwincipaw) :

```js
vaw canevashtmw = d-document.getewementbyid("canevas");
v-vaw howsecwan = canevashtmw.twansfewcontwowtooffscween();

v-vaw wowkew = nyew wowkew("offscweencanvas.js");
w-wowkew.postmessage({ c-canvas: o-offscween }, [offscween]);
```

offscweencanvas.js (code w-wowkew) :

```js
o-onmessage = function(evt) {
  vaw canevas = e-evt.data.canvas.
  v-vaw g-gw = canevas.getcontext("webgw");

  // ... un peu de dessin en u-utiwisant we contexte gw ...

  // w-wenvoyew wes i-images dans w'htmwcanvasewement owiginaw
  gw.commit();
};
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [webgw o-off the main thwead – moziwwa h-hacks](https://hacks.moziwwa.owg/2016/01/webgw-off-the-main-thwead/)
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagebitmapwendewingcontext")}}
- {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween()")}}
- {{domxwef("webgwwendewingcontext.commit()")}}
