---
title: Error.prototype.cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
---

{{JSRef}}

A propriedade **`cause`** indica a causa original específica de um erro.

É usado quando captura e relança um erro com uma mensagem mais específica ou útil para ter acesso ao erro original.

## Valor

Este é o valor que foi passado para o [construtor `Error()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) no argumento `options.cause`.

O valor pode ser de qualquer tipo. Você não deve criar suposições que o erro que você apanhou tem um `Error` como sua `cause`, e da mesma forma você não pode ter certeza que a variável vinculada na declaração `catch` e um `Error` qualquer. O exemplo abaixo "Forncenendo dados estruturados é a causa do erro" mostra uma casa onde um não erro é deliberadamente fornecido como causa

## Exemplos

### Relançando um erro com a causa

Isso é útil algumas vezes para capturar um erro e relançá-lo com uma nova mensagem.
E nesse caso você deve passar o erro original no construtor para o novo `Error` aparecer.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Falha na comunicação com o banco de dados.", { cause: err });
}
```

Para exemplos mais detalhados veja [Erro > Diferenciar entre erros semelhantes](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Fornecendo dados estruturados como a causa de erro

Mensagens de erro escritas para o humano consumir pode ser inapropriado para a análise de máquina, já que estão sujetos a mudanças de reformulação ou pontuação ele pode parar qualquer análise de escrita existente para consumi-los. Então quando um erro é disparado de uma função, é uma alternativa para a leitura humana da mensagem de erro, você pode em vez disso fornecer a causa com dados estruturados, para análise de máquina.

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error("RSA key generation requires integer inputs.", {
      cause: { code: "NonInteger", value: [p, q] },
    });
  }
  if (!areCoprime(p, q)) {
    throw new Error("RSA key generation requires two co-prime integers.", {
      cause: { code: "NonCoprime", values: [p, q] },
    });
  }
  // rsa algorithm…
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
