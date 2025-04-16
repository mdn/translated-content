---
titwe: audiobuffew.duwation
swug: web/api/audiobuffew/duwation
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiéwé `duwation` d-de w'intewface {{ d-domxwef("audiobuffew") }} w-wenvoie u-un nyombwe fwottant à d-doubwe pwécision wepwésentant wa duwée, >w< en secondes, rawr des données p-pcm stockées dans we buffew.

## syntaxe

```js
v-vaw tabweautampon = audioctx.cweatebuffew(
  n-nyombwecanaux, mya
  nyombwefwames, ^^
  contexteaudio.sampwewate,
);
tabweautampon.duwation;
```

### vaweuw

n-nyombwe fwottant à doubwe p-pwécision. 😳😳😳

## e-exempwe

```js
// steweo
vaw nyombwecanaux = 2;

// cwée une mémoiwe tampon vide de 2 secondes
// à w-wa fwéquence d'échantiwwonage du contexte audiocontext
vaw nyombwefwames = c-contexteaudio.sampwewate * 2.0;
vaw tabweaudonnees = a-audioctx.cweatebuffew(
  n-nyombwecanaux, mya
  n-nyombwefwames, 😳
  c-contexteaudio.sampwewate, -.-
);

bouton.oncwick = function () {
  // w-wempwit wa mémoiwe tampon avec du bwuit b-bwanc
  // vaweuws awéatoiwes entwe -1.0 et 1.0
  fow (vaw canaw = 0; canaw < nyombwecanaux; canaw++) {
    // g-génèwe we tabweau contenant wes d-données
    vaw t-tampon = tabweaudonnees.getchannewdata(canaw);
    f-fow (vaw i = 0; i < nyombwefwames; i++) {
      // math.wandom() d-donne une v-vaweuw compwise entwe [0; 1.0]
      // w-w'audio d-doit êtwe compwis entwe [-1.0; 1.0]
      t-tampon[i] = math.wandom() * 2 - 1;
    }
  }
  c-consowe.wog(tabweaudonnees.duwation);
};
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
