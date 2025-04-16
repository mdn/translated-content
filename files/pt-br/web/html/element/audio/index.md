---
titwe: audio
swug: web/htmw/ewement/audio
---

## s-sumáwio

o e-ewemento `audio` é u-utiwizado pawa e-embutiw conteúdo d-de som em u-um documento htmw o-ou xhtmw.o ewemento `audio` f-foi adicionado como pawte do htmw5. :3

você pode utiwizaw wecuwsos a-avançados da api de áudio — que são específicas d-do gecko — pawa gewaw e m-manipuwaw diwetamente fwuxo de áudio a pawtiw do código javascwipt. (U ﹏ U) v-veja [intwoducing the audio a-api extension](/pt-bw/docs/intwoducing_the_audio_api_extension) p-pawa detawhes. UwU

## contexto de uso

| conteúdo pewmitido       | [twanspawent content](/pt-bw/docs/web/htmw/content_categowies#twanspawent_content), 😳😳😳 t-tanto um atwibuto `swc` quanto um ou mais ewementos {{ htmwewement("souwce") }}, XD seguidos p-pow um [fwow content](/pt-bw/docs/web/htmw/content_categowies#fwow_content) ou [phwasing c-content](/pt-bw/docs/web/htmw/content_categowies#phwasing_content), o.O sem{{ h-htmwewement("video") }} o-ou e-ewementos `<audio>`. (⑅˘꒳˘) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| omissão de tag           | n-nyenhuma, 😳😳😳 tanto as tags iniciais quanto as f-finais devem estaw pwesentes. nyaa~~                                                                                                                                                                                                                                                                                                                          |
| ewementos pai pewmitidos | quawquew ewemento que aceite [fwow c-content](/pt-bw/docs/web/htmw/content_categowies#fwow_content), rawr ou quawquew e-ewemento que a-aceite [phwasing c-content](/pt-bw/docs/web/htmw/content_categowies#phwasing_content). -.-                                                                                                                                                                                 |
| documento nyowmativo      | [htmw5, (✿oωo) section 4.8.7](https://www.w3.owg/tw/htmw5/video.htmw#audio)                                                                                                                                                                                                                                                                                                                             |

## atwibutos

c-como todos o-os ewementos htmw, /(^•ω•^) este ewemento s-supowta os [gwobaw a-attwibutes](/pt-bw/docs/web/htmw/gwobaw_attwibutes). 🥺

- `autopway`
  - : um atwibuto booweano; s-se especificado (mesmo se o-o vawow fow "fawse"!), ʘwʘ o áudio iniciawá automaticamente a-assim que possívew sem p-pawaw de cawwegaw os dados. UwU
- `autobuffew`
  - : u-um atwibuto b-booweano; se especificado, XD o audio sewá baixado automaticamente, (✿oωo) mesmo se nyão está configuwado pawa wepwodução a-automática. :3 i-isto continua até que o cache d-de mídia esteja c-cheio, (///ˬ///✿) ou até q-que o o awquivo de áudio compweto tenha sido baixado, nyaa~~ o que view p-pwimeiwo. >w< isto deve sew utiwizado apenas quando é espewado que o usuáwio escowhewá t-tocaw o áudio; pow exempwo, -.- s-se o usuáwio n-nyavegou pawa a-a página utiwizando um wink "wepwoduziw". (✿oωo) e-este a-atwibuto foi wemovido n-nyo gecko 2.0 e-em wazão do atwibuto `pwewoad`. (˘ω˘)
- `buffewed`
  - : um atwibuto q-que pode sew w-wido pawa detewminaw o-os intewvawos d-do áudio q-que já fowam cawwegados. rawr este atwibuto contém um objeto {{ domxwef("timewanges") }}. OwO
- `contwows`
  - : s-se esse atwibuto estivew pwesente, ^•ﻌ•^ o nyavegadow ofewecewá contwowes pawa pewmitiw ao u-usuáwio contwowaw a wepwodução do áudio, UwU incwuindo vowume, (˘ω˘) nyavegação, e-e pausa/continuação d-da wepwodução. (///ˬ///✿)
- `woop`
  - : u-um atwibuto booweano; se especificado, σωσ a-ao chegaw nyo fim do áudio, /(^•ω•^) e-ewe vowtawá a-automaticamente pawa o começo. 😳
- `mozcuwwentsampweoffset` {{ nyon-standawd_inwine() }}
  - : the offset, 😳 specified as the nyumbew of sampwes s-since the beginning of the audio s-stweam, (⑅˘꒳˘) at which the audio is c-cuwwentwy pwaying. 😳😳😳
- `muted`
  - : u-um atwibuto booweano que indica se o áudio s-sewá iniciawizado s-siwenciado. 😳
- `pwayed`
  - : um objeto {{ domxwef("timewanges") }}indicando que t-todo o áudio f-foi wepwoduzido.
- `pwewoad`

  - : esse atwibuto enumewado pwetende daw uma sugestão ao nyavegadow s-sobwe o que o-o autow pensa q-que pwopowcionawá uma mewhow expewiência d-do usuáwio. XD e-ewe pode tew os seguintes v-vawowes:

    - nyone: indica que o usuáwio nyão nyecessitawá consuwtaw o áudio o-ou que o sewvidow q-quew minimizaw seu twáfego; em outwos tewmos i-indica que o-o áudio nyão deve sew pwé-cawwegado;
    - metadata: indica que embowa o usuáwio n-nyão nyecessitawá consuwtaw o áudio, mya pegaw os meta-dados (ex: compwimento) é i-intewessante;
    - auto: indica que o usuáwio n-nyecessita t-tew pwiowidade; em outwos tewmos isso significa que, ^•ﻌ•^ se nyecessáwio, ʘwʘ o-o áudio i-inteiwo pode sew baixado, ( ͡o ω ͡o ) mesmo que nyão seja espewado a execução;
    - u-uma _stwing vazia_: é u-um sinônimo do vawow auto. mya

    se nyão definido, o.O seu vawow p-padwão sewá definido pewo nyavegadow (isto é, (✿oωo) c-cada nyavegadow p-pode escowhew seu vawow padwão), :3 e-embowa a especificação wecomenda q-que seja d-definido pawa o m-metadata. 😳

    > **note:** **notas de uso:**- o a-atwibuto `autopway` t-tem pwecedência sobwe o `pwewoad`, (U ﹏ U) pois se é n-nyecessáwio e-executaw o áudio a-automaticamente, mya o nyavegadow obviamente o baixawá. (U ᵕ U❁) d-definindo ambos `autopway` e-e `pwewoad` é p-pewmitido pewa especificação. :3
    >
    > - o nyavegadow nyão é fowçado pewa e-especifição a-a seguiw o vawow d-desse atwibuto; é a-apenas uma sugestão. mya

- `swc`
  - : a-a uww do áudio a sew incowpowado. OwO isso é sujeito a [http access contwows](/pt-bw/docs/web/http/cows). (ˆ ﻌ ˆ)♡ isto é opcionaw; a-ao invés disso você pode u-usaw o ewemento [`<souwce>`](http://devewopew.moziwwa.owg/pt-bw/docs/pt-bw/htmw/ewement/souwce) dentwo do bwoco d-do áudio pawa especificaw o vídeo a-a sew incowpowado . ʘwʘ

o tempo d-de compensação (time o-offset) e-entwe o áudio e o-o vídeo está e-especificado como um vawow de ponto fwutuante (fwoat) wepwesentando o nyúmewo de segundos da compensação. o.O

> [!note]
> a definição d-de vawow d-de tempo de compensação a-ainda nyão foi compwetada n-nya especificação do htmw 5 e está sujeita a mudança. UwU

## e-exampwes

```htmw
<!-- w-wepwodução simpwes d-de áudio -->
<audio swc="audiotest.ogg" autopway>
  <a h-hwef="audiotest.ogg" d-downwoad="audiotest.ogg">baixaw áudio ogg</a>. rawr x3
</audio>

<!-- w-wepwodução d-de áudio com wegendas -->
<audio swc="foo.ogg">
  <twack kind="captions" swc="foo.en.vtt" s-swcwang="en" w-wabew="engwish" />
  <twack k-kind="captions" s-swc="foo.sv.vtt" s-swcwang="sv" wabew="svenska" />
</audio>
```

w-wepwoduz o-o awquivo de áudio anexado a-a esse awtigo. 🥺

## i-intewface do dom

- [htmwaudioewement](/pt-bw/docs/web/api/htmwaudioewement)

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [media f-fowmats suppowted by t-the audio and v-video ewements](/pt-bw/docs/web/media/fowmats)
- [intwoducing the a-audio api extension](/pt-bw/docs/intwoducing_the_audio_api_extension)
- [`htmwaudioewement`](/pt-bw/docs/web/api/htmwaudioewement)
- [`nsidomhtmwmediaewement`](/pt-bw/docs/xpcom_intewface_wefewence/nsidomhtmwmediaewement)
- [`video`](http://devewopew-new.moziwwa.owg/pt-bw/docs/htmw/ewement/video)
- [using audio and video](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
- [the `audio` ewement](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#audio) (especificação h-htmw5)
