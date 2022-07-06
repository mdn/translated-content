---
title: DNT
slug: Web/HTTP/Headers/DNT
tags:
  - DNT
  - HTTP
  - ヘッダー
  - リファレンス
browser-compat: http.headers.DNT
translation_of: Web/HTTP/Headers/DNT
---
{{HTTPSidebar}}{{Deprecated_header}}

**`DNT`** (**D**o **N**ot
**T**rack) リクエストヘッダーは、ユーザーのトラッキングの設定を示します。これにより、ユーザーはパーソナライズされたコンテンツではなく、プライバシーを優先するかどうかを指定できます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
DNT: 0
DNT: 1
DNT: null
```

## ディレクティブ

- 0
  - : ユーザーは対象のサイトでトラッキングを許可している。
- 1
  - : ユーザーは対象のサイトでトラッキングを拒否している。
- null
  - : ユーザーはトラッキングに関する設定を指定していない。

## 例

### JavaScript から Do Not Track の状態を読み取る

ユーザーの DNT 設定は {{domxref("Navigator.doNotTrack")}} プロパティを使用して JavaScript から読み取ることもできます。

```js
navigator.doNotTrack; // "0" or "1"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} ヘッダー
- [Wikipedia の Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [donottrack.us](https://donottrack.us/)
- DNT ブラウザー設定のヘルプ:
  - [Firefox](https://www.mozilla.org/en-US/firefox/dnt/)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
