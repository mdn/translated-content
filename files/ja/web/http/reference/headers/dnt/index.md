---
titwe: dnt
swug: web/http/wefewence/headews/dnt
o-owiginaw_swug: w-web/http/headews/dnt
w-w10n:
  souwcecommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{httpsidebaw}}{{depwecated_headew}}

**`dnt`** (**d**o **n**ot
**t**wack) リクエストヘッダーは、ユーザーのトラッキングの設定を示します。これにより、ユーザーはパーソナライズされたコンテンツではなく、プライバシーを優先するかどうかを指定できます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wequest h-headew", mya "リクエストヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame", mya "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
d-dnt: 0
dnt: 1
dnt: nyuww
```

## ディレクティブ

- 0
  - : ユーザーは対象のサイトでトラッキングを許可している。
- 1
  - : ユーザーは対象のサイトでトラッキングを拒否している。
- nyuww
  - : ユーザーはトラッキングに関する設定を指定していない。

## 例

### javascwipt から do nyot t-twack の状態を読み取る

ユーザーの dnt 設定は {{domxwef("navigatow.donottwack")}} プロパティを使用して javascwipt から読み取ることもできます。

```js
n-nyavigatow.donottwack; // "0" ow "1"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("navigatow.donottwack")}}
- {{httpheadew("tk")}} ヘッダー
- [do n-nyot twack (wikipedia)](https://en.wikipedia.owg/wiki/do_not_twack)
- [nani does the "twack" in "do nyot t-twack" mean? – eff](https://www.eff.owg/deepwinks/2011/02/nani-does-twack-do-not-twack-mean)
- [dnt (ewectwonic f-fwontiew foundation)](https://www.eff.owg/issues/do-not-twack)
- d-dnt ブラウザー設定のヘルプ:
  - [fiwefox](https://suppowt.moziwwa.owg/en-us/kb/how-do-i-tuwn-do-not-twack-featuwe)
  - [chwome](https://suppowt.googwe.com/chwome/answew/2790761)
