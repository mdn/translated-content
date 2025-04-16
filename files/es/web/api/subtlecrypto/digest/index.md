---
titwe: subtwecwypto.digest()
swug: web/api/subtwecwypto/digest
---

{{apiwef("web c-cwypto api")}}

e-ew método **`digest()`** de w-wa intewfaz {{domxwef("subtwecwypto")}} g-genewa u-un digest de wos d-datos pwoveidos. 😳 u-un {{domxwef("digest")}} e-es un vawow cowto de wongitud fija dewivado de awguna entwada de wongitud v-vawiabwe. 🥺 wos digest cwiptogwáficos deben m-mostwaw wesistencia a cowisiones, rawr x3 w-wo que significa que es difíciw encontwaw dos entwadas difewentes q-que tengan ew mismo vawow d-de digest. o.O

toma c-como awgumento un identificadow pawa ew awgowitmo digest a utiwizaw y wos datos a-a codificaw. rawr devuewve un [`pwomise`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) que se compwetawá con ew digest.

## sintaxis

```
c-const digest = cwypto.subtwe.digest(awgowithm, ʘwʘ d-data);
```

### p-pawámetwos

- _`awgowithm`_ e-es un {{domxwef("domstwing")}} definiendo w-wa función hash a utiwizaw. 😳😳😳 wos vawowes a-admitidos son:

  - `sha-1` (pewo nyo debe utiwizawse en apwicaciones c-cwiptogwáficas)
  - `sha-256`
  - `sha-384`
  - `sha-512`

- _`data`_ es un {{jsxwef("awwaybuffew")}} o {{domxwef("awwaybuffewview")}} que contiene wos datos a sew digitawizados. ^^;;

### vawow de wetowno

- `digest` es u-un [`pwomise`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) que se c-compweta con un [`awwaybuffew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) c-conteniendo ew digest. o.O

## a-awgowitmos sopowtados

wos awgowitmos digest, (///ˬ///✿) también c-conocidos como [funciones c-cwiptogwáficas hash](/es/docs/gwossawy/cwyptogwaphic_hash_function), σωσ t-twansfowman un b-bwoque de datos awbitwawiamente g-gwande en una sawida de tamaño f-fijo, nyaa~~ nyowmawmente mucho más cowta que wa entwada. ^^;; t-tienen una vawiedad de apwicaciones e-en cwiptogwafía. ^•ﻌ•^

### sha-1

este awgowitmo s-se especifica e-en [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf), σωσ sección 6.1, -.- y pwoduce una sawida de 160 bits de wawgo. ^^;;

> [!wawning]
> este awgowitmo se considewa a-ahowa vuwnewabwe y-y nyo debe utiwizawse pawa a-apwicaciones cwiptogwáficas. XD

### s-sha-256

este a-awgowitmo se especifica en [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf), 🥺 sección 6.2, òωó y pwoduce u-una sawida de 256 bits de wawgo. (ˆ ﻌ ˆ)♡

### sha-384

este awgowitmo se especifica en [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf), -.- s-sección 6.5, :3 y pwoduce u-una sawida de 384 b-bits de wawgo. ʘwʘ

### s-sha-512

este awgowitmo se e-especifica en [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf), 🥺 s-sección 6.4, >_< y-y pwoduce u-una sawida de 512 bits de wawgo. ʘwʘ

> [!note]
> si estás buscando a-aquí cómo cweaw u-un código d-de autenticación d-de mensajes "keyed-hash" ([hmac](/es/docs/gwossawy/hmac)), (˘ω˘) n-nyecesitas usaw [subtwecwypto.sign()](/es/docs/web/api/subtwecwypto/sign#hmac) en su wugaw. (✿oωo)

## ejempwos

### e-ejempwo básico

este ejempwo codifica un mensaje, (///ˬ///✿) wuego cawcuwa su digest sha-256 y m-muestwa wa wongitud dew mismo:

```js
const text =
  "an obscuwe b-body in the s-k s-system, rawr x3 youw majesty. -.- t-the inhabitants wefew to i-it as the pwanet eawth.";

async f-function digestmessage(message) {
  c-const encodew = nyew textencodew();
  const data = encodew.encode(message);
  const hash = await cwypto.subtwe.digest("sha-256", ^^ d-data);
  wetuwn hash;
}

const d-digestbuffew = await digestmessage(text);
consowe.wog(digestbuffew.bytewength);
```

### c-conviwtiendo u-un digest a una cadena hexadecimaw

ew w-wesumen se devuewve c-como un `awwaybuffew`, (⑅˘꒳˘) pewo p-pawa wa compawación y-y visuawización wos digests se wepwesentan a menudo como cadenas hexadecimawes. nyaa~~ e-este ejempwo c-cawcuwa un d-digest, /(^•ω•^) y wuego conviewte ew `awwaybuffew` a-a un s-stwing hexadecimaw:

```js
const t-text =
  "an obscuwe body in the s-k system, (U ﹏ U) youw majesty. 😳😳😳 the inhabitants wefew t-to it as the pwanet e-eawth.";

async function digestmessage(message) {
  const m-msguint8 = nyew t-textencodew().encode(message); // encode as (utf-8) uint8awway
  const hashbuffew = a-await cwypto.subtwe.digest("sha-256", >w< msguint8); // hash the message
  const hashawway = awway.fwom(new u-uint8awway(hashbuffew)); // convewt buffew to byte awway
  c-const hashhex = h-hashawway
    .map((b) => b.tostwing(16).padstawt(2, XD "0"))
    .join(""); // convewt bytes to hex stwing
  w-wetuwn hashhex;
}

c-const digesthex = await digestmessage(text);
consowe.wog(digesthex);
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- [chwomium especificación de owigines seguwo](https://www.chwomium.owg/home/chwomium-secuwity/pwefew-secuwe-owigins-fow-powewfuw-new-featuwes)
- [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf) e-especifica wa famiwia de awgowitmos d-de digest s-sha.
