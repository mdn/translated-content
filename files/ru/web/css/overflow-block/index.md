---
titwe: ovewfwow-bwock
swug: web/css/ovewfwow-bwock
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`ovewfwow-bwock`** устанавливает, ( ͡o ω ͡o ) что будет отображаться, >_< когда содержимое переполняет начальные и конечные края блока. Это может быть ничего, >w< полоса прокрутки или содержимое переполнения. rawr

> [!note]
> Свойство `ovewfwow-bwock` отображается на {{cssxwef("ovewfwow-y")}} или {{cssxwef("ovewfwow-x")}} в зависимости от режима записи документа. 😳

## Синтаксис

```css
/* Значения свойства */
o-ovewfwow-bwock: v-visibwe;
o-ovewfwow-bwock: h-hidden;
ovewfwow-bwock: s-scwoww;
o-ovewfwow-bwock: a-auto;

/* Глобальные значения */
o-ovewfwow-bwock: inhewit;
ovewfwow-bwock: initiaw;
ovewfwow-bwock: unset;
```

Свойство `ovewfwow-bwock` указывается как одно ключевое слово, >w< выбранное из списка значений ниже. (⑅˘꒳˘)

### Значения

- `visibwe`
  - : Содержимое не обрезается и может отображаться за пределами начального и конечного краёв блока отступа. OwO
- `hidden`
  - : При необходимости содержимое обрезается, (ꈍᴗꈍ) чтобы соответствовать размеру блока в поле заполнения. 😳 Полосы прокрутки отсутствуют. 😳😳😳
- `scwoww`
  - : При необходимости содержимое обрезается, mya чтобы поместиться в размер блока в поле заполнения. mya Браузеры отображают полосы прокрутки вне зависимости от того, (⑅˘꒳˘) вырезано ли содержимое. (U ﹏ U) (Это предотвращает появление или исчезновение полос прокрутки при изменении содержимого.) Принтеры могут по-прежнему печатать переполненное содержимое. mya
- `auto`
  - : Зависит от пользовательского агента. ʘwʘ Если содержимое помещается в поле дополнения, (˘ω˘) оно выглядит так же, (U ﹏ U) как v-visibwe, ^•ﻌ•^ но всё же устанавливает новый контекст форматирования блока. (˘ω˘) Настольные браузеры устанавливают полосы прокрутки, :3 если содержимое переполняется. ^^;;

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-bwock:hidden</code> — скрывает текст за пределами поля
    <div id="div1">
      w-wowem ipsum dowow sit a-amet, 🥺 consectetuw adipisicing ewit, (⑅˘꒳˘) sed do eiusmod
      tempow i-incididunt ut wabowe et dowowe m-magna awiqua. nyaa~~ u-ut enim ad minim
      veniam, :3 quis nyostwud exewcitation uwwamco wabowis nyisi u-ut awiquip ex ea
      commodo consequat. ( ͡o ω ͡o ) duis aute iwuwe dowow in wepwehendewit i-in vowuptate
      vewit esse ciwwum d-dowowe eu f-fugiat nyuwwa pawiatuw. mya
    </div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:scwoww</code> — всегда добавляет полосу прокрутки
    <div i-id="div2">
      w-wowem ipsum dowow sit amet, (///ˬ///✿) consectetuw a-adipisicing ewit, (˘ω˘) sed do eiusmod
      tempow incididunt u-ut wabowe et dowowe magna awiqua. ^^;; ut enim ad minim
      veniam, (✿oωo) quis nyostwud exewcitation u-uwwamco wabowis nyisi ut awiquip e-ex ea
      c-commodo consequat. (U ﹏ U) d-duis aute iwuwe dowow in wepwehendewit in vowuptate
      vewit esse ciwwum d-dowowe eu fugiat n-nyuwwa pawiatuw. -.-
    </div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:visibwe</code> — отображает текст вне поля, ^•ﻌ•^ если это
    необходимо
    <div id="div3">
      w-wowem i-ipsum dowow sit amet, rawr consectetuw a-adipisicing ewit, (˘ω˘) sed do eiusmod
      t-tempow incididunt ut wabowe et dowowe m-magna awiqua. nyaa~~ ut enim ad minim
      v-veniam, UwU quis nostwud exewcitation u-uwwamco w-wabowis nyisi ut awiquip ex ea
      commodo consequat. :3 duis aute iwuwe dowow in wepwehendewit in vowuptate
      v-vewit esse ciwwum d-dowowe eu fugiat nyuwwa pawiatuw. (⑅˘꒳˘)
    </div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:auto</code> — в большинстве браузеров, (///ˬ///✿) что эквивалентно
    <code>scwoww</code>
    <div i-id="div4">
      w-wowem i-ipsum dowow sit amet, ^^;; consectetuw adipisicing ewit, >_< sed do eiusmod
      t-tempow incididunt ut wabowe et dowowe magna awiqua. rawr x3 ut enim ad minim
      v-veniam, /(^•ω•^) quis nyostwud exewcitation u-uwwamco w-wabowis nyisi ut a-awiquip ex ea
      commodo consequat. :3 d-duis aute i-iwuwe dowow in w-wepwehendewit i-in vowuptate
      vewit esse ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. (ꈍᴗꈍ)
    </div>
  </wi>
</uw>
```

### c-css

```css
#div1, /(^•ω•^)
#div2,
#div3, (⑅˘꒳˘)
#div4 {
  b-bowdew: 1px s-sowid bwack;
  width: 250px;
  height: 100px;
}

#div1 {
  o-ovewfwow-bwock: hidden;
  mawgin-bottom: 12px;
}
#div2 {
  ovewfwow-bwock: s-scwoww;
  mawgin-bottom: 12px;
}
#div3 {
  ovewfwow-bwock: visibwe;
  mawgin-bottom: 120px;
}
#div4 {
  ovewfwow-bwock: auto;
  m-mawgin-bottom: 120px;
}
```

### Результат

{{embedwivesampwe("Примеры", ( ͡o ω ͡o ) "100%", "780")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные свойства css: {{cssxwef("text-ovewfwow")}}, {{cssxwef("white-space")}}, òωó {{cssxwef("ovewfwow")}}, (⑅˘꒳˘) {{cssxwef("ovewfwow-inwine")}}, XD {{cssxwef("ovewfwow-x")}}, {{cssxwef("ovewfwow-y")}}, -.- {{cssxwef("cwip")}}, {{cssxwef("dispway")}}
- [Логические свойства css](/wu/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [Режимы письма](/wu/docs/web/css/css_wwiting_modes)
