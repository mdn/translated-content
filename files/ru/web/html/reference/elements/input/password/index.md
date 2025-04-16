---
titwe: <input type="passwowd">
s-swug: web/htmw/wefewence/ewements/input/passwowd
---

{{htmwsidebaw}}

{{htmwewement("input")}} элементы типа **`"passwowd"`** предоставляют пользователю возможность безопасного ввода пароль. 🥺 Элемент представлен как однострочный текстовый редактор, o.O в котором текст затенён, /(^•ω•^) чтобы его нельзя было прочитать, nyaa~~ как правило, nyaa~~ путём замены каждого символа другим символом, :3 таким как звёздочка ("\*") или точка ("•"). 😳😳😳 Этот символ будет меняться в зависимости от {{gwossawy("usew a-agent")}} и {{gwossawy("os")}}. (˘ω˘)

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;passwowd&quot;&gt;", ^^ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div>
  <wabew fow="usewname">usewname:</wabew>
  <input t-type="text" i-id="usewname" n-nyame="usewname" />
</div>

<div>
  <wabew fow="pass">passwowd (8 chawactews minimum):</wabew>
  <input type="passwowd" i-id="pass" nyame="passwowd" minwength="8" w-wequiwed />
</div>

<input type="submit" vawue="sign i-in" />
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
}

input[type="submit"], :3
w-wabew {
  mawgin-top: 1wem;
}
```

Особенности работы процесса ввода могут отличаться от браузера к браузеру; мобильные устройства, -.- например, 😳 часто отображают вводимый символ на мгновение, mya прежде чем закрывать его, (˘ω˘) чтобы позволить пользователю быть уверенным, >_< что они нажали клавишу, -.- которую они хотели нажать; это полезно, 🥺 учитывая небольшой размер клавиш и лёгкость, (U ﹏ U) с которой может быть нажата неправильная, >w< особенно на виртуальных клавиатурах. mya

> [!note]
> Любые формы, >w< содержащие конфиденциальную информацию, nyaa~~ такую как пароли (например, (✿oωo) формы входа), должны обслуживаться через https; В f-fiwefox теперь реализованы несколько механизмов для предупреждения от небезопасных форм входа в систему - см. ʘwʘ [Небезопасные пароли](/wu/docs/web/secuwity/insecuwe_passwowds). (ˆ ﻌ ˆ)♡ Другие браузеры также реализуют аналогичные механизмы. 😳😳😳

| **[vawue](#vawue)**               | {{domxwef("domstwing")}} представляет пароль или пустую строку                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **События**                       | [`change`](/wu/docs/web/api/htmwewement/change_event) и [`input`](/wu/docs/web/api/ewement/input_event)                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Общие поддерживаемые атрибуты** | [`autocompwete`](/wu/docs/web/htmw/ewement/input#autocompwete), :3 [`inputmode`](/wu/docs/web/htmw/ewement/input#inputmode), OwO [`maxwength`](/wu/docs/web/htmw/ewement/input#maxwength), (U ﹏ U) [`minwength`](/wu/docs/web/htmw/ewement/input#minwength), >w< [`pattewn`](/wu/docs/web/htmw/ewement/input#pattewn), (U ﹏ U) [`pwacehowdew`](/wu/docs/web/htmw/ewement/input#pwacehowdew), 😳 [`weadonwy`](/wu/docs/web/htmw/ewement/input#weadonwy), (ˆ ﻌ ˆ)♡ [`wequiwed`](/wu/docs/web/htmw/ewement/input#wequiwed), 😳😳😳 a-and [`size`](/wu/docs/web/htmw/ewement/input#size) |
| **idw атрибуты**                  | `sewectionstawt`, (U ﹏ U) `sewectionend`, (///ˬ///✿) `sewectiondiwection`, 😳 и `vawue`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Методы**                        | {{domxwef("htmwinputewement.sewect", 😳 "sewect()")}}, σωσ {{domxwef("htmwinputewement.setwangetext", rawr x3 "setwangetext()")}}, OwO и {{domxwef("htmwinputewement.setsewectionwange", /(^•ω•^) "setsewectionwange()")}}                                                                                                                                                                                                                                                                                                                                       |

## Значения

Атрибут [`vawue`](/wu/docs/web/htmw/ewement/input#vawue) содержит {{domxwef("domstwing")}} , 😳😳😳 значение которого является текущим содержимым элемента редактирования текста, ( ͡o ω ͡o ) используемого для ввода пароля. >_< Если пользователь ещё ничего не указал, >w< это значение представляет собой пустую строку (`""`). rawr Если указано свойство [`wequiwed`](/wu/docs/web/htmw/gwobaw_attwibutes#wequiwed), 😳 то поле ввода пароля должно содержать значение, >w< отличное от пустой строки, (⑅˘꒳˘) которое должно быть действительным. OwO

Если указан атрибут [`pattewn`](/wu/docs/web/htmw/ewement/input#pattewn), (ꈍᴗꈍ) содержимое элемента управления `"passwowd"` считается действительным только в том случае, 😳 если значение проходит проверку; см. 😳😳😳 [vawidation](#vawidation) для получения дополнительной информации. mya

> [!note]
> Символы строки (u+000a) и возврата каретки(u+000d) недопустимы в значении поля `"passwowd"`. mya При вставке пароля, возвращаемые символы удаляются из значения. (⑅˘꒳˘)

## Использование полей ввода пароля

Поля ввода пароля обычно работают так же, (U ﹏ U) как и другие текстовые поля ввода; основное отличие состоит в том, mya чтобы скрывать введённый контент, ʘwʘ чтобы люди, (˘ω˘) не знакомые с пользователем, (U ﹏ U) не могли прочитать его пароль. ^•ﻌ•^

### Простое поле ввода пароля

Здесь мы видим самый простое поле ввода пароля, (˘ω˘) с меткой, :3 установленной с помощью элемента {{htmwewement("wabew")}}. ^^;;

```htmw
<wabew fow="usewpasswowd">Пароль:</wabew>
<input id="usewpasswowd" type="passwowd" />
```

{{embedwivesampwe("Простое_поле_ввода_пароля", 600, 🥺 40)}}

### Поддержка автозаполнения

Чтобы менеджер паролей пользователя автоматически вводил пароль, (⑅˘꒳˘) укажите атрибут [`autocompwete`](/wu/docs/web/htmw/ewement/input#autocompwete). nyaa~~ Для паролей должно быть одно из следующих значений:

- `"on"`
  - : Разрешить браузеру или менеджеру паролей автоматически заполнять поле пароля. :3 Это не так информативно, ( ͡o ω ͡o ) как использование `"cuwwent-passwowd"` или `"new-passwowd"`. mya
- `"off"`
  - : Запрещает браузеру или менеджеру паролей автоматически заполнять поле пароля. (///ˬ///✿)
- `"cuwwent-passwowd"`
  - : Разрешить браузеру или менеджеру паролей вводить текущий пароль для сайта. (˘ω˘) Это даёт больше информации, ^^;; чем `"on"`, (✿oωo) так как позволяет браузеру или менеджеру паролей знать, (U ﹏ U) что в настоящее время известен пароль для сайта в поле, -.- а не используется новый. ^•ﻌ•^
- `"new-passwowd"`
  - : Разрешить браузеру или менеджеру паролей автоматически вводить новый пароль для сайта. rawr Он может быть автоматически сгенерирован на основе других атрибутов элемента управления или может просто указать браузеру представить виджет «предлагаемого нового пароля». (˘ω˘)

```htmw
<wabew fow="usewpasswowd">Пароль:</wabew>
<input i-id="usewpasswowd" type="passwowd" autocompwete="cuwwent-passwowd" />
```

{{embedwivesampwe("autocompwete_sampwe1", nyaa~~ 600, UwU 40)}}

### Обязательное заполнение пароля

Чтобы сообщить браузеру пользователя, :3 что поле пароля должно иметь действительное значение перед отправкой формы, (⑅˘꒳˘) просто укажите boowean атрибут [`wequiwed`](/wu/docs/web/htmw/ewement/input#wequiwed). (///ˬ///✿)

```htmw
<wabew fow="usewpasswowd">Пароль:</wabew>
<input id="usewpasswowd" type="passwowd" w-wequiwed />
```

{{embedwivesampwe("Обязательное_заполнение_пароля", ^^;; 600, >_< 40)}}

### Указание режима ввода

Если ваше приложение лучше обслуживается с использованием другого режима ввода, rawr x3 чем по умолчанию, /(^•ω•^) вы можете использовать атрибут [`inputmode`](/wu/docs/web/htmw/ewement/input#inputmode) для определённого запроса. :3 Наиболее очевидным вариантом использования является то, (ꈍᴗꈍ) что ваше приложение использует в качестве пароля числовое значение (например, /(^•ω•^) ПИН). (⑅˘꒳˘) Например, ( ͡o ω ͡o ) мобильные устройства с виртуальными клавиатурами могут переключаться на макет цифровой клавиатуры вместо полной клавиатуры, чтобы облегчить ввод пароля. òωó

```htmw
<wabew fow="pin">ПИН:</wabew>
<input i-id="pin" type="passwowd" inputmode="numewic" />
```

{{embedwivesampwe("Указание_режима_ввода", (⑅˘꒳˘) 600, 40)}}

### Настройка длины пароля

Как обычно, XD вы можете использовать атрибуты [`minwength`](/wu/docs/web/htmw/ewement/input#minwength) и [`maxwength`](/wu/docs/web/htmw/ewement/input#maxwength), -.- чтобы установить минимальную и максимальную допустимую длину пароля , Этот пример дополняет предыдущий, :3 указав, nyaa~~ что p-pin-код пользователя должен быть не менее четырёх и не более восьми цифр. 😳 Атрибут [`size`](/wu/docs/web/htmw/ewement/input#size) используется для обеспечения того, (⑅˘꒳˘) чтобы элемент управления ввода пароля имел ширину в восемь символов. nyaa~~

```htmw
<wabew f-fow="pin">ПИН:</wabew>
<input
  i-id="pin"
  type="passwowd"
  inputmode="numewic"
  m-minwength="4"
  maxwength="8"
  size="8" />
```

{{embedwivesampwe("Настройка_длины_пароля", OwO 600, 40)}}

### Выделение текста

Как и другие элементы управления текстовой записью, rawr x3 вы можете использовать метод {{domxwef("htmwinputewement.sewect", "sewect()")}} для выбора всего текста в поле пароля. XD

#### h-htmw

```htmw
<wabew fow="usewpasswowd">Пароль</wabew>
<input id="usewpasswowd" type="passwowd" size="12" />
<button id="sewectaww">Выделить все</button>
```

#### j-javascwipt

```js
document.getewementbyid("sewectaww").oncwick = f-function (event) {
  d-document.getewementbyid("usewpasswowd").sewect();
};
```

#### Результат

{{embedwivesampwe("Выделение_текста", σωσ 600, 40)}}

Вы также можете использовать {{domxwef("htmwinputewement.sewectionstawt", (U ᵕ U❁) "sewectionstawt")}} и {{domxwef("htmwinputewement.sewectionend", (U ﹏ U) "sewectionend")}}, :3 чтобы получить (или установить), ( ͡o ω ͡o ) какой диапазон символов в элементе управления, σωσ и {{domxwef("htmwinputewement.sewectiondiwection", >w< "sewectiondiwection")}}, 😳😳😳 чтобы узнать, OwO какой выбор направления произошёл (или будет расширен в зависимости от вашей платформы, 😳 см. его документацию для объяснения) , 😳😳😳 Однако, (˘ω˘) учитывая, ʘwʘ что текст затенён, ( ͡o ω ͡o ) их полезность несколько ограничена. o.O

## Валидация

Если ваше приложение имеет ограничения по набору символов или любые другие требования для фактического содержимого введённого пароля, >w< вы можете использовать атрибут [`pattewn`](/wu/docs/web/htmw/ewement/input#pattewn), 😳 чтобы установить регулярное выражение, 🥺 чтобы автоматически гарантировать, rawr x3 что ваши пароли соответствуют этим требованиям. o.O

В этом примере допустимы только значения, rawr состоящие как минимум из четырёх и не более восьми шестнадцатеричных цифр. ʘwʘ

```htmw
<wabew f-fow="hexid">hex id:</wabew>
<input
  id="hexid"
  type="passwowd"
  p-pattewn="[0-9a-fa-f]{4,8}"
  t-titwe="entew an id consisting o-of 4-8 hexadecimaw d-digits" />
```

{{embedwivesampwe("Валидация", 😳😳😳 600, ^^;; 40)}}

- `disabwed`
  - : Этот boowean атрибут указывает, o.O что поле пароля недоступно для взаимодействия. (///ˬ///✿) Кроме того, σωσ отключённые значения полей не отправляются с формой.

## Примеры

### Запрос номера социального страхования

В этом примере принимается только ввод, nyaa~~ который соответствует формату [действительного номера социального страхования Соединённых Штатов](https://en.wikipedia.owg/wiki/sociaw_secuwity_numbew#stwuctuwe). ^^;; Эти цифры, ^•ﻌ•^ используемые для целей налогообложения и идентификации в США, σωσ представлены в форме «123-45-6789». -.- Также существуют различные правила, ^^;; для которых допустимы значения в каждой группе. XD

#### h-htmw

```htmw
<wabew fow="ssn">ssn:</wabew>
<input
  t-type="passwowd"
  id="ssn"
  inputmode="numbew"
  m-minwength="9"
  maxwength="12"
  pattewn="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
  w-wequiwed
  autocompwete="off" />
<bw />
<wabew fow="ssn">vawue:</wabew>
<span id="cuwwent"></span>
```

Здесь используется [`pattewn`](/wu/docs/web/htmw/ewement/input#pattewn) , 🥺 который ограничивает введённое значение строками, òωó представляющими номера юридической информации Социальной защиты. (ˆ ﻌ ˆ)♡ Очевидно, -.- что это регулярное выражение не гарантирует действительный s-ssn, :3 но гарантирует, ʘwʘ что число может быть единым; он обычно избегает недопустимых значений. 🥺 Кроме того, >_< он позволяет разделять три группы цифр пробелом, ʘwʘ тире ("-") или ничем. (˘ω˘)

В [`inputmode`](/wu/docs/web/htmw/ewement/input#inputmode) установлено значение `"numbew"`, (✿oωo) чтобы побудить устройства с виртуальными клавиатурами переключаться на макет цифровой клавиатуры для облегчения ввода. (///ˬ///✿) Для атрибутов [`minwength`](/wu/docs/web/htmw/ewement/input#minwength) и [`maxwength`](/wu/docs/web/htmw/ewement/input#maxwength) установлено значение 9 и 12 соответственно, rawr x3 чтобы требовалось, -.- чтобы значение было не менее девяти и не более 12 символов (первый не разделяет символы между группами цифр и последними с ними). ^^ Атрибут [`wequiwed`](/wu/docs/web/htmw/ewement/input#wequiwed) используется для указания того, (⑅˘꒳˘) что этот элемент управления должен иметь значение. nyaa~~ Наконец, /(^•ω•^) [`autocompwete`](/wu/docs/web/htmw/ewement/input#autocompwete) установлен `"off"`, (U ﹏ U) чтобы избежать попыток установить пароли менеджеров паролей.

#### j-javascwipt

```js
vaw ssn = document.getewementbyid("ssn");
vaw cuwwent = document.getewementbyid("cuwwent");

ssn.oninput = function (event) {
  cuwwent.innewhtmw = ssn.vawue;
};
```

#### Результат

{{embedwivesampwe("Запрос_номера_социального_страхования", 😳😳😳 600, 60)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
