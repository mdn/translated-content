---
title: Document.getElementsByName()
slug: Web/API/Document/getElementsByName
---

{{APIRef("DOM")}}

O método**`getElementsByName()`** do objeto {{domxref("Document")}} retorna uma coleção de elementos {{domxref("NodeList")}} com um dado {{domxref("element.name","name")}} no documento.

## Sintaxe

```
var elementos = document.getElementsByName(nome);
```

- _elementos_ é uma coleção ativa de {{domxref("NodeList")}}, significando que ele atualiza automaticamente com os novos elementos com o mesmo `nome` que são adicionados/removidos do documento.
- _nome_ é um valor do atributo `nome` dos elemento(s).

## Exemplo

```html
<!doctype html>
<html lang="en">
  <title>Exemplo: usando document.getElementsByName</title>

  <input type="hidden" name="up" />
  <input type="hidden" name="down" />

  <script>
    var up_nomes = document.getElementsByName("up");
    console.log(up_nomes[0].tagName); // exibindo o campo "INPUT"
  </script>
</html>
```

## Notas

O atributo {{domxref("element.name","name")}} pode somente ser aplicado nos documentos (X)HTML.

A coleção retornada {{domxref("NodeList")}} contém _todos_ os elementos com o respectivo `nome`, tal como {{htmlelement("meta")}}, {{htmlelement("object")}}, e até os elementos o qual não suporta o atributo `nome` para todos.

> **Aviso:** O método **getElementsByName** trabalha diferentemente em IE10 e anteriores. Além de que, `getElementsByName()` também retorna elementos que tem um [atributo `id`](/pt-BR/docs/Web/HTML/Global_attributes/id) com o valor especificado. Seja cuidadoso para não usar a mesma string como ambos `nome` e `id`.

> **Aviso:** O método **getElementsByName** trabalha diferentemente no IE. Portanto, `getElementsByName()` não retorna todos os elementos no qual não pode ter um atributo `nome` (tal como `<span>`).

> **Aviso:** Ambos IE e Edge retorna um {{domxref("HTMLCollection")}}, e não um {{domxref("NodeList")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("document.getElementById()")}} para retornar uma referência para um elemento por um único `id`
- {{domxref("document.getElementsByTagName()")}} para retornar referências para elementos com o mesmo [nome](/pt-BR/docs/Web/API/Element/tagName) [tag](/pt-BR/docs/Web/API/Element/tagName)
- {{domxref("document.querySelector()")}} para retornar referências para elementos via seletores CSS como `'div.myclass'`
