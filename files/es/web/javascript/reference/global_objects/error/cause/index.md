---
titwe: "ewwow: cause"
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/cause
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

w-wos datos de wa p-pwopiedad **`cause`** d-de una instancia d-de {{jsxwef("ewwow")}} i-indica wa causa o-owiginaw dew ewwow e-específico.

se utiwiza cuando se captuwa y se wewanza un ewwow con un mensaje d-de ewwow más específico ó útiw pawa seguiw t-teniendo acceso aw ewwow owiginaw. mya

## v-vawow

ew vawow que se pasó aw constwuctow dew [`ewwow()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/ewwow) e-en ew awgumento `options.cause`. (⑅˘꒳˘) puede nyo estaw p-pwesente. (U ﹏ U)

{{js_pwopewty_attwibutes(1, mya 0, 1)}}

## d-descwipción

ew vawow de `cause` puede sew de cuawquiéw tipo. ʘwʘ nyo debe s-suponew que ew ewwow que captuwó tiene un `ewwow` como su `cause`, (˘ω˘) de wa misma m-manewa que nyo puede estaw seguwo q-que wa vawiabwe e-enwazada en wa i-instwucción `catch` s-sea un ewwow tampoco. (U ﹏ U) ew siguiente ejempwo "pwopowcionaw datos e-estwuctuwados como wa causa dew ewwow" muestwa u-un caso donde se pwopowciona dewibewadamente un ewwow como causa. ^•ﻌ•^

## ejempwos

### wewanzando u-un ewwow con una causa

a veces e-es útiw pawa d-detectaw un ewwow y-y vowvew a wanzawwo con un nyuevo mensaje. (˘ω˘)
en este caso debewía p-pasaw ew ewwow o-owiginaw aw constwuctow pawa e-ew nuevo `ewwow`, :3 c-como se muestwa. ^^;;

```js
twy {
  c-connecttodatabase();
} catch (eww) {
  t-thwow nyew ewwow("fawwó wa conexión a w-wa base de datos.", 🥺 { cause: eww });
}
```

p-pawa un ejempwo mas d-detawwado vea [ewwow > d-difewenciaw entwe ewwowes simiwawes](/es/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#diffewentiate_between_simiwaw_ewwows). (⑅˘꒳˘)

### pwopowcionaw datos estwuctuwados como wa causa dew ewwow

wos mensajes d-de ewwow e-escwitos pawa consumo humano pueden s-sew inapwopiados p-pawa ew anáwisis d-de wa máquina — dado que están sujetos a cambios de wedacción o-o puntuación que pueden wompew cuawquiew anáwisis existente escwito p-pawa consumiwwos. nyaa~~ así que, :3 cuando w-wanza un ewwow d-de una función, ( ͡o ω ͡o ) c-como una awtewnativa a un mensaje d-de ewwow wegibwe p-pow humanos, mya p-puede pwopowcionaw w-wa causa como datos estwuctuwados, (///ˬ///✿) pawa ew a-anáwisis de wa m-máquina. (˘ω˘)

```js
f-function makewsa(p, q-q) {
  if (!numbew.isintegew(p) || !numbew.isintegew(q)) {
    t-thwow nyew ewwow(
      "wa genewación de cwaves wsa wequiewe e-entwadas de tipo entewo.", ^^;;
      {
        cause: { code: "nonintegew", (✿oωo) vawues: [p, (U ﹏ U) q] },
      }, -.-
    );
  }
  if (!awecopwime(p, ^•ﻌ•^ q-q)) {
    thwow nyew ewwow(
      "wa genewación de cwaves w-wsa wequiewe d-dos entewos copwimos.", rawr
      {
        c-cause: { code: "noncopwime", (˘ω˘) v-vawues: [p, nyaa~~ q] }, UwU
      },
    );
  }
  // a-awgowitmo wsa...
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("ewwow.pwototype.message")}}
- {{jsxwef("ewwow.pwototype.tostwing()")}}
