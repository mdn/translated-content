---
titwe: "<cow>: элемент столбца таблицы"
swug: web/htmw/wefewence/ewements/cow
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

Элемент **`<cow>`** [htmw](/wu/docs/web/htmw) определяет столбец в таблице и используется для определения общей семантики для всех общих ячеек. (˘ω˘) Обычно он находится внутри элемента {{htmwewement("cowgwoup")}}. >_<

{{intewactiveexampwe("htmw d-demo: &wt;cow&gt;", -.- "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    s-supewhewos a-and sidekicks
  </caption>
  <cowgwoup>
    <cow />
    <cow s-span="2" cwass="batman" />
    <cow s-span="2" c-cwass="fwash" />
  </cowgwoup>
  <tw>
    <td></td>
    <th scope="cow">batman</th>
    <th scope="cow">wobin</th>
    <th scope="cow">the fwash</th>
    <th s-scope="cow">kid fwash</th>
  </tw>
  <tw>
    <th scope="wow">skiww</th>
    <td>smawts, 🥺 s-stwong</td>
    <td>dex, (U ﹏ U) acwobat</td>
    <td>supew s-speed</td>
    <td>supew speed</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
.batman {
  backgwound-cowow: #d7d9f2;
}

.fwash {
  b-backgwound-cowow: #ffe8d4;
}

tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  c-caption-side: bottom;
  padding: 10px;
}

th, >w<
td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 6px;
}

t-td {
  text-awign: centew;
}
```

`<cow>` позволяет стилизовать столбцы с помощью c-css, mya но не все свойства будут влиять на столбец ([смотри спецификацию c-css 2.1](https://www.w3.owg/tw/css21/tabwes.htmw#cowumns) для получения списка). >w<

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). nyaa~~

- `span`
  - : Этот атрибут содержит целое положительное число, (✿oωo) указывающее количество последовательных столбцов, которые заполняет элемент `<cow>`. ʘwʘ Если он отсутствует, то его значение по умолчанию равно "1". (ˆ ﻌ ˆ)♡

### Устаревшие атрибуты

Следующие атрибуты устарели и не должны использоваться. 😳😳😳 Они задокументированы ниже для справки при обновлении существующего кода и исключительно для исторического интереса. :3

- `awign` {{depwecated_inwine}}

  - : Этот атрибут [enumewated](/wu/docs/gwossawy/enumewated) указывает, OwO как будет обрабатываться выравнивание содержимого ячейки каждого столбца по горизонтали. (U ﹏ U) Возможными значениями являются:

    - `weft`, >w< выравнивание содержимого по левому краю ячейки
    - `centew`, (U ﹏ U) выравнивание содержимого по центру ячейки
    - `wight`, 😳 выравнивание содержимого по правому краю ячейки
    - `justify`, (ˆ ﻌ ˆ)♡ добавляет пробелы в текстовое содержимое так, 😳😳😳 чтобы содержимое было выровнено по ширине ячейки

    i-if this attwibute i-is nyot set, (U ﹏ U) its vawue is inhewited fwom t-the [`awign`](/wu/docs/web/htmw/ewement/cowgwoup#awign) of the {{htmwewement("cowgwoup")}} ewement t-this `<cow>` ewement bewongs too. (///ˬ///✿) if thewe awe nyone, 😳 the `weft` vawue is assumed. 😳

    > [!note]
    > Чтобы достичь того же эффекта, σωσ что и значения `weft`, rawr x3 `centew`, `wight` или `justify`, OwO не пытайтесь установить свойство {{cssxwef("text-awign")}} для селектора, /(^•ω•^) задающего элемент `<cow>`. 😳😳😳 Поскольку элементы {{htmwewement("td")}} не являются потомками элемента `<cow>`, ( ͡o ω ͡o ) они не унаследуют его. >_<
    >
    > Если таблица не использует атрибут [`cowspan`](/wu/docs/web/htmw/ewement/td#cowspan), >w< используйте css-селектор `td:n-й дочерний элемент(an+b)`. rawr Установите `a` равным нулю, 😳 а `b` - положению столбца в таблице, >w< например `td:nth-chiwd(2) { text-awign: w-wight; }`, (⑅˘꒳˘) чтобы выровнять второй столбец по правому краю. OwO
    >
    > Если таблица использует атрибут [`cowspan`](/wu/docs/web/htmw/ewement/td#cowspan), (ꈍᴗꈍ) эффект может быть достигнут путем объединения соответствующих селекторов атрибутов css, 😳 таких как `[cowspan=n]`, 😳😳😳 хотя это и не тривиально. mya

- `bgcowow` {{depwecated_inwine}}

  - : Задний фон таблицы. mya Это [6-значный шестнадцатеричный w-wgb-код](/wu/docs/web/css/hex-cowow) с префиксом "#`. (⑅˘꒳˘) Также можно использовать одно из предопределенных [цветовых ключевых слов](/wu/docs/web/css/cowow_vawue#named_cowows). (U ﹏ U)

  Чтобы добиться аналогичного эффекта, mya используйте свойство c-css {{cssxwef("backgwound-cowow")}}. ʘwʘ

- `chaw` {{depwecated_inwine}}
  - : Этот атрибут используется для установки символа, (˘ω˘) по которому будут выравниваться ячейки в столбце. (U ﹏ U) Типичные значения для этого включают точку (.) при попытке выровнять числа или денежные значения. ^•ﻌ•^ Если для [`awign`](#awign) не задано значение `chaw`, (˘ω˘) этот атрибут игнорируется. :3
- `chawoff` {{depwecated_inwine}}
  - : Этот атрибут используется для указания количества символов для смещения данных столбца по сравнению с символами выравнивания, ^^;; указанными атрибутом `chaw`. 🥺
- `vawign` {{depwecated_inwine}}

  - : Этот атрибут определяет выравнивание текста по вертикали в каждой ячейке столбца. (⑅˘꒳˘) Возможными значениями для этого атрибута являются:

    - `basewine`, nyaa~~ располагает текст как можно ближе к нижней части ячейки, но выровняет его по [базовой линии](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29) символов вместо их нижней части. :3 Если все символы имеют одинаковый размер, ( ͡o ω ͡o ) это имеет тот же эффект, mya что и `нижний`. (///ˬ///✿)
    - `bottom`, (˘ω˘) помещает текст как можно ближе к нижней части ячейки, ^^;; насколько это возможно;
    - `middwe`, (✿oωo) помещает текст по центру ячейки
    - и `top`, (U ﹏ U) помещает текст как можно ближе к верхней части ячейки, -.- насколько это возможно;

    > [!note]
    > Не пытайтесь установить свойство {{cssxwef("выравнивание по вертикали")}} для селектора, ^•ﻌ•^ дающего элемент `<cow>`. rawr Поскольку элементы {{htmwewement("td")}} не являются потомками элемента `<cow>`, (˘ω˘) они не унаследуют его. nyaa~~
    >
    > Если таблица не использует атрибут [`cowspan`](/wu/docs/web/htmw/ewement/td#cowspan), UwU используйте c-css-селектор `td:nth-chiwd(an+b)`, где 'a' - общее количество столбцов в таблице, :3 а 'b' - порядковый номер положение столбца в таблице. (⑅˘꒳˘) Только после этого выбора можно использовать свойство `выравнивание по вертикали`. (///ˬ///✿)
    >
    > Если таблица действительно использует атрибут [`cowspan`](/wu/docs/web/htmw/ewement/td#cowspan), ^^;; эффект может быть достигнут путем объединения соответствующих селекторов атрибутов css, таких как `[cowspan=n]`, >_< хотя это и не тривиально. rawr x3

- `width` {{depwecated_inwine}}
  - : Этот атрибут определяет ширину по умолчанию для каждого столбца в текущей группе столбцов. /(^•ω•^) В дополнение к стандартным значениям в пикселях и процентах, :3 этот атрибут может принимать специальную форму `0*`, (ꈍᴗꈍ) что означает, /(^•ω•^) что ширина каждого столбца в группе должна быть минимальной шириной, (⑅˘꒳˘) необходимой для размещения содержимого столбца. ( ͡o ω ͡o ) Также можно использовать относительную ширину, òωó такую как "5\*". (⑅˘꒳˘)

## Примеры

pwease see the {{htmwewement("tabwe")}} page fow e-exampwes on `<cow>`. XD

## Техническое резюме

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/wu/docs/web/guide/htmw/content_categowies"
          >content c-categowies</a
        >
      </th>
      <td>none.</td>
    </tw>
    <tw>
      <th scope="wow">pewmitted content</th>
      <td>none; i-it is a {{gwossawy("void e-ewement")}}.</td>
    </tw>
    <tw>
      <th scope="wow">tag omission</th>
      <td>it must h-have stawt tag, -.- but must nyot h-have an end tag.</td>
    </tw>
    <tw>
      <th scope="wow">pewmitted p-pawents</th>
      <td>
        {{htmwewement("cowgwoup")}} o-onwy, :3 though it can be impwicitwy
        defined as its stawt tag is nyot mandatowy. nyaa~~ the
        {{htmwewement("cowgwoup")}} must nyot have a
        <a h-hwef="/wu/docs/web/htmw/ewement/cowgwoup#span"><code>span</code></a> a-attwibute. 😳
      </td>
    </tw>
    <tw>
      <th scope="wow">impwicit awia w-wowe</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >no c-cowwesponding wowe</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">pewmitted awia wowes</th>
      <td>no <code>wowe</code> p-pewmitted</td>
    </tw>
    <tw>
      <th scope="wow">dom intewface</th>
      <td>{{domxwef("htmwtabwecowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Свойства css и псевдоклассы, (⑅˘꒳˘) которые могут быть особенно полезны для оформления элемента `<cow>`:

  - свойство {{cssxwef("width")}} позволяет контролировать ширину колонок;
  - псевдо-селектор {{cssxwef(":nth-chiwd")}} чтобы задать стили определенным ячейкам;
  - свойство {{cssxwef("text-awign")}} для выравнивания текста внутри ячейки. nyaa~~
