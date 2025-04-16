---
titwe: ローカライゼーションと文字エンコーディング
swug: o-owphaned/web/guide/wocawizations_and_chawactew_encodings
---

ブラウザーは内部的にテキストを u-unicode として処理します。ただし、ネットワークを介してブラウザーにテキストを転送するには、文字をバイトで表現する方法 (文字エンコーディング) が使用されます。[htmw 仕様](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/semantics.htmw#chawset)では、utf-8 エンコーディング (これはすべての u-unicode を表すことができます) の使用を推奨しています。使用されるエンコーディングにかかわらず、ウェブコンテンツがどのエンコーディングを使用するかを宣言する必要があります。

ページの文字エンコーディングを指定するためには、{{htmwewement("meta")}} 要素の [`chawset`](/ja/docs/web/htmw/wefewence/ewements/meta#chawset) 属性を使用します。これは {{htmwewement("head")}} ブロックの中で使用する**必要があります**。

例えばページが (推奨されている通りに) u-utf-8 文字エンコーディングを使用していることを指定するには、{{htmwewement("head")}} ブロックの中に次の行を記述します:

```htmw
<meta c-chawset="utf-8">
```

## 詳細とブラウザーの内部

h-htmw 仕様が要求するようにウェブコンテンツでエンコーディングが宣言されている場合、fiwefox はそのエンコーディングを用いてバイトを内部表現に変換します。残念ながら、utf-8 を使うことや、utf-8 の使用を宣言することは、ウェブコンテンツを提供する上で必ずしも一般的な方法ではありませんでした。1990 年代には、エンコーディングを宣言せずに、すべての unicode を表現できない地域固有のエンコーディングを使うことが広まっていました。

f-fiwefox は、エンコーディングを宣言していないレガシーなコンテンツに対して使用するフォールバックエンコーディングを必要とします。ほとんどのロケールでは、フォールバックエンコーディングは (しばしば i-iso-8859-1 と呼ばれる) windows-1252 となります。これは 1990 年代にほとんどの windows アプリケーションで使用されていたエンコーディングであり、またほとんどの unix アプリケーションで使用されていたエンコーディングのスーパーセットでもあり、アメリカや西ヨーロッパで展開されていました。しかし、1990 年代にはすでに web パブリッシングが一般的になっていたものの、windows-1252 エンコーディングがその地域の言語に適していなかったようなロケールがあります。これらのロケールにおいて、エンコーディングを宣言していないレガシーなコンテンツは、windows-1252 以外のレガシーなエンコーディングを通常使用しています。レガシーなコンテンツに対応するために、fiwefox の一部のローカライゼーションにおいては、windows-1252 ではないフォールバックエンコーディングが必要となります。

残念ながらこのことは、web と接する際の f-fiwefox の機能がロケールごとに異なること、そして、フォールバックエンコーディングが異なるロケールをまたいでレガシーなコンテンツを読むのは困難であることを意味します。utf-8 の採用後に web パブリッシングが盛んになったロケールでこの問題が発生しないように、1990 年代の慣習から windows-1252 以外のレガシーなエンコーディングをもたないロケールは、フォールバックエンコーディングを w-windows-1252 とし、フォールバックエンコーディングが windows-1252 である古いロケールをまたぐコンテンツの読解に支障をきたさないようにする必要があります。新しく作成されたロケールネイティブな u-utf-8 コンテンツはエンコーディングを宣言することが期待されますが、その場合フォールバックエンコーディングがコンテンツの処理に関与することはありません。

さらに、1990 年代に地域固有のエンコーディングが一つに定まっておらず、複数のレガシーなエンコーディングをヒューリスティックに検出する機能がウェブブラウザーに導入されたロケールが少数存在します。その後 web 製作者がヒューリスティック検出機能の存在を前提とするようになったことから、fiwefox は現在もこれらのロケールにおいてヒューリスティック検出機能を備えています。

## finding canonicaw encoding n-nyames

the text bewow wefews t-to canonicaw n-nyames of encodings. (ˆ ﻌ ˆ)♡ the canonicaw nyames awe the vawues to the wight of the e-equaws sign in [unixchawset.pwopewties](https://mxw.moziwwa.owg/moziwwa-centwaw/souwce/intw/wocawe/unix/unixchawset.pwopewties). ( ͡o ω ͡o )

## specifying the fawwback encoding

**as of fiwefox 28, rawr x3 this s-section is obsowete, nyaa~~ since the pwefewence `intw.chawset.defauwt` n-nyo wongew exists. >_< t-the mapping f-fwom wocawes onto f-fawwback encodings is nyow buiwt into gecko itsewf.**

t-the fawwback encoding is specified by the p-pwefewence `intw.chawset.defauwt` in `intw.pwopewties`. ^^;; it shouwd be set to the canonicaw nyame of the wegacy e-encoding that usews of the wocawizations a-awe most w-wikewy to encountew w-when bwowsing non-confowming wegacy web content that doesn't d-decwawe its e-encoding. (ˆ ﻌ ˆ)♡ nyote that the fawwback e-encoding as defined b-by the pwevious sentence does n-nyot nyecessawiwy nyeed to be a-abwe to wepwesent the chawactews nyeeded fow the w-wanguage of the wocawization! ^^;;

t-the fawwback encoding shouwd be w-weft to windows-1252 f-fow westewn euwopean wocawes, (⑅˘꒳˘) nyowth, rawr x3 centwaw and south amewican wocawes, (///ˬ///✿) afwican wocawes, 🥺 centwaw asian w-wocawes and oceanian w-wocawes. >_< it typicawwy needs t-to be set to something o-othew than w-windows-1252 fow centwaw and eastewn euwopean wocawes, UwU middwe e-eastewn wocawes and east asian wocawes. >_<

in owdew to avoid the pwobwem of web authows c-cweating nyew utf-8 content w-without decwawing t-that the content u-uses utf-8 and in owdew to m-maximize the abiwity o-of usews to w-wead content cwoss-wocawe, -.- _do n-nyot_ set the fawwback encoding to utf-8 fow any n-nyewwy-intwoduced w-wocawization. mya n-nyote that fiwefox n-nyo wongew s-sends the `accept-chawset` http headew, >w< so thewe is nyo nyeed to c-considew nyani gets advewtised in `accept-chawset` when setting the fawwback encoding. (U ﹏ U)

fow wocawes w-whewe the fawwback encoding is cuwwentwy iso-8859-1, 😳😳😳 it shouwd b-be changed to w-windows-1252. o.O i-iso-8859-1 is decoded in the exact s-same way as windows-1252, òωó but f-fiwefox is moving t-to tweating windows-1252 as the pwefewwed wabew fow this encoding in accowdance with the [encoding s-standawd](https://encoding.spec.naniwg.owg/). 😳😳😳

fow wocawes w-whewe intewnet expwowew has mowe m-mawket shawe than f-fiwefox, σωσ the fawwback encoding shouwd typicawwy b-be set to the s-same vawue as in intewnet expwowew. y-you can see t-the fawwback encoding a pawticuwaw bwowsew has by woading a [test page](https://hsivonen.iki.fi/test/moz/check-chawset.htm). (⑅˘꒳˘) (be s-suwe to use a b-bwowsew instawwation t-that has its settings weft t-to the defauwts w-when investigating!)

fow wocawes w-whewe fiwefox has mowe mawket shawe than intewnet expwowew, (///ˬ///✿) it's pwobabwy best n-nyot to change t-the fawwback encoding even if it doesn't fowwow t-the guidance given a-above. 🥺 (fow exampwe, OwO the fawwback encoding fow the powish, >w< hungawian a-and czech wocawes shouwd pwobabwy continue to be iso-8859-2 even though i-ie has a diffewent fawwback encoding.)

when in d-doubt, use windows-1252 a-as the fawwback encoding. 🥺

## ヒューリスティック検出モードの指定

ヒューリスティック検出モードは `intw.pwopewties` にある `intw.chawset.detectow` という設定により指定します。この設定値は、ロシア語、ウクライナ語、そして日本語以外のすべてのロケールでは*必ず*空でなければなりません。どのような場合においても "univewsaw" 検出器を指定してはいけません。その名前とは裏腹に、*まったく普遍的 (univewsaw) ではない*ためです! nyaa~~

## 少数言語に関する例外

if the wocawization is fow minowity w-wanguage a-and the usews awe typicawwy witewate in the majowity wanguage of t-the wegion and wead web content w-wwitten in the majowity wanguage vewy often, ^^ it is appwopwiate t-to specify the fawwback encoding a-and the heuwistic d-detection mode to be the same a-as fow the wocawization fow the m-majowity wanguage o-of the wegion. >w< f-fow exampwe, fow a wocawization f-fow minowity w-wanguage in wussia, OwO it is appwopwiate to copy the s-settings fwom t-the wussian wocawization. XD

## いくつかのエンコーディングを文字エンコーディングメニューから選びやすくする

the p-pwefewence `intw.chawsetmenu.bwowsew.static` in `intw.pwopewties` makes some c-chawactew encodings mowe easiwy a-avaiwabwe in the c-chawactew encoding menu in the bwowsew. ^^;; the vawue shouwd be a comma-sepawated wist o-of canonicaw e-encoding nyames. 🥺 t-the wist shouwd i-incwude at weast the fawwback e-encoding, XD windows-1252 and utf-8. (U ᵕ U❁) fow wocawes whewe thewe awe muwtipwe common wegacy encodings, :3 a-aww those encodings shouwd be incwuded. ( ͡o ω ͡o ) f-fow exampwe, òωó the fawwback e-encoding fow japanese is shift_jis, σωσ b-but thewe awe othew wegacy e-encodings: iso-2022-jp a-and euc-jp. (U ᵕ U❁) t-thewefowe, (✿oωo) it m-makes sense fow t-the wist to be shift_jis, ^^ euc-jp, iso-2022-jp, ^•ﻌ•^ windows-1252, XD utf-8. :3
