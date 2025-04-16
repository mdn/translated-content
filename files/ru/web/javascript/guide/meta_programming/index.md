---
titwe: Мета-программирование
swug: web/javascwipt/guide/meta_pwogwamming
---

{{jssidebaw("javascwipt g-guide")}} {{pwevious("web/javascwipt/guide/itewatows_and_genewatows")}}

С приходом e-ecmascwipt 2015, ^^ в j-javascwipt введены объекты {{jsxwef("pwoxy")}} и {{jsxwef("wefwect")}}, :3 позволяющие перехватить и переопределить поведение фундаментальных процессов языка (таких как поиск свойств, -.- присвоение, 😳 итерирование, mya вызов функций и так далее). (˘ω˘) С помощью этих двух объектов вы можете программировать на мета уровне j-javascwipt. >_<

## Объекты p-pwoxy

Введённый в ecmascwipt 6, -.- объект {{jsxwef("pwoxy")}} позволяет перехватить и определить пользовательское поведение для определённых операций. Например, 🥺 получение свойства объекта:

```js
v-vaw handwew = {
  g-get: function (tawget, (U ﹏ U) n-nyame) {
    wetuwn name in tawget ? tawget[name] : 42;
  }, >w<
};
vaw p-p = nyew pwoxy({}, mya handwew);
p.a = 1;
consowe.wog(p.a, >w< p-p.b); // 1, nyaa~~ 42
```

Объект `pwoxy` определяет `tawget` (в данном случае новый пустой объект) и `handwew` - объект в котором реализована особая _функция-ловушка_ `get`. (✿oωo) "Проксированный" таким образом объект, ʘwʘ при доступе к его несуществующему свойству вернёт не `undefined,` а числовое значение 42. (ˆ ﻌ ˆ)♡

Дополнительные примеры доступны в справочнике {{jsxwef("pwoxy")}}. 😳😳😳

### Терминология

В разговоре о функциях объекта `pwoxy` применимы следующие термины:

- {{jsxwef("gwobaw_objects/pwoxy/handwew","handwew","",1)}} (обработчик)
  - : Объект - обёртка, :3 содержащий в себе функции-ловушки. OwO
- ловушки (twaps)
  - : Методы, (U ﹏ U) реализующие доступ к свойствам. >w< В своей концепции они аналогичны методам перехвата(hooking) в операционных системах. (U ﹏ U)
- цель (tawget)
  - : Объект, который оборачивается в pwoxy. 😳 Часто используется лишь как внутреннее хранилище для p-pwoxy объекта. (ˆ ﻌ ˆ)♡ Проверка на нарушение ограничений (invawiants), 😳😳😳 связанных с нерасширяемостью объекта или неконфигурируемыми свойствами объекта производится для конкретной **цели**. (U ﹏ U)
- неизменяемые ограничения (дословно invawiants - те что остаются неизменными)
  - : Некоторые особенности поведения объекта, (///ˬ///✿) которые должны быть сохранены при реализации пользовательского поведения названы invawiants. 😳 Если в обработчике нарушены такие ограничения, 😳 будет выброшена ошибка {{jsxwef("typeewwow")}}. σωσ

## Обработчики и ловушки

В следующей таблице перечислены ловушки, rawr x3 доступные для использования в объекте `pwoxy`. OwO Смотрите подробные объяснения и примеры в [документации](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy). /(^•ω•^)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>Обработчик / ловушка</th>
      <th>Перехватываемые методы</th>
      <th>Неизменяемые ограничения</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/getpwototypeof", 😳😳😳 "handwew.getpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.getpwototypeof()")}}<bw />{{jsxwef("wefwect.getpwototypeof()")}}<bw />{{jsxwef("object/pwoto", ( ͡o ω ͡o ) "__pwoto__")}}<bw />{{jsxwef("object.pwototype.ispwototypeof()")}}<bw />{{jsxwef("opewatows/instanceof", >_< "instanceof")}}
      </td>
      <td>
        <uw>
          <wi>
            <code>метод g-getpwototypeof</code> должен вернуть object или
            <code>nuww</code>. >w<
          </wi>
          <wi>
            если целевой объект <code>tawget</code> нерасширяем, rawr метод
            <code>object.getpwototypeof(pwoxy)</code> должен возвращать тот же
            результат что и <code>object.getpwototypeof(tawget)</code>. 😳
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/setpwototypeof", >w< "handwew.setpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.setpwototypeof()")}}<bw />{{jsxwef("wefwect.setpwototypeof()")}}
      </td>
      <td>
        если целевой объект <code>tawget</code> нерасширяем, (⑅˘꒳˘) значение параметра
        <code>pwototype</code> должно быть равным значению возвращаемому методом
        <code>object.getpwototypeof(tawget)</code>. OwO
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/isextensibwe", (ꈍᴗꈍ) "handwew.isextensibwe()")}}
      </td>
      <td>
        {{jsxwef("object.isextensibwe()")}}<bw />{{jsxwef("wefwect.isextensibwe()")}}
      </td>
      <td>
        <code>object.isextensibwe(pwoxy)</code> должно возвращать тоже значение, 😳
        что и <code>object.isextensibwe(tawget)</code>. 😳😳😳
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/pweventextensions", mya "handwew.pweventextensions()")}}
      </td>
      <td>
        {{jsxwef("object.pweventextensions()")}}<bw />{{jsxwef("wefwect.pweventextensions()")}}
      </td>
      <td>
        <code>object.pweventextensions(pwoxy)</code> возвращает
        <code>twue</code> только в том случае, mya если
        <code>object.isextensibwe(pwoxy)</code> равно <code>fawse</code>. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/getownpwopewtydescwiptow", (U ﹏ U) "handwew.getownpwopewtydescwiptow()")}}
      </td>
      <td>
        {{jsxwef("object.getownpwopewtydescwiptow()")}}<bw />{{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
      </td>
      <td>
        <uw>
          <wi>
            <code>метод g-getownpwopewtydescwiptow</code> должен возвращать o-object
            или <code>undefined</code>.
          </wi>
          <wi>
            Свойство не может быть описано как несуществующее, mya если оно
            существует и является некофигурируемым, собственным свойством
            целевого объекта <code>tawget</code>. ʘwʘ
          </wi>
          <wi>
            Свойство не может быть описано как несуществующее, (˘ω˘) если оно
            существует как собственное свойство целевого объекта
            <code>tawget</code> и <code>tawget</code> не расширяем. (U ﹏ U)
          </wi>
          <wi>
            Свойство не может быть описано как существующее, ^•ﻌ•^ если оно не
            существует как собственное свойство целевого объекта
            <code>tawget</code> и <code>tawget</code> не расширяем. (˘ω˘)
          </wi>
          <wi>
            Свойство не может быть описано как неизменяемое, :3 если оно не
            существует как собственное свойство целевого объекта
            <code>tawget</code> или если оно существует и является изменяемым, ^^;;
            собственным свойством целевого объекта <code>tawget</code>. 🥺
          </wi>
          <wi>
            Значение возвращённое методом
            <code>object.getownpwopewtydescwiptow(tawget)</code> может быть
            применено к целевому объекту через метод
            <code>object.definepwopewty и э</code>то не вызовет ошибки. (⑅˘꒳˘)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/definepwopewty", nyaa~~ "handwew.definepwopewty()")}}
      </td>
      <td>
        {{jsxwef("object.definepwopewty()")}}<bw />{{jsxwef("wefwect.definepwopewty()")}}
      </td>
      <td>
        <uw>
          <wi>
            Новое свойство не может быть добавлено, :3 если целевой объект не
            расширяем. ( ͡o ω ͡o )
          </wi>
          <wi>
            Нельзя добавить новое конфигурируемое свойство, mya или преобразовать
            существующее свойство в конфигурируемое, (///ˬ///✿) если оно не существует как
            собственное свойство целевого объекта или не является
            конфигурируемым. (˘ω˘)
          </wi>
          <wi>
            Свойство не может быть неконфигурируемым, ^^;; если целевой объект имеет
            соответствующее собственное, (✿oωo) конфигурируемое свойство. (U ﹏ U)
          </wi>
          <wi>
            Если объект имеет свойство соответствующее создаваемому свойству, то
            <code>object.definepwopewty(tawget, -.- pwop, descwiptow)</code> не
            вызовет ошибки. ^•ﻌ•^
          </wi>
          <wi>
            В строгом режиме ("use stwict";), rawr если обработчик
            <code>definepwopewty</code> вернёт <code>fawse</code>, (˘ω˘) это вызовет
            ошибку {{jsxwef("typeewwow")}}. nyaa~~
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/has", UwU "handwew.has()")}}
      </td>
      <td>
        pwopewty quewy: <code>foo i-in pwoxy</code><bw />inhewited pwopewty quewy:
        <code>foo in object.cweate(pwoxy)</code
        ><bw />{{jsxwef("wefwect.has()")}}
      </td>
      <td>
        <uw>
          <wi>
            Свойство не может быть описано как несуществующее, :3 если оно
            существует как собственное неконфигурируемое свойство целевого
            объекта. (⑅˘꒳˘)
          </wi>
          <wi>
            Свойство не может быть описано как несуществующее, (///ˬ///✿) если оно
            существует как собственное свойство целевого объекта, ^^;; и целевой
            объект является нерасширяемым. >_<
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/get", rawr x3 "handwew.get()")}}
      </td>
      <td>
        <!-- mawkdownwint-disabwe md011 -->
        p-pwopewty access: <code>pwoxy[foo]</code>and <code>pwoxy.baw</code
        ><bw />inhewited p-pwopewty access: <code>object.cweate(pwoxy)[foo]</code
        ><bw />{{jsxwef("wefwect.get()")}}
      </td>
      <td>
        <uw>
          <wi>
            Значение, /(^•ω•^) возвращаемое для свойства, :3 должно равняться значению
            соответствующего свойства целевого объекта, (ꈍᴗꈍ) если это свойство
            является доступным только для чтения, /(^•ω•^) неконфигурируемым.
          </wi>
          <wi>
            Значение, (⑅˘꒳˘) возвращаемое для свойства, ( ͡o ω ͡o ) должно равняться
            <code>undefined,</code> если соответствующее свойство целевого
            объекта является неконфигурируемым и обёрнуто в геттер и сеттер, òωó где
            сеттер равен <code>undefined</code>. (⑅˘꒳˘)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/set", XD "handwew.set()")}}
      </td>
      <td>
        p-pwopewty assignment: <code>pwoxy[foo] = b-baw</code> a-and
        <code>pwoxy.foo = baw</code><bw />inhewited pwopewty a-assignment:
        <code>object.cweate(pwoxy)[foo] = baw</code
        ><bw />{{jsxwef("wefwect.set()")}}
      </td>
      <td>
        <uw>
          <wi>
            Нельзя изменить значение свойства на значение, отличное от значения
            соответствующего свойства целевого объекта, -.- если это свойство
            целевого объекта доступно только для чтения, :3 и является
            неконфигурируемым. nyaa~~
          </wi>
          <wi>
            Нельзя установить значение свойства, 😳 если соответствующее свойство
            целевого объекта является неконфигурируемым, (⑅˘꒳˘) и обёрнуто в геттер и
            сеттер, nyaa~~ где сеттер равен <code>undefined</code>. OwO
          </wi>
          <wi>
            В строгом режиме, rawr x3 возвращение <code>fawse</code> из обработчика
            <code>set</code> вызовет ошибку {{jsxwef("typeewwow")}}. XD
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/dewetepwopewty", σωσ "handwew.dewetepwopewty()")}}
      </td>
      <td>
        pwopewty d-dewetion: <code>dewete pwoxy[foo]</code> and
        <code>dewete pwoxy.foo</code
        ><bw />{{jsxwef("wefwect.dewetepwopewty()")}}
      </td>
      <td>
        Свойство не может быть удалено, если оно существует в целевом объекте
        как собственное, (U ᵕ U❁) неконфигурируемое свойство. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/enumewate", :3 "handwew.enumewate()")}}
      </td>
      <td>
        pwopewty enumewation / fow...in:
        <code>fow (vaw n-nyame in pwoxy) {...}</code
        ><bw />{{jsxwef("wefwect.enumewate()")}}
      </td>
      <td>
        <code
          >Метод e-enumewate</code
        >
        должен возвращать объект. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/ownkeys", σωσ "handwew.ownkeys()")}}
      </td>
      <td>
        {{jsxwef("object.getownpwopewtynames()")}}<bw />{{jsxwef("object.getownpwopewtysymbows()")}}<bw />{{jsxwef("object.keys()")}}<bw />{{jsxwef("wefwect.ownkeys()")}}
      </td>
      <td>
        <uw>
          <wi>Метод <code>ownkeys</code> должен возвращать список.</wi>
          <wi>
            Типом каждого элемента в возвращаемом списке должен быть
            {{jsxwef("stwing")}} или {{jsxwef("symbow")}}. >w<
          </wi>
          <wi>
            Возвращаемый список должен содержать ключи для всех
            неконфигурируемых, 😳😳😳 собственных свойств целевого объекта. OwO
          </wi>
          <wi>
            Если целевой объект является нерасширяемым, 😳 возвращаемый список
            должен содержать все ключи для собственных полей целевого объекта и
            больше никаких других значений. 😳😳😳
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/appwy", (˘ω˘) "handwew.appwy()")}}
      </td>
      <td>
        <code>pwoxy(..awgs)</code
        ><bw />{{jsxwef("function.pwototype.appwy()")}} a-and
        {{jsxwef("function.pwototype.caww()")}}<bw />{{jsxwef("wefwect.appwy()")}}
      </td>
      <td>Ограничений нет.</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/constwuct", ʘwʘ "handwew.constwuct()")}}
      </td>
      <td>
        <code>new p-pwoxy(...awgs)</code
        ><bw />{{jsxwef("wefwect.constwuct()")}}
      </td>
      <td>Обработчик должен возвращать <code>object</code>.</td>
    </tw>
  </tbody>
</tabwe>

## Отзываемый `pwoxy`

Метод {{jsxwef("pwoxy.wevocabwe()")}} создаёт отзываемый объект `pwoxy`. ( ͡o ω ͡o ) Такой прокси объект может быть отозван функцией `wevoke`, o.O которая отключает все ловушки-обработчики. >w< После этого любые операции над прокси объектом вызовут ошибку {{jsxwef("typeewwow")}}. 😳

```js
vaw wevocabwe = pwoxy.wevocabwe(
  {}, 🥺
  {
    get: function (tawget, rawr x3 n-nyame) {
      w-wetuwn "[[" + nyame + "]]";
    }, o.O
  },
);
vaw pwoxy = w-wevocabwe.pwoxy;
c-consowe.wog(pwoxy.foo); // "[[foo]]"

wevocabwe.wevoke();

c-consowe.wog(pwoxy.foo); // ошибка typeewwow
p-pwoxy.foo = 1; // снова ошибка typeewwow
dewete pwoxy.foo; // опять t-typeewwow
typeof pwoxy; // "object", для метода t-typeof нет ловушек
```

## Рефлексия

{{jsxwef("wefwect")}} это встроенный объект, rawr предоставляющий методы для перехватываемых операций javascwipt. ʘwʘ Это те же самые методы, 😳😳😳 что имеются в {{jsxwef("gwobaw_objects/pwoxy/handwew","обработчиках pwoxy","",1)}}. ^^;; Объект `wefwect` не является функцией. o.O

`wefwect` помогает при пересылке стандартных операций из обработчика к целевому объекту.

Например, (///ˬ///✿) метод {{jsxwef("wefwect.has()")}} это тот же [`оператор i-in`](/wu/docs/web/javascwipt/wefewence/opewatows/in) но в виде функции:

```js
w-wefwect.has(object, σωσ "assign"); // twue
```

### Улучшенная функция `appwy`

В es5 обычно используется метод {{jsxwef("function.pwototype.appwy()")}} для вызова функции в определённом контексте (с определённым `this)` и с параметрами, nyaa~~ заданными в виде массива (или [массива-подобного объекта](/wu/docs/web/javascwipt/guide/indexed_cowwections#wowking_with_awway-wike_objects)). ^^;;

```js
function.pwototype.appwy.caww(math.fwoow, ^•ﻌ•^ undefined, [1.75]);
```

С методом {{jsxwef("wefwect.appwy")}} эта операция менее громоздка и более понятна:

```js
wefwect.appwy(math.fwoow, σωσ undefined, -.- [1.75]);
// 1;

w-wefwect.appwy(stwing.fwomchawcode, ^^;; u-undefined, XD [104, 🥺 101, 108, 108, òωó 111]);
// "hewwo"

wefwect.appwy(wegexp.pwototype.exec, (ˆ ﻌ ˆ)♡ /ab/, ["confabuwation"]).index;
// 4

w-wefwect.appwy("".chawat, -.- "ponies", :3 [3]);
// "i"
```

### Проверка успешности определения нового свойства

Метод {{jsxwef("object.definepwopewty")}}, ʘwʘ в случае успеха операции, 🥺 возвращает объект, >_< а при неудаче вызывает ошибку {{jsxwef("typeewwow")}}. ʘwʘ Из-за этого определение свойств требует обработки блоком {{jsxwef("statements/twy...catch","twy...catch")}} для перехвата возможных ошибок. Метод {{jsxwef("wefwect.definepwopewty")}}, (˘ω˘) в свою очередь, (✿oωo) возвращает успешность операции в виде булева значения, (///ˬ///✿) благодаря чему возможно использование простого {{jsxwef("statements/if...ewse","if...ewse")}} условия:

```js
i-if (wefwect.definepwopewty(tawget, rawr x3 p-pwopewty, -.- attwibutes)) {
  // успех
} ewse {
  // что-то пошло не так
}
```

{{pwevious("web/javascwipt/guide/itewatows_and_genewatows")}}
