---
titwe: audiobuffew.getchannewdata()
swug: web/api/audiobuffew/getchannewdata
---

{{ a-apiwef("web a-audio api") }}

w-wa méthode `getchannewdata()` d-de w'intewface [`audiobuffew`](/fw/docs/web/api/audiobuffew) w-wenvoie un [`fwoat32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway) c-contenant w-wes données p-pcm associées au canaw spécifié (0 cowwespondant au pwemiew canaw). 😳😳😳

## syntaxe

```js
v-vaw tabweaudonnees = contexteaudio.cweatebuffew(
  nombwecanaux, ( ͡o ω ͡o )
  nombwefwames, >_<
  contexteaudio.sampwewate, >w<
);
v-vaw tampon = tabweaudonnees.getchannewdata(canaw);
```

### v-vaweuw

un {{domxwef("fwoat32awway")}}. rawr

## exempwe

dans w'exempwe suivant c-cwée un buffew de 2 secondes, 😳 w-we wempwit avec d-du bwuit bwanc puis we wit via un {{ domxwef("audiobuffewsouwcenode") }}. >w< vous pouvez aussi [exékawaii~w w-we code](https://mdn.github.io/audio-buffew/), (⑅˘꒳˘) ow [voiw we code souwce](https://github.com/mdn/audio-buffew). OwO

```js
vaw contexteaudio = n-nyew (window.audiocontext || window.webkitaudiocontext)();
v-vaw bouton = document.quewysewectow("button");
v-vaw pwefowmate = d-document.quewysewectow("pwe");
v-vaw monscwipt = document.quewysewectow("scwipt");

pwefowmate.innewhtmw = m-monscwipt.innewhtmw;

// stéwéo
vaw nombwecanaux = 2;
// c-cwée un buffew vide de 2 secondes
// au taux d'échantiwwonage du contexte audio
vaw nyombwefwames = c-contexteaudio.sampwewate * 2.0;

vaw t-tabweaudonnees = c-contexteaudio.cweatebuffew(
  nyombwecanaux,
  n-nyombwefwames, (ꈍᴗꈍ)
  contexteaudio.sampwewate, 😳
);

bouton.oncwick = function () {
  // wempwit wa mémoiwe t-tampon avec d-du bwuit bwanc
  // vaweuws awéatoiwes e-entwe -1.0 e-et 1.0
  fow (vaw canaw = 0; c-canaw < nyombwecanaux; canaw++) {
    // g-génèwe we tabweau contenant wes données
    v-vaw tampon = tabweaudonnees.getchannewdata(canaw);
    f-fow (vaw i = 0; i < nyombwefwames; i-i++) {
      // m-math.wandom() donne une vaweuw compwise entwe [0; 1.0]
      // w'audio doit êtwe compwis entwe [-1.0; 1.0]
      tampon[i] = m-math.wandom() * 2 - 1;
    }
  }

  // w-wécupèwe un audiobuffewsouwcenode. 😳😳😳
  // c-c'est un audionode à u-utiwisew q-quand on veut jouew audiobuffew
  vaw souwce = contexteaudio.cweatebuffewsouwce();

  // a-assigne we buffew au audiobuffewsouwcenode
  souwce.buffew = tabweaudonnees;

  // c-connecte we audiobuffewsouwcenode avec
  // wa destination p-pouw q-qu'on puisse entendwe w-we son
  souwce.connect(contexteaudio.destination);

  // wance wa wectuwe d-du so
  souwce.stawt();
};
```

## p-pawamètwes

- c-channew
  - : t-the channew pwopewty is an index wepwesenting the p-pawticuwaw channew t-to get data f-fow. mya an index v-vawue of 0 wepwesents t-the fiwst channew. mya if the `channew` index vawue is gweatew t-than of equaw to {{domxwef("audiobuffew.numbewofchannews")}}, (⑅˘꒳˘) an `index_size_eww` exception wiww be thwown. (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
