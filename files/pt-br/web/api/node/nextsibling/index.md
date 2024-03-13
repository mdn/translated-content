---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
---

{{ApiRef("DOM")}}

## Resumo

Retorna o nó seguinte ao especificado dentro do lista de filhos do seu pai({{domxref("Node.childNodes","childNodes")}}), ou `null` se o nó especificado for o último nó da lista.

## Sintaxe

```
proximoNo = no.nextSibling
```

## Exemplo

```html
<div id="div-01">Aqui esta a div-01</div>
<div id="div-02">Aqui esta a div-02</div>

<script type="text/javascript">
  var el = document.getElementById("div-01").nextSibling;

  document.write("<p>Nós irmãos de div-01</p><ol>");

  while (el) {
    document.write("<li>" + el.nodeName + "</li>");
    el = el.nextSibling;
  }

  document.write("</ol>");
</script>

<!--
     O seguinte texto será escrito na página quando ela carregar:

     Nós irmãos de div-01

      1. #text
      2. DIV
      3. #text
      4. SCRIPT
      5. P
      6. OL
-->
```

No exemplo acima, pode ser visto que nós `#text` são inseridos no DOM onde espaços em branco aparecem na marcação entre as tags (ex.: após o fechamento da tag de um elemento e antes da abertura da próxima tag). Nenhum espaço em branco é criado entre elementos inseridos pelo comando `document.write`.

A possível inclusão de nós de texto no DOM deve ser permitida quando navegar pelo mesmo usando `nextSibling`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
