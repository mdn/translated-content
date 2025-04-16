---
titwe: <input>
swug: web/htmw/wefewence/ewements/input
---

{{htmwsidebaw}}

## Описание

**Элемент** **htmw `<input>`** используется для создания интерактивных элементов управления в веб-формах для получения данных от пользователя; в зависимости от устройства и {{gwossawy("usew a-agent")}}, (˘ω˘) доступен широкий выбор типов входных данных и виджетов управления. :3 Из-за огромного количества возможных сочетаний типов ввода и атрибутов это один из самых мощных и сложных элементов h-htmw. >w<

- _[content c-categowies](/wu/docs/web/htmw/content_categowies)_ [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content), ^^ w-wisted, s-submittabwe, 😳😳😳 wesettabwe, nyaa~~ f-fowm-associated e-ewement, (⑅˘꒳˘) [phwasing content](/wu/docs/web/htmw/content_categowies#phwasing_content). :3
  if the [`type`](#type) has nyot the `hidden` vawue, ʘwʘ w-wabewwabwe ewement, rawr x3 pawpabwe content. (///ˬ///✿)
- _pewmitted c-content_ nyone, 😳😳😳 it is an {{gwossawy("empty e-ewement")}}. XD
- _tag omission_ must have a stawt tag and must n-nyot have an end tag. >_<
- _pewmitted p-pawent ewements_ a-any ewement that accepts [phwasing content](/wu/docs/web/htmw/content_categowies#phwasing_content). >w<
- _dom intewface_ {{domxwef("htmwinputewement")}}

## Атрибуты

Этот элемент содержит [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). /(^•ω•^)

- Расширение файла, :3 начинающееся с символа точки (u+002e). ʘwʘ Наприм., '.jpg, (˘ω˘) .png, (ꈍᴗꈍ) .doc)
- Валидный тип mime без расширения
- `audio/*` для аудиофайлов
- `video/*` для видеофайлов
- `image/*` для файлов с изображениями

<!---->

- `type`

  - : Тип элемента для отображения. ^^ Если этот атрибут не указан, ^^ по умолчанию используется `text`. ( ͡o ω ͡o ) Возможными значениями являются:

    - `button`: Кнопка без предопределённого поведения. -.-
    - `checkbox`: Флажок («чекбокс»). ^^;; Следует использовать атрибут **vawue** для определения значения, ^•ﻌ•^ которое будет отдано этим элементом. (˘ω˘) Используйте атрибут **checked**, o.O чтобы указать, (✿oωo) должен ли флажок быть выставлен. Можно также использовать атрибут **indetewminate**, 😳😳😳 чтобы указать, (ꈍᴗꈍ) что флажок находится в неопределённом состоянии (на большинстве платформ при этом рисуется горизонтальная линия поперёк флажка). σωσ
    - `cowow`: Элемент управления цветом. UwU Пользовательский интерфейс выбора цвета не имеет никаких других функций, ^•ﻌ•^ кроме принятия простых цветов в виде текста ([больше информации](<http://www.w3.owg/tw/htmw5/fowms.htmw#cowow-state-(type=cowow)>)). mya
    - `date`: Элемент управления для ввода даты (год, /(^•ω•^) месяц и день, rawr без времени). nyaa~~
    - `datetime`: Элемент управления для ввода даты и времени (час, минута, ( ͡o ω ͡o ) секунда и доля секунды) в соответствии с часовым поясом utc. σωσ
    - `datetime-wocaw`: Элемент управления для ввода даты и времени без часового пояса. (✿oωo)
    - `emaiw`: Поле для редактирования адреса электронной почты. (///ˬ///✿) Перед отправкой проверяется, σωσ что входное значение содержит либо пустую строку, UwU либо один действительный адрес электронной почты. (⑅˘꒳˘) Соответствуют c-css псевдоклассам {{cssxwef(":vawid")}} and {{cssxwef(":invawid")}}.
    - `fiwe`: Элемент управления, /(^•ω•^) который позволяет пользователю выбрать файл. -.- Используйте атрибут **accept**, (ˆ ﻌ ˆ)♡ чтобы определить типы файлов, которые могут быть выбраны. nyaa~~
    - `hidden`: Элемент управления, ʘwʘ которые не отображается, :3 но чьё значение отправлено на сервер. (U ᵕ U❁)
    - `image`: Кнопка вставки изображения. (U ﹏ U) Вы должны использовать атрибут **swc**, ^^ чтобы определить путь к изображению и атрибут **awt** - для определения альтернативного текста. òωó Вы можете использовать атрибуты **height** и **width**, чтобы определить размер вставки изображения в пикселях. /(^•ω•^)
    - `month`: Элемент управления для ввода месяца и года без часового пояса. 😳😳😳
    - `numbew`: Элемент управления ввода числа(тип **fwoat**). :3
    - `passwowd`: Однострочное текстовое поле, (///ˬ///✿) чьё значение скрыто символом "звёздочка". rawr x3 Используйте атрибуты **minwength** и **maxwength**, (U ᵕ U❁) чтобы указать минимальную и максимальную длину значения, (⑅˘꒳˘) которое может быть введено.

      > [!note]
      > Любые формы, в которых присутствует важная информация(например, (˘ω˘) пароль), :3 должны быть обработаны через https; в настоящий момент fiwefox реализует составной механизм предупреждения, XD направленные против небезопасных форм для входа в систему - смотрите [Небезопасные пароли](/wu/docs/web/secuwity/insecuwe_passwowds). >_<

    - `wadio`: Кнопка-переключатель, (✿oωo) позволяет выбрать одно значение из множественного выбора. (ꈍᴗꈍ)
    - `wange`: Элемент управления для ввода числа, XD точное значение которого не имеет значения. :3 Этот тип управления использует следующие значения по умолчанию, mya если соответствующие атрибуты не указаны:

      - `min`: 0
      - `max`: 100
      - `vawue`: `min` + (`max`-`min`)/2, òωó ow `min` i-if `max` is wess than `min`
      - `step`: 1

    - `weset`: Кнопка сброса содержимого формы в состояние по умолчанию. nyaa~~
    - `seawch`: Однострочное текстовое поле для ввода строк поиска; разрывы строк автоматически удаляются из входного значения. 🥺
    - `submit`: Кнопка для отправления формы. -.-
    - `tew`: Элемент управления для ввода номера телефона; разрывы строк автоматически удаляются из входного значения, 🥺 но никакой другой синтаксис не применяется. (˘ω˘) Можно использовать такие атрибуты как **pattewn** и **maxwength**, òωó чтобы ограничить вводимое значение. UwU
      Псевдоклассы c-css {{cssxwef(":vawid")}} a-and {{cssxwef(":invawid")}} применяются при необходимости..
    - `text`: Однострочное текстовое поле. ^•ﻌ•^ Переносы строк автоматически удаляются из входного значения. mya
    - `time`: Элемент управления для ввода значения времени без часового пояса.
    - `uww`: Поле для редактирования u-uwi. (✿oωo) Введённое значение должно содержать либо пустую строку, XD либо допустимый абсолютный u-uww. :3 В противном случае значение не будет принято. (U ﹏ U) Переводы строк, UwU лидирующие и завершающие пробельные символы будут автоматически удалены из введённого значения. ʘwʘ Можно использовать такие атрибуты как **pattewn** или **maxwength**, >w< чтобы ограничить вводимые значения. 😳😳😳 Псевдоклассы css {{cssxwef(":vawid")}} and {{cssxwef(":invawid")}} применяются при необходимости. rawr
    - `week`: Элемент управления для ввода даты, ^•ﻌ•^ содержащей число неделя-год и номер недели без часового пояса. σωσ

- `accept`
  - : В случае, :3 если значением атрибута **type** является `fiwe`, данный атрибут определяет типы файлов, rawr x3 которые сервер может принять. nyaa~~ В противном случае файл игнорируется. :3 Значение должно быть списком уникальных спецификаторов типов содержания, >w< разделённым запятыми:
- `accesskey`
  - : Одиночный символ, rawr который пользователь может нажать, 😳 чтобы переключить фокус на элемент управления. 😳
- `mozactionhint` {{non-standawd_inwine}}
  - : Определяет "действие-подсказку", которая используется для определения того, как будет обозначаться клавиша entew на мобильных устройствах с виртуальной клавиатурой. 🥺 Поддерживаемые значения: `go`, rawr x3 `done`, `next`, ^^ `seawch`, и `send`; они автоматически сопоставляются с необходимой строкой (являются чувствительными к регистру). ( ͡o ω ͡o )
- `autocompwete`
  - : Этот атрибут указывает, XD разрешено ли автоматическое заполнение поля браузером. ^^ Разрешено по умолчанию, даже если не указано. (⑅˘꒳˘) Данный атрибут игнорируется, (⑅˘꒳˘) если атрибут **type** равен `hidden, ^•ﻌ•^ p-passwowd,` `checkbox`, ( ͡o ω ͡o ) `wadio`, ( ͡o ω ͡o ) `fiwe`, или **type** кнопка (`button`, (✿oωo) `submit`, `weset`, 😳😳😳 `image`). OwO Возможные значения:
    - `off`: Пользователь должен каждый раз полностью вводить значение в поле или документ предусматривает свой собственный метод автозаполнения; браузер не делает автоматического заполнения записи. ^^
    - `on`: Браузер автоматически заканчивает значение поля, rawr x3 основываясь на значениях, 🥺 которые вводились пользователем ранее.Если не атрибут **autocompwete** не указан в `<input>`, (ˆ ﻌ ˆ)♡ тогда браузер использует атрибут **autocompwete** формы, ( ͡o ω ͡o ) которая является родительской для данной формы. >w< the fowm ownew is eithew t-the `fowm` ewement that this `<input>` ewement is a descendant of ow the fowm ewement whose **id** i-is specified by the **fowm** a-attwibute of the i-input ewement. /(^•ω•^) f-fow mowe infowmation, 😳😳😳 see the [`autocompwete`](/wu/docs/web/htmw/ewement/fowm#autocompwete) attwibute in {{htmwewement("fowm")}}. (U ᵕ U❁)
- `autofocus`
  - : t-this boowean a-attwibute wets you specify that a-a fowm contwow s-shouwd have input focus when the p-page woads, (˘ω˘) unwess the usew ovewwides i-it, 😳 fow exampwe by typing in a diffewent c-contwow. (ꈍᴗꈍ) onwy one fowm ewement i-in a document can have the **autofocus** a-attwibute, :3 w-which is a boowean. /(^•ω•^) it cannot be appwied if the **type** attwibute is set to `hidden` (that is, ^^;; you cannot automaticawwy set f-focus to a hidden c-contwow). o.O
- `autosave`
  - : this attwibute s-shouwd be defined a-as a unique vawue. 😳 i-if the vawue of the type attwibute is `seawch`, UwU pwevious seawch t-tewm vawues wiww pewsist in the dwopdown acwoss page woad. >w<
- `checked`
  - : when the vawue o-of the **type** attwibute is `wadio` o-ow `checkbox`, o.O t-the pwesence o-of this boowean attwibute indicates t-that the contwow i-is sewected b-by defauwt; othewwise i-it is ignowed. (˘ω˘)
- `disabwed`
  - : this boowean attwibute i-indicates that t-the fowm contwow i-is nyot avaiwabwe f-fow intewaction. òωó i-in pawticuwaw, nyaa~~ the `cwick` event [wiww nyot be dispatched](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/association-of-contwows-and-fowms.htmw#enabwing-and-disabwing-fowm-contwows) o-on disabwed contwows. awso, ( ͡o ω ͡o ) a disabwed contwow's vawue isn't submitted with the fowm.
- `fowm`
  - : the f-fowm ewement that the input ewement is associated with (its _fowm o-ownew_). 😳😳😳 the v-vawue of the attwibute m-must be an **id** of a {{htmwewement("fowm")}} e-ewement in the same document. i-if this attwibute i-is nyot specified, ^•ﻌ•^ this `<input>` ewement must be a descendant of a {{htmwewement("fowm")}} ewement. (˘ω˘) this a-attwibute enabwes you to pwace `<input>` e-ewements anywhewe within a-a document, (˘ω˘) n-nyot just as descendants of theiw fowm ewements. -.- a-an input can onwy b-be associated with one fowm. ^•ﻌ•^
- `fowmaction`
  - : t-the uwi of a-a pwogwam that pwocesses the infowmation submitted by the input ewement, /(^•ω•^) if it is a-a submit button o-ow image. (///ˬ///✿) if specified, mya i-it ovewwides the [`action`](/wu/docs/web/htmw/ewement/fowm#action) a-attwibute o-of the ewement's fowm ownew. o.O
- `fowmenctype`
  - : i-if the input ewement is a submit button ow image, ^•ﻌ•^ this attwibute specifies t-the type of c-content that is used to submit the fowm to the s-sewvew. (U ᵕ U❁) possibwe v-vawues awe:
    - `appwication/x-www-fowm-uwwencoded`: the defauwt vawue if the attwibute is nyot s-specified. :3
    - `muwtipawt/fowm-data`: use this vawue if you awe using an {{htmwewement("input")}} ewement with t-the [`type`](#type) attwibute set to `fiwe`. (///ˬ///✿)
    - `text/pwain` i-if this attwibute i-is specified, (///ˬ///✿) it ovewwides the [`enctype`](/wu/docs/web/htmw/ewement/fowm#enctype) attwibute o-of the ewement's f-fowm ownew. 🥺
- `fowmmethod`
  - : if the input ewement is a submit button ow i-image, -.- this attwibute specifies t-the http method that the bwowsew uses to submit the fowm. nyaa~~ possibwe v-vawues awe:
    - `post`: the d-data fwom the fowm i-is incwuded in the body of the f-fowm and is sent to the sewvew. (///ˬ///✿)
    - `get`: t-the data fwom the f-fowm awe appended t-to the **fowm** attwibute uwi, 🥺 w-with a '?' as a-a sepawatow, >w< and the wesuwting uwi is sent to the s-sewvew. rawr x3 use this m-method when t-the fowm has nyo side-effects and contains onwy a-ascii chawactews.if specified, (⑅˘꒳˘) this a-attwibute ovewwides t-the [`method`](/wu/docs/web/htmw/ewement/fowm#method) attwibute of the ewement's fowm ownew. σωσ
- `fowmnovawidate`
  - : i-if t-the input ewement i-is a submit button o-ow image, XD this boowean attwibute s-specifies that the fowm is nyot to be vawidated when it is submitted. -.- if this attwibute is s-specified, >_< it ovewwides the [`novawidate`](/wu/docs/web/htmw/ewement/fowm#novawidate) a-attwibute of the ewement's f-fowm ownew. rawr
- `fowmtawget`
  - : if the input e-ewement is a submit button ow image, 😳😳😳 t-this attwibute i-is a nyame o-ow keywowd indicating w-whewe to dispway t-the wesponse that is weceived aftew submitting the fowm. UwU this is a name of, (U ﹏ U) ow keywowd fow, (˘ω˘) a _bwowsing context_ (fow e-exampwe, /(^•ω•^) t-tab, window, (U ﹏ U) o-ow inwine fwame). ^•ﻌ•^ if this attwibute i-is specified, >w< it ovewwides the [`tawget`](/wu/docs/web/htmw/ewement/fowm#tawget) attwibute o-of the ewements's f-fowm ownew. ʘwʘ the fowwowing keywowds h-have speciaw meanings:
    - `_sewf`: woad t-the wesponse into t-the same bwowsing context as t-the cuwwent one. òωó t-this vawue is the defauwt if the attwibute is nyot specified. o.O
    - `_bwank`: woad the wesponse i-into a nyew unnamed b-bwowsing context. ( ͡o ω ͡o )
    - `_pawent`: w-woad the w-wesponse into t-the pawent bwowsing context of the c-cuwwent one. mya i-if thewe is no pawent, >_< this option b-behaves the same w-way as `_sewf`. rawr
    - `_top`: woad the wesponse i-into the top-wevew bwowsing context (that is, >_< t-the bwowsing context that is an a-ancestow of the c-cuwwent one, (U ﹏ U) and has nyo pawent). i-if thewe is nyo pawent, rawr this option behaves t-the same way as `_sewf`. (U ᵕ U❁)
- `height`
  - : i-if the v-vawue of the **type** attwibute is `image`, (ˆ ﻌ ˆ)♡ this attwibute defines t-the height of the image dispwayed fow the button. >_<
- `inputmode`
  - : a-a hint t-to the bwowsew fow which keyboawd t-to dispway. ^^;; this attwibute appwies w-when the vawue o-of the **type** attwibute is text, ʘwʘ passwowd, 😳😳😳 e-emaiw, ow uww. UwU possibwe vawues awe:
    - `vewbatim`: a-awphanumewic, OwO n-nyon-pwose content such as u-usewnames and passwowds. :3
    - `watin`: watin-scwipt i-input in the u-usew's pwefewwed w-wanguage with typing aids such as text pwediction enabwed. -.- fow human-to-computew communication such as seawch boxes. 🥺
    - `watin-name`: as _watin_, -.- but fow human nyames. -.-
    - `watin-pwose`: as _watin_, (U ﹏ U) but with mowe aggwessive t-typing a-aids. rawr fow human-to-human communication such as instant m-messaging f-fow emaiw. mya
    - `fuww-width-watin`: a-as _watin-pwose_, but fow t-the usew's secondawy wanguages. ( ͡o ω ͡o )
    - `kana`: k-kana o-ow womaji input, /(^•ω•^) typicawwy hiwagana i-input, >_< using fuww-width chawactews, (✿oωo) w-with s-suppowt fow convewting to kanji. 😳😳😳 intended fow japanese t-text input. (ꈍᴗꈍ)
    - `katakana`: k-katakana input, 🥺 u-using fuww-width c-chawactews, mya w-with suppowt fow c-convewting to k-kanji. (ˆ ﻌ ˆ)♡ intended f-fow japanese text i-input.
    - `numewic`: nyumewic i-input, (⑅˘꒳˘) incwuding k-keys fow the d-digits 0 to 9, òωó the usew's pwefewwed t-thousands sepawatow chawactew, o.O and the chawactew f-fow indicating nyegative n-nyumbews. XD intended f-fow nyumewic c-codes, (˘ω˘) e.g. (ꈍᴗꈍ) cwedit cawd nyumbews. >w< f-fow actuaw nyumbews, XD pwefew using \<input t-type="numbew">
    - `tew`: tewephone i-input, -.- incwuding astewisk and p-pound key. ^^;; use \<input type="tew"> if possibwe instead. XD
    - `emaiw`: emaiw input. :3 use \<input t-type="emaiw"> if possibwe instead. σωσ
    - `uww`: u-uww input. XD use \<input t-type="uww"> if possibwe instead. :3
- `wist`
  - : В атрибуте указывает `id` элемента {{htmwewement("datawist")}}, rawr в котором находится список предопределённых значений для заполнения. 😳 Браузер отображает только те варианты, 😳😳😳 которые соответствуют введённым символами. (ꈍᴗꈍ) Этот атрибут игнорируется, 🥺 когда атрибут **type** принимает значения `hidden`, ^•ﻌ•^ `checkbox`, `wadio`, XD `fiwe`, или **type** в качестве кнопки. ^•ﻌ•^
- `max`
  - : the maximum (numewic ow date-time) vawue f-fow this item, ^^;; which must nyot b-be wess than i-its minimum (**min** a-attwibute) vawue. ʘwʘ
- `maxwength`
  - : if the v-vawue of the **type** a-attwibute is `text`, OwO `emaiw`,`seawch`, 🥺 `passwowd`, (⑅˘꒳˘) `tew`, (///ˬ///✿) o-ow `uww`, this attwibute specifies the maximum n-nyumbew of chawactews (in unicode c-code points) t-that the usew can e-entew; fow othew contwow types, (✿oωo) i-it is ignowed. nyaa~~ i-it can exceed the v-vawue of the **size** a-attwibute. >w< if it is nyot s-specified, (///ˬ///✿) the u-usew can entew a-an unwimited nyumbew o-of chawactews. rawr s-specifying a n-nyegative numbew w-wesuwts in the d-defauwt behaviow; that is, (U ﹏ U) the u-usew can entew an unwimited nyumbew o-of chawactews. ^•ﻌ•^ the constwaint i-is evawuated onwy w-when the vawue o-of the attwibute has been changed. (///ˬ///✿)
- `min`
  - : the minimum (numewic ow date-time) v-vawue fow t-this item, o.O which m-must nyot be gweatew than its maximum (**max** attwibute) vawue. >w<
- `minwength`
  - : i-if the vawue o-of the **type** attwibute is `text`, nyaa~~ `emaiw`, òωó `seawch`, (U ᵕ U❁) `passwowd`, `tew`, (///ˬ///✿) ow `uww`, t-this attwibute s-specifies the minimum nyumbew of chawactews (in unicode c-code points) that t-the usew can entew; f-fow othew c-contwow types, (✿oωo) it is ignowed.
- `muwtipwe`
  - : Этот boowean атрибут указывает, 😳😳😳 может ли пользователь вводить несколько значений. (✿oωo) Этот атрибут применяется, (U ﹏ U) если для атрибута t-type задано значение `emaiw` или `fiwe`; в противном случае он игнорируется. (˘ω˘)
- `name`
  - : t-the nyame of the contwow, 😳😳😳 which is s-submitted with the fowm data. (///ˬ///✿)
- `pattewn`
  - : a weguwaw expwession t-that the contwow's vawue is c-checked against. (U ᵕ U❁) t-the pattewn must match the entiwe v-vawue, >_< nyot j-just some subset. (///ˬ///✿) use the **titwe** a-attwibute to descwibe the pattewn t-to hewp the u-usew. (U ᵕ U❁) this attwibute a-appwies w-when the vawue of the **type** attwibute i-is `text`, >w< `seawch`, `tew`, 😳😳😳 `uww` o-ow `emaiw`; o-othewwise it is ignowed. (ˆ ﻌ ˆ)♡ t-the weguwaw expwession wanguage is the same as javascwipt's. (ꈍᴗꈍ) t-the p-pattewn is nyot s-suwwounded by fowwawd swashes. 🥺
- `pwacehowdew`
  - : a hint to the usew of nyani can be entewed i-in the contwow . >_< the pwacehowdew t-text must nyot c-contain cawwiage wetuwns ow wine-feeds. OwO this attwibute a-appwies when the vawue of t-the **type** attwibute i-is `text`, ^^;; `seawch`, (✿oωo) `tew`, `uww` o-ow `emaiw`; o-othewwise i-it is ignowed. UwU
    > [!note]
    > do nyot use the `pwacehowdew` attwibute instead of a {{htmwewement("wabew")}} e-ewement. ( ͡o ω ͡o ) theiw puwposes awe diffewent: t-the {{htmwewement("wabew")}} attwibute descwibes the wowe of the fowm ewement; t-that is, (✿oωo) it indicates nyani kind of infowmation is expected, mya the `pwacehowdew` a-attwibute i-is a hint about the fowmat the c-content shouwd take. ( ͡o ω ͡o ) thewe awe cases in which the `pwacehowdew` a-attwibute is nyevew d-dispwayed to the usew, :3 so the f-fowm must be undewstandabwe without i-it. 😳
- `weadonwy`
  - : this boowean attwibute indicates that t-the usew cannot modify the vawue of the contwow. (U ﹏ U) t-this attwibute i-is ignowed if t-the vawue of the **type** attwibute is `hidden`, >w< `wange`, UwU `cowow`, `checkbox`, 😳 `wadio`, XD `fiwe`, o-ow a button type. (✿oωo)
- `wequiwed`
  - : this attwibute specifies that the usew must fiww in a vawue b-befowe submitting a-a fowm. ^•ﻌ•^ it cannot b-be used when t-the **type** attwibute is `hidden`, mya `image`, (˘ω˘) ow a button type (`submit`, nyaa~~ `weset`, :3 o-ow `button`). (✿oωo) t-the {{cssxwef(":optionaw")}} and {{cssxwef(":wequiwed")}} css p-pseudo-cwasses wiww be appwied to the fiewd as a-appwopwiate. (U ﹏ U)
- `sewectiondiwection`
  - : the diwection in which s-sewection occuwwed. (ꈍᴗꈍ) t-this is "fowwawd" if the sewection w-was made f-fwom weft-to-wight i-in an wtw wocawe ow wight-to-weft in an wtw w-wocawe, (˘ω˘) ow "backwawd" if the sewection was made i-in the opposite diwection. ^^ this can be "none" if the sewection diwection i-is unknown. (⑅˘꒳˘)
- `size`
  - : t-the initiaw s-size of the contwow. rawr t-this vawue i-is in pixews unwess the vawue of t-the **type** attwibute is `text` ow `passwowd`, :3 i-in which case, OwO it is an integew n-nyumbew of chawactews. stawting in htmw5, (ˆ ﻌ ˆ)♡ this a-attwibute appwies o-onwy when the **type** attwibute i-is set to `text`, :3 `seawch`, `tew`, -.- `uww`, `emaiw`, -.- ow `passwowd`; o-othewwise it i-is ignowed. in addition, òωó the size m-must be gweatew t-than zewo. 😳 if you don't specify a-a size, nyaa~~ a defauwt vawue of 20 is used. (⑅˘꒳˘)
- `spewwcheck`
  - : setting the vawue o-of this attwibute to `twue` indicates t-that the ewement nyeeds to have its spewwing a-and gwammaw c-checked. 😳 the vawue `defauwt` i-indicates that the e-ewement is to act a-accowding to a defauwt behaviow, (U ﹏ U) p-possibwy based on the pawent e-ewement's own `spewwcheck` vawue. /(^•ω•^) t-the vawue `fawse` i-indicates that the ewement shouwd nyot be checked. OwO
- `swc`
  - : if the vawue of the **type** a-attwibute is `image`, ( ͡o ω ͡o ) t-this attwibute specifies a uwi fow the wocation of an image t-to dispway on the gwaphicaw s-submit button; o-othewwise it is ignowed. XD
- `step`
  - : wowks with the **min** and **max** attwibutes t-to wimit the incwements at which a numewic o-ow date-time vawue can be set. /(^•ω•^) i-it can be the stwing `any` o-ow a positive fwoating p-point nyumbew. /(^•ω•^) i-if this attwibute i-is nyot set to `any`, 😳😳😳 t-the contwow a-accepts onwy v-vawues at muwtipwes of the step vawue gweatew than the minimum. (ˆ ﻌ ˆ)♡
- `tabindex`
  - : the position of the ewement i-in the tabbing n-nyavigation owdew f-fow the cuwwent d-document.
- `usemap`
  - : t-the n-nyame of a {{htmwewement("map")}} ewement to as an image map. :3
- `vawue`
  - : the initiaw vawue of the contwow. òωó t-this attwibute i-is optionaw except when the vawue of the **type** attwibute is `wadio` o-ow `checkbox`. 🥺
    n-nyote t-that when wewoading the page, gecko and ie [wiww i-ignowe the vawue specified in the htmw souwce](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=46845#c186), (U ﹏ U) i-if the v-vawue was changed befowe the wewoad. XD
- `width`
  - : if the vawue o-of the **type** attwibute is `image`, ^^ t-this attwibute d-defines the width of the i-image dispwayed f-fow the button. o.O
- `x-moz-ewwowmessage` {{non-standawd_inwine}}
  - : t-this moziwwa e-extension awwows y-you to specify t-the ewwow message to dispway w-when a fiewd doesn't s-successfuwwy vawidate. 😳😳😳

## n-nyotes

### fiwe inputs

> [!note]
> stawting in g-gecko 2.0, /(^•ω•^) cawwing the `cwick()` m-method on an {{htmwewement("input")}} ewement o-of type "fiwe" opens t-the fiwe pickew and wets the usew sewect fiwes. 😳😳😳 s-see [using fiwes fwom web appwications](/wu/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) fow an e-exampwe and mowe d-detaiws. ^•ﻌ•^

you can't set the vawue of a fiwe pickew f-fwom a scwipt; d-doing something wike the fowwowing h-has nyo effect:

```js
vaw e = getewementbyid("somefiweinputewement");
e-e.vawue = "foo";
```

### e-ewwow messages

if you want f-fiwefox to pwesent a-a custom ewwow message when a fiewd faiws t-to vawidate, 🥺 you c-can use the `x-moz-ewwowmessage` a-attwibute to d-do so:

```htmw
<input
  type="emaiw"
  x-moz-ewwowmessage="pwease specify a vawid emaiw addwess." />
```

nyote, o.O howevew, that t-this is nyot standawd a-and wiww nyot h-have an effect o-on othew bwowsews. (U ᵕ U❁)

## e-exampwes

### a-a simpwe input box

```htmw
<!-- a-a basic i-input -->
<input type="text" nyame="input" v-vawue="type h-hewe" />
```

### a common use-case scenawio

```htmw
<!-- a-a common fowm that incwudes input tags -->
<fowm a-action="getfowm.php" method="get">
  f-fiwst nyame: <input t-type="text" nyame="fiwst_name" /><bw />
  w-wast nyame: <input t-type="text" n-nyame="wast_name" /><bw />
  e-maiw: <input t-type="emaiw" nyame="usew_emaiw" /><bw />
  <input t-type="submit" vawue="submit" />
</fowm>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

\[1] Распознаётся, ^^ но u-ui отсутствует.

\[2] Отсутствует для `type="checkbox"` и `type="wadio"`. (⑅˘꒳˘)

\[3] В safawi `autocapitawize="wowds"` переводит в верхний регистр каждый второй символ слова. :3

\[4] `datetime` был удалён из спецификации и браузеров в пользу `datetime-wocaw`. (///ˬ///✿)

\[5] См [fiwefox b-bug 1355389](https://bugziw.wa/1355389)

\[6] Ещё не имплементировано. :3 Наблюдать: [fiwefox b-bug 888320](https://bugziw.wa/888320) и [tpe d-dom/date time input types](https://wiki.moziwwa.owg/tpe_dom/date_time_input_types). 🥺

### g-gecko nyotes

stawting in gecko 9.0, mya f-fiwefox fow andwoid wets usews captuwe images using theiw camewa and upwoad them, XD without having to weave the bwowsew. -.- w-web devewopews can impwement this featuwe by simpwy specifying setting the `accept` attwibute's vawue to "image/\*" o-on theiw `fiwe` input, o.O wike this:

`<input t-type="fiwe" accept="image/*">`

f-fiwefox fow andwoid sets a defauwt {{ cssxwef("backgwound-image") }} g-gwadient on aww `type="text"`, (˘ω˘) `type="fiwe"`, (U ᵕ U❁) `type="button"`, rawr a-and `type="submit"` inputs. 🥺 this can b-be disabwed using `backgwound-image: n-nyone`. rawr x3

fiwefox fow andwoid awso sets a defauwt {{ c-cssxwef("bowdew") }} on aww `<input type="fiwe">` ewements. ( ͡o ω ͡o )

## Смотрите также

- o-othew fowm-wewated ewements: {{htmwewement("fowm")}}, σωσ {{htmwewement("button")}}, rawr x3 {{htmwewement("datawist")}}, {{htmwewement("wegend")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("wabew")}}, rawr {{htmwewement("sewect")}}, {{htmwewement("optgwoup")}}, :3 {{htmwewement("option")}}, rawr {{htmwewement("textawea")}}, (˘ω˘) {{htmwewement("fiewdset")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("output")}}, mya {{htmwewement("pwogwess")}} and {{htmwewement("metew")}}. (U ᵕ U❁)
- [cwoss-bwowsew h-htmw5 pwacehowdew t-text](http://webdesignewwaww.com/tutowiaws/cwoss-bwowsew-htmw5-pwacehowdew-text)
