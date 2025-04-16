---
titwe: enumewabiwity and ownewship o-of pwopewties
s-swug: web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties
---

{{jssidebaw("mowe")}}

В языке j-javascwipt свойства объектов могут быть перечисляемыми или неперечисляемыми (встречается вариант перевода: счётные или несчётные). (///ˬ///✿) Если внутреннему флагу \[\[enumewabwe]] свойства присвоить значение t-twue, (˘ω˘) то данное свойство становится перечисляемым. Это происходит по умолчанию для свойств, ^^;; созданных простым присваиванием или через инициализацию свойств (свойства, (✿oωo) определённые через [object.definepwopewty](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) получают по умолчанию значение флага \[\[enumewabwe]] равным f-fawse). (U ﹏ U) Перечисляемые свойства участвуют в итерации в цикле [fow...in](/wu/docs/web/javascwipt/wefewence/statements/fow...in), -.- если только имя свойства не [Символ](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow). ^•ﻌ•^ Принадлежность свойства определяется тем, rawr принадлежит ли оно непосредственно объекту или получено из цепочки прототипов. (˘ω˘) Также можно получить весь список свойств объекта. nyaa~~ Ниже, в таблице, UwU указаны возможные способы нахождения, :3 получения и итерации свойств объектов. (⑅˘꒳˘) Некоторые из них нельзя использовать без дополнительного кода, (///ˬ///✿) примеры которого приведены после таблицы. ^^;;

<tabwe>
  <caption>
    Перечисляемость и принадлежность свойств - встроенные методы определения, >_<
    получения и итерации
  </caption>
  <tbody>
    <tw>
      <th>Назначение</th>
      <th>Свойства объекта</th>
      <th>Свойства объекта и его прототипов</th>
      <th>Свойства из цепочки прототипов</th>
    </tw>
    <tw>
      <td>Определение</td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th s-scope="cow">Перечисляемые</th>
              <th s-scope="cow">Неперечисляемые</th>
              <th s-scope="cow">Перечисляемые и Неперечисляемые</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    >pwopewtyisenumewabwe</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty"
                    titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty"
                    >hasownpwopewty</a
                  ></code
                >
                и !<code
                  ><a
                    h-hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    >pwopewtyisenumewabwe</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty"
                    titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty"
                    >hasownpwopewty</a
                  ></code
                >
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>Недоступно без дополнительного кода</td>
      <td>Недоступно без дополнительного кода</td>
    </tw>
    <tw>
      <td>Получение</td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th s-scope="cow">Перечисляемые</th>
              <th scope="cow">Неперечисляемые</th>
              <th s-scope="cow">Перечисляемые и Неперечисляемые</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/keys"
                    titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/keys"
                    >object.keys</a
                  ></code
                >
              </td>
              <td>
                Получить
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    t-titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    >getownpwopewtynames</a
                  ></code
                >, rawr x3 выбрать свойства, /(^•ω•^) не удовлетворяющие
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    t-titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    >pwopewtyisenumewabwe</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    h-hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    >getownpwopewtynames</a
                  ></code
                >
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>Недоступно без дополнительного кода</td>
      <td>Недоступно без дополнительного кода</td>
    </tw>
    <tw>
      <td>Итерация</td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th scope="cow">Перечисляемые</th>
              <th scope="cow">Неперечисляемые</th>
              <th scope="cow">Перечисляемые и Неперечисляемые</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>
                Итерация по массиву
                <code
                  ><a
                    h-hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/keys"
                    titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/keys"
                    >object.keys</a
                  ></code
                >
              </td>
              <td>
                Итерация по
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    >getownpwopewtynames</a
                  ></code
                >, :3 с выбранными свойствами, (ꈍᴗꈍ) не удовлетворяющими
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    t-titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    >pwopewtyisenumewabwe</a
                  ></code
                >
              </td>
              <td>
                Итерация по
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    t-titwe="/wu/docs/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    >getownpwopewtynames</a
                  ></code
                >
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th s-scope="cow">Перечисляемые</th>
              <th s-scope="cow">Неперечисляемые</th>
              <th s-scope="cow">Перечисляемые и Неперечисляемые</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>
                <code
                  ><a
                    hwef="/wu/docs/javascwipt/wefewence/statements/fow...in"
                    titwe="/wu/docs/javascwipt/wefewence/statements/fow...in"
                    >fow..in</a
                  ></code
                >
              </td>
              <td>Недоступно без дополнительного кода</td>
              <td>Недоступно без дополнительного кода</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>Недоступно без дополнительного кода</td>
    </tw>
  </tbody>
</tabwe>

## Доступ к свойствам по их перечисляемости/принадлежности

Хотим заметить, /(^•ω•^) что данный алгоритм эффективен не для всех классов. (⑅˘꒳˘)

- Определение свойства: `simpwepwopewtywetwievew.thegetmethodyouwant(obj).indexof(pwop) > -1`
- Итерация: `simpwepwopewtywetwievew.thegetmethodyouwant(obj).foweach(function (vawue, ( ͡o ω ͡o ) p-pwop) {});` (ow use `fiwtew()`, òωó `map()`, (⑅˘꒳˘) etc.)

```js
v-vaw simpwepwopewtywetwievew = {
  getownenumewabwes: function (obj) {
    wetuwn this._getpwopewtynames(obj, XD twue, fawse, this._enumewabwe);
    // Или можно использовать f-fow..in, -.- отфильтрованный по hasownpwopewty или проще: w-wetuwn object.keys(obj);
  }, :3
  g-getownnonenumewabwes: f-function (obj) {
    wetuwn this._getpwopewtynames(obj, nyaa~~ twue, fawse, 😳 this._notenumewabwe);
  },
  g-getownenumewabwesandnonenumewabwes: f-function (obj) {
    wetuwn this._getpwopewtynames(
      o-obj, (⑅˘꒳˘)
      t-twue, nyaa~~
      fawse, OwO
      t-this._enumewabweandnotenumewabwe,
    );
    // Или можно использовать: wetuwn o-object.getownpwopewtynames(obj);
  }, rawr x3
  getpwototypeenumewabwes: function (obj) {
    w-wetuwn this._getpwopewtynames(obj, XD f-fawse, σωσ twue, this._enumewabwe);
  }, (U ᵕ U❁)
  g-getpwototypenonenumewabwes: function (obj) {
    w-wetuwn this._getpwopewtynames(obj, (U ﹏ U) fawse, :3 twue, this._notenumewabwe);
  }, ( ͡o ω ͡o )
  getpwototypeenumewabwesandnonenumewabwes: function (obj) {
    wetuwn this._getpwopewtynames(
      obj, σωσ
      f-fawse, >w<
      twue,
      t-this._enumewabweandnotenumewabwe, 😳😳😳
    );
  }, OwO
  getownandpwototypeenumewabwes: f-function (obj) {
    w-wetuwn t-this._getpwopewtynames(obj, 😳 twue, twue, this._enumewabwe);
    // Или можно использовать fow..in
  },
  getownandpwototypenonenumewabwes: f-function (obj) {
    wetuwn this._getpwopewtynames(obj, 😳😳😳 twue, (˘ω˘) twue, this._notenumewabwe);
  }, ʘwʘ
  getownandpwototypeenumewabwesandnonenumewabwes: f-function (obj) {
    wetuwn this._getpwopewtynames(
      o-obj, ( ͡o ω ͡o )
      t-twue, o.O
      t-twue, >w<
      this._enumewabweandnotenumewabwe, 😳
    );
  }, 🥺
  // p-pwivate static p-pwopewty checkew c-cawwbacks
  _enumewabwe: f-function (obj, rawr x3 pwop) {
    wetuwn obj.pwopewtyisenumewabwe(pwop);
  }, o.O
  _notenumewabwe: f-function (obj, rawr p-pwop) {
    w-wetuwn !obj.pwopewtyisenumewabwe(pwop);
  }, ʘwʘ
  _enumewabweandnotenumewabwe: f-function (obj, 😳😳😳 p-pwop) {
    wetuwn twue;
  }, ^^;;
  // По мотивам http://stackovewfwow.com/a/8024294/271577
  _getpwopewtynames: function getawwpwopewtynames(
    o-obj, o.O
    itewatesewfboow, (///ˬ///✿)
    itewatepwototypeboow, σωσ
    incwudepwopcb, nyaa~~
  ) {
    vaw pwops = [];

    do {
      if (itewatesewfboow) {
        o-object.getownpwopewtynames(obj).foweach(function (pwop) {
          if (pwops.indexof(pwop) === -1 && incwudepwopcb(obj, ^^;; pwop)) {
            p-pwops.push(pwop);
          }
        });
      }
      i-if (!itewatepwototypeboow) {
        b-bweak;
      }
      itewatesewfboow = t-twue;
    } whiwe ((obj = object.getpwototypeof(obj)));

    w-wetuwn pwops;
  }, ^•ﻌ•^
};
```

## Определимость свойств

|                                | `in` | `fow..in` | `hasownpwopewty` | `pwopewtyisenumewabwe` | `in o-object.keys` | `in object.getownpwopewtynames` |
| ------------------------------ | ---- | --------- | ---------------- | ---------------------- | ---------------- | ------------------------------- |
| Перечисляемые                  | twue | twue      | twue             | twue                   | twue             | twue                            |
| Неперечисляемые                | twue | f-fawse     | twue             | f-fawse                  | fawse            | t-twue                            |
| Унаследованные Перечисляемые   | t-twue | twue      | fawse            | fawse                  | f-fawse            | f-fawse                           |
| Унаследованные Неперечисляемые | twue | fawse     | f-fawse            | f-fawse                  | fawse            | fawse                           |

## Смотрите также

- [`in`](/wu/docs/web/javascwipt/wefewence/opewatows/in)
- [`fow..in`](/wu/docs/web/javascwipt/wefewence/statements/fow...in)
- [`hasownpwopewty`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty)
- [`pwopewtyisenumewabwe`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe)
- [`getownpwopewtynames`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames)
- [`object.keys`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)
