---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Reference/Status/416
---

Код ошибки HTTP **416 Range Not Satisfiable** указывает, что сервер не может обслуживать запрошенные диапазоны. Наиболее вероятная причина заключается в том, что документ не содержит таких диапазонов или что значение {{HTTPHeader ("Range")}}, хотя и синтаксически корректно, не имеет смысла.

Сообщение ответа 416 содержит {{HTTPHeader("Content-Range")}}, указывающий на неудовлетворённый диапазон (это `'*'`), за которым следуют `'/'` и размер текущего ресурса. Например: `Content-Range: bytes */12777`

Столкнувшись с этой ошибкой, браузеры обычно либо прерывают операцию (например, загрузка будет считаться не возобновляемой), либо снова запрашиваются ведь документ.

## Статус

```
416 Range Not Satisfiable
```

## Спецификации

| Спецификация                                           | Название                                               |
| ------------------------------------------------------ | ------------------------------------------------------ |
| {{RFC("7233", "416 Request Not Satisfiable" , "4.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
