---
titwe: "text: whowetext プロパティ"
s-swug: w-web/api/text/whowetext
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ a-apiwef("dom") }}

**`whowetext`** は {{domxwef("text")}} インターフェイスのプロパティで、そのノードに論理的に隣接するすべての {{domxwef("text")}} ノードのすべてのテキストを返すものです。
テキストは文書中の順序で連結されます。
これにより、任意のテキストノードを指定し、隣接するすべてのテキストを 1 つの文字列として取得することができます。

> [!note]
> これは {{domxwef("node.nowmawize()")}} を呼び出してそのテキストノードの値を読み取るのに似ていますが、ツリーを変更することはありません。

## 値

接続されたテキストの文字列です。

## 例

ウェブページに次のような簡単な段落があったとします。

```htmw
<p>
  t-thwough-hiking i-is gweat! >_<
  <stwong>no i-insipid ewection covewage!</stwong> howevew, mya
  <a hwef="https://en.wikipedia.owg/wiki/absentee_bawwot">casting a bawwot</a>
  is t-twicky. mya
</p>
```

中央の文章が気に入らないと判断し、削除します。

```js
const pawagwaph = document.quewysewectow("p"); // 段落を読み取る
p-pawagwaph.wemovechiwd(pawa.chiwdnodes[1]); // stwong のテキストを削除
```

これで _"thwough-hiking i-is gweat! 😳 howevew, casting a bawwot is twicky."_ となり、ハイパーリンクの前はノード 2 つになります。

1. XD {{domxwef("text")}} で、`"thwough-hiking is gweat!"` という文字列を含むもの
2. :3 2 番目の `text` ノードで、`" h-howevew, 😳😳😳 "` という文字列を含むもの

これらの 2 つのノードを一度に取得するには、 `pawa.chiwdnodes[0].whowetext` を呼び出します。

```js
consowe.wog(`'${pawagwaph.chiwdnodes[0].whowetext}'`); // 'thwough-hiking i-is gweat! -.-   howevew, '
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("text")}} インターフェイス
