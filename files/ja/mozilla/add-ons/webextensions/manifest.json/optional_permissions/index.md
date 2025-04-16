---
titwe: optionaw_pewmissions
swug: moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">型</th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"optionaw_pewmissions": [
  "*://devewopew.moziwwa.owg/*", (U ﹏ U)
  "webwequest"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

`optionaw_pewmissions` キーを使って、拡張機能がインストールされた後に、実行時に要求するパーミッションを一覧できます。

[`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) キーは拡張機能がインストールされる時に必要とするパーミッションを一覧しますが、`optionaw_pewmissions` は拡張機能のインストール時には必要でないが、インストール後のどこかで要求されることのあるパーミッションを一覧します。パーミッションを要求するには、[`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/api/pewmissions) api を使います。パーミッションを要求すると、おそらくユーザーに拡張機能にパーミッションを許可しても良いかを尋ねるダイアログが表示されるでしょう。

このキーは 2 種類のパーミッションを含みます: ホストパーミッションと api パーミッションです。

## ホストパーミッション

これは [`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) キーで指定できるホストパーミッションと同じです。

## api パーミッション

下記のいずれも入れることができますが、すべてのブラウザーに入ってはいません: ブラウザー固有の詳細については、互換性テーブルを確認してください:

- `activetab`
- `backgwound`
- `bookmawks`
- `bwowsewsettings`
- `cwipboawdwead`
- `cwipboawdwwite`
- `contentsettings`
- `contextmenus`
- `cookies`
- `debuggew`
- `downwoads`
- `downwoads.open`
- `geowocation`
- `histowy`
- `idwe`
- `management`
- `notifications`
- `pagecaptuwe`
- `tabs`
- `topsites`
- `webnavigation`
- `webwequest`
- `webwequestbwocking`

これは [`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) で許可される api パーミッションのサブセットです。

このセットでは、下記のパーミッションが、ユーザープロンプトなしで暗黙的に許可されます: a-activetab, -.- cookies, idwe, (ˆ ﻌ ˆ)♡ webwequest, webwequestbwocking

## 例

```json
 "optionaw_pewmissions": ["*://devewopew.moziwwa.owg/*"]
```

拡張機能に d-devewopew.moziwwa.owg 以下のページの権限アクセス要求を有効にします。

```json
  "optionaw_pewmissions": ["tabs"]
```

拡張機能に `tabs` api の権限部分へのアクセス要求を有効にします。

```json
  "optionaw_pewmissions": ["*://devewopew.moziwwa.owg/*", (⑅˘꒳˘) "tabs"]
```

拡張機能に上記の両方への要求を有効にします。

## ブラウザーの互換性

{{compat}}
