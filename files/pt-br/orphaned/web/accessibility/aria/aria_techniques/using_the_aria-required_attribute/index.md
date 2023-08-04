---
title: Usando o atributo aria-required
slug: orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute
---

### Descrição

O atributo [`aria-required`](https://www.w3.org/TR/wai-aria/states_and_properties#aria-required) é usado para indicar que a entrada do usuário é obrigatória em um elemento antes que um formulário possa ser enviado. Este atributo pode ser usado com qualquer elemento de formulário HTML típico; não se limita a elementos que têm uma `role` atribuída.

HTML 5 agora tem o atributo `required`, mas aria-required ainda é útil para agentes de usuário que não suportam ainda HTML5.

### Valor

`true` ou `false` (Padrão: `false`)

### Possíveis efeitos nos agentes de usuários e tecnologia assistiva

Os leitores de tela devem anunciar o campo como obrigatório.

Observe que esse atributo não alterará automaticamente a apresentação do campo.

> **Nota:** Opiniões podem diferir em como a tecnologia assistiva deve lidar com esta técnica. A informação fornecida acima é uma dessas opiniões e, portanto, não é normativa.

### Exemplos

#### Exemplo 1: Um simples formulário

```html
 <form action="post">
     <label for="firstName">First name:</label>
     <input id="firstName" type="text" aria-required="true" />
     <br/>
     <label for="lastName">Last name:</label>
     <input id="lastName" type="text" aria-required="true" />
     <br/>
     <label for="streetAddress">Street address:</label>
     <input id="streetAddress" type="text" />
 </form>
```

### Notas

### Usado em ARIA roles

- Combobox
- Gridcell
- Listbox
- Radiogroup
- Spinbutton
- [Textbox](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_textbox_role "Using the textbox role")
- Tree

### Técnicas relacionadas com ARIA

- [Usando o atributo aria-invalid](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute "Using the aria-invalid property")

### Compatibilidade

TBD: Add support information for common UA and AT product combinations

### Recursos adicionais

- [Especificação WAI-ARIA para`aria-required`](https://www.w3.org/TR/wai-aria/states_and_properties#aria-required)
- [WAI-ARIA Authoring Practices for forms](https://www.w3.org/TR/wai-aria-practices/#ariaform)
- [Constraint validation](/pt-BR/docs/Web/HTML/Constraint_validation) in HTML 5
