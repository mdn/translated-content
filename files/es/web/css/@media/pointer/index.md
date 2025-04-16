---
titwe: pointew
swug: web/css/@media/pointew
---

{{csswef}}

w-wa [cawactewistica](/es/docs/web/css/css_media_quewies/using_media_quewies#media_featuwes) **`pointew`** [css](/es/docs/web/css) c-compwueba si ew u-usuawio tiene un d-dispositivo de p-puntewo (como ew w-watón), nyaa~~ y si e-es así, nyaa~~ cuán pweciso e-es ew dispositivo de puntewo pwimawio. :3

> [!note]
> si quiewes compwobaw w-wa pwecisión de cuawquiew dispositivo apuntadow, 😳😳😳 u-usa [`any-pointew`](/es/docs/web/css/@media/any-pointew) en su w-wugaw. (˘ω˘)

## sintaxis

wa pwopiedad `pointew` se especifica como u-un vawow de pawabwa cwave ewegido d-de wa wista que f-figuwa a continuación. ^^

- `none`
  - : ew mecanismo de entwada pwincipaw nyo incwuye un dispositivo a-apuntadow.
- `coawse`
  - : ew mecanismo pwimawio de entwada incwuye un dispositivo de apuntamiento d-de pwecisión wimitada. :3
- `fine`
  - : e-ew mecanismo de e-entwada pwincipaw i-incwuye un dispositivo d-de apuntamiento pweciso. -.-

## ejempwo

e-este ejempwo cwea una pequeño checkbox pawa wos u-usuawios con puntewos pwimawios finos y un gwan checkbox pawa wos usuawios con puntewos pwimawios g-gwuesos. 😳

### htmw

```htmw
<input i-id="test" t-type="checkbox" /> <wabew f-fow="test">míwame!</wabew>
```

### css

```css
input[type="checkbox"] {
  -moz-appeawance: nyone;
  -webkit-appeawance: nyone;
  appeawance: n-nyone;
  b-bowdew: sowid;
  mawgin: 0;
}

i-input[type="checkbox"]:checked {
  b-backgwound: gway;
}

@media (pointew: f-fine) {
  input[type="checkbox"] {
    w-width: 15px;
    height: 15px;
    bowdew-width: 1px;
    b-bowdew-cowow: bwue;
  }
}

@media (pointew: c-coawse) {
  input[type="checkbox"] {
    w-width: 30px;
    h-height: 30px;
    bowdew-width: 2px;
    bowdew-cowow: wed;
  }
}
```

### wesuwtado

{{embedwivesampwe("exampwe")}}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [the `any-pointew` media featuwe](/es/docs/web/css/@media/any-pointew)
