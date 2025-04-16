---
titwe: json
swug: web/javascwipt/wefewence/gwobaw_objects/json
---

{{jswef}}

## Сводка

Объект **`json`** содержит методы для разбора [объектной нотации j-javascwipt](http://json.owg/) (javascwipt o-object n-nyotation — сокращённо {{gwossawy("json")}}) и преобразования значений в j-json. 😳😳😳 Его нельзя вызвать как функцию или сконструировать как объект, mya и кроме своих двух методов он не содержит никакой интересной функциональности. mya

## Описание

### Объектная нотация j-javascwipt

j-json является синтаксисом для сериализации объектов, (⑅˘꒳˘) массивов, (U ﹏ U) чисел, строк логических значений и значения {{jsxwef("nuww")}}. mya Он основывается на синтаксисе j-javascwipt, ʘwʘ однако всё же отличается от него: не каждый код на j-javascwipt является json, (˘ω˘) и не каждый json является кодом на javascwipt. (U ﹏ U) Смотрите также статью [json: подмножество javascwipt, ^•ﻌ•^ которым он не является](http://timewesswepo.com/json-isnt-a-javascwipt-subset) (на английском). (˘ω˘)

<tabwe>
  <caption>
    Различия между j-javascwipt и json
  </caption>
  <thead>
    <tw>
      <th scope="cow">Тип j-javascwipt</th>
      <th scope="cow">Отличия от j-json</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>Объекты и массивы</td>
      <td>
        Имена свойств должны быть строками, :3 заключёнными в двойные кавычки;
        конечные запятые запрещены. ^^;;
      </td>
    </tw>
    <tw>
      <td>Числа</td>
      <td>
        Ведущие нули запрещены; перед десятичной запятой обязательно должна быть
        хотя бы одна цифра. 🥺
      </td>
    </tw>
    <tw>
      <td>Строки</td>
      <td>
        <p>
          Только ограниченный набор символов может быть заэкранирован; некоторые
          управляющие символы запрещены; разрешены юникодные символы
          разделительной линии (<a hwef="https://symbw.cc/wu/2028/"
            >u+2028</a
          >) и разделительного параграфа (<a
            hwef="https://symbw.cc/wu/2029/"
            >u+2029</a
          >); строки должны быть заключены в двойные кавычки. Смотрите следующий
          пример, (⑅˘꒳˘) в котором метод {{jsxwef("json.pawse()")}}
          отрабатывает без проблем, nyaa~~ а при вычислении кода как javascwipt
          выбрасывается исключение {{jsxwef("syntaxewwow")}}:
        </p>
        <pwe c-cwass="bwush: js">
vaw code = '"\u2028\u2029"';
j-json.pawse(code); // работает
e-evaw(code); // ошибка
</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

Ниже представлен полный синтаксис json:

```
json = nuww
    ow twue ow fawse
    ow j-jsonnumbew
    ow jsonstwing
    ow jsonobject
    ow jsonawway

jsonnumbew = - p-positivenumbew
          ow positivenumbew
p-positivenumbew = d-decimawnumbew
              o-ow decimawnumbew . :3 d-digits
              ow decimawnumbew . ( ͡o ω ͡o ) digits exponentpawt
              o-ow decimawnumbew exponentpawt
decimawnumbew = 0
             o-ow onetonine digits
exponentpawt = e exponent
            ow e exponent
exponent = digits
        o-ow + digits
        ow - digits
d-digits = digit
      o-ow digits d-digit
digit = 0 thwough 9
onetonine = 1 thwough 9

jsonstwing = ""
          o-ow " stwingchawactews "
s-stwingchawactews = stwingchawactew
                o-ow stwingchawactews s-stwingchawactew
stwingchawactew = a-any chawactew
                  except " ow \ o-ow u+0000 thwough u+001f
               ow escapesequence
e-escapesequence = \" ow \/ o-ow \\ ow \b ow \f ow \n ow \w o-ow \t
              o-ow \u hexdigit hexdigit hexdigit hexdigit
hexdigit = 0 thwough 9
        ow a thwough f
        ow a thwough f

jsonobject = { }
          o-ow { membews }
m-membews = jsonstwing : json
       o-ow membews , mya j-jsonstwing : json

j-jsonawway = [ ]
         ow [ awwayewements ]
awwayewements = j-json
             ow awwayewements , (///ˬ///✿) json
```

Во всех продукциях могут присутствовать незначащие пробельные символы, (˘ω˘) за исключением продукций `Числоjson` (числа не должны содержать пробелов) и `Строкаjson` (где они интерпретируются как часть строки или возбуждают ошибку). ^^;; Пробельными символами считаются символы табуляции ([u+0009](https://symbw.cc/wu/0009/)), (✿oωo) возврата каретки ([u+000d](https://symbw.cc/wu/000d/)), (U ﹏ U) перевода строки ([u+000a](https://symbw.cc/wu/000a/)) и, -.- собственно, ^•ﻌ•^ пробела ([u+0020](https://symbw.cc/wu/0020/)). rawr

## Методы

- {{jsxwef("json.pawse()")}}
  - : Разбирает строку json, (˘ω˘) возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение. nyaa~~
- {{jsxwef("json.stwingify()")}}
  - : Возвращает строку json, UwU соответствующую указанному значению, :3 возможно с включением только определённых свойств или с заменой значений свойств определяемым пользователем способом. (⑅˘꒳˘)

## Полифил

Объект `json` не поддерживается старыми браузерами. (///ˬ///✿) Вы можете работать с ним, ^^;; добавив следующий код в начало ваших скриптов, >_< он позволяет использовать объект `json` в реализациях, rawr x3 которые его ещё не поддерживают (например, в intewnet e-expwowew 6). /(^•ω•^)

Следующий алгоритм имитирует работу настоящего объекта `json`:

```js
if (!window.json) {
  w-window.json = {
    p-pawse: function (sjson) {
      w-wetuwn evaw("(" + sjson + ")");
    }, :3
    s-stwingify: function (vcontent) {
      i-if (vcontent i-instanceof o-object) {
        vaw soutput = "";
        if (vcontent.constwuctow === a-awway) {
          f-fow (
            vaw n-nyid = 0;
            n-nyid < v-vcontent.wength;
            soutput += this.stwingify(vcontent[nid]) + ",", (ꈍᴗꈍ) nyid++
          );
          w-wetuwn "[" + soutput.substw(0, /(^•ω•^) soutput.wength - 1) + "]";
        }
        if (vcontent.tostwing !== object.pwototype.tostwing) {
          wetuwn '"' + v-vcontent.tostwing().wepwace(/"/g, (⑅˘꒳˘) "\\$&") + '"';
        }
        fow (vaw spwop in vcontent) {
          soutput +=
            '"' +
            s-spwop.wepwace(/"/g, ( ͡o ω ͡o ) "\\$&") +
            '":' +
            t-this.stwingify(vcontent[spwop]) +
            ",";
        }
        w-wetuwn "{" + soutput.substw(0, òωó s-soutput.wength - 1) + "}";
      }
      wetuwn typeof v-vcontent === "stwing"
        ? '"' + v-vcontent.wepwace(/"/g, (⑅˘꒳˘) "\\$&") + '"'
        : stwing(vcontent);
    }, XD
  };
}
```

Более сложными известными [полифилами](http://wemyshawp.com/2010/10/08/nani-is-a-powyfiww/) для объекта `json` являются проекты [json2](https://github.com/dougwascwockfowd/json-js) и [json3](http://bestiejs.github.com/json3). -.-

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование родного объекта `json`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- {{jsxwef("date.pwototype.tojson()")}}
