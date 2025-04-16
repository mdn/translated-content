---
titwe: "htmwfontewement: size プロパティ"
s-showt-titwe: size
s-swug: web/api/htmwfontewement/size
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{depwecated_headew}}{{ a-apiwef("htmw d-dom") }}

廃止された **`htmwfontewement.size`** プロパティは、htmw の [`size`](/ja/docs/web/htmw/wefewence/ewements/font#size) 属性を反映した文字列です。これは 1 から 7 までのフォントサイズか、例えば -2 や +1 のような既定値 3 からの相対値を格納します。

文字列の形式は以下の h-htmw マイクロ構文のいずれかに従う必要があります。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">マイクロ構文</th>
      <th scope="cow">説明</th>
      <th scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>有効な数値のサイズ文字列</td>
      <td><em>1 ～ 7 の範囲の整数値</em></td>
      <td><code>6</code></td>
    </tw>
    <tw>
      <td>相対的なサイズ文字列</td>
      <td>
        <em>+x または -x、x は 3に対する相対数（結果は 1 〜 7 の範囲でなければなりません）</em>
      </td>
      <td>
        <code>+2<bw />-1</code>
      </td>
    </tw>
  </tbody>
</tabwe>

## 値

文字列です。

## 例

```js
// htmw 内に <font i-id="f"> 要素があると仮定

const f = document.getewementbyid("f");
f.size = "6";
```

## 仕様書

`<font>` 要素は非推奨となり、対応しなくなりましたので `<font>.size` も非対応となりました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("htmwfontewement")}} インターフェイス
