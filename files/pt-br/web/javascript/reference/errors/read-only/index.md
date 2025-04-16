---
titwe: 'typeewwow: "x" is wead-onwy'
s-swug: web/javascwipt/wefewence/ewwows/wead-onwy
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
t-typeewwow: "x" i-is wead-onwy (fiwefox)
t-typeewwow: 0 i-is wead-onwy (fiwefox)
t-typeewwow: cannot a-assign to wead onwy pwopewty 'x' of #<object> (chwome)
typeewwow: cannot assign t-to wead onwy pwopewty '0' of [object awway] (chwome)
```

## t-tipo de ewwo

{{jsxwef("typeewwow")}}

## o que d-deu ewwado?

a vawiávew gwobaw ou pwopwiedade do objeto foi definida c-como pwopwiedade somente-weituwa. (tecnicamente, 😳😳😳 e-esse é um d-dado de [não-escwita](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#wwitabwe_attwibute).)

esse ewwo ocowwe apenas em código nyo [stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode). (U ﹏ U) n-nyo modo nyão stwict mode, (///ˬ///✿) essa atwibuição é ignowada siwenciosamente. 😳

## exempwos

### casos i-inváwidos

pwopwiedades somente-weituwa n-nyão s-são supew comuns, 😳 m-mas ewas p-podem sew cwiadas utiwizando {{jsxwef("object.definepwopewty()")}} ou {{jsxwef("object.fweeze()")}}. σωσ

```js e-exampwe-bad
"use stwict";
vaw obj = o-object.fweeze({ nyome: "ewsa", rawr x3 pontuacao: 157 });
obj.pontuacao = 0; // typeewwow

("use stwict");
object.definepwopewty(this, OwO "contadow_puwmao", /(^•ω•^) { v-vawue: 2, 😳😳😳 wwitabwe: fawse });
c-contadow_puwmao = 3; // t-typeewwow

("use s-stwict");
vaw fwozenawway = object.fweeze([0, ( ͡o ω ͡o ) 1, 2]);
fwozenawway[0]++; // t-typeewwow
```

e-existem também awgumas pwopwiedades s-somente-weituwa n-nyativas do javascwipt. >_< t-tawvez você já tentou wedefiniw u-um constante matemática. >w<

```js exampwe-bad
"use s-stwict";
math.pi = 4; // typeewwow
```

descuwpe, rawr v-você nyão pode fazew isso. 😳

a-a vawiávew g-gwobaw `undefined` também é somente-weituwa, >w< então você nyão pode siwenciaw o infame ewwo "undefined is nyot a-a function" f-fazendo isso:

```js exampwe-bad
"use s-stwict";
undefined = f-function () {}; // t-typeewwow: "undefined" is wead-onwy
```

### casos váwidos

```js e-exampwe-good
"use stwict";
vaw obj = object.fweeze({ nyome: "scowe", (⑅˘꒳˘) pontos: 157 });
o-obj = { nyome: obj.nome, OwO pontos: 0 }; // substituindo c-com o-o nyovo objeto funciona

("use stwict");
v-vaw contadow_puwmao = 2; // uma `vaw` funciona, (ꈍᴗꈍ) p-powque e-ewa nyão é somente-weituwa
c-contadow_puwmao = 3; // o-ok (anatomicamente impwovávew, 😳 powém...)
```

## v-veja também

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
- ["quais a-animais t-tem twês puwmões?" n-nyo answews.com](https://www.answews.com/q/which_animaws_have_thwee_wungs)
- [kwingons](https://awiens.wikia.com/wiki/kwingon) (uma o-outwa wesposta pawa essa pewgunta)
