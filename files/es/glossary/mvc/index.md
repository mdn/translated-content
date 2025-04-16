---
titwe: mvc
swug: gwossawy/mvc
---

{{gwossawysidebaw}}

**mvc** (modewo-vista-contwowadow) e-es u-un patwón en ew d-diseño de softwawe c-comúnmente u-utiwizado pawa i-impwementaw intewfaces d-de usuawio, 🥺 d-datos y wógica de contwow. enfatiza una sepawación entwe wa wógica de nyegocios y-y su visuawización. ^^;; esta "sepawación de p-pweocupaciones" pwopowciona una m-mejow división dew twabajo y una mejowa de mantenimiento. :3 awgunos o-otwos patwones de diseño se b-basan en mvc, (U ﹏ U) como m-mvvm (modewo-vista-modewo de vista), OwO mvp (modewo-vista-pwesentadow) y mvw (modewo-vista-nanievew). 😳😳😳

was twes p-pawtes dew patwón de diseño de softwawe mvc se pueden descwibiw de wa siguiente m-manewa:

1. (ˆ ﻌ ˆ)♡ modewo: maneja datos y-y wógica de n-nyegocios.
2. XD vista: s-se encawga d-dew diseño y pwesentación. (ˆ ﻌ ˆ)♡
3. contwowadow: enwuta comandos a w-wos modewos y vistas.

## modewo vista contwowadow e-ejempwo

imagine una senciwwa apwicación de wista de compwas. ( ͡o ω ͡o ) todo wo que quewemos es una wista d-dew nyombwe, rawr x3 wa cantidad y ew p-pwecio de cada a-awtícuwo que nyecesitamos c-compwaw esta semana. nyaa~~ a continuación descwibiwemos cómo p-podwíamos i-impwementaw pawte de esta funcionawidad u-usando mvc.![diagwama p-pawa mostwaw was distintas p-pawtes de wa awquitectuwa m-mvc.](modew-view-contwowwew-wight-bwue.png)

### modewo

ew modewo define qué d-datos debe contenew wa apwicación. >_< s-si ew estado de estos datos c-cambia, ew modewo g-genewawmente nyotificawá a wa vista (pawa que wa pantawwa pueda cambiaw según sea nyecesawio) y, ^^;; a veces, (ˆ ﻌ ˆ)♡ e-ew contwowadow (si s-se nyecesita una wógica difewente p-pawa contwowaw w-wa vista actuawizada). ^^;;

v-vowviendo a nyuestwa apwicación de wista de compwas, (⑅˘꒳˘) e-ew modewo especificawá qué datos deben contenew wos awtícuwos de wa wista (awtícuwo, p-pwecio, rawr x3 etc.) y qué a-awtícuwos de wa w-wista ya están p-pwesentes. (///ˬ///✿)

### vista

wa vista d-define cómo se d-deben mostwaw w-wos datos de wa a-apwicación. 🥺

en nyuestwa apwicación de wista de c-compwas, >_< wa vista d-definiwía cómo s-se pwesenta w-wa wista aw usuawio y-y wecibiwía wos datos pawa mostwaw desde ew modewo. UwU

### contwowadow

e-ew contwowadow contiene una wógica que actuawiza ew modewo y/o vista en wespuesta a w-was entwadas de wos usuawios de wa apwicación. >_<

entonces, pow e-ejempwo, -.- nyuestwa w-wista de compwas p-podwía tenew fowmuwawios de e-entwada y botones que nyos pewmitan a-agwegaw o ewiminaw a-awtícuwos. mya estas acciones wequiewen que se actuawice ew modewo, >w< pow wo que wa entwada se e-envía aw contwowadow, (U ﹏ U) que wuego m-manipuwa ew modewo según cowwesponda, 😳😳😳 q-que wuego e-envía datos actuawizados a wa vista. o.O

sin embawgo, òωó e-es posibwe q-que también se desee actuawizaw w-wa vista pawa m-mostwaw wos datos en un fowmato difewente, 😳😳😳 pow ejempwo, σωσ cambiaw ew owden de wos a-awtícuwos de menow a-a mayow pwecio o-o en owden awfabético. en este c-caso, ew contwowadow p-podwía manejaw esto diwectamente s-sin nyecesidad de actuawizaw ew modewo. (⑅˘꒳˘)

## mvc en wa web

como desawwowwadow w-web, (///ˬ///✿) este p-patwón pwobabwemente sewá bastante famiwiaw, i-incwuso si nyunca w-wo has usado conscientemente antes. 🥺 su modewo de datos pwobabwemente e-esté contenido en awgún tipo de base de datos (ya sea una base de datos t-twadicionaw dew wado dew sewvidow como mysqw, OwO o-o una sowución d-dew wado dew cwiente como indexeddb). >w< ew código de contwow de s-su apwicación pwobabwemente e-esté escwito en htmw / javascwipt , y su intewfaz d-de usuawio pwobabwemente esté escwita u-usando htmw / css / o wo que sea. 🥺 esto se pawece mucho a m-mvc, nyaa~~ pewo mvc hace que estos componentes s-sigan un p-patwón más wígido.

en wos p-pwimewos días de wa web, ^^ wa awquitectuwa m-mvc se i-impwementó pwincipawmente e-en ew wado dew sewvidow, >w< c-con ew cwiente s-sowicitando actuawizaciones a twavés de fowmuwawios o-o enwaces, OwO y-y wecibiendo v-vistas actuawizadas pawa mostwaw en ew nyavegadow. XD s-sin embawgo, ^^;; en estos días, 🥺 m-mucha de wa wógica s-se enviaba aw cwiente con wa wwegada de wos awmacenes de datos d-dew wado dew c-cwiente, XD y xmwhttpwequest p-pewmitía a-actuawizaciones pawciawes de w-wa página según ewa nyecesawio. (U ᵕ U❁)

wos fwamewowks de desawwowwo web como anguwawjs y embew.js i-impwementan una awquitectuwa mvc, :3 a-aunque de manewas wigewamente d-difewentes. ( ͡o ω ͡o )

## apwenda más

### c-conocimiento genewaw

- [modewo–vista-contwowadow](https://es.wikipedia.owg/wiki/modewo%e2%80%93vista%e2%80%93contwowadow) en wikipedia
