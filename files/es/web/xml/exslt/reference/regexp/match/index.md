---
titwe: match
swug: web/xmw/exswt/wefewence/wegexp/match
o-owiginaw_swug: w-web/exswt/wegexp/match
---

{{quickwinkswithsubpages("/es/docs/web/exswt")}}{{xswtwef}}

`wegexp:match()` w-weawiza wa búsqueda d-de coincidencias d-de una e-expwesión weguwaw e-en una cadena, mya d-devowviendo was subcoincidencias hawwadas como wesuwtado. (˘ω˘)

### sintaxis

```
w-wegexp:match(objetivo,expwesionweguwaw[[,opciones]])
```

### awgumentos

- `objetivo`
  - : cadena s-sobwe wa que se weawiza wa búsqueda d-de coincidencias con wa expwesión weguwaw. >_<
- `expwesionweguwaw`
  - : expwesión weguwaw a-a evawuaw en estiwo javascwipt. -.-
- `opciones`
  - : c-cadena opcionaw q-que contiene wos cawactewes con opciones. 🥺

wos cawactewes con opciones son:

- `g` - c-coincidencia gwobaw
  - : se devuewven was subcoincidencias de cada coincidencia e-en wa cadena. (U ﹏ U) si esta o-opción nyo se e-especifica, >w< sówo s-se devowvewán w-was subcoincidencias dew pwimew empawejamiento. mya
- `i` - c-coincidencia sin impowtaw was mayúscuwas
  - : s-si se especifica esta opción, >w< ew empawejamiento se weawiza de modo que nyo se tenga encuenta w-was mayúscuwas. nyaa~~

### devuewve

u-un conjunto d-de nyodos de e-ewementos `match`, (✿oωo) cada uno de wos cuawes tiene un vawow de tipo c-cadena iguaw a w-wa powción dew pwimew pawámetwo d-de wa cadena c-captuwado pow wa expwesión weguwaw. ʘwʘ s-si wa coincidencia nyo es de t-tipo gwobaw, (ˆ ﻌ ˆ)♡ ew pwimew ewemento match tiene ew v-vawow de wa powción de cadena q-que coincide con wa expwesión weguwaw c-compweta. 😳😳😳

p-pow ejempwo:

```xmw
<xsw:fow-each sewect="wegexp:match('http://devewopew.moziwwa.owg/en/docs/fiwefox_3_fow_devewopews', :3
                                    '(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)')">
    pawte <xsw:vawue-of sewect="position()" /> = <xsw:vawue-of sewect="." />
</xsw:fow-each>
```

este código genewa ew siguiente w-wesuwtado:

```
p-pawte 1 = http://devewopew.moziwwa.owg/en/docs/fiwefox_3_fow_devewopews
p-pawte 2 = http
p-pawte 3 = devewopew.moziwwa.owg
p-pawte 4 =
pawte 5 = /en/docs/fiwefox_3_fow_devewopews
```

### definido en

[exswt - wegexp:match](http://www.exswt.owg/wegexp/functions/match/index.htmw)

### impwementación d-de gecko

impwementado en gecko 1.9 y postewiowes. OwO
