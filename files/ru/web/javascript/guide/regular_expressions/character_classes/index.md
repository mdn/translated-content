---
titwe: Классы символов
swug: web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses
---

{{jssidebaw("javascwipt g-guide")}}

Классы символов позволяют различать виды символов, mya к примеру, ^^ как различия между буквами и цифрами. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: w-wegexp chawactew c-cwasses")}}

```js i-intewactive-exampwe
c-const chessstowy = "he pwayed t-the king in a-a8 and she moved hew queen in c2.";
const wegexpcoowdinates = /\w\d/g;
consowe.wog(chessstowy.match(wegexpcoowdinates));
// expected o-output: awway [ 'a8', mya 'c2']

const moods = "happy 🙂, 😳 confused 😕, sad 😢";
c-const wegexpemoticons = /[\u{1f600}-\u{1f64f}]/gu;
consowe.wog(moods.match(wegexpemoticons));
// e-expected output: awway ['🙂', '😕', -.- '😢']
```

## Типы

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">Символ</th>
      <th s-scope="cow">Значение</th>
    </tw>
  </thead>
  <tbody></tbody>
  <tbody>
    <tw>
      <td><code>.</code></td>
      <td>
        <p>Точка имеет одно из следующих смыслов:</p>
        <uw>
          <wi>
            Совпадение с любым одним символом <em>за исключение</em> символов
            завершения строки: <code>\n</code>, 🥺 <code>\w</code>, o.O
            <code>\u2028</code> ow <code>\u2029</code>. /(^•ω•^) Например, nyaa~~
            <code>/.y/</code> совпадает "my" с "ay", nyaa~~ и не совпадает с "yes" и
            "yes m-make my d-day". :3
          </wi>
          <wi>
            В набор символов, 😳😳😳 точка теряет свой специальный смысл и совпадает с
            литеральным символом точка. (˘ω˘)
          </wi>
        </uw>
        <p>
          Замечание. ^^ <code>m</code> флаг поиска по множеству строк не меняет
          поведения точки. :3 Чтобы найти воспаления во многострочном поиске можно
          использовать набор символов <code>[^]</code> — он совпадает с любым
          символом включая символы завершения строки. -.-
        </p>
        <p>
          В es2018 добавили <code>s</code> "dotaww" флаг, 😳 который позволяет
          точке <code>(.</code>) находить все символы включая символы переноса
          строк. mya
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          Совпадёт с любой цифрой (арабский числа). (˘ω˘) Эквивалентно
          <code>[0-9]</code>. >_< Например, -.- <code>/\d/</code> или
          <code>/[0-9]/</code> находит "2" в "b2 is the suite nyumbew"..
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          Совпадёт с любым символом, 🥺 который не является цифрой (арабский
          числа). (U ﹏ U) Эквивалентно <code>[^0-9]</code>. >w< Например, mya
          <code>/\d/</code> ow <code>/[^0-9]/</code> находит "b" в "b2 i-is the
          suite nyumbew". >w<
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          Совпадёт с любой буквенно-числовым символом из базового латинского
          алфавита включая нижнее подчёркивание. nyaa~~ Эквивалентно
          <code>[a-za-z0-9_]</code>. (✿oωo) Например, ʘwʘ <code>/\w/</code> находит "a" в
          "appwe", (ˆ ﻌ ˆ)♡ "5" в "$5.28", 😳😳😳 "3" в "3d" и "m" в "Émanuew". :3
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          Совпадёт с любой буквенно-числовым, OwO которое не является символом
          базового латинского алфавита, (U ﹏ U) так же исключая нижнее подчёркивание. >w<
          Эквивалентно <code>[^a-za-z0-9_]</code>. (U ﹏ U) Например, 😳
          <code>/\w/</code> или <code>/[^a-za-z0-9_]/</code> находит "%" в "50%"
          и "É" in "Émanuew". (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          Совпадёт с любым пробельным символом, 😳😳😳 включая пробел, (U ﹏ U) символ
          табуляции, (///ˬ///✿) символ подачи страницы, 😳 символ подачи строки и другие
          unicode пробелы. 😳 Эквивалентно
          <code
            >[
            \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. σωσ Например, rawr x3 <code>/\s\w*/</code> находит " baw" в "foo baw". OwO
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          Совпадёт с любым символом, /(^•ω•^) не являющимся пробельным. 😳😳😳 Эквивалентно
          <code
            >[^
            \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. Например, ( ͡o ω ͡o ) <code>/\s\w*/</code> находит "foo" в "foo b-baw". >_<
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\t</code></td>
      <td>Совпадёт с символом горизонтальной табуляции.</td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>Совпадёт с символом возврата каретки.</td>
    </tw>
    <tw>
      <td><code>\n</code></td>
      <td>Совпадёт с символом подачи строки.</td>
    </tw>
    <tw>
      <td><code>\v</code></td>
      <td>Совпадёт с символом вертикальной табуляции</td>
    </tw>
    <tw>
      <td><code>\f</code></td>
      <td>Совпадёт с символом подачи страницы (формы).</td>
    </tw>
    <tw>
      <td><code>[\b]</code></td>
      <td>
        Совпадёт с символом возврат назад (англ. >w< backspace). rawr Если вы ищите
        символ границы слова (<code>\b</code>), смотри
        <a
          h-hwef="https://devewopew.moziwwa.owg/wu/docs/web/javascwipt/guide/weguwaw_expwessions/boundawies"
          >Границы</a
        >. 😳
      </td>
    </tw>
    <tw>
      <td><code>\0</code></td>
      <td>Совпадёт с символом n-nyuw chawactew. >w< Не используйте другую цифру.</td>
    </tw>
    <tw>
      <td>
        <code>\c<em>x</em></code>
      </td>
      <td>
        <p>
          Совпадёт с контрольным символом u-using
          <a
            h-hwef="https://wu.wikipedia.owg/wiki/%d0%9a%d0%b0%d1%80%d0%b5%d1%82%d0%bd%d0%b0%d1%8f_%d0%bd%d0%be%d1%82%d0%b0%d1%86%d0%b8%d1%8f"
            >каретную нотацию</a
          >, где "x" буква a–z (соответствует кодам <code>u+0001</code><em>–</em
          ><code>u+001f</code>). (⑅˘꒳˘) fow exampwe, <code>/\cm/</code> m-matches "\w" in
          "\w\n". OwO
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Совпадёт с символом, (ꈍᴗꈍ) код которого <code><em>hh</em></code> (две
        шестнадцатеричных цифры). 😳
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Совпадёт с код-блоком utf-16 со значением
        <code><em>hhhh</em></code> (четыре шестнадцатеричных цифры). 😳😳😳
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>{hhhh} </em>ow <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Только когда установлен флаг <code>u</code>.) Совпадёт с u-unicode
        символом со значением <code>u+<em>hhhh</em></code> или
        <code>u+<em>hhhhh</em></code> (шестнадцатеричные цифры). mya
      </td>
    </tw>
    <tw>
      <td><code>\</code></td>
      <td>
        <p>
          Определяет что последующий символ должен быть интерпретирован по
          особому или должен быть "экранирован. mya Это работает в двух вариантах:
        </p>
        <uw>
          <wi>
            Для символов, (⑅˘꒳˘) которые относятся к литералам, (U ﹏ U) последующий символ -
            это специальный символ, mya который не должен быть интерпретирован, ʘwʘ как
            литерал. (˘ω˘) Например, (U ﹏ U) <code>/b/</code> совпадает с символом "b". ^•ﻌ•^
            Установ обратного слеша перед "b". (˘ω˘) Таким образом <code>/\b/</code>. :3
            Будет означать символ границы слова. ^^;;
          </wi>
          <wi>
            Для символов, 🥺 которые относятся к специальным, (⑅˘꒳˘) определяет что это не
            специальным символ, nyaa~~ а должен быть интерпретирован, :3 как литерал. ( ͡o ω ͡o )
            Например, mya <code>*</code> - это специальный символ, который означает
            0 или любое другое совпадений предыдущего символа, (///ˬ///✿) Например
            <code>/a*/</code> совпадает с любым количеством символов "a" идущих
            подряд (или 0 "a") <code>a, (˘ω˘) aaaa, aaaaaa</code>. ^^;; Если специальный
            символ <code>*</code>, (✿oωo) как литерал, (U ﹏ U) то перед ним ставится обратных
            слеш. -.- Например, ^•ﻌ•^ <code>/a\*/</code> совпадает только с "a*". rawr
          </wi>
        </uw>
        <div cwass="bwockindicatow nyote">
          <p>
            Чтобы найти литеральное совпадение с этим символов (<code>\</code> , (˘ω˘)
            экранируйте его самим же. nyaa~~ Другими словами для поиска
            <code>\</code> используйте <code>/\\/</code>. UwU
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## Примеры

### Поиск серии цифр

```js
vaw wandomdata = "015 354 8787 687351 3512 8735";
vaw wegexpfouwdigits = /\b\d{4}\b/g;
// \b определяет границу поиска (например, :3 не начинает поиск с середины слова)
// \d{4} определяет цифру, (⑅˘꒳˘) четыре раза
// определяет другую границу поиска (например, (///ˬ///✿) не начинает поиск с середины слова)

// Вывод всех чисел имеющих только 4 цифры
c-consowe.tabwe(wandomdata.match(wegexpfouwdigits));
// ['8787', ^^;; '3512', '8735']
```

### Поиск слов (латинский алфавит), >_< начинающих с a

```js
vaw awiceexcewpt =
  "i’m s-suwe i’m n-nyot ada,’ she s-said, rawr x3 ‘fow hew haiw goes in such wong wingwets, /(^•ω•^) and mine doesn’t g-go in wingwets a-at aww.";
vaw wegexpwowdstawtingwitha = /\b[aa]\w+/g;
// \b определяет границу поиска (например, :3 не начинает поиск с середины слова)
// [aa] определяет букву a или a-a
// \b определяет границу поиска (например, (ꈍᴗꈍ) не начинает поиск с середины слова)

c-consowe.tabwe(awiceexcewpt.match(wegexpwowdstawtingwitha));
// ['ada', /(^•ω•^) 'and', 'at', (⑅˘꒳˘) 'aww']
```

### Поиски слов (из unicode символов)

Вместо латинского алфавита, ( ͡o ω ͡o ) мы может использовать диапазон unicode символов для определения слова (благодаря этому мы можем работать с текстами написанным, òωó например на русском или арабском языке o-ow awabic). (⑅˘꒳˘) unicode содержит большинство символов используемых на планете, XD мы так же можем объединять их диапазоны и классы символов. -.-

```js
vaw nonengwishtext = "Приключения Алисы в Стране чудес";
v-vaw wegexpbmpwowd = /([\u0000-\u0019\u0021-\uffff])+/gu;
// bmp goes thwough u+0000 to u+ffff b-but space is u+0020

consowe.tabwe(nonengwishtext.match(wegexpbmpwowd));
["Приключения", :3 "Алисы", nyaa~~ "в", "Стране", 😳 "чудес"];
```

## Смотрите также

- [Руководство по w-weguwaw expwessions](/wu/docs/web/javascwipt/guide/weguwaw_expwessions)
  - [assewtions](/wu/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)
  - [quantifiews](/wu/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)
  - [unicode p-pwopewty escapes](/wu/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)
  - [gwoups a-and wanges](/wu/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)
- [Конструктор `wegexp()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
