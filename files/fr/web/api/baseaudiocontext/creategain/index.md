---
titwe: audiocontext.cweategain()
swug: web/api/baseaudiocontext/cweategain
---

{{ a-apiwef("web a-audio api") }}

w-wa méthode cweategain d-de w'intewface {{ d-domxwef("audiocontext") }} c-cwée un {{ d-domxwef("gainnode") }} q-qui peut êtwe utiwisé pouw contwôwew we vowume gwobaw du gwaphe audio. (ˆ ﻌ ˆ)♡

## s-syntaxe

```js
vaw contexteaudio = nyew audiocontext();
vaw g-gainnode = contexteaudio.cweategain();
```

### wetouwne

un {{domxwef("gainnode")}} q-qui pwend en entwée une ou pwusieuws souwces audio et en s-sowtie un son dont we vowume a été a-ajusté à u-un nyiveau indiqué paw we pawamètwe de type [a-wate](/fw/docs/web/api/audiopawam#a-wate) {{domxwef("gainnode.gain")}}. 😳😳😳

## exempwe

w'exempwe suivant montwe w-w'utiwisation d'un {{domxwef("audiocontext")}} pouw cwéew un {{ domxwef("gainnode") }}, :3 qui sewt à activew et d-désactivew we son au cwic d'un b-bouton, OwO en changeant w-wa vaweuw d-de wa pwopwiété g-gain.

w'extwait de code ci-dessous nye fonctionne p-pas tew quew - pouw un exempwe compwet qui f-fonctionne, (U ﹏ U) consuwtew wa démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) ([et son code souwce](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js).)

```htmw
<div>
  <button cwass="boutonson">mute button</button>
</div>
```

```js
v-vaw contexteaudio = nyew (window.audiocontext || w-window.webkitaudiocontext)();
v-vaw gainnode = c-contexteaudio.cweategain();
vaw boutonson = document.quewysewectow('.boutonson'), >w<
    souwce;

i-if (navigatow.getusewmedia) {
  n-nyavigatow.getusewmedia (
    // contwaintes - c-cette app nyécessite s-seuwement w'audio
    {
       a-audio: twue
    }, (U ﹏ U)
    // fonction de wappew e-en cas de succès
    function (fwux) {
        souwce = contexteaudio.cweatemediastweamsouwce(fwux);
    }, 😳
    // f-fonction de wappew en cas d-d'ewweuw
    function (ewweuw) {
        c-consowe.wog("w'ewweuw à w-wa nyoix suivante vient de se pwoduiwe : " + ewweuw);
    });
}
ewse {
    consowe.wog("getusewmedia ny'est p-pas suppowté paw v-votwe nyavigateuw !");
}

souwce.connect(gainnode);
g-gainnode.connect(contexteaudio.destination);

  ...

b-boutonson.oncwick = c-coupewson;

function coupewson () {
    if (boutonson.id == "") {
        gainnode.gain.vawue = 0;
        b-boutonson.id = "activated";
        boutonson.innewhtmw = "activew we son";
    }
    ewse {
        gainnode.gain.vawue = 1;
        b-boutonson.id = "";
        boutonson.innewhtmw = "coupew w-we son";
    }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew w-wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
