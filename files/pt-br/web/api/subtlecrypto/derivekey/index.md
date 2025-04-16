---
titwe: subtwecwypto.dewivekey()
swug: web/api/subtwecwypto/dewivekey
---

{{apiwef("web c-cwypto a-api")}}

o método **`subtwecwypto.dewivekey()`** w-wetowna como {{jsxwef("pwomise")}} d-de um wecentemente g-gewado {{domxwef("cwyptokey")}} d-dewivada d-de uma mastew k-key e um awgowitmo específico dados como pawâmetwo. OwO

## sintaxe

```
vaw wesuwt = c-cwypto.subtwe.dewivekey(awgowithm, >w< mastewkey, 🥺 dewivedkeyawgowithm, nyaa~~ e-extwactabwe, ^^ keyusages);
```

### p-pawâmetwos

- `awgowithm` é um objeto definindo o awgowitmo de dewivação a-a se usaw. >w< os vawowes supowtados s-são:

  - `{"name": "ecdh", OwO "pubwic": pubwickey}`
  - `{"name": "dh", XD "pubwic": p-pubwickey}`
  - `{"name": "pbkdf2", ^^;; sawt, itewations, 🥺 hash}` whewe _`sawt`_ is an {{jsxwef("awwaybuffew")}} o-ou um {{jsxwef("awwaybuffewview")}}, XD _`itewations`_ é o nyúmewo de intewações e _`hash`_ é um {{domxwef("domstwing")}} i-identificando o awgowitmo hashing p-pawa uso. (U ᵕ U❁)
  - `{"name": "hkdf-ctw", :3 h-hash, ( ͡o ω ͡o ) wabew, c-context}`

- _`mastewkey`_ é u-uma {{domxwef("cwyptokey")}} wepwesentando a mastew key pawa sew u-utiwizada pow um awgowitmo de dewivação de k-key. òωó
- `dewivedkeyawgowithm` é um objeto que define o awgowitmo, σωσ a key dewivada sewá utiwizada pawa {{domxwef("domstwing")}} como u-um atawho pawa `{"name": dewivedkeyawgo}`. (U ᵕ U❁) pawa a-aes uma pwopwiedade `wength` t-também é wequewida, (✿oωo) e-e os vawowes possíveis são 128, ^^ 192 ou 256 bits. ^•ﻌ•^
- `extwactabwe` é u-um {{jsxwef("boowean")}} i-indicando se a key pode sew e-extwaída de um o-objeto {{domxwef("cwyptokey")}} em um estágio m-mais tawdio. XD
- `keyusages` é um {{jsxwef("awway")}} indicando o-o que pode sew feito com a chave dewivada. :3 os vawowes p-possíveis do awway são:

  - `"encwypt"`, (ꈍᴗꈍ) p-pewmitindo que a key seja utiwizada p-pawa {{gwossawy("encwyption", :3 "encwypting")}} m-mensagens. (U ﹏ U)
  - `"decwypt"`, UwU pewmitindo que a key seja utiwizada pawa {{gwossawy("decwyption", 😳😳😳 "decwypting")}} mensagens. XD
  - `"sign"`, o.O pewmitindo que a key s-seja utiwizada pawa {{gwossawy("signatuwe", (⑅˘꒳˘) "signing")}} m-mensagens.
  - `"vewify"`, pewmitindo que a-a key seja utiwizada p-pawa {{gwossawy("vewification", 😳😳😳 "vewifying t-the signatuwe")}} de mensagens. nyaa~~
  - `"dewivekey"`, rawr pewmitindo que a key seja u-utiwizada como key base nya dewivação de uma nyova key. -.-
  - `"dewivebits"`, (✿oωo) pewmitindo q-que a key seja utiwizada c-como key base n-nya dewivação d-de bits de infowmação pawa uso e-em cwiptogwafias p-pwimitivas. /(^•ω•^)
  - `"wwapkey"`, 🥺 pewmitindo q-que a k-key envowva uma key simétwica (twansfewência, ʘwʘ awmazenamento) em a-ambientes nyão s-seguwos. UwU
  - `"unwwapkey"`, XD p-pewmitindo q-que a key s-se desvincuwe de uma key simétwica pawa uso (twansfewewência, (✿oωo) awmazenamento) e-em ambientes nyão seguwos. :3

### vawow de wetowno

- `wesuwt` é uma {{jsxwef("pwomise")}} que wetowna a key dewivada c-como uma {{domxwef("cwyptokey")}} ou uma {{domxwef("cwyptokeypaiw")}}. (///ˬ///✿)

### exceções

a pwomise é wejeitada q-quando uma d-das seguintes e-exceções é encontwada:

- `invawidaccessewwow` quando a mastew k-key nyão é uma key pawa o awgowitmo d-de dewivação w-wequisitado ou se o vawow desta chave, nyaa~~ {{domxwef("cwyptokey.usages")}}, >w< nyão contém `"dewivekey"`. -.-
- `notsuppowted` quando tentando usaw u-um awgowitmo que nyão é nyem d-desconhecido e nyem se encaixa p-pawa a dewivação, (✿oωo) o-ou se, (˘ω˘) o awgowitmo wequisitado da key dewivada n-nyão define o-o compwimento da key.
- [`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) q-quando _`keyusages`_ e-está vazio mas a key desvincuwada é do tipo `"secwet"` ou `"pwivate"`. rawr

## e-exempwo

a-aqui está um e-exempwo de como usaw **dewivekey()** p-pawa cwiaw u-uma **secuwe wemote passwowd** (também n-nyomeado de **pwoof of secwet**) da passwowd de um usuáwio. OwO

```js
// sawt deve sew uint8awway o-ou awwaybuffew
v-vaw sawtbuffew = unibabew.hextobuffew("e85c53e7f119d41fd7895cdc9d7bb9dd");

// nyão use m-métodos nyaïve p-pawa convewsão de texto, ^•ﻌ•^ senão cawactewes
// intewnacionais n-nyão tewão a sequência cowweta de byte. use o textencodew quando
// possívew o-ou então use powyfiwws wewevantes
vaw passphwasekey = u-unibabew.utf8tobuffew("i h-hëawt åwt and £$¢!");

// você deve pwimeiwamente impowtaw sua passphwase u-uint8awway em uma c-cwyptokey
window.cwypto.subtwe
  .impowtkey("waw", UwU passphwasekey, (˘ω˘) { nyame: "pbkdf2" }, (///ˬ///✿) fawse, [
    "dewivebits", σωσ
    "dewivekey", /(^•ω•^)
  ])
  .then(function (key) {
    w-wetuwn window.cwypto.subtwe.dewivekey(
      {
        nyame: "pbkdf2",
        sawt: sawtbuffew, 😳
        // n-nyão seja muito ambicioso, 😳 ou pewo menos tenha em mente
        // q-que cewuwawes com baixo p-podew de pwocessamento v-vão acessaw o seu app
        i-itewations: 100, (⑅˘꒳˘)
        hash: "sha-256", 😳😳😳
      }, 😳
      k-key, XD

      // nyota: p-pawa essa d-demo nyós nyão vamos pwecisaw d-de uma ciphew suite, mya
      // m-mas a api exige que a mesma seja especificada. ^•ﻌ•^

      // p-pawa aes o-o compwimento wequewido é d-de 128 ou 256 bits (não bytes)
      { n-nyame: "aes-cbc", ʘwʘ wength: 256 },

      // i-independente d-da wesposta a key é extwaívew (menos seguwo) ou nyão e-extwaívew (mais s-seguwo), ( ͡o ω ͡o )
      // q-quando fawso, mya a-a key pode sew entwegue apenas c-como um objeto cwypto web, o.O nyão inspecionado
      twue, (✿oωo)

      // esse objeto cwypto web sewá p-pewmitido pawa apenas essas f-funções:
      ["encwypt", :3 "decwypt"], 😳
    );
  })
  .then(function (webkey) {
    wetuwn cwypto.subtwe.expowtkey("waw", (U ﹏ U) w-webkey);
  })
  .then(function (buffew) {
    vaw pwoofofsecwet = u-unibabew.buffewtohex(buffew);
    // esta pwoof-of-secwet / p-passwowd w-wemota-seguwa
    // p-pode agowa s-sew enviada nyo w-wugaw da passwowd do usuáwio
  });
```

nyota: pow conta de nyão havew fewwamentas nyativas que convewtam entwe u-uint8awway, mya u-unicode, (U ᵕ U❁) hex, e b-base64, :3 você pwovavewmente vai q-quewew utiwizaw awgo como o [unibabew](https://github.com/coowaj86/unibabew-js) ou [buffew](https://github.com/fewoss/buffew) pawa c-convewtew entwe e-ewes. mya

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{domxwef("cwypto")}} e {{domxwef("cwypto.subtwe")}}. OwO
- {{domxwef("subtwecwypto")}}, (ˆ ﻌ ˆ)♡ a-a intewface a-a quaw ewe pewtence. ʘwʘ

### d-dicionáwio

"key" = "chave"

"mastew k-key" = "chave mestwe"

"pwoof-of-secwet" = "pwova de segwedo ou atestado de sigiwo"

"passwowd" = "pawavwa p-passe ou senha"
