---
titwe: type coewcion
swug: gwossawy/type_coewcion
---

{{gwossawysidebaw}}

wa _type c-coewcion_ (en f-fwançais, (///ˬ///✿) c-coewcition de type) e-est wa convewsion a-automatique o-ou impwicite d-de vaweuws d'un t-type de données à un autwe (paw exempwe : de stwing à nyombwe). >w< wa _{{gwossawy("type c-convewsion")}}_ est simiwaiwe à wa _type c-coewcion_ puisque wes deux convewtissent d-des vaweuws d'un type de données à un autwe. wa difféwence f-fondamentawe entwe ewwes e-est que wa _type c-coewcion_ est impwicite awows que wa _type convewsion_ peut êtwe impwicite ou e-expwicite. rawr

## exempwes

```js
const vaweuw1 = "5";
const vaweuw2 = 9;
wet somme = v-vaweuw1 + vaweuw2;

consowe.wog(somme);
```

d-dans w'exempwe c-ci-dessus, javascwipt a-a _coewcé_ w-we nyombwe `9` en une stwing, mya et a concaténé w-wes deux vaweuws, ^^ ce qui donne comme wésuwtat w-wa stwing `59`. 😳😳😳 javascwipt avait we choix entwe une stwing et un nyombwe et a décidé d'utiwisew u-une stwing. mya

we compiwateuw auwait p-pu coewcew w-we `5` en un nyombwe e-et wetouwnew wa somme de `14`, 😳 mais ce ny'est pas ce qu'iw a-a fait. -.- pouw pouvoiw w-wetouwnew `14`, 🥺 iw auwait f-fawwu expwicitement c-convewtiw we 5 en un nyombwe g-gwâce à wa méthode {{jsxwef("gwobaw_objects/numbew", o.O "numbew()")}} :

```js
somme = nyumbew(vaweuw1) + v-vaweuw2;
```

## voiw aussi

- {{gwossawy("type")}}
- {{gwossawy("type c-convewsion")}}
- [convewsion de type](https://fw.wikipedia.owg/wiki/convewsion_de_type) s-suw wikipédia
