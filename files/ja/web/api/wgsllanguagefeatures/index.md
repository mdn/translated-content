---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`WGSLLanguageFeatures`** は {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} のインターフェイスで、この WebGPU の実装が対応している [WGSL 言語の拡張](https://gpuweb.github.io/gpuweb/wgsl/#language-extension)を報告する [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトです。

`WGSLLanguageFeatures` オブジェクトは {{domxref("GPU.wgslLanguageFeatures")}} プロパティ経由で参照します。

> [!NOTE]
> この API に対応しているすべてのブラウザーの WebGPU ですべての WGSL 言語の拡張が使えるわけではありません。使うことにした拡張をすべて徹底的にテストすることを推奨します。

{{InheritanceDiagram}}

## 利用可能な機能

以下の WGSL 言語拡張は、WGSL 仕様書の [WGSL 言語拡張](https://gpuweb.github.io/gpuweb/wgsl/#language-extension)<sup>(英語)</sup>で定義されています。利用できる機能の正確な一覧は、実装や物理端末によって異なり、時間経過に伴う変更があります。ご留意ください。

- `packed_4x8_integer_dot_product`
  - : **DP4a**（4 要素の内積および累積）GPU 命令を、WGSL コードから使用することができるようになります。これらは 8 ビット整数の内積を効率的に実行することで計算を高速化し、メモリーやネットワーク帯域幅を節約するとともに、同等の `f32` バージョンと比較してパフォーマンスを改善します。これらは、AI フレームワーク内の機械学習モデルにおける推論処理でよく使用されています。

    特に、`packed_4x8_integer_dot_product` が利用できる場合、WGSL コードでは次のように使用することができます。
    - 32 ビット整数スカラーに 8 ビット整数の 4 要素ベクトルをパックしたもので、内積演算命令の入力として使用されます（`dot4U8Packed()` および `dot4I8Packed()` 組み込み関数を通じて）。
    - 8 ビット整数の 4 要素ベクトルをパックした際の、パックおよび展開の命令（`pack4xI8()` や `pack4xI8Clamp()` などの組み込み関数を通じて）。

- `pointer_composite_access`
  - : これにより、WGSL シェーダーコードでは、データを直接作業する場合でも、そのポインターを作業する場合でも、同じドット (`.`) 構文を使用して、複雑なデータ型の要素にアクセスすることができます。

    `pointer_composite_access` が利用可能なのは次の場合です。
    - `foo` がポインターの場合、`foo.bar` という記述は、`(*foo).bar` を書くよりも便利な方法として利用できます。通常、ポインターを間接参照可能な「参照」に変換するにはアスタリスク (`*`) が必要ですが、これでポインターと参照はほぼ互換性があります。
    - `foo` がポインターでない場合、ドット (`.`) 演算子は、ふだん使われるとおり、メンバーに直接アクセスするものとして動作します。
    - もし `pa` が配列の開始アドレスを格納するために使用されるポインターであるならば、`pa[i]` によって、その配列の `i` 番目の要素が格納されているメモリー位置に直接アクセスすることができます。

    詳細や例については、[WGSL における複合体の参照解除のための糖衣構文](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl)<sup>(英語)</sup>を参照してください。

- `readonly_and_readwrite_storage_textures`
  - : 利用できる場合、バインドグループレイアウト内でストレージテクスチャのバインドグループ項目を指定する際、`"read-only"` および `"read-write"` [`storageTexture.access`](/ja/docs/Web/API/GPUDevice/createBindGroupLayout#access) の値を設定することができます。これらにより、WGSL コードでそれぞれストレージテクスチャの読み取り、および読み取り/書き込みが可能になります。

- `subgroup_id`
  - : 利用可能な場合、WGSL [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) および [`num_subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-num_subgroups) 組み込み値が演算シェーダーで使用可能です。これらは、メモリーへのアクセスが重複しないようメモリーをインデックス化することで、サブグループ間での作業スケジューリングのプロセスを改善します。詳細については、[WGSL subgroup_id 拡張機能](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_subgroup_id_extension)をご覧ください。
    > [!NOTE]
    > WGSL の `subgroup_id` 機能を有効にするには、[`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) 拡張機能を {{domxref("GPUDevice")}} で有効にする必要があります（{{domxref("GPUSupportedFeatures")}} を参照してください）。

- `subgroup_uniformity`
  - : 利用可能な場合、サブグループおよびクワッドの組み込み関数に対する同一性分析の範囲を、ワークグループレベルからサブグループレベルに変更します。この機能により、より多くの場合でサブグループの機能が同一であると考えられるようになり、開発者の利便性が改善し、同一性チェックを完全に無効にする必要性が縮小されます。実用的な意味としては、[`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) などの組み込み値を含め、より多くの値がサブグループ一様であると考えてみるようになります。詳細については、[WGSL subgroup_uniformity 拡張機能](https://developer.chrome.com/blog/new-in-webgpu 145#wgsl_subgroup_uniformity_extension)をご覧ください。

- `texture_and_sampler_let`
  - : 利用可能な場合、WGSL シェーダーが `let` 宣言にテクスチャオブジェクトやサンプラーオブジェクトを格納することができるようにします。

- `uniform_buffer_standard_layout`
  - : 利用可能な場合、ユニフォームバッファーはストレージバッファーと同じ[メモリーレイアウトの制約](https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints)を使用します。これにより、両方のバッファー間でデータ構造を共有しやすくなります。つまり、ユニフォームバッファーでは、配列要素を 16 バイト境界に揃えたり、中の構造体のオフセットを 16 バイトの倍数にパディングしたりする必要がなくなります。

    詳細については、[WGSL uniform_buffer_standard_layout 拡張機能](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_uniform_buffer_standard_layout_extension)を参照してください。

- `unrestricted_pointer_parameters`
  - : WGSL 関数へのポインターの引数渡しに関する制限を緩和します。対応していれば、以下をすることができるようになります。
    - ユーザー定義関数に渡す、ストレージ、ユニフォーム、およびワークグループの空間への引数ポインター。
    - ユーザー定義関数に渡す構造体のメンバーや配列要素のポインター。

      詳細については、[関数の引数としてのポインター](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/)<sup>(英語)</sup>を参照してください。

## インスタンスプロパティ

以下のプロパティは、すべての読み取り専用の [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトで使用可能です。

- {{jsxref("Set.prototype.size", "size")}}
  - : 集合に含まれる値の数を返します。

## インスタンスメソッド

以下のメソッドは、すべての読み取り専用の [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトで使用可能です。

- {{jsxref("Set.prototype.has()", "has()")}}
  - : 指定の値の要素が集合に含まれるか否かを表す論理値を返します。
- {{jsxref("Set.prototype.values()", "values()")}}
  - : 集合内の各要素の **値** を挿入した順に出力する新しいイテレーターオブジェクトを返します。
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : {{jsxref("Set.prototype.values()", "values()")}} の別名です。
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : 集合内の各要素に対応する **配列 `[value, value]`** が挿入した順に含まれる新しいイテレーターオブジェクトを返します。
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : 集合内の各要素について挿入した順に指定のコールバック関数を 1 度ずつ呼び出します。

## 例

### 拡張機能が利用可能かどうかをチェック

```js-nolint
if (
  navigator.gpu.wgslLanguageFeatures.has(
    "readonly_and_readwrite_storage_textures",
  )
) {
  console.log("読み取り専用および読み書き用のストレージテクスチャが利用可能です。");
}
```

### 集合のサイズを返し、その値を反復処理する

```js
const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// 集合のサイズを返す
console.log(wgslFeatures.size);

// values() を用いて集合のすべての値を走査する
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
