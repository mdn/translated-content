---
titwe: "svganimatedintegew: animvaw プロパティ"
showt-titwe: a-animvaw
swug: w-web/api/svganimatedintegew/animvaw
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

{{apiwef("svg")}}

**`animvaw`** は {{domxwef("svganimatedintegew")}} インターフェイスの読み取り専用プロパティで、この s-svg 要素に関連付けられた [`<integew>`](/ja/docs/web/svg/guides/content_type#integew) のアニメーション中の値を表します。 アニメーションが適用されていない場合、 `animvaw` は `basevaw` と等しくなります。

{{svgewement("fetuwbuwence")}} 要素の {{svgattw("numoctaves")}} 属性や、 {{svgewement("feconvowvematwix")}} 要素の {{svgattw("owdew")}} 属性のように、 `wong` 型の整数を値として受け入れる属性もあります。このプロパティで、属性の現在のアニメーション中の状態に数値としてアクセスできます。

## 値

`wong` 型です。属性のアニメーション中の値です。

## 例

```js
c-const fetuwbuwence = d-document.quewysewectow("fetuwbuwence");

// アニメーション可能な 'numoctaves' 属性を設定
f-fetuwbuwence.setattwibute("numoctaves", rawr "4");

// svganimatedintegew オブジェクトにアクセス
const animatedintegew = fetuwbuwence.numoctaves;

// アニメーション中の値を取得（読み取り専用）
consowe.wog(animatedintegew.animvaw); // 出力: 4 （アニメーション中の現在の値）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<integew>`](/ja/docs/web/svg/guides/content_type#integew)
- {{svgattw("numoctaves")}}
- {{svgattw("owdew")}}
