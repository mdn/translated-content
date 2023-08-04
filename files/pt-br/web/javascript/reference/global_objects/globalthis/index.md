---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
---

{{jsSidebar("Objects")}}

A propriedade global **`globalThis`** retorna um objeto global de nível superior.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html")}}

## Sintaxe

```
globalThis
```

## Descrição

Historicamente, o acesso ao escopo global exigiu uma sintaxe diferente em diferentes ambientes JavaScript. Na web você pode usar [`window`](/pt-BR/docs/Web/API/Window/window), [`self`](/pt-BR/docs/Web/API/Window/self) ou [`frames`](/pt-BR/docs/Web/API/Window/frames) - porém em [Web Workers](/pt-BR/docs/Web/API/Worker) somente `self` funcionará. Em Node.js nada disso funciona e você deve usar `global`.
A palavra-chave `this` poderia ser usada dentro de funções em execução no modo _sloppy_, mas `this` será `undefined` em módulos, e dentro de funções em execução no _strict mode_.

A propriedade `globalThis` fornece uma maneira padrão de acessar o objeto global entre ambientes. Ao contrário de propriedades semelhantes, como [`window`](/pt-BR/docs/Web/API/Window/window) e [`self`](/pt-BR/docs/Web/API/Window/self), é garantido que funcione em contextos _window_ e _non-window_. Dessa forma, você pode acessar o objeto global de maneira consistente sem precisar saber em qual ambiente o código está sendo executado.

Para ajudá-lo a lembrar o nome, lembre-se que no escopo global, o valor de `this` é `globalThis`.

### Nome

Várias outras opções de nomes populares, como `self` e `global` foram removidas da discussão devido ao seu potencial em quebrar a compatibilidade com o código existente.

## Exemplos

Antes de `globalThis`, a única maneira confiável de obter o objeto global para um ambiente era `Function('return this')()`. No entanto, isso causa violações [CSP](/pt-BR/docs/Web/HTTP/CSP) em algumas configurações, então [es6-shim](https://github.com/paulmillr/es6-shim) usa uma verificação como essa, por exemplo:

```js
var getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};

var globals = getGlobal();

if (typeof globals.setTimeout !== "function") {
  // sem setTimeout neste ambiente!
}
```

Com `globalThis` disponível, a busca global adicional entre ambientes não é mais necessária:

```js
if (typeof globalThis.setTimeout !== "function") {
  // sem setTimeout neste ambiente!
}
```

## Especificações

| Especificação                                                  | Status  | Comentário |
| -------------------------------------------------------------- | ------- | ---------- |
| [globalThis proposal](https://github.com/tc39/proposal-global) | Stage 3 |            |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.globalThis")}}
