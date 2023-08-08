---
title: <head>
slug: Web/HTML/Element/head
---

{{HTMLSidebar}}

O elemento **HTML `<head>` providencia informações gerais** (metadados) sobre o documento, incluindo seu título e links para scripts e folhas de estilos.

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/pt-BR/docs/Web/HTML/Content_categories"
          >Categoria de conteúdo</a
        >
      </th>
      <td>Nenhuma.</td>
    </tr>
    <tr>
      <th>Conteúdo permitido</th>
      <td>
        <p>Se o elemento é um {{HTMLElement("iframe")}}</p>
        <p>
          <a href="/pt-BR/docs/Web/HTML/Element/iframe#srcdoc"><code>srcdoc</code></a>, ou se a informação
          do título está sendo avaliada desde um nivel alto do protocolo, zero
          ou mais elementos de conteúdo de metadados.
        </p>
        <p>
          Por outro lado, um ou mais elementos de conteúdo de metadados onde
          exatamente um é um {{HTMLElement("title")}} elemento.
        </p>
      </td>
    </tr>
    <tr>
      <th>Omissão de tag</th>
      <td>
        <p>
          A tag inicial pode ser omitida se a primeira coisa dentro do head
          elemento é um elemento.
        </p>
        <p>
          A tag final pode ser omitida se a primeira coisa seguindo o elemento
          head não é um caractere espaço ou um comentário.
        </p>
      </td>
    </tr>
    <tr>
      <th>Elementos parentes permitidos</th>
      <td>
        Um {{HTMLElement("html")}} elemento, como primeiro filho.
      </td>
    </tr>
    <tr>
      <th>DOM interface</th>
      <td>{{domxref("HTMLHeadElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributos

Estes elementos incluem os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("profile")}}
  - : A URIs de um ou mais perfis de metadados , separado por espaço em branco.

## Exemplo

```html
<html>
  <head>
    <title>Document title</title>
  </head>
</html>
```

## Notas

Moderno, HTML5-compatível browsers automaticamente constrói um elemento `<head>` se as tags forem omitidas na marcação. [Este comportamento não pode ser garantido por browsers antigos.](http://www.stevesouders.com/blog/2010/05/12/autohead-my-first-browserscope-user-test/)

Especificações

| Especificação                                                                        | Estado                   | Comentário                              |
| ------------------------------------------------------------------------------------ | ------------------------ | --------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-head-element', '&lt;head&gt;')}}       | {{Spec2('HTML WHATWG')}} | Nenhuma mudança desde o último shapshot |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-head-element', '&lt;head&gt;')}} | {{Spec2('HTML5 W3C')}}   | Perfil Obsoleto                         |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.4.1', '&lt;head&gt;')}}               | {{Spec2('HTML4.01')}}    |                                         |

## Compatibilidade com navegadores

{{Compat("html.elements.head")}}

## See also

- Elementos que podem ser usados dentro de um `<head>` element: {{HTMLElement("title")}}, {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("style")}}, {{HTMLElement("meta")}}, {{HTMLElement("script")}}, {{HTMLElement("noscript")}}
