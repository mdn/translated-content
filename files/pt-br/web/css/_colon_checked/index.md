---
title: :checked
slug: Web/CSS/:checked
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) **`:checked`** de um seletor CSS representa um elemento **radio** (`<input type="radio">`), **checkbox** (`<input type="checkbox">`) ou **option** ({{ HTMLElement("option") }} em um {{ HTMLElement("select") }}) que está marcada ou alternado para um estado ligado. O usuário pode mudar seu estado clicando no elemento, ou selecionando um valor diferente, nesse caso a pseudo-classe **:checked** não se aplica a esse elemento, mas vai para um elemento relevante.

## Sintaxe

```css
input:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

### Sintaxe formal

```
elemento:checked { estilos de propriedades }
```

## Exemplos

### Exemplo de seletores

```css
/* qualquer elemento "checkable" */
:checked {
  width: 50px;
  height: 50px;
}

/* qualquer elemento radio */
input[type="radio"]:checked {
  margin-left: 25px;
}

/* apenas elementos checkbox */
input[type="checkbox"]:checked {
  display: none;
}

/* apenas elementos option */
option:checked {
  color: red;
}
```

- `input[type="radio"]:checked`
  - : Representa todos os botões de rádio na página que estão ativos
- `input[type="checkbox"]:checked`
  - : Representa todos os checkboxes na página que estão ativos
- `option:checked`
  - : Representa todos os selects na página que estão selecionados

### Usando checkboxes escodindos para armazenar algum valor booleano

A pseudo-classe `:checked` aplicada em checkboxes escondidos, adicionado ao início de sua página pode
ser aplicada de forma a armazenar algum booleano dinâmico para ser usado por uma regra CSS. O exemplo a seguir mostra como exibir/esconder um elemento expansível com um simples clique em um botão ([download esse demo](expandable-elements.html)).

```css
#expand-btn {
  margin: 0 3px;
  display: inline-block;
  font:
    12px / 13px "Lucida Grande",
    sans-serif;
  text-shadow: rgba(255, 255, 255, 0.4) 0 1px;
  padding: 3px 6px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  background-color: #969696;
  cursor: default;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -moz-box-shadow:
    rgba(255, 255, 255, 0.4) 0 1px,
    inset 0 20px 20px -10px white;
  -webkit-box-shadow:
    rgba(255, 255, 255, 0.4) 0 1px,
    inset 0 20px 20px -10px white;
  box-shadow:
    rgba(255, 255, 255, 0.4) 0 1px,
    inset 0 20px 20px -10px white;
}

#isexpanded:checked ~ #expand-btn,
#isexpanded:checked ~ * #expand-btn {
  background: #b5b5b5;
  -moz-box-shadow:
    inset rgba(0, 0, 0, 0.4) 0 -5px 12px,
    inset rgba(0, 0, 0, 1) 0 1px 3px,
    rgba(255, 255, 255, 0.4) 0 1px;
  -webkit-box-shadow:
    inset rgba(0, 0, 0, 0.4) 0 -5px 12px,
    inset rgba(0, 0, 0, 1) 0 1px 3px,
    rgba(255, 255, 255, 0.4) 0 1px;
  box-shadow:
    inset rgba(0, 0, 0, 0.4) 0 -5px 12px,
    inset rgba(0, 0, 0, 1) 0 1px 3px,
    rgba(255, 255, 255, 0.4) 0 1px;
}

#isexpanded,
.expandable {
  display: none;
}

#isexpanded:checked ~ * tr.expandable {
  display: table-row;
  background: #cccccc;
}

#isexpanded:checked ~ p.expandable,
#isexpanded:checked ~ * p.expandable {
  display: block;
  background: #cccccc;
}
```

```html
<input type="checkbox" id="isexpanded" />

<h1>Elementos expansíveis</h1>
<table>
    <thead>
        <tr><th>Coluna #1</th><th>Coluna #2</th><th>Coluna #3</th></tr>
    </thead>
    <tbody>
        <tr class="expandable"><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
        <tr><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
        <tr><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
        <tr class="expandable"><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
        <tr class="expandable"><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
    </tbody>
</table>

<p>[some sample text]</p>
<p><label for="isexpanded" id="expand-btn">Mostra ou esconder elementos</label></p>
<p class="expandable">[outra amostra de texto]</p>
<p>[alguma amostra de texto]</p>
</body>
</html>
```

{{EmbedLiveSample("Usando_checkboxes_escodindos_para_armazenar_algum_valor_booleano", "auto", 220)}}

### Usando radioboxes escondidos para armazenar algum valor CSS booleano

Você também pode usar a pseudo-classe `:checked`aplicada a um radioboxe escondido afim de construir, por exemplo, uma **galeria de imagem onde as imagens apenas sejam exibidas no tamanho cheio com o clique do mouse em visualizar.** Veja [essa demonstração](css-checked-gallery.zip) como uma dica.

> [!NOTE]
> Para um efeito análogo, mas baseada na pseudo-classe [`:hover`](/pt-BR/docs/Web/CSS/%3Ahover) sem radioboxes escondidos, veja [essa demostração](css-gallery.zip), tomadas a partir de uma página [`:hover`](/pt-BR/docs/Web/CSS/%3Ahover).

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}
