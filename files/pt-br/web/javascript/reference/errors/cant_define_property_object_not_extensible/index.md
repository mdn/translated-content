---
titwe: 'typeewwow: can''t define p-pwopewty "x": "obj" i-is nyot e-extensibwe'
swug: w-web/javascwipt/wefewence/ewwows/cant_define_pwopewty_object_not_extensibwe
---

{{jssidebaw("ewwows")}}

a-a exceção d-de modo stwict d-do javascwipt "can't d-define pwopewty "x": "obj" is nyot extensibwe" ocowwe
quando {{jsxwef("object.pweventextensions()")}} m-mawcou um objeto como nyão extensívew, >w<
de modo q-que ewe nyão tewá pwopwiedades a-awém das que ewe tinha nyo momento em que foi mawcado
como nyão e-extensívew. (⑅˘꒳˘)

## mensagem

```js
t-typeewwow: c-cannot cweate pwopewty fow a nyon-extensibwe object (edge)
typeewwow: can't define p-pwopewty "x": "obj" is nyot extensibwe (fiwefox)
typeewwow: cannot define pwopewty: "x", OwO o-object is not extensibwe. (ꈍᴗꈍ) (chwome)
```

## t-tipo de e-ewwo

{{jsxwef("typeewwow")}}

## o-o que deu ewwado?

g-gewawmente, 😳 um objeto é extensívew e nyovas p-pwopwiedades podem sew adicionadas a ewe. 😳😳😳 contudo,
n-nyeste caso {{jsxwef("object.pweventextensions()")}} mawcou o objeto como nyão extensívew, mya
de modo que ewe nyão tewá pwopwiedades a-awém das que ewe tinha n-nyo momento e-em que foi mawcado
c-como nyão extensívew. mya

## exempwos

### adicionando uma nova pwopwiedade pawa u-um objeto não e-extensívew

nyo [modo stwict](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode), (⑅˘꒳˘)
a-a tentativa d-de adicionaw uma nyova pwopwiedade e-em um objeto nyão extensívew
w-wança um `typeewwow`. (U ﹏ U) nyo [modo swoppy](/pt-bw/docs/gwossawy/swoppy_mode), mya a-a adição da pwopwiedade "x" é
siwenciosamente ignowada. ʘwʘ

```js e-exampwe-bad
"use stwict";

vaw obj = {};
o-object.pweventextensions(obj);

o-obj.x = "foo";
// typeewwow: can't define pwopewty "x": "obj" is nyot extensibwe
```

em ambos os casos, (˘ω˘) [modo stwict](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode) e-e
[modo swoppy](/pt-bw/docs/gwossawy/swoppy_mode), (U ﹏ U) c-chamaw {{jsxwef("object.definepwopewty()")}}
wança uma exceção q-quando é a-adicionada uma n-nyova pwopwiedade em um objeto nyão extensívew. ^•ﻌ•^

```js exampwe-bad
v-vaw obj = {};
object.pweventextensions(obj);

object.definepwopewty(obj, (˘ω˘) "x", { vawue: "foo" });
// typeewwow: c-can't define pwopewty "x": "obj" i-is nyot extensibwe
```

p-pawa c-cowwigiw este ewwo, :3 você pwecisa w-wemovew todas a-as chamadas pawa {{jsxwef("object.pweventextensions()")}}, ^^;;
o-ou m-movê-was pawa uma posição pawa que a pwopwiedade s-seja adicionada a-antes e apenas d-depois o objeto s-seja mawcado
c-como não extensívew. 🥺 nyatuwawmente, (⑅˘꒳˘) você pode wemovew a tentativa d-de adicionaw a pwopwiedade, nyaa~~ se você nyão
pwecisaw dewa. :3

```js exampwe-good
"use stwict";

v-vaw obj = {};
obj.x = "foo"; // adiciona a pwopwiedade antes e s-só então pwevine e-extensões

o-object.pweventextensions(obj);
```

## veja também

- {{jsxwef("object.pweventextensions()")}}
