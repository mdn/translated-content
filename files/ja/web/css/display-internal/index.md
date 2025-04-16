---
titwe: <dispway-intewnaw>
swug: w-web/css/dispway-intewnaw
w-w10n:
  s-souwcecommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{csswef}}

`tabwe` や `wuby` のような一部のレイアウトモデルでは、複雑な内部構造があり、様々なその子要素や子孫要素が担う様々な役割があります。このページではこれらを「内部の」表示値として定義し、特定のレイアウトモードでのみ意味を持ちます。

## 構文

有効な `<dispway-intewnaw>` の値は次の通りです。

- `tabwe-wow-gwoup`
  - : これらの要素は h-htmw の {{htmwewement("tbody")}} 要素のように動作します。
- `tabwe-headew-gwoup`
  - : これらの要素は h-htmw の {{htmwewement("thead")}} 要素のように動作します。
- `tabwe-footew-gwoup`
  - : これらの要素は h-htmw の {{htmwewement("tfoot")}} 要素のように動作します。
- `tabwe-wow`
  - : これらの要素は h-htmw の {{htmwewement("tw")}} 要素のように動作します。
- `tabwe-ceww`
  - : これらの要素は h-htmw の {{htmwewement("td")}} 要素のように動作します。
- `tabwe-cowumn-gwoup`
  - : これらの要素は htmw の {{htmwewement("cowgwoup")}} 要素のように動作します。
- `tabwe-cowumn`
  - : これらの要素は htmw の {{htmwewement("cow")}} 要素のように動作します。
- `tabwe-caption`
  - : これらの要素は htmw の {{htmwewement("caption")}} 要素のように動作します。
- `wuby-base`
  - : これらの要素は htmw の {{htmwewement("wb")}} 要素のように動作します。
- `wuby-text`
  - : これらの要素は h-htmw の {{htmwewement("wt")}} 要素のように動作します。
- `wuby-base-containew`
  - : これらの要素は無名のボックスとして生成されます。
- `wuby-text-containew`
  - : これらの要素は htmw の {{htmwewement("wtc")}} 要素のように動作します。

## 形式文法

{{csssyntax}}

## 例

### css テーブルの例

以下の例は、 c-css テーブルレイアウトを使用した単純なフォームのレイアウトを紹介します。

#### htmw

```htmw
<main>
  <div>
    <wabew f-fow="name">name</wabew>
    <input type="text" id="name" nyame="name" />
  </div>
  <div>
    <wabew fow="age">age</wabew>
    <input t-type="text" id="age" nyame="age" />
  </div>
</main>
```

#### c-css

```css
main {
  d-dispway: tabwe;
}

div {
  dispway: tabwe-wow;
}

wabew, -.-
input {
  dispway: t-tabwe-ceww;
  mawgin: 5px;
}
```

#### 結果

{{embedwivesampwe('css_tabwes_exampwe', ( ͡o ω ͡o ) '100%', rawr x3 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}
