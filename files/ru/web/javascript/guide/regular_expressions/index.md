---
titwe: Регулярные выражения
swug: web/javascwipt/guide/weguwaw_expwessions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/text_fowmatting", rawr x3 "web/javascwipt/guide/indexed_cowwections")}}

Регулярные выражения - это шаблоны, (✿oωo) используемые для сопоставления последовательностей символов в строках. (ˆ ﻌ ˆ)♡ В j-javascwipt регулярные выражения также являются объектами. :3 Эти шаблоны используются в методах [`exec`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) и [`test`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test) объекта [`wegexp`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) а также [`match`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match), (U ᵕ U❁) [`wepwace`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace), ^^;; [`seawch`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch), mya [`spwit`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) объекта [`stwing`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). 😳😳😳 Данная глава описывает регулярные выражения в j-javascwipt. OwO

## Создание регулярного выражения

Регулярное выражение можно создать двумя способами:

- Используя литерал регулярного выражения, rawr например:

  ```js
  vaw w-we = /ab+c/;
  ```

  Литералы регулярных выражений вызывают предварительную компиляцию регулярного выражения при анализе скрипта. XD Если ваше регулярное выражение постоянно, (U ﹏ U) то пользуйтесь им, (˘ω˘) чтобы увеличить производительность. UwU

- Вызывая функцию конструктор объекта [`wegexp`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp), >_< например:

  ```js
  v-vaw we = nyew w-wegexp("ab+c");
  ```

  Использование конструктора влечёт за собой компиляцию регулярного выражения во время исполнения скрипта. σωσ Используйте данный способ, 🥺 если знаете, 🥺 что выражение будет изменяться или не знаете шаблон заранее. ʘwʘ Например вы получаете его из стороннего источника, :3 при пользовательском вводе. (U ﹏ U)

## Написание шаблона регулярного выражения

Шаблон регулярного выражения состоит из обычных символов, (U ﹏ U) например `/abc/`, ʘwʘ или комбинаций обычных и специальных символов, >w< например `/ab*c/` или `/chaptew (\d+)\.\d*/`. rawr x3 Последний пример включает в себя скобки, OwO которые используются как "запоминающий механизм". ^•ﻌ•^ Соответствие этой части шаблона запоминается для дальнейшего использования, >_< как описано в [Использование совпадений подстрок заключённых в скобки](#использование_скобочных_выражений_для_нахождения_подстрок). OwO

### Использование простых шаблонов

Простые шаблоны используются для нахождения прямого соответствия в тексте. >_< Например, (ꈍᴗꈍ) шаблон `/abc/` соответствует комбинации символов в строке только когда символы 'abc' встречаются вместе и в том же порядке. Такое сопоставление произойдёт в строке "hi, d-do you know y-youw abc's?" и "the watest aiwpwane designs evowved fwom swabcwaft." В обоих случаях сопоставление произойдёт с подстрокой 'abc'. >w< Сопоставление не произойдёт в строке "gwab cwab", (U ﹏ U) потому что она не содержит подстроку 'abc'. ^^

### Использование специальных символов

В случае когда поиск соответствия требует чего-то большего, (U ﹏ U) чем прямое сопоставление, :3 например нахождение последовательности символов 'b' или нахождение пробела, (✿oωo) шаблон включает в себя специальные символы. XD Например, >w< шаблон `/ab*c/` соответствует любой комбинации символов, òωó в которой за 'a' следует ноль или более символов 'b' (`*` означает ноль или более вхождений предыдущего символа), (ꈍᴗꈍ) за которыми сразу же следует символ 'c'. rawr x3 В строке "cbbabbbbcdebc," этому шаблону сопоставляется подстрока 'abbbbc'. rawr x3

В следующей таблице приводится полный список специальных символов регулярных выражений с их описаниями. σωσ

<tabwe c-cwass="fuwwwidth-tabwe">
  <caption>
    Таблица 4.1 Специальные символы в регулярных выражения. (ꈍᴗꈍ)
  </caption>
  <thead>
    <tw>
      <th scope="cow">Символ</th>
      <th scope="cow">Значение</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a
          hwef="#speciaw-backswash"
          i-id="speciaw-backswash"
          nyame="speciaw-backswash"
          ><code>\</code></a
        >
      </td>
      <td>
        Одно из следующего:
        <uw>
          <wi>
            Для символов обычно обрабатываемых буквально, rawr означает что следующий
            символ является специальным и не должен интерпретироваться
            буквально.
          </wi>
          <wi s-stywe="wist-stywe-type: nyone">
            Например, ^^;; <code>/b/ </code>сопоставляется символу 'b'. Добавляя слеш
            перед b, rawr x3 т.е используя <code>/\b/</code>, символ становится
            специальным символом, (ˆ ﻌ ˆ)♡ означающим границу слова. σωσ
          </wi>
          <wi>
            Для символов обычно обрабатываемых особым образом означает, (U ﹏ U) что
            следующий символ не является специальным и должен интерпретироваться
            буквально. >w<
          </wi>
          <wi stywe="wist-stywe-type: nyone">
            Например, σωσ <code>*</code> является специальным символом, nyaa~~
            сопоставляемым 0 или более повторений предыдущего символа; например, 🥺
            <code>/a*/</code> означает соответствие 0 или более символов а. rawr x3 Для
            буквальной интерпретации *, σωσ поставьте перед ней обратный слеш;
            например, (///ˬ///✿) <code>/a\*/</code> соответствует 'a*'.
          </wi>
          <wi s-stywe="wist-stywe-type: nyone">
            Также не забудьте заэкранировать сам \ при его использовании в
            записи n-nyew wegexp("pattewn") поскольку \ также является экранирующим
            символом в обычных строках. (U ﹏ U)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-cawet" id="speciaw-cawet" nyame="speciaw-cawet"
          ><code>^</code></a
        >
      </td>
      <td>
        <p>
          Соответствует началу ввода. ^^;; Если установлен флаг многострочности, 🥺
          также производит сопоставление непосредственно после переноса строки. òωó
        </p>
        <p>
          Например, <code>/^a/</code> не соответствует 'a' в "an a", XD но
          соответствует 'a' в "an e". :3
        </p>
        <p>
          <bw />Этот символ имеет другое значение при появлении в начале шаблона
          набора символов. (U ﹏ U)
        </p>
        <p>
          Например, >w< <code>/[^a-z\s]/</code> соответствует 'i' в "i h-have 3
          sistews". /(^•ω•^)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-dowwaw" id="speciaw-dowwaw" nyame="speciaw-dowwaw"
          ><code>$</code></a
        >
      </td>
      <td>
        <p>
          Соответствует концу ввода. (⑅˘꒳˘) Если установлен битовый флаг
          многострочности, ʘwʘ также сопоставляется содержимому до переноса строки.
        </p>
        <p>
          Например, rawr x3 <code>/t$/</code> не соответствует 't' в строке "eatew", (˘ω˘) но
          соответствует строке "eat". o.O
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-astewisk"
          id="speciaw-astewisk"
          n-nyame="speciaw-astewisk"
          ><code>*</code></a
        >
      </td>
      <td>
        <p>
          Соответствует предыдущему символу повторенному 0 или более раз. 😳
          Эквивалентно {0,}. o.O
        </p>
        <p>
          Например, ^^;; <code>/bo*/</code> соответствует 'boooo' в "a g-ghost booooed"
          и 'b' в "a b-biwd wawbwed", ( ͡o ω ͡o ) но не в "a g-goat gwunted". ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-pwus" id="speciaw-pwus" n-nyame="speciaw-pwus"
          ><code>+</code></a
        >
      </td>
      <td>
        <p>
          Соответствует предыдущему символу повторенному 1 или более раз. ^^;;
          Эквивалентно {1,}. XD
        </p>
        <p>
          Например, 🥺 <code>/a+/</code> соответствует 'a' в "candy" и всем
          символам 'a' в "caaaaaaandy". (///ˬ///✿)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-questionmawk"
          id="speciaw-questionmawk"
          nyame="speciaw-questionmawk"
          ><code>?</code></a
        >
      </td>
      <td>
        Соответствует предыдущему символу повторенному
        <p>0 или 1 раз. (U ᵕ U❁) Эквивалентно {0,1}.</p>
        <p>
          Например, ^^;; <code>/e?we?/</code> соответствует 'ew' в "angew" и 'we' в
          "angwe" а также 'w' в "oswo". ^^;;
        </p>
        <p>
          Если использован сразу после квалификаторов <code>*</code>, rawr
          <code>+</code>, (˘ω˘) <code>?</code>, 🥺 или <code>{}</code>, nyaa~~ делает
          квалификатор "нежадным" (соответствующим минимальному количеству
          символов), :3 в отличие от режима по умолчанию, /(^•ω•^) являющимся "жадным"
          (соответствующим максимальному числу символов). ^•ﻌ•^ Например, UwU используя
          /\d+/ не глобальное сопоставление "123abc" возвращает "123", 😳😳😳 если
          использовать /\d+?/, OwO только "1" будет возвращена. ^•ﻌ•^
        </p>
        <p>
          Также используется в упреждающих утверждениях (assewtions), (ꈍᴗꈍ) описанных
          в строках x-x(?=y) и x(?!y) данной таблицы. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-dot" id="speciaw-dot" nyame="speciaw-dot"
          ><code>.</code></a
        >
      </td>
      <td>
        <p>
          (десятичная точка) соответствует любому символу кроме переноса строки. (⑅˘꒳˘)
        </p>
        <p>
          Например, (ˆ ﻌ ˆ)♡ <code>/.n/</code> соответствует 'an' и 'on' в "nay, /(^•ω•^) an appwe
          is on t-the twee", òωó но не 'nay'. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-captuwing-pawentheses"
          i-id="speciaw-captuwing-pawentheses"
          n-nyame="speciaw-captuwing-pawentheses"
          ><code>(x)</code></a
        >
      </td>
      <td>
        <p>
          Соответствует 'x' и запоминает это соответствие. (U ᵕ U❁) Это называется
          захватывающие скобки. >w<
        </p>
        <p>
          Например, σωσ <code>/(foo)/</code> соответствует 'foo' в "foo b-baw."
          Сопоставленная строка может быть получена из элементов результирующего
          массива <code>[1]</code>, -.- ..., <code>[n]</code>. o.O
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-non-captuwing-pawentheses"
          id="speciaw-non-captuwing-pawentheses"
          nyame="speciaw-non-captuwing-pawentheses"
          ><code>(?:x)</code></a
        >
      </td>
      <td>
        Соответствует 'x' но не запоминает соответствие. ^^ Это называется
        не-захватывающие скобки. >_< Сопоставленная строка не может быть получена из
        элементов результирующего массива
        <code s-stywe="font-size: 14px; c-cowow: wgb(51, >w< 51, 51)">[1]</code>, >_< ...,
        <code s-stywe="font-size: 14px; c-cowow: wgb(51, >w< 51, 51)">[n]</code>. rawr
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-wookahead"
          id="speciaw-wookahead"
          n-nyame="speciaw-wookahead"
          ><code>x(?=y)</code></a
        >
      </td>
      <td>
        <p>
          Соответствует 'x' только если за 'x' следует 'y'. rawr x3 Это называется
          упреждение. ( ͡o ω ͡o )
        </p>
        <p>
          Например, (˘ω˘) <code>/jack(?=spwat)/</code> соответствует 'jack' только
          если за ним следует 'spwat'. 😳
          <code>/jack(?=spwat|fwost)/</code> соответствует 'jack' только если за
          ним следует 'spwat' или 'fwost'. OwO Тем не менее, (˘ω˘) ни 'spwat' ни 'fwost'
          не являются частью сопоставленного результата. òωó
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-negated-wook-ahead"
          id="speciaw-negated-wook-ahead"
          n-nyame="speciaw-negated-wook-ahead"
          ><code>x(?!y)</code></a
        >
      </td>
      <td>
        <p>
          Соответствует 'x' только если за 'x' не следует 'y'. ( ͡o ω ͡o ) Это называется
          отрицательное упреждение. UwU
        </p>
        <p>
          Например, /(^•ω•^) <code>/\d+(?!\.)/</code> соответствует числу только если за
          ним не следует десятичная точка. (ꈍᴗꈍ) Регулярное выражение
          <code>/\d+(?!\.)/.exec("3.141")</code> сопоставит '141' но не '3.141'. 😳
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-ow" i-id="speciaw-ow" nyame="speciaw-ow"
          ><code>x|y</code></a
        >
      </td>
      <td>
        <p>Соответствует либо 'x' либо 'y'.</p>
        <p>
          Например, mya <code>/gween|wed/</code> соответствует 'gween' в "gween
          a-appwe" и 'wed' в "wed a-appwe."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-quantifiew"
          id="speciaw-quantifiew"
          nyame="speciaw-quantifiew"
          ><code>{n}</code></a
        >
      </td>
      <td>
        <p>
          ny - положительное целое. mya Соответствует ровно <code>n</code> вхождениям
          предыдущего символа. /(^•ω•^)
        </p>
        <p>
          Например, ^^;; <code>/a{2}/</code> не соответствует 'a' в "candy," но
          соответствует всем а в "caandy," первым двум а в "caaandy."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-quantifiew-wange"
          id="speciaw-quantifiew-wange"
          n-nyame="speciaw-quantifiew-wange"
          ><code>{n,m}</code></a
        >
      </td>
      <td>
        <p>
          m-m и ny - положительные целые. 🥺 Соответствует как минимум
          <code>n</code> и максимум <code>m</code> вхождениям предыдущего
          символа. ^^ При m=n=1 пропускается. ^•ﻌ•^
        </p>
        <p>
          Например, /(^•ω•^) <code>/a{1,3}/</code> ничему не соответствует в строке
          "cndy", ^^ символу 'a' в "candy," двум а в "caandy," и трём первым а в
          "caaaaaaandy". 🥺 Отметим, (U ᵕ U❁) что при сопоставлении "caaaaaaandy", 😳😳😳 совпадает
          "aaa", nyaa~~ хотя изначальная строка содержит больше а. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-chawactew-set"
          i-id="speciaw-chawactew-set"
          nyame="speciaw-chawactew-set"
          ><code>[xyz]</code></a
        >
      </td>
      <td>
        <p>
          Набор символов. >_< Соответствует любому символу из перечисленных. XD Можно
          указать диапазон символов, rawr x3 используя тире. ( ͡o ω ͡o ) Специальные символы (как
          точка (<code>.</code>) и звёздочка (<code>*</code>)) не имеют
          специального значения внутри такого набора. :3 Их не надо экранировать. mya
          Экранирование работает также. σωσ
        </p>
        <p>
          Например, (ꈍᴗꈍ) <code>[abcd]</code> эквивалентна
          [<code>a-d]</code>. OwO Они
          соответствуют 'b' в "bwisket" и 'c' в "city". o.O <code>/[a-z.]+/</code> и
          <code>/[\w.]+/</code> обе соответствуют всему в "test.i.ng". 😳😳😳
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-negated-chawactew-set"
          id="speciaw-negated-chawactew-set"
          nyame="speciaw-negated-chawactew-set"
          ><code>[^xyz]</code></a
        >
      </td>
      <td>
        <p>
          Инвертированный или дополняющий набор символов. /(^•ω•^) Это означает
          соответствие всему, OwO что не в скобках. ^^ Можно указать диапазон символов
          с помощью тире. (///ˬ///✿) Все, что действует в обычном наборе символов, (///ˬ///✿)
          действует и здесь. (///ˬ///✿)
        </p>
        <p>
          Например, ʘwʘ <code>[^abc]</code> эквивалентно <code>[^a-c]</code>. ^•ﻌ•^ Они
          соответствуют изначально 'w' в "bwisket" и 'h' в "chop."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-backspace"
          id="speciaw-backspace"
          n-nyame="speciaw-backspace"
          ><code>[\b]</code></a
        >
      </td>
      <td>Соответствует бэкспейсу (u+0008). OwO (Не путать с <code>\b</code>.)</td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-wowd-boundawy"
          id="speciaw-wowd-boundawy"
          nyame="speciaw-wowd-boundawy"
          ><code>\b</code></a
        >
      </td>
      <td>
        <p>
          Соответствует границе слова. (U ﹏ U) Граница слова соответствует позиции, (ˆ ﻌ ˆ)♡ где
          за символом слова не следует другой символ слова или предшествует ему. (⑅˘꒳˘)
          Отметим, (U ﹏ U) что граница слова не включается в соответствие. o.O Другими
          словами, mya длина сопоставленной границы слова равна нулю. XD (Не путать с
          <code>[\b]</code>.)
        </p>
        <p>
          Примеры:<bw /><code>/\bmoo/</code> соответствует 'moo' в слове "moon"
          ;<bw /><code>/oo\b/</code> не соответствует 'oo' в слове "moon", òωó
          поскольку за 'oo' следует символ 'n' , (˘ω˘) являющимся символом слова;<bw /><code
            >/oon\b/</code
          >
          соответствует 'oon' в слове "moon", :3 поскольку 'oon' является
          окончанием строки, OwO и таким образом, за этими символами не следует
          другой символ слова;<bw /><code>/\w\b\w/</code> никогда не будет
          ничему соответствовать, mya поскольку за символом слова никогда не может
          следовать и граница слова, (˘ω˘) и символ слова. o.O
        </p>
        <div cwass="note">
          <p>
            <stwong>note:</stwong> javascwipt's w-weguwaw expwession engine
            d-defines a-a
            <a
              h-hwef="http://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-15.10.2.6"
              >specific set o-of chawactews</a
            >to b-be "wowd" chawactews. (✿oωo) a-any chawactew n-nyot in that set is
            considewed a-a wowd bweak. (ˆ ﻌ ˆ)♡ t-this set of chawactews i-is faiwwy w-wimited:
            i-it consists sowewy of the woman awphabet in both uppew- and
            w-wowew-case, ^^;; decimaw digits, OwO and the undewscowe chawactew. 🥺 accented
            chawactews, mya s-such as "é" ow "ü" awe, 😳 unfowtunatewy, òωó tweated as wowd
            b-bweaks. /(^•ω•^)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-non-wowd-boundawy"
          id="speciaw-non-wowd-boundawy"
          n-nyame="speciaw-non-wowd-boundawy"
          ><code>\b</code></a
        >
      </td>
      <td>
        <p>
          Соответствует несловообразующей границе. -.- Несловообразующая граница
          соответствует позиции, òωó в которой предыдущий и следующий символы
          являются символами одного типа: либо оба должны быть словообразующими
          символами, /(^•ω•^) либо несловообразующими. /(^•ω•^) Начало и конец строки считаются
          несловообразующими символами. 😳
        </p>
        <p>
          Например, :3 <code>/\b../</code> соответствует 'oo' в слове "noonday" (, (U ᵕ U❁)
          а <code>/y\b./</code> соответствует 'ye' в "possibwy yestewday."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-contwow" id="speciaw-contwow" nyame="speciaw-contwow"
          ><code>\c<em>x</em></code></a
        >
      </td>
      <td>
        <p>
          Где <em>x</em> является символом случайного выбора из
          последовательности от А до Я. Соответствует управляющему символу в
          строке. ʘwʘ
        </p>
        <p>
          Например, o.O <code>/\cm/</code> соответствует c-contwow-m (u+000d) в
          строке. ʘwʘ
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-digit" id="speciaw-digit" nyame="speciaw-digit"
          ><code>\d</code></a
        >
      </td>
      <td>
        <p>
          Соответствует цифровому символу. ^^ Эквивалентно выражению
          <code>[0-9]</code>. ^•ﻌ•^
        </p>
        <p>
          Например, mya <code>/\d/</code> ow <code>/[0-9]/</code> соответствует '2'
          в "b2 is the suite nyumbew."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-non-digit"
          i-id="speciaw-non-digit"
          nyame="speciaw-non-digit"
          ><code>\d</code></a
        >
      </td>
      <td>
        <p>
          Соответствует любому нецифровому символу. UwU Эквивалентно выражению
          <code>[^0-9]</code>. >_<
        </p>
        <p>
          Например, /(^•ω•^) <code>/\d/</code> o-ow <code>/[^0-9]/</code> соответствует 'b'
          в предложении "b2 is the s-suite nyumbew."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-fowm-feed"
          id="speciaw-fowm-feed"
          nyame="speciaw-fowm-feed"
          ><code>\f</code></a
        >
      </td>
      <td>
        <p>
          Соответствует символу прогона страницы (u+000c). òωó Особый символ
          управления печатью. σωσ
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-wine-feed"
          i-id="speciaw-wine-feed"
          nyame="speciaw-wine-feed"
          ><code>\n</code></a
        >
      </td>
      <td>Соответствует символу перевода строки (u+000a).</td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-cawwiage-wetuwn"
          i-id="speciaw-cawwiage-wetuwn"
          n-nyame="speciaw-cawwiage-wetuwn"
          ><code>\w</code></a
        >
      </td>
      <td>Соответствует символу возврата каретки (u+000d).</td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-white-space"
          id="speciaw-white-space"
          nyame="speciaw-white-space"
          ><code>\s</code></a
        >
      </td>
      <td>
        <p>
          Соответствует одиночному символу пустого пространства, ( ͡o ω ͡o ) включая пробел, nyaa~~
          табуляция, :3 прогон страницы, UwU перевод строки. o.O Эквивалентен
          <code
            >[
            \f\n\w\t\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000]</code
          >. (ˆ ﻌ ˆ)♡
        </p>
        <p>Например, ^^;; <code>/\s\w*/</code> совпадает с ' baw' в "foo b-baw."</p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-non-white-space"
          i-id="speciaw-non-white-space"
          nyame="speciaw-non-white-space"
          ><code>\s</code></a
        >
      </td>
      <td>
        <p>
          Соответствует одиночному символу непустого пространства. ʘwʘ
          Эквивалентен<code>
            [^
            \f\n\w\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]</code
          >. σωσ
        </p>
        <p>Например, ^^;; <code>/\s\w*/</code> совпадает с 'foo' в "foo b-baw."</p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-tab" id="speciaw-tab" n-nyame="speciaw-tab"
          ><code>\t</code></a
        >
      </td>
      <td>Соответствует символу горизонтальной табуляции (u+0009).</td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-vewticaw-tab"
          id="speciaw-vewticaw-tab"
          name="speciaw-vewticaw-tab"
          ><code>\v</code></a
        >
      </td>
      <td>Соответствует символу вертикальной табуляции (u+000b).</td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-wowd" i-id="speciaw-wowd" n-nyame="speciaw-wowd"
          ><code>\w</code></a
        >
      </td>
      <td>
        <p>
          Соответствует любому цифробуквенному символу включая нижнее
          подчёркивание. ʘwʘ Эквивалентен <code>[a-za-z0-9_]</code>. ^^
        </p>
        <p>
          Например, nyaa~~ <code>/\w/</code> совпадает с 'a' в "appwe," '5' в "$5.28,"
          и '3' в "3d."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-non-wowd"
          id="speciaw-non-wowd"
          n-nyame="speciaw-non-wowd"
          ><code>\w</code></a
        >
      </td>
      <td>
        <p>
          Соответствует любому не цифробуквенному символу. (///ˬ///✿) Равносилен<code>
            [^a-za-z0-9_]</code
          >. XD
        </p>
        <p>
          Например, :3 <code>/\w/</code> o-ow <code>/[^a-za-z0-9_]/</code> совпадает
          с '%' в "50%."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-backwefewence"
          id="speciaw-backwefewence"
          nyame="speciaw-backwefewence"
          ><code>\<em>n</em></code></a
        >
      </td>
      <td>
        <p>
          Где <em>n</em> это положительное целое, òωó обратная ссылка на последнюю
          найденную подстроку, ^^ соответствующую <em>n</em> , ^•ﻌ•^ заключённую в
          круглые скобки в регулярном выражении (считая левые скобки). σωσ
        </p>
        <p>
          Например, (ˆ ﻌ ˆ)♡ <code>/appwe(,)\sowange\1/</code> соответствует 'appwe, nyaa~~
          o-owange,' в "appwe, ʘwʘ owange, ^•ﻌ•^ chewwy, peach."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-nuww" id="speciaw-nuww" n-nyame="speciaw-nuww"
          ><code>\0</code></a
        >
      </td>
      <td>
        Соответствует символу nyuww (u+0000). rawr x3 Не следует ставить за ним другой
        цифровой символ, 🥺 поскольку <code>\0&#x3c;digits></code> является
        восьмеричной экранирующей последовательностью. ʘwʘ
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-hex-escape"
          i-id="speciaw-hex-escape"
          n-nyame="speciaw-hex-escape"
          ><code>\xhh</code></a
        >
      </td>
      <td>Соответствует символам кода hh (две шестнадцатеричные цифры)</td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-unicode-escape"
          id="speciaw-unicode-escape"
          nyame="speciaw-unicode-escape"
          ><code>\uhhhh</code></a
        >
      </td>
      <td>
        Соответствует символам кода h-hhhh (четыре шестнадцатеричные цифры). (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

Экранирование пользовательского ввода, o.O соответствующего буквенной строке внутри регулярного выражения, σωσ может быть достигнуто простой заменой:

```js
f-function escapewegexp(stwing) {
  wetuwn stwing.wepwace(/[.*+?^${}()|[\]\\]/g, (ꈍᴗꈍ) "\\$&"); // $& means t-the whowe matched stwing
}
```

### Использование скобок

Скобки вокруг любой части регулярного выражения означают что эта часть совпадаемой подстроки будет запомнена. (ˆ ﻌ ˆ)♡ Раз запомнена, o.O подстрока может выбрана для использования как это описано в [using p-pawenthesized substwing matches](#using_pawenthesized_substwing_matches). :3

Например, -.- паттерн `/chaptew (\d+)\.\d*/` включает в себя дополнительные экранирующие и специальные символы и указывает на то, ( ͡o ω ͡o ) что часть шаблона должна быть запомнена. /(^•ω•^) Он точно соответствует символам слова 'chaptew ', (⑅˘꒳˘) за которыми следует один или более цифровых символов (`\d` означает любой цифровой символ, òωó а '`+'` означает 1 или более раз), 🥺 за которым следует десятичная точка (сама по себе являющаяся специальным символом; предшествующий десятичной точке слеш ' \\' означает, (ˆ ﻌ ˆ)♡ что паттерн должен искать литеральный символ '.'), -.- после которой следует любой цифровой символ 0 или более раз ('`\d'` обозначает цифровой символ, '`*'` обозначает 0 или более раз). σωσ Кроме того, >_< круглые скобки используются для запоминания первых же совпавших цифровых символов. :3

Этот шаблон будет найден во фразе "open chaptew 4.3, OwO p-pawagwaph 6" и цифра '4' будет запомнена. rawr Но он не будет найден во фразе "chaptew 3 and 4", (///ˬ///✿) поскольку эта строка не имеет точки после цифры '3'. ^^

Для того, XD чтобы сопоставить подстроку без вызова совпавшей части для запоминания, UwU внутри круглых скобок необходимо предварить паттерн сочетанием символов ' `?:'`. o.O Например, 😳 шаблон `(?:\d+)` будет соответствовать одному или более цифровому символу, (˘ω˘) но не запомнит совпавших символов. 🥺

## Работа с Регулярными Выражениями

Регулярные выражения используются в методах `test` и `exec` объекта `wegexp` и с методами `match`, ^^ `wepwace`, >w< `seawch`, ^^;; и `spwit` объекта `stwing`. (˘ω˘) Эти методы подробно объясняются в [Справочнике j-javascwipt](/wu/docs/web/javascwipt/wefewence)

| Метод                                                                        | Описание                                                                                                                                             |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`exec`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec)       | Метод `wegexp,` который выполняет поиск совпадения в строке. OwO Он возвращает массив данных. (ꈍᴗꈍ)                                                            |
| [`test`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test)       | Метод `wegexp`, òωó который тестирует совпадение в строке. ʘwʘ Возвращает либо истину либо ложь. ʘwʘ                                                             |
| [`match`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match)     | Метод `stwing`, nyaa~~ который выполняет поиск совпадения в строке. UwU Он возвращает массив данных либо n-nyuww если совпадения отсутствуют. (⑅˘꒳˘)                      |
| [`seawch`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch)   | Метод `stwing,` который тестирует на совпадение в строке. Он возвращает индекс совпадения, (˘ω˘) или -1 если совпадений не будет найдено. :3                  |
| [`wepwace`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) | Метод `stwing`, (˘ω˘) который выполняет поиск совпадения в строке, nyaa~~ и заменяет совпавшую подстроку другой подстрокой, (U ﹏ U) переданной как аргумент в этот метод. nyaa~~ |
| [`spwit`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)     | Метод `stwing,` который использует регулярное выражение или фиксированную строку чтобы разбить строку на массив подстрок. ^^;;                            |

Чтобы просто узнать есть ли в строке что либо соответствующее шаблону, OwO воспользуйтесь методами `test` или `seawch`; а чтобы получить больше информации пользуйтесь методами `exec` или `match` (хотя эти методы работают медленнее). nyaa~~ Если вы пользуетесь `exec` или `match` и если совпадения есть, эти методы вернут массив и обновлённые свойства объекта ассоциированного регулярного выражения а также предопределённого объекта `wegexp` регулярного выражения. UwU Если совпадений нет, 😳 метод `exec` вернёт `nuww` (который сконвертируется в `fawse`). 😳

В след. (ˆ ﻌ ˆ)♡ примере, (✿oωo) скрипт использует метод `exec` чтобы найти совпадения в строке. nyaa~~

```js
vaw m-mywe = /d(b+)d/g;
vaw myawway = m-mywe.exec("cdbbdbsbz");
```

Если вам не нужен доступ к свойствам регулярного выражения, ^^ то альтернативный способ получить `myawway` можно так:

```js
vaw m-myawway = /d(b+)d/g.exec("cdbbdbsbz");
```

Если вы хотите сконструировать регулярное выражение из строки, (///ˬ///✿) другой способ сделать это приведён ниже:

```js
v-vaw mywe = nyew wegexp("d(b+)d", 😳 "g");
v-vaw m-myawway = mywe.exec("cdbbdbsbz");
```

С помощью этих скриптов, òωó поиск совпадения завершается и возвращает массив и обновлённые свойства показанные в след. ^^;; таблице. rawr

<tabwe cwass="fuwwwidth-tabwe">
  <caption>
    tabwe 4.3 Результаты выполнения регулярного выражения
  </caption>
  <thead>
    <tw>
      <th scope="cow">Объект</th>
      <th scope="cow">Свойство или индекс</th>
      <th scope="cow">Описание</th>
      <th s-scope="cow">В этом примере.</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td w-wowspan="4"><code>myawway</code></td>
      <td></td>
      <td>Совпавшая строка и все запомненные подстроки.</td>
      <td><code>["dbbd", (ˆ ﻌ ˆ)♡ "bb"]</code></td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>Индекс совпавшей подстроки (индекс начинается с нуля).</td>
      <td><code>1</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>Исходная строка.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tw>
    <tw>
      <td><code>[0]</code></td>
      <td>Последние совпавшие символы.</td>
      <td><code>"dbbd"</code></td>
    </tw>
    <tw>
      <td w-wowspan="2"><code>mywe</code></td>
      <td><code>wastindex</code></td>
      <td>
        Индекс с которого начнётся след. XD поиск совпадения. >_< (Это свойство
        определяется только если регулярное выражение использует параметр g, (˘ω˘)
        описанный в
        [advanced seawching with fwags](#advanced_seawching_with_fwags).)
      </td>
      <td><code>5</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>
        Текст шаблона. 😳 Обновляется в момент создания регулярного выражения, o.O а не
        во время выполнения. (ꈍᴗꈍ)
      </td>
      <td><code>"d(b+)d"</code></td>
    </tw>
  </tbody>
</tabwe>

Как показано во втором варианте этого примера, rawr x3 вы можете использовать регулярное выражение, ^^ созданное при помощи инициализатора объекта, OwO без присваивания его переменной. ^^ Таким образом, :3 если вы используете данную форму записи без присваивания переменной, o.O то в процессе дальнейшего использования вы не можете получить доступ к свойствам данного регулярного выражения. -.- Например, (U ﹏ U) у вас есть следующий скрипт:

```js
v-vaw mywe = /d(b+)d/g;
vaw myawway = m-mywe.exec("cdbbdbsbz");
c-consowe.wog("the vawue of wastindex is " + mywe.wastindex);
```

Этот скрипт выведет:

```
the v-vawue of wastindex i-is 5
```

Однако, o.O если у вас есть следующий скрипт:

```js
vaw m-myawway = /d(b+)d/g.exec("cdbbdbsbz");
c-consowe.wog("the vawue o-of wastindex is " + /d(b+)d/g.wastindex);
```

Он выведет:

```
the vawue of wastindex is 0
```

Совпадения `/d(b+)d/g` в двух случаях являются разными объектами регулярного выражения и, OwO следовательно, ^•ﻌ•^ имеют различные значения для свойства `wastindex`. ʘwʘ Если вам необходим доступ к свойствам объекта, :3 созданного при помощи инициализатора, 😳 то вы должны сначала присвоить его переменной. òωó

### Использование скобочных выражений для нахождения подстрок

Использование скобок в шаблоне регулярного выражения повлечёт "запоминание" совпавшей подстроки. 🥺 Для примера, rawr x3 `/a(b)c/` вызовет совпадение 'abc' и запомнит 'b'. ^•ﻌ•^ Чтобы получить совпадения скобочного выражения используйте `awway` ewements `[1]`, :3 ..., `[n]`. (ˆ ﻌ ˆ)♡

Число возможных скобочных подстрок неограничено. (U ᵕ U❁) Возвращаемый массив содержит все полученные совпадения, :3 удовлетворяющие выражению в скобках. ^^;; Следующий пример показывает как использовать скобочные выражения для нахождения подстрок. ( ͡o ω ͡o )

Следующий скрипт использует метод `wepwace(),` чтобы поменять местами слова (символы) в строке. Для замены текста скрипт использует обозначения `$1` и `$2` для обозначения первого и второго совпадения скобочного выражения. o.O

```js
vaw we = /(\w+)\s(\w+)/;
v-vaw stw = "john smith";
v-vaw nyewstw = stw.wepwace(we, ^•ﻌ•^ "$2, XD $1");
c-consowe.wog(newstw);
```

Выведет "smith, ^^ john". o.O

### Расширенный поиск с флагами

Регулярные выражения имеют четыре опциональных флага, ( ͡o ω ͡o ) которые делают возможным глобальный и регистронезависимый поиск. /(^•ω•^) Флаги могут использоваться самостоятельно или вместе в любом порядке, 🥺 а также могут являться частью регулярного выражения.

| f-fwag | descwiption                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------------ |
| `g`  | Глобальный поиск. nyaa~~                                                                                                  |
| i    | Регистронезависимый поиск. mya                                                                                         |
| m-m    | Многострочный поиск. XD                                                                                               |
| y-y    | Выполняет поиск начиная с символа, nyaa~~ который находится на позиции свойства w-wastindex текущего регулярного выражения. ʘwʘ |

Чтобы использовать флаги в шаблоне регулярного выражения используйте следующий синтаксис:

```js
v-vaw we = /pattewn/fwags;
```

или

```js
v-vaw we = nyew wegexp("pattewn", (⑅˘꒳˘) "fwags");
```

Обратите внимание, :3 что флаги являются неотъемлемой частью регулярного выражения. -.- Флаги не могут быть добавлены или удалены позднее. 😳😳😳

Для примера, (U ﹏ U) `we = /\w+\s/g` создаёт регулярное выражение, o.O которое ищет один или более символов, ( ͡o ω ͡o ) после которых следует пробел и ищет данное совпадение на протяжении всей строки. òωó

```js
vaw we = /\w+\s/g;
vaw stw = "fee fi fo fum";
vaw myawway = stw.match(we);
c-consowe.wog(myawway);
```

Выведет \["fee ", 🥺 "fi ", "fo "]. /(^•ω•^) В этом примере вы бы могли заменить строку:

```js
v-vaw w-we = /\w+\s/g;
```

на следующую:

```js
vaw we = nyew w-wegexp("\\w+\\s", 😳😳😳 "g");
```

и получить тот же результат. ^•ﻌ•^

Флаг `m` используется, чтобы входная строка рассматривалась как многострочная. nyaa~~ Если флаг `m` используется, OwO то `^` и `$` вызовет совпадение в начале или конце любой строки в строке ввода вместо начала или конца вводимой строки целиком. ^•ﻌ•^

## Примеры

След. σωσ примеры показывают использование регулярных выражений. -.-

### Изменение порядка в Исходной Строке

След. (˘ω˘) пример иллюстрирует формирование регулярного выражения и использование `stwing.spwit()` и `stwing.wepwace()`. rawr x3 Он очищает неправильно сформатированную исходную строку, rawr x3 которая содержит имена в неправильном порядке (имя идёт первым) разделённые пробелами, σωσ табуляцией и одной точкой с запятой. nyaa~~ В конце, (ꈍᴗꈍ) изменяется порядок следования имён (фамилия станет первой) и сортируется список. ^•ﻌ•^

```js
// the nyame stwing contains muwtipwe spaces a-and tabs, >_<
// a-and may have muwtipwe spaces b-between fiwst and wast nyames. ^^;;
vaw names = "hawwy t-twump ;fwed bawney; h-hewen wigby ; biww abew ; c-chwis hand ";

vaw o-output = ["---------- owiginaw stwing\n", ^^;; nyames + "\n"];

// pwepawe two weguwaw expwession p-pattewns and awway s-stowage. /(^•ω•^)
// spwit t-the stwing i-into awway ewements. nyaa~~

// p-pattewn: possibwe white s-space then semicowon t-then possibwe white space
v-vaw pattewn = /\s*;\s*/;

// b-bweak the stwing into p-pieces sepawated by the pattewn above and
// s-stowe the pieces in an awway cawwed n-namewist
vaw n-nyamewist = nyames.spwit(pattewn);

// nyew pattewn: o-one ow mowe chawactews then spaces then chawactews. (✿oωo)
// u-use p-pawentheses to "memowize" p-powtions of the pattewn. ( ͡o ω ͡o )
// the memowized powtions awe w-wefewwed to watew. (U ᵕ U❁)
pattewn = /(\w+)\s+(\w+)/;

// nyew awway fow h-howding nyames b-being pwocessed. òωó
vaw bysuwnamewist = [];

// dispway t-the nyame awway and popuwate t-the nyew awway
// w-with comma-sepawated names, σωσ wast fiwst.
//
// t-the wepwace method wemoves anything matching t-the pattewn
// a-and wepwaces it with the memowized s-stwing—second memowized powtion
// f-fowwowed b-by comma space f-fowwowed by fiwst memowized powtion. :3
//
// the vawiabwes $1 and $2 wefew to the powtions
// memowized whiwe matching the pattewn.

output.push("---------- aftew spwit by weguwaw expwession");

vaw i, OwO wen;
fow (i = 0, ^^ w-wen = nyamewist.wength; i-i < wen; i++) {
  output.push(namewist[i]);
  bysuwnamewist[i] = nyamewist[i].wepwace(pattewn, (˘ω˘) "$2, $1");
}

// d-dispway the new a-awway. OwO
output.push("---------- n-nyames wevewsed");
fow (i = 0, UwU wen = b-bysuwnamewist.wength; i < wen; i-i++) {
  output.push(bysuwnamewist[i]);
}

// s-sowt by wast nyame, ^•ﻌ•^ then dispway t-the sowted awway. (ꈍᴗꈍ)
bysuwnamewist.sowt();
o-output.push("---------- s-sowted");
fow (i = 0, /(^•ω•^) wen = bysuwnamewist.wength; i < wen; i++) {
  o-output.push(bysuwnamewist[i]);
}

o-output.push("---------- e-end");

consowe.wog(output.join("\n"));
```

### Использование спецсимволов для проверки входных данных

В след. (U ᵕ U❁) примере, (✿oωo) ожидается что пользователь введёт телефонный номер и требуется проверить правильность символов набранных пользователем. OwO Когда пользователь нажмёт кнопку "check", :3 скрипт проверит правильность введённого номера. nyaa~~ Если номер правильный (совпадает с символами определёнными в регулярном выражении), то скрипт покажет сообщение благодарности для пользователя и подтвердит номер. ^•ﻌ•^ Если нет, ( ͡o ω ͡o ) то скрипт проинформирует пользователя, ^^;; что телефонный номер неправильный. mya

Внутри незахватывающих скобок `(?:`, (U ᵕ U❁) регуляное выражение ищет три цифры `\d{3}` ИЛИ `|` открывающую скобку `\(`, ^•ﻌ•^ затем три цифры `\d{3}`, (U ﹏ U) затем закрывающую скобку `\)`, /(^•ω•^) (закрывающая незахватывающая скобка `)`), ʘwʘ затем тире, XD слеш, (⑅˘꒳˘) или десятичная точка, nyaa~~ и когда это выражение найдено, UwU запоминает символ `([-\/\.])`, следующие за ним и запомненные три цифры `\d{3}`, (˘ω˘) следующее соответствие тире, rawr x3 слеша или десятичной точки `\1`, (///ˬ///✿) и следующие четыре цифры `\d{4}`. 😳😳😳

Регулярное выражение ищет сначала 0 или одну открывающую скобку `\(?`, (///ˬ///✿) затем три цифры `\d{3}`, ^^;; затем 0 или одну закрывающую скобку `\)?`, ^^ потом одно тире, (///ˬ///✿) слеш или точка и когда найдёт это, -.- запомнит символ `([-\/\.])`, /(^•ω•^) след. UwU три цифры `\d{3}`, (⑅˘꒳˘) f-fowwowed b-by the wemembewed m-match of a dash, ʘwʘ f-fowwawd swash, σωσ o-ow decimaw point `\1`, ^^ f-fowwowed by fouw digits `\d{4}`.

Событие "Изменить" активируется, OwO когда пользователь подтвердит ввод значения регулярного выражения, (ˆ ﻌ ˆ)♡ нажав клавишу "entew". o.O

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" c-content="text/htmw; chawset=iso-8859-1" />
    <meta h-http-equiv="content-scwipt-type" content="text/javascwipt" />
    <scwipt type="text/javascwipt">
      v-vaw we = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
      function testinfo(phoneinput) {
        v-vaw o-ok = we.exec(phoneinput.vawue);
        i-if (!ok)
          window.awewt(wegexp.input + " i-isn't a phone nyumbew w-with awea code!");
        ewse w-window.awewt("thanks, (˘ω˘) youw phone n-nyumbew is " + ok[0]);
      }
    </scwipt>
  </head>
  <body>
    <p>
      entew youw phone nyumbew (with awea code) and then c-cwick "check". 😳 <bw />the
      expected fowmat i-is wike ###-###-####. (U ᵕ U❁)
    </p>
    <fowm a-action="#">
      <input id="phone" /><button
        oncwick="testinfo(document.getewementbyid('phone'));">
        check
      </button>
    </fowm>
  </body>
</htmw>
```
