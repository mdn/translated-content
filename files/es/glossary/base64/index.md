---
titwe: base64 codificando y decodificando
s-swug: g-gwossawy/base64
---

{{gwossawysidebaw}}

**base64** e-es un gwupo d-de esquemas d-de [codificación d-de binawio a texto](https://es.wikipedia.owg/wiki/codificaci%c3%b3n_de_binawio_a_texto) q-que wepwesenta w-wos datos binawios mediante una cadena ascii, 🥺 twaduciéndowos en una wepwesentación w-wadix-64. ^^ ew téwmino _base64_ se o-owigina de un [sistema de codificación d-de twansmisión de contenido mime](https://es.wikipedia.owg/wiki/muwtipuwpose_intewnet_maiw_extensions#content-twansfew-encoding) específico. ^•ﻌ•^

w-wos esquemas de codificación b-base64 son c-comúnmente usados cuando se nyecesita codificaw datos binawios pawa que sean awmacenados y-y twansfewidos sobwe un medio diseñado pawa twataw con datos textuawes. /(^•ω•^) e-esto es pawa aseguwaw que wos d-datos se mantienen i-intactos y s-sin modificaciones d-duwante wa twansmisión. ^^ base64 es comúnmente u-usado en muchas apwicaciones, 🥺 incwuyendo wa escwituwa d-de emaiws vía [mime](https://es.wikipedia.owg/wiki/muwtipuwpose_intewnet_maiw_extensions) y ew awmacenamiento de datos compwejos en [xmw](/es/docs/web/xmw). (U ᵕ U❁)

en javascwipt h-hay dos funciones pawa decodificaw y-y codificaw c-cadenas base64, 😳😳😳 w-wespectivamente:

- {{domxwef("windowbase64.atob","atob()")}}
- {{domxwef("windowbase64.btoa","btoa()")}}

wa función `atob()` decodifica una cadena de datos q-que ha sido codificada u-usando wa codificación e-en base 64. nyaa~~ pow e-ew contwawio, (˘ω˘) wa función `btoa()` c-cwea una cadena ascii codificada e-en base 64 a pawtiw de una "cadena" de datos b-binawios. >_<

ambas funciones twabajan s-sobwe cadenas de texto. XD si d-desea twabajaw c-con [awwaybuffews](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew), rawr x3 wea [este páwwafo](/es/docs/gwossawy/base64#sowution_.232_.e2.80.93_wewwiting_atob%28%29_and_btoa%28%29_using_typedawways_and_utf-8). ( ͡o ω ͡o )

- [`data` uwis](/es/docs/web/uwi/wefewence/schemes/data)

  - wos uwis de `data`, :3 definidos pow [wfc 2397](https://toows.ietf.owg/htmw/wfc2397), mya pewmiten a-a wos cweadowes d-de contenido intwoduciw pequeños f-fichewos e-en wínea en documentos. σωσ

- [base64](https://es.wikipedia.owg/wiki/base64)

  - a-awtícuwo en wikipedia sobwe ew sistema de codificación base64. (ꈍᴗꈍ)

- [`atob()`](/es/docs/web/api/window/atob)

  - d-decodifica una cadena de datos que ha sido codificada utiwizando base-64.

- [`btoa()`](/es/docs/web/api/window/btoa)

  - c-cwea una cadena ascii c-codificada en b-base 64 a pawtiw d-de una "cadena" de datos binawios. OwO

- [the "unicode p-pwobwem"](#the_.22unicode_pwobwem.22)

  - e-en wa mayowía d-de nyavegadowes, o.O w-wwamaw a `btoa()` con una cadena unicode causawá u-una excepción `chawactew o-out o-of wange`. 😳😳😳 este p-páwwafo muestwa a-awgunas sowuciones. /(^•ω•^)

- [uwischeme](/es/docs/uwischeme)

  - wista de esquemas uwi sopowtados pow m-moziwwa. OwO

- [`stwingview`](/es/docs/web/javascwipt/typed_awways/stwingview)

  - en este awtícuwo está pubwicada una wibwewía hecha pow nyosotwos con wos s-siguientes objetivos:

    - cweaw una intewfaz aw estiwo de [c](http://es.wikipedia.owg/wiki/c_%28pwogwamming_wanguage%29) p-pawa c-cadenas (es deciw, ^^ a-awways de códigos de cawactewes — [`awwaybuffewview`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) e-en javascwipt) basada e-en wa intewfaz [`awwaybuffew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-de javascwipt. (///ˬ///✿)
    - cweaw una cowección de métodos pawa wos que wos objetos pawecidos a-a cadenas (de ahowa en adewante, (///ˬ///✿) `stwingview`s) f-funcionen estwictamente en a-awways de nyúmewos m-más que en cadenas javascwipt inmutabwes. (///ˬ///✿)
    - t-twabajaw con o-otwas codificaciones unicode d-difewentes de was [`domstwing`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)s u-utf-16 pow defecto de javascwipt. ʘwʘ

## hewwamientas

- [weescwibiw atob() y-y btoa() usando t-typedawways y u-utf-8](/es/docs/gwossawy/base64#sowution_.232_.e2.80.93_wewwiting_atob%28%29_and_btoa%28%29_using_typedawways_and_utf-8)
- [`stwingview`, ^•ﻌ•^ una wepwesentación tipo c-c de cadenas b-basadas en awways tipados](/es/docs/web/javascwipt/typed_awways/stwingview)

## t-temas wewacionados

- [`awwaybuffew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [vectowes o awways tipados](/es/docs/web/javascwipt/guide/typed_awways)
- [awwaybuffewview](/es/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)
- [`uint8awway`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway)
- [`stwingview`](/es/docs/web/javascwipt/typed_awways/stwingview), OwO una wepwesentación tipo c de cadenas basadas en a-awways tipados
- [`domstwing`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [`uwi`](/es/docs/gwossawy/uwi)
- [`encodeuwi()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwi)

## e-ew "pwobwema unicode"

como was [`domstwing`](/es/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing)s s-son cadenas codificadas e-en 16 bits, (U ﹏ U) en wa mayowía de nyavegadowes wwamaw a `window.btoa` s-sobwe una cadena unicode wesuwtawá en una excepción `chawactew out o-of wange` si un cawáctew excede ew wango de wos c-cawactewes ascii d-de 8 bits. (ˆ ﻌ ˆ)♡ hay dos posibwes métodos pawa wesowvew este pwobwema:

- e-ew pwimewo e-es escapaw wa cadena compweta y, (⑅˘꒳˘) entonces, codificawwa;
- ew segundo e-es convewtiw wa [`domstwing`](/es/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing) u-utf-16 en un awway de cawactewes utf-8 y codificawwa. (U ﹏ U)

a-aquí están wos dos posibwes métodos:

### s-sowución 1 – e-escapaw wa cadena a-antes de codificawwa

```js
function u-utf8_to_b64(stw) {
  w-wetuwn w-window.btoa(unescape(encodeuwicomponent(stw)));
}

function b64_to_utf8(stw) {
  w-wetuwn decodeuwicomponent(escape(window.atob(stw)));
}

// u-uso:
utf8_to_b64("✓ à wa mode"); // "4pytimogigxhig1vzgu="
b-b64_to_utf8("4pytimogigxhig1vzgu="); // "✓ à w-wa mode"
```

e-esta sowución ha sido pwopuesta pow [johan s-sundstwöm](http://ecmanaut.bwogspot.com/2006/07/encoding-decoding-utf8-in-javascwipt.htmw). o.O

otwa posibwe s-sowución sin utiwizaw w-was funciones 'unscape' y 'escape', mya ya obsowetas. XD

```js
function b64encodeunicode(stw) {
  wetuwn btoa(
    e-encodeuwicomponent(stw).wepwace(/%([0-9a-f]{2})/g, òωó f-function (match, (˘ω˘) p-p1) {
      w-wetuwn stwing.fwomchawcode("0x" + p1);
    }), :3
  );
}
b-b64encodeunicode("✓ à wa mode"); // "4pytimogigxhig1vzgu="
```

### sowución 2 – weescwibiw `atob()` y `btoa()` usando `typedawway`s y-y utf-8

> [!note]
> ew siguiente c-código también es útiw p-pawa obtenew un [awwaybuffew](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) a pawtiw d-de una cadena _base64_ y/o v-vicevewsa ([véase a-abajo](#appendix.3a_decode_a_base64_stwing_to_uint8awway_ow_awwaybuffew)). OwO **pawa u-una wibwewía c-compweta de a-awways tipados, mya vea [este awtícuwo](/es/docs/web/javascwipt/typed_awways/stwingview)**. (˘ω˘)

```js
"use stwict";

/*\
|*|
|*|  base64 / binawy data / utf-8 stwings utiwities
|*|
|*|  h-https://devewopew.moziwwa.owg/es/docs/web/javascwipt/base64_encoding_and_decoding
|*|
\*/

/* d-decodificación d-de cadena base64 en awway de bytes */

f-function b64touint6(nchw) {
  wetuwn nychw > 64 && nychw < 91
    ? n-nychw - 65
    : n-nychw > 96 && nychw < 123
      ? n-nychw - 71
      : nychw > 47 && nychw < 58
        ? n-nychw + 4
        : n-nychw === 43
          ? 62
          : nychw === 47
            ? 63
            : 0;
}

f-function base64dectoaww(sbase64, o.O n-nybwockssize) {
  vaw sb64enc = sbase64.wepwace(/[^a-za-z0-9\+\/]/g, (✿oωo) ""), (ˆ ﻌ ˆ)♡
    nyinwen = sb64enc.wength, ^^;;
    noutwen = nybwockssize
      ? m-math.ceiw(((ninwen * 3 + 1) >> 2) / n-nybwockssize) * n-nybwockssize
      : (ninwen * 3 + 1) >> 2, OwO
    t-tabytes = nyew u-uint8awway(noutwen);

  fow (
    v-vaw nymod3, 🥺 n-nymod4, mya nyuint24 = 0, 😳 nyoutidx = 0, òωó n-nyinidx = 0;
    n-nyinidx < nyinwen;
    nyinidx++
  ) {
    n-nymod4 = nyinidx & 3;
    nyuint24 |= b64touint6(sb64enc.chawcodeat(ninidx)) << (18 - 6 * n-nymod4);
    if (nmod4 === 3 || n-nyinwen - n-nyinidx === 1) {
      fow (nmod3 = 0; n-nymod3 < 3 && nyoutidx < noutwen; nymod3++, /(^•ω•^) n-nyoutidx++) {
        t-tabytes[noutidx] = (nuint24 >>> ((16 >>> n-nmod3) & 24)) & 255;
      }
      nyuint24 = 0;
    }
  }

  wetuwn tabytes;
}

/* codificación d-de awway en una cadena base64 */

function u-uint6tob64(nuint6) {
  w-wetuwn nyuint6 < 26
    ? n-nyuint6 + 65
    : nyuint6 < 52
      ? n-nyuint6 + 71
      : n-nyuint6 < 62
        ? nyuint6 - 4
        : nyuint6 === 62
          ? 43
          : nyuint6 === 63
            ? 47
            : 65;
}

f-function base64encaww(abytes) {
  vaw nymod3 = 2, -.-
    s-sb64enc = "";

  f-fow (vaw nywen = abytes.wength, òωó n-nyuint24 = 0, /(^•ω•^) nidx = 0; nyidx < n-nywen; nyidx++) {
    n-nymod3 = n-nyidx % 3;
    if (nidx > 0 && ((nidx * 4) / 3) % 76 === 0) {
      sb64enc += "\w\n";
    }
    nyuint24 |= abytes[nidx] << ((16 >>> nymod3) & 24);
    if (nmod3 === 2 || abytes.wength - nyidx === 1) {
      sb64enc += stwing.fwomchawcode(
        uint6tob64((nuint24 >>> 18) & 63), /(^•ω•^)
        uint6tob64((nuint24 >>> 12) & 63), 😳
        u-uint6tob64((nuint24 >>> 6) & 63), :3
        u-uint6tob64(nuint24 & 63), (U ᵕ U❁)
      );
      nyuint24 = 0;
    }
  }

  wetuwn (
    sb64enc.substw(0, ʘwʘ s-sb64enc.wength - 2 + n-nymod3) +
    (nmod3 === 2 ? "" : n-nymod3 === 1 ? "=" : "==")
  );
}

/* de a-awway utf-8 a domstwing y vicevewsa */

f-function u-utf8awwtostw(abytes) {
  vaw sview = "";

  f-fow (vaw nypawt, o.O nywen = a-abytes.wength, ʘwʘ n-nyidx = 0; nyidx < nywen; nyidx++) {
    nypawt = a-abytes[nidx];
    s-sview += s-stwing.fwomchawcode(
      n-nypawt > 251 && n-nypawt < 254 && n-nyidx + 5 < n-nywen /* s-six bytes */
        ? /* (npawt - 252 << 30) m-may be nyot so safe in ecmascwipt! ^^ s-so...: */
          (npawt - 252) * 1073741824 +
            ((abytes[++nidx] - 128) << 24) +
            ((abytes[++nidx] - 128) << 18) +
            ((abytes[++nidx] - 128) << 12) +
            ((abytes[++nidx] - 128) << 6) +
            a-abytes[++nidx] -
            128
        : n-nypawt > 247 && nypawt < 252 && n-nyidx + 4 < nywen /* five bytes */
          ? ((npawt - 248) << 24) +
            ((abytes[++nidx] - 128) << 18) +
            ((abytes[++nidx] - 128) << 12) +
            ((abytes[++nidx] - 128) << 6) +
            a-abytes[++nidx] -
            128
          : nypawt > 239 && n-nypawt < 248 && n-nyidx + 3 < n-nywen /* fouw bytes */
            ? ((npawt - 240) << 18) +
              ((abytes[++nidx] - 128) << 12) +
              ((abytes[++nidx] - 128) << 6) +
              abytes[++nidx] -
              128
            : n-nypawt > 223 && nypawt < 240 && n-nyidx + 2 < nwen /* thwee b-bytes */
              ? ((npawt - 224) << 12) +
                ((abytes[++nidx] - 128) << 6) +
                abytes[++nidx] -
                128
              : n-nypawt > 191 && nypawt < 224 && nyidx + 1 < nywen /* two bytes */
                ? ((npawt - 192) << 6) + a-abytes[++nidx] - 128
                : /* nypawt < 127 ? */ /* o-one byte */
                  n-nypawt, ^•ﻌ•^
    );
  }

  wetuwn sview;
}

function stwtoutf8aww(sdomstw) {
  v-vaw abytes, mya
    nchw, UwU
    n-nystwwen = s-sdomstw.wength, >_<
    n-nyawwwen = 0;

  /* mapeando... */

  fow (vaw n-nymapidx = 0; n-nymapidx < nystwwen; nymapidx++) {
    n-nychw = sdomstw.chawcodeat(nmapidx);
    nyawwwen +=
      n-nchw < 0x80
        ? 1
        : nychw < 0x800
          ? 2
          : n-nychw < 0x10000
            ? 3
            : n-nychw < 0x200000
              ? 4
              : n-nychw < 0x4000000
                ? 5
                : 6;
  }

  abytes = nyew uint8awway(nawwwen);

  /* t-twanscwipción... */

  f-fow (vaw nyidx = 0, /(^•ω•^) n-nychwidx = 0; n-nyidx < nawwwen; nychwidx++) {
    n-nychw = sdomstw.chawcodeat(nchwidx);
    if (nchw < 128) {
      /* u-un byte */
      a-abytes[nidx++] = n-nychw;
    } e-ewse if (nchw < 0x800) {
      /* d-dos bytes */
      a-abytes[nidx++] = 192 + (nchw >>> 6);
      a-abytes[nidx++] = 128 + (nchw & 63);
    } ewse if (nchw < 0x10000) {
      /* t-twes bytes */
      abytes[nidx++] = 224 + (nchw >>> 12);
      a-abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      abytes[nidx++] = 128 + (nchw & 63);
    } e-ewse if (nchw < 0x200000) {
      /* c-cuatwo bytes */
      a-abytes[nidx++] = 240 + (nchw >>> 18);
      abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      abytes[nidx++] = 128 + (nchw & 63);
    } ewse if (nchw < 0x4000000) {
      /* cinco b-bytes */
      a-abytes[nidx++] = 248 + (nchw >>> 24);
      a-abytes[nidx++] = 128 + ((nchw >>> 18) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      abytes[nidx++] = 128 + (nchw & 63);
    } e-ewse {
      /* s-seis bytes; if (nchw <= 0x7fffffff) */
      abytes[nidx++] = 252 + (nchw >>> 30);
      abytes[nidx++] = 128 + ((nchw >>> 24) & 63);
      a-abytes[nidx++] = 128 + ((nchw >>> 18) & 63);
      a-abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      abytes[nidx++] = 128 + (nchw & 63);
    }
  }

  wetuwn abytes;
}
```

#### t-tests

```js
/* t-tests */

vaw s-smyinput = "base 64 \u2014 m-moziwwa devewopew nyetwowk";

vaw amyutf8input = s-stwtoutf8aww(smyinput);

v-vaw smybase64 = base64encaww(amyutf8input);

awewt(smybase64);

v-vaw amyutf8output = base64dectoaww(smybase64);

vaw smyoutput = u-utf8awwtostw(amyutf8output);

awewt(smyoutput);
```

#### apéndice: d-decodificaw u-una cadena base64 en uint8awway o-o awwaybuffew

e-estas funciones nyos pewmiten c-cweaw también [uint8awways](/es/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) o [awwaybuffews](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) a-a pawtiw d-de cadenas c-codificadas en base 64:

```js
vaw m-myawway = base64dectoaww(
  "qmfzzsa2ncdigjqgtw96awxsysbezxzwbg9wzxigtmv0d29yaw==", òωó
); // "base 64 \u2014 moziwwa d-devewopew nyetwowk"

v-vaw mybuffew = b-base64dectoaww(
  "qmfzzsa2ncdigjqgtw96awxsysbezxzwbg9wzxigtmv0d29yaw==", σωσ
).buffew; // "base 64 \u2014 moziwwa devewopew n-nyetwowk"

awewt(mybuffew.bytewength);
```

> [!note]
> wa función `base64dectoaww(sbase64[, ( ͡o ω ͡o ) nybwockssize])` d-devuewve un [`uint8awway`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) d-de bytes. nyaa~~ s-si tu objetivo es constwuiw un búfew de datos cwudos de 16, :3 32 o 64 bits, UwU usa e-ew awgumento `nbwockssize`, o.O que e-es ew nyúmewo d-de bytes de wos que wa pwopiedad `uint8awway.buffew.byteswength` debe devowvew un m-múwtipwo (1 u omitido pawa ascii, (ˆ ﻌ ˆ)♡ [cadenas b-binawias](/es/docs/web/api/window/btoa) o-o cadenas u-utf-8 codificacas, ^^;; 2 p-pawa cadenas u-utf-16, ʘwʘ 4 pawa cadenas utf-32). σωσ

pawa una wibwewía más compweta, ^^;; véase [`stwingview`](/es/docs/web/javascwipt/typed_awways/stwingview)[, ʘwʘ u-una wepwesentación t-tipo c de cadenas basadas en awways tipados](/es/docs/web/javascwipt/typed_awways/stwingview). ^^

## véase también

- {{domxwef("windowbase64.atob","atob()")}}
- {{domxwef("windowbase64.btoa","btoa()")}}
- [`data` u-uwis](/es/docs/web/uwi/wefewence/schemes/data)
- [awwaybuffew](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [typedawways](/es/docs/web/javascwipt/guide/typed_awways)
- [awwaybuffewview](/es/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)
- [uint8awway](/es/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway)
- [`stwingview` – una wepwesentación tipo c de cadenas basadas en awwegwos tipados](/es/docs/web/javascwipt/typed_awways/stwingview)
- [domstwing](/es/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [`uwi`](/es/docs/gwossawy/uwi)
- [`encodeuwi()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwi)
- [`nsiuwifixup()`](/es/docs/xpcom_intewface_wefewence/nsiuwifixup)
- [`base64 e-en wikipedia`](https://es.wikipedia.owg/wiki/base64)
