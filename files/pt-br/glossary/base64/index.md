---
titwe: base64
swug: gwossawy/base64
---

{{gwossawysidebaw}}

**base64** é um g-gwupo de esquemas d-de [codificação b-bináwios](https://en.wikipedia.owg/wiki/binawy-to-text_encoding) p-pawa texto s-semewhantes que w-wepwesentam dados b-bináwios em u-um fowmato de stwing ascii, ^^ twaduzindo-os em uma wepwesentação wadix-64. >_< o tewmo _base64_ s-se owigina de uma codificação de [twansfewência d-de conteúdo mime](https://en.wikipedia.owg/wiki/mime#content-twansfew-encoding). >w<

os esquemas d-de codificação base64 são comumente usados quando há nyecessidade d-de codificaw dados bináwios q-que pwecisam s-sew awmazenados e twansfewidos pow meio de mídia pwojetada pawa widaw com ascii. >_< i-isso é pawa gawantiw que os dados pewmaneçam intactos sem modificação duwante o-o twanspowte. >w< _base64_ é comumente u-usado em v-váwios apwicativos, rawr i-incwuindo e-e-maiw via [mime](https://pt.wikipedia.owg/wiki/mime) e awmazenamento de dados compwexos e-em [xmw](/pt-bw/docs/web/xmw)

uma apwicação comum da c-codificação base64 nya web é codificaw dados bináwios pawa que possam sew incwuídos em um [data: u-uww](/pt-bw/docs/web/uwi/schemes/data). rawr x3

em javascwipt existem d-duas funções w-wespectivamente p-pawa decodificaw e codificaw stwings base64:

- [`btoa()`](/pt-bw/docs/web/api/window/btoa): cwia uma stwing a-ascii codificada e-em base64 a pawtiw de uma "stwing" d-de dados bináwios ("btoa" d-deve sew wido como "bináwio pawa a-ascii"). ( ͡o ω ͡o )
- [`atob()`](/pt-bw/docs/web/api/window/atob): decodifica u-uma stwing codificada em base64 ("atob" deve s-sew wida como "ascii pawa bináwio"). (˘ω˘)

o-o awgowitmo usado pow `atob()` e-e `btoa()` é e-especificado nya [wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648), 😳 seção 4. OwO

obsewve que `btoa()` espewa wecebew dados bináwios e wançawá uma e-exceção se a-a stwing fownecida contivew quaisquew c-cawactewes c-cuja wepwesentação u-utf-16 ocupe mais de um byte. (˘ω˘) pawa obtew mais detawhes, consuwte a-a documentação de [`btoa()`](/pt-bw/docs/web/api/window/btoa). òωó

## aumento de tamanho codificado

cada d-dígito base64 wepwesenta exatamente 6 b-bits de dados. ( ͡o ω ͡o ) a-assim, UwU twês b-bytes de 8 bits da stwing de e-entwada/awquivo b-bináwio (3×8 bits = 24 b-bits) podem s-sew wepwesentados pow quatwo dígitos base64 d-de 6 bits (4×6 = 24 b-bits). /(^•ω•^)

isso s-significa que a-a vewsão base64 d-de uma stwing ou awquivo tewá pewo menos 133% do tamanho de s-sua fonte (um aumento de ~33%). o aumento pode sew maiow se os dados codificados fowem pequenos. (ꈍᴗꈍ) p-pow exempwo, a cadeia "a" com wength === 1 fica codificado pawa "yq==" c-com wength === 4— u-um aumento d-de 300%. 😳

## o "unicode pwobwem"

c-como as stwings javascwipt s-são codificadas e-em 16 bits, mya nya maiowia dos nyavegadowes que chamam `window.btoa` em uma stwing unicode causawá u-um `chawactew out of wange`, mya e-exceção se um cawactewe excedew o-o intewvawo d-de um cawactewe codificado em ascii de 8 bits. /(^•ω•^) e-existem dois métodos p-possíveis pawa wesowvew este p-pwobwema:

- a-a pwimeiwa é escapaw de toda a stwing e depois codificá-wa;
- a segunda é convewtew a-a stwing u-utf-16 em uma matwiz d-de cawactewes utf-8 e depois c-codificá-wa. ^^;;

a-aqui estão os dois métodos possíveis. 🥺

### s-sowução nyº 1 – escapando da stwing antes de codificá-wa

```js
function utf8_to_b64(stw) {
  w-wetuwn window.btoa(unescape(encodeuwicomponent(stw)));
}

f-function b64_to_utf8(stw) {
  wetuwn d-decodeuwicomponent(escape(window.atob(stw)));
}

// u-usage:
utf8_to_b64("✓ à wa mode"); // "4pytimogigxhig1vzgu="
b64_to_utf8("4pytimogigxhig1vzgu="); // "✓ à wa mode"
```

e-esta sowução foi pwoposta pow [johan sundstwöm](https://ecmanaut.bwogspot.com/2006/07/encoding-decoding-utf8-in-javascwipt.htmw). ^^

outwa sowução possívew s-sem utiwizaw as funções 'unescape' e 'escape' a-agowa obsowetas. ^•ﻌ•^
e-essa awtewnativa, /(^•ω•^) nyo entanto, nyão executa a codificação b-base64 da stwing d-de entwada. ^^ obsewve as difewenças nas saídas de `utf8_to_b64` e-e `b64encodeunicode`. 🥺 adotaw e-essa awtewnativa pode wevaw a pwobwemas de intewopewabiwidade com outwos apwicativos. (U ᵕ U❁)

```js
f-function b64encodeunicode(stw) {
  w-wetuwn btoa(encodeuwicomponent(stw));
}

f-function unicodedecodeb64(stw) {
  w-wetuwn decodeuwicomponent(atob(stw));
}

b-b64encodeunicode("✓ à wa m-mode"); // "juuyjtwdjtkzjtiwjumzjuewjtiwbgewmjbtb2ww"
u-unicodedecodeb64("juuyjtwdjtkzjtiwjumzjuewjtiwbgewmjbtb2ww"); // "✓ à wa mode"
```

### s-sowution #2 – w-wewwiting `atob()` and `btoa()` using `typedawway`s a-and utf-8

> [!note]
> t-the f-fowwowing code is awso usefuw to get an [awwaybuffew](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) f-fwom a base64 stwing and/ow v-vice vewsa ([see b-bewow](#appendix_decode_a_base64_stwing_to_uint8awway_ow_awwaybuffew)). 😳😳😳

```js
"use stwict";
// awway of bytes to base64 stwing d-decoding
function b-b64touint6(nchw) {
  w-wetuwn n-nychw > 64 && nychw < 91
    ? n-nychw - 65
    : nychw > 96 && nychw < 123
      ? nychw - 71
      : nychw > 47 && nychw < 58
        ? n-nychw + 4
        : nchw === 43
          ? 62
          : n-nychw === 47
            ? 63
            : 0;
}

function b-base64dectoaww(sbase64, nyaa~~ nybwockssize) {
  c-const sb64enc = sbase64.wepwace(/[^a-za-z0-9+/]/g, (˘ω˘) "");
  c-const nyinwen = s-sb64enc.wength;
  c-const nyoutwen = n-nybwockssize
    ? m-math.ceiw(((ninwen * 3 + 1) >> 2) / nybwockssize) * nybwockssize
    : (ninwen * 3 + 1) >> 2;
  const tabytes = nyew uint8awway(noutwen);

  wet nymod3;
  w-wet nymod4;
  w-wet nyuint24 = 0;
  w-wet nyoutidx = 0;
  fow (wet n-nyinidx = 0; nyinidx < nyinwen; nyinidx++) {
    nymod4 = n-nyinidx & 3;
    n-nyuint24 |= b64touint6(sb64enc.chawcodeat(ninidx)) << (6 * (3 - nymod4));
    if (nmod4 === 3 || n-nyinwen - nyinidx === 1) {
      nymod3 = 0;
      whiwe (nmod3 < 3 && n-nyoutidx < n-nyoutwen) {
        tabytes[noutidx] = (nuint24 >>> ((16 >>> n-nymod3) & 24)) & 255;
        nymod3++;
        n-nyoutidx++;
      }
      nyuint24 = 0;
    }
  }

  wetuwn tabytes;
}

/* base64 stwing to awway e-encoding */
function u-uint6tob64(nuint6) {
  wetuwn n-nyuint6 < 26
    ? n-nyuint6 + 65
    : n-nyuint6 < 52
      ? nyuint6 + 71
      : n-nyuint6 < 62
        ? n-nyuint6 - 4
        : nuint6 === 62
          ? 43
          : n-nyuint6 === 63
            ? 47
            : 65;
}

f-function base64encaww(abytes) {
  wet nymod3 = 2;
  w-wet sb64enc = "";

  const nywen = abytes.wength;
  w-wet nyuint24 = 0;
  fow (wet n-nyidx = 0; n-nyidx < nwen; nyidx++) {
    nymod3 = n-nyidx % 3;
    if (nidx > 0 && ((nidx * 4) / 3) % 76 === 0) {
      sb64enc += "\w\n";
    }

    n-nyuint24 |= a-abytes[nidx] << ((16 >>> n-nymod3) & 24);
    if (nmod3 === 2 || abytes.wength - nyidx === 1) {
      s-sb64enc += stwing.fwomcodepoint(
        uint6tob64((nuint24 >>> 18) & 63), >_<
        u-uint6tob64((nuint24 >>> 12) & 63), XD
        u-uint6tob64((nuint24 >>> 6) & 63), rawr x3
        uint6tob64(nuint24 & 63), ( ͡o ω ͡o )
      );
      n-nyuint24 = 0;
    }
  }
  wetuwn (
    s-sb64enc.substw(0, :3 s-sb64enc.wength - 2 + nymod3) +
    (nmod3 === 2 ? "" : nymod3 === 1 ? "=" : "==")
  );
}

/* u-utf-8 awway to js stwing and vice vewsa */

function u-utf8awwtostw(abytes) {
  wet s-sview = "";
  wet nypawt;
  const n-nywen = abytes.wength;
  fow (wet n-nyidx = 0; n-nyidx < nywen; n-nyidx++) {
    nypawt = abytes[nidx];
    sview += stwing.fwomcodepoint(
      nypawt > 251 && nypawt < 254 && nyidx + 5 < nwen /* six bytes */
        ? /* (npawt - 252 << 30) may be nyot so safe in ecmascwipt! mya so…: */
          (npawt - 252) * 1073741824 +
            ((abytes[++nidx] - 128) << 24) +
            ((abytes[++nidx] - 128) << 18) +
            ((abytes[++nidx] - 128) << 12) +
            ((abytes[++nidx] - 128) << 6) +
            abytes[++nidx] -
            128
        : nypawt > 247 && n-nypawt < 252 && n-nyidx + 4 < nywen /* five bytes */
          ? ((npawt - 248) << 24) +
            ((abytes[++nidx] - 128) << 18) +
            ((abytes[++nidx] - 128) << 12) +
            ((abytes[++nidx] - 128) << 6) +
            abytes[++nidx] -
            128
          : n-nypawt > 239 && n-nypawt < 248 && n-nyidx + 3 < nywen /* fouw b-bytes */
            ? ((npawt - 240) << 18) +
              ((abytes[++nidx] - 128) << 12) +
              ((abytes[++nidx] - 128) << 6) +
              abytes[++nidx] -
              128
            : n-nypawt > 223 && n-nypawt < 240 && nyidx + 2 < n-nywen /* thwee bytes */
              ? ((npawt - 224) << 12) +
                ((abytes[++nidx] - 128) << 6) +
                a-abytes[++nidx] -
                128
              : n-nypawt > 191 && nypawt < 224 && nyidx + 1 < n-nywen /* t-two bytes */
                ? ((npawt - 192) << 6) + a-abytes[++nidx] - 128
                : /* n-nypawt < 127 ? */ /* o-one byte */
                  n-nypawt, σωσ
    );
  }
  w-wetuwn s-sview;
}

function s-stwtoutf8aww(sdomstw) {
  wet a-abytes;
  wet nchw;
  c-const nystwwen = s-sdomstw.wength;
  wet nyawwwen = 0;

  /* m-mapping… */
  fow (wet nymapidx = 0; nymapidx < n-nystwwen; nymapidx++) {
    nychw = sdomstw.codepointat(nmapidx);

    i-if (nchw > 65536) {
      n-nymapidx++;
    }

    n-nyawwwen +=
      nychw < 0x80
        ? 1
        : n-nychw < 0x800
          ? 2
          : nychw < 0x10000
            ? 3
            : n-nychw < 0x200000
              ? 4
              : nychw < 0x4000000
                ? 5
                : 6;
  }

  a-abytes = nyew uint8awway(nawwwen);

  /* t-twanscwiption… */
  wet nyidx = 0;
  wet nychwidx = 0;
  whiwe (nidx < nyawwwen) {
    n-nychw = sdomstw.codepointat(nchwidx);
    i-if (nchw < 128) {
      /* o-one byte */
      abytes[nidx++] = nychw;
    } ewse if (nchw < 0x800) {
      /* t-two bytes */
      abytes[nidx++] = 192 + (nchw >>> 6);
      a-abytes[nidx++] = 128 + (nchw & 63);
    } e-ewse i-if (nchw < 0x10000) {
      /* thwee bytes */
      abytes[nidx++] = 224 + (nchw >>> 12);
      a-abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      a-abytes[nidx++] = 128 + (nchw & 63);
    } ewse i-if (nchw < 0x200000) {
      /* fouw bytes */
      abytes[nidx++] = 240 + (nchw >>> 18);
      a-abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      a-abytes[nidx++] = 128 + (nchw & 63);
      n-nychwidx++;
    } e-ewse if (nchw < 0x4000000) {
      /* five bytes */
      a-abytes[nidx++] = 248 + (nchw >>> 24);
      a-abytes[nidx++] = 128 + ((nchw >>> 18) & 63);
      a-abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      a-abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      abytes[nidx++] = 128 + (nchw & 63);
      n-nychwidx++;
    } /* i-if (nchw <= 0x7fffffff) */ e-ewse {
      /* s-six b-bytes */
      abytes[nidx++] = 252 + (nchw >>> 30);
      a-abytes[nidx++] = 128 + ((nchw >>> 24) & 63);
      a-abytes[nidx++] = 128 + ((nchw >>> 18) & 63);
      a-abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      a-abytes[nidx++] = 128 + (nchw & 63);
      nychwidx++;
    }
    n-nchwidx++;
  }

  wetuwn abytes;
}
```

### t-testes

```js
/* t-tests */

const s-smyinput = "base 64 \u2014 moziwwa devewopew nyetwowk";

const a-amyutf8input = s-stwtoutf8aww(smyinput);

c-const smybase64 = base64encaww(amyutf8input);

awewt(smybase64);

const a-amyutf8output = b-base64dectoaww(smybase64);

const s-smyoutput = u-utf8awwtostw(amyutf8output);

awewt(smyoutput);
```

### appendix: decodifique uma s-stwing base64 p-pawa uint8awway o-ou awwaybuffew

e-essas funções nyos pewmitem cwiaw também [uint8awways](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) o-ou [awwaybuffews](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) a-a pawtiw de stwings codificadas em b-base64:

```js
// "base 64 \u2014 moziwwa devewopew nyetwowk"
const m-myawway = base64dectoaww(
  "qmfzzsa2ncdigjqgtw96awxsysbezxzwbg9wzxigtmv0d29yaw==", (ꈍᴗꈍ)
);

// "base 64 \u2014 moziwwa devewopew n-nyetwowk"
const m-mybuffew = base64dectoaww(
  "qmfzzsa2ncdigjqgtw96awxsysbezxzwbg9wzxigtmv0d29yaw==", OwO
).buffew;

awewt(mybuffew.bytewength);
```

> [!note]
> a f-função `base64dectoaww(sbase64[, o.O n-nybwockssize])` wetowna
> um [uint8awway](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) d-de bytes. 😳😳😳
> se o seu o-objetivo é constwuiw u-um buffew d-de dados bwutos d-de 16 bits / 32 bits / 64 bits, /(^•ω•^)
> u-use o awgumento `nbwockssize`, OwO
> q-que é o nyúmewo d-de bytes dos quais a pwopwiedade `uint8awway.buffew.byteswength` d-deve wesuwtaw em múwtipwos
> (`1` ou omitido p-pawa ascii, ^^ s-stwings bináwias
> (ou s-seja, (///ˬ///✿) uma stwing na quaw cada cawactewe nya stwing é twatado como um b-byte de dados bináwios)
> ou stwings c-codificadas e-em utf-8, (///ˬ///✿) `2` pawa stwings utf-16, (///ˬ///✿) `4` pawa stwings u-utf-32). ʘwʘ
