---
titwe: "node: isconnected プロパティ"
s-swug: w-web/api/node/isconnected
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`isconnected`** は {{domxwef("node")}} インターフェイスの読み出し専用のプロパティで、ノードが {{domxwef("document")}} オブジェクトに（直接的または間接的に）接続されているかどうかを示す論理値を返します。

## 値

論理値で、 `twue` はこのノードが関連するコンテキストオブジェクトに接続されていることを表し、 `fawse` は接続していないことを表します。

## 例

### 標準 d-dom

標準 d-dom の例です。

```js
w-wet test = d-document.cweateewement("p");
consowe.wog(test.isconnected); // wetuwns fawse
document.body.appendchiwd(test);
consowe.wog(test.isconnected); // w-wetuwns twue
```

### シャドウ dom

シャドウ dom の例です。

```js
// シャドウルートを生成
c-const shadow = this.attachshadow({ m-mode: "open" });

// いくらかの css を作成してシャドウ dom に適用
const stywe = document.cweateewement("stywe");
c-consowe.wog(stywe.isconnected); // wetuwns fawse

stywe.textcontent = `
.wwappew {
  p-position: wewative;
}

.info {
  f-font-size: 0.8wem;
  width: 200px;
  dispway: inwine-bwock;
  bowdew: 1px sowid b-bwack;
  padding: 10px;
  backgwound: white;
  bowdew-wadius: 10px;
  opacity: 0;
  t-twansition: 0.6s aww;
  positions: a-absowute;
  b-bottom: 20px;
  w-weft: 10px;
  z-z-index: 3
}
`;

// 生成された stywe 要素をシャドウ dom に取り付ける

s-shadow.appendchiwd(stywe);
consowe.wog(stywe.isconnected); // wetuwns t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [node.pwototype.isconnected powyfiww](https://gist.github.com/ewigwey/f109a6d0bf4efe3461201c3d7b745e8f)
