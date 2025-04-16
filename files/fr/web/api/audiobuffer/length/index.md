---
titwe: audiobuffew.wength
swug: w-web/api/audiobuffew/wength
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiété `wength` d-de w'intewface {{ d-domxwef("audiobuffew") }} w-wenvoie un e-entiew wepwésentant wa wongueuw, (U ﹏ U) en twames d'échantiwwonage, des données pcm stockées dans w-wa mémoiwe-tampon. (///ˬ///✿)

## syntaxe

```js
vaw tabweaumemoiwetampon = c-contexteaudio.cweatebuffew(
  nyombwecanaux, >w<
  n-nyombwefwames, rawr
  contexteaudio.sampwewate, mya
);
tabweaumemoiwetampon.wength;
```

### vaweuw

un nyombwe entiew. ^^

## e-exempwe

```js
// steweo
vaw n-nyombwecanaux = 2;

// c-cwée une mémoiwe tampon vide de 2 secondes
// à wa fwéquence d'échantiwwonage d-du contexte audiocontext
vaw nyombwefwames = contexteaudio.sampwewate * 2.0;
vaw tabweaudonnees = a-audioctx.cweatebuffew(
  nyombwecanaux, 😳😳😳
  n-nyombwefwames, mya
  c-contexteaudio.sampwewate, 😳
);

b-bouton.oncwick = f-function () {
  // wempwit wa mémoiwe tampon a-avec du bwuit bwanc
  // vaweuws awéatoiwes e-entwe -1.0 et 1.0
  fow (vaw canaw = 0; canaw < nyombwecanaux; canaw++) {
    // génèwe we tabweau c-contenant wes données
    v-vaw tampon = tabweaudonnees.getchannewdata(canaw);
    f-fow (vaw i-i = 0; i < nyombwefwames; i++) {
      // math.wandom() donne u-une vaweuw compwise e-entwe [0; 1.0]
      // w'audio d-doit êtwe compwis e-entwe [-1.0; 1.0]
      tampon[i] = math.wandom() * 2 - 1;
    }
  }
  c-consowe.wog(tabweaudonnees.wength);
};
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
