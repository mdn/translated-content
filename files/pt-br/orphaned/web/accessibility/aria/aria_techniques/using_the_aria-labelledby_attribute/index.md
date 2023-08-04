---
title: Usando o atributo aria-labelledby
slug: orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
---

### Descrição

Essa técnica demonstra como usar o atributo [`aria-labelledby`](https://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby).

O atributo `aria-labelledby` é usado para indicar os IDs de elementos que são os rótulos para o objeto. É usado para estabelecer uma relação entre widgets ou grupos e suas labels. Usuários de tecnologias assistivas como leitores de telas navegam tipicamente uma página através de TABs entre as áreas da tela. Se uma label não está associada com um elemento input, widget ou grupo, não será legível por leitor de tela.

`aria-labelledby` é muito similar ao [aria-describedby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute "en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute"): uma label descreve a essência de um objeto, enquanto uma descrição prove mais informação que o usuário pode precisar.

O atributo `aria-labelledby` não é usado somente para elementos de formulário; é também usado para associar texto estático com widgets, grupos de elementos, painéis, regiões que tem um cabeçalho, definições e mais. A seção [Exemplos](#exemplos) abaixo fornece mais informação sobre como usar os atributos nesses casos.

`aria-labelledby` podem ser usadas em conjunto com o elemento {{ HTMLElement("label") }} (usando o atributo `for`) para melhorar a compatibilidade com user agents que não suportam ainda ARIA.

Esse atributo pode ser usado com qualquer elemento HTML de formulário; não é limitado a elementos que tem uma role ARIA atribuída.

### Value

Uma lista de IDs do elemento separada por espaços

### Possíveis efeitos em user agents e tecnologias assistivas

Quando ambos `aria-labelledby` e [`aria-label`](/en/ARIA/ARIA_Techniques/Using_the_aria-label_attribute "Using the aria-labelledby attribute") são usados, user agents dão precedência ao `aria-labelledby` quando computam o nome da propriedade acessível.

> **Nota:** Opinões podem diferir em como as tecnologias assistivas devem manipular essa técnica. A informação fornecida acima é uma dessas opiniões e portanto não normativa.

### Exemplos

#### Exemplo 1: Múltiplas Labels

No exemplo abaixo, cada campo input é rotulado por tanto por seu próprio rótulo individual como pelo rótulo do grupo:

```html
<div id="billing">Endereço de Cobrança</div>

<div>
    <div id="name">Nome</div>
    <input type="text" aria-labelledby="name billing"/>
</div>
<div>
    <div id="address">Endereço</div>
    <input type="text" aria-labelledby="address billing"/>
</div>
```

#### Exemplo 2: Associando Cabeçalhos com Regiões

No exemplo abaixo, elementos de cabeçalho estão associados com o conteúdo que eles seguem. Note que a região sendo referenciada é a que _contem_ o cabeçalho.

```html
<div role="main" aria-labelledby="foo">
   <h1 id="foo">Incêndios selvagens se espalham por San Diego Hills</h1>
   Fortes ventos expandem o fogo inflamado pelas altas temperaturas ...
</div>
```

#### Exemplo 3: Radio Groups

No exemplo abaixo, o container de um [radiogroup](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_radiogroup_role "Using the alert role") é associado com suas labels usando o atributo `aria-labelledby`:

```html
<div id="radio_label">Meu radio label</div>
<ul role="radiogroup" aria-labelledby="radio_label">
    <li role="radio">Item #1</li>
    <li role="radio">Item #2</li>
    <li role="radio">Item #3</li>
</ul>
```

#### Exemplo 4: Dialog Label

No exemplo abaixo, o elemento cabeçalho que rotula o _dialog_ é referenciado pelo atributo `aria-labelledby`:

```html
<div role="dialog" aria-labelledby="dialogheader">
    <h2 id="dialogheader">Escolha um Arquivo</h2>
    ... Conteúdo do Dialog
</div>
```

#### Exemplo 5: Definição Inline

No exemplo abaixo, a definição de um termo que é descrita no fluxo natural da narrativa é associada com o próprio termo usando o atributo `aria-labelledby`:

```html
<p>O médico explicou que tinha sido um <dfn id="placebo">placebo</dfn>, ou <span role="definition" aria-labelledby="placebo">
ou a uma preparação mais inerte prescrito para o alívio mental do paciente do que por seu efeito real sobre um distúrbio.</span>
</p>
```

#### Exemplo 6: Definições de Listas

No exemplo abaixo, as definições numa lista formal de definições são associadas com os termos que eles definem usando o atributo `aria-labelledby`:

```html
<dl>
    <dt id="anathema">anátema</dt>
    <dd role="definition" aria-labelledby="anathema">uma proibição ou maldição solenemente pronunciada pela autoridade eclesiástica
                                                     e acompanhada por excomunhão</dd>
    <dd role="definition" aria-labelledby="anathema">uma vigorosa denúncia</dd>

    <dt id="homily">homilia</dt>
    <dd role="definition" aria-labelledby="homily">um sermão usualmente curto</dd>
    <dd role="definition" aria-labelledby="homily">uma leitura ou discurso sobre ou de um tema moral</dd>

</dl>
```

#### Exemplo 7: Menus

No exemplo abaixo, um [menu popup](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-haspopup_attribute "Using the aria-required attribute") é associado com sua label usando o atributo `aria-labelledby`:

```html
<div role="menubar">
    <div role="menuitem" aria-haspopup="true" id="fileMenu">Arquivo</div>
    <div role="menu" aria-labelledby="fileMenu">
        <div role="menuitem">Abrir</div>
        <div role="menuitem">Salvar</div>
        <div role="menuitem">Salvar como ...</div>
        ...
    </div>
    ...
</div>
```

### Notas

O mapeamento mais comum de uma
_API de acessibilidade_
para um rótulo é a propriedade acessível _name_

### Usado pelas regras ARIA

todos os elementos de markup base

### Técnicas ARIA relacionadas

- [Usando o atributo aria-label](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute "en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute")
- [Usando o atributo aria-describedby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute "en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute")

### Compatibilidade

TBD: Adicionar informação de suporte para combinações de produto UA e AT

### Recursos Adicionais

- [Especificação WAI-ARIA para aria-labelledby](https://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby)
