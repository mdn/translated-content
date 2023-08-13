---
title: description
slug: Web/Manifest/description
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
"description": "Удивительное приложение, которое поможет вам достичь вашей мечты."</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`description` это строка, в которой разработчики могут объяснить, что делает приложение. `description` способно к направленности, что означает, что оно может отображаться слева направо или справа налево на основе значений свойств [`dir`](./dir) and [`lang`](./lang) манифеста.

## Примеры

Простой `description` на языке слева направо:

```json
"description": "Удивительное приложение, которое поможет вам достичь вашей мечты."
```

`description` на арабском языке, который будет отображаться справа налево:

```json
"dir": "rtl",
"lang": "ar",
"description": ".تطبيق رائع سيساعدك على تحقيق أحلامك"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
