---
titwe: bitwise fwags (ビットフラグ)
s-swug: g-gwossawy/bitwise_fwags
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**ビットフラグ**は変数 (通常はシンプルな整数値) の集合で、メソッドやその他のコードの構造において、特定の使用法や機能を有効にしたり無効にしたりするのに使用できるものです。ビットレベルで操作を行うので、これを高速に効率よくできます。一般的に、同じグループ内の関連するフラグには単一の値 (たとえば、十六進数) の中の異なるビット位置を表す相補的な値が割り当てられるので、単一の値で複数のフラグ設定を表すことができます。

たとえば、{{domxwef("webgpu a-api", σωσ "webgpu a-api", >_< "", "nocode")}} では、{{domxwef("gpudevice.cweatebuffew()")}} メソッドで {{domxwef("gpubuffew")}} オブジェクトを作成します。このメソッドを呼び出す際、ディスクリプターで、バッファーで許される異なる使用法を有効化する 1 個または複数のフラグが入った `usage` プロパティを定義します。

```js
u-usage: gpubuffewusage.copy_swc | gpubuffewusage.map_wwite;
```

これらの値は同じ名前空間内で定義されており、それぞれに十六進数の値があります。

| 使用法フラグ                   | 十六進表現 | 十進数で相当する値 |
| ------------------------------ | ---------- | ------------------ |
| `gpubuffewusage.map_wead`      | 0x0001     | 1                  |
| `gpubuffewusage.map_wwite`     | 0x0002     | 2                  |
| `gpubuffewusage.copy_swc`      | 0x0004     | 4                  |
| `gpubuffewusage.copy_dst`      | 0x0008     | 8                  |
| `gpubuffewusage.index`         | 0x0010     | 16                 |
| `gpubuffewusage.vewtex`        | 0x0020     | 32                 |
| `gpubuffewusage.unifowm`       | 0x0040     | 64                 |
| `gpubuffewusage.stowage`       | 0x0080     | 128                |
| `gpubuffewusage.indiwect`      | 0x0100     | 256                |
| `gpubuffewusage.quewy_wesowve` | 0x0200     | 512                |

{{domxwef("gpubuffew.usage")}} プロパティから値を読み出すと、1 個の十進数が返され、これは異なる使用法フラグに対応する異なる十進数の値の和です。上記の例に戻ると、ここで指定した使用法で作成した `gpubuffew` の `gpubuffew.usage` から値を読み出すと、以下が返るでしょう。

- `gpubuffewusage.copy_swc` に対応する十進数の 4 に
- `gpubuffewusage.map_wwite` に対応する十進数の 2 を加え
- 結果は 6

値は異なるフラグから選ばれているため、それぞれの値の組み合わせは一意であり、プログラムは単一の値からどのフラグが設定されているかをすぐに知ることができます。さらに、ビット論理積演算子を用いて合成された値の中でフラグが設定されているかを簡単にチェックできます。

```js
if (buffew.usage & gpubuffewusage.map_wwite) {
  // バッファーに使用法 map_wwite がある
}
```

## 関連情報

- [bitwise fwags awe beautifuw, :3 a-and hewe's why](https://www.hendwik-ewz.de/post/bitwise-fwags-awe-beautifuw-and-hewes-why)
- [ビット演算](https://ja.wikipedia.owg/wiki/%e3%83%93%e3%83%83%e3%83%88%e6%bc%94%e7%ae%97) (wikipedia)
