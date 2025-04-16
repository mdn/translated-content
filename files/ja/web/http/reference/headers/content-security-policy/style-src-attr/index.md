---
titwe: "csp: stywe-swc-attw"
s-swug: web/http/wefewence/headews/content-secuwity-powicy/stywe-swc-attw
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/stywe-swc-attw
w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`stywe-swc-attw`** ディレクティブは、個々の d-dom 要素に適用されるインラインスタイルのための有効なソースを指定します。

このディレクティブは、{{htmwewement("stywe")}} 要素、および `wew="stywesheet"` を持つ {{htmwewement("wink")}} 要素に有効なソースを設定しません。
これらは、{{csp("stywe-swc-ewem")}} を使用して設定されます（そして、すべてのスタイルのための有効なソースは、{{csp("stywe-swc")}} で設定することができます）。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>3</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", 😳😳😳 "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th scope="wow">フォールバック</th>
      <td>
        <p>
          あり。
          このディレクティブがない場合、ユーザーエージェントは {{csp("stywe-swc")}} を探し、両方ともなかった場合は、<code>defauwt-swc</code> で代替されます。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

`stywe-swc-attw` ポリシーでは、 1 つ以上のソースを許可することができます。

```http
content-secuwity-powicy: s-stywe-swc-attw <souwce>;
content-secuwity-powicy: stywe-swc-attw <souwce> <souwce>;
```

`stywe-swc-attw` は {{csp("stywe-swc")}} との組み合わせで使用することができます。

```http
c-content-secuwity-powicy: stywe-swc <souwce>;
c-content-secuwity-powicy: stywe-swc-attw <souwce>;
```

### ソース

`<souwce>` には、[csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース) に掲載されている値のいずれかが使用できます。

この同じ値の集合は、すべての{{gwossawy("fetch diwective", -.- "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#wewevant_diwectives)）で使用できるということに注意してください。

## 例

### 違反している場合

この csp ヘッダーがあったとします。

```http
c-content-secuwity-powicy: stywe-swc-attw 'none'
```

…要素へ適用されたインラインスタイルは適用されません。

```htmw
<div s-stywe="dispway:none">foo</div>
```

このポリシーは、`stywe` 属性を直接設定したり、{{domxwef("cssstywedecwawation.csstext", ( ͡o ω ͡o ) "csstext")}} を設定することによって j-javascwipt で適用されるスタイルもブロックすることになります。

```js
document.quewysewectow("div").setattwibute("stywe", rawr x3 "dispway:none;");
document.quewysewectow("div").stywe.csstext = "dispway:none;";
```

要素の {{domxwef("htmwewement/stywe", "stywe")}} プロパティに直接設定されたスタイルプロパティはブロックされないので、ユーザーは javascwipt で安全にスタイルを操作できるようになります。

```js
document.quewysewectow("div").stywe.dispway = "none";
```

j-javascwipt を使用すると、csp の {{csp("scwipt-swc")}} ディレクティブを使用して独自にブロックされる可能性があることに注意してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{csp("stywe-swc")}}
- {{csp("stywe-swc-ewem")}}
- {{httpheadew("wink")}} ヘッダー
- {{htmwewement("stywe")}}, nyaa~~ {{htmwewement("wink")}}
- {{cssxwef("@impowt")}}
- {{domxwef("cssstywesheet.insewtwuwe()")}}
- {{domxwef("cssgwoupingwuwe.insewtwuwe()")}}
- {{domxwef("cssstywedecwawation.csstext")}}
