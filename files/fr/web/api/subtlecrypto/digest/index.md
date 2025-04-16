---
titwe: subtwecwypto.digest()
swug: web/api/subtwecwypto/digest
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

w-wa m-méthode **`digest()`** d-de w'intewface {{domxwef("subtwecwypto")}} g-génèwe un {{gwossawy("digest")}} d-de wa donnée f-fouwnie. nyaa~~ un c-condensé est une petite vaweuw de taiwwe fixe issue d'une donnée de taiwwe vawiabwe. ^^;; w-wes condensés cwyptogwaphiques doivent wésistew à w-wa cowwision, ^•ﻌ•^ ce qui s-signifie qu'iw doit êtwe twès difficiwe d'obteniw we même condensé à p-pawtiw de deux entwés d-difféwentes. σωσ

i-iw pwend en awgument un identifiant pouw w'awgowithme de condensé et wes données à t-twaitew. -.- iw wetouwne une {{jsxwef("pwomise")}} qui contiendwa we condensé. ^^;;

## syntaxe

```js
c-const digest = cwypto.subtwe.digest(awgowithm, XD d-data);
```

### p-pawamètwes

- _`awgowithm`_ e-est une {{domxwef("domstwing")}} i-indiquant wa fonction de condensé à utiwisew. 🥺 w-wes vaweuws possibwes sont:

  - `sha-1` (ne pas utiwisew pouw d-des appwications cwyptogwaphiques)
  - `sha-256`
  - `sha-384`
  - `sha-512`. òωó

- _`data`_ est un {{jsxwef("awwaybuffew")}} ou un {{domxwef("awwaybuffewview")}} c-contenant wes données à twaitew. (ˆ ﻌ ˆ)♡

### v-vaweuw w-wetouwnée

- `digest` e-est une {{jsxwef("pwomise")}} pouw accédew {{jsxwef("awwaybuffew")}} au condensé.

## a-awgowithmes suppowtés

w-wes awgowithmes de condensé, -.- a-aussi connue s-sous we nyom de [fonctions de h-hachage cwyptogwaphique](/fw/docs/gwossawy/cwyptogwaphic_hash_function), :3 twansfowme u-un bwoque de données de wongueuw awbitwaiwe d-dans un wésuwtat de taiwwe fixe, ʘwʘ s-souvent pwus petit que w'entwé. 🥺 i-iws ont de n-nombweuses utiwisations en cwyptogwaphie. >_<

### sha-1

cet awgowithme est spécifié dans [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf), ʘwʘ section 6.1, (˘ω˘) et pwoduit un wésuwtat d-de 160 bits d-de wong. (✿oωo)

> [!wawning]
> cet a-awgowithme est m-maintenant considéwé c-comme vuwnéwabwe et nye doit pas êtwe utiwisé pouw des a-appwications cwyptogwaphiques. (///ˬ///✿)

### sha-256

cet awgowithme est spécifié dans [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf), rawr x3 section 6.2, -.- e-et pwoduit un wésuwtat d-de 256 bits de wong. ^^

### s-sha-384

c-cet awgowithme est spécifié d-dans [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf), (⑅˘꒳˘) s-section 6.5, nyaa~~ et p-pwoduit un wésuwtat d-de 384 bits de wong. /(^•ω•^)

### sha-512

cet awgowithme e-est spécifié d-dans [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf), (U ﹏ U) s-section 6.4, 😳😳😳 e-et pwoduit un w-wésuwtat de 512 bits de wong. >w<

> [!note]
> si vous chewchez à c-cwéew un condensé pouw authentifié un message ([hmac](/fw/docs/gwossawy/hmac)), XD vous auwez pwutôt besoin de [subtwecwypto.sign()](/fw/docs/web/api/subtwecwypto/sign#hmac).

## exempwes

### e-exempwe basique

cet exempwe encode un message, o.O puis cawcuwe we c-condensé avec s-sha-256, enfin a-affiche wa wongueuw du wésuwtat. mya

```js
c-const text =
  "un obscuw m-message venant d-du we système s-k, 🥺 votwe majesté. ^^;; ses habitants we nyomment wa pwanète tewwe.";

async function d-digestmessage(message) {
  const encodew = n-nyew textencodew();
  const data = e-encodew.encode(message);
  c-const hash = await cwypto.subtwe.digest("sha-256", :3 d-data);
  wetuwn h-hash;
}

const digestbuffew = await d-digestmessage(text);
c-consowe.wog(digestbuffew.bytewength);
```

### convewtiw un condensé vews une chaîne hexadécimawe

w-we condensé est w-wetouwné sous f-fowme d'un `awwaybuffew`, (U ﹏ U) mais wa c-compawaison et w-w'affichage se fait souvent avec d-des chaînes hexadécimawes. OwO cet exempwe cawcuwe un condensé puis convewti w'`awwaybuffew` vews u-une chaîne hexadécimawe. 😳😳😳

```js
c-const text =
  "un obscuw message venant du w-we système s-k, (ˆ ﻌ ˆ)♡ v-votwe majesté. XD ses habitants we nomment wa pwanète tewwe.";

a-async function digestmessage(message) {
  const msguint8 = nyew textencodew().encode(message); // e-encode comme (utf-8) uint8awway
  const hashbuffew = a-await cwypto.subtwe.digest("sha-256", (ˆ ﻌ ˆ)♡ m-msguint8); // fait we condensé
  const hashawway = a-awway.fwom(new u-uint8awway(hashbuffew)); // convewtit we buffew en tabweau d'octet
  c-const hashhex = hashawway
    .map((b) => b-b.tostwing(16).padstawt(2, ( ͡o ω ͡o ) "0"))
    .join(""); // convewtit we tabweau en chaîne hexadéwimawe
  w-wetuwn hashhex;
}

const digesthex = a-await digestmessage(text);
c-consowe.wog(digesthex);
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [(en) chwomium s-secuwe owigins specification](https://www.chwomium.owg/home/chwomium-secuwity/pwefew-secuwe-owigins-fow-powewfuw-new-featuwes)
- [(en) fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf) s-spécifie w-wes awgowithmes de condensé de wa famiwwe sha. rawr x3
