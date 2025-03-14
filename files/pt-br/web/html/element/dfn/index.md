---
title: <dfn>
slug: Web/HTML/Element/dfn
---

## Resumo

O elemento **HTML `<dfn>` **(ou _Elemento Definição_ _HTML_) representa uma instância de definição de um termo.

> **Note:** **Notas de uso no** **HTML5:**- O elemento `<dfn>` marca o termo que será definido; a definição do termo deve ser data em torno de {{HTMLElement("p")}}, {{HTMLElement("section")}} ou uma lista de definições por grupo (usualmente um {{HTMLElement("dt")}}, {{HTMLElement("dd")}} pareado com o {{HTMLElement("dt")}}).
>
> - O valor exato do termo a ser definido é determinado pelas seguintes regras:
>
>   1. Se o elemento \<dfn> tiver um atributo title, então o termo é o valor deste atributo.
>   2. Senão, se contiver somente um elemento {{HTMLElement("abbr")}} com um atributo [`title`](/pt-BR/docs/Web/HTML/Element/abbr#title), então o termo é o valor deste atributo.
>   3. Caso contrário, o conteúdo do texto do elemento `<dfn>` é o termo a ser definido.

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Conteúdo de fluxo](/pt-BR/docs/Web/HTML/Content_categories#flow_content), [Conteúdo de fraseamento](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content), conetúdo palpável.
- _Conteúdo permitido_ [Conteúdo de fraseamento](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content), mas um elemento {{HTMLElement("dfn")}} não deve ser um descendente.
- _Omissão de tag_ Nenhuma, tanto a tag inicial quanto a final são obrigatórias.
- _Elementos pais permitidos_ Qualquer elemento que aceite [conteúdo de fraseamento](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content).
- _Interface DOM_ {{domxref("HTMLElement")}}

## Atributos

Esse elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

No HTML5, o atributo **title** tem um significado especial, como mencionado acima.

## Exemplos

Os exemplos a seguir são válidos em HTML5.

```html
<!-- Define "A Internet" -->
<p>
  <dfn id="def-internet">A Internet</dfn> é um sistema global de redes
  interconectadas que usam o Internet Protocol Suite (TCP/IP) para servir
  bilhões de usuários no mundo todo.
</p>
```

Posteriormente no mesmo documento:

```html
<dl>
  <!-- Define "World-Wide Web" a definição de referência para "A Internet" -->
  <dt>
    <dfn>
      <abbr title="World-Wide Web">WWW</abbr>
    </dfn>
  </dt>
  <dd>
    A World-Wide Web (WWW) é um sistema de documentos de hipertexto interligados
    acessados pela <a href="#def-internet">Internet</a>.
  </dd>
</dl>
```

### Resultado

_A Internet_ é um sistema global de redes interconectadas que usam o Internet Protocol Suite (TCP/IP) para servir bilhões de usuários no mundo todo.

- _WWW_
  - : A World-Wide Web (WWW) é um sistema de documentos de hipertexto interligados acessados pela [Internet](#def-internet).

## Especificações

{{Specifications}}

## Navegadores compatíveis

{{Compat}}

## Veja também

- Elementos relacionados à lista de definições: {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, {{HTMLElement("dd")}}
- {{HTMLElement("abbr")}}

{{HTMLSidebar}}
