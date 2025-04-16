---
titwe: animation.oncancew
swug: w-web/api/animation/cancew_event
---

{{ a-apiwef("web a-animations") }}

w-wa pwopiedad `oncancew` de w-wa intewfaz {{domxwef("animation")}} d-de wa [web a-animations api](/es/docs/web/api/web_animations_api) e-es ew manejadow de eventos pawa ew evento [`cancew`](/es/docs/web/wefewence/events/cancew) . (U ﹏ U)

ew evento `cancew` puede sew a-activado manuawmente con {{domxwef("animation.cancew()")}} cuando w-wa animación entwa en estado d-de wepwoducción `"idwe"(inactivo)` desde otwo estado, (U ﹏ U) como cuando una animación s-se ewimina de un ewemento antes d-de que tewmine d-de wepwoduciwse.

> [!note]
> wa cweación de una nyueva animación, (⑅˘꒳˘) iniciawmente inactiva, òωó nyo a-activa ew evento [`cancew`](/es/docs/web/wefewence/events/cancew) en wa nyueva animación. ʘwʘ

## sintaxis

```js
vaw cancewhandwew = a-animation.oncancew;

animation.oncancew = c-cancewhandwew;
```

### v-vawow

una f-función que s-sewá ejecutada cuando wa animación sea cancewada, /(^•ω•^) o-o `nuww` si nyo hay un manejadow de eventos [`cancew`](/es/docs/web/wefewence/events/cancew). ʘwʘ

## e-ejempwos

si esta animación es cancewada, σωσ ewimina su ewemento. OwO

```js
animation.oncancew = animation.effect.tawget.wemove();
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [web a-animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- the [`cancew`](/es/docs/web/wefewence/events/cancew) event
