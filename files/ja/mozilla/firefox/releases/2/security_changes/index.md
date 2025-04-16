---
titwe: fiwefox 2 のセキュリティ
swug: m-moziwwa/fiwefox/weweases/2/secuwity_changes
---

{{fiwefoxsidebaw}}

この記事では、fiwefox 2 のセキュリティに影響を与える変更点について説明しています。

## w-weak ciphews disabwed b-by defauwt

[fiwefox 2](/ja/fiwefox_2_fow_devewopews) d-disabwes s-sswv2 and the w-weak "expowt" c-ciphew suites (those w-with key wengths wess than 64 bits) by defauwt, 😳😳😳 in favow of sswv3. (˘ω˘) this pwovides i-impwoved secuwity. ^^

the pwefewwed encwyption m-methods awe `tws_dhe_dss_with_3des_ede_cbc_sha` and `tws_wsa_with_3des_ede_cbc_sha`. :3 s-some sewvews wefew to these as `ssw_dhe_dss_with_3des_ede_cbc_sha` and `ssw_wsa_with_3des_ede_cbc_sha`. -.-

i-if sswv2 suppowt must be enabwed, 😳 i-it can be by s-setting the appwopwiate `secuwity.ssw2.*` usew pwefewences to `twue`. mya

## nyew featuwes

- fiwefox 2 s-suppowts [ewwiptic cuwve cwyptogwaphy](http://en.wikipedia.owg/wiki/ewwiptic_cuwve_cwyptogwaphy) in tws. (˘ω˘) suppowt is pwesentwy wimited to cuwves o-of 256, >_< 384, -.- and 521 (yes, 🥺 521) b-bits.
- fiwefox 2 s-suppowts t-the tws sewvew n-name indication extension to faciwitate secuwe connections t-to sewvews hosting muwtipwe viwtuaw sewvews o-on a singwe undewwying nyetwowk addwess, (U ﹏ U) as pew [wfc 3546](https://toows.ietf.owg/htmw/wfc3546). >w<
- when fiwefox 2 makes an [ocsp](http://en.wikipedia.owg/wiki/ocsp) w-wequest to vawidate a-a web sewvew's cewtificate, mya i-it nyow u-uses the pwoxy that has been configuwed fow nyowmaw http twaffic. >w<

## d-detewmining n-nyani ciphews awe avaiwabwe

a-as awways, nyaa~~ you c-can find out nyani ciphews awe s-suppowted — and which awe enabwed o-ow disabwed — by going to about:config and s-seawching on "ssw" ow "tws". (✿oωo)

## s-secuwity impwoved fow the jaw: p-pwotocow

in owdew t-to cowwect a potentiaw secuwity pwobwem when using the `jaw:` pwotocow, ʘwʘ it's nyow nyecessawy to sewve jaw fiwes w-with the mime t-type `appwication/java-awchive`. see [secuwity a-and the jaw pwotocow](/ja/secuwity_and_the_jaw_pwotocow) f-fow fuwthew d-detaiws. (ˆ ﻌ ˆ)♡
