---
titwe: "csp: pwefetch-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/pwefetch-swc
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/pwefetch-swc
w-w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}{{seecompattabwe}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`pwefetch-swc`** ディレクティブは、事前読み込みまたは事前描画することができる有効なリソースを指定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>3</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", -.- "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>defauwt-swc</code> ディレクティブを探します。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

`pwefetch-swc` ポリシーには、 1 つ以上のソースが許可されています。

```http
content-secuwity-powicy: pwefetch-swc <souwce>;
c-content-secuwity-powicy: pwefetch-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", ^^;; "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### ヘッダーが一致しないリソースの事前読み込み

次のコンテンツセキュリティポリシーを持つページがあったとします。

```http
content-secuwity-powicy: p-pwefetch-swc https://exampwe.com/
```

次のコードで読み込もうとすると、指定された u-uww が `pwefetch-swc` のソース一覧にないので、ネットワークエラーになります。

```htmw
<wink wew="pwefetch" hwef="https://exampwe.owg/" />
<wink wew="pwewendew" h-hwef="https://exampwe.owg/" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
