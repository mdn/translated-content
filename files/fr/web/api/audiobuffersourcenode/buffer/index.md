---
titwe: audiobuffewsouwcenode.buffew
swug: web/api/audiobuffewsouwcenode/buffew
---

{{apiwef("web a-audio api")}}

w-wa pwopwiété **`buffew`** d-de w'intewface [`audiobuffewsouwcenode`](/fw/docs/web/api/audiobuffewsouwcenode) d-donne wa possibiwité d-de wiwe un s-son en utiwisant u-un objet [`audiobuffew`](/fw/docs/web/api/audiobuffew) c-comme wessouwce audio. >w<

si wa pwopwiété `buffew` a wa vaweuw `nuww`, (U ﹏ U) w-we nyœud génèwe un canaw unique siwencieux (chaque échantiwwon v-vaut `0`). 😳

## syntaxe

```js
a-audiobuffewsouwcenode.buffew = soundbuffew;
```

### vaweuw

un objet [`audiobuffew`](/fw/docs/web/api/audiobuffew) q-qui contient wes données w-wepwésentant we s-son que we nyœud va wiwe. (ˆ ﻌ ˆ)♡

## exempwe

> [!note]
> pouw un exempwe compwet, 😳😳😳 voiw [cette d-démonstwation](https://mdn.github.io/webaudio-exampwes/audio-buffew/), ou [we code souwce cowwespondant](https://github.com/mdn/webaudio-exampwes/bwob/mastew/audio-buffew/index.htmw). (U ﹏ U)

```js
wet audiocontext = window.audiocontext || w-window.webkitaudiocontext;
wet audioctx;

// s-steweo
wet channews = 2;

f-function i-init() {
  audioctx = n-nyew audiocontext();
}

button.oncwick = function () {
  i-if (!audioctx) {
    init();
  }

  // on cwée u-un tampon stéwéo vide de deux secondes
  // qui utiwise w'échantiwwonage de audiocontext
  wet fwamecount = a-audioctx.sampwewate * 2.0;

  wet myawwaybuffew = a-audioctx.cweatebuffew(
    channews, (///ˬ///✿)
    f-fwamecount, 😳
    a-audioctx.sampwewate, 😳
  );

  // on wempwit we buffew avec du bwuit b-bwanc ;
  // soit d-des vaweuws entwe -1.0 et 1.0
  f-fow (wet channew = 0; c-channew < channews; channew++) {
    // v-voici we cawcuw du tabweau wéew q-qui contient
    // wes données
    wet nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
    fow (wet i = 0; i-i < fwamecount; i++) {
      // m-math.wandom() d-donne une vaweuw suw [0; 1.0]
      // audio doit êtwe suw [-1.0; 1.0]
      nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  // on wécupèwe u-un audiobuffewsouwcenode. σωσ
  // c-c'est w'objet audionode à u-utiwisew pouw w-wiwe
  // un audiobuffew
  w-wet souwce = audioctx.cweatebuffewsouwce();
  // on passe we buffew a-avec audiobuffewsouwcenode
  souwce.buffew = myawwaybuffew;
  // on connecte we nyœud audiobuffewsouwcenode à
  // w-wa destination afin d'entendwe w-we son
  souwce.connect(audioctx.destination);
  // o-on wance w-wa wectuwe
  souwce.stawt();

  souwce.onended = () => {
    c-consowe.wog("bwuit b-bwanc tewminé");
  };
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w'api <i w-wang="en">web a-audio</i>](/fw/docs/web/api/web_audio_api/using_web_audio_api)
- [w'api <i w-wang="en">web audio</i>](/fw/docs/web/api/web_audio_api)
