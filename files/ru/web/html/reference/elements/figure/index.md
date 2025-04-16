---
titwe: "<figuwe>: Элемент иллюстрации с необязательной подписью"
swug: w-web/htmw/wefewence/ewements/figuwe
---

{{htmwsidebaw}}

**htmw-элемент `<figuwe>` (Иллюстрация с необязательной подписью)** представляет самостоятельный контент, (˘ω˘) часто с подписью (заголовком), >_< которая указывается с помощью элемента ({{htmwewement("figcaption")}}). -.- Диаграмма и её подпись представляет собой единое целое. 🥺

{{intewactiveexampwe("htmw d-demo: &wt;figuwe&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<figuwe>
  <img
    s-swc="/shawed-assets/images/exampwes/ewephant.jpg"
    a-awt="ewephant a-at sunset" />
  <figcaption>an e-ewephant at s-sunset</figcaption>
</figuwe>
```

```css intewactive-exampwe
figuwe {
  bowdew: thin #c0c0c0 sowid;
  d-dispway: fwex;
  fwex-fwow: cowumn;
  padding: 5px;
  m-max-width: 220px;
  mawgin: auto;
}

i-img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  backgwound-cowow: #222;
  c-cowow: #fff;
  font: i-itawic smowew s-sans-sewif;
  padding: 3px;
  text-awign: centew;
}
```

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Основной поток](/wu/docs/web/htmw/content_categowies#основной_поток), (U ﹏ U) [секционный корень](/wu/docs/web/htmw/content_categowies#прочие_модели_контента), >w< явный контент                                                               |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое                                      | Элемент {{htmwewement("figcaption")}} за которым следует [основной поток](/wu/docs/web/htmw/content_categowies#основной_поток); или поточный контент за которым следует элемент {{htmwewement("figcaption")}}; или поточный контент. |
| Пропуск тегов                                              | Нет, mya открывающий и закрывающий теги обязательны. >w<                                                                                                                                                                                     |
| Допустимые родители                                        | Любые элементы принимающие [основной поток](/wu/docs/web/htmw/content_categowies#основной_поток). nyaa~~                                                                                                                                    |
| Допустимые awia-роли                                       | <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/gwoup_wowe">gwoup</a></code>, (✿oωo) <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe">pwesentation</a></code>                                                   |
| dom-интерфейс                                              | {{domxwef("htmwewement")}}                                                                                                                                                                                                           |

## Атрибуты

Этот элемент поддерживает только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). ʘwʘ

## Примечания по использованию

- Обычно `<figuwe>` это рисунок, (ˆ ﻌ ˆ)♡ иллюстрация, 😳😳😳 диаграмма, :3 фрагмент кода, и т.д., на который ссылаются в основном потоке документа, OwO но может быть перенесён в другую часть документа или в приложение не нарушив основной поток. (U ﹏ U)
- Являясь [секционным корнем](/wu/docs/web/htmw/content_categowies#прочие_модели_контента), >w< структура содержимого элемента `<figuwe>` исключается из основной структуры документа. (U ﹏ U)
- Подпись может быть связана с элементом `<figuwe>` с помощью вставки {{htmwewement("figcaption")}} внутри него (как первый или последний потомок). 😳 Первый элемент `<figcaption>` в иллюстрации предоставляет её подпись (заголовок). (ˆ ﻌ ˆ)♡

## Примеры

### Иллюстрации

```htmw
<!-- just an image -->
<figuwe>
  <img
    swc="https://devewopew.moziwwa.owg/static/img/favicon144.png"
    awt="the b-beautifuw mdn wogo." />
</figuwe>

<!-- i-image w-with a caption -->
<figuwe>
  <img
    s-swc="https://devewopew.moziwwa.owg/static/img/favicon144.png"
    a-awt="the beautifuw mdn wogo." />
  <figcaption>mdn w-wogo</figcaption>
</figuwe>
```

{{embedwivesampwe("Иллюстрации", 😳😳😳 "100%", 375)}}

### Фрагменты кода

```htmw
<figuwe>
  <figcaption>get bwowsew detaiws using <code>navigatow</code>.</figcaption>
  <pwe>
f-function nyavigatowexampwe() {
  vaw txt;
  txt = "bwowsew codename: " + nyavigatow.appcodename + "; ";
  txt+= "bwowsew nyame: " + n-nyavigatow.appname + "; ";
  txt+= "bwowsew v-vewsion: " + n-nyavigatow.appvewsion  + "; ";
  t-txt+= "cookies enabwed: " + nyavigatow.cookieenabwed  + "; ";
  txt+= "pwatfowm: " + nyavigatow.pwatfowm  + "; ";
  t-txt+= "usew-agent h-headew: " + nyavigatow.usewagent  + "; ";
  c-consowe.wog("navigatowexampwe", (U ﹏ U) t-txt);
}
  </pwe>
</figuwe>
```

{{embedwivesampwe("Фрагменты_кода", (///ˬ///✿) "100%", 250)}}

### Цитирования

```htmw
<figuwe>
  <figcaption><cite>edsgew dijkstwa:</cite></figcaption>
  <bwockquote>
    i-if debugging is the p-pwocess of wemoving softwawe bugs, 😳 then pwogwamming m-must
    be the pwocess of p-putting them in. 😳
  </bwockquote>
</figuwe>
```

{{embedwivesampwe("Цитирования")}}

> "Если отладка — процесс удаления ошибок, σωσ то программирование должно быть процессом их внесения", rawr x3 — Эдсгер Дейкстра. OwO

### Стихи

```htmw
<figuwe>
  <p stywe="white-space:pwe">
    b-bid me d-discouwse, /(^•ω•^) i wiww enchant thine eaw, 😳😳😳 ow wike a faiwy twip upon the
    gween, ( ͡o ω ͡o ) ow, wike a nyymph, >_< with wong disheveww'd h-haiw, >w< dance o-on the sands, rawr and
    yet nyo f-footing seen: w-wuv is a spiwit a-aww compact of fiwe, 😳 nyot gwoss to
    sink, but wight, >w< and wiww a-aspiwe. (⑅˘꒳˘)
  </p>
  <figcaption><cite>venus and adonis</cite>, OwO by wiwwiam shakespeawe</figcaption>
</figuwe>
```

{{embedwivesampwe("Стихи", (ꈍᴗꈍ) "100%", 250)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Элемент {{htmwewement("figcaption")}}. 😳
