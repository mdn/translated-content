---
title: Window.document
slug: Web/API/Window/document
---

{{APIRef}}

## Resumo

Retorna a referência para o documento contido na janela.

> **Nota:**Firefox 3 altera a segurança para documentos de uma janela de modo que apenas o domínio a partir do qual foi localizado possa acessar o documento. Enquanto isso pode quebrar alguns sites existentes, é um movimento feito por ambos Firefox 3 e Internet Explorer 7, e resulta na melhoria de segurança.

## Sintaxe

```
doc = window.document
```

### Parâmetros

- `doc` é um objeto referência de um objeto para um [document](/pt-BR/docs/Web/API/Document).

## Exemplo

```js
<!DOCTYPE html>
<html>
<head>
   <title>Hello, World!</title>
</head>
<body>

<script type="text/javascript">
   var doc = window.document;
   alert( doc.title);    // alerts: Hello, World!
</script>

</body>
</html>
```

## Especificação

- [HTML](https://www.whatwg.org/html/#the-window-object)
