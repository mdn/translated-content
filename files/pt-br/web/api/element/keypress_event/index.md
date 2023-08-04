---
title: keypress
slug: Web/API/Element/keypress_event
---

{{APIRef}}

O evento **`keypress`** é disparado quando uma tecla que produz um valor do tipo caractere é pressionada. Exemplos de chaves que produzem um valor de caractere são chaves alfabéticas, numéricas e de pontuação. Exemplos de chaves que não produzem um valor de caractere são as teclas modificadoras, como <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, ou <kbd>Meta</kbd>.

## Informações gerais

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-keypress) {{deprecated_inline ()}}
- Interface
  - : [KeyboardEvent](/pt-BR/docs/DOM/KeyboardEvent)
- Bolhas
  - : sim
- Cancelável
  - : sim
- Alvo
  - : Documento, Elemento
- Ação padrão
  - : Varia: `keypress`evento; lançar sistema de composição de texto; `blur`e `focus`eventos; `DOMActivate`evento; outro evento

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
      <td>O destino do evento (o destino mais alto na árvore do DOM).</td>
    </tr>
    <tr>
      <td><code>type</code> {{readonlyInline}}</td>
      <td>DOMString</td>
      <td>O tipo de evento.</td>
    </tr>
    <tr>
      <td><code>bubbles</code> {{readonlyInline}}</td>
      <td>boleano</td>
      <td>Se o evento normalmente borbulha ou não</td>
    </tr>
    <tr>
      <td><code>cancelable</code> {{readonlyInline}}</td>
      <td>boleano</td>
      <td>Se o evento é cancelável ou não</td>
    </tr>
    <tr>
      <td><code>view</code> {{readonlyInline}}</td>
      <td>WindowProxy</td>
      <td>
        <a href="/pt-BR/docs/Web/API/Document/defaultView"
          ><code>document.defaultView</code></a
        >( <code>window</code>do documento)
      </td>
    </tr>
    <tr>
      <td><code>detail</code> {{readonlyInline}}</td>
      <td><code>long</code>( <code>float</code>)</td>
      <td>0</td>
    </tr>
    <tr>
      <td><code>target</code> {{readonlyInline}}</td>
      <td>EventTarget (elemento DOM)</td>
      <td>
        Elemento focalizado processando o evento chave, elemento raiz se nenhum
        elemento de entrada adequado estiver focalizado.
      </td>
    </tr>
    <tr>
      <td><code>char</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        O valor do caractere da chave. Se a chave corresponder a um caractere
        imprimível, esse valor será uma string Unicode não vazia contendo esse
        caractere. Se a chave não tiver uma representação imprimível, esta é uma
        string vazia. Veja
        <a href="/pt-BR/docs/Web/API/KeyboardEvent#Key_names_and_Char_values"
          >nomes de chaves e valores de caracteres</a
        >
        para os detalhes.
        <div class="note">
          <strong>Nota:</strong> Se a chave for usada como uma macro que insere
          vários caracteres, o valor desse atributo é a cadeia inteira, não
          apenas o primeiro caractere.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>key</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        <p>
          O valor-chave da chave representada pelo evento. Se o valor tiver uma
          representação impressa, o valor desse atributo será o mesmo da
          <code>char</code>propriedade. Caso contrário, é uma das cadeias de
          <a href="/pt-BR/docs/Web/API/KeyboardEvent/key/Key_Values"
            >valores de chave</a
          >
          especificadas nos
          <a href="/pt-BR/docs/Web/API/KeyboardEvent/key/Key_Values"
            >valores de chave</a
          >
          . Se a chave não puder ser identificada, seu valor será a string
          "Unidentified". Veja
          <a href="/pt-BR/docs/Web/API/KeyboardEvent#Key_names_and_Char_values"
            >os nomes das chaves e os valores de caracteres</a
          >
          para mais detalhes. Somente leitura.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>code</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        Contém uma string que identifica a tecla física sendo pressionada. O
        valor não é afetado pelo layout do teclado atual ou pelo estado do
        modificador, portanto, uma chave específica sempre retornará o mesmo
        valor.
      </td>
    </tr>
    <tr>
      <td><code>charCode</code> {{readonlyInline}}</td>
      <td>Longo não assinado (int)</td>
      <td>
        O número de referência Unicode da chave; esse atributo é usado apenas
        pelo
        <a href="/pt-BR/docs/Mozilla_event_reference/keypress"
          ><code>keypress</code></a
        >evento. Para chaves cujo <code>char</code>atributo contém vários
        caracteres, esse é o valor Unicode do primeiro caractere nesse atributo.
        <div class="warning">
          <strong>Aviso:</strong> este atributo está obsoleto; você deve usar em
          <code>char</code>vez disso, se disponível.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>keyCode</code> {{readonlyInline}}</td>
      <td>Longo não assinado (int)</td>
      <td>
        Um código numérico dependente do sistema e da implementação que
        identifica o valor não modificado da tecla pressionada. Este é
        geralmente o código ASCII decimal ({{RFC (20)}}) ou Windows 1252
        correspondente à chave; veja
        <a href="#códigos_de_teclas_virtuais">Códigos de teclas virtuais</a>
        para uma lista de valores comuns. Se a chave não puder ser identificada,
        esse valor será 0.
        <div class="warning">
          <strong>Aviso:</strong> este atributo está obsoleto; você deve usar em
          <code>key</code>vez disso, se disponível.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>which</code> {{readonlyInline}}</td>
      <td>Longo não assinado (int)</td>
      <td>
        Um código numérico dependente do sistema e da implementação
        identificando o valor não modificado da tecla pressionada; isso
        geralmente é o mesmo que <code>keyCode</code>.
        <div class="warning">
          <strong>Aviso:</strong> este atributo está obsoleto; você deve usar em
          <code>key</code>vez disso, se disponível.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>location</code> {{readonlyInline}}</td>
      <td>longo (flutuar)</td>
      <td>A localização da chave no dispositivo.</td>
    </tr>
    <tr>
      <td><code>repeat</code> {{readonlyInline}}</td>
      <td>boleano</td>
      <td>
        <code>true</code>se uma tecla foi pressionada o tempo suficiente para
        disparar a repetição da tecla, caso contrário <code>false</code>.
      </td>
    </tr>
    <tr>
      <td><code>locale</code> {{readonlyInline}}</td>
      <td>corda</td>
      <td>
        O código do idioma para o evento principal, se disponível; caso
        contrário, a cadeia vazia.
      </td>
    </tr>
    <tr>
      <td><code>ctrlKey</code> {{readonlyInline}}</td>
      <td>boleano</td>
      <td>
        <code>true</code>se a chave de controle estava inativa quando o evento
        foi disparado. <code>false</code>de outra forma.
      </td>
    </tr>
    <tr>
      <td><code>shiftKey</code> {{readonlyInline}}</td>
      <td>boleano</td>
      <td>
        <code>true</code>se a tecla shift estava inativa quando o evento foi
        disparado. <code>false</code>de outra forma.
      </td>
    </tr>
    <tr>
      <td><code>altKey</code> {{readonlyInline}}</td>
      <td>boleano</td>
      <td>
        <code>true</code>se a tecla ALT estava desativada quando o evento foi
        disparado. <code>false</code>de outra forma.
      </td>
    </tr>
    <tr>
      <td><code>metaKey</code> {{readonlyInline}}</td>
      <td>boleano</td>
      <td>
        <code>true</code>se a meta key estava desativada quando o evento foi
        disparado. <code>false</code>de outra forma.
      </td>
    </tr>
  </tbody>
</table>

## Exemplo

```js
document.addEventListener ('keypress', (event) => {
  const keyName = event.key;
  alert ('keypress event \ n \ n' + 'chave:' + nome da chave);
});
```

## Compatibilidade com navegadores

O Chrome não dispara o `keypress`evento para atalhos de teclado conhecidos ( [referência](https://bugs.chromium.org/p/chromium/issues/detail?id=13891#c50) ). Quais atalhos de teclado são conhecidos depende do sistema do usuário. Use o `keydown`evento para implementar atalhos de teclado.

## Eventos Relacionados

- {{event ("keydown")}}
- {{event ("keyup")}}
- {{event ("keypress")}}
- {{event ("input")}}
