---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
---

{{JSRef("Global_Objects", "WeakMap")}}

## Sumário

O objeto WeakMap é uma coleção de pares key/value na qual as chaves são fracamente referenciadas.
As chaves **devem** ser objetos, e os valores podem ser de tipos arbitrários.

Você pode descobrir mais sobre `WeakMap`s na seção [Objeto WeakMap](/pt-BR/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object).

## Sintaxe

```
new WeakMap([iterable])
```

### Parâmetros

- `iterable`
  - : Iterable é um Array ou outro objeto iterável cujos elementos são pares key-value (Arrays de dois elementos). Cada par key-value será adicionados ao novo `WeakMap`. `null` é tratado como `undefined`.

## Descrição

### Por quê WeakMap?

Um programador JavaScript experiente vai notar que esta API pode ser implementada em JavaScript com dois arrays (um para chaves, um para valores) compartilhado pelos 4 métodos da API. Tal implementação teria duas principais incoveniências. A primeira é uma busca O(n) (n sendo o número de chaves no map). A segunda é o problema de memory leak. Com maps escritos manualmente, o array de chaves guardaria referências para objetos chave, prevenindo-os de serem coletados pelo Garbage Collector. Nos WeakMaps nativos, referências aos objetos chave são segurados de modo "fraco", o que significa que eles não previnem a coleção pelo GC no caso de não haver nenhuma outra referência ao objeto.

Por conta das referências serem fracas, chaves de `WeakMap` não são enumeráveis (i.e. não existe um método que dá a você uma lista de chaves). Se existisse tal método, a lista dependeria no estado da coleção do GC, introduzindo não-determinismo. Se você quiser ter uma lista de chaves, deve usar um {{jsxref("Map")}}.

## Construtor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Cria um novo objeto `WeakMap`.

## Métodos de instância

- {{jsxref("WeakMap.delete", "WeakMap.prototype.delete(<var>key</var>)")}}
  - : Remove qualquer valor associado à chave(`key`). `WeakMap.prototype.has(key)` retornará `false` depois.
- {{jsxref("WeakMap.get", "WeakMap.prototype.get(<var>key</var>)")}}
  - : Retorna o valor associado à chave(`key`). Ou `undefined` se não houver.
- {{jsxref("WeakMap.has", "WeakMap.prototype.has(<var>key</var>)")}}
  - : Retorna um boolean afirmando se um valor foi associado à chave(`key`) no objeto `WeakMap` ou não.
- {{jsxref("WeakMap.set", "WeakMap.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : Define o valor(`value`) da chave(`key`) no objeto `WeakMap`. Retorna o objeto `WeakMap`.

## Exemplos

### Exemplo: Usando `WeakMap`

```js
var wm1 = new WeakMap(),
  wm2 = new WeakMap(),
  wm3 = new WeakMap();
var o1 = {},
  o2 = function () {},
  o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // um valor pode ser qualquer coisa, incluindo um objeto or uma função
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // chaves e valores pode ser quaisquer objetos. Até mesmo WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, pois não existe valor para o2 em wm2
wm2.get(o3); // undefined, pois este é o valor definido

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (mesmo se o valor armazenado for 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37
wm3.clear();
wm3.get(o1); // undefined, pois wm3 foi 'limpado' e não há mais valor para o1.

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

## Especificações

| Especificações                                             | Status               | Comentário         |
| ---------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-weakmap-objects', 'WeakMap')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-weakmap-objects', 'WeakMap')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.WeakMap")}}

## Veja também

- [WeakMap bug at Mozilla](https://bugzilla.mozilla.org/show_bug.cgi?id=547941)
- [Hiding Implementation Details with ECMAScript 2015 WeakMaps](http://fitzgeraldnick.com/weblog/53/)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
