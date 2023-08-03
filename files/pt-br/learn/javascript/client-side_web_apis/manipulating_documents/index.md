---
title: JavaScript e CSS
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
---

Esta é a primeira sessão da Parte II do [Tutorial de CSS](/pt-BR/CSS/Getting_Started). A parte II contém alguns exemplos que mostram o escopo do CSS usado com outras tecnologias web e Mozilla.

Cada página da Parte II ilustra como o CSS interage com outras tecnologias. Essas páginas não destinam-se a ensiná-lo como usar outras tecnologias. Para aprender sobre elas com detalhes, vá para os outros tutoriais.

Em vez disso, estas páginas são usadas para ilustrar os diversos usos do CSS. Para usar estas páginas, você deve ter algum conhecimento de CSS, mas você não precisa de nenhum conhecimento de outras tecnologias.

Sessão Anterior (da Parte I): [Media](/pt-BR/CSS/Getting_Started/Media)
Próxima sessão: [SVG](/pt-BR/CSS/Getting_Started/SVG_graphics)

### Informação: JavaScript

JavaScript é uma _linguagem de programação_. JavaScript é largamente utilizado para promover interatividade em web sites e aplicações.

JavaScript pode interagir com stylesheets, permitindo a você criar programas que mudam o estilo de um documento de forma dinâmica

Há três formas de fazer isso:

- Trabalhando com lista de documentos de stylesheets — por exemplo: adicionando, removendo ou adicionando um stylesheet.
- Trabalhando com as regras em uma stylesheet — por exemplo: adicionando, removendo ou modificando uma regra.
- Trabalhando com um documento individual na DOM — modificando seu estilo independentemente do stylesheets do documento.

| Para mais informações sobre JavaScript, veja a página [JavaScript](/pt-BR/JavaScript) nesta wiki. |
| ------------------------------------------------------------------------------------------------- |

### Ação: Uma demonstração de JavaScript

Faça um novo documento em HTML, `doc5.html`. Copie e cole o conteúdo daqui, tenha certeza de rolar para copiar todo o código:

```html
<!doctype html>
<html>
  <head>
    <title>Mozilla CSS Getting Started - JavaScript demonstration</title>
    <link rel="stylesheet" type="text/css" href="style5.css" />
    <script type="text/javascript" src="script5.js"></script>
  </head>

  <body>
    <h1>JavaScript sample</h1>

    <div id="square"></div>

    <button type="button" onclick="doDemo(this);">Click Me</button>
  </body>
</html>
```

Crie um novo arquivo CSS, `style5.css`. Copie e cole o conteúdo daqui:

```css
/*** JavaScript demonstration ***/
#square {
  width: 20em;
  height: 20em;
  border: 2px inset gray;
  margin-bottom: 1em;
}

button {
  padding: 0.5em 2em;
}
```

Crie um novo arquivo de texto, `script5.js`. Copie e cole o conteúdo daqui:

```js
// JavaScript demonstration
function doDemo(button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "#fa4";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 2000, button);
}

function clearDemo(button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "transparent";
  button.removeAttribute("disabled");
}
```

Abra o documento no seu Browser e pressione o botão.

Esta wiki não suporta JavaScript nas páginas, então não é possível mostrar uma demonstração aqui. parece algo assim, antes e depois de você pressionar o botão:

<table>
  <tbody>
    <tr>
      <td>
        <table style="border: 2px outset #36b; padding: 0 1em 0.5em 0.5em">
          <tbody>
            <tr>
              <td>
                <p><strong>JavaScript demonstration</strong></p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table style="border: 2px outset #36b; padding: 0 1em 0.5em 0.5em">
          <tbody>
            <tr>
              <td>
                <p><strong>JavaScript demonstration</strong></p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

> **Nota:** Sobre esta demonstração:
>
> - O documento HTML tem uma folha de estilo anexada, bem como um arquivo de script.
> - O script trabalha com elementos individuais no DOM. Ele modifica o square's style diretamente. Ele modifica o estilo dos botões indiretamente mudando um atributo.
> - Em JavaScript, `document.getElementById("square")` é similar em função ao seletor CSS `#square`.
> - Em JavaScript, `backgroundColor` corresponde à propriedade CSS `background-color`. JavaScript não permite hífens em nomes, então "camelCase" é usada no lugar dele.
> - Seu browser tem uma regra built-in CSS para `button[disabled="true"]` ela muda a aparência dos botões quando está disabilitado.

| Altere o script para que o quadrado salte 20 cm para a direita quando sua cor mudar e volte para trás quando retornar à cor base. |
| --------------------------------------------------------------------------------------------------------------------------------- |

[Veja a solução deste desafio.](/pt-BR/CSS/Getting_Started/Challenge_solutions#JavaScript)

O que vem agora?

Se você teve dificuldade para entender esta página, ou se tem algum comentário sobre ela, por favor, contribua nesta página de [Discussão](/Talk:en/CSS/Getting_Started/JavaScript).

Nesta demonstração, o documento HTML é vinculado ao script, embora apenas o elemento botão o utilize. ozilla estende CSS para permitir que você associe código JavaScript (assim como conteúdo e outras folhas de estilo) com elementos selecionados. A próxima página demonstra isso: **[Ligações XBL](/pt-BR/CSS/Getting_Started/XBL_bindings)**
