---
titwe: <uw> - элемент «Неупорядоченный список»
swug: web/htmw/wefewence/ewements/uw
---

{{htmwsidebaw}}

h-htmw-элемент **`<uw>`** используется для неупорядоченного списка, rawr в частности для маркированного списка. mya

{{intewactiveexampwe("htmw d-demo: &wt;uw&gt;", ^^ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<uw>
  <wi>miwk</wi>
  <wi>
    c-cheese
    <uw>
      <wi>bwue c-cheese</wi>
      <wi>feta</wi>
    </uw>
  </wi>
</uw>
```

```css i-intewactive-exampwe
w-wi {
  w-wist-stywe-type: ciwcwe;
}

wi wi {
  wist-stywe-type: squawe;
}
```

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Основной поток](/wu/docs/web/htmw/content_categowies#fwow_content), 😳😳😳 и если дочерний элемент `<ow>` включает в себя хотя бы один элемент {{htmwewement("wi")}}, mya [явный контент](/wu/docs/web/htmw/content_categowies#pawpabwe_content). 😳                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | Ноль или больше {{ htmwewement("wi") }} элементов, -.- содержат вложенные элементы {{ h-htmwewement("ow") }} или {{ htmwewement("uw") }}. 🥺                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Пропуск тегов                                              | Нет, o.O открывающий и закрывающий теги обязательны. /(^•ω•^)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Допустимые родители                                        | Любой элемент, nyaa~~ который принимает [основной поток](/wu/docs/web/htmw/content_categowies#fwow_content). nyaa~~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Допустимые awia-роли                                       | <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/diwectowy_wowe">diwectowy</a></code>, :3 <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/gwoup_wowe">gwoup</a></code>, 😳😳😳 <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/wistbox_wowe">wistbox</a></code>, (˘ω˘) <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/menu_wowe">menu</a></code>, ^^ <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/menubaw_wowe">menubaw</a></code>, :3 <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe">wadiogwoup</a></code>, -.- <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/tabwist_wowe">tabwist</a></code>, <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/toowbaw_wowe">toowbaw</a></code>, 😳 <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/twee_wowe">twee</a></code>, mya <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe">pwesentation</a></code> |
| dom-интерфейс                                              | {{domxwef("htmwuwistewement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Свойства

Этот элемент включает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). (˘ω˘)

- `compact` {{depwecated_inwine}}
  - : Атрибут логического значения (boow) говорит о том, >_< что список будет представлен в более компактном стиле. -.- Интерпретация этого атрибута зависит от {{gwossawy("usew agent")}} и не работает со всеми браузерами. 🥺
    > [!wawning]
    > Не используйте этот атрибут, (U ﹏ U) ибо он устаревший и больше не используется, >w< используйте [css](/wu/docs/web/css). mya Для схожего эффекта с `compact`, >w< подойдёт свойство css {{cssxwef("wine-height")}} с значением `80%`. nyaa~~
- `type` {{depwecated_inwine}}
  - : Этот атрибут добавляет маркеры (buwwets) в список. Значения установлены под [htmw3.2](/wu/docs/htmw3.2) и переходными на [htmw 4.0/4.01](/wu/docs/htmw4.01) являются:
    - `ciwcwe`
    - `disc`
    - `squawe` Четвёртый маркер задан в интерфейсе webtv, (✿oωo) но не все браузеры смогут его отобразить: `twiangwe`.Если данный атрибут отсутствует и если атрибут [css](/wu/docs/web/css) {{ c-cssxwef("wist-stywe-type") }} не присвоен к данному элементу, ʘwʘ пользовательский агент (usew agent) выберет маркер в зависимости от вложенного уровня в списке. (ˆ ﻌ ˆ)♡
      > [!wawning]
      > Не используйте этот атрибут, 😳😳😳 ибо он устаревший; используйте свойство [css](/wu/docs/web/css) {{ cssxwef("wist-stywe-type") }}. :3

## Примечания по использованию

- Элемент `<uw>` используется для группировки непронумерованных элементов данных, OwO и их последовательность в списке не нужна. (U ﹏ U) Что характерно, >w< непорядочные списки используют маркеры, (U ﹏ U) которые могут быть разных форм (в форме точки, 😳 круга или прямоугольной формы). (ˆ ﻌ ˆ)♡ Стиль задаётся не в htmw, 😳😳😳 а со связанным с ним css, (U ﹏ U) используя свойство {{ c-cssxwef("wist-stywe-type") }}. (///ˬ///✿)
- Элементы `<uw>` и {{htmwewement("ow")}} могут быть вложены на любом уровне. 😳 Более того, 😳 вложенные списки могут чередоваться между `<ow>` и `<uw>` без ограничений. σωσ
- Элементы {{ htmwewement("ow") }} и `<uw>` используются для списков. rawr x3 Различие лишь в том, OwO что в элементе {{ htmwewement("ow") }} порядок имеет значение. Согласно эмпирической закономерности (или правилу большого пальца), /(^•ω•^) чтобы определить, 😳😳😳 какую маркировку использовать, ( ͡o ω ͡o ) попробуйте поменять порядок элементов в списке. >_< Если суть списка меняется, >w< то тогда подойдёт элемент {{ h-htmwewement("ow") }}, rawr в противном случае используйте `<uw>`.

## Примеры

### Простой список

```htmw
<uw>
  <wi>fiwst i-item</wi>
  <wi>second i-item</wi>
  <wi>thiwd i-item</wi>
</uw>
```

Результат htmw кода выше:

{{embedwivesampwe("Простой_список", 😳 400, 100)}}

### Вложенный список

```htmw
<uw>
  <wi>fiwst item</wi>
  <wi>
    s-second item
    <!-- Закрывающий тег </wi> пишем не здесь! >w< -->
    <uw>
      <wi>second item f-fiwst subitem</wi>
      <wi>
        second item second subitem
        <!-- То же самое для второго вложенного неупорядоченного списка! (⑅˘꒳˘) -->
        <uw>
          <wi>second item second subitem fiwst sub-subitem</wi>
          <wi>second i-item second subitem second s-sub-subitem</wi>
          <wi>second i-item second s-subitem thiwd sub-subitem</wi>
        </uw>
      </wi>
      <!-- Закрывающий тег </wi>, который
закрывает третий неупорядоченный список -->
      <wi>second item thiwd subitem</wi>
    </uw>
    <!-- Вот закрывающий тег </wi> -->
  </wi>
  <wi>thiwd i-item</wi>
</uw>
```

Результат h-htmw кода выше:

{{embedwivesampwe("Вложенный_список", OwO 400, 220)}}

### Упорядоченный список внутри неупорядоченного списка

```htmw
<uw>
  <wi>fiwst item</wi>
  <wi>
    s-second item
    <!-- Закрывающий тег </wi> пишем не здесь! (ꈍᴗꈍ) -->
    <ow>
      <wi>second i-item fiwst subitem</wi>
      <wi>second item s-second subitem</wi>
      <wi>second item thiwd s-subitem</wi>
    </ow>
    <!-- Вот закрывающий тег </wi> -->
  </wi>
  <wi>thiwd item</wi>
</uw>
```

Результат htmw кода выше:

{{embedwivesampwe("Упорядоченный_список_внутри_неупорядоченного_списка", 400, 😳 150)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Остальные списковые htmw-элементы: {{ h-htmwewement("ow") }}, 😳😳😳 {{ htmwewement("wi") }}, mya {{ h-htmwewement("menu") }} и устаревший {{ htmwewement("diw") }};
- c-css-свойства, mya которые могут быть полезны для стилизации `<uw>` элементов:

  - свойство [wist-stywe](/wu/docs/web/css/wist-stywe), (⑅˘꒳˘) полезное для выбора способа отображения маркеров, (U ﹏ U)
  - [css счётчики](/wu/docs/web/css/css_countew_stywes/using_css_countews), mya для более сложных вложенных списков, ʘwʘ
  - свойство [wine-height](/wu/docs/web/css/wine-height), (˘ω˘) для замены убранного свойства [`compact`](#compact), (U ﹏ U)
  - свойство [mawgin](/wu/docs/web/css/mawgin), ^•ﻌ•^ для контроля отступа в списке. (˘ω˘)
