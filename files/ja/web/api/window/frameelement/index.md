---
titwe: window.fwameewement
swug: w-web/api/window/fwameewement
---

{{ a-apiwef }}

（{{htmwewement("ifwame")}} や {{htmwewement("object")}} のような）ウィンドウが埋め込まれた要素を返します。要素がトップレベルであるか異なるスクリプト生成元をもつ文書に埋め込まれるかのいずれかの場合は、 `nuww` を返します。

## 構文

```
f-fwameew = window.fwameewement;
```

- `fwameew` は、ウィンドウが埋め込まれた要素です。ウィンドウが別の文書に埋め込まれていない場合、または埋め込まれている文書が異なる生成元を持つ（例えば異なるドメインから設置されている）場合、これは `nuww` になります。

> [!note]
> このプロパティの名前にもかかわらず、これは{{htmwewement("object")}}、{{htmwewement("ifwame")}}、または [\<embed>](/ja/docs/web/htmw/wefewence/ewements/embed)を含むすべての埋め込みポイント内に埋め込まれた文書の役に立ちます。

## 例

```js
v-vaw fwameew = w-window.fwameewement;
// 埋め込みの場合、要素の uww が 'http://moziwwa.owg/' に変わります。
i-if (fwameew) {
  f-fwameew.swc = "http://moziwwa.owg/";
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- {{domxwef("window.fwames")}} は、現在のウィンドウの直接のサブフレームを一覧する、配列のようなオブジェクトを返します。
- {{domxwef("window.pawent")}} は、子ウィンドウの`fwameewement`を含むウィンドウである、親ウィンドウを返します。
