---
title: dl
slug: Web/HTML/Element/dl
---

## Resumo

O elemento HTML _Definition List_ (`<dl>`) engloba uma lista de pares de termos e descrições. Um uso comum para este elemento é para implementar um glossário ou exibir metadados(uma lista de pares chave e valor).

## Contexto de Uso

| Conteúdo permitido     | Zero ou mais elementos {{ HTMLElement("dt") }}, cada um seguido de um ou mais elementos {{ HTMLElement("dd") }}                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omissão de Tag         | Nenhum, este é um {{Glossary("elemento vazio")}}.                                                                                                                           |
| Permite elementos pai  | Qualquer elemento que aceite [conteúdo de fluxo](/pt-BR/HTML/Content_categories#flow_content).                                                                              |
| Documentação normativa | [HTML5, section 4.5.8](https://www.w3.org/TR/html5/grouping-content.html#the-dl-element); [HTML 4.01, section 10.3](https://www.w3.org/TR/html401/struct/lists.html#h-10.3) |

## Atributos

Como todo elemento HTML, ele fornece os [attributos globais](/pt-BR/HTML/Global_attributes).

- {{ htmlattrdef("compact") }} {{ Non-standard_inline() }}
  - : Obriga a definição da descrição aparecer na mesma linha que a definição do termo. Funciona apenas no Internet Explorer.

## Exemplos

### Termo e definição única

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- other terms and definitions -->
</dl>
```

Output:

![Image:HTML-dl1.png](/@api/deki/files/241/=HTML-dl1.png)

### Múltiplos termos, definição única

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- other terms and definitions -->
</dl>
```

Saída:

![Image:HTML-dl2.png](/@api/deki/files/242/=HTML-dl2.png)

### Termo único, múltiplas definições

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger than a domestic cat (60 cm long).
  </dd>

  <!-- other terms and definitions -->
</dl>
```

Saída:

![Image:HTML-dl3.png](/@api/deki/files/243/=HTML-dl3.png)

### Múltiplos termos e definições

Também é possível definir vários termos com as definições múltiplas correspondentes, combinando com os exemplos acima.

## Interface DOM

- [HTMLDListElement](/pt-BR/DOM/HTMLDListElement)

## Notas

Não use este elemento, (nor {{ HTMLElement("ul") }} elements), para criar meramente um recuo em uma página. Embora ele funcione, está é uma má prática e obscurece o significado da lista de definição.

Para mudar a indentação de um termo, use a propriedade [CSS](/pt-BR/CSS) [margin](/pt-BR/CSS/margin).

## Compatibilidade de navegadores

{{Compat("html.elements.dl")}}

## Veja também

- Elemento {{ HTMLElement("dt") }}
- Elemento {{ HTMLElement("dd") }}

{{HTMLSidebar}}
