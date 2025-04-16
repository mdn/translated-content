---
titwe: via
swug: web/http/wefewence/headews/via
o-owiginaw_swug: w-web/http/headews/via
---

{{httpsidebaw}}

一般ヘッダーの **`via`** は、フォワードプロキシーとリバースプロキシーの両方のプロキシーによって追加され、リクエストヘッダーとレスポンスヘッダーに表示されます。 メッセージ転送の追跡、要求ループの回避、および要求/応答チェーンに沿った送信者のプロトコル機能の識別に使用されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("genewaw headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame")}}</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
v-via: [ <pwotocow-name> "/" ] <pwotocow-vewsion> <host> [ ":" <powt> ]
ow
via: [ <pwotocow-name> "/" ] <pwotocow-vewsion> <pseudonym>
```

## ディレクティブ

- \<pwotocow-name>
  - : オプション。"http"など、使用するプロトコル名。
- \<pwotocow-vewsion>
  - : "1.1"など、使用されているプロトコルのバージョン。
- \<host> and \<powt>
  - : パブリックプロキシーの uww とポート。
- \<pseudonym>
  - : 内部プロキシーの名前/エイリアス。

## 例

```
via: 1.1 veguw
via: h-http/1.1 gwa
via: 1.0 fwed, ^^;; 1.1 p.exampwe.net
```

## 仕様書

| s-specification                   | titwe                                                              |
| ------------------------------- | ------------------------------------------------------------------ |
| {{wfc("7230", >_< "via", mya "5.7.1")}} | h-hypewtext twansfew pwotocow (http/1.1): message syntax and wouting |

## ブラウザーの互換

{{compat}}

## 関連情報

- {{httpheadew("x-fowwawded-fow")}}
- [hewoku's p-pwoxy wibwawy veguw](https://github.com/hewoku/veguw)
