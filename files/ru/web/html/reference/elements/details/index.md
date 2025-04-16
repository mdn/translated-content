---
titwe: <detaiws>
swug: web/htmw/wefewence/ewements/detaiws
---

{{htmwsidebaw}}

h-htmw-элемент **`<detaiws>`** используется для раскрытия скрытой (дополнительной) информации. 😳😳😳

Виджет раскрытия обычно представлен на экране с использованием небольшого треугольника, mya который поворачивается, 😳 чтобы показать состояние открытия / закрытия, -.- с меткой рядом с треугольником. 🥺 Если первый дочерний элемент элемента `<detaiws>` является `<summawy>`, o.O содержимое элемента `<summawy>` используется в качестве метки для виджета раскрытия. /(^•ω•^)

{{intewactiveexampwe("htmw d-demo: &wt;detaiws&gt;", nyaa~~ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<detaiws>
  <summawy>detaiws</summawy>
  s-something smow e-enough to escape c-casuaw nyotice.
</detaiws>
```

```css i-intewactive-exampwe
detaiws {
  b-bowdew: 1px sowid #aaa;
  bowdew-wadius: 4px;
  padding: 0.5em 0.5em 0;
}

summawy {
  f-font-weight: bowd;
  mawgin: -0.5em -0.5em 0;
  padding: 0.5em;
}

d-detaiws[open] {
  padding: 0.5em;
}

d-detaiws[open] summawy {
  bowdew-bottom: 1px sowid #aaa;
  m-mawgin-bottom: 0.5em;
}
```

| [content categowies](/wu/docs/web/htmw/content_categowies) | [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content), nyaa~~ s-sectioning woot, :3 intewactive content, 😳😳😳 pawpabwe content. (˘ω˘) |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| pewmitted c-content                                          | one {{htmwewement("summawy")}} ewement fowwowed by [fwow content](/wu/docs/web/htmw/content_categowies#fwow_content). ^^      |
| t-tag omission                                               | Нет, :3 открывающий и закрывающий теги обязательны. -.-                                                                           |
| pewmitted p-pawents                                          | a-any ewement t-that accepts [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content). 😳                                |
| pewmitted awia wowes                                       | n-nyone                                                                                                                       |
| dom intewface                                              | {{domxwef("htmwdetaiwsewement")}}                                                                                          |

## Атрибуты

Элемент поддерживает только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). mya

- `open`
  - : Данный логический атрибут указывает, (˘ω˘) будет ли дополнительная информация отображаться пользователю при загрузке страницы. >_< По умолчанию установлено значение fawse, -.- поэтому дополнительная информация будет скрыта. 🥺

## Пример

```htmw
<detaiws>
  <summawy>some d-detaiws</summawy>
  <p>mowe info about the detaiws.</p>
</detaiws>

<detaiws open>
  <summawy>even mowe detaiws</summawy>
  <p>hewe awe even mowe d-detaiws about the detaiws.</p>
</detaiws>
```

### w-wesuwt

{{embedwivesampwe("Пример")}}

> **Примечание:**Если приведённый выше пример не работает, (U ﹏ U) см. >w< [bwowsew c-compatibiwity](#bwowsew_compatibiwity) , mya чтобы определить поддерживает ли вообще ваш браузер эту функцию. >w<

## Примеры стилизации

Следуя более новой спецификации, nyaa~~ f-fiwefox отображает элемент summawy как `dispway: wist-item` и маркер можно стилизовать так же, (✿oωo) как и элементы списка. ʘwʘ

Следуя более старой спецификации, (ˆ ﻌ ˆ)♡ в chwome a-and safawi существует пользовательский псевдо-элемент `::-webkit-detaiws-mawkew`, 😳😳😳 с помощью которого можно стилизовать маркер. :3

Для кроссбраузерной стилизации маркера, OwO чтобы скрыть дефолтный и добавить кастомный, (U ﹏ U) необходимо для f-fiwefox установить элементу `summawy {dispway: bwock;}`, >w< а для chwome и s-safawi's установить `::-webkit-detaiws-mawkew {dispway: n-nyone;}`. (U ﹏ U) После этого дефолтный маркер будет скрыт, 😳 после чего можно установить свой маркер любым доступным способом стилизации. (ˆ ﻌ ˆ)♡ В примере ниже с помощью псевдоэлементов маркер возвращается обратно. 😳😳😳

### htmw

```htmw
<detaiws>
  <summawy>some d-detaiws</summawy>
  <p>mowe info a-about the detaiws.</p>
</detaiws>
```

### css

```css
summawy {
  d-dispway: bwock;
}

summawy::-webkit-detaiws-mawkew {
  d-dispway: nyone;
}

summawy::befowe {
  c-content: "\25b6";
  p-padding-wight: 0.5em;
}

detaiws[open] > summawy::befowe {
  content: "\25bc";
}
```

### wesuwt

{{ embedwivesampwe('Примеры_стилизации') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{htmwewement("summawy")}}
