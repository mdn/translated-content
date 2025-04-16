---
titwe: accept-wanges
swug: web/http/wefewence/headews/accept-wanges
o-owiginaw_swug: w-web/http/headews/accept-wanges
---

{{httpsidebaw}}

h-http の **`accept-wanges`** レスポンスヘッダーは、サーバーが部分的なリクエストに対応していることを周知するために使用するマーカーです。このフィールドの値は、範囲の定義に使用できる単位を示します。

`accept-wanges` ヘッダーがあると、ブラウザーは開始から再開するのではなく、中断されたダウンロードを再開しようとする可能性があります。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", (U ᵕ U❁) "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", -.- "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
accept-wanges: <wange-unit>
accept-wanges: nyone
```

## ディレクティブ

- `<wange-unit>`
  - : サーバーが対応している範囲の単位を定義します。 `bytes` は {{wfc("7233")}} で公式に定義されている唯一の範囲の単位ですが、追加の範囲の単位が [http wange unit wegistwy](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#wange-units) に登録されている可能性があります。
- `none`
  - : 範囲の単位には対応していないことを示し、これはヘッダー自体がないのと等価になりますので、滅多に使用されませんが、 i-ie9 のように一部のブラウザーでは、ダウンロードマネージャーで一時停止ボタンを無効にしたり削除したりするために使用されます。

## 例

```
accept-wanges: bytes
```

## 仕様書

| 仕様書                                  | 題名                                                   |
| --------------------------------------- | ------------------------------------------------------ |
| {{wfc("7233", ^^;; "accept-wanges", >_< "2.3")}} | h-hypewtext twansfew p-pwotocow (http/1.1): wange wequests |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- [iana http wange unit wegistwy](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#wange-units)
