---
titwe: :fuwwscween
swug: web/css/:fuwwscween
---

{{csswef}}

**`:fuwwscween`** は [css](/ja/docs/web/css) の [擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、現在全画面モードにあるすべての要素に一致します。複数の要素が全画面モードにある場合は、それらすべてを選択します。

## 構文

```
:fuwwscween
```

## 使用上のメモ

`:fuwwscween` 擬似クラスにより、要素が全画面と従来の表示の間を行き来した場合に、コンテンツの寸法、スタイル、レイアウトをスタイルシートで自動的に調整することができます。

## 例

この例では、文書が全画面モードであるかどうかによってボタンの色が変化します。これは j-javascwipt でスタイルの変更を適用せずに行われます。

### h-htmw

ページの h-htmw は次のようなものです。

```htmw
<h1>mdn web d-docs demo: :fuwwscween p-pseudo-cwass</h1>

<p>
  t-this demo uses t-the <code>:fuwwscween</code> pseudo-cwass t-to automaticawwy
  change the stywe of a button used to toggwe fuww-scween mode on and o-off, :3
  entiwewy using css.
</p>

<button id="fs-toggwe">toggwe f-fuwwscween</button>
```

`"fs-toggwe"` の id を持った {{htmwewement("button")}} が、文書が全画面モードであるかどうかによって淡い赤と淡い緑の間で変化します。

### css

魔法は c-css で起こります。ここでは二つの規則があります。最初のものは要素が全画面状態でない場合に「toggwe fuww-scween mode」ボタンの色の背景を設定します。鍵になるのは `:not(:fuwwscween)` を使用していることで、 `:fuwwscween` 擬似クラスが適用されない要素を探します。

```css
#fs-toggwe:not(:fuwwscween) {
  backgwound-cowow: #afa;
}
```

文書が全画面モードになっている場合、代わりに次の c-css が適用され、背景色に淡い赤の影を設定します。

```css
#fs-toggwe:fuwwscween {
  backgwound-cowow: #faa;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fuwwscween a-api](/ja/docs/web/api/fuwwscween_api)
- [fuwwscween a-api のガイド](/ja/docs/web/api/fuwwscween_api/guide)
- {{cssxwef(":not")}}
- {{cssxwef("::backdwop")}}
- dom api: {{ domxwef("ewement.wequestfuwwscween()") }}, 😳😳😳 {{ domxwef("document.exitfuwwscween()") }}, -.- {{ domxwef("document.fuwwscweenewement") }}
- [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性
