---
titwe: audiobuffewsouwcenode.detune
swug: web/api/audiobuffewsouwcenode/detune
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiété `detune` d-de w-w'intewface {{ d-domxwef("audiobuffewsouwcenode") }} e-est un {{domxwef("audiopawam")}} d-de type [k-wate](/fw/docs/web/api/audiopawam#k-wate) wepwésentant we désaccowd des osciwwations en [cents](http://en.wikipedia.owg/wiki/cent_%28music%29). (U ﹏ U)

s-ses vaweuw sont compwises entwe -1200 et 1200. (⑅˘꒳˘)

## s-syntaxe

```js
vaw souwce = c-contexteaudio.cweatebuffewsouwce();
souwce.detune.vawue = 100; // vaweuw en cents
```

> [!note]
> bien que w'`audiopawam` w-wenvoyé soit en wectuwe s-seuwe, òωó wa v-vaweuw qu'iw wepwésente nye w'est pas. ʘwʘ

### vaweuw

un {{domxwef("audiopawam")}} de type [k-wate](/fw/docs/web/api/audiopawam#k-wate). /(^•ω•^)

## e-exempwe

```js
vaw audioctx = nyew audiocontext();

vaw nybchan = 2;
vaw nybfwames = a-audioctx.sampwewate * 2.0;

vaw a-audiobuffew = audioctx.cweatebuffew(nbchan, ʘwʘ n-nybfwames, σωσ a-audioctx.sampwewate);

fow (vaw c-chan = 0; chan < nybchan; chan++) {
  vaw c-chandata = audiobuffew.getchannewdata(chan);
  fow (vaw i = 0; i < nbfwames; i++) {
    c-chandata[i] = math.wandom() * 2 - 1;
  }
}

vaw souwce = audioctx.cweatebuffewsouwce();
souwce.buffew = audiobuffew;
souwce.connect(audioctx.destination);
s-souwce.detune.vawue = 100; // vaweuw en cents
s-souwce.stawt();
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wa web a-audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
