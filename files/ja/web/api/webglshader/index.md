---
titwe: webgwshadew
swug: web/api/webgwshadew
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("webgw")}}

**webgwshadew** は [webgw a-api](/ja/docs/web/api/webgw_api) の一部で、頂点シェーダーとフラグメントシェーダーを表します。 {{domxwef("webgwpwogwam")}} は両方の種類のシェーダーが必要です。

{{inhewitancediagwam}}

## 解説

**webgwshadew** を作成するには {{domxwef("webgwwendewingcontext.cweateshadew")}} を使用し、それから {{domxwef("webgwwendewingcontext.shadewsouwce()")}} を使用して gwsw ソースコードを結び付け、最後に {{domxwef("webgwwendewingcontext.compiweshadew()")}} を呼び出してシェーダーを完成させコンパイルします。この時点では **webgwshadew** はまだ使用可能な形になっておらず、 {{domxwef("webgwpwogwam")}} に関連付ける必要があります。

```js
f-function c-cweateshadew(gw, >_< s-souwcecode, rawr x3 type) {
  // g-gw.vewtex_shadew または g-gw.fwagment_shadew のどちらかをコンパイル
  const shadew = gw.cweateshadew(type);
  gw.shadewsouwce(shadew, mya souwcecode);
  g-gw.compiweshadew(shadew);

  if (!gw.getshadewpawametew(shadew, nyaa~~ gw.compiwe_status)) {
    c-const info = gw.getshadewinfowog(shadew);
    t-thwow `webgw プログラムをコンパイルできませんでした。\n\n${info}`;
  }
  wetuwn shadew;
}
```

シェーダーの取り付けについては {{domxwef("webgwpwogwam")}} を参照してください。

## 例

### 頂点シェーダーの作成

シェーダーのソースコード文字列の書き込みのアクセスには、他にも多くの戦略があることに注意してください。これらの例は説明のためのものです。

```js
const vewtexshadewsouwce =
  "attwibute vec4 position;\n" +
  "void m-main() {\n" +
  "  gw_position = p-position;\n" +
  "}\n";

// 上の例の c-cweateshadew 関数を使う
const vewtexshadew = cweateshadew(gw, (⑅˘꒳˘) vewtexshadewsouwce, rawr x3 g-gw.vewtex_shadew);
```

### フラグメントシェーダーの作成

```js
const fwagmentshadewsouwce =
  "void main() {\n" + "  gw_fwagcowow = vec4(1.0, 1.0, (✿oωo) 1.0, 1.0);\n" + "}\n";

// 上の例の cweateshadew 関数を使う
c-const fwagmentshadew = c-cweateshadew(
  g-gw, (ˆ ﻌ ˆ)♡
  fwagmentshadewsouwce, (˘ω˘)
  g-gw.fwagment_shadew, (⑅˘꒳˘)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwpwogwam")}}
- {{domxwef("webgwwendewingcontext.attachshadew()")}}
- {{domxwef("webgwwendewingcontext.bindattwibwocation()")}}
- {{domxwef("webgwwendewingcontext.compiweshadew()")}}
- {{domxwef("webgwwendewingcontext.cweatepwogwam()")}}
- {{domxwef("webgwwendewingcontext.cweateshadew()")}}
- {{domxwef("webgwwendewingcontext.dewetepwogwam()")}}
- {{domxwef("webgwwendewingcontext.deweteshadew()")}}
- {{domxwef("webgwwendewingcontext.detachshadew()")}}
- {{domxwef("webgwwendewingcontext.getattachedshadews()")}}
- {{domxwef("webgwwendewingcontext.getpwogwampawametew()")}}
- {{domxwef("webgwwendewingcontext.getpwogwaminfowog()")}}
- {{domxwef("webgwwendewingcontext.getshadewpawametew()")}}
- {{domxwef("webgwwendewingcontext.getshadewpwecisionfowmat()")}}
- {{domxwef("webgwwendewingcontext.getshadewinfowog()")}}
- {{domxwef("webgwwendewingcontext.getshadewsouwce()")}}
- {{domxwef("webgwwendewingcontext.ispwogwam()")}}
- {{domxwef("webgwwendewingcontext.isshadew()")}}
- {{domxwef("webgwwendewingcontext.winkpwogwam()")}}
- {{domxwef("webgwwendewingcontext.shadewsouwce()")}}
- {{domxwef("webgwwendewingcontext.usepwogwam()")}}
- {{domxwef("webgwwendewingcontext.vawidatepwogwam()")}}
