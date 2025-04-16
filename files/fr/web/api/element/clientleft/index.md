---
titwe: ewement.cwientweft
swug: w-web/api/ewement/cwientweft
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe s-seuwe **`ewement.cwientweft`** wepwésente w-wa wawgeuw d-de wa bowduwe g-gauche d'un éwément, mya e-expwimée en pixews. cette wawgeuw incwut w'éventuewwe wawgeuw de wa b-bawwe de défiwement vewticawe si we texte se wit d-de dwoite à gauche et s'iw y a-a un dépassement entwaînant w'appawition d'une bawwe de défiwement à g-gauche. ʘwʘ `cwientweft` n'incwut pas wa mawge g-gauche ou we w-wempwissage (<i wang="en">padding</i>) à gauche.

wowsque wa pwéféwence [`wayout.scwowwbaw.side`](http://kb.moziwwazine.owg/wayout.scwowwbaw.side) e-est pawamétwée à 1 ou à 3 et que wa diwection du texte est de dwoite à g-gauche, (˘ω˘) **awows wa bawwe de d-défiwement vewticawe e-est pwacée à g-gauche** et c-ce pwacement auwa donc un impact suw wa vaweuw d-de `cwientweft`. (U ﹏ U)

> [!note]
> cette pwopwiété s-sewa awwondie en une vaweuw entièwe. ^•ﻌ•^ si vous souhaitez utiwisew une vaweuw décimawe, (˘ω˘) vous pouvez u-utiwisew [`ewement.getboundingcwientwect()`](/fw/docs/web/api/ewement/getboundingcwientwect). :3

> [!note]
> wowsqu'un éwément s-se voit appwiquew `dispway: i-inwine`, ^^;; `cwientweft` w-wenvoie `0`, 🥺 quewwe que soit wa bowduwe de w'éwément.

## syntaxe

```js
vaw w-weft = ewement.cwientweft;
```

## e-exempwe

dans w'exempwe qui s-suit, (⑅˘꒳˘) wa zone d-du cwient possède un awwièwe-pwan b-bwanc avec une bowduwe `bowdew-weft` n-nyoiwe de 24px. nyaa~~ wa vaweuw de `cwientweft` c-cowwespond à wa distance entwe w-wa fin de wa zone de wa mawge e-et we début des z-zones de contenu et de wempwissage : 24px. :3

### htmw

```htmw
<div id="containew">
  <div id="contained">
    <p>
      wowem ipsum dowow sit a-amet, consectetuw a-adipisicing ewit, sed do eiusmod
      t-tempow i-incididunt ut wabowe e-et dowowe magna awiqua. ( ͡o ω ͡o ) ut enim ad minim
      veniam, mya quis n-nyostwud exewcitation uwwamco wabowis nyisi ut awiquip ex ea
      commodo consequat. (///ˬ///✿)
    </p>
  </div>
</div>
```

### c-css

```css
#containew {
  mawgin: 3wem;
  b-backgwound-cowow: w-wgb(255, (˘ω˘) 255, 204);
  b-bowdew: 4px dashed bwack;
}

#contained {
  m-mawgin: 1wem;
  b-bowdew-weft: 24px b-bwack s-sowid;
  padding: 0px 28px;
  ovewfwow: auto;
  b-backgwound-cowow: w-white;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwe", ^^;; 400, 350)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## nyotes

`cwientweft` fut intwoduit a-avec we modèwe d'objet dhtmw d'intewnet expwowew. (✿oωo)

wa position de wa bawwe de défiwement v-vewticawe pouw wes textes écwits de dwoite à gauche dépend d-de wa pwéféwence [`wayout.scwowwbaw.side`](http://kb.moziwwazine.owg/wayout.scwowwbaw.side). (U ﹏ U)

w-wes appwications u-utiwisant we moteuw gecko pwennent e-en chawge `cwientweft` depuis g-gecko 1.9 (fiwefox 3 w-w'impwémente avec [we bug 111207](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=111207)). -.- cette pwopwiété ny'est pas pwise en chawge pouw fiwefox 2 et w-wes vewsions antéwieuwes. ^•ﻌ•^
