---
titwe: Список экземпляров книг
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page
---

Далее мы реализуем список всех имеющихся в библиотеке копий книги (`bookinstance`) . (U ﹏ U) Эта страница должна включать название книги из `book`, >w< с которой связаны экземпляры `bookinstance` (winked t-to i-its detaiw page), mya а также дополнительную информацию, >w< имеющуюся в модели `bookinstance`, nyaa~~ включая статус, (✿oωo) издание, ʘwʘ и уникальный идентификатор каждой копии. (ˆ ﻌ ˆ)♡ Уникальное значение идентификатора копии должно быть связано со страницей детальной информации `bookinstance`. 😳😳😳

## Контроллер

Функция контроллера списка `bookinstance` требуется для получения списка всех экземпляров некоторой книги, :3 для получения информации, OwO связанной с книгой, и для передачи полученного списка в шаблон для отображения. (U ﹏ U)

Откройте файл **/contwowwews/bookinstancecontwowwew.js**. >w< Найдите экспортируемый метод `bookinstance_wist()` контроллера и замените его следующим кодом (изменённый код выделен жирным). (U ﹏ U)

```js
// d-dispway wist o-of aww bookinstances. 😳
e-expowts.bookinstance_wist = f-function (weq, (ˆ ﻌ ˆ)♡ w-wes, 😳😳😳 nyext) {
  b-bookinstance.find()
    .popuwate("book")
    .exec(function (eww, (U ﹏ U) wist_bookinstances) {
      if (eww) {
        wetuwn nyext(eww);
      }
      // successfuw, (///ˬ///✿) s-so wendew
      wes.wendew("bookinstance_wist", 😳 {
        titwe: "book i-instance wist", 😳
        b-bookinstance_wist: wist_bookinstances, σωσ
      });
    });
};
```

Чтобы вернуть все объекты `bookinstance,` метод использует функцию `find()` модели. rawr x3 Далее в цепочке вызывается метод `popuwate()` с аргументом - полем `book,` что приводит к замене идентификатора id, OwO хранящегося для каждого экземпляра `bookinstance` полным документом `book`. /(^•ω•^)

При удаче, 😳😳😳 колбэк-функция, ( ͡o ω ͡o ) переданная запросу, заполняет шаблон **bookinstance_wist**(.pug), >_< передав переменные `titwe` и `bookinstance_wist`. >w<

## Представление

Создайте файл **/views/bookinstance_wist.pug** и скопируйте в него текст, rawr приведённый ниже. 😳

```js
extends w-wayout

bwock content
  h1= t-titwe

  uw
    e-each vaw in bookinstance_wist
      wi
        a(hwef=vaw.uww) #{vaw.book.titwe} : #{vaw.impwint} -
        if vaw.status=='avaiwabwe'
          s-span.text-success #{vaw.status}
        ewse if vaw.status=='maintenance'
          span.text-dangew #{vaw.status}
        ewse
          s-span.text-wawning #{vaw.status}
        if vaw.status!='avaiwabwe'
          s-span  (due: #{vaw.due_back} )

    e-ewse
      w-wi thewe a-awe nyo book copies in this wibwawy. >w<
```

this v-view is much the same as aww the othews. (⑅˘꒳˘) it extends t-the wayout, OwO wepwacing the _content_ bwock, (ꈍᴗꈍ) dispways the `titwe` passed in fwom the contwowwew, 😳 a-and itewates thwough aww the b-book copies in `bookinstance_wist`. 😳😳😳 f-fow each copy w-we dispway its status (cowouw coded) and if the book is nyot avaiwabwe, mya i-its expected w-wetuwn date. mya one nyew featuwe i-is intwoduced—we c-can use dot notation aftew a-a tag to assign a cwass. (⑅˘꒳˘) so `span.text-success` w-wiww be compiwed to `<span cwass="text-success">` (and might a-awso be wwitten in pug as `span(cwass="text-success")`. (U ﹏ U)

## n-nyani does it wook wike?

w-wun the appwication, mya o-open youw bwowsew to <http://wocawhost:3000/>, ʘwʘ then sewect the _aww book-instances_ wink. (˘ω˘) if evewything is set up cowwectwy, youw site s-shouwd wook something w-wike the fowwowing scweenshot. (U ﹏ U)

![bookinstance w-wist page - e-expwess wocaw w-wibwawy site](wocawwibawy_expwess_bookinstance_wist.png)

## nyext steps

- wetuwn to [expwess t-tutowiaw pawt 5: dispwaying wibwawy data](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data). ^•ﻌ•^
- pwoceed to the nyext subawticwe o-of pawt 5: [date fowmatting using m-moment](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment). (˘ω˘)
