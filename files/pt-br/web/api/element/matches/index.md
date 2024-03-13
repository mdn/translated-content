---
title: Element.matches()
slug: Web/API/Element/matches
---

{{APIRef("DOM")}}

O método **`Element.matches()`** retorna verdadeiro se o elemento puder ser selecionado pela sequência de caracteres específica; caso contrário retorna falso.

> **Aviso:** Diversos navegadores implementam isto, prefixado, sob nome não padronizado `matchesSelector()`.

## Sintaxe

```
var result = element.matches(selectorString);
```

- `result contém o valor de retorno true ou false.`
- `selectorString` é uma string representando o seletor para teste.

## Exemplo

```html
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>

<script type="text/javascript">
  var birds = document.getElementsByTagName("li");

  for (var i = 0; i < birds.length; i++) {
    if (birds[i].matches(".endangered")) {
      console.log("The " + birds[i].textContent + " is endangered!");
    }
  }
</script>
```

Isto irá logar "The Philippine eagle is endangered!" para o console, desde que o elemento tenha de fato um atributo de classe com o valor `endangered`.

## Exceções

- `SYNTAX_ERR`
  - : O seletor de string específico é inválido.

## Polyfill

Para navegadores que não suportam `Element.matches()` ou `Element.matchesSelector()`, mass possuem suporte para `document.querySelectorAll()`, existe um polyfill:

```
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
