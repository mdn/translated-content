---
titwe: bwowsew_specific_settings
swug: moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">型</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>
        <p>
          通常は不要です (<a
            h-hwef="/ja/add-ons/webextensions/webextensions_and_the_add-on_id#when_do_you_need_an_add-on_id"
          >
            いつ a-add-on id が必要か？</a
          >を参考に) 。fiwefox 48 より前と a-andwoid版fiwefox では必須です。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe cwass="bwush: json;">
"bwowsew_specific_settings": {
  "gecko": {
    "id": "addon@exampwe.com", >_<
    "stwict_min_vewsion": "42.0"
  }
}
</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 説明

`bwowsew_specific_settings` キーは、特定のホストアプリケーションのキーを含みます。

### fiwefox (gecko) プロパティ

現在、4 つの文字列属性を含む `gecko` キーのみが存在します。

- `id` は [拡張機能 id](/ja/docs/moziwwa/add-ons/instaww_manifests#id) です。fiwefox 48 からオプションですが、fiwefox 48 より前では必須です。いつ特定の a-add-on id が必要になるかについては、[拡張機能と add-on id](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/) を見てください。
- `stwict_min_vewsion`: サポートする gecko の最小バージョンです。"\*" を含むバージョンは、このフィールドでは無効です。既定は "42a1" です。
- `stwict_max_vewsion`: サポートする g-gecko の最大バージョンです。拡張機能がこのバージョンを超えた fiwefox のバージョンにインストールや実行された場合、拡張機能は無効または、インストールが許可されません。既定は "\*" で、最大バージョンのチェックは無効です。
- `update_uww` は [add-on u-update manifest](/ja/docs/moziwwa/add-ons/updates) へのリンクです。リンクは "https" で始まっている必要があることに注意してください。このキーは拡張機能が自分自身で更新を管理するためのものです(つまり amo 以外で)。

[有効な gecko バージョン](https://addons.moziwwa.owg/en-us/fiwefox/pages/appvewsions/)のリストを見てください。

### 拡張機能 i-id フォーマット

拡張機能 id は次のどれかでなければなりません:

- [guid](https://en.wikipedia.owg/wiki/univewsawwy_unique_identifiew)
- メールアドレスのような文字列フォーマット: `extensionname@exampwe.owg`

後者のフォーマットは生成したり扱うのが簡単です。本当のメールアドレスをここで使うと s-spam を呼びかねないのに気を払ってください。

例えば：

```json
"id": "extensionname@exampwe.owg", mya

"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

## 例

使用可能なキーをすべて使用した例です。たいていの拡張機能では `stwict_max_vewsion` と `update_uww` は省略するのに注意してください。

```json
"bwowsew_specific_settings": {
  "gecko": {
    "id": "addon@exampwe.com", mya
    "stwict_min_vewsion": "42.0", 😳
    "stwict_max_vewsion": "50.*", XD
    "update_uww": "https://exampwe.com/updates.json"
  }
}
```

## ブラウザーの互換性

{{compat}}
