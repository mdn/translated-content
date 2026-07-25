---
title: DNT ヘッダー
short-title: DNT
slug: Web/HTTP/Reference/Headers/DNT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> DNT（Do Not Track）仕様は廃止されました。詳しくは、{{domxref("Navigator.doNotTrack")}} を参照してください。

HTTP の **`DNT`** (Do Not Track) {{Glossary("request header", "リクエストヘッダー")}}は、ユーザーのトラッキングの設定を示します。
これにより、ユーザーはパーソナライズされたコンテンツではなく、プライバシーを優先するかどうかを指定できます。

DNT は、[グローバルプライバシー制御](https://globalprivacycontrol.org/)に取って代わられ、非推奨となりました。グローバルプライバシー制御は、{{HTTPHeader("Sec-GPC")}} ヘッダーを使用してサーバーに通知され、クライアント側では {{domxref("navigator.globalPrivacyControl")}} からアクセス可能です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
DNT: 0
DNT: 1
DNT: null
```

## ディレクティブ

- `0`
  - : ユーザーは対象のサイトでトラッキングを許可している。
- `1`
  - : ユーザーは対象のサイトでトラッキングを拒否している。
- `null`
  - : ユーザーはトラッキングに関する設定を指定していない。

## 例

### JavaScript から Do Not Track の状態を読み取る

ユーザーの DNT 設定は {{domxref("Navigator.doNotTrack")}} プロパティを使用して JavaScript から読み取ることもできます。

```js
navigator.doNotTrack; // "0" または "1" または null
```

## 仕様書

廃止された [Tracking Preference Expression (DNT)](https://w3c.github.io/dnt/drafts/tracking-dnt.html#dnt-header-field) 仕様書に掲載されています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} ヘッダー
- [Do Not Track (Wikipedia)](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT (Electronic Frontier Foundation)](https://www.eff.org/issues/do-not-track)
- DNT ブラウザー設定のヘルプ:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [Enabling GPC in Firefox](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
