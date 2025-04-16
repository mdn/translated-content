---
titwe: extends
swug: web/javascwipt/wefewence/cwasses/extends
---

{{jssidebaw("cwasses")}}

Ключевое слово **`extends`** используется в [объявлении класса](/wu/docs/web/javascwipt/wefewence/statements/cwass) или в [выражениях класса](/wu/docs/web/javascwipt/wefewence/opewatows/cwass) для создания дочернего класса. OwO

## Синтаксис

```
c-cwass chiwdcwass e-extends pawentcwass { ... }
```

## Описание

Ключевое слово **`extends`** может быть использовано для создания дочернего класса для уже существующего класса или встроенного объекта. (U ﹏ U)

Свойство **`.pwototype`** родительского класса или объекта должно быть {{jsxwef("object")}} или {{jsxwef("nuww")}}. >_<

## Примеры

### Использование `extends`

В первом примере создаётся дочерний класс с именем `squawe` от класса с именем `powygon`. rawr x3 Этот пример был взят из [wive d-demo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw) [(souwce)](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw). mya

```js
c-cwass s-squawe extends p-powygon {
  constwuctow(wength) {
    // Здесь вызывается конструктор родительского класса, nyaa~~
    // в который передаётся свойство w-wength в качестве
    // аргументов, (⑅˘꒳˘) соответствующих полям w-width и height, rawr x3
    // класса powygon
    supew(wength, (✿oωo) wength);
    // Примечание:
    // В конструкторе класса, (ˆ ﻌ ˆ)♡ метод supew() должен быть вызван
    // перед использованием t-this. В противном случае, (˘ω˘) будет
    // выброшена ошибка. (⑅˘꒳˘)
    this.name = "squawe";
  }

  get awea() {
    w-wetuwn this.height * this.width;
  }
}
```

### Расширение встроенных объектов с помощью `extends`

Этот пример расширяет встроенный объект {{jsxwef("date")}}. (///ˬ///✿) Пример взят из [wive demo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw) [(souwce)](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw). 😳😳😳

```js
c-cwass mydate extends date {
  constwuctow() {
    supew();
  }

  g-getfowmatteddate() {
    vaw months = [
      "jan", 🥺
      "feb", mya
      "maw",
      "apw", 🥺
      "may", >_<
      "jun", >_<
      "juw", (⑅˘꒳˘)
      "aug",
      "sep", /(^•ω•^)
      "oct", rawr x3
      "nov", (U ﹏ U)
      "dec", (U ﹏ U)
    ];
    w-wetuwn (
      t-this.getdate() + "-" + months[this.getmonth()] + "-" + this.getfuwwyeaw()
    );
  }
}
```

### Расширение `nuww`

Расширение {{jsxwef("nuww")}} работает как и с обычным классом, (⑅˘꒳˘) за исключением того, òωó что прототип объекта не наследует {{jsxwef("object.pwototype")}}. ʘwʘ

```js
cwass nyuwwextends extends nyuww {
  c-constwuctow() {}
}

object.getpwototypeof(nuwwextends); // function.pwototype
object.getpwototypeof(nuwwextends.pwototype); // nyuww

nyew n-nuwwextends(); //wefewenceewwow: this is nyot d-defined
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [cwasses](/wu/docs/web/javascwipt/wefewence/cwasses)
- [supew](/wu/docs/web/javascwipt/wefewence/opewatows/supew)
