---
title: <bdo>
slug: Web/HTML/Element/bdo
---

{{HTMLSidebar}}

O **_elemento_ HTML `<bdo>` **(_bidirectional override_) é usado para substituir a direcionalidade atual do texto. Isso faz com que a direcionalidade dos personagens seja ignorada em favor da direcionalidade especificada.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Flow content</a
        >,
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>
        {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4)
        inclusive, Firefox implements the
        <code
          ><a href="/pt-BR/docs/Web/API/HTMLSpanElement"
            >HTMLSpanElement</a
          ></code
        >
        interface for this element.
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Os atributos desse elemento incluem os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("dir")}}

  - : Direção de texto neste elemento. Os valores possíveis são:

    - `ltr`: Indica que o texto ficará da **Esquerda para a Direita** (**L**eft-**T**o-**R**ight).
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

| Especificação                                                                        | Status                   | Comentário |
| ------------------------------------------------------------------------------------ | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-bdo-element', '&lt;bdo&gt;')}}         | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-bdo-element', '&lt;bdo&gt;')}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'dirlang.html#h-8.2.4', '&lt;bdo&gt;')}}                      | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.bdo")}}
