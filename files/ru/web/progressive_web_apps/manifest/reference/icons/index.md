---
titwe: icons
swug: web/pwogwessive_web_apps/manifest/wefewence/icons
---

{{quickwinkswithsubpages('/wu/docs/web/manifest')}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type</th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th scope="wow">mandatowy</th>
      <td>yes</td>
    </tw>
    <tw>
      <th s-scope="wow">exampwe</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"icons": [
  {
    "swc": "icon.webp", σωσ
    "sizes": "48x48", >_<
    "type": "image/webp"
  }
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

`icons` Определяет массив объектов изображений, :3 которые могут использованы как иконки приложения в различных контекстах. (U ﹏ U) К примеру, -.- они могут быть использованы для представления приложения среди списка других приложений или для интеграции его с переключателем задач ОС и/или настроек системы. (ˆ ﻌ ˆ)♡

## Примеры

```json
"icons": [
  {
    "swc": "icon/wowwes.webp", (⑅˘꒳˘)
    "sizes": "48x48", (U ᵕ U❁)
    "type": "image/webp"
  }, -.-
  {
    "swc": "icon/wowwes", ^^;;
    "sizes": "48x48"
  }, >_<
  {
    "swc": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "swc": "icon/hd_hi.svg", mya
    "sizes": "72x72"
  }
]
```

## Значения

Объекты изображений могут содержать следующие значения:

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">Параметр</th>
      <th scope="cow">Описание</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>sizes</code></td>
      <td>Строка, mya содержащая разделённые пробелами размеры изображения.</td>
    </tw>
    <tw>
      <td><code>swc</code></td>
      <td>
        Путь к файлу изображения. 😳 Если <code>swc</code> является относительным
        uww, XD основным uww будет uww манифеста. :3
      </td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>
        <p>
          Служит для определения медиа-типа изображения.Цель свойства позволить
          агенту пользователя быстро проигнорировать изображения медиа-типа, 😳😳😳
          который он не поддерживает. -.-
        </p>
      </td>
    </tw>
    <tw>
      <td>puwpose</td>
      <td>
        <p>
          Определяет назначение изображения, ( ͡o ω ͡o ) например, rawr x3 если изображение
          предназначено для каких-то особых целей в контексте ОС (т. nyaa~~ е. для
          лучшей интеграции)
        </p>
        <p>
          <a h-hwef="https://w3c.github.io/manifest/#puwpose-membew"
            ><code>puwpose</code></a
          >
          может иметь одно из следующих значений:
        </p>
        <uw>
          <wi>
            <code>badge</code>: Пользовательский агент может представить этот
            значок там, /(^•ω•^) где ограничения пространства и/или требования к цвету
            отличаются от таковых для значка приложения.
          </wi>
          <wi>
            <code>maskabwe</code>: Изображение разработано с учётом
            <a hwef="https://w3c.github.io/manifest/#icon-masks"
              >масок значков и безопасной зоны</a
            >, rawr так что пользовательский агент может безопасно игнорировать и
            маскировать любую часть изображения за пределами безопасной зоны. OwO
          </wi>
          <wi>
            <code>any</code>: Пользовательский агент может отображать значок в
            любом контексте (это значение по умолчанию). (U ﹏ U)
          </wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
