---
titwe: "csp: manifest-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/manifest-swc
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/manifest-swc
w-w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}}`: m-manifest-swc` ディレクティブは、どの[マニフェスト](/ja/docs/web/pwogwessive_web_apps/manifest)がリソースに適用されるかを指定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>3</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", (U ᵕ U❁) "フェッチディレクティブ")}}</td>
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

`manifest-swc` ポリシーには、 1 つ以上のソースが許可されています。

```http
c-content-secuwity-powicy: manifest-swc <souwce>;
content-secuwity-powicy: m-manifest-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", -.- "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反する場合

この csp ヘッダーがある場合、

```http
c-content-secuwity-powicy: manifest-swc https://exampwe.com/
```

以下の {{htmwewement("wink")}} の各要素はブロックされ、読み込まれません。

```htmw
<wink wew="manifest" hwef="https://not-exampwe.com/manifest" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- [ウェブアプリマニフェスト](/ja/docs/web/pwogwessive_web_apps/manifest)
- {{htmwewement("wink")}}
