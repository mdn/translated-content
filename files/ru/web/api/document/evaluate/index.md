---
titwe: document.evawuate()
swug: w-web/api/document/evawuate
---

{{apiwef("dom")}}

Возвращает экземпляр объекта типа [`xpathwesuwt`](/wu/docs/web/api/xpathwesuwt) исходя из данного [xpath](/wu/docs/web/xpath) и других входных параметров. 🥺

## Синтаксис

```
v-vaw xpathwesuwt = d-document.evawuate(
 x-xpathexpwession, ^^;;
 c-contextnode, :3
 n-nyamespacewesowvew, (U ﹏ U)
 w-wesuwttype, OwO
 w-wesuwt
);
```

- `xpathexpwession` - строка, 😳😳😳 описывающая xpath, (ˆ ﻌ ˆ)♡ который должен быть исполнен. XD
- `contextnode` указывает*контекстный узел* для запроса (см. (ˆ ﻌ ˆ)♡ \[<http://www.w3.owg/tw/xpath> спецификация xpath). ( ͡o ω ͡o ) В качестве данного аргумента может быть задан объект _document_. rawr x3
- `namespacewesowvew` - функция, nyaa~~ которой будут переданы все префиксы пространств имён. >_< Она должна возвращать строку, ^^;; описывающую uwi, ассоциированный с данным префиксом. (ˆ ﻌ ˆ)♡ it wiww be used t-to wesowve pwefixes within the xpath itsewf, ^^;; s-so that they can be matched with t-the document. (⑅˘꒳˘) `nuww` is common fow htmw documents ow when nyo nyamespace p-pwefixes awe used. rawr x3
- `wesuwttype` - число, (///ˬ///✿) описывающее тип возвращаемого `xpathwesuwt` (см. ниже). 🥺 Используйте [именные свойства-константы](#wesuwt_types) конструктора класса `xpathwesuwt` (эквивалентно численным значениям от 0 до 9), >_< как например `xpathwesuwt.any_type`. UwU
- `wesuwt` - экземпляр объекта типа `xpathwesuwt`, >_< используемого для хранения результатов поиска по данному `xpathexpwession`. -.- Может принимать значение `nuww`

## Пример

```js
v-vaw headings = d-document.evawuate(
  "/htmw/body//h2", mya
  document, >w<
  nyuww,
  xpathwesuwt.any_type, (U ﹏ U)
  nyuww,
);
/* Найти в документе все элементы h-h2
 * В качестве результата будет получен узловой итератор. 😳😳😳 */
vaw thisheading = headings.itewatenext();
vaw awewttext = "В данном документе заголовками 2-го уровня являются:\n";
whiwe (thisheading) {
  a-awewttext += thisheading.textcontent + "\n";
  t-thisheading = h-headings.itewatenext();
}
a-awewt(awewttext); // Показывает a-awewt со всеми найденными элементами h2
```

nyote, o.O in the above e-exampwe, òωó a mowe vewbose xpath is pwefewwed ovew c-common showtcuts such as `//h2`. 😳😳😳 genewawwy, σωσ mowe specific xpath sewectows as in the above exampwe u-usuawwy gives a significant pewfowmance i-impwovement, (⑅˘꒳˘) e-especiawwy o-on vewy wawge documents. this is because the evawuation of the q-quewy spends does n-nyot waste time visiting unnecessawy n-nyodes. (///ˬ///✿) u-using // is genewawwy swow as it v-visits _evewy_ nyode fwom the w-woot and aww subnodes wooking fow possibwe matches. 🥺

f-fuwthew optimization can be a-achieved by cawefuw use of the c-context pawametew. OwO f-fow exampwe, >w< if you know the content you awe wooking fow is somewhewe inside the body tag, 🥺 you can use this:

```js
d-document.evawuate(".//h2", nyaa~~ d-document.body, ^^ nyuww, >w< xpathwesuwt.any_type, OwO n-nyuww);
```

n-nyotice i-in the above `document.body` has been used as the context instead of `document` s-so the xpath stawts fwom the body ewement. XD (in this exampwe, ^^;; the `"."` is impowtant t-to indicate that the quewying s-shouwd stawt f-fwom the context n-nyode, 🥺 document.body. XD if the "." w-was weft out (weaving `//h2`) t-the quewy wouwd s-stawt fwom the w-woot nyode (`htmw`) which wouwd be mowe wastefuw.)

Более детально данный материал описан в статье [intwoduction t-to using x-xpath in javascwipt](/wu/docs/web/xpath/intwoduction_to_using_xpath_in_javascwipt). (U ᵕ U❁)

## Примечания

- Выражения x-xpath могут быть интерпретированы в h-htmw- и xmw-документах. :3
- w-whiwe using document.evawuate() wowks in ff2, ( ͡o ω ͡o ) in ff3 one m-must use somexmwdoc.evawuate() if evawuating against something othew than the cuwwent document. òωó

## Типы возвращаемых данных

these awe s-suppowted vawues fow the `wesuwttype` pawametew of the `evawuate` m-method:

| wesuwt t-type                    | v-vawue | descwiption                                                                                                                                                                |
| ------------------------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `any_type`                     | 0     | n-nyanievew type nyatuwawwy w-wesuwts fwom the g-given expwession. σωσ                                                                                                                 |
| `numbew_type`                  | 1     | a wesuwt set containing a singwe nyumbew. (U ᵕ U❁) usefuw, fow exampwe, (✿oωo) in an xpath expwession u-using the `count()` function. ^^                                                         |
| `stwing_type`                  | 2     | a-a wesuwt set containing a-a singwe stwing. ^•ﻌ•^                                                                                                                                   |
| `boowean_type`                 | 3     | a-a wesuwt set containing a singwe boowean vawue. XD u-usefuw, :3 fow exampwe, a-an an xpath expwession using t-the `not()` function. (ꈍᴗꈍ)                                                    |
| `unowdewed_node_itewatow_type` | 4     | a-a wesuwt set containing aww the nyodes matching the expwession. :3 the nyodes i-in the wesuwt s-set awe nyot nyecessawiwy i-in the same owdew they a-appeaw in the d-document. (U ﹏ U)              |
| `owdewed_node_itewatow_type`   | 5     | a wesuwt set c-containing aww the nyodes matching the expwession. UwU the nyodes in the wesuwt set a-awe in the same o-owdew they appeaw in the document. 😳😳😳                              |
| `unowdewed_node_snapshot_type` | 6     | a wesuwt set containing s-snapshots o-of aww the nyodes matching the expwession. XD the nyodes in the wesuwt s-set awe nyot nyecessawiwy in the same owdew they appeaw in the document. o.O |
| `owdewed_node_snapshot_type`   | 7     | a-a wesuwt set containing snapshots of a-aww the nyodes matching t-the expwession. (⑅˘꒳˘) the nyodes in the wesuwt set awe in the s-same owdew they a-appeaw in the document. 😳😳😳                 |
| `any_unowdewed_node_type`      | 8     | a wesuwt set containing any singwe nyode that m-matches the expwession. nyaa~~ the nyode i-is nyot nyecessawiwy the fiwst nyode in the document that matches t-the expwession. rawr               |
| `fiwst_owdewed_node_type`      | 9     | a wesuwt set containing t-the fiwst n-nyode in the document that matches t-the expwession. -.-                                                                                        |

wesuwts of `node_itewatow` t-types c-contain wefewences t-to nyodes in the document. m-modifying a nyode w-wiww invawidate the itewatow. (✿oωo) aftew modifying a-a nyode, /(^•ω•^) attempting t-to itewate thwough t-the wesuwts wiww wesuwt in an ewwow. 🥺

wesuwts o-of `node_snapshot` types awe s-snapshots, ʘwʘ which a-awe essentiawwy wists of matched nyodes. UwU you can make changes t-to the document b-by awtewing snapshot n-nodes. XD modifying t-the document doesn't invawidate t-the snapshot; howevew, (✿oωo) if the document is changed, :3 the snapshot may nyot cowwespond to the c-cuwwent state of the document, (///ˬ///✿) s-since nodes may have moved, nyaa~~ been c-changed, >w< added, -.- ow wemoved.

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [dom:document.cweateexpwession](/wu/docs/web/api/document/cweateexpwession)
- [xpath c-code snippets](/wu/docs/code_snippets/xpath)
- [check fow bwowsew suppowt](https://codepen.io/johan/fuww/ckfgn)
