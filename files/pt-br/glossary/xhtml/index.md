---
title: XHTML
slug: Glossary/XHTML
---

O [HTML](/pt-BR/docs/HTML) pode ser transferido através da internet para o navegador usando duas sintaxes: sintaxe HTML e sintaxe [XML](/pt-BR/docs/XML), também conhecido como XHTML.

## HTML5 e HTML/XHTML

Ambas as sintaxes são definidas através do padrão [HTML5](/pt-BR/docs/HTML/HTML5). A escolha da sintaxe é dedicada ao tipo MIME, que é enviado no cabeçalho HTTP `Content-Type` . O tipo MIME para sintaxe HTML é `text/html`, e o tipo MIME para sintaxe XHTML é `aplication/xhtml+xml`.

O exemplo mostra um documento HTML e um XHTML incluindo os cabeçalhos relevantes do HTTP.

### Documento HTML

```html
<!-- Content-Type: text/html -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>Eu sou um documento HTML</p>
  </body>
</html>
```

### Documento XHTML

```xml
<!-- Content-Type: application/xhtml+xml -->

<html xml:lang="en" xmlns="https://www.w3.org/1999/xhtml">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>Eu sou um documento XHTML</p>
  </body>
</html>
```

## Tipo MIME contra DOCTYPE

Antes do HTML5, as duas sintaxes eram definidas por duas especificações diferentes: [HTML 4.01](https://www.w3.org/TR/html4/) e [XHTML 1.0](https://www.w3.org/TR/xhtml1/). O padrão XHTML1 afirma que você poderia usar XHTML declarando um DOCTYPE especial. Porém, isso nunca foi implementado por nenhum navegador,e tem sido trocado pelo padrão HTML5. **Se sua página é enviada como `text/html` você não pode usar XHTML**.

Observe que o tipo MIME deve ser declarado no `Content-Type` HTTP header. Se você apenas inseriu a meta tag no HTML como `<meta http-equiv=…>`, ele será ignorado e tratado como `text/html`.

Se você apresentar suas páginas `text/html` e acreditar que você está escrevendo XHTML, você poderá enfrentar vários problemas, tal como descritos nos seguintes artigos:

- [No to XHTML](http://www.spartanicus.utvinternet.ie/no-xhtml.htm) um artigo excelente do Spartanicus
- [Beware of XHTML](http://www.webdevout.net/articles/beware-of-xhtml) por David Hammond
- [Sending XHTML as text/html Considered Harmful](http://www.hixie.ch/advocacy/xhtml) por Ian Hickson
- [XHTML's Dirty Little Secret](http://www.xml.com/pub/a/2003/03/19/dive-into-xml.html) por Mark Pilgrim
- [XHTML - What's the Point?](http://hsivonen.iki.fi/xhtml-the-point/) por Henri Sivonen
- [XHTML is not for Beginners](http://lachy.id.au/log/2005/12/xhtml-beginners) por Lachlan Hunt

## Suporte

O XHTML é suportado pela maioria dos navegadores modernos, incluindo Firefox, Chrome, Safari, e Opera. Entretanto, o Internet Explorer suporta XHTML somente a partir da versão 9. O Internet Explorer 8 e suas versões mais antigas mostrarão uma mensagem de tipo de arquivo desconhecido quando aberto um documento XHTML com o tipo XHTML MIME correto.

Também é bom observar que muitas bibliotecas populars de JavaScript e ferramentas para desenvolvedores não suportam XHTML ou tem suporte limitado.

## Diferenças entre HTML

Veja [Properly Using CSS and JavaScript in XHTML Documents](/pt-BR/docs/Properly_Using_CSS_and_JavaScript_in_XHTML_Documents) para uma lista com algumas das diferenças entre HTML e XHTML.

## Ferramentas

- [Standards-Compliant Authoring Tools](/pt-BR/docs/Standards-Compliant_Authoring_Tools)

## Veja também

- [HTML](/pt-BR/docs/HTML)
- [Namespaces](/pt-BR/docs/Namespaces)
