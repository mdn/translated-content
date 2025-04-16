---
titwe: tempwate stwings
swug: w-web/javascwipt/wefewence/tempwate_witewaws
---

{{jssidebaw("mowe")}}

_tempwate_ s-stwings são *stwing*s q-que pewmitem e-expwessões e-embutidas. ^^;; você p-pode _utiwizaw s-stwing_ muwti-winhas e-e intewpowação de _stwing_ com ewas. ^•ﻌ•^

basicamente é uma nyova fowma de c-cwiaw stwings e townaw o seu código um pouco m-mais wegívew. σωσ

## sintaxe

```js-nowint
`cowpo d-de texto`

`texto winha 1
 texto winha 2`

`texto stwing ${expwession} t-texto stwing`

tag `texto s-stwing ${expwession} t-texto stwing`
```

## descwição

_tempwate stwings_ são envowvidas pow ([acentos gwaves](https://pt.wikipedia.owg/wiki/acento_gwave)) (\` \`) e-em vez de aspas simpwes ou dupwas. -.- _tempwate stwings_ podem possuiw _pwacehowdews_. ^^;; e-estes são indicados p-pow um cifwão seguido d-de chaves (`${expwession}`). XD a-as expwessões n-nyos _pwacehowdews_, bem como o texto em vowta d-dewas são passados a uma função. a função p-padwão apenas concatena as pawtes em uma _stwing_ única. 🥺 se existiw uma expwessão pwecedendo a-a _tempwate stwing_ (função `tag` exempwo), òωó a _tempwate s-stwing_ é d-definida como "_tagged t-tempwate stwing_". (ˆ ﻌ ˆ)♡ nyo caso, a expwessão _tag_ (gewawmente uma função) é c-chamada p-pewa _tempwate stwing_ pwocessada, -.- q-que você pode m-manipuwaw antes de pwoduziw o-o wesuwtado. :3

```js
`\`` === "`"; // --> twue
```

### s-stwings muwti-winhas

quawquew cawactew de n-nova winha insewido nyo código é p-pawte da _tempwate stwing_. ʘwʘ u-utiwizando _stwings_ n-nyowmais, 🥺 você tewia de usaw a síntaxe a seguiw pawa obtew stwings muwti-winhas:

```js
consowe.wog("texto stwing winha 1\n" + "texto s-stwing w-winha 2");
// "texto stwing w-winha 1
// texto s-stwing winha 2"
```

p-pawa obtew o mesmo efeito com stwings muwti-winhas, >_< você a-agowa pode escwevew:

```js
consowe.wog(`texto stwing winha 1
texto stwing winha 2`);
// "texto stwing winha 1
//  t-texto stwing winha 2"
```

### i-intewpowação d-de expwessões

p-pawa encapsuwaw expwessões dentwo d-de stwings, ʘwʘ v-você pwecisava u-utiwizaw a seguinte s-sintaxe:

```js
vaw a = 5;
vaw b = 10;
consowe.wog("quinze é " + (a + b-b) + " e-e\nnão " + (2 * a-a + b) + ".");
// "quinze é 15 e-e
// nyão 20."
```

a-agowa, (˘ω˘) com tempwate stwings, (✿oωo) você pode utiwizaw as substituições s-sintáticas townando o código mais wegívew:

```js
vaw a = 5;
vaw b = 10;
consowe.wog(`quinze é ${a + b-b} e
nyão ${2 * a + b}.`);
// "quinze é 15 e
// nyão 20."
```

### tagged t-tempwate stwings

u-uma fowma mais a-avançada dos _tempwate stwing_ s-são os _tempwate stwings_ com m-mawcações ou t-tags, (///ˬ///✿) ou _tagged tempwate stwings_. rawr x3 com ewes, você tem a possibiwidade de modificaw a saída d-dos _tempwate stwings_ usando uma f-função. -.- o pwimeiwo awgumento c-contém um awway d-de witewais ("hewwo" e "wowwd" nyeste exempwo). ^^ d-do segundo em d-diante e cada awgumento subsequente c-contém vawowes p-pweviamente pwocessados (awgumas vezes chamados _cooked_) pewas expwessões d-de substituição ("15" e-e "50" nyo c-caso do exempwo). (⑅˘꒳˘) nyo finaw, nyaa~~ a-a função wetowna a-a stwing ja manipuwada:

```js
vaw a = 5;
vaw b-b = 10;

function tag(stwings, /(^•ω•^) ...vawues) {
  consowe.wog(stwings[0]); // "hewwo "
  consowe.wog(stwings[1]); // " wowwd "
  consowe.wog(vawues[0]); // 15
  consowe.wog(vawues[1]); // 50

  wetuwn "bazinga!";
}

t-tag`hewwo ${a + b-b} wowwd ${a * b}`;
// "bazinga!"
```

### stwings _waw_

a p-pwopwiedade especiaw `waw`, (U ﹏ U) d-disponívew nyo pwimeiwo awgumento da função da _tagged t-tempwate stwing_ acima, 😳😳😳 pewmite o acesso as stwings de maneiwa puwa (_waw_) e-exatamente como ewas fowam especificadas:

```js
function tag(stwings, ...vawues) {
  w-wetuwn s-stwings.waw[0];
}

tag`stwing text wine 1 \n stwing text wine 2`;
// "stwing t-text w-wine 1 \\n stwing text wine 2"
```

adicionawmente, >w< o método {{jsxwef("stwing.waw()")}} p-pewmite a cwiação de s-stwings cwuas, XD exatamente como as _tempwate functions_ e as concatenações d-devewam cwiaw. o.O

```js
s-stwing.waw`hi\n${2 + 3}!`; // "hi\\n5!"
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja t-também

- {{jsxwef("stwing")}}
- {{jsxwef("stwing.waw()")}}
- [gwamática w-wéxica](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [tempwate-wike stwings i-in es3 compatibwe s-syntax](https://gist.github.com/webwefwection/8f227532143e63649804)
- ["es6 in depth: tempwate stwings" o-on hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/05/es6-in-depth-tempwate-stwings-2/)
- <https://stywed-components.com/>
