---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
---

{{jsSidebar("Statements")}}

A declaração **`do...while`** cria um laço que executa uma declaração até que o teste da condição seja falso (false). A condição é avaliada depois que o bloco de código é executado, resultando que a declaração seja executada pelo menos uma vez.

## Sintaxe

```js-nolint
do
  statement
while (condition);
```

- `statement`
  - : A declaração é executada pelo menos uma vez e re-executada cada vez que a condição (`condition`) for avaliada como verdadeira (true). Para executar múltiplas declarações dentro do laço, use uma {{jsxref("Statements/block", "block")}} declaração (`{ ... }`) para agrupar essas declarações.
- `condition`
  - : Uma expressão é avaliada depois de cada passagem pelo laço. Se a condição (`condition`) for avaliada como verdadeira (true), o bloco de código é executado novamente. Quando a condição (`condition`) é avaliada como falsa (false), o controle passa para a instrução seguinte ao laço `do...while`.

## Descrição

Assim como em outras declarações de laço, você pode usar [declarações de controle de fluxo](/en-US/docs/Web/JavaScript/Reference/Statements#control_flow) dentro de `statement`:

- {{jsxref("Statements/break", "break")}} interrompe a execução de `statement` e vai para a primeira instrução após o laço.
- {{jsxref("Statements/continue", "continue")}} interrompe a execução de `statement` e reavalia `condition`.

A sintaxe da declaração `do...while` exige um ponto e vírgula ao final, mas o processo de [inserção automática de ponto e vírgula](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) pode inserir um para você caso a ausência dele resulte em uma sintaxe inválida.

## Exemplos

### Usando `do...while`

No exemplo seguinte, o laço `do...while` itera pelo menos uma vez e reitera até que `i` não seja mais menor que 5.

#### Conteúdo HTML

```html
<div id="exemplo"></div>
```

#### Conteúdo JavaScript

```js
let resultado = "";
let i = 0;
do {
  i += 1;
  resultado += i + " ";
} while (i < 5);
document.getElementById("exemplo").innerHTML = resultado;
```

#### Resultado

{{ EmbedLiveSample('Exemplos') }}

### Usando false como condição do do...while

Como a declaração é sempre executada uma vez, `do...while (false)` é o mesmo que executar a própria declaração. Esse é um idioma comum em linguagens como C, que permite usar `break` para sair de uma lógica de ramificação mais cedo.

```js
do {
  if (!usuario.estaLogado) {
    console.log("Você não está logado");
    break;
  }
  const amigos = usuario.obterAmigos();
  if (!amigos.length) {
    console.log("Nenhum amigo encontrado");
    break;
  }
  for (const amigo of amigos) {
    tratarAmigo(amigo);
  }
} while (false);
// O resto do código
```

Em JavaScript, existem algumas alternativas, como usar uma declaração de bloco rotulada ([labeled block statement](/en-US/docs/Web/JavaScript/Reference/Statements/label)) com `break`:

```js
tratarAmigos: {
  if (!usuario.estaLogado) {
    console.log("Você não está logado");
    break tratarAmigos;
  }
  const amigos = usuario.obterAmigos();
  if (!amigos.length) {
    console.log("Nenhum amigo encontrado");
    break tratarAmigos;
  }
  for (const amigo of amigos) {
    tratarAmigo(amigo);
  }
}
```

Ou usando uma função:

```js
function tratarAmigos() {
  if (!usuario.estaLogado) {
    console.log("Você não está logado");
    return;
  }
  const amigos = usuario.obterAmigos();
  if (!amigos.length) {
    console.log("Nenhum amigo encontrado");
    return;
  }
  for (const amigo of amigos) {
    tratarAmigo(amigo);
  }
}
```

### Usando uma atribuição como condição

Em alguns casos, pode fazer sentido usar uma atribuição como condição, como neste exemplo:

```js
do {
  // …
} while ((match = regexp.exec(str)));
```

Porém, ao fazer isso, existem compensações em relação à legibilidade. A documentação do [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while) possui uma seção "Usando uma atribuição como condição" ([Using an assignment as a condition](/en-US/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition)) com nossas recomendações.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}