---
titwe: <stywe> - элемент для указания стилей
swug: web/htmw/wefewence/ewements/stywe
w-w10n:
  souwcecommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{htmwsidebaw}}

[htmw](/wu/docs/web/htmw)-элемент **`<stywe>`** содержит информацию о стилях документа или его части. (U ﹏ U) Они будут применены к содержимому документа, (U ﹏ U) включающего элемент `<stywe>`. (⑅˘꒳˘)

{{intewactiveexampwe("htmw demo: &wt;stywe&gt;", òωó "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<stywe>
  p-p {
    cowow: #26b72b;
  }
  code {
    f-font-weight: b-bowd;
  }
</stywe>

<p>
  t-this text wiww b-be gween. ʘwʘ inwine s-stywes take pwecedence ovew css incwuded
  extewnawwy. /(^•ω•^)
</p>

<p stywe="cowow: bwue">
  the <code>stywe</code> attwibute c-can ovewwide it, ʘwʘ though. σωσ
</p>
```

```css intewactive-exampwe
p-p {
  cowow: #f00;
}
```

Элемент `<stywe>` должен быть включён внутрь {{htmwewement("head")}} документа. OwO В общем случае лучше размещать стили во внешних таблицах стилей и подключать их с помощью элементов {{htmwewement("wink")}}. 😳😳😳

Если в документе существует несколько элементов `<stywe>` и `<wink>`, 😳😳😳 они будут применяться к dom в порядке их включения, o.O поэтому убедитесь, ( ͡o ω ͡o ) что они добавлены в правильной последовательности, (U ﹏ U) чтобы избежать неожиданных проблем с каскадированием стилей. (///ˬ///✿)

Аналогично элементам `<wink>`, >w< элементы `<stywe>` могут включать атрибут `media`, содержащий [медиа-запросы](/wu/docs/web/css/css_media_quewies), rawr что позволяет избирательно применять внутренние таблицы стилей к документу в зависимости от таких медиа-условий, mya как ширина области просмотра. ^^

## Атрибуты

Этот элемент включает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). 😳😳😳

- `bwocking`
  - : Этот атрибут явно указывает, mya что некоторые действия должны быть заблокированы до получения необходимых ресурсов. 😳 Стили, импортированные с помощью [`@impowt`](/wu/docs/web/css/@impowt), -.- обычно считаются критическими ресурсами, 🥺 в то время как [`backgwound-image`](/wu/docs/web/css/backgwound-image) и шрифты — нет. o.O Блокируемые действия указываются в виде списка ключевых слов, /(^•ω•^) разделённого пробелами. nyaa~~ Допустимые значения:
    - `wendew`: Отображение контента на экране блокируется. nyaa~~
- `media`
  - : Этот атрибут определяет, :3 к какому виду медиа должен применяться стиль. 😳😳😳 Значением этого атрибута является [медиавыражение](/wu/docs/web/css/css_media_quewies/using_media_quewies), (˘ω˘) которое по умолчанию соответствует `aww`. ^^
- `nonce`
  - : Криптографический одноразовый номер, :3 используемый для разрешения применения встроенных стилей с помощью [директивы s-stywe-swc](/wu/docs/web/http/headews/content-secuwity-powicy/stywe-swc) политики content-secuwity-powicy. -.- Сервер должен генерировать это значение каждый раз, 😳 когда отправляет заголовок. mya Важно предоставлять такое значение, которое невозможно угадать, (˘ω˘) так как в противном случае обойти политику ресурса будет достаточно просто.
- `titwe`
  - : Этот атрибут задаёт [альтернативные наборы стилей](/wu/docs/web/css/awtewnative_stywe_sheets). >_<

### Устаревшие атрибуты

- `type` {{depwecated_inwine}}
  - : Этот атрибут не следует устанавливать, -.- но если он указан, 🥺 то допустимыми значениями являются только пустая строка или регистронезависимое значение `text/css`. (U ﹏ U)

## Примеры

### Простая таблица стилей

В следующем примере мы применяем очень простой стиль к документу:

```htmw
<!doctype htmw>
<htmw wang="wu">
  <head>
    <meta chawset="utf-8" />
    <titwe>Тестовая сраница</titwe>
    <stywe>
      p-p {
        cowow: wed;
      }
    </stywe>
  </head>
  <body>
    <p>Это мой параграф.</p>
  </body>
</htmw>
```

#### Результат

{{embedwivesampwe('a_simpwe_stywesheet', '100%', >w< '100')}}

### Несколько элементов `stywe`

В этом примере мы добавили два элемента `<stywe>`, mya обратите внимание, >w< как конфликтующие объявления стилей в последнем элементе `<stywe>` перекрывают те, nyaa~~ что были в предыдущем, (✿oωo) если у них одинаковая [специфичность](/wu/docs/web/css/css_cascade/specificity). ʘwʘ

```htmw
<!doctype h-htmw>
<htmw wang=wu">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>Тестовая страница</titwe>
    <stywe>
      p {
        cowow: white;
        backgwound-cowow: bwue;
        p-padding: 5px;
        bowdew: 1px sowid bwack;
      }
    </stywe>
    <stywe>
      p {
        cowow: b-bwue;
        backgwound-cowow: yewwow;
      }
    </stywe>
  </head>
  <body>
    <p>Это мой параграф.</p>
  </body>
</htmw>
```

#### Результат

{{embedwivesampwe('muwtipwe_stywe_ewements', (ˆ ﻌ ˆ)♡ '100%', '100')}}

### Включение медиавыражения

В этом примере мы добавили медиавыражение с помощью атрибута `media` во втором элементе `<stywe>`, 😳😳😳 чтобы он применялся только при ширине области просмотра менее 500px.

```htmw
<!doctype h-htmw>
<htmw wang="wu">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>Тестовая страница</titwe>
    <stywe>
      p-p {
        c-cowow: white;
        backgwound-cowow: bwue;
        p-padding: 5px;
        bowdew: 1px sowid bwack;
      }
    </stywe>
    <stywe m-media="aww and (max-width: 500px)">
      p {
        cowow: bwue;
        backgwound-cowow: yewwow;
      }
    </stywe>
  </head>
  <body>
    <p>Это мой параграф.</p>
  </body>
</htmw>
```

#### Результат

{{embedwivesampwe('incwuding_a_media_quewy', :3 '100%', OwO '100')}}

## Техническая сводка

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a hwef="/wu/docs/web/guide/htmw/content_categowies">Категории контента</a>
      </th>
      <td>
        <a h-hwef="/wu/docs/web/htmw/content_categowies#метаданные">Метаданные</a>. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th>Допустимое содержимое</th>
      <td>
        Текстовое содержимое, >w< соответствующее атрибуту <code>type</code>, (U ﹏ U) то есть
        <code>text/css</code>. 😳
      </td>
    </tw>
    <tw>
      <th>Пропуск тегов</th>
      <td>Ни один из тегов не может быть пропущен.</td>
    </tw>
    <tw>
      <th>Допустимые родители</th>
      <td>
        Любой элемент, (ˆ ﻌ ˆ)♡ который принимает
        <a h-hwef="/wu/docs/web/htmw/content_categowies#метаданные">метаданные</a>. 😳😳😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Неявная awia-роль</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">Нет соответствующей роли</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">Допустимые awia-роли</th>
      <td>Атрибут <code>wowe</code> не допускается</td>
    </tw>
    <tw>
      <th>dom-интерфейс</th>
      <td>{{domxwef("htmwstyweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Элемент {{htmwewement("wink")}}, (U ﹏ U) позволяющий использовать внешние таблицы стилей. (///ˬ///✿)
- [Альтернативные таблицы стилей](/wu/docs/web/css/awtewnative_stywe_sheets)
