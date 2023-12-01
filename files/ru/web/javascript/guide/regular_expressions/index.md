---
title: Регулярные выражения
slug: Web/JavaScript/Guide/Regular_expressions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

Регулярные выражения - это шаблоны, используемые для сопоставления последовательностей символов в строках. В JavaScript регулярные выражения также являются объектами. Эти шаблоны используются в методах [`exec`](/ru/docs/JavaScript/Reference/Global_Objects/RegExp/exec) и [`test`](/ru/docs/JavaScript/Reference/Global_Objects/RegExp/test) объекта [`RegExp`](/ru/docs/JavaScript/Reference/Global_Objects/RegExp) а также [`match`](/ru/docs/JavaScript/Reference/Global_Objects/String/match), [`replace`](/ru/docs/JavaScript/Reference/Global_Objects/String/replace), [`search`](/ru/docs/JavaScript/Reference/Global_Objects/String/search), [`split`](/ru/docs/JavaScript/Reference/Global_Objects/String/split) объекта [`String`](/ru/docs/JavaScript/Reference/Global_Objects/String). Данная глава описывает регулярные выражения в JavaScript.

## Создание регулярного выражения

Регулярное выражение можно создать двумя способами:

- Используя литерал регулярного выражения, например:

  ```js
  var re = /ab+c/;
  ```

  Литералы регулярных выражений вызывают предварительную компиляцию регулярного выражения при анализе скрипта. Если ваше регулярное выражение постоянно, то пользуйтесь им, чтобы увеличить производительность.

- Вызывая функцию конструктор объекта [`RegExp`](/ru/docs/JavaScript/Reference/Global_Objects/RegExp), например:

  ```js
  var re = new RegExp("ab+c");
  ```

  Использование конструктора влечёт за собой компиляцию регулярного выражения во время исполнения скрипта. Используйте данный способ, если знаете, что выражение будет изменяться или не знаете шаблон заранее. Например вы получаете его из стороннего источника, при пользовательском вводе.

## Написание шаблона регулярного выражения

Шаблон регулярного выражения состоит из обычных символов, например `/abc/`, или комбинаций обычных и специальных символов, например `/ab*c/` или `/Chapter (\d+)\.\d*/`. Последний пример включает в себя скобки, которые используются как "запоминающий механизм". Соответствие этой части шаблона запоминается для дальнейшего использования, как описано в [Использование совпадений подстрок заключённых в скобки](#Использование_скобочных_выражений_для_нахождения_подстрок).

### Использование простых шаблонов

Простые шаблоны используются для нахождения прямого соответствия в тексте. Например, шаблон `/abc/` соответствует комбинации символов в строке только когда символы 'abc' встречаются вместе и в том же порядке. Такое сопоставление произойдёт в строке "Hi, do you know your abc's?" и "The latest airplane designs evolved from slabcraft." В обоих случаях сопоставление произойдёт с подстрокой 'abc'. Сопоставление не произойдёт в строке "Grab crab", потому что она не содержит подстроку 'abc'.

### Использование специальных символов

В случае когда поиск соответствия требует чего-то большего, чем прямое сопоставление, например нахождение последовательности символов 'b' или нахождение пробела, шаблон включает в себя специальные символы. Например, шаблон `/ab*c/` соответствует любой комбинации символов, в которой за 'a' следует ноль или более символов 'b' (`*` означает ноль или более вхождений предыдущего символа), за которыми сразу же следует символ 'c'. В строке "cbbabbbbcdebc," этому шаблону сопоставляется подстрока 'abbbbc'.

В следующей таблице приводится полный список специальных символов регулярных выражений с их описаниями.

<table class="fullwidth-table">
  <caption>
    Таблица 4.1 Специальные символы в регулярных выражения.
  </caption>
  <thead>
    <tr>
      <th scope="col">Символ</th>
      <th scope="col">Значение</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="#special-backslash"
          id="special-backslash"
          name="special-backslash"
          ><code>\</code></a
        >
      </td>
      <td>
        Одно из следующего:
        <ul>
          <li>
            Для символов обычно обрабатываемых буквально, означает что следующий
            символ является специальным и не должен интерпретироваться
            буквально.
          </li>
          <li style="list-style-type: none">
            Например, <code>/b/ </code>сопоставляется символу 'b'. Добавляя слеш
            перед b, т.е используя <code>/\b/</code>, символ становится
            специальным символом, означающим границу слова.
          </li>
          <li>
            Для символов обычно обрабатываемых особым образом означает, что
            следующий символ не является специальным и должен интерпретироваться
            буквально.
          </li>
          <li style="list-style-type: none">
            Например, <code>*</code> является специальным символом,
            сопоставляемым 0 или более повторений предыдущего символа; например,
            <code>/a*/</code> означает соответствие 0 или более символов а. Для
            буквальной интерпретации *, поставьте перед ней обратный слеш;
            например, <code>/a\*/</code> соответствует 'a*'.
          </li>
          <li style="list-style-type: none">
            Также не забудьте заэкранировать сам \ при его использовании в
            записи new RegExp("pattern") поскольку \ также является экранирующим
            символом в обычных строках.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-caret" id="special-caret" name="special-caret"
          ><code>^</code></a
        >
      </td>
      <td>
        <p>
          Соответствует началу ввода. Если установлен флаг многострочности,
          также производит сопоставление непосредственно после переноса строки.
        </p>
        <p>
          Например, <code>/^A/</code> не соответствует 'A' в "an A", но
          соответствует 'A' в "An E".
        </p>
        <p>
          <br />Этот символ имеет другое значение при появлении в начале шаблона
          набора символов.
        </p>
        <p>
          Например, <code>/[^a-z\s]/</code> соответствует 'I' в "I have 3
          sisters".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-dollar" id="special-dollar" name="special-dollar"
          ><code>$</code></a
        >
      </td>
      <td>
        <p>
          Соответствует концу ввода. Если установлен битовый флаг
          многострочности, также сопоставляется содержимому до переноса строки.
        </p>
        <p>
          Например, <code>/t$/</code> не соответствует 't' в строке "eater", но
          соответствует строке "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-asterisk"
          id="special-asterisk"
          name="special-asterisk"
          ><code>*</code></a
        >
      </td>
      <td>
        <p>
          Соответствует предыдущему символу повторенному 0 или более раз.
          Эквивалентно {0,}.
        </p>
        <p>
          Например, <code>/bo*/</code> соответствует 'boooo' в "A ghost booooed"
          и 'b' в "A bird warbled", но не в "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-plus" id="special-plus" name="special-plus"
          ><code>+</code></a
        >
      </td>
      <td>
        <p>
          Соответствует предыдущему символу повторенному 1 или более раз.
          Эквивалентно {1,}.
        </p>
        <p>
          Например, <code>/a+/</code> соответствует 'a' в "candy" и всем
          символам 'a' в "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-questionmark"
          id="special-questionmark"
          name="special-questionmark"
          ><code>?</code></a
        >
      </td>
      <td>
        Соответствует предыдущему символу повторенному
        <p>0 или 1 раз. Эквивалентно {0,1}.</p>
        <p>
          Например, <code>/e?le?/</code> соответствует 'el' в "angel" и 'le' в
          "angle" а также 'l' в "oslo".
        </p>
        <p>
          Если использован сразу после квалификаторов <code>*</code>,
          <code>+</code>, <code>?</code>, или <code>{}</code>, делает
          квалификатор "нежадным" (соответствующим минимальному количеству
          символов), в отличие от режима по умолчанию, являющимся "жадным"
          (соответствующим максимальному числу символов). Например, используя
          /\d+/ не глобальное сопоставление "123abc" возвращает "123", если
          использовать /\d+?/, только "1" будет возвращена.
        </p>
        <p>
          Также используется в упреждающих утверждениях (assertions), описанных
          в строках x(?=y) и x(?!y) данной таблицы.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-dot" id="special-dot" name="special-dot"
          ><code>.</code></a
        >
      </td>
      <td>
        <p>
          (десятичная точка) соответствует любому символу кроме переноса строки.
        </p>
        <p>
          Например, <code>/.n/</code> соответствует 'an' и 'on' в "nay, an apple
          is on the tree", но не 'nay'.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-capturing-parentheses"
          id="special-capturing-parentheses"
          name="special-capturing-parentheses"
          ><code>(x)</code></a
        >
      </td>
      <td>
        <p>
          Соответствует 'x' и запоминает это соответствие. Это называется
          захватывающие скобки.
        </p>
        <p>
          Например, <code>/(foo)/</code> соответствует 'foo' в "foo bar."
          Сопоставленная строка может быть получена из элементов результирующего
          массива <code>[1]</code>, ..., <code>[n]</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-capturing-parentheses"
          id="special-non-capturing-parentheses"
          name="special-non-capturing-parentheses"
          ><code>(?:x)</code></a
        >
      </td>
      <td>
        Соответствует 'x' но не запоминает соответствие. Это называется
        не-захватывающие скобки. Сопоставленная строка не может быть получена из
        элементов результирующего массива
        <code style="font-size: 14px; color: rgb(51, 51, 51)">[1]</code>, ...,
        <code style="font-size: 14px; color: rgb(51, 51, 51)">[n]</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-lookahead"
          id="special-lookahead"
          name="special-lookahead"
          ><code>x(?=y)</code></a
        >
      </td>
      <td>
        <p>
          Соответствует 'x' только если за 'x' следует 'y'. Это называется
          упреждение.
        </p>
        <p>
          Например, <code>/Jack(?=Sprat)/</code> соответствует 'Jack' только
          если за ним следует 'Sprat'.
          <code>/Jack(?=Sprat|Frost)/</code> соответствует 'Jack' только если за
          ним следует 'Sprat' или 'Frost'. Тем не менее, ни 'Sprat' ни 'Frost'
          не являются частью сопоставленного результата.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-negated-look-ahead"
          id="special-negated-look-ahead"
          name="special-negated-look-ahead"
          ><code>x(?!y)</code></a
        >
      </td>
      <td>
        <p>
          Соответствует 'x' только если за 'x' не следует 'y'. Это называется
          отрицательное упреждение.
        </p>
        <p>
          Например, <code>/\d+(?!\.)/</code> соответствует числу только если за
          ним не следует десятичная точка. Регулярное выражение
          <code>/\d+(?!\.)/.exec("3.141")</code> сопоставит '141' но не '3.141'.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-or" id="special-or" name="special-or"
          ><code>x|y</code></a
        >
      </td>
      <td>
        <p>Соответствует либо 'x' либо 'y'.</p>
        <p>
          Например, <code>/green|red/</code> соответствует 'green' в "green
          apple" и 'red' в "red apple."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-quantifier"
          id="special-quantifier"
          name="special-quantifier"
          ><code>{n}</code></a
        >
      </td>
      <td>
        <p>
          n - положительное целое. Соответствует ровно <code>n</code> вхождениям
          предыдущего символа.
        </p>
        <p>
          Например, <code>/a{2}/</code> не соответствует 'a' в "candy," но
          соответствует всем а в "caandy," первым двум а в "caaandy."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-quantifier-range"
          id="special-quantifier-range"
          name="special-quantifier-range"
          ><code>{n,m}</code></a
        >
      </td>
      <td>
        <p>
          m и n - положительные целые. Соответствует как минимум
          <code>n</code> и максимум <code>m</code> вхождениям предыдущего
          символа. При m=n=1 пропускается.
        </p>
        <p>
          Например, <code>/a{1,3}/</code> ничему не соответствует в строке
          "cndy", символу 'a' в "candy," двум а в "caandy," и трём первым а в
          "caaaaaaandy". Отметим, что при сопоставлении "caaaaaaandy", совпадает
          "aaa", хотя изначальная строка содержит больше а.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-character-set"
          id="special-character-set"
          name="special-character-set"
          ><code>[xyz]</code></a
        >
      </td>
      <td>
        <p>
          Набор символов. Соответствует любому символу из перечисленных. Можно
          указать диапазон символов, используя тире. Специальные символы (как
          точка (<code>.</code>) и звёздочка (<code>*</code>)) не имеют
          специального значения внутри такого набора. Их не надо экранировать.
          Экранирование работает также.
        </p>
        <p>
          Например, <code>[abcd]</code> эквивалентна
          [<code>a-d]</code>. Они
          соответствуют 'b' в "brisket" и 'c' в "city". <code>/[a-z.]+/</code> и
          <code>/[\w.]+/</code> обе соответствуют всему в "test.i.ng".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-negated-character-set"
          id="special-negated-character-set"
          name="special-negated-character-set"
          ><code>[^xyz]</code></a
        >
      </td>
      <td>
        <p>
          Инвертированный или дополняющий набор символов. Это означает
          соответствие всему, что не в скобках. Можно указать диапазон символов
          с помощью тире. Все, что действует в обычном наборе символов,
          действует и здесь.
        </p>
        <p>
          Например, <code>[^abc]</code> эквивалентно <code>[^a-c]</code>. Они
          соответствуют изначально 'r' в "brisket" и 'h' в "chop."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-backspace"
          id="special-backspace"
          name="special-backspace"
          ><code>[\b]</code></a
        >
      </td>
      <td>Соответствует бэкспейсу (U+0008). (Не путать с <code>\b</code>.)</td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-word-boundary"
          id="special-word-boundary"
          name="special-word-boundary"
          ><code>\b</code></a
        >
      </td>
      <td>
        <p>
          Соответствует границе слова. Граница слова соответствует позиции, где
          за символом слова не следует другой символ слова или предшествует ему.
          Отметим, что граница слова не включается в соответствие. Другими
          словами, длина сопоставленной границы слова равна нулю. (Не путать с
          <code>[\b]</code>.)
        </p>
        <p>
          Примеры:<br /><code>/\bmoo/</code> соответствует 'moo' в слове "moon"
          ;<br /><code>/oo\b/</code> не соответствует 'oo' в слове "moon",
          поскольку за 'oo' следует символ 'n' , являющимся символом слова;<br /><code
            >/oon\b/</code
          >
          соответствует 'oon' в слове "moon", поскольку 'oon' является
          окончанием строки, и таким образом, за этими символами не следует
          другой символ слова;<br /><code>/\w\b\w/</code> никогда не будет
          ничему соответствовать, поскольку за символом слова никогда не может
          следовать и граница слова, и символ слова.
        </p>
        <div class="note">
          <p>
            <strong>Note:</strong> JavaScript's regular expression engine
            defines a
            <a
              href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6"
              >specific set of characters</a
            >to be "word" characters. Any character not in that set is
            considered a word break. This set of characters is fairly limited:
            it consists solely of the Roman alphabet in both upper- and
            lower-case, decimal digits, and the underscore character. Accented
            characters, such as "é" or "ü" are, unfortunately, treated as word
            breaks.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-word-boundary"
          id="special-non-word-boundary"
          name="special-non-word-boundary"
          ><code>\B</code></a
        >
      </td>
      <td>
        <p>
          Соответствует несловообразующей границе. Несловообразующая граница
          соответствует позиции, в которой предыдущий и следующий символы
          являются символами одного типа: либо оба должны быть словообразующими
          символами, либо несловообразующими. Начало и конец строки считаются
          несловообразующими символами.
        </p>
        <p>
          Например, <code>/\B../</code> соответствует 'oo' в слове "noonday" (,
          а <code>/y\B./</code> соответствует 'ye' в "possibly yesterday."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-control" id="special-control" name="special-control"
          ><code>\c<em>X</em></code></a
        >
      </td>
      <td>
        <p>
          Где <em>X</em> является символом случайного выбора из
          последовательности от А до Я. Соответствует управляющему символу в
          строке.
        </p>
        <p>
          Например, <code>/\cM/</code> соответствует control-M (U+000D) в
          строке.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-digit" id="special-digit" name="special-digit"
          ><code>\d</code></a
        >
      </td>
      <td>
        <p>
          Соответствует цифровому символу. Эквивалентно выражению
          <code>[0-9]</code>.
        </p>
        <p>
          Например, <code>/\d/</code> or <code>/[0-9]/</code> соответствует '2'
          в "B2 is the suite number."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-digit"
          id="special-non-digit"
          name="special-non-digit"
          ><code>\D</code></a
        >
      </td>
      <td>
        <p>
          Соответствует любому нецифровому символу. Эквивалентно выражению
          <code>[^0-9]</code>.
        </p>
        <p>
          Например, <code>/\D/</code> or <code>/[^0-9]/</code> соответствует 'B'
          в предложении "B2 is the suite number."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-form-feed"
          id="special-form-feed"
          name="special-form-feed"
          ><code>\f</code></a
        >
      </td>
      <td>
        <p>
          Соответствует символу прогона страницы (U+000C). Особый символ
          управления печатью.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-line-feed"
          id="special-line-feed"
          name="special-line-feed"
          ><code>\n</code></a
        >
      </td>
      <td>Соответствует символу перевода строки (U+000A).</td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-carriage-return"
          id="special-carriage-return"
          name="special-carriage-return"
          ><code>\r</code></a
        >
      </td>
      <td>Соответствует символу возврата каретки (U+000D).</td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-white-space"
          id="special-white-space"
          name="special-white-space"
          ><code>\s</code></a
        >
      </td>
      <td>
        <p>
          Соответствует одиночному символу пустого пространства, включая пробел,
          табуляция, прогон страницы, перевод строки. Эквивалентен
          <code
            >[
            \f\n\r\t\v\u00A0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000]</code
          >.
        </p>
        <p>Например, <code>/\s\w*/</code> совпадает с ' bar' в "foo bar."</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-white-space"
          id="special-non-white-space"
          name="special-non-white-space"
          ><code>\S</code></a
        >
      </td>
      <td>
        <p>
          Соответствует одиночному символу непустого пространства.
          Эквивалентен<code>
            [^
            \f\n\r\t\v\u00A0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]</code
          >.
        </p>
        <p>Например, <code>/\S\w*/</code> совпадает с 'foo' в "foo bar."</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-tab" id="special-tab" name="special-tab"
          ><code>\t</code></a
        >
      </td>
      <td>Соответствует символу горизонтальной табуляции (U+0009).</td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-vertical-tab"
          id="special-vertical-tab"
          name="special-vertical-tab"
          ><code>\v</code></a
        >
      </td>
      <td>Соответствует символу вертикальной табуляции (U+000B).</td>
    </tr>
    <tr>
      <td>
        <a href="#special-word" id="special-word" name="special-word"
          ><code>\w</code></a
        >
      </td>
      <td>
        <p>
          Соответствует любому цифробуквенному символу включая нижнее
          подчёркивание. Эквивалентен <code>[A-Za-z0-9_]</code>.
        </p>
        <p>
          Например, <code>/\w/</code> совпадает с 'a' в "apple," '5' в "$5.28,"
          и '3' в "3D."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-word"
          id="special-non-word"
          name="special-non-word"
          ><code>\W</code></a
        >
      </td>
      <td>
        <p>
          Соответствует любому не цифробуквенному символу. Равносилен<code>
            [^A-Za-z0-9_]</code
          >.
        </p>
        <p>
          Например, <code>/\W/</code> or <code>/[^A-Za-z0-9_]/</code> совпадает
          с '%' в "50%."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-backreference"
          id="special-backreference"
          name="special-backreference"
          ><code>\<em>n</em></code></a
        >
      </td>
      <td>
        <p>
          Где <em>n</em> это положительное целое, обратная ссылка на последнюю
          найденную подстроку, соответствующую <em>n</em> , заключённую в
          круглые скобки в регулярном выражении (считая левые скобки).
        </p>
        <p>
          Например, <code>/apple(,)\sorange\1/</code> соответствует 'apple,
          orange,' в "apple, orange, cherry, peach."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-null" id="special-null" name="special-null"
          ><code>\0</code></a
        >
      </td>
      <td>
        Соответствует символу NULL (U+0000). Не следует ставить за ним другой
        цифровой символ, поскольку <code>\0&#x3C;digits></code> является
        восьмеричной экранирующей последовательностью.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-hex-escape"
          id="special-hex-escape"
          name="special-hex-escape"
          ><code>\xhh</code></a
        >
      </td>
      <td>Соответствует символам кода hh (две шестнадцатеричные цифры)</td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-unicode-escape"
          id="special-unicode-escape"
          name="special-unicode-escape"
          ><code>\uhhhh</code></a
        >
      </td>
      <td>
        Соответствует символам кода hhhh (четыре шестнадцатеричные цифры).
      </td>
    </tr>
  </tbody>
</table>

Экранирование пользовательского ввода, соответствующего буквенной строке внутри регулярного выражения, может быть достигнуто простой заменой:

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
```

### Использование скобок

Скобки вокруг любой части регулярного выражения означают что эта часть совпадаемой подстроки будет запомнена. Раз запомнена, подстрока может выбрана для использования как это описано в [Using Parenthesized Substring Matches](#Using_Parenthesized_Substring_Matches).

Например, паттерн `/Chapter (\d+)\.\d*/` включает в себя дополнительные экранирующие и специальные символы и указывает на то, что часть шаблона должна быть запомнена. Он точно соответствует символам слова 'Chapter ', за которыми следует один или более цифровых символов (`\d` означает любой цифровой символ, а '`+'` означает 1 или более раз), за которым следует десятичная точка (сама по себе являющаяся специальным символом; предшествующий десятичной точке слеш ' \\' означает, что паттерн должен искать литеральный символ '.'), после которой следует любой цифровой символ 0 или более раз ('`\d'` обозначает цифровой символ, '`*'` обозначает 0 или более раз). Кроме того, круглые скобки используются для запоминания первых же совпавших цифровых символов.

Этот шаблон будет найден во фразе "Open Chapter 4.3, paragraph 6" и цифра '4' будет запомнена. Но он не будет найден во фразе "Chapter 3 and 4", поскольку эта строка не имеет точки после цифры '3'.

Для того, чтобы сопоставить подстроку без вызова совпавшей части для запоминания, внутри круглых скобок необходимо предварить паттерн сочетанием символов ' `?:'`. Например, шаблон `(?:\d+)` будет соответствовать одному или более цифровому символу, но не запомнит совпавших символов.

## Работа с Регулярными Выражениями

Регулярные выражения используются в методах `test` и `exec` объекта `RegExp` и с методами `match`, `replace`, `search`, и `split` объекта `String`. Эти методы подробно объясняются в [Справочнике JavaScript](/ru/docs/JavaScript/Reference)

| Метод                                                                    | Описание                                                                                                                                             |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`exec`](/ru/docs/JavaScript/Reference/Global_Objects/RegExp/exec)       | Метод `RegExp,` который выполняет поиск совпадения в строке. Он возвращает массив данных.                                                            |
| [`test`](/ru/docs/JavaScript/Reference/Global_Objects/RegExp/test)       | Метод `RegExp`, который тестирует совпадение в строке. Возвращает либо истину либо ложь.                                                             |
| [`match`](/ru/docs/JavaScript/Reference/Global_Objects/String/match)     | Метод `String`, который выполняет поиск совпадения в строке. Он возвращает массив данных либо null если совпадения отсутствуют.                      |
| [`search`](/ru/docs/JavaScript/Reference/Global_Objects/String/search)   | Метод `String,` который тестирует на совпадение в строке. Он возвращает индекс совпадения, или -1 если совпадений не будет найдено.                  |
| [`replace`](/ru/docs/JavaScript/Reference/Global_Objects/String/replace) | Метод `String`, который выполняет поиск совпадения в строке, и заменяет совпавшую подстроку другой подстрокой, переданной как аргумент в этот метод. |
| [`split`](/ru/docs/JavaScript/Reference/Global_Objects/String/split)     | Метод `String,` который использует регулярное выражение или фиксированную строку чтобы разбить строку на массив подстрок.                            |

Чтобы просто узнать есть ли в строке что либо соответствующее шаблону, воспользуйтесь методами `test` или `search`; а чтобы получить больше информации пользуйтесь методами `exec` или `match` (хотя эти методы работают медленнее). Если вы пользуетесь `exec` или `match` и если совпадения есть, эти методы вернут массив и обновлённые свойства объекта ассоциированного регулярного выражения а также предопределённого объекта `RegExp` регулярного выражения. Если совпадений нет, метод `exec` вернёт `null` (который сконвертируется в `false`).

В след. примере, скрипт использует метод `exec` чтобы найти совпадения в строке.

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

Если вам не нужен доступ к свойствам регулярного выражения, то альтернативный способ получить `myArray` можно так:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
```

Если вы хотите сконструировать регулярное выражение из строки, другой способ сделать это приведён ниже:

```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

С помощью этих скриптов, поиск совпадения завершается и возвращает массив и обновлённые свойства показанные в след. таблице.

<table class="fullwidth-table">
  <caption>
    Table 4.3 Результаты выполнения регулярного выражения
  </caption>
  <thead>
    <tr>
      <th scope="col">Объект</th>
      <th scope="col">Свойство или индекс</th>
      <th scope="col">Описание</th>
      <th scope="col">В этом примере.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>Совпавшая строка и все запомненные подстроки.</td>
      <td><code>["dbbd", "bb"]</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Индекс совпавшей подстроки (индекс начинается с нуля).</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>Исходная строка.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Последние совпавшие символы.</td>
      <td><code>"dbbd"</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>
        Индекс с которого начнётся след. поиск совпадения. (Это свойство
        определяется только если регулярное выражение использует параметр g,
        описанный в
        [Advanced Searching With Flags](#Advanced_Searching_With_Flags).)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Текст шаблона. Обновляется в момент создания регулярного выражения, а не
        во время выполнения.
      </td>
      <td><code>"d(b+)d"</code></td>
    </tr>
  </tbody>
</table>

Как показано во втором варианте этого примера, вы можете использовать регулярное выражение, созданное при помощи инициализатора объекта, без присваивания его переменной. Таким образом, если вы используете данную форму записи без присваивания переменной, то в процессе дальнейшего использования вы не можете получить доступ к свойствам данного регулярного выражения. Например, у вас есть следующий скрипт:

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + myRe.lastIndex);
```

Этот скрипт выведет:

```
The value of lastIndex is 5
```

Однако, если у вас есть следующий скрипт:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);
```

Он выведет:

```
The value of lastIndex is 0
```

Совпадения `/d(b+)d/g` в двух случаях являются разными объектами регулярного выражения и, следовательно, имеют различные значения для свойства `lastIndex`. Если вам необходим доступ к свойствам объекта, созданного при помощи инициализатора, то вы должны сначала присвоить его переменной.

### Использование скобочных выражений для нахождения подстрок

Использование скобок в шаблоне регулярного выражения повлечёт "запоминание" совпавшей подстроки. Для примера, `/a(b)c/` вызовет совпадение 'abc' и запомнит 'b'. Чтобы получить совпадения скобочного выражения используйте `Array` elements `[1]`, ..., `[n]`.

Число возможных скобочных подстрок неограничено. Возвращаемый массив содержит все полученные совпадения, удовлетворяющие выражению в скобках. Следующий пример показывает как использовать скобочные выражения для нахождения подстрок.

Следующий скрипт использует метод `replace(),` чтобы поменять местами слова (символы) в строке. Для замены текста скрипт использует обозначения `$1` и `$2` для обозначения первого и второго совпадения скобочного выражения.

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Выведет "Smith, John".

### Расширенный поиск с флагами

Регулярные выражения имеют четыре опциональных флага, которые делают возможным глобальный и регистронезависимый поиск. Флаги могут использоваться самостоятельно или вместе в любом порядке, а также могут являться частью регулярного выражения.

| Flag | Description                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------------ |
| `g`  | Глобальный поиск.                                                                                                  |
| i    | Регистронезависимый поиск.                                                                                         |
| m    | Многострочный поиск.                                                                                               |
| y    | Выполняет поиск начиная с символа, который находится на позиции свойства lastindex текущего регулярного выражения. |

Чтобы использовать флаги в шаблоне регулярного выражения используйте следующий синтаксис:

```js
var re = /pattern/flags;
```

или

```js
var re = new RegExp("pattern", "flags");
```

Обратите внимание, что флаги являются неотъемлемой частью регулярного выражения. Флаги не могут быть добавлены или удалены позднее.

Для примера, `re = /\w+\s/g` создаёт регулярное выражение, которое ищет один или более символов, после которых следует пробел и ищет данное совпадение на протяжении всей строки.

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);
```

Выведет \["fee ", "fi ", "fo "]. В этом примере вы бы могли заменить строку:

```js
var re = /\w+\s/g;
```

на следующую:

```js
var re = new RegExp("\\w+\\s", "g");
```

и получить тот же результат.

Флаг `m` используется, чтобы входная строка рассматривалась как многострочная. Если флаг `m` используется, то `^` и `$` вызовет совпадение в начале или конце любой строки в строке ввода вместо начала или конца вводимой строки целиком.

## Примеры

След. примеры показывают использование регулярных выражений.

### Изменение порядка в Исходной Строке

След. пример иллюстрирует формирование регулярного выражения и использование `string.split()` и `string.replace()`. Он очищает неправильно сформатированную исходную строку, которая содержит имена в неправильном порядке (имя идёт первым) разделённые пробелами, табуляцией и одной точкой с запятой. В конце, изменяется порядок следования имён (фамилия станет первой) и сортируется список.

```js
// The name string contains multiple spaces and tabs,
// and may have multiple spaces between first and last names.
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// Prepare two regular expression patterns and array storage.
// Split the string into array elements.

// pattern: possible white space then semicolon then possible white space
var pattern = /\s*;\s*/;

// Break the string into pieces separated by the pattern above and
// store the pieces in an array called nameList
var nameList = names.split(pattern);

// new pattern: one or more characters then spaces then characters.
// Use parentheses to "memorize" portions of the pattern.
// The memorized portions are referred to later.
pattern = /(\w+)\s+(\w+)/;

// New array for holding names being processed.
var bySurnameList = [];

// Display the name array and populate the new array
// with comma-separated names, last first.
//
// The replace method removes anything matching the pattern
// and replaces it with the memorized string—second memorized portion
// followed by comma space followed by first memorized portion.
//
// The variables $1 and $2 refer to the portions
// memorized while matching the pattern.

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// Display the new array.
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

// Sort by last name, then display the sorted array.
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));
```

### Использование спецсимволов для проверки входных данных

В след. примере, ожидается что пользователь введёт телефонный номер и требуется проверить правильность символов набранных пользователем. Когда пользователь нажмёт кнопку "Check", скрипт проверит правильность введённого номера. Если номер правильный (совпадает с символами определёнными в регулярном выражении), то скрипт покажет сообщение благодарности для пользователя и подтвердит номер. Если нет, то скрипт проинформирует пользователя, что телефонный номер неправильный.

Внутри незахватывающих скобок `(?:`, регуляное выражение ищет три цифры `\d{3}` ИЛИ `|` открывающую скобку `\(`, затем три цифры `\d{3}`, затем закрывающую скобку `\)`, (закрывающая незахватывающая скобка `)`), затем тире, слеш, или десятичная точка, и когда это выражение найдено, запоминает символ `([-\/\.])`, следующие за ним и запомненные три цифры `\d{3}`, следующее соответствие тире, слеша или десятичной точки `\1`, и следующие четыре цифры `\d{4}`.

Регулярное выражение ищет сначала 0 или одну открывающую скобку `\(?`, затем три цифры `\d{3}`, затем 0 или одну закрывающую скобку `\)?`, потом одно тире, слеш или точка и когда найдёт это, запомнит символ `([-\/\.])`, след. три цифры `\d{3}`, followed by the remembered match of a dash, forward slash, or decimal point `\1`, followed by four digits `\d{4}`.

Событие "Изменить" активируется, когда пользователь подтвердит ввод значения регулярного выражения, нажав клавишу "Enter".

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <script type="text/javascript">
      var re = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
      function testInfo(phoneInput) {
        var OK = re.exec(phoneInput.value);
        if (!OK)
          window.alert(RegExp.input + " isn't a phone number with area code!");
        else window.alert("Thanks, your phone number is " + OK[0]);
      }
    </script>
  </head>
  <body>
    <p>
      Enter your phone number (with area code) and then click "Check". <br />The
      expected format is like ###-###-####.
    </p>
    <form action="#">
      <input id="phone" /><button
        onclick="testInfo(document.getElementById('phone'));">
        Check
      </button>
    </form>
  </body>
</html>
```
