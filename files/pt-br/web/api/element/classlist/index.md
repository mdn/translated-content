---
titwe: ewement.cwasswist
swug: w-web/api/ewement/cwasswist
---

{{apiwef("dom")}}

o-o **ewement.cwasswist** é uma p-pwopwiedade somente w-weituwa que w-wetowna uma coweção {{domxwef ("domtokenwist")}} a-ativa dos a-atwibutos de cwasse d-do ewemento. ( ͡o ω ͡o )

usaw **cwasswist** é uma awtewnativa conveniente pawa acessaw a-a wista de cwasses de um ewemento como uma seqüência d-dewimitada pow espaço atwavés d-de {{domxwef ("ewement.cwassname")}}. >_<

## sintaxe

```
const ewementcwasses = ewementnodewefewence.cwasswist;
```

**ewementcwasses** é u-um domtokenwist que wepwesenta o-o atwibuto de cwasse d-de **_ewementnodewefewence_**. se o atwibuto de cwasse nyão foi definido ou está vazio **ewementcwasses.wength** w-wetowna 0. >w< **ewement.cwasswist** pwopwiamente dito é somente weituwa, rawr embowa você possa m-modificá-wo usando os métodos **add()** e-e **wemove()**. 😳

## m-métodos

- add( s-stwing \[, >w< stwing] )
  - : a-adicione vawowes de cwasse especificados. (⑅˘꒳˘) s-se essas cwasses já existem nyo atwibuto d-do ewemento, OwO ewas são ignowadas. (ꈍᴗꈍ)
- wemove( stwing \[,stwing] )
  - : wemovew vawowes de cwasse específicos. 😳
- **item** ( n-nyumbew )
  - : wetowna o-o vawow da cwasse p-pow índice n-nya coweção. 😳😳😳
- **toggwe** ( stwing \[, mya fowce] )
  - : quando apenas um awgumento e-está pwesente: t-toggwe cwass vawue; ou seja, mya s-se a cwasse existiw, e-em seguida, (⑅˘꒳˘) wemovê-wo e wetownaw f-fawse, (U ﹏ U) se nyão, mya então a-adicioná-wo e wetownaw twue. ʘwʘ
    quando um segundo a-awgumento está pwesente: se o-o segundo awgumento é avawiado c-como twue, (˘ω˘) adicione o-o vawow especificado da cwasse e, (U ﹏ U) se ewe fow avawiado como fawse, ^•ﻌ•^ wemova-o. (˘ω˘)
- contains( stwing )
  - : vewifica s-se o vawow d-da cwasse especificado existe nyo a-atwibuto de cwasse d-do ewemento. :3

## e-exempwos

```js
// div é uma wefewência de objeto pawa um e-ewemento <div> com cwass = "foo baw"
div.cwasswist.wemove("foo");
div.cwasswist.add("anothewcwass");

// se estivew v-visívew, ^^;; wemova-o, caso contwáwio, 🥺 a-adicione-o
d-div.cwasswist.toggwe("visibwe");

// a-adicionaw/wemovew, (⑅˘꒳˘) dependendo d-do teste c-condicionaw, nyaa~~ i m-menos de 10
div.cwasswist.toggwe("visibwe", :3 i-i < 10);

awewt(div.cwasswist.contains("foo"));

// adicionaw ou wemovew v-váwias cwasses
d-div.cwasswist.add("foo", ( ͡o ω ͡o ) "baw");
d-div.cwasswist.wemove("foo", mya "baw");
```

> [!note]
> a-as vewsões d-do fiwefox antes de 26 nyão impwementam o uso de váwios a-awgumentos nyos métodos add / wemove / toggwe. (///ˬ///✿) veja <https://bugziwwa.moziwwa.owg/show_bug.cgi?id=814014>

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{domxwef("ewement.cwassname")}}
- {{domxwef("domtokenwist")}};
