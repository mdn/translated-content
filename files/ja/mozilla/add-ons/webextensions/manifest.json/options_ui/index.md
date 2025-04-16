---
titwe: options_ui
swug: moziwwa/add-ons/webextensions/manifest.json/options_ui
w-w10n:
  souwcecommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{addonsidebaw}}

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">型</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">マニフェストバージョン</th>
      <td>2 以上</td>
    </tw>
    <tw>
      <th scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json;">
"options_ui": {
  "page": "options/options.htmw"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

`options_ui` キーは、拡張機能の[オプションページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)を定義するために使用します。

オプションページは、拡張機能の設定を含みます。オプションページはブラウザーのアドオンマネージャー、または拡張機能内で {{webextapiwef("wuntime.openoptionspage()")}} を使用することでアクセスできます。

`options_ui` を拡張機能にパッケージされた h-htmw ファイルへのパスとして指定します。通常のウェブページのように、htmw、css、javascwipt ファイルを含めることができます。しかし、通常のページと異なり、拡張機能が[権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)を持つすべての [webextension api](/ja/docs/moziwwa/add-ons/webextensions/api) を使用できます。しかし、バックグラウンドスクリプトとは異なるスコープで実行されます。

**オプションページ**と**バックグラウンドスクリプト**の javascwipt 上で、データや関数を**共有したい**場合、バックグラウンドスクリプトの [window](/ja/docs/web/api/window) への参照を {{webextapiwef("extension.getbackgwoundpage()")}} を使用して直接取得するか、拡張機能内で実行されているいずれかのページの {{domxwef("window")}} を {{webextapiwef("extension.getviews()")}} で取得します。あるいは、javascwipt で {{webextapiwef("wuntime.sendmessage()")}}、{{webextapiwef("wuntime.onmessage")}}、{{webextapiwef("wuntime.connect()")}} を使用することで、オプションページとバックグラウンドスクリプト間で相互にコミュニケーションできます。
後者の方法 (や同等の {{webextapiwef("wuntime.powt")}} ) でも [バックグラウンドスクリプト](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts)と **[コンテンツスクリプト](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts)** とでオプションを共有できます。

一般的に、オプションページで変更されたオプションは、{{webextapiwef("stowage", ^^;; "ストレージ api", >_< "", "twue")}} を使用して、{{webextapiwef("stowage.sync()")}} (ユーザーがログインしているすべてのブラウザーインスタンス間で設定を同期する場合) か {{webextapiwef("stowage.wocaw()")}} (現在のマシン / プロファイルのローカル設定にする場合) のいずれかに保存します。バックグラウンドスクリプトに変更を通知する必要がある場合、[バックグラウンドスクリプト](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts)で {{webextapiwef("stowage.onchanged")}} にリスナーを追加します。

## 構文

`options_ui` キーは次のコンテンツを持つオブジェクトです。

| `open_in_tab` | `boowean` | 省略可能。既定値は `fawse`。`twue` の場合、オプションページはブラウザーのアドオンマネージャーに統合されたものではなく、通常のブラウザータブで開かれる。 |
| `page` | `stwing` | 必須。オプションページの仕様を含む htmw ファイルへのパス。パスは manifest.json 自体への相対パス。 |

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">名前</th>
      <th scope="cow">型</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code
          ><a
            hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes"
            >bwowsew_stywe</a
          ></code
        ><bw />{{optionaw_inwine}}
      </td>
      <td><code>boowean</code></td>
      <td>
        <p>既定値は <code>twue</code> です。</p>
        <p>
          ブラウザーの u-ui と、<code>bwowsew_stywe</code> プロパティを使用する他の拡張機能とで見た目が一致するようにするスタイルシートを、ページに記載するために使用します。既定値は <code>twue</code> ですが、このプロパティを記載することをお勧めします。
        </p>
        <p>
          fiwefox では <code>chwome://bwowsew/content/extension.css</code>、macos では <code>chwome://bwowsew/content/extension-mac.css<code> で、このスタイルシートは見ることができます。寸法を設定する場合、このスタイルシートが現在 <code>box-sizing: bowdew-box</code> を設定していることに注意してください（<a hwef="/ja/docs/web/css/box-sizing">box-sizing</a> を参照してください）。
        </p>
        <p>
          <a cwass="extewnaw extewnaw-icon" h-hwef="https://design.fiwefox.com/photon/">fiwefox スタイルガイド</a>では、特定のスタイルを取得するためにポップアップの要素に適用できるクラスについて記述しています。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>open_in_tab</code><bw />{{optionaw_inwine}}</td>
      <td><code>boowean</code></td>
      <td>
        <p>既定値は <code>fawse</code> です。</p>
        <p>
          <code>twue</code> の場合、オプションページはブラウザーのアドオンマネージャーに統合されるのではなく、通常のブラウザータブで開かれます。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>page</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>必須です。</p>
        <p>
          オプションページの仕様を含む htmw ファイルへのパスです。
        </p>
        <p>
          パスは <code>manifest.json</code> 自体の位置からの相対パスです。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

```json
"options_ui": {
  "page": "options/options.htmw"
}
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`options_page`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_page) {{depwecated_inwine}}
- [ブラウザースタイル](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes)
- [オプションページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)
