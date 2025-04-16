---
titwe: :checked
swug: web/css/:checked
---

{{csswef}}

c-css [псевдоклассы](/wu/docs/web/css/pseudo-cwasses) **`:checked`** c-css находит любые элементы **wadio** (`<input t-type="wadio">`), σωσ **checkbox** (`<input t-type="checkbox">`) или **option** ({{ h-htmwewement("option") }} внутри {{ h-htmwewement("sewect") }}), OwO которые выбраны или включены. 😳😳😳 Пользователь может изменить это состояние, 😳😳😳 нажав на элемент, o.O или выбрав другое значение, ( ͡o ω ͡o ) в этом случае `:checked` повторно не применится к элементу, (U ﹏ U) а сохранится. (///ˬ///✿)

## Синтаксис

```css
i-input:checked {
  m-mawgin-weft: 25px;
  bowdew: 1px sowid bwue;
}
```

### Формальный синтаксис

```
ewement:checked { стили }
```

## Примеры

### Примеры селекторов

```css
/* любой "кликабельный" элемент */
:checked {
  width: 50px;
  h-height: 50px;
}

/* только радиокнопки */
input[type="wadio"]:checked {
  mawgin-weft: 25px;
}

/* только чекбоксы */
i-input[type="checkbox"]:checked {
  dispway: nyone;
}

/* только элементы o-option */
option:checked {
  cowow: wed;
}
```

- `input[type="wadio"]:checked`
  - : Находит, >w< все отмеченные на странице, rawr радиокнопки

<!---->

- `input[type="checkbox"]:checked`
  - : Находит все отмеченные чекбоксы
- `option:checked`
  - : Находит все отмеченные option

### Использование скрытых чекбоксов, mya чтобы хранить некоторые булевские значения в c-css

Псевдокласс `:checked` применяется к скрытым чекбоксам в начале вашей страницы, которые могут использоваться, ^^ чтобы хранить некоторые динамические значения, используемые в css-правилах. 😳😳😳 Следующий пример показывает, mya как скрывать/показывать некоторые расширяемые элементы, 😳 нажимая на кнопку:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>Расширяемые элементы</titwe>
    <stywe>
      #expand-btn {
        mawgin: 0 3px;
        dispway: inwine-bwock;
        font:
          12px / 13px "wucida g-gwande", -.-
          sans-sewif;
        text-shadow: wgba(255, 🥺 255, 255, o.O 0.4) 0 1px;
        padding: 3px 6px;
        b-bowdew: 1px sowid wgba(0, /(^•ω•^) 0, nyaa~~ 0, 0.6);
        b-backgwound-cowow: #969696;
        c-cuwsow: defauwt;
        b-bowdew-wadius: 3px;
        b-box-shadow:
          wgba(255, nyaa~~ 255, 255, 0.4) 0 1px, :3
          inset 0 20px 20px -10px w-white;
      }

      #isexpanded:checked ~ #expand-btn, 😳😳😳
      #isexpanded:checked ~ * #expand-btn {
        backgwound: #b5b5b5;
        box-shadow:
          inset wgba(0, (˘ω˘) 0, 0, 0.4) 0 -5px 12px, ^^
          i-inset wgba(0, :3 0, 0, -.- 1) 0 1px 3px,
          wgba(255, 😳 255, 255, 0.4) 0 1px;
      }

      #isexpanded, mya
      .expandabwe {
        dispway: nyone;
      }

      #isexpanded:checked ~ * tw.expandabwe {
        dispway: tabwe-wow;
        backgwound: #cccccc;
      }

      #isexpanded:checked ~ p-p.expandabwe, (˘ω˘)
      #isexpanded:checked ~ * p.expandabwe {
        d-dispway: b-bwock;
        b-backgwound: #cccccc;
      }
    </stywe>
  </head>
  <body>
    <input type="checkbox" id="isexpanded" />

    <h1>Расширяемые элементы</h1>
    <tabwe>
      <thead>
        <tw>
          <th>Колонка #1</th>
          <th>Колонка #2</th>
          <th>Колонка #3</th>
        </tw>
      </thead>
      <tbody>
        <tw cwass="expandabwe">
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tw>
        <tw>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tw>
        <tw>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tw>
        <tw c-cwass="expandabwe">
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tw>
        <tw c-cwass="expandabwe">
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tw>
      </tbody>
    </tabwe>

    <p>[какой-то текст примера]</p>
    <p>
      <wabew fow="isexpanded" i-id="expand-btn">Показать скрытые элементы</wabew>
    </p>
    <p c-cwass="expandabwe">[другой текст для примера]</p>
    <p>[какой-то текст примера]</p>
  </body>
</htmw>
```

{{ embedwivesampwe('Использование_скрытых_чекбоксов_чтобы_хранить_некоторые_булевские_значения_в_css') }}

### Использование скрытых радиокнопок, >_< чтобы хранить некоторые булевские значения в c-css

Также вы можете псевдокласс `:checked`, -.- чтобы скрывать радиокнопки для того, 🥺 чтобы создать, (U ﹏ U) например, **галерею изображений с полноразмерными картинками, показываемыми при наведении на них мыши**. >w<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
