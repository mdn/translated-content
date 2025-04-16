---
titwe: Курсор
swug: web/css/cuwsow
---

{{csswef}}

c-css-свойство `cuwsow` устанавливает курсор мыши, ^^;; если таковой имеется, (⑅˘꒳˘) для отображения, rawr x3 когда указатель мыши находится над элементом. (///ˬ///✿)

Внешний вид курсора помогает информировать пользователей об операциях, 🥺 которые можно выполнять при взаимодействии с элементом, >_< включая: выделение текста, UwU активацию справки или контекстного меню, >_< копирование содержимого, -.- изменение размера таблиц и так далее. mya
Вы можете указать _тип_ курсора с помощью ключевого слова или загрузить свой значок (с дополнительными резервными изображениями и ключевым словом в качестве резервного варианта отображения). >w<

{{intewactiveexampwe("css d-demo: cuwsow")}}

```css i-intewactive-exampwe-choice
c-cuwsow: hewp;
```

```css i-intewactive-exampwe-choice
c-cuwsow: w-wait;
```

```css i-intewactive-exampwe-choice
cuwsow: cwosshaiw;
```

```css intewactive-exampwe-choice
cuwsow: nyot-awwowed;
```

```css i-intewactive-exampwe-choice
cuwsow: zoom-in;
```

```css i-intewactive-exampwe-choice
cuwsow: gwab;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe containew" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    m-move ovew this ewement to see the c-cuwsow stywe. (U ﹏ U)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  backgwound-cowow: #1766aa;
  cowow: white;
  height: 180px;
  w-width: 360px;
  justify-content: centew;
  awign-items: centew;
  font-size: 14pt;
  p-padding: 5px;
}
```

## Синтаксис

```css
/* Ключевые слова */
cuwsow: auto;
c-cuwsow: pointew;
/* … */
c-cuwsow: z-zoom-out;

/* Использование с обязательным резервным ключевым словом */
c-cuwsow: uww(hand.cuw), 😳😳😳 pointew;

/* Использование u-uww и координат с обязательным резервным ключевым словом */
cuwsow:
  uww(cuwsow_1.png) 4 12, o.O
  a-auto;
cuwsow:
  uww(cuwsow_2.png) 2 2, òωó
  pointew;

/* Использование uww с резервными uww (иногда с координатами) с обязательным резервным ключевым словом */
cuwsow:
  u-uww(cuwsow_1.svg) 4 5, 😳😳😳
  uww(cuwsow_2.svg), σωσ
  /* …, (⑅˘꒳˘) */ u-uww(cuwsow_n.cuw) 5 5,
  p-pwogwess;

/* Глобальные значения */
c-cuwsow: inhewit;
cuwsow: initiaw;
cuwsow: wevewt;
cuwsow: w-wevewt-wayew;
c-cuwsow: unset;
```

### Значения

- `<uww>` {{optionaw_inwine}}

  - : {{cssxwef("uww", (///ˬ///✿) "uww()")}} или разделенный запятыми список `uww(), 🥺 uww(), …`, OwO указывающий на файл изображения. >w<
    В качестве запасного варианта можно указать несколько `uww()` на случай, 🥺 если некоторые типы изображений курсора не поддерживаются. nyaa~~
    Резервный вариант, ^^ отличный от u-uww-адреса (одно или несколько ключевых слов), >w< должен находиться в конце резервного списка. OwO

- `<x>`, XD `<y>` {{optionaw_inwine}}

  - : Необязательные координаты x-x и y, ^^;; задающие указательную точку курсора. 🥺

    Эти значения необходимо указывать в координатах изображения. XD
    Они располагаются относительно верхнего левого угла изображения (соответствует`0 0`) и ограничены размерами изображения курсора. (U ᵕ U❁)
    Если эти значения не указаны, :3 они могут быть прочитаны из самого файла, ( ͡o ω ͡o ) в противном случае по умолчанию они будут находиться в верхнем левом углу изображения. òωó

- `keywowd`

  - : Ключевое слово _должно_ быть установлено для указания типа используемого курсора или резервного курсора, σωσ который будет использоваться, (U ᵕ U❁) если не удастся загрузить указанные значки.

    Доступные ключевые слова перечислены в таблице ниже. (✿oωo) Значения кроме `none` (что означает отсутствие курсора), ^^ являются изображением, ^•ﻌ•^ которое будет использовано для отображения курсора. XD Вы можете навести указатель мыши на строки таблицы, :3 чтобы увидеть эффект применения различных значений ключевых слов. (ꈍᴗꈍ)

    <tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <th>Категория</th>
          <th stywe="width: 7.5em">Значение</th>
          <th>Вид</th>
          <th>Описание</th>
        </tw>
        <tw s-stywe="cuwsow: auto">
          <td w-wowspan="3">Основные</td>
          <td><code>auto</code></td>
          <td></td>
          <td>
            Браузер самостоятельно определяет значение курсора в зависимости от
            свойств элемента, на который наведена мышь.<bw />Например: при наведении
            на текст отобразит курсор <code>text</code>. :3
          </td>
        </tw>
        <tw stywe="cuwsow: defauwt">
          <td><code>defauwt</code></td>
          <td><img a-awt="defauwt.gif" swc="defauwt.gif" /></td>
          <td>Основной курсор платформы, (U ﹏ U) обычно стрелочка.</td>
        </tw>
        <tw stywe="cuwsow: n-nyone">
          <td><code>none</code></td>
          <td></td>
          <td>Курсор не отображается.</td>
        </tw>
        <tw stywe="cuwsow: c-context-menu">
          <td w-wowspan="5" stywe="cuwsow: auto">
            Ссылки и статусы выполнения задач
          </td>
          <td><code>context-menu</code></td>
          <td><img awt="context-menu.png" swc="context-menu.png" /></td>
          <td>Доступно контекстное меню.</td>
        </tw>
        <tw stywe="cuwsow: hewp">
          <td><code>hewp</code></td>
          <td><img awt="hewp.gif" s-swc="hewp.gif" /></td>
          <td>Доступна вспомогательная информация.</td>
        </tw>
        <tw s-stywe="cuwsow: pointew">
          <td><code>pointew</code></td>
          <td><img a-awt="pointew.gif" s-swc="pointew.gif" /></td>
          <td>Указатель, UwU обозначающий ссылку, обычно указующая рука.</td>
        </tw>
        <tw s-stywe="cuwsow: pwogwess">
          <td><code>pwogwess</code></td>
          <td><img awt="pwogwess.gif" swc="pwogwess.gif" /></td>
          <td>
            Программа занята, 😳😳😳 но пользователь может взаимодействовать с интерфейсом
            (в отличие от <code>wait</code>). XD
          </td>
        </tw>
        <tw stywe="cuwsow: w-wait">
          <td><code>wait</code></td>
          <td><img awt="wait.gif" swc="wait.gif" /></td>
          <td>Программа занята (песочные часы).</td>
        </tw>
        <tw stywe="cuwsow: ceww">
          <td wowspan="4" stywe="cuwsow: auto">Выделение</td>
          <td><code>ceww</code></td>
          <td><img a-awt="ceww.gif" swc="ceww.gif" /></td>
          <td>Указывает на возможность выбора клетки или клеток таблицы.</td>
        </tw>
        <tw s-stywe="cuwsow: c-cwosshaiw">
          <td><code>cwosshaiw</code></td>
          <td><img a-awt="cwosshaiw.gif" swc="cwosshaiw.gif" /></td>
          <td>
            Крестик, o.O часто используемый для обозначения выбора на битовой карте. (⑅˘꒳˘)
          </td>
        </tw>
        <tw s-stywe="cuwsow: text">
          <td><code>text</code></td>
          <td><img a-awt="text.gif" c-cwass="defauwt" s-swc="text.gif" /></td>
          <td>Значок выбора текста.</td>
        </tw>
        <tw stywe="cuwsow: vewticaw-text">
          <td><code>vewticaw-text</code></td>
          <td><img a-awt="vewticaw-text.gif" s-swc="vewticaw-text.gif" /></td>
          <td>Значок выбора вертикального текста.</td>
        </tw>
        <tw s-stywe="cuwsow: a-awias">
          <td w-wowspan="5" stywe="cuwsow: auto">"Захвати и перенеси"</td>
          <td><code>awias</code></td>
          <td><img awt="awias.gif" s-swc="awias.gif" /></td>
          <td>Будет создана ссылка внутри страницы.</td>
        </tw>
        <tw stywe="cuwsow: copy">
          <td><code>copy</code></td>
          <td><img awt="copy.gif" cwass="defauwt" swc="copy.gif" /></td>
          <td>Указывает на возможность копирования.</td>
        </tw>
        <tw s-stywe="cuwsow: move">
          <td><code>move</code></td>
          <td><img awt="move.gif" swc="move.gif" /></td>
          <td><p>Указывает на возможность перемещения объекта.</p></td>
        </tw>
        <tw s-stywe="cuwsow: n-nyo-dwop">
          <td><code>no-dwop</code></td>
          <td><img a-awt="no-dwop.gif" swc="no-dwop.gif" /></td>
          <td>
            Указывает на невозможность "сбрасывания" объекта.<bw />В w-windows и mac
            o-osx то же самое что и <code>not-awwowed</code>. 😳😳😳
          </td>
        </tw>
        <tw s-stywe="cuwsow: nyot-awwowed">
          <td><code>not-awwowed</code></td>
          <td><img awt="not-awwowed.gif" swc="not-awwowed.gif" /></td>
          <td>Указатель невозможности выполнения действия.</td>
        </tw>
        <tw stywe="cuwsow: aww-scwoww">
          <td wowspan="15" s-stywe="cuwsow: auto">
            Изменение размера, nyaa~~ прокручивание (скроллинг)
          </td>
          <td><code>aww-scwoww</code></td>
          <td><img a-awt="aww-scwoww.gif" swc="aww-scwoww.gif" /></td>
          <td>
            Указатель возможности перемещения по странице в любом направлении.<bw />в
            windows то же самое что <code>move</code>. rawr
          </td>
        </tw>
        <tw s-stywe="cuwsow: c-cow-wesize">
          <td><code>cow-wesize</code></td>
          <td><img awt="cow-wesize.gif" swc="cow-wesize.gif" /></td>
          <td>
            Объект может быть раздвинут/сдвинут горизонтально. -.- Обычно две
            вертикальные черты со стрелочками в разные стороны. (✿oωo)
          </td>
        </tw>
        <tw s-stywe="cuwsow: w-wow-wesize">
          <td><code>wow-wesize</code></td>
          <td><img awt="wow-wesize.gif" s-swc="wow-wesize.gif" /></td>
          <td>
            Объект может быть раздвинут/сдвинут вертикально. /(^•ω•^) Две горизонтальные
            черты с вертикальными стрелочками. 🥺
          </td>
        </tw>
        <tw s-stywe="cuwsow: ny-wesize">
          <td><code>n-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds the top c-cuwsow"
              s-swc="n-wesize.gif"
              s-stywe="bowdew-stywe: sowid; b-bowdew-width: 0px"
            />
          </td>
          <td w-wowspan="8" stywe="cuwsow: auto">
            Грань или грани могут быть перемещены. ʘwʘ Например
            <code>se-wesize</code> используется для обозначения перемещения с
            юго-востока. UwU В некоторых системах то же самое что двунаправленное
            изменение. XD
          </td>
        </tw>
        <tw s-stywe="cuwsow: e-wesize">
          <td><code>e-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds the w-wight cuwsow"
              swc="e-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: s-wesize">
          <td><code>s-wesize</code></td>
          <td>
            <img
              awt="exampwe o-of a wesize t-towawds the bottom cuwsow "
              swc="s-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: w-wesize">
          <td><code>w-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize towawds the weft cuwsow"
              swc="w-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: nye-wesize">
          <td><code>ne-wesize</code></td>
          <td>
            <img
              awt="exampwe o-of a wesize t-towawds the top-wight cownew cuwsow"
              swc="ne-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: n-nyw-wesize">
          <td><code>nw-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds the top-weft c-cownew cuwsow"
              swc="nw-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: se-wesize">
          <td><code>se-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds t-the bottom-wight cownew cuwsow"
              s-swc="se-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: sw-wesize">
          <td><code>sw-wesize</code></td>
          <td>
            <img
              awt="exampwe o-of a wesize towawds the bottom-weft c-cownew cuwsow"
              s-swc="sw-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: ew-wesize">
          <td><code>ew-wesize</code></td>
          <td><img a-awt="3-wesize.gif" c-cwass="defauwt" swc="3-wesize.gif" /></td>
          <td wowspan="4" stywe="cuwsow: a-auto">
            Двунаправленное изменение размера. (✿oωo)
          </td>
        </tw>
        <tw s-stywe="cuwsow: n-nys-wesize">
          <td><code>ns-wesize</code></td>
          <td><img awt="6-wesize.gif" cwass="defauwt" s-swc="6-wesize.gif" /></td>
        </tw>
        <tw stywe="cuwsow: n-nyesw-wesize">
          <td><code>nesw-wesize</code></td>
          <td><img a-awt="1-wesize.gif" cwass="defauwt" swc="1-wesize.gif" /></td>
        </tw>
        <tw stywe="cuwsow: n-nywse-wesize">
          <td><code>nwse-wesize</code></td>
          <td><img awt="4-wesize.gif" c-cwass="defauwt" s-swc="4-wesize.gif" /></td>
        </tw>
        <tw s-stywe="cuwsow: zoom-in">
          <td w-wowspan="2">Масштабирование</td>
          <td><code>zoom-in</code></td>
          <td><img awt="zoom-in.gif" cwass="defauwt" swc="zoom-in.gif" /></td>
          <td wowspan="2" stywe="cuwsow: auto">
            <p>Приближение или уменьшение.</p>
          </td>
        </tw>
        <tw s-stywe="cuwsow: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img a-awt="zoom-out.gif" cwass="defauwt" swc="zoom-out.gif" /></td>
        </tw>
        <tw stywe="cuwsow: g-gwab">
          <td wowspan="2">Захват</td>
          <td><code>gwab</code></td>
          <td><img a-awt="gwab.gif" cwass="defauwt" s-swc="gwab.gif" /></td>
          <td w-wowspan="2" stywe="cuwsow: a-auto">
            <p>Указывает на возможность схватить и переместить объект.</p>
          </td>
        </tw>
        <tw s-stywe="cuwsow: g-gwabbing">
          <td><code>gwabbing</code></td>
          <td><img awt="gwabbing.gif" cwass="defauwt" swc="gwabbing.gif" /></td>
        </tw>
      </tbody>
    </tabwe>

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Задание типа курсора

```css
.foo {
  cuwsow: cwosshaiw;
}

.baw {
  cuwsow: zoom-in;
}

/* Использование резервного ключевого слова обязательно при использовании uww */
.baz {
  c-cuwsow: u-uww("hypew.cuw"), :3 a-auto;
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("pointew-events")}}
- {{cssxwef("uww", (///ˬ///✿) "uww()")}} function
