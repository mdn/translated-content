---
title: Controlando a verificação ortográfica em formulários HTML
slug: Web/HTML/Global_attributes/spellcheck
---

Firefox 2 introduz suporte à verificação ortográfica para áreas de texto e campos de texto em formulários web. O usuário pode especificar usando a interface about:config se a verificação ortográfica é ou não habilitada e se checará áreas de texto e campos de texto ou somente áreas de texto.

Por padrão, áreas de texto e documentos [`designMode`](/pt-BR/docs/Web/API/Document/designMode) tem ortografia verificada e caixas de texto de uma única linha não tem. Isto é assim porque os usuários do Firefox podem se distrair ou se incomodar se o Firefox marcar coisas como IDs de usuários ou endereços de e-mail como erros de ortografia.

Porém, podem haver situações nas quais este comportamento não é necessariamente apropriado. Por exemplo, se uma área de texto tem o objetivo de ser usada para editar HTML ou servir de entrada para outro tipo de texto que não seja semântico, a verificação ortográfica seria um entrave em vez de uma ajuda. Da mesma forma, podem haver casos nos quais um site faça uma recomendação de que o Firefox habilite a verificação ortográfica para um campo de texto específico, como campos de busca ou assunto/título de e-mail, mesmo estes sendo geralmente campos de texto de uma única linha.

Se um site deseja recomendar o uso ou não de verificação ortográfica para um elemento `<input>` específico, ele pode usar o atributo `spellcheck`, espefcificando o valor `true` para recomendar o uso da verificação ortográfica ou `false` para recomendar o não uso.

Tenha em mente que a recomendação do site pode ser ignorada pelo usuário se o mesmo tiver desativado a verificação ortográfica setando a configuração `layout.spellcheckDefault` para 0. Se a configuração `layout.spellcheckDefault` tiver qualquer outro valor, as recomendações serão consideradas.

Você pode codificar um campo de texto linha-única (elemento HTML `<input>`) habilitando a verificação ortográfica da seguinte forma:

```
<input type="text" size="50" spellcheck="true">
```

Da mesma forma, você pode desabilitar a verificação ortográfica em uma área de texto (elemento `<textarea>`) da seguinte forma:

```
<textarea spellcheck="false"></textarea>
```

Você pode controlar um documento em seu `designMode` (tipicamente usado para implementar edição de texto rica) setando o atributo `spellcheck` no elemento `<body>` de um documento.

Você também pode aplicar o atributo `spellcheck` em outros elementos, tais como os elementos `<span>` e `<div>`, e nesse caso todos os elementos `<input>` dentro dessas tags irão herdar esta configuração; elementos `<input>` que não tem um atributo `spellcheck` setado, irão herdar a configuração de verificação ortográfica de seu elemento pai. Se não houver nenhuma configuração setada na cadeia antecessora de elementos, a configuração padrão será usada.

Por exemplo:

```html
<div spellcheck="true">
  <label>Escreva algo: </label><input type="text" size="50" />
  <br />
  <label>Escreva outra coisa: </label><input type="text" size="50" />
</div>
<br />
<label>Mais alguma coisa: </label><input type="text" size="50" />
```

Neste exemplo HTML acima, os dois primeiros campos de texto terão a verificação ortográfica e o terceiro não terá.

Iniciando no Gecko 9.0, a verificação ortográfica usa o atributo [`lang`](/pt-BR/docs/Web/HTML/Element/input#lang) do elemento {{ HTMLElement("input") }} para determinar o idioma padrão da verificação ortográfica. Se o {{ HTMLElement("input") }} não tiver o atributo `lang` setado, esse atributo é procurado em cada elemento pai superior até chegar ao elemento raiz do documento.

Fazendo assim, se o usuário tem os dicionários de Português e Inglês instalados, e um elemento editável tiver o atributo `lang="en"`, o dicionário inglês será automaticamente usado para este elemento.

Por exemplo:

```html
<html lang="pt-BR">
  <body>
    <textarea></textarea>
    <textarea lang="en"></textarea>
    <div lang="ru">
      <textarea></textarea>
    </div>
  </body>
</html>
```

No exemplo HTML acima, o primeiro {{ HTMLElement("textarea") }} terá ortografia checada em Português, o segundo em Inglês e o terceiro em Russo.

Se um elemento especifica o idioma e o usuário não tem dicionário instalado para este idioma, a verificação ortográfica fica desabilitada por padrão, embora o usuário possa escolher por habilitá-la manualmente.
