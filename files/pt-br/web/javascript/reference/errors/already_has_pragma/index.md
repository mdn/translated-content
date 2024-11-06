---
title: "Warning: -file- is being assigned a //# sourceMappingURL, but already has one"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
---

{{jsSidebar("Errors")}}

O aviso "-file- is being assigned a //# sourceMappingURL, ocorre quando um source map foi especificado mais de uma vez para uma determinada origem JavaScript.

## Mensagem

```
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## Tipo de erro

Um aviso. A execução do JavaScript não será interrompida.

## O que deu errado?

Um source map foi especificado mais de uma vez para uma determinada origem JavaScript.

As fontes JavaScript são frequentemente combinadas e minificadas para tornar a entrega mais eficiente do servidor. Com [source maps](https://developer.chrome.com/blog/sourcemaps/), o depurador pode mapear o código que está sendo executado para os arquivos de origem originais. Há duas maneiras de atribuir um source map, usando um comentário ou definindo um cabeçalho para o arquivo JavaScript.

## Exemplos

### Configurando source maps

Configurando um source map usando um comentário no arquivo:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Ou, alternativamente, você pode definir um cabeçalho para seu arquivo JavaScript:

```http example-good
X-SourceMap: /path/to/file.js.map
```

## Veja também

- [Como usar um source map– Documentação do Firefox Tools](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Introdução aos source maps (2012)](https://developer.chrome.com/blog/sourcemaps/)
