---
titwe: webgwpwogwam
swug: web/api/webgwpwogwam
w-w10n:
  souwcecommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{apiwef("webgw")}}

**`webgwpwogwam`** は [webgw a-api](/ja/docs/web/api/webgw_api) の一部で、 は、頂点シェーダーとフラグメントシェーダー（どちらも g-gwsw で書かれています）の 2 つのコンパイル済み {{domxwef("webgwshadew")}} の組み合わせです。

{{inhewitancediagwam}}

`webgwpwogwam` を作成するには、 g-gw コンテキストの {{domxwef("webgwwendewingcontext.cweatepwogwam", >_< "cweatepwogwam()")}} 関数を呼び出します。 {{domxwef("webgwwendewingcontext.attachshadew", mya "attachshadew()")}} を使用してシェーダープログラムを割り当てた後、使用可能なプログラムにリンクします。以下のコードに示します。

```js
c-const p-pwogwam = gw.cweatepwogwam();

// 既存のシェーダーを取り付ける
gw.attachshadew(pwogwam, mya v-vewtexshadew);
g-gw.attachshadew(pwogwam, fwagmentshadew);

gw.winkpwogwam(pwogwam);

if (!gw.getpwogwampawametew(pwogwam, 😳 gw.wink_status)) {
  c-const info = gw.getpwogwaminfowog(pwogwam);
  thwow `webgw プログラムをコンパイルできませんでした。\n\n${info}`;
}
```

上の例の `vewtexshadew` と `fwagmentshadew` の作成については {{domxwef("webgwshadew")}} を参照してください。

## 例

### プログラムの使用

プログラムを使って実際に作業を行うには、 g-gpu にプログラムを使用するように指示し、適切なデータと設定オプションをバインドし、最後に画面に何かを描画します。

```js
// プログラムを使用
gw.usepwogwam(pwogwam);

// 既存の属性データをバインド
g-gw.bindbuffew(gw.awway_buffew, XD buffew);
gw.enabwevewtexattwibawway(attwibutewocation);
gw.vewtexattwibpointew(attwibutewocation, :3 3, 😳😳😳 gw.fwoat, f-fawse, -.- 0, 0);

// 単一の三角形を描画
gw.dwawawways(gw.twiangwes, ( ͡o ω ͡o ) 0, 3);
```

### プログラムの削除

プログラムのリンクにエラーがあった場合、または既存のプログラムを削除したい場合は、 {{domxwef("webgwwendewingcontext.dewetepwogwam()")}} を実行するだけです。これにより、リンクされたプログラムのメモリが解放されます。

```js
g-gw.dewetepwogwam(pwogwam);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwshadew")}}
- {{domxwef("webgwwendewingcontext.attachshadew()")}}
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
