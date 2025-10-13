---
title: 有损压缩
slug: Glossary/Lossy_compression
l10n:
  sourceCommit: 6f55a0897b5511a2a78bbd70dc611c76eae911ff
---

**有损压缩**，又称为不可逆压缩，是一种数据压缩方法，它使用不精确的近似值和部分数据丢弃来表示内容。简单来说：有损压缩导致原始文件中的数据丢失，可能导致质量下降。这种压缩过程是不可逆的；一旦对内容进行了有损压缩，就无法将内容恢复到原始状态。因此，经过有损压缩的内容通常不应再进一步编辑。

有损压缩在诸如 {{glossary("JPEG")}}、{{glossary("WebP")}} 等图像格式以及音频和视频格式（如 [MP3、MP4、H.264 等](/zh-CN/docs/Web/HTTP/Guides/MIME_types/Common_types)）中被广泛使用。像 {{glossary("WebP")}} 这样的压缩方法可以根据压缩级别或在编码过程中使用的选项进行[无损和有损压缩](https://developers.google.cn/speed/webp/docs/compression)。

![有损压缩的图像](2019-11-18.png)

虽然上述两幅图像的质量没有明显的差异，但第二幅图像的大小因经过了有损压缩而显著减小。

## 参见

- [无损压缩](/zh-CN/docs/Glossary/Lossless_compression)
