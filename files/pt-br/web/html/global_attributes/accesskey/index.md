---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
---

{{HTMLSidebar("Global_attributes")}}

O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **`accesskey`** fornece uma dica para gerar um atalho de teclado no elemento atual. O valor do atributo deve consistir em um único caracter imprimível (que inclui caracteres acentuados e outros caracteres que podem ser gerados pelo teclado).

{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

> **Nota:** Na especificação do WHATWG, diz que você pode especificar vários caracteres separados por espaço, e o navegador usará primeiro o que ele suportar. No entanto, isso não funciona na maioria dos browsers. O IE/Edge usa o primeiro que ele suporta sem problemas, desde que não haja conflitos com outros comandos.

A maneira de ativar a tecla de acesso depende do navegador e de sua plataforma:

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        No Firefox 57 ou mais recente: <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>key</em></kbd> or <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />No Firefox 14 ou mais recente: <kbd>Control</kbd> +
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd
        ><br />No Firefox 13 ou mais antigo: <kbd>Control</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td colspan="2" rowspan="1">N/A</td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td colspan="2" rowspan="1">N/A</td>
    </tr>
    <tr>
      <th>Google Chrome</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Safari</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>N/A</td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 15+</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 12</th>
      <td colspan="3" rowspan="1">
        <p>
          <kbd>Shift</kbd> + <kbd>Esc</kbd> abre uma lista de conteúdos
          acessíveis pela tecla de acesso e, em seguida, pode escolher um item
          pressionando <kbd><em>key</em></kbd>
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Preocupações com acessibilidade

Além do baixo suporte ao navegador, existem inúmeras preocupações com o atributo `accesskey`:

- Um valor de `accesskey` pode entrar em conflito com uma tecla de atalho do sistema ou do navegador, ou alguma funcionalidade de tecnologia assistida. O que pode funcionar para uma combinação de sistema operacional, tecnologia assistida e navegador pode não funcionar com outras combinações.
- Certos valores de `accesskey` podem não estar presentes em alguns teclados, especialmente quando a internacionalização é uma preocupação. Portanto, a adaptação a idiomas específicos pode causar problemas adicionais.
- Os valores de `accesskey` que dependem de números podem ser confusos para indivíduos com problemas cognitivos, onde o número não tem uma associação lógica com a funcionalidade que aciona.
- Informar o usuário que `accesskey` estão presentes, para que eles estejam cientes da funcionalidade. Se o sistema não tiver o método de o usuário dessa funcionalidade, ele poderá ativar acidentalmente as teclas de acesso (`accesskeys)`.

Devido a esses problemas, geralmente não é aconselhável usar o `accesskey`s para a maioria dos sites e aplicativos da web.

[WebAIM: Keyboard Accessibility - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## Especificações

| Especificação                                                                        | Status                   | Comentário                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML5.2', "editing.html#the-accesskey-attribute", "accesskey")}}         | {{Spec2('HTML5.2')}}     | Comportamento mais realista descrito para o que é implementado na realidade.                                                                                                                                            |
| {{SpecName('HTML WHATWG', "interaction.html#the-accesskey-attribute", "accesskey")}} | {{Spec2('HTML WHATWG')}} | Nenhuma alteração das últimas especificações do W3C {{SpecName('HTML5.1')}} .                                                                                                                                           |
| {{SpecName('HTML5.1', "editing.html#the-accesskey-attribute", "accesskey")}}         | {{Spec2('HTML5.1')}}     | Nenhuma alteração em {{SpecName('HTML5 W3C')}}.                                                                                                                                                                         |
| {{SpecName('HTML5 W3C', "editing.html#the-accesskey-attribute", "accesskey")}}       | {{Spec2('HTML5 W3C')}}   | A partir da {{SpecName('HTML4.01')}}, vários caracteres podem ser definidios como teclas de atalho. Além disso, pode ser definido em qualquer elemento.                                                                 |
| {{SpecName('HTML4.01', "interact/forms.html#h-17.11.2", "accesskey")}}               | {{Spec2('HTML4.01')}}    | Suportado apenas em {{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("label") }}, {{ HTMLElement("legend") }} e {{ HTMLElement("textarea") }} |

## Compatibilidade com navegadores

{{Compat("html.global_attributes.accesskey")}}

## Veja também

- {{domxref("Element.accessKey")}}
- {{domxref("HTMLElement.accessKeyLabel")}}
- Todos os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).
