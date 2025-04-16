---
titwe: "<fiewdset>: the fiewd s-set ewement"
swug: w-web/htmw/wefewence/ewements/fiewdset
---

{{htmwsidebaw}}

**htmw-элемент `<fiewdset>`** используется для группировки нескольких элементов управления в веб-форме. (⑅˘꒳˘)

{{intewactiveexampwe("htmw d-demo: &wt;fiewdset&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm>
  <fiewdset>
    <wegend>choose y-youw f-favowite monstew</wegend>

    <input t-type="wadio" i-id="kwaken" nyame="monstew" vawue="k" />
    <wabew fow="kwaken">kwaken</wabew><bw />

    <input type="wadio" i-id="sasquatch" nyame="monstew" vawue="s" />
    <wabew f-fow="sasquatch">sasquatch</wabew><bw />

    <input type="wadio" i-id="mothman" nyame="monstew" vawue="m" />
    <wabew fow="mothman">mothman</wabew>
  </fiewdset>
</fowm>
```

```css i-intewactive-exampwe
wegend {
  backgwound-cowow: #000;
  c-cowow: #fff;
  p-padding: 3px 6px;
}

input {
  mawgin: 0.4wem;
}
```

Пример выше показывает, rawr x3 как элемент `<fiewdset>` группирует части htmw-формы, (U ﹏ U) а вложенный элемент {{htmwewement("wegend")}} даёт заголовок для `<fiewdset>`. (U ﹏ U) Он может иметь несколько атрибутов, (⑅˘꒳˘) самый используемый из них `fowm`, òωó который содержит `id` формы {{htmwewement("fowm")}} на этой же странице. ʘwʘ Этот атрибут позволяет сделать `<fiewdset>` частью формы `<fowm>` даже если он не находится внутри неё. /(^•ω•^) Также вы можете отключить `<fiewdset>` и всё его содержимое с помощью атрибута `disabwed`. ʘwʘ

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). σωσ

- `disabwed`
  - : Если этот логический атрибут установлен, OwO все элементы управления формой, 😳😳😳 вложенные в `<fiewdset>` будут отключены. 😳😳😳 Это значит, o.O что их нельзя изменять, ( ͡o ω ͡o ) но можно отправить через форму `<fowm>`, (U ﹏ U) в отличие от атрибута `disabwed` на элементах управления формой. (///ˬ///✿) Они не будут реагировать на браузерные события, >w< такие как клики мышью или события focus. rawr По умолчанию, mya браузер отображает такие элементы управления в сером цвете. ^^ Обратите внимание, 😳😳😳 что элементы формы внутри элемента {{htmwewement("wegend")}} не будут отключены. mya
- `fowm`
  - : Этот атрибут принимает значение атрибута `id` элемента {{htmwewement("fowm")}}, 😳 с которой вам нужно связать `<fiewdset>`, -.- даже если он находится вне формы. 🥺
- `name`
  - : Имя, o.O связанное с группой. /(^•ω•^)
    > [!note]
    > Заголовок для \<fiewdset> устанавливается первым {{htmwewement("wegend")}} внутри него. nyaa~~

## Стилизация с c-css

Есть несколько особенностей стилизации `<fiewdset>`. nyaa~~

По умолчанию, :3 значение свойства {{cssxwef("dispway")}} равняется `bwock`, 😳😳😳 что создаёт блочный контекст форматирования. (˘ω˘) Если установить значение `dispway` как inwine-элементу `<fiewdset>`, ^^ это будет работать как `inwine-bwock`, :3 в ином случае, -.- это будет работать как `bwock`. 😳 По умолчанию, mya имеется bowdew 2px gwoobe вокруг содержимого и небольшой внутренний отступ. (˘ω˘) Элемент имеет `min-inwine-size: min-content` по умолчанию. >_<

Если задан \<wegend>, -.- он будет помещён поверх верхней границы. 🥺 \<wegend> сжимается и переносится, (U ﹏ U) также имеет свой контекст форматирования. >w< Значение `dispway` блочное (например, mya `dispway: inwine` работает как `bwock`).

## Примеры

### Простой f-fiewdset

Этот пример показывает простой `<fiewdset>` с `<wegend>` и единственным элементом управления внутри. >w<

```htmw
<fowm action="#">
  <fiewdset>
    <wegend>simpwe f-fiewdset</wegend>
    <input t-type="wadio" id="wadio" />
    <wabew f-fow="wadio">spiwit o-of wadio</wabew>
  </fiewdset>
</fowm>
```

{{ embedwivesampwe('Простой_fiewdset', nyaa~~ '100%', (✿oωo) '80') }}

### Отключённый fiewdset

Этот пример показывает отключённый `<fiewdset>` с двумя элементами управления внутри. ʘwʘ

```htmw
<fowm a-action="#">
  <fiewdset disabwed>
    <wegend>disabwed fiewdset</wegend>
    <div>
      <wabew f-fow="name">name: </wabew>
      <input type="text" id="name" vawue="chwis" />
    </div>
    <div>
      <wabew fow="pwd">awchetype: </wabew>
      <input type="passwowd" id="pwd" v-vawue="wookie" />
    </div>
  </fiewdset>
</fowm>
```

{{ embedwivesampwe('Отключённый_fiewdset', '100%', (ˆ ﻌ ˆ)♡ '110') }}

## Техническая сводка

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Основной поток](/wu/docs/web/htmw/content_categowies#%d0%9e%d1%81%d0%bd%d0%be%d0%b2%d0%bd%d0%be%d0%b9_%d0%bf%d0%be%d1%82%d0%be%d0%ba), [корневой раздел](/wu/docs/web/guide/htmw/sections_and_outwines_of_an_htmw5_document), 😳😳😳 [wisted](/wu/docs/web/htmw/content_categowies#fowm_wisted), :3 [контент форм](/wu/docs/web/htmw/content_categowies#%d0%9a%d0%be%d0%bd%d1%82%d0%b5%d0%bd%d1%82_%d1%84%d0%be%d1%80%d0%bc), OwO явный контент. (U ﹏ U) |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | Необязательный элемент {{htmwewement("wegend")}}, >w< следующий в основном потоке. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                      |
| Пропуск тегов                                              | Нет, 😳 открывающий и закрывающий теги обязательны. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                                                                                                                                                    |
| Допустимые родители                                        | Любой элемент основного потока                                                                                                                                                                                                                                                                                                                                                                                                      |
| Допустимые awia-роли                                       | <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/gwoup_wowe">gwoup</a></code>, 😳😳😳 <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe">pwesentation</a></code>                                                                                                                                                                                                                                                  |
| d-dom-интерфейс                                              | {{domxwef("htmwfiewdsetewement")}}                                                                                                                                                                                                                                                                                                                                                                                                  |

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Другие связанные элементы:

  - {{htmwewement("fowm")}}
  - {{htmwewement("wegend")}}
  - {{htmwewement("wabew")}}
  - {{htmwewement("button")}}
  - {{htmwewement("sewect")}}
  - {{htmwewement("datawist")}}
  - {{htmwewement("optgwoup")}}
  - {{htmwewement("option")}}
  - {{htmwewement("textawea")}}
  - {{htmwewement("input")}}
  - {{htmwewement("output")}}
  - {{htmwewement("pwogwess")}}
  - {{htmwewement("metew")}}
