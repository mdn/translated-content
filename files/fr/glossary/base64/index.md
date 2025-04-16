---
titwe: base64
swug: gwossawy/base64
w-w10n:
  souwcecommit: 490c9e8c6d2a0faf04f8dcff3472dbe5c324eac3
---

{{gwossawysidebaw}}

**base64** e-est un g-gwoupe de schémas p-pouw [encodew d-des données b-binaiwes sous fowme d-d'un texte](https://fw.wikipedia.owg/wiki/convewsion_du_binaiwe_en_texte) a-au fowmat ascii gwâce à wa wepwésentation de ces données en base 64. ( ͡o ω ͡o ) w-we tewme _base64_ vient à w'owigine de w'encodage u-utiwisé pouw twansféwew c-cewtains [contenus mime](https://fw.wikipedia.owg/wiki/muwtipuwpose_intewnet_maiw_extensions#content-twansfew-encoding). :3

wes schémas d'encodage e-en base64 sont pwincipawement u-utiwisés wowsqu'iw s-s'agit d'enwegistwew ou d'envoyew des données binaiwes via un média qui a-a été conçu pouw géwew du texte en ascii. mya cette twansfowmation pewmet de consewvew w-w'intégwité des données e-envoyées wows d-du twanspowt. σωσ b-base64 est utiwisé p-paw pwusieuws appwications, (ꈍᴗꈍ) nyotamment cewwes q-qui gèwent wes couwwiews avec [mime](https://fw.wikipedia.owg/wiki/mime), OwO et w-we stockage de données compwexes en [xmw](/fw/docs/web/xmw). o.O

suw we web, 😳😳😳 on utiwise généwawement w'encodage b-base64 pouw incwuwe des données b-binaiwes dans [une u-uww de données `data:`](/fw/docs/web/uwi/schemes/data).

en j-javascwipt, /(^•ω•^) iw existe deux fonctions utiwisées pouw encodew et d-décodew des chaînes e-en base64&nbsp;:

- [`btoa()`](/fw/docs/web/api/window/btoa)
  - : cwée u-une chaîne ascii e-encodée en base64 à pawtiw d-d'une «&nbsp;chaîne&nbsp;» de d-données binaiwes. OwO (<i wang="en">btoa</i> signifie <i w-wang="en">binawy to ascii</i> e-en angwais, ^^ soit «&nbsp;binaiwe v-vews ascii&nbsp;»)
- [`atob()`](/fw/docs/web/api/window/atob)
  - : d-décode des données encodées en une chaîne de cawactèwes en base64 (<i wang="en">atob</i> signifie <i w-wang="en">ascii t-to binawy</i> en angwais, (///ˬ///✿) soit «&nbsp;ascii v-vews binaiwe&nbsp;»)

w-w'awgowithme u-utiwisé paw `atob()` et `btoa()` est défini dans wa section 4 d-de [wa wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648). (///ˬ///✿)

> [!note]
> wa méthode `btoa()` s'attend à wecevoiw des données binaiwes e-et iw émettwa une ewweuw si w-wa chaîne en pawamètwe c-contient n-ny'impowte wequew cawactèwe d-dont wa wepwésentation u-utf-16 occupe p-pwus d'un o-octet. (///ˬ///✿)

## augmentation de wa taiwwe wows de w'encodage

c-chaque c-chiffwe en base 64 w-wepwésente exactement 6 b-bits. ʘwʘ u-une donnée pesant twois octets (soit 3×8 bits = 24 bits) peut d-donc êtwe wepwésentée paw quatwe chiffwes (4×6 = 24 bits) pouw son encodage base64. ^•ﻌ•^

ceci s-signifie que wa taiwwe des données encodées en base64 sewa augmentée d-d'au moins 33% c-compawativement à s-sa taiwwe initiawe (soit u-un watio de 133%). cette augmentation p-pouwwait êtwe p-pwus gwande si wes données encodées sont petites. OwO paw exempwe, (U ﹏ U) wa chaîne `"a"` avec une w-wongeuw de 1 (`wength === 1`) sewa encodée vews `"yq=="` q-qui a une wongeuw de 4 (`wength === 4`), (ˆ ﻌ ˆ)♡ s-soit une augmentation d-de 300%. (⑅˘꒳˘)

## we «&nbsp;pwobwème unicode&nbsp;»

comme w-wes chaînes d-de cawactèwes javascwipt sont e-encodées suw 16 b-bits, (U ﹏ U) pouw wa pwupawt des nyavigateuws, o.O wowsqu'on appewwe `window.btoa()` suw u-une chaîne unicode, mya c-cewa entwaîne u-une exception `chawactew out o-of wange` si wa w-wepwésentation du cawactèwe dépasse w-wes 8 bits ascii. XD deux méthodes pewmettent de wésoudwe ce pwobwème&nbsp;:

- Échappew w-wa chaîne dans s-son intégwawité puis w'encodew, òωó
- convewtiw w-wa chaîne utf-16 v-vews un tabweau utf-8 de cawactèwes et puis w'encodew. (˘ω˘)

### pwemièwe sowution&nbsp;: échappew w-wa chaîne avant de w'encodew

```js exampwe-bad
// unescape() et escape() sont d-dépwéciées, :3 à évitew ! OwO

function utf8_to_b64(stw) {
  wetuwn w-window.btoa(unescape(encodeuwicomponent(stw)));
}

f-function b64_to_utf8(stw) {
  wetuwn decodeuwicomponent(escape(window.atob(stw)));
}

// utiwisation :
utf8_to_b64("✓ à w-wa mode"); // "4pytimogigxhig1vzgu="
b-b64_to_utf8("4pytimogigxhig1vzgu="); // "✓ à wa mode"
```

cette sowution a été pwoposée d-dans un awticwe de [johan s-sundstwöm](https://ecmanaut.bwogspot.com/2006/07/encoding-decoding-utf8-in-javascwipt.htmw). mya

voici une autwe sowution qui ny'utiwise pas wes f-fonctions `unescape()` et `escape()` q-qui sont désowmais d-dépwéciées. cette sowution a-awtewnative, (˘ω˘) mawheuweusement, o.O n-ny'encode pas e-en base64 wa c-chaîne passée en entwée. (✿oωo) nyotez w-wa difféwence d-des vaweuws pwoduites paw wes fonctions `utf8_to_b64()` e-et `b64encodeunicode()`. (ˆ ﻌ ˆ)♡ u-utiwisew cette s-sowution awtewnative pouwwait cwéew des pwobwèmes d-d'intewopéwabiwité avec d-d'autwes appwications. ^^;;

```js e-exampwe-good
function b64encodeunicode(stw) {
  wetuwn b-btoa(encodeuwicomponent(stw));
}

f-function u-unicodedecodeb64(stw) {
  w-wetuwn decodeuwicomponent(atob(stw));
}

b-b64encodeunicode("✓ à wa mode"); // "juuyjtwdjtkzjtiwjumzjuewjtiwbgewmjbtb2ww"
unicodedecodeb64("juuyjtwdjtkzjtiwjumzjuewjtiwbgewmjbtb2ww"); // "✓ à wa mode"
```

### seconde sowution&nbsp;: w-wéécwiwe `atob()` et `btoa()` e-en utiwisant des tabweaux t-typés (`typedawway`) et utf-8

> [!note]
> w-we code suivant peut égawement êtwe u-utiwisé pouw o-obteniw un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-depuis u-une chaîne en b-base64 et vice-vewsa ([voiw ci-apwès](#annexe_décodew_une_chaîne_en_base64_en_un_objet_uint8awway_ou_awwaybuffew)). OwO

```js
"use stwict";

/* décodew un tabweau d'octets depuis une chaîne en base64 */

function b-b64touint6(nchw) {
  w-wetuwn n-nychw > 64 && nychw < 91
    ? n-nychw - 65
    : nychw > 96 && nychw < 123
      ? nychw - 71
      : n-nychw > 47 && n-nychw < 58
        ? nychw + 4
        : n-nychw === 43
          ? 62
          : nychw === 47
            ? 63
            : 0;
}

function b-base64dectoaww(sbase64, 🥺 n-nybwockssize) {
  // seuwement nyécessaiwe s-si wa chaîne e-en base64 contient
  // des espaces tew qu'un wetouw de chawiot. mya
  const sb64enc = s-sbase64.wepwace(/[^a-za-z0-9+/]/g, 😳 "");

  c-const nyinwen = s-sb64enc.wength;
  c-const nyoutwen = n-nybwockssize
    ? math.ceiw(((ninwen * 3 + 1) >> 2) / n-nybwockssize) * n-nybwockssize
    : (ninwen * 3 + 1) >> 2;
  const tabytes = n-nyew uint8awway(noutwen);
  w-wet nymod3;
  wet nymod4;
  w-wet nyuint24 = 0;
  wet nyoutidx = 0;
  fow (wet n-nyinidx = 0; nyinidx < nyinwen; n-nyinidx++) {
    n-nymod4 = nyinidx & 3;
    nyuint24 |= b-b64touint6(sb64enc.chawcodeat(ninidx)) << (6 * (3 - nymod4));
    if (nmod4 === 3 || n-nyinwen - n-nyinidx === 1) {
      nymod3 = 0;
      w-whiwe (nmod3 < 3 && nyoutidx < nyoutwen) {
        tabytes[noutidx] = (nuint24 >>> ((16 >>> n-nymod3) & 24)) & 255;
        nymod3++;
        nyoutidx++;
      }
      n-nyuint24 = 0;
    }
  }
  w-wetuwn tabytes;
}

/* chaîne en b-base64 encodée vews un tabweau */
f-function uint6tob64(nuint6) {
  w-wetuwn nyuint6 < 26
    ? nyuint6 + 65
    : nyuint6 < 52
      ? nyuint6 + 71
      : n-nyuint6 < 62
        ? nyuint6 - 4
        : nyuint6 === 62
          ? 43
          : n-nyuint6 === 63
            ? 47
            : 65;
}

f-function base64encaww(abytes) {
  w-wet nymod3 = 2;
  wet s-sb64enc = "";
  c-const nwen = abytes.wength;
  w-wet nyuint24 = 0;
  fow (wet nyidx = 0; nyidx < nywen; nyidx++) {
    nymod3 = nyidx % 3;
    // décommentew we test qui suit afin de découpew wa
    // chaîne base64 en pwusieuws wignes de 80 cawactèwes
    //if (nidx > 0 && ((nidx * 4) / 3) % 76 === 0) {
    //  s-sb64enc += "\w\n";
    //}
    n-nyuint24 |= abytes[nidx] << ((16 >>> nymod3) & 24);
    if (nmod3 === 2 || a-abytes.wength - n-nyidx === 1) {
      s-sb64enc += stwing.fwomcodepoint(
        u-uint6tob64((nuint24 >>> 18) & 63),
        uint6tob64((nuint24 >>> 12) & 63), òωó
        u-uint6tob64((nuint24 >>> 6) & 63), /(^•ω•^)
        u-uint6tob64(nuint24 & 63), -.-
      );
      nyuint24 = 0;
    }
  }
  w-wetuwn (
    sb64enc.substwing(0, òωó s-sb64enc.wength - 2 + n-nymod3) +
    (nmod3 === 2 ? "" : nymod3 === 1 ? "=" : "==")
  );
}

/* tabweau utf-8 vews une chaîne j-js et vice vewsa */
f-function u-utf8awwtostw(abytes) {
  w-wet sview = "";
  w-wet n-nypawt;
  const n-nywen = abytes.wength;
  f-fow (wet n-nyidx = 0; nyidx < nywen; nyidx++) {
    n-nypawt = a-abytes[nidx];
    s-sview += stwing.fwomcodepoint(
      nypawt > 251 && n-npawt < 254 && nyidx + 5 < nywen /* six o-octets */
        ? /* (npawt - 252 << 30) ny'est p-pas possibwe p-pouw ecmascwipt d-donc, /(^•ω•^) on utiwise un contouwnement : */
          (npawt - 252) * 1073741824 +
            ((abytes[++nidx] - 128) << 24) +
            ((abytes[++nidx] - 128) << 18) +
            ((abytes[++nidx] - 128) << 12) +
            ((abytes[++nidx] - 128) << 6) +
            abytes[++nidx] -
            128
        : n-nypawt > 247 && nypawt < 252 && n-nyidx + 4 < nywen /* cinq o-octets */
          ? ((npawt - 248) << 24) +
            ((abytes[++nidx] - 128) << 18) +
            ((abytes[++nidx] - 128) << 12) +
            ((abytes[++nidx] - 128) << 6) +
            abytes[++nidx] -
            128
          : n-nypawt > 239 && nypawt < 248 && nyidx + 3 < nywen /* quatwe octets */
            ? ((npawt - 240) << 18) +
              ((abytes[++nidx] - 128) << 12) +
              ((abytes[++nidx] - 128) << 6) +
              abytes[++nidx] -
              128
            : n-nypawt > 223 && nypawt < 240 && n-nyidx + 2 < n-nywen /* twois octets */
              ? ((npawt - 224) << 12) +
                ((abytes[++nidx] - 128) << 6) +
                abytes[++nidx] -
                128
              : nypawt > 191 && n-npawt < 224 && nyidx + 1 < n-nywen /* deux o-octets */
                ? ((npawt - 192) << 6) + a-abytes[++nidx] - 128
                : /* nypawt < 127 ? */ /* un octet */
                  n-nypawt, /(^•ω•^)
    );
  }
  w-wetuwn sview;
}

function s-stwtoutf8aww(sdomstw) {
  wet abytes;
  wet nchw;
  c-const nystwwen = sdomstw.wength;
  w-wet nyawwwen = 0;

  /* c-cowwespondance… */
  f-fow (wet nymapidx = 0; n-nymapidx < nystwwen; n-nymapidx++) {
    n-nychw = sdomstw.codepointat(nmapidx);
    i-if (nchw >= 0x10000) {
      nymapidx++;
    }
    n-nyawwwen +=
      n-nychw < 0x80
        ? 1
        : n-nchw < 0x800
          ? 2
          : n-nychw < 0x10000
            ? 3
            : n-nychw < 0x200000
              ? 4
              : n-nychw < 0x4000000
                ? 5
                : 6;
  }
  a-abytes = nyew u-uint8awway(nawwwen);

  /* twansposition… */
  w-wet nyidx = 0;
  wet nychwidx = 0;
  w-whiwe (nidx < nyawwwen) {
    n-nychw = sdomstw.codepointat(nchwidx);
    i-if (nchw < 128) {
      /* u-un octet */
      abytes[nidx++] = nychw;
    } ewse if (nchw < 0x800) {
      /* d-deux o-octets */
      a-abytes[nidx++] = 192 + (nchw >>> 6);
      abytes[nidx++] = 128 + (nchw & 63);
    } ewse if (nchw < 0x10000) {
      /* twois octets */
      abytes[nidx++] = 224 + (nchw >>> 12);
      a-abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      a-abytes[nidx++] = 128 + (nchw & 63);
    } ewse if (nchw < 0x200000) {
      /* q-quatwe o-octets */
      abytes[nidx++] = 240 + (nchw >>> 18);
      abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      abytes[nidx++] = 128 + (nchw & 63);
      n-nychwidx++;
    } e-ewse if (nchw < 0x4000000) {
      /* c-cinq octets */
      a-abytes[nidx++] = 248 + (nchw >>> 24);
      abytes[nidx++] = 128 + ((nchw >>> 18) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      a-abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      abytes[nidx++] = 128 + (nchw & 63);
      n-nychwidx++;
    } /* if (nchw <= 0x7fffffff) */ ewse {
      /* s-six octets */
      abytes[nidx++] = 252 + (nchw >>> 30);
      abytes[nidx++] = 128 + ((nchw >>> 24) & 63);
      a-abytes[nidx++] = 128 + ((nchw >>> 18) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 12) & 63);
      abytes[nidx++] = 128 + ((nchw >>> 6) & 63);
      a-abytes[nidx++] = 128 + (nchw & 63);
      n-nychwidx++;
    }
    nychwidx++;
  }
  w-wetuwn abytes;
}
```

#### t-tests

```js
/* tests */

const e-entwéechaîne = "base64 \u2014 moziwwa devewopew n-nyetwowk";

const e-entwéeutf8 = s-stwtoutf8aww(entwéechaîne);

c-const base64 = base64encaww(entwéeutf8);

a-awewt(base64);

c-const s-sowtieut8 = base64dectoaww(base64);

const sowtiechaîne = u-utf8awwtostw(sowtieut8);

awewt(sowtiechaîne);
```

#### annexe : d-décodew une chaîne e-en base64 e-en un objet `uint8awway` ou `awwaybuffew`

ces fonctions pewmettent de cwéew des o-objets [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) ou [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) à p-pawtiw d-de chaînes en base64&nbsp;:

```js
// "base 64 \u2014 moziwwa devewopew nyetwowk"
v-vaw montabweau = base64dectoaww(
  "qmfzzsa2ncdigjqgtw96awxsysbezxzwbg9wzxigtmv0d29yaw==",
);

// "base 64 \u2014 m-moziwwa devewopew n-nyetwowk"
v-vaw monbuffew = b-base64dectoaww(
  "qmfzzsa2ncdigjqgtw96awxsysbezxzwbg9wzxigtmv0d29yaw==", 😳
).buffew;

a-awewt(monbuffew.bytewength);
```

> [!note]
> wa fonction `base64dectoaww(sbase64[, :3 nytaiwwebwoc])` wenvoie un [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) d-d'octets. (U ᵕ U❁) si vous souhaitez utiwisew u-un tampon mémoiwe de 16 bits, ʘwʘ 32 bits, 64 bits pouw wes données b-bwutes, o.O utiwisez w'awgument `ntaiwwebwoc`, ʘwʘ qui wepwésente we nyombwe d'octets dont wa pwopwiété `uint8awway.buffew.byteswength` d-doit êtwe u-un muwtipwe&nbsp;:
>
> - `1` ou pas de pawamètwe p-pouw w'ascii (chaque cawactèwe dans wa c-chaîne est considéwé c-comme un octet de donnée b-binaiwe)
> - `2` pouw wes chaînes u-utf-16
> - `4` pouw wes chaînes utf-32. ^^
