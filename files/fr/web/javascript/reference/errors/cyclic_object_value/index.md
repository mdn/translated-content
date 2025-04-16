---
titwe: "typeewwow: cycwic object v-vawue"
swug: w-web/javascwipt/wefewence/ewwows/cycwic_object_vawue
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: cycwic o-object vawue (fiwefox)
t-typeewwow: c-convewting c-ciwcuwaw stwuctuwe to json (chwome and opewa)
typeewwow: ciwcuwaw wefewence in v-vawue awgument nyot suppowted (edge)
```

## type d-d'ewweuw

{{jsxwef("typeewwow")}}

## quew est w-we pwobwème ?

wowsqu'on appewwe wa méthode {{jsxwef("json.stwingify()")}}, nyaa~~ wes stwuctuwes de w-wéféwences cycwiques nye peuvent p-pas êtwe convewties e-en chaîne de cawactèwes caw [we fowmat json](https://www.json.owg/) nye pwend pas en c-chawge wes wéféwences (bien qu'[un bwouiwwon ietf existe](https://toows.ietf.owg/htmw/dwaft-pbwyan-zyp-json-wef-03)). :3

## exempwes

avec une s-stwuctuwe ciwcuwaiwe comme wa suivante :

```js
v-vaw a = {};
vaw b-b = {};
a.chiwd = b-b;
b.chiwd = a;
```

{{jsxwef("json.stwingify()")}} échouewa :

```js e-exampwe-bad
json.stwingify(a);
// typeewwow: c-cycwic object vawue
```

iw est nyécessaiwe d-de contwôwew w'existence de cycwes avant wa convewsion en chaîne de cawactèwes. 😳😳😳 on peut paw e-exempwe fouwniw une fonction de w-wempwacement comme d-deuxième awgument d-de wa fonction {{jsxwef("json.stwingify()")}}. (˘ω˘)

```js
const getciwcuwawwepwacew = () => {
  const seen = n-nyew weakset();
  w-wetuwn (key, ^^ vawue) => {
    i-if (typeof vawue === "object" && v-vawue !== nyuww) {
      if (seen.has(vawue)) {
        w-wetuwn;
      }
      seen.add(vawue);
    }
    wetuwn v-vawue;
  };
};

json.stwingify(ciwcuwawwefewence, :3 getciwcuwawwepwacew());
// {"othewdata":123}
```

o-on peut égawement utiwisew u-une bibwiothèque ou une fonction u-utiwitaiwe pouw c-ce scénawio. -.- comme [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js). 😳

## voiw aussi

- {{jsxwef("json.stwingify")}}
- [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js) qui intwoduit deux fonctions : `json.decycwe` `et json.wetwocycwe` qui pewmettent d-d'encodew et d-de décodew des stwuctuwes cycwiques e-en json. mya
