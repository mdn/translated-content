---
title: Usando o atributo aria-label
slug: orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
---

O atributo [`aria-label`](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-label) é usado para definir uma _string_ na _tag_ do elemento atual. Use nos casos que a _tag_ do texto não seja visível na tela. Se há texto visível na _tag_ do elemento, usa [aria-labelledby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute "Using the aria-labelledby attribute") em vez.

Esse atributo pode ser usado em qualquer elemento de HTML; não se limita aos elementos que tem um papel ARIA atribuído.

### Valor

string

### Possíveis efeitos sobre os user agents e Tecnologia assistiva

> **Nota:** Opiniões podem diferir em como tecnologia assistiva deve lidar com esta técnica. A informação fornecida acima é um desses pareceres e, portanto, não normativo.

## Exemplos

#### Exemplo 1: Várias Etiquetas

No exemplo abaixo, um botão é denominado para olhar como um botão típico "fechar", com um X no meio. Uma vez que não há nada que indique que a finalidade do botão é para fechar a janela, o atributo `aria-label` é utilizado para fornecer o rótulo para quaisquer tecnologias assistivas.

```
<button aria-label="Fechar" onclick="myDialog.close()">X</button>
```

#### Working Examples:

### Notas

- O mapeamento mais comum da _API_ _accessibility_ para uma _label_ é a propriedade _accessible name_.
- Atributos, incluindo declarações `aria-label`, são ignoradas pela maioria dos serviços de tradução automática.

### Usado por regras ARIA

todos os elementos da marcação de base

### Técnicas ARIA relacionadas

- [Using the aria-labelledby attribute](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute "en/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute")

### Compatibilidade

Ainda por fazer: Adicionar informação de apoio para os combinações de produtos UA e AT mais comuns

### Recursos Adicionais

- [WAI-ARIA specification for aria-label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label)
