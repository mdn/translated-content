---
title: Seletores de classe
slug: Web/CSS/Class_selectors
---

O **seletor de classes** [CSS](/pt-BR/docs/Web/CSS) corresponde aos elementos com base no conteúdo de seus atributos `class.`

```css
/* Todos os elementos com class="espaçoso" */
.espaçoso {
  margin: 2em;
}

/* Todos os elementos <li> com class="espaçoso" */
li.espaçoso {
  margin: 2em;
}

/* Todos os elementos <li> cujo conteúdo do atributo class possua "espaçoso" e "elegante" */
/* Por exemplo, class="elegante antigo espaçoso" */
li.espaçoso.elegante {
  margin: 2em;
}
```

## Sintaxe

```
.classe_nome { propriedades de estilo }
```

Observe que isso é o mesmo que [`seletor de atributo`](/pt-BR/docs/Web/CSS/Attribute_selectors):

```
[classe~=classe_nome] { propriedades de estilo  }
```

## Exemplo

### CSS

```css
.vermelho {
  color: #f33;
}

.amarelo-bg {
  background: #ffa;
}

.elegante {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}
```

### HTML

```html
<p class="vermelho">Este parágrafo tem o texto vermelho.</p>
<p class="vermelho amarelo-bg">
  Este parágrafo possui texto em vermelho e fundo amarelo.
</p>
<p class="vermelho elegante">
  Este parágrafo possui texto em vermelho e uma propriedade de estilo
  "elegante".
</p>
<p>Este é um parágrafo comum.</p>
```

### Resultado

{{EmbedLiveSample('Example')}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
