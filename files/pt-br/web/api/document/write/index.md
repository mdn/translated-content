---
title: Document.write()
slug: Web/API/Document/write
---

{{ApiRef("DOM")}}

O método **`Document.write()`** grava uma sequência de caracteres em um documento aberto por {{domxref("document.open()")}}.

> **Nota:** à medida que `document.write` grava no **fluxo** de documentos, chamando `document.write` em um documento fechado (carregado) invoca automaticamente `document.open`, [que limpará o documento](/pt-BR/docs/Web/API/document.open#Notes).

## Sintaxe

```js
document.write(markup);
```

### Parametros

- _markup_
  - : Uma string contendo o texto a ser gravado no documento.

### Exemplo

```html
<html>
  <head>
    <title>Escreva exemplo</title>

    <script>
      function newContent() {
        document.open();
        document.write("<h1>Sair com o velho - entrar com o novo!</h1>");
        document.close();
      }
    </script>
  </head>

  <body onload="newContent();">
    <p>Algum conteúdo do documento original.</p>
  </body>
</html>
```

{{EmbedLiveSample("Syntax")}}

## Notas

Escrevendo em um documento que já foi carregado sem chamar {{domxref("document.open()")}} automaticamente vai chamar `document.open`. Ao términno da escrita, é recomendável chamar {{domxref("document.close()")}} para dizer ao navegador para encerrar o carregamento da página. O texto que você escreve é analisado no modelo de estrutura do documento. No exemplo acima, o elemento `h1` se torna um nó (node) no documento.

Se chamar `document.write()` incorporada em uma tag HTML `<script>` embutida, então `document.open()` não será chamada. Por exemplo:

```html
<script>
  document.write("<h1>Título principal</h1>");
</script>
```

> **Nota:** `document.write` e {{domxref("document.writeln")}} [não funcionam em documentos XHTML](/pt-BR/docs/Archive/Web/Writing_JavaScript_for_HTML) (você receberá o erro "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] no console de erros). Isso acontece ao abrir um arquivo local com a extensão .xhtml ou em qualquer documento exibido com um MIME type `application/xhtml+xml` {{Glossary("MIME type")}}. Mais informações disponíveis em [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> **Nota:** `document.write` em [deferred](/pt-BR/docs/Web/HTML/Element/script#attr-defer) ou [asynchronous](/pt-BR/docs/Web/HTML/Element/script#attr-async) scripts será ignorado, e você receberá uma mensagem como "A call to `document.write()` from an asynchronously-loaded external script was ignored" no console de erros.

> **Nota:** Somente no Edge, chamando `document.write` mais de uma vez em {{HTMLElement("iframe")}} causa o erro "SCRIPT70: Permission denied".

> **Nota:** A partir de 55, Chrome não executará elementos `<script>` injetados via `document.write()` caso haja falta de cache HTTP para usuários em uma conexão 2G. Há [uma lista de condições](https://developers.google.com/web/updates/2016/08/removing-document-write) que precisam ser atendidas para que isso seja verdade.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
