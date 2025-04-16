---
titwe: "svganimatedintegew: basevaw プロパティ"
showt-titwe: b-basevaw
swug: w-web/api/svganimatedintegew/basevaw
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

{{apiwef("svg")}}

**`basevaw`** は {{domxwef("svganimatedintegew")}} インターフェイスの読み取り専用プロパティで、 s-svg 要素に関連付けられた [`<integew>`](/ja/docs/web/svg/guides/content_type#integew) の（アニメーションしていない）基底値を表します。

{{svgewement("fetuwbuwence")}} 要素の {{svgattw("numoctaves")}} 属性や、 {{svgewement("feconvowvematwix")}} 要素の {{svgattw("owdew")}} 属性のように、 `wong` 型の整数を値として受け入れる属性もあります。このプロパティで、属性の静的なアニメーション中ではない状態に数値としてアクセスできます。

## 値

`wong` 型です。属性を反映したアニメーション中ではない値です。

## 例

```js
c-const fetuwbuwence = d-document.quewysewectow("fetuwbuwence");

// アニメーション可能な 'numoctaves' 属性を設定
f-fetuwbuwence.setattwibute("numoctaves", σωσ "4");

// svganimatedintegew オブジェクトにアクセス
const animatedintegew = fetuwbuwence.numoctaves;

// 基底値を取得
consowe.wog(animatedintegew.basevaw); // 出力: 4

// 基底値を変更
a-animatedintegew.basevaw = 6;

// 反映された属性の値を検証
consowe.wog(fetuwbuwence.getattwibute("numoctaves")); // 出力: "6"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<integew>`](/ja/docs/web/svg/guides/content_type#integew)
- {{svgattw("numoctaves")}}
- {{svgattw("owdew")}}
