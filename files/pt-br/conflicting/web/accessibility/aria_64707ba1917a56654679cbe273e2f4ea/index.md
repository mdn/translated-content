---
title: Dicas básicas de form
slug: conflicting/Web/Accessibility/ARIA_64707ba1917a56654679cbe273e2f4ea
---

## Form labels

Quando estiver implementando forms usando elementos HTML tradicionais relacionados à foms, é importante fornecer labels para controles e para explicitamente associar um label com o seu ocntrole. Quando um usuário de leitor de tela navega uma página, o leitor de tel irá descrever os controles do form, mas sem uma associação direta entre o controle e seu label, o leitor de tela não tem maneira de saber qual label é o correto.

O exemplo abaixo mostra um form simples com labels. Note que cada elemento {{HTMLElement("input")}} tem um **id**, e cada elemento {{HTMLElement("label")}} tem um atributo **for** indicando o **id** do {{HTMLElement("input")}} associado.

_Exempl0 1. Form simples com labels_

```html
<form>
  <ul>
    <li>
      <input id="wine-1" type="checkbox" value="riesling"/>
      <label for="wine-1">Berg Rottland Riesling</label>
    </li>
    <li>
      <input id="wine-2" type="checkbox" value="weissbergunder"/>
      <label for="wine-2">Weissbergunder</label>
    </li>
    <li>
      <input id="wine-3" type="checkbox" value="pinot-grigio"/>
      <label for="wine-3">Pinot Grigio</label>
    </li>
    <li>
      <input id="wine-4" type="checkbox" value="gewurztraminer"/>
      <label for="wine-4">Berg Rottland Riesling</label>
    </li>
  </ul>
</form>
```

## Rotulando com ARIA

O elemento HTML {{HTMLElement("label")}} é apropriado para elementos relacionados com form, mas muitos controles de form são implementados como widget JavaScript dinâmico, usando {{HTMLElement("div")}}s ou {{HTMLElement("span")}}s. [WAI-ARIA](https://www.w3.org/WAI/intro/aria.php), a especificação de **Aplicações Internet Ricas em Acessibilidade** da W3C [Iniciativa de Acessibilidade Web](https://www.w3.org/WAI/), fornece o atributo [**aria-labelledby**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-labelledby) para esses casos.

O exemplo abaixo mostra um grupo de botões rádio usando um lista não ordenada. Note que na linha 3, o elemento {{HTMLElement("li")}} seta o atributo **aria-labelledby** para "rg1_label," o **id** do elemento {{HTMLElement("h3")}} na linha 1, que é o label para o grupo rádio.

_Exemplo 2. Um grupo rádio implementado usando uma lista não ordenada_

```html
<h3 id="rg1_label">Lunch Options</h3>

<ul class="radiogroup" id="rg1"  role="radiogroup" aria-labelledby="rg1_label">
  <li id="r1"  tabindex="-1" role="radio" aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Thai
  </li>
  <li id="r2"  tabindex="-1" role="radio"  aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Subway
  </li>
  <li id="r3"   tabindex="0" role="radio" aria-checked="true">
    <img role="presentation" src="radio-checked.gif" /> Radio Maria
  </li>
</ul>
```

## Descrevendo com ARIA

Controles form às vezes tem uma descrição associada com eles, em adição ao label. ARIA fornece o atributo [**aria-describedby**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-describedby) para diretamente associar a descrição com o controle.

O exemplo abaixo mostra um elemento {{HTMLElement("button")}} que é descrito por uma sentença num elemento {{HTMLElement("div")}} separado. O atributo **aria-describedby** no {{HTMLElement("button")}} referencia o **id** de {{HTMLElement("div")}}.

_Exemplo 3. Um botão descrito por um elemento separado._

```html
<button aria-describedby="descriptionRevert">Revert</button>
<div id="descriptionRevert">Reverting will undo any changes that have been made since the last save.</div>
```

(Note que o atributo **aria-describedby** é usado para outros propósitos, além de controles do form.)

## Campos inválidos e obrigatórios

Web developers tipicamente usam estratégias de apresentação para indicar campos obrigatórios ou campos inválidos, mas tecnologias assistivas (TAs) não podem necessariamente inferir essa informação a partir da apresentação. ARIA fornece atributos para indicar que os controles do form são obrigatórios ou inválidos:

- A propriedade [**aria-required**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-required) pode ser aplicada a um elemento form para indicar para uma TA que é obrigatório preencher o formulário.
- O estado [**aria-invalid**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-invalid) pode ser programaticamente aplicado para indicar para uma TA quais campos de dados têm dados incorretos, então o usuário sabe que ele entrou um dado inválido.

O exemplo abaixo mostra um form simples com três campos. Nas linhas 4 e 12, o atributo **aria-required** é setado para true (em adição aos asteriscos próximos aos labels) indicando que os campos de nome e e-mail são obrigatórios. A segunda parte do exemplo é um trecho de JavaScript que valida o e-mail e seta o atributo **aria-invalid** do campo e-mail (linha 12 do HTML) de acordo com o resultado (em adição à mudança de apresentação do elemento).

_Exemplo 4a. Um form com campos obrigatórios._

```html
<form>
  <div>
    <label for="name">* Name:</label>
    <input type="text" value="name" id="name" aria-required="true"/>
  </div>
  <div>
    <label for="phone">Phone:</label>
    <input type="text" value="phone" id="phone" aria-required="false"/>
  </div>
  <div>
    <label for="email">* E-mail:</label>
    <input type="text" value="email" id="email" aria-required="true"/>
  </div>
</form>
```

_Exemplo 4b. Parte de um script que valida a entrada no form._

```js
var validate = function () {
  var emailElement = document.getElementById(emailFieldId);
  var valid = emailValid(formData.email); // returns true if valid, false otherwise

  emailElement.setAttribute("aria-invalid", !valid);
  setElementBorderColour(emailElement, valid); // sets the border to red if second arg is false
};
```

## Fornecendo Mensagens de Erro Úteis

Leia como usar [alertas ARIA para melhorar forms](/pt-BR/docs/aria/forms/alerts "aria/forms/alerts").

> **Nota:** A ser decidido: devemos ou combinar em um artigo ou separar em técnicas, ou ambos. Além disso, é ARIA marcação apropriada para mensagens de erro em uma página carregada após a validação do lado do servidor?

Para maiores informações usando ARIA para acessibilidade de forms, veja o documento [Práticas de Cricação de WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/).
