---
title: "<dialog>: O elemento Dialog"
slug: Web/HTML/Reference/Elements/dialog
original_slug: Web/HTML/Element/dialog
---

O **elemento HTML `<dialog>`** representa uma caixa de diálogo ou outro componente interativo, tal como um inspetor ou janela.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categorias de conteúdo</th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >Flow content</a
        >,
        <a
          href="/pt-BR/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots"
          >sectioning root</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >Flow content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Nenhuma, tanto a tag inicial quanto a final são obrigatórias.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >flow content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td><code><a href="/pt-BR/docs/Web/Accessibility/ARIA/Roles/alertdialog_role">alertdialog</a></code></td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os atributos globais. O atributo `tabindex` não deve ser utilizado no elemento `<dialog>`.

- `open`
  - : Indica que o Dialog está ativo e pronto para uso. Quando o atributo `open` não for definido, ele não deve ser mostrado ao usuário.

## Notas de uso

- Elementos de formulário (`<form>`) podem ser integrados dentro de um elemento `<dialog>`, especificando-os com o atributo `method="dialog"`. Quando esse formulário é submetido, o diálogo é fechado com o seu {{domxref("HTMLDialogElement.returnValue", "returnValue")}} (valor de retorno) configurado para o valor botão `submit` do formulário que foi usado.
- O pseudo-elemento CSS {{cssxref('::backdrop')}} pode ser usado para estilizar o fundo de um elemento `<dialog>`, como um escurecer um conteúdo inacessível enquanto uma janela `modal` está aberta, por exemplo. O backdrop(pano de fundo) só está disponível quando um diálogo é exibido com {{domxref("HTMLDialogElement.showModal()")}}.

## Exemplos

### Exemplo simples

```html
<dialog open>
  <p>Olá para todos!</p>
</dialog>
```

### Exemplo Avançado

Este exemplo abre uma caixa de diálogo contendo um formulário quando o botão "Update details" é clicado.

#### HTML

```html
<!-- Um dialog simples contendo um form -->
<dialog open id="favDialog">
  <form method="dialog">
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </p>
    </section>
    <menu>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>
```

#### JavaScript

```js
(function () {
  var updateButton = document.getElementById("updateDetails");
  var cancelButton = document.getElementById("cancel");
  var favDialog = document.getElementById("favDialog");

  // O botão Update abre uma Dialog
  updateButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  // O botão cancelButtom fecha uma Dialog
  cancelButton.addEventListener("click", function () {
    favDialog.close();
  });
})();
```

### Resultado

{{EmbedLiveSample("Exemplo_Avançado", "100%", 300)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Polyfills

Inclua este polyfill para suportar browsers antigos.

[dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)

## Veja também

- O [`close`](/pt-BR/docs/Web/API/HTMLDialogElement/close_event) evento
- O [`cancel`](/pt-BR/docs/Web/API/HTMLDialogElement/cancel_event) evento
- Guia de formulários HTML.

{{HTMLSidebar}}
