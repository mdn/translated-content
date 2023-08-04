---
title: Console.count()
slug: Web/API/console/count
---

{{APIRef("Console API")}}

Exibe o número de vezes em que a chamada `count()` em particular foi invocada. Essa função recebe um argumento opcional `label`.

{{AvailableInWorkers}}

Se `label` é fornecido, essa função exibe o número de vezes que a função `count()` foi chamada com a respectiva label.

Se `label` for omitido, a função exibe o número de vezes que a função `count()` foi chamada na respectiva linha.

Por exemplo, no código abaixo:

```js
var usuario = "";

function cumprimentar() {
  console.count();
  return "olá " + usuario;
}

usario = "bob";
cumprimentar();
usario = "alice";
cumprimentar();
cumprimentar();
console.count();
```

A saída do console será algo como:

```
"<no label>: 1"
"<no label>: 2"
"<no label>: 3"
"<no label>: 1"
```

Note a última linha da saída do console: a chamada individual de `count()` na linha 11 é tratada como um evento independente.

Se passarmos a variável `usuario` como o argumento `label` para a primeira invocação de `count()`, e a string "alice" para a segunda:

```js
var usuario = "";

function cumprimentar() {
  console.count(usuario);
  return "olá " + usuario;
}

usuario = "bob";
cumprimentar();
usuario = "alice";
cumprimentar();
cumprimentar();
console.count("alice");
```

Teremos uma saída assim:

```
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

Agora estamos mantendo contagens separadamente baseadas no valor de `label`. Como a label "alice" na linha 11 corresponde ao valor de `usuario` duas vezes, não é considerado um evento independente.

## Sintaxe

```
console.count([label]);
```

## Parâmetros

- `label`
  - : Uma string. Se for fornecida, exibe o número de vezes que `count()` foi invocada com a mesma label.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
