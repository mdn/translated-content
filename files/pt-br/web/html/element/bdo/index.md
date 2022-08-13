---
title: <bdo>
slug: Web/HTML/Element/bdo
tags:
  - HTML
  - bdo
  - ltr
  - rtl
translation_of: Web/HTML/Element/bdo
---
{{HTMLRef}}

O **_elemento_ HTML `<bdo>` **(_bidirectional override_) é usado para substituir a direcionalidade atual do texto. Isso faz com que a direcionalidade dos personagens seja ignorada em favor da direcionalidade especificada.

| [Content categories](/pt-BR/docs/HTML/Content_categories) | [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), palpable content.                             |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                         | [Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).                                                                                                                 |
| Tag omission                                              | {{no_tag_omission}}                                                                                                                                                                  |
| Permitted parents                                         | Any element that accepts [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).                                                                                        |
| Permitted ARIA roles                                      | Any                                                                                                                                                                                       |
| DOM interface                                             | {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the [`HTMLSpanElement`](/en-US/docs/Web/API/HTMLSpanElement) interface for this element. |

## Atributos

Os atributos desse elemento incluem os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("dir")}}
  - : Direção de texto neste elemento. Os valores possíveis são:\* `ltr`: Indica que o texto ficará da **Esquerda para a Direita** (**L**eft-**T**o-**R**ight).
    - `rtl`: Indica que o texto ficará da **Direita** **para a Esquerda** (**R**eft-**T**o-**L**ight).

## Exemplos

```html
<!-- Muda a direção do texto -->
<p>Este texto ficará da esquerda para a direita.</p>
<p><bdo dir="rtl">Este texto ficará da direita para a esquerda.</bdo></p>
```

### Resultado

{{EmbedLiveSample('Exemplos')}}

## Notas

A especificação HTML 4 não especificam eventos para este elemento; eles foram adicionados no XHTML. Este é provavelmente um descuido.

## Especificações

| Especificação                                                                                                    | Status                           | Comentário |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-bdo-element', '&lt;bdo&gt;')}}             | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-bdo-element', '&lt;bdo&gt;')}} | {{Spec2('HTML5 W3C')}}     |            |
| {{SpecName('HTML4.01', 'dirlang.html#h-8.2.4', '&lt;bdo&gt;')}}                             | {{Spec2('HTML4.01')}}     |            |

## Compatibilidade com navegadores

{{Compat("html.elements.bdo")}}
