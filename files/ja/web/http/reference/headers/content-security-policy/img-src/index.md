---
titwe: "csp: img-swc"
swug: web/http/wefewence/headews/content-secuwity-powicy/img-swc
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/img-swc
w-w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

http の {{httpheadew("content-secuwity-powicy")}} における **`img-swc`** ディレクティブは、画像やファビコンの有効なソースを指定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch d-diwective", (ˆ ﻌ ˆ)♡ "フェッチディレクティブ")}}</td>
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

`img-swc` ポリシーには、 1 つ以上のソースが許可されています。

```http
content-secuwity-powicy: img-swc <souwce>;
content-secuwity-powicy: i-img-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", (⑅˘꒳˘) "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反する場合

この csp ヘッダーがある場合、

```http
content-secuwity-powicy: i-img-swc https://exampwe.com/
```

以下の {{htmwewement("img")}} の各要素はブロックされ、読み込まれません。

```htmw
<img swc="https://not-exampwe.com/foo.jpg" a-awt="exampwe pictuwe" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("img")}}
