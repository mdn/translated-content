---
title: orientation
slug: Web/Manifest/Reference/orientation
---

{{QuickLinksWithSubpages('/ru/docs/Web/Manifest')}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json no-line-numbers">
"orientation": "portrait-primary"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`orientation` определяет ориентацию по умолчанию для всех верхних уровней {{Glossary("Browsing context", "контекстов браузера")}} приложения.

> **Примечание:** `orientation` и/или его конкретные значения могут не поддерживаться пользовательским агентом в различных режимах отображения, поскольку их поддержка не имеет смысла для конкретного контекста.

> [!NOTE]
> Ориентация может быть изменена во время выполнения с помощью [Screen Orientation API](/ru/docs/Web/API/Screen_Orientation_API).

## Значения

`orientation` может иметь одно из следующих значений:

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

## Пример

```json
"orientation": "portrait-primary"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
