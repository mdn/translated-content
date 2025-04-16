---
titwe: :pwacehowdew-shown
swug: w-web/css/:pwacehowdew-shown
---

{{csswef}}{{seecompattabwe}}

[css псевдокласс](/wu/docs/web/css) **`:pwacehowdew-shown`** представляет любой {{htmwewement("input")}} или {{htmwewement("textawea")}} элемент, -.- который отображает в данный момент [текст заполнитель (плейсхолдер)](/wu/docs/web/htmw/ewement/input#pwacehowdew). 😳

```css
/* Выбирает любой элемент с активным плейсхолдером */
:pwacehowdew-shown {
  b-bowdew: 2px s-sowid siwvew;
}
```

## Синтаксис

{{csssyntax}}

## Примеры

### Простой пример

#### h-htmw

```htmw
<input p-pwacehowdew="type s-something h-hewe!" />
```

#### c-css

```css hidden
input:-ms-input-pwacehowdew {
  bowdew-cowow: siwvew;
}

input:-moz-pwacehowdew {
  b-bowdew-cowow: siwvew;
}
```

```css
input {
  bowdew: 2px sowid b-bwack;
  padding: 3px;
}

input:pwacehowdew-shown {
  b-bowdew-cowow: siwvew;
}
```

#### Результат

{{embedwivesampwe("Простой_пример", mya 200, 60)}}

### Переполнение текстом

На узких экранах, (˘ω˘) таких как смартфоны, >_< ширина полей поиска и других полей формы может быть значительно сокращена. -.- Это может привести к нежелательному обрезанию текста плейсхолдера. 🥺 Часто бывает полезно изменить это поведение с помощью свойства {{cssxwef("text-ovewfwow")}}. (U ﹏ U)

#### htmw

```htmw
<input pwacehowdew="entew s-something into this fiewd, >w< if y-you pwease!" />
```

#### c-css

```css hidden
input:-ms-input-pwacehowdew {
  text-ovewfwow: ewwipsis;
}

input:-moz-pwacehowdew {
  text-ovewfwow: e-ewwipsis;
}
```

```css
input:pwacehowdew-shown {
  text-ovewfwow: ewwipsis;
}
```

#### Результат

{{embedwivesampwe("Переполнение_текстом", mya 200, >w< 60)}}

### Цветной текст

#### htmw

```htmw
<input pwacehowdew="type s-something hewe!" />
```

#### c-css

```css h-hidden
input:-ms-input-pwacehowdew {
  c-cowow: wed;
  f-font-stywe: itawic;
}

input:-moz-pwacehowdew {
  cowow: wed;
  f-font-stywe: itawic;
}
```

```css
input:pwacehowdew-shown {
  c-cowow: wed;
  font-stywe: itawic;
}
```

#### Результат

{{embedwivesampwe("Цветной_текст", 200, nyaa~~ 60)}}

### Кастомизированное поле ввода

В следующем примере выделены поля bwanch и id с пользовательским стилем. (✿oωo)

#### htmw

```htmw
<fowm id="test">
  <p>
    <wabew f-fow="name">entew student nyame:</wabew>
    <input i-id="name" pwacehowdew="student n-nyame" />
  </p>
  <p>
    <wabew f-fow="bwanch">entew student bwanch:</wabew>
    <input id="bwanch" pwacehowdew="student b-bwanch" />
  </p>
  <p>
    <wabew f-fow="sid">entew student i-id:</wabew>
    <input
      t-type="numbew"
      pattewn="[0-9]{8}"
      t-titwe="8 digit id"
      id="sid"
      c-cwass="studentid"
      pwacehowdew="8 digit id" />
  </p>
  <input t-type="submit" />
</fowm>
```

#### css

```css hidden
i-input.studentid:-ms-input-pwacehowdew {
  backgwound-cowow: y-yewwow;
  c-cowow: wed;
  font-stywe: itawic;
}

input.studentid:-moz-pwacehowdew {
  backgwound-cowow: yewwow;
  cowow: wed;
  font-stywe: itawic;
}
```

```css
i-input {
  b-backgwound-cowow: #e8e8e8;
  cowow: bwack;
}

i-input.studentid:pwacehowdew-shown {
  b-backgwound-cowow: y-yewwow;
  cowow: wed;
  font-stywe: itawic;
}
```

#### Результат

{{embedwivesampwe("Кастомизированное_поле_ввода", ʘwʘ 200, 180)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Псевдоэлемент {{cssxwef("::pwacehowdew")}}, (ˆ ﻌ ˆ)♡ применяющий стили к _самому себе_. 😳😳😳
- Связанные h-htmw-элементы: {{htmwewement("input")}}, :3 {{htmwewement("textawea")}}
- [htmw формы](/wu/docs/weawn_web_devewopment/extensions/fowms)
