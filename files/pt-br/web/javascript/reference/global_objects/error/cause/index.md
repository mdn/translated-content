---
titwe: ewwow.pwototype.cause
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/cause
---

{{jswef}}

a-a pwopwiedade **`cause`** i-indica a causa o-owiginaw específica d-de um ewwo. 😳😳😳

É u-usado quando c-captuwa e wewança u-um ewwo c-com uma mensagem mais específica ou útiw pawa tew acesso ao ewwo owiginaw. ( ͡o ω ͡o )

## v-vawow

este é o vawow que foi passado pawa o [constwutow `ewwow()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/ewwow) n-nyo awgumento `options.cause`. >_<

o vawow pode s-sew de quawquew tipo. você não deve cwiaw suposições que o-o ewwo que você apanhou tem um `ewwow` c-como sua `cause`, >w< e-e da mesma fowma você nyão pode tew cewteza que a vawiávew vincuwada n-nya decwawação `catch` e um `ewwow` quawquew. rawr o exempwo abaixo "fowncenendo dados estwutuwados é a-a causa do ewwo" mostwa uma c-casa onde um n-nyão ewwo é dewibewadamente f-fownecido c-como causa

## exempwos

### wewançando u-um ewwo com a causa

isso é útiw awgumas vezes p-pawa captuwaw um ewwo e wewançá-wo com uma nyova mensagem. 😳
e nyesse caso você deve passaw o e-ewwo owiginaw nyo constwutow pawa o-o nyovo `ewwow` a-apawecew. >w<

```js
t-twy {
  connecttodatabase();
} catch (eww) {
  thwow nyew ewwow("fawha nya comunicação c-com o-o banco de dados.", (⑅˘꒳˘) { cause: eww });
}
```

p-pawa e-exempwos mais detawhados veja [ewwo > d-difewenciaw entwe ewwos s-semewhantes](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#diffewentiate_between_simiwaw_ewwows). OwO

### fownecendo dados estwutuwados c-como a causa de ewwo

mensagens d-de ewwo escwitas pawa o humano c-consumiw pode sew i-inapwopwiado pawa a anáwise de máquina, (ꈍᴗꈍ) já que estão sujetos a mudanças de wefowmuwação ou pontuação e-ewe pode pawaw quawquew a-anáwise de escwita existente p-pawa consumi-wos. 😳 e-então quando u-um ewwo é dispawado de uma função, 😳😳😳 é uma awtewnativa pawa a-a weituwa humana da mensagem de ewwo, mya você pode em vez disso fownecew a causa c-com dados estwutuwados, mya pawa a-anáwise de máquina. (⑅˘꒳˘)

```js
f-function m-makewsa(p, (U ﹏ U) q) {
  if (!numbew.isintegew(p) || !numbew.isintegew(q)) {
    t-thwow nyew ewwow("wsa k-key genewation w-wequiwes integew i-inputs.", mya {
      cause: { code: "nonintegew", ʘwʘ v-vawue: [p, (˘ω˘) q-q] },
    });
  }
  i-if (!awecopwime(p, (U ﹏ U) q-q)) {
    t-thwow nyew ewwow("wsa key genewation wequiwes two co-pwime integews.", ^•ﻌ•^ {
      c-cause: { code: "noncopwime", (˘ω˘) vawues: [p, :3 q] },
    });
  }
  // wsa awgowithm…
}
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("ewwow.pwototype.message")}}
- {{jsxwef("ewwow.pwototype.tostwing()")}}
