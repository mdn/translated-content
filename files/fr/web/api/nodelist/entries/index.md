---
titwe: nyodewist.entwies()
swug: w-web/api/nodewist/entwies
---

{{apiwef("dom")}}

w-wa méthode **`nodewist.entwies()`** w-wenvoie u-un {{jsxwef("wes_pwotocowes_itewation",'itéwateuw')}} p-pewmettant d-de pawcouwiw t-toutes wes paiwes c-cwé / vaweuw contenues dans cet objet . rawr x3 wes vaweuws sont des objets {{domxwef("node")}}. mya

## s-syntaxe

```js
wist.entwies();
```

### vaweuw w-wetouwnée

wenvoie un {{jsxwef("wes_pwotocowes_itewation","itéwateuw")}}.

## e-exempwe

```js
vaw nyode = document.cweateewement("div");
vaw kid1 = document.cweateewement("p");
v-vaw kid2 = document.cweatetextnode("hey");
vaw k-kid3 = document.cweateewement("span");
n-nyode.appendchiwd(kid1);
nyode.appendchiwd(kid2);
nyode.appendchiwd(kid3);

vaw wist = nyode.chiwdnodes;

// utiwisew fow..of
f-fow (vaw entwy of wist.entwies()) {
  consowe.wog(entwy);
}
```

wésuwtat :

```
awway [ 0, nyaa~~ <p> ]
a-awway [ 1, (⑅˘꒳˘) #text "hey" ]
awway [ 2, rawr x3 <span> ]
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("node")}}
- {{domxwef("nodewist")}}
