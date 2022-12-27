---
title: FormData.delete()
slug: Web/API/FormData/delete
translation_of: Web/API/FormData/delete
---
{{APIRef("XMLHttpRequest")}}

O metodo **`delete()`** da interface {{domxref("FormData")}} deleta uma chave/valor pares do Objecto `FormData` .

> **Nota:** Este metodo esta Disponivel em [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

```js
formData.delete(name);
```

### Parametros

- `name`
  - : O name da chave que desejas apagar.

### Retorna

Void.

## Exemplo

Esta linha cria um objecto `FormData` vazio e subistitui com a chave/valor pares de form:

```js
var formData = new FormData(myForm);
```

Podes deletar chave/valor pares usando `delete()`:

```js
formData.delete('username');
```

## Specificasões

| Specificasões                                                                        | Status                               | Comment |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------- |
| {{SpecName('XMLHttpRequest','#dom-formdata-delete','delete()')}} | {{Spec2('XMLHttpRequest')}} |         |

## Compatibilidade com navegadores

{{Compat("api.FormData.delete")}}

## Veja Tambem

- {{domxref("XMLHTTPRequest")}}
- [Usando XMLHttpRequest](/pt-BR/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Usando Objecto FormData](/pt-BR/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
