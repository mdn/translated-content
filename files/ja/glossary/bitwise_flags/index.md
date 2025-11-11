---
title: Bitwise flags (ビットフラグ)
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**ビットフラグ**は変数 (通常はシンプルな整数値) の集合で、メソッドやその他のコードの構造において、特定の使用法や機能を有効にしたり無効にしたりするのに使用できるものです。ビットレベルで操作を行うので、これを高速に効率よくできます。一般的に、同じグループ内の関連するフラグには単一の値 (たとえば、十六進数) の中の異なるビット位置を表す相補的な値が割り当てられるので、単一の値で複数のフラグ設定を表すことができます。

たとえば、{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} では、{{domxref("GPUDevice.createBuffer()")}} メソッドで {{domxref("GPUBuffer")}} オブジェクトを作成します。このメソッドを呼び出す際、ディスクリプターで、バッファーで許される異なる使用法を有効化する 1 個または複数のフラグが入った `usage` プロパティを定義します。

```js
usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
```

これらの値は同じ名前空間内で定義されており、それぞれに十六進数の値があります。

| 使用法フラグ                   | 十六進表現 | 十進数で相当する値 |
| ------------------------------ | ---------- | ------------------ |
| `GPUBufferUsage.MAP_READ`      | 0x0001     | 1                  |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002     | 2                  |
| `GPUBufferUsage.COPY_SRC`      | 0x0004     | 4                  |
| `GPUBufferUsage.COPY_DST`      | 0x0008     | 8                  |
| `GPUBufferUsage.INDEX`         | 0x0010     | 16                 |
| `GPUBufferUsage.VERTEX`        | 0x0020     | 32                 |
| `GPUBufferUsage.UNIFORM`       | 0x0040     | 64                 |
| `GPUBufferUsage.STORAGE`       | 0x0080     | 128                |
| `GPUBufferUsage.INDIRECT`      | 0x0100     | 256                |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200     | 512                |

{{domxref("GPUBuffer.usage")}} プロパティから値を読み出すと、1 個の十進数が返され、これは異なる使用法フラグに対応する異なる十進数の値の和です。上記の例に戻ると、ここで指定した使用法で作成した `GPUBuffer` の `GPUBuffer.usage` から値を読み出すと、以下が返るでしょう。

- `GPUBufferUsage.COPY_SRC` に対応する十進数の 4 に
- `GPUBufferUsage.MAP_WRITE` に対応する十進数の 2 を加え
- 結果は 6

値は異なるフラグから選ばれているため、それぞれの値の組み合わせは一意であり、プログラムは単一の値からどのフラグが設定されているかをすぐに知ることができます。さらに、ビット論理積演算子を用いて合成された値の中でフラグが設定されているかを簡単にチェックできます。

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // バッファーに使用法 MAP_WRITE がある
}
```

## 関連情報

- [Bitwise Flags are Beautiful, and Here's Why](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [ビット演算](https://ja.wikipedia.org/wiki/%E3%83%93%E3%83%83%E3%83%88%E6%BC%94%E7%AE%97) (Wikipedia)
