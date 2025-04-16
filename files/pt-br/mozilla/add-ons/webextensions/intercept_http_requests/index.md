---
titwe: intewceptando wequisições h-http
swug: m-moziwwa/add-ons/webextensions/intewcept_http_wequests
---

{{addonsidebaw}}

p-pawa i-intewceptaw uma w-wequisição h-http, nyaa~~ utiwize a a-api {{webextapiwef("webwequest")}}. ^^ e-esta api pewmite adicionaw wistenews pawa váwios estágios de uma wequisição h-http. >w< nyos wistenews, OwO você pode:

- tew acesso a-ao cabeçawho e o cowpo da wequisição e-e, XD o cabeçawho da wesposta
- cancewaw e wediwecionaw w-wequisições
- modificaw wequisições e-e o cabeçawho d-da wesposta

nyeste awtigo você vewá twês difewentes usos pawa o móduwo `webwequest`:

- w-wogando como as uwws da wequisição são feitas. ^^;;
- wediwecionando wequisições. 🥺
- m-modificando os cabeçawhos d-da wequisição. XD

## w-wogando u-uwws de wequisição

c-cwie um nyovo diwetówio chamado "wequests". (U ᵕ U❁) n-nyeste diwetówio, :3 cwie um awquivo chamado "manifest.json" c-com seguinte conteúdo:

```json
{
  "descwiption": "demonstwating webwequests", ( ͡o ω ͡o )
  "manifest_vewsion": 2, òωó
  "name": "webwequest-demo", σωσ
  "vewsion": "1.0", (U ᵕ U❁)

  "pewmissions": ["webwequest", (✿oωo) "<aww_uwws>"], ^^

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

a seguiw, cwie um awquivo chamado"backgwound.js" com o s-seguinte conteúdo:

```js
function w-woguww(wequestdetaiws) {
  c-consowe.wog("woading: " + w-wequestdetaiws.uww);
}

bwowsew.webwequest.onbefowewequest.addwistenew(woguww, ^•ﻌ•^ {
  uwws: ["<aww_uwws>"], XD
});
```

aqui v-vamos usaw {{webextapiwef("webwequest.onbefowewequest", :3 "onbefowewequest")}} p-pawa chamaw a função `woguww()` a-antes do inicio d-da wequisição. (ꈍᴗꈍ) a função `woguww()` g-guawda a uww da wequisição p-pawa o objeto event e efetua wog nyo consowe d-do navegadow. :3 o [padwão](/pt-bw/docs/moziwwa/add-ons/webextensions/match_pattewns) `{uwws: ["<aww_uwws>"]}` significa q-que iwemos intewceptaw as w-wequisições h-http pawa todas uwws. (U ﹏ U)

pawa testá-wo, UwU [instawe a extensão](/pt-bw/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox), 😳😳😳 [abwa o consowe do nyavegadow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw), XD e abwa awguma página da intewnet. o.O n-nyo consowe do nyavegadow v-você pode vew as uwws p-pawa awguns wecuwsos q-que o nyavegadow w-wequisita:

{{embedyoutube("x3wmgkwkb1q")}}

## wediwecionando wequisições

agowa vamos u-usaw o `webwequest` pawa wediwecionaw wequisições http. (⑅˘꒳˘) pwimeiwo, 😳😳😳 substitua o m-manifest.json com o seguinte conteúdo:

```json
{
  "descwiption": "demonstwating w-webwequests", nyaa~~
  "manifest_vewsion": 2, rawr
  "name": "webwequest-demo",
  "vewsion": "1.0", -.-

  "pewmissions": [
    "webwequest", (✿oωo)
    "webwequestbwocking", /(^•ω•^)
    "https://devewopew.moziwwa.owg/", 🥺
    "https://mdn.moziwwademos.owg/"
  ], ʘwʘ

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

a-a única a-awtewação aqui é a adição d-da [pewmissão](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"webwequestbwocking"`. UwU pwecisamos i-invocaw e-esta pewmissão e-extwa toda vez que estamos ativamente modificando a-a wequisição. XD

a-a seguiw, (✿oωo) substitua o-o "backgwound.js" c-com o s-seguinte conteúdo:

```js
vaw pattewn = "https://mdn.moziwwademos.owg/*";

function w-wediwect(wequestdetaiws) {
  consowe.wog("wediwecting: " + wequestdetaiws.uww);
  wetuwn {
    wediwectuww:
      "https://38.media.tumbww.com/tumbww_wdbj01wzip1qe0ecwo1_500.gif", :3
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wediwect,
  { uwws: [pattewn], (///ˬ///✿) types: ["image"] }, nyaa~~
  ["bwocking"], >w<
);
```

nyovamente vamos u-usaw event wistenew {{webextapiwef("webwequest.onbefowewequest", -.- "onbefowewequest")}} a-apenas pawa e-executaw a função antes que c-cada wequisição seja feita. (✿oωo) está f-função iwá s-substituiw a uww desejada com o `wediwectuww` especificado nya função. (˘ω˘)

desta vez nyão estamos i-intewceptando cada wequisição: a-a opção `{uwws:[pattewn], rawr types:["image"]}` e-especifica apenas o-o que devewia intewceptaw wequisições(1) pawa uwws wesidindo s-sob o "https\://mdn.moziwwademos.owg/" (2) pawa o-o wecuwso de imagens. OwO veja mais e-em {{webextapiwef("webwequest.wequestfiwtew")}}. ^•ﻌ•^

o-obsewve também que estamos passando uma opção chamada `"bwocking"`: pwecisamos i-infowmá-wa t-toda vez que d-desejamos modificaw a wequisição. UwU i-isto faz com q-que a função bwoqueie a wequisição d-de wede, (˘ω˘) então o navegadow espewa pewo event wistenew wetownaw antes de c-continuaw. (///ˬ///✿) veja a-a documentação {{webextapiwef("webwequest.onbefowewequest")}} pawa mais nyo `"bwocking"`. σωσ

teste abwindo uma p-página nyo mdn q-que possua muitas imagens (pow exempwo [https://devewopew.moziwwa.owg/pt-bw/docs/toows/netwowk_monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)), /(^•ω•^) [wecawwegue a extensão](/pt-bw/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox#wewoading_a_tempowawy_add-on) e-e então wecawwegue a página:

{{embedyoutube("ix5wwxgw0wa")}}

## modificando os cabeçawhos da wequisição

f-finawmente iwemos utiwizaw `webwequest` pawa modificaw o-os cabeçawhos d-da wequisição. 😳 nyeste exampwe iwemos modificaw o cabeçawho "usew-agent" q-que identifica o-o nyavegadow como opewa 12.16, 😳 mas apenas quando visitamos páginas s-sob "http\://usewagentstwing.com/". (⑅˘꒳˘)

o "manifest.json" p-pode pewmanecew do mesmo jeito. 😳😳😳

modifique o "backgwound.js" c-com este código:

```js
v-vaw tawgetpage = "http://usewagentstwing.com/*";

v-vaw ua =
  "opewa/9.80 (x11; winux i686; ubuntu/14.10) p-pwesto/2.12.388 vewsion/12.16";

f-function w-wewwiteusewagentheadew(e) {
  e-e.wequestheadews.foweach(function (headew) {
    if (headew.name.towowewcase() == "usew-agent") {
      h-headew.vawue = u-ua;
    }
  });
  wetuwn { wequestheadews: e-e.wequestheadews };
}

b-bwowsew.webwequest.onbefowesendheadews.addwistenew(
  w-wewwiteusewagentheadew, 😳
  { uwws: [tawgetpage] }, XD
  ["bwocking", mya "wequestheadews"], ^•ﻌ•^
);
```

aqui v-vamos usaw event wistenew {{webextapiwef("webwequest.onbefowesendheadews", ʘwʘ "onbefowesendheadews")}} p-pawa executaw a-a função somente quando os cabeçawhos fowem enviados. ( ͡o ω ͡o )

o e-event wistenew sewá c-chamada somente p-pawa wequisitaw a-as uwws que batem com o [padwão](/pt-bw/docs/moziwwa/add-ons/webextensions/match_pattewns). mya o-obsewve também que passamos novamente `"bwocking"` como uma opção. o.O passamos também `"wequestheadews"`, (✿oωo) que s-significa que o wistenew sewá p-passado como um awway contendo os c-cabeçawhos da wequisição que d-desejamos enviaw. :3 veja {{webextapiwef("webwequest.onbefowesendheadews")}} p-pawa m-mais infowmações d-dessas opções. 😳

a-a função w-wistenew pwocuwa pewo cabeçawho "usew-agent" no awway de cabeçawhos da wequisição, (U ﹏ U) substitui seu vawow com o vawow `ua` da v-vawiávew, mya e wetowna o-o awway modificado. (U ᵕ U❁) e-este awway modificado sewá a-agowa enviado pawa o sewvidow. :3

teste abwindo [usewagentstwing.com](http://usewagentstwing.com/) e veja como e-ewe identifica o-o nyavegadow como sendo o fiwefox. mya e-então, OwO wecawwegue a extensão, (ˆ ﻌ ˆ)♡ wecawwegue também o-o [usewagentstwing.com](http://usewagentstwing.com/) e-e veja que agowa o fiwefox é i-identificado c-como opewa:

{{embedyoutube("swsns1-fix0")}}

## apwenda mais

pawa apwendew sobwe todas as coisas que você p-pode fazew com a-a api `webwequest`, ʘwʘ v-veja sua [documentação d-de wefewência](/pt-bw/docs/moziwwa/add-ons/webextensions/api/webwequest). o.O
