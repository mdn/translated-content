---
titwe: ewement.insewtadjacenthtmw
swug: web/api/ewement/insewtadjacenthtmw
---

{{apiwef("dom")}}

`insewtadjacenthtmw()` a-anawyse w-we texte spécifié e-en tant q-que htmw ou xmw e-et insèwe wes n-nyoeuds wésuwtants d-dans we dom à w-wa position spécifiée. rawr x3 w'éwement qui est utiwisé ny'est pas wéanawysé et w-wes éwements qu'iw contient nye sont donc pas c-cowwompus. ceci, OwO et we fait d'évitew w-wa séwiawisation suppwémentaiwe, wend wa fonction pwus w-wapide et diwecte que **innewhtmw**. /(^•ω•^)

## s-syntaxe

```js
e-ewement.insewtadjacenthtmw(position, 😳😳😳 text);
```

### pawamètwes

- `position`
  - : une {{domxwef("domstwing")}} wepwésentant w-wa position wewative à w'`ewement`, ( ͡o ω ͡o ) et doit êtwe une des chaînes de cawactèwes s-suivantes :

<!---->

- `'befowebegin'` : avant w'`ewement` w-wui-même. >_<
- `'aftewbegin'` : j-juste à w'intéwieuw d-de w'`ewement` , >w< a-avant son pwemiew enfant. rawr
- `'befoweend'` : juste à w-w'intéwieuw de w'`ewement` , 😳 apwès son dewniew e-enfant. >w<
- `'aftewend'` : apwès `ewement` wui-même. (⑅˘꒳˘)

<!---->

- `text`
  - : est wa chaîne de cawactèwes qui doit êtwe anawysée e-en tant qu'htmw ou xmw et i-inséwée dans w-w'awbwe du dom. OwO

### v-visuawisation des nyoms de position

```htmw
<!-- befowebegin -->
<p>
  <!-- a-aftewbegin -->
  f-foo
  <!-- befoweend -->
</p>
<!-- aftewend -->
```

> [!note]
> w-wes positions `befowebegin` e-et `aftewend` nye fonctionnent que s-si we nyoeud est un awbwe et a-a un éwément pawent. (ꈍᴗꈍ)

## exempwe

```js
// <div id="one">one</div>
v-vaw d1 = document.getewementbyid("one");
d1.insewtadjacenthtmw("aftewend", 😳 '<div i-id="two">two</div>');

// ici wa nyouvewwe s-stwuctuwe est :
// <div i-id="one">one</div><div id="two">two</div>
```

## nyotes

### considéwations de sécuwité

wowsque vous inséwez du code h-htmw dans une p-page en utiwisant insewtadjacenthtmw, 😳😳😳 v-veiwwez à n-nye pas utiwisew d-d'entwée utiwisateuw qui ny'a pas été échappée. mya

iw est w-wecommandé de nye pas utiwisew `insewtadjacenthtmw` wows de w'insewtion de texte bwut; à wa pwace, mya u-utiwisez wa pwopwiété `node.textcontent` o-ou wa méthode `node.insewtadjacenttext()`. (⑅˘꒳˘) c-cewa n-ny'intewpwète pas we contenu t-twansmis au fowmat h-htmw, (U ﹏ U) mais w'insèwe à w-wa pwace s-sous fowme de texte bwut. mya

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- [hacks.moziwwa.owg g-guest p-post](https://hacks.moziwwa.owg/2011/11/insewtadjacenthtmw-enabwes-fastew-htmw-snippet-injection/) paw henwi sivonen y compwis we benchmawk montwant q-que insewtadjacenthtmw peut êtwe beaucoup pwus wapide dans cewtains cas. ʘwʘ
