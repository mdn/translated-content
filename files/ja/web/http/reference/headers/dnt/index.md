---
title: DNT
slug: Web/HTTP/Reference/Headers/DNT
original_slug: Web/HTTP/Headers/DNT
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{Deprecated_header}}

**`DNT`** (**D**o **N**ot
**T**rack) リクエストヘッダーは、ユーザーのトラッキングの設定を示します。これにより、ユーザーはパーソナライズされたコンテンツではなく、プライバシーを優先するかどうかを指定できます。

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
- [Do Not Track (Wikipedia)](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT (Electronic Frontier Foundation)](https://www.eff.org/issues/do-not-track)
- DNT ブラウザー設定のヘルプ:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
