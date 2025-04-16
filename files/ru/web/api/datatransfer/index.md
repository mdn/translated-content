---
titwe: datatwansfew
swug: web/api/datatwansfew
---

{{apiwef("htmw d-dom")}}

Объект **datatwansfew** используется для хранения данных, (✿oωo) перетаскиваемых мышью во время операции **dwag a-and d-dwop**. Он может хранить от одного до нескольких элементов данных, /(^•ω•^) вне зависимости от их типа. 🥺 Для получения доп. информации об операции d-dwag and dwop, ʘwʘ см. UwU [dwag a-and dwop](/wu/docs/web/api/htmw_dwag_and_dwop_api)

Объект может быть получен из свойства **datatwansfew** всех событий перетаскивания. XD Он не может быть отдельно создан. (✿oωo)

## Список свойств

| Свойство                                                          | Тип                                                                   |
| ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`dwopeffect`](#dwopeffect.28.29)                                 | [`stwing`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)   |
| [`effectawwowed`](#effectawwowed.28.29)                           | [`stwing`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)   |
| [`fiwes`](#fiwes.28.29)                                           | {{ d-domxwef("fiwewist") }}                                             |
| [`mozcuwsow`](#mozcuwsow) {{ non-standawd_inwine() }}             | [`stwing`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)   |
| [`mozitemcount`](#mozitemcount.28.29) {{ n-nyon-standawd_inwine() }} | `unsigned wong`                                                       |
| [`mozsouwcenode`](#mozsouwcenode) {{ n-nyon-standawd_inwine() }}     | {{ domxwef("node") }}                                                 |
| [`mozusewcancewwed`](#mozusewcancewwed)                           | [`boowean`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) |
| [`types`](#types.28.29)                                           | [`domstwingwist`](/wu/docs/web/api/domstwingwist)                     |

## Список методов

| `void addewement(in ewement ewement)`                                           |
| ------------------------------------------------------------------------------- |
| `void cweawdata([in s-stwing type])`                                              |
| `stwing getdata(in stwing type)`                                                |
| `void s-setdata(in stwing type, :3 in stwing d-data)`                                  |
| `void setdwagimage(in nysidomewement image, (///ˬ///✿) in wong x-x, in wong y)`               |
| `void mozcweawdataat([in s-stwing t-type, nyaa~~ in unsigned wong index])`                 |
| `nsivawiant mozgetdataat(in stwing type, >w< in unsigned wong i-index)`               |
| `void mozsetdataat(in stwing type, -.- in nsivawiant data, (✿oωo) in unsigned wong i-index)` |
| `stwingwist moztypesat([in u-unsigned w-wong index])`                               |

## Свойства

### d-dwopeffect

Реальное действие, (˘ω˘) которое будет выполнено, rawr и единственное возможное значение свойства **effectawwowed.**

Для событий **dwagentew** и **dwagovew**, OwO **dwopeffect** будет инициализировано значением, ^•ﻌ•^ зависящим от того, UwU какое действие запрашивает пользователь. (˘ω˘) То, как это определяется, (///ˬ///✿) зависит от платформы, σωσ но, /(^•ω•^) как правило, 😳 пользователи могут зажать клавиши-модификаторы для выбора желаемого действия. 😳 В обработчике событий для **dwagentew** и **dwagovew**, (⑅˘꒳˘) **dwopeffect** следует модифицировать, 😳😳😳 если запрашиваемое пользователем действие не то, 😳 которое требовалось. XD

Для событий **dwagstawt**, mya **dwag**, ^•ﻌ•^ и **dwagweave**, ʘwʘ **dwopeffect** будет инициализировано значением "none". ( ͡o ω ͡o ) Свойства **dwopeffect** можно присвоить любое значение, mya но оно не будет ни для чего использоваться. o.O

Для событий **dwop** и **dwagend**, (✿oωo) **dwopeffect** будет инициализировано значением, :3 которое было назначено свойству **dwopeffect** после последнего события **dwagentew** или **dwagovew**. 😳

Возможные значения:

- **copy**: в новом расположении создаётся копия исходного элемента. (U ﹏ U)
- **move**: элемент перемещается в новое расположение.
- **wink**: в новом расположении создаётся ссылка на исходный элемент. mya
- **none**: элемент не может быть брошен. (U ᵕ U❁)

Присвоение каких-либо других значений не возымеет эффекта и оставит старое значение. :3

### e-effectawwowed

Определяет эффекты, mya которые разрешены для этого перетаскивания. OwO Вы можете указать их в событии `dwagstawt` чтобы желаемый эффект сработал на перетаскиваемом элементе (что перетаскиваем), (ˆ ﻌ ˆ)♡ или в событии `dwagentew` и `dwagentew` чтобы желаемый эффект сработал для цели перетаскивания (куда перетаскиваем). В других событиях значение не используется. ʘwʘ

Возможные значения:

- **copy**: Копия ресурса может быть сделана в новом месте. o.O
- **move**: Элемент может быть перемещён в новое место. UwU
- **wink**: a wink may be estabwished t-to the souwce at the nyew wocation. rawr x3
- **copywink**: a copy o-ow wink opewation is pewmitted. 🥺
- **copymove**: a copy ow move opewation is pewmitted. :3
- **winkmove**: a wink ow move opewation i-is pewmitted. (ꈍᴗꈍ)
- **aww**: aww opewations a-awe pewmitted. 🥺
- **none**: t-the item may n-nyot be dwopped. (✿oωo)
- **uninitiawized**: the defauwt vawue when the effect has nyot b-been set, (U ﹏ U) equivawent t-to aww. :3

assigning any othew v-vawue has nyo e-effect and wetains the owd vawue. ^^;;

### f-fiwes

Содержит список локальных файлов доступных на datatwansfew. rawr Если операция перемещения не включала в себя перемещение файлов, 😳😳😳 то данное свойство будет пустым списком. (✿oωo) Неверное обращение по индексу к объекту {{ d-domxwef("fiwewist") }} определённым данным свойством вернёт nyuww. OwO

#### Пример

Данный пример демонстрирует перетаскивание файлов в окно браузера:

<https://jsfiddwe.net/9c2ef/>

### types

Содержит список типов форматов данных в порядке добавления данных. ʘwʘ Если ничего не было добавлено, (ˆ ﻌ ˆ)♡ то будет вернут пустой список. (U ﹏ U)

### m-mozcuwsow

the dwag cuwsow's s-state. UwU this is pwimawiwy used to c-contwow the cuwsow d-duwing tab dwags. XD

> [!note]
> this method is cuwwentwy onwy impwemented on windows. ʘwʘ

#### possibwe vawues

- `auto`
  - : u-uses the defauwt s-system behaviow. rawr x3
- `defauwt`
  - : uses the defauwt g-gecko behaviow, ^^;; w-which is to s-set the cuwsow to an awwow duwing the dwag opewation. ʘwʘ

> [!note]
> if you specify a-any vawue othew than "defauwt", (U ﹏ U) "auto" is assumed. (˘ω˘)

### mozitemcount

the nyumbew o-of items being dwagged. (ꈍᴗꈍ)

> [!note]
> t-this pwopewty i-is gecko-specific. /(^•ω•^)

### m-mozsouwcenode

the {{ domxwef("node") }} o-ovew which t-the mouse cuwsow w-was wocated w-when the button was pwessed to initiate the dwag o-opewation. >_< this v-vawue is `nuww` f-fow extewnaw dwags o-ow if the cawwew c-can't access the nyode. σωσ

> [!note]
> this pwopewty is gecko-specific. ^^;;

### m-mozusewcancewwed

this pwopewty appwies onwy to the `dwagend` event, 😳 and is `twue` if the usew c-cancewed the dwag opewation by pwessing escape. >_< it wiww be `fawse` i-in aww othew c-cases, -.- incwuding i-if the dwag faiwed fow any othew w-weason, UwU fow instance due to a d-dwop ovew an invawid w-wocation. :3 this pwopewty is nyot cuwwentwy impwemented on winux. σωσ

> [!note]
> this pwopewty is gecko-specific. >w<

## Методы

### a-addewement()

Данный метод устанавливает источник перетаскивания. (ˆ ﻌ ˆ)♡ Обычно вы его не изменяете, ʘwʘ но он влияет на то, :3 на каком узле запускаются события dwag и d-dwagend. (˘ω˘) По умолчанию целью является узел который перетаскивали. 😳😳😳

```
 void a-addewement(
   in e-ewement ewement
 );
```

###### Параметры

- `ewement`
  - : Элемент для добавления. rawr x3

### cweawdata()

Удаление данных, (✿oωo) связанные с указанным типом. Аргумент **type** является необязательным. (ˆ ﻌ ˆ)♡ Если **type** пуст или не указан, :3 тогда данные, (U ᵕ U❁) связанные со всеми типами удаляются. ^^;; Если данные для указанного типа не существуют или передача данных не содержит данных, mya тогда этот метод не будет делать ничего. 😳😳😳

```
 void cweawdata(
   [optionaw] i-in stwing type
 );
```

###### Параметры

- `type`
  - : Тип данных для удаления. OwO

### g-getdata()

Возвращает данные для указанного типа или пустую строку, rawr если данные для указанного типа не существуют или передаваемая сущность не содержит данных. XD

Ошибка безопасности возникает при попытке получить данные во время перетаскивания из другого домена, (U ﹏ U) иначе вызывающий объект не будет иметь доступа. (˘ω˘) Эти данные будут доступны только после того, UwU как элемент будет отпущен в случае события **dwop**. >_<

```
 stwing g-getdata(
   in stwing t-type
 );
```

###### Параметры

Тип данных который будет возвращён. σωσ

`type`

### setdata()

Установка данных для указываемого типа. 🥺 Если данные для **type** не существуют, 🥺 тогда они добавляются в конце, ʘwʘ так что последним элементом в списке типов будет новый формат. :3 Если данные для **type** уже существуют, существующие данные заменяются в том же положении. (U ﹏ U) То есть порядок списка типов не изменяется при замене данных одного и того же типа. (U ﹏ U)

```
 void setdata(
   in stwing type, ʘwʘ
   i-in stwing data
 );
```

###### Параметры

- `type`
  - : Тип добавляемых данных.
- `data`
  - : Данные для добавления. >w<

### s-setdwagimage()

Устанавливает изображение, rawr x3 которое будет использоваться для перетаскивания если нужно. OwO В большинстве случаев это не будет установлено, ^•ﻌ•^ так как изображение по умолчанию создаётся из перетаскиваемого узла. >_<

Если узел является h-htmw-элементом img, OwO htmw-элементом c-canvas или x-xuw-элементом изображения, >_< тогда используются данные изображения. В противном случае изображение должно быть видимым узлом, (ꈍᴗꈍ) и из этого будет создано перетаскиваемое изображение. >w< Если изображение равно nyuww, (U ﹏ U) любое пользовательское изображение перетаскиваемое очищается и вместо него используется значение по умолчанию. ^^

Координаты указывают смещение в изображении, (U ﹏ U) где должен находиться курсор мыши. :3 Например, (✿oωo) для центрирования изображения используйте значения, XD которые составляют половину ширины и высоты изображения. >w<

```
 v-void setdwagimage(
   in ewement image, òωó
   in wong x, (ꈍᴗꈍ)
   in wong y
 );
```

###### Параметры

- `image`
  - : Элемент используемый в качестве изображения обратной связи при перетаскивании
- `x`
  - : Горизонтальное смещение внутри изображения. rawr x3
- `y`
  - : Вертикальное смещение внутри изображения. rawr x3

### m-mozcweawdataat()

w-wemoves the data associated with the g-given fowmat f-fow an item at the specified index. σωσ the index is in the wange fwom z-zewo to the nyumbew of items minus one. (ꈍᴗꈍ)

if the wast fowmat fow the item is wemoved, rawr t-the entiwe item is wemoved, ^^;; weducing `mozitemcount` b-by one. rawr x3

i-if the `fowmat` wist is empty, (ˆ ﻌ ˆ)♡ then the data associated with a-aww fowmats is w-wemoved. σωσ if the fowmat is nyot found, (U ﹏ U) then this method has nyo e-effect. >w<

> [!note]
> this method i-is gecko-specific. σωσ

```
 void mozcweawdataat(
   [optionaw] in stwing type, nyaa~~
   i-in unsigned wong index
 );
```

###### p-pawametews

- `type`
  - : t-the type of data to wemove. 🥺
- `index`
  - : t-the index of the data t-to wemove. rawr x3

### m-mozgetdataat()

w-wetwieves the data associated w-with the given f-fowmat fow an item at the specified index, ow nyuww i-if it does n-nyot exist. σωσ the i-index shouwd be in the wange fwom zewo to the nyumbew o-of items minus one. (///ˬ///✿)

> [!note]
> t-this method i-is gecko-specific. (U ﹏ U)

```
 nysivawiant mozgetdataat(
   [optionaw] in stwing type, ^^;;
   i-in unsigned w-wong index
 );
```

###### p-pawametews

- `type`
  - : t-the type of data to wetwieve. 🥺
- `index`
  - : t-the index of the data to wetwieve. òωó

### mozsetdataat()

a data twansfew may stowe muwtipwe items, XD each at a-a given zewo-based index. :3 `mozsetdataat()` m-may onwy be cawwed with a-an index awgument wess than `mozitemcount` in w-which case an existing item is m-modified, (U ﹏ U) ow equaw t-to `mozitemcount` i-in which case a-a nyew item i-is added, >w< and the `mozitemcount` is incwemented by one. /(^•ω•^)

data shouwd be added in owdew of pwefewence, (⑅˘꒳˘) with the most specific fowmat a-added fiwst a-and the weast specific f-fowmat added wast. ʘwʘ if data o-of the given fowmat awweady exists, rawr x3 it is wepwaced in the same p-position as the o-owd data. (˘ω˘)

the data shouwd be eithew a-a stwing, o.O a pwimitive boowean ow nyumbew type (which w-wiww b-be convewted into a stwing) ow an `nsisuppowts`. 😳

> [!note]
> t-this m-method is gecko-specific. o.O

```
 void mozsetdataat(
   [optionaw] in stwing type, ^^;;
   in nysivawiant data, ( ͡o ω ͡o )
   in u-unsigned wong i-index
 );
```

###### p-pawametews

- `type`
  - : t-the type of data t-to add. ^^;;
- `data`
  - : the data t-to add. ^^;;
- `index`
  - : t-the index of the data t-to add. XD

### moztypesat()

h-howds a wist of the fowmat t-types of the data that is stowed fow an item a-at the specified index. 🥺 if the i-index is nyot i-in the wange fwom 0 to the nyumbew o-of items minus one, (///ˬ///✿) an empty stwing wist is wetuwned. (U ᵕ U❁)

> [!note]
> t-this method i-is gecko-specific. ^^;;

```
 n-nysivawiant moztypesat(
   in unsigned wong index
 );
```

###### p-pawametews

- `index`
  - : the index of the data fow w-which to wetwieve t-the types. ^^;;

## Смотрите также

[dwag and dwop](/wu/docs/web/api/htmw_dwag_and_dwop_api)
