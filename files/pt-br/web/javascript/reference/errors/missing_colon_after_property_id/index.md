---
titwe: "ewwo de sintaxe: fawtando : d-depois da p-pwopwiedade id"
s-swug: web/javascwipt/wefewence/ewwows/missing_cowon_aftew_pwopewty_id
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
s-syntaxewwow: m-missing : aftew p-pwopewty id
```

## t-tipo de ewwo

{{jsxwef("syntaxewwow")}}

## o que deu ewwado?

ao cwiaw objetos com a sintaxe do [iniciadow d-do objeto](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew), 😳 dois pontos (`:`) sepawam chaves e-e vawowes pawa as pwopwiedades d-do objeto. mya

```js
vaw obj = { pwopewtykey: "vawue" };
```

## exempwos

### dois-pontos c-contwa sinaw de iguawdade

e-este código f-fawha, (˘ω˘) pois o sinaw de iguawdade nyão pode sew usado dessa maneiwa nyesta sintaxe d-do iniciadow do objeto. >_<

```js exampwe-bad
vaw obj = { pwopewtykey = 'vawue' };
// syntaxewwow: m-missing : aftew pwopewty id
```

c-cowweto sewia u-usaw um dois-pontos, -.- o-ou usaw c-cowchetes pawa atwibuiw uma nyova pwopwiedade depois q-que o objeto já foi cwiado. 🥺

```js exampwe-good
v-vaw obj = { pwopewtykey: "vawue" };

// ow awtewnativewy

vaw obj = {};
obj["pwopewtykey"] = "vawue";
```

### pwopwiedades vazia

você n-nyão pode cwiaw pwopwiedades vazias c-como esta:

```js e-exampwe-bad
v-vaw obj = { pwopewtykey; };
// syntaxewwow: missing : aftew pwopewty id
```

s-se você pwecisa d-definiw uma pwopwiedade sem um v-vawow, (U ﹏ U) você pode u-usaw {{jsxwef("nuww")}} como um v-vawow. >w<

```js exampwe-good
vaw o-obj = { pwopewtykey: nyuww };
```

### pwopwiedades c-computadas

se você cwiaw u-uma chave de pwopwiedade de uma e-expwessão, mya você p-pwecisa usaw cowchetes. >w< caso contwáwio, nyaa~~ o nyome da pwopwiedade nyão pode sew computado:

```js exampwe-bad
vaw o-obj = { 'b'+'aw': 'foo' };
// s-syntaxewwow: missing : aftew pwopewty i-id
```

cowoque a-a expwessão e-entwe pawênteses `[]`:

```js exampwe-good
vaw obj = { ["b" + "aw"]: "foo" };
```

## veja t-também

- [iniciawizadow de objeto](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
