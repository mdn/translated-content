---
title: <body>
slug: Web/HTML/Element/body
---

{{HTMLSidebar}}

O **elemento** `<body>` do **HTML** representa o conteúdo de um documento HTML. è permitido apenas um `<body>` por documento.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo"
          >Categorias</a
        >
      </th>
      <td>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots"
          >Seção raiz</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conte%C3%BAdo_de_fluxo"
          >Conteúdo de fluxo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omissão de tag</dfn></th>
      <td>
        <p>
          A tag inicial pode ser omitida se a primeira coisa dentro do elemento
          não for um espaço, comentário, elemento
          {{HTMLElement("script")}} ou elemento
          {{HTMLElement("style")}}.
        </p>
        <p>
          A tag final pode ser omitida se o elemento body possuir conteúdo ou
          tem uma tag inicial e não é imediatamente seguida por um comentário.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Elementos pais permitidos</dfn></th>
      <td>
        Deve ser o segundo elemento de um elemento
        {{HTMLElement("html")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            O elemento <code>&#x3C;body></code> expõe a interface
            {{domxref("HTMLBodyElement")}}.
          </li>
          <li>
            Você pode acessar o elemento body através do atributo
            {{domxref("document.body")}}.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Estes elementos incluem os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("alink")}}
  - : Cor do texto para hyperlinks quando selecionados. Esse método não está em conformidade, utilize a propriedade _{{cssxref("color")}} em conjunto com a pseudo-classe {{cssxref(":active")}}_
- {{htmlattrdef("background")}}
  - : URI de uma imagem para usar como um papel de parede. Esse método não está em conformidade, utilize a propriedade _CSS {{cssxref("background")}}._
- {{htmlattrdef("bgcolor")}}
  - : Cor de fundo do documento. Esse método não está em conformidade, utilize a propriedade _CSS {{cssxref("background-color")}}._
- {{htmlattrdef("bottommargin")}}
  - : The margin of the bottom of the body. Esse método não está em conformidade, utilize a propriedade _CSS {{cssxref("margin-bottom")}}._
- {{htmlattrdef("leftmargin")}}
  - : The margin of the left of the body. Esse método não está em conformidade, utilize a propriedade _CSS {{cssxref("margin-left")}}._
- {{htmlattrdef("link")}}
  - : Cor de textos de links não visitados. Esse método não está em conformidade, utilize o _{{cssxref("color")}} em conjunto com a pseudo-classe {{cssxref(":link")}}_
- {{htmlattrdef("onafterprint")}}
  - : Função para chamar depois que o usuário solicitou a impressão do documento.
- {{htmlattrdef("onbeforeprint")}}
  - : Função para chamar quando o usuário solicita a impressão do documento.
- {{htmlattrdef("onbeforeunload")}}
  - : Função para chamar quando o documento está prestes a ser descarregado.
- {{htmlattrdef("onblur")}}
  - : Função para chamar quando o documento perde foco.
- {{htmlattrdef("onerror")}}
  - : Função para chamar quando o documento falha ao carregar corretamente.
- {{htmlattrdef("onfocus")}}
  - : Função para chamar quando o documento recebe foco.
- {{htmlattrdef("onhashchange")}}
  - : Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed.
- {{htmlattrdef("onlanguagechange")}} {{experimental_inline}}
  - : Function to call when the preferred languages changed.
- {{htmlattrdef("onload")}}
  - : Função para chamar quando o documento terminar de carregar
- {{htmlattrdef("onmessage")}}
  - : Função para chamar quando o documento receber uma mensagem.
- {{htmlattrdef("onoffline")}}
  - : Função para chamar quando a conexão com a internet falha.
- {{htmlattrdef("ononline")}}
  - : Função para chamar quando a conexão com a internet é restaurada.
- {{htmlattrdef("onpopstate")}}
  - : Function to call when the user has navigated session history.
- {{htmlattrdef("onredo")}}
  - : Function to call when the user has moved forward in undo transaction history.
- {{htmlattrdef("onresize")}}
  - : Function to call when the document has been resized.
- {{htmlattrdef("onstorage")}}
  - : Function to call when the storage area has changed.
- {{htmlattrdef("onundo")}}
  - : Function to call when the user has moved backward in undo transaction history.
- {{htmlattrdef("onunload")}}
  - : Function to call when the document is going away.
- {{htmlattrdef("rightmargin")}}
  - : The margin of the right of the body. _This method is non-conforming, use CSS {{cssxref("margin-right")}} property on the element instead._
- {{htmlattrdef("text")}}
  - : Foreground color of text. _This method is non-conforming, use CSS {{cssxref("color")}} property on the element instead._
- {{htmlattrdef("topmargin")}}
  - : The margin of the top of the body. _This method is non-conforming, use CSS {{cssxref("margin-top")}} property on the element instead._
- {{htmlattrdef("vlink")}}
  - : Cor do texto para links já visitados. Esse método não está em conformidade, utilize a propriedade _CSS {{cssxref("color")}} em conjunto com a pseudo-classe {{cssxref(":visited")}}._

## Especificações

| Especificação                                                                 | Status                   | Comentário                                                                                                                                                                                               |
| ----------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-body-element', '&lt;body&gt;')}} | {{Spec2('HTML WHATWG')}} | Changed the list of non-conforming features.                                                                                                                                                             |
| {{SpecName('HTML5 W3C', 'sections.html#the-body-element', '&lt;body&gt;')}}   | {{Spec2('HTML5 W3C')}}   | Obsoleted the formerly deprecated attributes. Defined the behavior of the non-conforming and never standardized `margintop`, `marginleft`, `marginright` and `marginbottom`. Added the `on*` attributes. |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.1', '&lt;body&gt;')}}        | {{Spec2('HTML4.01')}}    | Deprecated the `alink`, `background`, `bgcolor`, `link`, `text` and `vlink` attributes.                                                                                                                  |

## Compatibilidade com navegadores

{{Compat("html.elements.body")}}

## Veja também

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
