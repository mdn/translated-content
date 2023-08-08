---
title: Классы символов
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
---

{{JSSidebar("JavaScript Guide")}}

Классы символов позволяют различать виды символов, к примеру, как различия между буквами и цифрами.

{{EmbedInteractiveExample("pages/js/regexp-character-classes.html")}}

## Типы

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Символ</th>
      <th scope="col">Значение</th>
    </tr>
  </thead>
  <tbody></tbody>
  <tbody>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>Точка имеет одно из следующих смыслов:</p>
        <ul>
          <li>
            Совпадение с любым одним символом <em>за исключение</em> символов
            завершения строки: <code>\n</code>, <code>\r</code>,
            <code>\u2028</code> or <code>\u2029</code>. Например,
            <code>/.y/</code> совпадает "my" с "ay", и не совпадает с "yes" и
            "yes make my day".
          </li>
          <li>
            В набор символов, точка теряет свой специальный смысл и совпадает с
            литеральным символом точка.
          </li>
        </ul>
        <p>
          Замечание. <code>m</code> флаг поиска по множеству строк не меняет
          поведения точки. Чтобы найти воспаления во многострочном поиске можно
          использовать набор символов <code>[^]</code> — он совпадает с любым
          символом включая символы завершения строки.
        </p>
        <p>
          В ES2018 добавили <code>s</code> "dotAll" флаг, который позволяет
          точке <code>(.</code>) находить все символы включая символы переноса
          строк.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          Совпадёт с любой цифрой (арабский числа). Эквивалентно
          <code>[0-9]</code>. Например, <code>/\d/</code> или
          <code>/[0-9]/</code> находит "2" в "B2 is the suite number"..
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          Совпадёт с любым символом, который не является цифрой (арабский
          числа). Эквивалентно <code>[^0-9]</code>. Например,
          <code>/\D/</code> or <code>/[^0-9]/</code> находит "B" в "B2 is the
          suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          Совпадёт с любой буквенно-числовым символом из базового латинского
          алфавита включая нижнее подчёркивание. Эквивалентно
          <code>[A-Za-z0-9_]</code>. Например, <code>/\w/</code> находит "a" в
          "apple", "5" в "$5.28", "3" в "3D" и "m" в "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          Совпадёт с любой буквенно-числовым, которое не является символом
          базового латинского алфавита, так же исключая нижнее подчёркивание.
          Эквивалентно <code>[^A-Za-z0-9_]</code>. Например,
          <code>/\W/</code> или <code>/[^A-Za-z0-9_]/</code> находит "%" в "50%"
          и "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          Совпадёт с любым пробельным символом, включая пробел, символ
          табуляции, символ подачи страницы, символ подачи строки и другие
          Unicode пробелы. Эквивалентно
          <code
            >[
            \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. Например, <code>/\s\w*/</code> находит " bar" в "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          Совпадёт с любым символом, не являющимся пробельным. Эквивалентно
          <code
            >[^
            \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. Например, <code>/\S\w*/</code> находит "foo" в "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Совпадёт с символом горизонтальной табуляции.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Совпадёт с символом возврата каретки.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Совпадёт с символом подачи строки.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Совпадёт с символом вертикальной табуляции</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Совпадёт с символом подачи страницы (формы).</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Совпадёт с символом возврат назад (англ. backspace). Если вы ищите
        символ границы слова (<code>\b</code>), смотри
        <a
          href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions/Boundaries"
          >Границы</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Совпадёт с символом NUL character. Не используйте другую цифру.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Совпадёт с контрольным символом using
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B5%D1%82%D0%BD%D0%B0%D1%8F_%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F"
            >каретную нотацию</a
          >, где "X" буква A–Z (соответствует кодам <code>U+0001</code><em>–</em
          ><code>U+001F</code>). For example, <code>/\cM/</code> matches "\r" in
          "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Совпадёт с символом, код которого <code><em>hh</em></code> (две
        шестнадцатеричных цифры).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Совпадёт с код-блоком UTF-16 со значением
        <code><em>hhhh</em></code> (четыре шестнадцатеричных цифры).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh} </em>or <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Только когда установлен флаг <code>u</code>.) Совпадёт с Unicode
        символом со значением <code>U+<em>hhhh</em></code> или
        <code>U+<em>hhhhh</em></code> (шестнадцатеричные цифры).
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Определяет что последующий символ должен быть интерпретирован по
          особому или должен быть "экранирован. Это работает в двух вариантах:
        </p>
        <ul>
          <li>
            Для символов, которые относятся к литералам, последующий символ -
            это специальный символ, который не должен быть интерпретирован, как
            литерал. Например, <code>/b/</code> совпадает с символом "b".
            Установ обратного слеша перед "b". Таким образом <code>/\b/</code>.
            Будет означать символ границы слова.
          </li>
          <li>
            Для символов, которые относятся к специальным, определяет что это не
            специальным символ, а должен быть интерпретирован, как литерал.
            Например, <code>*</code> - это специальный символ, который означает
            0 или любое другое совпадений предыдущего символа, Например
            <code>/a*/</code> совпадает с любым количеством символов "a" идущих
            подряд (или 0 "a") <code>a, aaaa, aaaaaa</code>. Если специальный
            символ <code>*</code>, как литерал, то перед ним ставится обратных
            слеш. Например, <code>/a\*/</code> совпадает только с "a*".
          </li>
        </ul>
        <div class="blockIndicator note">
          <p>
            Чтобы найти литеральное совпадение с этим символов (<code>\</code> ,
            экранируйте его самим же. Другими словами для поиска
            <code>\</code> используйте <code>/\\/</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Примеры

### Поиск серии цифр

```js
var randomData = "015 354 8787 687351 3512 8735";
var regexpFourDigits = /\b\d{4}\b/g;
// \b определяет границу поиска (например, не начинает поиск с середины слова)
// \d{4} определяет цифру, четыре раза
// определяет другую границу поиска (например, не начинает поиск с середины слова)

// Вывод всех чисел имеющих только 4 цифры
console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

### Поиск слов (латинский алфавит), начинающих с A

```js
var aliceExcerpt =
  "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";
var regexpWordStartingWithA = /\b[aA]\w+/g;
// \b определяет границу поиска (например, не начинает поиск с середины слова)
// [aA] определяет букву a или A
// \b определяет границу поиска (например, не начинает поиск с середины слова)

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

### Поиски слов (из Unicode символов)

Вместо латинского алфавита, мы может использовать диапазон Unicode символов для определения слова (благодаря этому мы можем работать с текстами написанным, например на русском или арабском языке or Arabic). Unicode содержит большинство символов используемых на планете, мы так же можем объединять их диапазоны и классы символов.

```js
var nonEnglishText = "Приключения Алисы в Стране чудес";
var regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

## Совместимость с браузерами

Для информации о совместимости с браузерами, посмотрите [основную таблицу совместимости Regular Expressions](/ru/docs/Web/JavaScript/Guide/Regular_Expressions#Browser_compatibility).

## Смотрите по теме

- [Руководство по Regular expressions](/ru/docs/Web/JavaScript/Guide/Regular_Expressions)

  - [Assertions](/ru/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - [Quantifiers](/ru/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - [Unicode property escapes](/ru/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
  - [Groups and ranges](/ru/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

- [Конструктор `RegExp()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
