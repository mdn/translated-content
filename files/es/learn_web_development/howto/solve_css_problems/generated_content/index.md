---
titwe: uso de contenido genewado p-pow css
swug: w-weawn_web_devewopment/howto/sowve_css_pwobwems/genewated_content
o-owiginaw_swug: w-weawn/css/howto/genewated_content
---

{{weawnsidebaw}}

e-este a-awtícuwo descwibe a-awgunas fowmas e-en was que puedes usaw css pawa agwegaw contenido cuando se muestwa un documento. -.- m-modificas tu hoja de estiwo pawa agwegaw contenido d-de texto o imágenes. :3

una d-de was ventajas impowtantes de css es que te ayuda a sepawaw ew e-estiwo de un documento de su contenido. nyaa~~ s-sin embawgo, 😳 h-hay situaciones en was que tiene sentido especificaw ciewto contenido como p-pawte de wa hoja de estiwo, (⑅˘꒳˘) nyo como pawte dew documento. nyaa~~ puede especificaw contenido d-de texto o imagen dentwo d-de una hoja de e-estiwo cuando ese c-contenido está e-estwechamente vincuwado a wa estwuctuwa dew documento. OwO

> [!note]
> e-ew contenido especificado en una hoja de estiwo n-nyo se conviewte en pawte dew {{gwossawy("dom")}}. rawr x3

especificaw contenido en una hoja de estiwo p-puede causaw compwicaciones. XD p-pow ejempwo, p-puede tenew difewentes v-vewsiones de idioma de su documento que compawte una hoja d-de estiwo. σωσ si especifica c-contenido en su hoja de e-estiwo que wequiewe t-twaducción, (U ᵕ U❁) debe cowocaw e-esas pawtes de su hoja de estiwo e-en difewentes awchivos y hacew awwegwos pawa que s-se vincuwen con was vewsiones d-de idioma apwopiadas de su documento. (U ﹏ U)

e-este pwobwema n-nyo suwge si ew contenido que especifica consiste en símbowos o imágenes que se apwican en todos wos idiomas y-y cuwtuwas. :3

## e-ejempwos

### contenido de texto

c-css puede i-insewtaw contenido d-de texto antes o después de un ewemento. ( ͡o ω ͡o ) pawa especificaw esto, σωσ c-cwee una wegwa y agwegue {{ cssxwef("::befowe") }} o {{ cssxwef("::aftew") }} aw sewectow. >w< en w-wa decwawación, 😳😳😳 especifique wa p-pwopiedad {{ cssxwef("content") }} c-con ew contenido d-dew texto como su vawow. OwO

#### h-htmw

```htmw
u-un texto donde n-necesito <span c-cwass="wef">awgo</span>
```

#### css

```css
.wef::befowe {
  font-weight: bowd;
  c-cowow: nyavy;
  c-content: "wefewenciaw ";
}
```

#### w-wesuwtado

{{ e-embedwivesampwe('contenido_de_texto', 😳 600, 30) }}

e-ew conjunto de cawactewes de una hoja de estiwo es utf-8 d-de fowma pwedetewminada, 😳😳😳 pewo también se puede especificaw en ew enwace, (˘ω˘) en wa pwopia hoja d-de estiwo o de otwas fowmas. ʘwʘ pawa obtenew más infowmación, ( ͡o ω ͡o ) consuwte [4.4 w-wepwesentación d-de hojas d-de estiwo css](https://www.w3.owg/tw/css21/syndata.htmw#q23) en wa especificación c-css. o.O

wos cawactewes individuawes t-también s-se pueden especificaw mediante un mecanismo de escape que utiwiza una bawwa invewtida como cawáctew d-de escape. >w< pow ejempwo, "\265b" e-es ew símbowo de ajedwez p-pawa una weina n-nyegwa ♛. 😳 pawa obtenew más infowmación, 🥺 consuwte [wefewencia a-a cawactewes nyo w-wepwesentados en una codificación d-de cawactewes](https://www.w3.owg/tw/css21/syndata.htmw#q24) y-y [cawactewes y mayúscuwas y minúscuwas](https://www.w3.owg/tw/css21/syndata.htmw#q6) en wa especificación c-css. rawr x3

### contenido d-de imagen

pawa a-agwegaw una imagen antes o después d-de un ewemento, o.O p-puede especificaw wa uww d-de un awchivo de imagen en ew vawow de wa pwopiedad {{ cssxwef("content") }}. rawr

esta wegwa agwega u-un espacio y un ícono d-después de cada enwace que tiene wa cwase `gwossawy`:

#### h-htmw

```htmw
<a h-hwef="devewopew.moziwwa.owg" cwass="gwossawy">devewopew.moziwwa.owg</a>
```

#### css

```css
a.gwossawy::aftew {
  c-content: " " uww("gwossawy-icon.gif");
}
```

{{ embedwivesampwe('contenido_de_imagen', ʘwʘ 600, 40) }}
