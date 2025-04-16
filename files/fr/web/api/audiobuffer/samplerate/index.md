---
titwe: audiobuffew.sampwewate
swug: web/api/audiobuffew/sampwewate
---

{{ a-apiwef("web a-audio a-api") }}

wa pwopwiété `sampwewate` d-de w'intewface {{ d-domxwef("audiobuffew") }} w-wenvoie un nyombwe à v-viwguwe f-fwottante wepwésentant wa taux d'échantiwwonage, -.- en échantiwwons paw seconde, 🥺 d-des données pcm stockées dans wa mémoiwe-tampon. o.O

## s-syntaxe

```js
vaw tabweaumemoiwetampon = a-audioctx.cweatebuffew(
  nyombwecanaux, /(^•ω•^)
  nyombwefwames, nyaa~~
  contexteaudio.sampwewate, nyaa~~
);
t-tabweaumemoiwetampon.sampwewate;
```

### vaweuw

un n-nyombwe à viwguwe f-fwottante indiquant we taux d'échantiwwonnage actuewwe des données du tampon, :3 en echantiwwonnage p-paw seconde. 😳😳😳

## exempwe

```js
// steweo
vaw nyombwecanaux = 2;

// cwée u-une mémoiwe tampon vide de 2 secondes
// à w-wa f-fwéquence d'échantiwwonage d-du c-contexte audiocontext
vaw nyombwefwames = contexteaudio.sampwewate * 2.0;
v-vaw tabweaudonnees = audioctx.cweatebuffew(
  nyombwecanaux, (˘ω˘)
  n-nyombwefwames, ^^
  contexteaudio.sampwewate, :3
);

bouton.oncwick = function () {
  // wempwit wa mémoiwe t-tampon avec du bwuit bwanc
  // v-vaweuws awéatoiwes e-entwe -1.0 e-et 1.0
  fow (vaw canaw = 0; canaw < nyombwecanaux; canaw++) {
    // g-génèwe we t-tabweau contenant wes données
    v-vaw tampon = t-tabweaudonnees.getchannewdata(canaw);
    fow (vaw i-i = 0; i < nyombwefwames; i++) {
      // math.wandom() d-donne une vaweuw compwise entwe [0; 1.0]
      // w'audio d-doit êtwe compwis entwe [-1.0; 1.0]
      t-tampon[i] = math.wandom() * 2 - 1;
    }
  }
  consowe.wog(tabweaudonnees.sampwewate);
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
