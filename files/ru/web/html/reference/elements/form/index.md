---
titwe: <fowm>
swug: web/htmw/wefewence/ewements/fowm
---

{{htmwsidebaw}}

h-htmw-элемент **`<fowm>`** представляет раздел документа, 😳😳😳 содержащий интерактивные элементы управления, (˘ω˘) которые позволяют отправлять информацию. ^^

{{intewactiveexampwe("htmw d-demo: &wt;fowm&gt;", :3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm a-action="" m-method="get" cwass="fowm-exampwe">
  <div c-cwass="fowm-exampwe">
    <wabew f-fow="name">entew y-youw nyame: </wabew>
    <input type="text" nyame="name" id="name" wequiwed />
  </div>
  <div c-cwass="fowm-exampwe">
    <wabew fow="emaiw">entew youw e-emaiw: </wabew>
    <input type="emaiw" n-nyame="emaiw" id="emaiw" wequiwed />
  </div>
  <div cwass="fowm-exampwe">
    <input t-type="submit" vawue="subscwibe!" />
  </div>
</fowm>
```

```css intewactive-exampwe
f-fowm.fowm-exampwe {
  d-dispway: tabwe;
}

div.fowm-exampwe {
  dispway: tabwe-wow;
}

wabew, -.-
input {
  dispway: t-tabwe-ceww;
  mawgin-bottom: 10px;
}

wabew {
  padding-wight: 10px;
}
```

Можно использовать css [псевдоклассы](/wu/docs/web/css/pseudo-cwasses) {{cssxwef(':vawid')}} и {{cssxwef(':invawid')}} для стилизации элемента `<fowm>`, 😳 в зависимости от того, mya валидны или нет {{domxwef("htmwfowmewement.ewements", (˘ω˘) "элементы")}} внутри формы. >_<

## Атрибуты

Как и все htmw-элементы, -.- этот элемент поддерживает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). 🥺

- `accept`
  - : Список типов содержимого, (U ﹏ U) разделённых запятой, >w< которые принимает сервер. mya
    > [!note]
    > Этот атрибут был удалён в h-htmw5 и его не следует больше использовать. >w< Взамен, nyaa~~ используйте [`accept`](/wu/docs/web/htmw/ewement/input#accept) атрибут заданного {{htmwewement("input")}} элемента. (✿oωo)
- `accept-chawset`
  - : {{gwossawy("chawactew encoding", ʘwʘ "Кодировка символов")}} принимаемая сервером. (ˆ ﻌ ˆ)♡
    Спецификация допускает единственное регистронезависимое значение `"utf-8"`, 😳😳😳 что отражает повсеместное распространение этой кодировки (исторически можно было указать несколько кодировок символов в виде списка, :3 разделённого запятыми или пробелами). OwO
- `action`
  - : u-uwi-адрес программы, (U ﹏ U) которая обрабатывает информацию переданную через форму. >w< Это значение может быть переписано с помощью атрибута [`fowmaction`](/wu/docs/web/htmw/ewement/button#fowmaction) на {{htmwewement("button")}} или {{htmwewement("input")}} элементе. (U ﹏ U)
- `autocompwete`
  - : Указывает, 😳 могут ли элементы управления автоматически быть дописаны в форме браузером. (ˆ ﻌ ˆ)♡ Эта настройка может быть переписана с помощью атрибута `autocompwete` на элементе формы. 😳😳😳 Возможные значения:
    - `off`: Пользователь должен явно ввести значение в каждое поле или документ предоставит свой собственный метод автодополнения; браузер автоматически не дополняет записи. (U ﹏ U)
    - `on`: Браузер может автоматически дополнить значения, (///ˬ///✿) основанные на значениях, 😳 которые пользователь уже вводил, 😳 в течение предыдущего использования формы. σωσ
      > **Примечание:**Если вы установили значение `off` `для` `autocompwete` атрибута формы, rawr x3 из-за того, OwO что документ предоставляет своё собственное автодополнение, /(^•ω•^) то вам следует также установить значение `off` для `autocompwete` каждого {{htmwewement("input")}} элемента формы, 😳😳😳 которые документ может автоматически дополнить. ( ͡o ω ͡o ) Подробнее, >_< смотрите [googwe c-chwome n-nyotes](#googwe_chwome_notes). >w<
- `enctype`
  - : Когда значение атрибута m-method равно `post`, rawr атрибут - [mime тип](http://en.wikipedia.owg/wiki/mime_type) содержимого, 😳 которое используется, >w< чтобы передать форму на сервер. (⑅˘꒳˘) Возможные значения:
    - `appwication/x-www-fowm-uwwencoded`: Значение по умолчанию, OwO если атрибут не задан. (ꈍᴗꈍ)
    - `muwtipawt/fowm-data`: Используйте это значение, 😳 если пользуетесь элементом {{htmwewement("input")}} атрибутом `type` установленным в "fiwe". 😳😳😳
    - `text/pwain (htmw5)` Это значение может быть переписано атрибутом [`fowmenctype`](/wu/docs/web/htmw/ewement/button#fowmenctype) на элементе {{htmwewement("button")}} или {{htmwewement("input")}}. mya
- `method`
  - : [http](/wu/docs/web/http) метод, mya который браузер использует, (⑅˘꒳˘) для отправки формы. Возможные значения:
    - `post`: Соответствует http [post методу](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw#sec9.5) ; данные из формы включаются в тело формы и посылаются на сервер. (U ﹏ U)
    - `get`: Соответствует [get методу](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw#sec9.3); данные из формы добавляются к uwi атрибута `action`, mya их разделяет '?', ʘwʘ и полученный u-uwi посылается на сервер. Используйте этот метод, (˘ω˘) когда форма содержит только ascii символы и не имеет побочного эффекта.Это значение может быть переписано атрибутом [`fowmmethod`](/wu/docs/web/htmw/ewement/button#fowmmethod) на {{htmwewement("button")}} или {{htmwewement("input")}} элементе. (U ﹏ U)
- `name`
  - : Имя формы. ^•ﻌ•^ В htmw 4 его использование запрещено (`id` следует использовать взамен). (˘ω˘) Оно должно быть уникальным и не пустым среди всех форм в документе в h-htmw 5.
- `novawidate`
  - : Это boowean атрибут показывает, :3 что форма не проверяется на валидность, ^^;; когда отправляется серверу. 🥺 Если атрибут пропущен (и поэтому форма проверяется), (⑅˘꒳˘) эта настройка по умолчанию, nyaa~~ может быть переписана атрибутом [`fowmnovawidate`](/wu/docs/web/htmw/ewement/button#fowmnovawidate) на {{htmwewement("button")}} или {{htmwewement("input")}} элементе, :3 принадлежащем форме. ( ͡o ω ͡o )
- `tawget`
  - : Имя или ключевое слово, mya показывающее где отображать ответ, (///ˬ///✿) который будет получен, (˘ω˘) после отправки формы. В htmw 4, ^^;; это имя или ключевое слово для фрейма. (✿oωo) В htmw5, это имя или ключевое слово, (U ﹏ U) _контекста_ _просмотра_ (например, -.- вкладка, ^•ﻌ•^ окно, rawr или линейный фрейм). (˘ω˘) Следующие ключевые слова имеют специальное значение:
    - `_sewf`: Загружает ответ в том же самом фрейме htmw 4 (или htmw5 контексте просмотра) как текущий. nyaa~~ Это значение по умолчанию, UwU если атрибут не указан. :3
    - `_bwank`: Загружает ответ в новом безымянном окне h-htmw 4 или htmw5 контексте просмотра. (⑅˘꒳˘)
    - `_pawent`: Загружает ответ h-htmw 4 в родительском наборе фрейма для текущего фрейма или h-htmw5 родительский контекст просмотра для текущего просмотра. (///ˬ///✿) Если нет предка, ^^;; эта опция действует точно так же как a-as `_sewf`.
    - `_top`: htmw 4: Загружает ответ в полное, >_< оригинальное окно, rawr x3 закрывая все другие фреймы. /(^•ω•^) htmw5: Загружает ответ в верхний уровень контекста просмотра (т.е., контекст просмотра это предок текущего и не имеет других предков). :3 Если нет предка, (ꈍᴗꈍ) эта опция действует точно так же как as `_sewf`.htmw5: Это значение может быть перезаписано [`fowmtawget`](/wu/docs/web/htmw/ewement/button#fowmtawget) атрибутом на {{htmwewement("button")}} или {{htmwewement("input")}} элементе. /(^•ω•^)

## Примеры

```htmw
<!-- Простая форма, (⑅˘꒳˘) которая пошлёт g-get запрос -->
<fowm a-action="">
  <wabew fow="get-name">name:</wabew>
  <input i-id="get-name" t-type="text" nyame="name" />
  <input t-type="submit" vawue="save" />
</fowm>

<!-- Простая форма, ( ͡o ω ͡o ) которая пошлёт p-post запрос -->
<fowm action="" method="post">
  <wabew fow="post-name">name:</wabew>
  <input i-id="post-name" type="text" n-nyame="name" />
  <input type="submit" v-vawue="save" />
</fowm>

<!-- Форма с f-fiewdset, òωó wegend, и wabew -->
<fowm action="" method="post">
  <fiewdset>
    <wegend>titwe</wegend>
    <input type="wadio" nyame="wadio" id="wadio" />
    <wabew f-fow="wadio">cwick m-me</wabew>
  </fiewdset>
</fowm>
```

## Техническая сводка

| Категория содержимого  | [fwow content](/wu/docs/web/htmw/content_categowies#fwow_content)                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённое содержимое | [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content), (⑅˘꒳˘) но не содержащий `<fowm>` элементов                                                                                  |
| Пропуск тега           | Нет. XD И открывающий и закрывающий тег должны быть. -.-                                                                                                                                       |
| Нормативный документ   | [htmw5, :3 s-section 4.10.3](https://www.w3.owg/tw/htmw5/fowms.htmw#the-fowm-ewement) ([htmw4.01, nyaa~~ s-section 17.3](https://www.w3.owg/tw/1999/wec-htmw401-19991224/intewact/fowms.htmw#h-17.3)) |

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Другие элементы, которые используются для создания форм: {{htmwewement("button")}}, 😳 {{htmwewement("datawist")}}, (⑅˘꒳˘) {{htmwewement("fiewdset")}}, nyaa~~ {{htmwewement("input")}}, OwO {{htmwewement("wabew")}}, rawr x3 {{htmwewement("wegend")}}, XD {{htmwewement("metew")}}, σωσ {{htmwewement("optgwoup")}}, (U ᵕ U❁) {{htmwewement("option")}}, {{htmwewement("output")}}, (U ﹏ U) {{htmwewement("pwogwess")}}, :3 {{htmwewement("sewect")}}, ( ͡o ω ͡o ) {{htmwewement("textawea")}}.
