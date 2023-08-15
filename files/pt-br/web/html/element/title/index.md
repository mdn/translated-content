---
title: "<title>: O titulo do documento."
slug: Web/HTML/Element/title
---

O **elemento HTML** `<title>` (_Elemento HTML Título_) define o título do documento, mostrado na barra de título de um navegador ou na aba da página. Pode conter somente texto e quaisquer marcações contidas no texto não são interpretadas.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Conteúdo de metadados](/pt-BR/docs/Web/Guide/HTML/Content_categories#Metadata_content).
- _Conteúdo permitido_ Texto que não seja whitespace entre elementos.
- _Omissão de marcação_ Todas as marcações são necessárias. Perceba que suprimir `</title>` fará o navegador ignorar o resto da página.
- _Elementos pais permitidos_ Um elemento {{ HTMLElement("head") }} que não contenha outro elemento {{ HTMLElement("title") }}.
- _Funções ARIA permitidas_ Nenhuma.
- _Interface DOM_ {{domxref("HTMLTitleElement")}}

## Atributos

Este elemento inclui somente os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## Notas de uso

O elemento `<title>` é sempre usado dentro da {{HTMLElement("head")}} da página.

## Exemplo

```html
<title>Título incrível</title>
```

## Preocupações de acessibilidade

É importante informar um valor para o `title` que descreva o propósito da página.

Uma técnica comum de navegação para usuários de tecnologias assistivas é ler o título da página a fim de deduzir o que ela contém. Isso ocorre porque navegar pela página para determinar o conteúdo dela pode ser confuso e consumir muito tempo.

#### Exemplo

```html
<title>
  Menu - Casa Azul Comida Chinesa - FoodYum: Faça seu pedido online!
</title>
```

Para ajudar o usuário, atualize o valor do `title` para refletir mudanças significativas no estado da página (como problemas de validação em formulários).

#### Exemplo

```
<title>2 erros - Seu pedido - Casa Azul Comida Chinesa - FoodYum: Faça seu pedido online!</title>
```

## Especificações

| Especificação                                                                          | Status                   | Comentário |
| -------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-title-element', '&lt;title&gt;')}}       | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-title-element', '&lt;title&gt;')}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.4.2', '&lt;title&gt;')}}                | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.title")}}
