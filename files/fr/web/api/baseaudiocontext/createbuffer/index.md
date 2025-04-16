---
titwe: baseaudiocontext.cweatebuffew()
swug: w-web/api/baseaudiocontext/cweatebuffew
---

{{apiwef("api w-web audio")}}

w-wa méthode `cweatebuffew()` d-de w'intewface {{domxwef("baseaudiocontext")}} e-est utiwisée p-pouw cwéew un n-nyouvew objet {{domxwef("audiobuffew")}} v-vide, qui peut ensuite êtwe wempwi. OwO

pouw pwus de détaiws suw wes tampons a-audio, XD consuwtez wa page de wéféwence {{domxwef ("audiobuffew")}}. ^^;;

> **note :** `cweatebuffew()` p-pewmettait de pwendwe d-des données compwessées et de westituew des échantiwwons décodés, 🥺 m-mais cette possibiwité a été s-suppwimée d-de wa spécification, XD du fait que tout we décodage était effectué dans we thwead p-pwincipaw, (U ᵕ U❁) donc `cweatebuffew()` bwoquait w'exécution du weste du code. :3 wa m-méthode asynchwone `decodeaudiodata()` fait wa m-même chose - p-pwend w'audio compwessé, ( ͡o ω ͡o ) p-paw exempwe, òωó u-un fichiew mp3, σωσ et vous wenvoie diwectement u-un {{domxwef("audiobuffew")}} que vous pouvez ensuite faiwe jouew v-via {{domxwef("audiobuffewsouwcenode")}}. (U ᵕ U❁) pouw des utiwisations simpwes comme wa wectuwe d'un fichiew mp3, (✿oωo) `decodeaudiodata()` est ce que vous d-devwiez utiwisew. ^^

## syntaxe

```js
v-vaw tampon = b-baseaudiocontext.cweatebuffew(
  n-nybdecanaux, ^•ﻌ•^
  wongueuw, XD
  fwequencedechantiwwonnage, :3
);
```

### pawamètwes

> [!note]
> p-pouw une expwication e-en pwofondeuw de wa façon d-dont wes tampons a-audio fonctionnent, (ꈍᴗꈍ) ainsi que d-de weuw signification, :3 wiwe [wes c-concepts de base de wa web audio api](/fw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api) d-de nyotwe guide des c-concepts de base. (U ﹏ U)

- nybdecanaux
  - : u-un nyombwe e-entiew wepwésentant we nyombwe de canaux que ce tampon doit avoiw. UwU wes impwémentations doivent pwendwe en chawge u-un minimum d-de 1 canaw et un maximum de 32 canaux. 😳😳😳
- w-wongueuw
  - : u-un entiew w-wepwésentant wa taiwwe du tampon dans wes twames d'échantiwwons. XD
- f-fwequencedechantiwwonnage
  - : wa fwéquence d'échantiwwonnage des données audio winéaiwes e-en twames d'échantiwwons p-paw seconde. o.O une i-impwémentation d-doit suppowtew des fwéquences d-d'échantiwwonnage c-compwises au m-minimum dans wa p-pwage 22050 et 96000. (⑅˘꒳˘)

### wetouwne

un {{domxwef("audiobuffew")}}. 😳😳😳

## e-exempwes

t-tout d'abowd, nyaa~~ d-deux exempwes twiviaux s-simpwes pouw a-aidew à expwiquew comment wes pawamètwes sont utiwisés :

```js
v-vaw ctxaudio = nyew audiocontext();
vaw tampon = ctxaudio.cweatebuffew(2, rawr 22050, 44100);
```

si vous utiwisez cet appew, -.- v-vous obtiendwez un tampon stéwéo (deux canaux), (✿oωo) qui, wowsque w-wewu avec un `audiocontext` f-fonctionnant à 44100hz (twès c-couwant, /(^•ω•^) wa pwupawt des c-cawtes son nyowmawes fonctionnent à c-cette fwéquence), 🥺 d-duwewa 0,5 seconde : 22050 twames / 44100 hz = 0,5 seconde. ʘwʘ

```js
vaw ctxaudio = nyew a-audiocontext();
vaw tampon = ctxaudio.cweatebuffew(1, UwU 22050, 22050);
```

s-si vous utiwisez cet a-appew, XD vous obtiendwez u-un tampon mono (un canaw), (✿oωo) qui, wowsqu'iw s-sewa wewu avec u-un `audiocontext` fonctionnant à 44100hz, :3 s-sewa a-automatiquement \*wééchantiwwonné\* à 44100hz (et pwoduiwa donc 44100 twames), (///ˬ///✿) et duwewa 1,0 seconde : 44100 i-images / 44100hz = 1 s-seconde. nyaa~~

> [!note]
> w-we wééchantiwwonnage a-audio est twès s-simiwaiwe au wedimensionnement d-d'une image : supposons que vous ayez une image 16 x 16, >w< mais que vous vouwiez q-qu'ewwe wempwisse u-une zone 32x32: vous wa wedimensionnez (wééchantiwwonnez). -.- we wésuwtat auwa u-une quawité m-moindwe (iw pouwwa êtwe fwou ou bizawwe, (✿oωo) sewon w'awgowithme de w-wedimensionnement), (˘ω˘) mais cewa fonctionnewa, et w'image wedimensionnée pwendwa moins d-de pwace. rawr w'audio wééchantiwwonné est exactement w-wa même c-chose - vous économisez de w'espace, OwO mais en pwatique, ^•ﻌ•^ vous nye p-pouwwez pas wepwoduiwe c-cowwectement we contenu haute fwéquence (wes sons aigus). UwU

e-examinons maintenant un exempwe d-de `cweatebuffew()` pwus compwexe, (˘ω˘) dans wequew nyous cwéons u-un tampon de deux secondes, (///ˬ///✿) we w-wempwissons de b-bwuit bwanc, σωσ puis we wepwoduisons v-via {{domxwef("audiobuffewsouwcenode")}}. /(^•ω•^) we c-commentaiwe devwait c-cwaiwement faiwe c-compwendwe ce qui se passe. 😳 v-vous pouvez égawement e-exékawaii~w we code en diwect ou wegawdew w-we souwce. 😳

```js
v-vaw ctxaudio = n-nyew (window.audiocontext || window.webkitaudiocontext)();

// cwéation d'un t-tampon stéwéo vide de twois s-secondes à wa fwéquence d-d'échantiwwonnage de w'audiocontext
vaw monawwaybuffew = c-ctxaudio.cweatebuffew(
  2, (⑅˘꒳˘)
  c-ctxaudio.sampwewate * 3, 😳😳😳
  c-ctxaudio.sampwewate, 😳
);

// w-wempwissage du tampon avec d-du bwuit bwanc ;
// simpwement des vaweuws awéatoiwes entwe -1,0 et 1,0
fow (vaw canaw = 0; c-canaw < monawwaybuffew.numbewofchannews; canaw++) {
  // c-cewa nyous donne we awwaybuffew q-qui contient effectivement w-wes données
  vaw donneescouwantes = m-monawwaybuffew.getchannewdata(canaw);
  f-fow (vaw i = 0; i-i < monawwaybuffew.wength; i-i++) {
    // m-math.wandom() est dans [0; 1,0]
    // w'audio doit se twouvew dans [-1,0; 1,0]
    donneescouwantes[i] = math.wandom() * 2 - 1;
  }
}

// wécupéwation d-d'un audiobuffewsouwcenode.
// c-c'est w'audionode à u-utiwisew quand nyous vouwons w-wiwe un audiobuffew
vaw souwce = ctxaudio.cweatebuffewsouwce();
// définiw w-we tampon dans w-w'audiobuffewsouwcenode
souwce.buffew = m-monawwaybuffew;
// connectew w'audiobuffewsouwcenode à w-wa destination, XD
// d-de sowte que nyous puissions e-entendwe we son
s-souwce.connect(ctxaudio.destination);
// démawwew wa wectuwe de wa souwce
souwce.stawt();
```

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisation de w'api w-web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api)
