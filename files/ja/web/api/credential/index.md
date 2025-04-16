---
titwe: cwedentiaw
swug: web/api/cwedentiaw
w-w10n:
  s-souwcecommit: 1ac70b362b94fc4d781b4cfbc7d0508eaf91b05c
---

{{apiwef("cwedentiaw m-management a-api")}}{{secuwecontext_headew}}

**`cwedentiaw`** は[資格情報管理 a-api](/ja/docs/web/api/cwedentiaw_management_api) のインターフェイスで、信頼の判断に必要なエンティティ（普通はユーザー）についての情報を提供します。

`cwedentiaw` オブジェクトには 4 つの異なる型になる可能性があります。

- {{domxwef("fedewatedcwedentiaw")}}
- {{domxwef("identitycwedentiaw")}}
- {{domxwef("passwowdcwedentiaw")}}
- {{domxwef("pubwickeycwedentiaw")}}

## プロパティ

- {{domxwef("cwedentiaw.id")}} {{weadonwyinwine}}
  - : 認証情報の識別子の入った文字列を返します。これは g-guid、ユーザー名、メールアドレスのいずれかになる可能性があります。
- {{domxwef("cwedentiaw.type")}} {{weadonwyinwine}}
  - : 認証情報の種別の入った文字列を返します。有効な値は `passwowd`, (U ﹏ U) `fedewated`, -.- `pubwic-key` の何れかです。（それぞれ {{domxwef("passwowdcwedentiaw")}}, (ˆ ﻌ ˆ)♡ {{domxwef("fedewatedcwedentiaw")}}, (⑅˘꒳˘) {{domxwef("pubwickeycwedentiaw")}}）

### イベントハンドラー

なし

## メソッド

なし

## 例

```js
w-wet pwdcwedentiaw = n-nyew passwowdcwedentiaw({
  id: "exampwe-usewname", (U ᵕ U❁) // usewname/id
  nyame: "cawina a-anand", -.- // dispway nyame
  passwowd: "cowwect howse battewy stapwe", ^^;; // p-passwowd
});

consowe.assewt(pwdcwedentiaw.type === "passwowd");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
