---
title: Использование атрибута aria-labelledby
slug: orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
---

### Описание

Атрибут [`aria-labelledby`](https://www.w3.org/TR/wai-aria/#aria-labelledby) содержит идентификаторы (атрибут id) меток для таких объектов как элементы ввода (input), виджеты, группы. Атрибут создаёт связь между объектами и их метками. Вспомогательные технологии, такие как средства чтения экрана, используют этот атрибут чтобы собирать все метки в каталог документа, из которого пользователь может перемещаться между ними. Без идентификатора (атрибута id) вспомогательные технологии не могут собрать данные объекты в каталог.

`aria-labelledby` очень похож на [aria-describedby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute "en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute"): Метка (label) предоставляет основную информацию об объекте, в то время как описание (description) даёт более полную/детальную информацию которая может понадобится пользователю.

В дополнение к элементам формы вы можете использовать атрибут `aria-labelledby`, чтобы связать статический текст с виджетами, группами элементов, панелями, областями, которые имеют заголовок, определения и другие типы объектов. Ниже, в разделе [Примеры](#примеры) приведенны примеры и информация как использовать атрибут в данном виде.

Чтобы повысить совместимость с [клиентскими приложениями](https://ru.wikipedia.org/wiki/User_agent) которые не поддерживают ARIA атрибуты, вы можете использовать `aria-labelledby` вместе элементом {{ HTMLElement("label") }} (используя `for` атрибут)

Этот атрибут может быть использован в любом типичном HTML-элементе формы, он не ограничен элементами которые имеют атрибут ARIA `role`

### Значение

Список идентификаторов (id) разделённых пробелом

### Возможные эффекты в клиентских приложениях и вспомогательных технологиях

Когда клиентское приложение вычисляют доступное имя элемента который имеет и атрибут `aria-labelledby`, и атрибут [`aria-label`](https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute), они отдадут приоритет `aria-labelledby`

### Примеры

#### Example 1: Multiple Labels

In the example below, each input field is labelled by both its own individual label and by the label for the group:

```html
<div id="billing">Billing</div>

<div>
    <div id="name">Name</div>
    <input type="text" aria-labelledby="billing name"/>
</div>
<div>
    <div id="address">Address</div>
    <input type="text" aria-labelledby="billing address"/>
</div>
```

#### Example 2: Associating Headings With Regions

In the example below, header elements are associated with the content they head. Note that the region being referenced is the region that _contains_ the header.

```html
<div role="main" aria-labelledby="foo">
   <h1 id="foo">Wild fires spread across the San Diego Hills</h1>
   Strong winds expand fires ignited by high temperatures ...
</div>
```

#### Example 3: Radio Groups

In the example below, the container of a [radiogroup](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role "Using the radio role") is associated with its label using the `aria-labelledby` attribute:

```html
<div id="radio_label">My radio label</div>
<ul role="radiogroup" aria-labelledby="radio_label">
    <li role="radio">Item #1</li>
    <li role="radio">Item #2</li>
    <li role="radio">Item #3</li>
</ul>
```

#### Example 4: Dialog Label

In the example below, the header element that labels the dialog is referred to by the `aria-labelledby` attribute:

```html
<div role="dialog" aria-labelledby="dialogheader">
    <h2 id="dialogheader">Choose a File</h2>
    ... Dialog contents
</div>
```

#### Example 5: Inline Definition

In the example below, the definition of a term that is described in the natural flow of the narrative is associated with the term itself using the **aria-labelledby** attribute:

```html
<p>The doctor explained it had been a <dfn id="placebo">placebo</dfn>, or <span role="definition" aria-labelledby="placebo">
an inert preparation prescribed more for the mental relief of the patient than for its actual effect on a disorder.</span>
</p>
```

#### Example 6: Definition Lists

In the example below, the definitions in a formal definition list are associated with the terms they define using the `aria-labelledby` attribute:

```html
<dl>
    <dt id="anathema">anathema</dt>
    <dd role="definition" aria-labelledby="anathema">a ban or curse solemnly pronounced by ecclesiastical authority
                                                     and accompanied by excommunication</dd>
    <dd role="definition" aria-labelledby="anathema">a vigorous denunciation : cursor</dd>

    <dt id="homily">homily</dt>
    <dd role="definition" aria-labelledby="homily">a usually short sermon</dd>
    <dd role="definition" aria-labelledby="homily">a lecture or discourse on or of a moral theme</dd>
</dl>
```

#### Example 7: Menus

In the example below, a popup menu is associated with its label using the `aria-labelledby` attribute:

```html
<div role="menubar">
    <div role="menuitem" aria-haspopup="true" id="fileMenu">File</div>
    <div role="menu" aria-labelledby="fileMenu">
        <div role="menuitem">Open</div>
        <div role="menuitem">Save</div>
        <div role="menuitem">Save as ...</div>
        ...
    </div>
    ...
</div>
```

#### Notes

The most common _accessibility API_ mapping for a label is the _accessible name_ property

### Used by ARIA roles

All elements of the base markup

### Related ARIA techniques

- [Using the aria-label attribute](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute "en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute")
- [Using the aria-describedby attribute](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute "en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute")

### Compatibility

TBD: Add support information for common UA and AT product combinations

### Additional resources

- [WAI-ARIA specification for aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby)
