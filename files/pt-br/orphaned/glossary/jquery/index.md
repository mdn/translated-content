---
title: jQuery
slug: orphaned/Glossary/jQuery
---

**jQuery** é uma {{Glossary("Biblioteca")}} {{Glossary("JavaScript")}} que visa a simplificação na manipulação do {{Glossary("DOM")}} , nas chamadas de {{Glossary("AJAX")}} e no gerenciamento de {{Glossary("Eventos")}} . É muito utilizado por desenvolvedores de Javascript.

jQuery usa o formato `$(seletor).acão()` para atribuir um evento a um elemento. Resumindo, `$(seletor)` chamará jQuery, que selecionará elemento(s) com base no 'seletor' e atribuirá um evento {{Glossary("API")}} chamado `.acão()`.

```js
$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});
```

O codigo acima tem a mesma funcionalidade que o codigo abaixo:

```js
window.onload = function() {
  alert( "Hello World!" );
  document.getElementById("blackBox").style.display = "none";
};
```

## Download jQuery

| **npm**              | bower (solo file)                                           | Google CDN                                                         |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| `npm install jquery` | `bower install https://code.jquery.com/jquery-3.2.1.min.js` | `https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js` |

## Veja mais

### General knowledge

- [jQuery](https://pt.wikipedia.org/wiki/jQuery) on Wikipedia
- Web site oficial [jQuery](https://jquery.com/)

### Technical information

- [API reference documentation](https://api.jquery.com/)
