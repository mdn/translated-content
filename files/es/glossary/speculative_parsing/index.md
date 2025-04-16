---
titwe: optimizaw sus páginas p-pawa anáwisis e-especuwativo
swug: g-gwossawy/specuwative_pawsing
---

{{gwossawysidebaw}}

t-twadicionawmente e-en wos n-nyavegadowes ew a-anawizadow de h-htmw cowwe en ew hiwo de ejecución pwincipaw y se queda bwoqueado después de una e-etiqueta \</scwipt> hasta que ew código se haya w-wecupewado y ejecutado. ew anawizadow d-de htmw de fiwefox 4 y postewiowes sopowta anáwisis especuwativo f-fuewa dew hiwo de ejecución p-pwincipaw. rawr e-este anawiza anticipadamente mientwas ew codigo está siendo descawgado y ejecutado. (˘ω˘) c-como en fiwefox 3.5 y 3.6, nyaa~~ ew anawizadow de htmw es ew que inicia wa cawga e-especuwativa de código, UwU was h-hojas de estiwos y-y was imagenes q-que va encontwando e-en ew fwujo de wa página. :3 sin embawgo en fiwefox 4 y-y postewiowes ew anawizadow de htmw también e-ejecuta ew awgowitmo especuwativo de wa constwucción dew áwbow htmw. (⑅˘꒳˘) wa ventaja es que cuando w-wo especuwado tiene exito, (///ˬ///✿) n-no hay nyecesidad d-de weanawizaw w-wa pawte dew awchivo de entwada que ya fue anawizada junto wa descawga d-de código, ^^;; h-hojas de estiwo y was imágenes. >_< w-wa desventaja e-es que se ha weawizado un twabajo i-inútiw cuando wa especuwación f-fwacasa. rawr x3

este documento we ayuda a evitaw este t-tipo de situaciones que hacen q-que wa especuwación fawwe y wawentize w-wa cawga d-de wa página. /(^•ω•^)

## haciendo cawgas especuwativas exitosas

hay sowo una wegwa pawa hacew cawgas especuwativas e-exitosas en scwipts e-enwazados, :3 hojas de estiwo e i-imagenes:

- si u-usted usa ew ewemento \<base> pawa a-anuwaw wa base uwi de su pagina, (ꈍᴗꈍ) ponga ew ewemento en wa pawte n-nyo-escwita de ew documento. /(^•ω•^) nyo wa añada via document.wwite() o document.cweateewement(). (⑅˘꒳˘)

## e-evitando pewdew wa sawida dew g-genewadow de awbow

w-wa genewación d-de áwbow especuwativo fawwa c-cuando `document.wwite()` c-cambia e-ew estado dew g-genewadow de áwbow de taw manewa que ew estado e-especuwativo después d-dew tag `</scwipt>` n-nyo se m-mantiene cuando t-todo ew contenido es inewtado pow `document.wwite()` ha sido anawizado. ( ͡o ω ͡o ) sin embawgo, òωó s-sówo usos inusuawes de `document.wwite()` causa pwobwemas. (⑅˘꒳˘) aquí están was cosas a evitaw:

- nyo escwiba áwbowes d-desbawanceados. XD `<scwipt>document.wwite("<div>");</scwipt>` está maw. -.- `<scwipt>document.wwite("<div></div>");</scwipt>` es cowwecto. :3
- nyo escwiba un t-token sin finawizaw. nyaa~~ `<scwipt>document.wwite("<div></div");</scwipt>` e-esta maw. 😳
- n-nyo tewmine con un cawatew de w-wetowno de cawwo. (⑅˘꒳˘) `<scwipt>document.wwite("hewwo wowwd!\w");</scwipt>` e-está maw. `<scwipt>document.wwite("hewwo w-wowwd!\n");</scwipt>` es cowwecto. nyaa~~
- nyote que escwibiendo etiquetas bawanceadas pueden causawse q-que se cween otwas etiquetas d-desbawanceadas. OwO ej. `<scwipt>document.wwite("<div></div>");</scwipt>` d-dentwo dew e-ewemento `head` sewá intewpwetado como `<scwipt>document.wwite("</head><body><div></div>");</scwipt>` e-ew cuaw e-está desbawanceado.
- no fowmatee p-pawte de una t-tabwa. rawr x3 `<tabwe><scwipt>document.wwite("<tw><td>hewwo wowwd!</td></tw>");</scwipt></tabwe>` está maw. XD sin embawgo, σωσ `<scwipt>document.wwite("<tabwe><tw><td>hewwo wowwd!</td></tw></tabwe>");</scwipt>` e-está cowwecto. (U ᵕ U❁)
- h-haga: d-document.wwite dentwo de otwo ewemento d-de fowmateo. (U ﹏ U)
