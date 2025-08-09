---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
---

{{HTMLSidebar("Global_attributes")}}

O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **tabindex** indica se um elemento pode receber foco de entrada (se ele é _focável_), se e em qual posição ele deve fazer parte da navegação sequencial do teclado (geralmente com a tecla <kbd>Tab</kbd>, daí seu nome).

{{InteractiveExample("HTML Demo: tabindex", "tabbed-standard")}}

```html interactive-example
<p>Click anywhere in this pane, then try tabbing through the elements.</p>

<label>First in tab order:<input type="text" /></label>

<div tabindex="0">Tabbable due to tabindex.</div>

<div>Not tabbable: no tabindex.</div>

<label>Third in tab order:<input type="text" /></label>
```

```css interactive-example
p {
  font-style: italic;
  font-weight: bold;
}

div,
label {
  display: block;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

div:focus {
  font-weight: bold;
}
```

Ele aceita valores inteiros, com diferentes resultados dependendo do valor desse inteiro:

- um _valor negativo_ (geralmente `tabindex="-1"`) significa que o elemento não deve ser localizado pela navegação sequencial do teclado, mas pode ser focável visualmente ou com JavaScript. Isso é mais útil para criar widgets accessíveis com JavaScript.

  > [!NOTE]
  > Um valor negativo é útil quando você tem conteúdo fora da tela que aparece com um evento específico. O usuário não poder focar em nenhum elemento com um `tabindex` negativo utilizando o teclado, porém um script pode o fazer utilizando o [método](/pt-BR/docs/Web/API/HTMLElement/focus) `focus()`.

- `tabindex="0"` significa que o elemento deve ser focável e que pode ser localizado pela navegação sequencial do teclado, mas a sua posição será definida pela ordem no código-fonte do documento;
- um _valor positivo_ significa que o elemento deve ser focável e que pode ser localizado pela navegação sequencial do teclado, e a sua posição definida pelo valor do número. Sendo assim, `tabindex="4"` seria focado antes de `tabindex="5"`, mas depois de `tabindex="3"`. Se vários elementos possuírem o mesmo valor positivo de `tabindex`, a sua posição na ordenação será definida pela sua posição no código-fonte do documento. O valor máximo do `tabindex` é 32767. Se não especificado, assume o valor padrão 0.

  > [!WARNING]
  > Evite usar valores do `tabindex` maiores que 0. Ao fazer isso dificulta para pessoas que dependem de tecnologias assistivas para navegar e operar o conteúdo da página. Ao invés disso, escreva o documento com os elementos em uma sequência lógica.

Se o atributo `tabindex` for definido em um elemento div {{htmlelement("div")}}, seu conteúdo filho (interno) não poderá ser rolado utilizando as teclas direcionais a menos que seja definido `tabindex` no conteúdo também. [Veja este fiddle para entender melhor os efeitos de rolagem do tabindex](https://jsfiddle.net/jainakshay/0b2q4Lgv/).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Todos os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.tabIndex")}} que reflete este atributo.
- Problemas de acessibilidade com tabindex: veja [Don't Use Tabindex Greater than 0 | Adrian Roselli](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) (em inglês).
