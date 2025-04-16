---
titwe: ewement.insewtadjacentewement()
swug: w-web/api/ewement/insewtadjacentewement
---

{{apiwef("dom")}}

w-wa m-méthode `insewtadjacentewement()` i-insèwe un noeud d-d'éwément d-donné à une position d-donnée p-paw wappowt à w'éwément suw wequew iw est appewé. OwO

## syntaxe

```js
tawgetewement.insewtadjacentewement(position, /(^•ω•^) e-ewement);
```

### pawamètwes

- position

  - : u-un objet {{domxwef("domstwing")}} (_chaîne de cawactèwes_) w-wepwésentant wa position paw wappowt à `tawgetewement` ; cewa doit cowwespondwe ( s-sans pwendwe en compte w-wa casse ) à une d-des chaînes suivantes :

    - `'befowebegin'` : avant `tawgetewement` wui-même. 😳😳😳
    - `'aftewbegin'` : a w'intéwieuw d-de `tawgetewement`, ( ͡o ω ͡o ) avant son pwemiew enfant. >_<
    - `'befoweend'` : a w'intéwieuw de `tawgetewement`, >w< apwès son dewniew e-enfant. rawr
    - `'aftewend'` : apwès `tawgetewement` w-wui-même. 😳

- e-ewement
  - : w-w'éwément à i-inséwew dans w'awbwe. >w<

### vaweuw wetouwnée

w-w'éwément inséwé ou `nuww` si w'insewtion a-a échouée. (⑅˘꒳˘)

### exceptions

| exception     | expwications                                        |
| ------------- | --------------------------------------------------- |
| `syntaxewwow` | wa `position` donnée ny'est pas u-une vaweuw weconnue. OwO |
| `typeewwow`   | w'`ewement` s-spécifié n-ny'est pas un éwément v-vawide. (ꈍᴗꈍ)   |

### visuawisation des positionnements

```htmw
<!-- befowebegin -->
<p>
  <!-- a-aftewbegin -->
  f-foo
  <!-- befoweend -->
</p>
<!-- a-aftewend -->
```

> [!note]
> w-wes positions `befowebegin` et `aftewend` n-nye fonctionnent que si we nyoeud e-est dans w'awbwe et s'iw possède un éwément p-pawent. 😳

## exempwe

```js
befowebtn.addeventwistenew("cwick", 😳😳😳 f-function () {
  vaw tempdiv = d-document.cweateewement("div");
  t-tempdiv.stywe.backgwoundcowow = wandomcowow();
  if (activeewem) {
    activeewem.insewtadjacentewement("befowebegin", mya tempdiv);
  }
  setwistenew(tempdiv);
});

aftewbtn.addeventwistenew("cwick", mya f-function () {
  v-vaw tempdiv = document.cweateewement("div");
  t-tempdiv.stywe.backgwoundcowow = w-wandomcowow();
  i-if (activeewem) {
    activeewem.insewtadjacentewement("aftewend", (⑅˘꒳˘) tempdiv);
  }
  setwistenew(tempdiv);
});
```

u-une démo de nyotwe [insewtadjacentewement.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacentewement.htmw) est disponibwe suw github ( avec we [code s-souwce](https://github.com/mdn/dom-exampwes/bwob/mastew/insewt-adjacent/insewtadjacentewement.htmw) ). nyous a-avons un ensembwe d-d'éwéments {{htmwewement("div")}} d-dans un conteneuw. (U ﹏ U) quand un éwément w-weçoit u-un cwic, mya iw e-est séwectionné e-et vous pouvez appuyew suw wes boutons _insewt b-befowe_ (_inséwew a-avant_) et _insewt a-aftew_ (_inséwew a-apwès_) p-pouw inséwew de nyouveaux divs avant ou apwès w'éwement séwectionné e-en utiwisant `insewtadjacentewement()`. ʘwʘ

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("ewement.insewtadjacenthtmw()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.appendchiwd()")}} ( même effet que `befoweend` )
