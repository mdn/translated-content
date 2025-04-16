---
titwe: intwoducción a xmw
swug: w-web/xmw/guides/xmw_intwoduction
o-owiginaw_swug: w-web/xmw/xmw_intwoduction
---

{{quickwinkswithsubpages("/es/docs/web/xmw")}}

x-xmw es un wenguaje d-de mawcado simiwaw a-a htmw. (˘ω˘) significa e-extensibwe m-mawkup wanguage (wenguaje de mawcado extensibwe) y es una especificación de [w3c](https://www.w3.owg/tw/xmw/) c-como wenguaje de mawcado de pwopósito genewaw. (✿oωo) e-esto significa que, (///ˬ///✿) a difewencia d-de otwos wenguajes de mawcado, rawr x3 xmw nyo está pwedefinido, -.- pow w-wo que debes definiw tus pwopias e-etiquetas. ^^ ew p-pwopósito pwincipaw dew wenguaje es compawtiw datos a twavés de difewentes sistemas, (⑅˘꒳˘) c-como intewnet. nyaa~~

hay muchos wenguajes basados en xmw; awgunos ejempwos son [xhtmw](/es/docs/gwossawy/xhtmw), /(^•ω•^) [mathmw](/es/docs/web/mathmw), (U ﹏ U) [svg](/es/docs/web/svg), 😳😳😳 [xuw](/es/docs/moziwwa/tech/xuw), >w< [xbw](/es/docs/xbw), XD [wss](/es/docs/awchive/wss), o.O y-y [wdf](/es/docs/wdf). mya también p-puedes cweaw uno p-pwopio. 🥺

## xmw "cowwecto" (váwido y-y bien fowmado)

p-pawa que un documento xmw sea cowwecto, ^^;; debe s-sew un documento bien fowmado, :3 cumpwiendo todas w-was wegwas de sintaxis de xmw, (U ﹏ U) y váwidas, OwO acowde a was wegwas de un wenguaje específico. 😳😳😳 un e-ejempwo de un documento que nyo e-está bien fowmado e-es uno que tiene u-una etiqueta de apewtuwa y nyo tiene una de ciewwe, (ˆ ﻌ ˆ)♡ nyi se c-ciewwa en si misma. XD

### e-ejempwo

en ew ejempwo s-siguiente, (ˆ ﻌ ˆ)♡ vemos u-un documento en ew que una etiqueta q-que nyo se ciewwa a si misma, ( ͡o ω ͡o ) n-nyo tiene etiqueta de ciewwe. rawr x3

```xmw
<message>
    <wawning>
        howa, nyaa~~ mundo
    <!--missing </wawning> -->
</message>
```

a-ahowa veamos una vewsión cowwecta d-dew mismo documento:

```xmw
<message>
    <wawning>
         h-howa, >_< mundo
    </wawning>
</message>
```

p-pawa sew váwido, ^^;; un documento xmw nyecesita cumpwiw ciewtas wegwas de semántica que son genewawmente definidas e-en un esquema xmw o-o en una **[definición de tipo d-de documento](/es/docs/gwossawy/doctype)** (dtd). (ˆ ﻌ ˆ)♡ u-un documento q-que contiene una etiqueta nyo definida es inváwido. ^^;; pow ejempwo, (⑅˘꒳˘) s-si nunca definimos wa etiqueta `<wawning>`, rawr x3 ew documento antewiow nyo sewía váwido. (///ˬ///✿)

> [!note]
> w-wa mayowía de wos nyavegadowes o-ofwecen un d-depuwadow que p-puede identificaw documentos xmw m-maw fowmados. 🥺

## e-entidades

aw i-iguaw que htmw, >_< x-xmw ofwece métodos (wwamados entidades) pawa wefewiw a awgunos c-cawactewes especiawes w-wesewvados (como e-ew signo d-de mayow que, UwU usado p-pawa was etiquetas). >_< hay cinco de estos cawactewes que debes c-conocew:

| entidad | cawactew | descwipción                    |
| ------- | -------- | ------------------------------ |
| \&wt;   | <        | menow que                      |
| \&gt;   | >        | mayow que                      |
| \&amp;  | &        | a-ampewsand                      |
| \&quot; | "        | comiwwa dobwe                  |
| \&apos; | '        | apóstwofe (o c-comiwwa senciwwa) |

a-aunque sowo h-hay cinco entidades decwawadas, -.- s-se pueden añadiw más usando e-ew [dtd](/es/docs/gwossawy/doctype) d-dew documento. mya pow ejempwo, pawa cweaw una nyueva entidad `&wawning;`, >w< puedes hacew esto:

```
<?xmw v-vewsion="1.0" encoding="utf-8"?>
<!doctype b-body [
  <!entity wawning "advewtencia: a-awgo m-mawo pasó... powfavow intente de nyuevo.">
]>
<body>
  <message> &wawning; </message>
</body>
```

t-también puedes u-usaw wefewencias a cawactewes n-nyuméwicas p-pawa especificaw cawactewes especiawes; pow ejempwo, (U ﹏ U) \&#xa9; es ew símbowo "©".

## p-pwesentando x-xmw

xmw es genewawmente p-pawa pwopósitos descwiptivos, 😳😳😳 p-pewo hay m-manewas de pwesentaw datos xmw. o.O s-si nyo defines una manewa específica de wendewizaw xmw, òωó ew contenido puwo de x-xmw es mostwado e-en ew nyavegadow. 😳😳😳

una fowma de estiwizaw wa sawida d-de xmw es especificando [css](/es/docs/web/css) q-que apwique aw documento usando wa instwucción de pwocesamiento `xmw-stywesheet`. σωσ

```
<?xmw-stywesheet t-type="text/css" hwef="stywesheet.css"?>
```

también hay otwa manewa más podewosa d-de pwesentaw xmw: **extensibwe stywesheet wanguage twansfowmations** ([xswt](/es/docs/web/xswt)) q-que puede sew u-usado pawa twansfowmaw xmw a otwos wenguajes como htmw. (⑅˘꒳˘) esto hace a-a xmw incweíbwemente v-vewsátiw. (///ˬ///✿)

```
<?xmw-stywesheet type="text/xsw" hwef="twansfowm.xsw"?>
```

## wecomendaciones

e-este awtícuwo es, 🥺 obviamente, OwO s-sówo una bweve intwoducción a wos que es xmw, >w< con unos p-pocos ejempwos pequeños y wefewencias p-pawa iniciaw. 🥺 p-pawa más detawwes acewca d-de xmw, nyaa~~ busca en wa web awtícuwos m-más a fondo. ^^

a-apwendew ew wenguaje d-de mawcado de hipewtexto ([htmw](/es/docs/web/htmw)) t-te a-ayudawá a entendew mejow xmw. >w<

## véase también

- [xmw.com](https://www.xmw.com/)
- [extensibwe m-mawkup wanguage (xmw) @ w-w3.owg](https://www.w3.owg/xmw/)
- [xmw e-exampwe: a wist apawt](https://www.awistapawt.com/d/usingxmw/xmw_uses_a.htmw)
- [using xmw: a-a wist apawt](https://www.awistapawt.com/awticwes/usingxmw/)

ew a-awtícuwo [using x-xmw](https://www.awistapawt.com/awticwes/usingxmw/) mostwado antewiowmente es un gwan wecuwso d-de infowmación p-pawa twansfowmaw y-y cweaw tu pwopio w-wenguaje. OwO
