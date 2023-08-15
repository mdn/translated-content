---
title: Document.registerElement()
slug: conflicting/Web/API/CustomElementRegistry/define
---

{{APIRef("DOM")}}

> **Nota:**document.registerElement() está depreciado em favor do customElements.define().

O método **`document.registerElement()`** registra um novo [elemento personalizado](/pt-BR/docs/Web/Web_Components/Custom_Elements) no browser e retorna um construtor para o novo elemento.

> **Nota:** Esta é uma tecnologia experimental. O browser você precisa usar suporte à componentes web. Veja [Habilitando componentes web no Firefox.](/pt-BR/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox)

## Sintaxe

```
var constructor = document.registerElement(tag-name, options);
```

### Parâmetros

- _tag-name_
  - : O nome do elemento personalizado. O nome precisa conter um dash (-), por exemplo minha-tag.
- _Opções{{optional_inline}}_
  - : Um projeto com propriedades **protótipo** como base para o elememento personalizado, e **extends**, uma existente tag para estender. Ambos são opcionais.

## Exemplo

Aqui é um exemplo muito simples:

```js
var Mytag = document.registerElement('my-tag');
```

Agora as novas tags são registradas no browser.

Uma variável Mytag tem um construtor que você pode usar para criar um elemento my-tag nos documentos como seguem:

```js
document.body.appendChild(new Mytag());
```

Isto insere um elemento vazio my-tag que será visível se você usar o browser para desenvolvedores. Isto não será visível se você usar a ferramenta visão da capacidade do código fonte do browser. E isto não será visível no browser a menos que você adicione alguns conteúdos para a tag. Aqui está um caminho para adicionar conteúdo a nova tag:

```js
var mytag = document.getElementsByTagName("my-tag")[0];
mytag.textContent = "I am a my-tag element.";
```

## Especificações

| Especificação                            | Estado                               | Comentário        |
| ---------------------------------------- | ------------------------------------ | ----------------- |
| {{SpecName('Custom Elements')}} | {{Spec2('Custom Elements')}} | definição inicial |

## Compatibilidade com navegadores

{{Compat("api.Document.registerElement")}}

## Veja também

- [Elementos customizados](/pt-BR/docs/Web/Web_Components/Custom_Elements)
