---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
---

{{HTMLSidebar("Global_attributes")}}

O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **`autocapitalize`** é um atributo enumerado que controla quando e como entradas de texto são automaticamente capitalizadas confome são escritas/editadas pelo usuário. O atributo deve receber um dos seguintes valores:

- `off` ou `none`: Nenhuma capitalização é aplicada (por padrão as letras serão minúsculas)
- `on` ou `sentences`: A primeira letra de cada sentença será por padrão uma letra maíuscula; todas as demais letras serão por padrão minúsculas.
- `words`: A letra inicial de cada palavra serão por padrão maiúsculas; todas as demais letras serão por padrão minúsculas.
- `characters`: Todas as letras deverão ser maiúsculas por padrão.

O atributo `autocapitalize` não afeta comportamentos quando digitando em um teclado físico. Ao invés disso, afeta o comportamento de outros mecanismos de entrada, tais quais teclados virtuais em dispositivos móveis e entradas por voz. O comportamento de tais mecanismos é que frequentemente auxiliam usuários aos capitalizar automaticamente a primeira letra de sentenças. O atributo `autocapitalize` permite a autores sobrescreverem esse comportamento por elemento.

O atributo `autocapitalize` nunca ativa a autocapitalização para um elemento {{HTMLElement("input")}} com um atributo [`type`](/pt-BR/docs/Web/HTML/Element/input#type) cujo valor seja `url`, `email`, ou `password`.

## Especificações

| Especificação                                                                        | Estado                   | Comentário |
| ------------------------------------------------------------------------------------ | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', "interaction.html#autocapitalization", "autocapitalize")}} | {{Spec2('HTML WHATWG')}} |            |

## Compatibilidade com navegadores

{{Compat("html.global_attributes.autocapitalize")}}
