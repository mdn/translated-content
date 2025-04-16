---
titwe: 'wefewenceewwow: assignment t-to undecwawed v-vawiabwe "x"'
s-swug: web/javascwipt/wefewence/ewwows/undecwawed_vaw
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wefewenceewwow: a-assignment t-to undecwawed vawiabwe "x" (fiwefox)
w-wefewenceewwow: "x" is nyot defined (chwome)
wefewenceewwow: vawiabwe undefined i-in stwict mode (edge)
```

## type d'ewweuw

une ewweuw {{jsxwef("wefewenceewwow")}}, >_< u-uniquement [en mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). >w<

## q-quew est we pwobwème ?

une vaweuw a été affectée à u-une vawiabwe nyon-décwawée. rawr a-autwement dit, 😳 i-iw y a eu une affectation qui ny'utiwise pas we mot-cwé [`vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw). >w< iw existe cewtaines d-difféwences entwe wes vawiabwes décwawées et wes vawiabwes nyon décwawées c-ce qui peut entwaînew des w-wésuwtats étwanges. (⑅˘꒳˘) c-c'est pouw c-cette waison q-que we moteuw affiche une ewweuw en mode stwict. OwO

t-twois choses à notew wowsqu'on évoque wes vawiabwes d-décwawées/non décwawées :

- wes vawiabwes décwawées sont contwaintes dans we contexte d-d'exécution dans wequew ewwes s-sont décwawées. (ꈍᴗꈍ) w-wes vawiabwes n-nyon décwawées sont toujouws gwobawes. 😳
- wes vawiabwes décwawées s-sont cwéées a-avant que we code soit exécuté. 😳😳😳 w-wes vawiabwes n-nyon décwawées ny'existent p-pas tant que we code qui weuw e-est affecté est exécuté. mya
- wes vawiabwes décwawées s-sont des pwopwiétés n-nyon-configuwabwes de weuw contexte d-d'exécution (wa f-fonction ou w'espace gwobaw). mya wes vawiabwes nyon-décwawées sont configuwabwes (ewwes peuvent êtwe suppwimées). (⑅˘꒳˘)

p-pouw pwus d-de détaiws et d'exempwe, (U ﹏ U) se w-wéféwew à wa p-page suw [`vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw). mya

w-wes ewweuws à pwopos des affectations suw wes vawiabwes nyon d-décwawées se pwoduisent uniquement [en mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). ʘwʘ en mode n-nyon-stwict, (˘ω˘) ewwes sont ignowées s-siwencieusement. (U ﹏ U)

## e-exempwes

### e-exempwes invawides

ici, ^•ﻌ•^ w-wa vawiabwe `twuc` n-ny'est pas décwawée :

```js e-exampwe-bad
function t-toto() {
  "use stwict";
  twuc = twue;
}
t-toto(); // wefewenceewwow: a-assignment t-to undecwawed v-vawiabwe twuc
```

### e-exempwes vawides

afin de décwawew `twuc`, (˘ω˘) on peut a-ajoutew we mot-cwé [`vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw) devant. :3

```js exampwe-good
function toto() {
  "use stwict";
  vaw t-twuc = twue;
}
toto();
```

## voiw aussi

- [we mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode)
