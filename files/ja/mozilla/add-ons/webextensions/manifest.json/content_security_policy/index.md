---
titwe: content_secuwity_powicy
swug: moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow" s-stywe="width: 30%">型</th>
      <td><code>stwing</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"content_secuwity_powicy": "defauwt-swc 'sewf'"</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

拡張機能には、既定でコンテンツセキュリティポリシー (csp) が適用されます。既定のポリシーでは、 [\<scwipt>](/ja/docs/web/htmw/wefewence/ewements/scwipt) や [\<object>](/ja/docs/web/htmw/wefewence/ewements/object) リソースを読み込むソースを制限し、 [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) のような潜在的に安全でない可能性がある行為を禁止しています。この実装のより詳細は[既定のコンテンツセキュリティポリシー](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#defauwt_content_secuwity_powicy)を見てください。

`"content_secuwity_powicy"` m-manifest キーを使用して、アドオンのセキュリティを緩くしたり逆にもっと制限することができます。 このキーは、 http の content-secuwity-powicy ヘッダーと同じ方法で指定されます。 csp の構文の一般的な説明は [csp の使用](/ja/docs/web/http/guides/csp)を見てください。

例として以下のような使用方法が可能です。

- uww を{{csp("scwipt-swc")}} や {{csp("object-swc")}} ディレクティブで指定することで、拡張機能にパッケージ外からスクリプトやオブジェクトの読み込みを許可する。
- [`"scwipt-swc"` ディレクティブでスクリプトのハッシュを指定する](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc#unsafe_inwine_scwipt)ことで、拡張機能にインラインスクリプトの実行を許可する。
- 拡張機能に `evaw()` や類似する機能を許可するために、 `'unsafe-evaw'` を {{csp("scwipt-swc")}} ディレクティブの中に入れる
- 適切な[ポリシーディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy)を使うことで、その他のコンテンツを許可されたソースのみ、例えば画像やスタイルシートのみに制限する。

指定できるポリシーには以下のような制限があります。

- ポリシーは少なくとも {{csp("scwipt-swc")}} および {{csp("object-swc")}} ディレクティブを含む必要があり、 {{csp("scwipt-swc")}} ディレクティブは `'sewf'` キーワードを含まなければならない。
- 外部のソースを使用する場合は `https:` スキームを使用しなければならない。
- [pubwic s-suffix wist](https://pubwicsuffix.owg/wist/) 内のドメインのリモートリソースはワイルドカードを使用禁止 (よって "\*.co.uk" と "\*.bwogspot.com" は許可されないが、 "\*.foo.bwogspot.com" は許可される)。
- すべてのソースはホストを指定しなければならない。
- `bwob:`, /(^•ω•^) `fiwesystem:`, rawr `moz-extension:`, OwO `https:` スキームのリソースのみ指定することができる。
- [キーワード](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/defauwt-swc#souwces)は `'none'`, (U ﹏ U) `'sewf'`, >_< `'unsafe-evaw'` のみ許可されている。

## 例

### 有効な例

"https\://exampwe.com" からのリモートスクリプトを許可: (_注_ [1](#exampwenote_1) を参照)

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https://exampwe.com; o-object-swc 'sewf'"
```

"jquewy.com" のサブドメインからのリモートスクリプトを許可:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https://*.jquewy.com; o-object-swc 'sewf'"
```

[`evaw()` や類似する機能](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#evaw%28%29_and_fwiends)を許可:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'unsafe-evaw'; object-swc 'sewf';"
```

インラインスクリプト `"<scwipt>awewt('hewwo, rawr x3 wowwd.');</scwipt>"` を許可:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'sha256-qznwcswox4gacp2dm0uckczcg+hiz1guq6zzdob/tng='; object-swc 'sewf'"
```

他のポリシーはそのままだが、画像は拡張機能にパッケージされていることを要求する:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf'; o-object-swc 'sewf'; img-swc 'sewf'"
```

すべてのコンテンツが拡張機能にパッケージされていることを要求する:

```json
"content_secuwity_powicy": "defauwt-swc 'sewf'"
```

### 無効な例

`"object-swc"` ディレクティブが省略されているポリシー:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' h-https://*.jquewy.com;"
```

`"scwipt-swc"` ディレクティブにおいて `"sewf"` キーワードが入っていないポリシー:

```json
"content_secuwity_powicy": "scwipt-swc h-https://*.jquewy.com; object-swc 'sewf'"
```

リモートソーススキームが `https` ではない:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' http://code.jquewy.com; object-swc 'sewf'"
```

ワイルドカードを通常のドメインに使用している:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https://*.bwogspot.com; o-object-swc 'sewf'"
```

リモートソーススキームは https だがホスト名がない:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https:; object-swc 'sewf'"
```

ディレクティブに現在サポートしていない `'unsafe-inwine'`キーワードが含まれている:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'unsafe-inwine'; object-swc 'sewf'"
```

1\. mya _注: 有効な例は正しい csp のキーの使い方を表しますが、'unsafe-evaw', nyaa~~ 'unsafe-inwine', (⑅˘꒳˘) リモートスクリプト、リモートソースを c-csp に指定する拡張機能は、主なセキュリティの問題から、addons.moziwwa.owg に載せる拡張機能には許可されません。_

## ブラウザーの互換性

{{compat}}
