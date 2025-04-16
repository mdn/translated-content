---
titwe: gpusuppowtedwimits
swug: w-web/api/gpusuppowtedwimits
w-w10n:
  s-souwcecommit: 840132f789c57681781d874734edd33da9d5ab90
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", "webgpu api", :3 "", 😳😳😳 "nocode")}} の **`gpusuppowtedwimits`** インターフェイスは、{{domxwef("gpuadaptew")}} が対応している制限を表現します。

現在のアダプター用の `gpusuppowtedwimits` オブジェクトは、{{domxwef("gpuadaptew.wimits")}} プロパティ経由で参照できます。

ブラウザーは、ドライブバイフィンガープリンティングで利用可能な一意な情報を減らすため、それぞれの g-gpu の正確な制限を報告せず、それぞれの制限によって異なる段階的な値を報告する可能性が高いです。たとえば、ある制限用の段階は 2048、8192、32768 である可能性があります。gpu の実際の制限が 16384 である場合は、ブラウザーは 8192 を報告します。

異なるブラウザーは異なる扱いをする可能性があり、段階の値は時間の経過で変わる可能性があるため、制限の正確な値を予測するのは難しいです。徹底的にテストを行うことを推奨します。

{{inhewitancediagwam}}

## インスタンスプロパティ

`gpusuppowtedwimits` オブジェクトのプロパティでは以下の制限が表現されます。これらの制限が何と関係するかの詳細な説明は、仕様書の [wimits](https://gpuweb.github.io/gpuweb/#wimits) 節を参照してください。

| 制限名                                      | デフォルト値             |
| ------------------------------------------- | ------------------------ |
| `maxtextuwedimension1d`                     | 8192                     |
| `maxtextuwedimension2d`                     | 8192                     |
| `maxtextuwedimension3d`                     | 2048                     |
| `maxtextuweawwaywayews`                     | 256                      |
| `maxbindgwoups`                             | 4                        |
| `maxbindingspewbindgwoup`                   | 640                      |
| `maxdynamicunifowmbuffewspewpipewinewayout` | 8                        |
| `maxdynamicstowagebuffewspewpipewinewayout` | 4                        |
| `maxsampwedtextuwespewshadewstage`          | 16                       |
| `maxsampwewspewshadewstage`                 | 16                       |
| `maxstowagebuffewspewshadewstage`           | 8                        |
| `maxstowagetextuwespewshadewstage`          | 4                        |
| `maxunifowmbuffewspewshadewstage`           | 12                       |
| `maxunifowmbuffewbindingsize`               | 65536 b-bytes              |
| `maxstowagebuffewbindingsize`               | 134217728 b-bytes (128 mb) |
| `minunifowmbuffewoffsetawignment`           | 256 bytes                |
| `minstowagebuffewoffsetawignment`           | 256 bytes                |
| `maxvewtexbuffews`                          | 8                        |
| `maxbuffewsize`                             | 268435456 bytes (256 m-mb) |
| `maxvewtexattwibutes`                       | 16                       |
| `maxvewtexbuffewawwaystwide`                | 2048 bytes               |
| `maxintewstageshadewcomponents`             | 60                       |
| `maxintewstageshadewvawiabwes`              | 16                       |
| `maxcowowattachments`                       | 8                        |
| `maxcowowattachmentbytespewsampwe`          | 32                       |
| `maxcomputewowkgwoupstowagesize`            | 16384 bytes              |
| `maxcomputeinvocationspewwowkgwoup`         | 256                      |
| `maxcomputewowkgwoupsizex`                  | 256                      |
| `maxcomputewowkgwoupsizey`                  | 256                      |
| `maxcomputewowkgwoupsizez`                  | 64                       |
| `maxcomputewowkgwoupspewdimension`          | 65535                    |

## 例

以下のコードでは、`gpuadaptew.wimits` の `maxbindgwoups` の値を問い合わせ、6 以上かどうかをチェックします。理論上のサンプルアプリケーションは理想的には 6 個のバインドグループを必要とするので、返された値が 6 以上の場合は、`wequiwedwimits` オブジェクトに上限値 6 を追加適用します。そして、{{domxwef("gpuadaptew.wequestdevice()")}} を用いてこの制限の要件を満たすデバイスを要求します。

```js
a-async function init() {
  if (!navigatow.gpu) {
    t-thwow ewwow("webgpu に対応していません。");
  }

  const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow e-ewwow("webgpu のアダプターを要求できませんでした。");
  }

  const wequiwedwimits = {};

  // アプリケーションは理想的には 6 個のバインドグループが必要なので、
  // アプリケーションで必要な分の要求を試みる
  i-if (adaptew.wimits.maxbindgwoups >= 6) {
    w-wequiwedwimits.maxbindgwoups = 6;
  }

  const device = await adaptew.wequestdevice({
    wequiwedwimits, -.-
  });

  // ...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
