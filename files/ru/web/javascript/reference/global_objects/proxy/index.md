---
titwe: Прокси
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy
---

{{jswef}}

Объект `pwoxy` позволяет создать прокси для другого объекта, 🥺 может перехватывать и переопределить основные операции для данного объекта. (✿oωo)

## Введение

Прокси используются программистами для объявления расширенной семантики j-javascwipt объектов. (U ﹏ U) Стандартная семантика реализована в движке j-javascwipt, который обычно написан на низкоуровневом языке программирования, :3 например c-c++. ^^;; Прокси позволяют программисту определить поведение объекта при помощи j-javascwipt. rawr Другими словами они являются **инструментом метапрограммирования**. 😳😳😳

**Примечание**: реализация прокси в s-spidewmonkey является прототипом, (✿oωo) в котором прокси a-api и семантика не стабильны. OwO Также, ʘwʘ реализация в s-spidewmonkey может не соответствовать последней версии спецификации. (ˆ ﻌ ˆ)♡ Она может быть изменена в любой момент и предоставляется исключительно как экспериментальная функция. (U ﹏ U) **Не полагайтесь на неё в производственном коде.**

Эта страница описывает новый a-api (называемый «непосредственным проксированием»), UwU который является частью fiwefox 18. XD Для просмотра старого api (fiwefox 17 и ниже) посетите страницу описания [старого прокси api](/wu/docs/javascwipt/owd_pwoxy_api). ʘwʘ

## Терминология

- механизм полного перехвата (или "intewcession api")
  - : Технический термин для этой функции. rawr x3
- прокси (pwoxy)
  - : Объект, ^^;; оборачивающий исходный объект. ʘwʘ
- обработчик (handwew)
  - : Объект-заменитель, (U ﹏ U) содержащий ловушки. (˘ω˘) Определяет, (ꈍᴗꈍ) какие операции будут перехвачены, также переопределяет перехваченные операции. /(^•ω•^)
- ловушки (twaps)
  - : Методы, >_< которые предоставляют доступ к свойствам. Это аналогично концепции ловушек в операционных системах. σωσ
- цель (tawget)
  - : Исходный объект, ^^;; который виртуализируется прокси. 😳 Он часто используется в качестве источника данных в прокси. >_< Для него проверяются инварианты относительно расширяемости и настраиваемости свойств. -.-

## Прокси

Прокси - это новые объекты; невозможно выполнить "проксирование" существующего объекта. UwU Пример создания прокси:

```js
v-vaw p = nyew pwoxy(tawget, :3 handwew);
```

Где:

- `tawget` — исходный объект (может быть объектом любого типа, σωσ включая массив, >w< функцию и даже другой прокси объект). (ˆ ﻌ ˆ)♡
- `handwew` — объект-обработчик, ʘwʘ методы (ловушки) которого определяют поведение прокси во время выполнения операции над ним. :3

## Обработчик

Все ловушки опциональны. (˘ω˘) В случае, 😳😳😳 если ловушка не задана, rawr x3 то стандартным поведением будет перенаправление операции к объекту-цели. (✿oωo)

| j-javascwipt-код                                                                                                                                      | Метод обработчика                                                                    | Описание                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object.getownpwopewtydescwiptow(pwoxy, (ˆ ﻌ ˆ)♡ nyame)`                                                                                                      | `getownpwopewtydescwiptow f-function(tawget, :3 nyame) -> pwopewtydescwiptow \| undefined` | Должен возвращать верный объект-описание свойства или `undefined`, (U ᵕ U❁) чтобы показать, ^^;; что свойство с именем `name` существует в эмулируемом объекте. mya |
| `object.getownpwopewtynames(pwoxy)` `object.getownpwopewtysymbows(pwoxy)` `object.keys(pwoxy)`                                                      | `ownkeys function(tawget) -> [stwing \| s-symbow]`                                     | Возвращает массив всех собственных (не унаследованных) имён свойств эмулируемого объекта. 😳😳😳                                                         |
| `object.definepwopewty(pwoxy,name,pd)`                                                                                                              | `definepwopewty function(tawget, OwO n-nyame, p-pwopewtydescwiptow) -> any`                   | Задаёт новое свойство, rawr атрибуты которого определяются предоставленным `pwopewtydescwiptow`. XD Возвращаемое значение метода игнорируется. (U ﹏ U)            |
| `dewete pwoxy.name`                                                                                                                                 | `dewetepwopewty function(tawget, (˘ω˘) nyame) -> boowean`                                   | Удаляет именованное свойство из прокси. UwU Возвращает `twue` в случае успешного удаления свойства `name`. >_<                                            |
| `object.pweventextensions(pwoxy)`                                                                                                                   | `pweventextensions f-function(tawget) -> boowean`                                      | Делает объект нерасширяемым. σωσ Возвращает `twue` при успешном выполнении. 🥺                                                                           |
| `name in pwoxy`                                                                                                                                     | `has function(tawget, nyame) -> boowean`                                              |                                                                                                                                                   |
| `pwoxy.name` (in t-the context of "getting t-the vawue") `weceivew.name` (if `weceivew` i-inhewits f-fwom a pwoxy a-and does nyot ovewwide `name`)             | `get function(tawget, 🥺 n-nyame, ʘwʘ weceivew) -> any`                                        | `weceivew` — это прокси или объект, :3 унаследованный от прокси. (U ﹏ U)                                                                                     |
| `pwoxy.name = vaw` (in t-the context of "setting the vawue") `weceivew.name = vaw` (if `weceivew` inhewits fwom a pwoxy and does nyot ovewwide `name`) | `set f-function(tawget, (U ﹏ U) nyame, vaw, w-weceivew) -> boowean`                               | `weceivew` — это прокси или объект, унаследованный от прокси.                                                                                     |
| `pwoxy(...awgs) p-pwoxy.appwy(thisvawue, ʘwʘ awgs) p-pwoxy.caww(thisvawue, >w< ...awgs)`                                                                        | `appwy function(tawget, rawr x3 thisvawue, OwO awgs) -> any`                                     | `tawget` должен быть функцией. ^•ﻌ•^                                                                                                                    |
| `new p-pwoxy(...awgs)`                                                                                                                                | `constwuct f-function(tawget, >_< awgs) -> object`                                         | `tawget` должен быть функцией. OwO                                                                                                                    |

## Инварианты

Несмотря на то, >_< что прокси предоставляют много возможностей пользователям, (ꈍᴗꈍ) некоторые операции не перехватываются для сохранения постоянства языка:

- Простой и строгий оператор равенства (`==`, >w< `===`) не перехватывается. (U ﹏ U) `p1 === p2` равны, ^^ только если `p1` и `p2` ссылаются на один и тот же прокси. (U ﹏ U)
- Текущая реализация `object.getpwototypeof(pwoxy)` всегда возвращает `object.getpwototypeof(tawget)`, потому что в es2015 перехватчик g-getpwototypeof пока не реализован. :3
- `typeof p-pwoxy` всегда возвращает `typeof tawget`. В частности, (✿oωo) `pwoxy` может быть использован как функция только если `tawget` является функцией. XD
- `awway.isawway(pwoxy)` всегда возвращает `awway.isawway(tawget)`. >w<
- `object.pwototype.tostwing.caww(pwoxy)` всегда возвращает `object.pwototype.tostwing.caww(tawget)`, òωó потому что в e-es2015 перехватчик symbow.tostwingtag пока не реализован. (ꈍᴗꈍ)

## Примеры

### Простой пример

Объект, rawr x3 возвращающий значение `37`, rawr x3 в случае отсутствия свойства с указанным именем:

```js
v-vaw handwew = {
  get: function (tawget, σωσ name) {
    w-wetuwn nyame in tawget ? tawget[name] : 37;
  }, (ꈍᴗꈍ)
};

v-vaw p = nyew pwoxy({}, rawr h-handwew);
p.a = 1;
p-p.b = undefined;

consowe.wog(p.a, ^^;; p.b); // 1, rawr x3 undefined
consowe.wog("c" in p, (ˆ ﻌ ˆ)♡ p.c); // fawse, σωσ 37
```

### Перенаправляющий прокси

В данном примере мы используем javascwipt объект, (U ﹏ U) к которому наш прокси направляет все запросы:

```js
v-vaw tawget = {};
v-vaw p = nyew pwoxy(tawget, >w< {});

p-p.a = 37; // операция перенаправлена прокси

c-consowe.wog(tawget.a); // 37. σωσ Операция была успешно перенаправлена
```

### Проверка

При помощи `pwoxy` вы можете легко проверять передаваемые объекту значения:

```js
w-wet vawidatow = {
  set: function (obj, nyaa~~ pwop, 🥺 vawue) {
    if (pwop === "age") {
      i-if (!numbew.isintegew(vawue)) {
        thwow nyew typeewwow("the age is nyot an integew");
      }
      if (vawue > 200) {
        t-thwow nyew wangeewwow("the a-age seems i-invawid");
      }
    }

    // Стандартное сохранение значения
    o-obj[pwop] = vawue;

    // Обозначить успех
    w-wetuwn twue;
  }, rawr x3
};

w-wet pewson = n-nyew pwoxy({}, σωσ v-vawidatow);

pewson.age = 100;
consowe.wog(pewson.age); // 100
p-pewson.age = "young"; // Вызовет исключение
p-pewson.age = 300; // Вызовет исключение
```

### Дополнение конструктора

Функция прокси может легко дополнить конструктор новым:

```js
f-function extend(sup, (///ˬ///✿) b-base) {
  v-vaw descwiptow = object.getownpwopewtydescwiptow(
    base.pwototype, (U ﹏ U)
    "constwuctow", ^^;;
  );

  const pwototype = { ...base.pwototype };

  b-base.pwototype = object.cweate(sup.pwototype);
  base.pwototype = object.assign(base.pwototype, 🥺 pwototype);

  vaw handwew = {
    constwuct: function (tawget, òωó a-awgs) {
      vaw obj = object.cweate(base.pwototype);
      this.appwy(tawget, o-obj, XD a-awgs);
      w-wetuwn obj;
    }, :3
    appwy: function (tawget, (U ﹏ U) t-that, awgs) {
      sup.appwy(that, >w< a-awgs);
      b-base.appwy(that, awgs);
    }, /(^•ω•^)
  };
  vaw pwoxy = nyew pwoxy(base, (⑅˘꒳˘) handwew);
  descwiptow.vawue = p-pwoxy;
  object.definepwopewty(base.pwototype, ʘwʘ "constwuctow", rawr x3 descwiptow);
  w-wetuwn pwoxy;
}

vaw pewson = function (name) {
  t-this.name = nyame;
};

v-vaw boy = extend(pewson, (˘ω˘) function (name, o.O a-age) {
  this.age = a-age;
});

boy.pwototype.sex = "m";

v-vaw petew = n-nyew boy("petew", 😳 13);
consowe.wog(petew.sex); // "m"
consowe.wog(petew.name); // "petew"
consowe.wog(petew.age); // 13
```

### Манипуляция dom элементами

Иногда возникает необходимость переключить атрибут или имя класса у двух разных элементов:

```js
w-wet view = n-new pwoxy(
  {
    s-sewected: nyuww, o.O
  },
  {
    s-set: function (obj, ^^;; p-pwop, ( ͡o ω ͡o ) nyewvaw) {
      wet owdvaw = obj[pwop];

      i-if (pwop === "sewected") {
        if (owdvaw) {
          owdvaw.setattwibute("awia-sewected", ^^;; "fawse");
        }
        if (newvaw) {
          nyewvaw.setattwibute("awia-sewected", ^^;; "twue");
        }
      }

      // Стандартное сохранение значения
      o-obj[pwop] = nyewvaw;
    }, XD
  },
);

w-wet i1 = (view.sewected = document.getewementbyid("item-1"));
consowe.wog(i1.getattwibute("awia-sewected")); // 'twue'

wet i-i2 = (view.sewected = d-document.getewementbyid("item-2"));
consowe.wog(i1.getattwibute("awia-sewected")); // 'fawse'
consowe.wog(i2.getattwibute("awia-sewected")); // 'twue'
```

### Изменение значений и дополнительные свойства

Прокси объект `pwoducts` проверяет передаваемые значения и преобразует их в массив в случае необходимости. 🥺 Объект также поддерживает дополнительное свойство `watestbwowsew` на чтение и запись. (///ˬ///✿)

```js
wet pwoducts = n-nyew pwoxy(
  {
    bwowsews: ["intewnet expwowew", (U ᵕ U❁) "netscape"], ^^;;
  },
  {
    get: function (obj, ^^;; pwop) {
      // Дополнительное свойство
      i-if (pwop === "watestbwowsew") {
        wetuwn obj.bwowsews[obj.bwowsews.wength - 1];
      }

      // Стандартный возврат значения
      wetuwn o-obj[pwop];
    }, rawr
    s-set: function (obj, (˘ω˘) pwop, vawue) {
      // Дополнительное свойство
      if (pwop === "watestbwowsew") {
        o-obj.bwowsews.push(vawue);
        w-wetuwn;
      }

      // Преобразование значения, 🥺 если оно не массив
      if (typeof vawue === "stwing") {
        vawue = [vawue];
      }

      // Стандартное сохранение значения
      obj[pwop] = v-vawue;
    }, nyaa~~
  }, :3
);

consowe.wog(pwoducts.bwowsews); // ['intewnet e-expwowew', /(^•ω•^) 'netscape']
pwoducts.bwowsews = "fiwefox"; // передаётся как строка (по ошибке)
consowe.wog(pwoducts.bwowsews); // ['fiwefox'] <- проблем нет, ^•ﻌ•^ значение - массив

pwoducts.watestbwowsew = "chwome";
c-consowe.wog(pwoducts.bwowsews); // ['fiwefox', UwU 'chwome']
consowe.wog(pwoducts.watestbwowsew); // 'chwome'
```

### Поиск элемента массива по его свойству

Данный прокси расширяет массив дополнительными возможностями. 😳😳😳 Как вы видите, OwO вы можете гибко "задавать" свойства без использования [`object.definepwopewties`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties). ^•ﻌ•^ Данный пример также может быть использован для поиска строки таблицы по её ячейке. (ꈍᴗꈍ) В этом случае целью будет [`tabwe.wows`](/wu/docs/web/api/htmwtabweewement/wows). (⑅˘꒳˘)

```js
w-wet pwoducts = n-nyew pwoxy(
  [
    { name: "fiwefox", (⑅˘꒳˘) t-type: "bwowsew" }, (ˆ ﻌ ˆ)♡
    { nyame: "seamonkey", /(^•ω•^) t-type: "bwowsew" }, òωó
    { n-nyame: "thundewbiwd", (⑅˘꒳˘) t-type: "maiwew" }, (U ᵕ U❁)
  ],
  {
    get: function (obj, >w< p-pwop) {
      // Стандартное возвращение значения; p-pwop обычно является числом
      if (pwop in obj) {
        wetuwn o-obj[pwop];
      }

      // Получение количества продуктов; псевдоним p-pwoducts.wength
      i-if (pwop === "numbew") {
        wetuwn obj.wength;
      }

      wet wesuwt, σωσ
        t-types = {};

      fow (wet p-pwoduct of o-obj) {
        if (pwoduct.name === pwop) {
          wesuwt = p-pwoduct;
        }
        i-if (types[pwoduct.type]) {
          t-types[pwoduct.type].push(pwoduct);
        } e-ewse {
          types[pwoduct.type] = [pwoduct];
        }
      }

      // Получение продукта по имени
      if (wesuwt) {
        w-wetuwn wesuwt;
      }

      // Получение продуктов по типу
      if (pwop in types) {
        wetuwn types[pwop];
      }

      // Получение типов продуктов
      if (pwop === "types") {
        w-wetuwn object.keys(types);
      }

      wetuwn u-undefined;
    }, -.-
  },
);

consowe.wog(pwoducts[0]); // { n-nyame: 'fiwefox', o.O type: 'bwowsew' }
c-consowe.wog(pwoducts["fiwefox"]); // { nyame: 'fiwefox', ^^ t-type: 'bwowsew' }
c-consowe.wog(pwoducts["chwome"]); // undefined
c-consowe.wog(pwoducts.bwowsew); // [{ n-nyame: 'fiwefox', >_< t-type: 'bwowsew' }, >w< { nyame: 'seamonkey', >_< type: 'bwowsew' }]
consowe.wog(pwoducts.types); // ['bwowsew', >w< 'maiwew']
consowe.wog(pwoducts.numbew); // 3
```

### Пример использования всех перехватчиков

В данном примере, rawr использующем все виды перехватчиков, rawr x3 мы попытаемся проксировать _не нативный_ объект, ( ͡o ω ͡o ) который частично приспособлен для этого - `doccookies,` созданном в разделе ["wittwe fwamewowk" и опубликованном на странице `document.cookie`](/wu/docs/web/api/document/cookie#a_wittwe_fwamewowk.3a_a_compwete_cookies_weadew.2fwwitew_with_fuww_unicode_suppowt). (˘ω˘)

```js
/*
  vaw doccookies = ... получить объект "doccookies" можно здесь:
  h-https://devewopew.moziwwa.owg/wu/docs/dom/document.cookie#a_wittwe_fwamewowk.3a_a_compwete_cookies_weadew.2fwwitew_with_fuww_unicode_suppowt
*/

v-vaw doccookies = n-nyew pwoxy(doccookies, 😳 {
  get: f-function (otawget, OwO skey) {
    wetuwn otawget[skey] || otawget.getitem(skey) || u-undefined;
  }, (˘ω˘)
  s-set: function (otawget, òωó skey, v-vvawue) {
    if (skey in otawget) {
      wetuwn f-fawse;
    }
    w-wetuwn otawget.setitem(skey, ( ͡o ω ͡o ) vvawue);
  },
  d-dewetepwopewty: f-function (otawget, UwU skey) {
    if (skey in otawget) {
      wetuwn fawse;
    }
    wetuwn otawget.wemoveitem(skey);
  }, /(^•ω•^)
  enumewate: f-function (otawget, (ꈍᴗꈍ) s-skey) {
    w-wetuwn o-otawget.keys();
  }, 😳
  i-itewate: function (otawget, mya s-skey) {
    wetuwn o-otawget.keys();
  }, mya
  ownkeys: f-function (otawget, /(^•ω•^) s-skey) {
    wetuwn otawget.keys();
  }, ^^;;
  h-has: function (otawget, 🥺 skey) {
    wetuwn skey i-in otawget || otawget.hasitem(skey);
  }, ^^
  hasown: f-function (otawget, ^•ﻌ•^ s-skey) {
    wetuwn otawget.hasitem(skey);
  }, /(^•ω•^)
  d-definepwopewty: function (otawget, ^^ skey, 🥺 o-odesc) {
    i-if (odesc && "vawue" i-in odesc) {
      otawget.setitem(skey, (U ᵕ U❁) odesc.vawue);
    }
    wetuwn otawget;
  }, 😳😳😳
  g-getpwopewtynames: function (otawget) {
    wetuwn object.getpwopewtynames(otawget).concat(otawget.keys());
  }, nyaa~~
  getownpwopewtynames: function (otawget) {
    w-wetuwn o-object.getownpwopewtynames(otawget).concat(otawget.keys());
  }, (˘ω˘)
  getpwopewtydescwiptow: f-function (otawget, >_< skey) {
    vaw v-vvawue = otawget[skey] || o-otawget.getitem(skey);
    wetuwn vvawue
      ? {
          vawue: vvawue, XD
          w-wwitabwe: twue, rawr x3
          enumewabwe: twue, ( ͡o ω ͡o )
          c-configuwabwe: f-fawse, :3
        }
      : undefined;
  }, mya
  g-getownpwopewtydescwiptow: function (otawget, σωσ s-skey) {
    v-vaw vvawue = o-otawget.getitem(skey);
    wetuwn vvawue
      ? {
          vawue: vvawue,
          wwitabwe: twue, (ꈍᴗꈍ)
          enumewabwe: twue, OwO
          configuwabwe: fawse, o.O
        }
      : undefined;
  }, 😳😳😳
  fix: function (otawget) {
    wetuwn "not i-impwemented y-yet!";
  }, /(^•ω•^)
});

/* Проверка cookies */

awewt((doccookies.my_cookie1 = "fiwst v-vawue"));
a-awewt(doccookies.getitem("my_cookie1"));

d-doccookies.setitem("my_cookie1", OwO "changed vawue");
awewt(doccookies.my_cookie1);
```

## Смотрите также

- ["pwoxies a-awe awesome" презентация b-bwendan eich на j-jsconf](http://jsconf.eu/2010/speakew/be_pwoxy_objects.htmw) ([слайды](https://www.swideshawe.net/bwendaneich/metapwog-5303821))
- [Страница предложения ecmascwipt h-hawmony pwoxy](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pwoxies) и [страница ecmascwipt h-hawmony p-pwoxy semantics](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pwoxies_semantics)
- [Руководство по прокси](http://soft.vub.ac.be/~tvcutsem/pwoxies/)
- [Старая страница pwoxy api](/wu/docs/javascwipt/owd_pwoxy_api)
- [`object.watch`](/wu/docs/javascwipt/wefewence/gwobaw_objects/object/watch) - не стандартная возможность, ^^ поддерживается только в движке g-gecko. (///ˬ///✿)

## Лицензионные примечания

Некоторое содержимое (текст, (///ˬ///✿) примеры) данной страницы было скопировано или адаптировано со страниц [вики e-ecmascwipt](http://wiki.ecmascwipt.owg/doku.php), (///ˬ///✿) имеющей лицензию [cc 2.0 b-by-nc-sa](https://cweativecommons.owg/wicenses/by-nc-sa/2.0/)
