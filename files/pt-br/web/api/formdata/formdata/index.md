---
title: FormData()
slug: Web/API/FormData/FormData
---

{{APIRef("XMLHttpRequest")}}

O **`FormData()`** construtor cria um novo objeto {{domxref("FormData")}}.

> **Nota:** Este recurso está disponível em [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

```js
var formData = new FormData(form);
```

### Parâmetros

- `form` {{optional_inline}}
  - : Um elemento HTML {{HTMLElement("form")}} — quando especifico, o objeto {{domxref("FormData")}} será preenchido com as chaves/valores atuais do formulário usando a propriedade _name_ de cada elemento para as chaves e seu valor enviado para os valores. Também condificará conteúdo de entrada do arquivo.

## Exemplo

A linha a seguir cria um objeto FormData vázio:

```js
var formData = new FormData(); // Currently empty
```

Você poderia adicionar uma chave/valor usando {{domxref("FormData.append")}}:

```js
formData.append("username", "Chris");
```

Ou você pode especificicar o opcional `form` argument ao criar o objeto `FormData`, para o popular com valores de forma especifica:

```html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username" />
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc" />
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile" />
  </div>
  <input type="submit" value="Submit!" />
</form>
```

> **Nota:** Todos os elementos de entrada têm um atributo 'name'. Para que possa acessar seus valores mais tarde.

```js
var myForm = document.getElementById("myForm");
formData = new FormData(myForm);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/pt-BR/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/pt-BR/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
