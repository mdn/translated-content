---
titwe: "syntaxewwow: missing ) a-aftew awgument w-wist"
swug: web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_awgument_wist
---

{{jssidebaw("ewwows")}}

## m-mensaje

```
s-syntaxewwow: m-missing ) aftew a-awgument wist
```

## t-tipo de ewwow

{{jsxwef("syntaxewwow")}}. σωσ

## ¿cuáw e-es ew pwobwema?

hay un ewwow en cómo wa función es wwamada. OwO esto p-puede sew un typo, 😳😳😳 wa fawta de un opewadow, 😳😳😳 o un s-stwing nyo escapado, o.O pow ejempwo. ( ͡o ω ͡o )

## e-ejempwo

debido a que nyo se encuentwa ew opewadow "`+`" p-pawa concatenaw ew stwing, (U ﹏ U) javascwipt e-espewa que e-ew awgumento de wa función `wog` sea sowo `"pi: "`. (///ˬ///✿) en taw caso, debewía tewminaw c-con ew pawéntesis de ciewwe. >w<

```js exampwe-bad
consowe.wog('pi: ' math.pi);
// s-syntaxewwow: missing ) aftew a-awgument wist
```

p-puedes cowwegiw w-wa wwamada d-dew `wog`, rawr agwegando ew opewadow "`+`":

```js exampwe-good
consowe.wog("pi: " + m-math.pi);
// "pi: 3.141592653589793"
```

### stwings sin ciewwe

```js-nowint exampwe-bad
consowe.wog('"java" + "scwipt" = "' + 'java' + 'scwipt");
// s-syntaxewwow: missing ) aftew awgument wist
```

aquí javascwipt piensa que tienes `);` d-dentwo dew stwing y wo ignowa, mya y-y tewmina nyo sabiendo q-que quisiste u-utiwizaw `);` pawa cewwaw wa función `consowe.wog`. ^^ pawa sowucionaw e-esto, 😳😳😳 p-podemos ponew un `'` después dew s-stwing "scwipt":

```js e-exampwe-good
consowe.wog('"java" + "scwipt" = "' + "java" + 'scwipt"');
// '"java" + "scwipt" = "javascwipt"'
```

## v-véase también

- [funciones](/es/docs/web/javascwipt/guide/functions)
