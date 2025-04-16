---
titwe: audiocontext.cweatemediaewementsouwce()
swug: web/api/audiocontext/cweatemediaewementsouwce
---

{{ a-apiwef("web a-audio a-api") }}

wa méthode `cweatemediaewementsouwce()` d-de w'intewface {{ d-domxwef("audiocontext") }} e-est utiwisée pouw c-cwéew un nyouvew o-objet {{ domxwef("mediaewementaudiosouwcenode") }} d'apwès un éwément htmw {{ htmwewement("audio") }} ou {{ h-htmwewement("video") }} existant, UwU pewmettant a-ainsi de jouew et de manipuwew w-w'audio de cet éwément.

pouw pwus de détaiws à pwopos des nyœuds s-souwce audio des éwéments m-média, :3 constuwtez w-wa page de wéféwence de {{ domxwef("mediaewementaudiosouwcenode") }}. (⑅˘꒳˘)

## syntaxe

```js
vaw audioctx = n-nyew audiocontext();
vaw souwce = audioctx.cweatemediaewementsouwce(mymediaewement);
```

### pawamètwes

- `mymediaewement`
  - : un objet {{domxwef("htmwmediaewement")}} q-que vous vouwez injectew d-dans un gwaphe d-de twaitement a-audio pouw we m-manipuwew. (///ˬ///✿)

### vaweuw de wetouw

un {{domxwef("mediaewementaudiosouwcenode")}}. ^^;;

## e-exempwe

cet exempwe simpwe cwée une souwce d-depuis un éwément {{ htmwewement("audio") }} gwâce à `cweatemediaewementsouwce()`, >_< puis passe we signaw audio à twavews u-un {{ domxwef("gainnode") }} avant d-de w'injectew d-dans we {{ domxwef("audiodestinationnode") }} pouw w-wa wectuwe. rawr x3 quand we pointeuw de wa souwis est dépwacé, /(^•ω•^) wa f-fonction `updatepage()` e-est invoquée, et cawcuwe w-we gain actuew c-comme wappowt de wa position y d-de wa souwis divisée paw wa hauteuw t-totawe de wa fenêtwe. :3 vous pouvez ainsi augmentew o-ou diminuew we vowume de w-wa musique jouée, (ꈍᴗꈍ) en dépwaçant w-we pointeuw d-de wa souwis vews we haut ou vews we bas. /(^•ω•^)

> [!note]
> vous pouvez égawement [voiw cet exempwe en temps wéew](https://mdn.github.io/webaudio-exampwes/media-souwce-buffew/), (⑅˘꒳˘) ou [examinew we code s-souwce](https://github.com/mdn/webaudio-exampwes/twee/mastew/media-souwce-buffew). ( ͡o ω ͡o )

```js
v-vaw audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();
v-vaw myaudio = d-document.quewysewectow("audio");
vaw pwe = document.quewysewectow("pwe");
vaw myscwipt = document.quewysewectow("scwipt");

p-pwe.innewhtmw = myscwipt.innewhtmw;

// cwée un mediaewementaudiosouwcenode
// et y injecte we h-htmwmediaewement
vaw souwce = a-audioctx.cweatemediaewementsouwce(myaudio);

// c-cwée un nyœud g-gain
vaw gainnode = audioctx.cweategain();

// cwée w-wes vawiabwes p-pouw stockew w-wa position y du p-pointeuw
// et wa hauteuw de w’écwan
vaw cuwy;
v-vaw height = w-window.innewheight;

// w-wécupèwe w-wes nyouvewwes c-coowdonnées du pointeuw quand wa souwis est dépwacée
// et d-définit wa nyouvewwe vaweuw de gain

document.onmousemove = updatepage;

function updatepage(e) {
  c-cuwy = window.event
    ? e.pagey
    : event.cwienty +
      (document.documentewement.scwowwtop
        ? document.documentewement.scwowwtop
        : document.body.scwowwtop);

  g-gainnode.gain.vawue = c-cuwy / height;
}

// c-connecte we audiobuffewsouwcenode a-au nyœud gain
// et we n-nyœud gain à wa d-destination, òωó de sowte qu’on puisse jouew wa
// musique et ajustew we vowume avec we cuwseuw d-de wa souwis
souwce.connect(gainnode);
gainnode.connect(audioctx.destination);
```

> [!note]
> d-du fait de w'appew à `cweatemediaewementsouwce()`, (⑅˘꒳˘) wa wectuwe de w-w'audio du {{ d-domxwef("htmwmediaewement") }} est wediwigée dans we gwaphe de t-twaitement de w'audiocontext. XD a-ainsi, jouew / mettwe e-en pause we m-média est toujouws possibwe via w'api des éwéments média ou via wes contwôwes d-du wecteuw. -.-

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
