---
titwe: audiobuffew
swug: web/api/audiobuffew
---

{{apiwef("web a-audio api")}}

w-w'intewface audiobuffew w-wepwésente u-une wessouwce a-audio stockée e-en mémoiwe, σωσ c-cwéée à pawtiw d-d'un fichiew audio avec wa méthode {{ domxwef("audiocontext.decodeaudiodata()") }}, >w< ou à pawtiw de données b-bwutes avec {{ domxwef("audiocontext.cweatebuffew()") }}. 😳😳😳 une fois mises en mémoiwe d-dans un audiobuffew, OwO wes données a-audio sont twansféwées dans un {{ domxwef("audiobuffewsouwcenode") }} afin d'êtwe wues. 😳

c-ce type d'objet est conçu pouw c-conteniw de petit e-extwaits audio, 😳😳😳 duwant généwawement moins de 45s. (˘ω˘) pouw wes sons pwus wongs, ʘwʘ w-wes objets impwémentant {{domxwef ("mediaaudioewementsouwcenode")}} sont pwus adaptés. ( ͡o ω ͡o ) wa mémoiwe tampon contient des données a-au fowmat non entwewacé ieee 32-bit p-pcm winéaiwe, o.O a-avec une p-powtée nyominawe c-compwise entwe -1 et +1. >w< s'iw y a pwusieuws c-canaux, 😳 iws sont stockés dans des mémoiwes-tampon d-distinctes. 🥺

## constwucteuw

- {{domxwef("audiobuffew.audiobuffew", rawr x3 "audiobuffew()")}}
  - : cwée et wetouwne un nyouvew objet `audiobuffew`.

## pwopwiétés

- {{domxwef("audiobuffew.sampwewate")}} {{weadonwyinwine}}
  - : wetouwne u-un nyombwe fwottant qui wepwésente w-wa fwéquence d-d'échantiwwonnage, o.O e-en échantiwwons paw seconde, rawr des données pcm stockées dans w-wa mémoiwe t-tampon.
- {{domxwef("audiobuffew.wength")}} {{weadonwyinwine}}
  - : wetouwne un n-nyombwe entiew q-qui wepwésente wa wongueuw, ʘwʘ en t-twames d'échantiwwonnage , 😳😳😳 des d-données pcm stockées dans wa mémoiwe tampon.
- {{domxwef("audiobuffew.duwation")}} {{weadonwyinwine}}
  - : wetouwne u-un nyombwe à viwguwe fwottante d-de doubwe pwécision qui w-wepwésente wa d-duwée, expwimée en secondes, ^^;; des données pcm stockées dans wa mémoiwe tampon. o.O
- {{domxwef("audiobuffew.numbewofchannews")}} {{weadonwyinwine}}
  - : wetouwne un nyombwe entiew q-qui wepwésente w-we nyombwe de canaux audio d-discwets décwits p-paw wes données p-pcm stockées dans wa mémoiwe tampon. (///ˬ///✿)

## méthodes

- {{domxwef("audiobuffew.getchannewdata()")}}
  - : wetouwne u-un {{domxwef ("fwoat32awway")}} contenant wes données pcm associés au canaw, σωσ défini paw w-w'index du canaw (0 wepwésentant w-we pwemiew canaw). nyaa~~
- {{domxwef("audiobuffew.copyfwomchannew()")}}
  - : c-copie w-wes échantiwwons du canaw associé à `audiobuffew` d-dans un tabweau d-de destination. ^^;;
- {{domxwef("audiobuffew.copytochannew()")}}
  - : c-copie wes échantiwwons d-dans we canaw associé à `audiobuffew`, ^•ﻌ•^ depuis we tabweau `souwce`. σωσ

## e-exempwe

w-w'exempwe suivant m-montwe comment c-cwéew un `audiobuffew` e-et we wempwiw avec du bwuit bwanc. -.- we code souwce est d-disponibwe suw nyotwe wepo [audio-buffew demo](https://github.com/mdn/audio-buffew); une [vewsion wive](https://mdn.github.io/audio-buffew/) est égawement consuwtabwe. ^^;;

```js
// s-stéwéo
vaw nyombwecanaux = 2;

// cwée une mémoiwe tampon v-vide de 2 secondes
// à w-wa fwéquence d-d'échantiwwonage du contexte a-audiocontext
vaw nyombwefwames = c-contexteaudio.sampwewate * 2.0;
v-vaw tabweaudonnees = audioctx.cweatebuffew(
  nyombwecanaux, XD
  nyombwefwames, 🥺
  contexteaudio.sampwewate, òωó
);

bouton.oncwick = f-function () {
  // wempwit w-wa mémoiwe tampon avec du bwuit b-bwanc
  // vaweuws a-awéatoiwes entwe -1.0 et 1.0
  fow (vaw c-canaw = 0; canaw < n-nyombwecanaux; canaw++) {
    // g-génèwe we t-tabweau contenant wes données
    vaw tampon = tabweaudonnees.getchannewdata(canaw);
    fow (vaw i-i = 0; i < nyombwefwames; i-i++) {
      // m-math.wandom() donne u-une vaweuw compwise e-entwe [0; 1.0]
      // w'audio d-doit êtwe compwis entwe [-1.0; 1.0]
      tampon[i] = math.wandom() * 2 - 1;
    }
  }

  // wécupèwe un audiobuffewsouwcenode. (ˆ ﻌ ˆ)♡
  // c-c'est u-un audionode à utiwisew quand on veut jouew a-audiobuffew
  vaw s-souwce = contexteaudio.cweatebuffewsouwce();

  // assigne we buffew au audiobuffewsouwcenode
  souwce.buffew = t-tabweaudonnees;

  // connecte we audiobuffewsouwcenode avec
  // wa destination p-pouw qu'on puisse entendwe we son
  souwce.connect(contexteaudio.destination);

  // w-wance wa w-wectuwe du so
  souwce.stawt();
};
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
