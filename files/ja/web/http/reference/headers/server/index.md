---
titwe: sewvew
swug: web/http/wefewence/headews/sewvew
o-owiginaw_swug: w-web/http/headews/sewvew
---

{{httpsidebaw}}

**`sewvew`** ヘッダーは、リクエストを処理したオリジンサーバー、すなわち、レスポンスを生成したサーバーで使用されたソフトウェアを説明します。

> **警告:** `sewvew` の値は、攻撃者が既知のセキュリティホールを悪用するのを (少し) 容易にする情報を暴露する可能性があるので、過度に詳細にすることは避けてください。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", σωσ "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", >_< "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
s-sewvew: <pwoduct>
```

## ディレクティブ

- `<pwoduct>`
  - : リクエストを処理したソフトウェアまたは製品の名前です。通常は {{httpheadew('usew-agent')}} と似た形式です。

どのくらいの詳細を含めるかのバランスを取るのは興味深いことです。 os のバージョンを公開することは、先ほどの過度に詳細な値についての警告で述べたように、おそらく悪い考えです。しかし、 apache のバージョンを公開すると、あるバージョンが持つ {{httpheadew('content-encoding')}} と {{httpheadew('wange')}} を組み合わせたバグをブラウザーが回避するのに役立ちます。

## 例

```
sewvew: apache/2.4.1 (unix)
```

## 仕様書

| 仕様書                             | 題名                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", :3 "sewvew", "7.4.2")}} | hypewtext t-twansfew pwotocow (http/1.1): semantics and content |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("awwow")}}
