---
title: keydown
slug: Web/API/Element/keydown_event
---

O evento `keydown` é disparado quando uma tecla é pressionada. Diferente do evento [`keypress`](/pt-BR/docs/Web/Events/keypress), o `keydown` é disparado para teclas que produzem e que não produzem um caractere.

## Informações gerais

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-keydown)
- Interface
  - : [KeyboardEvent](/pt-BR/docs/DOM/KeyboardEvent)
- Burbulha
  - : Sim
- Cancelável
  - : Sim
- Alvo
  - : Document, Element
- Ação Padrão
  - : Variações: evento `keypress`; carrega sistema de composição de texto; eventos `blur` e `focus`; evento `DOMActivate`; outro evento

## Propriedades

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Propriedade</th>
      <th scope="col">Tipo</th>
      <th scope="col">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>target</code> {{readonlyInline}}</td>
      <td>EventTarget</td>
      <td>O alvo do evento (o alvo de nível mais alto na árvore DOM).</td>
    </tr>
    <tr>
      <td><code>type</code> {{readonlyInline}}</td>
      <td>DOMString</td>
      <td>O tipo do evento.</td>
    </tr>
    <tr>
      <td><code>bubbles</code> {{readonlyInline}}</td>
      <td>Boolean</td>
      <td>Se o evento normalmente burbulha ou não</td>
    </tr>
    <tr>
      <td><code>cancelable</code> {{readonlyInline}}</td>
      <td>Boolean</td>
      <td>Se o evento é cancelável ou não</td>
    </tr>
    <tr>
      <td><code>view</code> {{readonlyInline}}</td>
      <td>WindowProxy</td>
      <td>
        <a
          href="/pt-BR/docs/Web/API/Document/defaultView"
          ><code>document.defaultView</code></a
        >
        (<code>window</code> do documento)
      </td>
    </tr>
    <tr>
      <td><code>detail</code> {{readonlyInline}}</td>
      <td><code>long</code> (<code>float</code>)</td>
      <td>0.</td>
    </tr>
    <tr>
      <td><code>target</code> {{readonlyInline}}</td>
      <td>EventTarget (elemento DOM)</td>
      <td>
        Elemento focado processando o evento, elemento raiz se nenhum elemento
        input adequado está focado.
      </td>
    </tr>
    <tr>
      <td><code>char</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        O caractere correspondente à tecla. Se a tecla corresponde a um
        caractere imprimível, este valor é uma string Unicode não vazia,
        contendo o caractere. Se a tecla não tem uma representação imprimível, o
        valor é uma string vazia. Veja
        <a href="/pt-BR/docs/Web/API/KeyboardEvent#Key_names_and_Char_values"
          >key names and char values</a
        >
        para detalhes.
        <div class="note">
          <strong>Nota:</strong> Se a tecla for usada como uma macro que insere
          múltiplos caracteres, o valor deste atributo é toda a string, não
          apenas o primeiro caractere.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>key</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        O valor da tecla pressionada. Se a tecla tem uma representação
        imprimível, o valor deste atributo é o mesmo do atributo
        <code>char</code>. Caso contrário, é uma das strings key especificadas
        em
        <a href="/pt-BR/docs/Web/API/KeyboardEvent/key/Key_Values">Key Values</a
        >. Se a tecla não pode ser identificada, o valor do atributo é a string
        "Unidentified". Veja
        <a href="/pt-BR/docs/Web/API/KeyboardEvent#Key_names_and_Char_values"
          >key names and char values</a
        >
        para detalhes. Somente Leitura.
      </td>
    </tr>
    <tr>
      <td><code>code</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        Mantém uma string que identifica a tecla física sendo pressionada. O
        valor não é afetado pelo layout atual do teclado ou estado de
        modificador, portando uma tecla particular sempre retornará o mesmo
        valor.
      </td>
    </tr>
    <tr>
      <td><code>charCode</code> {{readonlyInline}}</td>
      <td>Unsigned long (int)</td>
      <td>
        O número de referência Unicode da tecla; este atributo é usado somente
        pelo evento
        <a href="/pt-BR/docs/Mozilla_event_reference/keypress"
          ><code>keypress</code></a
        >. Para teclas cujo atributo <code>char</code> contém múltiplos
        caracteres, este é o valor Unicode do primeiro caractere daquele
        atributo.
        <div class="warning">
          <strong>Aviso:</strong> Este atributo está obsoleto; você deve usar
          <code>char</code> no lugar, se disponível.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>keyCode</code> {{readonlyInline}}</td>
      <td>Unsigned long (int)</td>
      <td>
        Um código numérico, dependente do sistema e da implementação,
        identificando o valor não modificado da tecla pressionada. Este é
        usualmente o código decimal ASCII ({{ RFC(20) }}) ou código Windows
        1252 correspondente à tecla; veja
        <a href="#virtual_key_codes">Virtual key codes</a> para uma lista de
        valores comuns. Se a tecla não pode ser identificada, este valor é 0.
        <div class="warning">
          <strong>Aviso:</strong> Este atributo está obsoleto; você deve usar
          <code>key</code> no lugar, se disponível.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>which</code> {{readonlyInline}}</td>
      <td>Unsigned long (int)</td>
      <td>
        Um código numérico, dependente do sistema e da implementação,
        identificando o valor não modificado da tecla pressionada; este é
        usualmente o mesmo que <code>keyCode</code>.
        <div class="warning">
          <strong>Aviso:</strong> Este atributo está obsoleto; você deve usar
          <code>key</code> no lugar, se disponível.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>location</code> {{readonlyInline}}</td>
      <td>long (float)</td>
      <td>A localização da tecla no dispositivo.</td>
    </tr>
    <tr>
      <td><code>repeat</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> se a tecla foi pressionada tempo suficiente para
        disparar repetição de tecla, <code>false</code> caso contrário.
      </td>
    </tr>
    <tr>
      <td><code>locale</code> {{readonlyInline}}</td>
      <td>string</td>
      <td>
        O código do idioma para o evento, se disponível; uma string vazia caso
        contrário.
      </td>
    </tr>
    <tr>
      <td><code>ctrlKey</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> se a tecla control estava pressionada quando o evento
        foi disparado. <code>false</code> caso contrário.
      </td>
    </tr>
    <tr>
      <td><code>shiftKey</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> se a tecla shift estava pressionada quando o evento
        foi disparado. <code>false</code> caso contrário.
      </td>
    </tr>
    <tr>
      <td><code>altKey</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> se a tecla alt estava pressionada quando o evento foi
        disparado. <code>false</code> caso contrário.
      </td>
    </tr>
    <tr>
      <td><code>metaKey</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> se a tecla meta estava pressionada quando o evento foi
        disparado. <code>false</code> caso contrário.
      </td>
    </tr>
  </tbody>
</table>

## `preventDefault()` do evento `keydown`

Iniciando com o Gecko 25, uma chamada para o método `preventDefault()` do evento `keydown` evita dispachar o evento `keypress` seguinte. Este é um comportamento válido para a especificação D3E e os principais navegadores web se comportam desta forma. Por outro lado, o Gecko 24 e anteriores dispachavam o evento `keypress` mesmo que o método `preventDefault()` do evento `keydown` anterior fosse chamado, embora o atributo `defaultPrevented` do evento `keypress` fosse `true` neste caso.

## Eventos Relacionados

- {{event("keydown")}}
- {{event("keyup")}}
- {{event("keypress")}}
- {{event("input")}}

## Exemplo

```
<!DOCTYPE html>
<html>
<head>
<script>

'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});

</script>
</head>
<body>
</body>
</html>
```
