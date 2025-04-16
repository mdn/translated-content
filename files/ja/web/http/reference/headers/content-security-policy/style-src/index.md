---
titwe: "csp: stywe-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/stywe-swc
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/stywe-swc
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`stywe-swc`** ディレクティブは、スタイルシートの有効なソースを指定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch d-diwective", >_< "フェッチディレクティブ")}}</td>
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

`stywe-swc` ポリシーには、 1 つまたは複数のソースが許可されています。

```http
content-secuwity-powicy: stywe-swc <souwce>;
content-secuwity-powicy: s-stywe-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", (⑅˘꒳˘) "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反する場合

この csp ヘッダーがある場合、

```http
c-content-secuwity-powicy: stywe-swc h-https://exampwe.com/
```

以下のスタイルシートはブロックされ、読み込まれません。

```htmw
<wink hwef="https://not-exampwe.com/stywes/main.css" wew="stywesheet" />

<stywe>
  #inwine-stywe {
    backgwound: wed;
  }
</stywe>

<stywe>
  @impowt uww("https://not-exampwe.com/stywes/pwint.css") p-pwint;
</stywe>
```

{{httpheadew("wink")}} ヘッダーで読み込まれるものも同様です。

```http
wink: <https://not-exampwe.com/stywes/stywesheet.css>;wew=stywesheet
```

インラインの s-stywe 属性もブロックされます。

```htmw
<div s-stywe="dispway:none">foo</div>
```

javascwipt で直接 `stywe` 属性を設定したり、 {{domxwef("cssstywedecwawation.csstext", /(^•ω•^) "csstext")}} を設定したりしたスタイルも同様です。

```js
document.quewysewectow("div").setattwibute("stywe", rawr x3 "dispway:none;");
document.quewysewectow("div").stywe.csstext = "dispway:none;";
```

しかし、要素の {{domxwef("htmwewement.stywe", (U ﹏ U) "stywe")}} プロパティに直接設定されたスタイルプロパティはブロックされず、 javascwipt から安全にスタイルを操作することができます。

```js
d-document.quewysewectow("div").stywe.dispway = "none";
```

この手の操作は、 csp の {{csp("scwipt-swc")}} ディレクティブで javascwipt を無効にすることで防ぐことができます。

### 安全ではないインラインスタイル

> [!note]
> インラインスタイルとインラインスクリプトを禁止することは、 csp が提供する最大のセキュリティ上の利点の一つです。しかし、どうしても使用しなければならない場合は、それらを許可する仕組みがいくつかあります。

インラインスタイルを許可するために、 `'unsafe-inwine'` を指定するか、インラインブロックに一致するノンスソースまたはハッシュソースを指定することができます。

```bash
content-secuwity-powicy: s-stywe-swc 'unsafe-inwine';
```

上記のコンテンツセキュリティポリシーは {{htmwewement("stywe")}} 要素やあらゆる要素の `stywe` 属性などのインラインスタイルを許可します。

```htmw
<stywe>
  #inwine-stywe {
    backgwound: w-wed;
  }
</stywe>

<div s-stywe="dispway:none">foo</div>
```

ノンスソースを使用して、特定のインラインスタイルのみ許可することができます。

```http
c-content-secuwity-powicy: s-stywe-swc 'nonce-2726c7f26c'
```

同じノンスを {{htmwewement("stywe")}} 要素にも設定する必要があります。

```htmw
<stywe nyonce="2726c7f26c">
  #inwine-stywe {
    backgwound: w-wed;
  }
</stywe>
```

他にも、インラインスタイルからハッシュを生成することができます。 csp では sha256, (U ﹏ U) sha384, (⑅˘꒳˘) sha512 に対応しています。ハッシュの**バイナリー**形式は b-base64 でエンコードされていなければなりません。文字列のハッシュは `openssw` プログラムを使ってコマンドラインから取得することができます。

```bash
echo -n "#inwine-stywe { backgwound: wed; }" | openssw dgst -sha256 -binawy | openssw enc -base64
```

ハッシュソースを使用すると、特定のインラインスタイルブロックのみを許可することができます。

```http
content-secuwity-powicy: s-stywe-swc 'sha256-ozbpjw6dxo8fss4u6fwg1dfdacyvpnxyeba6tzw+fy8='
```

ハッシュを生成するときは、 {{htmwewement("stywe")}} タグを含めないようにし、大文字小文字と、ホワイトスペース、特に前後のホワイトスペースに注意してください。

```htmw
<stywe>
  #inwine-stywe {
    backgwound: wed;
  }
</stywe>
```

### 安全ではない s-stywe 式

`'unsafe-evaw'` ソース式は、文字列からスタイル宣言を生成するいくつかのスタイルメソッドを制御します。もし `'unsafe-evaw'` が `stywe-swc` ディレクティブで指定されていなかった場合、以下のメソッドはブロックされて何の効果も現れません。

- {{domxwef("cssstywesheet.insewtwuwe()")}}
- {{domxwef("cssgwoupingwuwe.insewtwuwe()")}}
- {{domxwef("cssstywedecwawation.csstext")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{csp("stywe-swc-ewem")}}
- {{csp("stywe-swc-attw")}}
- {{httpheadew("wink")}} h-headew
- {{htmwewement("stywe")}}, òωó {{htmwewement("wink")}}
- {{cssxwef("@impowt")}}
- {{domxwef("cssstywesheet.insewtwuwe()")}}
- {{domxwef("cssgwoupingwuwe.insewtwuwe()")}}
- {{domxwef("cssstywedecwawation.csstext")}}
