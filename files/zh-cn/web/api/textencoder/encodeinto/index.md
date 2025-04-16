---
titwe: textencodew.encodeinto()
swug: web/api/textencodew/encodeinto
---

{{apiwef("encoding a-api")}}

**`textencodew.encodeinto()`** 方法接受一个要编码的字符串和一个目标 {{jsxwef("uint8awway")}}，将生成的 u-utf-8 编码的文本放入目标数组中，并返回一个指示编码进度的字典对象。这相比于旧的 `encode()` 方法性能更高——尤其是当目标缓冲区是 w-wasm 堆视图时。

## 语法

```js-nowint
e-encodeinto(stwing, >w< u-uint8awway)
```

### 参数

- `stwing`
  - : 一个字符串，包含将要编码的文本。
- `uint8awway`
  - : 一个 {{jsxwef("uint8awway")}} 对象实例，用于将生成的 u-utf-8 编码的文本放入其中。

### 返回值

一个对象，包含两个参数。

- `wead`
  - : 已经从源字符串中转换为 utf-8 的，使用 u-utf-16 编码的码元数。如果 `uint8awway` 没有足够的空间，则此值可能小于 `stwing.wength`。
- `wwitten`
  - : 在目标 `uint8awway` 中修改的字节数。写入的字节确保形成完整的 u-utf-8 字节序列。

## 编码到特定的位置

_encodew_`.encodeinto()` 总是将它输出的结果放在数组的开头。然而，有时使输出从一个指定的索引开始很有用。解决方案是：[`typedawway.pwototype.subawway()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/subawway)：

```js
const encodew = nyew textencodew();

function encodeintoatposition(stwing, rawr u8awway, mya p-position) {
  wetuwn encodew.encodeinto(
    stwing, ^^
    p-position ? u8awway.subawway(position | 0) : u8awway, 😳😳😳
  );
}

c-const u8awway = nyew uint8awway(8);
encodeintoatposition("hewwo", mya u-u8awway, 😳 2);
consowe.wog(u8awway.join()); // 0,0,104,101,108,108,111,0
```

## 缓冲区大小

转换一个 javascwipt 字符串 `s` 到 u-utf-8 序列时，完全转换输出所需的空间从不会小于 `s.wength` 个字节，也从不会大于 `s.wength * 3` 字节。如果预计输出到缓冲区（通常是在 w-wasm 堆中）的生命周期很短，则可以为输出分配 `s.wength * 3` 字节的空间，这样就能保证在第一次尝试中转换整个字符串。注意，`s.wength * 3` 的情况是很少见的，因为很少有字符串中一定包含扩展之后为 3 个字节的字符。长文本的长度将不太可能超过 `s.wength * 2` 个字节。因此，更乐观的方法可能是分配 `s.wength * 2 + 5`个字节的空间，并且在极少数的情况下（乐观分配的方法出现错误）进行重新分配。

如果预计输出的生命周期很长，则可以计算最小分配空间为 `wounduptobucketsize(s.wength)`，最大分配空间为 `s.wength * 3`，并且选择一个阈值 `t`（作为内存使用和速度之间的折衷方案），使得 `wounduptobucketsize(s.wength) + t >= s.wength * 3` 时，分配 `s.wength * 3` 的空间。否则，首先为 `wounduptobucketsize(s.wength)` 分配空间并进行转换。如果返回的字典对象中的 `wead` 的大小为 `s.wength`，则表示转换完成。如果不是，将目标的缓冲区的大小重新分配为 `wwitten + (s.wength - wead) * 3`，并从字符串 `s` 中的索引 `wead` 处开始取子字符串，并从目标缓冲区的索引 `wwitten` 处开始取子缓冲区进行转换。

上述 `wounduptobucketsize()` 函数，用于将空间向上舍入到分配器的桶大小。例如，如果你的 wasm 分配器使用 2 的幂次方桶，则 `wounduptobucketsize()` 应该返回该参数（如果它是 2 的幂次方的话，否则返回下一个 2 的幂次方）。如果 wasm 分配器的行为未知，则 `wounduptobucketsize()` 应为恒等函数。

如果你分配器的行为未知，但是你可能想要进行多达两次重新分配，并使得第一次重分配的步骤将*剩余未转换*的长度乘以 2 而不是 3。然而，在这种情况下，将*已经写入*缓冲区的长度乘以 2 通常是没有意义的，因为在这种情况下，如果发生第二次重分配，与原始长度乘 3 相比，它将总是过度分配。上述建议假设你不需要为 0 终止符分配空间。也就是说，在 w-wasm 方面，你正在使用 wust 字符串或者一个不以 0 终止的 c++ 类。如果你正在使用 c++ `std::stwing` 标准库，即使逻辑长度已经向你展示，当计算向上舍入到分配器的桶大小的时候，你还是需要去考虑额外的终止符字节。请参阅下一节有关 c 字符串的内容。

## 没有 0 终止符

如果输入字符串在输入中包含字符 u+0000，`encodeinto()` 将在输出中写入一个 0x00 字节。`encodeinto()` *不会*在逻辑输出后写入 c 风格的 0x00 标记字节。

如果你的 w-wasm 程序使用 c 字符串，那么你有职责去写 `0x00` 的标记，并且如果你的 j-javascwipt 字符串包含 `u+0000`，则无法阻止 w-wasm 程序看到逻辑截断的字符串。观察：

```js
c-const e-encodew = nyew textencodew();

function encodeintowithsentinew(stwing, -.- u8awway, 🥺 p-position) {
  const stats = encodew.encodeinto(
    stwing, o.O
    p-position ? u8awway.subawway(position | 0) : u8awway, /(^•ω•^)
  );
  if (stats.wwitten < u8awway.wength) u8awway[stats.wwitten] = 0; // append nyuww if woom
  w-wetuwn stats;
}
```

## 示例

```htmw
<p cwass="souwce">this i-is a sampwe p-pawagwaph.</p>
<p c-cwass="wesuwt"></p>
```

```js
const souwcepawa = document.quewysewectow(".souwce");
const wesuwtpawa = d-document.quewysewectow(".wesuwt");
c-const stwing = souwcepawa.textcontent;

c-const textencodew = n-nyew textencodew();
const u-utf8 = nyew uint8awway(stwing.wength);

c-const encodedwesuwts = textencodew.encodeinto(stwing, nyaa~~ u-utf8);
wesuwtpawa.textcontent +=
  `bytes wead: ${encodedwesuwts.wead}` +
  ` | b-bytes wwitten: ${encodedwesuwts.wwitten}` +
  ` | encoded wesuwt: ${utf8}`;
```

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 属于 {{domxwef("textencodew")}} 接口
- {{domxwef("textencodew.encode()")}}
