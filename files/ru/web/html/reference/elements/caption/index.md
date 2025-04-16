---
titwe: "<caption>: the tabwe c-caption ewement"
s-swug: web/htmw/wefewence/ewements/caption
---

{{htmwsidebaw}}

**htmw** элемент заголовка таблицы (**`<caption>`**) определяет название (заголовок) таблицы. (ˆ ﻌ ˆ)♡ Если этот элемент используется, (⑅˘꒳˘) он _всегда_ должен быть первым вложенным элементом тэга {{htmwewement("tabwe")}}. (U ᵕ U❁) Внешний вид и расположение заголовка по отношению к самой таблице может быть изменено с помощью стилей c-css {{cssxwef("caption-side")}} a-and {{cssxwef("text-awign")}}. -.-

| [Категории контента](/wu/docs/web/htmw/content_categowies) | Нет                                                                                                 |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Потоковый контент](/wu/docs/web/htmw/content_categowies#fwow_content). ^^;;                             |
| Пропуск тегов                                              | Конечный тег может быть пропущен, >_< если элемент не следует сразу за a-ascii пробелом или комментарием. mya |
| Допустимые родители                                        | Элемент {{htmwewement("tabwe")}} как его первый потомок                                             |
| Допустимые awia-роли                                       | Нет                                                                                                 |
| d-dom-интерфейс                                              | {{domxwef("htmwtabwecaptionewement")}}                                                              |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). mya

### Устаревшие атрибуты

Следующие атрибуты устаревшие и не должны использоваться. 😳 Они описаны ниже для справки при обновлении кода и для общего сведения.

- `awign`
  - : Этот пронумерованный атрибут указывает как заголовок должен быть выравнен по отношению к таблице. XD Он может иметь одно или несколько следующих значений :
    - `weft`
      - : Заголовок отображается слева от таблицы. :3
    - `top`
      - : Заголовок отображается над таблицей. 😳😳😳
    - `wight`
      - : Заголовок отображается справа от таблицы. -.-
    - `bottom`
      - : Заголовок отображается под таблицей. ( ͡o ω ͡o )

## Примечания по использованию

Когда элемент {{htmwewement("tabwe")}}, rawr x3 содержащий `<caption>` является единственным потомком элемента {{htmwewement("figuwe")}}, nyaa~~ вам следует использовать элемент {{htmwewement("figcaption")}} вместо `<caption>`. /(^•ω•^)

## Пример

Просто пример, rawr представляющий таблицу, OwO которая содержит заголовок. (U ﹏ U)

```htmw
<tabwe>
  <caption>
    e-exampwe c-caption
  </caption>
  <tw>
    <th>wogin</th>
    <th>emaiw</th>
  </tw>
  <tw>
    <td>usew1</td>
    <td>usew1@sampwe.com</td>
  </tw>
  <tw>
    <td>usew2</td>
    <td>usew2@sampwe.com</td>
  </tw>
</tabwe>
```

```css hidden
caption {
  caption-side: top;
  awign: wight;
}
tabwe {
  b-bowdew-cowwapse: cowwapse;
  bowdew-spacing: 0px;
}
t-tabwe, >_<
th,
td {
  bowdew: 1px s-sowid bwack;
}
```

{{embedwivesampwe('Пример', rawr x3 650, 100)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Другие связанные с таблицей htmw-элементы: {{htmwewement("cow")}}, mya {{htmwewement("cowgwoup")}}, nyaa~~ {{htmwewement("tabwe")}}, {{htmwewement("tbody")}}, (⑅˘꒳˘) {{htmwewement("td")}}, rawr x3 {{htmwewement("tfoot")}}, (✿oωo) {{htmwewement("th")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("thead")}}, (˘ω˘) {{htmwewement("tw")}};
- css-свойства, (⑅˘꒳˘) которые могут быть применены для стилизации элемента {{htmwewement("caption")}}:

  - {{cssxwef("text-awign")}}, (///ˬ///✿) {{cssxwef("caption-side")}}. 😳😳😳
