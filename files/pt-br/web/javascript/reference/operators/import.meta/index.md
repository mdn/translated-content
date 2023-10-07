---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
---

{{JSSidebar("Statements")}}

O objeto **`import.meta`** mostra os metadados específicos do contexto de um módulo JavaScript. Ele contém informações sobre o módulo, como a sua URL.

## Sintaxe

```
import.meta
```

## Descrição

A sintaxe consiste na palavra chave {{JSxRef("Statements/import","import")}}, um ponto, e o identificador `meta`. Normalmente no lado esquerdo do ponto é o objeto na qual a propriedade de acesso é realizada is, mas aqui `import` não é exatamente um objeto.

O objeto`import.meta` foi criado no implementação ECMAScript,com um protótipo {{JSxRef("null")}}. O objeto é extensível, e suas propriedades são grávaveis, configuráveis, e enumeráveis.

## Exemplos

### Usando import.meta

Dado o modulo `my-module.js`

```html
<script type="module" src="my-module.js"></script>
```

Você pode acessar essa meta informação sobre o modulo usando o objeto `import.meta.`

```js
console.log(import.meta); // { url: "file:///home/user/my-module.js" }
```

Irá retornar um objeto com propriedade URL indicando a base URL do módulo. Isso vai ser o URL da qual o script obteve, por scripts external, ou a base do documento URL contendo documento, para scripts inline.

Note que isso irá incluir parâmetros query e/ou cerquilha (i.e., seguindo o `?` ou `#`).

Por exemplo, seguindo esse HTML:

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

O arquivo JavaScript a seguir vai registrar o parâmetro `someURLInfo`:

```js
// index.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

O mesmo se aplica quando um arquivo importa outro:

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Note que enquanto o Node.js vai passar nos parâmetros query (ou na cerquilha) como no exemplo passsado, a partir do Node 14.1.0, a URL com parâmetro query vai dar erro quando carregar no formulário `node --experimental-modules index.mjs?someURLInfo=5` (é tratado como um arquivo ao invés de uma URL nesse contexto).

Nesse arquivo específico, o argumento passado pode ser complementar para ser usado na ampla aplicação `location.href` (com strings query ou cerquilha adicionada depois do caminho de arquivo HTML) (ou por Node.js, através do `process.argv`).

## Especifícações

| Especifícação                                                                             |
| ----------------------------------------------------------------------------------------- |
| [`import.meta`](https://tc39.es/proposal-import-meta/#prod-ImportMeta)                    |
| {{SpecName("HTML WHATWG", "webappapis.html#hostgetimportmetaproperties", "import.meta")}} |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{JSxRef("Statements/import", "import")}}
- {{JSxRef("Statements/export", "export")}}
