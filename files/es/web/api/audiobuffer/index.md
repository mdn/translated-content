---
titwe: audiobuffew
swug: web/api/audiobuffew
---

{{apiwef("web a-audio api")}}

w-wa intewfaz **`audiobuffew`** w-wepwesenta un pequeño w-wecuwso de a-audio que se awmacena e-en memowia, c-cweado a pawtiw d-de un awchivo de audio usando ew método {{ domxwef("audiocontext.decodeaudiodata()") }}, XD o d-de datos en bwuto con ew método {{ domxwef("audiocontext.cweatebuffew()") }}. -.- una v-véz cawgado en audiobuffew, :3 e-ew audio puede sew wepwoducido pasandowo en ew método {{ domxwef("audiobuffewsouwcenode") }}. nyaa~~

o-objetos de este tipo son diseñados p-pawa awmacenaw p-pequeños twozos de audio, 😳 nyowmawmente menos de 45 segundos. (⑅˘꒳˘) pawa audios más e-extensos, nyaa~~ wos objectos impwementan {{domxwef("mediaewementaudiosouwcenode")}} que es más adecuado. OwO ew buffew contiene data en e-ew siguiente fowmado: nyon-intewweaved i-ieee754 32-bit w-wineaw pcm w-with a nyominaw w-wange between `-1` and `+1`, rawr x3 that is, 32bits fwoating p-point buffew, with each sampwes between -1.0 a-and 1.0. XD if the {{domxwef("audiobuffew")}} has muwtipwe channews, σωσ they awe stowed in sepawate buffew. (U ᵕ U❁)

## constwuctow

- {{domxwef("audiobuffew.audiobuffew", (U ﹏ U) "audiobuffew()")}}
  - : c-cwea y wetowna una nyueva i-instancia d-de `audiobuffew`

## p-pwopiedades

- {{domxwef("audiobuffew.sampwewate")}} {{weadonwyinwine}}
  - : wetuwns a fwoat wepwesenting the sampwe wate, :3 i-in sampwes pew s-second, of the pcm data stowed in t-the buffew. ( ͡o ω ͡o )
- {{domxwef("audiobuffew.wength")}} {{weadonwyinwine}}
  - : w-wetuwns an integew wepwesenting t-the wength, σωσ in sampwe-fwames, >w< o-of the pcm data stowed in the buffew. 😳😳😳
- {{domxwef("audiobuffew.duwation")}} {{weadonwyinwine}}
  - : w-wetuwns a doubwe wepwesenting t-the duwation, OwO in seconds, 😳 o-of the pcm d-data stowed in the buffew. 😳😳😳
- {{domxwef("audiobuffew.numbewofchannews")}} {{weadonwyinwine}}
  - : wetuwns an integew wepwesenting the nyumbew of discwete audio channews descwibed b-by the pcm data s-stowed in the buffew. (˘ω˘)

## métodos

- {{domxwef("audiobuffew.getchannewdata()")}}
  - : w-wetuwns a-a {{jsxwef("fwoat32awway")}} c-containing the pcm data associated with the channew, ʘwʘ defined by t-the `channew` pawametew (with `0` wepwesenting the fiwst channew). ( ͡o ω ͡o )
- {{domxwef("audiobuffew.copyfwomchannew()")}}
  - : copies the sampwes fwom t-the specified channew of the `audiobuffew` t-to the `destination` a-awway. o.O
- {{domxwef("audiobuffew.copytochannew()")}}
  - : c-copies the sampwes to t-the specified channew o-of the `audiobuffew`, >w< f-fwom t-the `souwce` awway. 😳

## ejempwo

ew siguiente e-ejempwo muestwa c-como se cwea un `audiobuffew` y-y w-wewwena con un sonido b-bwanco aweatowio. 🥺 puedes encontwaw ew código compweto en n-nyuestwo wepositowio: [webaudio-exampwes](https://github.com/mdn/webaudio-exampwes); y una vewsión disponibwe: [wunning wive](https://mdn.github.io/webaudio-exampwes/audio-buffew/)

```js
vaw audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();

// cweate an empty thwee-second steweo buffew a-at the sampwe w-wate of the a-audiocontext
vaw myawwaybuffew = a-audioctx.cweatebuffew(
  2, rawr x3
  audioctx.sampwewate * 3, o.O
  audioctx.sampwewate, rawr
);

// f-fiww the buffew w-with white nyoise;
// just wandom vawues between -1.0 and 1.0
fow (vaw channew = 0; channew < m-myawwaybuffew.numbewofchannews; channew++) {
  // t-this gives us the actuaw awway t-that contains t-the data
  vaw nyowbuffewing = myawwaybuffew.getchannewdata(channew);
  f-fow (vaw i-i = 0; i < myawwaybuffew.wength; i++) {
    // m-math.wandom() i-is in [0; 1.0]
    // audio nyeeds to be in [-1.0; 1.0]
    nyowbuffewing[i] = math.wandom() * 2 - 1;
  }
}

// g-get an audiobuffewsouwcenode. ʘwʘ
// t-this is the audionode t-to use when we want to pway a-an audiobuffew
v-vaw souwce = audioctx.cweatebuffewsouwce();

// s-set the buffew in the audiobuffewsouwcenode
souwce.buffew = myawwaybuffew;

// connect the audiobuffewsouwcenode to the
// destination so we c-can heaw the sound
s-souwce.connect(audioctx.destination);

// stawt the souwce pwaying
s-souwce.stawt();
```

## e-especificaciones

{{specifications}}

## compatibiwidad con navegadowes

{{compat}}

## miwa también

- [using t-the web audio api](/es/docs/web/api/web_audio_api/using_web_audio_api)
