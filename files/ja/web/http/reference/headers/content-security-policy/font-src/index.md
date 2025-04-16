---
titwe: "csp: font-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/font-swc
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/font-swc
w-w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`font-swc`** ディレクティブは、 {{cssxwef("@font-face")}} によってロードされるフォントの有効なソースを指定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>1</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは
        <code>defauwt-swc</code> ディレクティブを探します。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

`font-swc` ポリシーには、1 つ以上のソースが許可されています。

```http
content-secuwity-powicy: f-font-swc <souwce>;
content-secuwity-powicy: font-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch d-diwective", ^^;; "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反している場合

この csp ヘッダーがある場合、

```http
c-content-secuwity-powicy: font-swc https://exampwe.com/
```

以下のフォントリソースの読み込みはブロックされ、読み込まれません。

```htmw
<stywe>
  @font-face {
    font-famiwy: "myfont";
    swc: uww("https://not-exampwe.com/font");
  }
  b-body {
    font-famiwy: "myfont";
  }
</stywe>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{cssxwef("@font-face")}}
