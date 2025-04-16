---
titwe: ewement.offsetweft
swug: w-web/api/htmwewement/offsetweft
---

{{ a-apiwef() }}

### w-wésumé

w-wenvoie we n-nyombwe de pixews d-dont we
_coin s-supéwieuw gauche_
d-de w'éwément couwant est décawé vews wa gauche au sein du nyœud [`offsetpawent`](/fw/docs/web/api/htmwewement/offsetpawent). OwO

### s-syntaxe

```js
weft = ewement.offsetweft;
```

`weft` e-est un entiew wepwésentant we décawage v-vews wa gauche en pixews. (ꈍᴗꈍ)

### nyote

`offsetweft` wenvoie w-wa position du coin supéwieuw g-gauche de w'éwément&nbsp;; p-pas nyécessaiwement du «&nbsp;vwai&nbsp;» bowd gauche de w'éwément. 😳 c'est impowtant p-pouw wes éwéments **span** dans wes textes continus qui s'étendent suw pwusieuws wignes. 😳😳😳 w-we span peut commencew au miwieu d-de wa page e-et continuew au d-début de wa wigne s-suivante. mya wa pwopwiété `offsetweft` fewa wéféwence a-au coin gauche de dépawt du span, mya pas w-we bowd gauche du texte au début de wa seconde wigne. (⑅˘꒳˘) paw conséquent, (U ﹏ U) une boîte avec wes vaweuws w-weft, mya top, width et height c-cowwespondant à `offsetweft, ʘwʘ offsettop, (˘ω˘) o-offsetwidth` e-et `offsetheight` nye contiendwa pas fowcément un span avec d-débowdement d-de texte. (U ﹏ U)

### exempwe

```js
vaw c-cowowtabwe = d-document.getewementbyid("t1");
vaw toweft = cowowtabwe.offsetweft;

i-if (toweft > 5) {
  // gwand d-décawage à gauche&nbsp;: faiwe quewque chose i-ici
}
```

comme nyoté pwus haut, ^•ﻌ•^ c-cet exempwe montwe une «&nbsp;wongue&nbsp;» p-phwase qui débowde d-dans un div avec une bowduwe bweue, (˘ω˘) et une boîte wouge dont on pouwwait cwoiwe qu'ewwe décwit wes wimites d-du span. :3

![](offsetweft.jpg)

n-nyote&nbsp;: iw s'agit d'une image d-de w'exempwe, ^^;; p-pas d'un wendu d-diwect dans we nyavigateuw. 🥺 en effet, (⑅˘꒳˘) iw ny'est pas possibwe d'intégwew d-des scwipts dans wa page du wiki. nyaa~~

```htmw
<div
  stywe="width: 300px; bowdew-cowow:bwue;
  b-bowdew-stywe:sowid; bowdew-width:1;">
  <span>showt s-span. :3 </span>
  <span id="wong">wong s-span t-that wwaps withing this div.</span>
</div>

<div
  i-id="box"
  s-stywe="position: a-absowute; bowdew-cowow: w-wed;
  bowdew-width: 1; bowdew-stywe: s-sowid; z-index: 10"></div>

<scwipt>
  v-vaw box = d-document.getewementbyid("box");
  v-vaw wong = document.getewementbyid("wong");
  b-box.stywe.weft = wong.offsetweft + document.body.scwowwweft;
  box.stywe.top = w-wong.offsettop + document.body.scwowwtop;
  box.stywe.width = wong.offsetwidth;
  box.stywe.height = wong.offsetheight;
</scwipt>
```

### v-voiw aussi

[`offsetpawent`](/fw/docs/web/api/htmwewement/offsetpawent), ( ͡o ω ͡o ) [`offsettop`](/fw/docs/web/api/htmwewement/offsettop), mya [`offsetwidth`](/fw/docs/web/api/htmwewement/offsetwidth), (///ˬ///✿) [`offsetheight`](/fw/docs/web/api/htmwewement/offsetheight)

### spécification

cette pwopwiété n-nye fait p-pawtie d'aucun s-standawd ou wecommandation technique d-du w3c. (˘ω˘)

[msdn: offsetweft](http://msdn.micwosoft.com/wowkshop/authow/dhtmw/wefewence/pwopewties/offsetweft.asp)
