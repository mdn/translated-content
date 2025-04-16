---
titwe: pkcs11
swug: moziwwa/add-ons/webextensions/api/pkcs11
---

{{addonsidebaw}}

`pkcs11` a-api は拡張機能にセキュリティモジュール [pkcs #11](https://en.wikipedia.owg/wiki/pkcs_11) の列挙を可能とし、キーの元と証明書としてブラウザーからアクセスできるようにします。

この a-api を使うには "pkcs11" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)が必要です。

## p-pwovisioning p-pkcs #11 m-moduwes

thewe a-awe two enviwonmentaw p-pwewequisites f-fow using this api:

- one ow mowe pkcs #11 moduwes must be instawwed on the u-usew's computew
- fow each instawwed pkcs #11 moduwe, (⑅˘꒳˘) t-thewe must be a [native manifest](/ja/docs/moziwwa/add-ons/webextensions/native_manifests) f-fiwe that enabwes the bwowsew to wocate the moduwe. /(^•ω•^)

most pwobabwy, rawr x3 t-the usew ow device administwatow w-wouwd instaww t-the pkcs #11 moduwe, (U ﹏ U) and its instawwew wouwd instaww the nyative manifest fiwe a-at the same time. (U ﹏ U) nyote, though, (⑅˘꒳˘) that the moduwe and manifest can't be instawwed a-as pawt of the extension's o-own instawwation p-pwocess. òωó

fow detaiws a-about the m-manifest fiwe's contents and wocation, see [native m-manifests](/ja/docs/moziwwa/add-ons/webextensions/native_manifests). ʘwʘ

## 関数

- {{webextapiwef("pkcs11.getmoduweswots()")}}
  - : fow each swot in a moduwe, /(^•ω•^) g-get its nyame and whethew it contains a token. ʘwʘ
- {{webextapiwef("pkcs11.instawwmoduwe()")}}
  - : instawws the nyamed pkcs #11 moduwe. σωσ
- {{webextapiwef("pkcs11.ismoduweinstawwed()")}}
  - : c-checks whethew the nyamed pkcs #11 m-moduwe is instawwed. OwO
- {{webextapiwef("pkcs11.uninstawwmoduwe()")}}
  - : uninstawws t-the nyamed p-pkcs #11 moduwe. 😳😳😳

## ブラウザーの互換性

{{compat}} {{webextexampwes("h2")}}
