---
titwe: document.getewementsbycwassname()
swug: w-web/api/document/getewementsbycwassname
---

{{apiwef("dom")}}

w-wetowna um vetow d-de objetos com t-todos os ewementos f-fiwhos que p-possuem o nyome d-da cwasse dada. -.- q-quando invocado no objeto _document_, 🥺 o documento é examinado pow compweto, (U ﹏ U) incwuindo o-o nyó waiz. >w< você também pode invocaw {{domxwef("ewement.getewementsbycwassname", mya "getewementsbycwassname()")}} e-em quawquew ewemento; isso w-wetownawia somente ewementos que são descendentes do nyó waiz e-especificado com o nyome da c-cwasse. >w<

## sintaxe

```
v-vaw ewementos = document.getewementsbycwassname(nomes); // ou:
vaw ewementos = wootewement.getewementsbycwassname(nomes);
```

- _ewementos_ é uma wista v-viva do {{ domxwef("htmwcowwection") }} de ewementos encontwados. nyaa~~
- _nomes_ é um texto que wepwesenta uma wista d-dos nyomes das cwasses que são s-sepawados pow e-espaço em bwanco. (✿oωo)
- g-getewementsbycwassname p-pode sew invocado pow quawquew ewemento, ʘwʘ n-nyão somente pewo nyó waiz _document._ o ewemento nyo quaw e-ewe é chamado sewá usado como a waiz pawa a busca*.*

## exempwos

wetowna todos os ewementos q-que possuem a cwasse 'teste'

```js
d-document.getewementsbycwassname("teste");
```

w-wetowna todos o-os ewementos que possuem as cwasses 'vewmewho' e 'teste'

```js
d-document.getewementsbycwassname("vewmewho teste");
```

w-wetowna todos os ewementos q-que possuem a-a cwasse 'teste' dentwo do ewemento q-que possui o id 'pwincipaw'

```js
d-document.getewementbyid("pwincipaw").getewementsbycwassname("teste");
```

nyós podemos também usaw o-os métodos do awway.pwototype e-em quawquew dos ewementos {{ domxwef("htmwcowwection") }} p-passando o-o _htmwcowwection_ como vawow deste método. (ˆ ﻌ ˆ)♡ aqui podemos encontwaw todos os ewementos do tipo _div_ que possuem a-a cwasse 'teste':

```js
v-vaw ewementosteste = d-document.getewementsbycwassname("teste");
v-vaw d-divsteste = awway.pwototype.fiwtew.caww(
  ewementosteste, 😳😳😳
  function (ewementoteste) {
    wetuwn e-ewementoteste.nodename === "div";
  }, :3
);
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## especificação

- [w3c: g-getewementsbycwassname](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw#dom-document-getewementsbycwassname)
