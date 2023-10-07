---
title: Usando o atributo aria-describedby
slug: orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
---

### Descrição

O atributo [`aria-describedby`](https://www.w3.org/TR/wai-aria/#aria-describedby) é usado para indicar os IDs dos elementos que descrevem o objeto. Isso é usado para estabelecer um relacionamento entre widgets ou grupos e texto que descrevem eles. Isso é muito similar ao [aria-labelledby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute "Using the aria-labelledby attribute"): um rótulo (label) que descreve a essência de um objeto, enquanto a descrição fornece mais informação do que o usuário pode precisar.

O atributo `aria-describedby` não é usado apenas para elementos de formulário; ele também é usado para associar texto estático com widgets, grupos de elementos, paineis, regiões que tem um cabeçalho, definiões e mais. A seção abaixo fornece mais informação sobre como usar o atributo nesses casos.

O atributo pode ser usando em qualquer elemento típico de um formulário HTML; isso não é limitado a elementos que tem um `role` ARIA atribuído.

### Valor

uma lista de IDs de elementos separados por um espaço

### Efeitos possíveis em user agents e tecnologia assistiva

> **Nota:**Opiniões podem difererir em como a tecnologia assistiva deve lidar com essa técnica. A informação fornecida abaixo é uma dessas opiniões e, portanto, não normativa.

### Exemplos

#### Exemplo 1: Descrições do ponto de referência do aplicativo

No exemplo abaixo, um parágrafo introdutório descreve uma aplicação de calendário. O `aria-describedby` é usado para associar o parágrado com o container da aplicação.

```html
<div role="application" aria-labelledby="calendar" aria-describedby="info">
    <h1 id="calendar">Calendário</h1>
    <p id="info">
        Esse calendário mostra a data do jogo do Boston Red Sox.
    </p>
    <div role="grid">
        ...
    </div>
</div>
```

#### Exemplo 2: Um botão de fechar

No exemplo abaixo, um link que funciona como um botão de "fechar" num diálogo é descrito em outro lugar do documento.O atributo aria-describedby é usado para associar a descrição com o link.

```html
<button aria-label="Close" aria-describedby="descriptionClose"
    onclick="myDialog.close()">X</button>

...

<div id="descriptionClose">Fechar esta janela irá descartar qualquer informação inserida e
retornará você para a página principal</div>
```

### Notas

- O `aria-describedby` atribuido não é designado para referenciar descrições de um recurso externo — já que é um ID, ele deve referenciar um elemento do mesmo documento DOM.

### Usado pelos roles de ARIA

todos os elementos do markup base

### Técnicas relacionadas ao ARIA

- [Usando o atributo aria-labelledby](/en/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute "en/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute")

### Compatibilidade

Ainda não foi definido: Adicionar suporte a informação comum de combinações de produtos UA e AT

### Recursos adicionais

- [WAI-ARIA especificação para aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby)
