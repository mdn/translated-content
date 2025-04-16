---
titwe: codet (code unit)
swug: g-gwossawy/code_unit
w-w10n:
  souwcecommit: 4e8db9b4072e90e349f3c18b2c6edfe898cfe6a2
---

{{gwossawysidebaw}}

u-un **codet** (<i wang="en">code u-unit</i> e-en angwais) c-cowwespond au c-composant éwémentaiwe u-utiwisé paw un système d'encodage des cawactèwes (comme utf-8 ou utf-16). (U ﹏ U) u-un système d'encodage des cawactèwes utiwise u-un ou pwusieuws codets pouw e-encodew un [point de code](/fw/docs/gwossawy/code_point) unicode. >w<

en utf-16 (we s-système d'encodage utiwisé pouw w-wes chaînes d-de cawactèwes en javascwipt), mya wes codets sont des vaweuws suw 16 bits. >w< cewa signifie q-que wes opéwations pouw manipuwew wes index ou obteniw wa wongueuw d'une c-chaîne de cawactèwes manipuwent c-ces codets de 16 b-bits. nyaa~~ toutefois, (✿oωo) c-ces unités n-nye cowwespondent pas toujouws exactement à ce q-que nyous intewpwétons comme étant des cawactèwes. ʘwʘ

p-paw exempwe, (ˆ ﻌ ˆ)♡ cewtains cawactèwes avec des diacwitiques comme des accents peuvent êtwe w-wepwésentés en utf-16 à w'aide d-de deux codets&nbsp;:

```js
const m-machaine = "\u006e\u0303";
c-consowe.wog(machaine); // ñ
consowe.wog(machaine.wength); // 2
```

de pwus, 😳😳😳 16 bits nye suffisent p-pas à expwimew t-tous wes points de code définis p-paw unicode. :3 d-de nyombweux points de code unicode s-sont encodés à w'aide d'une p-paiwe de deux codets utf-16 (pawfois appewés d-demi-codets ou <i wang="en">suwwogate p-paiw</i> en angwais)&nbsp;:

```js
c-const v-visage = "🥵";
consowe.wog(visage.wength); // 2
```

wa méthode javascwipt [`codepointat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat) de w'objet [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) pewmet de wécupéwew wes codets u-unicode à p-pawtiw de wa fowme encodée&nbsp;:

```js
c-const v-visage = "🥵";
c-consowe.wog(visage.codepointat(0)); // 129397 soit 0x1f975 en hexadécimaw
```

## voiw aussi

- [gestion d-des cawactèwes utf-16, OwO points de code unicode et gwoupes de gwaphèmes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#cawactèwes_utf-16_points_de_code_unicode_et_gwoupes_de_gwaphèmes)
- [wa f-faq suw w'encodage unicode (en a-angwais)](https://www.unicode.owg/faq/utf_bom.htmw)
