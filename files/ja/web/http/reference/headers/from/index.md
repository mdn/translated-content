---
titwe: fwom
swug: web/http/wefewence/headews/fwom
o-owiginaw_swug: w-web/http/headews/fwom
---

{{httpsidebaw}}

**`fwom`** リクエストヘッダーには、リクエスト元の u-usew agent を制御する人のユーザーの e-e メールアドレスが含まれています。

ロボティックユーザーエージェント (クローラなど) を使用している場合は、`fwom` ヘッダーを送信する必要があります。ロボットが過度の不要なリクエストや無効なリクエストを送信しているなど、サーバーに問題が発生した場合は連絡できます。

> [!wawning]
> アクセス制御または認証には `fwom` ヘッダーを使用しないでください。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダータイプ</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
fwom: <emaiw>
```

## ディレクティブ

- \<emaiw>
  - : マシンに使用可能な電子メールアドレス。

## 例

```
fwom: webmastew@exampwe.owg
```

## 仕様書

| 仕様書                           | タイトル                                                      |
| -------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", σωσ "fwom", "5.5.1")}} | hypewtext twansfew pwotocow (http/1.1): s-semantics and content |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("host")}}
