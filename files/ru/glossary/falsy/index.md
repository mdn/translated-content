---
title: Falsy
slug: Glossary/Falsy
tags:
  - Glossary
  - JavaScript
  - falsy
translation_of: Glossary/Falsy
original_slug: Глоссарий/Falsy
---
<p id="Summary">Ложное (<strong>falsy</strong>) значение - это значение, которое считается ложным, когда встречается в контексте {{Glossary("Boolean")}} .</p>

{{Glossary("JavaScript")}} использует {{Glossary("Type_Conversion", "Type Conversion")}} для приведения любого значения к логическому в контекстах, которые требуют его, такие как {{Glossary("Conditional", "условные выражения")}} и {{Glossary("Loop", "циклы")}}.

<div class="note"><p>В JavaScript есть только 7 <strong>ложных</strong> значений</p><p>Это означает, что когда JavaScript ожидает логическое значение и ему присваивается одно из значений ниже, он всегда будет оцениваться как «ложное»</p></div>

<table class="standard-table">
  <tbody>
    <tr>
      <td>false</td>
      <td>
        Ключевое слово
        {{jsxref('Lexical_grammar','false','Зарезервированные_ключевые_слова_в_более_старых_версиях')}}
      </td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Число
        <a href="/ru/docs/Web/JavaScript/Data_structures#Типы_данных">zero</a>
      </td>
    </tr>
    <tr>
      <td><code>0n</code></td>
      <td>
        {{jsxref('Global_Objects/BigInt','BigInt')}}, при
        использовании в качестве логического значения, следует тому же правилу,
        что и число. 0n - это ложь.
      </td>
    </tr>
    <tr>
      <td>"", '', ``</td>
      <td>
        <p>
          Это пустая строка(длина строки ноль). Строки в JavaScript могут быть
          определены с помощью двойных кавычек (") или одинарных кавычек ('), а
          также
          {{jsxref ('template_strings', 'Template literals')}} (`)
        </p>
      </td>
    </tr>
    <tr>
      <td>{{Glossary("null")}}</td>
      <td>
        {{jsxref('Global_Objects/null','null')}} - отсутствие
        какого-либо значения
      </td>
    </tr>
    <tr>
      <td>{{Glossary("undefined")}}</td>
      <td>
        {{jsxref('Global_Objects/undefined','undefined')}} -
        примитивное значение
      </td>
    </tr>
    <tr>
      <td>{{Glossary("NaN")}}</td>
      <td>{{jsxref('Global_Objects/NaN','NaN')}} - не число</td>
    </tr>
  </tbody>
</table>

## Примеры

Примеры ложных значений в JavaScript (которые приводятся к ложному в булевых контекстах и, таким образом, обходят блок if):

```js
if (false)
if (null)
if (undefined)
if (0)
if (0n)
if (NaN)
if ('')
if ("")
if (``)
if (document.all)
```

### Логический оператор И, &&

Если первый объект ложный, он возвращает этот объект

```js
let pet = false && "dog";

// ↪ false
```

<div class="note"><p>В прошлом для обнаружения браузером использовался <code>document.all</code>, а <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/obsolete.html#dom-document-all">Спецификация HTML здесь определяет преднамеренное нарушение</a> стандарта ECMAScript для сохранения совместимости с устаревшим кодом. (<code>if (document.all) { // Internet Explorer code here(except IE11) }</code> or using <code>document.all</code> without checking its presence first: <code>document.all.foo</code>).</p></div>

Иногда пишется **falsy**, хотя на английском языке обычно превращают слово в прилагательное с окончанием -y, любое окончание _e_ отбрасывается(noise => noisy, ice => icy, shine => shiny)

## Узнать больше

- {{Glossary("Truthy")}}
- {{Glossary("Boolean")}}

{{QuickLinksWithSubpages("/en-US/docs/Glossary")}}
