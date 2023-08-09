---
title: <fieldset>
slug: Web/HTML/Element/fieldset
---

{{HTMLSidebar}}

O **elemento HTML `<fieldset>`** é usado para agrupar elementos, assim como labels ({{HTMLElement("label")}}), dentro de um formulário web.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/HTML/Content_categories">Categorias de Conteúdo</a>
      </th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Conteúdo de fluxo</a
        >,
        <a
          href="/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document#sectioning_root"
          >sectioning root</a
        >, <a href="/pt-BR/docs/HTML/Content_categories#form_listed">listed</a>,
        <a href="/pt-BR/docs/HTML/Content_categories#form-associated_content"
          >form-associated</a
        >
        element, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        Um elemento {{HTMLElement("legend")}} opcional, seguido por
        conteúdo de fluxo.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão deTag</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos pai permitidos</th>
      <td>
        Qualquer elemento que aceita
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >conteúdo de fluxo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

> **Note:** diferente de quase todo outro elemento, a especificação do WHATWG HTML Rendering sugere `{{cssxref("min-width")}}: min-content` como parte do padrão de estilo para {{HTMLElement("fieldset")}}, e muitos navegadores implementam tal estilização (ou algo que se aproxima disto).

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("disabled")}}
  - : Se este atributo Booleano está definido, os controles de formulario que são seus descendentes, exceto os descendentes de seu primeiro elemento opcional {{HTMLElement("legend")}}, estarão desativados, i.e., não editável. Eles não receberão qualquer evento de navegação, como clique do mouse ou relacionado com focus. Frequentemente os navegadores mostram tais controles em cinza.
- {{htmlattrdef("form")}}
  - : Este atributo tem o valor do atributo **id** do elemento {{HTMLElement("form")}} com que se relaciona. Seu valor padrão é o **id** do elemento {{HTMLElement("form")}} mais próximo.
- {{htmlattrdef("name")}}

  - : O nome associado com o grupo.

    > **Note:** O label para o fieldset é dado pelo primeiro elemento {{HTMLElement("legend")}} que é um filho do fieldset.

## Exemplos

### Example #1: Formulário com fieldset, legend, e label

```html
<form action="test.php" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" id="radio" /> <label for="radio">Click me</label>
  </fieldset>
</form>
```

### Example #2: Simulando um editável {{HTMLElement("select")}} através de um `fieldset` de [radioboxes](/pt-BR/docs/HTML/Element/Input) e [textboxes](/pt-BR/docs/HTML/Element/Input)\*

O exemplo a seguinte é feito de puro HTML e CSS. Não contém javascript.

**Esteja avisado** que leitores de tela (utilizados por cegos) e dispositivos de assistência não interpretarão o seguinte formulário corretamente; este exemplo seria um html invalido se os corretos elementos fossem usados.

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Editable [pseudo]select</title>
    <style type="text/css">
      /* Generic form fields */

      fieldset.elist,
      input[type="text"],
      textarea,
      select,
      option,
      fieldset.elist ul,
      fieldset.elist > legend,
      fieldset.elist input[type="text"],
      fieldset.elist > legend:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

      input[type="text"] {
        padding: 0 20px;
      }

      textarea {
        width: 500px;
        height: 200px;
        padding: 20px;
      }

      textarea,
      input[type="text"],
      fieldset.elist ul,
      select,
      fieldset.elist > legend {
        border: 2px #cccccc solid;
        border-radius: 10px;
      }

      input[type="text"],
      fieldset.elist,
      select,
      fieldset.elist > legend {
        height: 32px;
        font-family: Tahoma;
        font-size: 14px;
      }

      input[type="text"]:hover,
      textarea:hover,
      select:hover,
      fieldset.elist:hover > legend {
        background-color: #ddddff;
      }

      select {
        padding: 4px 20px;
      }

      option {
        height: 30px;
        padding: 5px 4px;
      }

      option:not(:checked),
      textarea:focus {
        background-color: #ffcccc;
      }

      fieldset.elist > legend:after,
      fieldset.elist label {
        height: 28px;
      }

      input[type="text"],
      fieldset.elist {
        width: 316px;
      }

      input[type="text"]:focus {
        background: #ffcccc
          url("data:image/gif;base64,R0lGODlhEAAQANU5APnoxuvr6+uxPdvb2+rq6ri4uO7qxunp6dPT06SHV+/rx8vLy+nezLO0sbe3t9Ksas+qaaCEV8rKyp2dnf39/QAAAK6ursifZHFxcc/Qzu3mxYyMjExCJnV1dc6maO7u7o+Pj2tXNoaGhtfDpKCDVu3lxM+tcaKEV9bW1qOFVWNjY8KrisTExNra2nBbObGxsby8vO/mu7Kyso9ZAuzs7MSgAIiKhf///8zMzP///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAADkALAAAAAAQABAAAAaXwJxwSCwOYzWkMpkkZmoAqDQaJdpqAqw2m53NRjlboAarFczomcE0C99o8DgNMVM8Tm3bbYDr9x11DwkzDG5yc2oQJIRCenx/MxoeETM2Q3pxATMlF4MYlo17OAsdLispMyAioIY0BzMcITMTKBasjgssFTMqGxItMjYUoTQBBAQHxgE0wZcfMtDRMi/QrA022NnaNg1CQQA7")
          no-repeat 2px center !important;
      }

      input[type="text"]:focus,
      textarea:focus,
      select:focus,
      fieldset.elist > legend {
        border: 2px #ccaaaa solid;
      }

      fieldset {
        border: 2px #af3333 solid;
        border-radius: 10px;
      }

      /* Editable [pseudo]select (i.e. fieldsets with [class=elist]) */

      fieldset.elist {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        overflow: visible;
        padding: 0;
        margin: 0;
        border: none;
      }

      fieldset.elist ul {
        position: absolute;
        width: 100%;
        max-height: 320px;
        padding: 0;
        margin: 0;
        overflow: hidden;
        background-color: transparent;
      }

      fieldset.elist:hover ul {
        background-color: #ffffff;
        border: 2px #af3333 solid;
        left: 2px;
        overflow: auto;
      }

      fieldset.elist ul > li {
        list-style-type: none;
        background-color: transparent;
      }

      fieldset.elist label {
        display: none;
        width: 100%;
      }

      fieldset.elist input[type="text"] {
        width: 100%;
        height: 30px;
        line-height: 30px;
        border: none;
        background-color: transparent;
        border-radius: 0;
      }

      fieldset.elist > legend {
        display: block;
        margin: 0;
        padding: 0 0 0 5px;
        position: absolute;
        width: 100%;
        cursor: default;
        background-color: #ccffcc;
        line-height: 30px;
        font-style: italic;
      }

      fieldset.elist:hover > legend {
        position: relative;
        overflow: hidden;
      }

      fieldset.elist > legend:after {
        width: 20px;
        content: "\2335";
        float: right;
        text-align: center;
        border-left: 2px #cccccc solid;
        font-style: normal;
        cursor: default;
      }

      fieldset.elist:hover > legend:after {
        background-color: #99ff99;
      }

      fieldset.elist ul input[type="radio"] {
        display: none;
      }

      fieldset.elist input[type="radio"]:checked ~ label {
        display: block;
        width: 292px;
        background-color: #ffffff;
      }

      fieldset.elist:hover input[type="radio"]:checked ~ label {
        width: 100%;
      }

      fieldset.elist:hover label {
        display: block;
        height: 100%;
      }

      fieldset.elist label:hover {
        background-color: #3333ff !important;
      }

      fieldset.elist:hover input[type="radio"]:checked ~ label {
        background-color: #aaaaaa;
      }
    </style>
  </head>
  <body>
    <form method="get" action="test.php">
      <fieldset>
        <legend>Order a T-Shirt</legend>
        <p>Write your name (simple textbox): <input type="text" /></p>
        <p>
          Choose your size (simple select):
          <select>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </p>
        <div>
          What address do you want to use? (editable pseudoselect)
          <fieldset class="elist">
            <legend>Address&hellip;</legend>
            <ul>
              <li>
                <input
                  type="radio"
                  value="1"
                  id="address-switch_1"
                  checked /><label for="address-switch_1"
                  ><input
                    type="text"
                    value="19 Quaker Ridge Rd. Bethel CT 06801"
                /></label>
              </li>
              <li>
                <input type="radio" value="2" id="address-switch_2" /><label
                  for="address-switch_2"
                  ><input
                    type="text"
                    value="1000 Coney Island Ave. Brooklyn NY 11230"
                /></label>
              </li>
              <li>
                <input type="radio" value="3" id="address-switch_3" /><label
                  for="address-switch_3"
                  ><input
                    type="text"
                    value="2962 Dunedin Cv. Germantown TN 38138"
                /></label>
              </li>
              <li>
                <input type="radio" value="4" id="address-switch_4" /><label
                  for="address-switch_4"
                  ><input
                    type="text"
                    value="915 E 7th St. Apt 6L. Brooklyn NY 11230"
                /></label>
              </li>
            </ul>
          </fieldset>
        </div>
        <p>
          Write a comment:<br />
          <textarea></textarea>
        </p>
        <p>
          <input type="reset" value="Reset" />
          <input type="submit" value="Send!" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

[Veja este exemplo em ação](/files/4563/editable_select.html)

## Especificações

| Especificação                                                                      | Status                   | Comentário                                                      |
| ---------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#the-fieldset-element', '&lt;fieldset&gt;')}} | {{Spec2('HTML WHATWG')}} | Definição do elemento fieldset                                  |
| {{SpecName('HTML WHATWG', 'rendering.html#the-fieldset-and-legend-elements')}}     | {{Spec2('HTML WHATWG')}} | Padrão sugerido de renderização dos elementos fieldset e legend |
| {{SpecName('HTML5 W3C', 'forms.html#the-fieldset-element', '&lt;fieldset&gt;')}}   | {{Spec2('HTML5 W3C')}}   |                                                                 |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.10', '&lt;fieldset&gt;')}}        | {{Spec2('HTML4.01')}}    | Definição inicial                                               |

## Compatibilidade com navegadores

{{Compat("html.elements.fieldset")}}

## Erros

- [Erro do Firefox 504622](https://bugzil.la/504622) - Fieldsets nunca diminui abaixo de sua largura min-intrinsic
- [WebKit bug 123507](https://bugs.webkit.org/show_bug.cgi?id=123507) - `min-width: {{cssxref("-webkit-min-content")}}` sobre fieldset
- [StackOverflow discussão com soluções alternativas para os bugs acima](http://stackoverflow.com/questions/17408815/fieldset-resizes-wrong-appears-to-have-unremovable-min-width-min-content)

## Veja também

- Outros elementos de formlários relacionados: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} e {{HTMLElement("meter")}}.
- Artigo de como usar o fieldset para [ajudar na validação do seu formulário html](https://blog.alura.com.br/formulario-com-form-validation-do-html5/)
