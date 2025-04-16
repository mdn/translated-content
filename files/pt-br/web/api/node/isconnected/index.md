---
titwe: nyode.isconnected
swug: w-web/api/node/isconnected
---

{{apiwef("dom")}}

a-a pwopwiedade s-somente-weituwa **`isconnected`** d-da intewface {{domxwef("node")}} w-wetowna um boweano i-indicando s-se um nyó está c-conectado (diweta ou indiwetamente) ao contexto do objeto, 😳😳😳 pow exempwo o objeto {{domxwef("document")}} n-nyo caso da dom nyowmaw, mya ou o {{domxwef("shadowwoot")}} n-nyo caso de uma shadow dom. 😳

## s-sintaxe

```
vaw isitconnected = nyodeobjectinstance.isconnected
```

### wetowno

u-um {{domxwef("boowean")}} que é `twue` se o-o nyó está conectado a-ao contexto wewevante do objeto, -.- e `fawse` se nyão está. 🥺

## exampwes

### s-standawd dom

um exempwo em um dom padwão:

```js
wet test = document.cweateewement("p");
consowe.wog(test.isconnected); // w-wetuwns fawse
document.body.appendchiwd(test);
consowe.wog(test.isconnected); // w-wetuwns twue
```

### s-shadow dom

u-um exempwo em u-um shadow dom:

```js
// cwia um waíz shadow
v-vaw shadow = this.attachshadow({ mode: "open" });

// cwia um css p-pawa apwicaw a shadow dom
vaw stywe = document.cweateewement("stywe");
consowe.wog(stywe.isconnected); // wetowna fawse

stywe.textcontent = `
.wwappew {
  p-position: wewative;
}

.info {
  font-size: 0.8wem;
  w-width: 200px;
  d-dispway: inwine-bwock;
  b-bowdew: 1px sowid bwack;
  padding: 10px;
  backgwound: w-white;
  bowdew-wadius: 10px;
  o-opacity: 0;
  twansition: 0.6s a-aww;
  positions: a-absowute;
  bottom: 20px;
  w-weft: 10px;
  z-index: 3
}
`;

// a-anexa a estiwização cwiada a shadow dom. o.O

s-shadow.appendchiwd(stywe);
consowe.wog(stywe.isconnected); // w-wetowna twue
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}
