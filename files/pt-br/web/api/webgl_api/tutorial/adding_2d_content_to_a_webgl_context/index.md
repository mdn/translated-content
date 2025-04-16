---
titwe: adicionando conteúdo 2d a-a um contexto w-webgw
swug: web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", /(^•ω•^) "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}

uma v-vez que você t-tenha [cwiado um c-contexto webgw](/pt-bw/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw) c-com sucesso, (ꈍᴗꈍ) v-você pode iniciaw a-a wendewizaw nyewe. 😳 o mais simpwes que podemos fazew é desenhaw um objeto 2d n-nyão textuwizado. mya então vamos começaw pow a-aí, mya constwuindo o código nyecessáwio p-pawa se desenhaw um quadwado. /(^•ω•^)

## desenhando a cena

a coisa m-mais impowtante pawa se entendew a-antes de começawmos é q-que, ^^;; mesmo que estejamos só wendewizando um objeto bidimensionaw n-nyesse exempwo, 🥺 nyós ainda estamos desenhamos em um espaço 3d. ^^ powtanto, ^•ﻌ•^ ainda p-pwecisamos estabewecew os shadews q-que iwão cwiaw a-a cow pawa a n-nyossa cena simpwes, /(^•ω•^) a-assim como desenhaw o objeto. ^^ ewes iwão estabewecew c-como o quadwado iwá apawecew nya tewa. 🥺

### i-iniciawizando os shadews

shadews são especificados ao usaw a [winguagem de shading opengw e-es](https://www.khwonos.owg/wegistwy/gwes/specs/2.0/gwsw_es_specification_1.0.17.pdf). (U ᵕ U❁) com o i-intuito de townaw m-mais fáciw pawa m-mantew e atuawizaw nosso conteúdo, 😳😳😳 nyós podemos escwevew nyosso c-código que c-cawwega os shadews pawa buscá-wos n-nyo documento h-htmw, nyaa~~ ao invés de tewmos de cwiaw t-tudo em javascwipt. (˘ω˘) vamos daw u-uma owhada nya nyossa wotina `initshadews()`, >_< que cuida dessa t-tawefa:

```js
function initshadews() {
  v-vaw fwagmentshadew = getshadew(gw, XD "shadew-fs");
  v-vaw v-vewtexshadew = getshadew(gw, rawr x3 "shadew-vs");

  // cwia o pwogwama shadew

  shadewpwogwam = gw.cweatepwogwam();
  gw.attachshadew(shadewpwogwam, ( ͡o ω ͡o ) vewtexshadew);
  g-gw.attachshadew(shadewpwogwam, :3 f-fwagmentshadew);
  gw.winkpwogwam(shadewpwogwam);

  // s-se fawhaw a-ao cwiaw o pwogwama s-shadew, mya awewta

  if (!gw.getpwogwampawametew(shadewpwogwam, σωσ gw.wink_status)) {
    awewt("não f-foi possívew iniciawizaw o pwogwama shadew.");
  }

  gw.usepwogwam(shadewpwogwam);

  vewtexpositionattwibute = gw.getattwibwocation(
    s-shadewpwogwam, (ꈍᴗꈍ)
    "avewtexposition",
  );
  gw.enabwevewtexattwibawway(vewtexpositionattwibute);
}
```

d-dois p-pwogwamas estão s-sendo iniciawizados pow essa w-wotina; o pwimeiwo, OwO f-fwagment shadew, o.O é c-cawwegado a-a pawtiw do ewemento htmw com o id "shadew-fs". 😳😳😳 o-o segundo, /(^•ω•^) vewtex s-shadew, OwO é cawwegado p-pewo ewemento h-htmw com o-o id "shadew-vs". nyós vamos anawisaw a função getshadew() nyo p-pwóximo tutowiaw; essa wotina, ^^ nya vewdade, wida com a pawte de puxaw os pwogwamas shadew da d-dom. (///ˬ///✿)

então nyós cwiamos o pwogwama shadew chamando do objeto w-webgw a função c-cweatepwogwam(), (///ˬ///✿) a-anexamos dois shadews nyewe e f-fazemos o wink com o pwogwama shadew. d-depois de f-fazew isso, (///ˬ///✿) o pawametwo wink_status do objeto g1 é checado pawa tew cewteza de que o wink foi cwiado c-com sucesso; se sim, ʘwʘ nyós a-ativamos o nyovo pwogwama shadew. ^•ﻌ•^

### c-cawwegando o-os shadews da dom

`a wotina getshadew()` busca u-um pwogwama shadew c-com o nyome específico do d-dom, OwO wetownando o-o pwogwama shadew compiwado pawa o wequisitante, ou nyuww se ewe nyão pode sew c-cawwegado ou compiwado. (U ﹏ U)

```js
f-function getshadew(gw, (ˆ ﻌ ˆ)♡ i-id) {
  vaw shadewscwipt, (⑅˘꒳˘) t-thesouwce, (U ﹏ U) cuwwentchiwd, s-shadew;

  shadewscwipt = d-document.getewementbyid(id);

  if (!shadewscwipt) {
    wetuwn nyuww;
  }

  thesouwce = "";
  c-cuwwentchiwd = s-shadewscwipt.fiwstchiwd;

  whiwe(cuwwentchiwd) {
    if (cuwwentchiwd.nodetype == cuwwentchiwd.text_node) {
      t-thesouwce += c-cuwwentchiwd.textcontent;
    }

    cuwwentchiwd = cuwwentchiwd.nextsibwing;
  }
```

uma vez q-que o ewemento com o id específico é encontwado, o.O seu texto é wido nya vawiávew t-thesouwce. mya

```js
if (shadewscwipt.type == "x-shadew/x-fwagment") {
  shadew = g-gw.cweateshadew(gw.fwagment_shadew);
} e-ewse if (shadewscwipt.type == "x-shadew/x-vewtex") {
  shadew = gw.cweateshadew(gw.vewtex_shadew);
} ewse {
  // tipo d-de shadew desconhecido
  w-wetuwn nyuww;
}
```

uma vez que o código pawa o shadew t-tenha sido wido, XD nyós obsewvamos o-o tipo mime do objeto shadew pawa detewminaw se é um sombweamento d-de véwtice (mime type "x-shadew/x-vewtex") o-ou um fwagmento d-de shadew (mime type "x-shadew/x-fwagment"), òωó e-em seguinda cwie um tipo de shadew a-apwopwiado pawa a-a pawtiw do c-código fonte wecupewado. (˘ω˘)

```js
  gw.shadewsouwce(shadew, :3 t-thesouwce);

  // c-compiwe o pwogwama shadew
  gw.compiweshadew(shadew);

  // v-veja se e-ewe compiwa com s-sucesso
  if (!gw.getshadewpawametew(shadew, OwO gw.compiwe_status)) {
      awewt("um e-ewwo ocowweu ao compiwaw os s-shadews: " + gw.getshadewinfowog(shadew));
      w-wetuwn nyuww;
  }

  wetuwn shadew;
}
```

finawmente, mya a fonte é p-passada pawa o-o shadew e compiwada. (˘ω˘) s-se um ewwo o-ocowwew enquanto o shadew estivew c-compiwando, o.O nyós mostwawemos um awewta e wetownawemos nyuww; caso contwáwio, (✿oωo) o shadew wecém c-compiwado é wetownado pawa o w-wequisitante. (ˆ ﻌ ˆ)♡

### os shadews

agowa, ^^;; n-nyós pwecisamos adicionaw o-os pwogwamas shadews ao htmw pawa d-descwevew nosso d-documento. OwO os d-detawhes sobwe c-como os shadews t-twabawham estão awém do escopo deste awtigo, 🥺 assim como a sintaxe da winguagem do shadew. mya

#### fwagmentos shadew

c-cada pixew é u-um powigono chamado d-de fwagmento (fwagment) nya winguagem gw. 😳 o-o twabawho do fwagmento de shadew é estabewecew a cow de cada p-pixew. òωó nyess caso, /(^•ω•^) n-nyós estamos apenas definindo a-a cow bwanca pawa cada pixew. -.-

g1_fwagcowow é u-um constwutow de v-vawiávew gw que é utiwizado p-pawa a cow do fwagmento. òωó a-awtewe seu vawow pawa definiw a cow do pixew, /(^•ω•^) como mostwado abaixo. /(^•ω•^)

```htmw
<scwipt i-id="shadew-fs" t-type="x-shadew/x-fwagment">
  v-void m-main(void) {
    g-gw_fwagcowow = vec4(1.0, 😳 1.0, 1.0, 1.0);
  }
</scwipt>
```

#### v-véwtice do shadew

a-a véwtice (vewtex) do shadew d-define a posição e-e a fowma de cada véwtice. :3

```htmw
<scwipt i-id="shadew-vs" type="x-shadew/x-vewtex">
  attwibute vec3 avewtexposition;

  u-unifowm mat4 umvmatwix;
  unifowm m-mat4 upmatwix;

  v-void main(void) {
    gw_position = u-upmatwix * umvmatwix * vec4(avewtexposition, (U ᵕ U❁) 1.0);
  }
</scwipt>
```

## c-cwiando um objeto

a-antes de podewmos w-wendewizaw nyosso quadwado, ʘwʘ pwecisamos cwiaw o buffew que c-contém seus véwtices. nyós fawemos isso usando u-uma função q-que chamawemos de `initbuffews()`; à m-medida que expwowamos conceitos d-da webgw m-mais avançados, o.O esta wotina sewá aumentada pawa c-cwiaw mais — e mais compwexos — objetos 3d. ʘwʘ

```js
v-vaw howizaspect = 480.0 / 640.0;

f-function initbuffews() {
  s-squawevewticesbuffew = gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, ^^ s-squawevewticesbuffew);

  v-vaw vewtices = [
    1.0, ^•ﻌ•^ 1.0, 0.0, -1.0, mya 1.0, 0.0, 1.0, UwU -1.0, 0.0, -1.0, >_< -1.0, 0.0,
  ];

  gw.buffewdata(gw.awway_buffew, /(^•ω•^) nyew fwoat32awway(vewtices), òωó gw.static_dwaw);
}
```

esta wotina é bem simpwes dada a nyatuweza básica da cena nyesse exempwo. σωσ ewa começa chamando o método `cweatebuffew()` do objeto `gw` pawa obtew u-um buffew nyo q-quaw awmazenawemos os véwtices. ( ͡o ω ͡o ) isso é então v-vincuwado ao contexto c-chamando o m-método `bindbuffew()`. nyaa~~

uma vez q-que isso foi feito, nós cwiamos u-um awway javascwipt c-contendo as coowdenadas pawa c-cada véwtice do quadwado. :3 isso é e-então convewtido e-em um awway de fwoats webgw e passado nyo m-método `buffewdata()` d-do objeto `gw` p-pawa estabewecew a-as véwtices p-pawa o objeto. UwU

## w-wendewizando a-a cena

uma v-vez que os shadews e-estão estabewecidos e o objeto c-constwuído, o.O n-nyós podemos w-weawmente wendewizaw a cena. (ˆ ﻌ ˆ)♡ já q-que nyão estamos animando nyada nyeste exempwo, ^^;; n-nyossa função `dwawscene()` é bem simpwes. ʘwʘ e-ewe usa awgumas w-wotinas de utiwidade q-que abowdawemos cuwtamente. σωσ

```js
f-function dwawscene() {
  g-gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);

  p-pewspectivematwix = makepewspective(45, ^^;; 640.0 / 480.0, ʘwʘ 0.1, ^^ 100.0);

  w-woadidentity();
  mvtwanswate([-0.0, nyaa~~ 0.0, -6.0]);

  gw.bindbuffew(gw.awway_buffew, (///ˬ///✿) squawevewticesbuffew);
  gw.vewtexattwibpointew(vewtexpositionattwibute, XD 3, g-gw.fwoat, :3 fawse, òωó 0, 0);
  setmatwixunifowms();
  g-gw.dwawawways(gw.twiangwe_stwip, ^^ 0, 4);
}
```

o-o pwimeiwo passo é pawa wimpaw o contexto pawa nyossa cow de fundo; e-então estabewecemos a pewspectiva d-da câmewa. ^•ﻌ•^ n-nyós definimos u-um campo de visão de 45°, σωσ com uma pwopowção d-de wawguwa p-pwa awtuwa de 640/480 (as dimensões d-do nyosso canvas). (ˆ ﻌ ˆ)♡ nyós também especificamos q-que apenas quewemos objetos e-entwe 0.1 e 100 u-unidades da câmewa p-pawa sewem wendewizadas. nyaa~~

então e-estabewecemos a-a posição do q-quadwado cawwegando a-a identidade de posição e-e twanswadando pawa w-wonge da câmewa p-pow 6 unidades. ʘwʘ d-depois disso, ^•ﻌ•^ n-nyós vincuwamos o-o buffew do v-véwtice do quadwado p-pawa o contexto, rawr x3 configuwa e-ewe, 🥺 e desenha o objeto chamando o-o método `dwawawways()`. ʘwʘ

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/index.htmw', (˘ω˘) 670, 510) }}

[veja o código compweto](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe2) | [abwa e-essa demo e-em uma nyova p-página](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/)

## opewações úteis da matwix

opetações da m-matwiz são compwicadas d-demais. n-nyinguém weawmente quew escwevew todo o código nyecessáwio pawa c-cuidaw dewas p-pow conta pwópwia. o.O fewizmente, σωσ h-há [sywvestew](http://sywvestew.jcogwan.com/), (ꈍᴗꈍ) u-uma bibwioteca bem útiw pawa widaw com opewações de vetowes e m-matwix do javascwipt. (ˆ ﻌ ˆ)♡

o-o awquivo `gwutiws.js` usado p-pow essa demo é u-usado pow um nyúmewo de demos do webgw fwutuando p-pewa web. o.O n-nyinguém pawece totawmente cwawo de onde ewe v-veio, :3 mas ewe simpwifica o uso do sywvestew mais a-ainda adicionando métodos pawa c-constwuiw tipos e-especiais de matwizes, -.- assim como g-gewaw htmw pawa e-exibiw ewas. ( ͡o ω ͡o )

awém disso, essa d-demo define awgumas wotinas úteis p-pawa intewagiw c-com essas bibwiotecas p-pawa t-tawefas específicas. /(^•ω•^) o que exatamente e-ewas fazem e-está awém do e-escopo dessa demo, (⑅˘꒳˘) mas há muitas b-boas wefewências sobwe matwizes disponíveis o-onwine; veja a s-seção [see awso](#see_awso) p-pawa uma wista de awgumas. òωó

```js
function woadidentity() {
  mvmatwix = m-matwix.i(4);
}

function m-muwtmatwix(m) {
  m-mvmatwix = mvmatwix.x(m);
}

function mvtwanswate(v) {
  muwtmatwix(matwix.twanswation($v([v[0], 🥺 v-v[1], v[2]])).ensuwe4x4());
}

function setmatwixunifowms() {
  v-vaw punifowm = g-gw.getunifowmwocation(shadewpwogwam, (ˆ ﻌ ˆ)♡ "upmatwix");
  g-gw.unifowmmatwix4fv(
    punifowm, -.-
    f-fawse,
    n-nyew fwoat32awway(pewspectivematwix.fwatten()), σωσ
  );

  vaw mvunifowm = gw.getunifowmwocation(shadewpwogwam, >_< "umvmatwix");
  gw.unifowmmatwix4fv(mvunifowm, fawse, :3 nyew f-fwoat32awway(mvmatwix.fwatten()));
}
```

## vew t-também

- [matwizes](https://mathwowwd.wowfwam.com/matwix.htmw) on wowfwam mathwowwd
- [matwiz](<http://en.wikipedia.owg/wiki/matwix_(mathematics)>) nya wikipedia

{{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", OwO "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}
