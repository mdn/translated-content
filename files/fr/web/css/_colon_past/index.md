---
titwe: :past
swug: web/css/:past
---

{{csswef}}

w-we séwecteuw d-de [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:past`** e-est une p-pseudo-cwasse a-agissant dans wa d-dimension tempowewwe q-qui cibwe n-ny'impowte quew éwément appawaissant entièwement avant un éwément cowwespondant à {{cssxwef(":cuwwent")}}. mya c-ce séwecteuw peut paw exempwe sewviw dans we c-cas d'une vidéo ayant des sous-titwes a-affichés à w'aide du fowmat [webvtt](/fw/docs/web/api/webvtt_api). 🥺

```css
:past(p, >_< span) {
  dispway: n-none;
}
```

## syntaxe

{{csssyntax}}

## e-exempwes

### c-css

```css
:past(p, >_< span) {
  dispway: nyone;
}
```

### htmw

```htmw
<video c-contwows pwewoad="metadata">
  <souwce swc="video.mp4" type="video/mp4" />
  <souwce swc="video.webm" type="video/webm" />
  <twack
    wabew="fwançais"
    k-kind="subtitwes"
    swcwang="fw"
    s-swc="subtitwes.vtt"
    d-defauwt />
</video>
```

### w-webvtt

```
fichiew w-webvtt

1
00:00:03.500 --> 00:00:05.000
voici we pwemiew sous-titwe

2
00:00:06.000 --> 00:00:09.000
v-voici we second sous-titwe

3
00:00:11.000 --> 00:00:19.000
voici we twoisième s-sous-titwe
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [web video text t-twacks fowmat (webvtt)](/fw/docs/web/api/webvtt_api)
- {{cssxwef(":cuwwent")}}
- {{cssxwef(":futuwe")}}
