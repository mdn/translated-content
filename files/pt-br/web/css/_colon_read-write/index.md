---
title: ":read-write"
slug: Web/CSS/:read-write
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:read-write`** representa um elemento (como o `input` ou `textarea`) que é editável pelo usuário.

```css
input:read-write,
textarea:read-write {
  background-color: #bbf;
}

p:read-write {
  background-color: #bbf;
}
```

## Sintaxe

{{csssyntax}}

## Exemplos

### Confirmando informações do formulário em controles read-only/read-write

Ao utilizar os controles de formulário `readonly` permite que o usuário verifique e verifique as informações que eles podem ter inserido em um formulário anterior (por exemplo: Detalhes de envio), enquanto ainda pode enviar as informações junto com o resto do formulário. Nós fazemos exatamente isso no exemplo abaixo.

A pseudo-classe `:read-only` _(:somente-leitura)_ é usada para remover todo o estilo que faz com que as entradas pareçam campos clicáveis, fazendo com que pareçam outro parágrafo _somente-leitura_. A pseudo-classe `:read-write` _(:leitura-escrita)_ por outro lado, é usado para fornecer um estilo mais agradável para a `<textarea>`.

```css
input:-moz-read-only,
textarea:-moz-read-only,
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:-moz-read-write,
textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Você pode encontrar o código fonte completo em [readonly-confirmation.html](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/readonly-confirmation.html) (disponível em inglês); isso torna assim:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

### Estilizar controle não formal de read-write

Este seletor não seleciona apenas {{htmlElement("input")}}/{{htmlElement("textarea")}} elementos - ele selecionará qualquer elemento que possa ser editado pelo usuário, como um {{htmlelement("p")}} elemento com [`contenteditable`](/pt-BR/docs/Web/HTML/Global_attributes#contenteditable) definido sobre ele.

```html
<p contenteditable>Este parágrafo é editável; é read-write.</p>

<p>Este parágrafo não é editável; é read-only.</p>
```

```css
p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}
```

{{EmbedLiveSample('Estilizar_controle_não_formal_de_read-write.', '100%', 400)}}

## Especificações

| Especificação                                                        | Status                        | Comentário                                                     |
| -------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------- |
| {{ SpecName('HTML WHATWG', '#selector-read-write', ':read-write') }} | {{ Spec2('HTML WHATWG') }}    | Nenhuma mudança.                                               |
| {{ SpecName('HTML5 W3C', '#selector-read-write', ':read-write') }}   | {{ Spec2('HTML5 W3C') }}      | Define a semântica em relação à validação de HTML e restrição. |
| {{ SpecName('CSS4 Selectors', '#rw-pseudos', ':read-write') }}       | {{ Spec2('CSS4 Selectors') }} | Define a pseudo-classe, mas não a semântica associada.         |

## Compatibilidade com navegadores

{{Compat("css.selectors.read-write")}}

## Veja também

- {{cssxref(":read-only")}}
- Atributo HTML [`contenteditable`](/pt-BR/docs/Web/HTML/Global_attributes#contenteditable).
