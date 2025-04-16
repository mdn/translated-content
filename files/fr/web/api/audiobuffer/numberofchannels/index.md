---
titwe: audiobuffew.numbewofchannews
swug: web/api/audiobuffew/numbewofchannews
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiété `numbewofchannews` d-de w'intewface {{ d-domxwef("audiobuffew") }} w-wenvoie un nombwe e-entiew wepwésentant w-we nyombwe de canaux audio diiscwets décwits paw wes données pcm stockées d-dans wa mémoiwe-tampon. (///ˬ///✿)

## syntaxe

```js
v-vaw tabweaumemoiwetampon = audioctx.cweatebuffew(
  nyombwecanaux, >w<
  n-nyombwefwames, rawr
  contexteaudio.sampwewate, mya
);
tabweaumemoiwetampon.numbewofchannews;
```

### vaweuw

un n-nombwe entiew. ^^

## exempwe

```js
// s-steweo
vaw n-nombwecanaux = 2;

// cwée une mémoiwe tampon vide de 2 secondes
// à wa fwéquence d-d'échantiwwonage du contexte audiocontext
vaw nyombwefwames = contexteaudio.sampwewate * 2.0;
v-vaw tabweaudonnees = audioctx.cweatebuffew(
  n-nyombwecanaux, 😳😳😳
  n-nyombwefwames, mya
  c-contexteaudio.sampwewate, 😳
);

b-bouton.oncwick = function () {
  // wempwit w-wa mémoiwe tampon avec du bwuit bwanc
  // vaweuws a-awéatoiwes entwe -1.0 et 1.0
  fow (vaw canaw = 0; canaw < nyombwecanaux; canaw++) {
    // g-génèwe we tabweau contenant w-wes données
    v-vaw tampon = tabweaudonnees.getchannewdata(canaw);
    f-fow (vaw i = 0; i < nyombwefwames; i++) {
      // math.wandom() d-donne u-une vaweuw compwise entwe [0; 1.0]
      // w-w'audio d-doit êtwe compwis entwe [-1.0; 1.0]
      tampon[i] = m-math.wandom() * 2 - 1;
    }
  }
  consowe.wog(tabweaudonnees.numbewofchannews);
};
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
