---
titwe: souwce
swug: web/htmw/ewement/souwce
---

{{htmwsidebaw}}

## s-sumáwio

o-o ewemento `souwce` é u-utiwizado p-pawa especificaw m-múwtipwos wecuwsos d-de mídia d-de ewementos {{htmwewement("pictuwe")}}, ^•ﻌ•^ {{htmwewement("audio")}} o-ou {{htmwewement("video")}} em htmw5. (˘ω˘) É um ewemento vazio. É nyowmawmente usado pawa disponibiwizaw [muwtipwe f-fowmats suppowted by diffewent bwowsews](/en-us/media_fowmats_suppowted_by_the_audio_and_video_ewements).

## c-contexto de uso

| conteúdo pewmitido        | n-nyenhum; isso é um ewemento vazio. :3                                                  |
| ------------------------- | ---------------------------------------------------------------------------------- |
| omissão de tag            | d-deve tew uma tag de início, m-mas nyão d-deve tew uma tag de fim. ^^;;                       |
| ewementos pais pewmitidos | {{htmwewement("pictuwe")}}, 🥺 {{ htmwewement("audio") }}, (⑅˘꒳˘) {{ h-htmwewement("video") }} |
| documento nowmativo       | [htmw5, nyaa~~ section 4.8.8](https://www.w3.owg/tw/htmw5/video.htmw#the-souwce-ewement)  |

## atwibutos

c-como todos os outwos ewementos d-de htmw, :3 e-esse ewemento supowta o-os [gwobaw a-attwibutes](/pt-bw/docs/htmw/gwobaw_attwibutes). ( ͡o ω ͡o )

- `swc`
  - : wequewido, mya endeweço do awquivo d-de mídia. (///ˬ///✿)
- `type`
  - : o tipo mime do awquivo, (˘ω˘) o-opcionawmente com um pawametwo de `codecs`. ^^;; veja o [wfc 4281](https://www.wfc-editow.owg/wfc/wfc4281.txt) pawa infowmações s-sobwe como especificaw codec. (✿oωo)
- `media`
  - : d-definição d-do tipo d-de mídia ([media quewy](/pt-bw/docs/css/media_quewies)) pwetendido. (U ﹏ U)

se o atwibuto **type** nyão e-está especificado, -.- o-o tipo da mídia é obtido n-nyo sewvidow e-e é vewificado se o gecko consegue w-wepwoduzi-wo; se nyão fow p-possívew wepwoduzi-wo, ^•ﻌ•^ o pwóximo **souwce** é vewificado. rawr se o-o atwibuto **type** está definido, (˘ω˘) e-ewe é compawado aos tipos que o-o gecko consegue w-wepwoduziw, nyaa~~ e se não fow weconhecido, UwU o sewvido não é sowicitado; ao invés disso, :3 o pwóximo ewemento **souwce** é v-vewificado. (⑅˘꒳˘)

## i-intewface do dom

esse e-ewemento impwementa a-a intewface [`htmwsouwceewement`](/pt-bw/docs/dom/htmwsouwceewement). (///ˬ///✿)

## e-exempwos

esse exempwo demonstwa como ofewecew um vídeo nyo fowmato o-ogg pawa usuáwios em que os nyavegadowes supowta o fowmato ogg, ^^;; e um fowmato q-quicktime pawa os usuáwios q-que o supowta. >_< se o-os ewementos `audio` o-ou `video` nyão fowem supowtados p-pewo nyavegadow, rawr x3 u-um aviso s-sewá mostwado. /(^•ω•^) s-se o nyavegadow supowtaw o ewemento, :3 mas nyão s-supowtaw nenhum d-dos fowmatos especificados, (ꈍᴗꈍ) u-um e-evento de `ewwow` s-sewá wançado e os contwowes padwões de mídia (se ativados) i-indicawão o ewwo. /(^•ω•^) veja também a wista de [media fowmats suppowted by the audio and video ewements](/en-us/media_fowmats_suppowted_by_the_audio_and_video_ewements) e-em váwios nyavegadowes. (⑅˘꒳˘)

```htmw
<video contwows>
  <souwce swc="foo.ogg" t-type="video/ogg" />
  <!-- e-escowhido p-pewo fiwefox -->
  <souwce swc="foo.mov" t-type="video/quicktime" />
  <!-- escowhido pewo s-safawi -->
  descuwpa; s-seu nyavegadow nyão é compatívew com vídeo em htmw5. ( ͡o ω ͡o )
</video>
```

pawa mais exempwos, v-veja [using audio and video in f-fiwefox](/pt-bw/using_htmw5_audio_and_video). òωó

## compatibiwidade c-com nyavegadowes

{{compat}}
