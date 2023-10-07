---
title: Cuantificadores
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
---

{{jsSidebar("JavaScript Guide")}}

Los cuantificadores indican el número de caracteres o expresiones que deben coincidir.

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## Tipos

La siguiente tabla también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Cheatsheet", "esta hoja de referencia")}}. No olvides editarla también, ¡gracias!

> **Nota:** A continuación, _elemento_ se refiere no solo a caracteres individuales, sino que también incluye {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "clases de caracteres")}}, {{JSxRef("../Guide/Regular_Expressions/Unicode_Property_Escapes", "escapes de propiedades Unicode")}}, {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "grupos y rangos")}}.

<table class="standard-table">
    <thead>
     <tr>
      <th scope="col">Caracteres</th>
      <th scope="col">Significado</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td><code><em>x</em>*</code></td>
      <td>
       <p>Concuerda 0 o más veces con el elemento "x" anterior. Por ejemplo, <code>/bu*/</code> coincide con "buuuu" en "Un fantasma abuuuucheado" y "b" en "Un búho gorjeó", pero nada en "Una cabra gruñó".</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>+</code></td>
      <td>
       <p>Encuentra 1 o más veces el elemento "x" anterior Equivalente a <code>{1,}</code>. Por ejemplo, <code>/a+/</code> coincide con la "<em>a</em>" en "candy" y todas las "<em>a</em>"es en "caaaaaaandy".</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>?</code></td>
      <td>
       <p>Halla 0 o 1 vez el elemento "x" anterior. Por ejemplo, <code>/e?le?/</code> coincide con "el" en "ángel" y "ele" en "ángeles".</p>
       <p>Si se usa inmediatamente después de cualquiera de los cuantificadores <code>*</code>, <code>+</code>, <code>?</code>, o <code>{}</code>, hace que el cuantificador <em>no sea codicioso</em> (es decir que coincida con el mínimo número de veces), a diferencia del predeterminado, que es codicioso (que coincide con el máximo número de veces).</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>{<em>n</em>}</code></td>
      <td>
       <p>Donde "n" es un número entero positivo, concuerda exactamente con "n" apariciones del elemento "x" anterior. Por ejemplo, <code>/a{2}/</code> no coincide con la "<em>a</em>" de "candy", pero coincide con todas las "<em>a</em>"es de "caandy" y las dos primeras "<em>a</em>"es en "caaandy".</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>{<em>n</em>,}</code></td>
      <td>
       <p>Donde "n" es un número entero positivo, concuerda con al menos "n" apariciones del elemento "x". Por ejemplo, <code>/a{2,}/</code> no coincide con las "<em>a</em>"es en "caramelo", pero coincide con todas las "<em>a</em>"es en "caaraamelo" y en "caaaaaaaraaaamelo".</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>{<em>n</em>,<em>m</em>}</code></td>
      <td>
       <p>Donde "n" es 0 o un número entero positivo, "m" es un número entero positivo y <code><em>m</em> &gt; <em>n</em></code> coincide con al menos "n" y como máximo "m" apariciones del elemento "x" anterior. Por ejemplo, <code>/a{1,3}/</code> no coincide con nada en "crmelo", la "<em>a</em>" en "carmelo", las dos "<em>a</em>"es en "caarmelo" y las tres primeras "<em>a</em>"es en "caaaaaaarmelo". Observa que al comparar "caaaaaaarmelo", encuentra las "aaa", aunque la cadena original tenía más "<em>a</em>"es.</p>
      </td>
     </tr>
     <tr>
      <td>
       <p><code><em>x</em>*?</code><br>
        <code><em>x</em>+?</code><br>
        <code><em>x</em>??</code><br>
        <code><em>x</em>{n}?</code><br>
        <code><em>x</em>{n,}?</code><br>
        <code><em>x</em>{n,m}?</code></p>
      </td>
      <td>
       <p>De manera predeterminada, los cuantificadores como <code>*</code> y <code>+</code> son "codiciosos", lo cual significa que intentan hacer coincidir la mayor cantidad posible de la cadena. El caracter <code>?</code> después del cuantificador hace que el cuantificador "no sea codicioso": lo cual significa que se detendrá tan pronto como encuentre una coincidencia. Por ejemplo, dada una cadena como "algún &lt;foo&gt; &lt;bar&gt; nuevo &lt;/bar&gt; &lt;/foo&gt;":</p>
       <ul>
        <li><code>/&lt;.*&gt;/</code> coincidirá con "&lt;foo&gt; &lt;bar&gt; nuevo &lt;/bar&gt; &lt;/foo&gt;"</li>
        <li><code>/&lt;.*?&gt;/</code> coincidirá con "&lt;foo&gt;"</li>
       </ul>
      </td>
     </tr>
    </tbody>
   </table>

## Ejemplos

### Patrón repetido

```js
var palabraTerminadaConAes = /\w+a+\b/;
var mensajeDelicado = "Esto es Espartaaaaaaa";

console.table(mensajeDelicado.match(palabraTerminadaConAes)); // [ "Espartaaaaaaa" ]
```

### Conteo de caracteres

```js
var palabraDeUnaLetra = /\b\w\b/g;
var palabraNoTanLarga = /\b\w{1,6}\b/g;
var palabraLaaaaarga = /\b\w{10,}\b/g;

var frase =
  "¿Por qué me tengo que sentar a estudiar las tablas de multiplicar?";

console.table(frase.match(palabraDeUnaLetra)); // ["a"]
console.table(frase.match(palabraNoTanLarga)); // ["Por", "qu", "me", "tengo", "que", "sentar", "a", "las", "tablas", "de"]
console.table(frase.match(palabraLaaaaarga)); // ["multiplicar"]
```

### Caracter opcional

```js
var londinText = "He asked his neighbour a favour.";
var yanquiText = "He asked his neighbor a favor.";

var regexpEnding = /\w+ou?r/g;
// \w+ Una o varias letras
// o   seguida de una "o",
// u?  opcionalmente seguida de una "u"
// r   seguida de una "r"

console.table(londinText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(yanquiText.match(regexpEnding));
// ["neighbor", "favor"]
```

### Codicioso versus no codicioso

```js
var texto = "Debo estar muy cerca del centro de la tierra.";
var regexpCodiciosa = /[\w ]+/;
// [\w ]      una letra del alfabeto latino o un espacio en blanco
//      +     una o varias veces

console.log(texto.match(regexpCodiciosa)[0]);
// "Debo estar muy cerca del centro de la tierra."
// casi todo el texto coincide (omite el caracter de punto)

var regexpNoCodiciosa = /[\w ]+?/; // Observa el signo de interrogación
console.log(texto.match(regexpNoCodiciosa));
// "D"
// La coincidencia es la más pequeña posible
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}

  - {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "Clases de caracteres")}}
  - {{JSxRef("../Guide/Regular_Expressions/Assertions", "Aserciones")}}
  - {{JSxRef("../Guide/Regular_Expressions/Escapes_de_propiedades_Unicode", "Escapes de propiedades Unicode")}}
  - {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Grupos y rangos")}}

- {{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}
