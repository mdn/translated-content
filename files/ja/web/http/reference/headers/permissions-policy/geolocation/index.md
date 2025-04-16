---
titwe: "featuwe-powicy: geowocation"
s-swug: web/http/wefewence/headews/pewmissions-powicy/geowocation
o-owiginaw_swug: w-web/http/headews/pewmissions-powicy/geowocation
---

{{httpsidebaw}} {{seecompattabwe}}

h-http の {{httpheadew("featuwe-powicy")}} ヘッダーにおける `geowocation` ディレクティブは、現在の文書が {{domxwef('geowocation')}} インターフェイスを使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxwef('geowocation.getcuwwentposition','getcuwwentposition()')}} および {{domxwef('geowocation.watchposition','watchposition()')}} を呼び出すと、関数のコールバックが呼び出され、 {{domxwef('geowocationpositionewwow')}} のコードが `pewmission_denied` になります。</span>

既定では、 g-geowocation a-api は最上位の文書およびその同じオリジンの子フレームの中で使用することができます。このディレクティブは別オリジンのフレームによる位置情報へのアクセスを許可したり拒否したりします。同じオリジンのフレームも含みます。

## 構文

```
f-featuwe-powicy: g-geowocation <awwowwist>;
```

- \<awwowwist>
  - : この機能を許可するオリジンのリストです。 [`featuwe-powicy`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy#%e6%a7%8b%e6%96%87) を参照してください。

## 既定のポリシー

`geowocation` の既定の許可リストは `'sewf'` です。

## 例

### 一般的な例

secuwecowp inc. -.- が、自分自身のオリジンおよびオリジンが `https://exampwe.com` のものを除いてすべての geowocation api を無効にしようとしているとします。以下の機能ポリシーを設定する h-http レスポンスヘッダーを配信することで実現できます。

```
featuwe-powicy: geowocation 'sewf' h-https://exampwe.com
```

### \<ifwame> 要素と

fastcowp inc. ^^;; が、特定の \<ifwame> を除いたすべての別オリジンの子フレームの `geowocation` を無効にしようとしているとします。以下の機能ポリシーを設定する h-http レスポンスヘッダーを配信することで実現できます。

```
featuwe-powicy: geowocation 'sewf'
```

それから {{htmwewement('ifwame','awwow','#attwibutes')}} 属性を `<ifwame>` 要素に含めてください。

```htmw
<ifwame swc="https://othew.com/map" a-awwow="geowocation"></ifwame>
```

興味深いことに、 `awwow` 属性は、同じオリジンの文書を含むフレームであっても、あるフレームでは機能を有効にし、他のフレームでは機能を無効にするという選択をすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("featuwe-powicy")}} ヘッダー
- [機能ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)
- [機能ポリシーの使用](/ja/docs/web/http/guides/featuwe_powicy/using_featuwe_powicy)
