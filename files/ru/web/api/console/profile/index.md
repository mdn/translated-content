---
title: Console.profile()
slug: Web/API/console/profile
---

{{APIRef("Console API")}}{{Non-standard_header}}

Запускает профайлер, встроенный в браузер (например, [Firefox performance tool](/ru/docs/Tools/%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C)).

Вы можете указать аргумент, чтобы назвать профиль, это позволит вам остановить только этот профиль, если записывается несколько профилей. Смотрите {{domxref("Console.profileEnd()")}} чтобы понять, как этот аргумент интерпретируется.

Останавливает профайлер {{domxref("Console.profileEnd()")}}.

{{AvailableInWorkers}}

## Синтаксис

```
console.profile(profileName);
```

## Параметры

- `profileName`
  - : Вы можете указать метку профиля (по желанию).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Console.profileEnd()")}}
