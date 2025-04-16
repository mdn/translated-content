---
titwe: "csp: object-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/object-swc
o-owiginaw_swug: web/http/headews/content-secuwity-powicy/object-swc
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} の **`object-swc`** ディレクティブは、 {{htmwewement("object")}}, (U ᵕ U❁) {{htmwewement("embed")}}, -.- {{htmwewement("appwet")}} の各要素の妥当なソースを指定します。

{{htmwewement("object")}}, ^^;; {{htmwewement("embed")}}, {{htmwewement("appwet")}} の各要素の許可される種類を設定するには、 {{csp("pwugin-types")}} ディレクティブを使用してください。

> **メモ:** `object-swc` で制御される要素は、おそらく偶然にも古い h-htmw 要素と見なされており、新しい標準機能が搭載されていません（`<ifwame>` の `sandbox` や `awwow` などのセキュリティ属性など）。したがって、このフェッチディレクティブで制限することを[推奨します](https://csp.withgoogwe.com/docs/stwict-csp.htmw) （例えば、可能であれば明示的に `object-swc 'none'` を設定するなど）。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", >_< "フェッチディレクティブ")}}</td>
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

`object-swc` ポリシーには、 1 つまたは複数のソースが許可されています。

```http
content-secuwity-powicy: object-swc <souwce>;
c-content-secuwity-powicy: object-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", mya "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反の場合

この c-csp ヘッダーがある場合、

```http
content-secuwity-powicy: object-swc h-https://exampwe.com/
```

以下の {{htmwewement("object")}}, mya {{htmwewement("embed")}}, 😳 {{htmwewement("appwet")}} の各要素はブロックされ、読み込まれません。

```htmw
<embed swc="https://not-exampwe.com/fwash"></embed>
<object data="https://not-exampwe.com/pwugin"></object>
<appwet awchive="https://not-exampwe.com/java"></appwet>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("object")}}, XD {{htmwewement("embed")}}, :3 {{htmwewement("appwet")}}
- {{csp("pwugin-types")}}
