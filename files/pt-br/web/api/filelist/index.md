---
title: FileList
slug: Web/API/FileList
---

{{APIRef("File API")}}

Um objeto desse tipo é retornado pela propriedade `files` do elemento HTML {{HTMLElement("input")}}; isso permite acessar a lista de arquivos selecionados com o elemento `<input type="file">`. Também é usado para uma lista de arquivos soltos no conteúdo web usando a API drag and drop; consulte o objeto [`DataTransfer`](/pt-BR/docs/DragDrop/DataTransfer) para detalhes de seu uso.

> **Nota:** Antes do Gecko 1.9.2, o elemento input suportava apenas um arquivo selecionado por vez, ou seja, o array FileList conteria apenas um arquivo. A partir do Gecko 1.9.2, se o atributo multiple do elemento for definido, FileList pode conter múltiplos arquivos.

## Utilizando a lista de arquivos

Todo elemento `<input>` possui um array `files` que permite o acesso aos seus arquivos. Por exemplo, se o HTML inclui o seguinte elemento:

```
<input id="fileItem" type="file">
```

O código a seguir acessa o primeiro elemento da lista de arquivos como um objeto [`File`](/pt-BR/docs/DOM/File):

```js
var file = document.getElementById("fileItem").files[0];
```

## Visão geral dos métodos

| `File item(index);` |
| ------------------- |

## Propriedades

| Atributo | Tipo      | Descrição                                                       |
| -------- | --------- | --------------------------------------------------------------- |
| `length` | `integer` | Valor somente-leitura que indica o número de arquivos na lista. |

## Métodos

### item()

Retorna um objeto [`File`](/pt-BR/docs/DOM/File) representando o arquivo no índice especificado na lista.

```
 File item(
   index
 );
```

###### Parâmetros

- `index`
  - : O índice (baseado em zero) do arquivo a ser recuperado da lista.

###### Valor de retorno

O objeto [`File`](/pt-BR/docs/DOM/File) representando o arquivo requisitado.

## Exemplo

Este exemplo itera por todos os arquivos selecionados pelo usuário em um elemento `input`:

```js
// fileInput é um elemento HTML input: <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files é um objeto FileList (similar ao NodeList)
var files = fileInput.files;
var file;

// percorre os arquivos
for (var i = 0; i < files.length; i++) {
  // obtém o item
  file = files.item(i);
  // ou
  file = files[i];

  alert(file.name);
}
```

A seguir, um exemplo completo.

```html
<!doctype html>
<html>
  <head> </head>

  <body>
    <!--multiple é definido para que múltiplos arquivos possam ser selecionados-->

    <input id="myfiles" multiple type="file" />
  </body>

  <script>
    var puxarArquivos = function () {
      var fileInput = document.querySelector("#myfiles");
      var files = fileInput.files;

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        alert(file.name);
      }
    };

    // seta o 'onchange' do elemento input para chamar a função puxarArquivos
    document.querySelector("#myfiles").onchange = puxarArquivos;
  </script>
</html>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
