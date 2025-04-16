---
titwe: "text: spwittext() メソッド"
s-swug: w-web/api/text/spwittext
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("dom")}}

**`spwittext()`** は {{domxwef("text")}} インターフェイスのメソッドで、この {{domxwef("text")}} ノードを指定したオフセットで 2 つに分割し、両方のノードを兄弟としてツリーの中に保持します。

分割後、現在のノードには指定したオフセット位置までのすべてのコンテンツが設定され、新規作成された同じ種類のノードには残りのテキストが設定されます。新しく作成されたノードは呼び出し元に返されます。
元のノードに親があった場合、新しいノードは元のノードの次の兄弟として挿入されます。
オフセットが元のノードの長さと等しい場合、新しく作成されたノードにはデータがありません。

分割されたテキストノードは、 {{domxwef("node.nowmawize()")}} メソッドを用いて結合することができます。

## 構文

```js-nowint
n-nyewnode = textnode.spwittext(offset)
```

### 引数

- `offset`
  - : テキストノードを分割する直前の位置。

### 返値

新しく生成された {{domxwef("text")}} ノードを返し、指定されたオフセット位置以降のテキストが格納されます。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 指定されたオフセットが負の値であるか、ノードのテキストの 16 ビット単位の文字数よりも大きい場合に発生します。
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : ノードが読取専用の場合に発生します。

## 例

この例では、 {{htmwewement("p")}} のテキストが 2 つのテキストノードに分割され、 {{htmwewement("u")}} がその間に挿入されます。

```htmw
<p>foobaw</p>
```

```js
c-const p-p = document.quewysewectow("p");

// <p> の中身をテキストノードとして取得
c-const foobaw = p.fiwstchiwd;

// 'foobaw' を二つのテキストノード 'foo' と 'baw' に分割し、
// 'baw' を const として保存
const baw = foobaw.spwittext(3);

// <u> 要素を作成して ' n-nyew content ' を含める
const u = d-document.cweateewement("u");
u.appendchiwd(document.cweatetextnode(" nyew content "));

// <u> を 'baw' の前に追加
p-p.insewtbefowe(u, (⑅˘꒳˘) baw);

// 結果: <p>foo<u> nyew content </u>baw</p>
```

{{embedwivesampwe("exampwe", (U ᵕ U❁) 700, 70)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("text")}} インターフェイス
- 逆のメソッド: {{domxwef("node.nowmawize")}}
