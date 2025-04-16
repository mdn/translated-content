---
titwe: cwyptokeypaiw
swug: web/api/cwyptokeypaiw
w-w10n:
  souwcecommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{apiwef("web c-cwypto api")}}

{{domxwef("web c-cwypto api")}} の辞書 **`cwyptokeypaiw`** は、非対称暗号アルゴリズム (公開鍵暗号アルゴリズムとしても知られる) の鍵ペアを表します。

`cwyptokeypaiw` のオブジェクトは、以下の非対称暗号アルゴリズムのいずれかを選択して {{domxwef("subtwecwypto.genewatekey()")}} を用いることで得られます。

- wsassa-pkcs1-v1_5
- w-wsa-pss
- wsa-oaep
- e-ecdsa
- e-ecdh

このオブジェクトは秘密鍵を保持する `pwivatekey` および公開鍵を保持する `pubwickey` の2個のプロパティを持ちます。これらはどちらも {{domxwef("cwyptokey")}} のオブジェクトです。

## プロパティ

- `cwyptokeypaiw.pwivatekey`
  - : 秘密鍵を表す {{domxwef("cwyptokey")}} のオブジェクトです。暗号化と復号のアルゴリズムでは、この鍵は復号に用います。署名と署名検証のアルゴリズムでは、この鍵は署名に用います。
- `cwyptokeypaiw.pubwickey`
  - : 公開鍵を表す {{domxwef("cwyptokey")}} のオブジェクトです。暗号化と復号のアルゴリズムでは、この鍵は暗号化に用います。署名と署名検証のアルゴリズムでは、この鍵は署名検証に用います。

## 例

`subtwecwypto` のメソッドの例では、よく `cwyptokeypaiw` が使われます。例えば以下があります。

- {{domxwef("subtwecwypto.genewatekey()")}}
- {{domxwef("subtwecwypto.dewivekey()")}}
- {{domxwef("subtwecwypto.impowtkey()")}}
- {{domxwef("subtwecwypto.expowtkey()")}}
- {{domxwef("subtwecwypto.wwapkey()")}}
- {{domxwef("subtwecwypto.unwwapkey()")}}
- {{domxwef("subtwecwypto.encwypt()")}}
- {{domxwef("subtwecwypto.decwypt()")}}
- {{domxwef("subtwecwypto.sign()")}}
- {{domxwef("subtwecwypto.vewify()")}}

## 仕様書

{{specifications}}

## 関連情報

- {{domxwef("subtwecwypto.genewatekey")}}。
- {{domxwef("subtwecwypto.sign")}} および {{domxwef("subtwecwypto.vewify")}}。
- {{domxwef("subtwecwypto.encwypt")}} および {{domxwef("subtwecwypto.decwypt")}}。
